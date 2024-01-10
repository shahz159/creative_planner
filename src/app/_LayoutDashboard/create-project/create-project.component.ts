import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink , ActivatedRoute} from '@angular/router';
import { CreateprojectService } from 'src/app/_Services/createproject.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ProjectMoreDetailsService } from 'src/app/_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service'
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import {DatePipe} from '@angular/common';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';



// import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { CalendarOptions } from '@fullcalendar/angular';
// import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
// import {  DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],

})
export class CreateProjectComponent implements OnInit {
  Current_user_ID:string;
  ProjectDto:ProjectDetailsDTO|undefined;


  Authority_json:any;
  Category_json:any;
  Client_json:any;
  ProjectType_json:any;
  Team_json:any;
  owner_json:any;
  SubmissionType:any
  Responsible_json:any;
  allUser_json:any;




  PrjOwner:string;
  PrjResp:string;
  PrjAuth:string;
  PrjCrdtr:string;
  PrjInformer:string;
  PrjAuditor:string;
  PrjSupport:{Emp_Name:string,Emp_No:string}[]=[];
  todayDate: Date = new Date();





  PrjCode:string|undefined;
  PrjName:string='';
  Prjtype:string;
  PrjOfType:string;
  PrjClient:string;
  PrjDes:string;
  PrjCategory:string;
  PrjVersion:string;
  PrjLocation:string;
  Prjstartdate:any 
  Prjenddate:any 
  Prjduration:number;
  _remarks:string;
  fileAttachment:any;
  prjsubmission:any
  _inputAttachments:any='';



  Daily_array: any = [];
  Week_array: any = [];
  Month_array: any = [];
  Quarter_array: any = [];
  Halfyear_array: any = [];
  Annual_array: any = [];
  Allocated_Hours:any=[]
  Allocated:any
  Annual_date:any
  maxlimit: boolean = true;
  _message: string;
  maxAllocation: number;
  _allocated:any
  maxDate:any
  URL_ProjectCode: any;
  saveAsTemplate:boolean=false;

  constructor(private router: Router,
    private createProjectService:CreateprojectService,
    private datepipe:DatePipe,private notification:NotificationService,
    public BsService: BsServiceService,
    public service: ProjectTypeService,
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    ) {
  }


  ngOnInit(): void {
    this.ProjectDto=new ProjectDetailsDTO();
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.fileAttachment=null;
    this.isFileUploaded=false;
    this.getProjectCreationDetails();
    this.GetAssignedTaskDetails();
   

    this.route.paramMap.subscribe(params => {
      var pcode = params.get('projectcode');
      this.URL_ProjectCode = pcode;
      // this._MasterCode = pcode;
    });

      this.Current_user_ID = localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
      this.activatedRoute.paramMap.subscribe(params => this.URL_ProjectCode = params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
     
  }




  getProjectCreationDetails(){
    this.createProjectService.NewGetProjectCreationDetails().subscribe((res)=>{
      console.log("NewGetProjectCreationDetails:",res);
      if(res)
      {
         this.Authority_json=JSON.parse(res[0].Authority_json);
         this.Category_json=JSON.parse(res[0].Category_json);
         this.Client_json=JSON.parse(res[0].Client_json);
         this.ProjectType_json=JSON.parse(res[0].ProjectType_json);
         this.Responsible_json=JSON.parse(res[0].Responsible_json);
         this.Team_json=JSON.parse(res[0].Team_json);
         this.allUser_json=JSON.parse(res[0].allUser_json);
         this.owner_json=JSON.parse(res[0].owner_json);
          
          this.PrjOwner=this.Responsible_json[0].OwnerEmpNo.trim();
          this.PrjResp=this.Responsible_json[0].ResponsibleNo.trim();
          this.PrjAuth=this.Responsible_json[0].ResponsibleNo.trim();
          this.PrjCrdtr=this.Team_json[0].CoordinatorNo.trim();
          this.PrjInformer=this.Team_json[0].InformerNo.trim();
          this.SubmissionType=JSON.parse(res[0].SubmissionType);
          const defaultvalue=this.allUser_json.find((item)=>{
               return (item.Emp_Name===this.Team_json[0].SupportName&&item.Emp_No===this.Team_json[0].SupportNo);
          })
          this.PrjSupport=defaultvalue?[defaultvalue]:[];

          this.Prjtype=this.ProjectType_json[0].Typeid;  // by default prj type core is selected.
          this.PrjOfType=this.Prjtype==='001'?'Core Tasks':
          this.Prjtype==='002'?'Secondary Tasks':
          this.Prjtype==='003'?'Standard Tasks':
          this.Prjtype==='008'?'Routine Tasks':
          this.Prjtype==='011'?'To do List':'';
      }

     });
  }

  Client:any
  Category_Name:any
  Owner_Name:any
  responsible:any
  projectInfo: any;
  owner_dropdown: any;
  responsible_dropdown: any;
  Category_List: any;
  Client_List: any;





  getAddActionDetails(){
   let Owner=this.owner_json.find((e)=>{
    return e.EmpNo===this.PrjOwner
   })
   let Emp_Name=Owner.EmpName
   let openParenIndex = Emp_Name.indexOf('(');
   this.Owner_Name = Emp_Name.substring(0, openParenIndex).trim();
   
   let res=  this.Responsible_json[0].ResponsibleName
   let openParenIndex_res = res.indexOf('(');
   this.responsible = res.substring(0, openParenIndex_res).trim();

   let Category=this.Category_json.find((e)=>{
    return e.CategoryId===this.PrjCategory
   })
   this.Category_Name=Category.CategoryName

   this.Client=this.PrjClient['$ngOptionLabel']
   this.newProjectDetails('400190693')

  }

  displaymessagemain(){
    this.notifyService.showInfo("Project Owner cannot be changed","Not editable");
  }

  newProjectDetails(prjCode: string,actionIndex:number|undefined=undefined) {
    
    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
      this.projectInfo = JSON.parse(res[0].ProjectInfo_Json)[0];
      console.log('raohan',this.projectInfo)
  })

