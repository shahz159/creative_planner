import { object } from '@amcharts/amcharts4/core';
import { Component, ElementRef, EventEmitter, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { HttpEvent } from '@angular/common/http';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
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
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]

})
export class CreateProjectComponent implements OnInit {
  @ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;
  Current_user_ID:string;
  Current_user_Info:any;
  

  Authority_json:any;
  Category_json:any;
  Client_json:any;
  ProjectType_json:any;
  Team_json:any;
  owner_json:any;
  SubmissionType:any
  Responsible_json:any;
  allUser_json:any;
  heirarchical_owner:any;



  PrjOwner:string;
  PrjResp:string;
  PrjAuth:string;
  PrjCrdtr:string;
  PrjInformer:string;
  PrjAuditor:string;
  PrjSupport:{Emp_Name:string,Emp_No:string}[]=[];
  totalPeopleOnProject=[];
  todayDate: Date = (new Date);
  EmpName:any
  previousdate :Date= new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0);


  PrjCode:string|undefined;
  PrjName:string='';
  Prjtype:string|undefined;
  PrjOfType:string;
  PrjClient:string|undefined;
  PrjDes:string;
  PrjCategory:string|undefined;
  PrjVersion:string;
  PrjLocation:string;
  Prjstartdate:any
  Prjenddate:any
  Prjduration:number;
  _remarks:string;
  fileAttachment:any;
  prjsubmission:any
  _inputAttachments:any='';
  PrjCost:number=0;

  disablePreviousDate=new Date()
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
  maxactAllocation:number;
  _allocated:any;
  maxPrjEndDate:any;
  URL_ProjectCode: any;
  approvalObj: ApprovalDTO;
  saveAsTemplate:boolean=false;
  notProvided:boolean=false;
  notificationMsg:number=0;
  confirmBeforeRoute:boolean=false; // if true then confirmation appears when user tries to leave this create project page.
  ProjectDto:ProjectDetailsDTO|undefined;
  maxAllocHrsToProject:number=0;  // maximum allocatable hrs on the project user can give. (for standard and routine type projects only).
  isStandardTasksLimitExhausted:boolean=false;  // whether user has exhausted the limit of standard tasks hours.
  isRoutineTasksLimitExhausted:boolean=false; // whether user has exhausted the limit of routine tasks hours.

  constructor(private router: Router,private location: Location,
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
      this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
  }


  ngOnInit(): void {

    // this.deletingDraftactions()

    const navigatingToCreateProject = localStorage.getItem('navigatingToCreateProject');
    if (navigatingToCreateProject === 'true') {
    setTimeout(()=>{ this.Assigned_projects();   },2000);
    localStorage.removeItem('navigatingToCreateProject');
    }

    const navigatingfromrunway = JSON.parse(localStorage.getItem('combinedobj'));
    if(navigatingfromrunway && navigatingfromrunway.navigatingfromrunway === 'true'){
    this.PrjName = navigatingfromrunway.task
      setTimeout(()=>{this.Scratech_btn()},2000)
      localStorage.removeItem('combinedobj');
    }

    this.ProjectDto=new ProjectDetailsDTO();
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.fileAttachment=null;
    this.timearrays();
    this.getProjectCreationDetails();
    this.GetAssignedTaskDetails();
    this.getPortfolios();


    this.route.paramMap.subscribe(params => {
      console.log(this.route,"url")
      var pcode = params.get('projectcode');

      this.URL_ProjectCode = pcode;
      // this._MasterCode = pcode;
    });

      this.Current_user_ID = localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
      this.activatedRoute.paramMap.subscribe(params => this.URL_ProjectCode = params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.


      // this.ProjectDto.Emp_No='400172';
      // this.ProjectDto.Hours="20";
      // this.createProjectService.GetCPProjectCost(this.ProjectDto).subscribe((res:any)=>{

      //     console.log('prj cost here:',res);
      // })

  }



  ngAfterViewChecked(){
    // open assigned project if asked in url
    this.route.queryParamMap.subscribe((qparams)=>{
      const assignedPrjTask=qparams.get('AssignedProjectId');
      if(assignedPrjTask){

            const assignedTaskViewed=this.viewAssignedTaskById(assignedPrjTask);
            if(assignedTaskViewed){
               const ob={...this.route.snapshot.queryParams};
               delete ob.AssignedProjectId;
               this.router.navigate([],{queryParams:ob})
            }
      }

    });
    // open assigned project if asked in url
  }




 viewAssignedTaskById(id:string):boolean{
  let isProcessDone:boolean=false;
  try{
   const e1=document.querySelector('.Assigned-projects-list');
   const e2=document.querySelector('.np-step-1');
   const e3=e1.querySelector(`#myTabContent #assign-task-${id} .kt-act-card`);
   let e4:any;
   e1.classList.remove('d-none');
   e2.classList.add('d-none');

   if(e3){
    e3.classList.add('selected-anim');
    e3.addEventListener('animationend',()=>{
     e3.classList.remove('selected-anim');
    });
    e4=e3.querySelector('.kt-act-no input');
    setTimeout(()=>{ if(e4)e4.focus(); },300);
   }

   isProcessDone=true;
  }catch(e){
   isProcessDone=false;
  }

   return isProcessDone;
 }



  // actionCount:any
  // getActionCount(prjcode){

  //   this.projectMoreDetailsService.GetActionDeadlineList(prjcode).subscribe((res)=>{
  //    this.actionCount = JSON.parse(res[0].deadlineList)
  //    console.log(this.actionCount,' this.actionCount this.actionCount this.actionCount')





  //   })
  // }

  Project_Type:any

  getProjectCreationDetails(){
    this.createProjectService.NewGetProjectCreationDetails().subscribe((res)=>{
      console.log("NewGetProjectCreationDetails:",res);
      if(res)
      {    
         this.Authority_json=JSON.parse(res[0].Authority_json);
         this.Category_json=JSON.parse(res[0].Category_json);
         this.Client_json=JSON.parse(res[0].Client_json);
         this.ProjectType_json=JSON.parse(res[0].ProjectType_json);   console.log('project type json:',this.ProjectType_json);
         this.Responsible_json=JSON.parse(res[0].Responsible_json);
         this.Team_json=JSON.parse(res[0].Team_json);
         this.allUser_json=JSON.parse(res[0].allUser_json);
         this.Current_user_Info=JSON.parse(res[0].tasks_json)[0];       // Current user information. eg: id, name, designation, position, total Standard Count,....etc
     
         this.heirarchical_owner=JSON.parse(res[0].owner_json);
         let owner_values=JSON.parse(res[0].owner_json);
         owner_values=owner_values.map(ob=>({...ob,type:'Hierarchical'}));
         const excludeusrs=[...owner_values.map(ob=>ob.EmpNo),this.Responsible_json[0].ResponsibleNo];
         let otherusers=this.allUser_json.filter((ob)=>!excludeusrs.includes(ob.Emp_No));
         otherusers=otherusers.map(ob=>({EmpNo:ob.Emp_No, EmpName:ob.Emp_Name, type:'Others'}));
         this.owner_json=[...owner_values,...otherusers];


          this.PrjOwner=this.Responsible_json[0].OwnerEmpNo;
          this.PrjResp=this.Responsible_json[0].ResponsibleNo;
          this.PrjAuth=this.Responsible_json[0].ResponsibleNo;
          this.PrjCrdtr=this.Team_json[0].CoordinatorNo;
          this.PrjInformer=this.Team_json[0].InformerNo;
          this.SubmissionType=JSON.parse(res[0].SubmissionType);  console.log('submission type values:',this.SubmissionType);
          const defaultvalue=this.allUser_json.find((item)=>{
               return (item.Emp_Name===this.Team_json[0].SupportName&&item.Emp_No===this.Team_json[0].SupportNo);
          })
          this.PrjSupport=defaultvalue?[defaultvalue]:[];

          // let Ownerobj=this.owner_json.find((e)=>e.EmpNo==this.PrjOwner);
          // if(Ownerobj){
          //   let Emp_Name=Ownerobj.EmpName;
          //   let openParenIndex = Emp_Name.indexOf('(');
          //   this.Owner_Name = Emp_Name.substring(0, openParenIndex>-1?openParenIndex:undefined).trim();
          // }
          // let respName = this.Responsible_json[0].ResponsibleName;
          // let openParenIndex_res = respName.indexOf('(');
          // this.Responsible_Name = respName.substring(0, openParenIndex_res>-1?openParenIndex_res:undefined).trim();
          


          // this.Prjtype=this.ProjectType_json[0].Typeid;// by default prj type core is selected.
          this.Project_Type=this.ProjectType_json[0].ProjectType;
          this.PrjOfType=this.Prjtype==='001'?'Core Tasks':
          this.Prjtype==='002'?'Secondary Tasks':
          this.Prjtype==='003'?'Standard Tasks':
          this.Prjtype==='008'?'Routine Tasks':
          this.Prjtype==='011'?'To do List':'';

          this.PrjClient=this.Client_json[0].EmpClient;
          this.setRACIS();

         // determine whether current user can create standard task / routine task type projects or not.
         if(this.Current_user_Info.Position=='Team Member'){
          this.maxAllocHrsByRole=+(this.perWeekAllocHrs*this.TEAM_MEMBER_ALLOC_RATIO).toFixed(2);    //48*0.25=12 hrs maximum user can give to the new project.
         }
         else if(this.Current_user_Info.Position=='Dept. Head'){
          this.maxAllocHrsByRole=+(this.perWeekAllocHrs*this.DEPT_HEAD_ALLOC_RATIO).toFixed(2);    //48*0.50=24 hrs maximum user can give to the new project.
         }
         else if(this.Current_user_Info.Position=='Company Head'){
          this.maxAllocHrsByRole=+(this.perWeekAllocHrs*this.COMPANY_HEAD_ALLOC_RATIO).toFixed(2);  //48*0.70=33.6 hrs maximum user can give to the new project
         }
        
     
         this.isStandardTasksLimitExhausted=this.Current_user_Info.Standard_Total_Hours>=this.maxAllocHrsByRole;
         this.isRoutineTasksLimitExhausted=this.Current_user_Info.Routine_Total_Hours>=this.maxAllocHrsByRole;

         // 

      }
      // this.getFindName();
      this.changeprojecttype();
     });
  }

  Client:any
  Category_Name:any
  // Owner_Name:any;
  // Responsible_Name:any;
  projectInfo: any;
  owner_dropdown: any;
  responsible_dropdown: any;
  Category_List: any;
  Client_List: any;
  ProjectType:any






  // getFindName(){  debugger  
  //   let Owner=this.owner_json.find((e)=>{
  //   return e.EmpNo==this.PrjOwner;
  //   });
  //   if(Owner){
  //     let Emp_Name=Owner.EmpName;
  //     let openParenIndex = Emp_Name.indexOf('(');
  //     this.Owner_Name = Emp_Name.substring(0, openParenIndex).trim();
  //   }
  
  //  let res= this.Responsible_json[0].ResponsibleName;
  //  if(res){
  //   let openParenIndex_res = res.indexOf('(');
  //   this.responsible = res.substring(0, openParenIndex_res).trim();
  //  }


  // }



  projectTypes:any
  durationInDays:any

  findProjectType(){
    if(this.Prjtype){
      let projectType=this.ProjectType_json.find((e)=>{
        return e.Typeid===this.Prjtype;
      });
      this.projectTypes= projectType.ProjectType;
      var startDate = moment(this.Prjstartdate);
      var endDate = moment(this.Prjenddate);
      this.durationInDays = endDate.diff(startDate, 'days');
      console.log('Duration in days:', this.durationInDays);
    }
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
  //  this.getActionCount(this.PrjCode);
  }



  displaymessagemain(value: string): void {

    // this.notifyService.showInfo("Project Owner cannot be changed","Not editable");
    const messages = {
      'Duration': {
        message: "Project duration can't be changed",
        title: "Not editable"
      },

      'Owner': {
        message: "Project owner can't be changed",
        title: "Not editable"
      },

      'Cost': {
        message: "Project cost can't be changed",
        title: "Not editable"
      },

      'Allocated hour': {
        message: "Project allocated hour can't be changed",
        title: "Not editable"
      }
    }
    if (messages[value]) {
      const { message, title } = messages[value]
      this.notifyService.showInfo(message, title)
    }

  }



















  newProjectDetails(prjCode: string,actionIndex:number|undefined=undefined) {

    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
       this.projectInfo = JSON.parse(res[0].ProjectInfo_Json)[0];
       this.ProjectType = this.projectInfo.Project_Type;
      console.log(this.projectInfo, "projectInfo");
   })

  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.PrjCode,this.Current_user_ID).subscribe(
    (data) => {   
      this.owner_dropdown = (JSON.parse(data[0]['RacisList']));
      this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));  console.log("this 3:",this.responsible_dropdown);
    });


  this.service.SubTaskDetailsService_ToDo_Page(prjCode, null, this.Current_user_ID).subscribe(
      (data) => {   
        this.Client_List = JSON.parse(data[0]['ClientDropdown']);
        this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
        console.log(this.Client_List, "Client_List");
    });

    this.service.NewProjectService(this.PrjCode).subscribe(
        (data) => {

          if (data != null && data != undefined) {
              this.totalPeopleOnProject=JSON.parse(data[0]['RacisList']);
              this.PrjSupport=this.totalPeopleOnProject.map((item:any)=>({Emp_No:item.Emp_No,Emp_Name:item.RACIS}));
              this.setRACIS();
              console.log("draft support:",this.PrjSupport)

              this.detectMembersWithoutActions();   // 'hasNoActionMembers' may need updation whenever PrjSupport is fetched.
          }


    });    // for geeting the support members.




}




  setMaxAllocation() { 
    if(this.Prjstartdate&&this.Prjenddate){
      this.Prjstartdate=new Date(this.Prjstartdate);   this.Prjstartdate.setHours(0,0,0,0);
      this.Prjenddate=new Date(this.Prjenddate);   this.Prjenddate.setHours(0,0,0,0);
      const dffinsec=this.Prjstartdate.getTime()-this.Prjenddate.getTime();
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxAllocation=(Difference_In_Days+1)*7;
    }
    else{
       this.maxAllocation=null;
       this._message = "Start Date/End date missing, It accept only numeric and non-negative value."
    }
    
  }

  // setprojeditAllocation() {
  //   if(this.Start_Date&&this.End_Date){
  //     this.Start_Date=new Date(this.Start_Date);
  //     this.End_Date=new Date(this.End_Date);
  //     const dffinsec=this.Start_Date.getTime()-this.End_Date.getTime()
  //     const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
  //     this.maxAllocation=(Difference_In_Days+1)*7;
  //   }
  //   else
  //   this._message = "Start Date/End date missing, It accept only numeric and non-negative value"

  // }
  // setactioneditAllocation() {

  //   if(this.Start_Date&&this.End_Date){
  //     this.Start_Date=new Date(this.Start_Date);
  //     this.End_Date=new Date(this.End_Date);
  //     const dffinsec=this.Start_Date.getTime()-this.End_Date.getTime()
  //     const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
  //     this.maxactAllocation=(Difference_In_Days+1)*7;
  //   }
  //   else
  //   this._message = "Start Date/End date missing, It accept only numeric and non-negative value"

  // }

  validateInput() {
    this.Allocated = this.Allocated.toString().replace(/[^0-9]/g, '');
  }
  restrictToNumbers(event: KeyboardEvent) {
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
  }




  setMaxPrjEndDate(){
    if(this.Prjstartdate&&this.Prjtype){
      if(this.Prjtype=='011'){
        const d=new Date(this.Prjstartdate);
        d.setDate(d.getDate()+2);
        this.maxPrjEndDate=d;
        if(this.Prjenddate>this.maxPrjEndDate)
        this.Prjenddate=null;     
      }
      else 
      this.maxPrjEndDate=null;
    }
    else {
      this.maxPrjEndDate=null;
    }  
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

createSRTProject=async()=>{


// 1. validation: when project name already exists in database.
const nameVres:any=await this.createProjectService.NewGetProjectnameValidation(this.Current_user_ID,this.PrjName).toPromise();
if(nameVres&&nameVres.message==1){
      Swal.fire({
        title:'Project Name Already Exists',
        html:`<div style="text-align:justify">  
              The project name "<b>${this.PrjName}</b>" is already in use. Please change it and try again.
             </div>`,
        showConfirmButton:true,
        confirmButtonText:'Ok',
     });
  return;
}
//


  // 2. project cost calculate.
  let alhr:number|null=null;
  if(['003','008'].includes(this.Prjtype)){
    const h=Number.parseInt(this.Allocated_Hours.split(':')[0]);
    const m=Number.parseInt(this.Allocated_Hours.split(':')[1]);
    alhr=h+(m/60);
  }
  else if(this.Prjtype=='011')
  alhr=this.Allocated_Hours;

  if(alhr!=null){
      this.ProjectDto.Emp_No=this.Current_user_ID;
      this.ProjectDto.Hours=alhr.toString();
      const rescost:any=await this.createProjectService.GetCPProjectCost(this.ProjectDto).toPromise();
      if(rescost&&rescost.Status){
        this.PrjCost=rescost.Data;
        console.log(this.PrjCost);
      }
      else{

        // console.log('ERROR WHILE CALCULATING PROJECT COST.');
        // return;

        // testing (Temporary)
        const cost=alhr*100
        this.PrjCost=cost;
        // testing (Temporary)
      }
  }
  else
  return;
 //

 // 3. confirm with user and create project.
  const choice=await Swal.fire({
    title:"Are you sure?",
    text:`You will be going to spend "${this.PrjCost}.00 SAR" on this Project. Do you want to Continue?`,
    showConfirmButton:true,
    showCancelButton:true,
    confirmButtonText: 'Yes, confirm',
    cancelButtonText: 'Cancel'
  });
  if(choice.isConfirmed){
    this.createProject();
  }
 //

}


 createProject(){

  this.Client_json.forEach(element => {
    if(element.ClientName==this.PrjClient){
      this.PrjClient=element.ClientId;
    }
  });
  if(this.PrjOwner&&this.PrjResp&&this.PrjAuth&&this.PrjCrdtr&&this.PrjInformer&&this.PrjSupport.length>0){
     // when all mandatory fields of step2 provided.
      const d=new Date();
      d.setFullYear(d.getFullYear()+2);
      const enddateofRS=d;

     const projectInfo={
           ProjectType:this.Prjtype,
           Client:this.PrjClient,
           ProjectName:this.PrjName,
           Description:this.PrjDes,
           Category:this.PrjCategory,
           StartDate:['003','008'].includes(this.Prjtype)?this.datepipe.transform(new Date(),'dd-MM-yyyy'):this.datepipe.transform(this.Prjstartdate,'dd-MM-yyyy'),
           EndDate:['003','008'].includes(this.Prjtype)?this.datepipe.transform(enddateofRS,'dd-MM-yyyy'):this.datepipe.transform(this.Prjenddate,'dd-MM-yyyy'),
           Owner:this.PrjOwner,
           Responsible:this.PrjResp,
           Authority:this.PrjAuth,
           Coordinator:this.PrjCrdtr,
           Informer:this.PrjInformer,
           Auditor:this.PrjAuditor,
           Support:this.PrjSupport.map(item=>+item.Emp_No).join(','),
           SubmissionType:['003','008'].includes(this.Prjtype)?this.prjsubmission:'0',
           // Duration:['001','002','011'].includes(this.Prjtype)?this._allocated:'0',
           Duration:['001','002','011'].includes(this.Prjtype)?(this.Allocated_Hours ?this.Allocated_Hours:'0'):'0',
           DurationTime:['003','008'].includes(this.Prjtype)?this.Allocated_Hours:'0',
           Recurrence:['001','002','011'].includes(this.Prjtype)?'0':(this.prjsubmission==6?this.Annual_date:'-1'),
           file:this.fileAttachment,
           Remarks:this._remarks,
           Project_Cost:['003','008','011'].includes(this.Prjtype)?this.PrjCost:0,
           Conditional_Project:this.conditionalList?this.conditionalList[0].Project_Code:'0'

     };




    //  alert(this.Allocated_Hours)
     console.log("PRJ INFORMATION :",projectInfo);
     this.ProjectDto.Status=JSON.stringify(projectInfo);
     this.ProjectDto.Emp_No=localStorage.getItem('EmpNo');
     this.ProjectDto.isTemplate=this.saveAsTemplate;
    //  alert(this.unique_id)
    if(this.unique_id){
      this.ProjectDto.assignid=this.assigntask_json[this.unique_id-1].Assign_Id;
    }
    else{
      this.ProjectDto.assignid=null;
    }
     this.ProjectDto.portfolioids=this.ngDropdwonPort.map(item=>item.Portfolio_ID).join(',');
     console.log(this.ProjectDto,"dto")
     //1. creating project
     this.createProjectService.NewInsertNewProject(this.ProjectDto).subscribe((res:any)=>{  

           console.log("res after project creation:",res);

           if(res&&res.message==='Success'){
               this.PrjCode=res.Project_Code;
               this.getAddActionDetails();


              //  this.notification.showSuccess("Saved successfully","");
               this.notification.showInfo("Please submit the project for approval.","");

               //2. file attachment uploading  if present
               if(this.fileAttachment)
               this.uploadFileAttachment()

               // 3. Move to next step
               if(this.Prjtype==='001'||this.Prjtype==='002')
               {    // when core, secondary
                if(this.savePrjAsDraft==true)
                {
                  this.notification.showSuccess("Project saved as draft.","Success");
                  this.back_to_options();
                  this.GetAssignedTaskDetails();
                }
                else{
                  this.Move_to_Add_action_tab();    // moved to step 3
                  this.confirmBeforeRoute=true;  // confirmation to user if he tries to leave page without submit.
                  // this.BsService.ConfirmBeforeRoute.emit('AT-3RD-STEP-PC'); // we are on step3 screen.

                }


               }
             this.BsService.ProjectCreatedEvent.emit();
           }
           else if(res&&res.message==='Success1'){

             this.PrjCode=res.Project_Code;
               this.notification.showSuccess(this.PrjName+" Successfully created","Project created and submitted to the project owner : "+this.owner_json.find((ow)=>ow.EmpNo==this.PrjOwner)?.EmpName);
               //2. file attachment uploading  if present
               if(this.fileAttachment)
               this.uploadFileAttachment()

                 this.router.navigate(['./backend/ProjectsSummary']);
                 // this.closeInfo()
            this.BsService.ProjectCreatedEvent.emit();
           }
           else
           {
             this.notification.showError("Unable to create project","Project creation failed");
           }


     });

    }
    else{
      // please provide all mandatory fields to create project.
      this.notProvided=true;
      this.notification.showError('Please fill in all mandatory fields.','Required information');
    }
 }


 uploadFileAttachment(){   debugger
           const fd=new FormData();
           fd.append('Project_Code',this.PrjCode);
           fd.append('Project_Name',this.PrjName);
           fd.append('Emp_No',this.Current_user_ID);
           fd.append('Remarks',this._remarks);
           fd.append("contentType",this.contentType);
           if(this.fileAttachment){
            fd.append("Attachment","true");
           }
           else{
            fd.append("Attachment","false");

           }
          //  this.createProjectService.NewUpdateFileUploadsByProjectCode(fd).subscribe((fres:any)=>{
            this.createProjectService.NewUpdateFileUploadsByProjectCodeCore(fd).subscribe((fres:any)=>{   debugger
            console.log("file attachment:",fres)
            if(fres&&fres.message==='Success'){
              if(this.fileAttachment){
                fd.append('file',this.fileAttachment);
                this.createProjectService._AzureUpdateFileUploadsByProjectCode(fd).subscribe((event1: HttpEvent<any>) => {   debugger
                                    console.log(event1,"azure data");
                                    var myJSON = JSON.stringify(event1);
                                  //  this._Message = (JSON.parse(myJSON).body);

                                  });
               }
              this.notification.showSuccess('Successfully uploaded the file attachment.','File attachment uploaded');
              this.isFileUploaded=true;
            }
            else{
               this.notification.showError('Unable to upload the file attachment.','File uploading failed');
               this.isFileUploaded=false;
            }
        });
 }


//  onFileChanged(e:any){
//    this.fileAttachment=e.target.files[0];
//    e.target.value=null;
//  }


permittedFileFormats=[
  "image/*", "application/pdf", "text/plain", "text/html", "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/json", "application/xml", "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];
invalidFileSelected:boolean=false;

  file: File | null = null;

onFileChanged(event: any) {

  const files: File[] = event.target.files;

  if (files && files.length > 0) {

    const filetype = files[0].type;
    const isValidFile=this.permittedFileFormats.some((format)=>{
          return (filetype==format)||(filetype.startsWith('image/')&&format=='image/*');
    });

    if(isValidFile){
      this.invalidFileSelected=false;
      this.file = files[0];
      this.fileAttachment = this.file;
    }else{
      this.invalidFileSelected=true;
    }

    // this.determineFileType(this.file.name);
    console.log(this.fileAttachment,"testtestsetsetsetsetsettttt")
  } else {
    this.file = null;
    this.fileAttachment = null;
  }
  console.log('File Object:', this.file);
  this.contentType=this.getFileExtension(this.fileAttachment.name);
  event.target.value=''
}

contentType:any="";

  getFileExtension(fileName: any): string | null {
    if (!fileName) {
      return null;
    }
    const lastDotIndex = fileName.lastIndexOf('.');
    return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
  }

// removeFile() {
//   this.file = null;
//   this.fileAttachment = null;
// }





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
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");

    // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("project-creation-page").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("kt_wrapper").style.zIndex="unset";

    this.characterCount_Desc=0;    // clear
    this.notProvided=false;   // clear
    this.isPrjNameValids='VALID'; // back to initial value.
    this.isPrjDesValids='VALID';  // back to initial value.
  }

  closeInfo() {
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementById("project-creation-page").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["/backend/createproject/"]);


    // document.getElementById("New_project_Add").classList.remove("open_sidebar");


    // document.getElementById("sumdet").classList.remove("position-fixed");


  }

  Scratech_btn(){
    $('.Assigned-projects-list').addClass('d-none');
    $('.Templates-list').addClass('d-none');
    // $('.np-step-1').removeClass('d-none');
    $('.np-step-2').removeClass('d-none');        // visible proj creation section.
    $('.np-step-1').addClass('d-none');           // close let's start section.
    this.notificationMsg=0;
    this.promptToReadGuidelines();
  }

  back_to_options(){
    this.unique_id=null;
    $('.np-step-1').removeClass('d-none');                // visible let's start section.
    $('.np-step-2').addClass('d-none');                  // close proj creation section.
    $('.Assigned-projects-list').addClass('d-none');     //close assigned projects section
    $('.Templates-list').addClass('d-none');             //close template projects section
    $('.Drafts-list').addClass('d-none');                //close draft projects section.
    $('.right-side-dv').addClass('d-none');              // close right side dv section.
    $('.Add_action_tab').hide();                         // close action tab(3rd section).
    $('.Project_details_tab').show();                    // open section 1 form.
    $('.action-left-view').addClass('d-none');           // close actions view of 3rd step.
    this.notificationMsg=0;
    this.okWithType=false;
    // this.dontShowAgain=false;
  }



  promptToReadGuidelines(){
     const hasRead=localStorage.getItem('readPrjCreationGuidelines');
     if(!hasRead){
          Swal.fire({
            title:'Before you begin',
            text:"Please read the guidelines to avoid project setup issues and streamline your project creation. Click on the 'View Guidelines' button to view the guidelines.",
            showConfirmButton:true,
            confirmButtonText:'View Guidelines',
            showCancelButton:true,
            cancelButtonText:'Skip',
            allowOutsideClick: false
          }).then((decision)=>{
            if(decision.isConfirmed){
              this.New_project_guideline();
            }
            localStorage.setItem('readPrjCreationGuidelines','true');
           });
     }
  }




  closeStep3Section(){
     // when moving out from the 3rd step.

    Swal.fire({
        title:'Project not submitted',
        text:"Click on 'Submit project' to send the project for approval. Leaving this page will keep the project as a draft.",
        showConfirmButton:true,
        confirmButtonText:'Keep as draft',
        showCancelButton:true,
        cancelButtonText:'Back',
    }).then((decision)=>{
        if(decision.isConfirmed){
          this.confirmBeforeRoute=false;  // no confirmation if user tries to navigate out from create project page.
          // this.BsService.ConfirmBeforeRoute.emit(null);   // if back to options from 3rd step. removes sidebar,header confirmations.
          this.back_to_options();
          this.reset();
          }
      });
  }

  Assigned_projects(){
     $('.Assigned-projects-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }

  scrollToTaskById(id){

      //  const el:any=document.querySelector(`.Assigned-projects-list .tab-content .kt-action-list input#task-${id}`);
        const el=document.getElementById('task-11736');
        el.focus();
  }

  templateProjects(){
    $('.Templates-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
    this.ngDropdwonPort=[];
  }

  draftsProjects(){
    $('.Drafts-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }


  Move_to_add_team(){

    this.isPrjNameValid=this.isValidString(this.PrjName,3);
    this.isPrjDesValid=this.isValidString(this.PrjDes,5);
    
    if((this.Prjtype&&this.PrjClient&&this.PrjCategory&&(this.PrjName&&this.isPrjNameValid==='VALID'&&this.PrjName.length<=100&&this.isPrjNameUsed==false)&&(this.PrjDes&&this.isPrjDesValid==='VALID'&&this.PrjDes.length<=500))&&
        (
          (['001','002'].includes(this.Prjtype)&&this.Prjstartdate&&this.Prjenddate&&(this.Allocated_Hours?this.Allocated_Hours<=this.maxAllocation:true))||
          (this.Prjtype=='011'&&this.Prjstartdate&&this.Prjenddate&&(this.Allocated_Hours&&this.Allocated_Hours<=this.maxAllocation)) ||
          (this.Prjtype=='003'&&this.prjsubmission&&this.Allocated_Hours&&(this.prjsubmission==6?this.Annual_date:true))||
          (this.Prjtype=='008'&&this.prjsubmission&&(this.Allocated_Hours&&(this.isAllocHrsOverflow==false))&&(this.prjsubmission==6?this.Annual_date:true))
        ) 
     ){
          // when all mandatory fields of step1 are provided.
          $('.right-side-dv').removeClass('d-none');
          $('.add_tema_tab').show();
          $('.Project_details_tab').hide();
          $('.sbs--basic .active').addClass('finished');
          $('.sbs--basic li').removeClass('active');
          $('.sbs--basic li:nth-child(2)').addClass('active');
          this.findProjectType();
          if(['003','008'].includes(this.Prjtype))
          this.Prjstartdate=new Date();
          this.notificationMsg=['001','002'].includes(this.Prjtype)?2:4;
          this.notProvided=false;
    }
    else{ 
      // when some mandatory fields are missing.
      this.notProvided=true;


      //(Allocated hrs validation for Routine projects)  when allocated hrs input exceeds max allocatable hrs value. for routine project  
      if(this.Prjtype&&['008'].includes(this.Prjtype)&&(this.Allocated_Hours&&this.isAllocHrsOverflow)){
        const isCreatable=!this.isRoutineTasksLimitExhausted;
        const totalPrjsExisting=this.Current_user_Info.Routine_Count;
        const existingPrjsType='Routine Tasks';
        const _consumedHrs=this.Current_user_Info.Routine_Total_Hours; 
        const _allocatablehrs=this.formatHrsToHHMM(this.maxAllocHrsToProject);  
         
         
          
           Swal.fire({
                   title:isCreatable?'Invalid Allocated Hours provided':`Cannot Create Routine Task`,
                   html:isCreatable?
                     `<div style="text-align: justify;">
                        <div>Currently, you are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects, with <b>${_consumedHrs} hours</b> already allocated.</div> 
                        <div style="font-size: 14px;color: red;font-weight: 500;margin-top: 15px;"> You cannot allocate more than ${_allocatablehrs} to this project.</div>
                      </div>`:
                      `<div style="text-align: justify;">
                      <ul style="padding-left: 18px;">
                          <li>You are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects</li>
                          <li style="white-space: nowrap;"><b>${_consumedHrs} hours</b> already allocated (limit: <b>${this.maxAllocHrsByRole} hours</b>)</li>
                      </ul> 
                      <div style="font-size: 14px;color: red;font-weight: 500;margin-top: 15px;">You've reached the limit for ${existingPrjsType} Task projects. Please review your existing ones.</div>
                    </div>`,
                  showConfirmButton:true,
                  confirmButtonText:'Ok'
           });

      }
      //(Allocated hrs validation for Routine projects)

   }

  }


  Back_to_project_details_tab(){
    $('.right-side-dv').addClass('d-none');
    $('.Project_details_tab').show();
    $('.add_tema_tab').hide();

    $('.sbs--basic .active').removeClass('finished');
    $('.sbs--basic li').addClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
    this.notificationMsg=['001','002'].includes(this.Prjtype)?1:2;
  }


gottoPrevious(){
          $('.right-side-dv').removeClass('d-none');
          $('.add_tema_tab').show();
          $('.Project_details_tab').hide();
          $('.Add_action_tab').hide();
          $('.sbs--basic .active').addClass('finished');
          $('.sbs--basic li').removeClass('active');
          $('.sbs--basic li:nth-child(2)').addClass('active');
          $('.sbs--basic li:nth-child(3)').removeClass('active');
          $('.sbs--basic li:nth-child(3)').removeClass('finished');
          $('.action-left-view').addClass('d-none');

}



  Move_to_Add_action_tab(){
    $('.action-left-view').removeClass('d-none');
    $('.Add_action_tab').show();
    $('.Project_details_tab,.add_tema_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(3)').addClass('active');
    this.notificationMsg=3;


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

  New_project_guideline(){
    $('#Guidelines_view_list').addClass('open_sidebar_guide');
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  closeI_guidelines(){
    $('#Guidelines_view_list').removeClass('open_sidebar_guide');
    document.getElementById("rightbar-overlay").style.display = "none";
  }
// add Prj support mat autocomplete drpdwn code start here

isPrjSprtDrpDwnOpen:boolean=false;

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
    this.openAutocompleteDrpDwn('PrjSprtDrpDwn');
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
  if(this.PrjResp){
    if(this.PrjResp===this.PrjOwner)
    {
      const selectedowr=this.owner_json.find((item)=>item.EmpNo===this.PrjOwner);
      const newowr=this.owner_json[this.owner_json.indexOf(selectedowr)+1];
      this.PrjOwner=newowr.EmpNo;

       // if prj owner and selected auditor are same.  (project owner cannot be set as project auditor)
       if(this.PrjAuditor==this.PrjOwner){
        this.notifyService.showError('Please ensure that the owner and responsible are not chosen as auditor.','Invalid project auditor');
        this.PrjAuditor=null;
       }
       //
    }
    this.PrjAuth=this.Responsible_json[0].ResponsibleNo;

  // selected responsible cannot be selected in the support.
    const obj=this.PrjSupport.find(item=>item.Emp_No==this.PrjResp);
    if(obj)this.PrjSupport.splice(this.PrjSupport.indexOf(obj),1);
  //

  // selected responsible cannot be selected also as project auditor
      if(this.PrjAuditor==this.PrjResp){
        this.notifyService.showError("Please ensure that the owner and responsible are not chosen as auditor.",'Invalid project auditor');
         this.PrjAuditor=null;
      }
  //
  }
}

onProjectOwnerChanged(){
  if(this.PrjOwner){
      if(this.PrjOwner===this.PrjResp){
      this.PrjResp=this.Responsible_json[0].ResponsibleNo;
      this.onResponsibleChanged();
      }

   // selected owner cannot be selected also as project auditor
   if(this.PrjAuditor==this.PrjOwner){
    this.notifyService.showError('Please ensure that the owner and responsible are not chosen as auditor.','Invalid project auditor');
    this.PrjAuditor=null;
   }
   //
  }

}

// responsible field end

 getOnwer_Name():string{
  let Owner_Name='';
  try{
  if(this.owner_json){
    let Ownerobj=this.owner_json.find((e)=>e.EmpNo==this.PrjOwner);
    if(Ownerobj){
      let Emp_Name=Ownerobj.EmpName;
      let openParenIndex = Emp_Name.indexOf('(');
      Owner_Name = Emp_Name.substring(0, openParenIndex>-1?openParenIndex:undefined).trim();
    }
  }
}catch(e){ console.log('ERROR WHILE COMPUTING THE OWNERNAME',e); }
  return Owner_Name;
 }

 getResponsible_Name():string{
  let Responsible_Name='';
  try{
  if(this.Responsible_json){
      if(this.PrjResp==this.Responsible_json[0].ResponsibleNo)
      Responsible_Name=this.Responsible_json[0].ResponsibleName;
      else if(this.PrjResp==this.Responsible_json[0].OwnerEmpNo)
      Responsible_Name=this.Responsible_json[0].OwnerName;

      let openParenIndex_res = Responsible_Name.indexOf('(');
      Responsible_Name = Responsible_Name.substring(0, openParenIndex_res>-1?openParenIndex_res:undefined).trim();
  }
}catch(e){ console.log('ERROR WHILE COMPUTING THE RESPONSIBLENAME',e);  }
  return Responsible_Name;
 }



  /////////////////////////////////////////assign task start/////////////////////////////
  rejectm:any
  conditional_List:any
  assigntask_json:any
  template_json:any;
  draft_json:any;
  daysDifference:any
  userFound:boolean|undefined;
  loadingAssignedTasks:boolean=false;
  GetAssignedTaskDetails(){
    this.loadingAssignedTasks=true;
    this.createProjectService.NewGetAssignedTaskDetails().subscribe
    ((res)=>{  console.log("draft_json:",JSON.parse(res[0].draft_json));
      this.assigntask_json = JSON.parse(res[0].Assigntask_json).map(task => {
        const startDate = moment(task.Start_Date);
        const endDate = moment(task.End_Date);
        const duration = endDate.diff(startDate, 'days'); // Calculate duration in days
        return {
          ...task,
          Duration: duration
        };
      });
      this.template_json=JSON.parse(res[0].templates_json);
      this.conditional_List=JSON.parse(res[0].conditional_json);

       this.userFound = true

      this.draft_json=JSON.parse(res[0].draft_json);
      this.draft_json=this.draft_json.map(dft=>{
        const d=moment(new Date()).diff(moment(dft.CreatedOn),'days');
        return {
         ...dft,
         ModifiedDate:d===0?'Today':
         d===1?'Yesterday':
         [2,3].includes(d)?d+' days ago':
         this.datepipe.transform(dft.CreatedOn,'dd-MM-yyyy')
};

      });

      console.log(this.conditional_List,'--conditional prjs------------->')
      console.log(this.assigntask_json,'--assigntask_json--');
 });
  }

  notifyAssign(){
    this.notification.showInfo("","You do not have any assigned project");

  }

  notifytemp(){
    this.notification.showInfo("","You do not have any templates");

  }

  notifydraft(){
    this.notification.showInfo("","You do not have any drafts");

  }


  bind_Project:any
  // start_Date:any  //x
  // date_str:any   //x
  duration:any
  // end_Date:any    //x
  // date_End:any    //x
  // task_Name:any   //x
  CreateName:any;
  unique_id:number
  // projectType:any   //x
  // portfolio:any    //x
  // prtf:any       //x
  // Attachment:any   //x
  // allocated:any

  onButtonClick(value:any,id:number){  debugger
    this.bind_Project = [value];
    console.log('bind project:',this.bind_Project);
    const cDate=new Date(); cDate.setHours(0, 0, 0, 0); 
    const psdate=new Date(this.bind_Project[0].Start_Date); psdate.setHours(0, 0, 0, 0); 


    // Data binding on step1   start.
    this.PrjName=this.bind_Project[0].Task_Name;                                        // Project name
    if(this.PrjName){ 
      this.isPrjNameValid=this.isValidString(this.PrjName.trim(),3); 
      this.isPrjNameInUse(this.PrjName);    
    }  // if project name given then validate it.
    
    this.PrjDes=this.bind_Project[0].Task_Description;                             // Project description
    if(this.PrjDes){  this.isPrjDesValid=this.isValidString(this.PrjDes,5);  }    // if project description given then validate it.
   
    const projType=this.ProjectType_json.find((ob:any)=>ob.Typeid==this.bind_Project[0].Project_Type);
    this.Prjtype=projType?projType.Typeid:null;         // Project type
    //client no need 
    //category no need
    this.Prjstartdate = psdate<cDate?null:this.bind_Project[0].Start_Date;   // Project start date
    this.Prjenddate = psdate<cDate?null:this.bind_Project[0].End_Date;     // Project end date
    this.setMaxAllocation();                                            // calculate Maximum allocatable hrs based on given start date and end date.
    this.Allocated_Hours=this.bind_Project[0].Allocated;               //Allocated hrs
 
    this.prjsubmission=this.bind_Project[0].Submission_Type;    // Submission type.  if standard task/routine
    // annual date no need                                     
    this.fileAttachment = this.bind_Project[0].FileName;    // File attachment
    console.log(this.fileAttachment,"fileAttachment on assignedprj");
    const portfolios_ = this.bind_Project[0].Portfolio_Id;   // Portfolios
    if(portfolios_){
      const portfolioids=portfolios_.split(',');
      const result=this._portfoliosList.filter(item=>portfolioids.includes(item.Portfolio_ID.toString()));
      this.ngDropdwonPort = result;
    }
    else
    this.ngDropdwonPort=[];
   // Data binding on step1   end.

   // other data
    this.CreateName=this.bind_Project[0].Created_Name;
    this.unique_id=id;
    this.duration=this.bind_Project[0].Duration+1;

    // this._remarks = this.bind_Project[0].__remarks
  }





onRejectButtonClick(value:any,id:number){
    this.bind_Project = [value];
    console.log(this.bind_Project,'+++++++++++>')
    this.PrjName=this.bind_Project[0].Task_Name;
    this.CreateName=this.bind_Project[0].Created_Name;
    this.PrjDes=this.bind_Project[0].Task_Description
    this.unique_id=id;
    this.Prjtype=this.bind_Project[0].Project_Type;
    this.duration=this.bind_Project[0].Duration+1
    this.Prjstartdate = this.bind_Project[0].Start_Date;
    this.Prjenddate = this.bind_Project[0].End_Date;
  }

onRejectProjectDialogClosed(){
    this.notProvided=false;
    this.reason4PrjRejection=null;
}






  conditionalList:any;   // selected conditional project will be in this variable.

  getConditional(value:any){
    this.conditionalList = [value];
    this.PrjName=this.conditionalList[0].Project_Name;
    this.Prjstartdate=this.conditionalList[0].DPG;
    this.Prjenddate=this.conditionalList[0].DeadLine;
    this.PrjDes=this.conditionalList[0].Project_Description;
    this.Prjtype=this.conditionalList[0].Project_Block;
     this.ngDropdwonPort=[];

  }

   /////////////////////////////////////////assign task End/////////////////////////////

  /////////////////////////////////////////add Project End/////////////////////////////


  openActionSideBar() {

    if(this.PrjActionsInfo.length===0)
      this.BsService.setSelectedTemplAction({...this.BsService._templAction.value,assignedTo:this.Current_user_ID});


    this.BsService.SetNewPojectCode(this.PrjCode);

    this.router.navigate(["./backend/createproject/ActionToProject/5"]);


    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("mysideInfobar12").classList.add("kt-action-panel--on");
    document.getElementById("kt-bodyc")
    document.getElementById("kt_wrapper").style.zIndex="99";

    // document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    // document.getElementById("project-creation-page").classList.add("position-fixed");
    $("#mysideInfobar12").scrollTop(0);

  }


  closeActionSideBar(){
    // document.getElementById("project-creation-page").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt_wrapper").style.zIndex="unset";
    // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection if present.
    this.router.navigate(["/backend/createproject/"]);

  }

  /////////////////////////////////////////add Project End/////////////////////////////

   ///////////////////////////////////////// Project Edit start /////////////////////////////


  Project_details_edit() {
    //1. shows the project edit sidebar section. 
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("Project_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    document.getElementById("kt_wrapper").style.zIndex="99";
    document.getElementById("rightbar-overlay").style.display = "block";
    $("#mysideInfobar12").scrollTop(0);
    //

    //2. data binding into the sidebar section.
    this.initializeSelectedValue();
    this.updateCharacterCount_Desc();
    //
  }

   
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("project-creation-page").classList.add("position-fixed");
   
  //  this.getResponsibleActions();
   
   
  

 ///////////////////////////////////////// Project Edit End /////////////////////////////


// file reupload start here
isFileUploaded:boolean|undefined=undefined;
openFileReupload(){
   $('#file-reupload-section').removeClass('d-none');
}


// file reupload end here



// action add in step3 code start
PrjActionsInfo:any=[];
currentActionView:number|undefined;
draftActionsLoading:boolean=false;

getActionsDetails(){
  this.draftActionsLoading=true;
  this.projectMoreDetailsService.getProjectMoreDetails(this.PrjCode).subscribe((res)=>{
    this.draftActionsLoading=false;

    console.log("LLL:",res);
    if(res[0].Action_Json)
    this.PrjActionsInfo = JSON.parse(res[0].Action_Json);
    else
    this.PrjActionsInfo=[];

    this.detectMembersWithoutActions();   // update 'hasNoActionMembers' may needed since new action is added into the project.
    // setTimeout(()=>this.hasActnsMatchingPrjDeadline(),2000);   // warning dialog if more than 50% actns deadline same as the project deadline.

  });

}



actionowner_dropdown:any;
actionresponsible_dropdown:any;

showActionDetails(index: number | undefined) {
  // store selected index.
  this.currentActionView = index;

  // fetch data for action owner drpdwn and action resp drpdwn of the selected action.
  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.PrjActionsInfo[index].Project_Code,this.Current_user_ID).subscribe(
  (data) => {
      console.log(data, "action racis");
      this.actionowner_dropdown=(JSON.parse(data[0]['owner_dropdown']));
      this.actionresponsible_dropdown=(JSON.parse(data[0]['responsible_dropdown']));
  });
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




//ProjectType: string
ProjectDescription: string
OGclientId: any;

ProjectName: string;

ActionDuration:any;
newaction_Cost:any;


//
ProjeditName:any;
ProjeditDescription:any;
OGProjectType: any;
OGProjectTypeid: any
selectedOwner: any;
OGowner: any;
OGownerid: any;
selectedOwnResp:any;
OGresponsible: any;
OGresponsibleid: any;
selectedcategory:any;
OGcategory: any;
OGselectedcategoryid: any;
selectedclient:any;
OGclient: any;
OGselectedclientid: any;
Start_Date: any;
End_Date: any;
PrjDuration_:number;

Submission_Name: string;
OGSubmission_Nameid: any;
OGSubmission: any;

//


initializeSelectedValue() {   

    this.ProjeditName = this.projectInfo.Project_Name;
    this.ProjeditDescription = this.projectInfo.Project_Description;

    this.OGProjectType = this.projectInfo.Project_Type;
    this.OGProjectTypeid = this.projectInfo['Project_Block'];

    this.selectedOwner = this.projectInfo.Owner;   
    this.OGowner = this.projectInfo.Owner;
    this.OGownerid = this.projectInfo['OwnerEmpNo'];

    this.selectedOwnResp = this.projectInfo.Responsible;
    this.OGresponsible = this.projectInfo.Responsible;
    this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];

    this.selectedcategory = this.projectInfo.Category;
    this.OGcategory = this.projectInfo.Category;
    this.OGselectedcategoryid = this.projectInfo['Reportid'];

    this.selectedclient = this.projectInfo.Client;
    this.OGclient = this.projectInfo.Client;
    this.OGselectedclientid = this.projectInfo['ClientNo'];

    this.Start_Date = this.projectInfo.StartDate;
    this.End_Date = this.projectInfo.EndDate;
    this.Allocated = this.projectInfo.AllocatedHours;
    this.PrjDuration_=this.projectInfo.Duration+1;


    this.Submission_Name = this.projectInfo.SubmissionName;
    this.OGSubmission_Nameid = this.projectInfo['SubmissionId'];
    this.OGSubmission = this.projectInfo.SubmissionName;
    this.Allocated_Hours = this.projectInfo.StandardAllocatedHours;
   
    this._remarks = this.projectInfo.Remarks;
  
    this.setPrjMaxAllocatableHrs(); // calculate 'p_maxAllocatableHrs' value using startdate and enddate.

    this.isPrjNameInUse(this.ProjeditName);   // checks the name binding to project name input is unique or not. 
}



projectEdit=async()=>{    

this.isPrjNameValids=this.isValidString(this.ProjeditName,3);
this.isPrjDesValids=this.isValidString(this.ProjeditDescription,5);   

if(this.isPrjNameValid=='VALID'){
  const nameVres:any=await this.createProjectService.NewGetProjectnameValidation(this.Current_user_ID,this.ProjeditName).toPromise();
  this.isPrjNameUsed=nameVres.message=='1'?true:false;
}

// CHECK ALL INPUT DATA ARE VALID OR NOT.
if(
  this.ProjeditName&&this.isPrjNameValids=='VALID'&&this.ProjeditName.length<=100&&this.isPrjNameUsed==false&&
  this.ProjeditDescription&&this.isPrjDesValids==='VALID'&&this.ProjeditDescription.length<=500&&
  this.selectedOwnResp&&
  this.selectedcategory&&
  this.selectedclient&&
  this.Start_Date&&
  this.End_Date&&
  this.Allocated <= this.p_maxAllocatableHrs
){
  this.notProvided=false;
}
else{
this.notProvided=true;
return;
}


// Update process starts.

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
    Project_Name: this.ProjeditName,
    Project_Description: this.ProjeditDescription,
    Owner: owner,
    Responsible: resp,
    Category: category,
    Client: client,
    StartDate: datestrStart,
    EndDate: datestrEnd,
    SubmissionName: Submission,
    AllocatedHours: allocation,
    Remarks:this._remarks
  }
  const jsonvalue = JSON.stringify(jsonobj)
  console.log(jsonvalue, 'json');

 
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Project_Code = this.PrjCode;

    this.approvalObj.json = jsonvalue;
    //this.approvalObj.Remarks = this._remarks;
    this.approvalObj.isApproval = 0;


    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
      console.log(data['message'], "edit response");

      if(['1','5','6'].includes(data['message']))
      {
        this.notifyService.showSuccess("Updated successfully.", "Success");
        this.getAddActionDetails();   // rebind project details
        this.getActionsDetails();  // rebind action list.
        this.closeInfos();     // closes the project edit sidebar.
      }
      else if(data['message'] == '2')
      {
        this.notifyService.showError("Not updated.", "Failed");
      }
      else if (data['message'] == '8') {
        let sel_owner=this.owner_dropdown.find((item)=>item.Emp_No==this.selectedOwner);
        if(sel_owner){
          sel_owner=sel_owner.RACIS.slice(0,sel_owner.RACIS.indexOf('('));
        }
        this.notifyService.showError(`${sel_owner} cannot be set as an owner of ${this.selectedOwnResp}`, "Failed");
        this.closeInfos();
      }

      //this.getProjectDetails(this.URL_ProjectCode);

    });


}




// Project Edit End

// RACIS CODE start
RACIS:any=[];


setRACIS(){  
    this.RACIS=[];
  try{
   
     if(this.PrjOwner){
         const obj=this.owner_json.find((item)=>item.EmpNo==this.PrjOwner);
         if(obj){   this.RACIS.push(obj.EmpName);   }
     }
   
     if(this.PrjResp){
      this.RACIS.push(this.Responsible_json[0].OwnerEmpNo==this.PrjResp?this.Responsible_json[0].OwnerName:this.Responsible_json[0].ResponsibleName);
     }

     if(this.PrjAuth){
         const obj=this.Authority_json.find((item)=>item.EmpNo==this.PrjAuth);
         if(obj){  this.RACIS.push(obj.EmpName);  }
     }

     if(this.PrjCrdtr){
          const obj=this.allUser_json.find((item)=>item.Emp_No==this.PrjCrdtr);
          if(obj){  this.RACIS.push(obj.Emp_Name);   } 
     }

     if(this.PrjInformer){
       const obj=this.allUser_json.find((item)=>item.Emp_No==this.PrjInformer);
       if(obj){    this.RACIS.push(obj.Emp_Name);  }
     }

     if(this.PrjAuditor){
        const obj=this.allUser_json.find((item)=>item.Emp_No==this.PrjAuditor);
        if(obj){  this.RACIS.push(obj.Emp_Name); }
     }



     const e=this.PrjSupport.map((item)=>item.Emp_Name);
     this.RACIS=[...this.RACIS,...e];

     let arr=[];
     for(let i=0;i<this.RACIS.length;i++){
      if(!arr.includes(this.RACIS[i]))
         arr.push(this.RACIS[i]);
     }
     this.RACIS=arr;

    console.log("RACIS:",this.RACIS);
  }catch(e){
     console.error('FACING PROBLEM WITH setRACIS METHOD');
  }

}


Addressurl: string = "";
Locationfulladd: string;


public handleAddressChange(address: Address) {

  if (this.checkAddressURL(address.name.toString())) {
    this.Addressurl = address.name;
  }
  else {
    this.Addressurl = address.url;
  }
  this.PrjLocation = address.name;


  console.log(address, "add11")
  this.Locationfulladd = address.formatted_address;

}



checkAddressURL(str) {

  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(str);
}
addreschange() {
  //24.668213927924413, 46.74734971286595
  //17.4333782,78.3664286
  const isValidStrings = ["17.4333", "78.3664"];
  // alert(validationLatitudeLongitude.latLong(...isValidStrings));

  if (this.PrjLocation.includes(',')) {
    // alert(111)
    const loc = this.PrjLocation.split(',');
    var lat = loc[0];
    var long = loc[1];
    var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
    if (reg.exec("40.6892")) {

      // alert(lat);
    } else {
    }
    if (reg.exec(long)) {
      // alert(long);
    }
    else {
    }


  }
}

// strin =new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0);
// RACIS CODE end
// send prj to project owner for approval start


hasNoActionMembers:any=[];
detectMembersWithoutActions(){
  let _hasNoActionMembers=[];
  const ownerObj=this.totalPeopleOnProject.find((ob)=>ob.Role=='Owner');
  if(this.PrjActionsInfo&&this.PrjActionsInfo.length>0){
     const actns_resps=this.PrjActionsInfo.map(pact=>pact.Team_Res);
     _hasNoActionMembers=this.totalPeopleOnProject.filter(ob=>{
         return (ob.Emp_No!=ownerObj.Emp_No)&&actns_resps.includes(ob.Emp_No)==false;
    });
  }
  else{
    _hasNoActionMembers=this.totalPeopleOnProject.filter(ob=>ob.Emp_No!=ownerObj.Emp_No);
  }
  _hasNoActionMembers=_hasNoActionMembers.map(ob=>(ob.RACIS.slice(0,ob.RACIS.indexOf('('))));
  this.hasNoActionMembers=Array.from(new Set(_hasNoActionMembers));
}








sendApproval=async()=>{

  const _sendApprovalToOwner=()=>{

    this.ProjectDto.Emp_No=this.Current_user_ID;
    this.ProjectDto.isTemplate=this.saveAsTemplate;
    this.ProjectDto.Project_Code=this.PrjCode;
    this.ProjectDto.file = this.fileAttachment
    this.ProjectDto.Remarks=this._remarks;
    this.ProjectDto.Project_Cost=this.PrjCost;
    this.createProjectService.NewUpdateNewProjectApproval(this.ProjectDto).subscribe((res:any)=>{ 
      if(res&&res.message==='Success'){
            this.notification.showSuccess("Project sent to project owner "+this.owner_json.find((item)=>item.EmpNo==this.PrjOwner).EmpName+' for approval',"Success");
            // this.BsService.ConfirmBeforeRoute.emit(null);
            this.confirmBeforeRoute=false;
            this.router.navigate(['./backend/ProjectsSummary']);
            //  this.closeInfo();
        }
      else{
          this.notification.showError('something went wrong','Failed');
      }
    });
  }
  debugger

// 1. validation: when project name already exists in database.
const nameVres:any=await this.createProjectService.NewGetProjectnameValidation(this.Current_user_ID,this.projectInfo.Project_Name).toPromise();
if(nameVres&&nameVres.message==1){

      Swal.fire({
        title:'Project Name Already Exists',
        html:`<div style="text-align:justify">  
              The project name "<b>${this.projectInfo.Project_Name}</b>" is already in use. Please change it and try again.
             </div>`,
        showConfirmButton:true,
        showCancelButton:true,
        confirmButtonText:'Rename',
        cancelButtonText:'Cancel'
     }).then(choice=>{
          if(choice.isConfirmed){
            this.Project_details_edit(); 
          }
     });

  return;
}
//

// 2.validation: when project start date is less than the current date.
  const _prjstrtd= new Date(this.projectInfo.StartDate);
  const _prjendd= new Date(this.projectInfo.EndDate);
  const _curtd=new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0);
  if(_prjstrtd<_curtd||_prjendd<_curtd){

  let _title;
  let _msg;
  if(_prjendd<_curtd){   // when both startdate and enddate are invalid.
   _title='Invalid project dates';
   _msg='Please select new start date and end date of the project before submitting it.';
  }
  else if(_prjstrtd<_curtd){  // when startdate is invalid.
    _title='Invalid project start date';
    _msg='Please select new start date of the project before submitting it.';
  }

  Swal.fire({
      title:_title,
      text:_msg,
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:'Select new dates',
      cancelButtonText:'Cancel'
  }).then(choice=>{
        if(choice.isConfirmed){
          this.Project_details_edit(); 
        }
  });

  return;
  }
//


// 3.validation: if project has no actions.
const pdur=Math.abs(moment(_prjstrtd).diff(moment(_prjendd),'days'));
let noactnDialogType:'MANDATORY'|'NOT_MANDATORY';
noactnDialogType=pdur>=15?'MANDATORY':pdur<15?'NOT_MANDATORY':null;
if(this.PrjActionsInfo.length==0){

  const choice=await Swal.fire({
     title:noactnDialogType=='MANDATORY'?'Actions required':'Continue Without Actions?',
     html:`
     <div style="text-align: justify;">
     No actions are defined in this project. Seems like the project hasn't been fully planned for the given duration.<br>
     <div style="font-size: 12px;color: #00a2eb;border: 1px solid #aae4ff;font-weight: 500;margin-top: 10px;background-color: #d8efff;padding: 5px;border-radius: 4px;display: flex; align-items: flex-start;column-gap: 7px;">
      <svg width="30px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003" style="min-width: 18px;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.696-3.534c.63 0 1.332-.288 2.196-1.458l.911-1.22a.334.334 0 0 0-.074-.472.38.38 0 0 0-.505.06l-1.475 1.679a.241.241 0 0 1-.279.061.211.211 0 0 1-.12-.244l1.858-7.446a.499.499 0 0 0-.575-.613l-3.35.613a.35.35 0 0 0-.276.258l-.086.334a.25.25 0 0 0 .243.312h1.73l-1.476 5.922c-.054.234-.144.63-.144.918 0 .666.396 1.296 1.422 1.296zm1.83-10.536c.702 0 1.242-.414 1.386-1.044.036-.144.054-.306.054-.414 0-.504-.396-.972-1.134-.972-.702 0-1.242.414-1.386 1.044a1.868 1.868 0 0 0-.054.414c0 .504.396.972 1.134.972z" fill="#1692df"></path></g>
      </svg>
      <span>Well-defined actions in project can help ensure better tracking and project success.</span>
      </div>
    </div>
     `,
     showConfirmButton:true,
     confirmButtonText: noactnDialogType=='MANDATORY'?'OK':'Continue',
     showCancelButton:noactnDialogType=='NOT_MANDATORY'?true:false
   });

  if((noactnDialogType=='MANDATORY')||(choice.isConfirmed==false&&noactnDialogType=='NOT_MANDATORY')){
    return;
  }

 }
//


// 4.validation: checking all actions in the project have valid dates or not.
if(this.PrjActionsInfo.length>0)   // if project contains actions
{
   const actnsWithWrongDates=this.PrjActionsInfo.filter((actn:any)=>{
    const d1=new Date(actn.StartDate);
    const d2=new Date(actn.EndDate);
    return ((d1>=_prjstrtd&&d2<=_prjendd)==false)||(d1>d2);
   });

  if(actnsWithWrongDates.length>0){    // project includes actions with wrong start date and end date.
    Swal.fire({
        title:`Found ${actnsWithWrongDates.length} Invalid ${actnsWithWrongDates.length>1?'Actions':'Action'}`,
        html:` <div style="text-align: justify;">      
                 Please provide valid start date and end date for the following actions to proceed.
                 <p style="margin-top:1rem;"><b style="font-size: 13px;font-weight: 500;">Project dates :</b> ${moment(this.projectInfo.StartDate).format('YYYY-MM-DD')} <b>-</b> ${moment(this.projectInfo.EndDate).format('YYYY-MM-DD')}</p>
                 <fieldset style="border: 2px solid #b2b3b4; border-radius: 6px; margin-top:15px; padding: 4px; padding-bottom: 6px; overflow-y: auto; max-height: 126px; scrollbar-width: thin; font-size: 13px;">
                      <table width="100%" cellpadding="5px" style="">
                          <thead>
                          <tr> <th></th><th style="font-size: 11px;font-weight: 500;">Actions</th><th style="font-size: 11px;font-weight: 500;">Start</th><th style="font-size: 11px;font-weight: 500;">End</th> </tr>
                          </thead>
                          <tbody> 
                              ${ 
                                actnsWithWrongDates.map((acn)=>{
                                    return `<tr> 
                                                <td width="10%">${acn.IndexId}.</td>
                                                <td width="70%"><div style="display:-webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden !important;">${acn.Project_Name}</div></td> 
                                                <td width="20%" style="font-weight: 500; text-wrap-mode: nowrap; color:red;">${moment(acn.StartDate).format('YYYY-MM-DD')}</td>
                                                 <td width="20%" style="font-weight: 500; text-wrap-mode: nowrap; color:red;">${moment(acn.EndDate).format('YYYY-MM-DD')}</td>
                                            </tr>`
                                    }).join('')
                               }
                          </tbody>    
                      </table>
                    </fieldset>
                     <div style="font-size: 12px;color: #00a2eb;border: 1px solid #aae4ff;font-weight: 500;margin-top: 10px;background-color: #d8efff;padding: 5px;border-radius: 4px;display: flex; align-items: center;column-gap: 7px;">
                      <svg width="30px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003" style="min-width: 18px;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.696-3.534c.63 0 1.332-.288 2.196-1.458l.911-1.22a.334.334 0 0 0-.074-.472.38.38 0 0 0-.505.06l-1.475 1.679a.241.241 0 0 1-.279.061.211.211 0 0 1-.12-.244l1.858-7.446a.499.499 0 0 0-.575-.613l-3.35.613a.35.35 0 0 0-.276.258l-.086.334a.25.25 0 0 0 .243.312h1.73l-1.476 5.922c-.054.234-.144.63-.144.918 0 .666.396 1.296 1.422 1.296zm1.83-10.536c.702 0 1.242-.414 1.386-1.044.036-.144.054-.306.054-.414 0-.504-.396-.972-1.134-.972-.702 0-1.242.414-1.386 1.044a1.868 1.868 0 0 0-.054.414c0 .504.396.972 1.134.972z" fill="#1692df"></path></g>
                      </svg>
                      <span>All actions must start and end within the project duration.</span>
                    </div>
                  </div>
                </div> `,
          showConfirmButton:true,
          confirmButtonText: 'Ok',
      });

   return;   
  }
}
//



// 4.validation: if project has actions, but none are assigned to the person who is creating(Current_user_ID).
// meaning if project has actions then atleast one action must belong to the person who is creating(Current_user_ID).
if(this.PrjActionsInfo.length>0){
  const isPrjRespHasActns=this.PrjActionsInfo.some((draftactn)=>{
   return draftactn.Team_Res==this.Current_user_ID;
  });
  
  if(isPrjRespHasActns==false){
     
     Swal.fire({
       title:"Action Required",
       text:"You need to assign at least one action to yourself before proceeding.",
       showConfirmButton:true,
       showCancelButton:true,
       confirmButtonText:'Assign Action',
       cancelButtonText:'Cancel'
     }).then(choice=>{
         if(choice.isConfirmed){
          this.BsService.setSelectedTemplAction({...this.BsService._templAction.value,assignedTo:this.Current_user_ID});
          this.openActionSideBar();  
         }
     });

   return;  
  }
}
//



// 5.validation: Confirm Project Allocated hours
  const hrsToActns=this.PrjActionsInfo.reduce((sum,acn)=>(sum+Number.parseFloat(acn.AllocatedHours)),0);
  const hrsUnallocated=this.projectInfo.AllocatedHours-hrsToActns;
  if(hrsUnallocated>0){
       const choice=await Swal.fire({
          title:'Confirm Project Hours Allocation',
          html:` <div style="text-align: justify;">
                   You have planned <b>${this.projectInfo.AllocatedHours} hrs</b> for the project. <br/>However, <b>${hrsUnallocated} hrs</b> remain unassigned. Continue or assign remaining hours?
                  ${this.PrjActionsInfo.length>0?`
                    <fieldset style="border: 2px solid #b2b3b4; border-radius: 6px; margin-top:15px; padding: 4px; padding-bottom: 6px; overflow-y: auto; max-height: 126px; scrollbar-width: thin; font-size: 13px;">
                      <legend style="width: 40px;font-size: 9px;font-weight: 500;color: #ffffff;margin-left: 3px;letter-spacing: 0.45px;border: 1px solid #3085d6;border-radius: 4px;background-color: #3085d6;padding: 2px;text-align: -webkit-center;">Actions</legend>
                      <table width="100%" cellpadding="5px" style="">
                              ${
                                    this.PrjActionsInfo.map((acn,i)=>{
                                    return `<tr> <td width="10%">${i+1}.</td><td width="70%"><div style="display:-webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden !important;">${acn.Project_Name}</div></td> <td width="20%" style="font-weight: 500; text-wrap-mode: nowrap;">${acn.AllocatedHours} hrs</td> </tr>`
                                    }).join('')
                              }
                      </table>
                    </fieldset>
                    <span style="font-size: 11px;font-weight: 500;color: #838484;display: flex;column-gap: 2px;align-items: center;margin-top: 3px;">
                    <svg width="18px" height="18px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <circle cx="12" cy="12" r="9" stroke="#147137" stroke-width="1.152"></circle> <path d="M8 12L11 15L16 9" stroke="#147137" stroke-width="1.152"></path> </g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#147137" stroke-width="1.608"></circle> <path d="M8 12L11 15L16 9" stroke="#147137" stroke-width="1.608"></path> </g></svg>
                     Assigned ${hrsToActns} / ${this.projectInfo.AllocatedHours} hours
                    </span>
                  `:''}
                </div> `,
          showConfirmButton:true,
          showCancelButton:true,
          cancelButtonColor:'#3085d6',
          confirmButtonText: 'Continue',
          cancelButtonText: 'Create actions'
      });

    if(choice.dismiss==Swal.DismissReason.cancel){
        this.openActionSideBar();
        return;
     }else if(choice.dismiss==Swal.DismissReason.backdrop) { return; }

  }

//



// 6.validation: if any RACIS member doesn't have atleast one action in the project.
this.detectMembersWithoutActions();
if(this.hasNoActionMembers.length>0){

const people_names=this.hasNoActionMembers.reduce((members,new_member,index,arr)=>{
        return members+`<b>'${new_member}'</b>${index==arr.length-2?' and ':index<arr.length-2?'<b> ,</b>':'<b>. </b>'}`;
},'');

 const choice=await Swal.fire({
    title:'Project team with no actions assigned',
    html:`<div class="text-justify">
           No actions has been assigned to
           ${people_names}<br/>
           <div class="mt-2">Do you still want to proceed with this project?</div>
    </div>`,
    showConfirmButton:true,
    showCancelButton:true,
    confirmButtonText: 'Yes, Proceed',
    cancelButtonText: 'Cancel'
  })
 if(choice.isConfirmed==false){
  return;
 }
}
//

// 7.Calculate project cost
if(this.PrjActionsInfo.length>0)  // check if there are actions in the project then calculate project cost using those actions cost.
{
  this.PrjCost=this.PrjActionsInfo.reduce((sum,_draftactn)=>{
    return sum+_draftactn.Project_Cost;
   },0);
}
else 
{   
  if(noactnDialogType=='NOT_MANDATORY')
  {
    const alhrVal=this.projectInfo.AllocatedHours;  
    this.ProjectDto.Emp_No=this.Current_user_ID;
    this.ProjectDto.Hours=alhrVal.toString();  
    const costres:any=await this.createProjectService.GetCPProjectCost(this.ProjectDto).toPromise();    // wait for project cost.
    if(costres&&costres.Status){
      this.PrjCost=costres.Data;
      console.log('project_cost:',this.PrjCost);
    }
    else{
      // console.log('ERROR WHILE CALCULATING PROJECT COST.')
      // return;   // if any failure occur during the project cost calculation.
    
      // test for new users    (Temporary)
      const cost=alhrVal*10
      this.PrjCost=cost;
      // test for new users  (Temporary)

    }
  }
  else 
  return;
}
//


// 8.validation: project cost confirmation from user.
 const final_choice=await Swal.fire({
       title:'Project Budget',
       html:`
        <div style="text-align: justify;">
          You will be going to spend <b>"${this.PrjCost}.00 SAR"</b> on this project. Do you want to continue?

          ${this.PrjActionsInfo.length>0?`
            <fieldset style="border: 2px solid #b2b3b4; border-radius: 6px; margin-bottom: 15px; margin-top:10px; padding: 4px; padding-bottom: 6px; overflow-y: auto; max-height: 126px; scrollbar-width: thin; font-size: 13px;">
              <legend style="width: 77px;font-size: 9px;font-weight: 500;color: #ffffff;margin-left: 3px;letter-spacing: 0.45px;border: 1px solid #3085d6;border-radius: 4px;background-color: #3085d6;padding: 2px;text-align: -webkit-center;">Actions Budget</legend>
              <table width="100%" cellpadding="5px" style="">
                      ${
                             this.PrjActionsInfo.map((acn,i)=>{
                             return `<tr> <td width="10%">${i+1}.</td><td width="70%"><div style="display:-webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; overflow: hidden !important;">${acn.Project_Name}</div></td> <td width="20%" style="font-weight: 500; text-wrap-mode: nowrap;">${acn.Project_Cost}.00 SAR</td> </tr>`
                            }).join('')
                       }
              </table>
            </fieldset>
          `:''}

          ${this.PrjCost>=3000?`
                 <span style="display: flex;align-items: center;column-gap: 8px;font-size: 12px;margin-top: 8px;background-color: #fdbc4a38;color: #c57a05;border: 1px solid #cc922d63;padding: 10px;border-radius: 5px;font-weight: 500;">
                  <svg width="40px" height="20px" viewBox="0 0 512 512" fill="#c57a05" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="notif-img"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>warning</title><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="add" transform="translate(32.000000, 42.666667)"><path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M225.144334,42.6739678 L42.6666667,362.009885 L407.622001,362.009885 L225.144334,42.6739678 Z M224,272 C239.238095,272 250.666667,283.264 250.666667,298.624 C250.666667,313.984 239.238095,325.248 224,325.248 C208.415584,325.248 197.333333,313.984 197.333333,298.282667 C197.333333,283.264 208.761905,272 224,272 Z M245.333333,106.666667 L245.333333,234.666667 L202.666667,234.666667 L202.666667,106.666667 L245.333333,106.666667 Z" id="Combined-Shape"></path></g></g></g></svg>
                  The project cost has reached 3000 SAR or more. Please ensure that the plan aligns with the annual business plan\'s budget.</span>
          `:''}
        </div> `,

       showConfirmButton:true,
       showCancelButton:true,
       confirmButtonText: 'Yes, confirm',
       cancelButtonText: 'Cancel'
 });
 if(final_choice.isConfirmed){
  _sendApprovalToOwner();
 }
//

}
// send prj to project owner for approval end



// remove assigned/conditional project start
reason4PrjRejection:string;
removeACPrj(index:number){

  if(!(this.reason4PrjRejection&&this.reason4PrjRejection.trim())){
      this.notProvided=true;
      return;
  }  // when mandatory field not provided.

  // Emp_No, assignid ,Remarks
  this.ProjectDto.Emp_No=this.Current_user_ID;
  this.ProjectDto.assignid=+this.assigntask_json[index-1].Assign_Id;
  this.ProjectDto.Remarks=this.reason4PrjRejection;

  this.createProjectService.NewDeleteRejectAssignTask(this.ProjectDto).subscribe((res:any)=>{

        if(res&&res.message==='Success'){
             this.notification.showSuccess(`"${this.assigntask_json[index-1].Task_Name}" removed.`,"Success");
             this.GetAssignedTaskDetails();
             document.getElementById('ACPrjRemovalbtn').click();    // closes and clear values also.
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
          'Template undisturbed',
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











// template open for new project creation start
PrjTemplActions:any=[];

openTemplate(template:any){
  console.log("template:",template);

  this.projectMoreDetailsService.getProjectMoreDetails(template.Project_Code).subscribe((res:any)=>{

    const PInfo=JSON.parse(res[0].ProjectInfo_Json)[0];
    console.log(res, "temp");


   this.PrjOfType=PInfo.Project_Type;
   this.Prjtype=this.ProjectType_json.find((item)=>item.ProjectType.trim()===this.PrjOfType.trim()).Typeid;
   this.PrjClient=PInfo.ClientNo;
   this.PrjName=PInfo.Project_Name;
   this.PrjDes=PInfo.Project_Description;
   this.PrjCategory=this.Category_json.find((item)=>item.CategoryName.trim()===PInfo.Category).CategoryId;
   this.prjsubmission=PInfo.SubmissionId;
   this.ngDropdwonPort=[];
   this.PrjOwner=PInfo.OwnerEmpNo;
   this.PrjResp=PInfo.ResponsibleEmpNo;
   this.PrjAuth=PInfo.AuthorityEmpNo;
   this.fileAttachment=null
  //  this.PrjCrdtr='';
   this.PrjAuditor=null;
  //  this.PrjInformer='';
  //  this.PrjSupport=[];
   this.Allocated_Hours=null;
   //  this.fileAttachment=new File()

    if(['001','002'].includes(this.Prjtype)){
      const actions=JSON.parse(res[0].Action_Json);
      console.log('*action we are gettings:',actions);
      if(actions)
      this.PrjTemplActions=actions.filter(action=>action.template);
      else 
      this.PrjTemplActions=[];
    }

    if(this.PrjName){ 
      this.isPrjNameValid=this.isValidString(this.PrjName.trim(),3); 
      this.isPrjNameInUse(this.PrjName);    
    }  // if project name given then validate it.


  })

  this.service.NewProjectService(template.Project_Code).subscribe(
    (data) => {

      if (data != null && data != undefined) {
          this.PrjSupport=JSON.parse(data[0]['RacisList']);
          console.log('****template support***',this.PrjSupport);
          let _prjsupport=[];
          let _prjcoordntr;
          let _prjinfrmr;

          this.PrjSupport.forEach((item:any)=>{
                   if(item.Role==="Support")
                    _prjsupport.push({ Emp_No:item.Emp_No, Emp_Name:item.RACIS});

                   if(item.Role==="Coordinator")
                    _prjcoordntr=item;

                   if(item.Role==='Informer')
                   _prjinfrmr=item;
          });

          this.PrjCrdtr=_prjcoordntr.Emp_No;
          this.PrjInformer=_prjinfrmr.Emp_No;
          this.PrjSupport=_prjsupport;
          this.setRACIS();

      }
   });    // for geeting the support members.


}


openTemplateAction(templAction){
  const taction = { name: templAction.Project_Name, description:templAction.Project_Description ,assignedTo:''};
  this.BsService.setSelectedTemplAction(taction);
  this.openActionSideBar();                                                                 // opens the sidebar
}


//template open for new project creation end



// cancel project creation start
// cancelPrjCreation(){
//   Swal.fire({
//     title:'Cancel Project Creation',
//     text:"This action cannot be undo.",
//     showCancelButton:true,
//     showConfirmButton:true
//   }).then((choice:any)=>{
//         if(choice.isConfirmed){
//           this.Back_to_project_details_tab();
//           this.back_to_options();

//         }
//   })
// }
// cancel project creation end






// portfolio code start

_portfoliosList:any=[];
ngDropdwonPort:any=[];
isPortDrpDwnOpen:boolean=false;
getPortfolios(){
  this.service.GetPortfoliosBy_ProjectId(null).subscribe(res=>{
    console.log("res+>",res);
    this._portfoliosList=res;
  });
}

onPortfolioSelected(e){
    const prtf=this.ngDropdwonPort.find((item)=>item.Portfolio_ID==e.option.value);
    if(prtf){
         this.ngDropdwonPort.splice(this.ngDropdwonPort.indexOf(prtf),1);
    }
    else{
       const portfolio=this._portfoliosList.find((item)=>item.Portfolio_ID==e.option.value)
        if(portfolio)this.ngDropdwonPort.push(portfolio);
    }
   this.openAutocompleteDrpDwn('PortfolioDrpDwn');
   console.log('PORTFOLIOS:',this.ngDropdwonPort)
}

removePorfolioSelected(p){
   const index=this.ngDropdwonPort.indexOf(p);
   if(index!==-1){
           this.ngDropdwonPort.splice(index,1);
   }
}

openAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
}

closeAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
}




// portfolio code end
show_massage:boolean=false
newpfl_massage(){
  this.show_massage=true
}

// clearAllFields(){

// this.Prjtype=undefined;
// this.PrjClient=undefined;
// this.PrjName='';
// this.PrjDes='';
// this.PrjCategory='';
// this.Prjstartdate='';
// this.Prjenddate='';
// this.ngDropdwonPort=[];
// this.fileAttachment=null;

// }



// CALCULATE PROJECT COST START.

// getPrjCost(alchr:string):void{
// console.log("input allocated hr:",alchr);
// let alhr=alchr;
// if(['003','008'].includes(this.Prjtype)){
//      //eg: '00 Hr : 15 Mins'
//      const h=Number.parseInt(alhr.split(':')[0]);
//      const m=Number.parseInt(alhr.split(':')[1]);
//      alhr=h+'.'+m;
// }
//   this.ProjectDto.Emp_No=this.Current_user_ID;
//   this.ProjectDto.Hours=alhr;
//   this.createProjectService.GetCPProjectCost(this.ProjectDto).subscribe((res:{Status:boolean,Message:string,Data:number})=>{
//     if(res.Status){
//        this.PrjCost=res.Data;
//        console.log(this.PrjCost);
//     }
//   })
// }


// CALCULATE PROJECT COST END.

// DRAFT PROJECT CODE START.

deleteDraft(index:number){

    Swal.fire({

      showCancelButton:true,
      showConfirmButton:true,
      title:'Are you sure?',
      text:`This action will permanently delete this '${this.draft_json[index].Project_Name}'.`,
    }).then(choice=>{
         if(choice.isConfirmed){

          this.ProjectDto.Project_Code=this.draft_json[index].Project_Code;
          this.ProjectDto.Emp_No=this.Current_user_ID;
          this.createProjectService.NewDeleteDraft(this.ProjectDto).subscribe((res:any)=>{
                     if(res.message=='1'){
                       this.notifyService.showSuccess(`'${this.draft_json[index].Project_Name}' draft is deleted.`,"Deleted successfully");
                       this.GetAssignedTaskDetails();
                     }
                     else{
                        this.notifyService.showError(`Failed to delete ${this.draft_json[index].Project_Name}`,"Failed");
                     }
           });

         }
    });
}


// deletingDraftactions(){
//   this.projectMoreDetailsService.NewDeleteDraftAction(this.PrjCode).subscribe((res)=>{
//     console.log(res,'deleteding draft action adeldsfsdfsd')
//    });
// }

Action_Code:any

deletingDraftactions(index:number){

  Swal.fire({

    showCancelButton:true,
    showConfirmButton:true,
    title:'Are you sure?',
    text:`'${this.PrjActionsInfo[index].Project_Name}' will permanently deleted`,
  }).then(choice=>{
       if(choice.isConfirmed){
        this.Action_Code=this.PrjActionsInfo[index].Project_Code;

          this.projectMoreDetailsService.NewDeleteDraftAction(this.Action_Code).subscribe((res)=>{

                   if(res['message']=='1'){
                     this.notifyService.showSuccess(`'${this.PrjActionsInfo[index].Project_Name}' action is deleted`,"Deleted successfully");
                    //  this.GetAssignedTaskDetails();
                    this.currentActionView=undefined;
                    this.getActionsDetails();  // rebind action list.
                    // const draftIndex=this.draft_json.findIndex(d=>d.Project_Code==this.PrjCode)
                    // this.openDraft(draftIndex);
                   }
                   else{
                      this.notifyService.showError(`Failed to delete ${this.PrjActionsInfo[index].Project_Name}`,"Failed");
                   }
         });

       }
  });
}











openDraft(index:number){

  console.log(this.draft_json[index]);
  this.Prjtype=this.draft_json[index].Project_Block;
  this.PrjCode=this.draft_json[index].Project_Code;
  this._remarks = this.draft_json[index].Remarks
  this.notificationMsg=3;

// // opens the step-3 view
document.getElementsByClassName('np-step-1')[0].classList.add('d-none');
document.getElementsByClassName('Assigned-projects-list')[0].classList.add('d-none');
document.getElementsByClassName('Templates-list')[0].classList.add('d-none');
document.getElementsByClassName('Drafts-list')[0].classList.add('d-none');
document.getElementsByClassName('np-step-2')[0].classList.remove('d-none');
document.getElementsByClassName('right-side-dv')[0].classList.remove('d-none');
$('.Project_details_tab,.add_tema_tab').hide();
$('.action-left-view').removeClass('d-none');
$('.sbs--basic li').removeClass('active');
$('.sbs--basic li:nth-child(1)').addClass('finished');
$('.sbs--basic li:nth-child(2)').addClass('finished');

setTimeout(()=>{
$('.Add_action_tab').show();
$('.sbs--basic li:nth-child(3)').addClass('active');
},1);   // Prjtype is used in these elements. we must execute these after change detection completes.

//  opens the step-3 view

this.newProjectDetails(this.draft_json[index].Project_Code);
// this.getActionCount(this.draft_json[index].Project_Code);

// this.getActionsDetails();

this.draftActionsLoading=true;
this.projectMoreDetailsService.getProjectMoreDetails(this.PrjCode).subscribe((res)=>{
  console.log("after after openDraft method:",res);
  this.draftActionsLoading=false;

  if(res[0].Action_Json)
  this.PrjActionsInfo = JSON.parse(res[0].Action_Json);
  else
  this.PrjActionsInfo=[];

  const alh=this.PrjActionsInfo.reduce((sum,action)=>sum+action.AllocatedHours,0);
  const pjalh=this.draft_json[index].Duration;
  this.isExceededTotalAllocatedHr=pjalh==alh;


// getting file attachment name if provided in the draft project. start
  const PrjI=JSON.parse(res[0]['ProjectInfo_Json'])[0];

  if(PrjI.Sourcefile){
    this.fileAttachment={name:PrjI.Sourcefile+'.'+PrjI.contenttype};
    this.isFileUploaded=true;
  }
  else{
       this.fileAttachment=null;
       this.isFileUploaded=undefined;
  }
// getting file attachment name if provided in the draft project. start

this.detectMembersWithoutActions();   // update 'hasNoActionMembers' may needed since new action is added into the project.
// this.hasActnsMatchingPrjDeadline();   // warning dialog if more than 50% actns deadline same as the project deadline.
});


// lock sidebar and header
// this.BsService.ConfirmBeforeRoute.emit('AT-3RD-STEP-PC'); // we are on step3 screen.
// lock sidebar and header
this.confirmBeforeRoute=true; // confirmation to appear when user tries to leave create project page without submit.

}

reset(){
  // step1 form clear.   start
  this.PrjName=null;
  this.PrjDes=null;
  this.Prjtype=null;
  this.PrjCategory=null;
  this.Prjstartdate=null;
  this.Prjenddate=null;
  this.Allocated_Hours=null;
  this.prjsubmission=null;
  this.Annual_date=null;
  this.ngDropdwonPort=[];
  this.fileAttachment=null;
  this.invalidFileSelected=false;
  this.isPrjNameUsed=false;
    // step1 form clear.   end

    // step2 form clear.   start
  this._remarks=null;
  this.saveAsTemplate=false;
  this.PrjAuditor=null;
  if(this.allUser_json&&this.Team_json){
    const defaultvalue=this.allUser_json.find((item)=>{
      return (item.Emp_Name===this.Team_json[0].SupportName&&item.Emp_No===this.Team_json[0].SupportNo);
    });
   this.PrjSupport=defaultvalue?[defaultvalue]:[];
   this.PrjCrdtr=this.Team_json[0].CoordinatorNo;
   this.PrjInformer=this.Team_json[0].InformerNo;
  }
  else{
      this.PrjSupport=[];
      this.PrjCrdtr=null;
      this.PrjInformer=null;
  }
  this.setRACIS();
     // step2 form clear.   start

  // step3 info clear. start
    this.projectInfo=null;
    this.PrjTemplActions=[];
    this.PrjActionsInfo=[];
    this.draftActionsLoading=false;
    this.hasNoActionMembers=[];
    this.totalPeopleOnProject=[];
    this.PrjCost=0;
  // step3 info clear. end

}

// DRAFT PROJECT CODE END.

isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
isPrjDesValid:'TOOSHORT'|'VALID'='VALID';


isPrjNameValids:'TOOSHORT'|'VALID'='VALID';
isPrjDesValids:'TOOSHORT'|'VALID'='VALID';


// project name already exists start.

isPrjNameUsed:boolean=false;
pname_Intervalid:any;
isPrjNameInUse(project_name:string){
  if(this.pname_Intervalid){ clearTimeout(this.pname_Intervalid);  }
  this.pname_Intervalid=setTimeout(()=>{
    if(project_name&&project_name.trim()){
      this.createProjectService.NewGetProjectnameValidation(this.Current_user_ID,project_name).subscribe((res:any)=>{ 
        if(res){
          if(res.message=='1')
            this.isPrjNameUsed=true;
          else 
            this.isPrjNameUsed=false;
        }
    });
  } 
  },500);
}



// project name already exists end.

isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
 if(inputString){

  // let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
  let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
// let rg = new RegExp('^\\s*(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+(?:\\s+\\S+)*\\s*$');


 const x=rg.test(inputString.trim());

return x ? 'VALID' : 'TOOSHORT';

 }
return 'TOOSHORT'

}
// isValidString(inputString: string, minWords: number): boolean {
//   // Split the input string by spaces and special characters, but treat parentheses and their contents as single words
//   const words = inputString.trim().split(/\s+|(?<=\([^)]*)(?<!\()\s+(?=[^)]*\))/);
//   console.log(words); // Log the words array to see what it contains
//   // Count the number of words
//   const wordCount = words.filter(word => word.length > 0).length;
//   // Check if the word count is at least minWords
//   return wordCount >= minWords;
// }





// draft project creation code start.
savePrjAsDraft:boolean=false;
saveAsDraft(){
   this.savePrjAsDraft=true;
   this.createProject();
}



//  draft project creation code end.
newProject_Type:any
prevPrjType:string|undefined;
changeprojecttype(){

  if(!(['001','002','011'].includes(this.prevPrjType)&&['001','002','011'].includes(this.Prjtype))){

    //when moving from core or secondary or todo  ---> standard or routine. 
    if(['001','002','011'].includes(this.prevPrjType)&&['003','008'].includes(this.Prjtype)){
          this.prjsubmission=null;
          this.Allocated_Hours=null;
    }


    //when moving from standard or routine ----> core or secondary or todo.
    if(['003','008'].includes(this.prevPrjType)&&['001','002','011'].includes(this.Prjtype)){
      this.Prjstartdate=null;
      this.Prjenddate=null;
      this.Allocated_Hours=null;
    }

  }

  const datediff=Math.abs(moment(this.Prjstartdate).diff(moment(this.Prjenddate),'days'));
  if(this.Prjtype==='011'&&datediff>3){
       this.Prjenddate=null;
  }

  this.prevPrjType=this.Prjtype;



  console.log("racis:",this.RACIS);
}


// switch (this.Prjtype) {

//   case '001':  this.PrjCategory,this.start_Date,this.end_Date,this.Allocated_Hours ; break;
//   case '002':  this.PrjCategory,this.start_Date,this.end_Date,this.Allocated_Hours ; break;
//   case '011':  this.PrjCategory,this.start_Date,this.end_Date,this.Allocated_Hours ; break;

//     case '003':  this.PrjCategory=null,this.start_Date=null,this.end_Date=null,this.Allocated_Hours=null; break;
//     case '008':  this.PrjCategory=null,this.start_Date=null,this.end_Date=null,this.Allocated_Hours=null; break;
//   // default: { };
// }






// functionality to check prj allocated hr with action allocated hrs
isExceededTotalAllocatedHr:boolean=false;
hasExceededTotalAllocatedHr(actionAllocHr:any):boolean{

   if(!this.isExceededTotalAllocatedHr){

          const totalhrsused=this.PrjActionsInfo.reduce((sum:any,action:any)=>{
            return sum+Number.parseInt(action.AllocatedHours);
          },0)
          const newAlcHrs=totalhrsused+parseInt(actionAllocHr);   // used hrs + new alloc
          const result=newAlcHrs>this.projectInfo.AllocatedHours;
          this.isExceededTotalAllocatedHr=result;
          return  result;
   }
   else
      return false;
}

// functionality to check prj allocated hr with action allocated hrs


    ///////////////////////////////////////// Action Edit start /////////////////////////////

    Action_details_edit() {
      //1. show the sidebar
      document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
      document.getElementById("Action_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
      document.getElementById("kt-bodyc").classList.add("overflow-hidden");
      document.getElementById("rightbar-overlay").style.display = "block";
      document.getElementById("kt_wrapper").style.zIndex="99";
      $("#mysideInfobar12").scrollTop(0);

      //2. data bind into the sidebar
      this.bindActionDetailsIntoForm();
      this.updateCharacterCount_Action()
    }

    closeAction_details_edit(){
      document.getElementById("Action_Details_Edit_forms").classList.remove("kt-quick-Project_edit_form--on");
      document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
      // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
      document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
      document.getElementById("project-creation-page").classList.remove("position-fixed");
      document.getElementById("rightbar-overlay").style.display = "none";
      document.getElementById("kt_wrapper").style.zIndex="unset";


      this.notProvided=false;   // back to initial state.
      this.characterCount_Action=0; // clear
      this.isPrjNameValid='VALID'; // back to initial state.
      this.isPrjDesValid='VALID'; // back to initial state.
    }
    Sourcefile:any

bindActionDetailsIntoForm() {

      // this.OGownerid = this.projectInfo['OwnerEmpNo'];
      // this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];
      // this.OGselectedcategoryid = this.projectInfo['Reportid'];
      // this.OGselectedclientid = this.projectInfo['ClientNo'];
      // this.OGSubmission_Nameid = this.projectInfo['SubmissionId'];
      // this.OGProjectType = this.projectInfo.Project_Type;

      // this.OGcategory = this.projectInfo.Category;
      // this.OGclient = this.projectInfo.Client
      // this.Submission_Name = this.projectInfo.SubmissionName
      // this.OGSubmission = this.projectInfo.SubmissionName
      // this.Allocated_Hours = this.projectInfo.StandardAllocatedHours
//
this.OGProjectTypeid = this.projectInfo['Project_Block'];                    // Prj type no.

this.ProjectName = this.PrjActionsInfo[this.currentActionView].Project_Name;      // action name
this.ProjectDescription = this.PrjActionsInfo[this.currentActionView].Project_Description;  // action description

this.selectedOwner = this.PrjActionsInfo[this.currentActionView].Owner;      // action owner name.
this.OGowner = this.PrjActionsInfo[this.currentActionView].Project_Owner;    // action owner no.

this.selectedOwnResp = this.PrjActionsInfo[this.currentActionView].Responsible;   // action resp name.
this.OGresponsible = this.PrjActionsInfo[this.currentActionView].Team_Res;        // action resp no.

this.selectedcategory = this.Category_List.find(ctg=>ctg.ReportType.trim()===this.PrjActionsInfo[this.currentActionView].Category.trim()).ReportID; // category no.
this.selectedclient = this.PrjActionsInfo[this.currentActionView].ClientNo;     // client no.

this.Start_Date = this.PrjActionsInfo[this.currentActionView].StartDate;       // action start date.
this.End_Date = this.PrjActionsInfo[this.currentActionView].EndDate;          // action end date.
this.ActionDuration=this.PrjActionsInfo[this.currentActionView].Duration+1;     // action duration.

this.Allocated = this.PrjActionsInfo[this.currentActionView].AllocatedHours;    // action alloc hrs.

this._remarks = this.PrjActionsInfo[this.currentActionView].Remarks;

this.newaction_Cost=this.PrjActionsInfo[this.currentActionView].Project_Cost;   // action cost value.

this.setActnMaxAllocatableHrs();  // calculate 'a_maxAllocatableHrs' value based on start date and end date.

}


alterAction(){
debugger
// v1. Action allocated hr must be <= max allocated hrs value of action.
  if (this.Allocated <= this.a_maxAllocatableHrs){
    this.notProvided = false
  }
  else{
    this.notProvided = true
    return
  }


// v2. Action date Can't be greater than project end date
  const dateone=new Date(this.projectInfo.EndDate)
  const datetwo= new Date(this.End_Date)
  if(dateone < datetwo){
    Swal.fire({
      title:"Invalid Action Date",
      text:"Action date Can't be greater than project end date",
      showCancelButton:true
    });
    return
  }



// v3. form input validations.
this.isPrjNameValid=this.isValidString(this.ProjectName,2);
this.isPrjDesValid=this.isValidString(this.ProjectDescription,3);
  if(!(this.ProjectName&&this.isPrjNameValid=='VALID'&&this.ProjectName.length<=100&&this.ProjectDescription&&this.isPrjDesValid==="VALID"&&this.ProjectDescription.length<=500&&
          this.OGowner&&this.OGresponsible&&
          this.selectedcategory&&this.selectedclient&&
          this.Start_Date&&this.End_Date&&
          this.Allocated)){
            this.notProvided=true;
            return;
  }else this.notProvided=false;   // back to initial value.


// v4.Action end date should be less than the project deadline
const actn_deadline = new Date(this.End_Date);
const prj_deadline = new Date(this.projectInfo.EndDate);
if(actn_deadline.getTime()==prj_deadline.getTime()){
      const already_matched=this.actnsMatchingPrjDeadline();
      if(already_matched>=2){
        Swal.fire({
          title:'Invalid Action End Date',
          html:'<div style="text-align:justify;">Action end date should be less than the project deadline. Please modify the action end date to continue</div>',
          // icon:'error',
          showConfirmButton:true,
          confirmButtonText:'OK'
       });
       return;
      }
}



  // action edit start.
      const datestrStart = moment(this.Start_Date).format("MM/DD/YYYY");
      const datestrEnd = moment(this.End_Date).format("MM/DD/YYYY");
      let jsonobj:any={
          Project_Type: this.OGProjectTypeid,             // prj type no.
          Project_Name: this.ProjectName,                 //new action name
          Project_Description: this.ProjectDescription,   //new action description
          Owner: this.OGowner,                           // action owner no.
          Responsible: this.OGresponsible,               // action resp no.
          Category: this.selectedcategory,              // prj category no.
          Client: this.selectedclient,                 // prj client no.
          StartDate:datestrStart,                   // new action start date.
          EndDate:datestrEnd,                     // new action end date.
          AllocatedHours: this.Allocated,             // new action alc hrs.
          Project_Cost:this.newaction_Cost             // new action cost.

      };

      jsonobj = JSON.stringify(jsonobj);
      const dateOne = new Date(this.projectInfo.EndDate);   // prj end date.
      const dateTwo = new Date(this.End_Date);             // new action end date.

      this.approvalObj.Emp_no = this.Current_user_ID;  // emp no.
      this.approvalObj.Project_Code = this.PrjActionsInfo[this.currentActionView].Project_Code;  // action code.
      this.approvalObj.json = jsonobj;            // action details
      this.approvalObj.Remarks = this._remarks?this._remarks:'';   // remark provided.

      if (dateOne < dateTwo) {
        Swal.fire({
          title: 'Action deadline is greater than main project deadline ?',
          text: 'Do you want to continue for selection of date after main project deadline!!',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((response: any) => {
          if (response.value) {
            this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
              console.log(data['message'], "edit response");
              if (data['message'] == '1') {
                this.notifyService.showSuccess("Updated successfully.", "Success");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '2') {
                this.notifyService.showError("Not updated.", "Failed");
              }
              else if (data['message'] == '5') {
                this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===this.OGresponsible))["RACIS"], "Updated successfully");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '6') {
                this.notifyService.showSuccess("Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully.");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '8') {
                this.notifyService.showError("Selected action owner cannot be updated.", "Not updated");
                this.closeAction_details_edit();

              }

              // this.getProjectDetails(this.URL_ProjectCode);
              // this.closeInfo();
              // this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
            });
          } else if (response.dismiss === Swal.DismissReason.cancel) {
        //    this.close_space();
            Swal.fire(
              'Cancelled',
              'Action end date not updated',
              'error'
            )
          }
        });
      }
      else {
        this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
          console.log(data['message'], "edit response");
          if (data['message'] == '1') {
            this.notifyService.showSuccess("Updated successfully.", "Success");
            this.getActionsDetails();
            this.closeAction_details_edit();
          }
          else if (data['message'] == '2') {
            this.notifyService.showError("Not updated.", "Failed");
          }
          else if (data['message'] == '5') {
            this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===this.OGresponsible))["RACIS"], "Updated successfully");
            this.getActionsDetails();
            this.closeAction_details_edit();
          }
          else if (data['message'] == '6') {
            this.notifyService.showSuccess("Updated successfully" + "Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
            this.getActionsDetails();
            this.closeAction_details_edit();
          }
          else if (data['message'] == '8') {
            this.notifyService.showError("Selected action owner cannot be updated.", "Not updated");
            this.closeAction_details_edit();
          }

          // this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
          // this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
          // this.closeInfo();
        });
      }

  }


  getNewActnCost(){   debugger
    let alhrVal:any=this.Allocated;
    if(alhrVal){
      const newAlhr=alhrVal;
      const empNo=(this.selectedOwnResp==this.PrjActionsInfo[this.currentActionView].Responsible?this.OGresponsible:this.selectedOwnResp);
      this.service.GetCPProjectCost(empNo,newAlhr.toString()).subscribe((res:any)=>{   debugger
        if(res&&res.Status){    
            const costVal=res.Data;
            this.newaction_Cost=costVal;
            console.log("cost:",costVal);
        }
        else{  // on failure
          // test for new users (Temporary)
                const cost=newAlhr*10;
                this.newaction_Cost=cost;
          // test for new users (Temporary)
        }
      });
    }
  }


 
