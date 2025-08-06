import { Component, EventEmitter, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
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
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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
  disablePreviousTodayDate = new Date();
  calendarOptions: CalendarOptions
  selectDay: any;
  Current_user_ID: any;
  _StartDate: any;
  Startts: any;
  validStartTimearr:any=[];
  ScheduleType: any;
  Endtms: any;
  Description_Type: any;
  currentHourIndex: number = 0;
  currentTimeTop: number = 0;
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
  durationOfTodayLine:any

  gmtOffset = `GMT+${(-new Date().getTimezoneOffset() / 60) | 0}:${String(Math.abs(new Date().getTimezoneOffset()) % 60).padStart(2, '0')}`;
  ProjectCode: string; Status: string; ProjectType: string; Owner: string;
  event: any;
  dayMeetingSection:any = 'Schedule';
  Selecteddaate: any;
  flagevent: number;
  approvalObj: ApprovalDTO;
  loadingDMS: boolean = false;

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
    public datepipe: DatePipe,
    public approvalservice: ApprovalsService,
    public service: ProjectTypeService,
    private activatedRoute:ActivatedRoute,
     private _snackBar: MatSnackBar,
    private router: Router
  ) { 
    this._lstMultipleFiales = [];
    this._calenderDto = new CalenderDTO;
    this.Selecteddaate = this.datepipe.transform(new Date(), 'YYYY/MM/DD');
    this.approvalObj = new ApprovalDTO();
  }

