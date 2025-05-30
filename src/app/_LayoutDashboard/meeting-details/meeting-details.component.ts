import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { CalenderService } from 'src/app/_Services/calender.service';
import { LinkService } from 'src/app/_Services/link.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { NotificationService } from 'src/app/_Services/notification.service';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { eventNames } from 'process';
import { Console } from 'console';
// import { SignalRService } from 'src/app/_Services/signal-r.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { ProjectMoreDetailsService } from 'src/app/_Services/project-more-details.service';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';




export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};



@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]

})
export class MeetingDetailsComponent implements OnInit {
  _ObjAssigntaskDTO: AssigntaskDTO;
  allTodos: any = [];
  todosVisible: boolean = false;
  Scheduleid: any
  URL_ProjectCode: any;
  currentAgendaView: any
  _MasterCode: string;
  CurrentUser_fullname:any;
  meetingAdmin: boolean | undefined;
  userFound: boolean | undefined;
  loadingDMS: boolean= false;
  deletedMeeting:boolean = true;
  subtask_loading:boolean=false;
  loading: boolean = false;
  Current_user_ID: string;
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  _calenderDto: CalenderDTO;
  approvalObj: ApprovalDTO;
  ObjSubTaskDTO: SubTaskDTO;
  

  currentSidebarOpened: "Private_Notes" | "NOT_OPENED" = 'NOT_OPENED';
  notesContent: any;
  _ObjCompletedProj: CompletedProjectsDTO;


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '15rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: '',
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
        'fontName',
        'customClasses',
      ],
      [
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
       
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
    // Add sanitizeHtml option and set it to false
    sanitize: false
  };


  
  private refreshSubscription: Subscription;
  constructor(
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private CalenderService: CalenderService,
    private route: ActivatedRoute,
    public service: ProjectTypeService,
    public notifyService: NotificationService,
    public _LinkService: LinkService,
    public ProjectTypeService: ProjectTypeService,
    private dialog: MatDialog,
    public router: Router,
    public BsService: BsServiceService,
    public approvalservice: ApprovalsService,
    // public signalRService: SignalRService
  ) {

    this._calenderDto = new CalenderDTO;
    this.objPortfolioDto = new PortfolioDTO();
    this._lstMultipleFiales = [];
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.approvalObj = new ApprovalDTO();
    this.ObjUserDetails = new UserDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
  }


  activeAgendaIndex: number = 0
  _PopupConfirmedValue: number;
  today: any = new Date().toISOString().substring(0, 10);
 

  
    



  ngOnInit(): void {
  
    this.loadingDMS = false;
    this.MinLastNameLength = true;

    this.route.paramMap.subscribe(params => {
      var scode = params.get('scheduleid');
      this.Scheduleid = scode;
    });
    this.Schedule_ID = this.Scheduleid;

    this.route.paramMap.subscribe(params => {
      var pcode = params.get('scheduleid');
      this.URL_ProjectCode = pcode;
      this._MasterCode = pcode;
    });
    
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.CurrentUser_fullname = localStorage.getItem("UserfullName");

    console.log(this.CurrentUser_fullname,'CurrentUser_fullname')
    this.MinLastNameLength = true;
    // this.getAttendeeTime();
   
    this.meeting_details();

    this.addAgenda();
    // this.GetMeetingnotes_data();
    this.getDetailsScheduleId()

    this.GetMemosByEmployeeId_new();
    this.GetProjectAndsubtashDrpforCalender();
    this.GetTimeslabfordate();
    this.GetcompletedMeeting_data();
    this.agendaside(0);
    this.getMeetingApprovals();
    this.fetchPortfolios();
    this.GetProjectsByUserName();
    this.GetMemosActivity();



    setTimeout(() => {
      this.loadingDMS = true;
      }, 4000); 

    this.GetPreviousdate_meetingdata();
    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());

    this.disablePreviousTodayDate.setDate(this.disablePreviousTodayDate.getDate() + 1);
    //   this.signalRService.startConnection();
    //   this.signalRService.addBroadcastMessageListener((name, message) => {
    //   console.log(`Received: ${name}: ${message}`);
    //   // Here you can update your view/model with the received message
    // });
    this._PopupConfirmedValue = 1;

    this.selectedrecuvalue = "0";
    // const storedStartTime = localStorage.getItem('startTime');
    // console.log(storedStartTime,'startTime');

    moment.locale('en');
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
    this.GetMeetingnotes_data();
    this.GetMeetingActivity();
  }

  getDetailsScheduleId() {
    this.router.navigate(["Meeting-Details/" + this.Schedule_ID]);
  }
  // @HostListener('copy', ['$event'])
  // editorFocused: boolean = false;

  // onEditorFocus(): void {
  //   this.editorFocused = true;
  //   // alert(this.editorFocused)
  // }

  // onEditorBlur(): void {
  //   this.editorFocused = false;
  // }

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }


  selectedText: any;

  // makeLineATask(): void {

  //   // alert(this.editorFocused)
  //   const editorContent = this.Notes_Type;
  //   if (this.editorFocused===true) {
  //     const selection = window.getSelection();
  //     if (!selection || selection.rangeCount === 0) {
  //     alert('Nothing is selected');
  //   }


  //   // const range = selection.getRangeAt(0);
  //   // const selectedText = range.toString();
  //   const range = selection.getRangeAt(0);
  //   const selectedText = range.toString().trim();
  //   const containerEl = range.commonAncestorContainer;

  //   // We assume `containerEl` is where the Angular Editor's content is
  //   // Now we need to convert it to a proper HTML element if it's not already
  //   const editorEl = containerEl.nodeType === 3 ? containerEl.parentNode : containerEl;

  //   // Get all the text content split by line breaks
  //   const lines = editorEl.textContent.split('\n');

  //   // Find which line has the selected text
  //   const currentLineIndex = lines.findIndex(line => line.includes(selectedText));
  //   if (currentLineIndex === -1) return; // Selected text not part of the lines, exit

  //   // Replace the current line with the task HTML
  //   lines[currentLineIndex] = `<div class="task">${lines[currentLineIndex]}</div>`;

  //   // Update the Notes_Type model with the new content
  //   // alert(lines.join('\n'));
  //   let stringWithoutHtml = this.stripHtml(lines);
  //   console.log(stringWithoutHtml, "todo");

  //   // this.checkIfCopiedCorrectly(stringWithoutHtml);
  //   if(stringWithoutHtml==''){
  //     alert("Please select & copy some text from editor or place cursor on the line you want to select");
  //   }
  //   else{
  //     if(this.selectedText!="" && stringWithoutHtml.includes(this.selectedText)){
  //       this.EnterSubmit(this.selectedText);
  //     }
  //     else{
  //       this.EnterSubmit(stringWithoutHtml);
  //     }
  //   }
  //   }
  //   else{
  //     alert('This action is only for the angular editor')
  //   }
  //   this.editorFocused=false;
  // }

  makeLineAProject() {

  }

  makeLineAAction() {

  }

  // onCopy(event: ClipboardEvent) {
  //   // Using Clipboard API
  //   const copiedText = event.clipboardData?.getData('text/plain');

  //   // If Clipboard API is not available, use window.getSelection()
  //   if (!copiedText && window.getSelection) {
  //     const selectedText = window.getSelection().toString();
  //     console.log('Copied with window.getSelection:', selectedText);
  //     this.selectedText=selectedText;
  //   } else {
  //     console.log('Copied with Clipboard API:', copiedText);
  //     this.selectedText=copiedText;
  //     // Now you can do something with the copied text
  //     // ...
  //   }

  //   // Optional: prevent the default copy action
  //   // event.preventDefault();
  // }

  // stripHtml(html: any): string {
  //   // Check if html is an array and has at least one element.
  //   if (Array.isArray(html) && html.length > 0) {
  //     // Assume the first element is the string to be stripped of HTML.
  //     const string = html[0];
  //     if (typeof string === 'string') {
  //       return string.replace(/<[^>]*>/g, '');
  //     } else {
  //       console.error('Expected a string in the array but got:', string);
  //       return ''; // or some default string representation
  //     }
  //   } else {
  //     console.error('Expected an array with at least one item but got:', html);
  //     return ''; // or some default string representation
  //   }
  // }

  // sendMessage(name: string, message: string) {
  //   this.signalRService.send(name, message);
  // }

  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
  @ViewChild('fruitInput') fruitInput: ElementRef;
  @ViewChild('fruitInputpro') fruitInputpro: ElementRef;
  @ViewChild('fruitInputportfolio') fruitInputportfolio: ElementRef;
  @ViewChild('fruitInputs') fruitInputs: ElementRef;
  @ViewChild('fileInput') fileInput: any;


  View_Attendees_Notes() {
    document.getElementById("Attendees_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this.GetAttendeesnotes();
  }
  close_attendeesnotes_sideBar() {
    document.getElementById("Attendees_Notes").classList.remove("kt-quick-active--on");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";
  }
  View_Private_Notes() {
    this.currentAgendaView = undefined;
    document.getElementById("Private_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this.GetMeetingnotes_data();
  }
  Repeat_Meeting() {
    
    document.getElementById("repeatModal").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this._StartDate = this.disablePreviousTodayDate;
    this._SEndDate = this.disablePreviousTodayDate;
    this.disablePreviousDate = this.disablePreviousTodayDate;
    //  this.meeting_details();
  }
  Close_Repeat_Meeting() {
    document.getElementById("repeatModal").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
  }

  close_privatenote_sideBar() {
    document.getElementById("Private_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
  }
  View_Meeting_Attendees() {
    document.getElementById("Meeting_Attendees").classList.add("kt-quick-active--on");
    this.meeting_details();
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  close_meetingattendees_sideBar() {
    this.selectedEmployees = [];
    document.getElementById("Meeting_Attendees").classList.remove("kt-quick-active--on");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.fruitInput.nativeElement.value = '';
  }
  rightbar_overlay() {
    document.getElementById("Attendees_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("Private_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("Meeting_Attendees").classList.remove("kt-quick-active--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar2").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("History_sidebar").classList.remove("kt-quick-active--on");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";
  }
  upload_btn() {
    document.getElementById("attach_heading").style.display = "none";
    document.getElementById("attach_div").style.display = "none";
    document.getElementById("attach_btn").style.display = "block";
    document.getElementById("upload_heading").style.display = "block";
    document.getElementById("upload_div").style.display = "block";
    document.getElementById("upload_btn").style.display = "none";
  }

  
  View_Activity() {
    this.GetDMSList();
    document.getElementById("Activity_Log").classList.add("kt-quick-panel--on");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "block";

    this.GetMeetingActivity();
  }


  attach_btn() {
    document.getElementById("attach_heading").style.display = "block";
    document.getElementById("attach_div").style.display = "block";
    document.getElementById("attach_btn").style.display = "none";
    document.getElementById("upload_heading").style.display = "none";
    document.getElementById("upload_div").style.display = "none";
    document.getElementById("upload_btn").style.display = "block";
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {

  }


  totaldms: number;
  DMS_Scheduledjson: any = [];
  dmsIdjson: any = [];
  EventScheduledjson: any = [];
  Schedule_ID: any;
  User_Scheduledjson: any = [];
  user_linkedOnMtg:any=[];
  portfolio_Scheduledjson: any = []
  Project_code: any
  Employeelist: any = []
  Agendas_List: any = []
  Attachments_ary: any = []
  _TotalAttachment: any
  startTime: Date;
  meetingInProgress: boolean = false;
  meetingPaused: boolean = false;
  play: boolean = false;
  pause: boolean = false;
  meetingStopped: boolean = false;
  elapsedTime: number = 0;
  timer: any;
  duration: number = 60 * 60 * 1000; // 60 minutes * 60 seconds * 1000 milliseconds
  sched_admin: any;
  isCheckboxDisabled: boolean = false;
  Isadmin: boolean = false;
  Createdby: string;
  main_actualDuration: any;
  status: string;
  Meeting_status: boolean;
  Link_Detail: any
  totalguest: number;
  checkedusers: any = [];
  Guestcount: number;
  totalproject: number;
  checkedproject: any = [];
  projectcount: number;
  totalportfolios: number;
  checkedportfolio: any = [];
  portfoliocount: number;
  totalAgendaList: any
  completedAgendaList: any
  formattedDuration: any
  hours: any
  minutes: any
  hasStatusOne: boolean = false
  EmpNo: any;
  Actiontask: any;
  AssignedTask: any;
  Todotask: any;
  orderedItems: any;
  totalCountAssign: any;
  totalAssign: any;
  totalActiontask: any;
  totalTodotask: any;
  totalCompletedAgenda: any;
  urlUserID_Password: any;
  Endtms: any;
  EventAction_type:any;

  meeting_details_1() {
    document.getElementById("rightbar-overlay").style.display = "block";
  }




  statusOneCount :any;
  delayMeeting: any;
  upcomingMeeting: any;
  meetingDuration: any;
  meetings_Recurrence: any;
  completionReports_Status:any=[];
  totalUser_Scheduledjson:any;
  completionReports:any;
  CurrentNotesCount:any;
  CurrentTaskCount:any;
  Status1: any;
  Meeting_Id:any;
  Meeting_password:any;
  ModifiedJson:any;
  _AllEventAttachment: number = 0;
  _FutureEventAttachment: number = 0;
  AdminName:any;
  isLoading: boolean = true;
  oneByTwoEndDate:any;
  Meeing_Name:any;
  Organizer:any;
  DMS_Details:any;
  
  live_activ = [
    { actvName: 'New agenda added by Aquib Shahbaz', time: '5 sec ago' },
    { actvName: 'Agenda completed by Waseem Akram', time: '1 min ago' },
    { actvName: 'Task assigned to Ayesha Khan', time: '3 mins ago' },
    { actvName: 'Meeting notes updated by Bilal Raza', time: '5 mins ago' },
    { actvName: 'New task created by Usman Tariq', time: '10 mins ago' },
    { actvName: 'Agenda 3 marked as pending by Sarah Ali', time: '15 mins ago' },
    { actvName: 'Reminder set by Waseem Akram', time: '20 mins ago' },
    { actvName: 'Participant Ali Raza joined the meeting', time: '25 mins ago' },
    { actvName: 'Follow-up note added by Aquib Shahbaz', time: '30 mins ago' },
    { actvName: 'Task completed by Ayesha Khan', time: '35 mins ago' }
  ];
  
  meeting_details() {

    this._calenderDto.Schedule_ID = this.Schedule_ID;

    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data) => {
      
      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      if(this.EventScheduledjson != undefined && this.EventScheduledjson != null && this.EventScheduledjson != ''){
      this.deletedMeeting = true;
      this.BookMarks = this.EventScheduledjson[0].IsBookMark;
      var Schedule_date = this.EventScheduledjson[0].Schedule_date
      this.meetingRestriction(Schedule_date);
      this.Agendas_List = this.EventScheduledjson[0].Agendas;
      this.Meeing_Name = (this.EventScheduledjson[0]['Task_Name']);
      this._StartDate = this.EventScheduledjson[0]['Schedule_date'];
      this.Startts = (this.EventScheduledjson[0]['St_Time']);
      this.Endtms = (this.EventScheduledjson[0]['Ed_Time']);
      this.statusOneCount = this.Agendas_List.filter(values=>values.Status === "1").length;

    
      this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);

       console.log('EventScheduledjson',this.EventScheduledjson);

      this.totalUser_Scheduledjson=this.User_Scheduledjson.length;
      this.user_linkedOnMtg=this.User_Scheduledjson?this.User_Scheduledjson.map(user => user.stringval):[];


      this.orderedItems = this.User_Scheduledjson.sort((a, b) => {
        const statusOrder = { "Accepted": 1, "Pending": 2, "May be": 3, "Rejected": 4 };
        return statusOrder[a.Status] - statusOrder[b.Status];
      });

      this.orderedItems = this.orderedItems.sort((a, b) => {
        if (a.onlineStatus === "Start") return -1;
        if (b.onlineStatus === "Start") return 1;
        return 0;
      });

      var getTotalCount= this.orderedItems.filter(item=> item.Status==='Accepted' || item.onlineDuration );

      this.completionReports_Status=getTotalCount.length + 1

      this.meetings_Recurrence = this.EventScheduledjson[0].Recurrence

      var getTotalCounts= this.orderedItems.filter(item=> item.Status==='Accepted' || item.onlineStatus=='Start' );

      this.completionReports=getTotalCounts.length + 1


      this.EmpNo = JSON.parse(this.EventScheduledjson[0].Emp_No);
      this.Actiontask = this.EventScheduledjson[0].Actiontasks;
      this.AssignedTask = this.EventScheduledjson[0].AssignedTasks;
      this.totalAssign = this.AssignedTask.length;
      this.totalActiontask = this.Actiontask.length;
      this.Todotask = this.EventScheduledjson[0].Todotasks;

      this._AllEventAttachment = this.EventScheduledjson[0]['AllEventsCount'];
      this._FutureEventAttachment = this.EventScheduledjson[0]['FutureCount'];
      this.AdminName=this.EventScheduledjson[0].AdminName

    


      this.totalTodotask = this.Todotask.length;
      this.totalCountAssign = this.totalAssign + this.totalActiontask + this.totalTodotask;

      if (this.EmpNo == this.Current_user_ID) {
        this.meetingAdmin = true
      } else {
        this.meetingAdmin = false
      }

     
      if (this.User_Scheduledjson.length > 0) {
        const racisUserIds = this.User_Scheduledjson.map((user: any) => user.stringval);
        this.userFound = racisUserIds.includes(this.Current_user_ID);
      }

     setTimeout(()=>{ 
      this.taskcount = this.Agendas_List.map(item => ({ count: 0, agendaid: item.AgendaId }));
      this.notescount = this.Agendas_List.map(item => ({ count: 0, agendaid: item.AgendaId }));
      

      this.CurrentNotesCount = this.Agendas_List.map(item => ({ NotesCount: item.CurrentNotesCount, agendaid: item.AgendaId }));
      this.CurrentTaskCount = this.Agendas_List.map(item => ({ TaskCount: item.CurrentTaskCount, agendaid: item.AgendaId }));

     },2000)
 

    
      if (this.Agendas_List.every(obj => obj.Status == 1)) {
        this.hasStatusOne = true;
      } else {
        this.hasStatusOne = false;
      }

      this.totalAgendaList = this.Agendas_List.length;
      this.completedAgendaList = this.Agendas_List.filter(item => item.Status == 1)
      this.totalCompletedAgenda = this.completedAgendaList.length;

    

      var x = this.Agendas_List.length;
      
      this.Createdby = this.EventScheduledjson[0].Created_by;
      this.Organizer = this.EventScheduledjson[0].Organizer;

      console.log(this.Organizer,'Organizer')
      this.main_actualDuration = this.EventScheduledjson[0].actual_duration;


      this.status = this.EventScheduledjson[0].Status;
      this.sched_admin = this.EventScheduledjson.Owner_isadmin;
      this.Link_Detail = this.EventScheduledjson[0].Link_Details;


      let startIndex = this.Link_Detail.indexOf('</a>');
      let anchorText = this.Link_Detail.substring(startIndex + 4);


 

      var UserID_Password = anchorText.replace(/<[^>]*>/g, ' ');
      if (UserID_Password != '') {
        this.urlUserID_Password = UserID_Password.trim();
      }

      // console.log(this.urlUserID_Password,'Link_Detail');

      let str = this.Link_Detail;
      let regexp = /href="https:\/\/[^"]+"/;
      let result = regexp.exec(str);
      if (result && result[0])
      this.Link_Detail = result[0].slice(6, result[0].length - 1);

   

    //  console.log(this.Link_Detail,'Link_Detail2')

      this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
      this.totalguest = this.User_Scheduledjson.length;
      this.checkedusers=[];
      this.User_Scheduledjson.forEach(element => {
        this.checkedusers.push(element.stringval);
        element.isChecked = true;
      });

      this.Guestcount = this.checkedusers.length;

      this.ModifiedJson=this.EventScheduledjson[0].ModifiedJson

      this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
      this.DMS_Details = JSON.parse(this.EventScheduledjson[0].DMS_Details);
     

      this.totalportfolios = this.portfolio_Scheduledjson.length;
      this.portfolio_Scheduledjson.forEach(element => {
        this.checkedportfolio.push(element.numberval);
        element.isChecked = true;
      });

      //  this.portfolio_Scheduledjson = this.mergeObjects(
      //  this.portfolio_Scheduledjson || [], 
      //  this.ModifiedJson || [], 
      // 'numberval'
      //  );
    

      this.portfoliocount = this.checkedportfolio.length;
      this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson;

      this.Attachments_ary=this.Attachments_ary.map(item=>({
        ...item,
        File_type:item.Cloud_Name.split('.').pop()
       }))

      this._TotalAttachment = this.Attachments_ary.length;
      

      this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
      this.Project_code = JSON.parse(this.EventScheduledjson[0].Project_code);
      this.totalproject = this.Project_code.length;

      this.Project_code.forEach(element => {
        element.isChecked = true;
        this.checkedproject.push(element.stringval);
      });

     console.log(this.portfolio_Scheduledjson,'portfolio_Scheduledjson',this.Project_code)
      // this.Project_code = this.mergeObjects(
      //   this.Project_code || [], 
      //   this.ModifiedJson || [], 
      //   'stringval'
      // );

      this.projectcount = this.checkedproject.length;

      this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
      //.log(this.Isadmin,'isadmin')
      this.sched_admin = this.EventScheduledjson[0]['Owner_isadmin']
      this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
      this.Status1 = this.EventScheduledjson[0].Status.trim();
      
      if (this.Isadmin) {
        this.isCheckboxDisabled = false;
      }
      if (!this.Isadmin) {
        this.isCheckboxDisabled = true;
      }

      this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');
      this.totaldms = this.DMS_Scheduledjson.length;
      this.dmsIdjson = [];
      if (this.DMS_Scheduledjson.length > 0) {

        this.DMS_Scheduledjson.forEach(element => {
          var jsonData = {};
          var columnName = "MailId";
          jsonData[columnName] = element;
          this.dmsIdjson.push(jsonData);
        });
        this.dmsIdjson = JSON.stringify(this.dmsIdjson);
        this.GetDMSList();
      }

      // var St_Time = this.EventScheduledjson[0].St_Time;
      // var End_date = this.EventScheduledjson[0].Ed_Time; 
      // var StartDate = this.EventScheduledjson[0].StartDate;
      this.oneByTwoEndDate = this.EventScheduledjson[0].SEndDate;

      // var startTime = moment(St_Time, "hh:mm A");
      // var endTime = moment(End_date, "hh:mm A");

      // var startTime = moment(`${StartDate} ${St_Time}`, "YYYY-MM-DD hh:mm A");
      // var endTime = moment(`${this.oneByTwoEndDate} ${End_date}`, "YYYY-MM-DD hh:mm A")


      // Calculate the duration between the start time and end time
      // var duration = moment.duration(endTime.diff(startTime)); 
     
      // Format the duration as hours:minutes
      // this.hours = Math.floor(duration.asHours());
      // this.minutes = duration.minutes();
      // this.formattedDuration = this.hours + ":" + this.minutes.toString().padStart(2, '0');
    
    } else {
      this.deletedMeeting = false;
    }
       }); 
  }







  getDurationInHoursMinutes(start: string, end: string): string {
    const toMinutes = (t: string) => {
      let [time, period] = t.match(/(\d+:\d+)([AP]M)/).slice(1);
      let [h, m] = time.split(':').map(Number);
      return ((h % 12) + (period === 'PM' ? 12 : 0)) * 60 + m;
    };
  
    let duration = (toMinutes(end) - toMinutes(start) + 1440) % 1440;
    return `${Math.floor(duration / 60)} hr : ${duration % 60} min`;
  }

  // getFileIcon(item: any): string {
  //   const extension = item.File_Name.split('.').pop()?.toLowerCase();
  //   return extension === 'pdf' ? 'https://upload.wikimedia.org/wikipedia/commons/0/02/Pdf_icon.svg' :
  //          extension === 'jpg' || extension === 'jpeg' ? 'https://upload.wikimedia.org/wikipedia/commons/6/66/JPEG_icon.svg' :
  //          extension === 'png' ? 'https://upload.wikimedia.org/wikipedia/commons/8/89/PNG_transparency_demonstration_1.png' :
  //          'https://upload.wikimedia.org/wikipedia/commons/d/d7/File_icon_%28new%29.svg';
  // }
  


  mergeObjects(targetArray: any[], sourceArray: any[], matchField: string) {
      if (!Array.isArray(targetArray) || !Array.isArray(sourceArray)) {
        console.error("One of the provided arrays is not valid:", { targetArray, sourceArray });
        return [];
      }
    
      const result: any[] = [];
    
      targetArray.forEach(item => {
        sourceArray.forEach(src => {
          // Handle multiple values in `New_Value`
          const values = String(src.New_Value).split(',');
          if (values.includes(String(item[matchField]))) {
            // Clone the target item and merge with the matched source object
            result.push({ ...item, ...src });
          }
        });
      });
    
      return result;
  }









  
  meetingRestriction(actualMeeting) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 8);
    const meetingDate = new Date(actualMeeting);
    meetingDate.setHours(0, 0, 0, 0);
    sevenDaysAgo.setHours(0, 0, 0, 0);
  

    if (meetingDate >= sevenDaysAgo && meetingDate <= today) {
      this.delayMeeting = true;
    }
    // Check if meeting date is in the future
    else if (meetingDate > today) {
      this.upcomingMeeting = true;
    } else {
      this.delayMeeting = false;
      this.upcomingMeeting = false;
      const durationMillis = meetingDate.getTime() - sevenDaysAgo.getTime();
      // Convert milliseconds to days and add 8 to start from 8 days
      var meetingDurations = Math.ceil(durationMillis / (1000 * 60 * 60 * 24)) - 7;
      this.meetingDuration = Math.abs(meetingDurations);
      //  console.log(this.meetingDuration, 'meetingDate:');
    }

    // setTimeout(() => {
      this.isLoading = false; // Set to false once the data is loaded
    
    //   }, 3000); 
  }




  getInitials(name) {
    var initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
  }

  status_Type: string;
  currentTime: string;
  latestTime: string;

  startMeeting() {

    this.play = true;
    this.status_Type = 'Start';
    this.startTime = new Date();
    let currentDate = new Date();
    
    // Get the current time components
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();

    // Format the time if necessary (e.g., add leading zeros)
    this.currentTime = `${this.formatTimeUnit(currentHours)}:${this.formatTimeUnit(currentMinutes)}:${this.formatTimeUnit(currentSeconds)}`;

    localStorage.setItem('startTime', this.currentTime);
    this.meetingInProgress = true;
    this.GetcompletedMeeting_data();
    this.timer = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime.getTime();
      // console.log(new Date().getTime() - this.startTime.getTime(), "tiem")
      // if (this.elapsedTime >= this.duration) {
      //   this.stopMeeting();
      // }
    }, 1000);

    console.log(this.startTime, 'ijfbviabfvbsvskjvbzsib')
  }

  formatTimeUnit(timeUnit: number): string {
    // Add leading zero if the time unit is less than 10
    return timeUnit < 10 ? `0${timeUnit}` : `${timeUnit}`;
  }


 

  parseTime(time: string): Date {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, seconds, 0);
    return date;
  }


  pauseMeeting() {

    this.play = false;
    this.pause = true;
    clearInterval(this.timer);
    this.meetingPaused = true;
    this.status_Type = 'Pause'
    // this.endtime
    this.InsertAttendeeMeetingTime();
  }




  startTimes: any
  endTime: Date;

  resumeMeeting() {

    this.play = true;
    this.pause = false;
    //69 this.startTimes
    this.status_Type = 'Resume'
    this.InsertAttendeeMeetingTime();
    this.startTimes = new Date(new Date().getTime() - this.elapsedTime);
    this.meetingPaused = false;
    this.timer = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTimes.getTime();
      // if (this.elapsedTime >= this.duration) {
      //   this.stopMeeting();
      // }
    }, 1000);
  }


  leaveMeeting() {
    this.play = false;
    this.pause = false;
    clearInterval(this.timer);
    this.meetingInProgress = false;
    this.meetingStopped = true;

    this.resetMeeting(); // Call the resetMeeting function to reset the meeting state
  }

  resetMeeting() {
    this.startTime = null;
    this.elapsedTime = 0;
    this.meetingPaused = false;
    this.meetingStopped = false;
  }

  durationTimeOfMeeting: any

  stopMeeting() {
    clearInterval(this.timer);
    this.meetingInProgress = false;
    this.meetingStopped = true;
    this.status_Type = 'End';
    this.endTime = new Date(); // Capture the end time

    this.durationTimeOfMeeting = this.formatTime(this.elapsedTime);
    //console.log(this.formatTime(this.elapsedTime), 'Meeting ended');
    this.GetcompletedMeeting_data()

  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = hours > 0 ? this.pad(hours) + 'h' : '';
    const formattedMinutes = this.pad(minutes);
    const formattedSeconds = this.pad(seconds);

    return `${formattedHours} ${formattedMinutes}m ${formattedSeconds}s`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }



  formatCompleteDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}m`;
  }



  actualTime_S: any;
  actualTime_E: any;
  actualDuration: any;
  AverageDuration: any;
  AttendeeCount: any;


  InsertAttendeeMeetingTime() {

    const formatTime = time => time ? new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase() : null;

    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Schedule_ID = this.Scheduleid;
    this._calenderDto.Status = this.status_Type;
    this._calenderDto.StartTime = this.startTime == undefined ? null : formatTime(this.startTime);
    this._calenderDto.Start_time = this.currentTime; 
    this._calenderDto.EndTime = this.endTime == undefined ? null : formatTime(this.endTime);
    // console.log(this._calenderDto,'time of meeting');
    this.CalenderService.GetInsertAttendeeMeetingTime(this._calenderDto).subscribe
      ((data) => {


      }
      )
  }


  timerAttendees:any;


  startMeetingOfAttendees() {   
    if(this.Status1!='Owner'){
      this.Event_acceptandReject(1);
    }
   
    this.meetingOfAttendees = false;
    this.play = true;
    this.status_Type = 'Start';
    this.startTime = new Date();
    //  console.log(this.startTime,'sAtm')
    this.meetingInProgress = true;
    this.GetcompletedMeeting_data();

    let currentDate = new Date();

    // Get the current time components
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();
    let currentSeconds = currentDate.getSeconds();
    this.latestTime = `${this.formatTimeUnit(currentHours)}:${this.formatTimeUnit(currentMinutes)}:${this.formatTimeUnit(currentSeconds)}`;
    this.currentTime = `${this.formatTimeUnit(currentHours)}:${this.formatTimeUnit(currentMinutes)}:${this.formatTimeUnit(currentSeconds)}`;

    // this.currentTime=localStorage.getItem('startTime');

    if (this.exact_start == '' || this.exact_start == null || this.exact_start == undefined) {
      this.exact_start = this.currentTime;
    }


    let timeA = this.parseTime(this.exact_start);
    let timeB = this.parseTime(this.latestTime);
    
    let differenceInMilliseconds = timeB.getTime() - timeA.getTime();
    
    console.log('milliseconds:', differenceInMilliseconds);
    this.elapsedTime = differenceInMilliseconds;

 

    if(this.elapsedTime>60000){
 
      this.elapsedTime += 40000;
    }
   

    this.timerAttendees = setInterval(() => {
      this.elapsedTime = this.elapsedTime + 1000;

      // if (this.elapsedTime >= this.duration) {
      //   this.stopMeetingAttendees();
      // }
    }, 1000);
    // console.log(this.elapsedTime,'ijfbviabfvbsvskjvbzsib')
  }



 
  
  

  pauseTimer(LastPauseTime?, exact_start?, pausetime?) {
    clearInterval(this.timerAttendees);
  
    if (LastPauseTime && exact_start) {
      const pauseTime = new Date(LastPauseTime).getTime();
  
      const [h, m, s] = exact_start.split(':').map(Number);
      const now = new Date();
      const startTime = new Date(now.setHours(h, m, s, 0)).getTime();
  
      // Raw duration in milliseconds
      let pauseDuration = pauseTime - startTime;
  
      // Subtract pausetime (in minutes)
      // if (pausetime) {
        pauseDuration -= pausetime * 1000;

        const staticHours = 2, staticMinutes = 30, staticSeconds = 5;
        const staticDuration = ((staticHours * 60 + staticMinutes) * 60 + staticSeconds) * 1000;
    
        pauseDuration += staticDuration;
      // }

      this.elapsedTime = 0;
      // Add to elapsed time
      this.elapsedTime += pauseDuration;

   
    }
  }
  
  
  

  resumeTimer(from?,pauseTimes?) { 
    if (from) {
      const now = new Date();
      const [h, m, s] = from.split(':').map(Number);
      const startTime = new Date(now);
      startTime.setHours(h, m, s, 0);
  
      // elapsedTime = now - startTime + 60000
      this.elapsedTime = now.getTime() - startTime.getTime() + 39979;
    }

    if (pauseTimes) { 
      this.elapsedTime -= pauseTimes * 1000; // <-- minutes to milliseconds
    }
  
    this.startTimes = new Date(new Date().getTime() - this.elapsedTime); // <-- same like resumeMeeting
  
    if (this.timerAttendees) {
      clearInterval(this.timerAttendees);
    }
  
    this.timerAttendees = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTimes.getTime(); // <-- same logic
    }, 1000);
  }
  
  



  







  Event_acceptandReject(val) { 
    this.EventAction_type=val
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
        
          this._Message = data['message'];
        });

    }
  }





  endTimeAtd: any

  stopMeetingAttendees() {

    clearInterval(this.timerAttendees);
    this.meetingInProgress = false;
    // this.meetingStopped = true;
    this.status_Type = 'End';
    this.endTime = new Date(); // Capture the end time
    // console.log(this.endTime,'EAtm')
    this.durationTimeOfMeeting = this.formatTime(this.elapsedTime);
    //console.log(this.formatTime(this.elapsedTime), 'Meeting ended');
    this.GetcompletedMeeting_data()
  }

  meetingOfAttendees: boolean = false;

  controlAttendees() {
    this.meetingOfAttendees = true;

    if (this.meetingOfAttendees == true) {
      this.stopMeetingAttendees();
      this.InsertAttendeeMeetingTime();
    }

  }

  /////////////////////////////////////////// DMS Side-Bar Start /////////////////////////////////////////////////////////


  selectedEmpId: any = [];
  isDMSDrpDwnOpen: boolean = false;
  Memos_List: any;
  _linkedMemos: number = 0;
  selectedMemos: { MailId: number, Subject: string }[] = new Array();
  originalDMSList: any[];
  _MemosSubjectList: any;
  checkeddms: any = [];
  dmscount: number;
  selectedEmploy_DMS: any = [];



  addNewDMS() {
    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetMemosByEmployeeId();  //drpdwn
    this.meeting_details();
    this.linkSMail=true;
  }



 
  GetDMSList() {
    // this.loadingDMS = false;
    this._LinkService._GetMemosSubject(this.dmsIdjson).subscribe((data) => {
      if (data) {
        this._MemosSubjectList = JSON.parse(data['JsonData']);
       
      }
      this.checkeddms=[];

      this._MemosSubjectList.forEach(element => {
        this.checkeddms.push(element.MailId);
        element.isChecked = true;
      });

      this.checkeddms = this.checkeddms.map((num) => num.toString());
      this.dmscount = this.checkeddms.length;

           
      this._MemosSubjectList = this._MemosSubjectList.map(memo => ({
        ...memo,
        ...this.DMS_Details.find(dms => dms.numberval === memo.MailId)
      }));

      console.log( this._MemosSubjectList,' this._MemosSubjectList',this.DMS_Details );
     
     });

      
    // this.loadingDMS = true;
  }





  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {

        this.Memos_List = JSON.parse(data['JsonData']);
        this._linkedMemos = this.Memos_List.length

        if (this._MemosSubjectList) {
          var recordDMS = this._MemosSubjectList.map(item => item.MailId);

        }
        this.Memos_List = this.Memos_List.filter(subject => !recordDMS.includes(subject.MailId));
        this.originalDMSList = this.Memos_List;

      });

  }

  GetMemosByEmployeeId_new() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {

        this.Memos_List = JSON.parse(data['JsonData']);
        this._linkedMemos = this.Memos_List.length
      });
  }


  selectedChip_DMS(event: MatAutocompleteSelectedEvent): void {
    this._keeppanelopenDMs();
    const selectedEmployee = this.Memos_List.find((fruit) => fruit.MailId === event.option.value);
    if (selectedEmployee) {
      const index = this.selectedEmploy_DMS.findIndex((emp) => emp.MailId === selectedEmployee.MailId);

      if (index === -1) {
        // Employee not found in the selected array, add it
        this.selectedEmploy_DMS.push(selectedEmployee);
        this.selectedEmpId.push(selectedEmployee.MailId);
      } else {
        // Employee found in the selected array, remove it
        this.selectedEmploy_DMS.splice(index, 1);
        this.selectedEmpId.splice(index, 1);
      }
    }
    this.Memos_List = this.Memos_List;
  }

  _keeppanelopenDMs() {
    this._EmployeeListForDropdown = this._EmployeeListForDropdown;
    this.isSelection = true;
    this.openAutocompleteDrpDwn('supportDrpDwnDMS');// open the panel
  }

  RemoveDMS(employee: any): void {

    const index = this.selectedEmploy_DMS.findIndex((emp) => emp.MailId === employee.MailId);
    this.isSelection = false;
    if (index !== -1) {
      this.selectedEmploy_DMS.splice(index, 1);
      this.selectedEmpId.splice(index, 1);
    }
    employee.checked = false;
    this.openAutocompleteDrpDwn_DMS('supportDrpDwnDMS');
  }


  filterEmployeesDMs(input: string): void {
    this.isSelection = true;
    if (input.trim() === '') {
      this.Memos_List = [...this.originalDMSList]
    } else {

      this.Memos_List = this.originalDMSList.filter(item => {
        return item.Subject.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      })
    }

  }

  closeAutocompleteDrpDwn_DMS(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
  }


  openAutocompleteDrpDwn_DMS(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
  }


  linkSMail:boolean=false;
  linkPortf:boolean=false;
  linkProject:boolean=false;

  selectToLinkSMail(){
    this.linkSMail=true; 
  }

  selectToLinkPortf(){
    this.linkPortf=true;
  }

  selectToLinkProject(){
    this.linkProject=true;
  }


  AddDMS_meetingreport() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    if(this.SelectDms!=undefined){
      this._calenderDto.Dms = this.SelectDms.toString()
    }
    
    this._calenderDto.flagid = this.currentEventId == undefined ? 1 : this.currentEventId;

    if (this._calenderDto.Dms) {
      this.CalenderService.NewinsertDMS_meetingreport(this._calenderDto).subscribe
        ((data: any) => {

          if (data.message == '1' || this._calenderDto.flagid == null || this._calenderDto.flagid != null) {
            this.notifyService.showSuccess("SMail added successfully", "Success");
            this.SelectDms = [];
            this.meeting_details();
            this.GetMemosByEmployeeId()
          }
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");

    }

  }



  DMSName: string;

  deleteMemos(MailId: number) {

    this._MemosSubjectList.forEach(element => {
      if (MailId == element.MailId)
        this.DMSName = element.Subject

    });
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.DMSName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {

      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Dms = MailId.toString();
      this._calenderDto.flagid = 1
      if (result === true) {
        this.CalenderService.DeleteDMSOfMeeting(this._calenderDto).subscribe((data) => {
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.meeting_details();
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    });
  }


  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }


  /////////////////////////////////////////// DMS Side-Bar End /////////////////////////////////////////////////////////


  /////////////////////////////////////////// Link Portfolios  Template  Start /////////////////////////////////////////////////////////
  ProjectListArray: any
  PortfolioLists: any
  isPortDrpDwnOpen: any
  ngDropdwonPort: any = [];
  Empty_portDropdown: any;
  _SelectedPorts: any;
  selectedportID: any;
  objPortfolioDto: PortfolioDTO;
  _Message: string;
  _EmployeeListForDropdown: any
  originalProjectList: any[];
  originalPortfolio_list: any[];
  originalparticipants: any[]




  AddPortfolio() {
    document.getElementById("LinkSideBar1").classList.add("kt-quick-panel--on");
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetProjectAndsubtashDrpforCalender();
    this.linkPortf=true;
  }

  closeLinkSideBar() {
    // this.ngDropdwonPort = [];
    this.Portfolio = [];
    // this.selectedEmploy_Projects = [];
    this.projectsSelected = [];
    this.linkSMail=false;
    this.linkPortf=false;
    this.linkProject==false;
    // this.selectedEmploy_DMS = [];
    this.SelectDms = [];
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar2").classList.remove("kt-quick-panel--on");
    if (this.fruitInputpro && this.fruitInputpro.nativeElement.value != undefined) {
      this.fruitInputpro.nativeElement.value = '';
    }

    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    if (this.fruitInputportfolio && this.fruitInputportfolio.nativeElement.value != undefined) {
      this.fruitInputportfolio.nativeElement.value = '';
    }
    if (this.fruitInputs && this.fruitInputs.nativeElement.value != undefined) {
      this.fruitInputs.nativeElement.value = '';
    }

  }

  AddProjects() {
    document.getElementById("LinkSideBar2").classList.add("kt-quick-panel--on");
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.meeting_details();
    this.GetProjectAndsubtashDrpforCalender();
    this.linkProject==true
  }

  subtashDrpLoading:boolean=false;

  GetProjectAndsubtashDrpforCalender() { 
    this.subtashDrpLoading=true;
    this._calenderDto.Project_Code = null;
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        this.subtashDrpLoading=false;
        this.ProjectListArray = JSON.parse(data['Projectlist'])
        // 69 var recordProjects=this.Project_code.map(item=>item.stringval)
        // 69 this.ProjectListArray=this.ProjectListArray.filter(item=>!recordProjects.includes(item.Project_Code))
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        console.log(this.ProjectListArray,'ProjectListArray');
        this.companies_Arr=JSON.parse(data['Client_json']);


        this.originalProjectList = this.ProjectListArray;
     
        this.PortfolioLists = JSON.parse(data['Portfolio_drp']) 
        var recordPortfolio = this.portfolio_Scheduledjson.map(item => item.numberval)
        this.PortfolioLists = this.PortfolioLists.filter(item => !recordPortfolio.includes(item.portfolio_id))
        this.originalPortfolio_list = this.PortfolioLists

        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        var recordparticipants = this.User_Scheduledjson.map(item => item.stringval)
        // this._EmployeeListForDropdown=this._EmployeeListForDropdown.filter(item=> !recordparticipants.includes(item.Emp_No))
        this.originalparticipants = this._EmployeeListForDropdown;
       console.log(this._EmployeeListForDropdown,'_EmployeeListForDropdown')
      });
  }



  closePortDrpDwn() {
    this.isPortDrpDwnOpen = false;
    requestAnimationFrame(() => this.customTrigger.closePanel())
  }

  openPortDrpDwn() {
    this.isPortDrpDwnOpen = true;
    requestAnimationFrame(() => this.customTrigger.openPanel())
  }



  onPrtClicked(e: any) {
    const prtChoosed = this.PortfolioLists.find((p) => p.portfolio_id === e.option.value)
    if (prtChoosed) {
      const index = this.ngDropdwonPort.indexOf(prtChoosed)
      if (index === -1) {
        this.ngDropdwonPort.push(prtChoosed)
      } else {
        this.ngDropdwonPort.splice(index, 1);
      }
    }
    requestAnimationFrame(() => this.customTrigger.openPanel());
  }


  closeAutocompleteDrpDwn(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
  }

  openAutocompleteDrpDwn(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
  }


  Portfolio_Select(selecteditems) {
    let arr = [];
    this.Empty_portDropdown = selecteditems;
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    this.openAutocompleteDrpDwn('PORTFOLIOdrpdwn')
  }


  Portfolio_Deselect(selecteditems) {
    const index = this.ngDropdwonPort.indexOf(selecteditems);
    if (index !== -1) {
      this.ngDropdwonPort.splice(index, 1);
    }

    let arr = [];

    this.Empty_portDropdown = this.ngDropdwonPort;
    if (this.Empty_portDropdown != '') {
      this.Empty_portDropdown.forEach(element => {
        arr.push({ Port_Id: element.Portfolio_ID })
        this._SelectedPorts = arr;
      });
    }
    else {
      this._SelectedPorts = [];
    }
  }

  filterPortfolio(input: string) {
    if (input.trim() === '') {
      this.PortfolioLists = [...this.originalPortfolio_list];
    } else {
      this.PortfolioLists = this.originalPortfolio_list.filter(item => {
        return `${item.Portfolio_Name}-${item.DisplayName}`.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      })
    }
  }


  OnCardClick(P_id: any) {
   
    sessionStorage.setItem('portfolioId', P_id);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }

  OnCardClickUpcoming(Schedule_ID: any) {
    // sessionStorage.setItem('portfolioId', Schedule_ID);
    let name: string = 'Meeting-Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${Schedule_ID}`;
    var myWindow = window.open(myurl, Schedule_ID);
    myWindow.focus();
  }


  GetDMSEventValue: any

  DmsDeleteEvent(Event: any) {
    this.GetDMSEventValue = Event;
  }

  GetportfolioEventValue: any

  portFolioDeletedEvent(Event: any) {
    this.GetportfolioEventValue = Event
  }

  GetProjectEventValue: any
  ProjectsDeletedEvent(Event: any) {
    this.GetProjectEventValue = Event
  }

  selectedValue: number;
  currentEventId: any

  getAllEvents() {

    this.currentEventId = this.selectedValue;


    if (this.agendaInputs != '') {
      this.addAgenda()
    }
  
    if (this.Portfolio != '') {
      this.Addportfolios_meetingreport()
    }
    else if (this.SelectDms != undefined && this.SelectDms != '') {
      this.AddDMS_meetingreport();
    }
    else if (this.MasterCode != '') {
      this.Addproject_meetingreport();
    }
    else if (this.GetDMSEventValue != undefined && this.currentEventId != '') {
    
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Dms = this.GetDMSEventValue.toString();
      this._calenderDto.flagid = this.currentEventId == undefined ? 0 : this.currentEventId;
      if (this._calenderDto.flagid == 1 || this._calenderDto.flagid == 2) {
        this.CalenderService.DeleteDMSOfMeeting(this._calenderDto).subscribe((data) => {
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.meeting_details();
          this.GetDMSEventValue = null
        });
      } else {
        this.notifyService.showError("Action cancelled ", '');
      }
    }
    else if (this.GetportfolioEventValue != undefined && this.currentEventId != '') {
    
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Portfolio = this.GetportfolioEventValue.toString();
      this._calenderDto.flagid = this.currentEventId == undefined ? 0 : this.currentEventId;

      if (this._calenderDto.flagid == 1 || this._calenderDto.flagid == 2) {
        this.CalenderService.DeletePortfoliosOfMeeting(this._calenderDto).subscribe((data) => {
          this.meeting_details()
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.GetportfolioEventValue = null
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    }
    
    else if (this.GetProjectEventValue != undefined && this.currentEventId != '') {
    
      this._calenderDto.Schedule_ID = this.Scheduleid;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = this.GetProjectEventValue.toString();
      this._calenderDto.flagid = this.currentEventId == undefined ? 0 : this.currentEventId;

      if (this._calenderDto.flagid == 1 || this._calenderDto.flagid == 2) {
        this.CalenderService.DeleteProjectsOfMeeting(this._calenderDto).subscribe((data) => {
          this.meeting_details();
          this.GetProjectAndsubtashDrpforCalender();
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.GetProjectEventValue = null
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    }


    // else if (this.GetProjectEventValue != undefined && this.currentEventId != '') {
    
    //   this._calenderDto.Schedule_ID = this.Scheduleid;
    //   this._calenderDto.Emp_No = this.Current_user_ID;
    //   this._calenderDto.Project_Code = this.GetProjectEventValue.toString();
    //   this._calenderDto.flagid = this.currentEventId == undefined ? 0 : this.currentEventId;

    //   if (this._calenderDto.flagid == 1 || this._calenderDto.flagid == 2) {
    //     this.CalenderService.DeleteProjectsOfMeeting(this._calenderDto).subscribe((data) => {
    //       this.meeting_details()
    //       this.notifyService.showSuccess("Deleted successfully ", '');
    //       this.GetProjectEventValue = null
    //     });
    //   }
    //   else {
    //     this.notifyService.showError("Action Cancelled ", '');
    //   }
    // }


  }



  Addportfolios_meetingreport() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Portfolio = this.Portfolio.toString();

    this._calenderDto.flagid = this.currentEventId == undefined ? 1 : this.currentEventId;
    if (this._calenderDto.Portfolio != '') {
      this.CalenderService.Newinsertportfolio_meetingreport(this._calenderDto).subscribe

        (data => {
          this.GetProjectAndsubtashDrpforCalender()
          this.meeting_details();
          this.notifyService.showSuccess("Portfolio(s) added successfully", "Success");
          this.Portfolio = [];
        });
    } else {
      this.notifyService.showInfo("Request Cancelled", "Please select Portfolio(s) to link");
    }


  }


  portfolioName: string;

  DeletePortfolios(port_id: number) {

    this.portfolio_Scheduledjson.forEach(element => {
      if (port_id == element.numberval)
        this.portfolioName = element.Portfolio_Name

    });
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.portfolioName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {

      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Portfolio = port_id.toString();
      this._calenderDto.flagid = 1
      if (result === true) {
        this.CalenderService.DeletePortfoliosOfMeeting(this._calenderDto).subscribe((data) => {
          this.meeting_details()
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    });
  }


  ////////////////////////////////////Link Portfolios  Template  End/////////////////////////////////////////////////////


  /////////////////////////////////////////// Meeting Attendees Side-Bar start /////////////////////////////////////////////////////////


  selectedEmployees: any = [];
  isSupportDrpDwnOpen: boolean = false;
  selectedEmpIds: any = [];
  isSelection: boolean = false;



  selectedChip(event: MatAutocompleteSelectedEvent): void {
    this._keeppanelopen();
    const selectedEmployee = this._EmployeeListForDropdown.find((fruit) => fruit.Emp_No === event.option.value);
    if (selectedEmployee) {
      const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === selectedEmployee.Emp_No);

      if (index === -1) {
        // Employee not found in the selected array, add it
        this.selectedEmployees.push(selectedEmployee);
        this.selectedEmpIds.push(selectedEmployee.Emp_No);
      } else {
        // Employee found in the selected array, remove it
        this.selectedEmployees.splice(index, 1);
        this.selectedEmpIds.splice(index, 1);
      }
    }

    this.fruitInput.nativeElement.value = '';
    this._EmployeeListForDropdown = this._EmployeeListForDropdown;
    // console.log(this.selectedEmpIds, "selected")
  }

  _keeppanelopen() {
    this._EmployeeListForDropdown = this._EmployeeListForDropdown;
    this.isSelection = true;
    this.openAutocompleteDrpDwn('supportDrpDwn');// open the panel
  }


  remove(employee: any): void {

    const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === employee.Emp_No);
    this.isSelection = false;
    if (index !== -1) {
      // Remove the employee from the selectedEmployees array
      this.selectedEmployees.splice(index, 1);
      this.selectedEmpIds.splice(index, 1);

      // console.log(this.selectedEmpIds, "selected supprem")
    }
    employee.checked = false;
    this.closeAutocompleteDrpDwn('supportDrpDwn');
  }

  filterEmployees(input: string): void {
    this.isSelection = true;
    if (input.trim() === '') {
      this._EmployeeListForDropdown = [...this.originalparticipants]
    } else {
      this._EmployeeListForDropdown = this.originalparticipants.filter(item => {
        return item.DisplayName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      })
    }

  }



  closeAutocompleteDrpDwn_part(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
  }


  openAutocompleteDrpDwn_part(Acomp: string) {
    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
  }




  Adduser_meetingreport() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    // this._calenderDto.flagid = this.currentEventId==undefined?1:this.currentEventId;

    if (this.selectedEmployees.length > 0) {
      const x = this.User_Scheduledjson.map(item => item.stringval).concat(this.selectedEmployees.map(item => item.Emp_No));
      this._calenderDto.User_list = x;
      this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe
        (data => {
          this.notifyService.showSuccess("Participant(s) added successfully", "Success");
          this.GetProjectAndsubtashDrpforCalender()
          this.meeting_details()
          this.selectedEmployees = [];
        });
    } else {
      this.notifyService.showInfo("Request Cancelled", "Please select Meeting Attendees to link");
    }
  }

  adminComments: any

  Updating_Adminmeeting(_emp) {

    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = _emp;
    this._calenderDto.IsAdmin = true;
    // this._calenderDto.adminComment=this.adminComments==undefined?null:this.adminComments;
    //  console.log(this.adminComments,'adminComments')
    this.CalenderService.NewAdmin_meetingreport(this._calenderDto).subscribe
      (data => {
        this.meeting_details();
        this.adminComments = [];
      });

  }




  /////////////////////////////////////////// Meeting Attendees Side-Bar End /////////////////////////////////////////////////////////


  /////////////////////////////////////////// Projects Side-Bar start /////////////////////////////////////////////////////////



  selectedEmploy_Projects: any = [];
  selectedProjectcodes: any = [];
  isSupportDrpDwnProjects: boolean = false;
  isSelectionOfProjects: boolean = false;


  selectedChip_project(event: MatAutocompleteSelectedEvent): void {

    this._keeppanelopenProjects();
    const selectedEmployee = this.ProjectListArray.find((fruit) => fruit.Project_Code === event.option.value);
    if (selectedEmployee) {
      const index = this.selectedEmploy_Projects.findIndex((emp) => emp.Project_Code === selectedEmployee.Project_Code);

      if (index === -1) {
        // Employee not found in the selected array, add it
        this.selectedEmploy_Projects.push(selectedEmployee);
        this.selectedProjectcodes.push(selectedEmployee.Project_Code);
      } else {
        // Employee found in the selected array, remove it
        this.selectedEmploy_Projects.splice(index, 1);
        this.selectedProjectcodes.splice(index, 1);
      }
    }

    this.fruitInput.nativeElement.value = '';
    this.ProjectListArray = this.ProjectListArray;
    // console.log(this.selectedProjectcodes, "selected")
  }


  _keeppanelopenProjects() {

    this._EmployeeListForDropdown = this._EmployeeListForDropdown;
    this.isSelectionOfProjects = true;
    this.openAutocompleteDrpDwn('supportDrpDwnpro');// open the panel
  }


  removeProjects(employee: any): void {

    const index = this.selectedEmploy_Projects.findIndex((emp) => emp.Project_Code === employee.Project_Code);
    this.isSelectionOfProjects = false;
    if (index !== -1) {
      // Remove the employee from the selectedEmployees array
      this.selectedEmploy_Projects.splice(index, 1);
      this.selectedProjectcodes.splice(index, 1);

      // console.log(this.selectedProjectcodes, "selected supprem")
    }
    employee.checked = false;
    this.openAutocompleteDrpDwn_Project('supportDrpDwnpro');
  }


  filterProjects(input: string): void {

    this.isSelectionOfProjects = true;
    if (input.trim() === '') {
      this.ProjectListArray = [...this.originalProjectList];
    } else {
      this.ProjectListArray = this.originalProjectList.filter((employee) =>
        employee.BlockNameProject.toLowerCase().includes(input.toLowerCase())
      );
    }
  }


  closeAutocompleteDrpDwn_Project(Acomp: string) {

    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
  }


  openAutocompleteDrpDwn_Project(Acomp: string) {

    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());

  }



  Addproject_meetingreport() { 

    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Project_Code = this.projectsSelected.map(item => item.Project_Code).join(',');
    this._calenderDto.flagid = this.currentEventId == undefined ? 1 : this.currentEventId;

    if (this._calenderDto.Project_Code) {
      this.CalenderService.Newinsertproject_meetingreport(this._calenderDto).subscribe
        (data => {
          this.projectsSelected = [];
          this.MasterCode = [];        
          this.meeting_details();
          this.notifyService.showSuccess("Project(s) added successfully", "Success");
          this.GetProjectAndsubtashDrpforCalender()
        });
    } else {
      this.notifyService.showInfo("Request Cancelled", "Please select Projects(s) to link");
    }

  }




  ProjectsName: any;

  DeleteProject(ProjectCode: number) {

    this.Project_code.forEach(element => {
      if (ProjectCode == element.stringval)
        this.ProjectsName = element.Project_Name
    });

    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.ProjectsName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {


      this._calenderDto.Schedule_ID = this.Scheduleid;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = ProjectCode.toString();
      this._calenderDto.flagid = 1;
      if (result === true) {
        this.CalenderService.DeleteProjectsOfMeeting(this._calenderDto).subscribe((data) => {
          this.meeting_details();
          this.GetProjectAndsubtashDrpforCalender();
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    });
  }

  moreDetails(ProjectCode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }



  newDetailsaction(pcode,acode:string|undefined) {
    let qparams='';
   if(acode!==undefined){
     qparams=`?actionCode=${acode}`;
   }
   let name: string = 'Details';
   var url = document.baseURI + name;
   var myurl = `${url}/${pcode}${qparams}`;
   var myWindow = window.open(myurl,pcode);
   myWindow?.focus();
 }

  /////////////////////////////////////////// Project Side-Bar End /////////////////////////////////////////////////////////
  /////////////////////////////////////////// Previous Meeting Notes Side-Bar start /////////////////////////////////////////////////////////

  Slide_meeting() {
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("Previous_sidebar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetPreviousdate_meetingdata();
    this.setFilterInfo('Agenda',this.filterconfig.sortby);
    this.showDropdown = false;
  }


  Slide_AssignTask() {
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("Assign_Project").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.meeting_details();
  }

  closeAssign() {
    document.getElementById("Assign_Project").classList.remove("kt-quick-panel--on");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";
  }


  closeInfo() {
    document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  Emp_Number: any
  fiterDataOfEmployee: boolean = false;



  getPreviousdate_ByFilter(emp_Number) {

    this.Emp_Number = emp_Number;
    this.GetPreviousdate_meetingdata();
    this.fiterDataOfEmployee = true;

  }



  filterconfig: {
    filterby: 'Agenda' | 'Attendees' | 'All',
    sortby: string
  } = { filterby: 'Agenda', sortby: 'All' };

  setFilterInfo(filterby: 'Agenda' | 'Attendees' | 'All', sortby: string | undefined) {
    this.activeAgendaIndex = 0
    this.filterconfig.filterby = filterby;
    this.filterconfig.sortby = sortby;
    this.clearNotify = true;

  }


  clearNotify: boolean;

  Clear_Filters() {
    document.getElementById("dropd").classList.remove("show");
    this.setFilterInfo('Agenda', this.filterconfig.sortby);
    this.GetPreviousdate_meetingdata();
    this.toggleDropdown()
    this.clearNotify = false;
  }


  Previousdata_meeting: any = [];
  totalPreviousdata_meeting: any;
  attendeesLists: any;
  resultFound: boolean;
  filterByAgenda: any;

    GetPreviousdate_meetingdata() {

    this.fiterDataOfEmployee = false
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Emp_Number === undefined ? 0 : this.Emp_Number;

    this.CalenderService.NewGet_previousMeetingNotes(this._calenderDto).subscribe
      (data => {   
        if (data['previousmeet_data']) {
          this.Previousdata_meeting = JSON.parse(data['previousmeet_data']);
          this.filterByAgenda = this.Previousdata_meeting[0].Details

          this.sortbyAgendaList(0, this.filterByAgenda[0]);
          this.sortbyFilterList(0, this.filterByAgenda[0])
           
          this.totalPreviousdata_meeting = this.Previousdata_meeting.length;

         if(this.filterconfig.filterby=='Attendees' && this.filterconfig.sortby == 'All'){
          this.addDesignationAndCompanyToMeetingDatas();  
         }
         
          this.resultFound = true
        } else {
          this.resultFound = false
        }

        this.attendeesLists = JSON.parse(data['attendeesList'])
        // console.log(this.attendeesLists,'this.attendeesLists')
        this.Emp_Number = 0
      });
  }


  remainingUsers :any

  addDesignationAndCompanyToMeetingDatas(){

    console.log(this.User_Scheduledjson,'User_Scheduledjson' ,(this.Createdby));
    console.log(this.Previousdata_meeting,'User_Scheduledjson')


    this.remainingUsers = this.User_Scheduledjson.filter(
      user => !this.Previousdata_meeting[0].Details.some(detail => detail.Emp_no === user.stringval)
    );
    
    console.log(this.remainingUsers);
 
  }


  //69 Remove it after 2 day now date is 13-01-2025 addDesignationAndCompanyToMeetingData() {
   
  //   this.User_Scheduledjson.forEach((user) => {
  //     let isMatched = false;
  
     
  //     this.Previousdata_meeting.forEach((meeting) => {
  //       if (meeting.Details && meeting.Details.length > 0) {
  //         meeting.Details.forEach((detail) => {
  //           if (user.stringval === detail.Emp_no) {
              
  //             detail.Emp_Name = user.TM_DisplayName;
  //             detail.Emp_no = user.stringval;
  //             detail.Designation_Name = user.Designation_Name;
  //             detail.Com_Name = user.Com_Name;
  //             detail.AgendaNotes = detail.AgendaNotes || [];
  //             detail.MatchText = `Matched with GetPreviousdate_meetingdata for ${user.TM_DisplayName}`;
  //             isMatched = true;
  //           }
  //         });
  //       }
  //     });
  
  //     // Add unmatched user at the end of Details
  //     if (!isMatched) {
  //       this.Previousdata_meeting.forEach((meeting) => {
  //         if (!meeting.Details) meeting.Details = [];
  //         meeting.Details.push({
  //           Emp_Name: user.TM_DisplayName,
  //           Emp_no: user.stringval,
  //           Designation_Name: user.Designation_Name,
  //           Com_Name: user.Com_Name,
  //           AgendaNotes: [],
  //         });
  //       });
  //     }
  //   });
  
  //   console.log(this.Previousdata_meeting, "Updated Previousdata_meeting with matched and unmatched data");
  //69 Remove it after 2 day now date is 13-01-2025 }
  








  

  toggleAccordion(pause: any) {
    // Your implementation here
  }

  activeAgenda: any = null;
  Employees: any

  sortbyAgendaList(index, agendaDetails) {
    this.activeAgenda = agendaDetails;
    this.Employees = agendaDetails.Employees
    // this.Employees=agendaDetails
  }
  AgendaNotes: any
  activeAgendasList: any

  sortbyFilterList(index, agendaDetails) {

    this.activeAgendasList = agendaDetails
    this.AgendaNotes = agendaDetails.AgendaNotes

  }

  /////////////////////////////////////////// Previous Meeting Notes Side-Bar End /////////////////////////////////////////////////////////

  /////////////////////////////////////////// Agenda Start /////////////////////////////////////////////////////////





  mainAgendaCount:any;

  MainAgendaCount(){
 
    var count =this.agendaInput;
    if(count){
      this.mainAgendaCount = count.length;
    }else{
      this.mainAgendaCount =  null;
    }
  }

  

  agendaInput: string | undefined;
  allAgendas: any = [];
  agendasAdded: number = 0;
  status_type: any;



  addAgenda() {

    if (this.mainAgendaCount > 0 && this.mainAgendaCount < 101) {
      if (this.agendaInput && this.agendaInput.trim().length > 0) {
        this.agendasAdded += 1;
        const agenda = {
          id: this.agendasAdded,
          name: this.agendaInput
        };
        this.allAgendas.push(agenda);
        const mtgAgendas = JSON.stringify(this.allAgendas.length > 0 ? agenda : []);

        this._calenderDto.json = mtgAgendas;
        this._calenderDto.flagid = 1;
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.Current_user_ID;



        this.CalenderService.NewAddAgendas(this._calenderDto).subscribe
          (data => {
            this.meeting_details();
            // this.notifyService.showSuccess("Agenda added successfully ", '');
          })
        this.agendaInput = undefined;
      }
    } else if (this.agendaInput && this.agendaInput?.trim().length > 100) {
      this.notifyService.showInfo("Sorry, agenda name is too long.", 'Please shorten it.');
    }

    this.mainAgendaCount =  null;
  }




  updateAgenda1(index: number) {

    const tf: any = document.getElementById(`agenda-text-field-${index}`);
    const newname = tf.value;

    if (newname.trim()?.length > 0 && newname?.length < 100) {
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.flagid = 2;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.json = JSON.stringify({ id: this.Agendas_List[index].AgendaId, name: newname });

      this.CalenderService.NewEditsAgendas(this._calenderDto).subscribe
        (data => {
          this.meeting_details();
          this.notifyService.showSuccess("Renamed successfully ", '');
        })
    } else if(newname.trim()?.length == 0){
      this.notifyService.showInfo("Please enter atleast one word","");
    } else {
      this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
    }
  }

  AgendasName: string;
  AgendaListRedirect: any = 1
  isFirstAgendaIdMatch: boolean;

  deleteAgenda(AgendaId: number) {
    this.isFirstAgendaIdMatch = this.Agendas_List.length > 0 && this.Agendas_List[0].AgendaId === AgendaId;

    const AgendasNames = this.Agendas_List.find(element => element.AgendaId === AgendaId);
    if (AgendasNames) {
      this.AgendasName = AgendasNames.Agenda_Name;
    }
    // this.Agendas_List.forEach(element => {
    //     this.AgendasName = element.Agenda_Name
    // });
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.AgendasName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {

      const agenda = {
        id: AgendaId,
        name:this.AgendasName,
       
      };
      this.allAgendas.push(agenda);
      const mtgAgendas = JSON.stringify(this.allAgendas.length > 0 ? agenda : []);
      this.Schedule_ID = this.Scheduleid;

      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.json = mtgAgendas;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.flagid = 3;

      var count = this.Agendas_List.length
      if (result === true && count > 1) {
        this.CalenderService.NewDeleteAgendas(this._calenderDto).subscribe((data) => {
          
          this.meeting_details()  
   
          // this.notifyService.showSuccess("Deleted successfully ", '');
          if (this.isFirstAgendaIdMatch) {
            this.currentAgendaView = 0;

          } else {
       
            if(this.currentAgendaView){
              this.currentAgendaView = this.currentAgendaView - 1;
            }
           
            this.GetAssigned_SubtaskProjects()
          }
        });
      } else if (count == 1) {

        this.notifyService.showWarning("At least one Agenda is mandatory in the meeting ", '');
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    });
  }

  unnecessnotification:boolean=true;

  unnecessarynotify(){
   this.unnecessnotification=false
}
  notifyRepeat:boolean;
  AgendaId: any;
  agendaName:any

  showAgendaDetails(item, index) {
   console.log(item, index,'click agenda')
    if (this.meetingStarted == true || this.Meetingstatuscom == 'Completed') {
    
      this.AgendaId = item.AgendaId
      this.agendaName = item.Agenda_Name
      this.currentAgendaView = index

      this.GetAssigned_SubtaskProjects()
    } else if (this.Meetingstatuscom != 'Completed' && this.unnecessnotification==true ) { 
      this.notifyService.showInfo("The meeting hasn't started yet", "")
    }
    this.unnecessnotification=true;
    this.notifyRepeat=false;
  }


  currentAgendaProject() {
    this.currentAgendaView = undefined;
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

    $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
    $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
    $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
    $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
    $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
    $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
  }

  Meetingnotes_time: any = [];
  loadagenda: boolean = false;

  completeAgenda() {

    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;
    this.CalenderService.NewUpdateCompleteAgenda(this._calenderDto).subscribe((data) => {
      this.meeting_details();
      this.notifyService.showSuccess("Agenda completed", "Success");
    })
  }






  UndoCompleteAgenda() {
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;

    this.CalenderService.NewUpdateUndoCompleteAgenda(this._calenderDto).subscribe((data) => {
      this.meeting_details();
      this.notifyService.showSuccess("Removed from complete", "Success");
    })
  }

  /////////////////////////////////////////// Agenda End /////////////////////////////////////////////////////////

  /////////////////////////////////////////// Meeting Notes Start /////////////////////////////////////////////////////////
  Notes_Type: any
  _meetingNotesAry: any = [];
  leave: boolean = false;
  StatusType: boolean = true;

  leavemeet(event: any) {

    this.StatusType = true;
    if (this.StatusType == true) {
      this.leave = true;

      this.addBulletPointsOnEnter(event)
      setTimeout(() => {
        this.delayedFunction();
      }, 2000);
      this.notifyService.showSuccess("Meeting left", "Success");
      // this.InsertstartandendTimerMeeting('Leave');
    }
    else {
      this.notifyService.showInfo("Something went wrong", "");
    }
  }

  delayedFunction() {
    console.log('Function called after 5 seconds');
    window.close();
  }


  GetNotedata() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this.CalenderService.NewGetMeetingnote_comp(this._calenderDto).subscribe
      (data => {
        if(data && data["Checkdatetimejson"]){
          this._meetingNotesAry = JSON.parse(data["Checkdatetimejson"]);
        } 
      })
  }




  addBulletPointsOnEnter(event: any) {
   
    // event.preventDefault();
    // if (event.keyCode === 32 || event.keyCode === 13 || this.leave == true || event.type === 'paste' || event.keyCode === 8) {
    
      // Replace newline characters with <br> tags
  
      if(event.type === 'paste'){     
        this.savePastedText(event);
        // const pastedText = event.clipboardData?.getData('text/plain') || '';
        // this.Notes_Type= this.Notes_Type + pastedText ;
      }
 
    
     if(this.currentAgendaView != undefined && this.currentAgendaView != null && this.CurrentNotesCount[this.currentAgendaView]){
      this.Notes_Type= this.Notes_Type = this.Notes_Type.replace(/<\/?p[^>]*>|<\/?o:p>/g, '').trim();
      if (this.Notes_Type) {  
        this.CurrentNotesCount[this.currentAgendaView].NotesCount = 1;
      } else {
      this.CurrentNotesCount[this.currentAgendaView].NotesCount = 0;
    }
  }



      this.Notes_Type = this.Notes_Type?.replace(/<p>/g, '\n').replace(/<\/p>/g, '');
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Meeting_notes = this.Notes_Type=="<div><br></div><div></div>" || this.Notes_Type==" " || this.isNotesTypeEmpty(this.Notes_Type) ?"":this.Notes_Type;
      this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;
     
      this.CalenderService.InsertAgendameeting_notes(this._calenderDto).subscribe
        (data => {
          console.log(data, 'Private notes');
          this.GetNotedata();
          // this.GetAttendeesnotes();
          // this.GetMeetingnotes_data();
          // window.close();
        });

  }


  isNotesTypeEmpty(notes: string): boolean {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = notes;

    // Remove all font tags and get the text content
    const sanitizedText = tempDiv.innerText.replace(/\s+/g, '');
    return sanitizedText.length === 0;
  }


  @ViewChild('ANGEDITOR') angulareditor:any;
  savePastedText(event:any){
   setTimeout(()=>{

    this.Notes_Type= this.angulareditor.textArea.nativeElement.innerHTML;
    this.Notes_Type.trim();
    this.Notes_Type = this.Notes_Type?.replace(/<p>/g, '\n').replace(/<\/p>/g, '');
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Meeting_notes = this.Notes_Type;
    this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;

    this.CalenderService.InsertAgendameeting_notes(this._calenderDto).subscribe
      (data => {
       
        this.GetNotedata();
        // this.GetAttendeesnotes();
        // this.GetMeetingnotes_data();
        // window.close();
      });
   },1000);

  }

  private_User:any
  privateNotes:any;

  GetMeetingnotes_data() {
    console.log('1')
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;

    this.CalenderService.GetAgendaMeetingnotes_data(this._calenderDto).subscribe
      (data => {

        this.Meetingnotes_time = JSON.parse(data['Checkdatetimejson']);

        if (this.Meetingnotes_time == '' || this.Meetingnotes_time == undefined) {
          this.Notes_Type = ''
        } else {
          this.Notes_Type = this.Meetingnotes_time[0]['Meeting_notes'];
          this.privateNotes = this.Notes_Type.length;
          console.log(this.privateNotes,'privateNotes')
        }
        this.GetAttendeesnotes();

      });

  }


  completeSelectedAgenda() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.AgendaId = this.Agendas_List[this.currentAgendaView].AgendaId;
    this.CalenderService.GetAgendaMeetingnotes_data(this._calenderDto).subscribe((data: any) => {
      if (data) {
        const Mtgnotes_time = JSON.parse(data['Checkdatetimejson']);
        this.completeAgenda();
      }
    });
  
  }


  /////////////////////////////////////////// Meeting Notes End /////////////////////////////////////////////////////////

  /////////////////////////////////////////// Private Notes sidebar Start /////////////////////////////////////////////////////////

  Private_Notes: any

  getPrivateNotesOnEnter(event: any) {
    var listop = this.Private_Notes
    console.log(listop)
  }


  /////////////////////////////////////////// Private Notes sidebar End /////////////////////////////////////////////////////////


  /////////////////////////////////////////// List of Attachment sidebar start /////////////////////////////////////////////////////////

  Attachment_views() { 
    document.getElementById("Attachment_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    this.meeting_details();
    console.log('Attachments_ary',this.Attachments_ary);
  }


  closedarBar() {
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("Activity_Log").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
  }

  filterText: string;
  SearchItem: string;

  filterSearch() {
    this.filterText = "";
    this.SearchItem = "";
  }



  _lstMultipleFiales: any;
  myFiles: string[] = [];




onFileChange(event) {
  if (event.target.files.length > 0) {
    const allowedTypes = [
      "image/*", "video/*", "audio/*", "application/pdf", "text/plain", "text/html", "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/json", "application/xml", "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    var length = event.target.files.length;
    for (let index = 0; index < length; index++) {
      const file = event.target.files[index];
      const fileName = file.name;
      const contentType = file.type;
      if (!allowedTypes.some(type => file.type.match(type))) {
        // Show a sweet alert popup for unsupported file types
        Swal.fire({
          title: `This File "${fileName}" cannot be accepted!`,
          text: `Supported file types: Images, video, audio, PDFs, Text, HTML, Word, JSON, XML, PowerPoint, Excel.`
          //  "This file cannot be accepted!"
          });
        continue;
      }

      // Skip file if its name already exists in either array
      const fileAlreadyExists =
        this.Attachments_ary.some(att => att.File_Name === fileName) ||
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
      this.myFiles.push(file.name);

      var d = new Date().valueOf();
    
      this._lstMultipleFiales = [...this._lstMultipleFiales, {
        UniqueId: d,
        FileName: file.name,
        Size: `${Math.ceil(file.size / 1024)}`,
        Files: file
      }];
    }
  }
  (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
}





  onFileChange1(event) {
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
            text: `Supported file types: Images, "video/*", "audio/*", PDFs, Text, HTML, Word, JSON, XML, PowerPoint, Excel.`
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
    // console.log(this._lstMultipleFiales,'file')
  }





  RemoveExistingAttachment(_id) {
  
    // this.Attachment12_ary.forEach(element => {
    //   if (element.file_id == _id) {     
    //   // this.RemovedAttach.push(element.Cloud_Name)
    //     this.RemovedFile_id.push(element.file_id);  
    //   }
    // });

    this.Attachments_ary.forEach(element => {
      if (_id == element.file_id)
        // this.AttachmentName = element.File_Name;
      this.RemovedFile_id.push(element.file_id);  

    });
    // var removeIndex = this.Attachments_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    // this.Attachments_ary.splice(removeIndex, 1);
  }






  SelectedAttachmentFile: any
  EventNumber: any;
  progress: number = 0;
  Attamentdraftid:any;
  showFileUpload = false; // Controls visibility
  filesUploadingCount = 0; // Number of files uploading
  processingFile = false; // Processing state
  processingComplete = false; // Processing complete state
  uploadingFileName:any;

  OnSubmitAttachment() {

    if (this.SelectedAttachmentFile != undefined || this.RemovedFile_id.length > 0) {

      if(this._lstMultipleFiales.length > 0){
        this.processingFile = false;
        this.progress=0;
        this.showFileUpload = true; // Show upload elements
        this.filesUploadingCount = this._lstMultipleFiales.length;
        if(this.filesUploadingCount === 1){
          this.uploadingFileName = this._lstMultipleFiales[0].FileName
        }
      }
    

      this.EventNumber = this.EventScheduledjson[0].EventNumber;
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

     
       this._calenderDto.flagid = this._PopupConfirmedValue;
      
         
      frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);
      frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
      frmData.append("CreatedBy", this.Current_user_ID); 
      frmData.append("Schedule_ID", this._calenderDto.Schedule_ID.toString());
      frmData.append("flag_id", this._calenderDto.flagid.toString());
      frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');
      frmData.append("Schedule_date",this._StartDate.toString());
  
      if (this._attachmentValue == 1) {
        // this.CalenderService.EditUploadCalendarAttachmenst(frmData).subscribe(
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
                  this.filesUploadingCount = 0;
                  this.processingFile = true;
                  this.CalenderService._AzureUpdateCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                    console.log(event1,"azure data");
                    var myJSON = JSON.stringify(event1);
                    let responseBody = JSON.parse(myJSON).body; 
                    console.log('User successfully created!', responseBody);
                    if (responseBody === 1) { 
                      this.processingFile = false;                
                      this.processingComplete = true;
                                  
                      setTimeout(() => {
                        this.processingComplete = false; 
                        this.attach_btn();
                        this.notifyService.showSuccess("Uploaded successfully ", '');                
                        this.meeting_details();
                        this.showFileUpload = false;                            
                      }, 2000);     
                  }else if (responseBody === 0) { 
                    this.notifyService.showSuccess("Deleted successfully", '');                            
                      this.meeting_details();     
                      this.RemovedFile_id = [];                                                            
                  }
                  //  this._Message = (JSON.parse(myJSON).body);         
                  });
                }

                // (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                // this._lstMultipleFiales = [];

                // setTimeout(() => {
                //   this.progress = 0;
                // }, 1500);

                //69 (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                // (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";         
                document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
            }
          }
        )
      }
      this._lstMultipleFiales = [];
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select Attachment(s) to link");
    }
  }




  TImetable() {
    let now = moment(new Date());
    let _shr = now.hour();
    let _s = now.minute();

    if (_s >= 0 && _s < 15) {
      this.Startts = this.formatTimes(_shr, 30);
      this.Endtms = this.formatTimes(_shr, 45);
    } else if (_s >= 15 && _s < 30) {
      this.Startts = this.formatTimes(_shr, 45);
      this.Endtms = this.formatTimes(_shr + 1, 0);
    } else if (_s >= 30 && _s < 45) {
      this.Startts = this.formatTimes(_shr + 1, 0);
      this.Endtms = this.formatTimes(_shr + 1, 15);
    } else if (_s >= 45 && _s < 59) {
      this.Startts = this.formatTimes(_shr + 1, 15);
      this.Endtms = this.formatTimes(_shr + 1, 30);
    }
  }


  formatTimes(hour, minute) {
    return moment({ hour, minute }).format("hh:mm A");
  }

  rapeatLink_Details:boolean=true;
  switChRecurrenceValue:boolean=false;

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

          // new code start 69
    
          if(this.eventRepeat==true && (this._StartDate == this.disablePreviousTodayDate)){
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
        this._StartDate = moment(this._StartDate).format("YYYY-MM-DD").toString();
       
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
        // var vLink_Details = "Link_Details";
        // let link_d=this.Link_Details;
        // if(this.Link_Details){
        //   link_d=this.Link_Details.replace(/&#160;/g, ' ');
        //   link_d=this.anchoredIt(link_d);
        // }
        // element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';

        
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



   
      if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
        frmData.append("Attachment", "true");
        _attachmentValue = 1;


        if(this._lstMultipleFiales.length > 0){
          this.progress=0;
          this.showFileUpload = true; // Show upload elements
          this.filesUploadingCount = this._lstMultipleFiales.length;
          if(this.filesUploadingCount === 1){
            this.uploadingFileName = this._lstMultipleFiales[0].FileName
          }
        }
        

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
              _attachmentValue = 0;
              frmData.append("Attachment", "false");
            }

          frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
          frmData.append("CreatedBy", this.Current_user_ID.toString());
          this._calenderDto.draftid = this.draftid? this.draftid : 0;
          frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');
          this._calenderDto.attachment =this._attachmentValue.toString();

          console.log(JSON.stringify(finalarray), "finalarray")
        
      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {
          this.Attamentdraftid= data['draftid']
          frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);
        
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

                    var myJSON = JSON.stringify(event);
                    this._azureMessage = (JSON.parse(myJSON).body).message;

                    if(this._azureMessage=="1"){ 
                      this.filesUploadingCount = 0;
                      this.processingFile = true;
                      this.CalenderService._AzureUploadCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                        console.log(event1,"azure data");
                        var myJSON = JSON.stringify(event1);
                        let responseBody = JSON.parse(myJSON).body; 
                    
                        if (responseBody === 1) { 
                          this.processingFile = false;                
                          this.processingComplete = true;                                     
                          setTimeout(() => {
                            this.processingComplete = false; 
                            this.notifyService.showSuccess(this._Message, "Success");              
                            this.meeting_details();
                            this.showFileUpload = false;                            
                          }, 2000);     
                         }
            
                      });
                    }

                    // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                    // (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    this._lstMultipleFiales = [];
                    // empty(this._lstMultipleFiales);
                    // alert(this._lstMultipleFiales.length);
                    // setTimeout(() => {
                    //   this.progress = 0;
                    // }, 1500);

                    (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                    (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
                }
              }
            )
          }
          //UploadCalendarAttachmenst
          // console.log(data, "m");
          this._Message = data['message'];
          if (this._Message == "Updated Successfully" && this.filesUploadingCount == 0) {
            if (this.draftid != 0) {
              // this.Getdraft_datalistmeeting();
              this.draftid = 0
            }
            this.notifyService.showSuccess(this._Message, "Success");              
                            
            // this.notifyService.showSuccess(this._Message.split(' ').map((word, index) => index === 1 ? word.charAt(0).toLowerCase() + word.slice(1) : word).join(' '), "Success");
          }
          else if(this._Message != "Updated Successfully" && this.filesUploadingCount == 0) {
            this.notifyService.showError(this._Message, "Failed");
          }


          // this.GetScheduledJson();
          this.Title_Name = null;
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.agendaInputs=undefined;
          this.agendacharacterCount =  null;         
          this.mainAgendaCount =  null;
          this.agendaInput=undefined;
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








     AttachmentName: string;

     DeleteAttachment(attach_id: number) {

    this.Attachments_ary.forEach(element => {
      if (attach_id == element.file_id)
        this.AttachmentName = element.File_Name

    });

    // let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.AttachmentName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {

      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.fileid  = attach_id.toString();
      console.log(this._calenderDto,'this._calenderDto')
      this._calenderDto.flagid = 1
      if (result === true) {
        this.CalenderService.DeleteAttachmentOfMeeting(this._calenderDto).subscribe((data) => {
          this.meeting_details()
          this.notifyService.showSuccess("Deleted successfully", '');
        });
      }
      else {
        this.notifyService.showError("Action cancelled ", '');
      }
    });
  }


    /////////////////////////////////////////// List of Attchment sidebar End /////////////////////////////////////////////////////////






  /////////////////////////////////////////// assign task start ///////////////////////////////////////////////////////////////////
  _TodoList: any = [];
  todocount: number;
  text: any = [];
  _Demotext: any;
  CompletedMeeting_notes: any;
  Meetingstatuscom: string;
  // Meetingnotescom: string;
  // isCheckboxDisabled: boolean = false;
  // Userstatus: string;
  // Isadmin: boolean = false;
  // unsubscribe: boolean = false;

  saveAttendeeTime() {
    if (this.meetingInProgress) {
      const spend_time = this.elapsedTime;
      localStorage.setItem('mtg_spend_time', spend_time.toString());
    }
  }

  getAttendeeTime() {
    if (this.meetingStarted) {
      const spend_time = localStorage.getItem('mtg_spend_time');
      if (spend_time) {
        this.elapsedTime = +spend_time;
      }
    }
  }


  AutoComplete: boolean;

  GetcompletedMeeting_data() {


    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this.CalenderService.NewGetcompleted_meeting(this._calenderDto).subscribe
      (data => {

        this.CompletedMeeting_notes = JSON.parse(data['meeitng_datajson']);
        console.log(this.CompletedMeeting_notes, 'CompletedMeeting_notes')
        this.meeting_details();
        if (this.CompletedMeeting_notes != null && this.CompletedMeeting_notes != undefined && this.CompletedMeeting_notes != '') {
          this.Meetingstatuscom = this.CompletedMeeting_notes[0]['Meeting_status'];
          this.AutoComplete = this.CompletedMeeting_notes[0].AutoComplete;
      
          this.AttendeeCount = this.CompletedMeeting_notes[0].online_count;
          this.actualTime_S = this.CompletedMeeting_notes[0].Actual_Start;
         
          this.separateTime(this.actualTime_S);
          this.actualTime_E = this.CompletedMeeting_notes[0].Actual_End;
           console.log( this.actualTime_E,' this.actualTime_E')
          this.separateTime(this.actualTime_E);
          this.actualTime_dur = this.CompletedMeeting_notes[0].Actual_Dur;
          this.convertDuration(this.actualTime_dur);
          this.AverageDuration = this.CompletedMeeting_notes[0].Average_Dur;
          this.convertDuration(this.AverageDuration);

          const startTime = moment(this.actualTime_S, 'hh:mm A');
          const endTime = moment(this.actualTime_E, 'hh:mm A');
          const duration = moment.duration(endTime.diff(startTime));
          const durationInMinutes = duration.asMinutes();

          // Convert duration to HH:mm format
          const hours = Math.floor(durationInMinutes / 60);
          const minutes = durationInMinutes % 60;
          this.actualDuration = moment({ hour: hours, minute: minutes }).format('HH:mm');
          // console.log(duration.asMinutes(), 'duration in minutes');



          // if (this.Meetingstatuscom == undefined || this.Meetingstatuscom != "Completed" || this.Meetingstatuscom == null) {
          //     this.interval = setInterval(() => {
          //       this.GetAttendeesnotes();
          //     }, 3000);
          //   }
          if (this.Meetingstatuscom == "Completed") {
            this.isCheckboxDisabled = true;
          }
          // } else if(this.meetingInProgress){
        } else {
          this.interval = setInterval(() => {
            // this.saveAttendeeTime();
            this.GetAttendeesnotes();
            if(this.currentAgendaView == undefined){
              // this.GetMeetingActivity();
            }
          
            //  }, 1000);

          }, 1000);
        }
        // this.Userstatus = this.CompletedMeeting_notes[0]['Status'];
        // this.Meetingnotescom = this.CompletedMeeting_notes[0]['Notes'];
        // this.GetNotedata();
        //   if (this.Meetingstatuscom == "Completed") {
        //     this.isCheckboxDisabled = true;
        //   }
        //   else {
        //     this.interval = setInterval(() => {
        //       this.GetNotedata();
        //     }, 5000);
        //   }
        //   console.log(this.CompletedMeeting_notes, 'notes11122')
      });
  }

  starthour: any;
  endhour: any;
  startperiod: any;
  endperiod: any;
  separateTime(time: string) {
  
    const [hour, period] = time.split(' ');
    if (time == this.actualTime_S) {
      this.starthour = hour;
      this.startperiod = period;
    }
    else if (time == this.actualTime_E) {
      this.endhour = hour;
      this.endperiod = period;
    }
  }




  actualTime_dur: any;
  meetinghours: any;
  meetingminutes: any;
  meetingseconds: any;
  avghours: any;
  avgminutes: any;
  avgseconds: any;

  convertDuration(totalMinutes: number) {
    if (totalMinutes == this.actualTime_dur) {
      this.meetinghours = Math.floor(totalMinutes / 60);
      this.meetingminutes = totalMinutes % 60;
      this.meetingseconds = 0; // Assuming no seconds as input is in minutes
    }
    // if (totalMinutes == this.AverageDuration) {
    //   this.avghours = Math.floor(totalMinutes / 60);
    //   this.avgminutes = totalMinutes % 60;
    //   this.avgseconds = 0; // Assuming no seconds as input is in minutes
    // }
  }

  ActionedAssigned_Josn: any = [];
  ActionedSubtask_Json: any = [];
  assigncount: number;
  isSubmitting: boolean = false;
  assignTaskExists:any;

  onInputChange() {
    // Here you can reset the isSubmitting flag if needed based on input change
    this.isSubmitting = false;
  }

   typeoftask: any = "IFRT";

  EnterSubmit(_Demotext) {

    if (this.isSubmitting) return;

    this.assignTaskExists = [...this.TaskList].some(item => item.Task_Name?.trim() === this._Demotext.trim());

 
    if (_Demotext.length <= 100 && !this.assignTaskExists) {
      if (_Demotext != "" && _Demotext != undefined && _Demotext != null) { 
        this.isSubmitting = true;
        this._ObjAssigntaskDTO.CategoryId = 2411;
        this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
        this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;  
        this._ObjAssigntaskDTO.TaskName = _Demotext;
        this._ObjAssigntaskDTO.Schedule_ID = this.Schedule_ID;
        this._ObjAssigntaskDTO.Agenda_Id = this.AgendaId;

        this.ProjectTypeService._NewInsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
          (data) => {
            this._TodoList = JSON.parse(data['Todomeeting']);
            console.log(this._TodoList, '_TodoList')
            this.todocount = this._TodoList.length;
            let message: string = data['Message'];
            this._Demotext = "";
            this.isSubmitting = false;
            this.selectedText = "";
            // this.editorFocused=false;
            //this.GetAssignTask();
            this.notifyService.showSuccess("Successfully", "Added");

          
              this.CurrentTaskCount[this.currentAgendaView].TaskCount = 1;
         
          });
      }
    } else if(!this.assignTaskExists) {
      this.notifyService.showWarning("Maximum 100 characters are allowed", 'Please shorten it.');
    }

  }


  selectedAttendeesList = new Set<any>();
  assignCount:any

  onCheckboxChange(event: any, employee: any) {
    if (event.checked) {
      this.selectedAttendeesList.add(employee);
    } else {
      this.selectedAttendeesList.delete(employee);
    }
    this.assignCount = this.selectedAttendeesList.size;
    console.log('Selected Employees:', this.selectedAttendeesList);
  }

  listAttendees: any;
  Assigntext: any;
  datestrStart: any;
  datestrEnd: any;
  AssignID: any;
  Task_name: any;

  GetAssignName_id(taskName, id) {
    this.AssignID = id;
    this.Task_name = taskName
  }

  addSelectedEmployees() {

    const selectedArray = Array.from(this.selectedAttendeesList)
    this.listAttendees = selectedArray.map((item) => item.Emp_No).join(',')

    if (this.listAttendees.length > 0) {
      this.BsService.SetNewAssignId(this.AssignID);
      this.BsService.SetNewAssignedName(this.Task_name);
      let typeoftask: any = "IFRT";
      this.BsService.setNewTypeofTask(typeoftask);
      this.datestrStart = moment(new Date()).format();
      this.datestrEnd = moment(new Date()).format();

      this._ObjAssigntaskDTO.AssignId = this.AssignID;
      this._ObjCompletedProj.PageNumber = 1;
      this._ObjCompletedProj.Emp_No = this.Current_user_ID;
      this._ObjCompletedProj.Mode = 'AssignedTask';
      this._ObjAssigntaskDTO.TaskName = this.Task_name;
      this._ObjAssigntaskDTO.TypeOfTask = 'IFRT';
      this._ObjAssigntaskDTO.ProjectType = "";
      this._ObjAssigntaskDTO.AssignTo = this.listAttendees;


      const fd = new FormData();
      fd.append("AssignedBy", this.Current_user_ID);
      fd.append("AssignTo", this.listAttendees);
      fd.append("TaskName", this._ObjAssigntaskDTO.TaskName);
      fd.append("CreatedBy", this._ObjAssigntaskDTO.CreatedBy);
      fd.append("AssignId", this.AssignID);
      fd.append("ProjectType", this._ObjAssigntaskDTO.ProjectType);
      fd.append("StartDate", this.datestrStart);
      fd.append("EndDate", this.datestrEnd);
      fd.append("ProjectDays", '0');
      fd.append("Desc", "");
      fd.append("Remarks", "");
      fd.append("TypeofTask", this._ObjAssigntaskDTO.TypeOfTask);


      this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
        (data) => {
          let message: string = data['Message'];
          this.notifyService.showSuccess("Task sent to assign projects", message);
          this.GetAssigned_SubtaskProjects()
          document.getElementById("schedule-event-modal-backdrop").style.display = "none";
          document.getElementById("projectmodal").style.display = "none";
          this.Assigntext = '';
          this.selectedAttendeesList.clear();
        });
    }
    else {
      this.notifyService.showInfo("Please select atleast one user to assign", '');
    }

  }




  _taskName: any;
  task_id: any;

  GetProjectTypeList() {

    this._taskName = this.Task_name;
    this.task_id = this.AssignID;


    this.router.navigate(["Meeting-Details/" + this.Scheduleid + "/ActionToAssign/3"]);
    this.BsService.SetNewAssignId(this.task_id);
    this.BsService.SetNewAssignedName(this._taskName);
    let typeoftask: any = "IFRT";
    this.BsService.setNewTypeofTask(typeoftask);

    // this._ObjCompletedProj.PageNumber = 1;
    // this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    // this._ObjCompletedProj.Mode = 'AssignedTask';
    // this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    //   (data) => {

    //     this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
    //   });
    //document.getElementById("mysideInfobar_AssignTask").classList.add("kt-quick-panel--on");


    document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#mysideInfobar").scrollTop(0);
    this.Assigntext = ''
  }



  _AssignId: any;
  ActionToProject_Click(taskName, Assignid) {

    this._taskName = taskName;
    this._AssignId = Assignid;
    this.router.navigate(["Meeting-Details/" + this.Schedule_ID + "/ActionToProject/7"]);
    this.BsService.SetNewAssignId(this._AssignId);
    this.BsService.SetNewAssignedName(this._taskName);

    document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#mysideInfobar").scrollTop(0);

    //this.GetProjectsByUserName();
  }

  _CompletedList = [];
  EmployeeList: any;
  Clientjson: any;
  CompanyName: any;
  FiterEmployee: any

  AddCom() {
    if (this.CompanyName) {
      this.FiterEmployee = this.EmployeeList.filter((item) => {
        return item.Com_No === this.CompanyName;
      })
    } else {
      this.GetAssigned_SubtaskProjects()
    }

  }

  clearFilter(){
    this.selectedAttendeesList.clear();
    this.assignCount=0
  }

  filteredEmployees:any;
  ProjectTypelist: any;

  GetAssigned_SubtaskProjects() {

    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.Current_user_ID;
    this._ObjCompletedProj.CategoryId = 2411;
    this._ObjCompletedProj.Mode = 'Todo';
    this._ObjCompletedProj.Schedule_ID = this.Scheduleid;
    this._ObjCompletedProj.Agenda_id = this.currentAgendaView === undefined ? null : this.Agendas_List[this.currentAgendaView].AgendaId;

    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {


                console.log(data ,'task')
                // this.CategoryList = JSON.parse(data[0]['CategoryList']);
                this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);
                this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
                this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
                this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
                this.Clientjson = JSON.parse(data[0]['Client_json'])
          
                this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);

                this.assigncount = this.ActionedAssigned_Josn.length;
                this.todocount = this._TodoList.length + this.ActionedAssigned_Josn.length;
                console.log(this.ActionedAssigned_Josn,'this.ActionedAssigned_Josn')

                this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
                this.FiterEmployee = this.EmployeeList;
     
                 const orderedEmpNos = new Set(this.orderedItems.map(item => item.stringval));

                  this.filteredEmployees = this.FiterEmployee.filter((employee) => {
                    const isCreatedBy = employee.TM_DisplayName === this.Createdby;
                    const isInOrderedEmpNos = orderedEmpNos.has(employee.Emp_No);

                    // Return true for objects that match your conditions
                    return isCreatedBy || isInOrderedEmpNos;
                  });

                  // Remove the filtered objects from the original array
                  this.FiterEmployee = this.FiterEmployee.filter((employee) => {
                    const isCreatedBy = employee.TM_DisplayName === this.Createdby;
                    const isInOrderedEmpNos = orderedEmpNos.has(employee.Emp_No);

                    // Return false to remove objects that match your conditions
                    return !(isCreatedBy || isInOrderedEmpNos);
                  });

      });
  
  }



  _Deletetask(id, name) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'Todo_Delete',
        title1: 'Confirmation ',
        taskName: name
        //message1: "proj_Name"
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this._ObjAssigntaskDTO.TypeOfTask = "Delete";
        this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = 2411;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
          (data) => {
            // this._TodoList = JSON.parse(data['Jsonmeeting_Json']);
            // this._CompletedList = JSON.parse(data['CompletedList']);

            let message: string = data['Message'];
            this._Demotext = "";
            this.notifyService.showInfo("Successfully", message);
            this.GetAssigned_SubtaskProjects();
            this.CurrentTaskCount[this.currentAgendaView].TaskCount=0;
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
    });
  }



  On_Uncheck(id) {

    this._ObjAssigntaskDTO.TypeOfTask = "UnCheck";
    this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    //69 this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {
        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
        this._Demotext = "";
        this.notifyService.showInfo("", message);
      });

  }


  OnRadioClick(id) {
    this._ObjAssigntaskDTO.TypeOfTask = "Update";
    this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    //69 this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {
        this.GetAssigned_SubtaskProjects();
        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
        this._Demotext = "";
        this.notifyService.showSuccess("", message);
      });
  }







  /////////////////////////////////////////// assign task End //////////////////////////////////////////////////////////////////


  /////////////////////////////////////////// All Attendees Notes sidebar Start //////////////////////////////////////////////////////////////////
 
  totalNotesCount:number=0;
  totalTasksCount:number=0;
  AllAttendees_notes: any = []
  Employeeslist: any;
  meetingStarted: any;
  hasMeetingStatus: boolean = false;
  hasMeetingStarted: boolean = false;
  hasMeetingEnd: boolean = false;
  hasAttendeesPauseMeeting:boolean = false;
  hasAttendeesresumeMeeting:boolean = false;
  NotesCount: any;
  TaskCount: any;
  agendasList: any;
  exact_start: any;
  smailcount:any;
  taskcount: any = [];
  notescount: any = [];
  Status_type: any;
  portFocount:any;
  projecount:any;
  attachcount:any;
  TaskList:any;
  showAttendeeNotify:any;
  pausetime:any;
  LastPauseTime:any;
  alertShown:boolean= false;

  GetAttendeesnotes() {


    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.AgendaId = this.currentAgendaView === undefined ? 0 : this.Agendas_List[this.currentAgendaView].AgendaId;

    this.CalenderService.NewGetAttendeesMeetingnotes(this._calenderDto).subscribe
      ((data: any) => {
       
        this.exact_start = (data['Start_time']);
        this.agendasList = JSON.parse(data['Agendas']);

        this.TaskList = JSON.parse(this.agendasList[0].TaskList) 
        
        this.LastPauseTime = this.agendasList[0].LastPauseTime
        this.pausetime = this.agendasList[0].pausetime
        this.smailcount = this.agendasList[0]?.smailcount;
        this.portFocount = this.agendasList[0]?.portcount;
        this.projecount = this.agendasList[0]?.projectcount;
        this.attachcount = this.agendasList[0]?.attachcount;


     
        // console.log(this.LastPauseTime,'LastPauseTime')
        // console.log(this.exact_start,'exact_start');
        // console.log(this.pausetime,'pausetime');

        if(this.agendasList != null){
            if(this.Agendas_List&&this.Agendas_List.length>0){                  
              if (this.agendasList.length != this.Agendas_List.length) {
                const result=this.Agendas_List.length-this.agendasList.length;
                this.Agendas_List = [...this.agendasList];
                this.taskcount = this.Agendas_List.map(item => ({ count: 0, agendaid: item.AgendaId }));
                this.notescount = this.Agendas_List.map(item => ({ count: 0, agendaid: item.AgendaId }));
              
                if(result<0){
                this.notifyService.showInfo('New agenda added', "");
                }
                else{
                this.notifyService.showInfo('agenda removed', "");
                }
              }
             
            }
            if(this.Isadmin==false){
            this.Agendas_List.forEach((_agenda)=>{
                const agd=this.agendasList.find((item)=>item.AgendaId==_agenda.AgendaId);
                if(_agenda.Status!=agd.Status){
                    _agenda.Status=agd.Status;

                  if(_agenda.Status=='1'){
                      this.notifyService.showSuccess("Agenda completed", "Success");
                       this.meeting_details();
                  }
                  else if(_agenda.Status=='0'){
                      this.notifyService.showSuccess("Removed from complete", "Success");
                      this.meeting_details();
                  }
                }                
            });
        }  
       

        this.notescount.forEach(item => item.count = 0);  //1. clear previous notes count data.
        this.taskcount.forEach(item => item.count = 0);   //1. clear previous task count data.
        this.status_type = '';
        this.NotesCount = JSON.parse(data['NotesCount']);

        this.NotesCount.forEach(item => {
          const i = this.notescount.findIndex(item1 => item1.agendaid == item.AgendaId);
          if (i > -1)
            this.notescount[i].count += 1;
        });    // 2. update new notes count data.
      

        this.TaskCount = JSON.parse(data['TaskCount']);
        this.TaskCount.forEach(item => {
          const i = this.taskcount.findIndex(item1 => item1.agendaid == item.Agenda_Id);
          if (i > -1)
            this.taskcount[i].count += 1;
        });    // 2. update new task count data.

       
        this.totalNotesCount=this.notescount.reduce((sum,item)=>{
             return sum+item.count;
        },0)

        this.totalTasksCount=this.taskcount.reduce((sum,item)=>{
          return sum+item.count;
         },0)
  

        this.meetingStarted = data.AdminMeeting_Status == '1' || data.AdminMeeting_Status == '2' || data.AdminMeeting_Status == '3'  ? true : false;
        this.showAttendeeNotify = data.AdminMeeting_Status;

    

        if (this.meetingStarted || this.meetingStarted != true) {
      
          if (data['Checkdatetimejson'] != '') {
           
            this.AllAttendees_notes = JSON.parse(data['Checkdatetimejson']);
        
          } else if (data['Checkdatetimejson'] == '') {
            this.AllAttendees_notes = [];
          }

          //console.log(this.meetingStarted, this.hasMeetingStarted, this.hasMeetingEnd, this.meetingOfAttendees, "meet")
          // console.log(this.showAttendeeNotify,'showAttendeeNotify')
          // console.log(this.showAttendeeNotify,'showAttendeeNotify')
          if (this.Endtms) {
            let t = new Date("2000-01-01 " + this.Endtms);
            t.setMinutes(t.getMinutes() - 10);
            let newTime = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            let time = new Date(new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            let End = this.Endtms.replace(/(\d{1,2}:\d{2})/, '$1:00');
        
          //  console.log(newTime <= time , time <= End );
          if(newTime <= time && time <= End && !this.alertShown && this.showAttendeeNotify != 0){   
            let diffMinutes = Math.ceil((new Date("2000-01-01 " + End).getTime() - new Date("2000-01-01 " + time).getTime()) / 60000);
 
             Swal.fire({
              title: '⚠️ Ending Soon',
              text: `This meeting will end in ${diffMinutes} minutes`
            })
             this.alertShown = true;
          }}

          if (this.showAttendeeNotify=='1' && !this.hasMeetingStarted && this.showAttendeeNotify!='2' && this.showAttendeeNotify!='3') {
         
            this.startMeetingOfAttendees();
            this.InsertAttendeeMeetingTime();
            this.hasMeetingStarted = true;
            this.hasMeetingEnd = false;
            this.hasAttendeesPauseMeeting = false;
            this.hasAttendeesresumeMeeting = false;
          }
          else if (this.showAttendeeNotify=='2' && !this.hasAttendeesPauseMeeting) {
     
              this.pauseTimer(this.LastPauseTime,this.exact_start,this.pausetime)
              this.InsertAttendeeMeetingTime();
              this.hasAttendeesPauseMeeting = true;
              this.hasMeetingStarted = false;
              this.hasMeetingEnd = false;
              this.hasAttendeesresumeMeeting = false;
          
        
          }
            else if (this.showAttendeeNotify=='3' && !this.hasAttendeesresumeMeeting) {
             
              this.resumeTimer(this.exact_start,this.pausetime);
              this.InsertAttendeeMeetingTime();      
              this.hasAttendeesresumeMeeting = true;
              this.hasAttendeesPauseMeeting = false;
              this.hasMeetingStarted = false;
              this.hasMeetingEnd = false; 
          
          
          
          }
          else if (this.meetingStarted != true && !this.hasMeetingEnd && this.meetingOfAttendees == false) {
           
            this.stopMeetingAttendees();
            this.InsertAttendeeMeetingTime();
            this.hasMeetingEnd = true;
          }
        }
        else {
          this.AllAttendees_notes = []
        }
        // const objectsWithEmployees  = this.AllAttendees_notes.filter(obj => obj.hasOwnProperty('Employees'));
      }
        // this.Employeeslist=objectsWithEmployees[0].Employees;
      });
    // this.meeting_details();
    //  console.log(this.taskcount,'---------------',this.notescount)
  }

 





  /////////////////////////////////////////// All Attendees Notes End //////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////Meeting Edit Functionality Start //////////////////////////////////////////////////////


  editTask: boolean = false;
  copyTask: boolean = false;
  create: boolean = false;
  Title_Name: any;
  ScheduleType: any;
  MasterCode: any = [];
  Projectstartdate: string = "";
  _subname: boolean;
  Subtask: any;
  BlockNameProject1: any;
  St_date: string = "";
  Portfoliolist_1: [];
  _onlinelink: boolean = false;
  Link_Details: string;
  Location_Type: any;
  Description_Type: any;
  Attachment12_ary: any = [];
  _labelName: string;
  disablePreviousDate = new Date();
  disablePreviousTodayDate = new Date();
  _StartDate: any;
  Startts: any;
  StartTimearr: any = [];

  EndTimearr: any = [];
  _SEndDate: any;
  Note_deadlineexpire: boolean;
  selectedrecuvalue: string;
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


  _EndDate: any;
  minDate = moment().format("YYYY-MM-DD").toString();
  maxDate = "";
  preventSingleClick = false;
  isChecked: string
  _AllEventTasksCount: number = 0;
  pending_status: boolean;
  _FutureEventTasksCount: number = 0;
  _OldRecurranceId: string;
  _OldRecurranceValues: string;
  _Oldstart_date: string;
  scstartdate: any = new Date();
  Addressurl: string = "";
  AllDatesSDandED: any[] = [];
  _OldEnd_date: string;
  arr: any = [];
  arr1: any = [];
  arr2: any = [];
  Portfolio: any = [];
  Portfolio1: any = [];
  ngEmployeeDropdown: any;
  ngEmployeeDropdown1: any = [];
  ngEmployeeDropdown2: any = [];
  SelectDms: any;
  SelectDms1: any;
  projectEnddate: string;
  Status_project: string; days
  AllocatedHours: number;
  _Exec_BlockName: string = "";
  SubmissionName: string;


  projectsSelected: any = [];




  // ReshudingTaskandEvent() {
  //   document.getElementById("div_endDate").style.display = "none";
  //   document.getElementById("Schenddate").style.display = "none";
  //   document.getElementById("Descrip_Name12").style.display = "none";
  //   this.editTask = true;
  //   this.copyTask = false;
  //   this.create = false;

  //   this.Schedule_ID = this._calenderDto.Schedule_ID;
  //   this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
  //     ((data) => {

  //       this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
  //       // console.log(this.EventScheduledjson, "test11111")
  //       this.Schedule_ID = (this.EventScheduledjson[0]['Schedule_ID']);
  //       this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];
  //       this.Startts = (this.EventScheduledjson[0]['St_Time']);
  //       this.Endtms = (this.EventScheduledjson[0]['Ed_Time']);
  //       this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
  //       this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
  //       this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
  //       this._PopupConfirmedValue = 1;
  //       this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
  //       this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
  //       this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
  //       this.scstartdate = this._Oldstart_date;
  //       // alert(this.scstartdate)
  //       // this.Attachment12_ary=this.EventScheduledjson[0]['Attachmentsjson']
  //       this.Addressurl = this.EventScheduledjson[0]['Addressurl']
  //       // alert( this.Addressurl);
  //       this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];
  //       this._onlinelink = this.EventScheduledjson[0]['Onlinelink'];
  //       this.Link_Details = this.EventScheduledjson[0]['Link_Details']
  //       this.pending_status = this.EventScheduledjson[0]['Pending_meeting'];

  //       if (this._FutureEventTasksCount > 0) {
  //         // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
  //         // radio1.disabled = false;
  //         // radio1.checked = true;

  //         // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
  //         // radio2.disabled = false;
  //         // radio2.checked = false;

  //         // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
  //         // radio3.disabled = false;
  //         // radio3.checked = false;

  //         // this._PopupConfirmedValue = 1;
  //       }
  //       else if (this._FutureEventTasksCount == 0) {
  //         // var radio1 = document.getElementById('r1') as HTMLInputElement | null;
  //         // radio1.disabled = false;
  //         // radio1.checked = true;

  //         // var radio2 = document.getElementById('r2') as HTMLInputElement | null;
  //         // radio2.disabled = true;
  //         // radio2.checked = false;

  //         // var radio3 = document.getElementById('r3') as HTMLInputElement | null;
  //         // radio3.disabled = true;
  //         // radio3.checked = false;

  //         // this._PopupConfirmedValue = 1;
  //       }

  //       document.getElementById("div_recurrence").style.display = "none";
  //       document.getElementById("Monthly_121").style.display = "none";
  //       document.getElementById("weekly_121").style.display = "none";
  //       document.getElementById("mysideInfobar_schd_new").classList.add("open_sidebar");
  //       document.getElementById("rightbar-overlay").style.display = "block";
  //       // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  //       this.AllDatesSDandED = [];
  //       var jsonData = {};
  //       var columnName = "Date";
  //       jsonData[columnName] = this.EventScheduledjson[0]['Schedule_date'];
  //       var IsActive = "IsActive";
  //       jsonData[IsActive] = 1;
  //       var Day = "Day";
  //       jsonData[Day] = "NA";
  //       var DayNum = "DayNum";
  //       jsonData[DayNum] = "NA";
  //       this.AllDatesSDandED.push(jsonData);
  //       this._StartDate = this.EventScheduledjson[0]['Schedule_date'];
  //       this.minDate = this.EventScheduledjson[0]['Schedule_date'];
  //       this._EndDate = this.EventScheduledjson[0]['End_date'];
  //       this._OldEnd_date = this.EventScheduledjson[0]['End_date'];
  //       this.maxDate = this.EventScheduledjson[0]['End_date'];
  //       this.EventNumber = this.EventScheduledjson[0]['EventNumber']
  //       // this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
  //       if ((this.EventScheduledjson[0]['Onlinelink']) == true) {
  //         document.getElementById("Descrip_Name12").style.display = "block";
  //       }
  //       if ((this.EventScheduledjson[0]['Recurrence']) == 'Do not repeat') {
  //         this.selectedrecuvalue = '0';
  //         this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();
  //         this._labelName = "Schedule Date";
  //         // this.maxDate = this.EventScheduledjson[0]['Schedule_date'];
  //         // document.getElementById("div_endDate").style.display = "none";
  //         document.getElementById("Recurrence_hide").style.display = "none";
  //       }
  //       else if ((this.EventScheduledjson[0]['Recurrence']) == 'Daily') {
  //         document.getElementById("div_endDate").style.display = "block";
  //         this.selectedrecuvalue = '1';
  //         this._labelName = "Schedule Date";
  //         // document.getElementById("div_endDate").style.display = "none";
  //         document.getElementById("Recurrence_hide").style.display = "none";
  //       }
  //       else if ((this.EventScheduledjson[0]['Recurrence']) == 'Weekly') {
  //         this._labelName = "Schedule Date";
  //         // document.getElementById("div_endDate").style.display = "none";
  //         document.getElementById("div_endDate").style.display = "block";
  //         document.getElementById("Recurrence_hide").style.display = "block";
  //         document.getElementById("weekly_121").style.display = "block";
  //         this.selectedrecuvalue = '2';
  //         let Recc = [];
  //         var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
  //         Recc = ret1.split(",");

  //         for (var i = 0; i < Recc.length; i++) {
  //           this.dayArr.forEach(element => {
  //             if (element.value == Recc[i]) {
  //               element.checked = true;
  //             }
  //           });
  //         }
  //       }
  //       else if ((this.EventScheduledjson[0]['Recurrence']) == 'Monthly') {
  //         document.getElementById("Recurrence_hide").style.display = "block";
  //         document.getElementById("div_endDate").style.display = "block";
  //         // document.getElementById("div_endDate").style.display = "none";
  //         document.getElementById("Monthly_121").style.display = "block";
  //         this._labelName = "Schedule Date";
  //         this.selectedrecuvalue = '3';
  //         let Recc = [];
  //         var ret1 = (this.EventScheduledjson[0]['Recurrence_values']);
  //         Recc = ret1.split(",");
  //         for (var i = 0; i < Recc.length; i++) {
  //           this.MonthArr.forEach(element => {
  //             if (element.value == Recc[i]) {
  //               element.checked = true;
  //             }
  //           });
  //         }
  //       }

  //       if (this.ScheduleType == 'Task') {
  //         this.EventScheduledjson[0]['Ed_Time']
  //         this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
  //         this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
  //         this.MasterCode = (this.MasterCode[0].stringval);

  //         document.getElementById("subtaskid").style.display = "block";
  //         // document.getElementById("Link_Name").style.display = "none";
  //         document.getElementById("Guest_Name").style.display = "none";
  //         document.getElementById("Location_Name").style.display = "none";
  //         document.getElementById("Descrip_Name").style.display = "none";
  //         document.getElementById("core_viw123").style.display = "block";
  //         document.getElementById("core_viw121").style.display = "none";
  //         document.getElementById("core_viw222").style.display = "none";
  //         document.getElementById("core_Dms").style.display = "none";
  //         // document.getElementById("Monthly_121").style.display = "none";
  //         // document.getElementById("weekly_121").style.display = "none";

  //       }

  //       if (this.ScheduleType == 'Event') {
  //         this.allAgendas = this.EventScheduledjson[0]['Agendas'].map(item => ({ index: item.AgendaId, name: item.Agenda_Name }));

  //         this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
  //         this.MasterCode = [];
  //         this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
  //         this.arr.forEach(element => {
  //           this.MasterCode.push(element.stringval);
  //           this.projectsSelected.push({ Project_Code: element.stringval, Project_Name: element.Project_Name, BlockNameProject: element.BlockNameProject });
  //         });
  //         this.Portfolio = [];
  //         this.Portfolio1 = [];
  //         this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
  //         this.arr1.forEach(element => {
  //           this.Portfolio.push(element.numberval);
  //         });

  //         this.ngEmployeeDropdown = [];
  //         this.ngEmployeeDropdown1 = [];
  //         this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
  //         this.arr2.forEach(element => {
  //           this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
  //         });
  //         this.SelectDms = [];
  //         this.SelectDms1 = [];
  //         let arr3 = [];
  //         var str = (this.EventScheduledjson[0]['DMS_Name']);
  //         arr3 = str.split(",");
  //         for (var i = 0; i < arr3.length; i++) {
  //           this.Memos_List.forEach(element => {
  //             if (element.MailId == arr3[i]) {
  //               this.SelectDms.push(element.MailId);
  //             }
  //           });
  //         }
  //         this.Location_Type = (this.EventScheduledjson[0]['Location']);
  //         this.Description_Type = (this.EventScheduledjson[0]['Description']);
  //         document.getElementById("subtaskid").style.display = "none";
  //         document.getElementById("Guest_Name").style.display = "block";
  //         document.getElementById("Location_Name").style.display = "block";
  //         document.getElementById("Descrip_Name").style.display = "block";
  //         document.getElementById("core_viw121").style.display = "block";
  //         document.getElementById("core_viw123").style.display = "none";
  //         document.getElementById("core_viw222").style.display = "block";
  //         document.getElementById("core_Dms").style.display = "block";
  //         // console.log(this.MasterCode,'decode')
  //       }
  //     });
  //   // this.closeevearea();
  // }

  eventRepeat:boolean=false;
  mtgOnDays:any=[];
  _meetingroom:boolean=false;
  timingarryend: any = [];
  Time_End: any = [];
  RecurrValue:boolean=false;
  RecurrValueMonthly:boolean=false;
  previousValue:any;



  ReshudingTaskandEvent() {

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
        console.log(this.ScheduleType,'sdcsdcsd')
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

        if(this.Link_Details != ''){
        if(!this.Link_Details.includes('<a href=')){
        var details = this.Link_Details.split(', ')
        this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
        this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
        this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined'  || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
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
   
        
        // this code for chnage detection start
        this.disablePreviousDate = null;
        setTimeout(()=>{
          this.disablePreviousDate = new Date();
        },0);
       // this code for chnage detection End



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
          
          // old code start 69
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
          // old code End 69

       // New code start 69
       const dayShort = new Date(this._StartDate).toLocaleDateString('en-US', { weekday: 'short' });
       if(ret1 != dayShort){
        this.RecurrValue =true;
       }  
       // New code End 69

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
          this.projectsSelected=[];
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
          this.updateCharacterCount();



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
    this.closeevearea();
  }




  selectedrecuvalue1:string='0';
  dayArr1:any=JSON.parse(JSON.stringify(this.dayArr));
  MonthArr1:any=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
_EndDate1:any;
notProvided1:any;

  customrecurrencemodal() {
    // document.getElementById('drop-overlay').classList.add("show");
    // document.getElementById('customrecurrence').classList.add("show");
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("customrecurrence").style.display = "block";

    this.selectedrecuvalue1=this.selectedrecuvalue;
    this.dayArr1=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
    this.MonthArr1=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content

    this._EndDate1=moment(this._EndDate);
    console.log(this._EndDate1,'_EndDate1')
    if(this.selectedrecuvalue1=='2')
      document.getElementById("weekly_121_new").style.display = "block";
    else if(this.selectedrecuvalue1=='3')
      document.getElementById("Monthly_121_new").style.display = "block";

    if(this.selectedrecuvalue1!='0')
      document.getElementById("div_endDate_new").style.display = "block";

  }



  close_customrecurrencemodal() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("customrecurrence").style.display = "none";
    // document.getElementById('drop-overlay').classList.remove("show");
    // document.getElementById('customrecurrence').classList.remove("show");

    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";

    this.selectedrecuvalue1='0';
    this.dayArr1=[];
    this.MonthArr1=[];
    this._EndDate1=moment().add(3, 'months').format("YYYY-MM-DD").toString();
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



  // if (this.selectedrecuvalue == '0') {
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



  notProvided: boolean = false;
  MinLastNameLength: boolean;

  LastLengthValidation11() {
    if (this.Title_Name.trim().length < 3) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }

  AgendaInputEvent: string | undefined;
  AgendasAddedEvent: number = 0;

  AddAgendaEvent() {
    if (this.AgendaInputEvent && this.AgendaInputEvent.trim().length > 0) {
      this.AgendasAddedEvent += 1;
      const agenda = {
        index: this.AgendasAddedEvent,
        name: this.AgendaInputEvent
      };
      this.allAgendas.push(agenda);
      this.AgendaInputEvent = undefined;
    }

    // console.log("allAgendas:", this.allAgendas);
  }



  // editAgendaEvent(index: number) {
  //   $(`#agenda-label-Event-${index}`).addClass('d-none');
  //   $(`#agenda-text-field-Event-${index}`).removeClass('d-none');
  //   $(`#agenda-text-field-Event-${index}`).focus();

  //   $(`#edit-cancel-Event-${index}`).removeClass('d-none');   // cancel btn is visible.
  //   $(`#editing-save-Event-${index}`).removeClass('d-none');   // save btn is visible.

  //   $(`#edit-agendaname-btn-Event-${index}`).addClass('d-none');  // edit btn is invisible.
  //   $(`#remove-agenda-btn-Event-${index}`).addClass('d-none');   // delete btn is invisible.

  // }


  deleteAgendaEvent(index: number) {

    if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
      Swal.fire({
        title: 'Remove this Agenda ?',
        text: this.allAgendas[index].name,
        showConfirmButton: true,
        showCancelButton: true,
      }).then(option => {
        if (option.isConfirmed) {
          this.allAgendas.splice(index, 1);
        }
      });
    }
    // console.log("allAgendas:", this.allAgendas);
  }


  // cancelAgendaEditEvent(index: number) {
  //   const tf: any = document.getElementById(`agenda-text-field-Event-${index}`);
  //   tf.value = this.allAgendas[index].name;

  //   $(`#agenda-label-Event-${index}`).removeClass('d-none');   // label is visible.
  //   $(`#agenda-text-field-Event-${index}`).addClass('d-none');   // textfield is invisible.
  //   $(`#edit-cancel-Event-${index}`).addClass('d-none');   // cancel btn is visible.
  //   $(`#editing-save-Event-${index}`).addClass('d-none');   // save btn is visible.
  //   $(`#edit-agendaname-btn-Event-${index}`).removeClass('d-none');  // edit btn is visible.
  //   $(`#remove-agenda-btn-Event-${index}`).removeClass('d-none');   // delete btn is visible.
  // }



  // updateAgendaEvent(index: number) {
  //   const tf: any = document.getElementById(`agenda-text-field-Event-${index}`);
  //   this.allAgendas[index].name = tf.value;

  //   $(`#agenda-label-Event-${index}`).removeClass('d-none'); // label is visible.
  //   $(`#agenda-text-field-Event-${index}`).addClass('d-none');  // textfield is invisible.
  //   $(`#edit-cancel-Event-${index}`).addClass('d-none');   // cancel btn is visible.
  //   $(`#editing-save-Event-${index}`).addClass('d-none');   // save btn is visible.
  //   $(`#edit-agendaname-btn-Event-${index}`).removeClass('d-none');  // edit btn is visible.
  //   $(`#remove-agenda-btn-Event-${index}`).removeClass('d-none');   // delete btn is visible.
  //   // console.log('all agendas after updating:', this.allAgendas);
  // }



  getObjOf(arr, id, idName) {
    const obj = arr.find(item => item[idName] == id);
    return obj ? obj : '';
  }

  getProjectName(projectCode: string) {

    if (this.projectsSelected) {
      const P = this.projectsSelected.find(pr => pr.Project_Code.trim() == projectCode.trim());
      return P ? P.BlockNameProject : '';
    }
    return [];

  }



  onProjectSelected(e: any) {
    const prjChoosed = this.ProjectListArray.find((p: any) => p.Project_Code === e.option.value);
    if (prjChoosed) {
      if (!this.MasterCode)   // if Portfolio is null,undefined,''
        this.MasterCode = [];
      const index = this.MasterCode.indexOf(prjChoosed.Project_Code);
      if (index === -1) {
        // if not present then add it
        this.MasterCode.push(prjChoosed.Project_Code);
        this.projectsSelected.push({ Project_Code: prjChoosed.Project_Code, Project_Name: prjChoosed.Project_Name, BlockNameProject: prjChoosed.BlockNameProject });
      }
      else {
        this.MasterCode.splice(index, 1);
        this.projectsSelected.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('ProjectsDrpDwn');
  }





  removeSelectedProject(item) {
    const index = this.MasterCode.indexOf(item);
    if (index !== -1) {
      this.MasterCode.splice(index, 1);
      this.projectsSelected.splice(index, 1);
    }
  }





  onPortfolioSelected(e: any) {
    const portfolioChoosed: any = this.Portfoliolist_1.find((p: any) => p.portfolio_id === e.option.value);
    // console.log(portfolioChoosed);
    if (portfolioChoosed) {
      if (!this.Portfolio)   // if Portfolio is null,undefined,''
        this.Portfolio = [];
      const index = this.Portfolio.indexOf(portfolioChoosed.portfolio_id);
      if (index === -1) {
        // if not present then add it
        this.Portfolio.push(portfolioChoosed.portfolio_id);
      }
      else { //  if item choosed is already selected then remove it.
        this.Portfolio.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('PortfolioDrpDwn');
  }


  removeSelectedPortfolio(item) {
    const index = this.Portfolio.indexOf(item);
    if (index !== -1) {
      this.Portfolio.splice(index, 1);
    }
  }

  onDMSMemoSelected(e) {
    const memoChoosed = this.Memos_List.find((c) => c.MailId === e.option.value);
    if (memoChoosed) {
      if (!this.SelectDms)   // if SelectDms is null,undefined,''
        this.SelectDms = [];

      const index = this.SelectDms.indexOf(memoChoosed.MailId);
      if (index === -1) {
        // if not present then add it
        this.SelectDms.push(memoChoosed.MailId);
      }
      else { //  if item choosed is already selected then remove it.
        this.SelectDms.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('MemoDrpDwn');
  }
  removeSelectedDMSMemo(item) {
    const index = this.SelectDms.indexOf(item);
    if (index !== -1) {
      this.SelectDms.splice(index, 1);
    }
  }




  onParticipantSelected(e: any) {
    const participantChoosed = this._EmployeeListForDropdown.find((c) => c.Emp_No === e.option.value);
    if (participantChoosed) {
      if (!this.ngEmployeeDropdown)   // if ngEmployeeDropdown is null,undefined,''
        this.ngEmployeeDropdown = [];

      const index = this.ngEmployeeDropdown.indexOf(participantChoosed.Emp_No);
      if (index === -1) {
        // if not present then add it
        this.ngEmployeeDropdown.push(participantChoosed.Emp_No);
      }
      else { //  if item choosed is already selected then remove it.
        this.ngEmployeeDropdown.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('ParticipantsDrpDwn');
  }

  removeSelectedParticipant(item) {
    const index = this.ngEmployeeDropdown.indexOf(item);
    if (index !== -1) {
      this.ngEmployeeDropdown.splice(index, 1);
    }
  }



  _selectedId = 0;
  _SecondSelectedId = 0;
  _total = 14;




  getavltime(e) {
    this.timeslotsavl = [];
    this.timeslotsavl.push(this.Avaliabletime.find(i => i.count === parseInt(e.target.value)));
    this._selectedId = 0;
    this._SecondSelectedId = 0;
    this.timeslotsavl.forEach(element => {
      this._total = element.SlotsJson.length;
    });
  }




  RemoveSelectedFile1(_id) {
    var removeIndex = this._lstMultipleFiales.map(function (item) { return item.UniqueId; }).indexOf(_id);
    this._lstMultipleFiales.splice(removeIndex, 1);

    const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';

  }


  _attachmentValue:any = 0;
  RemovedAttach: any = [];
  RemovedFile_id:any = [];

  RemoveExistingFile(_id) {
  
    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {     
      // this.RemovedAttach.push(element.Cloud_Name)
        this.RemovedFile_id.push(element.file_id);  
      }
    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);
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
        });

      });
  }


  validStartTimearr:any=[];

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




  filteredEndTimes(): string[] {
    if (!this.Startts) {
      return [];
    }
    // // Convert Start Time to minutes for easier comparison
    // const selectedStartMinutes = this.timeToMinutes(this.Startts);

    // // Filter End Time options to start from 5 minutes interval after selected Start Time
    // const filteredTimes = this.EndTimearr.filter(time => {
    //   const endTimeMinutes = this.timeToMinutes(time);
    //   return endTimeMinutes > selectedStartMinutes;
    // });

    // return filteredTimes;

  
    const Times_=[...this.EndTimearr,...this.EndTimearr];
    let _from = Times_.indexOf(this.Startts);
    const eventmaxDuration=286;
    let _to=_from+eventmaxDuration;
    const filteredTimes=Times_.slice(_from,_to);

    return filteredTimes;



  }

  // Convert time in format 'hh:mm AM/PM' to minutes since midnight
  timeToMinutes(time: string): number {

    const [hhmm, period] = time.split(' ');
    const [hours, minutes] = hhmm.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;

    if (period === 'PM' && hours !== 12) {
      totalMinutes += 12 * 60; // Add 12 hours worth of minutes for PM times, except 12 PM
    } else if (period === 'AM' && hours === 12) {
      totalMinutes -= 12 * 60; // Adjust 12 AM to 0 minutes
    }

    return totalMinutes;
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

      this._calenderDto.Project_Code = MasterCode;
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          // console.log(data);
          this.BlockNameProject1 = JSON.parse(data['Projectlist']);
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
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "block";
      }
    }
  }

  Ed_date: string;
  _status: string;
  Allocated_subtask: number;
  TM_DisplayName: string;




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


  Locationfulladd: string;

  public handleAddressChange(address: Address) {

    if (this.checkAddressURL(address.name.toString())) {
      this.Addressurl = address.name;
    }
    else {
      this.Addressurl = address.url;
    }
    this.Location_Type = address.name;


    // console.log(address, "add11")
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


  daysSelectedII: any[] = [];



  // selectStartDate(event) {

  //   event = moment(event);
  //   this._StartDate = event;

  //   let sd = event.format("YYYY-MM-DD").toString();
  //   this._SEndDate = event.format("YYYY-MM-DD").toString();
  //   this.minDate = sd;
  //   this._calenderDto.Schedule_ID = this.Schedule_ID;
  //   this._calenderDto.Scheduled_date = sd;
  //   // this.CalenderService.NewGetPendingAvailability(this._calenderDto).subscribe((data)=>{
  //   //   if(data['message']=='1'){
  //   //     this.pendingavailability==false;
  //   //   }
  //   //   else{
  //   //     this.pendingavailability==true;
  //   //   }
  //   // });
  //   var start = moment(this.minDate);
  //   var end = moment(this.maxDate);
  //   const format2 = "YYYY-MM-DD";
  //   const d1 = new Date(moment(start).format(format2));
  //   const d2 = new Date(moment(end).format(format2));
  //   const date = new Date(d1.getTime());
  //   this.daysSelectedII = [];
  //   this.scstartdate = d1;
  //   this.AllDatesSDandED = [];
  //   var jsonData = {};
  //   var columnName = "Date";
  //   var columnNames = "StartTime";
  //   var columnNamee = "EndTime";
  //   var IsActive = "IsActive";
  //   var Day = "Day";
  //   var DayNum = "DayNum";

  //   if (this.selectedrecuvalue == "0") {
  //     // this._EndDate = event.value.format("YYYY-MM-DD").toString();
  //     // this.maxDate = event.value.format("YYYY-MM-DD").toString();
  //     jsonData[columnName] = (moment(date).format(format2));
  //     jsonData[columnNames] = this.Startts;
  //     jsonData[columnNamee] = this.Endtms;
  //     jsonData[IsActive] = 1;
  //     jsonData[Day] = event.format('dddd').substring(0, 3);
  //     jsonData[DayNum] = event.format('DD').substring(0, 3);
  //     this.AllDatesSDandED.push(jsonData);
  //   }
  //   else {
  //     const dates = [];
  //     while (date <= d2) {
  //       dates.push(moment(date).format(format2));
  //       var jsonData = {};
  //       var columnName = "Date";
  //       jsonData[columnName] = (moment(date).format(format2));
  //       var columnNames = "StartTime";
  //       jsonData[columnNames] = this.Startts;
  //       var columnNamee = "EndTime";
  //       jsonData[columnNamee] = this.Endtms;
  //       var IsActive = "IsActive";
  //       jsonData[IsActive] = 1;
  //       var Day = "Day";
  //       jsonData[Day] = moment(date).format('dddd').substring(0, 3);
  //       var DayNum = "DayNum";
  //       jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
  //       this.AllDatesSDandED.push(jsonData);
  //       date.setDate(date.getDate() + 1);
  //     }
  //   }


  // }
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




////test start ///////////////////////////////////////////
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

    this.mtgOnDays=[];
    this.MonthArr.forEach((item:any)=>{
      if(item.checked){
       
         const d_no=Number.parseInt(item.value);
         this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
      }
    });
    // update new
}

  ////test end  ///////////////////////////////////////////



}

  onfocus(val) {
    //  console.log(val, "ttt");
  }

  _arrayObj: any;
  Alltimes: any = [];
  AllEndtime: any = [];

  // addstarttime() {

  //   this.Alltimes = [];
  //   this.EndTimearr = [];
  //   this.AllEndtime = [];
  //   this.StartTimearr = [];

  //   this._arrayObj.forEach(element => {
  //     this.EndTimearr.push(element.TSStart);
  //     this.AllEndtime.push(element.TSStart);
  //     this.StartTimearr.push(element.TSStart);
  //     this.Alltimes.push(element.TSStart);
  //     //  console.log( this.Alltimes,"times")

  //   });
  // }




  timearr1: any = [];

  // addstarttime() {
  //   this.Alltimes = [];
  //   this.EndTimearr = [];
  //   this.AllEndtime = [];
  //   this.StartTimearr = [];

  //     this._arrayObj.forEach(element => {
  //     this.EndTimearr.push(element.TSStart);
  //     this.AllEndtime.push(element.TSStart);
  //     this.StartTimearr.push(element.TSStart);
  //     this.Alltimes.push(element.TSStart);
  //     //  console.log( this.Alltimes,"times")
  //   });

  //   console.log("StartTimearr:", this.StartTimearr);
  //   console.log("EndTimearr:", this.EndTimearr);


  //   this.timingarryend = [];
  //   this.Time_End = [];
  //   this.Time_End = this.AllEndtime;
  //   // this.Startts = TSStart;
  //   let _index = this.Time_End.indexOf(this.Startts);
  //   if (_index + 1 === this.Time_End.length) {
  //     _index = -1;
  //   }
  //   this.timingarryend = this.Time_End.splice(_index + 1);

  //   this.EndTimearr = this.timingarryend;
  //   this.timearr1 = this.Startts.split(":");
  //   let vahr = this.timearr1[0];
  //   let mins = this.timearr1[1].toString();

  //   if (vahr == 11 && mins.includes("AM")) {
  //     mins = mins.replace("AM", "PM")
  //   }
  //   else if (vahr == 11 && mins.includes("PM")) {
  //     mins = mins.replace("PM", "AM")
  //   }

  //   if (this.timearr1[0] == 11) {
  //     this._arrayObj.forEach(element => {
  //       this.EndTimearr.push(element.TSStart);

  //     });
  //     vahr = Number(vahr) + 1;
  //     if (vahr == 13) {
  //       vahr = '1'

  //     }
  //     this.Endtms = vahr.toString() + ':' + mins;

  //     if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
  //       this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');

  //     }
  //     else {
  //       this._SEndDate = this._StartDate;
  //     }

  //   }
  //   else {
  //     vahr = Number(vahr) + 1;
  //     if (vahr == 13) {
  //       vahr = '1'
  //     }
  //     if (vahr <= 9) {
  //       this.Endtms = '0' + vahr.toString() + ':' + mins;
  //     }
  //     else {
  //       this.Endtms = vahr.toString() + ':' + mins;
  //     }
  //   }

  //   this.daysSelectedII = [];
  //   var jsonData = {};
  //   var columnName = "Date";
  //   jsonData[columnName] = this.minDate;
  //   var columnNames = "StartTime";
  //   jsonData[columnNames] = this.Startts;
  //   var columnNamee = "EndTime";
  //   jsonData[columnNamee] = this.Endtms;
  //   var columnNameess = "SEndDate";
  //   jsonData[columnNameess] = moment(this._SEndDate).format("YYYY-MM-DD").toString();

  //   if (this.ScheduleType == "Event") {
  //     var IsActive = "IsActive";
  //     jsonData[IsActive] = 0;
  //   }
  //   this.daysSelectedII.push(jsonData)

  //   const selectedStartTimeObj = new Date(`2000-01-01T${this.Startts}:00`);
  //   this.EndTimearr.forEach(element => {
  //     // alert(element)
  //     const _element = element;
  //     const EndTimeObj = new Date(`2000-01-01T${_element}:00`);
  //     const diffInMinutes = (EndTimeObj.getTime() - selectedStartTimeObj.getTime()) / 60000;
  //     // alert(diffInMinutes)
  //     element = _element.toString() + "-" + diffInMinutes.toString();

  //   });

  //   console.log(this.EndTimearr, "End Time Updated")
  // }



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

  }
   //test

  singleselectarry: any[] = [];
  daysSelected: any[] = [];



  SelectDropDown(val) {
    this.selectedrecuvalue = val.value.toString();
    // alert(this.selectedrecuvalue)
    if (this.selectedrecuvalue == '0') {
      this._PopupConfirmedValue = 1;
    }
    else {
      this._PopupConfirmedValue = 2;
    }
    this._labelName = "Start Date";
    document.getElementById("div_endDate").style.display = "block";
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
      document.getElementById("Monthly_121").style.display = "none";
      document.getElementById("div_endDate").style.display = "none";
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
      // 69  this.calendar.updateTodaysDate();
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("weekly_122").style.display = "none";
      document.getElementById("Monthly_121").style.display = "none";
    }
    if (val.value == 2) {

      document.getElementById("weekly_121").style.display = "block";
      document.getElementById("Monthly_121").style.display = "none";

    }
    else if (val.value == 1) {
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("Monthly_121").style.display = "none";
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
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("Monthly_121").style.display = "block";
    }

  }


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
    // console.log(this.daysSelectedII, "Day Added array")
  }



  doubleclickdate: any;
  Avaliabletime: any[] = [];
  timeslotsavl: any[] = [];


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

    // console.log(event)
    // 69 this.calendar.updateTodaysDate();

  }

  Timechangearry: any[] = [];


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
        // 69 this.calendar.updateTodaysDate();
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

        //69 this.calendar.updateTodaysDate();
      }
    }, delay);
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




  closeevearea() {
    $('.bg-ovr').removeClass('d-block');
    $('.bg-ovr1').removeClass('d-block');

    // $('.side_view').removeClass('position-fixed');
    // this.closefooter();
  }


  calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }


  closeschd() {
    this.repeatMeeting = false;
    // this.Insert_indraft();
    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");

    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().format("YYYY-MM-DD").toString();
    this._SEndDate = null;
    this._SEndDate = moment().format("YYYY-MM-DD").toString();
    this.minDate = moment().format("YYYY-MM-DD").toString();
    this.Attachment12_ary = [];
    this._lstMultipleFiales = [];
    this.rapeatLink_Details=true;
    this.maxDate = null;
    this.isValidURL=true;
    this.mtgOnDays = null;
    this.RecurrValue= false;
    this.switChRecurrenceValue=false;
    this.RecurrValueMonthly=false;
    this.editTask=false;
    this.eventRepeat = false;
    this.EventNumber=null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.agendaInputs=undefined;
    this.agendacharacterCount =  null;
    this.mainAgendaCount =  null;
    this.agendaInput=undefined;
    this.characterCount=null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.Subtask = null;
    this.RemovedFile_id = [];
    // this.Startts = null;
    // this.Endtms = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    this._meetingroom = false;
    // document.getElementById("Location_Name").style.display = "none";
    this._onlinelink = false;
    document.getElementById("Descrip_Name12").style.display = "none";
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
    this.daysSelectedII = [];
    this.singleselectarry = [];
    this.Avaliabletime = [];
    this.allAgendas = [];
    this.selectedrecuvalue = "0";
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
    this.notProvided = false;
    this.subtashDrpLoading=false;
    this.Link_Details = null;
    this.Meeting_Id = null;
    this.Meeting_password = null;
  }


  closefooter() {

    document.getElementById("ft_body1").classList.toggle("go-up");
    document.getElementById("secfootr1").classList.toggle("opend");
    document.getElementById("main-foot1").classList.toggle("overflow-hidden");
    $('#upload').html('Select a file');
    // this._remarks = "";
  }


  _subname1: boolean;
  selected: Date | null;

  OnSubmitReSchedule(type: number) {
     if(this.Link_Details){
    this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
    }

    if (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ) &&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ?  this.allAgendas.length > 0  : true)
      && (this.Description_Type?(this.characterCount<=500):true) &&   this.isValidURL 
    ) {

      this.notProvided = false;

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
               // old code start 69
               this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime()); 
               // old code end 69
                
              //new code start 69
               if(this.RecurrValue==true){
                 const matchingDate = this.AllDatesSDandED.find(item => item.Date === this._StartDate);
                 if(matchingDate != undefined){
                   newArray.push(matchingDate);
                }
                this.daysSelectedII = this.daysSelectedII.concat(newArray).sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());                              
              }else{
                 this.daysSelectedII = this.daysSelectedII.concat(newArray);
               }
            //new code end 69         
             }
           }}
         
   
           //new code start 69
           if(this._PopupConfirmedValue == 1 &&  this.switChRecurrenceValue == false){
             var startDateForWeekly = moment(this._StartDate).format('YYYY-MM-DD');
             this.daysSelectedII = this.AllDatesSDandED.filter(item => item.Date === startDateForWeekly);
   
            }
         //new code end 69 
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
        element[vLocation_Type] = this.Location_Type == undefined ? "" : this.Location_Type;

        var vLocation_fulladd = "FullAddress_loc";
        element[vLocation_fulladd] = this.Locationfulladd == undefined ? "" : this.Locationfulladd;

        var vLocation_url = "Addressurl";
        element[vLocation_url] = this.Addressurl;


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
        // let link_d=this.Link_Details.replace(/&#160;/g, ' ');
        // link_d=this.anchoredIt(link_d);

        // let link_d=this.Link_Details;
        // if(this.Link_Details){
        //   link_d=this.Link_Details.replace(/&#160;/g, ' ');
        //   link_d=this.anchoredIt(link_d);
        // }

        // element[vLink_Details] = this.Link_Details == undefined ? "" : link_d;

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

      if (this.Schedule_ID != 0) {
        this._calenderDto.Schedule_ID = this.Schedule_ID;

      }
      else {
        this._calenderDto.Schedule_ID = 0;
      }


      this._attachmentValue = 0;

      const frmData = new FormData();
      if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {

        frmData.append("Attachment", "true");
        this._attachmentValue = 1;
      
        if(this._lstMultipleFiales.length > 0){
          this.progress=0;
          this.showFileUpload = true; // Show upload elements
          this.filesUploadingCount = this._lstMultipleFiales.length;
          if(this.filesUploadingCount === 1){
            this.uploadingFileName = this._lstMultipleFiales[0].FileName
          }
        }
  
        for (var i = 0; i < this._lstMultipleFiales.length; i++) {
          frmData.append("files", this._lstMultipleFiales[i].Files);
        }
        const xmlDoc = document.implementation.createDocument('', '', null);
        const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element
        
        // Iterate over the file groups
        this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
        console.log(`Processing groups  ${groupIndex}:`, fileGroup);
        
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

      frmData.append("EventNumber", this.EventNumber.toString());
      frmData.append("CreatedBy", this.Current_user_ID.toString());
      frmData.append("Schedule_ID", this._calenderDto.Schedule_ID.toString());
      frmData.append("flag_id", this._calenderDto.flagid.toString());
      frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id);

       this._calenderDto.attachment = this._attachmentValue.toString();
      
      this.CalenderService.NewUpdateCalender(this._calenderDto).subscribe
        (data => {
        
          this.RemovedAttach = [];
          // alert(data['Schedule_date'])
          frmData.append("Schedule_date", data['Schedule_date'].toString());
          if (this._attachmentValue == 1) {
            // this.CalenderService.EditUploadCalendarAttachmenst(frmData).subscribe(
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
                      this.filesUploadingCount = 0;
                      this.processingFile = true;
                      this.CalenderService._AzureUpdateCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                        console.log(event1,"azure data");
                        var myJSON = JSON.stringify(event1);
                        let responseBody = JSON.parse(myJSON).body; 
                    
                        if (responseBody === 1) { 
                          this.processingFile = false;                
                          this.processingComplete = true;                                     
                          setTimeout(() => {
                            this.processingComplete = false; 
                            this.notifyService.showSuccess(this._Message, "Success");              
                            this.meeting_details();
                            this.showFileUpload = false;                            
                          }, 2000);     
                         }
                     
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
                    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
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
          else if (this.filesUploadingCount == 0){
            this.notifyService.showSuccess(this._Message, "Success");
              this.meeting_details();
          }
          //69 this.GetScheduledJson();
          //69 this.GetPending_Request();
          //69 this.penhide();
          this.Title_Name = null;
          this.RemovedAttach = [];
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.agendaInputs=undefined;
          this.agendacharacterCount =  null;
          this.mainAgendaCount =  null;
          this.agendaInput=undefined;
          this.MasterCode = null;
          this.Subtask = null;
          this.Startts = null;
          this.Endtms = null;
          this.St_date = null;
          this.Ed_date = null;
          this._status = null;
          this.processingFile = false;  
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
          //69 this.calendar.updateTodaysDate();
          this.TImetable();

        });
      this.closeschd();
    }
    else {
      alert('Please Select Valid Date and Time');
    }
  }else {
    this.notProvided = true;
  }

}

