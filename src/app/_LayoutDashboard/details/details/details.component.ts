import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, ViewChild, inject, } from '@angular/core';
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
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { map, startWith } from 'rxjs/operators';
import { MatChipInput } from '@angular/material/chips';
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';

import { MatAutocompleteTrigger } from '@angular/material/autocomplete';


declare var FusionCharts: any;




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
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
  Activity_List:any
  Project_List:any;
  filteredEmployees: any= [];
  Client_List: any;
  selectedclient: string;
  owner_dropdown: any;
  selectedOwnResp: any;
  responsible_dropdown: any;
  Category_List: any;
  selectedcategory: any;

  @ViewChild('auto') autoComplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autoCompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;

  // @ViewChild('fruitInput') fruitInput: MatChipInput;
  @ViewChild('fruitInput') fruitInput: ElementRef;




  constructor(private projectMoreDetailsService: ProjectMoreDetailsService,
    private route: ActivatedRoute,
     private router: Router,private activatedRoute: ActivatedRoute,
     private bsService:BsServiceService,public _LinkService: LinkService,
     private dialog: MatDialog,
     public approvalservice: ApprovalsService,
     public service: ProjectTypeService,
     public _projectSummary: ProjectsSummaryComponent,
     private notifyService: NotificationService,
     public datepipe: DatePipe,
     private CalenderService: CalenderService
    ) {
     
      this.ObjSubTaskDTO = new SubTaskDTO();
      this.objProjectDto = new ProjectDetailsDTO();
      this.objPortfolioDto = new PortfolioDTO();     
     }
  charts() { }
  
  
  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      var pcode = params.get('projectcode');
      this.URL_ProjectCode = pcode;
      this._MasterCode = pcode;
    });
    this.Current_user_ID=localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
    this.activatedRoute.paramMap.subscribe(params=>this.URL_ProjectCode=params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
    this.getProjectDetails(this.URL_ProjectCode);   // get all project details from the api.
    this.approvalObj=new ApprovalDTO();              
    this.getapprovalStats();       
    this.getusername(); 
    
    // this.router.navigate(["./Details", this.URL_ProjectCode]);
    this.gethierarchy();
    this.showActionDetails(undefined);     // initially show the Project details
    this.getapproval_actiondetails();      // get main project approval state.
    this.getholdate();      
    this.GetPeopleDatils();
    this.timearrays();
  
    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });

    // these minhold and maxhold are used in the project hold section,project release section
    this.minhold.setDate(this.minhold.getDate() + 1);     
    this.maxhold.setDate(this.minhold.getDate() + 90);
    this.release_date = moment(new Date().getTime() + 24 * 60 * 60 * 1000).format("MM/DD/YYYY");
    //
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

   calculateProjectActions(){
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
   }



   Submission:any
     

  getProjectDetails(prjCode:string) {
      this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {  
      this.Submission=JSON.parse(res[0].submission_json); 
      this.projectInfo=JSON.parse(res[0].ProjectInfo_Json)[0];  
      this.type_list=this.projectInfo.typelist;
      // console.log( this.type_list, "testtsfs")
      this.Pid=JSON.parse(res[0].ProjectInfo_Json)[0].id;
      this._MasterCode=this.projectInfo.Project_Code;
      this.projectActionInfo=JSON.parse(res[0].Action_Json);
      this.calculateProjectActions();    // calculate project actions details.
      console.log("projectInfo:",this.projectInfo,"projectActionInfo:",this.projectActionInfo)
      this.type_list=JSON.parse(this.projectInfo['typelist'])          
      this.ProjectType=this.projectInfo.Project_Type
      this.bsService.SetNewPojectCode(this.URL_ProjectCode);
      this.bsService.SetNewPojectName(this.projectInfo.Project_Name);
    });
  }

  nonRacisList:any;

  GetPeopleDatils(){
    this.service.NewProjectService(this.URL_ProjectCode).subscribe(
      (data)=>{
      if(data !=null && data !=undefined){       
        this.Project_List=JSON.parse(data[0]['RacisList']);
        console.log(this.Project_List,"wsa")    
      }
    });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode).subscribe(
      (data) => {
        // console.log(data,"RACIS");
        this.nonRacisList = (JSON.parse(data[0]['OtherList']));
      });

    this.filteredEmployees = this.nonRacisList;
  }




   GetActivityDetails(){
      this.service.NewActivityService(this.URL_ProjectCode).subscribe(
        (data)=>{
        if(data !==null && data !==undefined){
           this.Activity_List=JSON.parse(data[0]['ActivityList']) 
           // console.log(this.Activity_List,"testing Api")
        }     
      })
   }


   formatTime(time: string): string {
    const parsedTime = new Date(`1970-01-01T${time}`);
    return this.datepipe.transform(parsedTime, 'HH:mm');
  }




  actionCost:any='';

  showActionDetails(index:number|undefined)
  {
  
    this.currentActionView=index;
    this.actionCost=index&&this.projectActionInfo[this.currentActionView].Project_Cost;
    if(index&&this.projectActionInfo[index].Status==="Under Approval")
    this.GetApproval(this.projectActionInfo[index].Project_Code);
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

 
   List_Of_Meetings(){
    document.getElementById("Meetings_SideBar").classList.add("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "block";
   }

   Project_details_edit(){
    document.getElementById("Project_Details_Edit_form").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.getResponsibleActions();
    this.initializeSelectedValue()
   }

   Action_details_edit(){
    document.getElementById("Action_Details_Edit_form").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.getResponsibleActions();
    this.initializeSelectedValues()
   
   }

   closeInfo() {
    this._remarks=''
    document.getElementById("Action_Details_Edit_form").classList.remove("kt-quick-Project_edit_form--on");
    document.getElementById("Project_Details_Edit_form").classList.remove("kt-quick-Project_edit_form--on");
    document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    document.getElementById("User_list_View").classList.remove("kt-quick-active--on");
    document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("prj-hold-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("prj-cancel-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
   
    // in case if project submission (main or action) operation cancelled.
    $('#mainPrjCheckbox').prop('checked',false);
    $('#project-action-Checkbox').prop('checked',false);
    //   
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["./Details",this.URL_ProjectCode]);
    this.getProjectDetails(this.URL_ProjectCode);
    this.closeLinkSideBar();
    
  }




  // darcreate() {
  //   document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
  //   document.getElementById("rightbar-overlay").style.display = "block";
  // }
  View_Activity(){
    document.getElementById("Activity_Log").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.GetActivityDetails();
  }
  Attachment_view(){
    document.getElementById("Attachment_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";  
    document.getElementById("newdetails").classList.add("position-fixed");
    this.getAttachments(1);
  }
  View_User_list(){
    document.getElementById("User_list_View").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.GetPeopleDatils()
  }



  closedarBar() {
    // document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    // document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    // document.getElementById("newdetails").classList.remove("position-fixed");
    // document.getElementById("rightbar-overlay").style.display = "none";
    this.closeInfo();
    this.workdes = "";
    this.starttime = null;
    this.endtime = null;
    this.isSelection=false;
    document.getElementById("User_list_View").classList.remove("kt-quick-active--on");
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
  }


tmlSrtOrd:"Date"|"Action"|"Employee"|"Me"|undefined;

  View_timeline(){
    document.getElementById("Timeline_view").classList.add("kt-quick-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";

    this.tmlSrtOrd='Date';   // by default.
    this.onTLSrtOrdrChanged(this.tmlSrtOrd);  
  }

  add_support_team(){
    document.getElementById("Team_view_pr").classList.add("d-none");
    document.getElementById("add_new_team_sp").classList.remove("d-none");
  }
  back_to_team_list(){
    document.getElementById("Team_view_pr").classList.remove("d-none");
    document.getElementById("add_new_team_sp").classList.add("d-none");
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
   // console.log(this.requestDetails, 'transfer'); 
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
        this.GetApproval(1);    
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

// LoadProjectDetails() {
//   this.service.NewSubTaskDetailsService(this.projectCode).subscribe(
//     (data) => {
//       if (data != null && data != undefined){
//         this.EmpNo_Autho = this.ProjectNameJson[0]['Authority'];
//         this.EmpNo_Res = this.ProjectNameJson[0]['Responsible'];
//         this.ProjectName = this.ProjectNameJson[0]['Project_Name'];
//       }    
//     })
// }

_day: any;
_month: any;

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


_Subtaskname: string;
Sub_ProjectCode: string;
Sub_Desc: string;
Sub_StartDT: Date;
Sub_EndDT: Date;
Sub_Autho: string;
Sub_Status: string;
_remarks: string = "";
selectedFile: any = null;
progress: any;
_inputAttachments: string='';

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


onFileChangeUST(e) {
  console.log(e.target.files[0]);
  this._inputAttachments = e.target.files[0].name;
}
onFileChange(e) {
  this._inputAttachments=e.target.files[0].name;
  this.selectedFile = <File>e.target.files[0];
 
}




markCompleted(selectedAction:{Project_Code:string,Project_Description:string,Project_Name:string,StartDate:Date,EndDate:Date,Team_Res:string,Status:string}){
  
this._Subtaskname=selectedAction.Project_Name;
this.Sub_ProjectCode=selectedAction.Project_Code;
this.Sub_Desc=selectedAction.Project_Description;
this.Sub_StartDT=selectedAction.StartDate;
this.Sub_EndDT=selectedAction.EndDate;
this.Sub_Autho=selectedAction.Team_Res;
this.Sub_Status=selectedAction.Status;

  // opens the actioncompletion sidebar code here.
  document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
  //
}

closeActCompSideBar(){
  this._inputAttachments='';
  this._remarks='';
  $('#project-action-Checkbox').prop('checked',false);  
  document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("newdetails").classList.remove("position-fixed");
}  // for temp we are using this.


actionCompleted(){
  if (this._remarks ==="") { // when the user not provided the remark then .
    this.notifyService.showInfo("Remarks Cannot be Empty", '');
  }
  else if ((this.TOTAL_ACTIONS_IN_PROCESS + this.TOTAL_ACTIONS_IN_DELAY) === 1 && (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo|| this.Current_user_ID == this.projectInfo.Authority_EmpNo || this.isHierarchy === true)) 
  {   // if user is O,R,A or is in heirarchy and there is only one action in inprocess or delay state.
       Swal.fire({
        title: 'This is the last action to be completed.',
        text: 'Do you want to proceed with main project submission?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
       }).then((res:any)=>{

               if(res.value)
               {   // when user proceed also with the main project submission.
                if (this.selectedFile == null) {
                  this.notifyService.showInfo("Please attach the completion file to complete the main project", "Note");
                }
                else {
                  // 1.  ACTION SUBMISSION
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
                  // ACTION SUBMITTED.

                  // 2.  PROJECT SUBMISSION.
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
                 
                      this.selectedFile=null;
                      this._inputAttachments='';
                      this._remarks='';
                      this.closeInfo();
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
                console.log(this.selectedFile,"action file")

                this.service._UpdateSubtaskByProjectCode(fd) 
                .subscribe(data => {
                  this._remarks = "";
                  this._inputAttachments = "";
                  this.selectedFile=null;
                  this.calculateProjectActions();     // recalculate the project actions. 
                  this.closeActCompSideBar();         // close action completion sidebar.
                });
                this.notifyService.showSuccess("Successfully Updated", 'Action completed');
               }
       });   //swal end

  }
  else{
// if user is O,R,A or is in Heirarchy and there are some actions in the project which are in process and delay states.

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

        let prjAction=this.projectActionInfo.find((prjAct:any)=>prjAct.Project_Code===this.Sub_ProjectCode)
        const prjActionindex=this.projectActionInfo.indexOf(prjAction)
         if(prjActionindex!==-1)
         { 
          const prjActionComp={...prjAction,Status:'Completed',Remarks:fd.get('Remarks'),IndexId:this.projectActionInfo.length};
          this.projectActionInfo.splice(prjActionindex,1,prjActionComp);
         }  // updated project action.

         this._remarks = "";
         this._inputAttachments = "";
         this.selectedFile=null;
         this.calculateProjectActions();     // recalculate the project actions. 
         this.closeActCompSideBar();        // close action completion sidebar.
      
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

  document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
  document.getElementById("newdetails").classList.add("position-fixed");
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
      this.Client_List = JSON.parse(data[0]['ClientDropdown']);
      this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
      this.darArr = JSON.parse(data[0]['Json_ResponsibleInProcess']);
      console.log('darArr:',this.Category_List);
     
      if(this.darArr.length==0 && (this.projectInfo.OwnerEmpNo==this.Current_user_ID || this.Responsible_EmpNo==this.Current_user_ID)){
        this.showaction=false;
      
      }
      else if(this.darArr.length==0 && this.projectInfo.OwnerEmpNo!=this.Current_user_ID && this.Responsible_EmpNo!=this.Current_user_ID){
        this.showaction=true;
        this.noact_msg=true;
       
      }
      else{
        this.showaction=true;    
        const selectedActionOpt=this.darArr.find((item:any)=>(item.Project_Code===this.projectActionInfo[this.currentActionView].Project_Code))
        if(selectedActionOpt) 
        this.actionCode=selectedActionOpt.Project_Code;
      }
    });

  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode).subscribe(
      (data) => {
         console.log(data,"RACIS");
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
      });
}

selectedOwner: any;
ProjectType:string
ProjectDescription:string
Start_Date:string;
OGowner:any;
OGresponsible:any;
OGownerid:any;
OGresponsibleid:any;
OGclientId:any;
Submission_Name:string
Allocated_Hours:any;
Daily_array:any =[];
Week_array:any =[];
Month_array:any =[];
Quarter_array:any =[];
Halfyear_array:any =[];
Annual_array:any =[];
End_Date:any
Annual_date:any
Allocated:any
OGselectedcategoryid:any
OGcategory:any
OGselectedclientid:any
OGclient:any;
OGSubmission_Nameid:any
OGSubmission:any;
OGProjectType: any;


generateTimeIntervals(duration: number, interval: number, maxLimit: number): string[] {
  const timeArray: string[] = [];

  for (let i = 1; i <= duration; i++) {
      const hours: number = Math.floor(i * interval / 60);
      const minutes: number = i * interval % 60;

      // Check if the time exceeds the specified maximum limit
      if (hours < maxLimit || (hours === maxLimit && minutes === 0)) {
          const timeStr: string = `${hours.toString().padStart(2, '0')} Hr : ${minutes.toString().padStart(2, '0')} Mins`;
          timeArray.push(timeStr);
      } else {
          break;  // Exit the loop once the maximum limit is reached
      }
  }

  return timeArray;
}

timearrays(){
this.Daily_array = this.generateTimeIntervals(4, 15, 1);
this.Week_array = this.generateTimeIntervals(8, 15, 2);
this.Month_array = this.generateTimeIntervals(16, 15, 4);
this.Quarter_array = this.generateTimeIntervals(32, 15, 8);
this.Halfyear_array = this.generateTimeIntervals(40, 15, 10);
this.Annual_array = this.generateTimeIntervals(64, 15, 16);

console.log("Daily Array:", this.Daily_array);
console.log("Weekly Array:", this.Week_array);
console.log("Monthly Array:", this.Month_array);
}

type_list:any
OGProjectTypeid:any
ActionName:any

 initializeSelectedValue() {
        this.OGownerid = this.projectInfo['OwnerEmpNo'];
        this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];
        this.OGselectedcategoryid= this.projectInfo['Reportid'];
        this.OGselectedclientid=this.projectInfo['ClientNo'];
        this.OGSubmission_Nameid=this.projectInfo['SubmissionId'];
        this.OGProjectTypeid=this.projectInfo['Project_Block'];
        // console.log("test",this.OGProjectTypeid)
        this.OGProjectType=this.projectInfo.Project_Type;
        this.selectedOwner = this.projectInfo.Owner;
        this.OGowner = this.projectInfo.Owner;
        this.selectedOwnResp = this.projectInfo.Responsible;
        this.OGresponsible = this.projectInfo.Responsible;
        this.selectedcategory= this.projectInfo.Category;
        this.OGcategory= this.projectInfo.Category;    
        this.selectedclient=this.projectInfo.Client;
        this.OGclient=this.projectInfo.Client 
        this.Submission_Name=this.projectInfo.SubmissionName
        this.OGSubmission=this.projectInfo.SubmissionName
        this.ProjectName=this.projectInfo.Project_Name
        this.ProjectDescription=this.projectInfo.Project_Description
        this.Start_Date=this.projectInfo.StartDate
        this.Allocated_Hours=this.projectInfo.StandardAllocatedHours
        this.Allocated=this.projectInfo.AllocatedHours
        this.End_Date =this.projectInfo.EndDate;  
    }

    onAction_updateProject(val) {  
      this._remarks='';
      if(this.OGProjectType!=this.ProjectType){
        var type=this.ProjectType
        this.ProjectType=this.ProjectType;
      }
      else{
        var type: string=this.OGProjectTypeid;
      }
         
      if(this.OGowner!=this.selectedOwner){
        var owner=this.selectedOwner
        this.selectedOwner=this.selectedOwner;
      }
      else{
        var owner=this.OGownerid;
      }

      if(this.OGresponsible!=this.selectedOwnResp){
        var resp = this.selectedOwnResp;
        this.selectedOwnResp=this.selectedOwnResp;
      }
      else{
        var resp = this.OGresponsibleid;    
      }

      if(this.OGcategory!=this.selectedcategory){
        var category = this.selectedcategory;
        this.selectedcategory=this.selectedcategory;
      }
      else{
        var category = this.OGselectedcategoryid;    
      }

      if(this.OGclient!=this.selectedclient){
        var client = this.selectedclient;
        this.selectedclient=this.selectedclient;
      }
      else{
        var client:string = this.OGselectedclientid;    
      }

      if(this.OGSubmission!=this.Submission_Name){
        var Submission = this.Submission_Name;
        this.Submission_Name=this.Submission_Name;
      }
      else{
        var Submission:string = this.OGSubmission_Nameid;    
      }

      if(this.OGSubmission!=this.Submission_Name){
        var Submission = this.Submission_Name;
        this.Submission_Name=this.Submission_Name;
      }
      else{
        var Submission:string = this.OGSubmission_Nameid;    
      }

      if(type=='003' || type=='008'){
        var allocation = this.Allocated_Hours["$ngOptionLabel"];
      }
      else{
        var allocation = this.Allocated;
      }

     const jsonobj={    
         Project_Type:type, 
         Project_Name:this.ProjectName,
         Project_Description:this.ProjectDescription,
         Owner:owner,
         Responsible:resp,
         Category:category,      
         Client:client,
         StartDate:this.Start_Date,
         EndDate:this.End_Date,
         SubmissionName:Submission,
         AllocatedHours:allocation
     }
     const jsonvalue=JSON.stringify(jsonobj)
      console.log(jsonvalue ,'json');

     if(val==0){
          this.approvalObj.Emp_no=this.Current_user_ID;
          this.approvalObj.Project_Code=this.URL_ProjectCode;
          this.approvalObj.json=jsonvalue;
          this.approvalObj.Remarks=this._remarks;
          this.approvalObj.isApproval=val;

        this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data)=>{
            console.log(data['message'],"edit response");
            if(data['message']=='1'){
              this.notifyService.showSuccess("Updated successfully","Success");
            }
            else if(data['message']=='2'){
              this.notifyService.showError("Not updated","Failed");
            }
            this.getProjectDetails(this.URL_ProjectCode);
            this.closeInfo();
        });
     }
     else if(val==1){
      this.approvalObj.Emp_no=this.Current_user_ID;
      this.approvalObj.Project_Code=this.URL_ProjectCode;
      this.approvalObj.json=jsonvalue;
      this.approvalObj.Remarks=this._remarks;
      this.approvalObj.isApproval=val;

    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data)=>{
        console.log(data['message'],"edit response");
        if(data['message']=='3'){
          this.notifyService.showSuccess("Project updated and Approved successfully","Success");
        }
        else if(data['message']=='2'){
          this.notifyService.showError("Not updated","Failed");
        }
        this.getProjectDetails(this.URL_ProjectCode);
        this.getapprovalStats();
        this.closeInfo();
    });
 }

    


    }
    // Recurrence:this.Annual_date,


    ActionDescription:any
    ActionOwner:any
    ActionResponsible:any
    Actioncategory:any
    ActionClient:any
    ActionstartDate:any
    ActionendDate:any
    ActionDuration:any
    ActionAllocatedHours:any
    ActionOwnerid:any
    OGActionOwner:any
    OGActionResponsible:any
    ActionResponsibleid:any
    ActionClientid:any
    OGActionClient:any
   

    /// Action Edits start
    initializeSelectedValues() {
      this.ActionOwnerid=this.projectActionInfo[this.currentActionView].Project_Owner;
      this.ActionResponsibleid=this.projectActionInfo[this.currentActionView].Team_Res;
      this.ActionClientid=this.projectActionInfo[this.currentActionView].ClientNo;
      this.OGselectedcategoryid= this.projectInfo['Reportid']
       this.OGProjectTypeid=this.projectInfo['Project_Block'];    
      this.OGProjectType=this.projectInfo.Project_Type;
      this.OGActionOwner=this.projectActionInfo[this.currentActionView].Owner;  
      this.ActionOwner=this.projectActionInfo[this.currentActionView].Owner;
      this.ActionResponsible=this.projectActionInfo[this.currentActionView].Responsible;
      this.OGActionResponsible=this.projectActionInfo[this.currentActionView].Responsible;
      this.ActionClient=this.projectActionInfo[this.currentActionView].Client;
      this.OGActionClient=this.projectActionInfo[this.currentActionView].Client;

      this.selectedcategory= this.projectInfo.Category;
      this.OGcategory= this.projectInfo.Category; 
      this.ActionName=this.projectActionInfo[this.currentActionView].Project_Name;
      this.ActionDescription=this.projectActionInfo[this.currentActionView].Project_Description;
      this.ActionstartDate=this.projectActionInfo[this.currentActionView].StartDate
      this.ActionendDate=this.projectActionInfo[this.currentActionView].EndDate
      this.ActionDuration=this.projectActionInfo[this.currentActionView].Duration
      this.ActionAllocatedHours=this.projectActionInfo[this.currentActionView].AllocatedHours
  }

  onAction_update() {  
    this._remarks='';
    if(this.OGProjectType!=this.ProjectType){
      var type=this.ProjectType
      this.ProjectType=this.ProjectType;
    }
    else{
      var type: string=this.OGProjectTypeid;
    }

       if(this.OGActionOwner!=this.ActionOwner){
      var actionowner=this.ActionOwner
      this.ActionOwner=this.ActionOwner;
     }
     else{
      var actionowner =this.ActionOwnerid;
     }


    if(this.OGActionResponsible!=this.ActionResponsible){
      var actionresp = this.ActionResponsible;
      this.ActionResponsible=this.ActionResponsible;
    }
    else{
      var actionresp = this.ActionResponsibleid;    
    }

    if(this.OGActionClient!=this.ActionClient){
      var Actionclient = this.ActionClient;
      this.ActionClient=this.ActionClient;
    }
    else{
      var Actionclient = this.ActionClientid;    
    }


    if(this.OGcategory!=this.selectedcategory){
      var category = this.selectedcategory;
      this.selectedcategory=this.selectedcategory;
    }
    else{
      var category = this.OGselectedcategoryid;    
    }

  
   const jsonobj={    
    Project_Type:type,  
    Project_Name:this.ActionName,
    Project_Description:this.ActionDescription,
    Owner:actionowner,
    Responsible:actionresp,
    Category:category,
    Client:Actionclient,
    StartDate: this.ActionstartDate,
    EndDate:this.ActionendDate,
    Allocated:this.ActionAllocatedHours, 
   }
   const jsonvalues=JSON.stringify(jsonobj)
    console.log(jsonvalues ,'json');

    this.approvalObj.Emp_no=this.Current_user_ID;
    this.approvalObj.Project_Code=this.URL_ProjectCode;
    this.approvalObj.json=jsonvalues;
    this.approvalObj.Remarks=this._remarks;

  this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data)=>{
      console.log(data['message'],"edit response");
      if(data['message']=='1'){
        this.notifyService.showSuccess("Updated successfully","Success");
      }
      else if(data['message']=='2'){
        this.notifyService.showError("Not updated","Failed");
      }
      this.getProjectDetails(this.URL_ProjectCode);
      this.closeInfo();
  });
  }





  limit = 200; // Set the initial limit
  isExpanded = false;
  toggleReadMore() {
   
    this.isExpanded = !this.isExpanded;
  }
    /// Action Edits End



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

 
  this.service._InsertDARServie(this.objProjectDto)
    .subscribe(data => {
      this._Message = data['message'];
      this.notifyService.showSuccess(this._Message, "Success");
    }); 
  this.dar_details();
  this.getDarTime();



  this.workdes = "";
  this.starttime = null;
  this.endtime = null;
  // document.getElementById("newdetails").classList.remove("position-fixed");
  // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  // document.getElementById("rightbar-overlay").style.display = "none";
  // this.Clear_Feilds();
  
}




