import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { CalenderService } from 'src/app/_Services/calender.service';
import { LinkService } from 'src/app/_Services/link.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import * as moment from 'moment';
@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})

export class MeetingReportComponent implements OnInit {
  @ViewChild('myTextarea') myTextarea!: ElementRef<HTMLTextAreaElement>;

  _ObjAssigntaskDTO: AssigntaskDTO;
  CurrentUser_ID: string;
  Scheduleid:any;
  _calenderDto: CalenderDTO;
  EventScheduledjson:any=[];
  Schedule_ID:any;
  User_Scheduledjson:any=[];
  Project_NameScheduledjson:any;
  portfolio_Scheduledjson:any=[];
  DMS_Scheduledjson:any=[];
  dmsIdjson:any=[];
  _MemosSubjectList: any;
  Attachments_ary:any;
  _onlinelink:boolean=true;
  userchecked:boolean=true;
  projectchecked:boolean=true;
  dmschecked:boolean=true;
  portfolioschecked:boolean=true;
  userchecked1:boolean=true;
  // projectchecked1:boolean=true;
  dmschecked1:boolean=true;
  portfoliochecked1:boolean=true;
  Notes_Type:any;
  ProjectTypelist: any;
Action_item:any=[];
checkedusers:any=[];
checkedproject:any=[];
checkeddms:any=[];
checkedportfolio:any=[];
Meeting_Detailsdata:any=[];
Taskname:string;
Action_task:string;
_TodoList :any= [];
_Demotext:any;
text:any=[];
Alltimes: any = [];
EndTimearr: any = [];
_arrayObj: any;
AllEndtime: any = [];
StartTimearr: any = [];
timingarryend: any = [];
Time_End: any = [];
Startts: any;
timearr1: any = [];
Endtms:any;
_SEndDate:any;
scstartdate:any;
_StartDate:any;
daysSelectedII: any = [];
minDate = moment().format("YYYY-MM-DD").toString();
ScheduleType: any;
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
        'heading'
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
        'toggleEditorMode',
     'fontSelector',
     'justifyLeft',
     'justifyCenter',
     'justifyRight',
     'justifyFull',
     'bold',
     'italic',
     'underline',
     'heading',
     
    
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

  constructor(private route: ActivatedRoute,
    public notifyService: NotificationService,
    private CalenderService: CalenderService,
    public _LinkService: LinkService,
    public ProjectTypeService: ProjectTypeService,
    public router: Router,
    public BsService: BsServiceService,
    public dialog: MatDialog
  
  ) {
    this._calenderDto = new CalenderDTO;
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    
  }
  
  ngOnInit(): void {
    
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
       
    this.route.paramMap.subscribe(params => {
      var scode = params.get('scheduleid');
      this.Scheduleid = scode;
    });
    this. GetAssigned_SubtaskProjects();
    this.getProjectTypeList();
    this.GetProjectAndsubtashDrpforCalender()
    this.GetTimeslabfordate();
 this.meeting_details();
 this.getScheduleId();
 

 // modal caledar start
 var dragging = false;
var days = document.querySelectorAll('.day');
var offset = 0;

function activateDay() {
  var activeElement = document.activeElement;
  var activeAItem = document.querySelector('.active-a');
  var activeBItem = document.querySelector('.active-b');
  
  if (activeAItem && activeBItem) {
    clearActiveDays();
    clearRange();
    activeElement.classList.add('active-a');
    return;
  }
  
  if (activeAItem) activeElement.classList.add('active-b');
  else activeElement.classList.add('active-a');
}

function clearActiveDays() {
  var activeAItem = document.querySelector('.active-a');
  var activeBItem = document.querySelector('.active-b');
  
  if (activeAItem) activeAItem.classList.remove('active-a');
  if (activeBItem) activeBItem.classList.remove('active-b');
}

function clearRange() {
  days.forEach(item => {
    item.classList.remove('range');
  });
}

function calculateRange() {
  var activeAIndex, activeBIndex;

  days.forEach((item, index) => {
    if (item.classList.contains('active-a')) activeAIndex = index;
    if (item.classList.contains('active-b')) activeBIndex = index;
  });

  if (activeAIndex < activeBIndex) {
    for (var i = activeAIndex; i <= activeBIndex; i++) {
      days[i].classList.add('range');
    }
  }

  if (activeAIndex > activeBIndex) {
    for (var i = activeAIndex; i >= activeBIndex; i--) {
      days[i].classList.add('range');
    }
  }
}

function startMove(item) {
  dragging = true;
  
  var activeAItem = document.querySelector('.active-a');
  var activeBItem = document.querySelector('.active-b');
  
  if (!activeBItem && activeAItem) {
    item.classList.add('active-b');
    calculateRange();
  } else {
    clearActiveDays();
    clearRange();
    item.classList.add('active-a');
  }
}

function move(item) {
  if (dragging) {
    var activeA = document.querySelector('.active-a');
    var prevActiveB = document.querySelector('.active-b');

    clearRange();

    if (prevActiveB) prevActiveB.classList.remove('active-b');
    if (!item.classList.contains('active-a')) item.classList.add('active-b');

    var activeB = document.querySelector('.active-b');

    calculateRange();
  }
}

function endMove(item) {
  dragging = false;
}

window.addEventListener('mouseup', e => {
  dragging = false;
});

days.forEach((item, index) => {
  var dayNumber = item.querySelector('.day-number').innerHTML;
  
  if (dayNumber === '1' && !item.classList.contains('next-mon')) {
    offset = index;
  }
  
  item.addEventListener('mousedown', e => {
    startMove(item);
  });
  
  item.addEventListener('mousemove', e => {
    move(item);
  });
  
  item.addEventListener('mouseup', e => {
    endMove(item);
  });
});

window.addEventListener('keyup', e => {
  var key = e.keyCode;
  
  switch (key) {
    case 13:
      activateDay();
      calculateRange();
      break;
  }
});

document.querySelector('.reset').addEventListener('click', e => {
  clearActiveDays();
  clearRange();
});

  // modal caledar end

  }