LoadDocument1(prj_code:any,iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {  

  let FileUrl: string;
  // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
  FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

  if (iscloud == false) {
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";

    if (this.projectInfo.AuthorityEmpNo == this.projectInfo.ResponsibleEmpNo) {
      // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
      FileUrl = (FileUrl +  this.projectInfo.ResponsibleEmpNo + "/" + this.projectInfo.Project_Code + "/" + url1);
    }
    else if (this.projectInfo.AuthorityEmpNo != this.projectInfo.ResponsibleEmpNo) {
      FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + this.projectInfo.Project_Code + "/" + url1);
    }

    let name = "ArchiveView/" + this.projectInfo.Project_Code;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(FileUrl);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&"+  "type=" + type+"&"+"noRedirection=true";
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }

  else if (iscloud == true) {
    let name = "ArchiveView/" + prj_code;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(url1);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type+"&"+"noRedirection=true";
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }
}








   ///////////////////////////////////////// Action Edit End /////////////////////////////

  //  onPrjStrtDateChanged() {
  //
  //   const inputdate=new Date(this.Start_Date);
  //   const isvalid=this.PrjActionsInfo.every((actn:any)=>{
  //         const actdate=new Date(actn.StartDate);
  //          actdate<inputdate;
  //         Swal.fire({
  //           showCloseButton:true,
  //           title:'Invalid Project Start Date.',
  //           text:"Please ensure that the project start date is set correctly as actions cannot start before the project's start date.."
  //        });
  //  return
  //   });
  //   if(!isvalid){
  //     setTimeout(()=>{
  //       this.Start_Date=this.projectInfo.StartDate;
  //     },10);


  //   }


  //   }

  // onPrjStrtDateChanged() {
    // ;




    onPrjDeadlineChanged(){

      const inputdate=new Date(this.End_Date);
      const isvalid=this.PrjActionsInfo.every(actns=>{
          const actenddate=new Date(actns.EndDate);
          return inputdate>=actenddate
      });
      if(!isvalid){
        setTimeout(()=>{
          this.End_Date=this.projectInfo.EndDate;
        },10)

        Swal.fire({
          showCloseButton:true,
          title:'Invalid end date.',
          text:"Please ensure that the project end date is set appropriately, as actions cannot end after the project's end date."
       });

      }
    }


