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
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { forEach } from '@angular-devkit/schematics';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
// import { IfStmt } from '@angular/compiler';
// import { string } from '@amcharts/amcharts4/core';
export const MY_FORMATS = {


  parse: {

    dateInput: "YYYY-MM-DD"

  },

  display: {
    dateInput: "dddd, MMMM D YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD HH:mm:ss",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
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
  CalenderScheduletaskevent: any[] = [];
  Selecteddaate: any
  _arrayObj: any;
  StartTimearr: any = [];
  EndTimearr: any = [];
  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string; days
  AllocatedHours: number;
  St_date: string = "";
  Ed_date: string;
  _status: string;
  Allocated_subtask: number;
  SubmissionName: string;
  _Exec_BlockName: string = "";
  day: boolean = false;
  ScheduleType: any;
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
  // calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  // calendarEvents: EventInput[] = [];
  //For dates
  daysSelected: any[] = [];
  selectdaytime: any[] = [];
  daysSelectedII: any[] = [];
  singleselectarry: any[] = [];
  Doubleselectedday: any[] = [];
  Avaliabletime: any[] = [];
  Timechangearry: any[] = [];
  event: any;
  selected: Date | null;
  minDate = moment().format("YYYY-MM-DD").toString();
  maxDate = "";


  // minDate = "2022-11-01";
  // maxDate = "2022-11-30";
  selecteddays: any[] = [];
  timeslotsavl: any[] = [];
  isChecked: string
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  Checkdatetimejson: any = [];
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
  doubleclickdate: any;
  preventSingleClick = false;
  timer: any;
  delay: Number;
  _objStatusDTO: StatusDTO;
  Project_Mode: string = "My";
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
  _raciDetails: boolean = true;
  Memos_List: any;
  _ActualMemoslist: any;
  _MemosNotFound: string = "";
  _JsonString: any;
  _MemosSubjectList: any;
  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _displayProjName: string;
  _DBMemosIDList: any;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  Selected_Projectcode: string;
  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;
  SearchMemo: string;
  page_Name: string = "ViewProjects";
  _Message: string;
  slottime: string;
  _AssignedProjectsList: any;
  memoId: any;
  Projecttype: any;
  _selectedId = 0;
  _SecondSelectedId = 0;
  _total = 14;
  _firstClick: number = 0;
  Title_Name: any;
  Link_Type: any;
  Location_Type: any;
  Latitude_Type: any;
  Longtitude_Type: any;
  Description_Type: any;
  DMS_Name: any;
  User_Name: any;
  EventNumber: any;
  _EmployeeListForDropdown: any[] = [];
  loadAPI: Promise<any>;
  dropdownSettings_Emp: IDropdownSettings = {};
  ngEmployeeDropdown: any;
  ngEmployeeDropdown2: any = [];
  EmployeeDropdown: string;
  monthdates: any[] = [];
  Scheduledjson: any[] = [];
  EventScheduledjson: any[] = [];
  Project_NameScheduledjson: any[] = [];
  portfolio_Scheduledjson: any[] = [];
  User_Scheduledjson: any[] = [];
  DMS_Scheduledjson: any[] = [];
  Portfolio: any;
  Portfoliolist_1: [];
  Note_deadlineexpire: boolean;
  MinLastNameLength: boolean;
  _SelectedEmployees: any = [];
  _SelectedEmpIds_String: string;
  SelectDms: any;
  _StartDate: any;
  _EndDate: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',

        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  _hrtime: any;
  _subname: boolean;
  _subname1: boolean;
  constructor(public service: ProjectTypeService,
    //private loadingBar: LoadingBarService,
    private router: Router,
    public dateAdapter: DateAdapter<Date>,
    public datepipe: DatePipe, public dialog: MatDialog,
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
    this._subname = false;
    this._subname1 = false;
  }
  ngOnInit() {
    
    

    // this.calendar.updateTodaysDate();
    this.calendarOptions = {
      initialView: 'listMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      themeSystem: "solar",
      weekNumbers: true,
      eventClick: this.handleEventClick.bind(this),
      events: this.Scheduledjson,
      dayMaxEvents: 4,
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short'
      },
      nowIndicator: true,
      allDaySlot: false
    };

    this.MinLastNameLength = true;
    this._subname = false;
    this._subname1 = false;
    this.TImetable();

    // this._hrtime = parseInt(moment(new Date()).format("HH"));
    // this.Startts = this._hrtime.toString() + ':00';
    // this.Endtms = this._hrtime.toString() + ':15';
    this.ScheduleType = "Create"
    this.GetProjectAndsubtashDrpforCalender();
    this.GetTimeslabfordate();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.typetext = "This Project consists of Core/Secondary Projects";
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.CurrentUser_fullname = localStorage.getItem("UserfullName");
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
        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
        this.TotalExpiryPortfolio = data[0]['DelayCount'];
        if (this._ListProjStat.length == 0) {
          this.messageForEmpty = false;
        }
        else {
          this.messageForEmpty = true;
        }
      });
    //Get Schedule Json on calender
    this.GetScheduledJson();
    this.maxDate = moment(moment().add(90, 'days')).format("YYYY-MM-DD").toString();
    //this.userProjects();
    // $('.eventfc').on('click', function () {
    //   $('.eve-modal').addClass('open');
    // });
    // $(document).on("click", function (e) {
    //   if ($(e.target).is(".eve-modal") === false) {
    //     $('.bg-ovr').removeClass('d-block');
    //   $('.side_view').removeClass('position-fixed');

    //   }
    // });
    this.GetMemosByEmployeeId();
    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().format("YYYY-MM-DD").toString();
    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(this._StartDate);
    this.singleselectarry.push(this._StartDate);
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = this._StartDate;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    this.daysSelectedII.push(jsonData)
    this.Checkdatetimetable(this.daysSelectedII);
    this.calendar.updateTodaysDate();
  }

  closeevearea() {
    $('.bg-ovr').removeClass('d-block');
    $('.side_view').removeClass('position-fixed');

  }
  // Scheduling Work
  // Start Here


  LastLengthValidation11() {
    if (this.Title_Name.trim().length < 3) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }
  TImetable() {
    let _shr = moment(new Date()).format("HH");
    let _s = parseInt(moment(new Date()).format("mm"));

    if (_s >= 0 && _s < 15) {
      this.Startts = _shr.toString() + ':30';
      this.Endtms = _shr.toString() + ':45';
    }
    else if (_s >= 15 && _s < 30) {
      this.Startts = _shr.toString() + ':45';
      this.Endtms = (parseInt(_shr) + 1).toString() + ':00';
    }
    else if (_s >= 30 && _s < 45) {
      this.Startts = (parseInt(_shr) + 1).toString() + ':00';
      this.Endtms = (parseInt(_shr) + 1).toString() + ':15';
    }
    else if (_s >= 45 && _s < 59) {
      this.Startts = (parseInt(_shr) + 1).toString() + ':15';
      this.Endtms = (parseInt(_shr) + 1).toString() + ':30';
    }
  }
  OnSubmitSchedule() {
    if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
      this._subname1 = true;
      return false;
    }
    if (this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) {
      this._subname = true;
      return false;
    }
    var now = new Date();
    let timestamp = "";
    timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
      + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
    this.EventNumber = timestamp;
    let finalarray = [];
    finalarray = this.daysSelectedII.filter(x => x.IsActive == false);
    // alert(finalarray.length)
    if (finalarray.length > 0) {
      finalarray.forEach(element => {
        var columnName = "Emp_No";
        element[columnName] = this.Current_user_ID;
        var columnNames = "ScheduleType";
        element[columnNames] = this.ScheduleType == "Task" ? 1 : 2;

        var columnName = "Title_Name";
        element[columnName] = this.Title_Name;
        var columnName = "MasterCode";
        element[columnName] = this.MasterCode.toString();
        // var columnName = "Link_Type";
        // element[columnName] = this.Link_Type == undefined ? "" : this.Link_Type;
        var columnName = "User_Name";
        element[columnName] = this._SelectedEmpIds_String == undefined ? "" : this._SelectedEmpIds_String;
        var columnName = "Location_Type";
        element[columnName] = this.Location_Type == undefined ? "" : this.Location_Type;
        var columnName = "Description";
        element[columnName] = this.Description_Type == undefined ? "" : this.Description_Type;
        var columnName = "Subtask";
        element[columnName] = this.Subtask == undefined ? "" : this.Subtask;
        var columnName = "EventNumber";
        element[columnName] = this.ScheduleType == "Task" ? 0 : this.EventNumber;
        var columnName = "Portfolio_name";
        element[columnName] = this.Portfolio == undefined ? "" : this.Portfolio.toString();
        var columnName = "DMS_Name";
        element[columnName] = this.SelectDms == undefined ? "" : this.SelectDms.toString();

      });

      this._calenderDto.ScheduleJson = JSON.stringify(finalarray);

      console.log(JSON.stringify(finalarray), "finalarray")
      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {
          console.log(data, "m");
          this._Message = data['message'];
          this.notifyService.showSuccess(this._Message, "Success");
          this.GetScheduledJson();
          this.Title_Name = null;
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.MasterCode = null;
          this.Subtask = null;
          this.Startts = null;
          this.Endtms = null;
          this.St_date = "";
          this.Ed_date = null;
          this._status = null;
          this.SelectDms = null;
          this.Location_Type = "";
          this.Allocated_subtask = null;
          this.Projectstartdate = "";
          this.projectEnddate = null;
          this.Status_project = null;
          this.AllocatedHours = null;
          this.daysSelectedII = [];
          this.Avaliabletime = [];
          this.timeslotsavl = [];
          this.singleselectarry = [];
          this.daysSelected = [];
          this.selected = null;
          this.TImetable();
          this.Portfolio = null;
          this.minDate = moment().format("YYYY-MM-DD").toString();;
          this.maxDate = null;
          this.calendar.updateTodaysDate();

        });


    }
    else {
      alert('Please Select Valid Date and Time');
    }

  }
  Task_type(value) {
    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    if (value == 1) {
      this.ScheduleType = "Task";
      document.getElementById("subtaskid").style.display = "block";
      // document.getElementById("Link_Name").style.display = "none";
      document.getElementById("Guest_Name").style.display = "none";
      document.getElementById("Location_Name").style.display = "none";
      document.getElementById("Descrip_Name").style.display = "none";
      document.getElementById("core_viw123").style.display = "block";
      document.getElementById("core_viw121").style.display = "none";
      document.getElementById("core_viw222").style.display = "none";
      document.getElementById("core_Dms").style.display = "none";
    }
    else {
      this.ScheduleType = "Event";

      document.getElementById("subtaskid").style.display = "none";
      // document.getElementById("Link_Name").style.display = "block";
      document.getElementById("Guest_Name").style.display = "block";
      document.getElementById("Location_Name").style.display = "block";
      document.getElementById("Descrip_Name").style.display = "block";
      document.getElementById("core_viw121").style.display = "block";
      document.getElementById("core_viw123").style.display = "none";
      document.getElementById("core_viw222").style.display = "block";
      document.getElementById("core_Dms").style.display = "block";

    }

  }
  GetSubtasklistfromProject(MasterCode) {
    this.BlockNameProject.forEach(element => {

      if (element.Project_Code == MasterCode) {

        this.Projectstartdate = element.StatDate;
        this.projectEnddate = element.Enddate;
        this.Status_project = element.Status;
        this.AllocatedHours = element.Allocated;
        var number = this.calculateDiff(this.projectEnddate);
        const format2 = "YYYY-MM-DD"
        if (number >= 90) {

          this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
          this.Note_deadlineexpire = false;
        }
        else {
          if (number < 0) {
            if (this.ScheduleType == "Task") {
              this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
              this.Note_deadlineexpire = true;
            }
            else {
              this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
            }
          }
          else {
            this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
            this.Note_deadlineexpire = false;
          }
        }
      }

    });
    if (MasterCode != undefined) {
      this._calenderDto.Project_Code = MasterCode;
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          console.log(data);
          this.BlockNameProject1 = JSON.parse(data['Projectlist']);
        });

      this.BlockNameProject.forEach(element => {
        if (element.Project_Code == MasterCode) {
          this._Exec_BlockName = element.Exec_BlockName;
          this.SubmissionName = element.Submission;
        }
      });
      if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List" || this._Exec_BlockName == "Routine Tasks") {
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
  selectedDay(days) {

    //Checked the day
    let objIndex = this.dayArr.findIndex((obj => obj.value == days.target.value));
    this.dayArr[objIndex].checked = days.target.checked;
    const format2 = "YYYY-MM-DD";
    //Get dates by selected day
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    var result = [];
    for (let index = 0; index < this.dayArr.length; index++) {
      if (this.dayArr[index].checked) {
        const day = parseInt(this.dayArr[index].value);
        // start = start.subtract(7, "days");
        var current = start.clone();
        while (current.day(7 + day).isSameOrBefore(end)) {
          let _d = new Date(current.clone().format(format2));
          let _d1 = new Date(start.format(format2));

          if (_d >= _d1) {
            result.push(current.clone());
          }

        }
      }
    }



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
    this.calendar.updateTodaysDate();
    this.Checkdatetimetable(this.daysSelectedII);
  }

  selectStartDate(event) {
    this._StartDate = event.value;
    let sd = event.value.format("YYYY-MM-DD").toString();
    this._EndDate = event.value.format("YYYY-MM-DD").toString();
    this.minDate = sd;


    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(sd);
    this.singleselectarry.push(sd);

    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = sd;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    this.daysSelectedII.push(jsonData)
    this.Checkdatetimetable(this.daysSelectedII);
    this.calendar.updateTodaysDate();

  }

  selectEndDate(event) {

    this._EndDate = event.value;
    this.maxDate = event.value.format("YYYY-MM-DD").toString();
    let sd = this._StartDate.format("YYYY-MM-DD").toString();

    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(sd);
    this.singleselectarry.push(sd);

    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = sd;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    this.daysSelectedII.push(jsonData)
    this.Checkdatetimetable(this.daysSelectedII);

    this.calendar.updateTodaysDate();
  }

  isSelected = (event: any) => {
    // const date =
    //   event.getFullYear() +
    //   "-" +
    //   ("00" + (event.getMonth() + 1)).slice(-2) +
    //   "-" +
    //   ("00" + event.getDate()).slice(-2);
    var dateObj = new Date(event);
    var momentObj = moment(dateObj);
    var date = momentObj.format('YYYY-MM-DD');

    //return this.daysSelected.find(x => x == Date) ? "selected" : null;
    return this.daysSelectedII.find(x => x.Date == date && x.IsActive == false) ? "selected" :
      this.daysSelectedII.find(y => y.Date == date && y.IsActive == true) ? "selectedinvalid" : null;
  };
  select(event: any) {

    //Tue Dec 20 2022 00:00:00 GMT+0530 (India Standard Time)
    this.preventSingleClick = false;
    const delay = 200;
    // const date = event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
    // var dateString = 'Thu Jul 15 2016 19:31:44 GMT+0200 (CEST)';
    var dateObj = new Date(event);
    var momentObj = moment(dateObj);
    var date = momentObj.format('YYYY-MM-DD');
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
          const found = this.Timechangearry.some(el => el.Date === element);
          if (found) {
            this.Timechangearry.forEach(element2 => {
              if (element2.Date == element) {

                var jsonData = {};
                var columnName = "Date";
                jsonData[columnName] = element2.Date;
                var columnNames = "StartTime";
                jsonData[columnNames] = element2.StartTime;
                var columnNamee = "EndTime";
                jsonData[columnNamee] = element2.EndTime;
                this.daysSelectedII.push(jsonData)
              }
            });
          }
          else {
            var jsonData = {};
            var columnName = "Date";
            jsonData[columnName] = element;
            var columnNames = "StartTime";
            jsonData[columnNames] = this.Startts;
            var columnNamee = "EndTime";
            jsonData[columnNamee] = this.Endtms;
            this.daysSelectedII.push(jsonData);
          }
        });
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
        console.log("First value Array" + JSON.stringify(this.daysSelectedII))
      });
  }
  Doubleclick(event: any) {
    this.preventSingleClick = true;
    clearTimeout(this.timer);

    this._calenderDto.Scheduled_date = this.doubleclickdate;
    this.CalenderService.NewGetScheduledtime(this._calenderDto).subscribe
      ((data) => {
        this.Avaliabletime = JSON.parse(data["AvailableSlotsJson"]);
        // this._total = this.Avaliabletime[0].SlotsJson.length;
        this.timeslotsavl = [];


      })
    // const date=event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);

    console.log(event)
    this.calendar.updateTodaysDate();

  }
  getavltime(e) {
    this.timeslotsavl = [];
    this.timeslotsavl.push(this.Avaliabletime.find(i => i.count === parseInt(e.target.value)));
    this._selectedId = 0;
    this._SecondSelectedId = 0;
    this.timeslotsavl.forEach(element => {
      this._total = element.SlotsJson.length;
    });
  }

  GetProjectAndsubtashDrpforCalender() {

    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {

        // console.log(data)
        this.BlockNameProject = JSON.parse(data['Projectlist']);

        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);


        // this.BlockNameProject = data as [];
        this.dropdownSettings_Emp = {
          singleSelection: false,
          idField: 'Emp_No',
          textField: 'TM_DisplayName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 5,
          allowSearchFilter: true,
          closeDropDownOnSelection: true
        }
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);

      })

  }
  EmployeeOnSelect(obj) {
    // this.selectedEmpNo = obj['Emp_No'];
    this.User_Name = obj;
  }
  GetTimeslabfordate() {
    this._calenderDto.minutes = 15;
    // this._hrtime = parseInt(moment(new Date()).format("HH"));
    // this.Startts = this._hrtime.toString() + ':00';
    this._calenderDto.StartTime = "08:00";
    this._calenderDto.EndTime = "23:00";

    this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe
      ((data) => {

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

    this.daysSelectedII = [];
    this.daysSelected.forEach(element => {
      const found = this.Timechangearry.some(el => el.Date === element);
      if (found) {
        this.Timechangearry.forEach(element2 => {
          if (element2.Date == element) {

            var jsonData = {};
            var columnName = "Date";
            jsonData[columnName] = element2.Date;
            var columnNames = "StartTime";
            jsonData[columnNames] = this.Startts;
            var columnNamee = "EndTime";
            jsonData[columnNamee] = this.Endtms;
            this.daysSelectedII.push(jsonData)
          }
        });
      }
      else {
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = element;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        this.daysSelectedII.push(jsonData);
      }
    });
    this.Checkdatetimetable(this.daysSelectedII);
    this.calendar.updateTodaysDate();
  }
  addendtime(TSEnd) {

    this.Endtms = TSEnd;
    if (this.Startts > this.Endtms) {
      this.Endtms = this.Startts;
    }

    this.daysSelectedII = [];
    this.daysSelected.forEach(element => {
      const found = this.Timechangearry.some(el => el.Date === element);
      if (found) {
        this.Timechangearry.forEach(element2 => {
          if (element2.Date == element) {

            var jsonData = {};
            var columnName = "Date";
            jsonData[columnName] = element2.Date;
            var columnNames = "StartTime";
            jsonData[columnNames] = this.Startts;
            var columnNamee = "EndTime";
            jsonData[columnNamee] = this.Endtms;
            this.daysSelectedII.push(jsonData)
          }
        });
      }
      else {
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = element;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        this.daysSelectedII.push(jsonData);
      }
    });
    this.Checkdatetimetable(this.daysSelectedII);
    this.calendar.updateTodaysDate();

  }
  TimeClick(id, stime) {

    if (this._selectedId == 0) {
      $('.wp-100 .active').removeClass('active');
      $('#div_' + id).children('.time-slt-card').addClass('active');
      this._selectedId = id;
      this.slottime = stime;
    }
    else if (this._SecondSelectedId == 0) {
      this._SecondSelectedId = id;

      for (var i = 1; i <= this._SecondSelectedId; i++) {
        if (i > this._selectedId) {
          $('#div_' + i).children('.time-slt-card').addClass('active');
        }

      }

      this.daysSelectedII.forEach(element => {
        if (element.Date == this.doubleclickdate) {
          element.StartTime = this.slottime;
          element.EndTime = stime;
          element.IsActive = false;
        }
      });
      // console.log("Updated Array"+JSON.stringify(this.daysSelectedII))
      const found = this.Timechangearry.some(el => el.Date === this.doubleclickdate);
      if (!found) {
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = this.doubleclickdate;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.slottime;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = stime;
        this.Timechangearry.push(jsonData)
      }
      else {
        this.Timechangearry.forEach(element => {
          if (element.Date == this.doubleclickdate) {
            element.StartTime = this.slottime;
            element.EndTime = stime;
          }
        });
      }
      console.log("Updated Array" + JSON.stringify(this.Timechangearry))
      this.calendar.updateTodaysDate();
      this._selectedId = 0;
      this._SecondSelectedId = 0;
      $('.wp-100 .time').removeClass('time');
    }
    else {
      this._selectedId = id;
      this._SecondSelectedId = 0;
      this._firstClick = 0;
      $('.wp-100 .active').removeClass('active');
      $('.wp-100 .time').removeClass('time');
      $('#div_' + id).children('.time-slt-card').addClass('active');
    }
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });


    // var _selectedId = this._selectedId;
    // var _SecondSelectedId = this._SecondSelectedId;
    // var _total = 14;
    // if (this._firstClick == 0) {

    //   $('table tr td').on("mouseenter", function () {

    //     if (_selectedId != 0 && _SecondSelectedId == 0) {
    //       for (var i = 1; i <= _total; i++) {
    //         if (i > _selectedId) {
    //           $('#div_' + i).children('.time-slt-card').addClass('time');
    //         }
    //         if ((parseInt(this.id) == i) && (i > _selectedId)) {
    //           $('#div_' + i).children('.time-slt-card').addClass('time');
    //           return false;
    //         }
    //       }
    //     }
    //   }).on("mouseleave", function () {
    //     if (_selectedId != 0) {
    //       for (var i = 1; i <= _total; i++) {
    //         if (i > _selectedId) {
    //           $('#div_' + i).children('.time-slt-card').removeClass('time');
    //         }
    //       }
    //     }
    //   });
    // }
    // this._firstClick = 1;
  }
  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "../../../assets/js/timehover.js",
      ];
      // var dynamicScripts = [
      //   environment.assetsurl + "../../../assets/js/dashboard/jquery.knob.min.js",
      //   environment.assetsurl + "assets/js/dashboard/jquery.peity.min.js",
      //   environment.assetsurl + "assets/js/dashboard/main.js"
      // ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  SelectDropDown(val) {

    if (val.value == 2) {
      document.getElementById("weekly_121").style.display = "block";

    }
    else if (val.value == 1) {
      document.getElementById("weekly_121").style.display = "none";

      var start = moment(this.minDate);
      var end = moment(this.maxDate);
      const format2 = "YYYY-MM-DD";

      const d1 = new Date(moment(start).format(format2));
      const d2 = new Date(moment(end).format(format2));
      const date = new Date(d1.getTime());
      this.daysSelectedII = [];
      const dates = [];

      while (date <= d2) {

        dates.push(moment(date).format(format2));

        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = (moment(date).format(format2));
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        this.daysSelectedII.push(jsonData);

        date.setDate(date.getDate() + 1);
      }
      this.daysSelected = dates;
      this.Checkdatetimetable(this.daysSelectedII);
      this.calendar.updateTodaysDate();
    }
    else if (val.value == 3) {
      document.getElementById("weekly_121").style.display = "none";
      const format2 = "YYYY-MM-DD";
      var start = moment(this.minDate);
      const d1 = new Date(moment(start).format(format2));
      var end = moment(this.maxDate);

      const d2 = new Date(moment(end).format(format2));
      const date = new Date(d1.getTime());
      if (this.daysSelectedII.length > 0) {
        var date1 = new Date(), y = date1.getFullYear(), m = date1.getMonth();
        var lastDay = new Date(y, m + 1, 0);
        // monthdates
        const enddate = new Date(moment(lastDay).format(format2));
        this.daysSelectedII.forEach(element => {
          var exist = moment(element.Date).isBetween(d1, enddate);
          if (exist) {
            const d22 = new Date(moment(end).format(format2));
            const d12 = new Date(moment(element.Date).format(format2));
            d12.setMonth(d12.getMonth() + 1);
            while (d12 <= d22) {
              var jsonData = {};
              var columnName = "Date";
              jsonData[columnName] = moment(d12).format(format2);
              var columnNames = "StartTime";
              jsonData[columnNames] = this.Startts;
              var columnNamee = "EndTime";
              jsonData[columnNamee] = this.Endtms;
              this.daysSelectedII.push(jsonData);
              this.daysSelected.push(moment(d12).format(format2))
              d12.setMonth(d12.getMonth() + 1);
            }
          }
        });
      }
      else {
        document.getElementById("weekly_121").style.display = "none";

        this.daysSelectedII = [];
        const dates = [];
        while (date <= d2) {
          dates.push(moment(date).format(format2));
          var jsonData = {};
          var columnName = "Date";
          jsonData[columnName] = (moment(date).format(format2));
          var columnNames = "StartTime";
          jsonData[columnNames] = this.Startts;
          var columnNamee = "EndTime";
          jsonData[columnNamee] = this.Endtms;
          this.daysSelectedII.push(jsonData);
          date.setMonth(date.getMonth() + 1);
        }
        this.daysSelected = dates;
      }
      this.Checkdatetimetable(this.daysSelectedII);
      this.calendar.updateTodaysDate();
    }
  }
  OnEmpSelect(emp: string) {

    let arr = [];
    this.EmployeeDropdown = emp['Emp_No'];
    //console.log("Selected Employees---->", JSON.stringify(this.ngEmployeeDropdown));
    this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;

    this.ngEmployeeDropdown2.forEach(element => {
      arr.push({ Emp_No: element.Emp_No })
      this._SelectedEmployees = (arr);
    });
    //Make Comma Separate..
    this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
      return select.Emp_No;
    }).join(',');
  }
  OnEmpDeselect() {
    let arr = [];
    this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;
    this.ngEmployeeDropdown2.forEach(element => {
      arr.push({ Emp_No: element.Emp_No })
      this._SelectedEmployees = arr;
    });
    this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
      return select.Emp_No;
    }).join(',');
  }
  GetClickEventJSON_Calender(arg) {
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "Testing");
         
        this.Project_NameScheduledjson = this.EventScheduledjson[0].Project_code;
        this.portfolio_Scheduledjson =JSON.parse( this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
       
      });
  }

  GetScheduledJson() {
    this._calenderDto.EmpNo = this.Current_user_ID;
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe
      ((data) => {
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        console.log(this.Scheduledjson, "Testing");
        // var _now = moment().format() + "T" + moment().format("hh:mm:ss");
        this.calendarOptions = {
          initialView: 'listMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
          },
          themeSystem: "solar",
          weekNumbers: true,
          eventClick: this.GetClickEventJSON_Calender.bind(this),
          events: this.Scheduledjson,
          dayMaxEvents: 4,
          eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short'
          },
          nowIndicator: true,
          allDaySlot: false,
          // eventClick: function(info) {
          //   alert('Event: ' + info.event.title);
          //   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          //   alert('View: ' + info.view.type);

          //   // change the border color just for fun
          //   info.el.style.borderColor = 'red';
          // }
        };
      });
  }

  public handleAddressChange(address: Address) {
    this.Location_Type = address.formatted_address;
  }
  // start


  pipe = new DatePipe('en-US');
  orgValueChange(event) {

    if (this._EndDate != null) {
      let sd = this._StartDate.format("YYYY-MM-DD").toString();
      let ed = (this._EndDate).format("YYYY-MM-DD").toString();

      this.minDate = sd;
      this.maxDate = ed;
      this.daysSelected = [];
      this.singleselectarry = [];
      this.daysSelectedII = [];
      this.daysSelected.push(sd);
      this.singleselectarry.push(sd);

      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = sd;
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      this.daysSelectedII.push(jsonData)
      this.Checkdatetimetable(this.daysSelectedII);
      this.calendar.updateTodaysDate();

    }
    this.daysSelectedII = [];
  }

  End
  // alert( this.minDate);
  // alert( this.maxDate);
  // alert(this.pipe.transform($event.startDate, 'longDate') + " " + "00:00 AM");
  // alert(this.pipe.transform($event.endDate, 'longDate') + " " + "11:59 PM");
  // End Here
  // Scheduling Work

  handleEventClick(arg) {
    console.log(arg, "ttttt")
    this.ProjectCode = arg.event._def.extendedProps.Schedule_ID;
    alert(arg.event._def.extendedProps.Schedule_ID)
    // this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
    // document.getElementById("mysideInfobar").style.width = "70%";
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }
  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0";
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");

  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

  }
  GetCalendarProjects() {
    let Empno: string = this.Current_user_ID;
    // this.calendarOptions = {
    //   //plugins: [ dayGridPlugin, interactionPlugin ],
    //   initialView: 'dayGridMonth',
    //   headerToolbar: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
    //   },
    //   themeSystem: "solar",
    //   eventClick: this.handleEventClick.bind(this),
    //   events: this._CalendarProjectsList,
    //   dayMaxEvents: 6
    // };

    this.userProjects();
  }
  allProjects() {
    this.Project_Mode = "All";
    // this.LoadingBar.start();
    let Empno: string = this.Current_user_ID;
    this.service._GetCalendarProjects(Empno).subscribe
      ((data) => {
        this._ActualProjectList = data as CompletedProjectsDTO[];
        //Sorting...
        this._CalendarProjectsList = this._ActualProjectList.sort((a, b) => (a.ProjectType > b.ProjectType) ? 1 : -1);
        // this.calendarOptions = {
        //   // plugins: [ dayGridPlugin, interactionPlugin ],
        //   initialView: 'dayGridMonth',
        //   headerToolbar: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        //   },
        //   eventClick: this.handleEventClick.bind(this),
        //   events: this._CalendarProjectsList,
        //   dayMaxEvents: 10,
        // };
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
        // this.calendarOptions = {
        //   //plugins: [ dayGridPlugin, interactionPlugin ],
        //   initialView: 'dayGridMonth',

        //   headerToolbar: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        //   },
        //   themeSystem: 'yeti',

        //   eventClick: this.handleEventClick.bind(this),
        //   events: this._CalendarProjectsList,
        //   dayMaxEvents: 10,
        // };
        // console.log(JSON.stringify(this._CalendarProjectsList),"calendar data");
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
        // this.calendarOptions = {
        //   //plugins: [ dayGridPlugin, interactionPlugin ],
        //   initialView: 'dayGridMonth',
        //   headerToolbar: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        //   },
        //   eventClick: this.handleEventClick.bind(this),
        //   events: this._CalendarProjectsList,
        //   dayMaxEvents: 10,
        // };
      });
  }
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
  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }
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

  GetMemosByEmployeeId() {

    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {

        this.Memos_List = JSON.parse(data['JsonData']);

        console.log(this.Memos_List, "test iiii");

      });
  }
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
  calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }
  // OnSubmitcalender() {

  //   this.SelectStartdate = this.datepipe.transform(this.SelectStartdate, 'MM/dd/yyyy');

  //   this.Selectenddate = this.datepipe.transform(this.Selectenddate, 'MM/dd/yyyy');

  //   this._calenderDto.Emp_No = this.Current_user_ID;
  //   if (this._Exec_BlockName == 'Standard Tasks') {
  //     this._calenderDto.Project_Code = this.MasterCode;
  //     if (this.selectDay == 'S') {
  //       this._calenderDto.Weekday = "Sunday";
  //     }
  //     else if (this.selectDay == 'M') {
  //       this._calenderDto.Weekday = "Monday";
  //     }
  //     else if (this.selectDay == 'T') {
  //       this._calenderDto.Weekday = "Tuesday";
  //     }
  //     else if (this.selectDay == 'W') {
  //       this._calenderDto.Weekday = "Wednesday";
  //     }
  //     else if (this.selectDay == 'Th') {
  //       this._calenderDto.Weekday = "Thursday";
  //     }
  //     else if (this.selectDay == 'F') {
  //       this._calenderDto.Weekday = "Friday";
  //     }
  //     else if (this.selectDay == 'Sa') {
  //       this._calenderDto.Weekday = "Saturday";
  //     }
  //   }
  //   else {
  //     this._calenderDto.Project_Code = this.Subtask;
  //   }

  //   this._calenderDto.Start_date = this.SelectStartdate;
  //   this._calenderDto.End_date = this.Selectenddate;
  //   this._calenderDto.Start_time = this.Startts;
  //   this._calenderDto.End_time = this.Endtms;
  //   // this._calenderDto.Status  = true;

  //   console.log(this._calenderDto.Weekday, "Insert test");
  //   this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
  //     (data => {
  //       console.log(data, "m");
  //       this._Message = data['message'];
  //       this.notifyService.showSuccess(this._Message, "Success");
  //     });

  //   this.MasterCode = null;
  //   this.Subtask = null;
  //   this.Startts = null;
  //   this.Endtms = null;
  //   this.SelectStartdate = null;
  //   this.Selectenddate = null;
  //   this.selectDay = null;

  // }

  openschd() {
    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  closeschd() {

    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

    this.minDate = moment().format("YYYY-MM-DD").toString();;
    this.maxDate = null;
    this.selected = null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._status = null;
    this.Portfolio = null;
    this.Location_Type = "";
    this.Allocated_subtask = null;
    this.Projectstartdate = "";
    this.projectEnddate = null;
    this.Status_project = null;
    this.AllocatedHours = null;
    this.daysSelected = [];
    this.selectdaytime = [];
    this.daysSelectedII = [];
    this.singleselectarry = [];
    this.Avaliabletime = [];
    this.TImetable();
    this.Doubleclick(this.event);
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

  onfocus(val) {
    console.log(val);
  }

}