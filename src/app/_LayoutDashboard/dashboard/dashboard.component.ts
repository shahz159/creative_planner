import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';
//import { ScriptService } from 'src/app/_Services/script.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import * as moment from 'moment'
// import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
// import { MatDialog } from '@angular/material/dialog';
import { Router, TitleStrategy } from '@angular/router';
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
import { DatePipe, JsonPipe } from '@angular/common';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { forEach } from '@angular-devkit/schematics';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import tippy from 'node_modules/tippy.js';
import Swal from 'sweetalert2';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { validationLatitudeLongitude } from "validation-latitude-longitude";
import { empty } from 'rxjs';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { GuidedTourService, GuidedTour, Orientation, TourStep } from 'ngx-guided-tour';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { ThisReceiver } from '@angular/compiler';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
// import { transition } from '@angular/animations';
// import { getElement } from '@amcharts/amcharts4/core';
// import { ThemeService } from 'ng2-charts';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
// import { IfStmt } from '@angular/compiler';
// import { string } from '@amcharts/amcharts4/core';
declare var $: any;
declare const ApexCharts: any;

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
moment.locale('en');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  template: `{{ myTime | date: 'h:mm a' }}`
})
export class DashboardComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  isClassAdded: boolean = false;
  myTime = new Date();
  posts = [];
  calendarOptions: CalendarOptions;
  _NotificationActivityList: NotificationActivityDTO[];
  _RequestActivity: [];
  _NotificationActivity: [];
  _AlertActivity: [];
  notilength: number;
  Emp_No: string;
  _Notification: any;
  projectactivity_Div: boolean;
  DARactivity_Div: boolean;
  _subtaskDiv: boolean;
  typetext: string;
  Searchword: string
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
  ProjectListArray: any = [];
  BlockNameProject1: any;
  Timeslab: any;
  MasterCode: any = [];
  MasterCode1: any = [];
  Subtask: any;
  Startts: any;
  PropStart: any;
  PurposeEnd: any;
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
  validStartTimearr:any=[];
  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string; 
  AllocatedHours: number;
  St_date: string = "";
  Ed_date: string;
  _status: string;
  Allocated_subtask: number;
  TM_DisplayName: string;
  SubmissionName: string;
  SearchOfPendingItem: any
  SearchOfDraftItem: any;
  SearchOfRequestItem: any;
  _Exec_BlockName: string = "";
  _SEndDate: any;
  day: boolean = false;
  ScheduleType: any;
  dayArr: any = [
    {
      "Day": "S",
      "value": "Sun",
      "checked": false
    },
    {
      "Day": "M",
      "value": "Mon",
      "checked": false
    },
    {
      "Day": "T",
      "value": "Tue",
      "checked": false
    },
    {
      "Day": "W",
      "value": "Wed",
      "checked": false
    },
    {
      "Day": "Th",
      "value": "Thu",
      "checked": false
    },
    {
      "Day": "Fr",
      "value": "Fri",
      "checked": false
    },
    {
      "Day": "Sa",
      "value": "Sat",
      "checked": false
    }
  ];
  MonthArr: any = [
    { "Day": "01", "value": "01", "checked": false },
    { "Day": "02", "value": "02", "checked": false },
    { "Day": "03", "value": "03", "checked": false },
    { "Day": "04", "value": "04", "checked": false },
    { "Day": "05", "value": "05", "checked": false },
    { "Day": "06", "value": "06", "checked": false },
    { "Day": "07", "value": "07", "checked": false },
    { "Day": "08", "value": "08", "checked": false },
    { "Day": "09", "value": "09", "checked": false },
    { "Day": "10", "value": "10", "checked": false },
    { "Day": "11", "value": "11", "checked": false },
    { "Day": "12", "value": "12", "checked": false },
    { "Day": "13", "value": "13", "checked": false },
    { "Day": "14", "value": "14", "checked": false },
    { "Day": "15", "value": "15", "checked": false },
    { "Day": "16", "value": "16", "checked": false },
    { "Day": "17", "value": "17", "checked": false },
    { "Day": "18", "value": "18", "checked": false },
    { "Day": "19", "value": "19", "checked": false },
    { "Day": "20", "value": "20", "checked": false },
    { "Day": "21", "value": "21", "checked": false },
    { "Day": "22", "value": "22", "checked": false },
    { "Day": "23", "value": "23", "checked": false },
    { "Day": "24", "value": "24", "checked": false },
    { "Day": "25", "value": "25", "checked": false },
    { "Day": "26", "value": "26", "checked": false },
    { "Day": "27", "value": "27", "checked": false },
    { "Day": "28", "value": "28", "checked": false },
    { "Day": "29", "value": "29", "checked": false },
    { "Day": "30", "value": "30", "checked": false },
    { "Day": "31", "value": "31", "checked": false }
  ];
  // calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  // calendarEvents: EventInput[] = [];
  //For dates
  AllDatesSDandED: any[] = [];
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
  DelayActionCount: any = sessionStorage.getItem('DelayActionCount');
  CompletedCount: any = sessionStorage.getItem('CompletedCount');
  TotalExpiryInMonth: any = sessionStorage.getItem('TotalExpiryInMonth');
  AssignActionCount: any = sessionStorage.getItem('AssignActionCount');
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
  // Recurr_arr: any = [];
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
  ngEmployeeDropdown1: any = [];
  ngEmployeeDropdown2: any = [];
  EmployeeDropdown: string;
  monthdates: any[] = [];
  Scheduledjson: any[] = [];
  EventScheduledjson: any[] = [];
  Project_NameScheduledjson: any[] = [];
  Project_dateScheduledjson: any[] = [];
  Schedule_type1: any = 'Event';
  Status1: any;
  portfolio_Scheduledjson: any[] = [];
  User_Scheduledjson: any[] = [];
  DMS_Scheduledjson: any = [];
  Portfolio: any = [];
  Portfolio1: any = [];
  Portfoliolist_1: any = [];
  Note_deadlineexpire: boolean;
  MinLastNameLength: boolean;
  _SelectedEmployees: any = [];
  _SelectedEmpIds_String: string;
  SelectDms: any;
  SelectDms1: any;
  Proposedate: any;
  _StartDate: any;
  _EndDate: any;
  display: string;
  progress: number = 0;
  pro_enddate: string;
  Addressurl: string = "";
  selectedrecuvalue: string;
  timearr1: any = [];
  AllEndtime: any = [];
  timingarryend: any = [];
  Time_End: any = [];
  scstartdate: any = new Date();
  showsearch: boolean = false;
  Attachment12_ary: any = [];
  RemovedAttach: any = [];
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        // 'bold',
        // 'italic',
        // 'underline',
        
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        // 'fontName'
      ],
      [
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
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
  Project_Code: string;
  flagevent: number;
  flag_id: number;
  Schedule_ID: number = 0;
  pro_date: any;
  pro_sttime: any;
  pro_edtime: any;
  Event_requests1: any = [];
  EventAction_type: number;
  myFiles: string[] = [];
  _lstMultipleFiales: any;
  f1: any;
  arr: any = [];
  arr1: any = [];
  arr2: any = [];
  editTask: boolean = false;
  copyTask: boolean = false;
  create: boolean = false;
  _FutureEventTasksCount: number = 0;
  _AllEventTasksCount: number = 0;
  _OldRecurranceId: string;
  _OldRecurranceValues: string;
  _Oldstart_date: string;
  _OldEnd_date: string;
  _PopupConfirmedValue: number;
  dmsIdjson: any = [];
  Attachments_ary: any = [];
  Locationfulladd: string;
  ObjSubTaskDTO: SubTaskDTO;
  _onlinelink: boolean = false;
  _meetingroom:boolean=false;
  Link_Details: string;
  _labelName: string;
  timelineList: any;
  timelineType: string;
  type1: string = 'self';
  type2: string = 'racis';
  sortList: any = ['today', 'yesterday', 'this week', 'last week', 'this month', 'last month']
  selectedSort: string;
  yesterday: any;
  timelineDuration: any;
  showtimeline: boolean = true;
  today: any = new Date().toISOString().substring(0, 10);
  timeFrom: any;
  timeTo: any;
  creation_date: string;
  pending_status: boolean;
  pending: boolean;
  notProvided: boolean = false;
  projectsSelected: any = [];
  approvalObj: ApprovalDTO;

  constructor(public service: ProjectTypeService,
    private router: Router,
    public dateAdapter: DateAdapter<Date>,
    public datepipe: DatePipe, public dialog: MatDialog,
    private notifyService: NotificationService,
    public _LinkService: LinkService, private CalenderService: CalenderService,
    private cd: ChangeDetectorRef,
    public BsService: BsServiceService,
    private guidedTourService: GuidedTourService,
    public approvalservice: ApprovalsService,
  ) {
    this._objStatusDTO = new StatusDTO;
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this._calenderDto = new CalenderDTO;
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.BlockNameProject1 = [];
    this.Timeslab = [];
    this.Selecteddaate = this.datepipe.transform(new Date(), 'YYYY/MM/DD');
    this._subname = false;
    this._subname1 = false;
    this._lstMultipleFiales = [];
    this.approvalObj = new ApprovalDTO();

  }
  onKeyPress() {
    // Check if the input field is empty
    if (this.agendaInput===undefined||this.agendaInput.trim() === '') {
      // If input field is empty, remove the class
      this.isClassAdded = false;
    } else {
      // If input field is not empty, add the class
      this.isClassAdded = true;
    }
  }
  ngOnInit() {

    // moment(this.scstartdate, "DD-MM-YYYY")
    this._PopupConfirmedValue = 1;
    this.flagevent = 1;
    this._labelName = "Schedule Date";
    this.timelineType = this.type1;
    this.selectedSort = 'today';
    this.MinLastNameLength = true;
    this.selectedrecuvalue = "0";
    this.display = 'none';
    // this.ProjectListArray = [];
    this.Project_Code = "";
    // this.selectedCar = '3';
    // this.calendar.updateTodaysDate();
    this.calendarOptions = {
      initialView: 'listWeek',
      firstDay: moment().weekday(),
      //  timeZone: 'local',
      //     initialDate:new Date(2023,  ),'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      themeSystem: "solar",
      weekNumbers: true,
      eventClick: this.handleEventClick.bind(this),
      events: this.Scheduledjson,
      dayMaxEvents: 4,
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
        hour12: true
      },
      nowIndicator: true,
      allDaySlot: false
    };

    tippy('#agenda-info-icon', {
      content: "Agenda is mandatory for a meeting, Please provide atleast 1.",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'dark',
      animateFill: true,
      inertia: true,
      placement: 'left'
    });

    this.MinLastNameLength = true;
    this._subname = false;
    this._subname1 = false;
    // this.TImetable();
    this.ScheduleType = "Create"
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
    this._objStatusDTO.Emp_No = this.Current_user_ID;
    this._objStatusDTO.PageNumber = 1;


    //Get Schedule Json on calender
    this.GetScheduledJson();
    this.Getdraft_datalistmeeting();
    this.GetPending_Request();
    this.getMeetingApprovals();
    // this.GetDelay_Actions();
    //Setting recurance max date
    //start
    this.maxDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
    //end

    // this.GetMemosByEmployeeId();
    this._StartDate = moment().format("YYYY-MM-DD").toString();
    // this._EndDate = moment().format("YYYY-MM-DD").toString();

    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment().format('dddd').substring(0, 3);
    var DayNum1 = "DayNum";
    jsonData[DayNum1] = moment(this._StartDate).format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    // this.GetProjectAndsubtashDrpforCalender();
    // this.calendar.updateTodaysDate();
    this._SEndDate = moment().format("YYYY-MM-DD").toString();
    // this.Event_requests();


    $(document).on('scroll', function () {
      var y = $(this).scrollTop();
      if (y > 380) {
        $('.create-btm').fadeIn();
        $('.show .btm-dropdn').fadeIn();
      } else {
        $('.create-btm').fadeOut();
        $('.show .btm-dropdn').fadeOut();
      }
    });

    $(document).mouseup(function (e) {
      const myDiv = $('.bg-ovr');
      const modaldv = $('.eve-modal');
      // hide search
      //const searcharea = $('.form-input');


      if (!modaldv.is(e.target) && modaldv.has(e.target).length === 0) {
        if (myDiv.hasClass('d-block')) {
          //  myDiv.removeClass('d-block');
          // $('.side_view').removeClass('position-fixed');
          $('#propse11').removeClass('show');

          // document.getElementById("fltrs-drop").classList.remove("show-flts");
        }
      }



      // hide search
      // if (!searcharea.is(e.target) && searcharea.has(e.target).length === 0) {
      //   if ($('.drop-search.show').hasClass('show')) {
      //     $('.drop-search.show').removeClass('show');
      //     $(".fc-header-toolbar").removeClass("d-none");

      //   }
      // }

    });

    $(document).mouseup(function (e) {
      const myDiv = $('.bg-ovr1');
      const modaldv = $('.eve-modal1');

      if (!modaldv.is(e.target) && modaldv.has(e.target).length === 0) {
        if (myDiv.hasClass('d-block')) {
          myDiv.removeClass('d-block');
          $('.side_view').removeClass('position-fixed');
        }
      }
    });









  }



  ngOnDestroy() {
    // Cleanup code goes here.
  }

  // ngAfterViewInit() {


  //   this.drawLineGraph();
  //   setTimeout(() => {
  //     this.startTour();
  //   }, 3000);
  // }


  public startTour() {
    this.guidedTourService.startTour({
      tourId: 'DelayActions',
      useOrb: false,
      skipCallback: () => '',
      completeCallback: () => this.penshow2(),
      steps: [
        {
          title: 'Delay Actions',
          selector: '#post1',
          content: 'Please check your Delay actions, You can extend the deadline or complete your delay actions.',
          orientation: 'bottom'
        }
      ]
    });
  }





  onFileChange(event) {

    if (event.target.files.length > 0) {
      var length = event.target.files.length;
      for (let index = 0; index < length; index++) {
        const file = event.target.files[index];
        var contentType = file.type;
        if (contentType === "application/pdf") {
          contentType = ".pdf";
        }
        else if (contentType === "image/png") {
          contentType = ".png";
        }
        else if (contentType === "image/jpeg") {
          contentType = ".jpeg";
        }
        else if (contentType === "image/jpg") {
          contentType = ".jpg";
        }
        this.myFiles.push(event.target.files[index].name);
        // alert(this.myFiles.length);
        console.log(this.myFiles, "attach")
        //_lstMultipleFiales
        var d = new Date().valueOf();
      
        this._lstMultipleFiales = [...this._lstMultipleFiales, {
          UniqueId: d,
          FileName: event.target.files[index].name,
          Size: event.target.files[index].size,
          Files: event.target.files[index]
        }];
      }
    }

    const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.value = null;
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
  }

  RemoveSelectedFile(_id) {
    var removeIndex = this._lstMultipleFiales.map(function (item) { return item.UniqueId; }).indexOf(_id);
    this._lstMultipleFiales.splice(removeIndex, 1);

    const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';

  }






  RemoveExistingFile(_id) {


    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {
        this.RemovedAttach.push(element.Cloud_Name)
      }

    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);

  }

  closeevearea() {
    $('.bg-ovr').removeClass('d-block');
    $('.bg-ovr1').removeClass('d-block');
    $('.side_view').removeClass('position-fixed');
    this.date_menu_close('date-menu-1');
    $('#propse11').removeClass('show');
    this.closefooter();

    $("#ft_body").removeClass("go-up");
    $("#secfootr").addClass("opend");
    $("#main-foot").addClass("overflow-hidden");
  }
  // Scheduling Work
  // Start Here
  proposecahngedate(event) {
    this.Proposedate = event.value.format("YYYY-MM-DD").toString()
  }
  proposenewtime() {

    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.propose_date = this.Proposedate;
    this._calenderDto.propose_stt = this.PropStart;
    this._calenderDto.propose_edt = this.PurposeEnd;

    this.CalenderService.NewGetproposenewtime(this._calenderDto).subscribe
      ((data) => {
        this.GetScheduledJson();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Proposed");
        // $('#propse').collapse('toggle')

        // $('#propse').toggle();
        this.closeevearea();

      });

  }
  Maybe_event(val) {

    this.EventAction_type = val;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.flagid = this.EventAction_type;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      });
    this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
    this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber;

    this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
      ((data) => {
        this.GetScheduledJson();
        this.Event_requests();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "May be");
        // this.calendar.updateTodaysDate();
        this.closeevearea();


      });


  }

  Event_acceptandReject() {
    if (this.EventAction_type == 1) {
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.flagid = this.EventAction_type;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        });
      this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
      this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber;
      this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
        ((data) => {
          this.GetScheduledJson();
          this.Event_requests();
          this._Message = data['message'];
          this.notifyService.showSuccess(this._Message, "Success");
          // this.calendar.updateTodaysDate();
          this.closeevearea();


        });

    }
    else if (this.EventAction_type == 2) {
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.flagid = this.EventAction_type;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        });
      this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
      this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber;

      this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
        ((data) => {
          this.GetScheduledJson();
          this.Event_requests();
          this._Message = data['message'];
          this.notifyService.showSuccess(this._Message, "Success");
          // this.calendar.updateTodaysDate();
          this.closeevearea();


        });

    }
    else if (this.EventAction_type == 3) {
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.flagid = this.EventAction_type;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        });
      this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
      this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber;

      this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
        ((data) => {
          this.GetScheduledJson();
          this.Event_requests();
          this._Message = data['message'];
          this.notifyService.showSuccess(this._Message, "Rejected");
          // this.calendar.updateTodaysDate();
          this.closeevearea();


        });

    }
    else if (this.EventAction_type == 4) {
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.flagid = this.EventAction_type;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        });
      this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
      this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber;

      this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
        ((data) => {
          this.GetScheduledJson();
          this.Event_requests();
          this._Message = data['message'];
          this.notifyService.showSuccess(this._Message, "Rejected");
          // this.calendar.updateTodaysDate();
          this.closeevearea();


        });

    }


  }

  onCloseHandled() {
    this.display = 'none';
  }

  Action_event(val) {
    this.EventAction_type = val;

  }

  GetclickEventRequest_details(id) {
    this.closeevearea1();
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = id;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "Testing111");
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status;

        document.getElementById("deleteendit").style.display = "flex";
        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be')) {
          document.getElementById("hiddenedit").style.display = "flex";
          // document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";

        }
        else if ((this.Schedule_type1 == 'Event') && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be')) {
          document.getElementById("hiddenedit").style.display = "none";
          // document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "flex";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";

        }



        // if (this.Project_dateScheduledjson <= this._StartDate ) {
        //   document.getElementById("hiddenedit").style.display = "block";

        // }
        // else {
        //   document.getElementById("hiddenedit").style.display = "none";
        // }


        this.Project_NameScheduledjson = this.EventScheduledjson[0].Project_code;
        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        console.log(this.User_Scheduledjson, "test000");
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

        this.dmsIdjson = [];
        if (this.DMS_Scheduledjson.length > 0) {
          this.DMS_Scheduledjson.forEach(element => {
            var jsonData = {};
            var columnName = "MailId";
            jsonData[columnName] = element;
            this.dmsIdjson.push(jsonData);
          });
          this.dmsIdjson = JSON.stringify(this.dmsIdjson);
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }




        // console.log(this.dmsIdjson,"ids");
      });
  }



  Event_requests() {

    this._calenderDto.Emp_No = this.Current_user_ID;

    this.CalenderService.NewGetEvent_request(this._calenderDto).subscribe
      ((data) => {

        this.Event_requests1 = data;
        //  console.log(this.Event_requests1,"Event11")
      });

  }
  // sweetAlert2() {

  //   // console.log(dateOne)
  //   // console.log(dateTwo)


  //   Swal.fire({
  //     title: 'Delete Schedule Time ?',
  //     text: 'Do you Want to Delete!!',
  //     // icon: 'warning',
  //     // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'No'
  //   }).then((response: any) => {
  //     if (response.value) {
  //       this.Reshuleduling_table();
  //     } else if (response.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Not Deleted',
  //         'error'
  //       )
  //     }
  //   });
  // }

  Reshuleduling_table() {

    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        this.Schedule_ID = (this.EventScheduledjson[0]['Schedule_ID']);

      });

  }

  AllDelete_event(val) {
    this.flagevent = val;
  }

  AlldeleteSchedule() {

    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.flag_id = this.flagevent;
    this.CalenderService.NewDelete_table(this._calenderDto).subscribe(text => {
      this.notifyService.showSuccess("Deleted successfully", "Success");
      this.closeevearea();
      this.GetScheduledJson();
      this.GetPending_Request();
    })


  }

  PendingdeleteSchedule(id) {

    this._calenderDto.Schedule_ID = id;
    this._calenderDto.flag_id = this.flagevent;
    this.CalenderService.NewDelete_table(this._calenderDto).subscribe(text => {
      this.notifyService.showSuccess("Deleted successfully", "Success");
      this.closeevearea();
      this.GetScheduledJson();
      this.GetPending_Request();
    })


  }

  onSingleEventDelete() {

    Swal.fire({
      title: `Delete ${this.Schedule_type1}`,
      text: `Are you sure you want to delete this ${this.Schedule_type1}? This action cannot be undone.`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(choice => {
      if (choice.isConfirmed) {
        this.AllDelete_event(1);
        this.AlldeleteSchedule()
      }
    });

  }

  onSinglePendingEventDelete(id) {

    Swal.fire({
      title: `Delete ${this.Schedule_type1}`,
      text: `Are you sure you want to delete this ${this.Schedule_type1}? This action cannot be undone.`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(choice => {
      if (choice.isConfirmed) {
        this.AllDelete_event(1);
        this.PendingdeleteSchedule(id);
      }
    });

  }

  // Customize() {

  //   document.getElementById("Monthly_121").style.display = "none";
  //   document.getElementById("weekly_121").style.display = "none";
  //   document.getElementById("div_recurrence").style.display = "block";
  //   document.getElementById("div_endDate").style.display = "block";
  //   this._labelName = "Start Date :";
  //   if (this.selectedrecuvalue == "2") {
  //     document.getElementById("weekly_121").style.display = "block";
  //   }
  //   else if (this.selectedrecuvalue == "3") {
  //     document.getElementById("Monthly_121").style.display = "block";
  //   }
  // }

  DublicateTaskandEvent() {

    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    // document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this.copyTask = true;
    this.editTask = false;
    this.eventRepeat=false;
    this.Schedule_ID = this._calenderDto.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "test")
        this.Schedule_ID = 0;
        this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];
        this.Startts = (this.EventScheduledjson[0]['St_Time']);
        this.Endtms = (this.EventScheduledjson[0]['Ed_Time']);
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
        this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
        this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
        this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
        // this._SEndDate = moment().format("YYYY-MM-DD").toString();
        this.Addressurl = this.EventScheduledjson[0]['Addressurl'];


        this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];

        if (this._FutureEventTasksCount > 0) {
          // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
          // radio1.disabled = false;
          // radio1.checked = true;

          // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
          // radio2.disabled = false;
          // radio2.checked = false;

          // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
          // radio3.disabled = false;
          // radio3.checked = false;

          // this._PopupConfirmedValue = 1;
        }
        else if (this._FutureEventTasksCount == 0) {
          // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
          // radio1.disabled = false;
          // radio1.checked = true;

          // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
          // radio2.disabled = true;
          // radio2.checked = false;

          // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
          // radio3.disabled = true;
          // radio3.checked = false;

          // this._PopupConfirmedValue = 1;
        }
        document.getElementById("div_recurrence").style.display = "block";
        document.getElementById("Monthly_121_new").style.display = "none";
        document.getElementById("weekly_121_new").style.display = "none";
        document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
        // document.getElementById("rightbar-overlay").style.display = "block";
        // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        document.getElementById("Location_Name").style.display = "none";

        this.AllDatesSDandED = [];
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = (moment(this.minDate).format("YYYY-MM-DD"));//this.EventScheduledjson[0]['Schedule_date'];
        var IsActive = "IsActive";
        jsonData[IsActive] = 1;
        var Day = "Day";
        jsonData[Day] = "NA";
        var DayNum = "DayNum";
        jsonData[DayNum] = "NA";
        this.AllDatesSDandED.push(jsonData);
        this._StartDate = moment().format("YYYY-MM-DD").toString();
        this.minDate = moment().format("YYYY-MM-DD").toString();
        if (this.minDate > this._StartDate) {
          this.minDate = this._StartDate;
        }

        this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();

        // this._OldEnd_date = this.EventScheduledjson[0]['End_date'];
        // this.maxDate = this.EventScheduledjson[0]['End_date'];

        // if ((this.EventScheduledjson[0]['Recurrence']) == 'Do not repeat') {
        //   document.getElementById("div_endDate").style.display = "none";

        //   this.selectedrecuvalue = '0';
        //   this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
        //   this._labelName = "Schedule Date :";


        //   document.getElementById("Recurrence_hide").style.display = "none";
        // }
        // else if ((this.EventScheduledjson[0]['Recurrence']) == 'Daily') {
        //   this.selectedrecuvalue = '1';
        //   this._labelName = "Schedule Date :";

        //   document.getElementById("Recurrence_hide").style.display = "none";
        //   document.getElementById("div_endDate").style.display = "block";
        // }
        // else if ((this.EventScheduledjson[0]['Recurrence']) == 'Weekly') {
        //   this._labelName = "Schedule Date :";

        //   document.getElementById("Recurrence_hide").style.display = "block";
        //   document.getElementById("weekly_121").style.display = "block";
        //   document.getElementById("div_endDate").style.display = "block";
        //   this.selectedrecuvalue = '2';
        //   let Recc = [];
        //   var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
        //   Recc = ret1.split(",");

        //   for (var i = 0; i < Recc.length; i++) {
        //     this.dayArr.forEach(element => {
        //       if (element.value == Recc[i]) {
        //         element.checked = true;
        //       }
        //     });
        //   }
        // }
        // else if ((this.EventScheduledjson[0]['Recurrence']) == 'Monthly') {
        //   document.getElementById("Recurrence_hide").style.display = "block";
        //   document.getElementById("div_endDate").style.display = "block";

        //   document.getElementById("Monthly_121").style.display = "block";
        //   this._labelName = "Schedule Date :";
        //   this.selectedrecuvalue = '3';
        //   let Recc = [];
        //   var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
        //   Recc = ret1.split(",");
        //   for (var i = 0; i < Recc.length; i++) {
        //     this.MonthArr.forEach(element => {
        //       if (element.value == Recc[i]) {
        //         element.checked = true;
        //       }
        //     });
        //   }
        // }
        if (this.ScheduleType == 'Task') {
          this.EventScheduledjson[0]['Ed_Time']
          this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
          this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
          this.MasterCode = (this.MasterCode[0].stringval);

          document.getElementById("subtaskid").style.display = "flex";
          // document.getElementById("Link_Name").style.display = "none";
          document.getElementById("Guest_Name").style.display = "none";
          document.getElementById("Descrip_Name").style.display = "none";
          document.getElementById("core_viw123").style.display = "flex";
          document.getElementById("core_viw121").style.display = "none";
          document.getElementById("core_viw222").style.display = "none";
          document.getElementById("core_Dms").style.display = "none";
          // document.getElementById("Monthly_121").style.display = "none";
          // document.getElementById("weekly_121").style.display = "none";
          document.getElementById("meeting-online-add").style.display = "none";

        }
        else if (this.ScheduleType == 'Event') {

          this.GetProjectAndsubtashDrpforCalender();
          this.allAgendas = this.EventScheduledjson[0]['Agendas'].map(item => ({ index: item.AgendaId, name: item.Agenda_Name }));
          // this.GetMemosByEmployeeId();
          this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
          this.MasterCode = [];
          this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
          this.arr.forEach(element => {
            this.MasterCode.push(element.stringval);
            this.projectsSelected.push({  Project_Code:element.stringval,  Project_Name:element.Project_Name, BlockNameProject:element.BlockNameProject, TM_DisplayName:element.TM_DisplayName });
          });
          this.Portfolio = [];
          this.Portfolio1 = [];
          this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
          this.arr1.forEach(element => {
            this.Portfolio.push(element.numberval);
          });

          this.ngEmployeeDropdown = [];
          this.ngEmployeeDropdown1 = [];
          this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
          this.arr2.forEach(element => {
            this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
          });

          this.SelectDms = [];
          this.SelectDms1 = [];

          this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            console.log(this.Memos_List, "test iiii");

            let arr3 = [];
            var str = (this.EventScheduledjson[0]['DMS_Name']);
            arr3 = str.split(",");
            for (var i = 0; i < arr3.length; i++) {
              this.Memos_List.forEach(element => {
                if (element.MailId == arr3[i]) {
                  this.SelectDms.push(element.MailId);
                }
              });
            }

          });



          this.Location_Type = (this.EventScheduledjson[0]['Location']);
          this._meetingroom = this.Location_Type?true:false;
          this.Description_Type = (this.EventScheduledjson[0]['Description']);
          document.getElementById("subtaskid").style.display = "none";
          document.getElementById("Guest_Name").style.display = "flex";
          document.getElementById("Descrip_Name").style.display = "flex";
          document.getElementById("core_viw121").style.display = "flex";
          document.getElementById("core_viw123").style.display = "none";
          document.getElementById("core_viw222").style.display = "flex";
          document.getElementById("core_Dms").style.display = "flex";
          document.getElementById("meeting-online-add").style.display = "flex";
          document.getElementById("Location_Name").style.display =this._meetingroom==true?"flex":'none';



          const TEsb = document.getElementById('TaskEvent-Sidebar')
          TEsb.addEventListener('scroll', () => {
            this.autocompletes.forEach((ac) => {
              if (ac.panelOpen)
                ac.updatePosition();
            });
          })





        }

 // valid starttimearr and endtimearr setting start.
          let _inputdate=moment(this._StartDate,'YYYY-MM-DD');
          let _currentdate=moment();
          if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
          {
              const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
              const index:number=this.StartTimearr.findIndex((item:any)=>{
                  const t=moment(item,'h:mm A');
                  const result=t>=ct;
                  return result;
              });
              this.validStartTimearr=this.StartTimearr.slice(index);
          }
          else
          this.validStartTimearr=[...this.StartTimearr];



          this.timingarryend = [];
          this.Time_End = [];
          this.Time_End = [...this.StartTimearr];
          let _index = this.Time_End.indexOf(this.Startts);
          if (_index + 1 === this.Time_End.length) {
            _index = -1;
          }
          this.timingarryend = this.Time_End.splice(_index + 1);
          this.EndTimearr = this.timingarryend;
 // valid starttimearr and endtimearr setting end.




      });
    this.closeevearea();

  }


  ReshudingTaskandEvent() {


    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Descrip_Name12").style.display = "none";
    this.editTask = true;
    this.copyTask = false;
    this.create = false;
    this.eventRepeat=false;

    this.Schedule_ID = this._calenderDto.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "test11111")
        this.Schedule_ID = (this.EventScheduledjson[0]['Schedule_ID']);
        this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];
        this.Startts = (this.EventScheduledjson[0]['St_Time']);
        this.Endtms = (this.EventScheduledjson[0]['Ed_Time']);
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
        this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
        // alert(this._OldRecurranceId)
        // if (this._OldRecurranceId == '0') {
        this._PopupConfirmedValue = 1;
        // }
        // else {
        // this._PopupConfirmedValue = 2;
        // }
        this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
        this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
        this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
        this.scstartdate = this._Oldstart_date;
        // alert(this.scstartdate)
        // this.Attachment12_ary=this.EventScheduledjson[0]['Attachmentsjson']
        this.Addressurl = this.EventScheduledjson[0]['Addressurl']
        // alert( this.Addressurl);
        this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];
        this._onlinelink = this.EventScheduledjson[0]['Onlinelink'];
        this.Link_Details = this.EventScheduledjson[0]['Link_Details'];



        this.pending_status = this.EventScheduledjson[0]['Pending_meeting'];

        if (this._FutureEventTasksCount > 0) {
          // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
          // radio1.disabled = false;
          // radio1.checked = true;

          // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
          // radio2.disabled = false;
          // radio2.checked = false;

          // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
          // radio3.disabled = false;
          // radio3.checked = false;

          // this._PopupConfirmedValue = 1;
        }
        else if (this._FutureEventTasksCount == 0) {
          // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
          // radio1.disabled = false;
          // radio1.checked = true;

          // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
          // radio2.disabled = true;
          // radio2.checked = false;

          // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
          // radio3.disabled = true;
          // radio3.checked = false;

          // this._PopupConfirmedValue = 1;
        }
        document.getElementById("div_recurrence").style.display = "block";
        document.getElementById("Monthly_121_new").style.display = "none";
        document.getElementById("weekly_121_new").style.display = "none";
        document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
        // document.getElementById("rightbar-overlay").style.display = "block";
        // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

        this.AllDatesSDandED = [];
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = this.EventScheduledjson[0]['Schedule_date'];
        var IsActive = "IsActive";
        jsonData[IsActive] = 1;
        var Day = "Day";
        jsonData[Day] = "NA";
        var DayNum = "DayNum";
        jsonData[DayNum] = "NA";
        this.AllDatesSDandED.push(jsonData);
        this._StartDate = this.EventScheduledjson[0]['Schedule_date'];
        this.minDate = this.EventScheduledjson[0]['Schedule_date'];
        this._EndDate = this.EventScheduledjson[0]['End_date'];
        this._OldEnd_date = this.EventScheduledjson[0]['End_date'];
        this.maxDate = this.EventScheduledjson[0]['End_date'];
        this.EventNumber = this.EventScheduledjson[0]['EventNumber'];
        // this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
        if ((this.EventScheduledjson[0]['Onlinelink']) == true) {
          document.getElementById("Descrip_Name12").style.display = "flex";
        }
        if ((this.EventScheduledjson[0]['Recurrence']) == 'Do not repeat') {
          this.selectedrecuvalue = '0';
          this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
          this._labelName = "Schedule Date";
          // this.maxDate = this.EventScheduledjson[0]['Schedule_date'];
          // document.getElementById("div_endDate").style.display = "none";
          document.getElementById("Recurrence_hide").style.display = "none";
        }
        else if ((this.EventScheduledjson[0]['Recurrence']) == 'Daily') {
          document.getElementById("div_endDate_new").style.display = "block";
          this.selectedrecuvalue = '1';
          this._labelName = "Schedule Date";
          // document.getElementById("div_endDate").style.display = "none";
          document.getElementById("Recurrence_hide").style.display = "none";
        }
        else if ((this.EventScheduledjson[0]['Recurrence']) == 'Last day of the month') {
          document.getElementById("div_endDate_new").style.display = "block";
          this.selectedrecuvalue = '5';
          this._labelName = "Schedule Date";
          // document.getElementById("div_endDate").style.display = "none";
          document.getElementById("Recurrence_hide").style.display = "none";
        }
        else if ((this.EventScheduledjson[0]['Recurrence']) == 'Weekly') {

          this._labelName = "Schedule Date";
          // document.getElementById("div_endDate").style.display = "none";
          document.getElementById("div_endDate_new").style.display = "block";
          document.getElementById("Recurrence_hide").style.display = "block";
          document.getElementById("weekly_121_new").style.display = "block";
          this.selectedrecuvalue = '2';
          let Recc = [];
          var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
          Recc = ret1.split(",");

          for (var i = 0; i < Recc.length; i++) {
            this.dayArr.forEach(element => {
              if (element.value == Recc[i]) {
                element.checked = true;
              }
            });
          }

          this.dayArr.forEach((item:any)=>{
            if(item.checked){
                let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
               this.mtgOnDays.push(d_name);
            }
         });


        }
        else if ((this.EventScheduledjson[0]['Recurrence']) == 'Monthly') {
          document.getElementById("Recurrence_hide").style.display = "block";
          document.getElementById("div_endDate_new").style.display = "block";
          // document.getElementById("div_endDate").style.display = "none";
          document.getElementById("Monthly_121_new").style.display = "block";
          this._labelName = "Schedule Date";
          this.selectedrecuvalue = '3';
          let Recc = [];
          var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
          Recc = ret1.split(",");
          for (var i = 0; i < Recc.length; i++) {
            this.MonthArr.forEach(element => {
              if (element.value == Recc[i]) {
                element.checked = true;
              }
            });
          }

          this.MonthArr.forEach((item:any)=>{
            if(item.checked){
               const d_no=Number.parseInt(item.value);
               this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
            }
          });

        }



        if (this.ScheduleType == 'Task') {
          this.EventScheduledjson[0]['Ed_Time']
          this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
          this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);

          this.MasterCode = (this.MasterCode[0].stringval);

          document.getElementById("subtaskid").style.display = "flex";
          // document.getElementById("Link_Name").style.display = "none";
          document.getElementById("Guest_Name").style.display = "none";
          document.getElementById("Location_Name").style.display = "none";
          document.getElementById("Descrip_Name").style.display = "none";
          document.getElementById("core_viw123").style.display = "flex";
          document.getElementById("core_viw121").style.display = "none";
          document.getElementById("core_viw222").style.display = "none";
          document.getElementById("core_Dms").style.display = "none";
          // document.getElementById("Monthly_121").style.display = "none";
          // document.getElementById("weekly_121").style.display = "none";
          document.getElementById("meeting-online-add").style.display = "none";

        }
        else if (this.ScheduleType == 'Event') {
          this.GetProjectAndsubtashDrpforCalender();
          // this.GetMemosByEmployeeId();
          this.allAgendas = this.EventScheduledjson[0]['Agendas'].map(item => ({ index: item.AgendaId, name: item.Agenda_Name }));
          this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
          this.MasterCode = [];
          this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
          this.arr.forEach(element => {
            this.MasterCode.push(element.stringval);
            this.projectsSelected.push({  Project_Code:element.stringval,  Project_Name:element.Project_Name, BlockNameProject:element.BlockNameProject,  TM_DisplayName:element.TM_DisplayName });
          });
          this.Portfolio = [];
          this.Portfolio1 = [];
          this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
          this.arr1.forEach(element => {
            this.Portfolio.push(element.numberval);
          });

          this.ngEmployeeDropdown = [];
          this.ngEmployeeDropdown1 = [];
          this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
          this.arr2.forEach(element => {
            this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
          });

          this.SelectDms = [];
          this.SelectDms1 = [];
          this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data) => {
            this.Memos_List = JSON.parse(data['JsonData']);
            let arr3 = [];
            var str = (this.EventScheduledjson[0]['DMS_Name']);
            arr3 = str.split(",");
            for (var i = 0; i < arr3.length; i++) {
              this.Memos_List.forEach(element => {
                if (element.MailId == arr3[i]) {
                  this.SelectDms.push(element.MailId);
                }
              });
            }
          });

          this.Location_Type = (this.EventScheduledjson[0]['Location']);
          this._meetingroom = this.Location_Type?true:false;
          this.Description_Type = (this.EventScheduledjson[0]['Description']);
          document.getElementById("subtaskid").style.display = "none";
          document.getElementById("Guest_Name").style.display = "flex";
          document.getElementById("meeting-online-add").style.display = "flex";
          document.getElementById("Location_Name").style.display =this._meetingroom==true?"flex":'none';
          document.getElementById("Descrip_Name").style.display = "flex";
          document.getElementById("core_viw121").style.display = "flex";
          document.getElementById("core_viw123").style.display = "none";
          document.getElementById("core_viw222").style.display = "flex";
          document.getElementById("core_Dms").style.display = "flex";




          const TEsb = document.getElementById('TaskEvent-Sidebar')
          TEsb.addEventListener('scroll', () => {
            this.autocompletes.forEach((ac) => {
              if (ac.panelOpen)
                ac.updatePosition();
            });
          })

        }



          // valid starttimearr and endtimearr setting start.
          let _inputdate=moment(this._StartDate,'YYYY-MM-DD');
          let _currentdate=moment();
          if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
          {
              const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
              const index:number=this.StartTimearr.findIndex((item:any)=>{
                  const t=moment(item,'h:mm A');
                  const result=t>=ct;
                  return result;
              });
              this.validStartTimearr=this.StartTimearr.slice(index);
          }
          else
          this.validStartTimearr=[...this.StartTimearr];



          this.timingarryend = [];
          this.Time_End = [];
          this.Time_End = [...this.StartTimearr];
          let _index = this.Time_End.indexOf(this.Startts);
          if (_index + 1 === this.Time_End.length) {
            _index = -1;
          }
          this.timingarryend = this.Time_End.splice(_index + 1);
          this.EndTimearr = this.timingarryend;
          // valid starttimearr and endtimearr setting end.

      });
    this.closeevearea();
  }









  hasWhiteSpace(s: string) {
    return /\s/.test(s);
  }

  LastLengthValidation11() {
    if (this.Title_Name&&(this.Title_Name.trim().length < 3)) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }

  // TImetable() {
  //   let _shr = moment(new Date()).format("HH");
  //   let _s = parseInt(moment(new Date()).format("mm"));

  //   if (_s >= 0 && _s < 15) {
  //     this.Startts = _shr.toString() + ':30';
  //     this.Endtms = _shr.toString() + ':45';
  //   }
  //   else if (_s >= 15 && _s < 30) {
  //     this.Startts = _shr.toString() + ':45';
  //     this.Endtms = (parseInt(_shr) + 1).toString() + ':00';
  //   }
  //   else if (_s >= 30 && _s < 45) {
  //     this.Startts = (parseInt(_shr) + 1).toString() + ':00';
  //     this.Endtms = (parseInt(_shr) + 1).toString() + ':15';
  //   }
  //   else if (_s >= 45 && _s < 59) {
  //     this.Startts = (parseInt(_shr) + 1).toString() + ':15';
  //     this.Endtms = (parseInt(_shr) + 1).toString() + ':30';
  //   }
  // }

  TImetable() {
    let now = moment(new Date());
    let _shr = now.hour();
    let _s = now.minute();

    if (_s >= 0 && _s < 15) {
      this.Startts = this.formatTime(_shr, 30);
      this.Endtms = this.formatTime(_shr, 45);
    } else if (_s >= 15 && _s < 30) {
      this.Startts = this.formatTime(_shr, 45);
      this.Endtms = this.formatTime(_shr + 1, 0);
    } else if (_s >= 30 && _s < 45) {
      this.Startts = this.formatTime(_shr + 1, 0);
      this.Endtms = this.formatTime(_shr + 1, 15);
    } else if (_s >= 45 && _s < 59) {
      this.Startts = this.formatTime(_shr + 1, 15);
      this.Endtms = this.formatTime(_shr + 1, 30);
    }
  }

  formatTime(hour, minute) {
    return moment({ hour, minute }).format("hh:mm A");
  }


  onSubmitBtnClicked() {

    if (
      (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
      (this.Description_Type?(this.characterCount<500):true)&&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ? this.allAgendas.length > 0: true )
      // && (this.ngEmployeeDropdown&&this.ngEmployeeDropdown.length > 0)
    ) {
      this.OnSubmitSchedule();
      this.notProvided = false;
    }
    else {
      if ((!this.Title_Name)||this.Title_Name.trim().length<3||this.Title_Name.trim().length>100)
        document.getElementById('dsb-evt-titleName').focus();
      else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.action-section .agenda-input-field input#todo-input'); agf.focus(); }

      this.notProvided = true;
    }
  }

  getLastDaysOfEachMonth() {
    const allDates = this.AllDatesSDandED;
    const lastDays = [];

    const groupedByMonth = allDates.reduce((acc, date) => {
      const month = moment(date.Date).format('YYYY-MM');
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(date);
      return acc;
    }, {});

    Object.keys(groupedByMonth).forEach(month => {
      const datesInMonth = groupedByMonth[month];
      const lastDay = datesInMonth.reduce((latest, current) => {
        return moment(current.Date).isAfter(moment(latest.Date)) ? current : latest;
      });
      lastDays.push(lastDay);
    });

    return lastDays;
  }

  OnSubmitSchedule() {

    if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
      this._subname1 = true;
      return false;
    }
    if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
      this._subname = true;
      return false;
    }

    var now = new Date();
    if(this.eventRepeat===false){
      let timestamp = "";
      timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
        + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
      this.EventNumber = timestamp;
    }

    let finalarray = [];
    this.daysSelectedII = [];
    const format2 = "YYYY-MM-DD";
    var start = moment(this.minDate);
    const _arraytext = [];
    if (this.selectedrecuvalue == "0") {
      const d1 = new Date(moment(start).format(format2));
      const date = new Date(d1.getTime());
      this.daysSelectedII = this.AllDatesSDandED.filter(x => x.Date == (moment(date).format(format2)));
    }
    else if (this.selectedrecuvalue == "1") {
      this.daysSelectedII = this.AllDatesSDandED;
    }
    else if (this.selectedrecuvalue == "2") {
      if (this.dayArr.filter(x => x.checked == true).length == 0) {
        alert('Please select day');
        return false;
      }
      for (let index = 0; index < this.dayArr.length; index++) {
        if (this.dayArr[index].checked) {
          const day = this.dayArr[index].value;
          _arraytext.push(day);
          var newArray = this.AllDatesSDandED.filter(obj => obj.Day == day);
          this.daysSelectedII = this.daysSelectedII.concat(newArray);
        }
      }
      if (this.daysSelectedII.length == 0) {
        alert('please select valid day');
      }
    }
    else if (this.selectedrecuvalue == "3") {

      if (this.MonthArr.filter(x => x.checked == true).length == 0) {
        alert('Please select day');
        return false;
      }
      for (let index = 0; index < this.MonthArr.length; index++) {
        if (this.MonthArr[index].checked == true) {
          const day = this.MonthArr[index].value;
          _arraytext.push(day);
          var newArray = this.AllDatesSDandED.filter(txt => txt.DayNum == day);
          this.daysSelectedII = this.daysSelectedII.concat(newArray);
        }
      }
    }
    // else if (this.selectedrecuvalue === "4") {
    //   this.daysSelectedII = this.getBiWeeklyDates(startDate);
    // }
    // else if (this.selectedrecuvalue === "5") {
    //   this.daysSelectedII = this.getLastDaysOfEachMonth();
    // }

    finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

    if (finalarray.length > 0) {
      finalarray.forEach(element => {

        const date1: Date = new Date(this._StartDate);
        // if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        //   this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
        // }
        // else {
        //   this._SEndDate = this._StartDate;
        // }
        const date2: Date = new Date(this._SEndDate);

        const diffInMs: number = date2.getTime() - date1.getTime();

        const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
          var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
        }
        else {
          var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        }
        // var dd = moment(date3).add(diffInDays, 'days')
        // var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        var dd = moment(date3).add(diffInDays, 'days')
        console.log(dd, date3, diffInDays, date2, this._SEndDate, "update edit")
        var SEndDates = "SEndDate";
        element[SEndDates] = (dd.format(format2));

        var vStartTime = "StartTime";
        element[vStartTime] = this.Startts;

        var vEndTime = "EndTime";
        element[vEndTime] = this.Endtms;

        var vEnd_date = "End_date";
        element[vEnd_date] = this._EndDate;

        var vIsDeleted = "IsDeleted";
        element[vIsDeleted] = 0;

        var vPending = "Pending_meeting";
        element[vPending] = 0;

        var vRecurrence = "Recurrence";
        element[vRecurrence] = this.selectedrecuvalue;

        var vRecurrence_value = "Recurrence_values";
        element[vRecurrence_value] = _arraytext.toString();

        var vEmp_No = "Emp_No";
        element[vEmp_No] = this.Current_user_ID;

        var vScheduleType = "ScheduleType";
        element[vScheduleType] = this.ScheduleType == "Task" ? 1 : 2;

        var vTitle_Name = "Title_Name";
        element[vTitle_Name] = this.Title_Name;

        var vMasterCode = "MasterCode";
        element[vMasterCode] = this.MasterCode == undefined ? "" : this.MasterCode.toString();

        // var columnName = "Link_Type";
        // element[columnName] = this.Link_Type == undefined ? "" : this.Link_Type;
        var vUser_Name = "User_Name";
        element[vUser_Name] = this.ngEmployeeDropdown == undefined ? "" : this.ngEmployeeDropdown.toString();


        var vLocation_Type = "Location_Type";
        element[vLocation_Type] = (this._meetingroom==true)?(this.Location_Type == undefined ? "" : this.Location_Type):'';

        var vLocation_fulladd = "FullAddress_loc";
        element[vLocation_fulladd] = (this._meetingroom==true)?(this.Locationfulladd == undefined ? "" : this.Locationfulladd):'';

        var vLocation_url = "Addressurl";
        element[vLocation_url] = (this._meetingroom==true)?(this.Addressurl==undefined?'':this.Addressurl):'';

        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;

        var vLink_Details = "Link_Details";
        let link_d=this.Link_Details;
        if(this.Link_Details){
          link_d=this.Link_Details.replace(/&#160;/g, ' ');
          link_d=this.anchoredIt(link_d);
        }
        element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';

 
        if (this.Description_Type && this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, '').length > 0) {
          // Remove occurrences of &nbsp; and &#160; while collapsing spaces
          this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       }else{
         this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       }
      
      

        console.log(this.Description_Type,'.Description_Type2');

        var vDescription = "Description";
        element[vDescription] = this.Description_Type == undefined ? "" : this.Description_Type;

        var vSubtask = "Subtask";
        element[vSubtask] = this.Subtask == undefined ? "" : this.Subtask;

        var vEventNumber = "EventNumber";
        element[vEventNumber] = this.EventNumber;

        var vPortfolio_name = "Portfolio_name";
        element[vPortfolio_name] = this.Portfolio == undefined ? "" : this.Portfolio.toString();

        var vDMS_Name = "DMS_Name";
        element[vDMS_Name] = this.SelectDms == undefined ? "" : this.SelectDms.toString();


        var vAgendas = "Meeting_Agendas";
        const mtgAgendas = JSON.stringify(this.allAgendas.length > 0 ? this.allAgendas : []);
        element[vAgendas] = mtgAgendas;



// dont provide unnecessary values to api when task is creating.
       if(this.ScheduleType=='Task'){
        element[vUser_Name]='';
        element[vLocation_Type]='';
        element[vLocation_fulladd]='';
        element[vLocation_url]='';
        element[vOnlinelink]=false;
         element[vLink_Details]='';
         element[vDescription]='';
         element[vPortfolio_name]='';
         element[vDMS_Name]='';
         element[vAgendas]='[]';
       }
// dont provide unnecessary values to api when task is creating.


        //
      });

      this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
      if (this.Schedule_ID != 0) {
        this._calenderDto.Schedule_ID = this.Schedule_ID;

      }
      else {
        this._calenderDto.Schedule_ID = 0;
      }

      let _attachmentValue = 0;
      const frmData = new FormData();
      for (var i = 0; i < this._lstMultipleFiales.length; i++) {
        frmData.append("fileUpload", this._lstMultipleFiales[i].Files);
      }
      if (this._lstMultipleFiales.length > 0)
        _attachmentValue = 1;
      else
        _attachmentValue = 0;

      frmData.append("EventNumber", this.EventNumber.toString());
      frmData.append("CreatedBy", this.Current_user_ID.toString());
      console.log(JSON.stringify(finalarray), "finalarray")
      this._calenderDto.draftid = this.draftid;


      console.log('_calenderDto obj:', JSON.parse(this._calenderDto.ScheduleJson));

      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {

          if (_attachmentValue == 1) {
            this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
              (event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                  case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.progress}%`);
                    break;
                  case HttpEventType.Response:
                    console.log('User successfully created!', event.body);

                    // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    this._lstMultipleFiales = [];
                    // empty(this._lstMultipleFiales);
                    // alert(this._lstMultipleFiales.length);
                    setTimeout(() => {
                      this.progress = 0;
                    }, 1500);

                    (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                    (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
                }
              }
            )
          }
          //UploadCalendarAttachmenst
          // console.log(data, "m");
          this._Message = data['message'];
          if (this._Message == "Updated Successfully") {
            if (this.draftid != 0) {
              this.Getdraft_datalistmeeting();
              this.draftid = 0;
            }
            this.notifyService.showSuccess(this._Message.split(' ').map((word, index) => index === 1 ? word.charAt(0).toLowerCase() + word.slice(1) : word).join(' '), "Success");
            this.Getdraft_datalistmeeting();
          }
          else {
            this.notifyService.showError(this._Message, "Failed");
          }


          this.GetScheduledJson();
          this.Title_Name = null;
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.MasterCode = null;
          this.projectsSelected = [];
          this.Subtask = null;
          this.Startts = null;
          this.Endtms = null;
          this.St_date = null;
          this.Ed_date = null;
          this._SEndDate = null;
          this._SEndDate = moment().format("YYYY-MM-DD").toString();
          this.Locationfulladd = null;
          this._status = null;
          this.SelectDms = null;
          this.Location_Type = null;
          this.Link_Details = null;
          this._onlinelink = false;
          this.Allocated_subtask = null;
          this.TM_DisplayName = null;
          this.Projectstartdate = "";
          this.projectEnddate = null;
          this.Status_project = null;
          this.AllocatedHours = null;
          this.daysSelectedII = [];
          this.Avaliabletime = [];
          this.timeslotsavl = [];
          this.singleselectarry = [];
          this.daysSelected = [];
          // this.Recurr_arr = [];
          this.selected = null;
          this.TImetable();
          this.Portfolio = null;
          this.minDate = moment().format("YYYY-MM-DD").toString();
          this.maxDate = null;
          // this.calendar.updateTodaysDate();
          this.TImetable();

        });
      this.closeschd();
    }
    else {
      alert('Please Select Valid Date and Time');
    }

  }

  OnSubmitReSchedule(type: number) {

    if (
      this.Title_Name &&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ?  this.allAgendas.length > 0 : true)
      && (this.Description_Type?(this.characterCount<500):true)
    ) {
      this.notProvided = false;

      // update code below

      this._calenderDto.flagid = this._PopupConfirmedValue;
      this._calenderDto.type = type;
      var start = moment(this.minDate);

      if (this._PopupConfirmedValue == 3) {
        // start = moment(this._Oldstart_date);
        start = moment(this.minDate);
      }

      if (this.selectedrecuvalue == "0") {
        var end = moment(this.minDate);
      }
      else if (this.pending_status == true || this._PopupConfirmedValue == 1) {
        var end = moment(this.minDate);
      }
      else {
        var end = moment(this.maxDate);
      }
      // alert(end);
      const format2 = "YYYY-MM-DD";
      const d1 = new Date(moment(start).format(format2));

      const d2 = new Date(moment(end).format(format2));
      const date = new Date(d1.getTime());
      this.daysSelectedII = [];
      this.AllDatesSDandED = [];
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
        var IsActive = "IsActive";
        jsonData[IsActive] = 1;
        var Day = "Day";
        // alert(moment(date).format('ddd').substring(0, 3));
        jsonData[Day] = moment(date).format('ddd').substring(0, 3);
        var DayNum = "DayNum";
        jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
        this.AllDatesSDandED.push(jsonData);
        date.setDate(date.getDate() + 1);
      }

      if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
        this._subname1 = true;
        return false;
      }
      if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
        this._subname = true;
        return false;
      }
      var now = new Date();
      // let timestamp = "";
      // timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
      //   + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
      // this.EventNumber = timestamp;
      let finalarray = [];
      this.daysSelectedII = [];
      // const format2 = "YYYY-MM-DD";
      var start = moment(this.minDate);
      const _arraytext = [];
      if (this.selectedrecuvalue == "0") {
        const d1 = new Date(moment(start).format(format2));
        const date = new Date(d1.getTime());
        this.daysSelectedII = this.AllDatesSDandED.filter(x => x.Date == (moment(date).format(format2)));
      }
      else if (this.selectedrecuvalue == "1") {
        this.daysSelectedII = this.AllDatesSDandED;
      }
      else if (this.selectedrecuvalue == "2") {
        if (this.dayArr.filter(x => x.checked == true).length == 0) {
          alert('Please select day');
          return false;
        }
        for (let index = 0; index < this.dayArr.length; index++) {
          if (this.dayArr[index].checked) {
            const day = this.dayArr[index].value;
            _arraytext.push(day);
            var newArray = this.AllDatesSDandED.filter(obj => obj.Day == day);
            this.daysSelectedII = this.daysSelectedII.concat(newArray);
          }
        }
        if (this.daysSelectedII.length == 0) {
          alert('please select valid day');
        }
      }
      else if (this.selectedrecuvalue == "3") {
        if (this.MonthArr.filter(x => x.checked == true).length == 0) {
          alert('Please select day');
          return false;
        }
        for (let index = 0; index < this.MonthArr.length; index++) {
          if (this.MonthArr[index].checked == true) {
            const day = this.MonthArr[index].value;
            _arraytext.push(day);
            var newArray = this.AllDatesSDandED.filter(txt => txt.DayNum == day);
            this.daysSelectedII = this.daysSelectedII.concat(newArray);
          }
        }
      }
      finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

      if (finalarray.length > 0) {
        finalarray.forEach(element => {

          const date1: Date = new Date(this._StartDate);
          if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
            this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
          }
          else {
            this._SEndDate = this._StartDate;
          }
          const date2: Date = new Date(this._SEndDate);

          const diffInMs: number = date2.getTime() - date1.getTime();

          const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
          // var date3 = moment(date2).format("YYYY-MM-DD").toString();
          // // var dd = moment(date3).add(diffInDays, 'days')


          // var SEndDates = "SEndDate";
          // element[SEndDates] = (date3);
          if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
            var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
          }
          else {
            var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
          }
          var dd = moment(date3).add(diffInDays, 'days')


          var SEndDates = "SEndDate";
          element[SEndDates] = (dd.format(format2));
          //  alert( element[SEndDates])

          var vStartTime = "StartTime";
          element[vStartTime] = this.Startts;

          var vEndTime = "EndTime";
          element[vEndTime] = this.Endtms;


          var vEnd_date = "End_date";
          element[vEnd_date] = this._EndDate;

          var vIsDeleted = "IsDeleted";
          element[vIsDeleted] = 0;

          var vPending = "Pending_meeting";
          element[vPending] = 0;

          var vRecurrence = "Recurrence"
          element[vRecurrence] = this.selectedrecuvalue;

          var vRecurrence_value = "Recurrence_values"
          element[vRecurrence_value] = _arraytext.toString();

          var vEmp_No = "Emp_No";
          element[vEmp_No] = this.Current_user_ID;

          var vScheduleType = "ScheduleType";
          element[vScheduleType] = this.ScheduleType == "Task" ? 1 : 2;

          var vTitle_Name = "Title_Name";
          element[vTitle_Name] = this.Title_Name;

          var vMasterCode = "MasterCode";
          element[vMasterCode] = this.MasterCode == undefined ? "" : this.MasterCode.toString();
          // var columnName = "Link_Type";
          // element[columnName] = this.Link_Type == undefined ? "" : this.Link_Type;

          var vUser_Name = "User_Name";
          element[vUser_Name] = this.ngEmployeeDropdown == undefined ? "" : this.ngEmployeeDropdown.toString();

          var vLocation_Type = "Location_Type";
          element[vLocation_Type] = this._meetingroom==true?(this.Location_Type == undefined ? "" : this.Location_Type):'';

          var vLocation_fulladd = "FullAddress_loc";
          element[vLocation_fulladd] = this._meetingroom==true?(this.Locationfulladd == undefined ? "" : this.Locationfulladd):'';

          var vLocation_url = "Addressurl";
          element[vLocation_url] = this._meetingroom==true?(this.Addressurl==undefined?'':this.Addressurl):'';



          var vOnlinelink = "Onlinelink";
          element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;

          var vLink_Details = "Link_Details";
          // let link_d=this.Link_Details.replace(/&#160;/g, ' ');
          // link_d=this.anchoredIt(link_d);

          let link_d=this.Link_Details;
          if(this.Link_Details){
            link_d=this.Link_Details.replace(/&#160;/g, ' ');
            link_d=this.anchoredIt(link_d);
          }


          element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';
       
          var vDescription = "Description";
          element[vDescription] = this.Description_Type == undefined ? "" : this.Description_Type;

          var vSubtask = "Subtask";
          element[vSubtask] = this.Subtask == undefined ? "" : this.Subtask;

          var vEventNumber = "EventNumber";
          element[vEventNumber] = this.EventNumber;

          var vPortfolio_name = "Portfolio_name";
          element[vPortfolio_name] = this.Portfolio == undefined ? "" : this.Portfolio.toString();

          var vDMS_Name = "DMS_Name";
          element[vDMS_Name] = this.SelectDms == undefined ? "" : this.SelectDms.toString();


          var vMeeting_Agendas = "Meeting_Agendas";
          const updatedAgnds = JSON.stringify(this.allAgendas.map(item => ({ index: item.index, name: item.name })));
          element[vMeeting_Agendas] = updatedAgnds;

        });
        if (this._OldRecurranceId == '0') {
          if (this.selectedrecuvalue != this._OldRecurranceId) {
            this._calenderDto.flagid = 3;
          }
        }

        this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
        if (this._OldRecurranceId == this.selectedrecuvalue) {
          if (this._OldEnd_date != this._EndDate) {
            if (this._PopupConfirmedValue == 1)
              this._calenderDto.flagid = 1;
            else
              this._calenderDto.flagid = 2;
          }
        }
        console.log(this._calenderDto.flagid, "finalarray");
        if (this.Schedule_ID != 0) {
          this._calenderDto.Schedule_ID = this.Schedule_ID;

        }
        else {
          this._calenderDto.Schedule_ID = 0;
        }
        let _attachmentValue = 0;
        const frmData = new FormData();
        for (var i = 0; i < this._lstMultipleFiales.length; i++) {
          frmData.append("fileUpload", this._lstMultipleFiales[i].Files);
        }
        if (this._lstMultipleFiales.length > 0)
          _attachmentValue = 1;
        else
          _attachmentValue = 0;

        frmData.append("EventNumber", this.EventNumber.toString());
        frmData.append("CreatedBy", this.Current_user_ID.toString());
        frmData.append("Schedule_ID", this._calenderDto.Schedule_ID.toString());
        frmData.append("flag_id", this._calenderDto.flagid.toString());
        this._calenderDto.attachment = this.RemovedAttach.toString();



        this.CalenderService.NewUpdateCalender(this._calenderDto).subscribe
          (data => {
            this.RemovedAttach = [];
            // alert(data['Schedule_date'])
            frmData.append("Schedule_date", data['Schedule_date'].toString());
            if (_attachmentValue == 1) {
              this.CalenderService.EditUploadCalendarAttachmenst(frmData).subscribe(
                (event: HttpEvent<any>) => {
                  switch (event.type) {
                    case HttpEventType.Sent:
                      console.log('Request has been made!');
                      break;
                    case HttpEventType.ResponseHeader:
                      console.log('Response header has been received!');
                      break;
                    case HttpEventType.UploadProgress:
                      this.progress = Math.round(event.loaded / event.total * 100);
                      console.log(`Uploaded! ${this.progress}%`);
                      break;
                    case HttpEventType.Response:
                      console.log('User successfully created!', event.body);

                      // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                      (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                      this._lstMultipleFiales = [];
                      // empty(this._lstMultipleFiales);
                      // alert(this._lstMultipleFiales.length);
                      setTimeout(() => {
                        this.progress = 0;
                      }, 1500);

                      (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                      (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                      document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                      document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
                  }
                }
              )
            }

            // console.log(data, "m");
            this._Message = data['message'];
            if (this._Message == 'Not updated') {
              Swal.fire({
                title: 'Meeting not released from the Pending list.',
                text: 'Meeting already exists on the selected scheduled date. Please change the Schedule date and try again.',
              });
            }
            else if (this._Message == 'Nothing to Update') {
              this.notifyService.showInfo(this._Message, "Update failed");
            }
            else {
              this.notifyService.showSuccess(this._Message, "Success");
            }

            // 1. sol
            // if(this.showsearch)
            //   this.evesrchclose();
            // this.GetScheduledJson();

            // 2. sol
            if (this.showsearch)
              this.Search_byname();
            else
              this.GetScheduledJson();


            this.GetPending_Request();
            this.penhide();
            this.Title_Name = null;
            this.RemovedAttach = [];
            this.ngEmployeeDropdown = null;
            this.Description_Type = null;
            this.MasterCode = null;
            this.projectsSelected = [];
            this.Subtask = null;
            this.Startts = null;
            this.Endtms = null;
            this.St_date = null;
            this.Ed_date = null;
            this._status = null;
            this.SelectDms = null;
            this._SEndDate = moment().format("YYYY-MM-DD").toString();
            this.Location_Type = null;
            this.Allocated_subtask = null;
            this.Link_Details = null;
            this._onlinelink = false;
            this.TM_DisplayName = null;
            this.Projectstartdate = "";
            this.projectEnddate = null;
            this.Status_project = null;
            this.AllocatedHours = null;
            this.daysSelectedII = [];
            this.Avaliabletime = [];
            this.timeslotsavl = [];
            this.singleselectarry = [];
            this.daysSelected = [];
            this._lstMultipleFiales = [];
            this.Attachment12_ary = [];
            // this.Recurr_arr = [];
            this.selected = null;
            this.TImetable();
            this.Portfolio = null;
            this.minDate = moment().format("YYYY-MM-DD").toString();
            this.maxDate = null;
            // this.calendar.updateTodaysDate();
            this.TImetable();

          });
        this.closeschd();
      }
      else {
        alert('Please Select Valid Date and Time');
      }
    }
    else {
      if (!this.Title_Name)
        document.getElementById('dsb-evt-titleName').focus();
      else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.action-section .agenda-input-field input#todo-input'); agf.focus(); }


      this.notProvided = true;
    }


  }

  Search_byname() {
    this.showsearch = true;
    this._calenderDto.EmpNo = this.Current_user_ID;
    this._calenderDto.Search_text = this.Searchword;
    // alert(this.Searchword);

    this.CalenderService.NewGetSearchResults(this._calenderDto).subscribe
      ((data) => {
        this.Scheduledjson = JSON.parse(data['Scheduledsearchlist']);
        console.log(this.Scheduledjson, "Testing");
      });

    //document.getElementById("showlist").classList.add("show");

  }

  Online_method(event) {

    if (event.target.checked) {
      document.getElementById("Descrip_Name12").style.display = "flex";
      this._onlinelink = event.target.checked;
      // alert(this._onlinelink)
    }
    else {
      document.getElementById("Descrip_Name12").style.display = "none";
      this._onlinelink = false;
      // alert(this._onlinelink)
    }

  }

 Meeting_method(event){
  if (event.target.checked) {
    document.getElementById("Location_Name").style.display = "flex";
    this._meetingroom = event.target.checked;
  }
  else {
    document.getElementById("Location_Name").style.display = "none";
    this._meetingroom = false;
  }
 }





  viewconfirm() {

    const _arraytext = [];
    if (this.selectedrecuvalue == "2" || this.selectedrecuvalue == "3") {
      for (let index = 0; index < this.dayArr.length; index++) {
        if (this.dayArr[index].checked) {
          const day = this.dayArr[index].value;
          _arraytext.push(day);
        }
      }
      for (let index = 0; index < this.MonthArr.length; index++) {
        if (this.MonthArr[index].checked == true) {
          const day = this.MonthArr[index].value;
          _arraytext.push(day);
        }
      }
    }
    else {
      _arraytext.push(this.maxDate);
    }

    // alert(this.maxDate)

    // alert(this._OldRecurranceId+"-    Old Id" +this.selectedrecuvalue+ "-   New Id");
    // alert(this._OldRecurranceValues+"-    Old values" +_arraytext.toString()+ "-   New values");
    // alert(this._OldRecurranceValues+"-    Old values" +this.maxDate+ "-   New values");


    if (this._OldRecurranceId != this.selectedrecuvalue || this._OldRecurranceValues != _arraytext.toString()) {

      //   Swal.fire({
      //     title: 'Caution!',
      //     text: 'This meeting will be moved to new scheduled date and the saved data will be lost. Do you want to continue?',
      //     showCancelButton: true,
      //     confirmButtonText: 'Yes',
      //     cancelButtonText: 'No'
      //   }).then((response: any) => {
      //     if (response.value) {


      //   // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
      //   // radio3.disabled = false;
      //   // radio3.checked = false;
      //   // document.getElementById("div_thisevent").style.display = "none";

      //   this._PopupConfirmedValue = 1;
      //     } else if (response.dismiss === Swal.DismissReason.cancel) {
      //       Swal.fire(
      //         'Cancelled',
      //         'Meeting not moved.',
      //         'error'
      //       )
      //     }
      //   });
      var radio1 = document.getElementById('r1') as HTMLInputElement | null;
      radio1.disabled = false;
      radio1.checked = true;

      var radio2 = document.getElementById('r2') as HTMLInputElement | null;
      radio2.disabled = false;
      radio2.checked = false;

    }
    else if (this._OldRecurranceId == this.selectedrecuvalue && this._OldRecurranceValues == _arraytext.toString()) {
      document.getElementById("div_thisevent").style.display = "block";
      var radio1 = document.getElementById('r1') as HTMLInputElement | null;
      radio1.disabled = false;
      radio1.checked = true;

      var radio2 = document.getElementById('r2') as HTMLInputElement | null;
      radio2.disabled = false;
      radio2.checked = false;

      // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
      // radio3.disabled = false;
      // radio3.checked = false;
      this._PopupConfirmedValue = 1;

    }

    // alert(this._PopupConfirmedValue)
  }

  Select_flag(val) {
    this._PopupConfirmedValue = val;
  }





  Task_type(value) {
 
    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // document.getElementById("kt-bodyc").classList.add("overflow-hidden");


    document.getElementById("div_recurrence").style.display = "block";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";
    document.getElementById("Recurrence_hide").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Descrip_Name12").style.display = "none";
    document.getElementById("Location_Name").style.display = "none";

    this.clearallfields();
    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(this._StartDate);
    this.singleselectarry.push(this._StartDate);
    this.Schedule_ID = 0;
    this._subname = false;
    this.Note_deadlineexpire = false;
    this.editTask = false;
    this.copyTask = false;
    this.eventRepeat=false;
    this.create = true;
    this.currentTime=moment().format('h:mm A');

    if (value == 1) {
      this.ScheduleType = "Task";
      this.GetProjectAndsubtashDrpforCalender();
      document.getElementById("subtaskid").style.display = "flex";   // actions
      // document.getElementById("Link_Name").style.display = "none";
      document.getElementById("Guest_Name").style.display = "none";  // participants
      document.getElementById("Descrip_Name").style.display = "none";  // description
      document.getElementById("core_viw123").style.display = "flex";   // select projects (in task)
      document.getElementById("core_viw121").style.display = "none";   // select project (in event)
      document.getElementById("core_viw222").style.display = "none";   // select portfolio
      document.getElementById("core_Dms").style.display = "none";       // select dms
      document.getElementById("meeting-online-add").style.display = "none";  // meeting online or offline

    }
    else {
      this.ScheduleType = "Event";
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = null;
      this.GetProjectAndsubtashDrpforCalender();
      this.GetMemosByEmployeeId();


      document.getElementById("subtaskid").style.display = "none";    // actions
      // document.getElementById("Link_Name").style.display = "block";
      document.getElementById("Guest_Name").style.display = "flex";    // participants
      document.getElementById("Descrip_Name").style.display = "flex";  // description
      document.getElementById("core_viw121").style.display = "flex";   // select project (in event)
      document.getElementById("core_viw123").style.display = "none";   // select projects (in task)
      document.getElementById("core_viw222").style.display = "flex";  // select portfolio
      document.getElementById("core_Dms").style.display = "flex";      // select dms
      document.getElementById("meeting-online-add").style.display = "flex";  // meeting online or offline


      const TEsb = document.getElementById('TaskEvent-Sidebar');
      TEsb.addEventListener('scroll', () => {
        this.autocompletes.forEach((ac) => {
          if (ac.panelOpen)
            ac.updatePosition();
        });
      })
    }


    const format2 = "YYYY-MM-DD";
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = (moment(this.minDate).format(format2));
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
    }
    this.daysSelectedII.push(jsonData);
    console.log(this.daysSelectedII, "default")
    // this.Project_Code = "4001176";

  }


  changeScheduleType(val:number){
     if(val==1)
     {  // Task
       this.ScheduleType = "Task";
       this.GetProjectAndsubtashDrpforCalender();
       document.getElementById("subtaskid").style.display = "flex";
       document.getElementById("Guest_Name").style.display = "none";
       document.getElementById("Location_Name").style.display = "none";
       document.getElementById("Descrip_Name").style.display = "none";
       document.getElementById("core_viw123").style.display = "flex";
       document.getElementById("core_viw121").style.display = "none";
       document.getElementById("core_viw222").style.display = "none";
       document.getElementById("core_Dms").style.display = "none";
       document.getElementById("meeting-online-add").style.display = "none";
       document.getElementById('Descrip_Name12').style.display='none';

     }
     else if(val==2)
     {  // Event
       this.ScheduleType = "Event";
       this._calenderDto.Emp_No = this.Current_user_ID;
       this._calenderDto.Project_Code = null;
       this.GetProjectAndsubtashDrpforCalender();
       this.GetMemosByEmployeeId();
       document.getElementById("subtaskid").style.display = "none";
       document.getElementById("Guest_Name").style.display = "flex";
       document.getElementById("Location_Name").style.display = "flex";
       document.getElementById("Descrip_Name").style.display = "flex";
       document.getElementById("core_viw121").style.display = "flex";
       document.getElementById("core_viw123").style.display = "none";
       document.getElementById("core_viw222").style.display = "flex";
       document.getElementById("core_Dms").style.display = "flex";
       document.getElementById("meeting-online-add").style.display = "flex";
       document.getElementById('Descrip_Name12').style.display=this._onlinelink?'flex':'none';

     }
     this.MasterCode=null; // whenever user switches task to event or viceversa remove all selected projects.
  }







  subtask_loading:boolean=false;
  GetSubtasklistfromProject(MasterCode) {


    this.ProjectListArray.forEach(element => {

      if (element.Project_Code == MasterCode) {

        this.Projectstartdate = element.StatDate;
        this.projectEnddate = element.Enddate;
        this.Status_project = element.Status;
        this.AllocatedHours = element.Allocated;
        var number = this.calculateDiff(this.projectEnddate);
        const format2 = "YYYY-MM-DD"
        if (number >= 90) {

          // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
          this.Note_deadlineexpire = false;
        }
        else {
          if (number < 0) {
            if (this.ScheduleType == "Task") {
              // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
              this.Note_deadlineexpire = true;
            }
            else {
              // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
            }
          }
          else {
            // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
            this.Note_deadlineexpire = false;
          }
        }
      }

    });
    if (MasterCode != undefined) {
      this.subtask_loading=true;
      this._calenderDto.Project_Code = MasterCode;
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          // console.log(data);
          this.BlockNameProject1 = JSON.parse(data['Projectlist']);
          this.subtask_loading=false;
        });
      this._subname = false;
      this.ProjectListArray.forEach(element => {
        if (element.Project_Code == MasterCode) {
          this._Exec_BlockName = element.Exec_BlockName;
          this.SubmissionName = element.Submission;
        }
      });
      if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List" || this._Exec_BlockName == "Routine Tasks") {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "none";

      }
      else {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "flex";
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
        this.TM_DisplayName = element.TM_DisplayName
      }
    });


  }

  selectedDay(days) {

    //Checked the day
    let objIndex = this.dayArr1.findIndex((obj => obj.value == days.target.value));
    this.dayArr1[objIndex].checked = days.target.checked;
    // this.Recurr_arr.push(days.target.value);

    if(days.target.checked&&this.notProvided1=='dayarr1')
      this.notProvided1="";
  }

  pendingavailability: boolean = true;


  selectStartDate(event) {

    this._StartDate = event;
    let sd = event.format("YYYY-MM-DD").toString();
    this._SEndDate = event.format("YYYY-MM-DD").toString();
    this.minDate = sd;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Scheduled_date = sd;
    // this.CalenderService.NewGetPendingAvailability(this._calenderDto).subscribe((data)=>{
    //   if(data['message']=='1'){
    //     this.pendingavailability==false;
    //   }
    //   else{
    //     this.pendingavailability==true;
    //   }
    // });
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.scstartdate = d1;
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    var columnNames = "StartTime";
    var columnNamee = "EndTime";
    var IsActive = "IsActive";
    var Day = "Day";
    var DayNum = "DayNum";

    if (this.selectedrecuvalue == "0") {
      // this._EndDate = event.value.format("YYYY-MM-DD").toString();
      // this.maxDate = event.value.format("YYYY-MM-DD").toString();
      jsonData[columnName] = (moment(date).format(format2));
      jsonData[columnNames] = this.Startts;
      jsonData[columnNamee] = this.Endtms;
      jsonData[IsActive] = 1;
      jsonData[Day] = event.format('dddd').substring(0, 3);
      jsonData[DayNum] = event.format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
    }
    else {
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
        var IsActive = "IsActive";
        jsonData[IsActive] = 1;
        var Day = "Day";
        jsonData[Day] = moment(date).format('dddd').substring(0, 3);
        var DayNum = "DayNum";
        jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
        this.AllDatesSDandED.push(jsonData);
        date.setDate(date.getDate() + 1);
      }
    }



    // valid starttimearr setting start.
    let _inputdate=event;
    let _currentdate=moment();
    if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
    {
        const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
        const index:number=this.StartTimearr.findIndex((item:any)=>{
            const t=moment(item,'h:mm A');
            const result=t>=ct;
            return result;
        });
        this.validStartTimearr=this.StartTimearr.slice(index);

    // verify whether starttime and endtime are valid or not. start
    _currentdate.format('h:mm A');

    const inputtime1=moment(this.Startts,'h:mm A');
    const inputtime2=moment(this.Endtms,'h:mm A');
    if(inputtime1<ct)
      this.Startts=this.validStartTimearr[0];
    if(inputtime2<ct)
      this.Endtms=this.validStartTimearr[1];

   // verify whether starttime and endtime are valid or not. end

    }
    else
    this.validStartTimearr=[...this.StartTimearr];
    // valid starttimearr setting end.


  }

  // old
//   selectStartDate(event) {
// debugger
//     this._StartDate = event.value;
//     let sd = event.value.format("YYYY-MM-DD").toString();
//     this._SEndDate = event.value.format("YYYY-MM-DD").toString();
//     this.minDate = sd;
//     this._calenderDto.Schedule_ID = this.Schedule_ID;
//     this._calenderDto.Scheduled_date = sd;
//     // this.CalenderService.NewGetPendingAvailability(this._calenderDto).subscribe((data)=>{
//     //   if(data['message']=='1'){
//     //     this.pendingavailability==false;
//     //   }
//     //   else{
//     //     this.pendingavailability==true;
//     //   }
//     // });
//     var start = moment(this.minDate);
//     var end = moment(this.maxDate);
//     const format2 = "YYYY-MM-DD";
//     const d1 = new Date(moment(start).format(format2));
//     const d2 = new Date(moment(end).format(format2));
//     const date = new Date(d1.getTime());
//     this.daysSelectedII = [];
//     this.scstartdate = d1;
//     this.AllDatesSDandED = [];
//     var jsonData = {};
//     var columnName = "Date";
//     var columnNames = "StartTime";
//     var columnNamee = "EndTime";
//     var IsActive = "IsActive";
//     var Day = "Day";
//     var DayNum = "DayNum";

//     if (this.selectedrecuvalue == "0") {
//       // this._EndDate = event.value.format("YYYY-MM-DD").toString();
//       // this.maxDate = event.value.format("YYYY-MM-DD").toString();
//       jsonData[columnName] = (moment(date).format(format2));
//       jsonData[columnNames] = this.Startts;
//       jsonData[columnNamee] = this.Endtms;
//       jsonData[IsActive] = 1;
//       jsonData[Day] = event.value.format('dddd').substring(0, 3);
//       jsonData[DayNum] = event.value.format('DD').substring(0, 3);
//       this.AllDatesSDandED.push(jsonData);
//     }
//     else {
//       const dates = [];
//       while (date <= d2) {
//         dates.push(moment(date).format(format2));
//         var jsonData = {};
//         var columnName = "Date";
//         jsonData[columnName] = (moment(date).format(format2));
//         var columnNames = "StartTime";
//         jsonData[columnNames] = this.Startts;
//         var columnNamee = "EndTime";
//         jsonData[columnNamee] = this.Endtms;
//         var IsActive = "IsActive";
//         jsonData[IsActive] = 1;
//         var Day = "Day";
//         jsonData[Day] = moment(date).format('dddd').substring(0, 3);
//         var DayNum = "DayNum";
//         jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
//         this.AllDatesSDandED.push(jsonData);
//         date.setDate(date.getDate() + 1);
//       }
//     }

//   }

 // old






  selectEndDate(event) {

    for (let index = 0; index < this.dayArr.length; index++) {
      this.dayArr[index].checked = false;
    }

    this._EndDate = event.value.format("YYYY-MM-DD").toString();
    this.maxDate = event.value.format("YYYY-MM-DD").toString();

    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.AllDatesSDandED = [];
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
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = moment(date).format('dddd').substring(0, 3);
      var DayNum = "DayNum";
      jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
      date.setDate(date.getDate() + 1);
    }
    console.log(this.daysSelectedII, "Day Added array")
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
        // this.calendar.updateTodaysDate();
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
                if (this.ScheduleType == "Event") {
                  var IsActive = "IsActive";
                  jsonData[IsActive] = 0;
                }
                this.daysSelectedII.push(jsonData);

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
            if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
              var IsActive = "IsActive";
              jsonData[IsActive] = 1;
            }
            this.daysSelectedII.push(jsonData);
          }
        });
        // if (this.ScheduleType == "Task") {
        //   this.Checkdatetimetable(this.daysSelectedII);
        // }

        // this.calendar.updateTodaysDate();
      }
    }, delay);


  }

  Checkdatetimetable(_array) {


    this._calenderDto.json = JSON.stringify(_array);

    this._calenderDto.EmpNo = this.Current_user_ID;
    this.CalenderService.NewGetcheckdateandtime(this._calenderDto).subscribe
      ((data) => {
        this.daysSelectedII = JSON.parse(data['Checkdatetimejson']);
        // this.calendar.updateTodaysDate();

      });
  }

  // Doubleclick(event: any) {

  //   this.preventSingleClick = true;
  //   clearTimeout(this.timer);

  //   this._calenderDto.Scheduled_date = this.doubleclickdate;
  //   this.CalenderService.NewGetScheduledtime(this._calenderDto).subscribe
  //     ((data) => {
  //
  //       this.Avaliabletime = JSON.parse(data["AvailableSlotsJson"]);
  //       // this._total = this.Avaliabletime[0].SlotsJson.length;
  //       this.timeslotsavl = [];


  //     })
  //   // const date=event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);

  //   // console.log(event)
  //   // this.calendar.updateTodaysDate();

  // }

  getavltime(e) {
    this.timeslotsavl = [];
    this.timeslotsavl.push(this.Avaliabletime.find(i => i.count === parseInt(e.target.value)));
    this._selectedId = 0;
    this._SecondSelectedId = 0;
    this.timeslotsavl.forEach(element => {
      this._total = element.SlotsJson.length;
    });
  }

  subtashDrpLoading:boolean=false;
  GetProjectAndsubtashDrpforCalender() {
    this.subtashDrpLoading=true;
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        this.subtashDrpLoading=false;
        console.log(" Result of GetProjectAndsubtashDrpforCalender:", data);
        this.ProjectListArray = JSON.parse(data['Projectlist']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        this.companies_Arr=JSON.parse(data['Client_json']);

        console.log("_EmployeeListForDropdown",this._EmployeeListForDropdown);
        console.log("Portfoliolist_1:",this.Portfoliolist_1);
        console.log("ProjectListArray:",this.ProjectListArray);
        console.log('companies_Arr :',this.companies_Arr);
      });
  }

  EmployeeOnSelect(obj) {
    // this.selectedEmpNo = obj['Emp_No'];
    this.User_Name = obj;
  }

  GetTimeslabfordate() {
    this._calenderDto.minutes = 5;
    // this._hrtime = parseInt(moment(new Date()).format("HH"));
    // this.Startts = this._hrtime.toString() + ':00';
    this._calenderDto.StartTime = "00:00";
    this._calenderDto.EndTime = "23:55";

    this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe
      ((data) => {


        this._arrayObj = data as [];
        this.Alltimes = [];
        this.EndTimearr = [];
        this.AllEndtime = [];
        this.StartTimearr = [];

          this._arrayObj.forEach(element => {
          this.EndTimearr.push(element.TSEnd);
          this.AllEndtime.push(element.TSEnd);
          this.StartTimearr.push(element.TSStart);
          this.Alltimes.push(element.TSStart);
          // console.log("Arraydxxdd", this.EndTimearr);
        });



      // provide valid starttiming and endtimearr.    start
      let _currentdate=moment();
      const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
      const index:number=this.StartTimearr.findIndex((item:any)=>{
        const t=moment(item,'h:mm A');
        const result=t>=ct;
        return result;
      });
      this.validStartTimearr=this.StartTimearr.slice(index);


      this.timingarryend = [];
      this.Time_End = [];
      this.Time_End = this.AllEndtime;
      let _index = this.Time_End.indexOf(this.Startts);
      if (_index + 1 === this.Time_End.length) {
        _index = -1;
      }
      this.timingarryend = this.Time_End.splice(_index + 1);
      this.EndTimearr = this.timingarryend;
      // provide valid starttiming and endtimearr.    end

      });
  }






  purposeaddtime() {
    this.Alltimes = [];
    this.StartTimearr.forEach(element => {
      this.Alltimes.push(element);
    });
    // this.Startts = this.Startts;
    let _index = this.StartTimearr.indexOf(this.PropStart);

    this.EndTimearr = this.Alltimes.splice(_index + 1);
    // this.Startts = TSStart;
    let x=12;
    this.PurposeEnd = this.EndTimearr[x];

  }

currentTime:any;

  addstarttime() {

    this.Alltimes = [];
    this.EndTimearr = [];
    this.AllEndtime = [];
    this.StartTimearr = [];

    this._arrayObj.forEach(element => {
      this.EndTimearr.push(element.TSStart);
      this.AllEndtime.push(element.TSStart);
      this.StartTimearr.push(element.TSStart);
      this.Alltimes.push(element.TSStart);
      //  console.log( this.Alltimes,"times")
    });

    console.log("StartTimearr:", this.StartTimearr);
    console.log("EndTimearr:", this.EndTimearr);
    // alert(this.Startts);




    // this.Alltimes = [];
    // this.StartTimearr.forEach(element => {
    //   this.Alltimes.push(element);
    // });
    // this.Startts = this.Startts;

    this.timingarryend = [];
    this.Time_End = [];
    this.Time_End = this.AllEndtime;
    // this.Startts = TSStart;
    let _index = this.Time_End.indexOf(this.Startts);
    if (_index + 1 === this.Time_End.length) {
      _index = -1;
    }
    this.timingarryend = this.Time_End.splice(_index + 1);

    this.EndTimearr = this.timingarryend;
    this.timearr1 = this.Startts.split(":");
    let vahr = this.timearr1[0];
    let mins = this.timearr1[1].toString();

    if (vahr == 11 && mins.includes("AM")) {
      mins = mins.replace("AM", "PM")
    }
    else if (vahr == 11 && mins.includes("PM")) {
      mins = mins.replace("PM", "AM")
    }

    if (this.timearr1[0] == 11) {
      this._arrayObj.forEach(element => {
        this.EndTimearr.push(element.TSStart);

      });
      vahr = Number(vahr) + 1;
      if (vahr == 13) {
        vahr = '1'

      }
      this.Endtms = vahr.toString() + ':' + mins;
      // alert(this.Startts)
      // alert(this.Endtms)

      if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
        //  alert(this.scstartdate)
        // document.getElementById("Schenddate").style.display = "block";

      }
      else {
        this._SEndDate = this._StartDate;
      }

    }
    else {
      vahr = Number(vahr) + 1;
      if (vahr == 13) {
        vahr = '1'
      }
      if (vahr <= 9) {
        this.Endtms = '0' + vahr.toString() + ':' + mins;
      }
      else {
        this.Endtms = vahr.toString() + ':' + mins;
      }
    }



    //  alert(this._SEndDate)

    // this.Endtms = this.EndTimearr[0];

    this.daysSelectedII = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = this.minDate;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    var columnNameess = "SEndDate";
    jsonData[columnNameess] = moment(this._SEndDate).format("YYYY-MM-DD").toString();

    if (this.ScheduleType == "Event") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 0;
    }
    this.daysSelectedII.push(jsonData)

    const selectedStartTimeObj = new Date(`2000-01-01T${this.Startts}:00`);
    this.EndTimearr.forEach(element => {
      // alert(element)
      const _element = element;
      const EndTimeObj = new Date(`2000-01-01T${_element}:00`);
      const diffInMinutes = (EndTimeObj.getTime() - selectedStartTimeObj.getTime()) / 60000;
      // alert(diffInMinutes)
      element = _element.toString() + "-" + diffInMinutes.toString();

    });

    console.log(this.EndTimearr, "End Time Updated")
  }

  purposeEndtime(TSEnd) {
    this.PurposeEnd = TSEnd;
    if (this.PropStart > this.PurposeEnd) {
      this.PurposeEnd = this.PropStart;
    }

  }

  addendtime(TSEnd) {

    this.Endtms = TSEnd;

    if (this.Startts > this.Endtms) {
      this.Endtms = this.Startts;
    }



    this.daysSelectedII = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = this.minDate;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    if (this.ScheduleType == "Event") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 0;
    }
    this.daysSelectedII.push(jsonData)
    // this.daysSelectedII = [];
    // this.daysSelected.forEach(element => {
    //   const found = this.Timechangearry.some(el => el.Date === element);
    //   if (found) {
    //     this.Timechangearry.forEach(element2 => {
    //       if (element2.Date == element) {

    //         var jsonData = {};
    //         var columnName = "Date";
    //         jsonData[columnName] = element2.Date;
    //         var columnNames = "StartTime";
    //         jsonData[columnNames] = this.Startts;
    //         var columnNamee = "EndTime";
    //         jsonData[columnNamee] = this.Endtms;
    //         if (this.ScheduleType == "Event") {
    //           var IsActive = "IsActive";
    //           jsonData[IsActive] = 0;
    //         }

    //         this.daysSelectedII.push(jsonData)
    //       }
    //     });
    //   }
    //   else {
    //     var jsonData = {};
    //     var columnName = "Date";
    //     jsonData[columnName] = element;
    //     var columnNames = "StartTime";
    //     jsonData[columnNames] = this.Startts;
    //     var columnNamee = "EndTime";
    //     jsonData[columnNamee] = this.Endtms;
    //     if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
    //       var IsActive = "IsActive";
    //       jsonData[IsActive] = 1;
    //     }

    //     this.daysSelectedII.push(jsonData);
    //   }
    // });
    // if (this.ScheduleType == "Task") {
    //   this.Checkdatetimetable(this.daysSelectedII);
    // }
    // this.calendar.updateTodaysDate();

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
      // console.log("Updated Array" + JSON.stringify(this.Timechangearry))
      // this.calendar.updateTodaysDate();
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
    this.selectedrecuvalue = val.value.toString();
    // alert(this.selectedrecuvalue)
    if (this.selectedrecuvalue == '0') {
      this._PopupConfirmedValue = 1;
    }
    else {
      this._PopupConfirmedValue = 2;
    }
    this._labelName = "Start Date";   // based on repeat type setting label to 'start date' or 'schedule date'.
    document.getElementById("div_endDate_new").style.display = "block";
    for (let index = 0; index < this.dayArr.length; index++) {
      this.dayArr[index].checked = false;
    }
    for (let index = 0; index < this.MonthArr.length; index++) {
      this.MonthArr[index].checked = false;
    }
    this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.AllDatesSDandED = [];
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
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = moment(date).format('dddd').substring(0, 3);
      var DayNum = "DayNum";
      jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
      date.setDate(date.getDate() + 1);
    }
    if (val.value == 0) {
      this.maxDate = moment(this.minDate).format("YYYY-MM-DD").toString()
      this._labelName = "Schedule Date";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("div_endDate_new").style.display = "none";
      this.daysSelectedII = [];
      this.daysSelected = [];
      this.singleselectarry = [];
      const format2 = "YYYY-MM-DD";
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(this.minDate).format(format2));
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;

      this.daysSelectedII.push(jsonData);
      // this.calendar.updateTodaysDate();
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("weekly_122_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    if (val.value == 2) {

      document.getElementById("weekly_121_new").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";

    }
    else if (val.value == 1) {
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
      // this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
      // for (let index = 0; index < this.dayArr.length; index++) {
      //   this.dayArr[index].checked = false;
      // }

      // alert(this.AllDatesSDandED.length)
      // while (date <= d2) {

      //   dates.push(moment(date).format(format2));

      //   var jsonData = {};
      //   var columnName = "Date";
      //   jsonData[columnName] = (moment(date).format(format2));
      //   var columnNames = "StartTime";
      //   jsonData[columnNames] = this.Startts;
      //   var columnNamee = "EndTime";
      //   jsonData[columnNamee] = this.Endtms;
      //   if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
      //     var IsActive = "IsActive";
      //     jsonData[IsActive] = 1;
      //   }
      //   this.daysSelectedII.push(jsonData);
      //   date.setDate(date.getDate() + 1);
      // }
      // this.daysSelected = dates;
      // this.calendar.updateTodaysDate();
    }
    else if (val.value == 3) {
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "block";
    }

  }
  selectmonthlydays(day) {
    let objIndex = this.MonthArr1.findIndex((obj => obj.value == day.target.value));
    this.MonthArr1[objIndex].checked = day.target.checked;
    // this.calendar.updateTodaysDate();
    if(day.target.checked&&this.notProvided1=='montharr1')
      this.notProvided1="";
  }

  OnEmpSelect(emp: string) {

    let arr = [];
    this.EmployeeDropdown = emp['Emp_No'];
    console.log("Selected Employees---->", JSON.stringify(this.ngEmployeeDropdown));
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

  Meeting_status: boolean;
  AdminMeeting_Status: string;
  Isadmin: boolean;
  loading: boolean = false;
  statusofMeeting:any|undefined;
  RecurrenceValue:any

  GetClickEventJSON_Calender(arg) {
    this.EventScheduledjson = [];
    this.loading = true;
    this.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.loading = false;

        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        var Schedule_date =this.EventScheduledjson[0].Schedule_date
        this.meetingRestriction(Schedule_date);
        this.AdminMeeting_Status = data['AdminMeeting_Status'];
        this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
         console.log(this.EventScheduledjson, "Testing12");
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status.trim();
        this.Proposedate = this.EventScheduledjson[0].Schedule_date;
        this.PropStart = this.EventScheduledjson[0].St_Time;
        this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
        this.pro_date = this.EventScheduledjson[0].Purposedate;
        this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
        this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
        this.pro_enddate = this.EventScheduledjson[0].SEndDate;
        this.creation_date = this.EventScheduledjson[0].Created_date;

        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
        this.pending_status = this.EventScheduledjson[0].Pending_meeting;
        this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
        console.log(this.Meeting_status, "Meeting_status");
        this._StartDate=this.EventScheduledjson[0].Schedule_date;
        this.Startts=this.EventScheduledjson[0].St_Time;
        this.Endtms=this.EventScheduledjson[0].Ed_Time;
        this.RecurrenceValue=this.EventScheduledjson[0].Recurrence



        document.getElementById("deleteendit").style.display = "flex";
        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {

          document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':'flex';
          // document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("act-btn").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Meeting_status==false) && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {
        debugger
          document.getElementById("hiddenedit").style.display = "none";
          // document.getElementById("deleteendit").style.display = "flex";

            document.getElementById("main-foot").style.display = "flex";


          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";
        }
        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          // document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
          // document.getElementById("act-btn").style.display = "none";
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
          // document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        console.log(this.User_Scheduledjson, "000");
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

        var eventStatus=  this.User_Scheduledjson.filter(e=>e.stringval==this.Current_user_ID);
         this.statusofMeeting =eventStatus.length?eventStatus[0].Status:undefined;

        // console.log(this.statusofMeeting[0].Status, "12")
        this.dmsIdjson = [];
        if (this.DMS_Scheduledjson.length > 0) {
          this.DMS_Scheduledjson.forEach(element => {
            var jsonData = {};
            var columnName = "MailId";
            jsonData[columnName] = element;
            this.dmsIdjson.push(jsonData);
          });
          this.dmsIdjson = JSON.stringify(this.dmsIdjson);
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }




        // console.log(this.dmsIdjson,"ids");
      });
  }

  GetClickEventPending_Calenders(id) {

    this.Schedule_ID = id;
    // document.getElementById("act-btn").style.display = "none";
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {

        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "Testing");
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status;
        this.Proposedate = this.EventScheduledjson[0].Schedule_date;
        this.PropStart = this.EventScheduledjson[0].St_Time;
        this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
        this.pro_date = this.EventScheduledjson[0].Purposedate;
        this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
        this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
        this.pro_enddate = this.EventScheduledjson[0].SEndDate;
        this.creation_date = this.EventScheduledjson[0].Created_date;
        this.pending_status = this.EventScheduledjson[0].Pending_meeting;
        this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
        console.log(this.Meeting_status, "Meeting_status");
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];

        // console.log(this.EventScheduledjson, "Testing12");

        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {
          document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':"flex";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
          // document.getElementById("act-btn").style.display = "flex";
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "flex";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";

        }
        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
          // document.getElementById("act-btn").style.display = "none";
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "flex";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

        this.dmsIdjson = [];
        if (this.DMS_Scheduledjson.length > 0) {
          this.DMS_Scheduledjson.forEach(element => {
            var jsonData = {};
            var columnName = "MailId";
            jsonData[columnName] = element;
            this.dmsIdjson.push(jsonData);
          });
          this.dmsIdjson = JSON.stringify(this.dmsIdjson);
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }




        // console.log(this.dmsIdjson,"ids");
      });
  }
  getlistclick(id) {
    this.Schedule_ID = id;
    this.EventScheduledjson = [];
    this.loading = true;
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.loading = false;
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        // console.log(this.EventScheduledjson, "Testing");
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status;
        this.Proposedate = this.EventScheduledjson[0].Schedule_date;
        this.PropStart = this.EventScheduledjson[0].St_Time;
        this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
        this.pro_date = this.EventScheduledjson[0].Purposedate;
        this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
        this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
        this.pro_enddate = this.EventScheduledjson[0].SEndDate;
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
        this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
        console.log(this.Meeting_status, "Meeting_status");
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.creation_date = this.EventScheduledjson[0].Created_date;
        // console.log(this.EventScheduledjson, "Testing12");

        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {
          document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':'flex';
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "flex";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
        }
        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "flex";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

        this.dmsIdjson = [];
        if (this.DMS_Scheduledjson.length > 0) {
          this.DMS_Scheduledjson.forEach(element => {
            var jsonData = {};
            var columnName = "MailId";
            jsonData[columnName] = element;
            this.dmsIdjson.push(jsonData);
          });
          this.dmsIdjson = JSON.stringify(this.dmsIdjson);
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }




        // console.log(this.dmsIdjson,"ids");
      });
  }
  clearsearch() {
    this.Searchword = null;
    this.searchInput.nativeElement.focus();
  }
  Pending_request: any[] = [];
  pendingcount: any;
  GetPending_Request() {
    this._calenderDto.Emp_No = this.Current_user_ID;

    this.CalenderService.NewGetPending_request(this._calenderDto).subscribe
      ((data) => {
        this.Pending_request = data as [];
        this.pendingcount = this.Pending_request.length;
        // alert(this.pendingcount)
        // alert(this.Pending_request.length)
        console.log(this.Pending_request, "111100000")
      });
  }

  DelayActionsList: any[] = [];
  DelayActionscount: any;

  isDelay: boolean = false;
  delayDetails: any = [];

  GetclickDelayAction_details(item: any) {
    this.closeevearea1();
    $('.bg-ovr1').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this.delayDetails = item;

  }

  GetDelay_Actions() {
    this._calenderDto.Emp_No = this.Current_user_ID;

    this.CalenderService.NewGetDelay_actions(this._calenderDto).subscribe
      ((data) => {
        this.DelayActionsList = JSON.parse(data[0]['DelayActions_Json']);
        this.DelayActionscount = data[0]['Delayaction_Count'];

        // if(this.DelayActionscount>0){
        //   $('.bg-ovr1').addClass('d-block');
        //   $('.side_view').addClass('position-fixed');
        // }
        console.log(this.DelayActionsList, "Delayactions")
      });
  }

  Task_type1(value) {
    $('.bg-ovr1').removeClass('d-block');
    document.getElementsByClassName("bg-ovr1")[0].classList.remove("d-block");
    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("div_recurrence").style.display = "block";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";
    document.getElementById("Recurrence_hide").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Descrip_Name12").style.display = "none";
    this.clearallfields();
    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(this._StartDate);
    this.singleselectarry.push(this._StartDate);
    this.Schedule_ID = 0;
    this._subname = false;
    this.Note_deadlineexpire = false;
    this.editTask = false;
    this.copyTask = false;
    this.eventRepeat=false;
    this.create = true;
    if (value == 1) {
      this.ScheduleType = "Task";
      document.getElementById("subtaskid").style.display = "flex";
      // document.getElementById("Link_Name").style.display = "none";
      document.getElementById("Guest_Name").style.display = "none";
      document.getElementById("Location_Name").style.display = "none";
      document.getElementById("Descrip_Name").style.display = "none";
      document.getElementById("core_viw123").style.display = "flex";
      document.getElementById("core_viw121").style.display = "none";
      document.getElementById("core_viw222").style.display = "none";
      document.getElementById("core_Dms").style.display = "none";
      document.getElementById("online-add").style.display = "none";

    }

    this.Title_Name = this.delayDetails['Project_Name'];
    this.MasterCode = this.delayDetails['Master_Code'];

    this.Subtask = this.delayDetails['Project_Code'];


    // this.MasterCode=this.delayDetails['Master_Name'];
    // this.Subtask=this.delayDetails['Project_Name'];



    this.GetSubtasklistfromProject(this.MasterCode);
    setTimeout(() => {
      this.getChangeSubtaskDetais(this.Subtask);
    }, 2000);

    // this.MasterCode = this.ProjectListArray.find(item => item.Project_Code === this.delayDetails['Master_Code']);
    // alert(this.MasterCode)
    // alert(this.Subtask)

    const format2 = "YYYY-MM-DD";
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = (moment(this.minDate).format(format2));
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
    }


    this.daysSelectedII.push(jsonData);

    console.log(this.daysSelectedII, "default")
    // this.Project_Code = "4001176";

  }

  compareFn1(item1: any, item2: any): boolean {
    return item1 && item2 ? item1.Project_Code === item2.Project_Code : item1 === item2;
  }

  compareFn(item1: any, item2: any): boolean {
    return item1 && item2 ? item1.Project_Code === item2.Project_Code : item1 === item2;
  }

  openfooter1() {
    document.getElementById("ft_body1").classList.toggle("go-up");
    document.getElementById("secfootr1").classList.toggle("opend");
    document.getElementById("main-foot1").classList.toggle("overflow-hidden");
  }

  closefooter() {
    // $('.secfootr1').removeClass('opend');
    document.getElementById("ft_body1").classList.toggle("go-up");
    document.getElementById("secfootr1").classList.toggle("opend");
    document.getElementById("main-foot1").classList.toggle("overflow-hidden");
    $('#upload').html('Select a file');
    this._remarks = "";
  }
  _remarks: string;
  submitaction() {


    const fd = new FormData();
    fd.append("Project_Code", this.delayDetails['Project_Code']);
    fd.append("Master_Code", this.delayDetails['Master_Code']);
    fd.append("Team_Autho", this.delayDetails['Team_Res']);
    fd.append("Projectblock", this.delayDetails['Project_Block']);
    fd.append("Remarks", this._remarks);
    fd.append('file', this.selectedFile);
    fd.append("Project_Name", this.delayDetails['Project_Name']);
    console.log(this.delayDetails['Project_Code'], 'comple')
    this.service._UpdateSubtaskByProjectCode(fd)
      .subscribe(data => {
        this._remarks = "";
        this.selectedFile = null;
        this.closeInfo();
      });
    this.GetDelay_Actions();
    this.notifyService.showSuccess("Successfully Updated", 'Action completed');

    document.getElementById("ft_body1").classList.toggle("go-up");
    document.getElementById("secfootr1").classList.toggle("opend");
    document.getElementById("main-foot1").classList.toggle("overflow-hidden");
    $('.bg-ovr1').removeClass('d-block');
  }
  selectedFile: any = null;

  onFileChange1(e) {
    this.selectedFile = <File>e.target.files[0];
    console.log("--------------->", this.selectedFile)
  }

  user_Type:any=0;

  sortMeetingCalender(user_Types){
   this.user_Type=user_Types;
   this.GetScheduledJson()
  }


  fetchDataStartTime: number;
  fetchDataEndTime: number;
  dataBindStartTime: number;
  dataBindEndTime: number;
  fetchDataTime: number;
  dataBindTime: number;
  userFound : boolean | undefined;
  GetScheduledJson() {

    this._calenderDto.EmpNo = this.Current_user_ID;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe
      ((data) => {
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;

        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        console.log(this.Scheduledjson,'Calendar Json List')
        this.dataBindEndTime = performance.now();
        this.dataBindTime = this.dataBindEndTime - this.dataBindStartTime;
        this.userFound = true
        console.log("Fetch Data Time: in milliseconds", this.fetchDataTime);
        console.log("Data Bind Time: in milliseconds", this.dataBindTime);


        // var _now = moment().format() + "T" + moment().format("hh:mm:ss");

        this.calendarOptions = {
          initialView: 'listWeek',

          firstDay: moment().weekday(),

          // timeZone: 'local',
          // initialDate:new Date(1, 3-9, 2023),'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },

          themeSystem: "solar",
          weekNumbers: true,
          eventClick: this.GetClickEventJSON_Calender.bind(this),
          events: this.Scheduledjson,
          eventDidMount: this.customizeEvent,

          dayMaxEvents: 4,
          eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
            hour12: true
          },
          nowIndicator: true,
          allDaySlot: false,
          datesSet: () => { this.TwinEvent = []; }
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






  TwinEvent = [];
  customizeEvent = (info) => {
    const eventDate = info.event.end;
    const currentDate = new Date();
    const taskComplete = info.event.className;
    if (eventDate < currentDate) {
      const eventElement = info.el;
      eventElement.style.opacity = '0.5'; // Change the background color for past events
    }

    const time_str=info.el.children[0].innerHTML.toUpperCase();
    info.el.children[0].innerHTML=time_str.replace(/([0-9]+:[0-9]+)(AM|PM)/g, '$1 $2');
    // if(taskComplete == 'fc-green'){
    //   const eventElement = info.el;
    //   eventElement.style.opacity = '0.5';
    // }

    const event = info.event;
    const start = new Date(event.start);
    const end = new Date(event.end);

    // Normalize the start and end to the start of the day for comparison
    let startMidnight: any = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    let endMidnight: any = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    startMidnight = startMidnight.getTime();
    endMidnight = endMidnight.getTime();

    // Calculate the view range
    const viewStart = new Date(info.view.activeStart);
    const viewEnd = new Date(info.view.activeEnd);

    // Adjust viewEnd to the end of the last day of the range
    viewEnd.setDate(viewEnd.getDate() - 1);
    const viewStartMidnight = new Date(viewStart.getFullYear(), viewStart.getMonth(), viewStart.getDate()).getTime();
    const viewEndMidnight = new Date(viewEnd.getFullYear(), viewEnd.getMonth(), viewEnd.getDate(), 23, 59, 59, 999).getTime();

    // Determine if the event is within the current view
    const eventIsWithinView = startMidnight <= viewEndMidnight && endMidnight >= viewStartMidnight;

    // Only process events that are within the view and span more than one day

    // if (eventIsWithinView && (startMidnight !== endMidnight)) {
    //   let dayLabel = '';

    //   if (startMidnight >= viewStartMidnight && startMidnight <= viewEndMidnight) {
    //     dayLabel = 'Day (2/2)';
    //   }
    //   if (endMidnight > viewStartMidnight && endMidnight < viewEndMidnight) {
    //     dayLabel = 'Day (1/2)';
    //   }

    // //   // Check if the label should be applied
    //   if (dayLabel && !event.title.includes(dayLabel)) {
    //     const titleWithoutDay = event.title.replace(/ - Day \(.\..?\)/, '');
    //     const newTitle = `${titleWithoutDay} - ${dayLabel}`;
    //     event.setProp('title', newTitle);
    //   }
    // }
    //
    let is12am: boolean = (end.getHours() == 0 && end.getMinutes() == 0 && end.getSeconds() == 0);
    if (eventIsWithinView && (startMidnight !== endMidnight) && !is12am) {

      if (start < viewStart) {
        this.TwinEvent.push(event._def.extendedProps.Schedule_ID);
      }
      const r = this.TwinEvent.includes(event._def.extendedProps.Schedule_ID);

      let dayLabel = '';

      if (r) {
        dayLabel = 'Day (2/2)';
        const index = this.TwinEvent.indexOf(event._def.extendedProps.Schedule_ID);
        this.TwinEvent.splice(index, 1);

      }
      else {
        dayLabel = 'Day (1/2)';
        this.TwinEvent.push(event._def.extendedProps.Schedule_ID);
      }




      //   // Check if the label should be applied
      if (dayLabel && !event.title.includes(dayLabel)) {
        const titleWithoutDay = event.title.replace(/ - Day \(.\..?\)/, '');
        const newTitle = `${titleWithoutDay} - ${dayLabel}`;


        if (info.view.type === 'listWeek') {

          info.el.children[2].innerText = newTitle;
        }
        else {
          event.setProp('title', event.title);
          this.TwinEvent = [];
        }



      }
    }




  }



  public handleAddressChange(address: Address) {
debugger
    if (this.checkAddressURL(address.name.toString())) {
      this.Addressurl = address.name;
    }
    else {
      this.Addressurl = address.url;
    }
    this.Location_Type = address.name;


    console.log(address, "add11")
    this.Locationfulladd = address.formatted_address;

  }



  checkAddressURL(str) {

    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(str);
  }
  addreschange() {
    //24.668213927924413, 46.74734971286595
    //17.4333782,78.3664286
    const isValidStrings = ["17.4333", "78.3664"];
    // alert(validationLatitudeLongitude.latLong(...isValidStrings));

    if (this.Location_Type.includes(',')) {
      // alert(111)
      const loc = this.Location_Type.split(',');
      var lat = loc[0];
      var long = loc[1];
      var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
      if (reg.exec("40.6892")) {

        // alert(lat);
      } else {
      }
      if (reg.exec(long)) {
        // alert(long);
      }
      else {
      }


    }
  }


  handleEventClick(arg) {
    // console.log(arg, "ttttt")
    this.ProjectCode = arg.event._def.extendedProps.Schedule_ID;
    // alert(arg.event._def.extendedProps.Schedule_ID)
    // this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
    // document.getElementById("mysideInfobar").style.width = "70%";
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }

  closeInfo() {
    // document.getElementById("mysideInfobar").style.width = "0";
    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    document.getElementById("reqsideInfobar").classList.remove("open_sidebar");
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
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
    let Mode: string = "DelayProjects";

    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    // console.log(myurl)
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

  AssignedActions_Click() {
    this._ProjectDataList = [];
    let Mode: string = "AssignedActions";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
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

  newDetails(ProjectCode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }

  notification() {
    let name: string = 'Notifications';
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }


  myWin: any = {}

  meetingReport() {
    let name: string = 'Meeting-Report';
    var url = document.baseURI + name;
    var myurl = `${url}/${this.Schedule_ID}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
    // if (this.Meeting_status == false) {
    //   var myWindow = window.open(myurl, 'popup', 'width=800,height=800');
    //   this.myWin = myWindow;
    //   myWindow.focus();
    //   this.check();
    // }
    // else if (this.Meeting_status == true) {
    //   var myWindow = window.open(myurl);
    //   myWindow.focus();
    // }
  }

  delayMeeting:any;
  upcomingMeeting:any;
  meetingDuration:any;

  meetingRestriction(actualMeeting){

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 8);
    const meetingDate = new Date(actualMeeting);


    if (meetingDate >= sevenDaysAgo && meetingDate <= today) {
        this.delayMeeting = true;
        this.upcomingMeeting = false;
    }
    // Check if meeting date is in the future
    else if (meetingDate > today) {
        this.upcomingMeeting = true;
        this.delayMeeting = false;
    } else {
        this.delayMeeting = false;
        this.upcomingMeeting = false;
        const durationMillis = meetingDate.getTime() - sevenDaysAgo.getTime();
        // Convert milliseconds to days and add 8 to start from 8 days
        var meetingDurations = Math.ceil(durationMillis / (1000 * 60 * 60 * 24)) - 7;
        this.meetingDuration = Math.abs(meetingDurations);
       // console.log(this.meetingDuration, 'meetingDate:');
      }
  }




  newMeetingDetails() {
    let name: string = 'Meeting-Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${this.Schedule_ID}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }


  meetingDetails() {
    let name: string = 'Meeting-Details';
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  check() {
    console.log(this.myWin.closed)
    var myrhis = this
    var sid = this.Schedule_ID;
    var sid1 = this._calenderDto.Schedule_ID
    sid1 = sid;
    if (this.myWin.closed) {
      this.OnCloseCallAPI();
    }

    // alert(myrhis.myWin.closed)
    var timer =
      setInterval(function () {
        if (myrhis.myWin.closed) {

          // alert(sid1)
          // alert(timer);
          // alert("Meeting paused and added to Pending meeting list.");
          clearInterval(timer);


          //window.location.reload(); // Refresh the parent page
        }
        else {
          if (this.myWin.closed) {
            window.close();
          }
        }
      }, 1000);

  }
  OnCloseCallAPI() {
    alert('API');

  }

  GetMemosByEmployeeId() {
    this.loading=true;
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        console.log(this.Memos_List, "test iiii");
        this.loading=false;
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

  evereq() {
    this.Event_requests();
    document.getElementById("reqsideInfobar").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  closeevearea1() {
    document.getElementById("reqsideInfobar").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

  }

  actyside() {
    document.getElementById("actyInfobar").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  closeevearea2() {
    document.getElementById("actyInfobar").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

  }

  openschd() {
    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }
  Insert_indraft() {

    if (this.draftid != 0) {
      this._calenderDto.draftid = this.draftid;
    }
    else {
      this._calenderDto.draftid = 0;
    }
    this._calenderDto.Task_Name = this.Title_Name;
    this._calenderDto.Emp_No = this.Current_user_ID;
    if (this.SelectDms == null) {
      this.SelectDms = [];
    }
    this._calenderDto.Dms = this.SelectDms.toString();
    if (this.Portfolio == null) {
      this.Portfolio = [];
    }
    this._calenderDto.Portfolio = this.Portfolio.toString();
    this._calenderDto.location = this.Location_Type;
    this._calenderDto.loc_status = this._onlinelink;
    this._calenderDto.Note = this.Description_Type;
    this._calenderDto.Schedule_type = this.ScheduleType == "Task" ? 1 : 2;
    //  alert( this.ScheduleType);
    if (this.ngEmployeeDropdown == null) {
      this.ngEmployeeDropdown = [];
    }
    this._calenderDto.User_list = this.ngEmployeeDropdown.toString();
    if (this.MasterCode == null) {
      this.MasterCode = [];
    }
    this._calenderDto.Project_Code = this.MasterCode.toString();

    const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
    this._calenderDto.DraftAgendas=mtgAgendas;
    this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
      (data => {
        if (data['message'] == '1') {
          this.Getdraft_datalistmeeting();
          this.closeschd();
          this.notifyService.showSuccess("Draft saved", "Success");
        }
        if (data['message'] == '2') {
          this.Getdraft_datalistmeeting();
          this.closeschd();
          this.notifyService.showSuccess("Draft updated", "Success");
        }
      });


  }
  draftdata_meet: any = [];
  draftcount: any;
  Getdraft_datalistmeeting() {

    this._calenderDto.Emp_No = this.Current_user_ID;
    this.CalenderService.NewGetMeeting_darftdata(this._calenderDto).subscribe
      (data => {
        console.log(data, "ssdddd")
        if (data['Draft_meetingdata'] != "" && data['Draft_meetingdata'] != null && data['Draft_meetingdata'] != undefined) {
          this.draftdata_meet = JSON.parse(data['Draft_meetingdata']);
          this.draftcount = this.draftdata_meet.length;
          console.log(this.draftdata_meet,'testing process')
        }
        else {
          this.draftdata_meet = null;
          this.draftcount = 0;
          this.penhide1();
        }

        // alert(this.draftcount)
      });

  }

  delete_draft(draftid) {
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.draftid = draftid;
    this.CalenderService.NewDeleteDraft(this._calenderDto).subscribe
      (data => {
        if (data['message'] == '1') {
          this.Getdraft_datalistmeeting();
          this.notifyService.showSuccess("Draft deleted", "Success");
        }
      });
  }

  draftid: number = 0;
  draft_arry: any = [];

  darft_click(Sno, val) {
    this.draftid = Sno;

    this.Task_type(val);
    this.draft_arry = this.draftdata_meet.filter(x => x.Sno == Sno);
    this.Title_Name = this.draft_arry[0]["Task_name"]
    console.log(this.draft_arry[0], '6969')
    // console.log(this.draft_arry,"ss11111111")
    this.allAgendas = JSON.parse(this.draft_arry[0]['Agendas']);

    this.MasterCode = [];
    this.arr = JSON.parse(this.draft_arry[0]['Project_code']);
    this.arr.forEach(element => {
      this.MasterCode.push(element.stringval);
    });
    //  this.MasterCode=this.draft_arry[0]["Project_Code"]
    this.Portfolio = [];
    this.Portfolio1 = [];
    this.arr1 = JSON.parse(this.draft_arry[0]['Portfolio_id']);
    this.arr1.forEach(element => {
      this.Portfolio.push(element.numberval);
    });
    //  this.Portfolio=this.draft_arry[0]["portfolio_id"]
    this.SelectDms = [];
    this.SelectDms1 = [];
    // let arr3 = [];
    // var str = (this.draft_arry[0]['dms_id']);
    // arr3 = str.split(",");
    // for (var i = 0; i < arr3.length; i++) {
    //   this.Memos_List.forEach(element => {
    //     if (element.MailId == arr3[i]) {
    //       this.SelectDms.push(element.MailId);
    //     }
    //   });
    // }
    if(this.draft_arry[0]['dms_id']){
       this.SelectDms=this.draft_arry[0]['dms_id'].split(',');
    }
    else
     this.SelectDms=[];

    this.ngEmployeeDropdown = [];
    this.ngEmployeeDropdown1 = [];
    this.arr2 = JSON.parse(this.draft_arry[0]['guest_id']);
    this.arr2.forEach(element => {
      this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
    });
    //  this.ngEmployeeDropdown=this.draft_arry[0]["guest_id"]
    this.Description_Type = this.draft_arry[0]["Description"];
    this._onlinelink = this.draft_arry[0]["online"];
    this.Location_Type = this.draft_arry[0]["location"];
    $('#Descrip_Name12').css('display',this._onlinelink?'flex':'none');

  }
  closeschd() {

    // this.Insert_indraft();
    // document.getElementById('date-menu').classList.remove("show");
    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("Descrip_Name12").style.display = "none";

    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().format("YYYY-MM-DD").toString();
    this._SEndDate = null;
    this._SEndDate = moment().format("YYYY-MM-DD").toString();
    this.minDate = moment().format("YYYY-MM-DD").toString();
    this.Attachment12_ary = [];
    this.RemovedAttach = [];
    this._lstMultipleFiales = [];
    this.maxDate = null;
    this.selected = null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.characterCount=null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.projectsSelected = [];
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    this.draftid = 0;
    // this.Recurr_arr = [];
    this._status = null;
    this.Portfolio = null;
    this.Location_Type = null;
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
    this.allAgendas = [];
    this.agendasAdded = 0;
    this.TImetable();
    this.selectedrecuvalue = "0";
    // this.Doubleclick(this.event);
    // this.calendar.updateTodaysDate();
    this.dayArr.map((element) => {
      return element.checked = false;;
    });
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
    // var columnNames = "StartTime";
    // jsonData[columnNames] = this.Startts;
    // var columnNamee = "EndTime";
    // jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment().format('dddd').substring(0, 3);
    var DayNum = "DayNum";
    jsonData[DayNum] = moment().format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    this.GetTimeslabfordate();

    this.mtgOnDays=[];
    this.notProvided = false;
    this.subtask_loading=false;
    this._onlinelink=false;
    this._meetingroom=false;
    this.Link_Details = null;
    this.subtashDrpLoading=false;
    this.loading=false;

  }

  clearallfields() {

    this._StartDate = moment().format("YYYY-MM-DD").toString();
    // this._EndDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();

    this.minDate = moment().format("YYYY-MM-DD").toString();
    this.Attachment12_ary = [];
    this.RemovedAttach = [];
    this._lstMultipleFiales = [];
    this.maxDate = null;
    this.selected = null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.projectsSelected = [];
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    // this.Recurr_arr = [];
    this._status = null;
    this.Portfolio = null;
    this.Location_Type = null;
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
    this.allAgendas = [];
    this.agendasAdded = 0;
    this.TImetable();
    this.selectedrecuvalue = "0";
    // this.Doubleclick(this.event);
    // this.calendar.updateTodaysDate();
    this.dayArr.map((element) => {
      return element.checked = false;;
    });
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
    // var columnNames = "StartTime";
    // jsonData[columnNames] = this.Startts;
    // var columnNamee = "EndTime";
    // jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment().format('dddd').substring(0, 3);
    var DayNum = "DayNum";
    jsonData[DayNum] = moment().format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    this.GetTimeslabfordate();

    this.mtgOnDays=[];
    this.notProvided = false;
    this.subtask_loading=false;
    this.subtashDrpLoading=false;
    this.loading=false;
  }

  sweet_pending() {
    Swal.fire({
      title: 'Pending Meeting',
      text: 'Do you want to move the meeting to pending?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.Pending_meeting();
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Meeting not moved to pending.',
          'error'
        )
      }
    });
  }


  Pending_meeting() {
    // this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
    //   ((data) => {
    //     this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
    //   });
    this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
    this.CalenderService.NewPending_table(this._calenderDto).subscribe(text => {
      this.notifyService.showSuccess("Added In Pending Successfully", "Success");
      this.GetScheduledJson();
      this.GetPending_Request();
      this.closeevearea();
    });

  }

  sweet_end() {
    Swal.fire({
      title: 'End Meeting',
      text: 'Do you want to end the meeting?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.End_meeting();
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'End meeting cancelled.',
          'error'
        )
      }
    });
  }



  End_meeting() {
    this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Status = 'End';
    this._calenderDto.User_Type = 'Admin';
    this.CalenderService.NewTImerMeeting_report(this._calenderDto).subscribe
      (data => {

      });

    if (this.ScheduleType == 'Task') {
      this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
      this.MasterCode = (this.MasterCode[0].stringval);
      // this._calenderDto.User_list = this.ngEmployeeDropdown;
      // this._calenderDto.Dms = this.SelectDms;
      // this._calenderDto.Portfolio = this.Portfolio;
      this._calenderDto.Project = this.MasterCode;

      this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
        (data => {
          // this.notifyService.showSuccess("Successfully", "Completed");
          this.GetScheduledJson();
          this.GetPending_Request();
          this.closeevearea();
        });
      console.log(this._calenderDto, "dto")
      this.notifyService.showSuccess("Task completed.", "Success");
    }
    else if (this.ScheduleType == 'Event') {
      // this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
      this.MasterCode = [];
      this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
      this.arr.forEach(element => {
        this.MasterCode.push(element.stringval);
      });
      this.Portfolio = [];
      this.Portfolio1 = [];
      this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
      this.arr1.forEach(element => {
        this.Portfolio.push(element.numberval);
      });

      this.ngEmployeeDropdown = [];
      this.ngEmployeeDropdown1 = [];
      this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
      this.arr2.forEach(element => {
        this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
      });
      this.SelectDms = [];
      this.SelectDms1 = [];
      let arr3 = [];
      var str = (this.EventScheduledjson[0]['DMS_Name']);
      arr3 = str.split(",");
      for (var i = 0; i < arr3.length; i++) {
        this.Memos_List.forEach(element => {
          if (element.MailId == arr3[i]) {
            this.SelectDms.push(element.MailId);
          }
        });
      }
      this._calenderDto.User_list = this.ngEmployeeDropdown.join(',');
      this._calenderDto.Dms = this.SelectDms.join(',');
      this._calenderDto.Portfolio = this.Portfolio.join(',');
      this._calenderDto.Project = this.MasterCode.join(',');

      this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
        (data => {
          // this.notifyService.showSuccess("Successfully", "Completed");
          this.GetScheduledJson();
          this.GetPending_Request();
          this.closeevearea();
        });
      console.log(this._calenderDto, "dto")
      this.notifyService.showSuccess("Meeting ended successfully.", "Success");
    }


  }

  uncomplete_task() {
    // alert(this.Schedule_ID)

    this.CalenderService.NewTaskUncomplete(this.Schedule_ID).subscribe
      (data => {
        this.GetScheduledJson();
        this.GetPending_Request();
        this.closeevearea();
      });
    console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Task Uncomplete.", "Success");
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
    console.log(val, "ttt");
  }

  OnCardClick(P_id: any) {
    sessionStorage.setItem('portfolioId', P_id);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }

  openfooter() {
    document.getElementById("ft_body").classList.toggle("go-up");
    document.getElementById("secfootr").classList.toggle("opend");
    document.getElementById("main-foot").classList.toggle("overflow-hidden");
  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }
  menutoggle() {
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--show");
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--minimize");
  }
  daterange() {
    document.getElementById("range-picker").classList.toggle("d-none");
    document.getElementById("main-section").classList.toggle("d-none");

  }

  evesrchopn() {
    document.getElementById("drp-srch").classList.add("show");
    this.searchInput.nativeElement.focus();
    $(".fc-header-toolbar").addClass("d-none");
  }
  evesrchclose() {
    this.showsearch = false; this.Searchword = null;
    document.getElementById("drp-srch").classList.remove("show");
    $(".fc-header-toolbar").removeClass("d-none");
    this.GetScheduledJson();
    //document.getElementById("showlist").classList.remove("show");
    //document.getElementById("showlist").style.display = "none";
  }
  penshow() {
    document.getElementById("pendlist1").classList.remove("show");
    document.getElementById("requestlist").classList.remove("show");
    document.getElementById("pendlist").classList.add("show");
    document.getElementById("Delaylist").classList.remove("show");
    document.getElementById("cal-main").classList.add("col-lg-9");
    document.getElementById("cal-main").classList.remove("col-lg-12");

    this.GetPending_Request();
    // document.getElementById("act-btn").style.display = "none";
  }
  penshow1() {
    document.getElementById("requestlist").classList.remove("show");
    document.getElementById("pendlist").classList.remove("show");
    document.getElementById("pendlist1").classList.add("show");
    document.getElementById("Delaylist").classList.remove("show");
    document.getElementById("cal-main").classList.add("col-lg-9");
    document.getElementById("cal-main").classList.remove("col-lg-12");

    this.Getdraft_datalistmeeting()

    // document.getElementById("act-btn").style.display = "none";
  }

  requestAccess(){

    document.getElementById("requestlist").classList.add("show");
    document.getElementById("pendlist").classList.remove("show");
    document.getElementById("pendlist1").classList.remove("show");
    document.getElementById("Delaylist").classList.remove("show");
    document.getElementById("cal-main").classList.add("col-lg-9");
    document.getElementById("cal-main").classList.remove("col-lg-12");
    this.getMeetingApprovals()

  }


  penshow2() {
    document.getElementById("Delaylist").classList.add("show");
    document.getElementById("requestlist").classList.remove("show");
    document.getElementById("pendlist").classList.remove("show");
    document.getElementById("pendlist1").classList.remove("show");
    document.getElementById("cal-main").classList.add("col-lg-9");
    document.getElementById("cal-main").classList.remove("col-lg-12");

    this.GetDelay_Actions()

    // document.getElementById("act-btn").style.display = "none";
  }
  penhide() {
    document.getElementById("pendlist").classList.remove("show");
    document.getElementById("cal-main").classList.remove("col-lg-9");
    document.getElementById("cal-main").classList.add("col-lg-12");
  }
  penhide1() {

    // document.getElementById("pendlist1").classList.remove("show");
    // document.getElementById("cal-main").classList.remove("col-lg-9");
    // document.getElementById("cal-main").classList.add("col-lg-12");
    const pendlist1 = document.getElementById("pendlist1");
    const calMain = document.getElementById("cal-main");

    if (pendlist1 && calMain) {
      pendlist1.classList.remove("show");
      calMain.classList.remove("col-lg-9");
      calMain.classList.add("col-lg-12");
    }
  }
  penhide2() {
    document.getElementById("Delaylist").classList.remove("show");
    document.getElementById("cal-main").classList.remove("col-lg-9");
    document.getElementById("cal-main").classList.add("col-lg-12");
  }
  penhide3() {
    document.getElementById("requestlist").classList.remove("show");
    document.getElementById("cal-main").classList.remove("col-lg-9");
    document.getElementById("cal-main").classList.add("col-lg-12");
  }




  // bar graph
  // drawLineGraph() {
  //   var options = {
  //     series: [{
  //       name: 'Series 1',
  //       data: [this.DelayCount, this.DelayActionCount, this.TotalExpiryInMonth, this.ProjectsNotStarted, this.AssignedProjects, this.ProjectsNotWorking,
  //         this.RejectedCount, this.CompletedCount, this.AssignActionCount
  //       ]
  //     }],
  //     chart: {
  //       type: 'line', // Change chart type to line
  //       height: 350
  //     },
  //     plotOptions: {
  //       bar: {
  //         borderRadius: 4,
  //         horizontal: true,
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     xaxis: {
  //       categories: ['Delay Projects', 'Delay Actions', 'Delay In One Month', 'Projects not Started', 'Assigned Projects', 'Not Working from 1 Month', 'Rejected Projects',
  //         'Under Approval Projects', 'Assigned Actions'
  //       ],
  //     }
  //   };

  //   var chart = new ApexCharts(document.querySelector("#ActionBar-chart"), options);
  //   chart.render();
  // }


  // bar graph
  // agenda in event creation start
  agendaInput: string | undefined;
  allAgendas: any = [];
  agendasAdded: number = 0;
  addAgenda() {
    if (this.agendaInput.trim().length > 0 && this.agendaInput.trim().length < 100) {
      this.agendasAdded += 1;
      const agenda = {
        index: this.agendasAdded,
        name: this.agendaInput
      };
      this.allAgendas.push(agenda);
      this.agendaInput = undefined;
    }

    console.log("allAgendas:", this.allAgendas);
  }

  deleteAgenda(index: number) {

    if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
      const agenda_toRemove=this.allAgendas[index].name;
      this.allAgendas.splice(index, 1);
      this.notifyService.showSuccess(agenda_toRemove,'Agenda removed');
    }
    console.log("allAgendas:", this.allAgendas);
  }


  editAgenda(index: number) {
    $(`#agenda-label-${index}`).addClass('d-none');
    $(`#agenda-text-field-${index}`).removeClass('d-none');
    $(`#agenda-text-field-${index}`).focus();

    $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
    $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

    $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
    $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.

  }

  cancelAgendaEdit(index: number) {
    const tf: any = document.getElementById(`agenda-text-field-${index}`);
    tf.value = this.allAgendas[index].name;

    $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
    $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
    $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
    $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
    $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
    $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
  }


  updateAgenda(index: number) {
    const tf: any = document.getElementById(`agenda-text-field-${index}`);
 
    if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
    this.allAgendas[index].name = tf.value;
    
    $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
    $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
    $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
    $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
    $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
    $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.

  } else if (tf.value.trim().length == 0){
    this.notifyService.showInfo("Please enter atleast one word","");
  }else {
    this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
  }
   
  }
  // agenda in event creation end





  // mat-autocomplete dropdowns code start.
  @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
  openAutocompleteDrpDwn(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
  }

  closeAutocompleteDrpDwn(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
  }




  // isDMSMemoDrpDwnOpen: boolean = false;
  // onDMSMemoSelected(e) {
  //   const memoChoosed = this.Memos_List.find((c) => c.MailId === e.option.value);
  //   if (memoChoosed) {
  //     if (!this.SelectDms)   // if SelectDms is null,undefined,''
  //       this.SelectDms = [];

  //     const index = this.SelectDms.indexOf(memoChoosed.MailId);
  //     if (index === -1) {
  //       // if not present then add it
  //       this.SelectDms.push(memoChoosed.MailId);
  //     }
  //     else { //  if item choosed is already selected then remove it.
  //       this.SelectDms.splice(index, 1);
  //     }
  //   }
  //   this.openAutocompleteDrpDwn('MemoDrpDwn');
  // }
  // removeSelectedDMSMemo(item) {
  //   const index = this.SelectDms.indexOf(item);
  //   if (index !== -1) {
  //     this.SelectDms.splice(index, 1);
  //   }
  // }

  // isParticipantsDrpDwnOpen: boolean = false;
  // onParticipantSelected(e: any) {
  //   const participantChoosed = this._EmployeeListForDropdown.find((c) => c.Emp_No === e.option.value);
  //   if (participantChoosed) {
  //     if (!this.ngEmployeeDropdown)   // if ngEmployeeDropdown is null,undefined,''
  //       this.ngEmployeeDropdown = [];

  //     const index = this.ngEmployeeDropdown.indexOf(participantChoosed.Emp_No);
  //     if (index === -1) {
  //       // if not present then add it
  //       this.ngEmployeeDropdown.push(participantChoosed.Emp_No);
  //     }
  //     else { //  if item choosed is already selected then remove it.
  //       this.ngEmployeeDropdown.splice(index, 1);
  //     }
  //   }
  //   this.openAutocompleteDrpDwn('ParticipantsDrpDwn');
  // }

  // removeSelectedParticipant(item) {
  //   const index = this.ngEmployeeDropdown.indexOf(item);
  //   if (index !== -1) {
  //     this.ngEmployeeDropdown.splice(index, 1);
  //   }
  // }


  // isPortfolioDrpDwnOpen: boolean = false;
  // onPortfolioSelected(e: any) {

  //   const portfolioChoosed: any = this.Portfoliolist_1.find((p: any) => p.portfolio_id === e.option.value);
  //   console.log(portfolioChoosed);
  //   if (portfolioChoosed) {
  //     if (!this.Portfolio)   // if Portfolio is null,undefined,''
  //       this.Portfolio = [];
  //     const index = this.Portfolio.indexOf(portfolioChoosed.portfolio_id);
  //     if (index === -1) {
  //       // if not present then add it
  //       this.Portfolio.push(portfolioChoosed.portfolio_id);
  //     }
  //     else { //  if item choosed is already selected then remove it.
  //       this.Portfolio.splice(index, 1);
  //     }
  //   }
  //   this.openAutocompleteDrpDwn('PortfolioDrpDwn');
  // }


  // removeSelectedPortfolio(item) {
  //   const index = this.Portfolio.indexOf(item);
  //   if (index !== -1) {
  //     this.Portfolio.splice(index, 1);
  //   }
  // }



  getObjOf(arr, id, idName) {
    if(arr){
      const obj = arr.find(item => item[idName] == id);
      return obj?obj:'';
    }
    return '';
  }


  searchingResult: boolean = false;

  // isProjectsDrpDwnOpen: boolean = false;
  // removeSelectedProject(item) {
  //   const index = this.MasterCode.indexOf(item);
  //   if (index !== -1) {
  //     this.MasterCode.splice(index, 1);
  //     this.projectsSelected.splice(index,1);
  //   }
  // }

  // onProjectSelected(e: any) {
  //   const prjChoosed = this.ProjectListArray.find((p: any) => p.Project_Code === e.option.value);
  //   if (prjChoosed) {
  //     if (!this.MasterCode)   // if MasterCode is null,undefined,''
  //       this.MasterCode = [];
  //     const index = this.MasterCode.indexOf(prjChoosed.Project_Code);
  //     if (index === -1) {
  //       // if not present then add it
  //       this.MasterCode.push(prjChoosed.Project_Code);
  //       this.projectsSelected.push({
  //         Project_Code:prjChoosed.Project_Code,
  //         Project_Name:prjChoosed.Project_Name,
  //         BlockNameProject:prjChoosed.BlockNameProject
  //       });
  //     }
  //     else {
  //       this.MasterCode.splice(index, 1);
  //       this.projectsSelected.splice(index,1);
  //     }
  //   }
  //   this.openAutocompleteDrpDwn('ProjectsDrpDwn');
  // }


  // getProjectName(projectCode: string) {
  //   if (this.projectsSelected) {
  //     const P = this.projectsSelected.find(pr => pr.Project_Code.trim() == projectCode.trim());
  //     return P ? P.BlockNameProject : '';
  //   }
  //   return [];
  // }
  // mat-autocomplete dropdowns code end.


  // getTimeDuration(time1:string,time2:string){
  //   if(time1&&time2){
  //     time1='2024-04-20 '+time1;
  //     if(time1.toLocaleUpperCase().includes('PM')&&time2.toUpperCase().includes('AM')){
  //         time2='2024-04-21 '+time2;
  //     }else
  //     time2='2024-04-20 '+time2;

  //     let T1=moment(time1,'YYYY-MM-DD hh:mm a');
  //     let T2=moment(time2,'YYYY-MM-DD hh:mm a');
  //     const result=Math.abs(T1.diff(T2,'minute'));
  //     return result<60?(result+' mins'):
  //               (result/60).toFixed(2)+' hrs';

  //   }

  // }