onActionChanged(e){
  let i;
  for(i=0;i<this.projectActionInfo.length;i++)
       if(this.projectActionInfo[i].Project_Code.toString().trim()===e.toString().trim())
       break;
  if(i!==this.projectActionInfo.length)
   this.currentActionView=i;
}   // whenever action is changed or selected.









// timeline code end here


AddPortfolio() {
   this.getPortfoliosDetails()
}

// timeline view section start here
timelineList:any;
isTimelinePresent:boolean=false;
tlTotalHours:number;



onTLSrtOrdrChanged(option:"Date"|"Action"|"Employee"|"Me"){
      this.tmlSrtOrd=option;
      let sorttype:string="1";
      switch(option){
          case 'Date':sorttype="1";break;
          case 'Action':sorttype="2";break;
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












// this is main project submission code start here
isAction:boolean = false;  

mainDeadline:any;
mainowner:any;
mainResp:any;
mainAutho:any;
mainMastercode:any;
approve_details: any;

getapproval_actiondetails() {
  this.approvalObj.Project_Code = this.URL_ProjectCode;

  this.approvalservice.GetAppovalandActionDetails(this.approvalObj).subscribe(data => {
    // console.log(data,"appact");
    if (data[0]['actiondetails'] != '[]' || data[0]['approvaldetails'] != '[]') {
      if (data[0]['actiondetails'] != '[]'){
        let action_details= JSON.parse(data[0]['actiondetails']);
        
        this.mainDeadline = action_details[0]['mainDeadline'];
        this.mainowner = action_details[0]['mainowner'];
        this.mainResp = action_details[0]['mainResp'];
        this.mainAutho = action_details[0]['mainAutho'];
        this.mainMastercode = action_details[0]['Master_Code'];
        this.isAction=true;
      }
      if (data[0]['approvaldetails'] != '[]')
        this.approve_details = JSON.parse(data[0]['approvaldetails']);

    }
  });
}

















OnClickCheckboxProjectUpdate() {
  
  this.service.SubTaskStatusCheck(this.URL_ProjectCode).subscribe(
    (data) => {
      if (data['Message'] == 1) {
        Swal.fire({
          title: 'Unable to complete this project !!',
          text: 'Action status are in rejected or pending ?',
          // icon: 'warning',
          showCancelButton: true
        });
      }
      else { 
        // applying sidebar from mysideInfobar_ProjectsUpdate in html
        document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
        // placing the backgorund dim on opening sidebar
        document.getElementById("rightbar-overlay").style.display = "block";
        // Fixing the scrollbar for sidebar
        document.getElementById("newdetails").classList.add("position-fixed");
        // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");   // i have commit this for a while.
        document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
      }
    });



}




closeInfoProject() {
  // For closing sidebar on 'X' buttton
  document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
  // For sidebar overlay background removing the slide on 'X' button
  document.getElementById("rightbar-overlay").style.display = "none";
  // For page top div removing fixed
  document.getElementById("newdetails").classList.remove("position-fixed");
  $('#mainPrjCheckbox').prop('checked',false);
  this._inputAttachments='';
  this._remarks='';
  this.selectedFile = null;
  $('#_file1').val('');
  $('#upload').html('Select a file');
  // this.OnClickCheckboxProjectUpdate();
  // this.Clear_Feilds();
}





updateMainProject() {
  if (this.projectInfo.Project_Type == 'To do List') {
    this.selectedFile = null;
  }

  if(this.isAction==false){
    const fd = new FormData();
  fd.append("Project_Code", this._MasterCode);
  fd.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
  fd.append("Remarks", this._remarks);
  fd.append("Projectblock", this.projectInfo.Project_Block);
  fd.append('file', this.selectedFile);
  fd.append("Emp_No", this.Current_user_ID);
  fd.append("Project_Name", this.projectInfo.Project_Name);
  this.service._fileuploadService(fd).
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
      this.closeInfoProject();
      this.getProjectDetails(this.URL_ProjectCode);
      // this.getapproval_actiondetails();
      // this.GetSubtask_Details();
      // this.GetProjectDetails();
      // this.getapprovalStats();
      // this._projectSummary.GetProjectsByUserName('RACIS Projects');
    });
  }

  else if(this.isAction==true){
    const fd = new FormData();
    fd.append("Project_Code", this.URL_ProjectCode);
    fd.append("Master_Code", this.mainMastercode);
    fd.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
    fd.append("Projectblock", this.projectInfo.Project_Block);
    fd.append("Remarks", this._remarks);
    fd.append('file', this.selectedFile);
    fd.append("Project_Name", this.projectInfo.Project_Name);

    this.service._UpdateSubtaskByProjectCode(fd)
      .subscribe(data => {
        this._remarks = "";
        this._inputAttachments = "";
        // this.GetProjectDetails();
        // this.GetSubtask_Details();
        this.getProjectDetails(this.URL_ProjectCode);
        this.closeInfoProject();

      });
    this.notifyService.showSuccess("Successfully Updated", 'Action completed');
  }
  
}
// Files Attachment Working Area Start

