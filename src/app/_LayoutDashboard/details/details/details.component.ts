import { AfterViewInit, Component, ElementRef, OnInit, } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectMoreDetailsService } from '../../../_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LinkService } from 'src/app/_Services/link.service';

declare var FusionCharts: any;

// class ProjectAction {
//   id: number | undefined;
//   status: string | undefined;
//   action: string | undefined;
//   owner:string|undefined;
//   responsible: string | undefined;
//   deadline: string | undefined;
//   actiondelay: string | undefined;
//   description:string|undefined;
//   category:string|undefined;
//   startDate:Date|undefined;
//   endDate:Date|undefined;
//   duration:number|undefined;
//   allocated:number|undefined;
//   client:string|undefined;
//   constructor(id, action,description,owner,responsible,client, status, deadline, actiondelay,category,startd,endd,allocatedhours) {
//     this.id = id;
//     this.action = action;
//     this.description=description;
//     this.client=client;
//     this.status = status;
//     this.owner=owner;
//     this.responsible = responsible;
//     const d = new Date(deadline);
//     this.deadline = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
//     this.actiondelay = actiondelay;
//     this.category=category;
//     this.startDate=new Date(startd);
//     this.endDate=new Date(endd);
//     this.duration=Math.abs(moment(startd).diff(moment(endd),'days'));
//     this.allocated=allocatedhours;
//   }
// }

// class ProjectInformation {
//   projectName: string | undefined;
//   projectDescription: string | undefined;
//   projectType: string | undefined;
//   projectCode: string | undefined;
//   projectId: number | undefined;
//   projectStartDate: Date | undefined;
//   projectEndDate: Date | undefined;
//   projectAllocatedHours: string | undefined;
//   projectStdAllocatedHours:string|undefined;
//   projectDelayInDays: number | undefined;
//   projectStatus: string | undefined;
//   projectDuration: number | undefined;
  
//   projectClient:string|undefined;
//   projectOwner:string|undefined;
//   projectCost:string|undefined;
//   projectCategory:string|undefined;
//   projectResponsible:string|undefined;
//   submissiontype:string|undefined;

//   projectActions: ProjectAction[] | undefined;
//   TOTAL_ACTIONS_IN_PROCESS: number = 0;
//   TOTAL_ACTIONS_IN_DELAY: number = 0;
//   TOTAL_ACTIONS_DONE: number = 0;
//   TOTAL_ACTIONS: number = 0;



//   projectMemos:any;




//   constructor(pName: string, pDes: string, pTy: string, pC: string, pId: number, pstatus: string, startd: string, endd: string, allocatedH: string,stdallocatedH:string ,delayd: number,client:string,owner:string,cost:string,category:string,responsible:string,prjact: ProjectAction[],submissiontype:string) {
//     this.projectName = pName;
//     this.projectDescription = pDes;
//     this.projectType = pTy;
//     this.projectCode = pC;
//     this.projectId = pId;
//     this.projectStatus = pstatus;
//     this.projectStartDate = new Date(startd);
//     this.projectEndDate = new Date(endd);
//     this.projectAllocatedHours = allocatedH;
//     this.projectDuration = Math.abs(moment(startd).diff(moment(endd), "days"));
//     this.projectDelayInDays = delayd;
//     this.projectActions = prjact;
    
//     this.projectClient=client;
//     this.projectOwner=owner;
//     this.projectCost=cost;
//     this.projectCategory=category;
//     this.projectResponsible=responsible;
//     this.submissiontype=submissiontype;
//     this.projectStdAllocatedHours=stdallocatedH;

//     this.projectActions.forEach(action => {
//       if (action.status === 'Completed')
//         this.TOTAL_ACTIONS_DONE += 1;
//       else if (action.status === 'Delay')
//         this.TOTAL_ACTIONS_IN_DELAY += 1;
//       else if (action.status === 'InProcess')
//         this.TOTAL_ACTIONS_IN_PROCESS += 1;
//     })