onPaste(event: ClipboardEvent): void {
  setTimeout(() => {
    this.AgendaCharacterCount();
  }, 0); // Wait for paste to complete and update model
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

  scheduleId_UrlParams:any;
  
  ngOnInit(): void {
    this.loadingDMS = false;
    this.Current_user_ID = localStorage.getItem('EmpNo');
   
    this.getEventsForWeeks(0);
    this.getTeam_List(0)
    this.getDayReportSummary();
    this.scheduleId_UrlParams=this.activatedRoute.snapshot.queryParamMap.get('calenderId'); 

    if(this.scheduleId_UrlParams){
      this.router.navigate(['/backend/StreamCalendar'], { queryParams: { calenderId: null } });
      this.CalenderDataLoaded=new EventEmitter<boolean>();
      this.CalenderDataLoaded.subscribe((isLoaded)=>{  
        if(isLoaded){
          if(this.scheduleId_UrlParams){
            console.log(this.scheduleId_UrlParams,'this.scheduleId_UrlParams')
            const [scheduleIds, color] = this.scheduleId_UrlParams.split(',');
            this.customEventModal(scheduleIds);
            this.GetClickEventJSON_Calender(scheduleIds, color);
            this.scheduleId_UrlParams=null;
           
          }
            }
      this.CalenderDataLoaded.unsubscribe();  
      this.CalenderDataLoaded=null;    
      });
    }
  

    // this.initAutosize();
    // this.initFirstclass();
    this.MinLastNameLength = true;
    this._labelName = "Schedule Date";
    this.selectedrecuvalue = "0";
    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this.flagevent = 1;
   
 
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
   
 
     this.maxDate = moment().format("YYYY-MM-DD").toString();
     this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
    
 
     this._StartDate = moment().format("YYYY-MM-DD").toString();

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
     this._SEndDate = moment().format("YYYY-MM-DD").toString();

     this.GetTimeslabfordate();
   

    tippy('#agenda-info-icon', {
      content: "Agenda is mandatory for a meeting, Please provide atleast 1.",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'dark',
      animateFill: true,
      inertia: true,
      placement: 'left'
    });
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
    if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
      document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
    }
   
    this.dayMeetingSection = 'Day';
    this.dayScheduleJson(0);
  }


  weekToDay(selectesDate) { 
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
     if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
     }
    this.dayMeetingSection = 'Day';
    this.selectDay = selectesDate; 
    this.dayScheduleJson(0);
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
     if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
     }
    this.dayMeetingSection = 'Weekly';
    this.weeklyScheduleJson(0);
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
     if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
    document.getElementById("kt-calendar-quickactions").classList.add("border-0");
     }
    this.dayMeetingSection = 'Monthly';
    this.monthlyScheduleJson(0);

    
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
     if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
    document.getElementById("kt-calendar-quickactions").classList.remove("border-0");
     }
    this.dayMeetingSection = 'Schedule';
    this.timeLineVisible= false;
    clearInterval(this.timeLineInterval);
    this.getEventsForWeeks(0);
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

  customPendingTaskModal() {
    document.getElementById("customPendingTaskModal").style.display = "block";
    document.getElementById("customPendingTaskModal").classList.add("show");
    document.getElementById("customPendingTaskModalBackdrop").style.display = "block";
    document.getElementById("customPendingTaskModalBackdrop").classList.add("show");
  }
  customPendingTaskModal_dismiss() {
    document.getElementById("customPendingTaskModal").style.display = "none";
    document.getElementById("customPendingTaskModal").classList.remove("show");
    document.getElementById("customPendingTaskModalBackdrop").style.display = "none";
    document.getElementById("customPendingTaskModalBackdrop").classList.remove("show"); 
  }

  notificationalertModal() {
    document.getElementById("notificationalertModal").style.overflow = "auto";
    // document.getElementById("notificationalertModal").classList.add("show");
    document.getElementById("notificationalertModalBackdrop").style.display = "block";
    document.getElementById("notificationalertModalBackdrop").classList.add("show");
    document.getElementById("notificationalertModal").classList.add("noti-animate-active");
  }
  notificationalertModal_dismiss() {
    document.getElementById("notificationalertModal").style.overflow = "hidden";
    // document.getElementById("notificationalertModal").classList.remove("show");
    document.getElementById("notificationalertModalBackdrop").style.display = "none";
    document.getElementById("notificationalertModalBackdrop").classList.remove("show"); 
    document.getElementById("notificationalertModal").classList.remove("noti-animate-active");
  }


  change_event(){
    this.createTaskEvent=true;
    // document.getElementById("event-title").style.display = "block";
    // document.getElementById("Copy-title").style.display = "none";
    // document.getElementById("Repeat-title").style.display = "none";
    // document.getElementById("Edit-title").style.display = "none";
    // document.getElementById("task-title").style.display = "none";
    document.getElementById("nav-event").style.display = "block";
    document.getElementById("nav-task").style.display = "none";
    document.getElementById("create-event-div").style.display = "block";
    document.getElementById("create-task-div").style.display = "none";
    // $("#create-task-badge").removeClass("active");
    // $("#create-event-badge").addClass("active");
   
  }
  change_task(){
    this.createTaskEvent=true;
    // document.getElementById("event-title").style.display = "none";
    // document.getElementById("Copy-title").style.display = "none";
    // document.getElementById("Repeat-title").style.display = "none";
    // document.getElementById("Edit-title").style.display = "none";
    // document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    // $("#create-event-badge").removeClass("active");
    // $("#create-task-badge").addClass("active");
  }
  createEventonlyTaskModal(){
    // $("#create-event-badge").removeClass("active");
    // $("#create-task-badge").addClass("active");
    this.createTaskEvent=true;
    // document.getElementById("event-title").style.display = "none";
    // document.getElementById("Copy-title").style.display = "none";
    // document.getElementById("Repeat-title").style.display = "none";
    // document.getElementById("Edit-title").style.display = "none";
    // document.getElementById("task-title").style.display = "block";
    this.draftid = 0;
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
 
  }

  openPopupBox:boolean=true;

  customEventModal(Schedule_Type){
    this.openPopupBox = false;
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
    // this.router.navigate(['/backend/StreamCalendar']);
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



  eventtaskitemtimeModal_dismiss(){
    document.getElementById("eventtaskitemtimeModal").style.display = "none";
    document.getElementById("eventtaskitemtimeModal").classList.remove("show");
    document.getElementById("eventtaskitemtimeModalBackdrop").style.display = "none";
    document.getElementById("eventtaskitemtimeModalBackdrop").classList.remove("show");

    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";

    this.changeSelectionValue=false;
    this.selectedrecuvalue1='0';
    this.dayArr1=[];
    this.MonthArr1=[];
    this._EndDate1=moment().add(3, 'months').format("YYYY-MM-DD").toString();
  }


  shareoptionModal() {
    document.getElementById("shareoptionModal").style.display = "block";
    document.getElementById("shareoptionModal").classList.add("show");
    document.getElementById("shareoptionModalBackdrop").style.display = "block";
    document.getElementById("shareoptionModalBackdrop").classList.add("show");
    this.generateLink()
  }
  
  shareoptionModal_dismiss() {
    document.getElementById("shareoptionModal").style.display = "none";
    document.getElementById("shareoptionModal").classList.remove("show");
    document.getElementById("shareoptionModalBackdrop").style.display = "none";
    document.getElementById("shareoptionModalBackdrop").classList.remove("show");
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
   console.log('<============================>')
    this._StartDate=null;
    this.disablePreviousDate = null;
    this._SEndDate = null;
    this.minDate = null;
    this.disablePreviousTodayDate = null; 
    setTimeout(()=>{ 
      const TodayDate  = new Date();
      this._StartDate=TodayDate;
      this.disablePreviousDate = TodayDate;
      this._SEndDate = TodayDate;
      this.disablePreviousTodayDate= TodayDate;
    },0)      
    this.selectAction=false;
    this.mtgOnDays=[];
    this.privateMeeting = false;
    this.formattedDayTime = null;
    this.monthDateBinde = null;
    this.Link_Details = null;
    this.Meeting_Id = null;
    this.Meeting_password = null;
    this.RecurrValue= false;
    this.RecurrValueMonthly=false;
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
    this.agendaInput=undefined;
    this.SelectDms = null;
    this.MasterCode = null;
    this.projectsSelected = [];
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    // this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    this.rapeatLink_Details=true;
    this.Description_Type = null;
    this.characterCount=null;
    this.agendacharacterCount=null;
    this.switChRecurrenceValue=false;
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

    //test
   this.Time_End = [];
   this.Time_End = [...this.AllEndtime,...this.AllEndtime];
   let _from = this.Time_End.indexOf(this.Startts);
   const eventmaxDuration=286;
   let _to=_from+eventmaxDuration;
   this.EndTimearr=this.Time_End.slice(_from,_to);
   //test
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
    this.GetPending_Request();
  }
  pending_list_close(){
    document.getElementById("pending-list").classList.remove("quickaction-open");
    document.getElementById("dropd").classList.remove("show");
    this.SearchOfPendingItem=null;
  }

  draft_list_open(){
    document.getElementById("draft-list").classList.add("quickaction-open");
    this.Getdraft_datalistmeeting() 
  }
  draft_list_close(){
    document.getElementById("draft-list").classList.remove("quickaction-open");
    document.getElementById("dropds").classList.remove("show");
    this.SearchOfDraftItem=null;
  }
  requestaccess_list_open(){
    document.getElementById("requestaccess-list").classList.add("quickaction-open");
    this.getMeetingApprovals();
  }
  requestaccess_list_close(){
    document.getElementById("requestaccess-list").classList.remove("quickaction-open");
    this.SearchOfRequestItem=null;
  }
  bookmark_list_open(){
    document.getElementById("bookmark-list").classList.add("quickaction-open");
    this.BookmarkMeetingsList();
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
projectmodaltype:'project'|'portfolio'|'S Mail'|'participant'|undefined;
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
AdminMeeting_Status: any;
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
earlyDate:boolean=false;
deleteTask:boolean=false;
SearchOfPendingItem: any;
Meeting_Id:any;
Meeting_password:any;
multiapproval_json:any;
totalCountOfList:any;
_attachmentValue:any = 0;
Attamentdraftid:any;
RemovedFile_id:any = [];
isValidURL:boolean= true;
SearchOfRequestItem: any;
activeDraftMeeting:any;
SearchOfDraftItem: any;
activePendingMeeting:any;
draft_arry: any = [];
showLoader:boolean = false;






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


agendacharacterCount:any;

AgendaCharacterCount(): void {
  var count =this.agendaInput;
  if(count){
    this.agendacharacterCount = count.length;
  }else{
    this.agendacharacterCount =  null;
  }
  
}


addAgenda() {
  if (this.agendacharacterCount > 0 && this.agendacharacterCount < 101) {
    this.agendasAdded += 1;
    const agenda = {
      index: this.agendasAdded,
      name: this.agendaInput
    };
    this.allAgendas.push(agenda);
    this.agendaInput = undefined;
  }
  this.agendacharacterCount =  null;
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



// onFileChange(event) {
//   if (event.target.files.length > 0) {
//     var length = event.target.files.length;
//     for (let index = 0; index < length; index++) {
//       const file = event.target.files[index];
//       var contentType = file.type;
//       if (contentType === "application/pdf") {
//         contentType = ".pdf";
//       }
//       else if (contentType === "image/png") {
//         contentType = ".png";
//       }
//       else if (contentType === "image/jpeg") {
//         contentType = ".jpeg";
//       }
//       else if (contentType === "image/jpg") {
//         contentType = ".jpg";
//       }
//       this.myFiles.push(event.target.files[index].name);
//       // alert(this.myFiles.length);
    
//       //_lstMultipleFiales
//       var d = new Date().valueOf();
   
//       this._lstMultipleFiales = [...this._lstMultipleFiales, {
//         UniqueId: d,
//         FileName: event.target.files[index].name,
//         Size: event.target.files[index].size,
//         Files: event.target.files[index]
//       }];
//     }
//   }

//   const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
//   uploadFileInput.value = null;
//   uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
// }
onFileChange(event) {
 
  if (event.target.files.length > 0) {
    const allowedTypes = [
      "image/*", "video/*", "audio/*", "application/pdf", "text/plain", "text/html", "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/json", "application/xml", "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    const length = event.target.files.length;
    for (let index = 0; index < length; index++) {
      const file = event.target.files[index];
      const fileName = file.name;
      const contentType = file.type;
      if (!allowedTypes.some(type => file.type.match(type))) {
        // Show a sweet alert popup for unsupported file types
        Swal.fire({
          title: `This File "${fileName}" cannot be accepted!`,
          text: `Supported file types: Images, video, audio, PDFs, Text, HTML, Word, JSON, XML, PowerPoint, Excel.`
          });
        continue;
      }


      // Skip file if its name already exists in either array
      const fileAlreadyExists =
        this.Attachment12_ary.some(att => att.File_Name === fileName) ||
        this._lstMultipleFiales.some(existingFile => existingFile.FileName === fileName);

      if (fileAlreadyExists) {
        Swal.fire({
          title: `File "${fileName}" Already Exists`,
          text: `The file "${fileName}" was not added to avoid duplication.`
        })
        continue; // Skip this file
      }

      // Determine file extension
      let fileExtension = '';
      if (contentType === "application/pdf") {
        fileExtension = ".pdf";
      } else if (contentType === "image/png") {
        fileExtension = ".png";
      } else if (contentType === "image/jpeg") {
        fileExtension = ".jpeg";
      } else if (contentType === "image/jpg") {
        fileExtension = ".jpg";
      }

      // Add file to _lstMultipleFiales array
      this.myFiles.push(fileName);
      const uniqueId = new Date().valueOf();

      this._lstMultipleFiales.push({
        UniqueId: uniqueId,
        FileName: fileName,
        Size: file.size,
        Files: file
      });
    }
  }

  // Reset the input value and styling
  const uploadFileInput = document.getElementById("uploadFile") as HTMLInputElement;
  if (uploadFileInput) {
    uploadFileInput.value = null;
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
  }
  (event.target as HTMLInputElement).value = '';
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
  // document.getElementById("Edit-title").style.display = "none";
  // document.getElementById("Copy-title").style.display = "none";
  // document.getElementById("Repeat-title").style.display = "none";
 

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
  this.Link_Details==null;
  this.eventRepeat=false;
  this.create = true;
  this.currentTime=moment().format('h:mm A');

  if (value == 1) {
    this.change_task();
    this.ScheduleType = "Task";
    this.GetProjectAndsubtashDrpforCalender();
  }
  else {
    this.createTaskEvent=true;
    // document.getElementById("event-title").style.display = "block";
    this.change_event();
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
  if(this.formattedDayTime){
   this._StartDate = this.monthDateBinde;
   this._SEndDate =  this.monthDateBinde;
   this.Startts= this.formattedDayTime;
   this.Endtms = this.Startts.replace(/(\d+):(\d+) (\wM)/, (_, h, m, p) => 
    `${String((h = +h % 12 + 1)).padStart(2, '0')}:${m} ${h === 12 ? (p === "AM" ? "PM" : "AM") : p}`
  );
  }else{
    this._StartDate = this.today;
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




projectmodal(modaltype:'project'|'portfolio'|'S Mail'|'participant'){

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
  else if(this.projectmodaltype=='S Mail')
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
        case 'S Mail':{
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
     const isEmpIn:boolean=(!this.basedOnFilter.bycompany)||_emp.Emp_Comp_No===this.basedOnFilter.bycompany;
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
  this.agendaInput=undefined;
  this.agendacharacterCount =  null;
  this.SelectDms = null;
  this.MasterCode = null;
  this.projectsSelected = [];
  this.Subtask = null;
  this.Startts = null;
  this.Endtms = null;
  this.SelectStartdate = null;
  this.Selectenddate = null;
  // this.selectDay = null;
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





TImetable() { debugger
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

 

    this.Time_End = [];
    this.Time_End = [...this.AllEndtime,...this.AllEndtime];
    let _from = this.Time_End.indexOf(this.Startts);
    const eventmaxDuration=286;
    let _to=_from+eventmaxDuration;
    this.EndTimearr=this.Time_End.slice(_from,_to);
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
      case 'S Mail':{
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

     case 'S Mail':{ debugger
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


  changeSelectionValue:boolean=false;


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



    if((this.editTask || this.create ) && this.selectedrecuvalue =='2'){
 
    // uncheck prev date.
    if(this._Oldstart_date){
      let d=new Date(this._Oldstart_date);
      const index=d.getDay();
      this.dayArr[index].checked=false;
    }
    
    //uncheck prev date.
    
    this.dayArr.forEach(item => item.checked = false);
    
    //update new
      let d2=new Date(this._StartDate);
      const index2=d2.getDay();
      this.dayArr[index2].checked=true;
    
    console.log(this.dayArr,'sdcsadcasdcssad')
    this.changeSelectionValue=true;
     
      this.mtgOnDays=[];
      this.dayArr.forEach((item:any)=>{
        if(item.checked){
            let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
           this.mtgOnDays.push(d_name);
        }
     });
    // update new
    } else if((this.editTask || this.create ) && this.selectedrecuvalue == "3"){
    
        // uncheck prev date.
        if(this._Oldstart_date){
          let d=new Date(this._Oldstart_date);
          const index=d.getDate();
          this.MonthArr[index].checked=false;
        }
    
        // uncheck prev date.
    
        this.MonthArr.forEach(item => item.checked = false);
        // update new
    
        let d2=new Date(this._StartDate);
        const index2=d2.getDate();
        this.MonthArr[index2-1].checked=true;

        this.changeSelectionValue=true;
        this.mtgOnDays=[];
        this.MonthArr.forEach((item:any)=>{
          if(item.checked){
           
             const d_no=Number.parseInt(item.value);
             this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
          }
        });
        // update new
    }

  }



  addstarttime1() {

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


//test
addstarttime(){
  const completetime=this._arrayObj.map((element)=>{
      return element.TSStart;
   });
   const endtime_arr=[...completetime,...completetime];
   let _from = completetime.indexOf(this.Startts);
   const eventmaxDuration=286;
   let _to=_from+eventmaxDuration;
   this.EndTimearr=endtime_arr.slice(_from,_to);

   this.Endtms = new Date(new Date('2000-01-01 ' + this.Startts).getTime() + 15 * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

   console.log(this.EndTimearr, "this.Startts")
  }
   //test



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



// bindCustomRecurrenceValues(){

//   if(this.selectedrecuvalue1=='2'&&!this.dayArr1.some((item)=>item.checked)){
//     this.notProvided1='dayarr1';
//     return;
//   }
  
//   if(this.selectedrecuvalue1=='3'&&!this.MonthArr1.some(item=>item.checked)){
//     this.notProvided1='montharr1';
//     return;
//   }

//   if(['1','2','3'].includes(this.selectedrecuvalue1)&&!this._EndDate1){
//     this.notProvided1='enddate1';
//     return;
//   }
  

//   this.selectedrecuvalue=this.selectedrecuvalue1;
//   this.dayArr=[...this.dayArr1];
//   this.MonthArr=[...this.MonthArr1];


//     this._EndDate=this._EndDate1.format("YYYY-MM-DD").toString();
//     this.maxDate = this._EndDate1.format("YYYY-MM-DD").toString();


//   this.mtgOnDays=[];
//   if(this.selectedrecuvalue==='2'){
//     this.dayArr.forEach((item:any)=>{
//       if(item.checked){
//          let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
//          this.mtgOnDays.push(d_name);
//       }
//   });
//   }
//   else if(this.selectedrecuvalue==='3'){
//      this.MonthArr.forEach((item:any)=>{
//        if(item.checked){
//           const d_no=Number.parseInt(item.value);
//           this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
//        }
//      });
//   }

//   this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
//   var start = moment(this.minDate);
//   var end = moment(this.maxDate);
//   const format2 = "YYYY-MM-DD";
//   const d1 = new Date(moment(start).format(format2));
//   const d2 = new Date(moment(end).format(format2));
//   const date = new Date(d1.getTime());
//   this.daysSelectedII = [];
//   this.AllDatesSDandED = [];
//   const dates = [];
  
//   while (date <= d2) {
//     dates.push(moment(date).format(format2));
//     var jsonData = {};
//     var columnName = "Date";
//     jsonData[columnName] = (moment(date).format(format2));
//     var columnNames = "StartTime";
//     jsonData[columnNames] = this.Startts;
//     var columnNamee = "EndTime";
//     jsonData[columnNamee] = this.Endtms;
//     var IsActive = "IsActive";
//     jsonData[IsActive] = 1;
//     var Day = "Day";
//     jsonData[Day] = moment(date).format('dddd').substring(0, 3);
//     var DayNum = "DayNum";
//     jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
//     this.AllDatesSDandED.push(jsonData);
//     date.setDate(date.getDate() + 1);
//   }
  
//   if (this.selectedrecuvalue == '0') {
//     this.maxDate = moment(this.minDate).format("YYYY-MM-DD").toString();
//     this.daysSelectedII = [];
//     this.daysSelected = [];
//     this.singleselectarry = [];
//     const format2 = "YYYY-MM-DD";
//     var jsonData = {};
//     var columnName = "Date";
//     jsonData[columnName] = (moment(this.minDate).format(format2));
//     var columnNames = "StartTime";
//     jsonData[columnNames] = this.Startts;
//     var columnNamee = "EndTime";
//     jsonData[columnNamee] = this.Endtms;
//     var IsActive = "IsActive";
//     jsonData[IsActive] = 1;
//     this.daysSelectedII.push(jsonData);
//   }

  
//   this.eventtaskitemtimeModal_dismiss();
//   }



bindCustomRecurrenceValues(){

   if(this.changeSelectionValue==false){

  
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


  if(this._EndDate1 == undefined){
    this.eventtaskitemtimeModal_dismiss();
  }else if(this.selectedrecuvalue != '0'){
  
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
}

}

this.eventtaskitemtimeModal_dismiss();
   //inserting values into these selectedrecuvalue, dayArr, MonthArr, _EndDate.
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

selectAction:any;

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
        this.selectAction=false;
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "none";
          
      }
      else {
        this.selectAction=true;
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
    if(this.Link_Details){
      this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
      }


    if (
      (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
      (this.Description_Type?(this.characterCount<=500):true)&& this.isValidURL &&  
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ?this.allAgendas.length > 0: true )
      // && (this.ngEmployeeDropdown&&this.ngEmployeeDropdown.length > 0).action-section
    ) {
      this.OnSubmitSchedule();
      this.notProvided = false;
    }
    else {
      if ((!this.Title_Name)||this.Title_Name.trim().length<3||this.Title_Name.trim().length>100)
        document.getElementById('dsb-evt-titleName').focus();
      // .action-section 
      else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.agenda-input-field input#todo-input'); agf.focus(); }

      this.notProvided = true;
    }
  }




  RemoveExistingFile(_id) {

    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {
        // this.RemovedAttach.push(element.Cloud_Name);
        this.RemovedFile_id.push(element.file_id);
      }
    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);

  }




  rapeatLink_Details:boolean=true;

  sanitizeFileName(fileName: string): string {
    return fileName
      .replace(/</g, '%3C')
      .replace(/>/g, '%3E')
      .replace(/#/g, '%23')
      .replace(/\+/g, '%2B')
      .replace(/{/g, '%7B')
      .replace(/}/g, '%7D')
      .replace(/\|/g, '%7C')
      .replace(/\^/g, '%5E')
      .replace(/~/g, '%7E')
      .replace(/\[/g, '%5B')
      .replace(/]/g, '%5D')
      .replace(/;/g, '%3B')
      .replace(/\//g, '%2F')
      .replace(/\?/g, '%3F')
      .replace(/:/g, '%3A')
      .replace(/@/g, '%40')
      .replace(/=/g, '%3D')
      .replace(/&/g, '%26')
      .replace(/\$/g, '%24'); // Leave spaces as-is
  }

  generateRandomId(): string {
    return Math.random().toString().substr(2, 6).padStart(6, '0');
  }



  getContentType(fileName: any): string | null {
    if (!fileName) {
      return null;
    }
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
  }


  _azureMessage:any="";







  OnSubmitSchedule() { 

    if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
      this._subname1 = true;
      return false;
    }
    if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
      this._subname = true;
      return false;
    }
 debugger
    var now = new Date();
    if(this.eventRepeat===false){
      let timestamp = "";
      timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
        + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
      this.EventNumber = timestamp;
    }
     if(this.privateMeeting == true){
          this.MasterCode = null;
          this.ngEmployeeDropdown = null;
          this.Portfolio = null;
          this.SelectDms = null;
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

  
       // new code start 69
      debugger
  
       if(this.eventRepeat==true && (this._StartDate == this.disablePreviousTodayDate) || this.formattedDayTime){
         let startDate = new Date(this._StartDate);
         this.AllDatesSDandED = [{
             Date: startDate.toISOString().split('T')[0],  // Get YYYY-MM-DD format
             Day: startDate.toLocaleString('en-US', { weekday: 'short' }), // Get short day name
             DayNum: startDate.getDate().toString(),
             EndTime: this.Endtms,
             IsActive: 1,
             StartTime : this.Startts
           }];
       
         this.daysSelectedII = this.AllDatesSDandED ;
         if(this.formattedDayTime){
          this._StartDate = new Date(this._StartDate);
          this.formattedDayTime = null;
         }
         this._SEndDate = this._StartDate.toISOString().split('T')[0];
         this._StartDate = new Date(new Date(this._StartDate).setHours(0, 0, 0, 0)); 
       }

         // new code end 69
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
   
    console.log('test your daysSelectedII:',this.daysSelectedII);



    finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

    if (finalarray.length > 0) {
      finalarray.forEach(element => { debugger
       this._StartDate = moment(this._StartDate).format("YYYY-MM-DD").toString();
        const date1: Date = new Date(this._StartDate);
     
        const date2: Date = new Date(this._SEndDate); 

        date1.setHours(0,0,0,0);
        date2.setHours(0,0,0,0);


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

    
 
        if(this.Link_Details!=null){      
          this.Link_Details = this.Link_Details.trim() == ''?null:this.Link_Details;
        }
        if(this.Meeting_Id!=null){ 
          this.Meeting_Id = this.Meeting_Id.trim()  == ''?null:this.Meeting_Id;
        }
        if(this.Meeting_password!=null){  
          this.Meeting_password = this.Meeting_password.trim() == ''?null:this.Meeting_password;
        }
        if(this.Link_Details==null && this.Meeting_Id==null && this.Meeting_password==null){
          this._onlinelink =false
        }


        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;
        if(this.rapeatLink_Details==true){
        this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password;
        this.rapeatLink_Details=false;
      }
        // console.log('this.Link_Details :->',this.Link_Details ,'this.Meeting_Id :->', this.Meeting_Id, 'this.Meeting_password :->',this.Meeting_password)
      
        var vLink_Details = "Link_Details";
        element[vLink_Details]=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';
     
        if (this.Description_Type && this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, '').length > 0) {
   
          this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       } else if(this.Description_Type!=null ){
         this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       }
       
       var vPrivate_Meeting = "Private_Meeting";
       element[vPrivate_Meeting] =  this.privateMeeting;

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
      
      const frmData = new FormData();
   
      
      if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
        frmData.append("Attachment", "true");
        this._attachmentValue = 1;

        for (var i = 0; i < this._lstMultipleFiales.length; i++) {
          frmData.append("files", this._lstMultipleFiales[i].Files);
        }
        const xmlDoc = document.implementation.createDocument('', '', null);
      const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element

      // Iterate over the file groups
      this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
        console.log(`Processing group ${groupIndex}:`, fileGroup);

        // Normalize Files to an array
        const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);

        files.forEach((file, fileIndex) => {
          if (!file || !file.name || !file.type) {
            console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
            return;
          }

          console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);

          const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
          const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
          const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
          const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element

          // Populate <FileName> element
          nameElement.textContent = file.name;

          // Generate a random ID and sanitize the file name for CloudName
          const randomId = this.generateRandomId();
          const sanitizedFileName = this.sanitizeFileName(file.name);
          cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;

          // Populate <ContentType> element
          const contentType = this.getContentType(file.type);
          contentTypeElement.textContent = contentType;

          // Append child elements to the <Row>
          rowElement.appendChild(nameElement);
          rowElement.appendChild(cloudNameElement);
          rowElement.appendChild(contentTypeElement);

          // Append the <Row> to the root element
          parentElement.appendChild(rowElement);
          });
        });

      // Append the root <MultiDocument> element to the XML document
        xmlDoc.appendChild(parentElement);

        // Serialize the XML document to a string
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(xmlDoc);

        // Append the XML string to FormData
        frmData.append("docs_multiple_xml", xmlString);

        // Log the XML string for debugging
        console.log("Generated XML:", xmlString);

          } 
          else {
            this._attachmentValue = 0;
            frmData.append("Attachment", "false");
          }

          

      frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
      frmData.append("CreatedBy", this.Current_user_ID.toString());
  
      this._calenderDto.draftid = this.draftid? this.draftid : 0;
      frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');

      this._calenderDto.attachment =this._attachmentValue.toString();

     
      frmData.forEach((value, key) => {
        console.log("Start", `${key} : ${value}, = ${typeof value}` ,"End");
      });

      console.log(this._calenderDto,'Event create json')
      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {

          this.Attamentdraftid= data['draftid']
          frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);

          if (this._attachmentValue == 1) {
            // this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
            this.CalenderService.UploadCalendarAttachmenstCore(frmData).subscribe(

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
                    var myJSON = JSON.stringify(event);
                    this._azureMessage = (JSON.parse(myJSON).body).message;

                    if(this._azureMessage=="1"){
                      console.log(frmData,"frmData")
                      this.CalenderService._AzureUploadCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                        console.log(event1,"azure data");
                        var myJSON = JSON.stringify(event1);
                      //  this._Message = (JSON.parse(myJSON).body);
            
                      });
                    }

                    // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                    // (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    // this._lstMultipleFiales = [];
                    // // empty(this._lstMultipleFiales);
                    // // alert(this._lstMultipleFiales.length);
                    // setTimeout(() => {
                    //   this.progress = 0;
                    // }, 1500);

                    // (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                    // (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                    // document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
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


          this.getEventsForWeeks(0);
          this.Title_Name = null;
        
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.agendaInput=undefined;
          this.agendacharacterCount =  null;
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
          this.Meeting_Id = null;
          this.Meeting_password = null;
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
          this._attachmentValue=0;
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
       
        if (data['Draft_meetingdata'] != "" && data['Draft_meetingdata'] != null && data['Draft_meetingdata'] != undefined) {
          this.draftdata_meet = JSON.parse(data['Draft_meetingdata']);
          this.draftcount = this.draftdata_meet.length;
          this.filterDraft('date');
          console.log(this.draftdata_meet,'draftdata_meet')
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



  
  validateURL(value: string): void {
    if(value){
      this.isValidURL = /^(https?:\/\/)/.test(value);
    }else{
      this.isValidURL=true
    }
    
  }

///////////////////////////////////////////  Create Event and Create Task sidebar End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Calendar meeting list start /////////////////////////////////////////////////////////


  SetBydefaultToday(){
    if(this.dayMeetingSection == 'Schedule'){
      this.getEventsForWeeks(3);
    }else if(this.dayMeetingSection == 'Day'){
      this.dayScheduleJson(3);
    }else if(this.dayMeetingSection == 'Weekly'){
      this.weeklyScheduleJson(3);
    }else if(this.dayMeetingSection == 'Monthly'){
      this.monthlyScheduleJson(3);   
    }
  
  }




  sortMeetingCalender(user_Types){
   this.user_Type=user_Types;
   this.getEventsForWeeks(0)
  }


  CalenderDataLoaded:EventEmitter<boolean>;

selectEmployee:any;


  GetScheduledJson() {

    if(this.teamsCalendar == 1){
       this.selectEmployee = this.Current_user_ID;
    }
    this._calenderDto.EmpNo = this.selectEmployee;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this._calenderDto.startdate = this.firstDate;
    this._calenderDto.enddate = this.lastDate;
    this._calenderDto.SearchText= null;
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe((data) => {
       
        // this.fetchDataEndTime = performance.now();
        // this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;

        // this.dataBindStartTime = performance.now();
        
        // this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        // this.Scheduledjson = this.Scheduledjson.sort((a, b) => new Date(a.Schedule_date).getTime() - new Date(b.Schedule_date).getTime());
 
        // console.log(this.Scheduledjson,'this.Scheduledjson');

        
          

        // if(this.dayMeetingSection == 'Schedule'){
        //   // this.getEventsForWeeks(0);
        // }else if(this.dayMeetingSection == 'Day'){
        //   this.dayScheduleJson(0);
        // }else if(this.dayMeetingSection == 'Weekly'){
        //   this.weeklyScheduleJson(0);
        // }else if(this.dayMeetingSection == 'Monthly'){
        //   this.monthlyScheduleJson(0);
        // }


        // this.dataBindEndTime = performance.now();
        // this.dataBindTime = this.dataBindEndTime - this.dataBindStartTime;
        // this.userFound = true

        // this.calendarOptions = {
        //   initialView: 'listWeek',

        //   firstDay: moment().weekday(),

        //   headerToolbar: {
        //     left: 'prev,next today',
        //     center: 'title',
        //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        //   },

        //   themeSystem: "solar",
        //   weekNumbers: true,
      
        //   events: this.Scheduledjson,
         

        //   dayMaxEvents: 4,
        //   eventTimeFormat: {
        //     hour: 'numeric',
        //     minute: '2-digit',
        //     meridiem: 'short',
        //     hour12: true
        //   },
        //   nowIndicator: true,
        //   allDaySlot: false,
     
        // };
        if(this.CalenderDataLoaded){
          this.CalenderDataLoaded.emit(true);
        }
    });

  }



isCalendarVisible: boolean = false;
nextDateSched:any;
SearchText:any;



getEventsForWeeks(weeksFromToday: number) { 

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  this.durationOfTodayLine = new Date().toLocaleString('sv-SE', { hour12: false }).slice(0, 16).replace('T', ' ');

  if (weeksFromToday === 3) {
   
    this.clickHistory = [];
    this.currentWeekOffset = 0;
  } else {
    const newOffset = this.currentWeekOffset + weeksFromToday;
    if (weeksFromToday < 0) {
      this.clickHistory.push(weeksFromToday);
    } else if (weeksFromToday > 0 && this.clickHistory.length > 0) {
      this.clickHistory.pop();
    }

    this.currentWeekOffset = newOffset;
  }


  if(this.noSelectedDate == true && weeksFromToday === 0  && this.selectDay){ 
    var formattedDate = this.selectDay.toDate();
    this.currentWeekOffset = 0 ;
  }else{
    formattedDate = undefined;
    this.isCalendarVisible = false;  
    setTimeout(() => {
      this.isCalendarVisible = true;  
      this.selectDay = new Date();    
    }, 0);
  }
  this.noSelectedDate = false;
  const startDate = formattedDate || today; 

    this.firstDate = new Date(startDate);
    this.firstDate.setDate(startDate.getDate() + (this.currentWeekOffset * 7));

    this.lastDates = new Date(this.firstDate);
    this.lastDates.setDate(this.firstDate.getDate() + 6); 

    this.lastDate = new Date(this.firstDate);
    this.lastDate.setDate(this.firstDate.getDate() + 7);

    this.firstDate.setDate(this.firstDate.getDate() - 1); 
    console.log(this.firstDate,this.lastDate,'this.lastDate')
    var filterStartDate = this.firstDate.toISOString().slice(0, 10);
    var filterEndDate = this.lastDate.toISOString().slice(0, 10);
  
    if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
       this.selectEmployee = this.Current_user_ID;
    }
    
      this._calenderDto.EmpNo = this.selectEmployee;
      this.fetchDataStartTime = performance.now();
    if(this.Searchingfunc==true && this.user_Type == 0){
      this._calenderDto.User_Type=this.user_Type;
      this._calenderDto.startdate = filterStartDate;
      this._calenderDto.enddate = filterEndDate;
      this._calenderDto.SearchText= null;
    }else if(this.Searchingfunc==false && this.user_Type == 0){ 
      this._calenderDto.User_Type=this.user_Type;
      this._calenderDto.startdate = null;
      this._calenderDto.enddate = null;
      this._calenderDto.SearchText= this.SearchText;
    }else if(this.user_Type>0){
      this._calenderDto.User_Type=this.user_Type;
      this._calenderDto.startdate = null;
      this._calenderDto.enddate = null;
      this._calenderDto.SearchText= null;
    }

    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe((data) => { 
       
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;
        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        this.Scheduledjson = this.Scheduledjson.sort((a, b) => new Date(a.Schedule_date).getTime() - new Date(b.Schedule_date).getTime());
      
        this.loadingDMS = true;
  
    if(this.Searchingfunc==false){ 
      this.Calendarjson = this.Scheduledjson;
    }else{
      this.Calendarjson = this.Scheduledjson.map(d => ({
      ...d,
        Events: d.Events.filter(e => {
        const t = new Date(e.startTime);
        return t >= this.firstDate && t <= this.lastDate;
      })
    }))
    }


      this.firstDate.setDate(this.firstDate.getDate() + 1);
      
        this.filteredMeetingsArray = Object.values(
            this.Calendarjson.flatMap(group =>
              group.Events.flatMap(event => {
                const start = event.startTime.split('T');
                const end = event.endTime.split('T');
                const startDate = start[0];
                const endDate = end[0];
                
                if (startDate !== endDate) { 
                  const nextDate = new Date(startDate);
                  nextDate.setDate(nextDate.getDate() + 1);
                  const correctedEnd = nextDate.toISOString().split('T')[0];
                  return [
                    { date: startDate, events: [{ ...event, Task_Name: `${event.Task_Name} (1/2)` }] },
                    { date: correctedEnd, events: [{ ...event, Task_Name: `${event.Task_Name} (2/2)` }] }
                  ];
                }

                return [{ date: startDate, events: [event] }];
              })
            ).reduce((acc, { date, events }) => {
              (acc[date] ??= { date, events: [] }).events.push(...events);
              return acc;
            }, {})
          );
     

        this.filteredMeetingsArray.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    
        //is require to check it
        if(this.filteredMeetingsArray.some(data => new Date(data.date) < new Date(this.firstDate)) && this.Searchingfunc==true){
          this.filteredMeetingsArray.shift(); 
        }
        
        if (this.filteredMeetingsArray.length > 0 && this.Searchingfunc==true) {  
          const lastMeetingDate = new Date(this.filteredMeetingsArray[this.filteredMeetingsArray.length - 1].date);
          this.lastDates.setHours(0, 0, 0, 0);
          lastMeetingDate.setHours(0, 0, 0, 0);
          if (lastMeetingDate >  this.lastDates) {
            this.filteredMeetingsArray.pop();
          }
        }
    
      if(this.Searchingfunc == false){ 
        const todayFormatted = new Date().toISOString().split('T')[0];
        const upcoming = this.filteredMeetingsArray.filter(meeting => meeting.date >= todayFormatted);
        const past = this.filteredMeetingsArray.filter(meeting=> meeting.date < todayFormatted);
              past.sort((a, b)=>b.date.localeCompare(a.date))
        this.filteredMeetingsArray = [...(upcoming.length ? [{ text: 'UPCOMING' }, ...upcoming] : []),
                                      ...(past.length ? [{ text: 'PREVIOUS' }, ...past] : [])];
      }

      if (this.teamsCalendar === 2) {
        this.filteredMeetingsArray.forEach(day =>
          day.events = day.events.filter(e => !e.IsPrivate)
        );
      }

      this.pendingcount =  this.Scheduledjson[0].PendingCount;
      this.draftcount = this.Scheduledjson[0].DraftCount;
      this.totalbookmarkslist  = this.Scheduledjson[0].BookmarkCount;
 
      console.log(this.filteredMeetingsArray, 'filteredMeetingsArray'); 
     
     });    
      this.nextDateSched= new Date(this.firstDate);
      this.nextDateSched.setDate(this.nextDateSched.getDate() + 1);

       
}


filterMeetingsOnIconClick() {
  // Trigger search using the same method as input or Enter key
  const mockEvent = { key: 'Enter' } as KeyboardEvent;
  this.filterMeetings(mockEvent);
}




filterMeetings(event: KeyboardEvent) {
  const searchLower = this.searchMeetings?.toLowerCase().trim() || '';

  if ((event.key === 'Enter' || !searchLower)) {
    this.SearchText = searchLower
    // if (searchLower) {
      // this.Searchingjson = this.Scheduledjson
      //   .map(day => ({
      //     ...day,
      //     Events: day.Events.filter(ev =>
      //       ev.Task_Name?.toLowerCase().includes(searchLower)
      //     )
      //   }))
      //   .filter(day => day.Events.length > 0); // Keep only days with matched events
    // } else {
    //   this.Searchingjson = [];
    // }
    
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

    // document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    // document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    // document.getElementById("Descrip_Name12").style.display = "none";

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
    this.agendaInput=undefined;
    this.characterCount=null;
    this.agendacharacterCount=null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.projectsSelected = [];
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    // this.selectDay = null;
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

    this.draftid = 0;

    if(val==1)
    {  // Task   
      this.change_task();
      this.ScheduleType = "Task";
      this.GetProjectAndsubtashDrpforCalender();
      
    }
    else if(val==2)
    {  // Event
      this.change_event();
      this.ScheduleType = "Event";
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = null;
      this.GetProjectAndsubtashDrpforCalender();
      this.GetMemosByEmployeeId();
      
    }
    this.MasterCode=null; // whenever user switches task to event or viceversa remove all selected projects.
 }


 isSubmitting: boolean = false;


Insert_indraft() {

  if (this.isSubmitting) return;
  this.isSubmitting = true;

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

  this._calenderDto.Portfolio = this.Portfolio.toString();
  this._calenderDto.location = this.Location_Type;
  this._calenderDto.loc_status = this._onlinelink;
  this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password;
  this._calenderDto.Link_details=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';
  this._calenderDto.Recurrence = this.selectedrecuvalue ;
  this._calenderDto.Rec_values = _arraytext.toString();
  this._calenderDto.Rec_EndDate = this._EndDate;

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


  let _attachmentValue = 0;
  const frmData = new FormData();
  if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
    frmData.append("Attachment", "true");
    this._attachmentValue = 1;

    for (var i = 0; i < this._lstMultipleFiales.length; i++) {
      frmData.append("files", this._lstMultipleFiales[i].Files);
    }
    const xmlDoc = document.implementation.createDocument('', '', null);
      const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element

      // Iterate over the file groups
      this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
      console.log(`Processing group ${groupIndex}:`, fileGroup);

      // Normalize Files to an array
      const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);

      files.forEach((file, fileIndex) => {
      if (!file || !file.name || !file.type) {
        console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
        return;
      }

      console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);

      const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
      const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
      const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
      const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element

      // Populate <FileName> element
      nameElement.textContent = file.name;

      // Generate a random ID and sanitize the file name for CloudName
      const randomId = this.generateRandomId();
      const sanitizedFileName = this.sanitizeFileName(file.name);
      cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;

      // Populate <ContentType> element
      const contentType = this.getContentType(file.type);
      contentTypeElement.textContent = contentType;

      // Append child elements to the <Row>
      rowElement.appendChild(nameElement);
      rowElement.appendChild(cloudNameElement);
      rowElement.appendChild(contentTypeElement);

      // Append the <Row> to the root element
      parentElement.appendChild(rowElement);
      });
      });

      // Append the root <MultiDocument> element to the XML document
      xmlDoc.appendChild(parentElement);

      // Serialize the XML document to a string
      const serializer = new XMLSerializer();
      const xmlString = serializer.serializeToString(xmlDoc);

      // Append the XML string to FormData
      frmData.append("docs_multiple_xml", xmlString);

      // Log the XML string for debugging
      console.log("Generated XML:", xmlString);

        } 
        else {
          this._attachmentValue = 0;
          frmData.append("Attachment", "false");
        }
        
    frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
    frmData.append("CreatedBy", this.Current_user_ID.toString());
    frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');
    
    const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
    this._calenderDto.DraftAgendas=mtgAgendas;
     console.log(this._calenderDto,'Draft meeting')
  this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
    (data => {
         
 
    this.Attamentdraftid= data['draftid']
    frmData.append("draftid", this.Attamentdraftid);

    if (this._attachmentValue == 1) {
      // this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
        this.CalenderService.UploadCalendarAttachmenstCore(frmData).subscribe(
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
              var myJSON = JSON.stringify(event);
              this._azureMessage = (JSON.parse(myJSON).body).message;

              if(this._azureMessage=="1"){
                this.CalenderService._AzureUploadCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                  console.log(event1,"azure data");
                  var myJSON = JSON.stringify(event1);
                //  this._Message = (JSON.parse(myJSON).body);
      
                });
              }

              // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
              

              (<HTMLInputElement>document.getElementById("customFile")).value = "";
              this._lstMultipleFiales = [];
              // empty(this._lstMultipleFiales);
              // alert(this._lstMultipleFiales.length);
              setTimeout(() => {
                this.progress = 0;
              }, 2000);

              //69 (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
              //69 (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
              // document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
              //69 document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
          }
        }
      )
    }
      this.isSubmitting = false;
      if (data['message'] == '1') {
        this.closeschd();        
        this.notifyService.showSuccess("Draft saved", "Success");
      }
      if (data['message'] == '2') {
        this.closeschd();  
        this.notifyService.showSuccess("Draft updated", "Success");
      }
    });
    this.Getdraft_datalistmeeting();
    this.createEventTaskModal_dismiss();
}




  // customrecurrencemodal() {
  //   // document.getElementById('drop-overlay').classList.add("show");
  //   // document.getElementById('customrecurrence').classList.add("show");
  //   document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  //   document.getElementById("customrecurrence").style.display = "block";

  //   this.selectedrecuvalue1=this.selectedrecuvalue;
  //   this.dayArr1=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
  //   this.MonthArr1=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
  //   this._EndDate1=moment(this._EndDate);

  //   if(this.selectedrecuvalue1=='2')
  //     document.getElementById("weekly_121_new").style.display = "block";
  //   else if(this.selectedrecuvalue1=='3')
  //     document.getElementById("Monthly_121_new").style.display = "block";

  //   if(this.selectedrecuvalue1!='0')
  //     document.getElementById("div_endDate_new").style.display = "block";

  // }



/////////////////////////////////////////// Calendar meeting list End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Created On (Schedule event popup box) Start /////////////////////////////////////////////////////////

Meeing_Name:any;
Created_by:any;

GetClickEventJSON_Calender(arg,meetingClassNeme=undefined) {
 
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
      console.log(data, "EventScheduledjson"); 
      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      this.loading = false;
      var Schedule_date =this.EventScheduledjson[0].Schedule_date
      this.meetingRestriction(Schedule_date);
      this.AdminMeeting_Status = data['AdminMeeting_Status']; 
      this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
      this.propose_date=Schedule_date;
      console.log(this.EventScheduledjson, "Testing12");
   
      this.Meeing_Name = (this.EventScheduledjson[0]['Task_Name']);
      this.Created_by = this.EventScheduledjson[0].Created_by
      this.BookMarks = this.EventScheduledjson[0].IsBookMark;
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

    debugger
      //69 document.getElementById("deleteendit").style.display = "flex";
      if ((this.Schedule_type1 == 'Event' && (this.teamsCalendar == 1 || this.teamsCalendar == 0)) && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {

       document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':'flex';
       document.getElementById("deleteendit").style.display =this.Meeting_status==true || this.AdminMeeting_Status==1 || this.AdminMeeting_Status==2?'none':'flex';
       document.getElementById("main-foot").style.display = "none";
      
      }
      else if ((this.Schedule_type1 == 'Event' && (this.teamsCalendar == 1 || this.teamsCalendar == 0)) && (this.Meeting_status==false) && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {

       document.getElementById("hiddenedit").style.display = "none";
       document.getElementById("deleteendit").style.display = "none";
       document.getElementById("main-foot").style.display = "flex";

      }
      else if ((this.Schedule_type1 == 'Task' && (this.teamsCalendar == 1 || this.teamsCalendar == 0)) && (this.Project_dateScheduledjson >= this._StartDate)) {
        document.getElementById("hiddenedit").style.display = "flex";
        document.getElementById("deleteendit").style.display = "flex";
        document.getElementById("main-foot").style.display = "none";
  
      }
      else {
        document.getElementById("hiddenedit").style.display = "none";
        document.getElementById("deleteendit").style.display =(this.Meeting_status==true || this.AdminMeeting_Status==1 || this.teamsCalendar == 2)?'none':'flex';
        document.getElementById("main-foot").style.display = "none";
     
      }
      this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

      this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
      this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
      
      this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
      this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

      var eventStatus=  this.User_Scheduledjson.filter(e=>e.stringval==this.Current_user_ID);
       this.statusofMeeting =eventStatus.length?eventStatus[0].Status:undefined;

       debugger
      this.dmsIdjson = [];
      if (this.DMS_Scheduledjson.length > 0) {
        this.DMS_Scheduledjson.forEach(element => {
          var jsonData = {};
          var columnName = "MailId";
          jsonData[columnName] = element;
          this.dmsIdjson.push(jsonData);
        });
        this.dmsIdjson = JSON.stringify(this.dmsIdjson);
         console.log(this.dmsIdjson,"this.dmsIdjson");
        this._LinkService._GetMemosSubject(this.dmsIdjson).
          subscribe((data) => {
            this._MemosSubjectList = JSON.parse(data['JsonData']);
          });
      }
     
     });
}



copyLink() {
    const textarea = document.createElement('textarea');
    if(this.Link_Detail.includes('Meeting link:- ')){
      textarea.value = this.Link_Detail.split('Meeting link:- ')[1].split(',')[0];
    }else{
      textarea.value = this.Link_Detail;
    }
  
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
  const toMinutes = (t: string) => {
    let [time, period] = t.match(/(\d+:\d+)([AP]M)/).slice(1);
    let [h, m] = time.split(':').map(Number);
    return ((h % 12) + (period === 'PM' ? 12 : 0)) * 60 + m;
  };

  let duration = (toMinutes(end) - toMinutes(start) + 1440) % 1440;
  return `${Math.floor(duration / 60)}h : ${duration % 60}m`;
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

MemoId:any;

opneSmail(memoid) { 
 this.MemoId = []; 
 this.MemoId = [{ MailId: memoid.toString()}]

  this.MemoId = JSON.stringify(this.MemoId);
  this._LinkService._GetMemosSubject(this.MemoId).subscribe((data) => {
    if(data['JsonData'] != ''){
      const JsonsData = JSON.parse(data['JsonData']);            
      var Url= JsonsData[0].Url;
      window.open(Url);
    }
    
  });
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
        this.getEventsForWeeks(0);
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
        this.getEventsForWeeks(0);
        this.GetPending_Request();
        this.customEventModal_dismiss();
      });
    console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Meeting ended successfully.", "Success");
  }
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
    this.getEventsForWeeks(0);
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
    this.getEventsForWeeks(0);
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
    this.getEventsForWeeks(0);
    this.GetPending_Request();
  })
}



