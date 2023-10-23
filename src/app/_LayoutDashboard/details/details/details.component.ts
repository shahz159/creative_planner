import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {ProjectMoreDetailsService} from '../../../_Services/project-more-details.service';
declare var FusionCharts: any;







class ProjectInformation{
     projectName:string|undefined;
     projectDescription:string|undefined;
     projectType:string|undefined;
     projectCode:string|undefined;
     projectId:number|undefined;
     projectStartDate:Date|undefined;
     projectEndDate:Date|undefined;
     projectAllocatedHours:string|undefined;
     projectDelayInDays:number|undefined;
     projectStatus:string|undefined;
     projectDuration:number|undefined;


     constructor(pName:string,pDes:string,pTy:string,pC:string,pId:number,pstatus:string,startd:string,endd:string,allocatedH:string,delayd:number){
          this.projectName=pName;
          this.projectDescription=pDes;
          this.projectType=pTy;
          this.projectCode=pC;
          this.projectId=pId;
          this.projectStatus=pstatus;
          this.projectStartDate=new Date(startd);
          this.projectEndDate=new Date(endd);
          this.projectAllocatedHours=allocatedH;
          this.projectDuration=Math.abs(moment(startd).diff(moment(endd),"days"));
          
          this.projectDelayInDays=delayd;
     }     


}




















@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   projectInformation:ProjectInformation;

   constructor(private projectMoreDetailsService:ProjectMoreDetailsService) { }
   charts(){ }
   ngOnInit(): void {

    


    this.projectMoreDetailsService.getProjectMoreDetails("4001394").subscribe(res=>{
      
           const {Project_Name,Project_Type,Project_Description,Project_Code,id}=JSON.parse(res[0].ProjectName_Json)[0];
           const {StartDate,EndDate,AllocatedHours,Status,Delaydays}=JSON.parse(res[0].ProjectStates_Json)[0];
           this.projectInformation=new ProjectInformation(Project_Name,Project_Description,Project_Type,Project_Code,id,Status,StartDate,EndDate,AllocatedHours,Delaydays);
             console.log("projectInformation:",this.projectInformation);
    })












    
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