//     reseting() {

//
//       const f= new Date(this.projectInfo.StartDate)

//       const a= new Date(this.projectInfo.EndDate)
//       const g= new Date(this.todayDate)
//         if (f < g && a<g  || a<g || f<g) {
//          Swal.fire({
//           title:"Project Start Date And Deadline Has Expired",
//           text:"Please Select A New Start Date And Deadline For Project To Start",
//           showCloseButton:true
//          })

// return;

//         }
//       }



// actionPastDate() {

//
// const f= new Date(this.Start_Date)

// const a= new Date(this.End_Date)
// const g= new Date(this.todayDate)
//         if (f < g && a<g  || a<g || f<g) {
//          Swal.fire({
//           title:"Project Start Date, Deadline And Action Start Date, Deadline Has Expired",
//           text:"Please Select A New Start Date And Deadline For Project And Action To Start",
//           showCloseButton:true
//          })

// return;

//         }
//       }




      isNumeric(value: string): boolean {
        return /^[0-9]*$/.test(value);
      }

      // limitWords(event) {
      //   const maxWords = 25;
      //   const words = event.target.value.trim().split(/\s+/);
      //   if (words.length > maxWords) {
      //       // Prevent entering more than 25 words
      //       event.target.value = words.slice(0, maxWords).join(' ');
      //   }


    // }



    fileType: string; // Assuming fileType is a variable to store the file format


    determineFileType(fileName: string): void {

      if (fileName.endsWith('.pdf')) {
        this.fileType = 'pdf';
      } else if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) {
        this.fileType = 'jpg';
      } else {
        this.fileType = '';
      }
    }


    // text(){
    //   this.Prjstartdate=  this.Prjstartdate<this.todayDate?null:this.Prjstartdate
    // }



