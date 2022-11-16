import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';
//import { ScriptService } from 'src/app/_Services/script.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import * as moment from 'moment'
// import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { LinkService } from 'src/app/_Services/link.service';
import { CalenderService } from 'src/app/_Services/calender.service';

import * as _ from 'underscore';
import { NotificationService } from 'src/app/_Services/notification.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { CalendarOptions } from '@fullcalendar/angular';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { DatePipe } from '@angular/common';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { forEach } from '@angular-devkit/schematics';


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
  typetext: string;
  //Portfolio Variables.
  _ListProjStat: StatusDTO[];
  Current_user_ID: any;
  messageForEmpty: boolean;
  myDate: number;
  CurrentUser_fullname: string;
  _ObjCompletedProj: CompletedProjectsDTO;
  _ActualProjectList = [];
  _CalendarProjectsList = {};
  disablePreviousDate = new Date();
  _calenderDto: CalenderDTO;
  BlockNameProject: any;
  BlockNameProject1: any;
  Timeslab: any;
  MasterCode: any;
  Subtask: any;
  Startts: any;
  Endtms: any;
  Alltimes: any = [];
  SelectStartdate: any;
  Selectenddate: any;
  selectDay: any;
  selectedadayandtime: any = [];
  Selecteddaate: any
  _arrayObj: any;
  StartTimearr: any = [];
  EndTimearr: any = [];
  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string;
  AllocatedHours: number;
  St_date: string = "";
  Ed_date: string;
  _status: string;
  Allocated_subtask: number;

  SubmissionName: string;
  _Exec_BlockName: string = "";

  day: boolean = false;


  dayArr: any = [
    {
      "Day": "S",
      "value": "0",
      "checked": false
    },
    {
      "Day": "M",
      "value": "1",
      "checked": false
    },
    {
      "Day": "T",
      "value": "2",
      "checked": false
    },
    {
      "Day": "W",
      "value": "3",
      "checked": false
    },
    {
      "Day": "Th",
      "value": "4",
      "checked": false
    },
    {
      "Day": "Fr",
      "value": "5",
      "checked": false
    },
    {
      "Day": "Sa",
      "value": "6",
      "checked": false
    }
  ];

  //For dates
  daysSelected: any[] = [];
  selectdaytime: any[] = [];
  daysSelectedII: any[] = [];
  singleselectarry: any[] = [];
  Doubleselectedday: any[] = [];
  event: any;
  selected: Date | null;
  minDate = moment().format("YYYY-MM-DD").toString();
  maxDate = "";
  // minDate = "2022-11-01";
  // maxDate = "2022-11-30";
  selecteddays: any[] = [];
  isChecked: string
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  Checkdatetimejson: any = [];

  constructor(public service: ProjectTypeService,
    //private loadingBar: LoadingBarService,
    private router: Router,
    public datepipe: DatePipe,
    private notifyService: NotificationService,
    public _LinkService: LinkService, private CalenderService: CalenderService
  ) {
    this._objStatusDTO = new StatusDTO;
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this._calenderDto = new CalenderDTO;
    this.BlockNameProject = [];
    this.BlockNameProject1 = [];
    this.Timeslab = [];
    this.Selecteddaate = this.datepipe.transform(new Date(), 'YYYY/MM/DD');
    // //Get Dates as per day between date range
    // //Add days in an array
    // this.selecteddays.push(3);
    // this.selecteddays.push(2);

    // this.minDate = "2022-11-01";
    // this.maxDate = "2022-11-30";
    // var start = moment(this.minDate);
    // var end = moment(this.maxDate);
    // var result = [];
    // for (let index = 0; index < this.selecteddays.length; index++) {
    //   var day = this.selecteddays[index];
    //   start = start.subtract(7, "days");
    //   var current = start.clone();
    //   while (current.day(7 + day).isSameOrBefore(end)) {
    //     console.log(current);
    //     result.push(current.clone());
    //   }
    // }
    // const format2 = "YYYY-MM-DD"
    // this.daysSelected = result.map(m => moment(m).format(format2));
    // alert(this.daysSelected.length);
  }
  selectedDay(days) {

    //Checked the day
    let objIndex = this.dayArr.findIndex((obj => obj.value == days.target.value));
    this.dayArr[objIndex].checked = days.target.checked;

    //Get dates by selected day
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    var result = [];
    for (let index = 0; index < this.dayArr.length; index++) {
      if (this.dayArr[index].checked) {
        const day = parseInt(this.dayArr[index].value);
        start = start.subtract(7, "days");
        var current = start.clone();
        while (current.day(7 + day).isSameOrBefore(end)) {
          console.log(current);
          result.push(current.clone());
        }
      }
    }

    const format2 = "YYYY-MM-DD";

    //result = result.map(m => moment(m).format(format2));
    // make a Set to hold values from namesToDeleteArr


    // use filter() method
    // to filter only those elements
    // that need not to be deleted from the array


    this.daysSelected = result.map(m => moment(m).format(format2));
    const namesToDeleteSet = new Set(this.daysSelected);
    this.singleselectarry = this.singleselectarry.filter((name) => {
      // return those elements not in the namesToDeleteSet
      return !namesToDeleteSet.has(name);
    });
    this.singleselectarry.forEach(element => {
      this.daysSelected.push(moment(element).format(format2))
    });
    // this.daysSelected.push({ format2 });



    this.daysSelectedII = [];
    this.daysSelected.forEach(element => {

      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = element;
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      this.daysSelectedII.push(jsonData)
    });
    // alert(this.daysSelectedII.length)
    this.calendar.updateTodaysDate();
    this.Checkdatetimetable(this.daysSelectedII);

  }
  isSelected = (event: any) => {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);

    //return this.daysSelected.find(x => x == Date) ? "selected" : null;
    return this.daysSelectedII.find(x => x.Date == date && x.IsActive == false) ? "selected" :
      this.daysSelectedII.find(y => y.Date == date && y.IsActive == true) ? "selectedinvalid" : null;
  };

  doubleclickdate: any;
  preventSingleClick = false;
  timer: any;
  delay: Number;
  select(event: any) {
    this.preventSingleClick = false;
    const delay = 200;

    const date = event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
    this.doubleclickdate = date;
    this.timer = setTimeout(() => {
      if (!this.preventSingleClick) {



        const index = this.daysSelected.findIndex(x => x == date);
        if (index < 0) {

          this.daysSelected.push(date);
          this.singleselectarry.push(date);
        }
        else {
          this.daysSelected.splice(index, 1);
          this.singleselectarry.splice(index, 1);
        }

        this.calendar.updateTodaysDate();
        this.daysSelectedII = [];
        this.daysSelected.forEach(element => {

          var jsonData = {};
          var columnName = "Date";
          jsonData[columnName] = element;
          var columnNames = "StartTime";
          jsonData[columnNames] = this.Startts;
          var columnNamee = "EndTime";
          jsonData[columnNamee] = this.Endtms;

          this.daysSelectedII.push(jsonData)

        });
        //  alert(this.daysSelectedII.length)

        this.Checkdatetimetable(this.daysSelectedII);
        this.calendar.updateTodaysDate();
      }
    }, delay);
  }





  Checkdatetimetable(_array) {
    this._calenderDto.json = JSON.stringify(_array);
    this._calenderDto.EmpNo = this.Current_user_ID;
    this.CalenderService.NewGetcheckdateandtime(this._calenderDto).subscribe
      ((data) => {
        this.daysSelectedII = JSON.parse(data['Checkdatetimejson']);
        this.calendar.updateTodaysDate();
      });

  }
  Doubleclick(event: any) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);
    // const date=event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
 
    console.log(event)
    this.calendar.updateTodaysDate();

  }









  //Testing calendar

  // public CLOSE_ON_SELECTED = false;
  // public init = new Date();
  // public resetModel = new Date(0);
  // public model = [

  // ];
  // @ViewChild('picker', { static: true }) _picker: MatDatepicker<Date>;

  // public dateClass = (date: Date) => {
  //   if (this._findDate(date) !== -1) {
  //     return ['selected'];
  //   }
  //   return [];
  // }

  // public dateChanged(event: MatDatepickerInputEvent<Date>): void {
  //   if (event.value) {
  //     const date = event.value;
  //     const index = this._findDate(date);
  //     if (index === -1) {
  //       this.model.push(date);
  //     } else {
  //       this.model.splice(index, 1)
  //     }
  //     this.resetModel = new Date(0);
  //     if (!this.CLOSE_ON_SELECTED) {
  //       const closeFn = this._picker.close;
  //       this._picker.close = () => { };
  //       this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
  //       setTimeout(() => {
  //         this._picker.close = closeFn;
  //       });
  //     }
  //   }
  // }

  // public remove(date: Date): void {
  //   const index = this._findDate(date);
  //   this.model.splice(index, 1)
  // }

  // private _findDate(date: Date): number {
  //   return this.model.map((m) => +m).indexOf(+date);
  // }


  // Testing calendar

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
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }
  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0";
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("mysideInfobar_schd").style.width = "0";

  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

  }
  _objStatusDTO: StatusDTO;

  ngOnInit() {
    //----Adding One Day---for Date Concept----//
    // var date = new Date();
    // date.setDate(date.getDate() + 1);
    this.GetProjectAndsubtashDrpforCalender();
    this.GetTimeslabfordate();

    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.typetext = "This Project consists of Core/Secondary Projects";
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
        // console.log("Porfolio Data Dashbaord--->", data);
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
  TotalExpiryPortfolio: number = 0;
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



  Projecttype: any;
  GetProjectAndsubtashDrpforCalender() {

    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        // console.log(data)
        this.ProjectCode = data['Project_Code']
        this.BlockNameProject = data as [];
      })

  }
 


  GetTimeslabfordate() {
    this._calenderDto.minutes = 15;
    this._calenderDto.StartTime = "05:00";
    this._calenderDto.EndTime = "22:00";

    this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe
      ((data) => {
        debugger
        this._arrayObj = data as [];
        this._arrayObj.forEach(element => {
          this.EndTimearr.push(element.TSStart);
          this.StartTimearr.push(element.TSStart);
          this.Alltimes.push(element.TSStart);
        });

        console.log(this.EndTimearr[0]);
        console.log("Array" + this.EndTimearr);
      });
  }

  addstarttime(TSStart) {
    this.Alltimes = [];
    this.StartTimearr.forEach(element => {
      this.Alltimes.push(element);
    });
    this.Startts = TSStart;
    let _index = this.StartTimearr.indexOf(TSStart);
    this.EndTimearr = this.Alltimes.splice(_index + 1);
    this.Startts = TSStart;
    this.Endtms = this.EndTimearr[0];
  }

  addendtime(TSEnd) {

    this.Endtms = TSEnd;
    if (this.Startts > this.Endtms) {
      this.Endtms = this.Startts;
    }

  }


  calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }

  GetSubtasklistfromProject(MasterCode) {
    this.BlockNameProject.forEach(element => {
      if (element.Project_Code == MasterCode) {

        this.Projectstartdate = element.StatDate;
        this.projectEnddate = element.Enddate;

        this.Status_project = element.Status;
        this.AllocatedHours = element.Allocated;
        var number = this.calculateDiff(this.projectEnddate)
        if (number >= 90) {

          const format2 = "YYYY-MM-DD"

          this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
        }
        else {
          this.maxDate = this.projectEnddate;
        }
      }

    });
    if (MasterCode != undefined) {
      this._calenderDto.Project_Code = MasterCode;
      // alert(MasterCode);
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          console.log(data);
          this.BlockNameProject1 = data as [];
        });

      this.BlockNameProject.forEach(element => {
        if (element.Project_Code == MasterCode) {
          this._Exec_BlockName = element.Exec_BlockName;
          this.SubmissionName = element.Submission;
        }
      });
      if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List") {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "none";

      }
      else {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "block";
      }
    }
  }

  getChangeSubtaskDetais(Project_Code) {
    this.BlockNameProject1.forEach(element => {

      if (element.Project_Code == Project_Code) {
        this.St_date = element.StatDate;
        this.Ed_date = element.Enddate;
        this._status = element.Status;
        this.Allocated_subtask = element.Allocated
      }
    });


  }

  _Message: string;

  OnSubmitcalender() {

    this.SelectStartdate = this.datepipe.transform(this.SelectStartdate, 'MM/dd/yyyy');

    this.Selectenddate = this.datepipe.transform(this.Selectenddate, 'MM/dd/yyyy');

    this._calenderDto.Emp_No = this.Current_user_ID;
    if (this._Exec_BlockName == 'Standard Tasks') {
      this._calenderDto.Project_Code = this.MasterCode;
      if (this.selectDay == 'S') {
        this._calenderDto.Weekday = "Sunday";
      }
      else if (this.selectDay == 'M') {
        this._calenderDto.Weekday = "Monday";
      }
      else if (this.selectDay == 'T') {
        this._calenderDto.Weekday = "Tuesday";
      }
      else if (this.selectDay == 'W') {
        this._calenderDto.Weekday = "Wednesday";
      }
      else if (this.selectDay == 'Th') {
        this._calenderDto.Weekday = "Thursday";
      }
      else if (this.selectDay == 'F') {
        this._calenderDto.Weekday = "Friday";
      }
      else if (this.selectDay == 'Sa') {
        this._calenderDto.Weekday = "Saturday";
      }
    }
    else {
      this._calenderDto.Project_Code = this.Subtask;
    }

    this._calenderDto.Start_date = this.SelectStartdate;
    this._calenderDto.End_date = this.Selectenddate;
    this._calenderDto.Start_time = this.Startts;
    this._calenderDto.End_time = this.Endtms;
    // this._calenderDto.Status  = true;

    console.log(this._calenderDto.Weekday, "Insert test");
    this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
      (data => {
        console.log(data, "m");
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Success");
      });

    this.MasterCode = null;
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;

  }


  openschd() {
    document.getElementById("mysideInfobar_schd").style.width = "50%";
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }
  SelectDropDown(val) {

    if (val.value == 2) {
      document.getElementById("weekly_121").style.display = "block";
    }
    else {
      document.getElementById("weekly_121").style.display = "none";

    }
  }
  closeschd() {


    document.getElementById("mysideInfobar_schd").style.width = "0%";
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

    this.MasterCode = null;
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = null;
    this.Ed_date = null;
    this._status = null;
    this.Allocated_subtask = null;
    this.Projectstartdate = null;
    this.Projectstartdate = null;
    this.projectEnddate = null;
    this.Status_project = null;
    this.AllocatedHours = null;
    this.daysSelected = [];
    this.selectdaytime = [];
    this.daysSelectedII = [];
    this.singleselectarry = [];
    this.calendar.updateTodaysDate();
    this.dayArr.map((element) => {
      return element.checked = false;;
    });
  }

  showcore() {
    this.typetext = "This Project consists of Core/Secondary Projects";
    document.getElementById("core_viw").classList.add("show");
    document.getElementById("stan_viw").classList.remove("show");
    document.getElementById("sec_viw").classList.remove("show");

    document.getElementById("core_tab").classList.add("btn-light-primary");
    document.getElementById("stan_tab").classList.remove("btn-light-primary");
    document.getElementById("sec_tab").classList.remove("btn-light-primary");


  }

  showstan() {
    this.typetext = "This Project consists of Standard/Routine Task";
    document.getElementById("stan_viw").classList.add("show");
    document.getElementById("sec_viw").classList.remove("show");
    document.getElementById("core_viw").classList.remove("show");

    document.getElementById("stan_tab").classList.add("btn-light-primary");
    document.getElementById("core_tab").classList.remove("btn-light-primary");
    document.getElementById("sec_tab").classList.remove("btn-light-primary");
  }
  showsec() {
    this.typetext = "This Project consists of ToDo Task";
    document.getElementById("sec_viw").classList.add("show");
    document.getElementById("core_viw").classList.remove("show");
    document.getElementById("stan_viw").classList.remove("show");

    document.getElementById("sec_tab").classList.add("btn-light-primary");
    document.getElementById("core_tab").classList.remove("btn-light-primary");
    document.getElementById("stan_tab").classList.remove("btn-light-primary");
  }

}

