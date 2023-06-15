import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.css']
})
export class MeetingReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open_side(){
    document.getElementById("cardmain").classList.add("cards-main");
  }
  close_side(){
    document.getElementById("cardmain").classList.remove("cards-main");
  }
  

}