flSrtOrd:string;
AttachmentList:any;
_TotalDocs:any;
getAttachments(sorttype:number) {
  switch(sorttype){
    case 1:this.flSrtOrd="Date";break;
    case 2:this.flSrtOrd="Project";break;
    case 3:this.flSrtOrd="Employee";break;
    case 4:this.flSrtOrd="me";break;
    default:this.flSrtOrd="none";
}
  this._LinkService.GetAttachements(this.Current_user_ID, this.URL_ProjectCode,sorttype.toString())
    .subscribe((data) => {    
      console.log(data,"Slider")
      this.AttachmentList = JSON.parse(data[0]['Attachments_Json']); 
      this._TotalDocs = JSON.parse(data[0]["TotalDocs"]);

   
      if(this.AttachmentList&&this.AttachmentList.length)
      { 
        this.AttachmentList=this.AttachmentList.map((Attachment:any)=>({ ...Attachment,JsonData:JSON.parse(Attachment.JsonData) }));
        console.log('our new AttachmentList:',data,this.AttachmentList);
      } 
    });
}




 openPDF_Standards(standardid, emp_no, cloud, repDate: Date, proofDoc, type,submitby) {
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
      // if (this.Authority_EmpNo == this.Responsible_EmpNo) {
      //   FileUrl= (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);
      // }
      // else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
      //   FileUrl= (FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);
      // }

      FileUrl = (FileUrl + emp_no + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&"+ "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();

    }

    else if (cloud == true) {

      let FileUrl: string;
      FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

      if (proofDoc.includes(FileUrl)) {
        FileUrl = proofDoc
      }
      else {
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
          this._day = Day;
        }
        else {
          this._day = Day;
        }
        var date = this._day + "_" + this._month + "_" + repDate.getFullYear();

        // if (this.Authority_EmpNo == this.Responsible_EmpNo) {
        //   FileUrl= (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." +type);
        // }
        // else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
        //   FileUrl= (FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." +type);
        // }
        FileUrl = (FileUrl + emp_no + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." + type);
      }

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&"+ "submitby=" + submitby + "&"+  "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }


  }


  LoadDocument(pcode: string, iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
    FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (iscloud == false) {
      if (this.projectInfo.AuthorityEmpNo == this.projectInfo.ResponsibleEmpNo) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
      }
      else if (this.projectInfo.AuthorityEmpNo != this.projectInfo.ResponsibleEmpNo) {
        FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
      }

      let name = "ArchiveView/" + pcode;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      filename = filename.replace(/#/g, "%23");
      filename = filename.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&"+  "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }

    else if (iscloud == true) {
      let name = "ArchiveView/" + pcode;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(url1);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      filename = filename.replace(/#/g, "%23");
      filename = filename.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&"+ "submitby=" + submitby + "&"+ "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }
  }
// Files Attachment Working Area End






///////////////////////////////////// Approval section Start  ////////////////////////////////////

filterText:string;
approval_Emp:any
SearchItem:string;


filterSearch() {
  this.filterText = "";
  this.SearchItem="";
}


GetApproval(code){
  this.approvalObj=new ApprovalDTO();
  this.approvalObj.Project_Code = code;

  this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
    this.requestDetails = data as [];
    
     if (this.requestDetails.length > 0) {
      this.requestType = (this.requestDetails[0]['Request_type']);
       this.forwardType = (this.requestDetails[0]['ForwardType']);
       this.requestDate = (this.requestDetails[0]['Request_date']);
       this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
       this.approval_Emp = (this.requestDetails[0]['Emp_no']);
       this.requestComments = (this.requestDetails[0]['Remarks']);
       this.new_deadline = (this.requestDetails[0]['new_deadline']);
       this.new_cost = (this.requestDetails[0]['new_cost']);
       this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
     
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




// project submission code end here


pro_act: boolean = true;
hold_upto: any;

closeApproval() {
  document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
  document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
  document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
  document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
  document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  // document.getElementById("mysideInfobar1").classList.remove("kt-quick-panel--on");
  // For page top div removing the fixed
  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";
  this.notifyService.showError("Cancelled", '');
  // this.Clear_Feilds();
  // this.GetSubtask_Details();
}



getholdate() {
  this.service.getHoldDatebyProjectcode(this.URL_ProjectCode).subscribe((data) => {
    this.hold_upto = data["Project_holddate"];
    // this.hold_upto=moment(this.hold_upto).format("DD-MM-YYYY");
  });
}




///////////////////////////////////// Approval section Start  ////////////////////////////////////




// meeting section code starts here
meetingList: any = [];
meeting_arry: any = [];
meetinglength: any;

upcomingMeetings:any=[];
todaymeetings:any=[];
last7dmeetings:any=[];
lastMonthMeetings:any=[];
olderMeetings:any=[];
mtgFromD:string='';
mtgUptoD:string='';
mtgsInRange:any=[];
mLdng:boolean=false;

tdMtgCnt:number = 0;   // Today Meetings Count
upcMtgCnt:number = 0;  // Upcoming Meetings Count
lstMthCnt:number = 0;  // Last Month Meetings Count
lst7dCnt:number = 0;   // Last 7 Days Meetings Count
oldMtgCnt:number = 0;  // Older Meetings Count



GetmeetingDetails() {
  this.ObjSubTaskDTO.Project_Code = this.URL_ProjectCode;
  this.ObjSubTaskDTO.startdate = null;
  this.ObjSubTaskDTO.enddate = null;
       
  this.service._GetMeetingList(this.ObjSubTaskDTO)
    .subscribe(data => {
      if ((data[0]['MeetingFor_projects'].length > 0) && data != null) {
        this.meetingList = JSON.parse(data[0]['MeetingFor_projects']);
        this.meeting_arry = this.meetingList;
        if (this.meeting_arry.length > 0)
          this.meetinglength = this.meeting_arry.length;
        this.meeting_arry.forEach(element => {
          element.usersjson = JSON.parse(element.Addguest);
        });

      }
      else {
        this.meetinglength = 0;
      }


      console.log('meeting we have:',this.meeting_arry);
   // AFTER GETTING ALL MEETINGS DETAILS 

       this.upcomingMeetings=this.getUpcomingMeeting(); 
       this.upcomingMeetings.reverse();                                         // get upcoming meetings.
       this.upcMtgCnt=this.upcomingMeetings.length;                           // store totalno of meetings.
       this.upcomingMeetings=this.groupMeetingsByDate(this.upcomingMeetings);   // format them.
       
   

       this.todaymeetings=this.getMeetingsByDate(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));     // get todays meetings.
       this.tdMtgCnt=this.todaymeetings.length;                                                        // store totalno of meetings.
       this.todaymeetings=this.groupMeetingsByDate(this.todaymeetings);                                 // format them.
    
       for(let i=1;i<=7;i++)
       {
           const date=new Date();                     // get the current date. 
           date.setDate(date.getDate()-i);
           this.last7dmeetings=this.last7dmeetings.concat(this.getMeetingsByDate(this.datepipe.transform(date, 'yyyy-MM-dd')));    
       }                                                                                               // get last 7 days meetings.
       this.lst7dCnt=this.last7dmeetings.length;                                                    // store totalno of meetings.
       this.last7dmeetings=this.groupMeetingsByDate(this.last7dmeetings);                              // format them.  
       

       const date1=new Date();                 // currentdate.
       date1.setMonth(date1.getMonth()-1);    // date1 is prev month.
       this.meeting_arry.forEach(m=>{
        
           const sd=new Date(m.Schedule_date);
           if(sd.getMonth()===date1.getMonth()&&sd.getFullYear()===date1.getFullYear())   
           {  // when meeting held in last month
                  this.lastMonthMeetings.push(m);
           }
           else if(!(sd.getTime()>date1.getTime()))
           {   // when meeting held date is even order than last months
               this.olderMeetings.push(m);
           }    
           
            
   
       });

       this.lstMthCnt=this.lastMonthMeetings.length;
       this.oldMtgCnt=this.olderMeetings.length;

       this.lastMonthMeetings=this.groupMeetingsByDate(this.lastMonthMeetings);      // format them.
       this.olderMeetings=this.groupMeetingsByDate(this.olderMeetings);              // format them.
       
    });


    //
}


openMeetingSidebar(){
  document.getElementById("Meetings_SideBar").classList.add("kt-quick-Mettings--on");
  document.getElementById("rightbar-overlay").style.display = "block";      
  // sidebar is open                
  this.GetmeetingDetails(); // get all meeting details.
 }

closeMeetingSidebar(){
  document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");
  document.getElementById("rightbar-overlay").style.display = "none";
} 


getUpcomingMeeting()
{
    const cd=new Date();   // takes the current date.
    const upcoming=this.meeting_arry.filter((meeting)=>{
            const sd=new Date(meeting.Schedule_date);
            return sd>cd;
    });
    return upcoming;
}


groupMeetingsByDate(ar)
{
   let result=[];
   for(let i=0;i<ar.length;i++)
   {
    let date1=new Date(ar[i].Schedule_date);
    if(!result.find((e)=>new Date(e.date).getTime()===date1.getTime())){
        
        let totalmeetings=[ar[i]];
        for(let j=i+1;j<ar.length;j++){
          
           if(new Date(ar[j].Schedule_date).getTime()===date1.getTime())
               totalmeetings.push(ar[j]);
         }
       result.push({date:date1,totalmeetings:totalmeetings})  
    }
   }
   return result;
}


getMeetingsByDate(date){
  const inputdate=new Date(date);
  const meetingsfound=this.meeting_arry.filter((meeting)=>{
           const tempd=new Date(meeting.Schedule_date);
           return (tempd.getTime()===inputdate.getTime())
  });
  return meetingsfound;
}


getAttendeesInMeeting(people){  
      if(Array.isArray(people))
        {      let total=0;
               people.forEach((pr)=>{
                if(pr.Status==="Accepted")
                 total=total+1;
              });
              return total;  
        }
     return "";   
}
   


getMeetingsInRange(){
    this.ObjSubTaskDTO.Project_Code = this.URL_ProjectCode;
    this.ObjSubTaskDTO.startdate = this.mtgFromD;
    this.ObjSubTaskDTO.enddate = this.mtgUptoD;
    this.mLdng=true;     // made loading visible.
    this.service._GetMeetingList(this.ObjSubTaskDTO).subscribe((res:any)=>{
        this.mLdng=false;   // made loading invisible.
      console.log("after sending meeting range:",res)
      if(res&&res[0].MeetingFor_projects){  // if MeetingFor_projects is not '' , null , undefined
        this.mtgsInRange=JSON.parse(res[0].MeetingFor_projects)
        this.mtgsInRange.forEach(element => {
          element.usersjson = JSON.parse(element.Addguest);
        });
        this.mtgsInRange=this.groupMeetingsByDate(this.mtgsInRange);
        console.log("get meetings list:", this.mtgsInRange);
      }
      else{
        this.mtgsInRange=[];  // when no meetings held during the range.
      }
             
             
    })

}




ScheduleType:string='';
editTask: boolean = false;
copyTask: boolean = false;
create:boolean=false;
draftid: number = 0;
_AllEventTasksCount: number = 0;
pending_status: boolean;
_FutureEventTasksCount: number = 0;
MinLastNameLength: boolean;
MasterCode: any = [];

Title_Name: any;
Startts: any;
Endtms: any;

Projectstartdate: string = "";
projectEnddate: string;
Status_project: string; days
AllocatedHours: number;
BlockNameProject1: any;
SubmissionName: string;
_Exec_BlockName: string = "";



Task_type(value:number){
  this.selectedrecuvalue = "0";   
  this._PopupConfirmedValue = 1; 
  this.MinLastNameLength = true;
  this._subname = false;
  this._calenderDto = new CalenderDTO;
  this.GetProjectAndsubtashDrpforCalender();
  this.BlockNameProject1 = [];

  // initialization

  document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
  this.editTask = false;
  this.copyTask = false;
  this.create=true;
  if (value===1) {
    this.ScheduleType = "Task";
    // document.getElementById("subtaskid").style.display = "block";
    // document.getElementById("Guest_Name").style.display = "none";
    // document.getElementById("Location_Name").style.display = "none";
    // document.getElementById("Descrip_Name").style.display = "none";
    // document.getElementById("core_viw123").style.display = "block";
    // document.getElementById("core_viw121").style.display = "none";
    // document.getElementById("core_viw222").style.display = "none";
    // document.getElementById("core_Dms").style.display = "none";
    // document.getElementById("online-add").style.display = "none";

  }
  else if(value===2){
    this.ScheduleType = "Event";
    // document.getElementById("subtaskid").style.display = "none";
    // document.getElementById("Guest_Name").style.display = "block";
    // document.getElementById("Location_Name").style.display = "block";
    // document.getElementById("Descrip_Name").style.display = "block";
    // document.getElementById("core_viw121").style.display = "block";
    // document.getElementById("core_viw123").style.display = "none";
    // document.getElementById("core_viw222").style.display = "block";
    // document.getElementById("core_Dms").style.display = "block";
    // document.getElementById("online-add").style.display = "block";

  }
}



selectedrecuvalue: string;
dayArr: any = [
  {
    "Day": "S",
    "value": "Sun",
    "checked": false
  },
  {
    "Day": "M",
    "value": "Mon",
    "checked": false
  },
  {
    "Day": "T",
    "value": "Tue",
    "checked": false
  },
  {
    "Day": "W",
    "value": "Wed",
    "checked": false
  },
  {
    "Day": "Th",
    "value": "Thu",
    "checked": false
  },
  {
    "Day": "Fr",
    "value": "Fri",
    "checked": false
  },
  {
    "Day": "Sa",
    "value": "Sat",
    "checked": false
  }
];
MonthArr: any = [
  { "Day": "01", "value": "01", "checked": false },
  { "Day": "02", "value": "02", "checked": false },
  { "Day": "03", "value": "03", "checked": false },
  { "Day": "04", "value": "04", "checked": false },
  { "Day": "05", "value": "05", "checked": false },
  { "Day": "06", "value": "06", "checked": false },
  { "Day": "07", "value": "07", "checked": false },
  { "Day": "08", "value": "08", "checked": false },
  { "Day": "09", "value": "09", "checked": false },
  { "Day": "10", "value": "10", "checked": false },
  { "Day": "11", "value": "11", "checked": false },
  { "Day": "12", "value": "12", "checked": false },
  { "Day": "13", "value": "13", "checked": false },
  { "Day": "14", "value": "14", "checked": false },
  { "Day": "15", "value": "15", "checked": false },
  { "Day": "16", "value": "16", "checked": false },
  { "Day": "17", "value": "17", "checked": false },
  { "Day": "18", "value": "18", "checked": false },
  { "Day": "19", "value": "19", "checked": false },
  { "Day": "20", "value": "20", "checked": false },
  { "Day": "21", "value": "21", "checked": false },
  { "Day": "22", "value": "22", "checked": false },
  { "Day": "23", "value": "23", "checked": false },
  { "Day": "24", "value": "24", "checked": false },
  { "Day": "25", "value": "25", "checked": false },
  { "Day": "26", "value": "26", "checked": false },
  { "Day": "27", "value": "27", "checked": false },
  { "Day": "28", "value": "28", "checked": false },
  { "Day": "29", "value": "29", "checked": false },
  { "Day": "30", "value": "30", "checked": false },
  { "Day": "31", "value": "31", "checked": false }
];
maxDate = "";
_OldRecurranceId: string;
_OldRecurranceValues: string;
_PopupConfirmedValue: number;
_subname: boolean;
_calenderDto: CalenderDTO;
ProjectListArray: any;
_EmployeeListForDropdown: any[] = [];
Portfoliolist_1: [];
Note_deadlineexpire: boolean;
Subtask: any;
St_date: string = "";
Ed_date: string;
_status: string;
Allocated_subtask: number;
TM_DisplayName: string;
Portfolio: any = [];
SelectDms: any;

viewconfirm() {

  const _arraytext = [];
  if (this.selectedrecuvalue == "2" || this.selectedrecuvalue == "3") {
    for (let index = 0; index < this.dayArr.length; index++) {
      if (this.dayArr[index].checked) {
        const day = this.dayArr[index].value;
        _arraytext.push(day);
      }
    }
    for (let index = 0; index < this.MonthArr.length; index++) {
      if (this.MonthArr[index].checked == true) {
        const day = this.MonthArr[index].value;
        _arraytext.push(day);
      }
    }
  }
  else {
    _arraytext.push(this.maxDate);
  }


  if (this._OldRecurranceId != this.selectedrecuvalue || this._OldRecurranceValues != _arraytext.toString()) {

    var radio1 = document.getElementById('r1') as HTMLInputElement | null;
    radio1.disabled = true;
    radio1.checked = false;

    var radio2 = document.getElementById('r2') as HTMLInputElement | null;
    radio2.disabled = false;
    radio2.checked = true;

    var radio3 = document.getElementById('r3') as HTMLInputElement | null;
    radio3.disabled = false;
    radio3.checked = false;
    document.getElementById("div_thisevent").style.display = "none";

    this._PopupConfirmedValue = 2;
  }
  else if (this._OldRecurranceId == this.selectedrecuvalue && this._OldRecurranceValues == _arraytext.toString()) {
    document.getElementById("div_thisevent").style.display = "block";
    var radio1 = document.getElementById('r1') as HTMLInputElement | null;
    radio1.disabled = false;
    radio1.checked = true;

    var radio2 = document.getElementById('r2') as HTMLInputElement | null;
    radio2.disabled = false;
    radio2.checked = false;

    var radio3 = document.getElementById('r3') as HTMLInputElement | null;
    radio3.disabled = false;
    radio3.checked = false;
    this._PopupConfirmedValue = 1;

  }
}

LastLengthValidation11() {
  if (this.Title_Name.trim().length < 3) {
    this.MinLastNameLength = false;
  }
  else {
    this.MinLastNameLength = true;
  }
}
calculateDiff(dateSent) {
  let currentDate = new Date();
  dateSent = new Date(dateSent);
  return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
}


GetProjectAndsubtashDrpforCalender() {
  console.log(this._calenderDto);
  this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
    ((data) => {
      this.ProjectListArray = JSON.parse(data['Projectlist']);
      this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
      this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
      console.log(this.Portfoliolist_1, "Project List Array");

    });
}




GetSubtasklistfromProject(MasterCode) {

  this.ProjectListArray.forEach(element => {

    if (element.Project_Code == MasterCode) {

      this.Projectstartdate = element.StatDate;
      this.projectEnddate = element.Enddate;
      this.Status_project = element.Status;
      this.AllocatedHours = element.Allocated;

      var number = this.calculateDiff(this.projectEnddate);
      const format2 = "YYYY-MM-DD"
      if (number >= 90) {
        // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
        this.Note_deadlineexpire = false;
      }
      else {
        if (number < 0) {
          if (this.ScheduleType == "Task") {
            // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
            this.Note_deadlineexpire = true;
          }
          else {
            // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
          }
        }
        else {
          // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
          this.Note_deadlineexpire = false;
        }
      }
    }

  });
  if (MasterCode != undefined) {

    this._calenderDto.Project_Code = MasterCode;
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        // console.log(data);
        this.BlockNameProject1 = JSON.parse(data['Projectlist']);
      });
    this._subname = false;
    this.ProjectListArray.forEach(element => {
      if (element.Project_Code == MasterCode) {
        this._Exec_BlockName = element.Exec_BlockName;
        this.SubmissionName = element.Submission;
      }
    });
    if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List" || this._Exec_BlockName == "Routine Tasks") {
      (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "none";

    }
    else {
      (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "block";
    }
  }
}


getChangeSubtaskDetais(Project_Code) {
  this.BlockNameProject1.forEach(element => {

    if (element.Project_Code == Project_Code) {
      this.St_date = element.StatDate;
      this.Ed_date = element.Enddate;
      this._status = element.Status;
      this.Allocated_subtask = element.Allocated
      this.TM_DisplayName = element.TM_DisplayName
    }
  });


}


// meeting section code end here










// project hold section and release section start
hold_remarks: string;
Holddate: string;
holdDate: any;
minhold: any = new Date();
maxhold: any = new Date();
release_date: any = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
dateR = new FormControl(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

onProject_Hold(id, Pcode) {
  this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
  if (this.Holddate != null) {
    this.objProjectDto.Project_holddate = this.Holddate;
    this.objProjectDto.Project_Code = Pcode;
    this.objProjectDto.Remarks = this.hold_remarks;
    this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {
      this._Message = data['message'];
      if (this._Message == 'Project Hold Updated') {
        this.notifyService.showSuccess(this._Message + " by " + this._fullname, "Success");
        this.closePrjHoldSideBar();
        this.getProjectDetails(Pcode);
        this.getholdate();
      }
    });
  }
  else {
    this.notifyService.showInfo("Project Hold date cannot be empty", "Please select a date.");
  }
}



orgValueChange1(val) {
  this.release_date = moment(val.value).format("MM/DD/YYYY");
}




holdreleaseProject(){
  if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo || this.Current_user_ID==this.projectInfo.OwnerEmpNo){
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalObj.Request_type = 'Project Release';
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Remarks = this.hold_remarks;
    this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
      this.closePrjReleaseSideBar();
      this._Message = (data['message']);
      if (this._Message == '1') {
        this.notifyService.showSuccess("Project released by "+this._fullname, "Success");
        this.getProjectDetails(this.URL_ProjectCode);
      }
      else if (this._Message == '2' || this._Message == '0') {
        this.notifyService.showError("Project release failed", "Failed");
      } 
    });
  console.log(this.approvalObj,"cancel")
  }
 else{
  this.closePrjReleaseSideBar();
  this.notifyService.showError("Access denied","Failed")
  }
}

