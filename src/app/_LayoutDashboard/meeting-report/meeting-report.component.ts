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
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})

export class MeetingReportComponent implements OnInit {
  @ViewChild('myTextarea') myTextarea!: ElementRef<HTMLTextAreaElement>;

  _ObjAssigntaskDTO: AssigntaskDTO;
  CurrentUser_ID: string;
  Scheduleid: any;
  _calenderDto: CalenderDTO;
  EventScheduledjson: any = [];
  Schedule_ID: any;
  User_Scheduledjson: any = [];
  Project_NameScheduledjson: any;
  portfolio_Scheduledjson: any = [];
  DMS_Scheduledjson: any = [];
  dmsIdjson: any = [];
  _MemosSubjectList: any;
  Attachments_ary: any;
  _onlinelink: boolean = true;
  userchecked: boolean = true;
  projectchecked: boolean = true;
  dmschecked: boolean = true;
  portfolioschecked: boolean = true;
  userchecked1: boolean = true;
  // projectchecked1:boolean=true;
  dmschecked1: boolean = true;
  portfoliochecked1: boolean = true;
  Notes_Type: any;
  ProjectTypelist: any;
  Action_item: any = [];

  checkedusers: any = [];
  ngEmployeeDropdown:any = [];
  checkedproject: any = [];
  checkeddms: any = [];
  checkedportfolio: any = [];
  Meeting_Detailsdata: any = [];
  Taskname: string;
  Action_task: string;
  _TodoList: any = [];
  _Demotext: any;
  text: any = [];
  Alltimes: any = [];
  EndTimearr: any = [];
  _arrayObj: any;
  AllEndtime: any = [];
  StartTimearr: any = [];
  timingarryend: any = [];
  Time_End: any = [];
  Startts: any;
  timearr1: any = [];
  Endtms: any;
  _SEndDate: any;
  scstartdate: any;
  _StartDate: any;
  Guestcount: number;
  projectcount: number;
  portfoliocount: number;
  totalguest: number;
  totalproject: number;
  totalportfolios: number;
  totaldms: number;
  todo: any = [];
  todocount: number;
  dmscount; number;
  daysSelectedII: any = [];
  minDate = moment().format("YYYY-MM-DD").toString();
  disablePreviousDate = new Date();
  ScheduleType: any;
  ngEmployeeDropdown1: any;
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
  private refreshSubscription: Subscription;
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
  _meetingNotesAry: any = [];
  _userfullname: string;
  interval = 0;
  ngOnInit(): void {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.route.paramMap.subscribe(params => {
      var scode = params.get('scheduleid');
      this.Scheduleid = scode;
    });
this.GetPreviousdate_meetingdata();
    this.GetMeetingnotes_data();
    this.GetAssigned_SubtaskProjects();
    this.getProjectTypeList();
    // this.GetProjectAndsubtashDrpforCalender()
    this.GetTimeslabfordate();
    this.meeting_details();
    this.getScheduleId();
    this.GetcompletedMeeting_data();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());



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

  // addBulletPointsOnFocus() {
  //   const textarea = this.myTextarea.nativeElement;

  //   if (textarea.value === '') {

  //     textarea.value = '• ';
  //   }
  // }
  leave: boolean = false;
  leavemeet(event: any) {
    this.leave = true;
    
    this.addBulletPointsOnEnter(event)
    setTimeout(() => {
      this.delayedFunction();
    }, 2000);
    this.notifyService.showSuccess("Meeting left","Success");

    
  }
  delayedFunction() {
    console.log('Function called after 5 seconds');
    window.close();
  }
  addBulletPointsOnEnter(event: any) {

    if (event.keyCode === 32 || event.keyCode === 13 || this.leave == true) {


      this.Schedule_ID = this.Scheduleid;
      this._calenderDto.Schedule_ID = this.Schedule_ID;
      this._calenderDto.Emp_No = this.CurrentUser_ID;
      this._calenderDto.Meeting_notes = this.Notes_Type;
      this._calenderDto.Status_type = "Left"
      // alert(this.Notes_Type)
      // console.log(this._calenderDto);
      this.CalenderService.NewGetMeeting_notes(this._calenderDto).subscribe
        (data => {

          // window.close();
        });
    }

  }

