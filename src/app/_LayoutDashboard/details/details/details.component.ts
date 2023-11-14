import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectMoreDetailsService } from '../../../_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LinkService } from 'src/app/_Services/link.service';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectsSummaryComponent } from '../../projects-summary/projects-summary.component';
import { PortfolioProjectsComponent } from '../../portfolio-projects/portfolio-projects.component';
import { ViewDashboardProjectsComponent } from '../../view-dashboard-projects/view-dashboard-projects.component';
import { ProjectsAddComponent } from '../../projects-add/projects-add.component';
import { ToDoProjectsComponent } from '../../to-do-projects/to-do-projects.component';
import { NotificationComponent } from '../../notification/notification.component';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { HttpEvent, HttpEventType } from '@angular/common/http';







declare var FusionCharts: any;




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit,AfterViewInit{

  projectInfo:any;
  projectActionInfo:any;
  projectMemos:any;
  _totalMemos:number=0;
  _linkedMemos:number=0;
  Memos_List:any;
  memosOptions:any;
  approvalObj:ApprovalDTO;





  
  TOTAL_ACTIONS_IN_PROCESS: number = 0;
  TOTAL_ACTIONS_IN_DELAY: number = 0;
  TOTAL_ACTIONS_DONE: number = 0;
  TOTAL_ACTIONS_UNDER_APPROVAL:number=0;
  TOTAL_ACTIONS_REJECTED:number=0;
  TOTAL_ACTIONS_IN_CUA:number=0;
  TOTAL_ACTIONS_IN_FUA:number=0;
  TOTAL_ACTIONS_IN_HOLD:number=0;
  TOTAL_ACTIONS: number = 0;
  




  currentActionView:number|undefined;
  URL_ProjectCode:any;
  Current_user_ID: string;
  dropdownSettings_Memo:{singleSelection: boolean,idField: string,textField: string,selectAllText:string,unSelectAllText: string,itemsShowLimit: number,allowSearchFilter: boolean}|undefined;
  selectedMemos:{MailId:number,Subject:string}[]=new Array();

  requestDetails: any;
  requestType: any;
  forwardType: string;
  requestDate: any;
  requestDeadline: any;
  approvalEmpId: any;
  requestComments: any;
  new_deadline: any;
  newResponsible: any;
  previouscoments: boolean = false;
  singleapporval_json: any[] = [];
  revert_json: any;
  transfer_json: any;
  prviousCommentsList: any;
  initials1: any;
  Submitted_By: string;
  reject_list: any;
  comments_list: any;
  new_cost: any;
  ObjSubTaskDTO: SubTaskDTO;



  


 



  constructor(private projectMoreDetailsService: ProjectMoreDetailsService,
     private router: Router,private activatedRoute: ActivatedRoute,
     private bsService:BsServiceService,public _LinkService: LinkService,
     private dialog: MatDialog,
     public approvalservice: ApprovalsService,
     public service: ProjectTypeService,
     private notifyService: NotificationService,
     public datepipe: DatePipe,
    ) {
     
      this.ObjSubTaskDTO = new SubTaskDTO();
      this.objProjectDto = new ProjectDetailsDTO();
      this.objPortfolioDto = new PortfolioDTO()
     }
  charts() { }
  
  
  ngOnInit(): void {
    this.Current_user_ID=localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
    this.activatedRoute.paramMap.subscribe(params=>this.URL_ProjectCode=params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
    this.getProjectDetails(this.URL_ProjectCode);   // get all project details from the api.
    this.getapprovalStats();       
    this.getusername(); 
    
 
    
    // this.router.navigate(["./Details", this.URL_ProjectCode]);
    this.gethierarchy();
    this.showActionDetails(undefined);     // initially show the Project details
  }

  ngAfterViewInit():void{
     this.drawStatistics();
  }

  getusername() {
    this.service._GetUserName(this.Current_user_ID).subscribe(data => {
      this._fullname = data['Emp_First_Name'];
    });
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


    Pid:any;
  getProjectDetails(prjCode:string) {

    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {

      this.projectInfo=JSON.parse(res[0].ProjectInfo_Json)[0];   // projectInfo is an Object
      this.Pid=JSON.parse(res[0].ProjectInfo_Json)[0].id;
      this._MasterCode=this.projectInfo.Project_Code;
      this.projectActionInfo=JSON.parse(res[0].Action_Json);     // projectActionInfo is an Array of obj.
      this._MasterCode=this.projectInfo.Project_Code;
      console.log("projectInfo:",this.projectInfo,"projectActionInfo:",this.projectActionInfo)

      if(this.projectActionInfo){
// all must be zero before calculation.
    this.TOTAL_ACTIONS_DONE=0;
    this.TOTAL_ACTIONS=0;
    this.TOTAL_ACTIONS_IN_HOLD=0;
    this.TOTAL_ACTIONS_IN_CUA=0;
    this.TOTAL_ACTIONS_IN_FUA=0;
    this.TOTAL_ACTIONS_IN_DELAY=0;
    this.TOTAL_ACTIONS_IN_PROCESS=0;
    this.TOTAL_ACTIONS_REJECTED=0;
    this.TOTAL_ACTIONS_UNDER_APPROVAL=0;
// 

        this.projectActionInfo.forEach(action => {

             switch(action.Status){
                 case 'Completed':this.TOTAL_ACTIONS_DONE+=1;break;
                 case 'Delay':this.TOTAL_ACTIONS_IN_DELAY+=1;break;
                 case 'InProcess':this.TOTAL_ACTIONS_IN_PROCESS+=1;break;
                 case 'Under Approval':this.TOTAL_ACTIONS_UNDER_APPROVAL+=1;break;
                 case 'New Project Rejected':this.TOTAL_ACTIONS_REJECTED+=1;break;
                 case 'Completion Under Approval':this.TOTAL_ACTIONS_IN_CUA+=1;break;
                 case 'Forward Under Approval':this.TOTAL_ACTIONS_IN_FUA+=1;break;
                 case 'Hold':this.TOTAL_ACTIONS_IN_HOLD+=1;break;
                 default:{};
             }

        })
      }
      else
          this.projectActionInfo=null;
        
      this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS+this.TOTAL_ACTIONS_UNDER_APPROVAL+this.TOTAL_ACTIONS_REJECTED+this.TOTAL_ACTIONS_IN_CUA+this.TOTAL_ACTIONS_IN_FUA+this.TOTAL_ACTIONS_IN_HOLD;
      this.bsService.SetNewPojectCode(this.URL_ProjectCode);
      this.bsService.SetNewPojectName(this.projectInfo.Project_Name);
    });
  }



  showActionDetails(index:number|undefined)
  {
    this.currentActionView=index;
  }
    
  showProjectDetails(){
    this.showActionDetails(undefined);
    setTimeout(()=>this.drawStatistics(),100);  // because the view that holds the statistics graph must be available before drawStatistics() is get called.
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
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["./Details",this.URL_ProjectCode]);
    this.getProjectDetails(this.URL_ProjectCode);
    this.closeLinkSideBar();
  }




  darcreate() {
    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }
  View_Activity(){
    document.getElementById("Activity_Log").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }
  Attachment_view(){
    document.getElementById("Attachment_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";  
  }
  closedarBar() {
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
  }


tmlSrtOrd:"Date"|"Project"|"Employee"|"Me"|undefined;

  View_timeline(){
    document.getElementById("Timeline_view").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.tmlSrtOrd='Date';   // by default.
    this.onTLSrtOrdrChanged(this.tmlSrtOrd);  
  }

 

///   

//  ADD NEW DMS


addNewDMS(){
   this.GetMemosByEmployeeId();   // get all project's memos and memos for ngselect.
    // opens the addnewdms sidebar
    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    //
}


// closes open linksidebar.
closeLinkSideBar() {
  document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
  document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");

  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";
 
}

//
  







GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data:any)=>{
             this._totalMemos=JSON.parse(data.JsonData).length;
             this.Memos_List=JSON.parse(data.JsonData);
             console.log("this is Memos_List:",this.Memos_List);
             this.dropdownSettings_Memo = {
                           singleSelection: true,
                           idField: 'MailId',
                           textField: 'Subject',
                           selectAllText: 'Select All',
                           unSelectAllText: 'UnSelect All',
                           itemsShowLimit: 1,
                           allowSearchFilter: true
                                         };
      this.GetDMS_Memos(); 
            
    });
}