oninputchange(value:string){
      this.ProjectName = value.trim();
}



editable(value:string){
 const messages = {
    Owner:{
      message:"Action owner can't be changed.",
      title:'Not editable'
    },
    duration:{
    message:"Action duration can't be changed.",
    title:'Not editable'
  },
  cost:{
    message:"Action cost can't be changed.",
    title:"Not editable"
  },
  Allocated:{
    message:"Action allocated hours can't be changed.",
    title:"Not editable"

  }

}
if (messages[value]){
  const {message,title} = messages[value]
  this.notifyService.showInfo(message,title)
}

}


LoadDocument(url: string){
  var myWindow = window.open(url);
  myWindow.focus();
}




characterCount: number = 0;

updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.PrjDes;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}



characterCount_Action: number = 0;
updateCharacterCount_Action(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ProjectDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Action = textContent.length;
}











characterCount_Desc: number = 0;
updateCharacterCount_Desc(): void {
  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ProjeditDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Desc = textContent.length;
}

validatePrjStartDate(){ 
   const _startdate=moment(this.Start_Date).toDate();
   if(isNaN(_startdate.getTime())){
      this.Start_Date=null;
   }else{
     this.Start_Date=_startdate>=this.previousdate?this.Start_Date:null;
   }

   if(this.Start_Date&&this.End_Date){  // if startdate selected is valid then validate the end date also.
    const _enddate=moment(this.End_Date).toDate();
    this.End_Date=_startdate<=_enddate?this.End_Date:null;
   }
}

