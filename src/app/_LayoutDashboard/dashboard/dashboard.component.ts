import { Component, Input, OnInit } from '@angular/core';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';
//import { ScriptService } from 'src/app/_Services/script.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

// import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { LinkService } from 'src/app/_Services/link.service';

import * as _ from 'underscore';
import { NotificationService } from 'src/app/_Services/notification.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { CalendarOptions } from '@fullcalendar/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts = [];
  calendarOptions: CalendarOptions;
  _NotificationActivityList: NotificationActivityDTO[];
  _RequestActivity: [];
  _DarActivityList: [];
  Emp_No: string;
  _Notification: any;
  projectactivity_Div: boolean;
  DARactivity_Div: boolean;
  _subtaskDiv: boolean;

  //Portfolio Variables.
  _ListProjStat: StatusDTO[];
  Current_user_ID: any;
  messageForEmpty: boolean;
  myDate: number;
  CurrentUser_fullname: string;
  _ObjCompletedProj: CompletedProjectsDTO;
  _ActualProjectList = [];
  _CalendarProjectsList = {};



  constructor(public service: ProjectTypeService,
    //private loadingBar: LoadingBarService,
    private router: Router,
    private notifyService: NotificationService,
    public _LinkService: LinkService,
  ) {
    this._objStatusDTO = new StatusDTO;
    this._ObjCompletedProj = new CompletedProjectsDTO();
  }


  initials: string;
  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  pCode: string;

  StartDate: string; EndDate: string; ProjectName: string;
  ProjectCode: string; Status: string; ProjectType: string; Owner: string;
  Responsible: string; Autho: string; Coordinator: string; Informer: string;
  Support: string; Description: string; Com_Name: string; Project_Cost: number; Client_Name: string;
  duration: number; SubmissionType1: string; StandardDuration: string;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  MoreDetailsList: any;
  handleEventClick(arg) {
    this.ProjectCode = arg.event._def.extendedProps.Project_Code;
    this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
    document.getElementById("mysideInfobar").style.width = "70%";
  }
  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0";
  }
  _objStatusDTO: StatusDTO;

  ngOnInit() {
    //----Adding One Day---for Date Concept----//
    // var date = new Date();
    // date.setDate(date.getDate() + 1);


    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.CurrentUser_fullname = localStorage.getItem("UserfullName");
    // this.notifyService.showInfo(this.CurrentUser_fullname + ' ' + ' ', 'Login By :');
    // this.notifyService.showSuccess("Successfully", "Logged In");
    this._subtaskDiv = true;
    this.projectactivity_Div = false;
    this.DARactivity_Div = true;

    this.CurrentUser_fullname = localStorage.getItem('UserfullName');
    this.GetDashboardSummary();
    this.service.GetActivities(this.Current_user_ID).subscribe(
      (data) => {
        this._NotificationActivityList = data as NotificationActivityDTO[];
        this._RequestActivity = JSON.parse(this._NotificationActivityList[0]['RequestActivity_Json']);
        this._DarActivityList = JSON.parse(this._NotificationActivityList[0]['DarActivity_Json']);
      });
    this._objStatusDTO.Emp_No = this.Current_user_ID;
    this._objStatusDTO.PageNumber = 1;
    this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
      (data) => {
         console.log("Porfolio Data Dashbaord--->", data);
        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
        //JSON.parse(data[0]['PortfolioList_Json']);
        // data as StatusDTO[];

        // var counts = {};
        // this._ListProjStat.forEach(function (x) { counts[x.Status] = (counts[x.Status] || 0) + 1; });
        this.TotalExpiryPortfolio = data[0]['DelayCount'];
        //console.log("------>",this.TotalExpiryPortfolio)
        if (this._ListProjStat.length == 0) {
          this.messageForEmpty = false;
        }
        else {
          this.messageForEmpty = true;
        }
      });
    //Dashboard_Summary
    this.userProjects();
    // this.GetCalendarProjects();
    // this.LoadingBar.stop();
  }
  GetCalendarProjects() {
    let Empno: string = this.Current_user_ID;
    this.calendarOptions = {
      //plugins: [ dayGridPlugin, interactionPlugin ],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
      },
      themeSystem: "solar",
      eventClick: this.handleEventClick.bind(this),
      events: this._CalendarProjectsList,
      dayMaxEvents: 6,

      //eventDisplay:'auto',
      // displayEventEnd:false,
      // eventOverlap:true,
      //height: '100%',
      //displayEventTime: true,
      //dayMaxEvents: true,
      //dateClick: this.handleDateClick.bind(this),
      // eventColor: '#f9d57f',
      // eventTextColor: '#323232',
      // displayEventEnd: false,
      //  lazyFetching: true,
      //showMore = true,
      // nowIndicator: true,
    };
    // this.service._GetCalendarProjects(Empno).subscribe
    //   ((data) => {
    //     this._ActualProjectList = data as CompletedProjectsDTO[];
    //     this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
    //     //Calendar Options

    //   });
    this.userProjects();
  }
  Project_Mode: string = "My";

  allProjects() {
    this.Project_Mode = "All";
    // this.LoadingBar.start();
    let Empno: string = this.Current_user_ID;
    this.service._GetCalendarProjects(Empno).subscribe
      ((data) => {
        this._ActualProjectList = data as CompletedProjectsDTO[];
        //Sorting...
        this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        this.calendarOptions = {
          // plugins: [ dayGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
          },
          eventClick: this.handleEventClick.bind(this),
          events: this._CalendarProjectsList,
          dayMaxEvents: 10,
        };
      });
    //this.LoadingBar.stop();
  }
  userProjects() {
    this.Project_Mode = "My";
    let Empno: string = this.Current_user_ID;
    this.service._GetCalendarProjects(Empno).subscribe
      ((data) => {
        this._ActualProjectList = data as CompletedProjectsDTO[];
        //Sorting...
        this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        //Filtering
        this._CalendarProjectsList = this._ActualProjectList.filter(
          user => user.TeamRes == this.CurrentUser_fullname);
        this.calendarOptions = {
          //plugins: [ dayGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',

          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
          },
          themeSystem: 'yeti',

          eventClick: this.handleEventClick.bind(this),
          events: this._CalendarProjectsList,
          dayMaxEvents: 10,
        };
      });
    //this.LoadingBar.stop();
  }
  teamProjects() {
    this.Project_Mode = "My Team";
    let Empno: string = this.Current_user_ID;
    this.service._GetCalendarProjects(Empno).subscribe
      ((data) => {
        this._ActualProjectList = data as CompletedProjectsDTO[];
        //Sorting...
        this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        //Filtering
        this._CalendarProjectsList = this._ActualProjectList.filter(
          user => user.ProjectOwner == this.CurrentUser_fullname);
        this.calendarOptions = {
          //plugins: [ dayGridPlugin, interactionPlugin ],
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
          },
          eventClick: this.handleEventClick.bind(this),
          events: this._CalendarProjectsList,
          dayMaxEvents: 10,
        };
      });
  }

  //GetSummaryCounts
  DelayCount: any = sessionStorage.getItem('DelayCount');
  CompletedCount: any = sessionStorage.getItem('CompletedCount');
  TotalExpiryInMonth: any = sessionStorage.getItem('TotalExpiryInMonth');
  TotalExpiryPortfolio: number=0;
  EmployeeVacationInDays: any = sessionStorage.getItem('EmployeeVacationInDays');
  TotalDARSubmitted: any = sessionStorage.getItem('TotalDARSubmitted');
  TodaysDARAchievement: any = sessionStorage.getItem('TodaysDARAchievement');
  TotalDARRejected: any = sessionStorage.getItem('TotalDARRejected');
  YesterdaysDAR_Status: any = sessionStorage.getItem('YesterdaysDAR_Status');
  RejectedCount: any = sessionStorage.getItem('RejectedCount');
  AssignedProjects: any = sessionStorage.getItem('AssignedProjects');

  ProjectsNotStarted: any = sessionStorage.getItem('ProjectsNotStarted');
  ProjectsNotWorking: any = sessionStorage.getItem('ProjectsNotWorking');
  NotificationCount: number = 0;

  _ProjectDataList: any;
  _dashboardData: any;
  GetDashboardSummary() {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service._GetDashboardSummaryCount(this.Emp_No)
      .subscribe((data) => {

        this.DelayCount = data[0]['DelayCount'];
        sessionStorage.setItem('DelayCount', this.DelayCount);

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
        //console.log("counts data------>",data)
      });
  }
  OnClickProjAct() {
    this.projectactivity_Div = false;
    this.DARactivity_Div = true;
  }
  OnClickDarAct() {
    this.projectactivity_Div = true;
    this.DARactivity_Div = false;
  }
  page_Name: string = "ViewProjects";
  //LiveUrl:string="creativeplanner/ViewProjects/";
  UnderApproval_Click() {
    this._ProjectDataList = [];
    let Mode: string = "UnderApproval";

    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }
  Delay_Click() {
    //alert("ok")
    this._ProjectDataList = [];
    let Mode: string = "Delay";

    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    console.log(myurl)
    var myWindow = window.open(myurl);
    myWindow.focus();

  }
  Rejected_Click() {
    this._ProjectDataList = [];
    let Mode: string = "Rejected";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }
  ExpiryInOneMonth_Click() {
    this._ProjectDataList = [];
    let Mode: string = "ExOneMonth";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }
  _AssignedProjectsList: any;
  AssignedTask_Click() {
    let Mode: string = "AssignedTask";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }
  Not_Started() {
    this._ProjectDataList = [];
    let Mode: string = "NotStarted";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }
  Not_Working() {
    this._ProjectDataList = [];
    let Mode: string = "NotWorking";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }
  Portfolio_Click() {
    //this.router.navigate(['/Portfolios/']);
    const Url = 'backend/Portfolio';
    var url = document.baseURI + 'Portfolio';
    var myurl = `${url}`;
    var myWindow = window.open(Url);
    myWindow.focus();
  }

  _raciDetails: boolean = true;
  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }

  Memos_List: any;
  _ActualMemoslist: any;
  _MemosNotFound: string = "";
  _JsonString: any;
  _MemosSubjectList: any;
  GetmemosInSideInfoBar() {
    this._LinkService._GetOnlyMemoIdsByProjectCode(this.pCode).
      subscribe((data) => {
        let Table_data: any = data;
        this._DBMemosIDList = data[0]['JsonData'];
        //console.log("----DBMemlist----->",this._DBMemosIDList);
        // if(this._DBMemosIDList==[]){
        //   this._MemosSubjectList = [];
        //   this._MemosNotFound = "No memos linked";
        // }
        // else{
        //   this._MemosSubjectList = JSON.parse(data[0]['JsonData']);
        // }
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }
  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }
  moreDetails(ProjectCode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }

  // Add Dms and Delete Functionality

  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _displayProjName: string;
  _DBMemosIDList: any;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        this._totalMemos = this._ActualMemoslist.length;
        this.dropdownSettings_Memo = {
          singleSelection: false,
          idField: 'MailId',
          textField: 'Subject',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true
        };
      });
  }
  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  Selected_Projectcode: string;
  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;
  Memo_Select(selecteditems) {
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
  }
  Memo_Deselect() {
    let arr = [];
    this.Empty_MemoDropdown = this.ngDropdwonMemo;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
  }
  SearchMemo: string;

  _onRowClick(projectCode, ProjName) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    this._displayProjName = ProjName;
    this.GetMemosByEmployeeId();
    this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._JsonString = JSON.stringify(data[0]['JsonData']);
          this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
          let arr1: any = this._ActualMemoslist;
          let arr2: any = this._dbMemoIdList;
          this._SelectedIdsfromDb = _.map(arr2, (d) => { return d.MailId });
          this.Memos_List = _.reject(arr1, (d) => {
            var findId = _.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId });
            if (findId) {
              return true;
            }
            else {
              return false;
            }
          })
          let arr = [];
          this._SelectedIdsfromDb.forEach(item => {
            arr.push({ MailId: item })
            this._SelectedIdsfromDb = arr;
          });
          if (this._dbMemoIdList == undefined) {
            this._mappedMemos = 0;
          }
          else {
            this._mappedMemos = this._dbMemoIdList.length;
          }
        }
        else {
          this._mappedMemos = 0;
          // console.log("No Memos linked For This Project...")
        }
      });
    document.getElementById("LinkSideBar").style.width = "360px";
  }
  closeLinkSideBar() {
    document.getElementById("LinkSideBar").style.width = "0";
  }

  AddDms() {
    this._onRowClick(this.ProjectCode, this.ProjectName);
  }
  memoId: any;
  _AddLink() {
    let _ProjectCode: string = this.Selected_Projectcode;
    let appId: number = 101;//this._ApplicationId;
    if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
      this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
    }
    else {
      this.memoId = JSON.stringify(this._SelectedMemos);
    }
    let UserId = this.Current_user_ID;
    if (this._SelectedMemos.length > 0) {
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.GetmemosInSideInfoBar();
          let Returndata: any = data['Message'];
          this.notifyService.showSuccess("", Returndata);
          this.ngDropdwonMemo = [];
          this._SelectedMemos = [];
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
    }
  }

  //Delete Memos 96290  CRS2004
  deleteMemos(memoId, pcode) {
    this._MemosSubjectList = [];
    let _DeleteSelectedMemo = [];
    _DeleteSelectedMemo.push({ MailId: memoId })
    let arr1: any = this._DBMemosIDList;
    let arr2: any = _DeleteSelectedMemo;
    let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
    this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
    this.memoId = JSON.stringify(result);
    let appId: number = 101;
    let UserId = this.Current_user_ID;
    this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
      subscribe((data) => {
        this.UpdateMemos(pcode);
        let Returndata: any = data['Message'];
        this.notifyService.showInfo("", Returndata);
      });
  }
  UpdateMemos(pcode) {
    this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }
  redirectTo_Portfolio(P_id: any, P_Name: string, CreatedName: string) {
    sessionStorage.setItem('portfolioId', P_id);
    sessionStorage.setItem('portfolioname', P_Name);
    sessionStorage.setItem('PortfolioOwner', CreatedName);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }

}

