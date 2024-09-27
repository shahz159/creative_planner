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
  Selecteddaate: any


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
        // 'bold',
        // 'italic',
        // 'underline',
        'undo',
        'redo',
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
  togglemeetingtypeOption(option: string) {
    this.selectedOption = option;
  }











  ngOnInit(): void {
    this.initAutosize();
    this.initFirstclass();
    this.MinLastNameLength = true;
    this._labelName = "Schedule Date";
   
    this._StartDate = moment().format("YYYY-MM-DD").toString();

   
    tippy('#agenda-info-icon', {
      content: "Agenda is mandatory for a meeting, Please provide atleast 1.",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'dark',
      animateFill: true,
      inertia: true,
      placement: 'left'
    });


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

    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
   

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
    document.getElementById("event-title").style.display = "block";
    document.getElementById("task-title").style.display = "none";
    document.getElementById("nav-event").style.display = "block";
    document.getElementById("nav-task").style.display = "none";
    document.getElementById("create-event-div").style.display = "block";
    document.getElementById("create-task-div").style.display = "none";
    document.getElementById("create-event-badge").classList.add("active");
    document.getElementById("create-task-badge").classList.remove("active");
  }
  change_task(){
    document.getElementById("event-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  createEventonlyTaskModal(){
    document.getElementById("event-title").style.display = "none";
    document.getElementById("task-title").style.display = "block";
    document.getElementById("nav-event").style.display = "none";
    document.getElementById("nav-task").style.display = "block";
    document.getElementById("create-event-div").style.display = "none";
    document.getElementById("create-task-div").style.display = "block";
    document.getElementById("create-event-badge").classList.remove("active");
    document.getElementById("create-task-badge").classList.add("active");
  }
  customEventModal(){
    document.getElementById("customEventModal").style.display = "block";
    document.getElementById("customEventModal").classList.add("show");
    document.getElementById("customEventModalBackdrop").style.display = "block";
    document.getElementById("customEventModalBackdrop").classList.add("show");
  }
  customEventModal_dismiss(){
    document.getElementById("customEventModal").style.display = "none";
    document.getElementById("customEventModal").classList.remove("show");
    document.getElementById("customEventModalBackdrop").style.display = "none";
    document.getElementById("customEventModalBackdrop").classList.remove("show");
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


  // month_more_view() {
  //   document.getElementById("month-day-events-more").classList.add("show");
  // }

  close_month_more_view() {
    document.getElementById("month-day-events-more").classList.remove("show");
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
_meetingroom:boolean=false;
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
  console.log(this.daysSelectedII, "default")

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
      (this.Description_Type?(this.characterCount<500):true)&&
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
      this.closeschd();
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
        console.log(this.Scheduledjson,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        this.dataBindEndTime = performance.now();
        this.dataBindTime = this.dataBindEndTime - this.dataBindStartTime;
        this.userFound = true
        console.log(this.Scheduledjson, "Testingssd");

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
///////////////////////////////////////////  Create Event and Create Task sidebar End /////////////////////////////////////////////////////////



 




}