validatePrjEndDate(){
  const _enddate=moment(this.End_Date).toDate();
  if(isNaN(_enddate.getTime())){
     this.End_Date=null;
  }else{  
    if(this.Start_Date)// after selecting enddate validate it with startdate if startdate found.
    {
      const _startdate=moment(this.Start_Date).toDate();
      this.End_Date=_startdate<=_enddate?this.End_Date:null;
    }
  }
}

computePrjDuration(){  
  if(this.Start_Date&&this.End_Date)
  {  
    const startDate = moment(this.Start_Date).toDate();
    const endDate = moment(this.End_Date).toDate();
    // Check if both dates are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      alert('Invalid date(s)');
      return;
    }
    const differenceInMs = endDate.getTime() - startDate.getTime();
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);
    this.PrjDuration_=differenceInDays+1;
  }
  else 
  this.PrjDuration_=0;  
}

p_maxAllocatableHrs:any;
setPrjMaxAllocatableHrs(){  
    if(this.Start_Date&&this.End_Date)
    {
      const pstart_dt=new Date(this.Start_Date);
      const pend_dt=new Date(this.End_Date);
      const dffinsec=pstart_dt.getTime()-pend_dt.getTime();
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.p_maxAllocatableHrs=(Difference_In_Days+1)*7;
    }
    else{
      this.p_maxAllocatableHrs=null;
    }  
}