GetDMS_Memos() {
  this._LinkService._GetOnlyMemoIdsByProjectCode(this.URL_ProjectCode).
    subscribe((data:any) => {
      console.log("inside GetDMS_Memos:",data);
         if(data&&data.length>0){ // if data is not [] means there will be atleast one memo present in the project.
          this._LinkService._GetMemosSubject(data[0]['JsonData']).
          subscribe((data:any) => {
          
            if(data.JsonData){
              this.projectMemos=JSON.parse(data.JsonData);
              this._linkedMemos=this.projectMemos.length;
             
              // at this point we have projmemos and totalmemos available. we dont need to show memos in the ngselect which are already selected so
             this.memosOptions=this.Memos_List.filter((item:any)=>{
                   let selectornot=true;
                   for(let i=0;i<this.projectMemos.length;i++)
                   {
                       if(this.projectMemos[i].MailId===item.MailId)
                       { selectornot=false;  break;         }
                   }
                   return selectornot;
              });
              // now only unselected memos will be visible.
              
             console.log("this memosOptions:",this.memosOptions)
              }
              console.log("get memo subject:",this.projectMemos);
            
          });
         }
         else{   // if data is [] and length is 0.   means if there is not even one memo present in the project.
          this.memosOptions=this.Memos_List;   // if the project contain no memos then all list memos in the memos options.
          this._linkedMemos=0;
         }
          
    });
}









   onMemoSelected(e:{MailId:number,Subject:string}){ 
    // when single selection 
      this.selectedMemos=new Array({MailId:e.MailId,Subject:e.Subject});
    //
       console.log("selectedMemos:",this.selectedMemos);
   }
  


   onMemoDeselected(e:{MailId:number,Subject:string}){ 
       const index=this.selectedMemos.indexOf({MailId:e.MailId,Subject:e.Subject});
       if(index!==-1){
        this.selectedMemos.splice(index,1);
       } 
       console.log("selectedMemos:",this.selectedMemos);
    }