CopyMeetingandTask(value){

  if(value==2){
    Swal.fire({
      title: `Copy meeting`,
      text: `Are you sure you want to copy this meeting? It will be created as a new meeting with you as the organizer.`,
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.changeScheduleType(value);
        this.DublicateTaskandEvent();
      }
    });
  }else{
    this.changeScheduleType(value);
    this.DublicateTaskandEvent();
  }


}




DublicateTaskandEvent() {
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

     
      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";

      document.getElementById("createEventTaskModal").style.display = "block";
      document.getElementById("createEventTaskModal").classList.add("show");
      document.getElementById("createEventTaskModalBackdrop").style.display = "block";
      document.getElementById("createEventTaskModalBackdrop").classList.add("show"); 
      // document.getElementById("event-title").style.display = "none"; 
      // document.getElementById("task-title").style.display = "none"; 
      // document.getElementById("Edit-title").style.display = "none";
      // document.getElementById("Repeat-title").style.display = "none";
      // if(val ==1){
      //   // document.getElementById("Copy-title").style.display = "none";
      //   document.getElementById("Copy-task").style.display = "block";
      // }else{
      //   document.getElementById("Copy-task").style.display = "none";
      //   // document.getElementById("Copy-title").style.display = "block";
      // }
     
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
        // document.getElementById("Guest_Name").style.display = "none";
        // document.getElementById("Descrip_Name").style.display = "none";
        // document.getElementById("core_viw123").style.display = "flex";
        // document.getElementById("core_viw121").style.display = "none";
        // document.getElementById("core_viw222").style.display = "none";
        // document.getElementById("core_Dms").style.display = "none";   
        // document.getElementById("meeting-online-add").style.display = "none";

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
        this._meetingroom = true;

        this.Link_Details = this.EventScheduledjson[0]['Link_Details'];

        if(this.Link_Details != ''){
          if(!this.Link_Details.includes('<a href=')){
            var details = this.Link_Details.split(', ')
            this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
            this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
            this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
          }
          else if(this.Link_Details.includes('<a href=')){
            this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
            this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
            this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');
          
            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details ss69');
          }
         }


        this.Description_Type = (this.EventScheduledjson[0]['Description']);
        document.getElementById("subtaskid").style.display = "none";
        // document.getElementById("Guest_Name").style.display = "flex";
        // document.getElementById("Descrip_Name").style.display = "flex";
        // document.getElementById("core_viw121").style.display = "flex";
        // document.getElementById("core_viw123").style.display = "none";
        // document.getElementById("core_viw222").style.display = "flex";
        // document.getElementById("core_Dms").style.display = "flex";
        // document.getElementById("meeting-online-add").style.display = "flex";
        //69 document.getElementById("Location_Name").style.display =this._meetingroom==true?"flex":'none';

        // const TEsb = document.getElementById('TaskEvent-Sidebar')
        // TEsb.addEventListener('scroll', () => {
        //   this.autocompletes.forEach((ac) => {
        //     if (ac.panelOpen)
        //       ac.updatePosition();
        //   });
        // })

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
        // this.timingarryend = [];
        // this.Time_End = [];
        // this.Time_End = [...this.StartTimearr];
        // let _index = this.Time_End.indexOf(this.Startts);
        // if (_index + 1 === this.Time_End.length) {
        //   _index = -1;
        // }
        // this.timingarryend = this.Time_End.splice(_index + 1);
        // this.EndTimearr = this.timingarryend;
    // valid starttimearr and endtimearr setting end.
        this.Time_End = [];
        this.Time_End = [...this.AllEndtime,...this.AllEndtime];
        let _from = this.Time_End.indexOf(this.Startts);
        const eventmaxDuration=286;
        let _to=_from+eventmaxDuration;
        this.EndTimearr=this.Time_End.slice(_from,_to);
    
    });
  this.customEventModal_dismiss();
  this.customTaskModal_dismiss()