inputTyped:string;
onProjectSearch(inputtext:any){

   if(this.searchingResult==false){
    const filterobj=this.basedOnFilter;

    this.isFilteredOn=(this.basedOnFilter.byuser||this.basedOnFilter.bycompany);  //  on the filter dot if applied.

    this.searchingResult=true;
    this.CalenderService.NewGetProjectandsubtaskDrp(inputtext,filterobj).subscribe((res:any)=>{
        console.log(res);
        if(res){
          this.ProjectListArray=JSON.parse(res['Projectlist']);
           console.log("project name searched result:",this.ProjectListArray);
          this.searchingResult=false;

          if(this.inputTyped!=undefined){
             const newsearch=this.inputTyped;
             this.inputTyped=undefined;
             this.onProjectSearch(newsearch);
          }

        }
    });
   }
   else
   this.inputTyped=inputtext;

}





  onInputSearch(inputText:any){
    let keyname;
    let arrtype;
    let selectedinto;
    let property_name;
    if(this.projectmodaltype=='participant')
     {
       keyname='DisplayName';
       arrtype=this._EmployeeListForDropdown;
       selectedinto='ngEmployeeDropdown';
       property_name='Emp_No';
     }
    else if(this.projectmodaltype=='portfolio')
    {
       keyname='Portfolio_Name';
       arrtype=this.Portfoliolist_1;
       selectedinto='Portfolio';
       property_name='portfolio_id';
    }
    else if(this.projectmodaltype=='SMail')
    {
      keyname='Subject';
      arrtype=this.Memos_List;
      selectedinto='SelectDms';
      property_name='MailId';
    }

    const result=arrtype.filter(item=>{

      const unselected:boolean=!(this[selectedinto]&&this[selectedinto].includes(item[property_name]));
      let nameMatched:boolean=false;
      if(unselected)
      nameMatched=item[keyname].toLowerCase().trim().includes(inputText.toLowerCase().trim())

      return nameMatched;
    });
    this.FilteredResults=result;
  }


  project_filter() {
    document.getElementById("project-filter").classList.add("show");
    document.getElementById("filter-icon").classList.add("active");
  }
  close_project_filter() {
    document.getElementById("project-filter").classList.remove("show");
    document.getElementById("filter-icon").classList.remove("active");
  }


  customrecurrencemodal() {
    // document.getElementById('drop-overlay').classList.add("show");
    // document.getElementById('customrecurrence').classList.add("show");
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("customrecurrence").style.display = "block";

    this.selectedrecuvalue1=this.selectedrecuvalue;
    this.dayArr1=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
    this.MonthArr1=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
    this._EndDate1=moment(this._EndDate);

    if(this.selectedrecuvalue1=='2')
      document.getElementById("weekly_121_new").style.display = "block";
    else if(this.selectedrecuvalue1=='3')
      document.getElementById("Monthly_121_new").style.display = "block";

    if(this.selectedrecuvalue1!='0')
      document.getElementById("div_endDate_new").style.display = "block";

  }
  
  close_customrecurrencemodal() {
    // document.getElementById('drop-overlay').classList.remove("show");
    // document.getElementById('customrecurrence').classList.remove("show");
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("customrecurrence").style.display = "none";

    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";

    this.selectedrecuvalue1='0';
    this.dayArr1=[];
    this.MonthArr1=[];
    this._EndDate1=moment().add(3, 'months').format("YYYY-MM-DD").toString();
  }

  date_menu(dialogId:string){
    document.getElementById(dialogId).classList.add("show");
    document.getElementById('date-menu').classList.add("show");
    document.getElementById('drop-overlay').classList.add("show");


  }
  date_menu_close(dialogId:string){
    $(`#${dialogId}`).removeClass('show');
    $('#date-menu').removeClass('show');
    $('#drop-overlay').removeClass('show');

  }
  date_menu_modal() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("datemenu").style.display = "block";

  }
  date_menu_modal_close() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("datemenu").style.display = "none";

  }