// ADD DMS STARTS HERE
    addDMSToTheProject() {
      try{
       
        if(this.selectedMemos.length){  
          // when user has selected memo.  when selectedMemos.length>0
        let totalmemos=[];      
        if(this.projectMemos)  
        totalmemos=this.projectMemos.map((item:any)=>({MailId:item.MailId})); // get current memos list.
       
        let newmemos=this.selectedMemos.map((item:any)=>({MailId:item.MailId}));  // get selected memos.
        newmemos.forEach((memo:{MailId:number})=>{
            totalmemos.push(memo);
        });   // adding selected memos to the totalmemos
  
  
        let projectcode:number=this.URL_ProjectCode;
        let appId: number = 101;//this._ApplicationId;
        let dmsMemo=JSON.stringify(totalmemos); //[{MailId:123,Subject:'abc'}]->[{MailId:123}]->'[{MailId:123}]'
        let userid:number=+this.Current_user_ID;
        console.log("here we go",projectcode,appId,dmsMemo,userid);
        this._LinkService.InsertMemosOn_ProjectCode(projectcode,appId,dmsMemo,userid).subscribe((res:any)=>{
               console.log("Response=>",res);   
               if(res.Message==="Updated Successfully")
               {
                this.notifyService.showSuccess("", "DMS Successfully Added.");
               }
                  
        });


        }
        else{
          // when user tries to click addlink btn without selecting memo.   when selectedMemos.length=0
          this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
        }

      }
      catch(e){  // if we faces any error during the process.
        console.log(e);
        this.notifyService.showInfo("Request Cancelled", "Error!");
      }
        this.GetMemosByEmployeeId();    // get new data.
        this.selectedMemos=new Array();    
        // this.closeLinkSideBar();         //closes the sidebar.
      }
// ADD DMS END HERE




deleteMemos(memoId:number) {

  const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
    data: {
      mode: 'memos_Delete',
      title1: 'Confirmation ',
      //message1: "proj_Name"
    }
  });
  confirmDialog.afterClosed().subscribe((result:any)=>{
          if(result===true)
          {    // user confirmed to do deletion.
            let projectcode=this.URL_ProjectCode; 
            let appId:number = 101;
            let totalmemos=this.projectMemos; // current total memos list.
            let userid:number=+this.Current_user_ID;
            if(this._linkedMemos)
            {   // if there is atleast one memo.
            let memotodelete:any=totalmemos.find((amemo:any)=>amemo.MailId===memoId);
              if(memotodelete)
                {   // memo found
                  let index=totalmemos.indexOf(memotodelete);    // it will never return -1 at this point.
                  totalmemos.splice(index,1);
                  let memosAfterDeletion:string=JSON.stringify(totalmemos.map((item:any)=>({MailId:item.MailId}))) // [{MailId:123,Subject:'asd'},{MailId:234,Subject:'hdf'}]->[{MailId:123},{MailId:234}]->'[{MailId:123},{MailId:234}]'
                  this._LinkService.InsertMemosOn_ProjectCode(projectcode,appId,memosAfterDeletion,userid).subscribe((res:any)=>{
                    if(res.Message==='Updated Successfully'){
                     this.notifyService.showInfo("", "Memo Removed."); 
                     this._linkedMemos--;
                     this.GetDMS_Memos();
                      }
                  });  
                } 
            }
            else
            {  // if there is no memos to delete.
              this.notifyService.showError("No Memos Present", '');
            }
          }
          else
          {   // when deletion operation has cancelled.
            this.notifyService.showInfo("Action Cancelled ", '');
          }
  });

}

///////////////////////////new Approval section Start ////////////////////
url: any;
iscloud: any;
completedoc: any;
complete_List: any;
forwardfrom: any;
forwardto: any;
comments: string = "";
rejectType: any;
selectedType: string;
isTextAreaVisible: boolean = false;
isRejectOptionsVisible: boolean = false;
active: boolean = false;
Accept_active: boolean = false;
Conditional_Active: boolean = false;
Reject_active: boolean = false;
rejDesc: any;
noRejectType: boolean = false;
exist_comment: any[] = [];
rejectcommentsList: any;
rejectlength: any;
//noRejectType: boolean = false;
_Message: string;
Summarytype: string;
_Urlid: any;
_fullname: any;



resetApproval() {
  this.selectedType = null;
 // this.commentSelected = null;
  this.noRejectType = false;
  this.exist_comment = [];
}
typeChange() {
  this.comments = null;
//  this.commentSelected = null;
  this.rejectType = null;
  this.noRejectType = false;
}
Close_Comments() {
  this.comments = "";
}



getapprovalStats() {
  // this.approvalEmpId = null;
  this.approvalObj=new ApprovalDTO();
  this.approvalObj.Project_Code = this.URL_ProjectCode;

  this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
    this.requestDetails = data as [];
     console.log(this.requestDetails, "approvals");
     if (this.requestDetails.length > 0) {
      this.requestType = (this.requestDetails[0]['Request_type']);
       this.forwardType = (this.requestDetails[0]['ForwardType']);
       this.requestDate = (this.requestDetails[0]['Request_date']);
       this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
       this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
       this.requestComments = (this.requestDetails[0]['Remarks']);
       this.new_deadline = (this.requestDetails[0]['new_deadline']);
       this.new_cost = (this.requestDetails[0]['new_cost']);
       this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
       //this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
       this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
       const fullName = this.Submitted_By.split(' ');
       this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
       this.initials1 = this.initials1.toUpperCase();
       this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
       this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
       this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
       this.reject_list.splice(0,1);
       this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
       this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
       console.log(this.singleapporval_json, "s-1");
       if (this.prviousCommentsList.length > 1) {
         this.previouscoments = true;
       }
       else {
         this.previouscoments = false;
      }
      // this.newResponsible = (this.transfer_json[0]['newResp']);
      if (this.requestType == 'Project Forward') {
        this.newResponsible = (this.transfer_json[0]['newResp']);
        this.forwardto = (this.transfer_json[0]['Forwardedto']);
        this.forwardfrom = (this.transfer_json[0]['Forwardedfrom']);
      }
      if (this.requestType == 'Revert Back') {
        this.newResponsible = (this.revert_json[0]['newResp']);
        this.forwardto = (this.revert_json[0]['Forwardedto']);
        this.forwardfrom = (this.revert_json[0]['Forwardedfrom']);
      }
      if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved') {
        this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
        if(this.complete_List !="" && this.complete_List !=undefined && this.complete_List !=null){
          this.completedoc = (this.complete_List[0]['Sourcefile']);
          this.iscloud = (this.complete_List[0]['IsCloud']);
          this.url = (this.complete_List[0]['CompleteProofDoc']);
        }
        console.log(this.complete_List, 'complete');
      }
 } 
});
    console.log(this.requestDetails, 'transfer'); 
}


