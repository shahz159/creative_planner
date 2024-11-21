import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment'
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NotificationService } from 'src/app/_Services/notification.service';
import tippy from 'node_modules/tippy.js';
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { LinkService } from 'src/app/_Services/link.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';


declare var $: any;

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
  selector: 'app-stream-calendar',
  templateUrl: './stream-calendar.component.html',
  styleUrls: ['./stream-calendar.component.css']
})




export class StreamCalendarComponent implements OnInit {
  disablePreviousDate = new Date();

  calendarOptions: CalendarOptions
  selectDay: any;
  Current_user_ID: any;
  _StartDate: any;
  Startts: any;
  validStartTimearr:any=[];
  ScheduleType: any;
  Endtms: any;
  Description_Type: any;
  content: string = '';
  selectedOption: string = 'option1'; 
  agendaInput: string | undefined;
  isClassAdded: boolean = false;
  _calenderDto: CalenderDTO;
  minDate = moment().format("YYYY-MM-DD").toString();
  _SEndDate: any;
  scstartdate: any = new Date();
  _labelName: string;
  today: any = new Date().toISOString().substring(0, 10);
  ProjectCode: string; Status: string; ProjectType: string; Owner: string;
  event: any;
  Selecteddaate: any;
  flagevent: number;


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
        'undo', // Hide Undo button
        'redo', // Hide Redo button
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'heading',
        'fontName',
        // 'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses'
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






  constructor(
    private notifyService: NotificationService,
    private CalenderService: CalenderService,
    public _LinkService: LinkService, 
    public dateAdapter: DateAdapter<Date>,
    public datepipe: DatePipe
  ) { 
    this._lstMultipleFiales = [];
    this._calenderDto = new CalenderDTO;
    this.Selecteddaate = this.datepipe.transform(new Date(), 'YYYY/MM/DD');
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



  ngOnInit(): void {
    
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.initAutosize();
    this.initFirstclass();
    this.MinLastNameLength = true;
    this._labelName = "Schedule Date";
   
    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this.flagevent = 1;
   
    tippy('#agenda-info-icon', {
      content: "Agenda is mandatory for a meeting, Please provide atleast 1.",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'dark',
      animateFill: true,
      inertia: true,
      placement: 'left'
    });
    this.loadingDMS = false;
    this.GetScheduledJson();


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

 
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
   

     //start
     this.maxDate = moment().format("YYYY-MM-DD").toString();
     this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
     //end
 
     this.GetMemosByEmployeeId();
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
     this.GetTimeslabfordate();
     this.GetPending_Request();


  }








  
  private initAutosize() {
    function autosize() {
      var $text = $('.task-add-item-textarea');

      $text.each(function () {
        $(this).attr('rows', 1);
        resize($(this));
      });

      $text.on('input', function () {
        resize($(this));
      });

      function resize($element) {
        $element.css({
          'height': 'auto',
          'min-height': '36px'
        });
        $element.css('height', $element[0].scrollHeight + 'px');
      }
    }
    autosize();
  }

  private initFirstclass() {
    function firstclass() {
      $(document).ready(function() {
        $('.month-slot-body-row').each(function() {
          var $firstDiv = $(this).find('.month-body-col').first();         
          $firstDiv.addClass('month-first-col-dropdown');
        });
      });
    }
    firstclass();
  }

  switch_calender() {
    document.getElementById("switch-calendar").classList.add("active");
    document.getElementById("switch-task").classList.remove("active");
    document.getElementById("calendar-search").style.display = "block";
    document.getElementById("calendar-action").style.display = "block";
    document.getElementById("main-calendar").style.display = "flex";
    document.getElementById("task-calendar").style.display = "none";
    document.getElementById("all-cal-date").style.display = "flex";
    document.getElementById("task-cal-date").style.display = "none";
  }

  switch_task() {
    document.getElementById("switch-calendar").classList.remove("active");
    document.getElementById("switch-task").classList.add("active");
    document.getElementById("calendar-search").style.display = "none";
    document.getElementById("calendar-action").style.display = "none";
    document.getElementById("main-calendar").style.display = "none";
    document.getElementById("task-calendar").style.display = "flex";
    document.getElementById("all-cal-date").style.display = "none";
    document.getElementById("task-cal-date").style.display = "flex";
  }

  close_create_list() {
    document.getElementById("kt-create-list-dropdown-menu").classList.remove("show");
  }

  task_add_close() {
    document.getElementById("taskAdd").classList.remove("show");
  }

  day_div() {
    document.getElementById("kt-day-div").style.display = "block";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "inline-block";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "block";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "none";
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
  }

  week_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "block";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "inline-block";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "block";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "none";
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
  }