  addBulletPointsOnFocus() {
    const textarea = this.myTextarea.nativeElement;

    if (textarea.value === '') {
     
      textarea.value = '• ';
    }
  }

  addBulletPointsOnEnter(event: any) {
    if (event.key === 'Enter') {
      const textarea = this.myTextarea.nativeElement;
      const textareaValue = textarea.value;

    
      textarea.value = textareaValue + '\n• ';

     
      event.preventDefault();
    }
  }
  onfocus(val) {
    console.log(val, "ttt");
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
  addstarttime() {
    this.Alltimes = [];
    this.EndTimearr = [];
    this.AllEndtime = [];
    this.StartTimearr = [];

    this._arrayObj.forEach(element => {
      this.EndTimearr.push(element.TSEnd);
      this.AllEndtime.push(element.TSEnd);
      this.StartTimearr.push(element.TSStart);
      this.Alltimes.push(element.TSStart);
       console.log( this.Alltimes,"times")
    });


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
    this.timingarryend = this.Time_End.splice(_index + 1);
    this.EndTimearr = this.timingarryend;
    this.timearr1 = this.Startts.split(":");
    let vahr = this.timearr1[0];
    let mins = this.timearr1[1].toString();

    if (this.timearr1[0] == 23) {
      this._arrayObj.forEach(element => {
        this.EndTimearr.push(element.TSStart);

      });
      vahr = Number(vahr) + 1;
      if (vahr == 24) {
        vahr = '00'

      }
      this.Endtms = vahr.toString() + ':' + mins;
      if (vahr == '00') {
        this._SEndDate = moment(this.scstartdate, "YYYY-MM-DD").add(1, 'days');
        // alert(this.scstartdate)
        document.getElementById("Schenddate").style.display = "none";

      }
      else {
        this._SEndDate = this.scstartdate;
      }

    }
    else {
      vahr = Number(vahr) + 1;
      this.Endtms = vahr.toString() + ':' + mins;

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

  getScheduleId(){
    this.router.navigate(["Meeting-Report/"+this.Schedule_ID]);
  }
 
  meeting_details(){
    
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
         
          console.log(this.EventScheduledjson, "111111")
          this.Startts=this.EventScheduledjson[0]['St_Time']
          this.Endtms=this.EventScheduledjson[0]['Ed_Time']
          this._StartDate=this.EventScheduledjson[0]['Schedule_date']
          this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
          this.User_Scheduledjson.forEach(element => {
            this.checkedusers.push(element.stringval);
           element.isChecked=true;
          });
          console.log(this.checkedusers,"chec")
          this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
          this.Project_NameScheduledjson.forEach(element => {
            element.isChecked=true;
            this.checkedproject.push(element.stringval);
          
          
          });
          console.log(this.checkedproject,"chec1")
         
          this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.portfolio_Scheduledjson.forEach(element => {
          this.checkedportfolio.push(element.numberval);
          element.isChecked=true;
        });
       
        this.checkedportfolio = this.checkedportfolio.map((num) => num.toString());
        console.log(this.checkedportfolio,"chec2")
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
          console.log(this.dmsIdjson,"chec41")
          
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
             
              this._MemosSubjectList.forEach(element => {
                this.checkeddms.push(element.MailId);
                element.isChecked=true;
              });
              this.checkeddms = this.checkeddms.map((num) => num.toString());
             
       
        });
      }

    });
   
  
  
}
  todo:any=[];
  EnterSubmit(_Demotext) {

    if (_Demotext != "" && _Demotext != undefined && _Demotext !=null) {
      this._ObjAssigntaskDTO.CategoryId = 2411;
      this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.TaskName = this._Demotext;
      this._ObjAssigntaskDTO.Schedule_ID=this.Schedule_ID;
    
      this.text.push(this._Demotext);
      this._Demotext="";
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          //console.log("Data---->", data);
          this._TodoList = JSON.parse(data['Todomeeting']);
         
         
          let message: string = data['Message'];
          console.log("Data---->", this._TodoList);
          this._Demotext = ""
          //this.GetAssignTask();
          this.notifyService.showSuccess("Successfully", "Added");
          // this.closeInfo();
        });
    }
    
    // else {
    //   this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
    // }
    }
    
  

  Online_methodproject(event) {
  
    if(event.target.checked==true){
      this.checkedproject.push(event.target.value);
  
    }
    else if(event.target.checked==false){
      let index = this.checkedproject.indexOf(event.target.value);
      if(index > -1){
        this.checkedproject.splice(index,1);
      }
      this.Meeting_Detailsdata.push(this.checkedproject)
      console.log( this.Meeting_Detailsdata,"kkk")
    }
  

  }

  Online_methodportfolio(event) {
 
    if(event.target.checked==true){
      this.checkedportfolio.push(event.target.value);
     
    }
    else if(event.target.checked==false){
      let index = this.checkedportfolio.indexOf(event.target.value);
      if(index > -1){
        this.checkedportfolio.splice(index,1);
      }
     
    }
  console.log(this.checkedportfolio);
   
  }
  
  Online_methoddms(event) {
 
    if(event.target.checked==true){
      this.checkeddms.push(event.target.value);
      
    }
    else if(event.target.checked==false){
      let index = this.checkeddms.indexOf(event.target.value);
      if(index > -1){
        this.checkeddms.splice(index,1);
      }
     
    }
  console.log(this.checkeddms);
  }

  Online_methoduser(event) {
      if(event.target.checked==true){
        this.checkedusers.push(event.target.value);
       
      }
      else if(event.target.checked==false){
        let index = this.checkedusers.indexOf(event.target.value);
        if(index > -1){
          this.checkedusers.splice(index,1);
        }
       
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

  moreDetails(ProjectCode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }

  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }
  _EmployeeListForDropdown:any=[];

  GetProjectAndsubtashDrpforCalender() {

    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
       
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        // this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
         // this.ProjectListArray = JSON.parse(data['Projectlist']);
        // console.log(this._EmployeeListForDropdown, "Project List Array");

      });
  }
  Insert_meetingreport(){
   debugger
   this.Action_item=[]
 
   this._TodoList.forEach(element => {
    this.Action_item.push(element.Assign_Id)
    
   });
   debugger
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
   this._calenderDto.Note=this.Notes_Type;
   this._calenderDto.Action_item=this.Action_item.join(',')
   this._calenderDto.User_list=this.checkedusers.join(',');
   this._calenderDto.Dms=this.checkeddms.join(',');
   this._calenderDto.Portfolio=this.checkedportfolio.join(',');
   this._calenderDto.Project=this.checkedproject.join(',');
  // console.log(this._calenderDto,"dto")
    this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
    (data => {
      this.notifyService.showSuccess("Successfully", "Completed");
      // window.close();
    });
  }
  open_side(){
    document.getElementById("cardmain").classList.add("cards-main");

  }
  dropsw(){
    var offbtn = $("#dropusers").offset();    
    var offnewtop = offbtn.top + 20;
    var offnewleft = offbtn.left - 340;
    $(".drope").offset({ top: offnewtop, left: offnewleft});
    $(".drope").addClass('show');
  }
  _ObjCompletedProj: CompletedProjectsDTO;
  getProjectTypeList() {
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
      });
      // console.log(this.ProjectTypelist,"121")
  }

  close_side(){
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  ActionedAssigned_Josn:any=[];
  GetAssigned_SubtaskProjects() {
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = 2411;
    this._ObjCompletedProj.Mode = 'Todo';
    this._ObjCompletedProj.Schedule_ID = this.Scheduleid;
   
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        // this.CategoryList = JSON.parse(data[0]['CategoryList']);
        this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);
      
        // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        console.log("the sss", this._TodoList)
        
      });
  }
  _taskName:any;
  task_id:any;

  GetProjectTypeList(taskName, id) {
    // debugger
    this._taskName = taskName;
    this.task_id = id;
    this.router.navigate(["Meeting-Report/"+this.Schedule_ID+"/ActionToAssign/2"]);
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
        this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = 2411;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
          (data) => {
            this._TodoList = JSON.parse(data['Jsonmeeting_Json']);
            // this._CompletedList = JSON.parse(data['CompletedList']);
           
            let message: string = data['Message'];
            this._Demotext = "";
            this.notifyService.showInfo("Successfully", message);
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
      this.GetAssigned_SubtaskProjects();
    });
  }
  closeInfo() {
      
    
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
  
  }
  
}
