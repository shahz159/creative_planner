import { object } from '@amcharts/amcharts4/core';
import { Component, EventEmitter, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  todayDate: Date = (new Date);
  EmpName:any
  previousdate :Date= new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0)


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
  _allocated:any
  maxDate:any
  URL_ProjectCode: any;
  approvalObj: ApprovalDTO;
  saveAsTemplate:boolean=false;
  notProvided:boolean=false;
  notificationMsg:number=0;


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
    this.Assigned_projects()
    localStorage.removeItem('navigatingToCreateProject');
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
         this.ProjectType_json=JSON.parse(res[0].ProjectType_json);
         this.Responsible_json=JSON.parse(res[0].Responsible_json);
         console.log(this.Responsible_json,"Responsible_json")
         this.Team_json=JSON.parse(res[0].Team_json);  console.log('Team_json:',this.Team_json);
         this.allUser_json=JSON.parse(res[0].allUser_json); console.log('allUser_json:',this.allUser_json);
         this.owner_json=JSON.parse(res[0].owner_json);

          this.PrjOwner=this.Responsible_json[0].OwnerEmpNo.trim();
          this.PrjResp=this.Responsible_json[0].ResponsibleNo.trim();
          this.PrjAuth=this.Responsible_json[0].ResponsibleNo.trim();
          this.PrjCrdtr=this.Team_json[0].CoordinatorNo.trim();
          this.PrjInformer=this.Team_json[0].InformerNo.trim();
          this.SubmissionType=JSON.parse(res[0].SubmissionType);  console.log('submission type values:',this.SubmissionType);
          const defaultvalue=this.allUser_json.find((item)=>{
               return (item.Emp_Name===this.Team_json[0].SupportName&&item.Emp_No===this.Team_json[0].SupportNo);
          })
          this.PrjSupport=defaultvalue?[defaultvalue]:[];

          // this.Prjtype=this.ProjectType_json[0].Typeid;// by default prj type core is selected.
          this.Project_Type=this.ProjectType_json[0].ProjectType;
          this.PrjOfType=this.Prjtype==='001'?'Core Tasks':
          this.Prjtype==='002'?'Secondary Tasks':
          this.Prjtype==='003'?'Standard Tasks':
          this.Prjtype==='008'?'Routine Tasks':
          this.Prjtype==='011'?'To do List':'';

          this.PrjClient=this.Client_json[0].EmpClient;
          this.setRACIS();

      }
      this.getFindName()
      this.changeprojecttype();
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
      this.projectTypes= projectType.ProjectType;
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
  //  this.getActionCount(this.PrjCode);
  }



  displaymessagemain(value: string): void {
debugger
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

       this.getPrjCost(this.projectInfo.AllocatedHours);

      console.log(this.projectInfo, "projectInfo");
  })

  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.PrjCode).subscribe(
    (data) => {
      debugger
      this.owner_dropdown = (JSON.parse(data[0]['RacisList']));
      this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));  console.log("this 3:",this.responsible_dropdown);

    });



  this.service.SubTaskDetailsService_ToDo_Page(prjCode, null, this.Current_user_ID).subscribe(
      (data) => {
        this.Client_List = JSON.parse(data[0]['ClientDropdown']);
        this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
        console.log(this.Category_List, "CategoryDropdown");
    });

    this.service.NewProjectService(this.PrjCode).subscribe(
        (data) => {

          if (data != null && data != undefined) {
              this.PrjSupport=JSON.parse(data[0]['RacisList']);
              console.log(this.PrjSupport,'this.PrjSupportthis.PrjSupportthis.PrjSupportthis.PrjSupport')

              console.log("draft support:",this.PrjSupport)
              this.PrjSupport=this.PrjSupport.map((item:any)=>({Emp_No:item.Emp_No,Emp_Name:item.RACIS}));
              this.setRACIS();
          }


    });    // for geeting the support members.




}





  setMaxAllocation() {

    if(this.Prjstartdate&&this.Prjenddate){
      this.Prjstartdate=new Date(this.Prjstartdate);
      this.Prjenddate=new Date(this.Prjenddate);
      const dffinsec=this.Prjstartdate.getTime()-this.Prjenddate.getTime()
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxAllocation=(Difference_In_Days+1)*10;
    }
    else
    this._message = "Start Date/End date missing, It accept only numeric and non-negative value"

  }

  setprojeditAllocation() {
    if(this.Start_Date&&this.End_Date){
      this.Start_Date=new Date(this.Start_Date);
      this.End_Date=new Date(this.End_Date);
      const dffinsec=this.Start_Date.getTime()-this.End_Date.getTime()
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxAllocation=(Difference_In_Days+1)*10;
    }
    else
    this._message = "Start Date/End date missing, It accept only numeric and non-negative value"

  }
  setactioneditAllocation() {

    if(this.Start_Date&&this.End_Date){
      this.Start_Date=new Date(this.Start_Date);
      this.End_Date=new Date(this.End_Date);
      const dffinsec=this.Start_Date.getTime()-this.End_Date.getTime()
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxactAllocation=(Difference_In_Days+1)*10;
    }
    else
    this._message = "Start Date/End date missing, It accept only numeric and non-negative value"

  }

  validateInput() {
    this.Allocated = this.Allocated.toString().replace(/[^0-9]/g, '');
  }
  restrictToNumbers(event: KeyboardEvent) {
    if (!/^[0-9]$/.test(event.key)) {
      event.preventDefault();
    }
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

createSRTProject(){
   Swal.fire({
     title:"Are you sure?",
     text:`You will be going to spend "${this.PrjCost}.00 SAR" on this Project. Do you want to Continue?`,
     showConfirmButton:true,
     showCancelButton:true,
     confirmButtonText: 'Yes, confirm',
     cancelButtonText: 'Cancel'
   })
   .then(choice=>{
      if(choice.isConfirmed){
        this.createProject();
      }
   });
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
               this.notification.showInfo("Please submit the project for approval","");

               //2. file attachment uploading  if present
               if(this.fileAttachment)
               this.uploadFileAttachment()

               // 3. Move to next step
               if(this.Prjtype==='001'||this.Prjtype==='002')
               {    // when core, secondary
                if(this.savePrjAsDraft==true)
                {
                  this.notification.showSuccess("Project saved as draft","Success");
                  this.back_to_options();
                  this.GetAssignedTaskDetails();
                }
                else{
                  this.Move_to_Add_action_tab();    // moved to step 3
                  this.BsService.ConfirmBeforeRoute.emit('AT-3RD-STEP-PC'); // we are on step3 screen.

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
      this.notification.showError('Please fill in all mandatory fields','Required information');
    }
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
              this.notification.showSuccess('Successfully uploaded the file attachment','File attachment uploaded');
              this.isFileUploaded=true;
            }
            else{
               this.notification.showError('Unable to upload the file attachment','File uploading failed');
               this.isFileUploaded=false;
            }
        });
 }