approvalClick(actionType) {
  this.comments=""
  switch (actionType) { 
    case 'ACCEPT': {
     this.isRejectOptionsVisible = false
     this.selectedType = '1';
     this.rejectType = null;
     this.Accept_active = true;
      this.Conditional_Active = false;
      this.Reject_active = false;     
    }; break;
    case 'CONDITIONAL': {
      this.isRejectOptionsVisible = false;
      this.selectedType = '2';
      this.rejectType = null;
      this.Accept_active = false;
      this.Conditional_Active = true;
      this.Reject_active = false;    
    }; break;
    case 'REJECT': {
      this.isRejectOptionsVisible = true;
      this.selectedType = '3';
      this.rejectType = null;
      this.Accept_active = false;
      this.Conditional_Active = false;
      this.Reject_active = true;    
    };
      break;
    default: { }
  }
  this.isTextAreaVisible = true;
}

removeCommit() {
  this.isTextAreaVisible = false
}


rejectApproval() {
  this.exist_comment = [];
  this.comments = "";
  this.noRejectType = false;
  // alert(this.rejectType)
  if (this.rejectType != null && this.rejectType != "") {
    this.reject_list.forEach(element => {
      if (this.rejectType == element.TypeID) {
        this.rejDesc = element.Reject_Description;
      }
    });
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.rejectType = this.rejectType;
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    if (this.requestType == 'New Project')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'New Project Reject Release')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'New Project Hold')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'Project Complete')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Project Complete Reject Release')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Project Complete Hold')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Deadline Extend')
      this.approvalObj.Status = 'Rejected';
    else if (this.requestType == 'Deadline Extend Hold')
      this.approvalObj.Status = 'Rejected';
    else if (this.requestType == 'Standardtask Enactive')
      this.approvalObj.Status = 'Enactive-Reject';
    else if (this.requestType == 'Project Forward')
      this.approvalObj.Status = 'Forward Reject';
    else if (this.requestType == 'Project Hold')
      this.approvalObj.Status = 'Project Hold Reject';
    else if (this.requestType == 'Revert Back')
      this.approvalObj.Status = 'Revert Reject';
    else if (this.requestType == 'Task Complete')
      this.approvalObj.Status = 'Task-Reject';
    else {
      this.approvalObj.Status = 'Rejected';
    }
   this.approvalservice.GetRejectComments(this.approvalObj).subscribe(data => {
      console.log('++>',JSON.parse(data[0]['reject_CommentsList']));      
      this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
      this.rejectlength = this.rejectcommentsList.length;
    });
  }
}



submitApproval() {
  if (this.selectedType == '1') {
    if (this.comments == '' || this.comments == null) {
      this.singleapporval_json.forEach(element => {
        element.Remarks = 'Accepted';
      });
    }
    else {
      this.singleapporval_json.forEach(element => {
        element.Remarks = this.comments;
      });
    }
    this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
      subscribe((data) => {
        this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
        this.getapprovalStats();     
        this.getProjectDetails(this.URL_ProjectCode);
       
      });
    console.log(this.singleapporval_json, "accept")
  }
  else if (this.selectedType == '2') {
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Project_Code = this.projectCode;
    this.approvalObj.Request_type = this.requestType;
    if (this.comments == '' || this.comments == null) {
      this.approvalObj.Remarks = 'Accepted';
    }
    else {
      this.approvalObj.Remarks = this.comments;
    }
    this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
      subscribe((data) => {
        this._Message = (data['message']);
        if (this._Message == 'Not Authorized' || this._Message == '0') {
          this.notifyService.showError("project not approved", 'Failed.');
        }
        else {
          this.notifyService.showSuccess("Project Approved Successfully", this._Message);
          this.getapprovalStats();     
        this.getProjectDetails(this.URL_ProjectCode);        
        }
      });
  }
  else if (this.selectedType == '3') {
    if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
      this.noRejectType = true;
      this.notifyService.showError("Please select Reject Type", "Failed");
      return false;
    }
    else {
      this.singleapporval_json.forEach(element => {
        element.Remarks = this.comments;
        element.RejectType = this.rejectType;
      });
      this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
        subscribe((data) => {
          this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
          this.getapprovalStats();     
          this.getProjectDetails(this.URL_ProjectCode);       
        });
    }
  }
  else if (this.selectedType == '4') {
    this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
  }
  this.close_info_Slide();
}
close_info_Slide() {
}

