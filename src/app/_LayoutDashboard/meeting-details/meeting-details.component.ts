import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
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
  constructor(
    private CalenderService:CalenderService,
    private route:ActivatedRoute,
    public service: ProjectTypeService,
    public notifyService: NotificationService,
    public _LinkService: LinkService,
    public ProjectTypeService: ProjectTypeService,
    private dialog: MatDialog,
  ) {
    this._calenderDto=new CalenderDTO;
    this.objPortfolioDto = new PortfolioDTO();
    this._lstMultipleFiales = [];
    this._ObjAssigntaskDTO = new AssigntaskDTO();
  }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
        var scode = params.get('scheduleid');
        this.Scheduleid = scode;
      });

      this.route.paramMap.subscribe(params => {
        var pcode = params.get('scheduleid');
          this.URL_ProjectCode = pcode;
          this._MasterCode = pcode;       
      });
      this.Current_user_ID = localStorage.getItem('EmpNo');
      this.meeting_details(); 
      this.addAgenda();
      this.GetMeetingnotes_data();
  }

  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  @ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;
  @ViewChild('fruitInput') fruitInput: ElementRef;
  @ViewChild('fruitInputpro')fruitInputpro:ElementRef;
  @ViewChild('fruitInputportfolio')fruitInputportfolio:ElementRef;
  @ViewChild('fruitInputs') fruitInputs: ElementRef;


  View_Attendees_Notes() {
    document.getElementById("Attendees_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }
  close_attendeesnotes_sideBar() {
    document.getElementById("Attendees_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
  }
  View_Private_Notes() {
    document.getElementById("Private_Notes").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }
  close_privatenote_sideBar() {
    document.getElementById("Private_Notes").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
  }
  View_Meeting_Attendees() {
    document.getElementById("Meeting_Attendees").classList.add("kt-quick-active--on");
    this.GetProjectAndsubtashDrpforCalender();
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  close_meetingattendees_sideBar() {
    this.selectedEmployees=[];
    document.getElementById("Meeting_Attendees").classList.remove("kt-quick-active--on");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.fruitInput.nativeElement.value = '';
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
  sched_admin: string;
  isCheckboxDisabled: boolean = false;
  Isadmin: boolean = false;




meeting_details(){
    this.Schedule_ID=this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe((data)=>{
      
    this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
    
   this.Agendas_List=this.EventScheduledjson[0].Agendas;
   
   console.log(this.Agendas_List,'agenda list ')
    this.User_Scheduledjson= JSON.parse(this.EventScheduledjson[0].Add_guests)
    this.portfolio_Scheduledjson=JSON.parse(this.EventScheduledjson[0].Portfolio_Name)
   
    this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
    this._TotalAttachment=this.Attachments_ary.length


    this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
    this.Project_code=JSON.parse(this.EventScheduledjson[0].Project_code)
 
    this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
    this.sched_admin = this.EventScheduledjson[0]['Owner_isadmin']
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
    }
   }) 
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
    this.GetDMSList();
    this.GetMemosByEmployeeId();
  }

  GetDMSList(){
    this._LinkService._GetMemosSubject(this.dmsIdjson).subscribe((data) => {
     if(data!=''&& data!=undefined){
      this._MemosSubjectList = JSON.parse(data['JsonData']);
      console.log(this._MemosSubjectList,'DMS Link')
      this._MemosSubjectList.forEach(element => {
       this.checkeddms.push(element.MailId);
       element.isChecked = true;
     });
     }          
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

      this.CalenderService.NewinsertDMS_meetingreport(this._calenderDto).subscribe
        (data => {                                                                                          
        });
      this.notifyService.showSuccess("DMS added successfully", "Success");
      this.meeting_details();    
      this.selectedEmploy_DMS=[];

    }



    DMSName: string;

    deleteMemos(MailId: number) {
  
      this._MemosSubjectList.forEach(element => {
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
  
        if (result === true) {
          this.CalenderService.DeleteDMSOfMeeting(this._calenderDto).subscribe((data) => {      
            this.notifyService.showSuccess("Deleted successfully ", '');
            this.GetDMSList()
          });
        }
        else {
          this.notifyService.showError("Action Cancelled ", '');
        }
      });
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
    this.GetProjectAndsubtashDrpforCalender();
}

closeLinkSideBar(){
  this.ngDropdwonPort=[];
  this.selectedEmploy_Projects=[];
  this.selectedEmploy_DMS=[];
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar2").classList.remove("kt-quick-panel--on");
    this.fruitInputpro.nativeElement.value = '';
    document.getElementById("meetingdetails").classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.fruitInputportfolio.nativeElement.value = '';
    this.fruitInputs.nativeElement.value='';
}

AddProjects(){
  document.getElementById("LinkSideBar2").classList.add("kt-quick-panel--on");
  document.getElementById("meetingdetails").classList.add("position-fixed");
  document.getElementById("kt-bodyc").classList.add("overflow-hidden");
  document.getElementById("rightbar-overlay").style.display = "block";
  this.GetProjectAndsubtashDrpforCalender()
}



GetProjectAndsubtashDrpforCalender() {
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
    ((data) => {
        this.ProjectListArray=JSON.parse(data['Projectlist'])
        var recordProjects=this.Project_code.map(item=>item.stringval)
        this.ProjectListArray=this.ProjectListArray.filter(item=>!recordProjects.includes(item.Project_Code))
        console.log(this.ProjectListArray,'shdvcvshdbcbsdycu')
        this.originalProjectList=this.ProjectListArray   
        
        this.PortfolioLists=JSON.parse(data['Portfolio_drp'])  
        var recordPortfolio=this.portfolio_Scheduledjson.map(item=>item.numberval)
        this.PortfolioLists=this.PortfolioLists.filter(item=>!recordPortfolio.includes(item.portfolio_id))
        this.originalPortfolio_list=this.PortfolioLists
        
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        var recordparticipants=this.User_Scheduledjson.map(item=>item.stringval)
        this._EmployeeListForDropdown=this._EmployeeListForDropdown.filter(item=> !recordparticipants.includes(item.Emp_No))
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


  Addportfolios_meetingreport() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Portfolio = this.ngDropdwonPort.map(item=>item.portfolio_id).toString()
    this.CalenderService.Newinsertportfolio_meetingreport(this._calenderDto).subscribe
      (data => {
        this.meeting_details();     
        this.GetProjectAndsubtashDrpforCalender()
      });
    this.notifyService.showSuccess("Portfolio added successfully", "Success");
    this.ngDropdwonPort=[];
  }


  portfolioName: string;

  DeletePortfolios(port_id: number) {

    this.portfolio_Scheduledjson.forEach(element => {
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
  const x=this.User_Scheduledjson.map(item=>item.stringval).concat(this.selectedEmployees.map(item=>item.Emp_No));
  this._calenderDto.User_list = x;
  this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe
    (data => {
      this.meeting_details();
    });
  this.notifyService.showSuccess("Participant added successfully", "Success");
  this.selectedEmployees=[];
  this.GetProjectAndsubtashDrpforCalender()
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
  this.Schedule_ID = this.Scheduleid;
  this._calenderDto.Schedule_ID = this.Schedule_ID;
  this._calenderDto.Emp_No = this.Current_user_ID;
  this._calenderDto.Project_Code = this.selectedEmploy_Projects.map(item=>item.Project_Code).join(',');

  this.CalenderService.Newinsertproject_meetingreport(this._calenderDto).subscribe
    (data => {
      this.meeting_details();
      this.GetProjectAndsubtashDrpforCalender()
    });

  this.notifyService.showSuccess("Project added successfully", "Success");
  this.selectedEmploy_Projects=[]
}




ProjectsName: string;

DeleteProject(Project_Code: number) {

  this.Project_code.forEach(element => {
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
    this._calenderDto.Project_Code = Project_Code.toString();

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
      console.log(data,'sdcvsdyy') 
      this.Previousdata_meeting = this.Previousdata_meeting.filter((item) => item.MeetingDetails.length > 0);
    });
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

deleteAgenda(AgendaId: number) {


  const AgendasNames = this.Agendas_List.find(element => element.AgendaId === AgendaId);
  debugger
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

      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Meeting_notes = this.Notes_Type;
      this._calenderDto.AgendaId=this.currentAgendaView===undefined?0:this.Agendas_List[this.currentAgendaView].AgendaId;
      this._calenderDto.Status_type = "Left";

      console.log(this._calenderDto,' ||||||||||||||||||||  ');
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
 console.log(this._calenderDto, 'yeysy')
  this.CalenderService.GetAgendaMeetingnotes_data(this._calenderDto).subscribe
    (data => {
      this.Meetingnotes_time = JSON.parse(data['Checkdatetimejson']);

       if(this.Meetingnotes_time == '' || this.Meetingnotes_time == undefined){
        this.Notes_Type = ''
       }else {
        this.Notes_Type = this.Meetingnotes_time[0]['Meeting_notes']
       }
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




EventNumber: any;
progress: number = 0;
OnSubmitSchedule() {
 
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




EnterSubmit(_Demotext) {

  if (_Demotext != "" && _Demotext != undefined && _Demotext != null) {
    this._ObjAssigntaskDTO.CategoryId = 2411;
    this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
    this._ObjAssigntaskDTO.CreatedBy = this.Current_user_ID;
    this._ObjAssigntaskDTO.TaskName = this._Demotext;
    this._ObjAssigntaskDTO.Schedule_ID = this.Schedule_ID;

    this.text.push(this._Demotext);
    this._Demotext = "";
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {
        //console.log("Data---->", data);
        this._TodoList = JSON.parse(data['Todomeeting']);

        this.todocount = this._TodoList.length;

        let message: string = data['Message'];
        console.log("Data---->", this._TodoList);
        this._Demotext = ""
        //this.GetAssignTask();
        this.notifyService.showSuccess("Successfully", "Added");
        // this.closeInfo();
      });

  }}
/////////////////////////////////////////// assign task End //////////////////////////////////////////////////////////////////

}