// else if (result.isDismissed) {
  // Skip all when Cancel is clicked
  // continue; // Skip this file
// }

}



ReshudingTaskandEvent() { debugger
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
      this.privateMeeting = this.EventScheduledjson[0]['IsPrivate'];
  

      if(this.Link_Details != ''){
        if(!this.Link_Details.includes('<a href=')){
          var details = this.Link_Details.split(', ')
          this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
          this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
          this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
          console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
        }
        else if(this.Link_Details.includes('<a href=')){
          this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
          this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
          this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');
        
          console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details 69');
        }
       }




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
      // document.getElementById("event-title").style.display = "none"; 
      // document.getElementById("task-title").style.display = "none"; 
      // document.getElementById("Copy-title").style.display = "none";
      // document.getElementById("Repeat-title").style.display = "none";
      // document.getElementById("Edit-title").style.display = "block";
    

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



        // this code for chnage detection start
        this.disablePreviousDate = null;
        setTimeout(()=>{
          this.disablePreviousDate = new Date();
        },0);
        // this code for chnage detection End


      if ((this.EventScheduledjson[0]['Onlinelink']) == true) {
        // document.getElementById("Descrip_Name12").style.display = "flex";
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
       
       
         // old code start 
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
         // old code End 

          // New code start 
          const dayShort = new Date(this._StartDate).toLocaleDateString('en-US', { weekday: 'short' });
          if(ret1 != dayShort){
          this.RecurrValue =true;
          }  
          // New code End 

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


        
           // New code Monthly start 
           const day = new Date(this._StartDate).getDate().toString();  
            if(ret1 != day){
              this.MonthArr.forEach(item => item.checked = false);
              let d2=new Date(this._StartDate);
              const index2=d2.getDate();
              this.MonthArr[index2-1].checked=true;
              this.RecurrValueMonthly =true;
            } else if (ret1 == day){
              this.MonthArr.forEach(item => item.checked = false);
              let d2=new Date(this._StartDate);
              const index2=d2.getDate();
              this.MonthArr[index2-1].checked=true;
              this.RecurrValueMonthly =true;

            } 
           // New code Monthly End 




        this.MonthArr.forEach((item:any)=>{
          if(item.checked){
             const d_no=Number.parseInt(item.value);
             this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
          }
        });

      }

      this.previousValue=this.selectedrecuvalue;

      if (this.ScheduleType == 'Task') {
        this.EventScheduledjson[0]['Ed_Time']
        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
        this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
        this.MasterCode = (this.MasterCode[0].stringval);

        document.getElementById("subtaskid").style.display = "flex";
        // document.getElementById("Guest_Name").style.display = "none";
        //69 document.getElementById("Location_Name").style.display = "none";
        // document.getElementById("Descrip_Name").style.display = "none";
        // document.getElementById("core_viw123").style.display = "flex";
        // document.getElementById("core_viw121").style.display = "none";
        // document.getElementById("core_viw222").style.display = "none";
        // document.getElementById("core_Dms").style.display = "none";
        // document.getElementById("meeting-online-add").style.display = "none";

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
        this._meetingroom = true;
        this.Description_Type = (this.EventScheduledjson[0]['Description']);
        //  document.getElementById("subtaskid").style.display = "none";
       
      }
      this.updateCharacterCount();
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
        // this.timingarryend = [];
        // this.Time_End = [];
        // this.Time_End = [...this.StartTimearr];
        // let _index = this.Time_End.indexOf(this.Startts);
        // if (_index + 1 === this.Time_End.length) {
        //   _index = -1;
        // }
        // this.timingarryend = this.Time_End.splice(_index + 1);
        // this.EndTimearr = this.timingarryend;
        // valid starttimearr and endtimearr setting end.
        this.Time_End = [];
        this.Time_End = [...this.AllEndtime,...this.AllEndtime];
        let _from = this.Time_End.indexOf(this.Startts);
        const eventmaxDuration=286;
        let _to=_from+eventmaxDuration;
        this.EndTimearr=this.Time_End.slice(_from,_to);



    });
   this.customEventModal_dismiss();
   this.customTaskModal_dismiss();
}