clickonselect(com) {
  if (this.comments == null) {
    this.comments = com;
    this.exist_comment.push(com);
  }
  else {
    this.comments = this.comments + " " + com;
    this.exist_comment.push(com);
  }
  console.log(this.exist_comment, "select");
}
clickondeselect(com, id) {
  // let smallerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.exist_comment : this.rejectcommentsList;
  // let largerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.rejectcommentsList : this.exist_comment;

  // for (let i = 0; i < smallerArray.length; i++) {
  //   let index = largerArray.findIndex((el) => el.Req_Coments == smallerArray[i]);
  //   if (index !== -1) {
  //     smallerArray.splice(i, 1);
  //     i--;
  //   }
  // }
  this.exist_comment = this.exist_comment.filter((comment) => comment != com);
  this.comments = this.comments.replace(com,"").trim();
  console.log(this.exist_comment, "deselect");
}


EmpNo_Res: string;
EmpNo_Autho: string;
ProjectNameJson: any;
projectCode: string;

LoadProjectDetails() {
  this.service.NewSubTaskDetailsService(this.projectCode).subscribe(
    (data) => {
      if (data != null && data != undefined){
        this.EmpNo_Autho = this.ProjectNameJson[0]['Authority'];
        this.EmpNo_Res = this.ProjectNameJson[0]['Responsible'];
      }    
    })
}
_day: any;
_month: any;
openPDF_Standard(cloud, repDate: Date, proofDoc) {
  repDate = new Date(repDate);
  let FileUrl: string;
  FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

  let Day = repDate.getDate();
  let Month = repDate.getMonth() + 1;
  let Year = repDate.getFullYear();
  if (Month < 10) {
    this._month = '0' + Month;
  }
  else {
    this._month = Month;
  }
  if (Day < 10) {
    this._day = '0' + Day;
  }
  else {
    this._day = Day;
  }
  var date = this._month + "_" + this._day + "_" + repDate.getFullYear();

  if (cloud == false) {
    if (this.EmpNo_Autho == this.EmpNo_Res) {
      window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + date + "/" + proofDoc);
    }
    else if (this.EmpNo_Autho != this.EmpNo_Res) {
      window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + date + "/" + proofDoc);
    }
  }
  else if (cloud == true) {
    window.open(proofDoc);
  }
}

openPDF(cloud, docName) {
  let FileUrl: string;
  FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

  if (cloud == false) {
    if (this.EmpNo_Autho == this.EmpNo_Res) {
      window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + docName);
    }
    else if (this.EmpNo_Autho != this.EmpNo_Res) {
      window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + docName);
    }
  }
  else if (cloud == true) {
    window.open(docName);
  }
}

_portfoliolist: any;
_portfolioLength: any;
totalPortfolios: number;
_portfoliosList: any;
dropdownSettings_Portfolio: IDropdownSettings = {};
ngDropdwonPort: any;
Empty_portDropdown: any;
_SelectedPorts: any;
selectedportID: any;
objPortfolioDto: PortfolioDTO;
deletedBy: string;
portfolioName: string;
ProjectInfo_List: any;



getPortfoliosDetails(){
  this.service.getPortfolios(this.URL_ProjectCode).subscribe((res)=>{
    if (res != null && res != undefined) {
       this._portfoliolist=JSON.parse(res[0].Portfolio_json);  
          this.getPortfolios()
    }
  });
}


// Action completion sidebar code starts from here
isHierarchy: boolean = false;
_MasterCode: string;



Sub_ProjectCode: string;
Sub_Desc: string;
_Subtaskname: string;
Sub_StartDT: Date;
Sub_EndDT: Date;
Sub_Autho: string;
Sub_Status: string;
_remarks: string = "";
selectedFile: any = null;
progress: any;
_inputAttachments: string;

gethierarchy() {
  this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID, this.URL_ProjectCode).subscribe((data) => {
    if (data['message'] == '1') {
      this.isHierarchy = true;
    }
    else {
      this.isHierarchy = false;
    }
  });

}







markCompleted(selectedAction:{Project_Code:string,Project_Description:string,Project_Name:string,StartDate:Date,EndDate:Date,TeamRes:string,Status:string}){

this.Sub_ProjectCode=selectedAction.Project_Code;
this.Sub_Desc=selectedAction.Project_Description;
this._Subtaskname=selectedAction.Project_Name;
this.Sub_StartDT=selectedAction.StartDate;
this.Sub_EndDT=selectedAction.EndDate;
this.Sub_Autho=selectedAction.TeamRes;
this.Sub_Status=selectedAction.Status;

  // opens the actioncompletion sidebar code here.
  document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
  //
}

closeActCompSideBar(){
  document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("newdetails").classList.add("position-fixed");
}  // for temp we are using this.


