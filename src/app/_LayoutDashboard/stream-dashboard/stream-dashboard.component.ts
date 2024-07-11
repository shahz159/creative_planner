import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stream-dashboard',
  templateUrl: './stream-dashboard.component.html',
  styleUrls: ['./stream-dashboard.component.css']
})
export class StreamDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view_graph_div(){
    document.getElementById("graph-div").style.display = "block";
  }
  close_graph_div(){
    document.getElementById("graph-div").style.display = "none";
  }
}