datemen(dialogId:string){
  document.getElementById(dialogId).classList.add("show");

}
date_menuclo(dialogId:string){
  $(`#${dialogId}`).removeClass('show');
}

selectedItemsTippy:any;
updateTippyItems(){
  let newstr='';
  let names=[];
  switch(this.projectmodaltype)
  {
      case 'project':{
         names=this.choosedItems.map((obj)=>obj.BlockNameProject);
      };break;
      case 'SMail':{
         names=this.Memos_List.filter(item=>this.choosedItems.includes(item.MailId)).map(obj=>obj.Subject);
      };break;
      case 'participant':{
         names=this._EmployeeListForDropdown.filter(item=>this.choosedItems.includes(item.Emp_No)).map(obj=>obj.DisplayName);
      };break;
      case 'portfolio':{
         names=this.Portfoliolist_1.filter(item=>this.choosedItems.includes(item.portfolio_id)).map(obj=>obj.Portfolio_Name);
      };break;
  }

  if(names&&names.length){
      newstr=`
      <div class='p-1'>
        <div class='fs-6 mb-3 text-info'>(${names.length}) selected</div>
        <ul type='i' class='pl-3'>
          ${names.map(item=>`<li class='fs-7 mb-1'>${item}</li>`).join('')}
        </ul>
      </div>
      `;
  }
  this.selectedItemsTippy[0].setContent(newstr);
}