actionCompleted(){
  if (this._remarks ==="") { // when the user not provided the remark then.
    this.notifyService.showInfo("Remarks Cannot be Empty", '');
  }
  else if ((this.inProcessCount + this.delaycount) == 1 && (this.Current_user_ID == this.Responsible_EmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo|| this.Current_user_ID == this.projectInfo.Authority_EmpNo || this.isHierarchy === true)) 
  {  // when the user provided the remark then.
       Swal.fire({
        title: 'This is the last action to be completed.',
        text: 'Do you want to proceed with main project submission?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
       }).then((res:any)=>{

               if(res.value)
               {   
                if (this.selectedFile == null) {
                  this.notifyService.showInfo("Please attach the completion file to complete the main project", "Note");
                }
                else {
                  const fd = new FormData();
                  fd.append("Project_Code", this.Sub_ProjectCode);
                  fd.append("Master_Code", this._MasterCode);
                  fd.append("Team_Autho", this.Sub_Autho);
                  fd.append("Projectblock", this.projectInfo.Project_Block);
                  fd.append("Remarks", this._remarks);
                  fd.append('file', this.selectedFile);
                  fd.append("Project_Name", this._Subtaskname);
                  this.service._UpdateSubtaskByProjectCode(fd)
                    .subscribe(data => {
                         
                    });
                  this.notifyService.showSuccess("Successfully Updated", 'Action completed');
                  const fd1 = new FormData();
                  fd1.append("Project_Code", this.URL_ProjectCode);
                  fd1.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
                  fd1.append("Remarks", this._remarks);
                  fd1.append("Projectblock", this.projectInfo.Project_Block);
                  fd1.append('file', this.selectedFile);
                  fd1.append("Emp_No", this.Current_user_ID);
                  fd1.append("Project_Name", this.projectInfo.Project_Name);
                  console.log(fd1, "complete");
                  this.service._fileuploadService(fd1).
                    subscribe((event: HttpEvent<any>) => {
                      switch (event.type) {
                        case HttpEventType.Sent:
                          console.log('Request has been made!');
                          break;
                        case HttpEventType.ResponseHeader:
                          console.log('Response header has been received!');
                          break;
                        case HttpEventType.UploadProgress:
                          this.progress = Math.round(event.loaded / event.total * 100);
                          console.log(this.progress, "progress");
                          if (this.progress == 100) {
                            this.notifyService.showInfo("File uploaded successfully", "Project Updated");
                            
                          }
                          break;
                        case HttpEventType.Response:
                          console.log('File upload done!', event.body);
                          var myJSON = JSON.stringify(event);
                            this._Message = (JSON.parse(myJSON).body).Message;
                            this.notifyService.showSuccess(this._Message, 'Success');
                      }
                 
                      this.closeActCompSideBar();
                      this.getProjectDetails(this.URL_ProjectCode);
                      // this.GetSubtask_Details();
                      // this.GetProjectDetails();
                      // this.getapprovalStats();
                      // this._projectSummary.GetProjectsByUserName('RACIS Projects');
                    });
                }
               }
               else if(res.dismiss === Swal.DismissReason.cancel)
               {
                const fd = new FormData();
                fd.append("Project_Code", this.Sub_ProjectCode);
                fd.append("Master_Code", this._MasterCode);
                fd.append("Team_Autho", this.Sub_Autho);
                fd.append("Projectblock", this.projectInfo.Project_Block);
                fd.append("Remarks", this._remarks);
                fd.append('file', this.selectedFile);
                fd.append("Project_Name", this._Subtaskname);
                this.service._UpdateSubtaskByProjectCode(fd)
                .subscribe(data => {
                  this._remarks = "";
                  this._inputAttachments = "";
                  // this.GetProjectDetails();
                  // this.GetSubtask_Details();
                  // Rebinding    
                  // this.closeInfo();   //closing the sidebar.

                  this.getProjectDetails(this.URL_ProjectCode); // rebinding data.
                  this.closeActCompSideBar();  // closing the action completion sidebar.
                });
                this.notifyService.showSuccess("Successfully Updated", 'Action completed');
               }
       });   //swal end

  }
  else{
    const fd = new FormData();
    fd.append("Project_Code", this.Sub_ProjectCode);
    fd.append("Master_Code", this._MasterCode);
    fd.append("Team_Autho", this.Sub_Autho);
    fd.append("Projectblock", this.projectInfo.Project_Block);
    fd.append("Remarks", this._remarks);
    fd.append('file', this.selectedFile);
    fd.append("Project_Name", this._Subtaskname);
    this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          // this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          this._remarks = "";
          this._inputAttachments = "";
          // this.GetProjectDetails();
          // this.GetSubtask_Details();
          // Rebinding    
          this.getProjectDetails(this.URL_ProjectCode); 
          this.closeActCompSideBar();
        });
        this.notifyService.showSuccess("Successfully Updated", 'Action completed');
  }

}











// Action completion sidebar code end at here.














//timeline section code here start
noTimeline: boolean;
darList: any;
darArr: any;
darArray: any = [];
totalHours: any;
totalRecords: any;
_CurrentpageRecords: any;
ProjectBlockName: any;
showaction: boolean =true;
workdes: string;
current_Date: any = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
dateF = new FormControl(new Date());
todayDate = new Date();
disablePreviousDate = new Date();
starttime: any;
timedata: any = [];
timedata1: any;
objProjectDto: ProjectDetailsDTO;
date11: any;
currenthours: any;
timeList: any;
bol: boolean = true;
starttimearr: any = [];
endtimearr: any = [];
lastEndtime: any;
endtime: any;
coresecondary: boolean = true;
Responsible_EmpNo: string;
noact_msg:boolean=false;
date = new Date();
actionCode: string;
timecount: any;
minutes: any;
hours: any;
Comp_No: string;
inProcessCount: number;
delaycount: number;



openDarSideBar(){
  // opens the dar side bar 
  document.getElementById("newdetails").classList.add("position-fixed");
  document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
 //
 // get all actions
 this.getResponsibleActions();
 //
 this.currenthours = this.date.getHours();
 
}
closeDarSideBar(){
  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "none";
}




getResponsibleActions() {
  this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null, this.Current_user_ID).subscribe(
    (data) => {
      this.darArr = JSON.parse(data[0]['Json_ResponsibleInProcess']);
      console.log('darArr:',this.darArr);
      if(this.darArr.length==0 && (this.projectInfo.OwnerEmpNo==this.Current_user_ID || this.Responsible_EmpNo==this.Current_user_ID)){
        this.showaction=false;
      }
      else if(this.darArr.length==0 && this.projectInfo.OwnerEmpNo!=this.Current_user_ID && this.Responsible_EmpNo!=this.Current_user_ID){
        this.showaction=true;
        this.noact_msg=true;
      }
      else{
        this.showaction=true;
      }
    });
}