//

a_maxAllocatableHrs:any;
setActnMaxAllocatableHrs(){
  if(this.Start_Date&&this.End_Date)
  {
      const pstart_dt=new Date(this.Start_Date);
      const pend_dt=new Date(this.End_Date);
      const dffinsec=pstart_dt.getTime()-pend_dt.getTime();
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.a_maxAllocatableHrs=(Difference_In_Days+1)*7;
  }
  else{
      this.a_maxAllocatableHrs=null;
  } 
}

computeActnDuration(){
  if(this.Start_Date&&this.End_Date)
    {  
      const startDate = moment(this.Start_Date).toDate();
      const endDate = moment(this.End_Date).toDate();
      // Check if both dates are valid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert('Invalid date(s)');
        return;
      }
      const differenceInMs = endDate.getTime() - startDate.getTime();
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);
      this.ActionDuration=differenceInDays+1;
    }
    else 
    this.ActionDuration=0; 
}


validateActnStartDate(){
  const _startdate=moment(this.Start_Date).toDate();
  if(isNaN(_startdate.getTime())){
     this.Start_Date=null;
  }else{
    this.Start_Date=_startdate>=this.previousdate?this.Start_Date:null;
  }

  if(this.Start_Date&&this.End_Date){  // if startdate selected is valid then validate the end date also.
   const _enddate=moment(this.End_Date).toDate();
   this.End_Date=_startdate<=_enddate?this.End_Date:null;
  }
}