_azureMessage:any="";
  
  generateRandomId(): string {
    return Math.random().toString().substr(2, 6).padStart(6, '0');
  }

  // Sanitize file name
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
  // Map file content type
  // private getContentType(contentType: string): string {
  //   switch (contentType) {
  //     case 'application/pdf':
  //       return '.pdf';
  //     case 'image/png':
  //       return '.png';
  //     case 'image/jpeg':
  //       return '.jpg';
  //     default:
  //       return '.' + contentType.split('/')[1]; // Default to file extension
  //   }
  // }

  getContentType(fileName: any): string | null {
    if (!fileName) {
      return null;
    }
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
  }






  agendacharacterCount:any;

  AgendaCharacterCount(): void {
 
    var count =this.agendaInputs;
    if(count){
      this.agendacharacterCount = count.length;
    }else{
      this.agendacharacterCount =  null;
    }
  }



  agendaInputs: string | undefined;
  // allAgendas: any = [];
  // agendasAdded: number = 0;
  addAgendas() {
    if (this.agendacharacterCount > 0 && this.agendacharacterCount < 101) {
      this.agendasAdded += 1;
      const agenda = {
        index: this.agendasAdded,
        name: this.agendaInputs
      };
      this.allAgendas.push(agenda);
      this.agendaInputs = undefined;
    }
    this.agendacharacterCount =  null;
    console.log("allAgendas:", this.allAgendas);
  }

  deleteAgendas(index: number) {

    if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
      const agenda_toRemove=this.allAgendas[index].name;
      this.allAgendas.splice(index, 1);
      this.notifyService.showSuccess(agenda_toRemove,'Agenda removed.');
    }
    console.log("allAgendas:", this.allAgendas);
  }


  editAgendas(index: number) {
    $(`#agendas-label-${index}`).addClass('d-none');
    $(`#agendas-text-field-${index}`).removeClass('d-none');
    $(`#agendas-text-field-${index}`).focus();

    $(`#edits-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
    $(`#editings-save-${index}`).removeClass('d-none');   // save btn is visible.

    $(`#edit-agendasname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
    $(`#remove-agendas-btn-${index}`).addClass('d-none');   // delete btn is invisible.

  }

  cancelAgendasEdit(index: number) {
    const tf: any = document.getElementById(`agendas-text-field-${index}`);
    tf.value = this.allAgendas[index].name;

    $(`#agendas-label-${index}`).removeClass('d-none');   // label is visible.
    $(`#agendas-text-field-${index}`).addClass('d-none');   // textfield is invisible.
    $(`#edits-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
    $(`#editings-save-${index}`).addClass('d-none');   // save btn is visible.
    $(`#edit-agendasname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
    $(`#remove-agendas-btn-${index}`).removeClass('d-none');   // delete btn is visible.
  }


  updateAgendas(index: number) {
    const tf: any = document.getElementById(`agendas-text-field-${index}`);
    if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
    this.allAgendas[index].name = tf.value;

    $(`#agendas-label-${index}`).removeClass('d-none'); // label is visible.
    $(`#agendas-text-field-${index}`).addClass('d-none');  // textfield is invisible.
    $(`#edits-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
    $(`#editings-save-${index}`).addClass('d-none');   // save btn is visible.
    $(`#edit-agendasname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
    $(`#remove-agendas-btn-${index}`).removeClass('d-none');   // delete btn is visible.

  } else if (tf.value.trim().length == 0){
    this.notifyService.showInfo("Please enter atleast one word","");
  }else {
    this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
  }
    console.log('all agendas after updating:', this.allAgendas);
  }
  // agenda in event creation end

  isClassAdded: boolean = false;


  onKeyPress() {
    // Check if the input field is empty
    if (this.agendaInputs===undefined||this.agendaInputs.trim() === '') {
      // If input field is empty, remove the class
      this.isClassAdded = false;
    } else {
      // If input field is not empty, add the class
      this.isClassAdded = true;
    }
  }


  ////////////////////////////////////////// Meeting Edit Functionality End /////////////////////////////////////////////////////


  ///////////////////////////////////////// Meeting End functionality start //////////////////////////////////////////////
  Action_item: any = [];
  interval: any = 0;
  repeatMeeting: boolean = false

  @ViewChild('exampleModal') exampleModal: ElementRef;


  EndMeetingSweetAlertBox() {

    Swal.fire({
      title: 'All agenda still not complete ?',
      text: 'Do you want to repeat this meeting',
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, open the modal
        this.repeatMeeting = true;
        document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "block";
        // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
        this.ReshudingTaskandEvent();
        // if (modal) {
        //   modal.classList.add('show'); // Show the modal
        //   modal.style.display = 'block'; // Display the modal
        //   document.body.classList.add('modal-open'); // Add class to body for modal-open
        //   const backdrop = document.createElement('div');
        //   document.getElementById("rightbar-overlay").style.display = "block";
        //   document.body.appendChild(backdrop); // Add backdrop
        // }
      }
      else {
        const modal = document.getElementById('exampleModal');
        if (modal) {
          modal.classList.add('show'); // Show the modal
          modal.style.display = 'block'; // Display the modal
          document.body.classList.add('modal-open'); // Add class to body for modal-open
          const backdrop = document.createElement('div');
          document.getElementById("rightbar-overlay").style.display = "block";
          document.body.appendChild(backdrop); // Add backdrop
        }
      }
    })
  }

  closeModal() {
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.remove('show'); // Show the modal
      modal.style.display = 'none'; // Display the modal
      document.body.classList.remove('modal-open'); // Add class to body for modal-open
      const backdrop = document.createElement('div');
      document.getElementById("rightbar-overlay").style.display = "none";
      document.body.appendChild(backdrop); // Add backdrop
    }
  }



  Insert_meetingreport() {
    this.Action_item = []

    this._TodoList.forEach(element => {
      this.Action_item.push(element.Assign_Id)

    });

    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Note = this.Notes_Type;
    this._calenderDto.Action_item = this.Action_item.join(',')
    this._calenderDto.User_list = this.checkedusers.join(',');
    this._calenderDto.Dms = this.checkeddms.join(',');
    this._calenderDto.Portfolio = this.checkedportfolio.join(',');
    this._calenderDto.Project = this.checkedproject.join(',');

    this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
      (data => {
        // this.notifyService.showSuccess("Successfully", "Completed");
        // window.close();
        this.GetcompletedMeeting_data();
        if (this.Meetingstatuscom == 'Completed') {
          this.interval == 0;
          if (this.interval == 0) {
            clearInterval(this.interval);
          }
        }
      });
    const modalElement = document.getElementById('exampleModal');

    // Close the modal by removing the "show" class from the modal element
    if (modalElement) {
      modalElement.classList.remove('show');

      // Additionally, you might want to reset the modal backdrop (optional)
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
        modalBackdrop.parentNode?.removeChild(modalBackdrop);
      }
    }

    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
    this.notifyService.showSuccess("Meeting completed successfully", "Success");
    document.getElementById("exampleModal").style.display = "none";
    document.getElementById("rightbar-overlay").style.display = "none";
  }


  ///////////////////////////////////////// Meeting End functionality End //////////////////////////////////////////////

  limit = 60;  // Set the initial limit
  limited_data = 98;

  isExpanded = false;
  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }

  limit_data = 75;
  isExpandeds = false;
  _toggleReadMore() {
    this.isExpandeds = !this.isExpandeds;
  }


  Select_flag(val) {
    this._PopupConfirmedValue = val;

  }




  isFilteredOn:boolean=false;
  searchingResult: boolean = false;
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

            if(this.projectmodaltype=='project' && this.linkProject==true ){
              this.ProjectListArray=this.ProjectListArray.filter((res)=>{
                return !this.Project_code.some(att => att.stringval === res.Project_Code);
              });
            }

          }
      });
     }
     else
     this.inputTyped=inputtext;

  }


  choosedItems:any=[];
  basedOnFilter:any={};

  projectmodal() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("projectmodals").style.display = "block";

  }
  close_projectmodals() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("projectmodals").style.display = "none";
    this.Assigntext = '';
    this.selectedAttendeesList.clear();
    this.assignCount=0
  }
  project_filter() {
    document.getElementById("project-filter").classList.add("show");
    document.getElementById("filter-icon").classList.add("active");
  }
  close_project_filter() {
    document.getElementById("project-filter").classList.remove("show");
    document.getElementById("filter-icon").classList.remove("active");
  }

  project_filters() {
    document.getElementById("project-filter1").classList.add("show");
    document.getElementById("filter-icon").classList.add("active");
  }
  close_project_filters() {
    document.getElementById("project-filter1").classList.remove("show");
    document.getElementById("filter-icon").classList.remove("active");
  }

  companies_Arr:any;


  projectmodaltype:'project'|'portfolio'|'SMail'|'participant'|undefined;

  projectmodals(modaltype:'project'|'portfolio'|'SMail'|'participant'){

    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("projectmodal").style.display = "block";
    this.projectmodaltype=modaltype;
    const searchField:any=document.querySelector(`#projectmodal input#${modaltype=='project'?'PrjInputSearch':'InputSearch'}`);
    if(searchField)searchField.focus();

    // if(modaltype==='PROJECT')
    // this.onProjectSearch('');
    if(modaltype==='project'){
      this.onProjectSearch('');
      this.choosedItems.getPcodes=()=>{
          return this.choosedItems.map(item=>item.Project_Code);
      }
    }

    if(modaltype!='project')
      this.onInputSearch('');
  }
  close_projectmodal(){
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("projectmodal").style.display = "none";
    this.Assigntext = ''
    this.choosedItems=[];   // clear selections.
    this.isFilteredOn=false;
    this.basedOnFilter.byuser=null;
    this.basedOnFilter.bycompany=null;    // clear filter applied.
    this.FilteredResults=[];             // clear filtered result.
    this.projectmodaltype=undefined; // no model open.


    this.linkSMail=false;
    this.linkPortf=false;
    this.linkProject=false;
    
  }
  FilteredResults:any=[];

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


    if(this.linkSMail==false  && this.linkPortf==false && this.linkProject==false){
      this.FilteredResults=result;
    }
    else if(this.projectmodaltype=='SMail' && this.linkSMail==true ){
      this.FilteredResults=result;
      this.FilteredResults=this.FilteredResults.filter((res)=>{
      return !this._MemosSubjectList.some(att => att.MailId === res.MailId);
    });
    }
    else if(this.projectmodaltype=='portfolio' && this.linkPortf==true ){
      this.FilteredResults=result;
      this.FilteredResults=this.FilteredResults.filter((res)=>{
        return !this.portfolio_Scheduledjson.some(att => att.numberval === res.portfolio_id);
      });
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










  onItemChoosed(choosed:any,choosedItem:any){
    
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

  agendaside(index: number) {

    const agendaListElement = document.getElementById(`agendalist-${index}`);
    const agendaArrowElement = document.getElementById(`agendaarrow-${index}`);

    if (agendaListElement && agendaArrowElement) {
      agendaListElement.classList.toggle("active");
      agendaArrowElement.classList.toggle("rotate");
    }
  }





  activeAgendaIndexAttendees: number | null = null;

  toggleMenu(i: number): void {
      this.activeAgendaIndexAttendees = this.activeAgendaIndexAttendees === i ? null : i;
  }



  History_meeting() {
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("History_sidebar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";


    // this.NewGetRecurrenceMeetings(0);
    this.GetPreviousdate_meetingdata();
  }

  closeHistoryInfo() {
    $("#previousmeeting-tab").addClass("active");
    $("#previousmeeting").addClass("show active");

    $("#upcomingmeeting-tab").removeClass("active");
    $("#upcomingmeeting").removeClass("show active");

    document.getElementById("History_sidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";

  }
  searchUser: any

  showDropdown = false;

  toggleDropdown() {
    this.activeAgendaIndex = 0
    this.showDropdown = !this.showDropdown;
  }


  toggleDropdowns() {
    this.activeAgendaIndex = 0
    this.showDropdown = false;
  }

  previous_filter() {
    document.getElementById("dropd").classList.toggle("show");
  }













  // onCheckboxChanges(event: Event, url: string, fileName: string) {
  //   const checkbox = event.target as HTMLInputElement;
  //   if (checkbox.checked) {
  //     this.downloadFile(url, fileName);
  //     // Uncheck the checkbox after triggering the download
  //     checkbox.checked = false;
  //   }
  // }

  // downloadFile(url: string, fileName: string) {
  //   fetch(url)
  //     .then(response => response.blob())
  //     .then(blob => {

  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement('a');
  //       a.href = url;
  //       a.download = fileName;
  //       document.body.appendChild(a);
  //       a.click();
  //       a.remove();
  //       window.URL.revokeObjectURL(url);
  //     })
  //     .catch(error => console.error('Error downloading file:', error));
  // }



  selectedFiles: { url: string, fileName: string }[] = [];

  onCheckboxChanges(event: Event, url: string, fileName: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedFiles.push({ url, fileName });
    } else {
      this.selectedFiles = this.selectedFiles.filter(file => file.url !== url);
    }
  }

  downloadSelectedFiles() {
    this.selectedFiles.forEach(file => {
      this.downloadFile(file.url, file.fileName);
    });

    this.clearSelectedCheckboxes();
    this.selectedFiles = [];  // Clear selected files after download
  }

  downloadFile(url: string, fileName: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(fileURL);
      })
      .catch(error => console.error('Error downloading file:', error));
  }
  

  clearSelectedCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="Checkboxes15"]');
    checkboxes.forEach((checkbox: HTMLInputElement) => {
      checkbox.checked = false;
    });
  }

  //////////////////////////////////////// Repeat Meeting section Start ///////////////////////////////////////////
  

  date_menu(dialogId: string) {
   
    document.getElementById(dialogId).classList.add("show");
    // document.getElementById('date-menu').classList.add("show");
    // document.getElementById('drop-overlay').classList.add("show");
    $('#date-menu').addClass('show');
    $('#drop-overlay').addClass('show');

    this._StartDate = this.disablePreviousTodayDate;
    
  }
  date_menu_close(dialogId: string) {
    document.getElementById(dialogId).classList.remove("show");
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
  ////////////////////////////////////// Repeat Meeting  section End /////////////////////////////////////////////
  activeIndex: number | null = null;

  markAdmin(index) {
    document.getElementById(`mark-admin-drop${index}`).classList.add("show");
    this.activeIndex = index;
  }

  closemarkAdmin(index) {
    document.getElementById(`mark-admin-drop${index}`).classList.remove("show");
    if (this.activeIndex === index) {
      this.activeIndex = null;
    }
  }

  earlyDate: boolean = false;
  Project_NameScheduledjson: any[] = [];
  draftid: number = 0;


  submitEventToRepeat() {
    this._EndDate = this.EventScheduledjson[0]['End_date'];

    const input_date = moment(this._StartDate, 'YYYY-MM-DD');
    const current_date = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');
    if (input_date < current_date) {
      this.earlyDate = true;
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
        element[vMasterCode] = this.Project_NameScheduledjson.map(pr => pr.stringval).join(',');

        var vUser_Name = "User_Name";
        element[vUser_Name] = this.User_Scheduledjson.map(ur => ur.stringval).join(',');

        var vLocation_Type = "Location_Type";
        element[vLocation_Type] = this.EventScheduledjson[0].Location;

        var vLocation_fulladd = "FullAddress_loc";
        element[vLocation_fulladd] = this.EventScheduledjson[0].FullAddress_loc

        var vLocation_url = "Addressurl";
        element[vLocation_url] = this.EventScheduledjson[0].Addressurl;

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
        element[vPortfolio_name] = this.portfolio_Scheduledjson.map(ptf => ptf.numberval).join(',');

        var vDMS_Name = "DMS_Name";
        element[vDMS_Name] = this.EventScheduledjson[0].DMS_Name;

        var vAgendas = "Meeting_Agendas";
        const mtgAgendas = JSON.stringify(this.EventScheduledjson[0].Agendas.map(agd => ({ index: agd.AgendaId, name: agd.Agenda_Name })));
        element[vAgendas] = mtgAgendas;
        //
      });
      console.log(finalarray, 'finalarray')
      this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
      if (this.Schedule_ID != 0) {
        this._calenderDto.Schedule_ID = this.Schedule_ID;
      }
      else {
        this._calenderDto.Schedule_ID = 0;
      }
      this._calenderDto.draftid = this.draftid;
      console.log(this._calenderDto, 'Rapeat testing')
      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {

          this._Message = data['message'];
          if (this._Message == "Updated Successfully") {
            this.notifyService.showSuccess(this._Message, "Success");
          }
          else {
            this.notifyService.showError(this._Message, "Failed");
          }
          //this.GetScheduledJson();
          this._SEndDate = moment().format("YYYY-MM-DD").toString();
          // this.TImetable();
          this.minDate = moment().format("YYYY-MM-DD").toString();
          this.maxDate = null;
          // this.TImetable();
          this.closeevearea();
          this.Close_Repeat_Meeting();

        });
    }
    else {
      alert('Please Select Valid Date and Time');
    }
  }


  onCustomBtnClicked(){
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
        this.Close_Repeat_Meeting();
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




         if (this.ScheduleType == 'Event') {
          this.allAgendas=this.EventScheduledjson[0]['Agendas'].map(item=>({index:item.AgendaId,name:item.Agenda_Name}));
          this.GetProjectAndsubtashDrpforCalender();
          this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
          this.MasterCode = [];
          this.projectsSelected=[];
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
          document.getElementById("subtaskid").style.display = "none";
          document.getElementById("Guest_Name").style.display = "flex";
          document.getElementById("Location_Name").style.display = "none";
          document.getElementById("Descrip_Name").style.display = "flex";
          document.getElementById("core_viw121").style.display = "flex";
          document.getElementById("core_viw123").style.display = "none";
          document.getElementById("core_viw222").style.display = "flex";
          document.getElementById("core_Dms").style.display = "flex";
       
      
          this._StartDate=null;
          this.disablePreviousDate = null;
          setTimeout(()=>{
            this._StartDate=this.disablePreviousTodayDate;
            this.disablePreviousDate = this.disablePreviousTodayDate;
          },0);
        
          // const TEsb = document.getElementById('TaskEvent-Sidebar')
          // TEsb.addEventListener('scroll', () => {
          //   this.autocompletes.forEach((ac) => {
          //     if (ac.panelOpen)
          //       ac.updatePosition();
          //   });
          // })

         }

      });

    this.closeevearea();

  }


  isValidURL = true;

  onSubmitBtnClicked() {

    if (
      (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
      (this.Description_Type?(this.characterCount<=500):true)&&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ? this.allAgendas.length > 0 : true)
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

//////////////////////////////////////////////////// Meeting Sidebar sectoion Start////////////////////////////////////////////////////////////


previousmeetings:[any] | null;
upcomingmeetings: [any] | null;
previousWithUpcoming_loader: boolean = false;
totalupcomingmeetings:any;
totalpreviousmeetings:any;


NewGetRecurrenceMeetings(meetings_HTR){

  this.previousWithUpcoming_loader=true;
  this.previousmeetings=null;
  this.upcomingmeetings=null;
  this._calenderDto.Schedule_ID=this.Scheduleid;
  this._calenderDto.Emp_No=this.Current_user_ID;
  this._calenderDto.Status_type=meetings_HTR;
  this.CalenderService.GetRecurrenceMeetingsService(this._calenderDto).subscribe((data)=>{
    this.previousWithUpcoming_loader=false

     if(data['previousmeetings']){
      this.previousmeetings = JSON.parse(data['previousmeetings']);

      this.previousmeetings.map(meetings => {
         meetings.Addguest=JSON.parse(meetings.Addguest)
      })


      this.previousmeetings.forEach(meeting => {

        if (meeting.Addguest.length > 3) {
          const remainingGuests = meeting.Addguest.slice(3);
          meeting.Addguest = meeting.Addguest.slice(0, 3);
          meeting['RemainingGuests'] = remainingGuests.map(data=>data.TM_DisplayName)
          meeting['RemainingGuestsCount'] = remainingGuests.length;

        } else {
          meeting['RemainingGuests'] = [];
        }
      });

      this.totalpreviousmeetings=this.previousmeetings.length;
      console.log(this.previousmeetings,'previousmeetings2');
     }else if(data['upcomingmeetings']){

      this.upcomingmeetings = JSON.parse(data['upcomingmeetings']);
      this.upcomingmeetings.map(upmeetings=>{
        upmeetings.Addguest=JSON.parse(upmeetings.Addguest)
      })


      this.upcomingmeetings.forEach(meeting => {
        if (meeting.Addguest.length > 3) {
          const remainingGuests = meeting.Addguest.slice(3);
          meeting.Addguest = meeting.Addguest.slice(0, 3);
          meeting['RemainingGuests'] = remainingGuests.map(data=>data.TM_DisplayName)
          meeting['RemainingGuestsCount'] = remainingGuests.length;
        } else {
          meeting['RemainingGuestsCount'] = 0;
        }
      });
      this.upcomingmeetings.reverse()
      this.totalupcomingmeetings=this.upcomingmeetings.length;
      console.log(this.upcomingmeetings,'upcomingmeetings2');

     }
  })
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

//////////////////////////////////////////////////// Meeting Sidebar sectoion End ////////////////////////////////////////////////////////////








//////////////////////////////////////////////////// Request access sectoion Start ////////////////////////////////////////////////////////////


  Usercomment: string = '';
  isRequestDialogOpen: boolean = false;
  isRequestSent: boolean = false;
  ishide:boolean=true;
  formFieldsRequired:boolean=false;

openRequestDialog() {
  this.isRequestDialogOpen = true;
  $('.hide-button').addClass('d-none');
}

closeRequestDialog() {
  this.isRequestDialogOpen = false;
  this.Usercomment = '';
  $('.hide-button').removeClass('d-none');
}


sendRequest(): void {

  if (!this.Usercomment){
    this.formFieldsRequired=true;
    return
  }
  else{
    this.formFieldsRequired=false;
    var Project_Code = null;
    this.projectMoreDetailsService.NewInsertProjectRequestAccesss(Project_Code,this.Usercomment,this.Current_user_ID,this.Scheduleid).subscribe(res => {
       console.log(res,'resrponse of the meeting details page');
      this.closeRequestDialog();
      Swal.fire('Request Sent Successfully');
      this.isRequestSent = true;
      this.ishide=false
      $('.hide-content').addClass('d-none');

       });

  }
}


multiapproval_json:any;
totalCountOfList:any;
requestaccessList:any;


getMeetingApprovals(){

  this.approvalObj.Schedule_Id=this.Scheduleid;
  this.approvalObj.Emp_no =this.Current_user_ID;

 this.approvalservice.NewGetMeetingApprovals(this.approvalObj).subscribe((data) => {

   var multiapproval_json=data[0].multiapproval_json;
   this.multiapproval_json=JSON.parse(multiapproval_json);
   console.log(this.multiapproval_json,'testing 1233')
   this.totalCountOfList=this.multiapproval_json.length;
   this.requestaccessList=JSON.parse(data[0]['requestaccessList']);

   this.requestaccessList.forEach((res)=>{
      if(res.Submitted_By_EmpNo==this.Current_user_ID){
        this.isRequestSent = true;
      }
   })
 })
}


UpdateMeetingRequestAccess(SNo,Type){

  this.approvalObj.SNo=SNo;
  this.approvalObj.Schedule_Id =this.Scheduleid;
  this.approvalObj.Type = Type;

 this.approvalservice.NewUpdateMeetingRequestAccess(this.approvalObj).subscribe((data) => {
  if(data['Type']=='Accept'){
    this.notifyService.showSuccess("Request access accept ", "Success");
  }else if(data['Type']=='Reject'){
    this.notifyService.showSuccess("Request access reject", "Success");
  }
    console.log(data,'appraval data in the dashboard');
    this.getMeetingApprovals();
 })
}




getShorterName(name:string|undefined){
  if(name)
   return name.split(' ').map(wrd=>wrd[0]).slice(0,2).join('')
  return '';
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
// let link_d=this.Link_Details.replace(/&#160;/g, ' ');
//  link_d=this.anchoredIt(link_d);

//////////////////////////////////////////////////// Request access sectoion end ////////////////////////////////////////////////////////////


characterCount: number = 0;

updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.Description_Type;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}


isExpanded_Report: boolean = false;
toggleView() {
  this.isExpanded_Report = !this.isExpanded_Report;
}



//////////////////////////////////////////////////// Activity sidebar start ////////////////////////////////////////////////////////////

allActivityList:any=[];
meetingStartedTime:any;
isFiltered:any=false;
listActivityMemos:any;



 GetMemosActivity() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.listActivityMemos = JSON.parse(data['JsonData']);
      });
  }