  Meetingnotes_time: any = [];
  GetMeetingnotes_data() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.CurrentUser_ID;
    this.CalenderService.NewGetMeetingdata_notes(this._calenderDto).subscribe
      (data => {
        this.Meetingnotes_time = JSON.parse(data['Checkdatetimejson']);
        this.Notes_Type = this.Meetingnotes_time[0]['Meeting_notes']
        // console.log(this.Meetingnotes_time,'notes111')
      });

  }

  CompletedMeeting_notes: string;
  Meetingstatuscom: string;
  Meetingnotescom: string;
  isCheckboxDisabled: boolean = false;
  Userstatus: string;
  Isadmin: boolean = false;
  unsubscribe: boolean = false;

  GetcompletedMeeting_data() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.CurrentUser_ID;
    this.CalenderService.NewGetcompleted_meeting(this._calenderDto).subscribe
      (data => {
        this.CompletedMeeting_notes = JSON.parse(data['meeitng_datajson']);
        this.Meetingstatuscom = this.CompletedMeeting_notes[0]['Meeting_status'];
        this.Userstatus = this.CompletedMeeting_notes[0]['Status'];
        this.Meetingnotescom = this.CompletedMeeting_notes[0]['Notes'];
        this.GetNotedata();
        if (this.Meetingstatuscom == "Completed") {
          this.isCheckboxDisabled = true;
        }
        else {
          this.interval = setInterval(() => {
            this.GetNotedata();
          }, 5000);
        }
        console.log(this.CompletedMeeting_notes, 'notes11122')
      });
  }
  meetingpoint: string;
  Notespoint: string;
  empname: string;
  GetNotedata() {
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.CurrentUser_ID;
    this.CalenderService.NewGetMeetingnote_comp(this._calenderDto).subscribe
      (data => {
        this._meetingNotesAry = JSON.parse(data["Checkdatetimejson"]);
        this._userfullname = this._meetingNotesAry.filter(x => x.Emp_no == this.CurrentUser_ID)[0]["Emp_Name"];

        if (this.Meetingstatuscom == "Completed") {
          this.interval == 0;
          if (this.interval == 0) {
            clearInterval(this.interval);
          }
        }
      });
  }



  onfocus(val) {
    console.log(val, "ttt");
  }
  Adduser_meetingreport() {

    for (const element of this.ngEmployeeDropdown1) {
      this.ngEmployeeDropdown.push(element);
  }
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.CurrentUser_ID;
    this._calenderDto.User_list = this.ngEmployeeDropdown;


    this.CalenderService.Newinsertuser_meetingreport(this._calenderDto).subscribe
      (data => {
        this.meeting_details();
      });
      this.ngEmployeeDropdown1=null;
      this.notifyService.showSuccess("Participant added successfully","Success");
  }

  updatedateandtime_meetingreport() {

    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Scheduled_date = this._StartDate;
    this._calenderDto.StartTime = this.Startts;
    this._calenderDto.EndTime = this.Endtms;

    this.CalenderService.Newdateandtime_meetingreport(this._calenderDto).subscribe
      (data => {
        this.meeting_details();
      });

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
      console.log(this.Alltimes, "times")
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

  getScheduleId() {
    this.router.navigate(["Meeting-Report/" + this.Schedule_ID]);
  }
  status: string;
  Createdby: string;
  sched_admin: string;
  meeting_details() {

    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);

        console.log(this.EventScheduledjson, "111111")
        this.Startts = this.EventScheduledjson[0]['St_Time']
        this.Endtms = this.EventScheduledjson[0]['Ed_Time']
        this.Isadmin = this.EventScheduledjson[0]['IsAdmin']

        this.status = this.EventScheduledjson[0]['Status']
        this.Createdby = this.EventScheduledjson[0]['Created_by']
        this.sched_admin = this.EventScheduledjson[0]['Owner_isadmin']
        if (this.Isadmin) {
          this.isCheckboxDisabled = false;
        }
        if (!this.Isadmin) {
          this.isCheckboxDisabled = true;
        }
        this._StartDate = this.EventScheduledjson[0]['Schedule_date']
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        this.totalguest = this.User_Scheduledjson.length;

        this.User_Scheduledjson.forEach(element => {
          this.checkedusers.push(element.stringval);
          element.isChecked = true;
        });
        this.ngEmployeeDropdown = this.checkedusers;
        this.Guestcount = this.checkedusers.length;
        console.log(this.checkedusers, "chec")
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
        this.totalproject = this.Project_NameScheduledjson.length;
        this.Project_NameScheduledjson.forEach(element => {
          element.isChecked = true;
          this.checkedproject.push(element.stringval);

        });
        this.projectcount = this.checkedproject.length;
        console.log(this.User_Scheduledjson, "chec1")

        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.totalportfolios = this.portfolio_Scheduledjson.length;
        this.portfolio_Scheduledjson.forEach(element => {
          this.checkedportfolio.push(element.numberval);
          element.isChecked = true;
        });
        this.checkedportfolio = this.checkedportfolio.map((num) => num.toString());
        this.portfoliocount = this.checkedportfolio.length;
        console.log(this.checkedportfolio, "chec2")
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;

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
          console.log(this.dmsIdjson, "chec41")

          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);

              this._MemosSubjectList.forEach(element => {
                this.checkeddms.push(element.MailId);
                element.isChecked = true;
              });
              this.checkeddms = this.checkeddms.map((num) => num.toString());

              this.dmscount = this.checkeddms.length;

            });
        }
         if (this.Meetingstatuscom == "Completed") {
          this.isCheckboxDisabled = true;
        }
        else {
          this.interval = setInterval(() => {
            this.GetNotedata();
          }, 5000);
        }

      });



  }

  EnterSubmit(_Demotext) {

    if (_Demotext != "" && _Demotext != undefined && _Demotext != null) {
      this._ObjAssigntaskDTO.CategoryId = 2411;
      this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
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

    }

    // else {
    //   this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
    // }
  }




  Online_methodproject(event) {

    if (event.target.checked == true) {
      this.checkedproject.push(event.target.value);

    }
    else if (event.target.checked == false) {
      let index = this.checkedproject.indexOf(event.target.value);
      if (index > -1) {
        this.checkedproject.splice(index, 1);
      }
      this.Meeting_Detailsdata.push(this.checkedproject)
      console.log(this.Meeting_Detailsdata, "kkk")
    }

    this.projectcount = this.checkedproject.length;
  }

  Online_methodportfolio(event) {

    if (event.target.checked == true) {
      this.checkedportfolio.push(event.target.value);

    }
    else if (event.target.checked == false) {
      let index = this.checkedportfolio.indexOf(event.target.value);
      if (index > -1) {
        this.checkedportfolio.splice(index, 1);
      }

    }
    this.portfoliocount = this.checkedportfolio.length;
    console.log(this.checkedportfolio);

  }

  Online_methoddms(event) {

    if (event.target.checked == true) {
      this.checkeddms.push(event.target.value);

    }
    else if (event.target.checked == false) {
      let index = this.checkeddms.indexOf(event.target.value);
      if (index > -1) {
        this.checkeddms.splice(index, 1);
      }

    }
    this.dmscount = this.checkeddms.length;
    console.log(this.checkeddms);
  }

  Online_methoduser(event) {
    if (event.target.checked == true) {
      this.checkedusers.push(event.target.value);

    }
    else if (event.target.checked == false) {
      let index = this.checkedusers.indexOf(event.target.value);
      if (index > -1) {
        this.checkedusers.splice(index, 1);

      }

    }
    this.Guestcount = this.checkedusers.length

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
  _EmployeeListForDropdown: any = [];

  // GetProjectAndsubtashDrpforCalender() {

  //   this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
  //     ((data) => {

  //       this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);

  //       // this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
  //       // this.ProjectListArray = JSON.parse(data['Projectlist']);
  //       // console.log(this._EmployeeListForDropdown, "Project List Array");

  //     });
  // }
Previousdata_meeting:any=[];
sched_date:any;
notes_data:any;
Notes:any=[];
  GetPreviousdate_meetingdata(){
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Emp_No = this.CurrentUser_ID;
    
    this.CalenderService.NewPrevious_meetingreport(this._calenderDto).subscribe
      (data => {
       this.Previousdata_meeting=JSON.parse(data['previousmeet_data']);

       // Assuming Previousdata_meeting is an array of objects with a Previous_meeting property
// this.Previousdata_meeting = this.Previousdata_meeting.filter((item) => item.Previous_meeting.length > 0);

      //  this.Notes = this.Previousdata_meeting.filter(element => !element.Previous_meeting);
      
      //  this.Notes= this.Previousdata_meeting;

       console.log(this.Previousdata_meeting,"wassssss1111")
    //  console.log(this.Notes,"wassssss") 
      });
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
    // console.log(this._calenderDto,"dto")
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
    this.notifyService.showSuccess("Meeting completed successfully","Success");
  }
  open_side() {
    document.getElementById("cardmain").classList.add("cards-main");

  }
  dropsw() {
    var offbtn = $("#dropusers").offset();
    var offnewtop = offbtn.top + 20;
    var offnewleft = offbtn.left - 340;
    $(".drope").offset({ top: offnewtop, left: offnewleft });
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
    console.log(this.ProjectTypelist,"121")
  }

  close_side() {
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  ActionedAssigned_Josn: any = [];
  assigncount: number;
  GetAssigned_SubtaskProjects() {
   
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = 2411;
    this._ObjCompletedProj.Mode = 'Todo';
    this._ObjCompletedProj.Schedule_ID = this.Scheduleid;

    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        debugger
        // console.log("Data---->", data);
        // this.CategoryList = JSON.parse(data[0]['CategoryList']);
        this._TodoList = JSON.parse(data[0]['Jsonmeeting_Json']);

        // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);

        this.assigncount = this.ActionedAssigned_Josn.length;
        this.todocount = this._TodoList.length + this.ActionedAssigned_Josn.length;
        console.log("the sss", this._TodoList)
      });
   
  }
  _taskName: any;
  task_id: any;

  GetProjectTypeList(taskName, id) {
    // debugger
    this._taskName = taskName;
    this.task_id = id;
    this.router.navigate(["Meeting-Report/" + this.Schedule_ID + "/ActionToAssign/2"]);
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
  _AssignId:any;
  ActionToProject_Click(taskName, Assignid) {
    // debugger
    this._taskName = taskName;
    this._AssignId = Assignid;
    this.router.navigate(["Meeting-Report/" + this.Schedule_ID + "/ActionToProject/3"]);
    this.BsService.SetNewAssignId(this._AssignId);
    this.BsService.SetNewAssignedName(this._taskName);
    
    document.getElementById("mysideInfobar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#mysideInfobar").scrollTop(0);
   
    //this.GetProjectsByUserName();
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
    document.getElementById("Previous_sidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("metting_slide").classList.remove("position-fixed");
  }
  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }
  Slide_meeting(){
    document.getElementById("metting_slide").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("Previous_sidebar").classList.add("kt-quick-panel--on");

  }


}