updateReleaseDate() {
  if (this.release_date == null || this.release_date == 'Invalid date') {
    this.notifyService.showError("Please enter valid date", "Failed");
    return false;
  }
  else {
    this.release_date = this.datepipe.transform(this.release_date, 'MM/dd/yyyy');
    this.holdDate = moment(this.release_date).format("DD-MM-YYYY")
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalObj.hold_date = this.release_date;
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Remarks = this.hold_remarks;
    this.approvalservice.UpdateReleaseDate(this.approvalObj).subscribe((data) => {
      this._Message = (data['message']);
      if (this._Message == '1') {
        this.notifyService.showSuccess("Project release date updated", "Success");
        this.notifyService.showInfo("Project will be released on " + this.holdDate, "Note");
        this.getProjectDetails(this.projectInfo.Project_Code);
        this.getholdate();
        this.closePrjReleaseSideBar();
      }
      else if (this._Message == '2' || this._Message == '0') {
        this.notifyService.showError("Project release date not updated", "Failed");
      }
    });
  }

}

 

openPrjHoldSideBar(){
  document.getElementById("prj-hold-sidebar").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";  
  document.getElementById("newdetails").classList.add("position-fixed");
}
closePrjHoldSideBar(){
  this.hold_remarks='';
  this.Holddate=null;
  document.getElementById("prj-hold-sidebar").classList.remove("kt-quick-active--on");
  document.getElementById("newdetails").classList.remove("position-fixed");
  document.getElementById("rightbar-overlay").style.display = "none";  
}