GetMeetingActivity(){
  this.approvalObj.Schedule_Id=this.Scheduleid;

  this.approvalservice.NewGetMeetingActivity(this.approvalObj).subscribe((data)=>{
  this.allActivityList=JSON.parse(data[0].ActivityList);

  console.log(this.allActivityList,'allActivityList2373');
 
  const memoMap = new Map(this.listActivityMemos.map(m => [m.MailId.toString(), { id: m.MailId, name: m.Subject }]));

  this.allActivityList.forEach(item => {
      if (item.Value.trim() === 'S Mail link(s) added' || item.Value.trim() === 'S Mail link(s) deleted' || item.Value.trim() === 'SM link(s) changed' || item.Value.trim() === 'SM link(s) added') {
        item.New_Value = JSON.stringify(
          item.New_Value.split(',').map(id => memoMap.get(id.trim())).filter(Boolean)
        );
      }
    });

    this.allActivityList = this.allActivityList.map(item => ({
      ...item,
      Old_Value: this.isJson(item.Old_Value) ? JSON.parse(item.Old_Value) : [{ name: item.Old_Value }],
      New_Value: this.isJson(item.New_Value) ? [JSON.parse(item.New_Value)] : [{ name: item.New_Value }]
    }));




  this.allActivityList.forEach(activity => {
  ['Old_Value', 'New_Value'].forEach(key => {
    if (typeof activity[key] === 'string') {
      activity[key] = JSON.parse(activity[key]);
    }
    if (activity[key] && Array.isArray(activity[key])) {
      activity[key].forEach(item => {
        if (item.name && item.name.includes('<font')) {
          const div = document.createElement('div');
          div.innerHTML = item.name;
          item.name = div.textContent || div.innerText || '';
        }
      });
    }
  });
});




this.allActivityList.forEach(item => {
  if (Array.isArray(item.New_Value) && Array.isArray(item.New_Value[0])) {
    item.New_Value = item.New_Value[0];
  }
});



// Link details undefined subjects start
this.allActivityList.forEach(activity => {
  if (activity.Value === "Link details changed") {
    ["Old_Value", "New_Value"].forEach(key => {
      activity[key] = activity[key].map(item => {
        if (item.name) {
          item.name = item.name
            .split(", ")
            .filter(part => !part.includes("undefined") && !part.includes("null"))
            .join(", ");
        }
        return item;
      });
    });
  }
});

// Link details undefined subjects end

    this.allActivityList.forEach(obj => {
      if (["Joined meeting", "Meeting Started"].includes(obj.Value)) {
        obj.New_Value[0].name = obj.New_Value[0].name.replace(
          /\bat: (\d{2}):(\d{2}):(\d{2})\b/,
          (_, h, m) => `at: ${(h % 12 || 12)}:${m} ${+h < 12 ? "AM" : "PM"}`
        );
      }
    });


    this.meetingStartedTime = this.allActivityList.find(x => x.Value === 'Meeting Started')?.New_Value[0]?.name;
  
    if(this.isFiltered ==false){
    this.filteredActivityList = this.allActivityList
    console.log(this.allActivityList,'allActivityList');
    }
   

  })
}