  this.service.GetRACISandNonRACISEmployeesforMoredetails(prjCode).subscribe(
    (data) => {
      this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
      this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
    });

    this.service.SubTaskDetailsService_ToDo_Page(prjCode, null, this.Current_user_ID).subscribe(
      (data) => {
        this.Client_List = JSON.parse(data[0]['ClientDropdown']);
        this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
        console.log(this.Client_List, "CategoryDropdown");
      });



}

  setMaxAllocation() {

    if(this.Prjstartdate&&this.Prjenddate){
      this.Prjstartdate=new Date(this.Prjstartdate);
      this.Prjenddate=new Date(this.Prjenddate);
      const dffinsec=this.Prjstartdate.getTime()-this.Prjenddate.getTime()
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxAllocation=(Difference_In_Days+1)*9;
    }
    else
    this._message = "Start Date/End date missing!!"

  }


  setMaxDate(){
    const d=new Date(this.Prjstartdate);
    d.setDate(d.getDate()+2);
    this.maxDate=d;

  }




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

  timearrays() {
    this.Daily_array = this.generateTimeIntervals(4, 15, 1);
    this.Week_array = this.generateTimeIntervals(8, 15, 2);
    this.Month_array = this.generateTimeIntervals(16, 15, 4);
    this.Quarter_array = this.generateTimeIntervals(32, 15, 8);
    this.Halfyear_array = this.generateTimeIntervals(40, 15, 10);
    this.Annual_array = this.generateTimeIntervals(64, 15, 16);
  }














 createProject(){
   

   const d=new Date();
   d.setFullYear(d.getFullYear()+2);
   const enddateofRS=d;

  const projectInfo={
        ProjectType:this.Prjtype,
        Client:this.PrjClient,
        ProjectName:this.PrjName,
        Description:this.PrjDes,
        Category:this.PrjCategory,
        StartDate:['003','008'].includes(this.Prjtype)?this.datepipe.transform(new Date(),'dd-MM-YYYY'):this.datepipe.transform(this.Prjstartdate,'dd-MM-YYYY'),
        EndDate:['003','008'].includes(this.Prjtype)?this.datepipe.transform(enddateofRS,'dd-MM-YYYY'):this.datepipe.transform(this.Prjenddate,'dd-MM-YYYY'),
        Owner:this.PrjOwner,
        Responsible:this.PrjResp,
        Authority:this.PrjAuth,
        Coordinator:this.PrjCrdtr,
        Informer:this.PrjInformer,
        Auditor:this.PrjAuditor,
        Support:this.PrjSupport.map(item=>+item.Emp_No.trim()).join(','),
        SubmissionType:['003','008'].includes(this.Prjtype)?this.prjsubmission:'0',
        Duration:['001','002','011'].includes(this.Prjtype)?this._allocated:'0',
        DurationTime:['003','008'].includes(this.Prjtype)?this.Allocated_Hours:'0',
        Recurrence:['001','002','011'].includes(this.Prjtype)?'0':(this.prjsubmission==6?this.Annual_date:'-1'),
        Remarks:this._remarks
  };
  console.log("PRJ INFORMATION :",projectInfo);
  this.ProjectDto.Status=JSON.stringify(projectInfo);
  this.ProjectDto.Emp_No=localStorage.getItem('EmpNo');
  this.ProjectDto.isTemplate=this.saveAsTemplate;
  
  //1. creating project
  this.createProjectService.NewInsertNewProject(this.ProjectDto).subscribe((res:any)=>{
  
        console.log("res after project creation:",res);

        if(res&&res.message==='Success'){
            this.PrjCode=res.Project_Code;
            this.notification.showSuccess(this.PrjName+" Successfully created.","Project Created");
            //2. file attachment uploading  if present
            if(this.fileAttachment)
            this.uploadFileAttachment()

            // 3. Move to next step
            if(this.Prjtype==='001'||this.Prjtype==='002')
            {    // when core, secondary
              this.Move_to_Add_action_tab();
            }
          
        }
        else if(res&&res.message==='Success1'){
          this.PrjCode=res.Project_Code;
            this.notification.showSuccess(this.PrjName+" Successfully created.","Project Created and Submitted to the Project Owner :"+this.owner_json.find((ow)=>ow.EmpNo==this.PrjOwner)?.EmpName);
            //2. file attachment uploading  if present
            if(this.fileAttachment)
            this.uploadFileAttachment()

              this.router.navigate(['./backend/ProjectsSummary']);
              this.closeInfo()

        }
        else
        {
          this.notification.showError("Unable to create Project","Project Creation Failed");
        }


  });
 }


 uploadFileAttachment(){
           const fd=new FormData();
           fd.append('Project_Code',this.PrjCode);
           fd.append('Project_Name',this.PrjName);
           fd.append('Emp_No',this.Current_user_ID);
           fd.append('file',this.fileAttachment);
           fd.append('Remarks',this._remarks);
           this.createProjectService.NewUpdateFileUploadsByProjectCode(fd).subscribe((fres:any)=>{
            console.log("file attachment:",fres)
            if(fres&&fres.Message==='Success'){
              this.notification.showSuccess('Successfully uploaded the File attachment.','File Attachment Uploaded.');
              this.isFileUploaded=true;
            }
            else{
               this.notification.showError('Unable to upload the File Attachment','File Uploading Failed');
               this.isFileUploaded=false;
            }
        });
 }


 onFileChanged(e:any){
   this.fileAttachment=e.target.files[0];
   e.target.value=null;
 }

  Action_view(){
    document.getElementsByClassName("Adv-option")[0].classList.add("d-none");
    document.getElementsByClassName("Adv-option")[1].classList.add("d-none");
    document.getElementsByClassName("act-view-btns")[0].classList.remove("d-none");
    document.getElementsByClassName("my-crd")[0].classList.remove("d-none");
    document.getElementById("bc_pot").style.display = "block";
  }




  Back_Option(){

    document.getElementsByClassName("Adv-option")[0].classList.remove("d-none");
    document.getElementsByClassName("Adv-option")[1].classList.remove("d-none");
    document.getElementsByClassName("act-view-btns")[0].classList.add("d-none");
    document.getElementsByClassName("my-crd")[0].classList.add("d-none");
    document.getElementById("bc_pot").style.display = "none";
  }
  APPV_view(){
    document.getElementsByClassName("kt-assd-pds")[0].classList.add("d-none");
    document.getElementsByClassName("kt-prd-dtl")[0].classList.remove("d-none");
  }
  Add_actions(){
    document.getElementsByClassName("Add-Act-Move")[0].classList.add("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container");
    document.getElementsByClassName("kt-action-list")[1].classList.remove("d-none");
    document.getElementsByClassName("open-Action-Form")[0].classList.remove("d-none");
    document.getElementsByClassName("kt-portlet__foot")[1].classList.remove("d-none");
    document.getElementById("Action_btn_hide").style.display = "None";
    document.getElementsByClassName("add-w9")[0].classList.add("col-lg-7");
     document.getElementsByClassName("Add-Act-Move")[1].classList.remove("VW_60");
     document.getElementsByClassName("hide-act-btns")[0].classList.remove("d-none");
     document.getElementsByClassName("Project-Ct-full")[0].classList.remove("col-lg-12");
     $('.Add-Act-Move').addClass('container-fluid');
     $('.Add-Act-Move').removeClass('container');
     $('#act_bd_box').addClass('d-none');
     $('.kt-portlet__body').addClass('add-vhd-h');
  }
  Back_Option_Act(){
    document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[0].classList.add("container");
    document.getElementsByClassName("kt-action-list")[1].classList.add("d-none");
    document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
    document.getElementsByClassName("kt-portlet__foot")[1].classList.add("d-none");
    document.getElementById("Action_btn_hide").style.display = "block";
    document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
    $('#act_bd_box').addClass('d-none');
    $('.kt-portlet__body').removeClass('add-vhd-h');
  }
  Close_action(){
    // $('#act_bd_box').show();
    // document.getElementById("act_bd_box").style.display="block";
    $('#act_bd_box').removeClass('d-none');

    document.getElementById("act_bd_box").classList.remove("d-none");
    document.getElementsByClassName("Add-Act-Move")[1].classList.remove("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[1].classList.add("container");
    document.getElementsByClassName("Add-Act-Move")[1].classList.add("VW_60");
    document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
    document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
    document.getElementsByClassName("hide-act-btns")[0].classList.add("d-none");
    document.getElementsByClassName("Project-Ct-full")[0].classList.add("col-lg-12");
    document.getElementsByClassName("Project-Ct-full")[1].classList.remove("col-lg-7");
  }


  closeInfos(){
    document.getElementById("Project_Details_Edit_forms").classList.remove("kt-quick-Project_edit_form--on");
  }

  closeInfo() {

    document.getElementById("New_project_Add").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay-create").style.display = "none";
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["/backend/ProjectsSummary/"]);
  }

  Scratech_btn(){
    $('.Assigned-projects-list').addClass('d-none');
    $('.Templates-list').addClass('d-none');
    $('.np-step-1').removeClass('d-none');
    $('.np-step-2').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }

  back_to_options(){
    $('.np-step-1').removeClass('d-none');
    $('.np-step-2').addClass('d-none');
    $('.Assigned-projects-list').addClass('d-none');
    $('.Templates-list').addClass('d-none');
  }

  Assigned_projects(){
    $('.Assigned-projects-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }

  templateProjects(){
    $('.Templates-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }


  Move_to_add_team(){
    $('.right-side-dv').removeClass('d-none');
    $('.add_tema_tab').show();
    $('.Project_details_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').addClass('active');
    this.getAddActionDetails()
  }

  Back_to_project_details_tab(){
    $('.right-side-dv').addClass('d-none');
    $('.Project_details_tab').show();
    $('.add_tema_tab').hide();

    $('.sbs--basic .active').removeClass('finished');
    $('.sbs--basic li').addClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }


  Move_to_Add_action_tab(){
    $('.action-left-view').removeClass('d-none');
    $('.Add_action_tab').show();
    $('.Project_details_tab,.add_tema_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(3)').addClass('active'); 
  }

  back_to_add_team(){
    $('.action-left-view').addClass('d-none');
    $('.right-side-dv').show();
    $('.Project_details_tab,.Add_action_tab').hide();
    $('.add_tema_tab').show();

    $('.sbs--basic .active').remove('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('finished');
    $('.sbs--basic li:nth-child(2)').addClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }




// add Prj support mat autocomplete drpdwn code start here
@ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
isPrjSprtDrpDwnOpen:boolean=false;


  openPrjSprtDrpDwn(){
    this.isPrjSprtDrpDwnOpen = true;
    requestAnimationFrame(() => this.customTrigger.openPanel()); // open the panel
  }

  closePrjSprtDrpDwn(){
    this.isPrjSprtDrpDwnOpen = false;
    requestAnimationFrame(() => this.customTrigger.closePanel()); // close the panel
  }

  onPrjSprtSelected(e:any){

    const sprtChoosed=this.allUser_json.find((p:any)=>p.Emp_No===e.option.value);
    if(sprtChoosed){
         const index=this.PrjSupport.indexOf(sprtChoosed);
         if(index===-1){
            // if not present then add it
            this.PrjSupport.push(sprtChoosed);
         }
         else{ //  if item choosed is already selected then remove it.
          this.PrjSupport.splice(index,1);
         }
    }
    this.openPrjSprtDrpDwn();
  }

  removeSelectedPrjSprt(sprt:{Emp_No:string,Emp_Name:string}){
    const index=this.PrjSupport.indexOf(sprt);
    if(index!==-1){
      this.PrjSupport.splice(index,1);
    }
  }

// add Prj support mat autocomplete drpdwn code end here




// responsible field start
onResponsibleChanged(){
  if(this.PrjResp.trim()===this.PrjOwner.trim())
  {
    const selectedowr=this.owner_json.find((item)=>item.EmpNo===this.PrjOwner);
    const newowr=this.owner_json[this.owner_json.indexOf(selectedowr)+1];
    this.PrjOwner=newowr.EmpNo;
  }
  this.PrjAuth=this.Responsible_json[0].ResponsibleNo;

}

onProjectOwnerChanged(){
  if(this.PrjOwner.trim()===this.PrjResp.trim())
  {
    this.PrjResp=this.Responsible_json[0].ResponsibleNo;
  }
}

// responsible field end







  /////////////////////////////////////////assign task start/////////////////////////////
  rejectm:any

  assigntask_json:any;
  template_json:any;

  GetAssignedTaskDetails(){
    this.createProjectService.NewGetAssignedTaskDetails().subscribe
    ((res)=>{
      this.assigntask_json=JSON.parse(res[0].Assigntask_json);
      this.template_json=JSON.parse(res[0].templates_json);
      console.log("template_json:",this.template_json);
      console.log('assigntask_json:',this.assigntask_json);
    });
  }

  notifyAssign(){
    this.notification.showInfo("You don't have any assigned project", "Please add a project!");

  }


  bind_Project:any
  start_Date:any
  date_str:any
  duration:any
  end_Date:any
  date_End:any
  task_Name:any
  CreateName:any
  unique_id:number
  projectType:any
  // allocated:any

  onButtonClick(value:any,id:number){
    this.bind_Project = [value]
    this.duration=this.bind_Project[0].Duration;
    this.date_str = moment(this.bind_Project[0].Start_Date).format("MM/DD/YYYY");
    this.date_End = moment(this.bind_Project[0].End_Date).format("MM/DD/YYYY");
    this.task_Name=this.bind_Project[0].Task_Name;
    this.CreateName=this.bind_Project[0].Created_Name;
    this.unique_id=id;
    this.Prjtype=this.bind_Project[0].Project_Type;
  }

   


  openTemplate(template:any){
      console.log("template:",template);
      this.projectMoreDetailsService.getProjectMoreDetails(template.Project_Code).subscribe((res:any)=>{
        const PInfo=JSON.parse(res[0].ProjectInfo_Json)[0];
        console.log(PInfo);
       

       this.PrjOfType=PInfo.Project_Type;
       this.Prjtype=this.ProjectType_json.find((item)=>item.ProjectType.trim()===this.PrjOfType.trim()).Typeid;
       this.PrjClient=PInfo.ClientNo;
       this.PrjName=PInfo.Project_Name;
       this.PrjDes=PInfo.Project_Description;
       this.PrjCategory=this.Category_json.find((item)=>item.CategoryName.trim()===PInfo.Category).CategoryId;
       this._allocated=PInfo.AllocatedHours;
      //  this.fileAttachment=new File()
       





      })
      
  }


   /////////////////////////////////////////assign task End/////////////////////////////

  /////////////////////////////////////////add Project End/////////////////////////////


  showSideBar() {
   
    this.BsService.SetNewPojectCode(this.PrjCode);
    this.router.navigate(["./backend/ProjectsSummary/createproject/ActionToProject/5"]);
    document.getElementById("mysideInfobar12").classList.add("kt-action-panel--on");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("rightbar-overlay-create").style.display = "block";
    $("#mysideInfobar12").scrollTop(0);
  }
  /////////////////////////////////////////add Project End/////////////////////////////

   ///////////////////////////////////////// Project Edit start /////////////////////////////


  Project_details_edit() {
    document.getElementById("Project_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#mysideInfobar12").scrollTop(0);
  //  this.getResponsibleActions();
  //  this.initializeSelectedValue()
  }

 ///////////////////////////////////////// Project Edit End /////////////////////////////


// file reupload start here
isFileUploaded:boolean=false;
openFileReupload(){
   $('#file-reupload-section').removeClass('d-none');
}


// file reupload end here



// action add in step3 code start
PrjActionsInfo:any=[];
currentActionView:number|undefined;
getActionsDetails(){
  this.projectMoreDetailsService.getProjectMoreDetails(this.PrjCode).subscribe((res)=>{
    this.PrjActionsInfo = JSON.parse(res[0].Action_Json);
  });
}


showActionDetails(index: number | undefined) {
  this.currentActionView = index;
}

// action add in step3 code end







// send prj to project owner for approval start
sendApproval(){
  this.ProjectDto.Emp_No=this.Current_user_ID;
  this.ProjectDto.isTemplate=this.saveAsTemplate;
  this.ProjectDto.Project_Code=this.PrjCode;
  this.ProjectDto.Remarks=this._remarks;
  this.createProjectService.NewUpdateNewProjectApproval(this.ProjectDto).subscribe((res:any)=>{
     if(res&&res.message==='Success'){
           this.notification.showSuccess("Project is send to Project Owner :"+this.owner_json.find((item)=>item.EmpNo==this.PrjOwner).EmpName+' for Approval',"Success");
           this.router.navigate(['./backend/ProjectsSummary']);
           this.closeInfo();
      }
     else{
        this.notification.showError('something went wrong!','Failed');
     }

 })
}
// send prj to project owner for approval end



// remove assigned/conditional project start
removeACPrj(index:number){
  // Emp_No, assignid ,Remarks
  this.ProjectDto.Emp_No=this.Current_user_ID;
  this.ProjectDto.assignid=+this.assigntask_json[index-1].Assign_Id;
  this.ProjectDto.Remarks=' sample testing remarks';
  // this.ProjectDto.assignid=
  this.createProjectService.NewDeleteRejectAssignTask(this.ProjectDto).subscribe((res:any)=>{
  
        if(res&&res.message==='Success'){
             this.notification.showSuccess(this.assigntask_json[index].Task_Name+" removed","Success");
             this.GetAssignedTaskDetails();
             document.getElementById('ACPrjRemovalbtn').click();
        }
        else{
           this.notification.showError("Something went wrong!","Failed");
        }
  });
}
// remove assigned/conditional project end


// delete template code start
onTmpRmvDialogOpen(index:number){
  Swal.fire({
    title: this.template_json[index].Project_Name,
    text: 'Delete template permanently?',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel'
  })
    .then((option) => {
      if (option.isConfirmed) {   // user said yes to add new action into a project which is already completed.
        this.removeTemplate(this.template_json[index].Project_Code);
      }
      else {
        // when the user said no
        Swal.fire(
          'Cancelled',
          'Template Undisturbed',
          'error'
        )
      }
    })
    .catch(e => console.log(e));
}

removeTemplate(templateCode:string){
  this.ProjectDto.Project_Code=templateCode;
  this.createProjectService.NewDeleteProjectTemplate(this.ProjectDto).subscribe((res:any)=>{
        if(res&&res.message==='Success'){
               this.notification.showSuccess('Template deleted.','Success');
               this.GetAssignedTaskDetails();
        }
        else{
                this.notification.showError('Something went Wrong!','Failed');
        }
  });
}
// delete template code end



}