openPrjReleaseSideBar(){
  document.getElementById("prj-release-sidebar").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";  
  document.getElementById("newdetails").classList.add("position-fixed");
}

closePrjReleaseSideBar(){
  this.hold_remarks='';
  this.Holddate=null;
  document.getElementById("prj-release-sidebar").classList.remove("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "none";  
  document.getElementById("newdetails").classList.remove("position-fixed");
}

// project hold section and release section end

// Task submission section code start here

Authority: string;
ProjectBlock: string;
ProjectName: string;

OnStandardTaskSubmit() {
  $('#_file1').val('');
  $('#upload').html('Select a file');
  document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
 // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
  document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");

}

changeStandard() {
  $('#_file1').val('');
  $('#upload').html('Select a file');
  this.selectedFile = null;
  this._remarks = "";
}


// project cancel section  start

openPrjCancelSb(){
  document.getElementById("prj-cancel-sidebar").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";  
  document.getElementById("newdetails").classList.add("position-fixed");
}

closePrjCancelSb(){
  this.hold_remarks='';
  document.getElementById("prj-cancel-sidebar").classList.remove("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "none";  
  document.getElementById("newdetails").classList.remove("position-fixed");
}


updateProjectCancel(){

  Swal.fire({
    title: 'Project Cancel',
    html: 'Are you sure to cancel the project "<strong>' + this.projectInfo.Project_Name +'</strong>"?<br>Note: The cancelled project will be deactivated.',
    // icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((response: any) => {
    if (response.value) {
      if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo){
        this.approvalObj.Project_Code = this.URL_ProjectCode;
        this.approvalObj.Request_type = 'Project Cancel';
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;

        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
          this.closePrjCancelSb();
          this._Message = (data['message']);
          if (this._Message == '1') {
            this.notifyService.showSuccess("Project cancel request sent to the project owner", "Success");
            this.getProjectDetails(this.URL_ProjectCode);
            this.getapproval_actiondetails();
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Project cancel failed", "Failed");
          }
        });
      // this.Clear_Feilds();
      console.log(this.approvalObj,"cancel")
    }
    else if(this.Current_user_ID==this.projectInfo.OwnerEmpNo || this.isHierarchy==true){
        this.approvalObj.Project_Code = this.URL_ProjectCode;
        this.approvalObj.Request_type = 'Project Cancel';
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;

        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
        this.closePrjCancelSb();
          this._Message = (data['message']);
          if (this._Message == '1') { 
            this.notifyService.showSuccess("Project cancelled by "+this._fullname, "Success");
            this.getProjectDetails(this.URL_ProjectCode);
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Project cancel failed", "Failed");
          }
        });
      // this.Clear_Feilds();
      console.log(this.approvalObj,"cancel")
    }
    else{
      this.closePrjCancelSb();
      this.notifyService.showError("Access denied","Failed")
    }
      
    } else if (response.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Project not canceled',
        'error'
      )
      this.closePrjCancelSb();
    }
  });

  
}