//  onFileChanged(e:any){
//    this.fileAttachment=e.target.files[0];
//    e.target.value=null;
//  }


  file: File | null = null;
onFileChanged(event: any) {

  const files: File[] = event.target.files;

  if (files && files.length > 0) {
    this.file = files[0];
    this.fileAttachment = this.file;
    // this.determineFileType(this.file.name);
    console.log(this.fileAttachment,"testtestsetsetsetsetsettttt")
  } else {
    this.file = null;
    this.fileAttachment = null;
  }
  event.target.value=''
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

    this.characterCount_Desc=0;
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
          this.BsService.ConfirmBeforeRoute.emit(null);   // if back to options from 3rd step. removes sidebar,header confirmations.
          this.back_to_options();
          this.reset();
          }
      });
  }

  Assigned_projects(){
     $('.Assigned-projects-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
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

    // ['003','008'].includes(Prjtype)&&prjsubmission&&( (prjsubmission!=6&&Allocated_Hours) || (prjsubmission==6&&Allocated_Hours&&Annual_date)


this.isPrjNameValid=this.isValidString(this.PrjName,3);
this.isPrjDesValid=this.isValidString(this.PrjDes,5);


  if(

    (this.Prjtype&&this.PrjClient&&this.PrjCategory&&(this.PrjName&&this.isPrjNameValid==='VALID'&&this.PrjName.length<=100)&&(this.PrjDes&&this.isPrjDesValid==='VALID'&&this.PrjDes.length<=500))&&
    (
      (['001','002'].includes(this.Prjtype)&&this.Prjstartdate&&this.Prjenddate)||
      (['011'].includes(this.Prjtype)&&this.Prjstartdate&&this.Prjenddate&&(this.Allocated_Hours)) ||
      ['003','008'].includes(this.Prjtype)&&this.prjsubmission&&this.Allocated_Hours&&(this.prjsubmission==6?this.Annual_date:true)

    )
  )
  {
    // when all mandatory fields of step1 are provided.
          $('.right-side-dv').removeClass('d-none');
          $('.add_tema_tab').show();
          $('.Project_details_tab').hide();
          $('.sbs--basic .active').addClass('finished');
          $('.sbs--basic li').removeClass('active');
          $('.sbs--basic li:nth-child(2)').addClass('active');
          this.findProjectType()
          if(['003','008'].includes(this.Prjtype))
          this.Prjstartdate=new Date();
          this.notificationMsg=['001','002'].includes(this.Prjtype)?2:4;
          this.notProvided=false;
  }
  else{
     // when some mandatory fields are missing.
     this.notProvided=true;

  }











    // if((this.Prjtype&&this.PrjClient&&this.PrjCategory&&(this.PrjName&&this.PrjName.trim().split(' ').length>=3)&&(this.PrjDes&&this.PrjDes.trim().split(' ').length>=5)&&
    // (['001','002'].includes(this.Prjtype)&&this.Prjstartdate&&this.Prjenddate) ||
    // (['011'].includes(this.Prjtype)&&this.PrjName&&this.PrjClient&&this.PrjCategory&&this.PrjDes&&this.Prjstartdate&&this.Prjenddate&&this.Allocated_Hours) ||
    // ( ['003','008'].includes(this.Prjtype)&&this.PrjName&&this.PrjClient&&this.PrjCategory&&this.PrjDes&&this.prjsubmission&&this.Allocated_Hours&&this.prjsubmission&&( (this.prjsubmission!=6&&this.Allocated_Hours) || (this.prjsubmission==6&&this.Allocated_Hours&&this.Annual_date) ))
    // )){
    //       // alert(this.Allocated_Hours)
    //       $('.right-side-dv').removeClass('d-none');
    //       $('.add_tema_tab').show();
    //       $('.Project_details_tab').hide();
    //       $('.sbs--basic .active').addClass('finished');
    //       $('.sbs--basic li').removeClass('active');
    //       $('.sbs--basic li:nth-child(2)').addClass('active');
    //       this.findProjectType()
    //       if(['003','008'].includes(this.Prjtype))
    //       this.Prjstartdate=new Date();
    //       this.notificationMsg=['001','002'].includes(this.Prjtype)?2:4;
    // }
    // else{
    //   this.notProvided=true;
    // }





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
    if(this.PrjResp.trim()===this.PrjOwner.trim())
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
      if(this.PrjOwner.trim()===this.PrjResp.trim()){
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







  /////////////////////////////////////////assign task start/////////////////////////////
  rejectm:any
  conditional_List:any
  assigntask_json:any
  template_json:any;
  draft_json:any;
  daysDifference:any
  userFound:boolean|undefined;
  GetAssignedTaskDetails(){

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

  onButtonClick(value:any,id:number){
 debugger
    this.bind_Project = [value];
    console.log('bind project:',this.bind_Project);
    // this.duration=this.bind_Project[0].Duration;

    const cDate=new Date();
    const psdate=new Date(this.bind_Project[0].Start_Date);

    this.Prjstartdate = psdate<cDate?null:this.bind_Project[0].Start_Date
    this.Prjenddate = psdate<cDate?null:this.bind_Project[0].End_Date


    console.log(this.bind_Project,'+++++++++++>')
    this.PrjName=this.bind_Project[0].Task_Name;
    this.CreateName=this.bind_Project[0].Created_Name;
    this.PrjDes=this.bind_Project[0].Task_Description
    this.unique_id=id;
    this.Prjtype=this.bind_Project[0].Project_Type;
    this.duration=this.bind_Project[0].Duration+1;
    this.Allocated_Hours=this.bind_Project[0].Allocated;
    this.prjsubmission=this.bind_Project[0].Submission_Type;
    this.fileAttachment = this.bind_Project[0].FileName;
    console.log(this.fileAttachment,"fileAttachmentfileAttachmentfileAttachmentfileAttachmentfileAttachment")
    const portfolios_ = this.bind_Project[0].Portfolio_Id;

    if(portfolios_){
        const portfolioids=portfolios_.split(',');
        const result=this._portfoliosList.filter(item=>portfolioids.includes(item.Portfolio_ID.toString()));
        this.ngDropdwonPort = result;
    }
    else
     this.ngDropdwonPort=[];

    // this.Prjstartdate =this.bind_Project[0].Start_Date
    // this.Prjenddate = this.bind_Project[0].End_Date
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
    // document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    // document.getElementById("project-creation-page").classList.add("position-fixed");
    $("#mysideInfobar12").scrollTop(0);

  }


  closeActionSideBar(){
    // document.getElementById("project-creation-page").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    this.router.navigate(["/backend/createproject/"]);
  }

  /////////////////////////////////////////add Project End/////////////////////////////

   ///////////////////////////////////////// Project Edit start /////////////////////////////


  Project_details_edit() {



    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("Project_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("kt-bodyc").classList.add("overflow-hidden");
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("project-creation-page").classList.add("position-fixed");
    $("#mysideInfobar12").scrollTop(0);
  //  this.getResponsibleActions();
   this.initializeSelectedValue()

  }

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
getActionsDetails(){
  this.projectMoreDetailsService.getProjectMoreDetails(this.PrjCode).subscribe((res)=>{
    console.log("LLL:",res);
    if(res[0].Action_Json)
    this.PrjActionsInfo = JSON.parse(res[0].Action_Json);

    else
    this.PrjActionsInfo=[];
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
Start_Date: any;
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
ActionDuration:any;
ProjeditName:any
ProjeditDescription:any


initializeSelectedValue() {
   debugger
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
    this.ProjeditName = this.projectInfo.Project_Name
    this.ProjeditDescription = this.projectInfo.Project_Description
    this.Start_Date = this.projectInfo.StartDate
    this.Allocated_Hours = this.projectInfo.StandardAllocatedHours
    this.Allocated = this.projectInfo.AllocatedHours
    this.End_Date = this.projectInfo.EndDate;

}

projectEdit(val) {

if (this.Allocated <= this.maxAllocation){
  this.notProvided = false
}
else{
  this.notProvided = true
  return
}

  this.isPrjNameValids=this.isValidString(this.ProjeditName,3);
  this.isPrjDesValids=this.isValidString(this.ProjeditDescription,5);


if (this.ProjeditName&&this.isPrjNameValids=='VALID'&&this.ProjeditName.length<=100&&this.ProjeditDescription&&this.isPrjDesValids==='VALID'&&this.ProjeditDescription.length<=500
  &&this.selectedOwnResp&&this.selectedcategory&&this.selectedclient&&this.Start_Date&&this.End_Date
){
  this.notProvided=false

} else{
this.notProvided=true;
return;
}

//  if(constv = parseInt(this.Allocated) <=  this.projectInfo.Duration +1){
//   this.notProvided = false
//  }else{
//   this.notProvided = true
//  }
//  this.setprojeditAllocation()
//  if(this.Allocated <= this.maxAllocation){
// this.notProvided=false
//  }
//  else{
//   this.notProvided=true
//   return
//  }

  // this._remarks = '';

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

  if (val == 0) {

    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Project_Code = this.PrjCode;

    this.approvalObj.json = jsonvalue;
    //this.approvalObj.Remarks = this._remarks;
    this.approvalObj.isApproval = val;
    this.getAddActionDetails();

    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
      console.log(data['message'], "edit response");

      if(['1','5','6'].includes(data['message']))
      {
        this.notifyService.showSuccess("Updated successfully", "Success");
        this.closeInfos();
      }
      else if(data['message'] == '2')
      {
        this.notifyService.showError("Not updated", "Failed");
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

// RACIS CODE start
RACIS:any=[];


setRACIS(){
    this.RACIS=[];

     this.RACIS.push(this.owner_json.find((item)=>item.EmpNo===this.PrjOwner).EmpName);
     this.RACIS.push(this.Responsible_json[0].OwnerEmpNo===this.PrjResp?this.Responsible_json[0].OwnerName:this.Responsible_json[0].ResponsibleName);
     this.RACIS.push(this.Authority_json.find((item)=>item.EmpNo===this.PrjAuth).EmpName);
      this.RACIS.push(this.allUser_json.find((item)=>item.Emp_No===this.PrjCrdtr).Emp_Name);
      this.RACIS.push(this.allUser_json.find((item)=>item.Emp_No===this.PrjInformer).Emp_Name);

      const au=this.allUser_json.find((item)=>item.Emp_No===this.PrjAuditor);
      if(au)this.RACIS.push(au.Emp_Name);

     const e=this.PrjSupport.map((item)=>item.Emp_Name);
     this.RACIS=[...this.RACIS,...e];



     let arr=[];
     for(let i=0;i<this.RACIS.length;i++){
      if(!arr.includes(this.RACIS[i]))
         arr.push(this.RACIS[i]);
     }
     this.RACIS=arr;

      console.log("RACIS:",this.RACIS);


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
sendApproval(){
debugger

// if (this.actionCount.DeadLine==this.End_Date&&this.actionCount.count>3){
//   Swal.fire({
//     title:'invalid Date',
//     text:'you have 3 action on that date',
//     showCloseButton:true
//    });
//    return;
// }


  const _prjstrtd= new Date(this.projectInfo.StartDate);
  const _prjendd= new Date(this.projectInfo.EndDate);
  const _curtd=new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0);
  if(_prjstrtd<_curtd||_prjendd<_curtd){

    let msg;
    if(_prjstrtd<_curtd)
    msg="Please select a new start date.";

    if(_prjendd<_curtd)
    msg="Please select new start date and new end date.";

     Swal.fire({
      title:'invalid Date',
      text:msg,
      showCloseButton:true
     });
     return;
  }




  const inputdate = new Date(this.projectInfo.StartDate);

  // Check if any action's start date is before the project start date
  const isInvalid = this.PrjActionsInfo.some((actn) => {
      const actdate = new Date(actn.StartDate);
      return actdate < inputdate;
  });

  // If any action's start date is before the project start date, show the popup
  if (isInvalid) {
      Swal.fire({
          showCloseButton: true,
          title: 'Invalid Action  Date.',
          text: "Please select a new action start date",
          showCancelButton:true
      });
      return;
  }





//     if (f < g && a<g ) {
//      Swal.fire({
//       title:"Please Select  a new start date",
//       text:"the  Start date and End date of project has expired",
//       showCloseButton:true
//      })
// return;
//     }


  //   const c= new Date(this.projectInfo.StartDate)

  //   // const d= new Date(this.projectInfo.EndDate)
  //   const h= new Date(this.todayDate)
  //     if (c<h) {
  //      Swal.fire({
  //       title:"Please Select  a new start date ",
  //       text:"the  Start date of project has expired",
  //       showCloseButton:true
  //      })
  // return;
  //     }



   Swal.fire({
       title:'Are you sure?',
       text:`You will be going to spend "${this.PrjCost}.00 SAR" on this project. Do you want to continue?`,
       showConfirmButton:true,
       showCancelButton:true,
       confirmButtonText: 'Yes, confirm',
       cancelButtonText: 'Cancel'
   })
   .then(choice=>{

      if(choice.isConfirmed){
              this.ProjectDto.Emp_No=this.Current_user_ID;
              this.ProjectDto.isTemplate=this.saveAsTemplate;
              this.ProjectDto.Project_Code=this.PrjCode;
              this.ProjectDto.file = this.fileAttachment
              this.ProjectDto.Remarks=this._remarks;
              this.ProjectDto.Project_Cost=this.PrjCost;
              this.createProjectService.NewUpdateNewProjectApproval(this.ProjectDto).subscribe((res:any)=>{
                if(res&&res.message==='Success'){
                      this.notification.showSuccess("Project sent to project owner "+this.owner_json.find((item)=>item.EmpNo==this.PrjOwner).EmpName+' for approval',"Success");
                      this.BsService.ConfirmBeforeRoute.emit(null);
                      this.router.navigate(['./backend/ProjectsSummary']);
                      //  this.closeInfo();
                  }
                else{
                    this.notification.showError('something went wrong','Failed');
                }
              });
      }

   });



// }
// else{
//   Swal.fire(
//     'Action Required',
//     'Please provide atleast one action to submit the project.',
//     'error'
//   );
// }

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
             this.notification.showSuccess(this.assigntask_json[index-1].Task_Name+" removed","Success");
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
               this.notification.showSuccess('Template deleted','Success');
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
      this.PrjTemplActions=actions.filter(action=>action.template);
    }




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

getPrjCost(alchr:string):void{
console.log("input allocated hr:",alchr);
let alhr=alchr;
if(['003','008'].includes(this.Prjtype)){
     //eg: '00 Hr : 15 Mins'
     const h=Number.parseInt(alhr.split(':')[0]);
     const m=Number.parseInt(alhr.split(':')[1]);
     alhr=h+'.'+m;
}

  this.ProjectDto.Emp_No=this.Current_user_ID;
  this.ProjectDto.Hours=alhr;
  this.createProjectService.GetCPProjectCost(this.ProjectDto).subscribe((res:{Status:boolean,Message:string,Data:number})=>{
    if(res.Status){
       this.PrjCost=res.Data;
       console.log(this.PrjCost);
    }
  })
}


// CALCULATE PROJECT COST END.

// DRAFT PROJECT CODE START.

deleteDraft(index:number){
debugger
    Swal.fire({

      showCancelButton:true,
      showConfirmButton:true,
      title:'Are you sure?',
      text:`This action will permanently delete this '${this.draft_json[index].Project_Name}'`,
    }).then(choice=>{
         if(choice.isConfirmed){

          this.ProjectDto.Project_Code=this.draft_json[index].Project_Code;
          this.ProjectDto.Emp_No=this.Current_user_ID;
          this.createProjectService.NewDeleteDraft(this.ProjectDto).subscribe((res:any)=>{
                     if(res.message=='1'){
                       this.notifyService.showSuccess(`'${this.draft_json[index].Project_Name}' draft is deleted`,"Deleted successfully");
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
debugger
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
                    this.openDraft(index)
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

this.projectMoreDetailsService.getProjectMoreDetails(this.PrjCode).subscribe((res)=>{
  console.log("after after openDraft method:",res);
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

});


// lock sidebar and header
this.BsService.ConfirmBeforeRoute.emit('AT-3RD-STEP-PC'); // we are on step3 screen.

// lock sidebar and header

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
   this.PrjCrdtr=this.Team_json[0].CoordinatorNo.trim();
   this.PrjInformer=this.Team_json[0].InformerNo.trim();
  }
  else{
      this.PrjSupport=[];
      this.PrjCrdtr=null;
      this.PrjInformer=null;
  }
  this.setRACIS();
     // step2 form clear.   start

  // step3 info clear. start
    this.PrjTemplActions=[];
    this.PrjActionsInfo=[];
  // step3 info clear. end

}

// DRAFT PROJECT CODE END.

isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
isPrjDesValid:'TOOSHORT'|'VALID'='VALID';



isPrjNameValids:'TOOSHORT'|'VALID'='VALID';
isPrjDesValids:'TOOSHORT'|'VALID'='VALID';



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


    if(['001','002','011'].includes(this.prevPrjType)&&['003','008'].includes(this.Prjtype)){
          this.prjsubmission=null;
          this.Allocated_Hours=null;
    }



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

      document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
      document.getElementById("Action_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
      document.getElementById("kt-bodyc").classList.add("overflow-hidden");
      document.getElementById("rightbar-overlay").style.display = "block";
      $("#mysideInfobar12").scrollTop(0);
      this.bindActionDetailsIntoForm();


    }

    closeAction_details_edit(){
      document.getElementById("Action_Details_Edit_forms").classList.remove("kt-quick-Project_edit_form--on");
      document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
      // document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
      document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
      document.getElementById("project-creation-page").classList.remove("position-fixed");
      document.getElementById("rightbar-overlay").style.display = "none";

      this.notProvided=false;   // back to initial state.
      this.characterCount_Action=0;
    }
    Sourcefile:any
    bindActionDetailsIntoForm() {

      // this.OGownerid = this.projectInfo['OwnerEmpNo'];
      // this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];
      // this.OGselectedcategoryid = this.projectInfo['Reportid'];
      // this.OGselectedclientid = this.projectInfo['ClientNo'];
      // this.OGSubmission_Nameid = this.projectInfo['SubmissionId'];
      this.OGProjectTypeid = this.projectInfo['Project_Block'];                    // Prj type no.
      // this.OGProjectType = this.projectInfo.Project_Type;
      this.selectedOwner = this.PrjActionsInfo[this.currentActionView].Owner;      // action owner name.
      this.OGowner = this.PrjActionsInfo[this.currentActionView].Project_Owner;    // action owner no.
      this.selectedOwnResp = this.PrjActionsInfo[this.currentActionView].Responsible;   // action resp name.
      this.OGresponsible = this.PrjActionsInfo[this.currentActionView].Team_Res;        // action resp no.

      this.selectedcategory = this.Category_List.find(ctg=>ctg.ReportType.trim()===this.PrjActionsInfo[this.currentActionView].Category.trim()).ReportID; // category no.
      // this.OGcategory = this.projectInfo.Category;
      this.selectedclient = this.PrjActionsInfo[this.currentActionView].ClientNo;     // client no.
      // this.OGclient = this.projectInfo.Client
      // this.Submission_Name = this.projectInfo.SubmissionName
      // this.OGSubmission = this.projectInfo.SubmissionName
      this.ProjectName = this.PrjActionsInfo[this.currentActionView].Project_Name;      // action name
      this.ProjectDescription = this.PrjActionsInfo[this.currentActionView].Project_Description;  // action descriptipn
      this.Start_Date = this.PrjActionsInfo[this.currentActionView].StartDate;       // action start date.
      // this.Allocated_Hours = this.projectInfo.StandardAllocatedHours
      this.Allocated = this.PrjActionsInfo[this.currentActionView].AllocatedHours;    // action alloc hrs.
      this.End_Date = this.PrjActionsInfo[this.currentActionView].EndDate;          // action end date.
      this.ActionDuration=this.PrjActionsInfo[this.currentActionView].Duration;     // action duration.


  }


  alterAction(){
debugger


if (this.Allocated <= this.maxAllocation){
  this.notProvided = false
}
else{
  this.notProvided = true
  return
}


const dateone=new Date(this.projectInfo.EndDate)
const datetwo= new Date(this.End_Date)

if(dateone < datetwo){
  Swal.fire({
    title:"Invalid Action Date",
    text:"Action date Can't be greater than project end date",
    showCancelButton:true

  })
  return
}
// this.setactioneditAllocation()



this.isPrjNameValid=this.isValidString(this.ProjectName,2);
this.isPrjDesValid=this.isValidString(this.ProjectDescription,3);




        // check all mandatory field are provided.
        if(!(this.ProjectName&&this.isPrjNameValid=='VALID'&&this.ProjectName.length<=100&&this.ProjectDescription&&this.isPrjDesValid==="VALID"&&this.ProjectDescription.length<=500&&
          this.OGowner&&this.OGresponsible&&
          this.selectedcategory&&this.selectedclient&&
          this.Start_Date&&this.End_Date&&
          this.Allocated)){
            this.notProvided=true;
            return;
        }else this.notProvided=false;   // back to initial value.
        // check all mandatory field are provided.


        //  const d1=new Date(this.Start_Date);
        //  const d2=new Date(this.projectInfo.StartDate);
        // if(d1<d2){
        //   Swal.fire({
        //     title:'Action start date is less than project start date',
        //     text:'first change the project start date',
        //     showCloseButton:true
        //   })

        //   return;
        // }



// const d5= new Date(this.End_Date)
// const d6= new Date(this.projectInfo.EndDate)
//         if(d5>d6){
//           Swal.fire({
//             title:'Action Deadline is Greater than Project Deadline',
//             text:"First Change the Project Deadline",
//             showCloseButton:true
//           })
//           return;
//         }






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
      };

      jsonobj = JSON.stringify(jsonobj);
      const dateOne = new Date(this.projectInfo.EndDate);   // prj end date.
      const dateTwo = new Date(this.End_Date);             // new action end date.

      this.approvalObj.Emp_no = this.Current_user_ID;  // emp no.
      this.approvalObj.Project_Code = this.PrjActionsInfo[this.currentActionView].Project_Code;  // action code.
      this.approvalObj.json = jsonobj;            // action details
      this.approvalObj.Remarks = this._remarks?this._remarks:'';   // remark provided.


// test



      // test

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
                this.notifyService.showSuccess("Updated successfully", "Success");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '2') {
                this.notifyService.showError("Not updated", "Failed");
              }
              else if (data['message'] == '5') {
                this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===this.OGresponsible))["RACIS"], "Updated successfully");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '6') {
                this.notifyService.showSuccess("Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
                this.getActionsDetails();
                this.closeAction_details_edit();
              }
              else if (data['message'] == '8') {
                this.notifyService.showError("Selected action owner cannot be updated", "Not updated");
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
            this.notifyService.showSuccess("Updated successfully", "Success");
            this.getActionsDetails();
            this.closeAction_details_edit();
          }
          else if (data['message'] == '2') {
            this.notifyService.showError("Not updated", "Failed");
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
            this.notifyService.showError("Selected action owner cannot be updated", "Not updated");
            this.closeAction_details_edit();
          }

          // this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
          // this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
          // this.closeInfo();
        });
      }

  }



LoadDocument1(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

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
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&"+  "type=" + type;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }

  else if (iscloud == true) {
    let name = "ArchiveView/" + this.projectInfo.Project_Code;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(url1);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }
}



   ///////////////////////////////////////// Action Edit End /////////////////////////////

  //  onPrjStrtDateChanged() {
  //   debugger
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
    // debugger;




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

// debugger
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

// debugger
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


    // text(){debugger
    //   this.Prjstartdate=  this.Prjstartdate<this.todayDate?null:this.Prjstartdate
    // }




    oninputchange(value:string){
      this.ProjectName = value.trim();
    }



editable(value:string){
 const messages = {
    Owner:{
      message:"Action owner can't be changed",
      title:'Not editable'
    },
    duration:{
    message:"Action duration can't be changed",
    title:'Not editable'
  },
  cost:{
    message:"Action cost can't be changed",
    title:"Not editable"
  },
  Allocated:{
    message:"Action allocated hours can't be changed",
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

characterCount_Desc: number = 0;


updateCharacterCount_Desc(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ProjeditDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Desc = textContent.length;
}


characterCount_Action: number = 0;

updateCharacterCount_Action(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ProjectDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Action = textContent.length;
}




check_Enddate(){
  debugger
  this.End_Date = moment(this.Start_Date)<=moment(this.End_Date)?this.End_Date:null;
}




newDetails(pcode: string, source: string) {
  debugger;

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

updateDuration(){
  const startDate = new Date(this.Start_Date);
  const endDate = new Date(this.End_Date);

  // Check if both dates are valid
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert('Invalid date(s)');
    return;
  }

  // Calculate the difference in milliseconds
  const differenceInMs = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);

  // Set the duration in days
  this.projectInfo.Duration = differenceInDays;

  // Alert the result
  // alert(`${differenceInDays} days`);
}

ActionupdateDuration(){
  const startDate = new Date(this.Start_Date);
  const endDate = new Date(this.End_Date);

  // Check if both dates are valid
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    alert('Invalid date(s)');
    return;
  }

  // Calculate the difference in milliseconds
  const differenceInMs = endDate.getTime() - startDate.getTime();

  // Convert milliseconds to days
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const differenceInDays = Math.floor(differenceInMs / millisecondsInDay);

  // Set the duration in days
  this.ActionDuration = differenceInDays;

  // Alert the result
  // alert(`${differenceInDays} days`);
}

start_dt:any
end_dt:any

alertMaxAllocation() {
  if (this.Start_Date == null || this.End_Date == null) {
    this._message = "Start Date/End date missing!!"
  }
  else {
    // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
    // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
    this.start_dt=new Date(this.Start_Date);
    this.end_dt=new Date(this.End_Date);

    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")

    var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days==0){
      Difference_In_Days=-1;
      this.maxAllocation = (-Difference_In_Days) * 10 / 1;
    }
    else{
      this.maxAllocation = (-Difference_In_Days) * 10 / 1 +10;
    }
    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")
  }
}

maxAllocations: number;
alertMaxAllocations() {
  debugger
  if (this.Start_Date == null || this.End_Date == null) {
    this._message = "Start Date/End date missing!!"
  }
  else {
    // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
    // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
    this.start_dt=new Date(this.Start_Date);
    this.end_dt=new Date(this.End_Date);

    console.log(this.start_dt,this.end_dt,this.maxAllocations,"allcoation")

    var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days==0){
      Difference_In_Days=-1;
      this.maxAllocations = (-Difference_In_Days) * 10 / 1;
    }
    else{
      this.maxAllocations = (-Difference_In_Days) * 10 / 1 +10;
    }
    console.log(this.start_dt,this.end_dt,this.maxAllocations,"allcoation")
  }
}


}

// calculateDateDifference(): void {
//   debugger

//   if (this.assigntask_json) {

//     const start = new Date(this.assigntask_json&& this.assigntask_json.Start_Date);
//     const end = new Date(this.assigntask_json&& this.assigntask_json.End_Date);


//     if ((start.getTime()) && (end.getTime())) {
//       if (end >= start) {
//         const timeDifference = end.getTime() - start.getTime();
//         this.daysDifference = timeDifference / (1000 * 3600 * 24);
//       } }}



//   console.log(`Days difference: ${this.daysDifference}`);
// }

// }








