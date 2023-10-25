import { Component, OnInit,ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ProjectMoreDetailsService } from '../../../_Services/project-more-details.service';
declare var FusionCharts: any;

class ProjectAction {
  id: number | undefined;
  status: string | undefined;
  action: string | undefined;
  owner:string|undefined;
  responsible: string | undefined;
  deadline: string | undefined;
  actiondelay: string | undefined;
  description:string|undefined;
  category:string|undefined;
  startDate:Date|undefined;
  endDate:Date|undefined;
  duration:number|undefined;
  allocated:number|undefined;
  client:string|undefined;
  constructor(id, action,description,owner,responsible,client, status, deadline, actiondelay,category,startd,endd) {
    this.id = id;
    this.action = action;
    this.description=description;
    this.client=client;
    this.status = status;
    this.owner=owner;
    this.responsible = responsible;
    const d = new Date(deadline);
    this.deadline = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    this.actiondelay = actiondelay;
    this.category=category;
    this.startDate=new Date(startd);
    this.endDate=new Date(endd);
    this.duration=Math.abs(moment(startd).diff(moment(endd),'days'));
    this.allocated=Math.abs(moment(startd).diff(moment(endd),'hours'));
  }
}

class ProjectInformation {
  projectName: string | undefined;
  projectDescription: string | undefined;
  projectType: string | undefined;
  projectCode: string | undefined;
  projectId: number | undefined;
  projectStartDate: Date | undefined;
  projectEndDate: Date | undefined;
  projectAllocatedHours: string | undefined;
  projectDelayInDays: number | undefined;
  projectStatus: string | undefined;
  projectDuration: number | undefined;
  



  projectClient:string|undefined;
  projectOwner:string|undefined;
  projectCost:string|undefined;
  projectCategory:string|undefined;
  projectResponsible:string|undefined;










  projectActions: ProjectAction[] | undefined;
  TOTAL_ACTIONS_IN_PROCESS: number = 0;
  TOTAL_ACTIONS_IN_DELAY: number = 0;
  TOTAL_ACTIONS_DONE: number = 0;
  TOTAL_ACTIONS: number = 0;

  constructor(pName: string, pDes: string, pTy: string, pC: string, pId: number, pstatus: string, startd: string, endd: string, allocatedH: string, delayd: number,client:string,owner:string,cost:string,category:string,responsible:string,prjact: ProjectAction[]) {
    this.projectName = pName;
    this.projectDescription = pDes;
    this.projectType = pTy;
    this.projectCode = pC;
    this.projectId = pId;
    this.projectStatus = pstatus;
    this.projectStartDate = new Date(startd);
    this.projectEndDate = new Date(endd);
    this.projectAllocatedHours = allocatedH;
    this.projectDuration = Math.abs(moment(startd).diff(moment(endd), "days"));
    this.projectDelayInDays = delayd;
    this.projectActions = prjact;
    
    this.projectClient=client;
    this.projectOwner=owner;
    this.projectCost=cost;
    this.projectCategory=category;
    this.projectResponsible=responsible;


    this.projectActions.forEach(action => {
      if (action.status === 'Completed')
        this.TOTAL_ACTIONS_DONE += 1;
      else if (action.status === 'Delay')
        this.TOTAL_ACTIONS_IN_DELAY += 1;
      else if (action.status === 'InProcess')
        this.TOTAL_ACTIONS_IN_PROCESS += 1;
    })

    this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS;

  }
}





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  projectInformation: ProjectInformation;
  currentActionView:number|undefined;


  constructor(private projectMoreDetailsService: ProjectMoreDetailsService) { }
  charts() { }
  ngOnInit(): void {
    this.getProjectDetails("CRS184037");   // get all project details from the api.
    this.showActionDetails(undefined);     // initially show the Project details

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
    $.each(lang, function (language, pourcent) {
      var delay = 700;
      setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
      }, delay * multiply);
      multiply++;
    });

  }




  getProjectDetails(prjCode:string) {
    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
      console.log("=====check this=======>", res);

      const { Project_Name, Project_Type, Project_Description, Project_Code, id } = JSON.parse(res[0].ProjectName_Json)[0];
      const { StartDate, EndDate, AllocatedHours, Status, Delaydays } = JSON.parse(res[0].ProjectStates_Json)[0];
      const {Client_Name,Owner,Project_Cost,ReportType,Responsible}=JSON.parse(res[0].ProjectInfo_Json)[0];
      console.log('action json==>', JSON.parse(res[0].Action_Json));

      const actionjsonobj = JSON.parse(res[0].Action_Json);
      const prjactions = actionjsonobj ? actionjsonobj.map(action => new ProjectAction(
        action.IndexId,
        action.Project_Name,
        action.Project_Description,
        action.Subtask_Owner,
        action.Subtask_Res,
        action.Client,
        action.Status,
        action.EndDate,
        action.Delaydays,
        action.Category,
        action.StartDate,
        action.EndDate
      )) : [];    // if there is no actions in the project then assign an empty array .
      this.projectInformation = new ProjectInformation(Project_Name, Project_Description, Project_Type, Project_Code, id, Status, StartDate, EndDate, AllocatedHours, Delaydays,Client_Name,Owner,Project_Cost,ReportType,Responsible,prjactions);
      console.log("projectInformation:", this.projectInformation);
    });
  }



  showActionDetails(index:number|undefined)
  {
    if(index!==undefined)
    this.currentActionView=index;
  }
    
   








}