dar_details() {
  this.noTimeline = false;
  this.ObjSubTaskDTO.MasterCode = this.URL_ProjectCode;
  this.ObjSubTaskDTO.PageNumber = 1;
  this.ObjSubTaskDTO.PageSize = 10;
  this.service._GetDARbyMasterCode(this.ObjSubTaskDTO)
    .subscribe(data1 => {
      
      this.darList = JSON.parse(data1[0]['DAR_Details_Json']);
      this.darArray = this.darList;
      console.log("sahil bhai this is your DAR array:",this.darArray);
      this.totalHours = (data1[0]['Totalhours']);
      this.totalRecords = (data1[0]['TotalRecords']);
      if (this.darList.length == 0) {
        this.noTimeline = true;
      }
      if (this.darList) {
        this._CurrentpageRecords = this.darList.length;
      }
    });
}



getDarTime() { 
  this.timedata = [];
  this.timedata1 = ["08:00",
    "08:15", "08:30", "08:45", "09:00",
    "09:15", "09:30", "09:45", "10:00",
    "10:15", "10:30", "10:45", "11:00",
    "11:15", "11:30", "11:45", "12:00",
    "12:15", "12:30", "12:45", "13:00",
    "13:15", "13:30", "13:45", "14:00",
    "14:15", "14:30", "14:45", "15:00",
    "15:15", "15:30", "15:45", "16:00",
    "16:15", "16:30", "16:45", "17:00",
    "17:15", "17:30", "17:45", "18:00",
    "18:15", "18:30", "18:45", "19:00",
    "19:15", "19:30", "19:45", "20:00"];
   

  this.objProjectDto.Emp_No = this.Current_user_ID;
  this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
  this.date11 = moment(new Date()).format("MM/DD/YYYY");
  this.objProjectDto.date = this.current_Date;


  if (this.current_Date == this.date11) {
    
    this.timedata1.forEach(element => {
      const [shours, sminutes] = element.split(":");
      if (shours <= this.currenthours)
        this.timedata.push(element);
    });
    console.log('check this:',this.timedata);
    
  }
  else {
    this.timedata1.forEach(element => {
      this.timedata.push(element);
    });
  }
console.log("timedata:",this.timedata);
  this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
    .subscribe(data => {
      this.timeList = JSON.parse(data[0]['time_json']);
      console.log(this.timeList, "time");
      if (this.timeList.length != 0) {
        this.bol = false;
        this.timeList.forEach(element => {
          this.starttimearr.push(element.starttime);
        });
        this.timeList.forEach(element => {
          this.endtimearr.push(element.endtime);
        });
        let l = this.endtimearr.length;
        this.lastEndtime = this.endtimearr[l - 1];
      }
      else if (this.timeList.length == 0) { 
        this.bol = true;
        this.lastEndtime = 0;
        this.starttimearr = [];
        this.endtimearr = [];
      }
    });
}

orgValueChange(val) {
  this.current_Date = moment(val.value).format("MM/DD/YYYY");
}

diff_minutes(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}




submitDar() {
    
  if (this.starttime != null && this.endtime != null) {
    const [shours, sminutes] = this.starttime.split(":");
    const [ehours, eminutes] = this.endtime.split(":");
    var dt1 = new Date(2014, 10, 2, shours, sminutes);
    var dt2 = new Date(2014, 10, 2, ehours, eminutes);
    this.minutes = this.diff_minutes(dt1, dt2) % 60;
    if (this.minutes < 10) {
      this.minutes = "0" + this.minutes
    }
    this.hours = Math.floor(this.diff_minutes(dt1, dt2) / 60);
    if (this.hours < 10) {
      this.hours = "0" + this.hours;
    }
    this.timecount = (this.hours + ":" + this.minutes);
  }  // this is for calculating the timecount using the hours and minutes

  this.objProjectDto.Emp_No = this.Current_user_ID;                  // setting the current user id.
  this.objProjectDto.Exec_BlockName = this.projectInfo.Project_Type;  // setting the project type.
  if (this.starttime != undefined && this.endtime != undefined && this.timecount != undefined) {
    this.objProjectDto.StartTime = this.starttime;
    this.objProjectDto.EndTime = this.endtime;
    this.objProjectDto.TimeCount = this.timecount;
  }
  this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
  this.objProjectDto.date = this.current_Date;
  this.objProjectDto.WorkAchieved = this.workdes;
  this.objProjectDto.Emp_Comp_No = this.Comp_No;

  if (this.projectInfo.Project_Type == 'Standard Tasks' || this.projectInfo.Project_Type == 'Routine Tasks' || this.projectInfo.Project_Type == 'To do List') {
    this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    this.objProjectDto.Master_code = this.URL_ProjectCode;
    this.objProjectDto.Project_Code = this.URL_ProjectCode;
  }
  else if ((this.projectInfo.Project_Type == 'Core Tasks' || this.projectInfo.Project_Type == 'Secondary Tasks') && (this.inProcessCount == 0 && this.delaycount==0)) {
    this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    this.objProjectDto.Master_code = this.URL_ProjectCode;
    this.objProjectDto.Project_Code = this.URL_ProjectCode;
  }
  else {
    this.objProjectDto.Master_code = this.URL_ProjectCode;
    this.objProjectDto.Project_Code = this.actionCode;
  }

 console.log("objProjectDto:",this.objProjectDto);


  this.service._InsertDARServie(this.objProjectDto)
    .subscribe(data => {
      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "Success");
    });
  this.dar_details();
  this.getDarTime();
  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  // this.Clear_Feilds();
}