// project cancel section end





achieveStandard() {
  const fd = new FormData();
  fd.append("Project_Code", this._MasterCode);
  fd.append("Team_Autho", this.Authority);
  fd.append("Remarks", this._remarks);
  fd.append("Projectblock", this.ProjectBlock);
  fd.append('file', this.selectedFile);
  fd.append("Emp_No", this.Current_user_ID);
  fd.append("Project_Name", this.projectInfo.Project_Name);
 
   console.log(this._MasterCode,this._remarks,this.selectedFile,this.Current_user_ID,"fd");
   
  this.service._UpdateStandardTaskSubmission(fd).
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
      // if (event.type == HttpEventType.UploadProgress) {
      //   this.progress = Math.round(event.loaded / event.total * 100);
      //   console.log(this.progress, "progress")
      //   this.notifyService.showInfo("File uploaded successfully", "Project Updated");
      // }
      // else if (event.type === HttpEventType.Response) {
      //   alert(1)
      //   var myJSON = JSON.stringify(event);
      //   this._Message = (JSON.parse(myJSON).body).Message;
      //   this.notifyService.showSuccess(this._Message, 'Success');
      // }
      this.closeInfo();  
      this.getapprovalStats();
      this._projectSummary.GetProjectsByUserName('RACIS Projects');
    });
}