  month_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "block";
    document.getElementById("kt-sch-div").style.display = "none";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "inline-block";
    document.getElementById("sch-nme").style.display = "none";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "block";
    document.getElementById("schedule-date").style.display = "none";
    document.getElementById("kt-calendar-quickactions").classList.add("border-0");
  }

  sch_div() {
    document.getElementById("kt-day-div").style.display = "none";
    document.getElementById("kt-week-div").style.display = "none";
    document.getElementById("kt-month-div").style.display = "none";
    document.getElementById("kt-sch-div").style.display = "block";
    document.getElementById("day-nme").style.display = "none";
    document.getElementById("week-nme").style.display = "none";
    document.getElementById("month-nme").style.display = "none";
    document.getElementById("sch-nme").style.display = "inline-block";
    document.getElementById("day-date").style.display = "none";
    document.getElementById("week-date").style.display = "none";
    document.getElementById("month-date").style.display = "none";
    document.getElementById("schedule-date").style.display = "block";
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
  }
  teams_icon(){
    document.getElementById("teams-icon").style.display = "inline-block";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "none";
  }
  google_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "inline-block";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "none";
  }
  skype_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "inline-block";
    document.getElementById("zoom-icon").style.display = "none";
  }
  zoom_icon(){
    document.getElementById("teams-icon").style.display = "none";
    document.getElementById("google-icon").style.display = "none";
    document.getElementById("skype-icon").style.display = "none";
    document.getElementById("zoom-icon").style.display = "inline-block";
  }
  change_event(){
    this.createTaskEvent=true;
    document.getElementById("event-title").style.display = "block";
    document.getElementById("Copy-title").style.display = "none";
    document.getElementById("Repeat-title").style.display = "none";
    document.getElementById("Edit-title").style.display = "none";
    document.getElementById("task-title").style.display = "none";
    document.getElementById("nav-event").style.display = "block";
    document.getElementById("nav-task").style.display = "none";
    document.getElementById("create-event-div").style.display = "block";
    document.getElementById("create-task-div").style.display = "none";
    document.getElementById("create-event-badge").classList.add("active");
    document.getElementById("create-task-badge").classList.remove("active");
  }
  change_task(){
    this.createTaskEvent=true;
    document.getElementById("event-title").style.display = "none";
    document.getElementById("Copy-title").style.display = "none";
    document.getElementById("Repeat-title").style.display = "none";
    document.getElementById("Edit-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  createEventonlyTaskModal(){
    this.createTaskEvent=true;
    document.getElementById("event-title").style.display = "none";
    document.getElementById("Copy-title").style.display = "none";
    document.getElementById("Repeat-title").style.display = "none";
    document.getElementById("Edit-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  customEventModal(Schedule_Type){
    if(Schedule_Type==1){
     this.customTaskModal();
    }else{
      document.getElementById("customEventModal").style.display = "block";
      document.getElementById("customEventModal").classList.add("show");
      document.getElementById("customEventModalBackdrop").style.display = "block";
      document.getElementById("customEventModalBackdrop").classList.add("show");
    }
  }

  customEventModal_dismiss(){
    document.getElementById("customEventModal").style.display = "none";
    document.getElementById("customEventModal").classList.remove("show");
    document.getElementById("customEventModalBackdrop").style.display = "none";
    document.getElementById("customEventModalBackdrop").classList.remove("show");

    $('#propse11').removeClass('show');
  }
  customTaskModal(){
    document.getElementById("customTaskModal").style.display = "block";
    document.getElementById("customTaskModal").classList.add("show");
    document.getElementById("customTaskModalBackdrop").style.display = "block";
    document.getElementById("customTaskModalBackdrop").classList.add("show");
  }
  customTaskModal_dismiss(){
    document.getElementById("customTaskModal").style.display = "none";
    document.getElementById("customTaskModal").classList.remove("show");
    document.getElementById("customTaskModalBackdrop").style.display = "none";
    document.getElementById("customTaskModalBackdrop").classList.remove("show");
  }
  eventtaskitemtimeModal(){
    document.getElementById("eventtaskitemtimeModal").style.display = "block";
    document.getElementById("eventtaskitemtimeModal").classList.add("show");
    document.getElementById("eventtaskitemtimeModalBackdrop").style.display = "block";
    document.getElementById("eventtaskitemtimeModalBackdrop").classList.add("show");
  }
  eventtaskitemtimeModal_dismiss(){
    document.getElementById("eventtaskitemtimeModal").style.display = "none";
    document.getElementById("eventtaskitemtimeModal").classList.remove("show");
    document.getElementById("eventtaskitemtimeModalBackdrop").style.display = "none";
    document.getElementById("eventtaskitemtimeModalBackdrop").classList.remove("show");


    
    this.selectedrecuvalue1='0';
    this.dayArr1=[];
    this.MonthArr1=[];
    this._EndDate1=moment().add(3, 'months').format("YYYY-MM-DD").toString();
  }
  createEventTaskModal(){
    document.getElementById("createEventTaskModal").style.display = "block";
    document.getElementById("createEventTaskModal").classList.add("show");
    document.getElementById("createEventTaskModalBackdrop").style.display = "block";
    document.getElementById("createEventTaskModalBackdrop").classList.add("show");
  }
  createEventTaskModal_dismiss(){
    document.getElementById("createEventTaskModal").style.display = "none";
    document.getElementById("createEventTaskModal").classList.remove("show");
    document.getElementById("createEventTaskModalBackdrop").style.display = "none";
    document.getElementById("createEventTaskModalBackdrop").classList.remove("show");
  }
  // propose_date_time_open() {
  //   document.getElementById("propose-date-time-div").classList.toggle("open");
  //   document.getElementById("propose-date-time-btn").classList.toggle("rotate");
  // }

  Propose_date_time_menu() {
    document.getElementById("propose-date-time-menu").classList.add("show");
  }

  Propose_date_time_menu_close() {
    document.getElementById("propose-date-time-menu").classList.remove("show");
  }

  Repeat_date_time_menu() {
    document.getElementById("repeat-date-time-menu").classList.add("show");
  }

  Repeat_date_time_menu_close() {
    document.getElementById("repeat-date-time-menu").classList.remove("show");
  }

  // month_more_view() {
  //   document.getElementById("month-day-events-more").classList.add("show");
  // }

  close_month_more_view() {
    document.getElementById("month-day-events-more").classList.remove("show");
  }
  pending_list_open(){
    document.getElementById("pending-list").classList.add("quickaction-open");
  }
  pending_list_close(){
    document.getElementById("pending-list").classList.remove("quickaction-open");
  }

  draft_list_open(){
    document.getElementById("draft-list").classList.add("quickaction-open");
  }
  draft_list_close(){
    document.getElementById("draft-list").classList.remove("quickaction-open");
  }
  requestaccess_list_open(){
    document.getElementById("requestaccess-list").classList.add("quickaction-open");
  }
  requestaccess_list_close(){
    document.getElementById("requestaccess-list").classList.remove("quickaction-open");
  }
  bookmark_list_open(){
    document.getElementById("bookmark-list").classList.add("quickaction-open");
  }
  bookmark_list_close(){
    document.getElementById("bookmark-list").classList.remove("quickaction-open");
  }
/////////////////////////////////////////// Create Event and Create Task sidebar start /////////////////////////////////////////////////////////


Title_Name: any;
notProvided: boolean = false;
MinLastNameLength: boolean;
characterCount: number = 0;
allAgendas: any = [];
agendasAdded: number = 0;
_lstMultipleFiales: any;
myFiles: string[] = [];
loading: boolean = false;
SelectDms: any;
choosedItems:any=new Array();
selectedItemsTippy:any;
searchingResult: boolean = false;
projectmodaltype:'project'|'portfolio'|'SMail'|'participant'|undefined;
basedOnFilter:any={};
isFilteredOn:boolean=false;
ProjectListArray: any = [];
inputTyped:string;
_EmployeeListForDropdown: any[] = [];
Portfoliolist_1: any = [];
Memos_List: any;
FilteredResults:any=[]; 
Portfolio: any = [];
ngEmployeeDropdown: any;
subtashDrpLoading:boolean=false;
projectsSelected: any = [];
companies_Arr:any;
daysSelected: any[] = [];
singleselectarry: any[] = [];
daysSelectedII: any[] = [];
Schedule_ID: number = 0;
_subname: boolean;
Note_deadlineexpire: boolean;
editTask: boolean = false;
copyTask: boolean = false;
eventRepeat:boolean=false;
create: boolean = false;
currentTime:any;
@ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
selected: Date | null;
_EndDate: any;
Attachment12_ary: any = [];
RemovedAttach: any = [];
maxDate = "";
SelectStartdate: any;
MasterCode: any = [];
Subtask: any;
Selectenddate: any;
St_date: string = "";
Ed_date: string;
_status: string;
Location_Type: any;
Allocated_subtask: number;
Projectstartdate: string = "";
projectEnddate: string;
Status_project: string; 
AllocatedHours: number;
selectdaytime: any[] = [];
Avaliabletime: any[] = [];
selectedrecuvalue: string;
AllDatesSDandED: any[] = [];
mtgOnDays:any=[];  // list of day name on which mtg is present.
subtask_loading:boolean=false;
_arrayObj: any;
Alltimes: any = [];
EndTimearr: any = [];
AllEndtime: any = [];
StartTimearr: any = [];
timingarryend: any = [];
Time_End: any = [];
Addressurl: string = "";
Locationfulladd: string;
Link_Details: string;
timearr1: any = [];
selectedrecuvalue1:string='0';
_EndDate1:any;
notProvided1:any;
BlockNameProject1: any;
_Exec_BlockName: string = "";
SubmissionName: string;
TM_DisplayName: string;
_subname1: boolean;
EventNumber: any;
_meetingroom:boolean=true;
_onlinelink: boolean = false;
draftid: number = 0;
timeslotsavl: any[] = [];
progress: number = 0;
_Message: string;
draftdata_meet: any = [];
draftcount: any;
user_Type:any=0;
fetchDataStartTime: number;
fetchDataEndTime: number;
fetchDataTime: number;
dataBindStartTime: number;
Scheduledjson: any[] = [];
dataBindEndTime: number;
dataBindTime: number;
userFound : boolean | undefined;
dayArr1:any=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
MonthArr1:any=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
Calendarjson: any;
currentWeekOffset = 0; // Tracks the current week offset from today
clickHistory: number[] = []; // Stores the history of week changes
groupedMeetingsArray:any;
firstDate:any;
lastDate:any;
lastDates:any;
searchMeetings:any;
EventScheduledjson: any[] = [];
creation_date: string;
User_Scheduledjson: any[] = [];
Project_NameScheduledjson: any[] = [];
delayMeeting:any;
upcomingMeeting:any;
meetingDuration:any;
AdminMeeting_Status: string;
Isadmin: boolean;
Attachments_ary: any = [];
Project_dateScheduledjson: any[] = [];
Schedule_type1: any = 'Event';
Status1: any;
Proposedate: any;
PropStart: any;
PurposeEnd: any;
pro_date: any;
pro_sttime: any;
pro_edtime: any;
pro_enddate: string;
_FutureEventTasksCount: number = 0;
_AllEventTasksCount: number = 0;
pending_status: boolean;
Meeting_status: boolean;
RecurrenceValue:any;
portfolio_Scheduledjson: any[] = [];
DMS_Scheduledjson: any = [];
statusofMeeting:any|undefined;
dmsIdjson: any = [];
_MemosSubjectList: any;
arr: any = [];
arr1: any = [];
arr2: any = [];
Portfolio1: any = [];
ngEmployeeDropdown1: any = [];
SelectDms1: any;
Pending_request: any[] = [];
pendingcount: any;
filteredMeetingsArray: any[] = [];
Searchingjson:any;
Searchingfunc:boolean=true;
_OldRecurranceValues: string;
_OldRecurranceId: string;
_Oldstart_date: string;
copied = false;
Link_Detail: any;
urlUserID_Password: any;
_PopupConfirmedValue: number;
_OldEnd_date: string;
createTaskEvent:boolean=true;
Searchword: string;
showsearch: boolean = false;
loadingDMS: boolean;
EventAction_type: number;
Event_requests1: any = [];
_remarks: string;
meetingClassNemes:any;
propose_date:any;
proposeStartTimes:any;
proposeEndTimes:any;
repeatStartDate:any;
repeatStartts:any;
repeatEndtms:any;






LastLengthValidation11() {
  if (this.Title_Name&&(this.Title_Name.trim().length < 3)) {
    this.MinLastNameLength = false;
  }
  else {
    this.MinLastNameLength = true;
  }
}


updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.Description_Type;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}


addAgenda() {
  if (this.agendaInput && this.agendaInput.trim().length > 0 && this.agendaInput.trim().length < 100) {
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



editAgenda(index: number) {
  $(`#agenda-label-${index}`).addClass('d-none');
  $(`#agenda-text-field-${index}`).removeClass('d-none');
  $(`#agenda-text-field-${index}`).focus();

  $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

  $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
  $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.

}



deleteAgenda(index: number) {

  if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
    const agenda_toRemove=this.allAgendas[index].name;
    this.allAgendas.splice(index, 1);
    this.notifyService.showSuccess(agenda_toRemove,'Agenda removed.');
  }
  console.log("allAgendas:", this.allAgendas);
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
 
  console.log('all agendas after updating:', this.allAgendas);
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




Task_type(value) {

  document.getElementById("createEventTaskModal").style.display = "block";
  document.getElementById("createEventTaskModal").classList.add("show");
  document.getElementById("createEventTaskModalBackdrop").style.display = "block";
  document.getElementById("createEventTaskModalBackdrop").classList.add("show");
  document.getElementById("Edit-title").style.display = "none";
  document.getElementById("Copy-title").style.display = "none";
  document.getElementById("Repeat-title").style.display = "none";
 
  

  // document.getElementById("div_recurrence").style.display = "block";
  document.getElementById("weekly_121_new").style.display = "none";
  document.getElementById("div_endDate_new").style.display = "none";
  document.getElementById("Monthly_121_new").style.display = "none";
  // document.getElementById("Recurrence_hide").style.display = "none";
  // document.getElementById("Schenddate").style.display = "none";
  // document.getElementById("Descrip_Name12").style.display = "none";
  // document.getElementById("Location_Name").style.display = "none";

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
  }
  else {
    this.createTaskEvent=true;
    document.getElementById("event-title").style.display = "block";
    this.ScheduleType = "Event";
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Project_Code = null;
    this.GetProjectAndsubtashDrpforCalender();
    this.GetMemosByEmployeeId();


    // const TEsb = document.getElementById('TaskEvent-Sidebar');
    // TEsb.addEventListener('scroll', () => {
    //   this.autocompletes.forEach((ac) => {
    //     if (ac.panelOpen)
    //       ac.updatePosition();
    //   });
    // })
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
  console.log(this.ScheduleType, "ScheduleType")

}




projectmodal(modaltype:'project'|'portfolio'|'SMail'|'participant'){

  document.getElementById("projectmodal").style.display = "block";
  document.getElementById("projectmodal").classList.add("show");
  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("schedule-event-modal-backdrop").classList.add("show");
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



close_projectmodal(){
  document.getElementById("projectmodal").style.display = "none";
  document.getElementById("projectmodal").classList.remove("show");
  document.getElementById("schedule-event-modal-backdrop").style.display = "none";
  document.getElementById("schedule-event-modal-backdrop").classList.remove("show");
  this.choosedItems=[];   // clear selections.
  this.isFilteredOn=false;
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;    // clear filter applied.
  this.FilteredResults=[];             // clear filtered result.
  this.projectmodaltype=undefined; // no model open.
}




project_filter() {
  document.getElementById("project-filter").classList.add("show");
  document.getElementById("filter-icon").classList.add("active");
}




close_project_filter() {
  document.getElementById("project-filter").classList.remove("show");
  document.getElementById("filter-icon").classList.remove("active");
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



GetProjectAndsubtashDrpforCalender() {
  this.subtashDrpLoading=true;
  this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
    ((data) => {
      this.subtashDrpLoading=false;
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



GetMemosByEmployeeId() {
  this.loading=true;
  this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
    subscribe((data) => {
      this.Memos_List = JSON.parse(data['JsonData']);
      console.log(this.Memos_List, "test iiii");
      this.loading=false;
    });
}




clearallfields() {

  this._StartDate = moment().format("YYYY-MM-DD").toString();
  // this._EndDate = moment().format("YYYY-MM-DD").toString();
  this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();

  this.minDate = moment().format("YYYY-MM-DD").toString();
  this.Attachment12_ary = [];
  this.ProjectListArray=[];
  this.BlockNameProject1=[];
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




GetTimeslabfordate() {
  this._calenderDto.minutes = 5;
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



getObjOf(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}




public handleAddressChange(address: Address) {

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

    const isValidStrings = ["17.4333", "78.3664"];
    if (this.Location_Type.includes(',')) {
      const loc = this.Location_Type.split(',');
      var lat = loc[0];
      var long = loc[1];
      var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
      if (reg.exec("40.6892")) {
      } else {
      }
      if (reg.exec(long)) {
      }
      else {
      }
    }
  }





  selectStartDate(event) {

    this._StartDate = event;
    let sd = event.format("YYYY-MM-DD").toString();
    this._SEndDate = event.format("YYYY-MM-DD").toString();
    this.minDate = sd;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Scheduled_date = sd;

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
    });

    console.log("StartTimearr:", this.StartTimearr);
    console.log("EndTimearr:", this.EndTimearr);
  
    this.timingarryend = [];
    this.Time_End = [];
    this.Time_End = this.AllEndtime;
  
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
    
      if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
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
     
      const _element = element;
      const EndTimeObj = new Date(`2000-01-01T${_element}:00`);
      const diffInMinutes = (EndTimeObj.getTime() - selectedStartTimeObj.getTime()) / 60000;
   
      element = _element.toString() + "-" + diffInMinutes.toString();

    });

    console.log(this.EndTimearr, "End Time Updated")
  }


  onfocus(val) {
    console.log(val, "ttt");
  }



  
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

  
  this.eventtaskitemtimeModal_dismiss();
  }


  selectedDay(days) {

    //Checked the day
    let objIndex = this.dayArr1.findIndex((obj => obj.value == days.target.value));
    this.dayArr1[objIndex].checked = days.target.checked;
    // this.Recurr_arr.push(days.target.value);

    if(days.target.checked&&this.notProvided1=='dayarr1')
      this.notProvided1="";
  }



  selectmonthlydays(day) {
    let objIndex = this.MonthArr1.findIndex((obj => obj.value == day.target.value));
    this.MonthArr1[objIndex].checked = day.target.checked;
    // this.calendar.updateTodaysDate();
    if(day.target.checked&&this.notProvided1=='montharr1')
      this.notProvided1="";
  }



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

    
          this.Note_deadlineexpire = false;
        }
        else {
          if (number < 0) {
            if (this.ScheduleType == "Task") {
           
              this.Note_deadlineexpire = true;
            }
            else {
           
            }
          }
          else {
         
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



  calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
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




  onSubmitBtnClicked() {

    if (
      (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
      (this.Description_Type?(this.characterCount<=500):true)&&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ?this.allAgendas.length > 0: true )
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
        else {
          var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        }
    
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
        //  element[vDescription]='';
         element[vPortfolio_name]='';
         element[vDMS_Name]='';
         element[vAgendas]='[]';
       }
// dont provide unnecessary values to api when task is creating.


        //
      });

      this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
      console.log(this._calenderDto.ScheduleJson, "finalarray 1234");
      
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

                   
                    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    this._lstMultipleFiales = [];
                
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
            this.notifyService.showSuccess(this._Message, "Success");
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
      this.createEventTaskModal_dismiss();
    }
    else {
      alert('Please Select Valid Date and Time');
    }

  }




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

///////////////////////////////////////////  Create Event and Create Task sidebar End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Calendar meeting list start /////////////////////////////////////////////////////////


  sortMeetingCalender(user_Types){
   this.user_Type=user_Types;
   this.GetScheduledJson()
  }



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

        console.log(data,'Scheduledjson')
        this.loadingDMS = true;
        this.Scheduledjson = this.Scheduledjson
        .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
       
        this.getEventsForWeeks(0)

        this.dataBindEndTime = performance.now();
        this.dataBindTime = this.dataBindEndTime - this.dataBindStartTime;
        this.userFound = true

        // console.log("Fetch Data Time: in milliseconds", this.fetchDataTime);
        // console.log("Data Bind Time: in milliseconds", this.dataBindTime);

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
          //69 eventClick: this.GetClickEventJSON_Calender.bind(this),
          events: this.Scheduledjson,
          //69 eventDidMount: this.customizeEvent,

          dayMaxEvents: 4,
          eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
            hour12: true
          },
          nowIndicator: true,
          allDaySlot: false,
          //69 datesSet: () => { this.TwinEvent = []; }
        };
      });
  }