todayActivity = new Date();

getDayDiff(date: string) {
  const oneDay = 86400000;
  return Math.floor((this.todayActivity.getTime() - new Date(date).getTime()) / oneDay);
}


isJson(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}
//////////////////////////////////////////////////// Activity sidebar end ////////////////////////////////////////////////////////////

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


getFileType(fileName: string): string {
  // Extract the file extension from the file name
  const extension = fileName.split('.').pop()?.toLowerCase();
  return extension ? extension : '';
}


copied = false;

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


newDetails(ProjectCode) {
  let name: string = 'Details';
  var url = document.baseURI + name;
  var myurl = `${url}/${ProjectCode}`;
  var myWindow = window.open(myurl, ProjectCode);
  myWindow.focus();
}

// hasValidOldValue(item: any): boolean {
//   return item?.Old_Value?.some((data: any) => data.name && data.name.trim() !== '') ?? false;
// }

hasValidOldValue(item: any): boolean {  
  return Array.isArray(item?.Old_Value) &&
    item.Old_Value.some((data: any) => data?.name?.trim() !== '');
}




validateURL(value: string): void {
  if(value){
    this.isValidURL = /^(https?:\/\/)/.test(value);
  }else{
    this.isValidURL=true
  }
  
}


SearchingAgendaItem:any;