projectmodal(modaltype:'project'|'portfolio'|'SMail'|'participant'){

  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("projectmodal").style.display = "block";
  this.projectmodaltype=modaltype;
  const searchField:any=document.querySelector(`#projectmodal input#${modaltype=='project'?'PrjInputSearch':'InputSearch'}`);
  if(searchField)searchField.focus();

  if(modaltype==='project'){
    this.onProjectSearch('');
    this.choosedItems.getPcodes=()=>{
        return this.choosedItems.map(item=>item.Project_Code);
    }
  }

  if(modaltype!='project'){
    this.onInputSearch('');
  }

  setTimeout(()=>{
    this.selectedItemsTippy=tippy((this.projectmodaltype=='project')?'#keep-items-btn1':'#keep-items-btn2', {
      content: '',
      arrow: true,
      animation: 'scale-extreme',
      theme: '',
      placement: 'left',
      allowHTML: true
    });
  },1000)

}
close_projectmodal(){
  document.getElementById("schedule-event-modal-backdrop").style.display = "none";
  document.getElementById("projectmodal").style.display = "none";
  this.choosedItems=[];   // clear selections.
  this.isFilteredOn=false;
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;    // clear filter applied.
  this.FilteredResults=[];             // clear filtered result.
  this.projectmodaltype=undefined; // no model open.
}