validateActnEndDate(){
  const _enddate=moment(this.End_Date).toDate();
  if(isNaN(_enddate.getTime())){
     this.End_Date=null;
  }else{  
    if(this.Start_Date)// after selecting enddate validate it with startdate if startdate found.
    {
      const _startdate=moment(this.Start_Date).toDate();
      this.End_Date=_startdate<=_enddate?this.End_Date:null;
    }
  }
}




//


newDetails(pcode: string, source: string) {
  // Determine the name based on the source
  let name: string;
  if (source === 'Meeting') {
    name = 'Meeting-Details';
    const url = document.baseURI + name;
    const myurl = `${url}/${pcode}`;
    const myWindow = window.open(myurl, pcode);
    myWindow.focus();
  } else if (source === 'Project') {
    name = 'Details';
    const url = document.baseURI + name;
    const myurl = `${url}/${pcode}`;
    const myWindow = window.open(myurl, pcode);
    myWindow.focus();
  }
}


// start_dt:any
// end_dt:any


// alertMaxAllocation() {
//   if (this.Start_Date == null || this.End_Date == null) {
//     this._message = "Start Date/End date missing!!"
//   }
//   else {
//     // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
//     // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
//     this.start_dt=new Date(this.Start_Date);
//     this.end_dt=new Date(this.End_Date);