switChRecurrenceValue:boolean=false;
previousValue:any;
RecurrValue:boolean=false;
RecurrValueMonthly:boolean=false;



  OnSubmitReSchedule(type: number) {

    if(this.Link_Details){
      this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
      }


    if (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ) &&
      this.Startts &&
      this.Endtms && this.isValidURL &&
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

      // new code start
      if(this.previousValue != this.selectedrecuvalue){
        this.AllDatesSDandED;
        this.switChRecurrenceValue=true;
        
      }else{
        this.AllDatesSDandED = [];
        this.switChRecurrenceValue=false;
      }     
      // new code End

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

        if(this._PopupConfirmedValue == 2 || this.switChRecurrenceValue == true){
        for (let index = 0; index < this.dayArr.length; index++) {
          if (this.dayArr[index].checked) { 
            const day = this.dayArr[index].value;
            _arraytext.push(day);
            var newArray = this.AllDatesSDandED.filter(obj => obj.Day == day);
            // old code start 
            this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()); 
            // old code end
             
          //   //new code start
            if(this.RecurrValue==true){
              const matchingDate = this.AllDatesSDandED.find(item => item.Date === this._StartDate);
              if(matchingDate != undefined){
                newArray.push(matchingDate);
             }
             this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());                              
           }else{
              this.daysSelectedII = this.daysSelectedII.concat(newArray);
            }
          // //new code end          
          }
        }}
      

         //   //new code start
        if(this._PopupConfirmedValue == 1 &&  this.switChRecurrenceValue == false){
          var startDateForWeekly = moment(this._StartDate).format('YYYY-MM-DD');
          this.daysSelectedII = this.AllDatesSDandED.filter(item => item.Date === startDateForWeekly);

         }
        // //new code end  
        if (this.daysSelectedII.length == 0) {
          alert('please select valid day');
        }
      }
      else if (this.selectedrecuvalue == "3") {
 
      
        if (this.MonthArr.filter(x => x.checked == true).length == 0) {
          alert('Please select day');
          return false;
        }

        if(this._PopupConfirmedValue == 2 || this.switChRecurrenceValue == true){
        for (let index = 0; index < this.MonthArr.length; index++) {
          if (this.MonthArr[index].checked == true) {  
            const day = this.MonthArr[index].value;
            _arraytext.push(day);
            var newArray = this.AllDatesSDandED.filter(txt => txt.DayNum == day);

            // this.daysSelectedII = this.daysSelectedII.concat(newArray);
            this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
          }
        }
            // New code Monthly start 
            if(this.RecurrValueMonthly==true){
              const matchingMonthlyDate = this.AllDatesSDandED.find(item => item.Date === this._StartDate);
              if(matchingMonthlyDate != undefined){
                newArray.push(matchingMonthlyDate);
             }
               this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());                              
             }
          //new code Monthly end
         }
          // New code Monthly start 
        if(this._PopupConfirmedValue == 1 &&  this.switChRecurrenceValue == false){
          var startDateForMonthly =moment(this._StartDate).format('YYYY-MM-DD');
          this.daysSelectedII = this.AllDatesSDandED.filter(item => item.Date === startDateForMonthly);
        }   
       //new code Monthly end
     
      }
   
      this.daysSelectedII = this.daysSelectedII.filter(
        (value, index, self) => index === self.findIndex(obj => JSON.stringify(obj) === JSON.stringify(value))
      );

      finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

      if (finalarray.length > 0) {
        finalarray.forEach(element => {
          this._StartDate = moment(this._StartDate).format("YYYY-MM-DD").toString();
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
   

          var vUser_Name = "User_Name";
          element[vUser_Name] = this.ngEmployeeDropdown == undefined ? "" : this.ngEmployeeDropdown.toString();

          var vLocation_Type = "Location_Type";
          element[vLocation_Type] = this._meetingroom==true?(this.Location_Type == undefined ? "" : this.Location_Type):'';

          var vLocation_fulladd = "FullAddress_loc";
          element[vLocation_fulladd] = this._meetingroom==true?(this.Locationfulladd == undefined ? "" : this.Locationfulladd):'';

          var vLocation_url = "Addressurl";
          element[vLocation_url] = this._meetingroom==true?(this.Addressurl==undefined?'':this.Addressurl):'';

          if(this.Link_Details!=null){      
            this.Link_Details = this.Link_Details.trim() == ''?null:this.Link_Details;
          }
          if(this.Meeting_Id!=null){ 
            this.Meeting_Id = this.Meeting_Id.trim()  == ''?null:this.Meeting_Id;
          }
          if(this.Meeting_password!=null){  
            this.Meeting_password = this.Meeting_password.trim() == ''?null:this.Meeting_password;
          }
          if(this.Link_Details==null && this.Meeting_Id==null && this.Meeting_password==null){
            this._onlinelink =false
          }
          
          var vOnlinelink = "Onlinelink";
          element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;
          if(this.rapeatLink_Details==true){
          this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password
          this.rapeatLink_Details=false;
        }

          var vLink_Details = "Link_Details";
          element[vLink_Details]=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';
      
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

        
        const frmData = new FormData();  

        if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
          frmData.append("Attachment", "true");
          this._attachmentValue = 1;
    
          for (var i = 0; i < this._lstMultipleFiales.length; i++) {
            frmData.append("files", this._lstMultipleFiales[i].Files);
          }
        const xmlDoc = document.implementation.createDocument('', '', null);
        const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element
        
        // Iterate over the file groups
        this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
        console.log(`Processing group ${groupIndex}:`, fileGroup);
        
        // Normalize Files to an array
        const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);
        
        files.forEach((file, fileIndex) => {
          if (!file || !file.name || !file.type) {
            console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
            return;
          }
    
          console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);
        
          const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
          const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
          const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
          const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element
        
          // Populate <FileName> element
          nameElement.textContent = file.name;
        
          // Generate a random ID and sanitize the file name for CloudName
          const randomId = this.generateRandomId();
          const sanitizedFileName = this.sanitizeFileName(file.name);
          cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;
    
            // Populate <ContentType> element
            const contentType = this.getContentType(file.type);
            contentTypeElement.textContent = contentType;
          
            // Append child elements to the <Row>
            rowElement.appendChild(nameElement);
            rowElement.appendChild(cloudNameElement);
            rowElement.appendChild(contentTypeElement);
          
            // Append the <Row> to the root element
            parentElement.appendChild(rowElement);
          });
          });
    
          // Append the root <MultiDocument> element to the XML document
          xmlDoc.appendChild(parentElement);
          
          // Serialize the XML document to a string
          const serializer = new XMLSerializer();
          const xmlString = serializer.serializeToString(xmlDoc);
          
          // Append the XML string to FormData
          frmData.append("docs_multiple_xml", xmlString);
          
          // Log the XML string for debugging
          console.log("Generated XML:", xmlString);
          
          } 
          else {
            this._attachmentValue = 0;
            frmData.append("Attachment", "false");
          }

 
          frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
          frmData.append("CreatedBy", this.Current_user_ID.toString());
          frmData.append("Schedule_ID", this._calenderDto.Schedule_ID.toString());
          frmData.append("flag_id", this._calenderDto.flagid.toString());
          frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');
          
          this._calenderDto.attachment =this._attachmentValue.toString();

 
        console.log(this._calenderDto,'new updaet data') 
        this.CalenderService.NewUpdateCalender(this._calenderDto).subscribe
          (data => {
    
            // alert(data['Schedule_date'])
            this.Attamentdraftid= data['draftid']
           frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);

            frmData.append("Schedule_date", data['Schedule_date'].toString());
            if (this._attachmentValue == 1) {
            
                this.CalenderService.EditUploadCalendarAttachmenstCore(frmData).subscribe(
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
                      var myJSON = JSON.stringify(event);
                      this._azureMessage = (JSON.parse(myJSON).body).message;
    
                      if(this._azureMessage=="1"){
                        this.CalenderService._AzureUpdateCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                          console.log(event1,"azure data");
                          var myJSON = JSON.stringify(event1);
                       
              
                        });
                      }
               
                      // document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    
                  }
                }
              )
            }
        
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
              this.getEventsForWeeks(0);


            this.GetPending_Request();
            
            this.Title_Name = null;
            this.RemovedAttach = [];
            this.ngEmployeeDropdown = null;
            this.Description_Type = null;
            this.agendaInput=undefined;
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
            this.Meeting_Id = null;
            this.Meeting_password = null;
            this._onlinelink = false;
            this.TM_DisplayName = null;
            this._attachmentValue=0;
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



