import { Component, OnInit } from '@angular/core';
declare var FusionCharts: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
charts(){
  
}
  ngOnInit(): void {

//  chart js ---------------------
new FusionCharts({
  type: "radialbar",
  width: "100%",
  height: "100%",
  renderAt: "chart-container",
  dataSource: {
    chart: {
      theme: "fusion",
      // caption: "7Hr 32M",
      // subCaption: "January 2021",
      showLegend: 1,
      innerRadius: 30,
      outerRadius: 105,
      showLabels: 1,
      labelText: "$label"
    },
    data: [
      {
        label: "Design",
        value: 94.09,
        color: "#5867dd" //Custom Color
      },
      
      {
        label: "Develoment",
        value: 59.89,
        color: "#b2beff" //Custom Color
      },
      {
        label: "Testing",
        value: 91.53,
        color: "#985eff" //Custom Color
      }
    ]
  }
}).render();


// chart js end ----------------




    var lang = {
      "javascript": "70%",
    };
    
    var multiply = 4;
    
    $.each( lang, function( language, pourcent) {
    
      var delay = 700;
      
      setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
      },delay*multiply);
      
      multiply++;
    
    });
    
  }
  

}
