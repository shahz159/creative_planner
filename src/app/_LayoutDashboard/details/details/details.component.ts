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
  onMemosLoaded=new EventEmitter();




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








  constructor(private projectMoreDetailsService: ProjectMoreDetailsService,
    private router: Router,private activatedRoute: ActivatedRoute,private bsService:BsServiceService,public _LinkService: LinkService,
    private dialog: MatDialog,
     public approvalservice: ApprovalsService,
     public service: ProjectTypeService,
     private notifyService: NotificationService,
    ) { }
  charts() { }
  
  
  ngOnInit(): void {
    this.Current_user_ID=localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
    this.activatedRoute.paramMap.subscribe(params=>this.URL_ProjectCode=params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
    this.getProjectDetails(this.URL_ProjectCode);   // get all project details from the api.
    this.showActionDetails(undefined);     // initially show the Project details
    this.approvalObj=new ApprovalDTO();
    this.getapprovalStats();
    this.getusername(); 
    // this.router.navigate(["./Details", this.URL_ProjectCode]);
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



  getProjectDetails(prjCode:string) {
  
   
    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {

      this.projectInfo=JSON.parse(res[0].ProjectInfo_Json)[0];   // projectInfo is an Object
      this.projectActionInfo=JSON.parse(res[0].Action_Json);     // projectActionInfo is an Array of obj.

      console.log("projectInfo:",this.projectInfo,"projectActionInfo:",this.projectActionInfo)
      
      if(this.projectActionInfo){
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
         if(data&&data.length>0){ // if data is not [] means there will be atleast one memo present in the project.
          this._LinkService._GetMemosSubject(data[0]['JsonData']).
          subscribe((data:any) => {
            if(data.JsonData){
              this.projectMemos=JSON.parse(data.JsonData);
              this._linkedMemos=this.projectMemos.length;
              }
              console.log("get memo subject:",this.projectMemos);
            
          });
         }
         else{   // if data is [] and length is 0.   means if there is not even one memo present in the project.
              this._linkedMemos=0;
         }
          
    });
}


GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data:any)=>{
             console.log("getmemosbyempid:",JSON.parse(data.JsonData));
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


        this.selectedMemos=new Array();    
        this.closeLinkSideBar();       
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

}
///////////////////////////new Approval section End ////////////////////