// penhide() {
//   //69 document.getElementById("pendlist").classList.remove("show");
//   document.getElementById("cal-main").classList.remove("col-lg-9");
//   document.getElementById("cal-main").classList.add("col-lg-12");
// }


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
      ((data) => { debugger
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      });
    this._calenderDto.Schedule_ID = this.EventScheduledjson[0].Schedule_ID;
    this._calenderDto.EventNumber = this.EventScheduledjson[0].EventNumber; 
    this.CalenderService.NewGetrequeat_Accpect(this._calenderDto).subscribe
      ((data) => {
        this.getEventsForWeeks(0);
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
        this.getEventsForWeeks(0);
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
        this.getEventsForWeeks(0);
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
        this.getEventsForWeeks(0);
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
      this.getEventsForWeeks(0);
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



// onCustomBtnClicked(){
// $('#propse11').removeClass('show');
//   this.repeatEvent();
// }


repeatDate:any;






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
      this.repeatDate = this.EventScheduledjson[0]['Schedule_date'];
      this.repeatDate = this.repeatDate.split('T')[0];
      this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
      this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
      this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
      this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
      this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
      this.Addressurl = this.EventScheduledjson[0]['Addressurl'];             // url
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];   // file attachment



         if(this.repeatDate != this.today){
            this._StartDate=null;
            this.disablePreviousDate = null;
            this._SEndDate = null;
            this.minDate = null;
            this.disablePreviousTodayDate = null; 
            setTimeout(()=>{ 
              const TodayDate  = new Date();
              this._StartDate=TodayDate;
              this.disablePreviousDate = TodayDate;
              this._SEndDate = TodayDate;
              this.disablePreviousTodayDate= TodayDate;
        
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
            this.Time_End = [];
            this.Time_End = [...this.AllEndtime,...this.AllEndtime];
            let _from = this.Time_End.indexOf(this.Startts);
            const eventmaxDuration=286;
            let _to=_from+eventmaxDuration;
            this.EndTimearr=this.Time_End.slice(_from,_to);


            },0);
          }else{ 
            const nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + 1);
            this._StartDate=null;
            this.disablePreviousDate = null;
            this._SEndDate = null;
            this.minDate = null;
            this.disablePreviousTodayDate = null; 

            setTimeout(()=>{
              this._StartDate=nextDay;
              this.disablePreviousDate =nextDay;
              this._SEndDate = nextDay
            
              this.disablePreviousTodayDate= nextDay

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
            this.Time_End = [];
            this.Time_End = [...this.AllEndtime,...this.AllEndtime];
            let _from = this.Time_End.indexOf(this.Startts);
            const eventmaxDuration=286;
            let _to=_from+eventmaxDuration;
            this.EndTimearr=this.Time_End.slice(_from,_to);
            },0);
          }

        document.getElementById("div_recurrence").style.display = "block";
        document.getElementById("Monthly_121_new").style.display = "none";
        document.getElementById("weekly_121_new").style.display = "none";
        // document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
        document.getElementById("createEventTaskModal").style.display = "block";
        document.getElementById("createEventTaskModal").classList.add("show");
        document.getElementById("createEventTaskModalBackdrop").style.display = "block";
        document.getElementById("createEventTaskModalBackdrop").classList.add("show"); 
        document.getElementById("nav-event").style.display = "block";
        document.getElementById("nav-task").style.display = "none";
        document.getElementById("create-event-div").style.display = "block";
        document.getElementById("create-task-div").style.display = "none";

      


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
        this.Link_Details = this.EventScheduledjson[0]['Link_Details'];

        if(this.Link_Details != ''){
          if(!this.Link_Details.includes('<a href=')){
            var details = this.Link_Details.split(', ')
            this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
            this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
            this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
          }
          else if(this.Link_Details.includes('<a href=')){
            this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
            this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
            this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');
          
            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details 69');
          }
         }
        this.Description_Type = (this.EventScheduledjson[0]['Description']);
      

     
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
      this.getEventsForWeeks(0);
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





 submitEventToRepeat(){  debugger

  const input_date=moment(this.repeatStartDate,'YYYY-MM-DD');
  const current_date=moment(moment().format('YYYY-MM-DD'),'YYYY-MM-DD');
  if(input_date<current_date){
     this.earlyDate=true;
      return;
  }

   if(this.privateMeeting == true){
          this.MasterCode = null;
          this.ngEmployeeDropdown = null;
          this.Portfolio = null;
          this.SelectDms = null;
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
  

  // new code start 69

  if(this._StartDate == this.disablePreviousTodayDate){
    let startDate = new Date(this._StartDate);
    this.AllDatesSDandED = [{
        Date: startDate.toISOString().split('T')[0],  // Get YYYY-MM-DD format
        Day: startDate.toLocaleString('en-US', { weekday: 'short' }), // Get short day name
        DayNum: startDate.getDate().toString(),
        EndTime: this.Endtms,
        IsActive: 1,
        StartTime : this.Startts
       }];
   
    this.daysSelectedII = this.AllDatesSDandED ;
    this._SEndDate =this._StartDate.toISOString().split('T')[0];
    this._StartDate = new Date(new Date(this._StartDate).setHours(0, 0, 0, 0));
   
   }

    // new code end 69



    finalarray = this.daysSelectedII.filter(x => x.IsActive == true);
    if (finalarray.length > 0) {
      finalarray.forEach(element => { 
        this.repeatStartDate = moment(this.repeatStartDate).format("YYYY-MM-DD").toString();
        const date1: Date = new Date(this.repeatStartDate);
        const date2: Date = new Date(this._SEndDate);

        date1.setHours(0,0,0,0);
        date2.setHours(0,0,0,0);
  
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

         var vPrivate_Meeting = "Private_Meeting";
         element[vPrivate_Meeting] =  this.privateMeeting;
  
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
          this.getEventsForWeeks(0);
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



  deleteRecurringTask(){
    this.deleteTask=true;
  }

  deleteRecurringEvent(){
    this.deleteTask=false;
  }


  uncomplete_task() {

    this.CalenderService.NewTaskUncomplete(this.Schedule_ID).subscribe
      (data => {
        this.getEventsForWeeks(0);
        this.GetPending_Request();
        this.customTaskModal_dismiss();
      });
    // console.log(this._calenderDto, "dto")
    this.notifyService.showSuccess("Task Uncomplete.", "Success");
  }


selectedPrivate:any;
privateMeeting:any = false;


togglePrivateMeeting() { 
  this.privateMeeting = !this.privateMeeting;
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

/////////////////////////////////////////// Created On (Schedule event popup box) End /////////////////////////////////////////////////////////



getMeetingApprovals(){

  this.approvalObj.Schedule_Id='0';
  this.approvalObj.Emp_no =this.Current_user_ID;

 this.approvalservice.NewGetMeetingApprovals(this.approvalObj).subscribe((data) => {

   var multiapproval_json=data[0].multiapproval_json;
   this.multiapproval_json=JSON.parse(multiapproval_json);
   this.totalCountOfList=this.multiapproval_json.length;
   if(this.totalCountOfList==0){
  
    //  $("#requestlist").removeClass("show");
 
    //  $("#cal-main").removeClass("col-lg-9");
  
    //  $("#cal-main").addClass("col-lg-12");

   }
    
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




onDraft_Delete(draftid) {

  Swal.fire({
    title: `Delete ${this.Schedule_type1}`,
    text: `Are you sure you want to delete this ${this.Schedule_type1}? This action cannot be undone.`,
    showConfirmButton: true,
    showCancelButton: true
  }).then(choice => {
    if (choice.isConfirmed) { 
      this.delete_draft(draftid);
    }
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




LoadDocument(pcode: string, iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

  let FileUrl: string;
  
  FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";
  if (iscloud == false) {
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";
    // if (this.projectInfo.AuthorityEmpNo == this.projectInfo.ResponsibleEmpNo) {
    //   // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
    //   FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
    // }
    // else if (this.projectInfo.AuthorityEmpNo != this.projectInfo.ResponsibleEmpNo) {
    //   FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
    // }
    let name = "ArchiveView/" + this.Schedule_ID;
    let meetingName =  this.Meeing_Name;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(FileUrl);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type +"&"+"Schedule_ID="+this.Schedule_ID +"&"+ "Title_Name=" + meetingName;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }
  else if (iscloud == true) {
    let name = "ArchiveView/" + this.Schedule_ID;
    let meetingName =  this.Meeing_Name;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(url1);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type +"&"+"Schedule_ID="+this.Schedule_ID +"&"+ "Title_Name=" + meetingName;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }
}









/////////////////////////////////////////// pending meeting list start ///////////////////////////////////////////////////////
GetPending_Request() {
  this._calenderDto.Emp_No = this.Current_user_ID;

  this.CalenderService.NewGetPending_request(this._calenderDto).subscribe
    ((data) => { console.log(data,'wefwwefwefwefwe')
      this.Pending_request = data as [];
      this.filterPending('date');
     
    });
}





previous_filter() {
  document.getElementById("dropd").classList.toggle("show");
}




filterPending(type: 'date' | 'meeting'): void {
  this.Pending_request.sort((a, b) => {
    if (type === 'date') {
      this.activePendingMeeting ='date';
      return new Date(b.Schedule_date).getTime() - new Date(a.Schedule_date).getTime();
      
    }
    this.activePendingMeeting ='meeting';
    return a.Task_Name.trim().localeCompare(b.Task_Name.trim());
   
  });
}




  GetClickEventPending_Calenders(id) {

    this.Schedule_ID = id;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
      
        
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        console.log(this.EventScheduledjson, "Pending list popup box Testing ");
        this.BookMarks = this.EventScheduledjson[0].IsBookMark;
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;

        if(this.Schedule_type1 == 'Event'){
          document.getElementById("customEventModal").style.display = "block";
          document.getElementById("customEventModal").classList.add("show");
          document.getElementById("customEventModalBackdrop").style.display = "block";
          document.getElementById("customEventModalBackdrop").classList.add("show");
        }else if(this.Schedule_type1 == 'Task'){
          document.getElementById("customTaskModal").style.display = "block";
          document.getElementById("customTaskModal").classList.add("show");
          document.getElementById("customTaskModalBackdrop").style.display = "block";
          document.getElementById("customTaskModalBackdrop").classList.add("show");
        }
       

        this.Status1 = this.EventScheduledjson[0].Status;
        this.Proposedate = this.EventScheduledjson[0].Schedule_date;
        this.PropStart = this.EventScheduledjson[0].St_Time;
        this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
        this.pro_date = this.EventScheduledjson[0].Purposedate;
        this.Link_Detail = this.EventScheduledjson[0].Link_Details;
        this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
        this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
        this.pro_enddate = this.EventScheduledjson[0].SEndDate;
        this.creation_date = this.EventScheduledjson[0].Created_date;
        this.pending_status = this.EventScheduledjson[0].Pending_meeting;
        this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount']; 
        this.Startts=this.EventScheduledjson[0].St_Time;
        this.Endtms=this.EventScheduledjson[0].Ed_Time;
        this.repeatStartts=this.Startts;
        this.repeatEndtms=this.Endtms;

        // console.log(this.EventScheduledjson, "Testing12");

        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {
          document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':"flex";
          document.getElementById("deleteendit").style.display = this.Meeting_status==true?'none':'flex';
          document.getElementById("main-foot").style.display = "none";
     
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = this.Meeting_status==true?'none':'flex';
          document.getElementById("main-foot").style.display = "flex";
      

        }
        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("deleteendit").style.display = this.Meeting_status==true?'none':'flex';
          document.getElementById("main-foot").style.display = "none";
        
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display =this.Meeting_status==true?'none':'flex';
          document.getElementById("main-foot").style.display = "flex";
   
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        console.log(this.Project_NameScheduledjson,'this.Project_NameScheduledjson')

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
              console.log("Subject Name 3------------>", this._MemosSubjectList);
            });
        }
      });
  }

/////////////////////////////////////////// pending meeting list end /////////////////////////////////////////////////////////



/////////////////////////////////////////// Draft meeting list Start /////////////////////////////////////////////////////////

draft_filter() {
  document.getElementById("dropds").classList.toggle("show");
}


filterDraft(type : 'date'|'meeting'):void{
  this.draftdata_meet.sort((a,b)=>{
    if(type ==='date'){
      this.activeDraftMeeting ='date';
      return new Date(b.Draft_date).getTime() - new Date(a.Draft_date).getTime();
    }
    this.activeDraftMeeting ='meeting';
    return a.Task_name.trim().localeCompare(b.Task_name.trim());
  })
}



  darft_click(Sno, val, attachments) {
    this.draftid = Sno;

    this.Task_type(val);
   
   
    this.draft_arry = this.draftdata_meet.filter(x => x.Sno == Sno);
    this.Title_Name = this.draft_arry[0]["Task_name"]
    console.log(this.draft_arry[0], '6969')
    this. GetProjectAndsubtashDrpforCalender();

    this.allAgendas = JSON.parse(this.draft_arry[0]['Agendas']);
    this.Attachment12_ary= attachments;
    this.MasterCode = [];
    this.projectsSelected=[];
    this.arr = JSON.parse(this.draft_arry[0]['Project_code']);
    this.arr.forEach(element => {
      this.MasterCode.push(parseInt(element.stringval));
    });


    this.Link_Details= this.draft_arry[0].Link_details;
    if(this.Link_Details != '' && this.Link_Details != undefined ){
      if(!this.Link_Details.includes('<a href=')){
        var details = this.Link_Details.split(', ')
        this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
        this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
        this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
        console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
      }
      else if(this.Link_Details.includes('<a href=')){
        this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
        this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
        this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');
        console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details 69');
      }
     }
    

    this.Portfolio = [];
    this.Portfolio1 = [];
    this.arr1 = JSON.parse(this.draft_arry[0]['Portfolio_id']);
    this.arr1.forEach(element => {
      this.Portfolio.push(element.numberval);
    });
    //  this.Portfolio=this.draft_arry[0]["portfolio_id"]
    this.SelectDms = [];
    this.SelectDms1 = [];
 
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
   
    this.selectedrecuvalue= this.draft_arry[0].Recurrence;
    this._EndDate = this.draft_arry[0].Rec_EndDate;

    if (this.selectedrecuvalue=='2') {

      this._labelName = "Schedule Date";
      // document.getElementById("div_endDate").style.display = "none";
      document.getElementById("div_endDate_new").style.display = "block";
      // document.getElementById("Recurrence_hide").style.display = "block";
      document.getElementById("weekly_121_new").style.display = "block";
      this.selectedrecuvalue = '2';
      let Recc = [];
      var ret1 = this.draft_arry[0].Rec_values;
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
    else if (this.selectedrecuvalue=='3') {
      document.getElementById("Recurrence_hide").style.display = "block";
      document.getElementById("div_endDate_new").style.display = "block";
      // document.getElementById("div_endDate").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "block";
      this._labelName = "Schedule Date";
      this.selectedrecuvalue = '3';
      let Recc = [];
      var ret1 = this.draft_arry[0].Rec_values;
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
  
   // setTimeout(() => {
    this.projectsSelected = this.ProjectListArray.filter(project =>
      this.arr.some(item => item.stringval === project.Project_Code)
     );
  // }, 2000);
   
    var start = moment(this.minDate);
    var end = moment(this._EndDate);
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
  }


prevUpcomToday = new Date();


  disableRepeatMeetingDate(){

    if (new Date(this.prevUpcomToday).toDateString() === new Date(this._StartDate).toDateString()) {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);

      this._StartDate = null;
      this.repeatStartDate = null;
      this._SEndDate = null;

      this.disablePreviousTodayDate = null;
      
      // Let Angular update bindings first
      setTimeout(() => {
        this.disablePreviousTodayDate = nextDay;
        this._StartDate = nextDay;
        this.repeatStartDate = nextDay;
        this._SEndDate = nextDay;
      });
      
    } else {
      this._StartDate = null;
      this.repeatStartDate = null;
      this._SEndDate = null;
      this.disablePreviousTodayDate = null;

      setTimeout(() => {
        const newDate = new Date(this.prevUpcomToday);
        this.disablePreviousTodayDate = newDate;
        this._StartDate = newDate;
        this.repeatStartDate = newDate;
        this._SEndDate = newDate;
      });
    }

  }




  noSelectedDate : boolean = false;
  newSelectedDate(){ 
    this.noSelectedDate=true
    if(this.dayMeetingSection == 'Schedule'){
      this.getEventsForWeeks(0);
    }else if (this.dayMeetingSection == 'Day'){
      this.dayScheduleJson(0);
    }else if(this.dayMeetingSection == 'Weekly'){
      this.weeklyScheduleJson(0);
    }else if(this.dayMeetingSection == 'Monthly'){
      this.monthlyScheduleJson(0);
    }
    
  }
/////////////////////////////////////////// Draft meeting list End /////////////////////////////////////////////////////////


/////////////////////////////////////////// Bookmarks meeting list start /////////////////////////////////////////////////////////

BookMarks:boolean;

MeetingBookmark(flagid:any) {
  if (this.isSubmitting) return;
  this.isSubmitting = true;
 
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  this._calenderDto.flagid = flagid;
  
  this.CalenderService.NewUpdateMeetingBookmark(this._calenderDto).subscribe
    ((data) => {
      if(data['message'] == '1'){
      
        this._calenderDto.Schedule_ID=this.Schedule_ID;

        this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {    
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
          this.BookMarks = this.EventScheduledjson[0].IsBookMark;
          if(this.BookMarks){
            this.notifyService.showSuccess("Added In bookmark Successfully", "Success");          
          }else{
            this.notifyService.showSuccess("Bookmark deleted", "Success");
          }
          this.isSubmitting = false;
          this.BookmarkMeetingsList();
        })  
      }   
    });
}





SearchOfBookmarkItem:any;
meetingbookmarks:any;
totalbookmarkslist:any;

BookmarkMeetingsList() {

  this._calenderDto.Emp_No = this.Current_user_ID;

  this.CalenderService.GetBookmarkMeetingsList(this._calenderDto).subscribe
    ((data) => {

          this.meetingbookmarks = JSON.parse(data['meetingbookmarks']);
          console.log(this.meetingbookmarks,'this.meetingbookmarks')
         
  })
}




Bookmark_Delete(Scheduleid:any) {
  Swal.fire({
    title: `Delete bookmark`,
    text: `Are you sure you want to delete this bookmark? This action cannot be undone.`,
    showConfirmButton: true,
    showCancelButton: true
  }).then(choice => {
    if (choice.isConfirmed) { 
      this.Schedule_ID=Scheduleid
      this.MeetingBookmark(2);      
    }
  });
}

/////////////////////////////////////////// Bookmarks meeting list end /////////////////////////////////////////////////////////


/////////////////////////////////////////// Timeline start /////////////////////////////////////////////////////////




daySummaryReport:any;
dueTodayTasksCount:{taskType:string,count:number}[]=[];
reportCount:any;
PendingTasks:any;

getDayReportSummary(){
  this.service.NewGetEmployeePerformance(this.Current_user_ID).subscribe((res:any)=>{

      if(res&&res.EmployeeReport){
             this.daySummaryReport=JSON.parse(res.EmployeeReport)[0];
            this.dueTodayTasksCount=[];
            ['ActionsDueToday','ProjectsDueToday','StandardDueToday'].forEach((dkey)=>{
              if(this.daySummaryReport[dkey]>0){
                    const ob={ taskType:dkey, count:this.daySummaryReport[dkey] };
                    this.dueTodayTasksCount.push(ob);
              }
            });
      }
      this.reportCount = ["NewProjectRejected", "AssignedTasksDue", "ActionsDelayed", "ProjectsDelayed", "StandardDelayed"]
      .filter(key => this.daySummaryReport[key] > 0).length;


      if(this.daySummaryReport['PendingTasks']){
       this.PendingTasks = JSON.parse(this.daySummaryReport['PendingTasks']);
      console.log("daySummaryReport:",this.PendingTasks);
      }

      // if(this.reportCount){
      //   this.showLoader=true;
      //   setTimeout(()=>{ this.showLoader=false; },5000)
      // }      
      if(this.reportCount){
         this.notificationalertModal() 
       }     
  })
    
}



viewActions(type:'COMPLETED'|'DUE'|'DELAYED'){
  if(type=='DELAYED')
  {
    let myurl = document.baseURI+`/ViewProjects/DelayProjects?section=Actions&filterbyemp=${this.Current_user_ID}&filterbystatus=Delay`;
    let myWindow = window.open(myurl,'_blank');
    myWindow?.focus();
  }
}


viewProjects(type:'COMPLETED'|'DUE'|'DELAYED'){
  if(type=='DELAYED')
  {
    let myurl = document.baseURI+`/ViewProjects/DelayProjects?section=Projects&filterbyemp=${this.Current_user_ID}&filterbystatus=Delay`;
    let myWindow = window.open(myurl,'_blank');
    myWindow?.focus();
  }
}



viewStandardTasks(type:'COMPLETED'|'DELAYED'){
  if(type=='DELAYED')
  {

   let myurl = document.baseURI+'/backend/ProjectsSummary';
   let myWindow = window.open(myurl,'_blank');
   const obj={
     EmpNo:this.Current_user_ID,
     ProjectType:'003',
     Status:'InProcess',
   };
   myWindow?.sessionStorage.setItem('filterprjsby',JSON.stringify(obj));
   myWindow?.focus();

  }
}



viewTasks(){
  let myurl = document.baseURI+'/backend/createproject?AssignedProjectId=none';
  let myWindow = window.open(myurl,'_blank');
  myWindow?.focus();
}


page_Name: string = "ViewProjects";
Rejected_Click() {

  let Mode: string = "Rejected";
  var url = document.baseURI + this.page_Name;
  var myurl = `${url}/${Mode}`;
  var myWindow = window.open(myurl);
  myWindow.focus();

}
/////////////////////////////////////////// Timeline end /////////////////////////////////////////////////////////

/////////////////////////////////////////// Day section Sart /////////////////////////////////////////////////////////

dayEventsLists: any []=[];
dayMappedList:any [] =[];
hoursList: string[] = [
  "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM",
  "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"
];

timeLineVisible : boolean =false;
timeLineInterval:any;
openBoxSelectedDate:any;

dayScheduleJson(dayFromToday: number){

        this.selectDay = dayFromToday === 3 ? moment() : moment(this.selectDay).add(dayFromToday, 'days');
        const selectedDate = moment(this.selectDay).format('YYYY-MM-DD');
        this.openBoxSelectedDate = selectedDate;
       
        if (selectedDate === this.today) {
          this.timeLineVisible= true;
          this.updateTimeLine();
          this.timeLineInterval = setInterval(() => this.updateTimeLine(), 60000);
        }else{
          this.timeLineVisible= false;
          clearInterval(this.timeLineInterval);
        }
     

   
   if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
       this.selectEmployee = this.Current_user_ID;
    }
    this._calenderDto.EmpNo = this.selectEmployee;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this._calenderDto.startdate = selectedDate;
    this._calenderDto.enddate = selectedDate;
    this._calenderDto.SearchText= null
     console.log(this._calenderDto ,'Dayyyyyyy ')
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe((data) => { debugger
       
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;
        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        this.Scheduledjson = this.Scheduledjson.sort((a, b) => new Date(a.Schedule_date).getTime() - new Date(b.Schedule_date).getTime());
     
     
        // this.dayEventsLists = this.Scheduledjson.filter(e => e.startTime.includes(selectedDate));
           this.dayEventsLists = this.Calendarjson.find(d => d.Schedule_date.includes(selectedDate))?.Events || [];

  
            this.dayMappedList = this.hoursList.map(hour => ({
              hour,
              events: this.dayEventsLists.filter(({ startTime }) => new Date(startTime).getHours() === 
                (hour.includes("AM") ? (hour.startsWith("12") ? 0 : parseInt(hour)) : (hour.startsWith("12") ? 12 : parseInt(hour) + 12))
              )
            })); 
       
             if (this.teamsCalendar === 2) {
                this.dayMappedList.forEach(day =>
                  day.events = day.events.filter(e => !e.IsPrivate)
                );
              }

            console.log(this.dayMappedList,'dayMappedList');    
      })        
}









getDurationInPixels(start: string, end: string): number {
  const durationInMinutes = (new Date(end).getTime() - new Date(start).getTime()) / (1000 * 60);
  return (durationInMinutes / 5) * 4; // 5 minutes = 4px, 10 minutes = 8px, etc.
}


formattedDayTime:any;
monthDateBinde:any;


dayTimeBinding(time:any){ 
const now = new Date();  
let [hour, period] = time.split(" ");
let timeHour = (period === "PM" && +hour !== 12) ? +hour + 12 : (period === "AM" && +hour === 12) ? 0 : +hour;
this.formattedDayTime = time.replace(/(\d+)\s(AM|PM)/, (_, h, p) => `${h.padStart(2, '0')}:00 ${p}`);    
this.monthDateBinde = this.openBoxSelectedDate; 

if(this.openPopupBox == true && (this.openBoxSelectedDate == this.today && timeHour >= now.getHours()) || this.openPopupBox == true && this.openBoxSelectedDate > this.today ){
    this.Task_type(2);    
  }else if(  this.openPopupBox == true){
    this.notifyService.showInfo("Your selected time is invalid. Please select a valid time.", "Failed"); 
  }else{
    this.openPopupBox = true
  }
}



updateTimeLine() { 
  const now = new Date();
  let hours = now.getHours(); 
  const minutes = now.getMinutes();
  // const isPM = hours >= 12;
  // const formattedHour = (hours % 12 || 12) + (isPM ? " PM" : " AM");
  // this.currentHourIndex = this.hoursList.findIndex(hour => hour.includes(formattedHour));
  this.currentHourIndex = hours
  this.currentTimeTop = (minutes / 60) * 48;
}
/////////////////////////////////////////// Day section end /////////////////////////////////////////////////////////


/////////////////////////////////////////// Weekly section Sart /////////////////////////////////////////////////////////

weekStartDate:any;
weekEndDate:any;
weekDates:any;
weekJsonList:any;
weekMappedList:any;

weeklyScheduleJson(weekFromToday) { 
  
  this.selectDay = weekFromToday === 3 ? moment() : moment(this.selectDay).add(weekFromToday, 'week');
  const selectedDate = moment(this.selectDay).format('YYYY-MM-DD');

  const startOfWeek = moment(selectedDate).startOf('isoWeek');
  this.weekDates = Array.from({ length: 7 }, (_, i) => startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'));

   if (this.weekDates.includes(this.today)) {  
     this.timeLineVisible= true;
     this.updateTimeLine();
     this.timeLineInterval = setInterval(() => this.updateTimeLine(), 60000);
   }else{
     this.timeLineVisible= false;
     clearInterval(this.timeLineInterval);
   }

   const startDate = new Date(this.weekDates[0]);
   const endDate = new Date(this.weekDates[6]);
   endDate.setDate(endDate.getDate() + 1); // Include the end date in the range

   this.weekStartDate = this.weekDates[0];
   this.weekEndDate = this.weekDates[this.weekDates.length - 1];


console.log( this.weekStartDate, this.weekEndDate,'weekEndDate')
  if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
       this.selectEmployee = this.Current_user_ID;
    }
    this._calenderDto.EmpNo = this.selectEmployee;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this._calenderDto.startdate =  this.weekStartDate;
    this._calenderDto.enddate = this.weekEndDate;
    this._calenderDto.SearchText= null
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe((data) => {
       
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;
        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        this.Scheduledjson = this.Scheduledjson.sort((a, b) => new Date(a.Schedule_date).getTime() - new Date(b.Schedule_date).getTime());
 




     const weekEventsLists = this.Scheduledjson.reduce((acc, day) => {
        const filtered = day.Events.filter(e => 
          new Date(e.startTime) >= startDate && new Date(e.startTime) < endDate
        );
        return acc.concat(filtered);
      }, []);




    this.weekMappedList = this.hoursList.map(hour => ({
      hour,
      events: this.weekDates.map(date => ({
        date,
        subdate: weekEventsLists.filter(({ startTime }) => { 
          const eventDate = new Date(startTime);
          return (
            eventDate.toISOString().split('T')[0] === date &&
            eventDate.getHours() === (hour.includes("AM") ? (hour.startsWith("12") ? 0 : parseInt(hour)) : (hour.startsWith("12") ? 12 : parseInt(hour) + 12))
          );
        })
      }))
    }));

 

  
     if(this.teamsCalendar == 2 ){
       this.weekMappedList.forEach(week=>{
        week.events.forEach(event=>{
         event.subdate = event.subdate.filter(e=>!e.IsPrivate)
        }
        )}
       )
     }

    console.log(this.weekMappedList,'weekMappedList'); // Filtered events within the week
        })
}




monthTimeBinding(data,time){ 
  this.monthDateBinde = data;
  const now = new Date();  
  let [hour, period] = time.split(" ");
  let timeHour = (period === "PM" && +hour !== 12) ? +hour + 12 : (period === "AM" && +hour === 12) ? 0 : +hour;
  this.formattedDayTime = time.replace(/(\d+)\s(AM|PM)/, (_, h, p) => `${h.padStart(2, '0')}:00 ${p}`);    
    if(this.openPopupBox == true && (this.monthDateBinde == this.today && timeHour >= now.getHours()) || this.openPopupBox == true && this.monthDateBinde > this.today ){
      this.Task_type(2);    
    }else if(  this.openPopupBox == true){
      this.notifyService.showInfo("Your selected date and time is invalid. Please select a valid date and time.", "Failed"); 
    }else{
      this.openPopupBox = true
    }

    console.log(this._StartDate,'_StartDate')
}
/////////////////////////////////////////// Weekly section end /////////////////////////////////////////////////////////


/////////////////////////////////////////// Monthly section Sart /////////////////////////////////////////////////////////

monthMappedList:any;
weekdays:any;
selectedMonthlyDate:any;

// onWheelScroll(bx, event){
//   console.log(bx.clientHeight);
//   console.log('scrolling... ',event);
// }



// @HostListener('wheel', ['$event'])

// onMouseWheel(event: WheelEvent) {
//   if (event.deltaY < 0) {
//     // Scrolling up
//     this.monthlyScheduleJson(-1);
//   } else {
//     // Scrolling down
//     this.monthlyScheduleJson(1);
//   }
// }



monthlyScheduleJson(monthFromToday) {   
  this.timeLineVisible= false;
  clearInterval(this.timeLineInterval);
  this.selectDay = monthFromToday === 3 ? moment() : moment(this.selectDay).add(monthFromToday, 'month');
  this.selectedMonthlyDate = moment(this.selectDay).startOf('month');
  this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
  const start = moment(this.selectDay).startOf('month').isoWeekday(1);

  this.monthMappedList = Array.from({ length: 6 }, (_, i) => ({
    week: Array.from({ length: 7 }, (__, j) => {
      const currentDate = start.clone().add(i * 7 + j, 'days'); 
    if (i === 0 && j === 0){
      this.weekStartDate = currentDate.format('YYYY-MM-DD');
      console.log(this.weekStartDate,'startDateStr')
    } 
    if (i === 5 && j === 6){
        this.weekEndDate = currentDate.format('YYYY-MM-DD');
         console.log(this.weekEndDate,'endDateStr')
     }
    })
  }));

     if(this.teamsCalendar == 1 || this.teamsCalendar == 0){
       this.selectEmployee = this.Current_user_ID;
    }
    this._calenderDto.EmpNo = this.selectEmployee;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this._calenderDto.startdate =  this.weekStartDate;
    this._calenderDto.enddate = this.weekEndDate;
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe((data) => {
       
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;
        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        this.Scheduledjson = this.Scheduledjson.sort((a, b) => new Date(a.Schedule_date).getTime() - new Date(b.Schedule_date).getTime());
   
   
        this.monthMappedList = Array.from({ length: 6 }, (_, i) => ({
        week: Array.from({ length: 7 }, (__, j) => {
          const currentDate = start.clone().add(i * 7 + j, 'days');
          const dateStr = currentDate.format('DD-MM-YYYY'); 
          return {
            date: dateStr,
            day: currentDate.format('dddd'),
            events: this.Scheduledjson.reduce((acc, e) => acc.concat(e.Events.filter(ev => moment(ev.startTime).format('DD-MM-YYYY') === dateStr)), [])
          };
        })
      }));

      if(this.teamsCalendar == 2 ){
          this.monthMappedList.forEach(week=>{
            week.week.forEach(event=>{
            event.events = event.events.filter(e=>!e.IsPrivate)
            }
            )}
          )
        }
       console.log(this.monthMappedList, 'monthMappedList');
      })
}



formatDate = (d: string) => d ? new Date(d.split('-').reverse().join('-'))
  .toLocaleDateString('en-US', { day: '2-digit', month: 'short', weekday: 'short', year: 'numeric' })
  .toUpperCase() : '';



convertToISO(dateString: string) {
  const [day, month, year] = dateString.split('-');
  return `${year}-${month}-${day}`;
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
  if (this._OldRecurranceId != this.selectedrecuvalue || this._OldRecurranceValues != _arraytext.toString()) {
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
    this._PopupConfirmedValue = 1;
  }
}

/////////////////////////////////////////// Monthly section end /////////////////////////////////////////////////////////






link: string = '';
generateLink(): void {
  this.link = 'https://cswebapps.com/creativeplanner/StreamCalendar/' +  this.Schedule_ID
}



shareOnWhatsApp(): void {
  // URL encode the link

  const link = 'https://cswebapps.com/creativeplanner/StreamCalendar/' +  this.Schedule_ID
  const encodedLink = encodeURIComponent(link);

  // Create the WhatsApp share URL
  const whatsappUrl = `https://wa.me/?text=${encodedLink}`;

  // Open the URL in a new tab/window
  window.open(whatsappUrl, '_blank');
}

shareOnFacebook(): void {
  
  // URL encode the link
  const link = 'https://cswebapps.com/creativeplanner/portfolioprojects/' +  this.Schedule_ID
  const encodedLink = encodeURIComponent(link);
  // Create the Facebook share URL
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedLink}`;

  // Open the URL in a new tab/window
  window.open(facebookShareUrl, '_blank');
}

shareOnTwitter(): void {
  // URL encode the components
  const link = 'https://cswebapps.com/creativeplanner/portfolioprojects/' +  this.Schedule_ID
  const encodedUrl = encodeURIComponent(link);

  // Create the Twitter Intent URL
  let twitterIntentUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}`;

  // Open the URL in a new tab/window
  window.open(twitterIntentUrl, '_blank');
}



copyLinkToClipboard(): void {

  navigator.clipboard.writeText(this.link).then(() => {
      this._snackBar.open('link copied to clipboard', 'End now', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "bottom",
      });
  
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });

}





getLastEventWithValidEnd(events: any[], duration: string): any {
  let last = null;
  for (let i = 0; i < events.length; i++) {
    // Convert event endTime to match duration format (YYYY-MM-DD HH:mm)
    const eventEndTime = events[i].endTime.slice(0, 16).replace('T', ' ');
    if (eventEndTime < duration) {
      if (last && last.endTime === events[i].endTime) continue;
      last = events[i];
    }
  }
  return last;
}



  getInitials(name) {
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
  }


  isExpanded: boolean = false;
  teamsCalendar:any = 1;
  EmpJson:any;
  searchTeams:any;

getTeam_List(TeamsArg){ debugger
  this.teamsCalendar = TeamsArg;
     this._calenderDto.EmpNo = this.Current_user_ID;
      this.CalenderService.GetUserTeam(this._calenderDto).subscribe((data)=>{ debugger
      this.EmpJson = JSON.parse(data['EmpJson']);  
      console.log(this.EmpJson,'this.EmpJson')  
      })
       console.log(this.EmpJson,'this.EmpJson')  
    if(this.teamsCalendar == 1){     
      this.getEventsForWeeks(0)
    }
      

}

getTeamCalendar(employee){
     if(this.teamsCalendar == 2){ 
      this.selectEmployee = employee.toString();
         this.getEventsForWeeks(0)
     }
}
}