notachieveStandard() {
  this.selectedFile = null;
  const fd = new FormData();
  fd.append("Project_Code", this._MasterCode);
  fd.append("Team_Autho", this.Authority);
  fd.append("Remarks", this._remarks);
  fd.append("Projectblock", this.ProjectBlock);
  fd.append('file', this.selectedFile);
  fd.append("Emp_No", this.Current_user_ID);
  fd.append("Project_Name", this.ProjectName);
  // console.log(this._MasterCode,this._remarks,this.selectedFile,this.Current_user_ID,"fd");
  this.service._UpdateStandardTaskSubmission(fd).
    subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.notifyService.showInfo("File uploaded successfully", "Project Updated");
      }
      else if (event.type === HttpEventType.Response) {
        var myJSON = JSON.stringify(event);
        this._Message = (JSON.parse(myJSON).body).Message;
        this.notifyService.showSuccess(this._Message, 'Success');
      }
      this.closeInfo();
      this.getapprovalStats();
      this._projectSummary.GetProjectsByUserName('RACIS Projects');
    });
}

//  $('#_file1').val('');
// Task submission section code End here
fruitCtrl = new FormControl();
selectedEmployees: any=[];
selectedEmpIds:any = [];


remove(employee: any): void {
  const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === employee.Emp_No);
  this.isSelection=false;
  if (index !== -1) {
    // Remove the employee from the selectedEmployees array
    this.selectedEmployees.splice(index, 1);
    this.selectedEmpIds.splice(index, 1); 

    console.log(this.selectedEmpIds,"selected supprem")
  }

  // Optionally, you can uncheck the checkbox in the Project_List array
  employee.checked = false;
  requestAnimationFrame(()=>this.autoCompleteTrigger.closePanel()); // close the panel

}