getEventsForWeeks(weeksFromToday: number) {

// precoius and upcoming meeting functionality 
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset today's time to midnight

  // Check if the "Today" button is clicked (i.e., weeksFromToday is 3)
  if (weeksFromToday === 3) {
    // Reset control: clear clickHistory and set currentWeekOffset to 0
    this.clickHistory = [];
    this.currentWeekOffset = 0;
  } else {
    // Calculate the new offset
    const newOffset = this.currentWeekOffset + weeksFromToday;

    // Handle click history for backward/forward navigation
    if (weeksFromToday < 0) {
      this.clickHistory.push(weeksFromToday);
    } else if (weeksFromToday > 0 && this.clickHistory.length > 0) {
      this.clickHistory.pop();
    }

    // Update the current week offset
    this.currentWeekOffset = newOffset;
  }

  // First and last date for the 7-day range
  this.firstDate = new Date(today);
  this.firstDate.setDate(today.getDate() + (this.currentWeekOffset * 7));

  this.lastDates = new Date(this.firstDate);
  this.lastDates.setDate(this.firstDate.getDate() + 6); // Last date is 7 days after the first date

  this.lastDate = new Date(this.firstDate);
  this.lastDate.setDate(this.firstDate.getDate() + 7);


  // Existing filtering logic remains unchanged
  if(this.Searchingfunc==false){
    this.Calendarjson = this.Searchingjson;
  }else{
    this.Calendarjson = this.Scheduledjson.filter(e => {
      const eventDate = new Date(e.start.split(" ")[0]);
      return eventDate >= this.firstDate && eventDate <= this.lastDate;
    });
  }
 
 

 // grouping data as date functionality
    this.groupedMeetingsArray = Object.entries(this.Calendarjson.reduce((acc, current) => {
      const date = current.start.split(' ')[0]; // Extract the date portion only
      if (!acc[date]) {
          acc[date] = []; // Initialize an array for each unique date
      }
      acc[date].push(current); // Push the meeting into the respective date's group
      return acc;
  }, {})).map(([date, events]) => ({ date, events }));


// getting count and link from meeting list
  
      this.groupedMeetingsArray = this.groupedMeetingsArray.map(day => ({
        ...day,
        events: day.events.map(event => {
            const parts = event.title.replace('📝', '').split('|').map(s => s.trim());
            const title = parts[0]; // The title before any pipes
            const linkIndex = parts.findIndex(part => part.includes("Link"));
    
            let attendees = linkIndex > 1 ? parts.slice(1, linkIndex).map(s => s.trim()) : null;
    
            // Always keep only the last attendee if there are multiple entries
            if (attendees && attendees.length) {
                attendees = [attendees[attendees.length - 1]]; // Keep only the last attendee
            }
    
            // Increment the attendee count if it has a number in "+number" format
            if (attendees && attendees[0]) {
                const match = attendees[0].match(/\+(\d+)/);
                attendees[0] = match ? `+${parseInt(match[1], 10) + 1}` : `+1`; // Increment or set to +1
            }
    
            const link = linkIndex !== -1 ? parts[linkIndex].split(' ')[0] : null;
    
            return { ...event, title, attendees, link };
        })
    }));
    
      this.filteredMeetingsArray = this.groupedMeetingsArray;
    
      console.log(this.filteredMeetingsArray, 'filteredMeetingsArrays');
       
}