//     this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS;
//     this.projectMemos=undefined;
//   }
// }


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,AfterViewInit {

  projectInfo:any;
  projectActionInfo:any;
  projectMemos:any;
  _totalMemos:number=0;
  _linkedMemos:number=0;
  Memos_List:any;

  TOTAL_ACTIONS_IN_PROCESS: number = 0;
  TOTAL_ACTIONS_IN_DELAY: number = 0;
  TOTAL_ACTIONS_DONE: number = 0;
  TOTAL_ACTIONS: number = 0;
  currentActionView:number|undefined;
  URL_ProjectCode:any;
  Current_user_ID: string;
  dropdownSettings_Memo:{singleSelection: boolean,idField: string,textField: string,selectAllText:string,unSelectAllText: string,itemsShowLimit: number,allowSearchFilter: boolean}|undefined;
  selectedMemos:{MailId:string}[];
  




  constructor(private projectMoreDetailsService: ProjectMoreDetailsService,
    private router: Router,private activatedRoute: ActivatedRoute,private bsService:BsServiceService,public _LinkService: LinkService) { }
  charts() { }
  
  
  ngOnInit(): void {
    this.Current_user_ID=localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
    this.activatedRoute.paramMap.subscribe(params=>this.URL_ProjectCode=params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
    this.getProjectDetails(this.URL_ProjectCode);   // get all project details from the api.
    this.showActionDetails(undefined);     // initially show the Project details
    // this.router.navigate(["./Details", this.URL_ProjectCode]);
  }

  ngAfterViewInit():void{
     this.drawStatistics();
  }
 
  drawStatistics(){
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

      this.projectInfo=JSON.parse(res[0].ProjectInfo_Json)[0];   // projectInfo is an Object
      this.projectActionInfo=JSON.parse(res[0].Action_Json);     // projectActionInfo is an Array of obj.

      console.log("projectInfo:",this.projectInfo,"projectActionInfo:",this.projectActionInfo)
      
      if(this.projectActionInfo){
        this.projectActionInfo.forEach(action => {
          if (action.Status === 'Completed')
            this.TOTAL_ACTIONS_DONE += 1;
          else if (action.Status === 'Delay')
            this.TOTAL_ACTIONS_IN_DELAY += 1;
          else if (action.Status === 'InProcess')
            this.TOTAL_ACTIONS_IN_PROCESS += 1;
        })
      }
      else
          this.projectActionInfo=null;
        
    
      this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS;
      this.bsService.SetNewPojectCode(this.URL_ProjectCode);
      this.bsService.SetNewPojectName(this.projectInfo.Project_Name);
    });
  }



  showActionDetails(index:number|undefined)
  {
    this.currentActionView=index;
  }
    
   

  // ADDING NEW ACTIONS 
   addNewAction() {

       if(this.projectInfo.Status==='Completed')
       {
            Swal.fire({
              title:"Wait This Project is Already Completed",
              text:'Do you want to reopen this Project?',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No'
            })
            .then((option)=>{
                if(option.isConfirmed)
                {   // user said yes to add new action into a project which is already completed.
                      this.showSideBar();
                }
                else{
                  // when the user said no 
                  Swal.fire(
                    'Cancelled',
                    'Action not created',
                    'error'
                  )
                }
            })
            .catch(e=> console.log(e));
       }
       else{
        // if projectStatus is 'Delay' ...
               this.showSideBar();
       }
  

  }

   showSideBar(){
     this.router.navigate(["./Details",this.URL_ProjectCode,"ActionToProject","4"]);
     document.getElementById("mysideInfobar1").classList.add("kt-action-panel--on");
      document.getElementById("newdetails").classList.add("position-fixed");
      document.getElementById("rightbar-overlay").style.display = "block";
      $("#mysideInfobar1").scrollTop(0);
   }

   closeInfo() {
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["./Details",this.URL_ProjectCode]);
    this.closeLinkSideBar();
  }

///  

//  ADD NEW DMS
addNewDMS(){


   
   this.GetDMS_Memos(); 
   this.GetMemosByEmployeeId();


    // opens the addnewdms sidebar
    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    //
}

closeLinkSideBar() {
  document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
  document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";
 
}

//



GetDMS_Memos() {
  this._LinkService._GetOnlyMemoIdsByProjectCode(this.URL_ProjectCode).
    subscribe((data:any) => {
      
      console.log("get memos here:",data)
         if(data){ // if data is null means there is no memos of the project.
          this._LinkService._GetMemosSubject(data[0]['JsonData']).
          subscribe((data:any) => {
              this.projectMemos=JSON.parse(data.JsonData);
              this._linkedMemos=this.projectMemos.length;

              console.log("get memo subject:",this.projectMemos);
            
          });
         }
          
    });
}


GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data:any)=>{
             console.log("getmemosbyempid:",JSON.parse(data.JsonData));
             this._totalMemos=JSON.parse(data.JsonData).length;
             this.Memos_List=JSON.parse(data.JsonData);
             this.dropdownSettings_Memo = {
                           singleSelection: true,
                           idField: 'MailId',
                           textField: 'Subject',
                           selectAllText: 'Select All',
                           unSelectAllText: 'UnSelect All',
                           itemsShowLimit: 1,
                           allowSearchFilter: true
                                         };
    });

  // this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
  //   subscribe((data) => {
  //     this.Memos_List = JSON.parse(data['JsonData']);
  //     this._ActualMemoslist = JSON.parse(data['JsonData']);
  //     // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
  //     this._totalMemos = this._ActualMemoslist.length;
  //     // console.log("Memos List", JSON.parse(data['JsonData']));
  //     this.dropdownSettings_Memo = {
  //       singleSelection: true,
  //       idField: 'MailId',
  //       textField: 'Subject',
  //       selectAllText: 'Select All',
  //       unSelectAllText: 'UnSelect All',
  //       itemsShowLimit: 1,
  //       allowSearchFilter: true
  //     };
  // });
}




   onMemoSelected(e:ElementRef){ 
      console.log(e);



   }
  















   onMemoDeselected(e){    }

}