isSelection: boolean =false;


selected(event: MatAutocompleteSelectedEvent): void {
  const selectedEmployee = this.nonRacisList.find((fruit) => fruit.Emp_No === event.option.value);
  this._keeppanelopen();
  if (selectedEmployee) {
    const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === selectedEmployee.Emp_No);

    if (index === -1) {
      // Employee not found in the selected array, add it
      this.selectedEmployees.push(selectedEmployee);
      this.selectedEmpIds.push(selectedEmployee.Emp_No);
    } else {
      // Employee found in the selected array, remove it
      this.selectedEmployees.splice(index, 1);
      this.selectedEmpIds.splice(index, 1);
    }
  }

  this.fruitInput.nativeElement.value = '';
  this.filteredEmployees = this.nonRacisList;
  console.log(this.selectedEmpIds, "selected")
}

isSelected(employee: any): boolean {
  return this.selectedEmployees.some((emp) => emp.Emp_No === employee.Emp_No);
}

filterEmployees(input: string): void {
  this.isSelection=true;
  this.filteredEmployees = this.nonRacisList.filter((employee) =>
    employee.NonRACIS.toLowerCase().includes(input.toLowerCase())
  );
}


_keeppanelopen(){
  this.filteredEmployees = this.nonRacisList;
  this.isSelection=true;
  requestAnimationFrame(()=>this.customTrigger.openPanel()); // open the panel
}

closePanel(){
  this.isSelection=false;
  requestAnimationFrame(()=>this.autoCompleteTrigger.closePanel()); // close the panel
}


onProject_updateSupport() {
  const commaSeparatedString =  this.selectedEmpIds.join(', ');

  if (this.selectedEmployees != null) {
    this.service._NewProjectSupportService(this.URL_ProjectCode, this.Current_user_ID,commaSeparatedString, null).subscribe(data => {
      this._Message = data['message'];

      if (this._Message == '2') {
        this.notifyService.showError("Project Support team not updated", "Failed");
      }
      else if (this._Message == '1') {
        this.notifyService.showSuccess("Project Support team updated successfully", "Success");
     
      }
      this.GetPeopleDatils();
      this.selectedEmpIds.length=0;
      this.selectedEmployees.length=0;
      this.closePanel();
    });
  }
  else {
    this.notifyService.showInfo("support team member cannot be empty", "Please try again with correct value");
  }
}

}
