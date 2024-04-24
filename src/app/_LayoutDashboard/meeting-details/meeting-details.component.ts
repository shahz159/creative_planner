import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
// import { SignalRService } from 'src/app/_Services/signal-r.service';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css'],

})
export class MeetingDetailsComponent implements OnInit {
  _ObjAssigntaskDTO: AssigntaskDTO;
  allTodos:any=[];
  todosVisible:boolean=false;
  Scheduleid: any
  URL_ProjectCode: any;
  currentAgendaView:any
  _MasterCode: string;
  Current_user_ID: string;

 _calenderDto: CalenderDTO;

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
        'link',
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
  private refreshSubscription: Subscription;
  constructor(
    private CalenderService:CalenderService,
    private route:ActivatedRoute,
    public service: ProjectTypeService,
    public notifyService: NotificationService,
    public _LinkService: LinkService,
    public ProjectTypeService: ProjectTypeService,
    private dialog: MatDialog,
    public router: Router,
    public BsService: BsServiceService
    // public signalRService: SignalRService
  ) {

    this._calenderDto=new CalenderDTO;
    this.objPortfolioDto = new PortfolioDTO();
    this._lstMultipleFiales = [];
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
  }



  _PopupConfirmedValue: number;
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
        var scode = params.get('scheduleid');
        this.Scheduleid = scode;
      });
      this.Schedule_ID=this.Scheduleid;

      this.route.paramMap.subscribe(params => {
        var pcode = params.get('scheduleid');
          this.URL_ProjectCode = pcode;
          this._MasterCode = pcode;
      });
      this.Current_user_ID = localStorage.getItem('EmpNo');
      this.meeting_details();
      this.addAgenda();
      // this.GetMeetingnotes_data();
      this.getDetailsScheduleId()
      this.GetAssigned_SubtaskProjects();
      this.GetMemosByEmployeeId_new();
      this.GetProjectAndsubtashDrpforCalender();
      this.GetTimeslabfordate()
    //   this.signalRService.startConnection();
    //   this.signalRService.addBroadcastMessageListener((name, message) => {
    //   console.log(`Received: ${name}: ${message}`);
    //   // Here you can update your view/model with the received message
    // });
    this._PopupConfirmedValue = 1;
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


  selectedText:any;

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

  makeLineAProject(){

  }

  makeLineAAction(){

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
  @ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;
  @ViewChild('fruitInput') fruitInput: ElementRef;
  @ViewChild('fruitInputpro')fruitInputpro:ElementRef;
  @ViewChild('fruitInputportfolio')fruitInputportfolio:ElementRef;
  @ViewChild('fruitInputs') fruitInputs: ElementRef;


  View_Attendees_Notes() {
    document.getElementById("Attendees_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("meetingdetails").classList.add("position-fixed");
    this.GetAttendeesnotes();
  }
  close_attendeesnotes_sideBar() {
    document.getElementById("Attendees_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }
  View_Private_Notes() {
    document.getElementById("Private_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("meetingdetails").classList.add("position-fixed");
  }
  close_privatenote_sideBar() {
    document.getElementById("Private_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("meetingdetails").classList.remove("position-fixed");
  }
  View_Meeting_Attendees() {
    document.getElementById("Meeting_Attendees").classList.add("kt-quick-active--on");
    this.GetProjectAndsubtashDrpforCalender();
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  close_meetingattendees_sideBar() {
    this.selectedEmployees=[];
    document.getElementById("Meeting_Attendees").classList.remove("kt-quick-active--on");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.fruitInput.nativeElement.value = '';
  }
  rightbar_overlay(){
    document.getElementById("Attendees_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("Private_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("Meeting_Attendees").classList.remove("kt-quick-active--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar2").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("meetingdetails").classList.remove("position-fixed");
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

  attach_btn() {
    document.getElementById("attach_heading").style.display = "block";
    document.getElementById("attach_div").style.display = "block";
    document.getElementById("attach_btn").style.display = "none";
    document.getElementById("upload_heading").style.display = "none";
    document.getElementById("upload_div").style.display = "none";
    document.getElementById("upload_btn").style.display = "block";
  }

  totaldms: number;
  DMS_Scheduledjson: any = [];
  dmsIdjson: any = [];
  EventScheduledjson: any = [];
  Schedule_ID: any;
  User_Scheduledjson: any = [];
  portfolio_Scheduledjson:any=[]
  Project_code:any
  Employeelist:any=[]
  Agendas_List:any=[]
  Attachments_ary:any=[]
  _TotalAttachment:any
  startTime: Date;
  meetingInProgress: boolean = false;
  meetingPaused: boolean = false;
  play:boolean=false;
  pause:boolean=false;
  meetingStopped: boolean = false;
  elapsedTime: number = 0;
  timer: any;
  duration: number = 60 * 60 * 1000; // 60 minutes * 60 seconds * 1000 milliseconds
  sched_admin: any;
  isCheckboxDisabled: boolean = false;
  Isadmin: boolean = false;
  Createdby:string;
  status:string;
  Meeting_status: boolean;
  Link_Detail:any
  totalguest: number;
  checkedusers: any = [];
  Guestcount: number;
  totalproject: number;
  checkedproject: any = [];
  projectcount: number;
  totalportfolios: number;
  checkedportfolio: any = [];
  portfoliocount: number;
  totalAgendaList:any
  completedAgendaList:any





meeting_details(){ 
    this._calenderDto.Schedule_ID=this.Schedule_ID;

    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data)=>{
    this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
    console.log("meeting details",this.EventScheduledjson)
    this.Agendas_List=this.EventScheduledjson[0].Agendas;
    this.totalAgendaList=this.Agendas_List.length;
    this.completedAgendaList=this.Agendas_List.filter(item=>item.Status==1)

    var x =this.Agendas_List.length

    this.Createdby=this.EventScheduledjson[0].Created_by;
    this.status=this.EventScheduledjson[0].Status;
    this.sched_admin=this.EventScheduledjson.Owner_isadmin;
    this.Link_Detail=this.EventScheduledjson[0].Link_Details;

   
  

    this.User_Scheduledjson= JSON.parse(this.EventScheduledjson[0].Add_guests);
    this.totalguest = this.User_Scheduledjson.length;


    this.User_Scheduledjson.forEach(element => {
      this.checkedusers.push(element.stringval);
      element.isChecked = true;
    });

    this.Guestcount = this.checkedusers.length;
   
    // var x = this.User_Scheduledjson.map(obj=>obj.TM_DisplayName);
    
    // console.log('meeting_details--->',x)
    this.portfolio_Scheduledjson=JSON.parse(this.EventScheduledjson[0].Portfolio_Name)
    this.totalportfolios = this.portfolio_Scheduledjson.length;
    this.portfolio_Scheduledjson.forEach(element => {
      this.checkedportfolio.push(element.numberval);
      element.isChecked = true;
    });


    this.portfoliocount = this.checkedportfolio.length;
    this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
    this._TotalAttachment=this.Attachments_ary.length;


    this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
    this.Project_code=JSON.parse(this.EventScheduledjson[0].Project_code);

    console.log('Project_code',this.Project_code);
    
    this.totalproject = this.Project_code.length;

    this.Project_code.forEach(element => {
      element.isChecked = true;
      this.checkedproject.push(element.stringval);

    });
    this.projectcount = this.checkedproject.length;



    this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
    this.sched_admin = this.EventScheduledjson[0]['Owner_isadmin']
    this.Meeting_status=this.EventScheduledjson[0].Meeting_status;
    


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
   })
}

 getInitials(name) {
  var initials = name.match(/\b\w/g) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials;
}

  startMeeting() {
    this.play=true;
    this.startTime = new Date();
    this.meetingInProgress = true;
    this.timer = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime.getTime();
      if (this.elapsedTime >= this.duration) {
        this.stopMeeting();
      }
    }, 1000);
    console.log(this.startTime,'ijfbviabfvbsvskjvbzsib')
  }

  pauseMeeting() {
    this.play=false;
    this.pause=true;
    clearInterval(this.timer);
    this.meetingPaused = true;
  }

  resumeMeeting() {
    this.play=true;
    this.pause=false;
    this.startTime = new Date(new Date().getTime() - this.elapsedTime);
    this.meetingPaused = false;
    this.timer = setInterval(() => {
      this.elapsedTime = new Date().getTime() - this.startTime.getTime();
      if (this.elapsedTime >= this.duration) {
        this.stopMeeting();
      }
    }, 1000);
  }

  stopMeeting() {
    clearInterval(this.timer);
    this.meetingInProgress = false;
    this.meetingStopped = true;
  }

  leaveMeeting() {
    this.play=false;
    this.pause=false;
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

  formatTime(ms: number): string {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }


/////////////////////////////////////////// DMS Side-Bar Start /////////////////////////////////////////////////////////


selectedEmpId: any = [];
 isDMSDrpDwnOpen: boolean = false;
 Memos_List: any;
 _linkedMemos: number = 0;
 selectedMemos: { MailId: number, Subject: string }[] = new Array();
 originalDMSList:any[];
 _MemosSubjectList: any;
 checkeddms: any = [];
 dmscount: number;
 selectedEmploy_DMS: any = [];



addNewDMS() {

    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetMemosByEmployeeId();  //drpdwn
    this.GetDMSList();

  }

  GetDMSList(){

    this._LinkService._GetMemosSubject(this.dmsIdjson).subscribe((data) => {
    
      if(data){
        this._MemosSubjectList = JSON.parse(data['JsonData']);
       
      }
   
      console.log(this._MemosSubjectList,'DMS Link')

      this._MemosSubjectList.forEach(element => {
       this.checkeddms.push(element.MailId);
       element.isChecked = true;
     });
         
      this.checkeddms = this.checkeddms.map((num) => num.toString());
      this.dmscount = this.checkeddms.length;

    });
}

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
      
        this.Memos_List = JSON.parse(data['JsonData']);    
        this._linkedMemos= this.Memos_List.length
     
        if(this._MemosSubjectList){
          var recordDMS =this._MemosSubjectList.map(item=>item.MailId)
        }
        this.Memos_List = this.Memos_List.filter(subject =>!recordDMS.includes( subject.MailId ));
        this.originalDMSList=this.Memos_List;
        console.log(this.Memos_List, "DMS");
      });
  }

  GetMemosByEmployeeId_new(){
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
    subscribe((data) => {
    
      this.Memos_List = JSON.parse(data['JsonData']);    
      this._linkedMemos= this.Memos_List.length
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

    _keeppanelopenDMs(){
      this._EmployeeListForDropdown = this._EmployeeListForDropdown;
      this.isSelection=true;
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
     if(input.trim() === ''){
        this.Memos_List=[...this.originalDMSList]
     }else{

        this.Memos_List=this.originalDMSList.filter(item=>{
         return item.Subject.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        })
     }

    }

    closeAutocompleteDrpDwn_DMS(Acomp:string){
      const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
      requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
    }


    openAutocompleteDrpDwn_DMS(Acomp:string){
      const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
      requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
    }




    AddDMS_meetingreport() {
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;  
      this._calenderDto.Dms =this.selectedEmploy_DMS.map(item=>item.MailId).toString()
      this._calenderDto.flagid = this.currentEventId==undefined?1:this.currentEventId;

     if(this._calenderDto.Dms){   
      this.CalenderService.NewinsertDMS_meetingreport(this._calenderDto).subscribe
      ((data:any)=> {
       
        if(data.message=='1' || this._calenderDto.flagid==null || this._calenderDto.flagid!=null ){
          this.notifyService.showSuccess("DMS added successfully", "Success");
          this.selectedEmploy_DMS=[];
          this.meeting_details();
          this.GetMemosByEmployeeId()
        }
      });
     }
      else{
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
        this._calenderDto.flagid=1
        if (result === true) {
          this.CalenderService.DeleteDMSOfMeeting(this._calenderDto).subscribe((data) => {
            this.notifyService.showSuccess("Deleted successfully ", '');
            this.meeting_details();
          });
        }
        else {
          this.notifyService.showError("Action Cancelled ", '');
        }
      });
    }


    openUrl(memo_Url) {
      const Url = memo_Url;
      window.open(Url);
    }


/////////////////////////////////////////// DMS Side-Bar End /////////////////////////////////////////////////////////


/////////////////////////////////////////// Link Portfolios  Template  Start /////////////////////////////////////////////////////////
ProjectListArray:any
PortfolioLists:any
isPortDrpDwnOpen: any
ngDropdwonPort: any = [];
Empty_portDropdown: any;
_SelectedPorts: any;
selectedportID: any;
objPortfolioDto: PortfolioDTO;
_Message: string;
_EmployeeListForDropdown:any
originalProjectList: any[];
originalPortfolio_list: any[];
originalparticipants:any[]




AddPortfolio(){
    document.getElementById("LinkSideBar1").classList.add("kt-quick-panel--on");
    document.getElementById("meetingdetails").classList.add("position-fixed");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetProjectAndsubtashDrpforCalender();
}

closeLinkSideBar(){
  this.ngDropdwonPort=[];
  this.selectedEmploy_Projects=[];
  this.selectedEmploy_DMS=[];
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar2").classList.remove("kt-quick-panel--on");
    if(this.fruitInputpro && this.fruitInputpro.nativeElement.value != undefined){
      this.fruitInputpro.nativeElement.value = '';
    }
 
    document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    if(this.fruitInputportfolio && this.fruitInputportfolio.nativeElement.value != undefined){
      this.fruitInputportfolio.nativeElement.value = '';
    }
    if(this.fruitInputs && this.fruitInputs.nativeElement.value != undefined){
      this.fruitInputs.nativeElement.value='';
    }
   
}

AddProjects(){
  document.getElementById("LinkSideBar2").classList.add("kt-quick-panel--on");
  document.getElementById("meetingdetails").classList.add("position-fixed");
  document.getElementById("kt-bodyc").classList.add("overflow-hidden");
  document.getElementById("rightbar-overlay").style.display = "block";
  this.GetProjectAndsubtashDrpforCalender();
}



GetProjectAndsubtashDrpforCalender() {
    this._calenderDto.Project_Code=null
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
    ((data) => {     
        this.ProjectListArray=JSON.parse(data['Projectlist'])
        // 69 var recordProjects=this.Project_code.map(item=>item.stringval)
        // 69 this.ProjectListArray=this.ProjectListArray.filter(item=>!recordProjects.includes(item.Project_Code))
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        console.log(this.ProjectListArray,'ProjectListArray');



        this.originalProjectList=this.ProjectListArray   
        
        this.PortfolioLists=JSON.parse(data['Portfolio_drp'])  
        var recordPortfolio=this.portfolio_Scheduledjson.map(item=>item.numberval)
        this.PortfolioLists=this.PortfolioLists.filter(item=>!recordPortfolio.includes(item.portfolio_id))
        this.originalPortfolio_list=this.PortfolioLists

        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        var recordparticipants=this.User_Scheduledjson.map(item=>item.stringval)
        // this._EmployeeListForDropdown=this._EmployeeListForDropdown.filter(item=> !recordparticipants.includes(item.Emp_No))
        this.originalparticipants =this._EmployeeListForDropdown;

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


  closeAutocompleteDrpDwn(Acomp:string){
    const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
    requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
  }

  openAutocompleteDrpDwn(Acomp:string){
    const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
    requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
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

  filterPortfolio(input:string){
   if(input.trim()===''){
     this.PortfolioLists=[...this.originalPortfolio_list];
   } else{
    this.PortfolioLists=this.originalPortfolio_list.filter(item=>{
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



  GetDMSEventValue:any

  DmsDeleteEvent(Event:any){  
    this.GetDMSEventValue=Event;
  }

  GetportfolioEventValue:any

  portFolioDeletedEvent(Event:any){
     this.GetportfolioEventValue=Event
  }

  GetProjectEventValue:any
  ProjectsDeletedEvent(Event:any){
    this.GetProjectEventValue=Event
  }

  selectedValue: number;
  currentEventId:any

  getAllEvents(){

   this.currentEventId=this.selectedValue;
 
   if(this.ngDropdwonPort!=''){
       this.Addportfolios_meetingreport() 
   }
   else if (this.selectedEmploy_DMS!=''){
      this.AddDMS_meetingreport();
   }
   else if( this.selectedEmploy_Projects!=''){
       this.Addproject_meetingreport();

   }
   else if(this.GetDMSEventValue !=undefined && this.currentEventId !=''){
        alert('DMS Condition')
        this.Schedule_ID = this.Scheduleid;
        this._calenderDto.Schedule_ID = this.Schedule_ID;
        this._calenderDto.Emp_No = this.Current_user_ID;
        this._calenderDto.Dms = this.GetDMSEventValue.toString();
        this._calenderDto.flagid = this.currentEventId==undefined?0:this.currentEventId;
       if(this._calenderDto.flagid==1 || this._calenderDto.flagid == 2 ){
        this.CalenderService.DeleteDMSOfMeeting(this._calenderDto).subscribe((data) => {      
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.meeting_details();
          this.GetDMSEventValue=null
        });
       }else{
        this.notifyService.showError("Action Cancelled ", '');
       } 
      } 
   else if(this.GetportfolioEventValue != undefined && this.currentEventId !=''){
    alert('PortFolio Condition')
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Portfolio = this.GetportfolioEventValue.toString();
    this._calenderDto.flagid=this.currentEventId==undefined?0:this.currentEventId;

    if (this._calenderDto.flagid==1 || this._calenderDto.flagid == 2 ) {
      this.CalenderService.DeletePortfoliosOfMeeting(this._calenderDto).subscribe((data) => {
       this.meeting_details()
        this.notifyService.showSuccess("Deleted successfully ", '');
        this.GetportfolioEventValue=null
      });
    }
    else {
      this.notifyService.showError("Action Cancelled ", '');
    }
  }
  else if(this.GetProjectEventValue != undefined && this.currentEventId !=''){
      alert('Project condition')
      this._calenderDto.Schedule_ID = this.Scheduleid;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = this.GetProjectEventValue.toString();
      this._calenderDto.flagid=this.currentEventId==undefined?0:this.currentEventId;

      if (this._calenderDto.flagid==1 || this._calenderDto.flagid == 2 ) {
        this.CalenderService.DeleteProjectsOfMeeting(this._calenderDto).subscribe((data) => {
         this.meeting_details()
          this.notifyService.showSuccess("Deleted successfully ", '');
          this.GetProjectEventValue=null
        });
      }
      else {
        this.notifyService.showError("Action Cancelled ", '');
      }
    }       
  }



  Addportfolios_meetingreport() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Portfolio = this.ngDropdwonPort.map(item=>item.portfolio_id).toString()

    this._calenderDto.flagid = this.currentEventId==undefined?1:this.currentEventId;
    if(this._calenderDto.Portfolio!=''){
      this.CalenderService.Newinsertportfolio_meetingreport(this._calenderDto).subscribe
     
      (data => {     
            this.GetProjectAndsubtashDrpforCalender()   
            this.meeting_details();       
            this.notifyService.showSuccess("Portfolio added successfully", "Success");
            this.ngDropdwonPort=[];          
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
      this._calenderDto.flagid=1
      if (result === true) {
        this.CalenderService.DeletePortfoliosOfMeeting(this._calenderDto).subscribe((data) => {
         this.meeting_details()
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action Cancelled ", '');
      }
    });
  }


////////////////////////////////////Link Portfolios  Template  End/////////////////////////////////////////////////////


/////////////////////////////////////////// Meeting Attendees Side-Bar start /////////////////////////////////////////////////////////


selectedEmployees: any = [];
isSupportDrpDwnOpen:boolean=false;
selectedEmpIds: any = [];
isSelection: boolean =false;



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
  console.log(this.selectedEmpIds, "selected")
}

_keeppanelopen(){
  this._EmployeeListForDropdown = this._EmployeeListForDropdown;
  this.isSelection=true;
  this.openAutocompleteDrpDwn('supportDrpDwn');// open the panel
}


remove(employee: any): void {

  const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === employee.Emp_No);
  this.isSelection = false;
  if (index !== -1) {
    // Remove the employee from the selectedEmployees array
    this.selectedEmployees.splice(index, 1);
    this.selectedEmpIds.splice(index, 1);

    console.log(this.selectedEmpIds, "selected supprem")
  }
  employee.checked = false;
  this.closeAutocompleteDrpDwn('supportDrpDwn');
}

   filterEmployees(input: string): void {
    this.isSelection = true;
    if(input.trim()===''){
      this._EmployeeListForDropdown=[...this.originalparticipants]
    }else{
      this._EmployeeListForDropdown=this.originalparticipants.filter(item=>{
       return item.DisplayName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
      })
    }

  }



closeAutocompleteDrpDwn_part(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
}


openAutocompleteDrpDwn_part(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
}




Adduser_meetingreport() {
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  // this._calenderDto.flagid = this.currentEventId==undefined?1:this.currentEventId;

  if(this.selectedEmployees.length>0){
    const x=this.User_Scheduledjson.map(item=>item.stringval).concat(this.selectedEmployees.map(item=>item.Emp_No));
    this._calenderDto.User_list = x;
    this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe
      (data => {
        this.notifyService.showSuccess("Participant added successfully", "Success");
        this.GetProjectAndsubtashDrpforCalender()   
        this.meeting_details()  
        this.selectedEmployees=[];
      });
  }else{
    this.notifyService.showInfo("Request Cancelled", "Please select Meeting Attendees to link");   
  }
}


Updating_Adminmeeting(_emp) {

  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = _emp;
  this._calenderDto.IsAdmin = true;

  this.CalenderService.NewAdmin_meetingreport(this._calenderDto).subscribe
    (data => {
      this.meeting_details();
    });

}




/////////////////////////////////////////// Meeting Attendees Side-Bar End /////////////////////////////////////////////////////////


/////////////////////////////////////////// Projects Side-Bar start /////////////////////////////////////////////////////////



selectedEmploy_Projects: any = [];
selectedProjectcodes: any = [];
isSupportDrpDwnProjects:boolean=false;
isSelectionOfProjects: boolean =false;


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
  console.log(this.selectedProjectcodes, "selected")
}


_keeppanelopenProjects(){
 
  this._EmployeeListForDropdown = this._EmployeeListForDropdown;
  this.isSelectionOfProjects=true;
  this.openAutocompleteDrpDwn('supportDrpDwnpro');// open the panel
}


removeProjects(employee: any): void {

  const index = this.selectedEmploy_Projects.findIndex((emp) => emp.Project_Code === employee.Project_Code);
  this.isSelectionOfProjects = false;
  if (index !== -1) {
    // Remove the employee from the selectedEmployees array
    this.selectedEmploy_Projects.splice(index, 1);
    this.selectedProjectcodes.splice(index, 1);

    console.log(this.selectedProjectcodes, "selected supprem")
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


closeAutocompleteDrpDwn_Project(Acomp:string){

  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
}


openAutocompleteDrpDwn_Project(Acomp:string){

  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
  
}



Addproject_meetingreport() {
  alert('projects')
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  this._calenderDto.Project_Code = this.selectedEmploy_Projects.map(item=>item.Project_Code).join(',');
  this._calenderDto.flagid = this.currentEventId==undefined?1:this.currentEventId;

 if( this._calenderDto.Project_Code){
  this.CalenderService.Newinsertproject_meetingreport(this._calenderDto).subscribe
  (data => {
    this.selectedEmploy_Projects=[]
    this.meeting_details();
    this.notifyService.showSuccess("Project added successfully", "Success"); 
    this.GetProjectAndsubtashDrpforCalender()
  });
 } else{
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
    this._calenderDto.flagid=1;
    if (result === true) {
      this.CalenderService.DeleteProjectsOfMeeting(this._calenderDto).subscribe((data) => {
       this.meeting_details()
        this.notifyService.showSuccess("Deleted successfully ", '');
      });
    }
    else {
      this.notifyService.showError("Action Cancelled ", '');
    }
  });
}

moreDetails(ProjectCode) {
  let name: string = 'MoreDetails';
  var url = document.baseURI + name;
  var myurl = `${url}/${ProjectCode}`;
  var myWindow = window.open(myurl, ProjectCode);
  myWindow.focus();
}

/////////////////////////////////////////// Project Side-Bar End /////////////////////////////////////////////////////////
/////////////////////////////////////////// Previous Meeting Notes Side-Bar start /////////////////////////////////////////////////////////

Slide_meeting() {
  document.getElementById("meetingdetails").classList.add("position-fixed");
  document.getElementById("Previous_sidebar").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
 this.GetPreviousdate_meetingdata()
}

closeInfo() {
  document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
  document.getElementById("meetingdetails").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";
}


Previousdata_meeting: any = [];


GetPreviousdate_meetingdata() {
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;

  this.CalenderService.NewGet_previousMeetingNotes(this._calenderDto).subscribe
    (data => {
      this.Previousdata_meeting = JSON.parse(data['previousmeet_data']);
    });
}


toggleAccordion(pause: any) {
  // Your implementation here
}

/////////////////////////////////////////// Previous Meeting Notes Side-Bar End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Agenda Start /////////////////////////////////////////////////////////

agendaInput:string|undefined;
allAgendas:any=[];
agendasAdded:number=0;

addAgenda(){

  if(this.agendaInput&&this.agendaInput.trim().length>0){
    this.agendasAdded+=1;
    const agenda={
        id:this.agendasAdded,
        name:this.agendaInput
    };
    this.allAgendas.push(agenda);
    const mtgAgendas=JSON.stringify(this.allAgendas.length>0?agenda:[]);

    this._calenderDto.json = mtgAgendas;
    this._calenderDto.flagid=1;
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;

    this._calenderDto.Status_type = "Left";
    this.CalenderService.NewAddAgendas(this._calenderDto).subscribe
    (data => {
       this.meeting_details();
       this.notifyService.showSuccess("Agenda added successfully ", '');

    })
    this.agendaInput=undefined;
  }
}




updateAgenda1(index:number){
      const tf:any=document.getElementById(`agenda-text-field-${index}`);
      const newname=tf.value;


      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.flagid=2;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.json=JSON.stringify({ id:this.Agendas_List[index].AgendaId, name:newname });

      this.CalenderService.NewEditsAgendas(this._calenderDto).subscribe
      (data => {
        this.meeting_details();
        this.notifyService.showSuccess("Rename successfully ", '');
      })
}

AgendasName: string;
AgendaListRedirect:any = 1

deleteAgenda(AgendaId: number) {

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

    const agenda={
      id:AgendaId,
      name:this.agendaInput,
  };
  this.allAgendas.push(agenda);
  const mtgAgendas=JSON.stringify(this.allAgendas.length>0?agenda:[]);
  this.Schedule_ID = this.Scheduleid;

  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.json = mtgAgendas;
   this._calenderDto.Emp_No = this.Current_user_ID;
  this._calenderDto.flagid = 3;

    if (result === true) {

      this.CalenderService.NewDeleteAgendas(this._calenderDto).subscribe((data) => {
       this.meeting_details()
       this.notifyService.showSuccess("Deleted successfully ", '');
       
      });
    }
    else{
      this.notifyService.showError("Action Cancelled ", '');
    }
  });
}


AgendaId:any


showAgendaDetails(item,index){
  this.AgendaId=item.AgendaId
  this.currentAgendaView=index
  // this.Notes_Type=''
}


currentAgendaProject(){
  this.currentAgendaView=undefined;
  // this.Notes_Type=''
}



editAgenda(index:number){
    $(`#agenda-label-${index}`).addClass('d-none');
    $(`#agenda-text-field-${index}`).removeClass('d-none');
    $(`#agenda-text-field-${index}`).focus();

    $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
    $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

    $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
    $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.
}

cancelAgendaEdit(index:number){

  $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
}



completeAgenda(){
  this._calenderDto.Emp_No=this.Current_user_ID;
  this._calenderDto.AgendaId=this.currentAgendaView===undefined?0:this.Agendas_List[this.currentAgendaView].AgendaId;

  this.CalenderService.NewUpdateCompleteAgenda(this._calenderDto).subscribe((data)=>{ 
    this.meeting_details() 
    this.notifyService.showSuccess("Agenda completed", "Success"); 
  })

}

UndoCompleteAgenda(){
  this._calenderDto.Emp_No=this.Current_user_ID;
  this._calenderDto.AgendaId=this.currentAgendaView===undefined?0:this.Agendas_List[this.currentAgendaView].AgendaId;

  this.CalenderService.NewUpdateUndoCompleteAgenda(this._calenderDto).subscribe((data)=>{
    this.meeting_details();
    this.notifyService.showSuccess("Removed from complete", "Success"); 
  })
}

/////////////////////////////////////////// Agenda End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Meeting Notes Start /////////////////////////////////////////////////////////
Notes_Type:any
_meetingNotesAry: any = [];
leave: boolean = false;
StatusType: boolean = true;

leavemeet(event: any) {
  this.StatusType=true;
  if(this.StatusType==true){
    this.leave = true;

  this.addBulletPointsOnEnter(event)
  setTimeout(() => {
    this.delayedFunction();

  }, 2000);
  this.notifyService.showSuccess("Meeting left", "Success");
  // this.InsertstartandendTimerMeeting('Leave');
  }
  else{
    this.notifyService.showInfo("Something went wrong","");
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
      this._meetingNotesAry = JSON.parse(data["Checkdatetimejson"]);
    })
}


addBulletPointsOnEnter(event: any) {
  if (event.keyCode === 32 || event.keyCode === 13 || this.leave == true) {
     debugger
      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Meeting_notes = this.Notes_Type;
      this._calenderDto.AgendaId=this.currentAgendaView===undefined?0:this.Agendas_List[this.currentAgendaView].AgendaId;
      this._calenderDto.Status_type = "Left";
     
      // console.log(this._calenderDto,' ||||||||||||||||||||');
     this.CalenderService.InsertAgendameeting_notes(this._calenderDto).subscribe
      (data => {
          this.GetNotedata()
        // window.close();
      });
      // this.Notes_Type=' '
  }

}


Meetingnotes_time: any = [];

GetMeetingnotes_data() {
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  this._calenderDto.AgendaId=this.currentAgendaView===undefined?null:this.Agendas_List[this.currentAgendaView].AgendaId;
debugger
  this.CalenderService.GetAgendaMeetingnotes_data(this._calenderDto).subscribe
    (data => {
    
      this.Meetingnotes_time = JSON.parse(data['Checkdatetimejson']);
        if(this.Meetingnotes_time == '' || this.Meetingnotes_time == undefined){
          this.Notes_Type = ''
         }else {
          this.Notes_Type = this.Meetingnotes_time[0]['Meeting_notes']
         }
         this.GetAttendeesnotes();
         console.log(this.Meetingnotes_time, 'Notes_Type')
    });

}
/////////////////////////////////////////// Meeting Notes End /////////////////////////////////////////////////////////

/////////////////////////////////////////// Private Notes sidebar Start /////////////////////////////////////////////////////////

Private_Notes:any

  getPrivateNotesOnEnter(event:any){
    var listop=this.Private_Notes
   console.log(listop)
  }


/////////////////////////////////////////// Private Notes sidebar End /////////////////////////////////////////////////////////


/////////////////////////////////////////// List of Attachment sidebar start /////////////////////////////////////////////////////////

Attachment_views() {
  document.getElementById("Attachment_view").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("meetingdetails").classList.add("position-fixed");
}


closedarBar() {
  document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("meetingdetails").classList.remove("position-fixed");
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
  (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
}

RemoveSelectedFile(_id) {
  var removeIndex = this._lstMultipleFiales.map(function (item) { return item.UniqueId; }).indexOf(_id);
  this._lstMultipleFiales.splice(removeIndex, 1);
  console.log(this._lstMultipleFiales,'file')
}



SelectedAttachmentFile:any
EventNumber: any;
progress: number = 0;

OnSubmitSchedule() {

if(this.SelectedAttachmentFile != undefined){
  this.EventNumber = this.EventScheduledjson[0].EventNumber;
  let _attachmentValue = 0;
  const frmData = new FormData();
  for (var i = 0; i < this._lstMultipleFiales.length; i++) {
    frmData.append("fileUpload", this._lstMultipleFiales[i].Files);
  }
  if (this._lstMultipleFiales.length > 0)
    _attachmentValue = 1;
  else
    _attachmentValue = 0;

  frmData.append("EventNumber", this.EventNumber);
  frmData.append("CreatedBy", this.Current_user_ID);
  
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
                this.notifyService.showSuccess("Uploaded successfully ", '');
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
            this.meeting_details()
          
          }
        )
       }
        }
        else{
          this.notifyService.showInfo("Request Cancelled", "Please select Attachment(s) to link"); 
        }

/////////////////////////////////////////// List of Attchment sidebar End /////////////////////////////////////////////////////////

}




/////////////////////////////////////////// assign task start ///////////////////////////////////////////////////////////////////
_TodoList: any = [];
todocount: number;
text: any = [];
_Demotext: any;
CompletedMeeting_notes: string;
Meetingstatuscom: string;
// Meetingnotescom: string;
// isCheckboxDisabled: boolean = false;
// Userstatus: string;
// Isadmin: boolean = false;
// unsubscribe: boolean = false;

GetcompletedMeeting_data() {
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  this.CalenderService.NewGetcompleted_meeting(this._calenderDto).subscribe
    (data => {
      this.CompletedMeeting_notes = JSON.parse(data['meeitng_datajson']);
      this.Meetingstatuscom = this.CompletedMeeting_notes[0]['Meeting_status'];
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

ActionedAssigned_Josn: any = [];
ActionedSubtask_Json: any=[];
assigncount: number;



EnterSubmit(_Demotext) {
  if (_Demotext != "" && _Demotext != undefined && _Demotext != null) {
    this._ObjAssigntaskDTO.CategoryId = 2411;
    this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
    this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;
    this._ObjAssigntaskDTO.TaskName = _Demotext;
    this._ObjAssigntaskDTO.Schedule_ID = this.Schedule_ID;
    this._ObjAssigntaskDTO.Agenda_Id = this.AgendaId;

    // this.text.push(this._Demotext);
    // this._Demotext = "";
    this.ProjectTypeService._NewInsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {
        //console.log("Data---->", data);
        this._TodoList = JSON.parse(data['Todomeeting']);

        this.todocount = this._TodoList.length;

        let message: string = data['Message'];
        console.log("Data---->", this._TodoList);
        this._Demotext = "";
        this.selectedText="";
        // this.editorFocused=false;
        //this.GetAssignTask();
        this.notifyService.showSuccess("Successfully", "Added");
        // this.closeInfo();
      });

  }}

  _taskName: any;
  task_id: any;

  GetProjectTypeList(taskName, id) {
   
    this._taskName = taskName;
    this.task_id = id;

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
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#mysideInfobar").scrollTop(0);
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




GetAssigned_SubtaskProjects() {

  this._ObjCompletedProj.PageNumber = 1;
  this._ObjCompletedProj.Emp_No = this.Current_user_ID;
  this._ObjCompletedProj.CategoryId = 2411;
  this._ObjCompletedProj.Mode = 'Todo';
  this._ObjCompletedProj.Schedule_ID = this.Scheduleid;

  this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    (data) => {
   
      // console.log("Data---->", data);
      // this.CategoryList = JSON.parse(data[0]['CategoryList']);
      this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);

      // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
      this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
      this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);

      this.assigncount = this.ActionedAssigned_Josn.length;
      this.todocount = this._TodoList.length + this.ActionedAssigned_Josn.length;
      // console.log("the sss", this._TodoList)
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
        });
    }
    else {
      //this.notifyService.showInfo("Cancelled", "Delete");
    }
  });
}
/////////////////////////////////////////// assign task End //////////////////////////////////////////////////////////////////


/////////////////////////////////////////// All Attendees Notes sidebar Start //////////////////////////////////////////////////////////////////

AllAttendees_notes:any=[]
Employeeslist:any;

GetAttendeesnotes(){
  this.Schedule_ID=this.Scheduleid;
  this._calenderDto.Schedule_ID=this.Schedule_ID;
  this._calenderDto.Emp_No=this.Current_user_ID
  this._calenderDto.AgendaId=this.currentAgendaView===undefined?null:this.Agendas_List[this.currentAgendaView].AgendaId;
  this.CalenderService.NewGetAttendeesMeetingnotes(this._calenderDto).subscribe
  ((data:any)=>{ 
  
    if(data['Checkdatetimejson']){
      this.AllAttendees_notes=JSON.parse(data['Checkdatetimejson']);
    }else{
      this.AllAttendees_notes=[]
    }
    
   

    // const objectsWithEmployees  = this.AllAttendees_notes.filter(obj => obj.hasOwnProperty('Employees'));
    
    // this.Employeeslist=objectsWithEmployees[0].Employees;

    // console.log(this.Employeeslist,'Meeting_notes_lists2');
  });
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
_StartDate: any;
Startts: any;
StartTimearr: any = [];
Endtms: any;
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







ReshudingTaskandEvent() {
  document.getElementById("div_endDate").style.display = "none";
  document.getElementById("Schenddate").style.display = "none";
  document.getElementById("Descrip_Name12").style.display = "none";
  this.editTask = true;
  this.copyTask = false;
  this.create = false;

  this.Schedule_ID = this._calenderDto.Schedule_ID;
  this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
    ((data) => {
   
      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      // console.log(this.EventScheduledjson, "test11111")
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
      // alert(this.scstartdate)
      // this.Attachment12_ary=this.EventScheduledjson[0]['Attachmentsjson']
      this.Addressurl = this.EventScheduledjson[0]['Addressurl']
      // alert( this.Addressurl);
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];
      this._onlinelink = this.EventScheduledjson[0]['Onlinelink'];
      this.Link_Details = this.EventScheduledjson[0]['Link_Details']
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
      
      document.getElementById("div_recurrence").style.display = "none";
      document.getElementById("Monthly_121").style.display = "none";
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("mysideInfobar_schd_new").classList.add("open_sidebar");
      document.getElementById("rightbar-overlay").style.display = "block";
      document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

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
      this.EventNumber = this.EventScheduledjson[0]['EventNumber']
      // this._SEndDate = this.EventScheduledjson[0]['SEndDate'];
      if ((this.EventScheduledjson[0]['Onlinelink']) == true) {
        document.getElementById("Descrip_Name12").style.display = "block";
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
        document.getElementById("div_endDate").style.display = "block";
        this.selectedrecuvalue = '1';
        this._labelName = "Schedule Date";
        // document.getElementById("div_endDate").style.display = "none";
        document.getElementById("Recurrence_hide").style.display = "none";
      }
      else if ((this.EventScheduledjson[0]['Recurrence']) == 'Weekly') {
        this._labelName = "Schedule Date";
        // document.getElementById("div_endDate").style.display = "none";
        document.getElementById("div_endDate").style.display = "block";
        document.getElementById("Recurrence_hide").style.display = "block";
        document.getElementById("weekly_121").style.display = "block";
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
      }
      else if ((this.EventScheduledjson[0]['Recurrence']) == 'Monthly') {
        document.getElementById("Recurrence_hide").style.display = "block";
        document.getElementById("div_endDate").style.display = "block";
        // document.getElementById("div_endDate").style.display = "none";
        document.getElementById("Monthly_121").style.display = "block";
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
      }

      if (this.ScheduleType == 'Task') {
        this.EventScheduledjson[0]['Ed_Time']
        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
        this.MasterCode = JSON.parse(this.EventScheduledjson[0]['Project_code']);
        this.MasterCode = (this.MasterCode[0].stringval);

        document.getElementById("subtaskid").style.display = "block";
        // document.getElementById("Link_Name").style.display = "none";
        document.getElementById("Guest_Name").style.display = "none";
        document.getElementById("Location_Name").style.display = "none";
        document.getElementById("Descrip_Name").style.display = "none";
        document.getElementById("core_viw123").style.display = "block";
        document.getElementById("core_viw121").style.display = "none";
        document.getElementById("core_viw222").style.display = "none";
        document.getElementById("core_Dms").style.display = "none";
        // document.getElementById("Monthly_121").style.display = "none";
        // document.getElementById("weekly_121").style.display = "none";

      }

      if (this.ScheduleType == 'Event') {
        this.allAgendas=this.EventScheduledjson[0]['Agendas'].map(item=>({index:item.AgendaId,name:item.Agenda_Name}));

        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
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
        this.Location_Type = (this.EventScheduledjson[0]['Location']);
        this.Description_Type = (this.EventScheduledjson[0]['Description']);
        document.getElementById("subtaskid").style.display = "none";
        document.getElementById("Guest_Name").style.display = "block";
        document.getElementById("Location_Name").style.display = "block";
        document.getElementById("Descrip_Name").style.display = "block";
        document.getElementById("core_viw121").style.display = "block";
        document.getElementById("core_viw123").style.display = "none";
        document.getElementById("core_viw222").style.display = "block";
        document.getElementById("core_Dms").style.display = "block";
        console.log(this.MasterCode,'decode')
      }
    });
  // this.closeevearea();
}


notProvided:boolean=false;
MinLastNameLength: boolean;

LastLengthValidation11() {
  if (this.Title_Name.trim().length < 3) {
    this.MinLastNameLength = false;
  }
  else {
    this.MinLastNameLength = true;
  }
}

AgendaInputEvent:string|undefined;
AgendasAddedEvent:number=0;

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

  console.log("allAgendas:", this.allAgendas);
}



editAgendaEvent(index: number) {
  $(`#agenda-label-Event-${index}`).addClass('d-none');
  $(`#agenda-text-field-Event-${index}`).removeClass('d-none');
  $(`#agenda-text-field-Event-${index}`).focus();

  $(`#edit-cancel-Event-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-Event-${index}`).removeClass('d-none');   // save btn is visible.

  $(`#edit-agendaname-btn-Event-${index}`).addClass('d-none');  // edit btn is invisible.
  $(`#remove-agenda-btn-Event-${index}`).addClass('d-none');   // delete btn is invisible.

}


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
  console.log("allAgendas:", this.allAgendas);
}


cancelAgendaEditEvent(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-Event-${index}`);
  tf.value = this.allAgendas[index].name;

  $(`#agenda-label-Event-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-Event-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-Event-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-Event-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-Event-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-Event-${index}`).removeClass('d-none');   // delete btn is visible.
}



updateAgendaEvent(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-Event-${index}`);
  this.allAgendas[index].name = tf.value;

  $(`#agenda-label-Event-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-Event-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-Event-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-Event-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-Event-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-Event-${index}`).removeClass('d-none');   // delete btn is visible.
  console.log('all agendas after updating:', this.allAgendas);
}



getObjOf(arr, id, idName) {
 
  const obj = arr.find(item => item[idName] == id);
  return obj;
}


getProjectName(projectCode: string) {

  if (this.ProjectListArray) {
    const P = this.ProjectListArray.find(pr => pr.Project_Code.trim() == projectCode.trim());
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
    }
    else {
      this.MasterCode.splice(index, 1);
    }
  }
  this.openAutocompleteDrpDwn('ProjectsDrpDwn');
}





removeSelectedProject(item) {
  const index = this.MasterCode.indexOf(item);
  if (index !== -1) {
    this.MasterCode.splice(index, 1);
  }
}





  onPortfolioSelected(e: any) {
    const portfolioChoosed: any = this.Portfoliolist_1.find((p: any) => p.portfolio_id === e.option.value);
    console.log(portfolioChoosed);
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

    const uploadFileInput=(<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.style.color=this._lstMultipleFiales.length===0?'darkgray':'transparent';
  
  }

  RemovedAttach: any = [];


  RemoveExistingFile(_id) {
    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {
        this.RemovedAttach.push(element.Cloud_Name)
      }
    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);
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
        this._arrayObj.forEach(element => {
          this.EndTimearr.push(element.TSEnd);
          this.AllEndtime.push(element.TSEnd);
          this.StartTimearr.push(element.TSStart);
          this.Alltimes.push(element.TSStart);
        });

        // console.log(this.EndTimearr[0]);
        // console.log("Array" + this.EndTimearr);
      });
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
    document.getElementById("Descrip_Name12").style.display = "block";
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


daysSelectedII: any[] = [];



selectStartDate(event) {

  this._StartDate = event.value;
  let sd = event.value.format("YYYY-MM-DD").toString();
  this._SEndDate = event.value.format("YYYY-MM-DD").toString();
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
    jsonData[Day] = event.value.format('dddd').substring(0, 3);
    jsonData[DayNum] = event.value.format('DD').substring(0, 3);
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


onfocus(val) {
  console.log(val, "ttt");
}

_arrayObj: any;
Alltimes: any = [];
AllEndtime: any = [];

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
}

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
    console.log(this.daysSelectedII, "Day Added array")
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

    $('.side_view').removeClass('position-fixed');
    this.closefooter();
  }


  calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }


  closeschd() {

    // this.Insert_indraft();
    document.getElementById("mysideInfobar_schd_new").classList.remove("open_sidebar");
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
    this.maxDate = null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
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
    this.notProvided=false;

  }


  closefooter() {
    // $('.secfootr1').removeClass('opend');
    document.getElementById("ft_body1").classList.toggle("go-up");
    document.getElementById("secfootr1").classList.toggle("opend");
    document.getElementById("main-foot1").classList.toggle("overflow-hidden");
    $('#upload').html('Select a file');
    // this._remarks = "";
  }


  _subname1: boolean;
  selected: Date | null;

  OnSubmitReSchedule(type: number) {
   debugger
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
        debugger
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
        else{
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

        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;

        var vLink_Details = "Link_Details";
        element[vLink_Details] = this.Link_Details == undefined ? "" : this.Link_Details;

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

        // debugger
            var vMeeting_Agendas="Meeting_Agendas";
            const updatedAgnds=JSON.stringify(this.allAgendas.map(item=>({index:item.index,name:item.name})));
            element[vMeeting_Agendas]=updatedAgnds;

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

      // console.log(JSON.stringify(finalarray), "finalarray");
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
            this.meeting_details();
          }
          //69 this.GetScheduledJson();
          //69 this.GetPending_Request();
          //69 this.penhide();
          this.Title_Name = null;
          this.RemovedAttach = [];
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.MasterCode = null;
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
          // this.TImetable();
          this.Portfolio = null;
          this.minDate = moment().format("YYYY-MM-DD").toString();
          this.maxDate = null;
          //69 this.calendar.updateTodaysDate();
          // this.TImetable();

        });
      this.closeschd();
    }
    else {
      alert('Please Select Valid Date and Time');
    }
  }



 

////////////////////////////////////////// Meeting Edit Functionality End /////////////////////////////////////////////////////


///////////////////////////////////////// Meeting End functionality start //////////////////////////////////////////////
Action_item: any = [];
interval:any = 0;



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
  console.log(this._calenderDto,"dto")
  this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
    (data => {
      this.notifyService.showSuccess("Successfully", "Completed");
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
}


///////////////////////////////////////// Meeting End functionality End //////////////////////////////////////////////

limit = 60;  // Set the initial limit
limited_data= 98;

isExpanded = false;
toggleReadMore() {
  this.isExpanded = !this.isExpanded;
}

limit_data=75;
isExpandeds = false;
_toggleReadMore() {
  this.isExpandeds = !this.isExpandeds;
}




} 