filterMeetings(event: KeyboardEvent) {
  
  const searchLower = this.searchMeetings?.toLowerCase().trim() || '';

  // Filter on "Enter" key or when input changes
  if ((event as KeyboardEvent).key === 'Enter' || !searchLower) {
    this.Searchingjson = searchLower 
      ? this.Scheduledjson.filter(meeting => 
          meeting.title?.toLowerCase().includes(searchLower)
        ) 
      : [];
    
    this.Searchingfunc = !searchLower;
    this.getEventsForWeeks(0);
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


  changeScheduleType(val:number){
    if(val==1)
    {  // Task
      this.ScheduleType = "Task";
      this.GetProjectAndsubtashDrpforCalender();
      this.change_task();
    }
    else if(val==2)
    {  // Event
      this.ScheduleType = "Event";
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = null;
      this.GetProjectAndsubtashDrpforCalender();
      this.GetMemosByEmployeeId();
      this.change_event();
    }
    this.MasterCode=null; // whenever user switches task to event or viceversa remove all selected projects.
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



customrecurrencemodal() {
  // document.getElementById('drop-overlay').classList.add("show");
  // document.getElementById('customrecurrence').classList.add("show");
  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  //69 document.getElementById("customrecurrence").style.display = "block";

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



/////////////////////////////////////////// Calendar meeting list End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Created On (Schedule event popup box) Start /////////////////////////////////////////////////////////



GetClickEventJSON_Calender(arg,meetingClassNeme) {
  this.meetingClassNemes=meetingClassNeme;
   this.EventScheduledjson = [];
  this.loading = true;
  // // this.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
  // $('.bg-ovr').addClass('d-block');
  // $('.side_view').addClass('position-fixed');
  this.Schedule_ID=arg
  this._calenderDto.Schedule_ID = arg;
  this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
    ((data) => {

      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      this.loading = false;
      var Schedule_date =this.EventScheduledjson[0].Schedule_date
      this.meetingRestriction(Schedule_date);
      this.AdminMeeting_Status = data['AdminMeeting_Status'];
      this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
      this.propose_date=Schedule_date;
      console.log(this.EventScheduledjson, "Testing12");
      this.Link_Detail = this.EventScheduledjson[0].Link_Details;
      this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
      this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
      this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
      this.Status1 = this.EventScheduledjson[0].Status.trim();
      this.Proposedate = this.EventScheduledjson[0].Schedule_date;
      this.PropStart = this.EventScheduledjson[0].St_Time;
      this.proposeStartTimes=this.PropStart;
      this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
      this.proposeEndTimes=this.PurposeEnd;
      this.pro_date = this.EventScheduledjson[0].Purposedate;
      this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
      this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
      this.pro_enddate = this.EventScheduledjson[0].SEndDate;
      this.creation_date = this.EventScheduledjson[0].Created_date;

      this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
      this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
      this.pending_status = this.EventScheduledjson[0].Pending_meeting;
      this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
      this._StartDate=this.EventScheduledjson[0].Schedule_date;
      this.repeatStartDate=this._StartDate;
      this.Startts=this.EventScheduledjson[0].St_Time;
      this.repeatStartts=this.Startts;
      this.Endtms=this.EventScheduledjson[0].Ed_Time;
      this.repeatEndtms=this.Endtms
      this.RecurrenceValue=this.EventScheduledjson[0].Recurrence


      /// meeting type of online 
      let startIndex = this.Link_Detail.indexOf('</a>');
      let anchorText = this.Link_Detail.substring(startIndex + 4);
      var UserID_Password = anchorText.replace(/<[^>]*>/g, ' ');
      if (UserID_Password != '') {
        this.urlUserID_Password = UserID_Password.trim()
      }
      let str = this.Link_Detail;
      let regexp = /href="https:\/\/[^"]+"/;
      let result = regexp.exec(str);
      if (result && result[0])
        this.Link_Detail = result[0].slice(6, result[0].length - 1);

     
      //69 document.getElementById("deleteendit").style.display = "flex";
      if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {

        //69 document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':'flex';
      
        document.getElementById("main-foot").style.display = "none";
      
      }
      else if ((this.Schedule_type1 == 'Event') && (this.Meeting_status==false) && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {

      //69  document.getElementById("hiddenedit").style.display = "none";
        

        document.getElementById("main-foot").style.display = "flex";
      }
      else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
       //69  document.getElementById("hiddenedit").style.display = "flex";
  
       document.getElementById("main-foot").style.display = "none";
  
      }
      else {
       //69  document.getElementById("hiddenedit").style.display = "none";
       
        document.getElementById("main-foot").style.display = "none";
     
      }
      this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

      this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
      this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
     
      this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
      this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

      var eventStatus=  this.User_Scheduledjson.filter(e=>e.stringval==this.Current_user_ID);
       this.statusofMeeting =eventStatus.length?eventStatus[0].Status:undefined;

       
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
          });
      }
      // console.log(this.dmsIdjson,"ids");
     });
}