characterCount: number = 0;

updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.Description_Type;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}
// new design of select prj,select memo, select portfo, select participants.....etc start

// choosedItems:any=[];   // initially nothing selected.
// onItemChoosed(itemno:any){
//    this.choosedItems.push(itemno);
// }
companies_Arr:any;
basedOnFilter:any={};
projectmodaltype:'project'|'portfolio'|'SMail'|'participant'|undefined;
choosedItems:any=new Array();
FilteredResults:any=[];     // it is used to store the filtered result.
isFilteredOn:boolean=false;
discardChoosedItem(listtype:'PROJECT'|'PORTFOLIO'|'DMS'|'PARTICIPANT',item:string){
  switch(listtype){
     case 'PROJECT':{
            const i=this.MasterCode.findIndex(pc=>pc==item);
            this.MasterCode.splice(i,1);
            this.projectsSelected.splice(i,1);
     };break;
     case 'PORTFOLIO':{
          const i=this.Portfolio.findIndex(ptf=>ptf==item);
          this.Portfolio.splice(i,1);

     };break;
     case 'DMS':{
           const i=this.SelectDms.findIndex(m=>m==item);
           this.SelectDms.splice(i,1);

     };break;
     case 'PARTICIPANT':{
          const i=this.ngEmployeeDropdown.findIndex(em=>em==item);
          this.ngEmployeeDropdown.splice(i,1);

     };break;
     default:{};
  }

}

