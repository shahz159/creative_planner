import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  Current_user_ID: string;
  Current_user_Groups:any=[];
  approvalObj: ApprovalDTO;
  newGroupName:string;
  groupNameInvalid:boolean=false;
  groupNameAlreadyExists:boolean=false;
  hideActionBtns:boolean=false;
  selectedGroupId:number;
  selectedGroupDetails:any;
  autoOpenFirstGroup:EventEmitter<boolean>;
  noGroupsAvailable:boolean=false;

  
  constructor(
    private service:ProjectTypeService,
    private notifyService: NotificationService,
  ){
    this.approvalObj = new ApprovalDTO();
  }

  ngOnInit(): void {
      this.Current_user_ID = localStorage.getItem('EmpNo');
      this.getUser_StreamGroups();   // fetches all stream groups of the current user. 
      // auto open first group
      this.autoOpenFirstGroup=new EventEmitter<boolean>();  
      this.autoOpenFirstGroup.subscribe((isNoError:boolean)=>{
         if(isNoError){
            this.onGroupClicked(this.Current_user_Groups[0].gid);
         }
         this.autoOpenFirstGroup.unsubscribe();
         this.autoOpenFirstGroup=null;
      });
      //
  }


  //  if(this.Current_user_Groups.length>0){
  //          this.onGroupClicked(this.Current_user_Groups[0].gid); 
  //       }


  getUser_StreamGroups(){   
     const empNo=this.Current_user_ID;
     this.service.NewGetGroups(empNo).subscribe((res:any)=>{   console.log('Current_user_Groups res:',res);   
      if(res&&res.groupList){
        this.Current_user_Groups=JSON.parse(res.groupList);
        this.noGroupsAvailable=!(this.Current_user_Groups&&this.Current_user_Groups.length>0);
      }
       
      if(this.autoOpenFirstGroup){  
         this.autoOpenFirstGroup.emit(res&&res.groupList); 
      }
      
     });
  }


  createNewGroup(){   

      const groupName=this.newGroupName;

      this.approvalObj.Emp_No=this.Current_user_ID;
      this.approvalObj.groupName=groupName;
      this.approvalObj.type='1';
      this.approvalObj.gid=null;

      this.service.NewCreateEditGroup(this.approvalObj).subscribe((res:any)=>{  console.log('create new group res:',res);
       if(res&&res.message == 1){
          this.notifyService.showSuccess(`Group '${groupName}' created successfully.`,'Success');
          this.getUser_StreamGroups();  // rebind groups
          document.getElementById('close-grp-drpdwn-btn')?.click();  // to close dropdown and clear input data.
       }
       else{
          this.notifyService.showError('Unable to create group.','Failed');
       }
      });
  }


  onAddNewGroupBtnClicked(){  debugger
      
      this.groupNameAlreadyExists=this.isGroupNameTaken(this.newGroupName);

      if(this.newGroupName&&this.newGroupName.trim()&&this.groupNameAlreadyExists==false){
         this.groupNameInvalid=false;
         this.createNewGroup();
      }
      else{
         this.groupNameInvalid=true;
      }
  }


  onCloseNewGroupDialog(){
     this.groupNameInvalid=false;
     this.newGroupName='';
  }

  
  isGroupNameTaken(groupName:string):boolean{
    let isNameTaken=false;
     if(groupName&&groupName.trim()){
       isNameTaken=this.Current_user_Groups.some((_group)=>{  
             return _group.groupname?(_group.groupname.trim().toLowerCase()==groupName.trim().toLocaleLowerCase()):false;
        });  
     } 
     return isNameTaken;
  }


  newGroupNameTxt:string='';
  onGroupNameEditClicked(groupId,groupName){
    (<HTMLInputElement>document.getElementById('grp-name-editbox-'+groupId)).style.display = "block";
    (<HTMLInputElement>document.getElementById('grp-name-label-'+groupId)).style.display = "none";
    this.newGroupNameTxt=groupName;
    this.hideActionBtns=true; 
  }


  onGroupNameEditCancel(groupId){
    (<HTMLInputElement>document.getElementById('grp-name-editbox-'+groupId)).style.display = "none";
    (<HTMLInputElement>document.getElementById('grp-name-label-'+groupId)).style.display = "block";
    this.hideActionBtns=false;
  }

  


  submitGroupNewName(groupId:number){ debugger
    
    this.approvalObj.Emp_No=this.Current_user_ID;
    this.approvalObj.groupName=this.newGroupNameTxt;
    this.approvalObj.type='2';
    this.approvalObj.gid=groupId;

     this.service.NewCreateEditGroup(this.approvalObj).subscribe((res:any)=>{
      if(res&&res.message==1){
          this.notifyService.showSuccess(`Updated group name successfully.`,'Success');
          this.getUser_StreamGroups();  // rebind groups 
          this.onGroupNameEditCancel(groupId);  // hide edit text box.
          
      }
      else{
          this.notifyService.showError('Unable to update group name.','Failed');
      }
     });
  }


  onGroupDeleteClicked(groupId:number,groupName:string){

     Swal.fire({
        title:'Confirm Deletion',
        html:`<div>Are you sure you want to delete "<b>${groupName}</b>"? This action cannot be undone.</div>`,
        showCancelButton:true,
        showConfirmButton:true,
        confirmButtonText:'Delete',
        cancelButtonText:'Cancel'
     }).then((choice)=>{
        if(choice.isConfirmed){

          this.approvalObj.Emp_No = this.Current_user_ID;
          this.approvalObj.gid = groupId;
          this.service.NewDeleteGroup(this.approvalObj).subscribe((res: any) => {
            if (res && res.message == 1) {
              this.notifyService.showSuccess(`Group '${groupName}' deleted successfully. `, 'Success');
              this.getUser_StreamGroups();  // rebind groups 
              

              
            }
            else {
              this.notifyService.showError('Unable to delete the group.', 'Failed');
            }
          });

        }

     })


  }


  onGroupClicked(groupId:number){
    this.selectedGroupId=groupId;
    this.getGroupDetailsById(this.selectedGroupId);
  }


  getGroupDetailsById(groupId:number){
     const empNo=this.Current_user_ID;
     const gid=groupId;
     this.service.NewGetGroupDetails(empNo,gid).subscribe((res:any)=>{     console.log('group details by gid :',res);
      if(res){
         const resarr=JSON.parse(res.groupdetails);
         this.selectedGroupDetails=resarr[0];  console.log('selectedgroupdetails:',this.selectedGroupDetails);
      }
     });
  }
  
 
  openProject(projectCode:string){

    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${projectCode}`;
    var myWindow = window.open(myurl,projectCode);
    myWindow?.focus();
  }

  openPortfolio(portfolioId:any){
   // http://localhost:4200/portfolioprojects/3489
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${portfolioId}`;
    var myWindow = window.open(myurl,portfolioId);
    myWindow?.focus();
  }


  openMeeting(scheduleId:any){
   // http://localhost:4200/Meeting-Details/516191
    let name: string = 'Meeting-Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${scheduleId}`;
    var myWindow = window.open(myurl,scheduleId);
    myWindow?.focus();
  }






}