clear_search() {
 this.SearchingAgendaItem=null;
}
// close_search() {
//   document.getElementById("search-head-filter-open").classList.remove("search-head-filter-open");
// }





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
        
        })  
      }   
    });
}



openSidebarAP(item: any) {

  if (item > 0) {
    this.Slide_AssignTask();
  }
}

openSidebarPMN(count:any){
  if (count > 0) {
    this.Slide_meeting();
  }
}


selectAgenda(agendaIndex){

 var item = this.Agendas_List.find(item=>item.AgendaId == agendaIndex)
 var index = this.Agendas_List.findIndex(index=>index.AgendaId == agendaIndex)

 this.showAgendaDetails(item,index);

this.GetMeetingnotes_data()
}









Comp_No: string;
ProjectType_DB: any;
RACI_Resp: any;
RACI_Supp: any;
RACI_Autho: any;
RACI_Coor: any;
RACI_Informer: any;
RACI_Owner: any;
selectedProjectCode: string;
ObjUserDetails: UserDetailsDTO;
_ProjectDataList: any;
selectedEmpNo: string = null;
filtered_list:any=[];
PortfolioList: any;
selected_taskId:any;
selected_taskName:any= [];
copyofItem: { Task_Name: string, Assign_Id: any }[] = [];
Creation_Date:any
checkedTaskNames: { Task_Name: string, Assign_Id: any }[] = [];
selectedtaskNames: { Task_Name: string, Assign_Id: any }[] = [];
selectedOption: string = 'option1';
multiselect_dialog:'EMPLOYEES'|'PORTFOLIOS';
hasmultiselectFilter:boolean=false;
multiselectFilterConfig:any={};
selectedItem:any=[];
employeSelect:any;
selectedProjecttype: string = "";
port_id:any;
_remarks: string = "";
file: File | null = null;
noEndDate:boolean = false;
noStartDate : boolean = false;
myFilter:any;
ownerArr:any;
isHierarchy:boolean = false;