keepChoosedItems(){
  switch(this.projectmodaltype)
  {
      case 'project':{
        if(!this.MasterCode) // if MasterCode is null,undefined,'',0
          this.MasterCode=[];

        this.MasterCode=[...this.MasterCode, ...this.choosedItems.map(item=>item.Project_Code)]; // selected prj codes
        this.projectsSelected=[...this.projectsSelected,...this.choosedItems.map(item=>({ Project_Code:item.Project_Code, Project_Name:item.Project_Name, BlockNameProject:item.BlockNameProject, TM_DisplayName:item.TM_DisplayName }))]; // selected prj objs
        this.close_projectmodal();
      };break;

      case 'portfolio':{
            if (!this.Portfolio)   // if Portfolio is null,undefined,''
            this.Portfolio = [];

           this.Portfolio=[...this.Portfolio,...this.choosedItems];  // array of portfolio ids.
           this.close_projectmodal();
      };break;

     case 'SMail':{
          if(!this.SelectDms)   // if SelectDms is null,undefined,''
            this.SelectDms=[];

          this.SelectDms=[...this.SelectDms,...this.choosedItems];   // array of all selected dms id.
          this.close_projectmodal();
     };break;

     case 'participant':{
      if(!this.ngEmployeeDropdown)
         this.ngEmployeeDropdown=[];

        this.ngEmployeeDropdown=[...this.ngEmployeeDropdown,...this.choosedItems];
        this.close_projectmodal();
     };break;

  }

}

