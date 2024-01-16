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
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';



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
  approvalObj: ApprovalDTO;

  constructor(private router: Router,
    private createProjectService:CreateprojectService,
    private datepipe:DatePipe,private notification:NotificationService,
    public BsService: BsServiceService,
    public service: ProjectTypeService,
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    public approvalservice: ApprovalsService,
    ) {
      this.approvalObj = new ApprovalDTO();
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



  Project_Type:any
  
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

          this.Prjtype=this.ProjectType_json[0].Typeid;// by default prj type core is selected.
          this.Project_Type=this.ProjectType_json[0].ProjectType;
          this.PrjOfType=this.Prjtype==='001'?'Core Tasks':
          this.Prjtype==='002'?'Secondary Tasks':
          this.Prjtype==='003'?'Standard Tasks':
          this.Prjtype==='008'?'Routine Tasks':
          this.Prjtype==='011'?'To do List':'';
      }
      this.getFindName()
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
  ProjectType:any






  getFindName(){
   let Owner=this.owner_json.find((e)=>{
    return e.EmpNo===this.PrjOwner
      })
   let Emp_Name=Owner.EmpName
   let openParenIndex = Emp_Name.indexOf('(');
   this.Owner_Name = Emp_Name.substring(0, openParenIndex).trim();
   
   let res= this.Responsible_json[0].ResponsibleName
   let openParenIndex_res = res.indexOf('(');
   this.responsible = res.substring(0, openParenIndex_res).trim();
  
  }


  projectTypes:any
  durationInDays:any

  findProjectType(){
    let projectType=this.ProjectType_json.find((e)=>{
      return e.Typeid===this.Prjtype
        })
      this.projectTypes= projectType.ProjectType
      var startDate = moment(this.Prjstartdate);
      var endDate = moment(this.Prjenddate);
      this.durationInDays = endDate.diff(startDate, 'days');

      console.log('Duration in days:', this.durationInDays);
     
  }







  getAddActionDetails(){
  //  let Owner=this.owner_json.find((e)=>{
  //   return e.EmpNo===this.PrjOwner
  //  })
  //  let Emp_Name=Owner.EmpName
  //  let openParenIndex = Emp_Name.indexOf('(');
  //  this.Owner_Name = Emp_Name.substring(0, openParenIndex).trim();
   
  //  let res=  this.Responsible_json[0].ResponsibleName
  //  let openParenIndex_res = res.indexOf('(');
  //  this.responsible = res.substring(0, openParenIndex_res).trim();

  //  let Category=this.Category_json.find((e)=>{
  //   return e.CategoryId===this.PrjCategory
  //  })
  //  this.Category_Name=Category.CategoryName

  //  this.Client=this.PrjClient;
   this.newProjectDetails(this.PrjCode);
  }

  displaymessagemain(){
    this.notifyService.showInfo("Project Owner cannot be changed","Not editable");
  }

  newProjectDetails(prjCode: string,actionIndex:number|undefined=undefined) {
    
    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
      this.projectInfo = JSON.parse(res[0].ProjectInfo_Json)[0];
       this.ProjectType = this.projectInfo.Project_Type;
      console.log(this.projectInfo, "projectInfo");
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
   debugger

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
  //1. creating project
  this.createProjectService.NewInsertNewProject(this.ProjectDto).subscribe((res:any)=>{
    debugger
        console.log("res after project creation:",res);

        if(res&&res.message==='Success'){
            this.PrjCode=res.Project_Code;
            this.getAddActionDetails();

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
    $('.np-step-1').removeClass('d-none');
    $('.np-step-2').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }

  back_to_options(){
    $('.np-step-1').removeClass('d-none');
    $('.np-step-2').addClass('d-none');
    $('.Assigned-projects-list').addClass('d-none');
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

    this.findProjectType()
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
  conditional_List:any
  assigntask_json:any


  GetAssignedTaskDetails(){

    this.createProjectService.NewGetAssignedTaskDetails().subscribe
    ((res)=>{  
      this.assigntask_json=JSON.parse(res[0].Assigntask_json)
      this.conditional_List=JSON.parse(res[0].conditional_json)
      console.log(this.assigntask_json,'--------------->')
 })
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
    this._allocated=this.bind_Project[0].Duration
    this.Prjstartdate=this.bind_Project[0].Start_Date
    this.date_str = moment(this.start_Date).format("MM/DD/YYYY");
    this.Prjenddate=this.bind_Project[0].End_Date
    this.date_End = moment(this.end_Date).format("MM/DD/YYYY");
    this.PrjName=this.bind_Project[0].Task_Name;
    this.PrjDes=this.bind_Project[0].Task_Description;
    this.CreateName=this.bind_Project[0].Created_Name
    this.unique_id=id
    this.Prjtype=this.bind_Project[0].Project_Type;
    if(this.Prjtype==''){
      this.Prjtype='001';
    }
    // this.PrjOfType=this.Prjtype==='001'?'Core Tasks':
    //       this.Prjtype==='002'?'Secondary Tasks':
    //       this.Prjtype==='003'?'Standard Tasks':
    //       this.Prjtype==='008'?'Routine Tasks':
    //       this.Prjtype==='011'?'To do List':'';
  }
  conditionalList:any

  getConditional(value:any){
    console.log(value,'========>')
    this.conditionalList = [value]
    this.PrjName=this.conditionalList[0].Project_Name;
    this.Prjstartdate=this.conditionalList[0].DPG;
    this.Prjenddate=this.conditionalList[0].DeadLine;
    this.PrjDes=this.conditionalList[0].Project_Description;
    this.Prjtype=this.conditionalList[0].ProjectType;
    console.log(this.Prjtype,'+++++++++++>')

    
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
   this.initializeSelectedValue()
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






// Project Edit Start
// OGProjectTypeid:any
// OGProjectType:any
// ProjectName:any
// OGownerid:any
// OGowner:any
// OGresponsibleid:any
// OGresponsible:any
// OGselectedcategoryid:any
// OGcategory:any
// OGselectedclientid:any
// OGclient:any
// Remarks:any
// Allocateds:any




selectedOwner: any;
//ProjectType: string
ProjectDescription: string
Start_Date: string;
OGowner: any;
OGresponsible: any;
OGownerid: any;
OGresponsibleid: any;
OGclientId: any;
Submission_Name: string
End_Date: any
OGselectedcategoryid: any
OGcategory: any
OGselectedclientid: any
OGclient: any;
OGSubmission_Nameid: any
OGSubmission: any;
OGProjectType: any;
ProjectName: string;
OGProjectTypeid: any
selectedOwnResp:any
selectedcategory:any
selectedclient:any




initializeSelectedValue() {
    // this.OGProjectTypeid=this.ProjectType_json[0].Typeid
    // this.OGProjectType = this.ProjectType_json[0].ProjectType;
    // this.ProjectName = this.PrjName;
    // this.OGownerid = this.owner_dropdown[0].Emp_No
    // this.OGowner = this.owner_dropdown[0].RACIS;
    // this.OGresponsibleid = this.responsible_dropdown[0].Emp_No
    // this.OGresponsible = this.responsible_dropdown[0].RACIS;
    // this.OGselectedcategoryid = this.Category_List[0].ReportID;
    // this.OGcategory = this.Category_List[0].ReportType;
    // this.OGselectedclientid = this.Client_List[0].Com_No
    // this.OGclient = this.Client_List[0].Com_Name  
    // this.ProjectDescription = this.projectInfo.Project_Description

    this.OGownerid = this.projectInfo['OwnerEmpNo'];
    this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];
    this.OGselectedcategoryid = this.projectInfo['Reportid'];
    this.OGselectedclientid = this.projectInfo['ClientNo'];
    this.OGSubmission_Nameid = this.projectInfo['SubmissionId'];
    this.OGProjectTypeid = this.projectInfo['Project_Block'];
    // console.log("test",this.OGProjectTypeid)
    this.OGProjectType = this.projectInfo.Project_Type;
    this.selectedOwner = this.projectInfo.Owner;
    this.OGowner = this.projectInfo.Owner;
    this.selectedOwnResp = this.projectInfo.Responsible;
    this.OGresponsible = this.projectInfo.Responsible;
    this.selectedcategory = this.projectInfo.Category;
    this.OGcategory = this.projectInfo.Category;
    this.selectedclient = this.projectInfo.Client;
    this.OGclient = this.projectInfo.Client
    this.Submission_Name = this.projectInfo.SubmissionName
    this.OGSubmission = this.projectInfo.SubmissionName
    this.ProjectName = this.projectInfo.Project_Name
    this.ProjectDescription = this.projectInfo.Project_Description
    this.Start_Date = this.projectInfo.StartDate
    this.Allocated_Hours = this.projectInfo.StandardAllocatedHours
    this.Allocated = this.projectInfo.AllocatedHours
    this.End_Date = this.projectInfo.EndDate;
 
}

projectEdit(val) {

  // if (this.OGProjectType != this.Prjtype) {
  //   var type = this.Prjtype
  //   this.Prjtype = this.Prjtype;
  // }
  // else {
  //   var type: string = this.OGProjectTypeid;
  // }

  // if (this.OGowner != this.Owner_Name) {
  //   var owner = this.Owner_Name
  //   this.Owner_Name = this.Owner_Name;
  // }
  // else {
  //   var owner = this.OGownerid;
    
  // }

  // if (this.OGresponsible != this.responsible) {
  //   var resp = this.responsible;
  //   this.responsible = this.responsible;
  // }
  // else {
  //   var resp = this.OGresponsibleid;
  // }

  // if (this.OGcategory != this.Category_Name) {
  //   var category = this.Category_Name;
  //   this.Category_Name = this.Category_Name;
  // }
  // else {
  //   var category = this.OGselectedcategoryid;
  // }

  // if (this.OGclient != this.Client) {
  //   var client = this.Client;
  //   this.Client = this.Client;
  // }
  // else {
  //   var client: any = this.OGselectedclientid;
  // }
  

  

  //  var Remark= this.Remarks
  //  var datestrStart = moment(this.Prjstartdate).format("MM/DD/YYYY");
  //  var datestrEnd = moment(this.Prjenddate).format("MM/DD/YYYY");


  this._remarks = '';
  if (this.OGProjectType != this.ProjectType) {
    var type = this.ProjectType
    this.ProjectType = this.ProjectType;
  }
  else {
    var type: any = this.OGProjectTypeid;
  }

  if (this.OGowner != this.selectedOwner) {
    var owner = this.selectedOwner
    this.selectedOwner = this.selectedOwner;
  }
  else {
    var owner = this.OGownerid;
  }

  if (this.OGresponsible != this.selectedOwnResp) {
    var resp = this.selectedOwnResp;
    this.selectedOwnResp = this.selectedOwnResp;
  }
  else {
    var resp = this.OGresponsibleid;
  }

  if (this.OGcategory != this.selectedcategory) {
    var category = this.selectedcategory;
    this.selectedcategory = this.selectedcategory;
  }
  else {
    var category = this.OGselectedcategoryid;
  }

  if (this.OGclient != this.selectedclient) {
    var client = this.selectedclient;
    this.selectedclient = this.selectedclient;
  }
  else {
    var client: any = this.OGselectedclientid;
  }

  if (this.OGSubmission != this.Submission_Name) {
    var Submission = this.Submission_Name;
    this.Submission_Name = this.Submission_Name;
  }
  else {
    var Submission: string = this.OGSubmission_Nameid;
  }

  if (this.OGSubmission != this.Submission_Name) {
    var Submission = this.Submission_Name;
    this.Submission_Name = this.Submission_Name;
  }
  else {
    var Submission: string = this.OGSubmission_Nameid;
  }

 
    var allocation = this.Allocated;
  

  var datestrStart = moment(this.Start_Date).format("MM/DD/YYYY");
  var datestrEnd = moment(this.End_Date).format("MM/DD/YYYY");

  const jsonobj = {
    Project_Type: type,
    Project_Name: this.ProjectName,
    Project_Description: this.ProjectDescription,
    Owner: owner,
    Responsible: resp,
    Category: category,
    Client: client,
    StartDate: datestrStart,
    EndDate: datestrEnd,
    SubmissionName: Submission,
    AllocatedHours: allocation
  }
  const jsonvalue = JSON.stringify(jsonobj)
  console.log(jsonvalue, 'json');

  if (val == 0) {
    debugger
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Project_Code = this.PrjCode;
    this.approvalObj.json = jsonvalue;
    //this.approvalObj.Remarks = this._remarks;
    this.approvalObj.isApproval = val;
    this.getAddActionDetails();

    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
      console.log(data['message'], "edit response");
      if (data['message'] == '1') {
        this.notifyService.showSuccess("Updated successfully", "Success");
      }
      else if (data['message'] == '2') {
        this.notifyService.showError("Not updated", "Failed");
      }
      else if (data['message'] == '5') {
        this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===resp))[0]["RACIS"], "Updated successfully");
      }
      else if (data['message'] == '6') {
        this.notifyService.showSuccess("Updated successfully"+"Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
      }
      else if (data['message'] == '8') {
        this.notifyService.showError("Selected Project owner cannot be updated", "Not updated");
      }
      //this.getProjectDetails(this.URL_ProjectCode);
      // this.closeInfo();
    });
  }
  // else if (val == 1) {
  //   this.approvalObj.Emp_no = this.Current_user_ID;
  //   this.approvalObj.Project_Code = this.PrjCode;
  //   this.approvalObj.json = jsonvalue;
  //   this.approvalObj.Remarks = this._remarks;
  //   this.approvalObj.isApproval = val;

  //   this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
  //     console.log(data['message'], "edit response");
  //     if (data['message'] == '3') {
  //       this.notifyService.showSuccess("Project updated and Approved successfully", "Success");
  //     }
  //     else if (data['message'] == '2') {
  //       this.notifyService.showError("Not updated", "Failed");
  //     }
  //   //  this.getProjectDetails(this.URL_ProjectCode);
  //   //  this.getapprovalStats();
  //   //  this.closeInfos();
  //   });
  // }
 
}
// Project Edit End

}