unassign_edit1(id, task, date, option){  

  this.task_id=id;

this.copyofItem.push({
  Task_Name: task,
  Assign_Id: id
});
this.selectedtaskNames=JSON.parse(JSON.stringify(this.copyofItem));   // copy of selected items.
this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
this.selected_taskId =  this.selectedtaskNames.map(task=>task.Assign_Id).join(', ');
this.Creation_Date = date;

  document.getElementById('unassign-editsidebar').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  const radioButton = document.getElementById('projectRadio1') as HTMLInputElement;
  const radioButton2 = document.getElementById('projectRadio2') as HTMLInputElement;
  if (radioButton && option == 'option1') { 
    radioButton.checked = true;
  }else if(radioButton2 && option == 'option2'){
    radioButton2.checked = true;
  }
 this.toggleProjectoptions(option);
  this.port_id = [];
  this.employeSelect = null;

  if(this.checkedTaskNames.length>0){
    this.selectedtaskNames=JSON.parse(JSON.stringify(this.checkedTaskNames));   // copy of selected items.
    this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
  }

  const TEsb = document.querySelector('#unassign-editsidebar .unassign-editsidebar-body');
      TEsb.addEventListener('scroll', () => {
        this.autocompletes.forEach((ac) => {
          if (ac.panelOpen)
            ac.updatePosition();
        });
  })
}