onItemChoosed(choosed:boolean,choosedItem:any){
    if(choosed){
      this.choosedItems.push(choosedItem);
    }
    else{
      const i=this.choosedItems.findIndex(item=>(this.projectmodaltype==='project')?(item.Project_Code==choosedItem.Project_Code):(item===choosedItem));
      if(i>-1)
      this.choosedItems.splice(i,1);

      // when removing already selected items
      // if(this.projectmodaltype==='PROJECT'){
      //       const j=this.MasterCode.findIndex(item=>item==choosedItem.Project_Code);
      //       if(j>-1){
      //         this.MasterCode.splice(j,1);
      //         this.projectsSelected.splice(j,1);
      //       }
      // }
      // else{
      //   const ary=this.projectmodaltype=='PORTFOLIO'?this.Portfolio:this.projectmodaltype=='DMS'?this.SelectDms:this.ngEmployeeDropdown;
      //   const j=ary.findIndex(item=>item==choosedItem);
      //   if(j>-1)
      //   ary.splice(j,1);
      // }
         // when removing already selected items
    }

    this.updateTippyItems();
}


onPortfolioFilter(){
    const fresult=this.Portfoliolist_1.filter((prtf:any)=>{
         const x=(prtf.Emp_Comp_No===this.basedOnFilter.bycompany||!this.basedOnFilter.bycompany);
         const y=(prtf.Created_By===this.basedOnFilter.byuser||!this.basedOnFilter.byuser);
         const z=x&&y;
         const isSelected:boolean=this.Portfolio&&this.Portfolio.includes(prtf.portfolio_id);
         return isSelected?false:z;
    });
    this.FilteredResults=fresult;
    this.isFilteredOn=true;
}