copyLink() {
    const textarea = document.createElement('textarea');
    textarea.value = this.Link_Detail;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000); // revert after 2 seconds
}


parseTime(time: string): Date {
  const [timePart, modifier] = time.split(/(AM|PM)/); // Split into time and AM/PM
  let [hours, minutes] = timePart.split(':').map(Number);
  if (modifier === 'PM' && hours !== 12) hours += 12;
  if (modifier === 'AM' && hours === 12) hours = 0;
  return new Date(1970, 0, 1, hours, minutes); // Return a date object with a fixed date
}


getDurationInHoursMinutes(start: string, end: string): string {
  const duration = Math.abs(this.parseTime(end).getTime() - this.parseTime(start).getTime()) / 60000;
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  return hours ? `${hours}h : ${minutes}m` : `${minutes}m`;
}


newDetails(ProjectCode) {
  let name: string = 'Details';
  var url = document.baseURI + name;
  var myurl = `${url}/${ProjectCode}`;
  var myWindow = window.open(myurl, ProjectCode);
  myWindow.focus();
}

OnCardClick(P_id: any) {
  sessionStorage.setItem('portfolioId', P_id);
  let name: string = 'portfolioprojects';
  var url = document.baseURI + name;
  var myurl = `${url}/${P_id}`;
  var myWindow = window.open(myurl, P_id);
  myWindow.focus();
}


