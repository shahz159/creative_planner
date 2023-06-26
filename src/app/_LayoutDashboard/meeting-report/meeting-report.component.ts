import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { CalenderService } from 'src/app/_Services/calender.service';
import { LinkService } from 'src/app/_Services/link.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})

export class MeetingReportComponent implements OnInit {
  Scheduleid:any;
  _calenderDto: CalenderDTO;
  EventScheduledjson:any=[];
  Schedule_ID:any;
  User_Scheduledjson:any=[];
  Project_NameScheduledjson:any=[];
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
     
     'ae-picker'
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
    private CalenderService: CalenderService,
    public _LinkService: LinkService
  ) {
    this._calenderDto = new CalenderDTO;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var scode = params.get('scheduleid');
      this.Scheduleid = scode;
    });
 this.meeting_details()
  }
  checkedusers:any=[];
  checkedproject:any=[];
  checkeddms:any=[];
  checkedportfolio:any=[];
  Meeting_Detailsdata:any=[];
  Taskname:string;
  meeting_details(){
    
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
         
          console.log(this.EventScheduledjson, "111111")
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
 Date:any;
 EDate:any;
 SEDate:any;
 EmpNo:any;
 locbuild:any;
 fulllocbuild:any;
 Status:any;
 Schedule_Type:any;
 Description:any;
 Created_by:any;
 EventNumber:any;
 Onlinelink:any;
 St_Time:any;
 Ed_Time:any;
 
  Insert_meetingreport(){
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
      // this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      //   ((data) => {
      //     this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      //    this.Taskname=this.EventScheduledjson[0].Task_Name;
      //    this.Date=this.EventScheduledjson[0].Schedule_date;
      //    this.EDate=this.EventScheduledjson[0].End_date;
      //    this.SEDate=this.EventScheduledjson[0].SEndDate;
      //    this.EmpNo=this.EventScheduledjson[0].Emp_No;
      //    this.locbuild=this.EventScheduledjson[0].Location;
      //    this.fulllocbuild=this.EventScheduledjson[0].FullAddress_loc;
      //    this.Status =this.EventScheduledjson[0].Status;
      //    this.Schedule_Type=this.EventScheduledjson[0].Schedule_Type;
      //    this.Description=this.EventScheduledjson[0].Description;
      //    this.Created_by=this.EventScheduledjson[0].Created_by;
      //    this.EventNumber=this.EventScheduledjson[0].EventNumber;
      //    this.Onlinelink=this.EventScheduledjson[0].Onlinelink;
      //    this.St_Time=this.EventScheduledjson[0].St_Time;
      //    this.Ed_Time=this.EventScheduledjson[0].Ed_Time;
      //    this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
         
      //   });



  }
  open_side(){
    document.getElementById("cardmain").classList.add("cards-main");

  }

  close_side(){
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  

}
