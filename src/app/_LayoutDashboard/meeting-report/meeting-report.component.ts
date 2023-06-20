import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { CalenderService } from 'src/app/_Services/calender.service';
import { LinkService } from 'src/app/_Services/link.service';


@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})

export class MeetingReportComponent implements OnInit {
  Scheduleid:any;
  _calenderDto: CalenderDTO;

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
  EventScheduledjson:any=[];
  Schedule_ID:any;
  User_Scheduledjson:any=[];
  Project_NameScheduledjson:any=[];
  portfolio_Scheduledjson:any=[];
  DMS_Scheduledjson:any=[];
  dmsIdjson:any=[];
  _MemosSubjectList: any;
  Attachments_ary:any;
  meeting_details(){
    
    this.Schedule_ID = this.Scheduleid;
    this._calenderDto.Schedule_ID=this.Schedule_ID ;
      this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
        ((data) => {
          this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
          console.log(this.EventScheduledjson, "111111")
          this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
          this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);
          this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
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
              console.log("Subject Name ------------>", this._MemosSubjectList);
       
        });
      }

    });
  }

  open_side(){
    document.getElementById("cardmain").classList.add("cards-main");
  }
  close_side(){
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  

}