unassign_closeInfo(){
  document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  this.resetAssign()
  this.formFieldsRequired = false
}


toggleProjectoptions(option: string) {
  this.selectedOption = option;
  this.formFieldsRequired = false;
  this._StartDate = null
  this._EndDate = null
}


editTaskname(index: number) {
  $(`#agenda-label-assign-${index}`).addClass('d-none');
  $(`#agenda-text-field-assign-${index}`).removeClass('d-none');
  $(`#agenda-text-field-assign-${index}`).focus();
  $(`#edit-cancel-assign-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-assign-${index}`).removeClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-assign-${index}`).addClass('d-none');  // edit btn is invisible.
}

canceleditTaskname(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-assign-${index}`);
  tf.value = this.selectedtaskNames[index].Task_Name;
  $(`#agenda-label-assign-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-assign-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-assign-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-assign-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-assign-${index}`).removeClass('d-none');  // edit btn is visible.

}


updateTask(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-assign-${index}`);
  if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
  this.selectedtaskNames[index].Task_Name = tf.value;
  $(`#agenda-label-assign-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-assign-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-assign-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-assign-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-assign-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
} else if (tf.value.trim().length == 0){
  this.notifyService.showInfo("Please enter atleast one word","");
}else {
  this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
}

}

 openMultiSelectDialog(model_type:'EMPLOYEES'|'PORTFOLIOS'){
      this.multiselect_dialog=model_type;
      document.getElementById("multiselect-2-modal-backdrop").style.display = "block";
      document.getElementById("multiselect-2-dialog").style.display = "block";
      this.searchItems('');
      const searchField:any=document.querySelector(`#multiselect-2-dialog input#InputSearch`);
      if(searchField)searchField.focus();
  }

  fetchPortfolios(){
    this.ProjectTypeService.GetPortfoliosForAssignTask().subscribe(
      (data) => {  console.log("asdf::::::",data)
        this.PortfolioList = data as PortfolioDTO;
        console.log(this.PortfolioList,"portfoliosubn;");
      });
  }


    searchItems(_searchText:string){

    let keyname;
    let arrtype;
    let selectedinto;
    let property_name;
    if(this.multiselect_dialog=='EMPLOYEES')
    {
       keyname='DisplayName';
       arrtype=this.EmployeeList;
       selectedinto='employeSelect';
       property_name='Emp_No';
    }
    else if(this.multiselect_dialog=='PORTFOLIOS')
    {
       keyname='Portfolio_Name';  debugger
       arrtype=this.PortfolioList;
       selectedinto='port_id';
       property_name='Portfolio_ID';
    }


    const result=arrtype.filter(item=>{
      const unselected:boolean=!(this[selectedinto]&&this[selectedinto].includes(item[property_name]));
      let nameMatched:boolean=false;
      if(unselected)
      nameMatched=item[keyname].toLowerCase().trim().includes(_searchText.toLowerCase().trim())
      return nameMatched;
    });
    this.filtered_list=result;
  }


    showItemsFilter() {
      document.querySelector("#multiselect-2-dialog #project-filter").classList.add("show");
      document.querySelector("#multiselect-2-dialog #filter-icon").classList.add("active");
    }

    closeItemsFilter() {
      document.querySelector("#multiselect-2-dialog #project-filter").classList.remove("show");
      document.querySelector("#multiselect-2-dialog #filter-icon").classList.remove("active");
    }



    
  removeFilterConfig(){
    this.multiselectFilterConfig.byuser=null;
    this.multiselectFilterConfig.bycompany=null;
    this.hasmultiselectFilter=false;
    this.searchItems('');
   
  }

  closeMultiSelectDialog(){
      this.multiselect_dialog=null;
      this.selectedItem=[];
      this.filtered_list=[];
      this.multiselectFilterConfig={};
      this.hasmultiselectFilter=false;
      document.getElementById("multiselect-2-modal-backdrop").style.display = "none";
      document.getElementById("multiselect-2-dialog").style.display = "none";
  }


    addSelectedItems(){

    if(this.multiselect_dialog=='EMPLOYEES'){
      if (!this.employeSelect)   // if employeSelect is null,undefined,''
      this.employeSelect = [];  
      this.employeSelect=[...this.employeSelect,...this.selectedItem];
    }
    else if(this.multiselect_dialog=='PORTFOLIOS'){
      if (!this.port_id)   // if port_id is null,undefined,''
      this.port_id = [];   
      this.port_id=[...this.port_id,...this.selectedItem];
    }  
    this.closeMultiSelectDialog();
  }

    resetAssign(){
    this.selectedProjecttype = null
    this.employeSelect  = null

    // this.selected
    this.port_id  = null
    this._remarks  = null
    this.file=null

    this._StartDate = null
    this._EndDate = null

    this.selectedtaskNames=null;
    this.selected_taskName = null;
    this.copyofItem = []
  }