onDMSFilter(){
     const _Emp=this._EmployeeListForDropdown.find(_emp=>_emp.Emp_No===this.basedOnFilter.byuser);
      const fresult=this.Memos_List.filter((_memo:any)=>{

       let hasMemo:boolean=false;
       hasMemo=(!this.basedOnFilter.byuser)||(_memo.DisplayName.toLowerCase().trim()===_Emp.TM_DisplayName.toLowerCase().trim());

       let isSelected:boolean=false;
       isSelected=this.SelectDms&&this.SelectDms.includes(_memo.MailId);

       return isSelected?false:hasMemo;
      });

      this.FilteredResults=fresult;
      this.isFilteredOn=true;
}

onParticipantFilter(){
   const fresult=this._EmployeeListForDropdown.filter((_emp:any)=>{
      const isEmpIn:boolean=(!this.basedOnFilter.bycompany)||_emp.Emp_Comp_No.trim()===this.basedOnFilter.bycompany;
      let includeEmp:boolean=false;
      if(isEmpIn)
      includeEmp=!(this.ngEmployeeDropdown&&this.ngEmployeeDropdown.includes(_emp.Emp_No));
      return includeEmp;
   });
   this.FilteredResults=fresult;
   this.isFilteredOn=true;
}

clearAppliedFiltered(){
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;
    switch(this.projectmodaltype){
        case 'project':{
          this.onProjectSearch('');
        };break;
        case 'portfolio':{
          this.onPortfolioFilter();
        };break;
        case 'SMail':{
          this.onDMSFilter();
        };break;
        case 'participant':{
          this.onParticipantFilter();
        };break;
        default:{};
    }
    this.isFilteredOn=false;
}

// new design of select prj,select memo, select portfo, select participants.....etc end

















// 'repeat' new option start
eventRepeat:boolean=false;
earlyDate:boolean=false;
onCustomBtnClicked(){
  $('#propse11').removeClass('show');
  this.repeatEvent();
}



repeatEvent() {
  document.getElementById("div_endDate_new").style.display = "none";
  document.getElementById("Schenddate").style.display = "none";

  this.editTask = false;
  this.copyTask = false;
  this.create = false;
  this.eventRepeat=true;


  this.Schedule_ID = this._calenderDto.Schedule_ID;
  this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
    ((data) => {

      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      this.Schedule_ID = 0;   // schedule id.
      this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];  // event or task
      this.EventNumber = this.EventScheduledjson[0]['EventNumber'];

      this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
      this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
      this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
      this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
      this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
      this.Addressurl = this.EventScheduledjson[0]['Addressurl'];             // url
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];   // file attachment

      // if (this._FutureEventTasksCount > 0) {

      // }
      // else if (this._FutureEventTasksCount == 0) {

      // }
      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");


      this.AllDatesSDandED = [];
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(this.minDate).format("YYYY-MM-DD"));//this.EventScheduledjson[0]['Schedule_date'];
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = "NA";
      var DayNum = "DayNum";
      jsonData[DayNum] = "NA";
      this.AllDatesSDandED.push(jsonData);
      this._StartDate = moment().format("YYYY-MM-DD").toString();
      this.minDate = moment().format("YYYY-MM-DD").toString();
      if (this.minDate > this._StartDate) {
        this.minDate = this._StartDate;
      }
      this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();



       if (this.ScheduleType == 'Event') {
        this.allAgendas=this.EventScheduledjson[0]['Agendas'].map(item=>({index:item.AgendaId,name:item.Agenda_Name}));
        this.GetProjectAndsubtashDrpforCalender();
        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
        this.MasterCode = [];
        this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
        this.arr.forEach(element => {
          this.MasterCode.push(element.stringval);
          this.projectsSelected.push({  Project_Code:element.stringval,  Project_Name:element.Project_Name, BlockNameProject:element.BlockNameProject, TM_DisplayName:element.TM_DisplayName });
        });
        this.Portfolio = [];
        this.Portfolio1 = [];
        this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
        this.arr1.forEach(element => {
          this.Portfolio.push(element.numberval);
        });

        this.ngEmployeeDropdown = [];
        this.ngEmployeeDropdown1 = [];
        this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
        this.arr2.forEach(element => {
          this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
        });


        this.SelectDms = [];
        this.SelectDms1 = [];

        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data) => {
               this.Memos_List = JSON.parse(data['JsonData']);
               console.log(this.Memos_List, "test iiii");

               let arr3 = [];
               var str = (this.EventScheduledjson[0]['DMS_Name']);
               arr3 = str.split(",");
               for (var i = 0; i < arr3.length; i++) {
                    this.Memos_List.forEach(element => {
                      if (element.MailId == arr3[i]) {
                        this.SelectDms.push(element.MailId);
                      }
                    });
               }

        });


        this.Location_Type = (this.EventScheduledjson[0]['Location']);
        this.Description_Type = (this.EventScheduledjson[0]['Description']);
        document.getElementById("subtaskid").style.display = "none";
        document.getElementById("Guest_Name").style.display = "flex";
        document.getElementById("Location_Name").style.display = "flex";
        document.getElementById("Descrip_Name").style.display = "flex";
        document.getElementById("core_viw121").style.display = "flex";
        document.getElementById("core_viw123").style.display = "none";
        document.getElementById("core_viw222").style.display = "flex";
        document.getElementById("core_Dms").style.display = "flex";

        const TEsb = document.getElementById('TaskEvent-Sidebar')
        TEsb.addEventListener('scroll', () => {
          this.autocompletes.forEach((ac) => {
            if (ac.panelOpen)
              ac.updatePosition();
          });
        })

       }

    });
  this.closeevearea();

}


submitEventToRepeat(){


const input_date=moment(this._StartDate,'YYYY-MM-DD');
const current_date=moment(moment().format('YYYY-MM-DD'),'YYYY-MM-DD');
if(input_date<current_date){
   this.earlyDate=true;
    return;
}


  let finalarray = [];
  this.daysSelectedII = [];
  const format2 = "YYYY-MM-DD";
  var start = moment(this.minDate);

  if (this.selectedrecuvalue == "0") {
    const d1 = new Date(moment(start).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = this.AllDatesSDandED.filter(x => x.Date == (moment(date).format(format2)));
  }

  finalarray = this.daysSelectedII.filter(x => x.IsActive == true);
  if (finalarray.length > 0) {
    finalarray.forEach(element => {

      const date1: Date = new Date(this._StartDate);
      const date2: Date = new Date(this._SEndDate);

      const diffInMs: number = date2.getTime() - date1.getTime();

      const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
      }
      else{
        var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
      }

      var dd = moment(date3).add(diffInDays, 'days')
      console.log(dd,date3,diffInDays,date2,this._SEndDate,"update edit")
      var SEndDates = "SEndDate";
      element[SEndDates] = (dd.format(format2));

      var vStartTime = "StartTime";
      element[vStartTime] = this.Startts;

      var vEndTime = "EndTime";
      element[vEndTime] = this.Endtms;

      var vEnd_date = "End_date";
      element[vEnd_date] = this._EndDate;

      var vIsDeleted = "IsDeleted";
      element[vIsDeleted] = 0;

      var vPending = "Pending_meeting";
      element[vPending] = 0;

      var vRecurrence = "Recurrence";
      element[vRecurrence] = "0";

      var vRecurrence_value = "Recurrence_values";
      element[vRecurrence_value] = "";

      var vEmp_No = "Emp_No";
      element[vEmp_No] = this.Current_user_ID;

      var vScheduleType = "ScheduleType";
      element[vScheduleType] = 2;   // Event.

      var vTitle_Name = "Title_Name";
      element[vTitle_Name] = this.EventScheduledjson[0]["Task_Name"];

      var vMasterCode = "MasterCode";
      element[vMasterCode] = this.Project_NameScheduledjson.map(pr=>pr.stringval).join(',');

      var vUser_Name = "User_Name";
      element[vUser_Name] = this.User_Scheduledjson.map(ur=>ur.stringval).join(',');

      var vLocation_Type = "Location_Type";
      element[vLocation_Type] = this.EventScheduledjson[0].Location;

      var vLocation_fulladd = "FullAddress_loc";
      element[vLocation_fulladd] = this.EventScheduledjson[0].FullAddress_loc

      var vLocation_url = "Addressurl";
      element[vLocation_url] =this.EventScheduledjson[0].Addressurl;

      var vOnlinelink = "Onlinelink";
      element[vOnlinelink] = this.EventScheduledjson[0].Onlinelink;

      var vLink_Details = "Link_Details";
      element[vLink_Details] = this.EventScheduledjson[0].Link_Details;

      var vDescription = "Description";
      element[vDescription] = this.EventScheduledjson[0].Description;

      var vSubtask = "Subtask";
      element[vSubtask] = "";

      var vEventNumber = "EventNumber";
      element[vEventNumber] = this.EventScheduledjson[0].EventNumber;

      var vPortfolio_name = "Portfolio_name";
      element[vPortfolio_name] = this.portfolio_Scheduledjson.map(ptf=>ptf.numberval).join(',');

      var vDMS_Name = "DMS_Name";
      element[vDMS_Name] = this.EventScheduledjson[0].DMS_Name;

      var vAgendas = "Meeting_Agendas";
      const mtgAgendas=JSON.stringify(this.EventScheduledjson[0].Agendas.map(agd=>({index:agd.AgendaId, name:agd.Agenda_Name})));
      element[vAgendas] = mtgAgendas;
      //
    });

    this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
    if (this.Schedule_ID != 0) {
      this._calenderDto.Schedule_ID = this.Schedule_ID;
    }
    else {
      this._calenderDto.Schedule_ID = 0;
    }
    this._calenderDto.draftid = this.draftid;
    console.log(this._calenderDto)
    this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
      (data => {

        this._Message = data['message'];
        if (this._Message == "Updated Successfully") {
          this.notifyService.showSuccess(this._Message, "Success");
        }
        else{
          this.notifyService.showError(this._Message, "Failed");
        }


        this.GetScheduledJson();
        this._SEndDate = moment().format("YYYY-MM-DD").toString();
        this.TImetable();
        this.minDate = moment().format("YYYY-MM-DD").toString();
        this.maxDate = null;
        this.TImetable();
        this.closeevearea();

      });

  }
  else {
    alert('Please Select Valid Date and Time');
  }
}

// 'repeat' new option end


// new eventsidebar design code start

selectedrecuvalue1:string='0';
dayArr1:any=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
MonthArr1:any=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
_EndDate1:any;
mtgOnDays:any=[];  // list of day name on which mtg is present.
notProvided1:any;

onRecurrenceTypeChange(val:any){

    this.selectedrecuvalue1 = val.value.toString();
    this._labelName = "Start Date";

    for (let index = 0; index < this.dayArr1.length; index++) {
          this.dayArr1[index].checked = false;
    }
    for (let index = 0; index < this.MonthArr1.length; index++) {
          this.MonthArr1[index].checked = false;
    }


    document.getElementById("div_endDate_new").style.display = "block";
    if (val.value == 0) {
      this._labelName = "Schedule Date";
      document.getElementById("div_endDate_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==1){
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==2){
      document.getElementById("weekly_121_new").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==3){
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "block";
    }
}


bindCustomRecurrenceValues(){


if(this.selectedrecuvalue1=='2'&&!this.dayArr1.some((item)=>item.checked)){
  this.notProvided1='dayarr1';
  return;
}

if(this.selectedrecuvalue1=='3'&&!this.MonthArr1.some(item=>item.checked)){
  this.notProvided1='montharr1';
  return;
}

if(['1','2','3'].includes(this.selectedrecuvalue1)&&!this._EndDate1){
  this.notProvided1='enddate1';
  return;
}


   //inserting values into these selectedrecuvalue, dayArr, MonthArr, _EndDate.
this.selectedrecuvalue=this.selectedrecuvalue1;
this.dayArr=[...this.dayArr1];
this.MonthArr=[...this.MonthArr1];
this._EndDate=this._EndDate1.format("YYYY-MM-DD").toString();
this.maxDate = this._EndDate1.format("YYYY-MM-DD").toString();

this.mtgOnDays=[];
if(this.selectedrecuvalue==='2'){
  this.dayArr.forEach((item:any)=>{
    if(item.checked){
       let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
       this.mtgOnDays.push(d_name);
    }
});
}
else if(this.selectedrecuvalue==='3'){
   this.MonthArr.forEach((item:any)=>{
     if(item.checked){
        const d_no=Number.parseInt(item.value);
        this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
     }
   });
}
console.log(this._PopupConfirmedValue)




// if (this.selectedrecuvalue == '0') {
//   this._PopupConfirmedValue = 1;
// }
// else if(this._OldRecurranceId == this.selectedrecuvalue && this._OldRecurranceValues == _arraytext.toString()){
//   this._PopupConfirmedValue = 1;
// }
// else {
//   this._PopupConfirmedValue = 2;
// }

this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
var start = moment(this.minDate);
var end = moment(this.maxDate);
const format2 = "YYYY-MM-DD";
const d1 = new Date(moment(start).format(format2));
const d2 = new Date(moment(end).format(format2));
const date = new Date(d1.getTime());
this.daysSelectedII = [];
this.AllDatesSDandED = [];
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
  var IsActive = "IsActive";
  jsonData[IsActive] = 1;
  var Day = "Day";
  jsonData[Day] = moment(date).format('dddd').substring(0, 3);
  var DayNum = "DayNum";
  jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
  this.AllDatesSDandED.push(jsonData);
  date.setDate(date.getDate() + 1);
}

if (this.selectedrecuvalue == '0') {
  this.maxDate = moment(this.minDate).format("YYYY-MM-DD").toString();
  this.daysSelectedII = [];
  this.daysSelected = [];
  this.singleselectarry = [];
  const format2 = "YYYY-MM-DD";
  var jsonData = {};
  var columnName = "Date";
  jsonData[columnName] = (moment(this.minDate).format(format2));
  var columnNames = "StartTime";
  jsonData[columnNames] = this.Startts;
  var columnNamee = "EndTime";
  jsonData[columnNamee] = this.Endtms;
  var IsActive = "IsActive";
  jsonData[IsActive] = 1;
  this.daysSelectedII.push(jsonData);
}


this.close_customrecurrencemodal();
}
view_graph_div(){
  document.getElementById("graph-div").style.display = "block";
}
close_graph_div(){
  document.getElementById("graph-div").style.display = "none";
}
// new eventsidebar design code end





// anchor the link (helper) start
anchoredIt(inputstr){
  let inputdes=inputstr;
  const urlregex=/\bhttps?:\/\/[^\s<]+[^\s<.,:;"')\]]\b/g;
  const urlInAnchorRegex = /<a\s+[^>]*href=['"]([^'"]+)['"][^>]*>.*?<\/a>/gi;
  let matches = inputdes.match(urlInAnchorRegex);
  if(matches){
       matches.forEach((achor) => {
          inputdes=inputdes.replace(achor,achor.match(urlregex)[0]);
       });
  }

  let alllinks=[];
  let matches2=inputdes.match(urlregex);
  if(matches2){
          matches2.forEach((linkstr,index)=>{
            const alink=`<a href="${linkstr}" target="_blank">${linkstr}</a>`;
            alllinks.push(alink);
            inputdes=inputdes.replace(linkstr,`@link@-${index}`);
           });

           inputdes.match(/@link@-\d+/g).forEach((place,index)=>{
            inputdes=inputdes.replace(place,alllinks[index]);
            });
  }


  return inputdes;
}

multiapproval_json:any;
totalCountOfList:any;

//anchor the link (helper) end

getMeetingApprovals(){

   this.approvalObj.Schedule_Id='0';
   this.approvalObj.Emp_no =this.Current_user_ID;

  this.approvalservice.NewGetMeetingApprovals(this.approvalObj).subscribe((data) => {

    var multiapproval_json=data[0].multiapproval_json;
    this.multiapproval_json=JSON.parse(multiapproval_json);
    this.totalCountOfList=this.multiapproval_json.length;
    if(this.totalCountOfList==0){
      // document.getElementById("requestlist").classList.remove("show");
      $("#requestlist").removeClass("show");
      // document.getElementById("cal-main").classList.remove("col-lg-9");
      $("#cal-main").removeClass("col-lg-9");
      // document.getElementById("cal-main").classList.add("col-lg-12");
      $("#cal-main").addClass("col-lg-12");

    }
    //  console.log(this.multiapproval_json,'appraval data in the dashboard')
  })
}


UpdateMeetingRequestAccess(SNo,Schedule_Id,Type){

  this.approvalObj.SNo=SNo;
  this.approvalObj.Schedule_Id = Schedule_Id;
  this.approvalObj.Type = Type;

 this.approvalservice.NewUpdateMeetingRequestAccess(this.approvalObj).subscribe((data) => {

  if(data['Type']=='Accept'){
    this.notifyService.showSuccess("Request access accept ", "Success");
  }else if(data['Type']=='Reject'){
    this.notifyService.showSuccess("Request access reject", "Success");
  }
    this.getMeetingApprovals();
    console.log(data,'appraval data in the dashboard3');
 })
}



sortbyCurrent_Time(){


  let _inputdate=moment(this._StartDate,'YYYY-MM-DD');
  let _currentdate=moment();
  if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
  {
      const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
      const index:number=this.StartTimearr.findIndex((item:any)=>{
          const t=moment(item,'h:mm A');
          const result=t>=ct;
          return result;
      });
      this.validStartTimearr=this.StartTimearr.slice(index);
  }
  else
  this.validStartTimearr=[...this.StartTimearr];

}
editorPlaceholder: string = 'Add meeting link';



// component.ts
parseTime(time: string): Date {
  const [timePart, modifier] = time.split(/(AM|PM)/); // Split into time and AM/PM
  let [hours, minutes] = timePart.split(':').map(Number);
  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return new Date(1970, 0, 1, hours, minutes); // Return a date object with a fixed date
}


}
