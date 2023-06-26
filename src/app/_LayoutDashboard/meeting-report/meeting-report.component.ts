import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { CalenderService } from 'src/app/_Services/calender.service';
import { LinkService } from 'src/app/_Services/link.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { NotificationService } from 'src/app/_Services/notification.service';
@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})

export class MeetingReportComponent implements OnInit {
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
  projectchecked1:boolean=true;
  dmschecked1:boolean=true;
  portfoliochecked1:boolean=true;
  Notes_Type:any;
Action_item:any;
checkedusers:any=[];
checkedproject:any=[];
checkeddms:any=[];
checkedportfolio:any=[];
Meeting_Detailsdata:any=[];
Taskname:string;
Action_task:string;
  // config: AngularEditorConfig = {
  //   editable: true,
  //   spellcheck: true,
  //   height: 'auto',
  //   minHeight: '5rem',
  //   maxHeight: 'auto',
  //   width: 'auto',
  //   minWidth: '0',
  //   placeholder: 'Enter text here...',
  //   translate: 'no',
  //   defaultParagraphSeparator: 'p',
  //   defaultFontName: 'Arial',
  //   toolbarHiddenButtons: [
  //     [
  //       // 'bold',
  //       // 'italic',
  //       // 'underline',
  //       'strikeThrough',
  //       'subscript',
  //       'superscript',
  //       'indent',
  //       'outdent',
  //       // 'insertUnorderedList',
  //       // 'insertOrderedList',
  //       'heading'
  //       // 'fontName'
  //     ],
  //     [
  //       // 'fontSize',
  //       // 'textColor',
  //       // 'backgroundColor',
  //       'customClasses',

  //       'unlink',
  //       'insertImage',
  //       'insertVideo',
  //       'insertHorizontalRule',
  //       'removeFormat',
  //       'toggleEditorMode',
  //    'fontSelector',
  //    'justifyLeft',
  //    'justifyCenter',
  //    'justifyRight',
  //    'justifyFull',
  //    'bold',
  //    'italic',
  //    'underline',
  //    'heading',
     
    
  //     ]
  //   ],
  //   customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText',
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  // };

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
  constructor(private route: ActivatedRoute,
    public notifyService: NotificationService,
    private CalenderService: CalenderService,
    public _LinkService: LinkService,
    public ProjectTypeService: ProjectTypeService
  ) {
    this._calenderDto = new CalenderDTO;
    this._ObjAssigntaskDTO = new AssigntaskDTO();
  }
  ngOnInit(): void {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.route.paramMap.subscribe(params => {
      var scode = params.get('scheduleid');
      this.Scheduleid = scode;
    });
 this.meeting_details();
  // document.addEventListener('DOMContentLoaded', function () {
  //     const addButton = document.querySelector('#btn1') as HTMLButtonElement;
  //       const input = document.querySelector('#todo-input') as HTMLInputElement;
  //       const ul = document.querySelector('#todo-list') as HTMLUListElement;

  //       addButton.addEventListener('click', (event: Event) => {
  //         event.preventDefault();
  //         alert('dfgdf');
  //         const todoText: string = input.value.trim();
  //         if (todoText !== '') {
  //           const li: HTMLLIElement = document.createElement('li');
  //           li.textContent = todoText;
  //           ul.appendChild(li);
  //           input.value = '';
  //         }
  //       });

  //       ul.addEventListener('click', (event: Event) => {
  //         const target = event.target as HTMLElement;
  //         if (target.tagName === 'LI') {
  //           const li = target as HTMLLIElement;
  //           li.contentEditable = 'true';
  //           li.focus();
  //         }
  //       });

  //       ul.addEventListener('blur', (event: Event) => {
  //         const target = event.target as HTMLElement;
  //         if (target.tagName === 'LI') {
  //           const li = target as HTMLLIElement;
  //           li.contentEditable = 'false';
  //         }
  //       });
  //     }); 
 
  }
 
  meeting_details(){
    
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
         
          console.log(this.EventScheduledjson, "111111")
          debugger
          this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
          this.User_Scheduledjson.forEach(element => {
            this.checkedusers.push(element.stringval);
           
          });
          console.log(this.checkedusers,"chec")
          this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
          this.Project_NameScheduledjson.forEach(element => {
            this.checkedproject.push(element.stringval);
          
          
          });
          console.log(this.checkedproject,"chec1")
          // alert(this.Project_NameScheduledjson) 
          this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.portfolio_Scheduledjson.forEach(element => {
          this.checkedportfolio.push(element.numberval);
          
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
              });
              this.checkeddms = this.checkeddms.map((num) => num.toString());
             
       
        });
      }

    });
  }

  _TodoList = [];
  _Demotext:any;
  text:any=[];
  EnterSubmit(_Demotext) {
    if (_Demotext != "") {
     
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.TaskName = this._Demotext;

      this.text.push(this._Demotext);
      this._Demotext="";
    //   this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
    //     (data) => {
    //       //console.log("Data---->", data);
    //       this._TodoList = JSON.parse(data['TodoList']);
    //       let message: string = data['Message'];
    //       this._Demotext = "";
    //       //this.GetAssignTask();
    //       this.notifyService.showSuccess("Successfully", "Added");
    //       // this.closeInfo();
    //     });
    // }
    // else {
    //   this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
    // }
    }
    
  }


  Online_methodproject(event) {
  
    if(event.target.checked==true){
      this.checkedproject.push(event.target.value);
      // alert(this.checkedproject);
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
      // alert(this.checkedportfolio);
    }
    else if(event.target.checked==false){
      let index = this.checkedportfolio.indexOf(event.target.value);
      if(index > -1){
        this.checkedportfolio.splice(index,1);
      }
      // alert(this.checkedportfolio);
    }
  console.log(this.checkedportfolio);
   
  }
  
  Online_methoddms(event) {
 
    if(event.target.checked==true){
      this.checkeddms.push(event.target.value);
      // alert(this.checkeddms);
    }
    else if(event.target.checked==false){
      let index = this.checkeddms.indexOf(event.target.value);
      if(index > -1){
        this.checkeddms.splice(index,1);
      }
      // alert(this.checkeddms);
    }
  console.log(this.checkeddms);
  }
  


  Online_methoduser(event) {
    // if(event.target.checked==true){
    //   this.userchecked1=true;
    
    // }
    // else{
    //   this.userchecked1=false;
    // }

      if(event.target.checked==true){
        this.checkedusers.push(event.target.value);
        // alert(this.checkedusers);
      }
      else if(event.target.checked==false){
        let index = this.checkedusers.indexOf(event.target.value);
        if(index > -1){
          this.checkedusers.splice(index,1);
        }
        // alert(this.checkedusers);
      }
    console.log(this.checkedusers);
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


  Insert_meetingreport(){
   debugger
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
   this._calenderDto.Notes=this.Notes_Type;
   this._calenderDto.Action_item=this.Action_item;
   
  
    this.CalenderService.NewGetMeeting_report(this._calenderDto).subscribe
    (data => {

    });
  }
  open_side(){
    document.getElementById("cardmain").classList.add("cards-main");

  }

  close_side(){
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  

}