//     console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")

//     var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
//     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//     if(Difference_In_Days==0){
//       Difference_In_Days=-1;
//       this.maxAllocation = (-Difference_In_Days) * 7 / 1;
//     }
//     else{
//       this.maxAllocation = (-Difference_In_Days) * 7 / 1 +7;
//     }
//     console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")
//   }
// }

// maxAllocations: number;
// alertMaxAllocations() {

//   if (this.Start_Date == null || this.End_Date == null) {
//     this._message = "Start Date/End date missing!!"
//   }
//   else {
//     // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
//     // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
//     this.start_dt=new Date(this.Start_Date);
//     this.end_dt=new Date(this.End_Date);

//     console.log(this.start_dt,this.end_dt,this.maxAllocations,"allcoation")

//     var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
//     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//     if(Difference_In_Days==0){
//       Difference_In_Days=-1;
//       this.maxAllocations = (-Difference_In_Days) * 10 / 1;
//     }
//     else{
//       this.maxAllocations = (-Difference_In_Days) * 10 / 1 +10;
//     }
//     console.log(this.start_dt,this.end_dt,this.maxAllocations,"allcoation")
//   }
// }





// dontShowAgain:boolean=false;
// hasActnsMatchingPrjDeadline(){
//  let totalActnsMatch=0;
//  let totalActnsInPrj=this.PrjActionsInfo.length;
//  if(totalActnsInPrj<4){
//     return;
//  }
//  const prj_deadline=new Date(this.projectInfo.EndDate);
//  this.PrjActionsInfo.forEach((actn:any)=>{
//        const actn_deadline=new Date(actn.EndDate);
//        if(prj_deadline.getTime()==actn_deadline.getTime()){
//            totalActnsMatch++;
//        }
//  });

//  const percent_val=(totalActnsMatch/totalActnsInPrj)*100;    // 0/10 ===>0 .  8/10==>80%.  0/0==>0    10/0==>infinity(impossible)
//  if(percent_val>=50&&this.dontShowAgain==false){
//     Swal.fire({
//       title:'Confirm Action Deadlines',
//       html:`<div style="text-align: justify;"><b>${totalActnsMatch}/${totalActnsInPrj}</b> actions are currently planned to end with the main project.  Is this intentional? <br/> If not, consider adjusting deadlines using action 'Edit' to optimize workflow.</div>`,
//       showCancelButton:true,
//       cancelButtonText:"OK",
//       cancelButtonColor:'#3085d6',
//       showConfirmButton:true,
//       confirmButtonText:"Don't Show Again",
//       confirmButtonColor:'#aaa'
//   }).then(choice=>{
//       if(choice.isConfirmed==true){
//           this.dontShowAgain=true;
//       }
//   })

//  }


// }



actnsMatchingPrjDeadline():number{
  const prj_deadline=new Date(this.projectInfo.EndDate);
  let totalActnsMatch=0;
  this.PrjActionsInfo.forEach((actn:any)=>{
           const actn_deadline=new Date(actn.EndDate);
           if(prj_deadline.getTime()==actn_deadline.getTime()){
               totalActnsMatch++;
           }
  });
  return totalActnsMatch;
}



okWithType:boolean=false;
promptIfNameTypeMismatch(){

  if(this.PrjName&&this.PrjName.trim()&&this.Prjtype){

    const words_003=[
      'weekly','daily','monthly','yearly','annually','half yearly','quarterly','every week','every month','every year',
       'annual','recurring', 'repetitive'
    ];

    const isincluded=words_003.find((wrd:string)=>{
      const regex = new RegExp(`\\b${wrd}\\b`, 'i'); // Match exact word with word boundaries
      return regex.test(this.PrjName.trim());
    });

    if(isincluded){
      const typematched=['003','008'].includes(this.Prjtype);
      if(typematched==false&&this.okWithType==false){
       const sel_ptype=this.ProjectType_json.find(ob=>ob.Typeid==this.Prjtype).ProjectType.trim();

        Swal.fire({
            title:'Are You Sure About the Project Type?',
            html:`<div class="text-justify">
                   Project name contains word <b>'${isincluded}'</b> which suggests a standard or routine type project. You've selected <b>'${sel_ptype}'</b> as the project type.
                  </div>`,
            showConfirmButton:true,
            showCancelButton:true,
            confirmButtonText:'Continue Anyway',
            cancelButtonText:'View Guidelines',

        }).then((choice)=>{
             if(choice.isConfirmed){
                this.okWithType=true;
             }else if(choice.dismiss==Swal.DismissReason.cancel){
                this.New_project_guideline();
             }

        });
      }
    }

  }

}


// standard, routine max allocatable hrs validation start.

perWeekAllocHrs:number=48;       // Maximum hrs allocatable per week.
COMPANY_HEAD_ALLOC_RATIO=0.70;  // 70% of 48hrs to the company head
DEPT_HEAD_ALLOC_RATIO=0.50;    // 50% of 48hrs to the team head
TEAM_MEMBER_ALLOC_RATIO=0.25;    //25% of 48hrs to the team member
isAllocHrsOverflow:boolean=false;
maxAllocHrsByRole:number=0;

computeMaxAllocHrsToProject(){

 this.maxAllocHrsToProject=0;  // clear old value if present.
 if(this.Prjtype=='003'){
  this.maxAllocHrsToProject=this.maxAllocHrsByRole-this.Current_user_Info.Standard_Total_Hours;
 }
 else if(this.Prjtype=='008'){
  this.maxAllocHrsToProject=this.maxAllocHrsByRole-this.Current_user_Info.Routine_Total_Hours;
 }

// after calculating max allocatable hrs value, if we found allocated hrs input present then verify it.
this.isAllocHrsOverflow=false;
 if(this.Allocated_Hours){
  this.onAllocInputHrsChanged();
}
//
}

//time formatter useful utility method
formatHrsToHHMM(hours){
  if(hours){
    const hrval=Math.floor(hours);
    const mnval=Math.floor((hours-hrval)*60);
    const tmstr=`${hrval} Hrs : ${mnval} Mins`;
    return tmstr;
  }
  return '';
}

//




// whenever standard or routine type project's allocated input hrs changed.
onAllocInputHrsChanged(){  
    const h=Number.parseInt(this.Allocated_Hours.split(':')[0]);
    const m=Number.parseInt(this.Allocated_Hours.split(':')[1]);
    const input_alhr=h+(m/60);
    this.isAllocHrsOverflow=input_alhr>this.maxAllocHrsToProject;
}
// whenever standard or routine type project's allocated input hrs changed.




showSR_ProjectsStats(ptype:'003'|'008'){

  const totalPrjsExisting=ptype=='003'?this.Current_user_Info.Standard_Count:this.Current_user_Info.Routine_Count;
  const existingPrjsType=ptype=='003'?'Standard Tasks':'Routine Tasks';
  const _consumedHrs=ptype=='003'?this.Current_user_Info.Standard_Total_Hours:this.Current_user_Info.Routine_Total_Hours;
  const _allocatablehrs=this.formatHrsToHHMM(this.maxAllocHrsToProject);
  const _percent=(_consumedHrs/this.maxAllocHrsByRole)*100;

   if(ptype=='003')
   {
    const stdtasklimitExhausted=this.isStandardTasksLimitExhausted;
    if(stdtasklimitExhausted){
      Swal.fire({
         title:'Warning',
         html:`<div style="text-align: justify;">
                      <div>Currently, you are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects, with <b>${_consumedHrs} hours</b> already allocated.</div> 
                      <div style="font-size: 14px;color: orange;font-weight: 500;margin-top: 15px;">You've reached the limit for Standard Task projects.</div>
              </div>
              `,
         showConfirmButton:true,
         confirmButtonText:'Ok'      
      });
    }
    else{
      if(_percent>=80){
        Swal.fire({
          title:'Warning',
          html:`<div style="text-align: justify;">
                        <div>Currently, you are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects, with <b>${_consumedHrs} hours</b> already allocated.</div> 
                        <div style="font-size: 14px;color: orange;font-weight: 500;margin-top: 15px;"> You cannot allocate more than ${_allocatablehrs} to this project.</div>
                </div>
                `,
          showConfirmButton:true,
          confirmButtonText:'Ok'      
      }); 
      }
    }
 
   }
   else if(ptype=='008')
   {
    const isCreatable=!this.isRoutineTasksLimitExhausted;
    if(isCreatable){
      
      if(_percent>=80){
        Swal.fire({
          title:'Warning',
          html:`<div style="text-align: justify;">
                        <div>Currently, you are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects, with <b>${_consumedHrs} hours</b> already allocated.</div> 
                        <div style="font-size: 14px;color: orange;font-weight: 500;margin-top: 15px;"> You cannot allocate more than ${_allocatablehrs} to this project.</div>
                </div>
                `,
          showConfirmButton:true,
          confirmButtonText:'Ok'      
      }); 
      }

    }
    else{
       
        Swal.fire({
          title:`Cannot Create Routine Task`,
          html:`
                <div style="text-align: justify;">
                    <ul style="padding-left: 18px;">
                        <li>You are managing <b>${totalPrjsExisting}</b> ${existingPrjsType} projects</li>
                        <li style="white-space: nowrap;"><b>${_consumedHrs} hours</b> already allocated (limit: <b>${this.maxAllocHrsByRole} hours</b>)</li>
                    </ul> 
                    <div style="font-size: 14px;color: red;font-weight: 500;margin-top: 15px;">You've reached the limit for Standard Task projects. Please review your existing ones.</div>
                </div>`,
          showConfirmButton:true,
          confirmButtonText:'Ok'      
      });

    } 

   }
}


// standard, routine max allocatable hrs validation end.

}