datesCheck() {
  this.noEndDate = false;
}


enddateChecker(){  debugger
  this.noStartDate=true;
  this.myFilter = (d: Date | null): boolean => {
    if(d instanceof Date){
      // Prevent Saturday and Sunday from being selected.
       const day=d.getDay();
       return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
    }
    else
    return false;
  };
}


  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = 1;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.filterText;
    this.ProjectTypeService.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
      const all_projects_ofuser = JSON.parse(data[0]['DropdownProjects_Json']);
      //for listdown only valid projects.
      this._ProjectDataList=all_projects_ofuser.filter(p=>['Cancelled','Project Hold'].includes(p.Status)==false);
      console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }








   ProjectOnSelect() {
      // this.selectedProjectCode = obj['Project_Code'];
      this.BsService.setSelectedProjectCodeFromRunwayTask(this.selectedProjectCode);
      this.ProjectTypeService.SubTaskDetailsService(this.selectedProjectCode).subscribe(
        (data) => {
          console.log(data,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
          let ProjectInfo_List: any;
          ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
          this.RACI_Autho = ProjectInfo_List[0]['Authority'];
          this.RACI_Coor = ProjectInfo_List[0]['Coor'];
          this.RACI_Informer = ProjectInfo_List[0]['Informer'];
          this.RACI_Resp = ProjectInfo_List[0]['Responsible'];
          this.RACI_Supp = ProjectInfo_List[0]['Support'];
          this.RACI_Owner = ProjectInfo_List[0]['OwnerEmpNo'];
          this.Comp_No = ProjectInfo_List[0]['Emp_Comp_No'];
          this.ProjectType_DB = ProjectInfo_List[0]['Project_Block'];
          this.BsService.setProjectAuthoity(this.RACI_Autho);
        });
        this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode,this.Current_user_ID).subscribe(
          (data) => {
            this.ownerArr=(JSON.parse(data[0]['RacisList']));
            // this.nonRacis=(JSON.parse(data[0]['OtherList']));
            // this.allUsers=(JSON.parse(data[0]['alluserlist']));
            console.log(this.ownerArr,"groupby");
          }); 
          this.getPrj_Info()
    }



owner:any
ProjectDeadLineDate:any
Owner_Empno:any;
Resp_empno:any;
Autho_empno:any

    getPrj_Info(){
      this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {

        this.ProjectDeadLineDate = data["DeadLine"];
        this.owner=data["Owner_empno"];
         this.Owner_Empno = data['Owner_empno'];
        this.Resp_empno = data['Resp_empno'];
       this.Autho_empno = data['Autho_empno'];

      });
      this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID,this.selectedProjectCode).subscribe((data) => {
        if(data['message']=='1'){
           this.isHierarchy=true;
        }
        else{
           this.isHierarchy=false;
        }
      });

    }




selectFile() {
  this.fileInput.nativeElement.click();
}

fileAttachment: any;
FileName:any;
selectedFileName: string | null = null;
contentType:any="";


onFileChanged(event: any) {

  const files: File[] = event.target.files;

  if (files && files.length > 0) {
    this.file = files[0];
    this.fileAttachment =  this.FileName
    this.selectedFileName =  this.FileName
    this.fileAttachment = this.file;
    this.selectedFileName = this.file.name;
    console.log('File Object:', this.file);
    this.contentType=this.getFileExtension(this.fileAttachment.name);
  }
  else {
    this.file = null;
    this.fileAttachment = null;
    this.selectedFileName = null;
    this.FileName = null
  }
  // Reset file input value to allow selecting the same file again
  this.fileInput.nativeElement.value = '';
}


getFileExtension(fileName: any): string | null {
  if (!fileName) {
    return null;
  }
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
}


  onItemClicked(hasChecked:boolean,_item:any){
     if(hasChecked){
       this.selectedItem.push(_item);
     }
     else{
      const _index=this.selectedItem.indexOf(_item);
      if(_index>-1){
        this.selectedItem.splice(_index,1);
      }
     }
   
  }


  removeSelectedItem(listtype:'EMPLOYEES'|'PORTFOLIOS',item:string){
    switch(listtype){
       case 'EMPLOYEES':{
        const rmindx=this.employeSelect.findIndex(em=>em==item);
        this.employeSelect.splice(rmindx,1);
       };break;
       case 'PORTFOLIOS':{
        const rmindx=this.port_id.findIndex(ptf=>ptf==item);
        this.port_id.splice(rmindx,1);
       };break;
       default:{};
    }
  }



_message: string;
start_dt:any =new Date();
end_dt:any =new Date();
maxAllocation: number;




alertMaxAllocation() {
  if (this._StartDate == null || this._EndDate == null) {
    this._message = "Start Date/End date missing!!"
  }
  else {
    // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
    // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
    this.start_dt=new Date(this._StartDate);
    this.end_dt=new Date(this._EndDate);

    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")

    var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days==0){
      Difference_In_Days=-1;
      this.maxAllocation = (-Difference_In_Days) * 10 / 1;
    }
    else{
      this.maxAllocation = (-Difference_In_Days) * 10 / 1 +10;
    }
    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")
  }
}






assignTasksub1(){  
    this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
    this.selected_taskId =  this.selectedtaskNames.map(task=>task.Assign_Id).join(', ');
    console.log( this.selected_taskName,"pending")

    if (this.employeSelect == null || this.employeSelect == undefined && this.selected_taskName == null || this.selected_taskName == undefined || this.selected_taskName.trim() == "") {
      this.formFieldsRequired = true
      return
    }
    else {
      this.formFieldsRequired = false
    }


    var datestrStart;
    var datestrEnd;
    if (this._StartDate != null && this._EndDate != null) {
      datestrStart = moment(this._StartDate).format();
      datestrEnd = moment(this._EndDate).format();
    }
    else {
      datestrStart = moment(new Date()).format();
      datestrEnd = moment(new Date()).format();
    }


    var ProjectDays;
    if (this._StartDate instanceof Date && this._EndDate instanceof Date) {
      const differenceInTime = this._EndDate.getTime() - this._StartDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      ProjectDays = differenceInDays;
    }
    else {
      ProjectDays = 0;
    }


    if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
      this.port_id =  this.port_id
    }
    else{
      this.port_id=0;
    }

  const fd = new FormData();   debugger
  fd.append("TaskName", this.selected_taskName.trim());
  fd.append("Desc", '');
  fd.append("ProjectType", this.selectedProjecttype);
  fd.append("AssignTo", this.employeSelect);
  fd.append("Portfolio_Id", this.port_id);
  fd.append("StartDate", datestrStart);
  fd.append("EndDate", datestrEnd);

  fd.append("ProjectDays", ProjectDays.toString());
  fd.append("Remarks", this._remarks);
  // fd.append("attachment",this.fileAttachment);
  fd.append("AssignedBy", this.Current_user_ID);
  fd.append("AssignIds", this.selected_taskId.toString());
  fd.append("TypeofTask", this.typeoftask);
  fd.append("contentType",this.contentType);
  if (this.fileAttachment) {
      fd.append("Attachment", "true");
  }
  else {
    fd.append("Attachment", "false");
    fd.append('file', "");
  }


 // this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
  this.ProjectTypeService._InsertAssignTaskServieCore(fd).subscribe(
    (data) => {
      // alert(data['message'])
      console.log(data,"checking")
      if(data['message']=="Assigned Successfully" && this.fileAttachment){
        fd.append('file', this.fileAttachment);
        fd.append('TaskName',data['taskName']);
        fd.append("contentType",data['contentType']);
        this.ProjectTypeService._AzureAssigntaskCore(fd).subscribe((event1: HttpEvent<any>) => {
          console.log(event1,"azure data");
          var myJSON = JSON.stringify(event1);
        });
      }
      console.log(data,'atattachmeatattachmeatattachmeatattachme')
        let message: string = data['message'];
        this.notifyService.showSuccess("Task sent to assign projects.", message);
        this.GetAssigned_SubtaskProjects();
        //69 this.refetchPageContent();  // rebind

      });
       this.checkedTaskNames = []
      this.resetAssign()
      this.unassign_closeInfo();
     

}




//   newCatid:any;


//69  refetchPageContent(){
//     this._ObjCompletedProj.PageNumber = 1;
//     this._ObjCompletedProj.Emp_No = this.Current_user_ID
//     this._ObjCompletedProj.CategoryId = this.newCatid;
//     this._ObjCompletedProj.Mode = 'Todo';
//     this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
//          this.CategoryList = JSON.parse(data[0]['CategoryList']);

//          // Prepare SystemCategory using CategoryList
//          this.SystemCategory = [];
//          this.CategoryList.forEach((item)=>{
//            if(  item.Category_ID == 2411 || item.Category_ID == 3595){
//              this.SystemCategory.push(item)
//            }
//          });

//         // Prepare userCategory using CategoryList
//         this.userCategory = [];
//         this.CategoryList.forEach((item)=>{
//         if(item.Category_ID !== 2411 && item.Category_ID !== 3595){
//           this.userCategory.push(item)
//         }
//         });

//         //Prepare accordian runways
//         this._TodoList = JSON.parse(data[0]['JsonData_Json']);
//         this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
//         this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
//         this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
//         this.openTab();

//         if(this.ActionedSubtask_Json.length>0 || this.ActionedAssigned_Josn.length>0 || this._TodoList.length>0){


//           //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
//           this._CategoryActive = true;

//           this.IfNoTaskFound = "";
//           this._Categoryid = data[0]["CategoryId"];
//           this._CategoryName = data[0]["CategoryName"];
//           this.ShowTaskList_Div = false;
//           this.Label_TaskName = false;
//           this.Textbox_EditTaskName = true;
//           this._taskName = "";

//           /// Get Tasks On Category Click  /////
//           this._ObjCompletedProj.PageNumber = 1;
//           this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
//           this._ObjCompletedProj.CategoryId = this._Categoryid;
//           this._ObjCompletedProj.Mode = 'Todo';
//           // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
//         }
//         this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
//         let _Accepted =0;
//         let _Pending =0;
//         let _Rejected=0;
//         this.ActionedAssigned_Josn.forEach(element => {
//           if(element.Status=="Accepted"){
//             _Accepted=_Accepted+1;
//           }
//           else if(element.Status == "Pending"){
//             _Pending=_Pending+1;
//           }
//           else if(element.Status == "Rejected"){
//             _Rejected=_Rejected+1;
//           }
//         });
//         this.CountsAccepted= _Accepted;
//         this.CountsPending= _Pending;
//         this.CountsRejected= _Rejected;

//     })
//   }


_allocated:any

    sweetAlert() {

    if(this._allocated &&this.selectedProjectCode&&this.selectedEmpNo&&this._StartDate &&this._EndDate&&this.selected_taskName&&this._allocated <= this.maxAllocation){
      this.formFieldsRequired = false
    }
    else{
      this.formFieldsRequired = true
      return
    }
        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {
          Swal.fire({
            title: 'Action deadine is greater than main project deadline ?',
            text: 'Do you want to continue for selection of date after main project deadline!!',

            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((response: any) => {
            if (response.value) {
              this.actionSubmit();
            } else if (response.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Action not created',
                'error'
              )
            }
          });
        }
        else if ((dateTwo < dateOne) && (this.Current_user_ID!=this.Owner_Empno && this.Current_user_ID!=this.Resp_empno && this.Current_user_ID!=this.Autho_empno && this.isHierarchy==false)) {
          Swal.fire({
            title: 'Unable to create this action.',
            text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
            // showCancelButton: true
          });

        }
        else {
          this.actionSubmit();
        }
      }



actionCost:any;
Sub_ProjectCode: any;
EmpNo_Autho: any;
ProjectBlock: string = null;
completionattachment:boolean=true;






  actionSubmit=async()=>{ 
  
  // Action cost calculate.
  this.actionCost=null;  // must be empty before calculating.
  const res:any=await this.service.GetCPProjectCost(this.selectedEmpNo,this._allocated.toString()).toPromise();
  if(res&&res.Status){
        this.actionCost=res.Data;
        console.log("action cost:",this.actionCost);
  }
  else{

    // test for new users (Temporary)
    const cost=this._allocated*10;
    this.actionCost=cost;
  
  }
  // Action cost calculate.
 
    this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
    this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {  debugger

      this.Sub_ProjectCode = data['SubTask_ProjectCode'];
      this.EmpNo_Autho = data['Team_Autho'];
      this.ProjectBlock = data['ProjectBlock'];
     
      console.log( this.task_id,'task_id')
      if (this.task_id != null) {
        this.ObjSubTaskDTO.AssignId = this.task_id;
      }
      else {
        this.task_id = 0;
      }


      this.ObjSubTaskDTO.SubProject_Name = this.selected_taskName;
      this.ObjSubTaskDTO.SubtaskDescription = "";
      this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
      this.ObjSubTaskDTO.StartDate = this._StartDate;
      this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;

      this.maxAllocation = this.maxAllocation * 8 / 1;
      this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
      this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
      this.ObjSubTaskDTO.Remarks = this._remarks;
      this.ObjSubTaskDTO.Duration = this._allocated;
      // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
     
  
      console.log( this.ObjSubTaskDTO,'ObjSubTaskDTO')
      var datestrStart = moment(this._StartDate).format("MM/DD/YYYY");
      var datestrEnd = moment(this._EndDate).format("MM/DD/YYYY");
      // alert(datestrStart)
      // alert(datestrEnd)
      console.log(datestrStart,this._StartDate,"startdate")
      console.log(datestrEnd,this._EndDate,"enddate")
      const fd:any = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Team_Autho", this.EmpNo_Autho);
      // fd.append('file', this._inputAttachments[0].Files);
      if ( this.fileAttachment) {
        fd.append("Attachment", "true");
      }
      else {
        fd.append("Attachment", "false");
        fd.append('file', "");
      }
      fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
      fd.append("SubtaskName", this.selected_taskName.trim());
      fd.append("Desc", "");
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("StartDate", datestrStart);
      fd.append("EndDate", datestrEnd);
      // fd.append("Allocated", this.maxAllocation.toString());
      fd.append("Emp_No", this.Current_user_ID);
      fd.append("AssignTo", this.selectedEmpNo);
      fd.append("Remarks", this._remarks);
      fd.append("EmployeeName", localStorage.getItem('UserfullName'));
      // fd.append("AssignIds", this.selected_taskId.toString());     
      fd.append("Owner", this.owner);
      fd.append("proState",this.completionattachment.toString());
      fd.append("actionCost",this.actionCost);
      fd.append("contentType",this.contentType);
      fd.append("AssignId", this.task_id.toString());

      if (this.ObjSubTaskDTO.Duration != null) {
        fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
      }
      else {
        this.ObjSubTaskDTO.Duration = 0;
      }

      for (let [key, value] of fd.entries()) {
        console.log(`${key}: ${value}`);
      }



    console.log("append", this.Sub_ProjectCode,this.EmpNo_Autho,this.ObjSubTaskDTO.MasterCode, this.selected_taskName
    , this.ProjectBlock,datestrStart,datestrEnd, this.Current_user_ID,this.selectedEmpNo, this._remarks
    ,localStorage.getItem('UserfullName'),this.task_id.toString(),this.owner,this.completionattachment,this.actionCost,this.contentType
   );


    console.log('new action to proj');
      fd.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
    console.log('new action to proj');


         
        this.service._InsertNewSubtaskcore(fd).subscribe((event: HttpEvent<any>) => { 
        if (event.type === HttpEventType.Response){
          var myJSON = JSON.stringify(event);
          this._Message = (JSON.parse(myJSON).body).message;
          console.log(this._Message,"this._Message");
          if(this._Message=='1'){
            if ( this.fileAttachment) {
              fd.append('file',  this.fileAttachment);
              this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
                console.log(event1,"azure data");
                var myJSON = JSON.stringify(event1);
              //  this._Message = (JSON.parse(myJSON).body);

              });}
            this.notifyService.showSuccess("Action created successfully", "Success");
          }
          else if(this._Message=='2'){
            if ( this.fileAttachment) {
              fd.append('file',  this.fileAttachment);
              this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
                console.log(event1,"azure data");
                var myJSON = JSON.stringify(event1);
              //  this._Message = (JSON.parse(myJSON).body);

              });}
            this.notifyService.showInfo("Request submitted to the Assigned employee","Action Under Approval");
          }
          else if(this._Message=='3'){
            this.notifyService.showError("Something went wrong", "Action not created");
          }
          else if(this._Message=='7'){
            this.notifyService.showError("Something went wrong", "Action not created");
          }
          else{
            this.notifyService.showError("Something went wrong", "Action not created");
          }
        }
        // this.GetTodoProjects();  // rebinding.
        this.GetAssigned_SubtaskProjects(); // rebinding.
        this.resetAssign()
        this.unassign_closeInfo();
        this.meeting_details()
      });

    this.resetActionvalue()
    this.unassign_closeInfo();
   
      });
  }




resetActionvalue(){
  this.selectedEmpNo = null;
  this.selectedProjectCode  = null;
  this._allocated  = null;
  this._remarks  = null;
  this.file=null;
  this._StartDate = null;
  this._EndDate = null;
}


startdatechecker(){
  this.noStartDate=false;
  this.noEndDate=true;
  this._EndDate=null;
}

updatedActivityUsers:any;
Activity_List:any; 

mergeActivityData(){
const filteredActivityList =[{type_Name:"Agendas"},{type_Name:"S Mail"},{type_Name:"Portfolio(s)"},{type_Name:"Project(s)"},{type_Name:"Attachment(s)"},
  {type_Name:"Notes"},{type_Name:"Task assigned"},{type_Name:"Action assigned"}
]



this.Activity_List = filteredActivityList.filter(activity =>
  this.allActivityList.some(item => 
    item.Value.toLowerCase().includes(
      activity.type_Name.replace(/\(s\)/gi, '').trim().toLowerCase()
    )
  )
);


  console.log(this.allActivityList,'activityType',this.Activity_List)

var ActivityUsers = [this.Organizer[0], ...this.User_Scheduledjson];
this.updatedActivityUsers = ActivityUsers.filter(user => 
  this.allActivityList.some(activity => activity.Modified_by == user.stringval)
);


}


actvsFltrBy:{ activityType:string, empType:string }={ activityType:'all',empType:'all' };
FilteredPrjActivities:any=[];
filteredActivityList:any;


arrangeActivitiesBy(acttype:string,emptype:string){ 
  this.actvsFltrBy.activityType=acttype;
  this.actvsFltrBy.empType=emptype;
  this.actvsFltrBy.activityType = this.actvsFltrBy.activityType.replace(/\(s\)/g, '')
  const { empType, activityType } = this.actvsFltrBy;
  this.isFiltered = !(empType === 'all' && activityType === 'all'); // 👈 placed here

this.filteredActivityList = (empType === 'all' && activityType === 'all') 
  ? this.allActivityList 
  : this.allActivityList.filter(item =>
      (empType === 'all' || item.Modified_by == empType) &&
      (activityType === 'all' ||  item.Value.toLowerCase().includes(activityType.toLowerCase()))
    );
}

sanitize(text: string): string {
  return text?.replace(/\(s\)/g, '') || '';
}



formatDuration(dateStr: string) {
  const d1 = new Date(dateStr), d2 = new Date();
  if (d1.toDateString() === d2.toDateString()) return 'Today';
  let y = d2.getFullYear() - d1.getFullYear(), m = d2.getMonth() - d1.getMonth(), d = d2.getDate() - d1.getDate();
  if (d < 0) { m--; d += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); }
  if (m < 0) { y--; m += 12; }
  return `${y ? y + ' years ' : ''}${m ? m + ' months ' : ''}${d} days`.trim();
}




}