openUrl(memo_Url) {
  const Url = memo_Url;
  window.open(Url);
}



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
    this._calenderDto.Project = this.MasterCode;

    this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
      (data => {
        this.GetScheduledJson();
        this.GetPending_Request();
        this.customTaskModal_dismiss();
      });
    console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Task completed.", "Success");
  }
  else if (this.ScheduleType == 'Event') {
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
    
    console.log(this.EventScheduledjson,'EventSchedulejson')

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
        this.GetScheduledJson();
        this.GetPending_Request();
        this.customEventModal_dismiss();
      });
    console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Meeting ended successfully.", "Success");
  }
}


SearchOfPendingItem: any

GetPending_Request() {
  this._calenderDto.Emp_No = this.Current_user_ID;

  this.CalenderService.NewGetPending_request(this._calenderDto).subscribe
    ((data) => {
      this.Pending_request = data as [];
      this.pendingcount = this.Pending_request.length;
      console.log(this.Pending_request, "111100000")
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




PendingdeleteSchedule(id) {

  this._calenderDto.Schedule_ID = id;
  this._calenderDto.flag_id = this.flagevent;
  this.CalenderService.NewDelete_table(this._calenderDto).subscribe(text => {
    this.notifyService.showSuccess("Deleted successfully", "Success");
    this.GetScheduledJson();
    this.GetPending_Request();
  })
}





newMeetingDetails() {
  let name: string = 'Meeting-Details';
  var url = document.baseURI + name;
  var myurl = `${url}/${this.Schedule_ID}`;
  var myWindow = window.open(myurl);
  myWindow.focus();
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


Task_pending() {
  Swal.fire({
    title: 'Pending task',
    text: 'Do you want to move the task to pending?',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((response: any) => {
    if (response.value) {
      this.Pending_meeting();
    } else if (response.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Task not moved to pending.',
        'error'
      )
    }
  });
}


Pending_meeting() {
  this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
  this.CalenderService.NewPending_table(this._calenderDto).subscribe(text => {
    this.notifyService.showSuccess("Added In Pending Successfully", "Success");
    this.GetScheduledJson();
    this.GetPending_Request();
    this.customEventModal_dismiss();
    this.customTaskModal_dismiss();
  });

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



AllDelete_event(val) {
  this.flagevent = val;
}



AlldeleteSchedule() {

  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.flag_id = this.flagevent;
  this.CalenderService.NewDelete_table(this._calenderDto).subscribe(text => {
    this.notifyService.showSuccess("Deleted successfully", "Success");
    this.customEventModal_dismiss();
    this.customTaskModal_dismiss();
    this.GetScheduledJson();
    this.GetPending_Request();
  })
}



DublicateTaskandEvent(val:number) {
  this.createTaskEvent=false;
  document.getElementById("div_endDate_new").style.display = "none";
  // 69 document.getElementById("Schenddate").style.display = "none";
 
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
      this.Addressurl = this.EventScheduledjson[0]['Addressurl'];
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];

      if (this._FutureEventTasksCount > 0) {
    
      }
      else if (this._FutureEventTasksCount == 0) {
       
      }
      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";

      document.getElementById("createEventTaskModal").style.display = "block";
      document.getElementById("createEventTaskModal").classList.add("show");
      document.getElementById("createEventTaskModalBackdrop").style.display = "block";
      document.getElementById("createEventTaskModalBackdrop").classList.add("show"); 
      document.getElementById("event-title").style.display = "none"; 
      document.getElementById("task-title").style.display = "none"; 
      document.getElementById("Edit-title").style.display = "none";
      document.getElementById("Repeat-title").style.display = "none";
      if(val ==1){
        document.getElementById("Copy-title").style.display = "none";
        document.getElementById("Copy-task").style.display = "block";
      }else{
        document.getElementById("Copy-task").style.display = "none";
        document.getElementById("Copy-title").style.display = "block";
      }
     
      //69 document.getElementById("Location_Name").style.display = "none";
      

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

     
      if (this.ScheduleType == 'Task') {
        this.EventScheduledjson[0]['Ed_Time']
        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
        this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
        this.MasterCode = (this.MasterCode[0].stringval);

        document.getElementById("subtaskid").style.display = "flex";
        document.getElementById("Guest_Name").style.display = "none";
        document.getElementById("Descrip_Name").style.display = "none";
        document.getElementById("core_viw123").style.display = "flex";
        document.getElementById("core_viw121").style.display = "none";
        document.getElementById("core_viw222").style.display = "none";
        document.getElementById("core_Dms").style.display = "none";   
        document.getElementById("meeting-online-add").style.display = "none";

      }
      else if (this.ScheduleType == 'Event') {

        this.GetProjectAndsubtashDrpforCalender();
        this.allAgendas = this.EventScheduledjson[0]['Agendas'].map(item => ({ index: item.AgendaId, name: item.Agenda_Name }));
      
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
        //69 document.getElementById("Location_Name").style.display =this._meetingroom==true?"flex":'none';

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
  this.customEventModal_dismiss();
  this.customTaskModal_dismiss()
}



ReshudingTaskandEvent() {
  this.createTaskEvent=false;
  document.getElementById("div_endDate_new").style.display = "none";
  // 69 document.getElementById("Schenddate").style.display = "none";
  // 69 document.getElementById("Descrip_Name12").style.display = "none";

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
      this._PopupConfirmedValue = 1;
      this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
      this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
      this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
      this.scstartdate = this._Oldstart_date;
      this.Addressurl = this.EventScheduledjson[0]['Addressurl']
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];
      this._onlinelink = this.EventScheduledjson[0]['Onlinelink'];
      this.Link_Details = this.EventScheduledjson[0]['Link_Details'];
      this.pending_status = this.EventScheduledjson[0]['Pending_meeting'];

      if (this._FutureEventTasksCount > 0) {
      }
      else if (this._FutureEventTasksCount == 0) {
    
      }
      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("createEventTaskModal").style.display = "block";
      document.getElementById("createEventTaskModal").classList.add("show");
      document.getElementById("createEventTaskModalBackdrop").style.display = "block";
      document.getElementById("createEventTaskModalBackdrop").classList.add("show");  
      document.getElementById("event-title").style.display = "none"; 
      document.getElementById("task-title").style.display = "none"; 
      document.getElementById("Copy-title").style.display = "none";
      document.getElementById("Repeat-title").style.display = "none";
      document.getElementById("Edit-title").style.display = "block";
    

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
      if ((this.EventScheduledjson[0]['Onlinelink']) == true) {
        document.getElementById("Descrip_Name12").style.display = "flex";
      }
      if ((this.EventScheduledjson[0]['Recurrence']) == 'Do not repeat') {
        this.selectedrecuvalue = '0';
        this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
        this._labelName = "Schedule Date";
        // 69 document.getElementById("Recurrence_hide").style.display = "none";
      }
      else if ((this.EventScheduledjson[0]['Recurrence']) == 'Daily') {
        document.getElementById("div_endDate_new").style.display = "block";
        this.selectedrecuvalue = '1';
        this._labelName = "Schedule Date";
       // 69 document.getElementById("Recurrence_hide").style.display = "none";
      }
      else if ((this.EventScheduledjson[0]['Recurrence']) == 'Last day of the month') {
        document.getElementById("div_endDate_new").style.display = "block";
        this.selectedrecuvalue = '5';
        this._labelName = "Schedule Date";
       // 69 document.getElementById("Recurrence_hide").style.display = "none";
      }
      else if ((this.EventScheduledjson[0]['Recurrence']) == 'Weekly') {

        this._labelName = "Schedule Date";
        document.getElementById("div_endDate_new").style.display = "block";
       // 69 document.getElementById("Recurrence_hide").style.display = "block";
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
      // 69  document.getElementById("Recurrence_hide").style.display = "block";
        document.getElementById("div_endDate_new").style.display = "block";
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
        // document.getElementById("Guest_Name").style.display = "none";
        //69 document.getElementById("Location_Name").style.display = "none";
        document.getElementById("Descrip_Name").style.display = "none";
        document.getElementById("core_viw123").style.display = "flex";
        document.getElementById("core_viw121").style.display = "none";
        document.getElementById("core_viw222").style.display = "none";
        document.getElementById("core_Dms").style.display = "none";
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
        //69 document.getElementById("Guest_Name").style.display = "flex";
        //69 document.getElementById("meeting-online-add").style.display = "flex";
        //69 document.getElementById("Location_Name").style.display =this._meetingroom==true?"flex":'none';
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
        } else

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
   this.customEventModal_dismiss();
   this.customTaskModal_dismiss();
}





OnSubmitReSchedule(type: number) {
  if (
    this.Title_Name &&
    this.Startts &&
    this.Endtms &&
    this.MinLastNameLength
    && (this.ScheduleType === 'Event' ?  this.allAgendas.length > 0 : true)
    && (this.Description_Type?(this.characterCount<=500):true)
  ) {
    this.notProvided = false;

    // update code below

    this._calenderDto.flagid = this._PopupConfirmedValue;
    this._calenderDto.type = type;
    var start = moment(this.minDate);

    if (this._PopupConfirmedValue == 3) {
    
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
  
        if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
          var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
        }
        else {
          var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        }
        var dd = moment(date3).add(diffInDays, 'days')


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
    
        let link_d=this.Link_Details;
        if(this.Link_Details){
          link_d=this.Link_Details.replace(/&#160;/g, ' ');
          link_d=this.anchoredIt(link_d);
        }


        element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';

        if (this.Description_Type && this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, '').length > 0) {
           this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       } else if(this.Description_Type!=null ){
         this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       }
     
        var vDescription = "Description";
        element[vDescription] = this.Description_Type == undefined || this.Description_Type == '<font face="Arial"> </font>' ? "" : this.Description_Type;

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
                    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    this._lstMultipleFiales = [];
             
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
      this.createEventTaskModal_dismiss();
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


  this.CalenderService.NewGetSearchResults(this._calenderDto).subscribe
    ((data) => {
      this.Scheduledjson = JSON.parse(data['Scheduledsearchlist']);
      console.log(this.Scheduledjson, "Testing");
    });
}



penhide() {
  //69 document.getElementById("pendlist").classList.remove("show");
  document.getElementById("cal-main").classList.remove("col-lg-9");
  document.getElementById("cal-main").classList.add("col-lg-12");
}


Select_flag(val) {
  this._PopupConfirmedValue = val;
}




Action_event(val) {
  this.EventAction_type = val;
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
        this.Event_requests();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Success");
      
        this.customEventModal_dismiss();
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
        this.Event_requests();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Success");   
        this.customEventModal_dismiss();
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
        this.Event_requests();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Rejected");
      
        this.customEventModal_dismiss();
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
        this.Event_requests();
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Rejected");
        
        this.customEventModal_dismiss();
      });
  }
}


Event_requests() {

  this._calenderDto.Emp_No = this.Current_user_ID;

  this.CalenderService.NewGetEvent_request(this._calenderDto).subscribe
    ((data) => {
      this.Event_requests1 = data;
    
    });
}


closefooter() {
  // $('.secfootr1').removeClass('opend');
  document.getElementById("ft_body1").classList.toggle("go-up");
  document.getElementById("secfootr1").classList.toggle("opend");
  document.getElementById("main-foot1").classList.toggle("overflow-hidden");
  $('#upload').html('Select a file');
  this._remarks = "";
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
     
      this.Event_requests();
      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "May be");
      // this.calendar.updateTodaysDate();
      this.customEventModal_dismiss();
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



onCustomBtnClicked(){
  $('#propse11').removeClass('show');
  this.repeatEvent();
}


repeatEvent() {
  document.getElementById("div_endDate_new").style.display = "none";
  //69 document.getElementById("Schenddate").style.display = "none";
  this.createTaskEvent=false;
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

      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      // document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
      document.getElementById("createEventTaskModal").style.display = "block";
      document.getElementById("createEventTaskModal").classList.add("show");
      document.getElementById("createEventTaskModalBackdrop").style.display = "block";
      document.getElementById("createEventTaskModalBackdrop").classList.add("show"); 
      document.getElementById("event-title").style.display = "none"; 
      document.getElementById("task-title").style.display = "none"; 
      document.getElementById("Edit-title").style.display = "none";
      document.getElementById("Copy-title").style.display = "none";
      document.getElementById("Repeat-title").style.display = "block";
      



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
        //69 document.getElementById("Location_Name").style.display = "flex";
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
    this.customEventModal_dismiss();
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


proposecahngedate(event) {
  this.Proposedate = event.format("YYYY-MM-DD").toString()
}


proposedate(){
  this.propose_date=this.Proposedate;
  this.proposeStartTimes=this.PropStart;
  this.proposeEndTimes=this.PurposeEnd
  this.Propose_date_time_menu_close();
}




proposenewtime() {
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.propose_date = this.propose_date;
  this._calenderDto.propose_stt = this.proposeStartTimes;
  this._calenderDto.propose_edt = this.proposeEndTimes;

  this.CalenderService.NewGetproposenewtime(this._calenderDto).subscribe
    ((data) => {
      this.GetScheduledJson();
      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "Proposed");
      this.customEventModal_dismiss();
    });
}



repeatEventTime(){
  this.repeatStartDate=this._StartDate;
  this.repeatStartts=this.Startts;
  this.repeatEndtms=this.Endtms
  this.Repeat_date_time_menu_close();
}


earlyDate:boolean=false;


submitEventToRepeat(){

  const input_date=moment(this.repeatStartDate,'YYYY-MM-DD');
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
  
        const date1: Date = new Date(this.repeatStartDate);
        const date2: Date = new Date(this._SEndDate);
  
        const diffInMs: number = date2.getTime() - date1.getTime();
  
        const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        if (this.repeatStartts.includes("PM") && this.repeatEndtms.includes("AM")) {
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
        element[vStartTime] = this.repeatStartts;
  
        var vEndTime = "EndTime";
        element[vEndTime] = this.repeatEndtms;
  
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
          this.customEventModal_dismiss();
        });
    }
    else {
      alert('Please Select Valid Date and Time');
    }
  }


  deleteTask:boolean=false;

  deleteRecurringTask(){
    this.deleteTask=true;
  }

  deleteRecurringEvent(){
    this.deleteTask=false;
  }


  uncomplete_task() {

    this.CalenderService.NewTaskUncomplete(this.Schedule_ID).subscribe
      (data => {
        this.GetScheduledJson();
        this.GetPending_Request();
        this.customTaskModal_dismiss();
      });
    // console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Task Uncomplete.", "Success");
  }










  togglemeetingtypeOption(option: string) {
    this.selectedOption = option;
    if(this.selectedOption === 'option2'){
      this._onlinelink = true;
    }else if(this.selectedOption === 'option1'){
      this._meetingroom=true;
    }else{
      this._onlinelink = false;
      this._meetingroom=false;
    }
  
  }

  // Online_method(event) {

  //   if (event.target.checked) {
  //     document.getElementById("Descrip_Name12").style.display = "flex";
  //     this._onlinelink = event.target.checked;
  //     // alert(this._onlinelink)
  //   }
  //   else {
  //     document.getElementById("Descrip_Name12").style.display = "none";
  //     this._onlinelink = false;
  //     // alert(this._onlinelink)
  //   }

  // }



  // Meeting_method(event){
  //   if (event.target.checked) {
  //     document.getElementById("Location_Name").style.display = "flex";
  //     this._meetingroom = event.target.checked;
  //   }
  //   else {
  //     document.getElementById("Location_Name").style.display = "none";
  //     this._meetingroom = false;
  //   }
  //  }
/////////////////////////////////////////// Created On (Schedule event popup box) End /////////////////////////////////////////////////////////
}