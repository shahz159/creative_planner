import { AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, OnInit, } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectMoreDetailsService } from '../../../_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LinkService } from 'src/app/_Services/link.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';

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
  memoOptions:any;


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
  selectedMemos:{MailId:number,Subject:string}[]=new Array();  // an array of size zero.


 


  constructor(
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bsService:BsServiceService,
    public _LinkService: LinkService,
    private notifyService: NotificationService,
    private dialog: MatDialog,
    ) { }
  
  
  
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




























}