// timeline code end here


AddPortfolio() {
   this.getPortfoliosDetails()
}

// timeline view section start here
timelineList:any;
isTimelinePresent:boolean=true;
tlTotalHours:number;



onTLSrtOrdrChanged(option:"Date"|"Project"|"Employee"|"Me"){
      this.tmlSrtOrd=option;
      let sorttype:string="1";
      switch(option){
          case 'Date':sorttype="1";break;
          case 'Project':sorttype="2";break;
          case 'Employee':sorttype="3";break;
          case 'Me':sorttype="4";break;
          default:sorttype="1";
      }
      this.projectMoreDetailsService.getProjectTimeLine(this.projectInfo.Project_Code,sorttype,this.Current_user_ID).subscribe((res:any)=>{
        console.log("timeline data here:", res);
        this.timelineList=JSON.parse(res[0].Timeline_List);
        this.tlTotalHours=+JSON.parse(res[0].Totalhours);
        console.log(Math.abs(this.tlTotalHours))
        if(this.timelineList&&this.timelineList.length)
          { 
            this.isTimelinePresent=true;
            this.timelineList=this.timelineList.map((timeline:any)=>({ ...timeline,JsonData:JSON.parse(timeline.JsonData) }));
            console.log('our new timeline:',this.timelineList);
          }
         
      });

}

getPortfolios() {
  if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
    this._portfolioLength = 0;
  }
  else
    this._portfolioLength = this._portfoliolist.length;
  
  this.service.GetTotalPortfoliosBy_Employeeid().subscribe
    ((data) => {
      this.totalPortfolios = (data[0]['TotalPortfolios']);     
    });
  this.service.GetPortfoliosBy_ProjectId(this.URL_ProjectCode).subscribe
    ((data) => {
      this._portfoliosList = data as [];

      this.dropdownSettings_Portfolio = {
        singleSelection: false,
        idField: 'Portfolio_ID',
        textField: 'Portfolio_Name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 4,
        allowSearchFilter: true,
        clearSearchFilter: true
      };
    });
  document.getElementById("LinkSideBar1").classList.add("kt-quick-panel--on");
  document.getElementById("newdetails").classList.add("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "block";
}


Portfolio_Select(selecteditems) {
  //console.log("Selected Item---->",selecteditems)
  let arr = [];
  this.Empty_portDropdown = selecteditems;
  // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
  this.Empty_portDropdown.forEach(element => {
    arr.push({ Port_Id: element.Portfolio_ID })
    this._SelectedPorts = arr;
  });
  // console.log("Selected Ports In Array--->", this._SelectedPorts);
  // console.log(this.ngDropdwonPort,"ports");

}

Portfolio_SelectAll(selecteditems) {
  let arr = [];
  this.Empty_portDropdown = selecteditems;
  // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
  this.Empty_portDropdown.forEach(element => {
    arr.push({ Port_Id: element.Portfolio_ID })
    this._SelectedPorts = arr;
  });
  //  console.log("Selected Ports In Array1--->", this._SelectedPorts);
}

Portfolio_DeSelectAll() {
  this._SelectedPorts = [];
  // console.log("Selected Ports In Array1--->", this._SelectedPorts);
}


Portfolio_Deselect(selecteditems) {
  let arr = [];

  this.Empty_portDropdown = selecteditems;
  if (this.Empty_portDropdown != '') {
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
  }
  else {
    this._SelectedPorts = [];
  }
  // console.log("Deselect Memos--->", this._SelectedPorts, this.Empty_portDropdown);
}


addProjectToPortfolio() {
  this.selectedportID = JSON.stringify(this._SelectedPorts);
  // console.log(this.selectedportID,"portids");
  if (this.selectedportID != null) {
    this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
    this.objPortfolioDto.Project_Code = this.URL_ProjectCode;
    this.objPortfolioDto.Emp_No = this.Current_user_ID;
    this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
      subscribe((data) => {
        this._Message = (data['message']);
        if (this._Message == 'Updated Successfully'){
          this.getPortfoliosDetails();
          this.notifyService.showSuccess("Project successfully added to selected Portfolio(s)", this._Message);        
        }else{
          this.notifyService.showInfo("Please select atleast one portfolio and try again", "");
        }
      });
   
  }


  this.ngDropdwonPort = [];
  //this.closeLinkSideBar();
   this.getPortfoliosDetails();
  // this._openInfoSideBar = false;
}


DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
  this.deletedBy = this.Current_user_ID;
  
  this._portfoliolist.forEach(element => {
    if (port_id == element.Portfolio_ID)
      this.portfolioName = element.Portfolio_Name
     
  });
  //if (createdBy == this.Current_user_ID) {
  let String_Text = 'Delete';
  const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
    data: {
      mode: 'delete',
      title1: 'Confirmation ',
      message1: this.portfolioName
    }
  });
  confirmDialog.afterClosed().subscribe(result => {
    
    if (result === true) {
      this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
       
        this.getPortfoliosDetails();   
        this.getPortfolios(); 
        this.notifyService.showSuccess("Deleted successfully ", '');
      });
    }
    else {
      this.notifyService.showError("Action Cancelled ", '');
    }
  });
}
}