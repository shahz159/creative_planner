
import { Component, OnInit,ViewChild ,ViewChildren,QueryList } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType,HttpEvent } from '@angular/common/http';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service'
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { ProjectUnplannedTaskComponent } from 'src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component'
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import { MoreDetailsComponent } from '../more-details/more-details.component';
import * as moment from 'moment';
import { event } from 'jquery';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import { DetailsComponent } from '../details/details.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete'
import tippy from 'node_modules/tippy.js';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {  MAT_DATE_FORMATS,MAT_DATE_LOCALE} from '@angular/material/core';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';
import { ProjectMoreDetailsService } from 'src/app/_Services/project-more-details.service';
import { Moment } from 'moment';

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


//import { empty } from '@angular-devkit/schematics';

@Component({
  selector: 'app-action-to-project',
  templateUrl: './action-to-project.component.html',
  styleUrls: ['./action-to-project.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
})


export class ActionToProjectComponent implements OnInit {
  // extends ProjectUnplannedTaskComponent
  // @ViewChild(ProjectUnplannedTaskComponent ) _projectunplanned !:any ;
  @ViewChild('fileInput') fileInput: any;
  fileAttachment: any;
  file: File | null = null;
  Sub_ProjectName: string = null;
  _Description: string = null;
  _StartDate: Date = null;
  _EndDate: Date = null;
  _remarks: string='';
  _allocated: number;
  _inputAttachments: any = [];
  _inputAttachments2: any;
  selectedEmpNo: string = null;
  _MainPrjectName: string = "";
  //selected_Employee: any[];
  dropdownSettings_EMP = {};
  disablePreviousDate = new Date();
  todayDate=new Date();
  disableAssignedField:boolean=false;
  public task_id: number = null;
  public _taskName: string;
  ProjectsDropdownBoolean: boolean = false;
  ObjSubTaskDTO: SubTaskDTO;
  _MasterCode: string = null;
  ProjectBlock: string = null;
  selectedFile: any = null;
  dropdownSettings_Projects = {};
  ObjUserDetails: UserDetailsDTO;
  public filterText: any;
  _ProjectDataList: any;
  informer:any;
  coordinator:any
  ProjectDeadLineDate: Date;
  ProjectStartDate: Date;
  maxAllocation: number;
  perDayLimit:number;
  Current_user_ID: string;
  _projcode: boolean;
  _desbool: boolean;
  _subname: boolean;
  _sdate: boolean;
  _edate: boolean;
  _selectemp: boolean;
  _alchr:boolean;
  _Urlid: any;
  public cat_id: any;
  cat_name: any = "";
  CurrentUser_Name:string;
  owner:string;
  Resp_empno:string;
  Autho_empno:string;
  pcode:any;
  _actbefore:boolean;
  // _actafter:boolean;

  CurrentUser_ID: string;
  _EmployeeListForDropdown = [];
  selectedProjectCodelist:any;
  ownerName:string;
  RespName:string;
  ownerArr:any = []
  nonRacis:any = [];
  allUsers:any=[];

  actionCost:any;

  constructor(
    public notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    public router: Router,public _meetingreport: MeetingReportComponent,
    private notification:NotificationService,
    public _details: DetailsComponent,
    public createproject: CreateProjectComponent,
    public dialog: MatDialog, public dateAdapter: DateAdapter<Date>,
    public BsService: BsServiceService,
    public service: ProjectTypeService,
    public _projectunplanned: ProjectUnplannedTaskComponent,
    public _Todoproject: ToDoProjectsComponent,
    public _MoreDetails: MoreDetailsComponent,
    private route: ActivatedRoute,
    public _meetingDetails:MeetingDetailsComponent,
    private projectMoreDetailsService: ProjectMoreDetailsService
  ) {

    // super(notifyService,ProjectTypeService,router,dialog,dateAdapter,BsService);
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO = new SubTaskDTO;
    this.ObjUserDetails = new UserDetailsDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.BsService.bs_projectCode.subscribe(p => this.pcode=p);
    this.BsService.bs_ProjectName.subscribe(N => this._MainPrjectName = N);
    this.BsService.bs_AssignId.subscribe(id => this.task_id = id);


    this._inputAttachments = [];
    this._projcode = false;
    this._desbool = false;
    this._subname = false;
    this._sdate = false;
    this._edate = false;
    this._selectemp = false;
    this._alchr=false;

  }

  ngOnInit() {
    this._projcode = false;
    this._desbool = false;
    this._subname = false;
    this._sdate = false;
    this._edate = false;
    this._selectemp = false;
    this._alchr=false;

    this._Urlid = this.route.snapshot.params['id'];
    this.BsService.bs_catId.subscribe(c =>{this.cat_id = c} );
    this.BsService.bs_catName.subscribe(d =>{ this.cat_name = d});

    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.perDayLimit=7; // allocation hr per day limit.
    this.GetAllEmployeesForAssignDropdown();

    this.gethierarchy();

    this.getRACISandNonRACIS();
    const input = document.getElementById("hour-input");


      //And disable the wheel default functionality:
    input.addEventListener("wheel", function(event) {
        event.preventDefault();
    });


    this.BsService.bs_templAction.subscribe(ta=>{
      this.Sub_ProjectName=ta.name;
      this._Description=ta.description;
         if(ta.assignedTo!==''){
              this.selectedEmpNo=ta.assignedTo;
              this.disableAssignedField=true;
        }
    });


    this.BsService.bs_TaskName.subscribe(t => {
      if(t){
          this.Sub_ProjectName = t
      }
      console.log(this.Sub_ProjectName,'======>')
   });

    tippy('#actattach', {
      content: "If you select this checkbox, you need to attach a file when completing the action.",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'dark',
      animateFill: true,
      inertia: true,
      placement:'left'
    });

    this.getActionCount(this.pcode);

  }
  allocatedHour:any

  GetAllEmployeesForAssignDropdown() {
    let obj: any = {
      pagenumber: 1,
      Emp_No: this.CurrentUser_ID,
      Mode: 'AssignedTask'
    }

    this.BsService.bs_projectCode.subscribe(p => {
      if (p == null) {
        this.ProjectsDropdownBoolean = false;
        this.GetProjectsByUserName();
        this._MasterCode = null;
      }
      else {
        this._MasterCode = p;
        this.ProjectsDropdownBoolean = true;
        this.selectedProjectCode = p;
        this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {

          this.ProjectDeadLineDate = data["DeadLine"];
          this.ProjectStartDate = data["StartDate"];
          this.owner=data["Owner_empno"];
          this.Owner_Empno = data['Owner_empno'];
          this.Resp_empno = data['Resp_empno'];
          this.Autho_empno = data['Autho_empno'];
          if(this.createproject.projectInfo){
            this.allocatedHour= this.createproject.projectInfo.AllocatedHours;
          }
          const dateOne = new Date(this.disablePreviousDate);
          const dateTwo = new Date(this.ProjectStartDate);
          if(dateTwo > dateOne){
            this.disablePreviousDate = this.ProjectStartDate;
          }
          // console.log(dateOne,dateTwo,this.disablePreviousDate,this.ProjectStartDate,"dates")
        })
      }

    });


    this.service._GetCompletedProjects(obj).subscribe(
      (data) => {
        this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);


        //console.log(this.EmployeeList);
        this.dropdownSettings_EMP = {
          searchAutofocus: true,
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'DisplayName',
          itemsShowLimit: 2,
          closeDropDownOnSelection: true,
          allowSearchFilter: true,
        };
      });
  }









  getRACISandNonRACIS(){

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.pcode,this.Current_user_ID).subscribe(
      (data) => {

        this.ownerArr=(JSON.parse(data[0]['RacisList']));   
        this.nonRacis=(JSON.parse(data[0]['OtherList']));
        this.allUsers=(JSON.parse(data[0]['alluserlist']));
        console.log('this is all users list:',this.allUsers);
        console.log(this.ownerArr,"groupby");



      });
  }

  onOptionClick(item) {
    if (item == this.Owner_Empno) {
      // Prevent selecting disabled option
      return false;
    }
  }

  onFilterChange(event) {
    this.filterText = event;
    this.GetProjectsByUserName();
  }

  selectedProjectCode: any;

  ProjectOnSelect() {

    let obj: any = {
      pagenumber: 1,
      Emp_No: this.CurrentUser_ID,
      Mode: 'AssignedTask'
    }
    // this.selectedProjectCode = obj['Project_Code'];
    this.selectedProjectCode=this.selectedProjectCodelist;
    this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {
      this.ProjectDeadLineDate = data["DeadLine"];
      this.ProjectStartDate = data["StartDate"];
      this.Owner_Empno = data['Owner_empno'];
      this.Resp_empno = data['Resp_empno'];
      this.Autho_empno = data['Autho_empno'];
      const dateOne = new Date(this.disablePreviousDate);
      const dateTwo = new Date(this.ProjectStartDate);
      if(dateTwo > dateOne){
        this.disablePreviousDate = this.ProjectStartDate
      }
    });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode,this.Current_user_ID).subscribe(
      (data) => {

        this.ownerArr=(JSON.parse(data[0]['RacisList']));
        this.nonRacis=(JSON.parse(data[0]['OtherList']));
        this.allUsers=(JSON.parse(data[0]['alluserlist']));
        console.log(this.allUsers,"groupby");

      });

    this.service._GetCompletedProjects(obj).subscribe(
      (data) => {
        this._EmployeeListForDropdown = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.dropdownSettings_EMP = {
          searchAutofocus: true,
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'DisplayName',
          itemsShowLimit: 2,
          closeDropDownOnSelection: true,
          allowSearchFilter: true,
        };
      });
  }

  ProjectOnDeselect(obj) {
    this.selectedProjectCode = "";
  }

  Owner_Empno:string;
  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = 1;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.filterText;
    this.service.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = JSON.parse(data[0]['DropdownProjects_Json']);
      this.Owner_Empno = this._ProjectDataList[0]['Owner_EmpNo'];
      this.dropdownSettings_Projects = {
        singleSelection: true,
        idField: 'Project_Code',
        textField: 'Project_Name',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        closeDropDownOnSelection: true,
        clearSearchFilter: true,
        searchPlaceholderText: "Search by project name",
        maxHeight: "500px",
        allowRemoteDataSearch: true,
        noDataAvailablePlaceholderText: 'Please wait..',
      };
      console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }

  completionattachment:boolean=true

  // test(){
  //   alert(this.completionattachment)
  // }

  onFileChange(e) {
    this._inputAttachments = [...this._inputAttachments, {
      FileName: e.target.files[0].name,
      Size: e.target.files[0].size,
      Files: e.target.files[0]
    }];
  }

  selected_Employee = [];

  EmployeeOnSelect(obj) {   
    // 1. store selected emp
    // this.selectedEmpNo = obj['Emp_No'];
   
    // if(obj['Emp_No'] == this.Owner_Empno){
    //   this.selectedEmpNo='';
    //   this._selectemp = true;
    //   this.notifyService.showInfo("Action cannot be assigned to project owner","");
    // }
    // else{
      this._selectemp = false;
      this.selectedEmpNo = obj['Emp_No'];
    // }
      
     //2. update weekendpolicy based on selected emp.
      this.setWeekendPolicy(obj.CompanyId);

     //3.validate startdate and enddate.   since dates are connected to weekend policy.
     const start_dt_=new Date(this._StartDate);
     const end_dt_=new Date(this._EndDate);
     if(this.weekendPolicy[start_dt_.getDay()]||this.weekendPolicy[end_dt_.getDay()]){
        this._StartDate=null;
        this._EndDate=null; 
     }
  } 

  EmployeeOnDeselect(obj) {
    this.selectedEmpNo = null;
  }

  Sub_ProjectCode: any;
  EmpNo_Autho: any;

  maxlimit: boolean = true;
  _message: string;
  _Message: string;
  start_dt:any =new Date();
  end_dt:any =new Date();


  // alertMaxAllocation() {
  //   if (this._StartDate == null || this._EndDate == null) {
  //     this._message = "Start Date/End date missing!"
  //   }
  //   else { 
  //     // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
  //     // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
  //     this.start_dt=new Date(this._StartDate);
  //     this.end_dt=new Date(this._EndDate);

  //     console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")

  //     var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
  //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //     if(Difference_In_Days==0){
  //       Difference_In_Days=-1;
  //       this.maxAllocation = (-Difference_In_Days) * this.perDayLimit / 1;
  //     }
  //     else{
  //       this.maxAllocation = (-Difference_In_Days) * this.perDayLimit / 1 +this.perDayLimit;
  //     }
  //     console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")
  //   }
  // }


  ownerNo:string;



//   OnSubmit() {


//     if (this._Urlid==2 && (this.selectedProjectCodelist == null || this.selectedProjectCodelist == undefined)) {
//       this._projcode = true;
//       // return false;
//     }else this._projcode=false;


//     if (this.Sub_ProjectName == "" || this.Sub_ProjectName == null || this.Sub_ProjectName == undefined) {
//       // this.Sub_ProjectName==="VALID"
//       this._subname = true;
//     }else this._subname=false;

//     if (this.isPrjNameValid !== 'VALID'  ) {
//       // Don't proceed with form submision if input is invalid
//       return;
//     }

//     if(this.Sub_ProjectName.length>100){
//     return
//     }

//     if (this._Description == "" || this._Description == null || this._Description == undefined ) {
//       this._desbool = true;
//       // return false;
//     }else this._desbool = false;
//     if(this.isPrjDesValid !=='VALID'){
//       return
//     }

//     if(this._Description.length>500){
//     return
//     }


//     if (this.selectedEmpNo == "" || this.selectedEmpNo == null || this.selectedEmpNo == undefined) {
//       this._selectemp = true;
//       // return false;
//     }else this._selectemp = false;

//     if (this._StartDate == null || this._StartDate == null || this._StartDate == undefined) {
//       this._sdate = true;
//       // return false;
//     }else this._sdate = false;

//     if (this._EndDate == null || this._EndDate == null || this._EndDate == undefined) {
//       this._edate = true;
//       // return false;
//     }else this._edate = false;

//     if(this._allocated==null||this._allocated==undefined||this._allocated==0){
//       this._alchr=true;
//       // return false;
//     }else  this._alchr=false;

//     if(this._Urlid==5){
//        const d1=new Date(this.ProjectStartDate);
//        const d2=new Date(this.ProjectDeadLineDate);
//        this._actbefore=this._StartDate<d1;
//       //  this._actafter=this._EndDate>d2;
//       //  console.log("asdf eeeeee:",this._actbefore,this._actafter);
//     }


//    const fieldsRequired:boolean=[(this._Urlid=='2'?this._projcode:false),this._subname,this._desbool,this._selectemp,this._sdate,this._edate,this._actbefore ,this._alchr].some(item=>item);
//    if(fieldsRequired)
//    return false;        // please provide all mandatory fields value.



//    const continueNext=async()=>{

//    // Action cost calculate.
//     this.actionCost=null;  // must be empty before calculating.
//     const res:any=await this.service.GetCPProjectCost(this.selectedEmpNo,this._allocated.toString()).toPromise();
//     if(res&&res.Status){
//           this.actionCost=res.Data;
//           console.log("action cost:",this.actionCost);
//     }
//     else{
//       this.notifyService.showError('','Internal server error');
//       console.error('Unable to get action cost value.')
//       return;
//     }
//   // Action cost calculate.


//     if(this.owner==null || this.owner==undefined || this.owner==''){
//       this.owner=this.Owner_Empno;
//     }
//     else{
//       this.owner = this.owner;
//     }

//     if (this._MasterCode == null) {
//       this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
//       this._MasterCode = this.selectedProjectCode;
//     }
//     else {
//       this.ObjSubTaskDTO.MasterCode = this._MasterCode;
//     }

//     // console.log(this.owner,"selected owner")

//     this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {
//
//       this.Sub_ProjectCode = data['SubTask_ProjectCode'];
//       this.EmpNo_Autho = data['Team_Autho'];
//       this.ProjectBlock = data['ProjectBlock'];

//       if (this.task_id != null) {
//         this.ObjSubTaskDTO.AssignId = this.task_id;
//       }
//       else {
//         this.task_id = 0;
//       }

//       this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName.trim();
//       this.ObjSubTaskDTO.SubtaskDescription = this._Description;
//       this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
//       this.ObjSubTaskDTO.StartDate = this._StartDate;
//       this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;

//       // this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
//       // this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
//       //If we are using 8 hours format then divide by 3 for HourDifference.

//       this.maxAllocation = this.maxAllocation * 8 / 1;
//       this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
//       this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
//       this.ObjSubTaskDTO.Remarks = this._remarks;
//       this.ObjSubTaskDTO.Duration = this._allocated;
//       // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
//       console.log( this.fileAttachment)
//      if (this.fileAttachment&& this.fileAttachment.length > 0) {
//         this.ObjSubTaskDTO.Attachments =  this.fileAttachment;
//       }

//       var datestrStart = moment(this._StartDate).format("MM/DD/YYYY");
//       var datestrEnd = moment(this._EndDate).format("MM/DD/YYYY");
//       // alert(datestrStart)
//       // alert(datestrEnd)
//       console.log(datestrStart,this._StartDate,"startdate")
//       console.log(datestrEnd,this._EndDate,"enddate")
//       const fd = new FormData();
//       fd.append("Project_Code", this.Sub_ProjectCode);
//       fd.append("Team_Autho", this.EmpNo_Autho);
//       // fd.append('file', this._inputAttachments[0].Files);
//       if ( this.fileAttachment) {
//         fd.append("Attachment", "true");
//         fd.append('file',  this.fileAttachment);
//       }
//       else {
//         fd.append("Attachment", "false");
//         fd.append('file', "");
//       }
//       fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
//       fd.append("SubtaskName", this.Sub_ProjectName.trim());
//       fd.append("Desc", this._Description);
//       fd.append("Projectblock", this.ProjectBlock);
//       fd.append("StartDate", datestrStart);
//       fd.append("EndDate", datestrEnd);
//       // fd.append("Allocated", this.maxAllocation.toString());
//       fd.append("Emp_No", this.CurrentUser_ID);
//       fd.append("AssignTo", this.selectedEmpNo);
//       fd.append("Remarks", this._remarks);
//       fd.append("EmployeeName", localStorage.getItem('UserfullName'));
//       fd.append("AssignId", this.task_id.toString());
//       fd.append("Owner", this.owner);
//       fd.append("isattachment",this.completionattachment.toString());
//       fd.append("actionCost",this.actionCost);

//       if (this.ObjSubTaskDTO.Duration != null) {
//         fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
//       }
//       else {
//         this.ObjSubTaskDTO.Duration = 0;
//       }

//       this.service._InsertNewSubtask(fd).subscribe(event => {

//         if (event.type === HttpEventType.Response){
//           var myJSON = JSON.stringify(event);
//           this._Message = (JSON.parse(myJSON).body).Message;
//           // console.log(event,myJSON,this._Message,"action data");
//           if(this._Message=='1'){
//             this.notifyService.showSuccess("Action created successfully", "Success");
//           }
//           else if(this._Message=='2'){
//             this.notifyService.showInfo("Request submitted to the Assigned employee","Action Under Approval");
//           }
//           else if(this._Message=='3'){
//             this.notifyService.showError("Something went wrong", "Action not created");
//           }
//           else if(this._Message=='7'){
//             this.notifyService.showError("Something went wrong", "Action not created");
//           }
//           else{
//             this.notifyService.showError("Something went wrong", "Action not created");
//           }
//         }

//         if (this._Urlid == 1) {
//           this._Todoproject.CallOnSubmitAction();
//           this.Clear_Feilds();
//           this.closeInfo();
//           this._inputAttachments = [];
//         }
//         else if(this._Urlid == 2){
//           this._projectunplanned.getCatid();
//           this.Clear_Feilds();
//           this.closeInfo();
//           this._inputAttachments = [];
//         }
//         else if(this._Urlid == 3){
//           this._meetingreport.getScheduleId();
//             this._meetingreport.GetAssigned_SubtaskProjects();
//           this.Clear_Feilds();
//           this.closeInfo();
//           this._inputAttachments = [];
//         }
//         else if(this._Urlid == 7){
//           this._meetingreport.getScheduleId();
//             this._meetingreport.GetAssigned_SubtaskProjects();
//           this.Clear_Feilds();
//           this.closeInfo();
//           this._inputAttachments = [];
//         }
//         else if(this._Urlid == 4){

//           this._details.getProjectDetails(this.selectedProjectCode);
//           this.closeInfo();
//         }
//         else if(this._Urlid == 5){
//           this.createproject.getActionsDetails();
//           this.createproject.newProjectDetails(this._MasterCode);
//           this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection
//           this.closeInfo();
//         }
//         else {
//           this._MoreDetails.GetProjectDetails();
//           this._MoreDetails.GetSubtask_Details();
//           this._MoreDetails.getapproval_actiondetails();
//           this._MoreDetails.getRejectType();
//           this.Clear_Feilds();
//           this.closeInfo();
//           this._inputAttachments = [];
//         }



//       });


//       });


//    }









//     if(this._Urlid == 5){
//       // only for project creation page.
//
//       //1. when provided allocated hrs exceeds main project planned allocated hr then confirm.
//       if(this.allocatedHour>0){
//         const exceeds:boolean=this.createproject.hasExceededTotalAllocatedHr(this._allocated);
//         if(exceeds)
//         {
//                Swal.fire({
//                   confirmButtonText:'Yes',
//                   cancelButtonText:'No',
//                   showCancelButton:true,
//                   showConfirmButton:true,
//                   text:'Provided allocated hrs to this action exceeds the project planned allocated hrs. Do you want to continue?',
//                   title:'Exceeds project allocated hrs.'
//                }).then(choice=>{
//                    if(choice.isConfirmed==false)
//                     return;
//                     // continueNext();
//                });
//         }
//         // else
//         // continueNext();
//       }



//       //2. when draft action deadline matches with main project deadline.
//       // const actn_deadline = new Date(this._EndDate);
//       // const prj_deadline = new Date(this.ProjectDeadLineDate);
//       // if(actn_deadline.getTime()==prj_deadline.getTime()){
//       //       const already_matched=this.createproject.hasActnsMatchingPrjDeadline(actn_deadline);
//       //       if(already_matched>=2){
//       //         Swal.fire({
//       //           title:'Invalid Action Deadline',
//       //           html:'<div style="text-align:justify;">Action deadline should be less than the main project deadline. Please modify the action deadline to continue</div>',
//       //           icon:'error',
//       //           showConfirmButton:true,
//       //           confirmButtonText:'OK'
//       //        });
//       //        return;
//       //       }
//       // }



//     continueNext();

//     }
//     else
//     {  // details page, runway ...
//         continueNext();
//     }




//   }


  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [ day,mnth,date.getFullYear() ].join("-");
  }

  isHierarchy:boolean = false;
  gethierarchy() {
    this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID,this.pcode).subscribe((data) => {
      if(data['message']=='1'){
        this.isHierarchy=true;
      }
      else{
        this.isHierarchy=false;
      }
    });
  }

//   sweetAlert() {
//
//    const processContinue=()=>{
//

// //     if (this.actionCount.DeadLine==this._EndDate&&this.actionCount.count>3){
// //   Swal.fire({
// //     title:'invalid Date',
// //     text:'you have 3 action on that date',
// //     showCloseButton:true
// //    });
// //    return;
// // }

//     var datestrEnd = (new Date(this._EndDate)).toUTCString();
//     var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
//     const dateOne = new Date(this._EndDate);
//     const dateTwo = new Date(this.ProjectDeadLineDate);
//     // console.log(dateOne)
//     // console.log(dateTwo)
//     if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {
//       Swal.fire({
//         title: 'Action deadine is greater than main project deadline ?',
//         text: 'Do you want to continue for selection of date after main project deadline!!',
//         // icon: 'warning',
//         // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
//         showCancelButton: true,
//         confirmButtonText: 'Yes',
//         cancelButtonText: 'No'
//       }).then((response: any) => {
//         if (response.value) {
//           this.OnSubmit();
//         } else if (response.dismiss === Swal.DismissReason.cancel) {
//           Swal.fire(
//             'Cancelled',
//             'Action not created',
//             'error'
//           )
//         }
//       });
//     }
//     else if ((dateTwo < dateOne) && (this.Current_user_ID!=this.Owner_Empno && this.Current_user_ID!=this.Resp_empno && this.Current_user_ID!=this.Autho_empno && this.isHierarchy==false)) {
//       Swal.fire({
//         title: 'Unable to create this action.',
//         text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
//         // showCancelButton: true
//       });

//     }
//     else {
//       this.OnSubmit();
//     }
//    }

//    if(this.owner==this.selectedEmpNo){
//     Swal.fire({
//       title: 'Action owner and responsible are same.',
//       text: 'Do you want to continue?',
//       // icon: 'warning',
//       // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No'
//     }).then((response: any) => {
//       if (response.value) {
//          processContinue();
//       }
//     });
//    }
//    else
//    processContinue();
//   }





// sweet alert method new
processingActionCreate:boolean = false
sweetAlert2=async()=>{


// 1. Validation : forms fields required check  start.
if (this._Urlid==2 && (this.selectedProjectCodelist == null || this.selectedProjectCodelist == undefined)) {
  this._projcode = true;
  // return false;
}else this._projcode=false;



if (this.Sub_ProjectName == "" || this.Sub_ProjectName == null || this.Sub_ProjectName == undefined ||this.isPrjNameValid != 'VALID'||this.Sub_ProjectName.length>100) {
  // this.Sub_ProjectName==="VALID"
  this._subname = true;
}else this._subname=false;


if (this._Description == "" || this._Description == null || this._Description == undefined ||this.isPrjDesValid !=='VALID'||this._Description.length>500) {
  this._desbool = true;
  // return false;
}else this._desbool = false;


if (this.selectedEmpNo == "" || this.selectedEmpNo == null || this.selectedEmpNo == undefined) {
  this._selectemp = true;
  // return false;
}else this._selectemp = false;

if (this._StartDate == null || this._StartDate == null || this._StartDate == undefined) {
  this._sdate = true;
  // return false;
}else this._sdate = false;

if (this._EndDate == null || this._EndDate == null || this._EndDate == undefined) {
  this._edate = true;
  // return false;
}else this._edate = false;

if(this._allocated==null||this._allocated==undefined||this._allocated==0||this._allocated > this.maxAllocation){
  this._alchr=true;
  // return false;
}else  this._alchr=false;
// 


if(this._Urlid==5||this._Urlid==4){
     if(this._sdate == false){  // if input startdate of action is given.
      this._actbefore=this.isActionStartBeforeProject();   
     } 
}

const fieldsRequired:boolean=[(this._Urlid=='2'?this._projcode:false),this._subname,this._desbool,this._selectemp,this._sdate,this._edate,this._actbefore ,this._alchr].some(item=>item);
if(fieldsRequired)
return false;        // please provide all mandatory fields value.
// 1. Validation : forms fields required check end.



// 2. Validation : Action owner and responsible are same. start
if(this.owner==this.selectedEmpNo){
  const choice = await Swal.fire({
     title: 'Action owner and responsible are same.',
     text: 'Do you want to continue?',
     showCancelButton: true,
     confirmButtonText: 'Yes',
     cancelButtonText: 'No'
   });
 if(choice.isConfirmed==false){
    return;
 }
}
// 2. Validation : Action owner and responsible are same. end



//3. Validation : Action deadline is greater than main project deadline.
var datestrEnd = (new Date(this._EndDate)).toUTCString();
var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
const dateOne = new Date(this._EndDate);
const dateTwo = new Date(this.ProjectDeadLineDate);
if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {

  const choice = await Swal.fire({
    title: 'Action deadline is greater than main project deadline ?',
    text: 'Do you want to continue for selection of date after main project deadline!',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  });

  if(choice.isConfirmed==false){
    Swal.fire(
      'Cancelled',
      'Action not created',
      'error'
    );
    return;
  }

}
else if ((dateTwo < dateOne) && (this.Current_user_ID!=this.Owner_Empno && this.Current_user_ID!=this.Resp_empno && this.Current_user_ID!=this.Autho_empno && this.isHierarchy==false)) {
  Swal.fire({
    title: 'Unable to create this action.',
    text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
    // showCancelButton: true
  });
 return;
}


// 4. Validation : only for project creation page.
if(this._Urlid == 5){

  //i. when provided allocated hrs exceeds main project planned allocated hr then confirm.
  if(this.allocatedHour>0){
    const exceeds:boolean=this.createproject.hasExceededTotalAllocatedHr(this._allocated);
    if(exceeds)
    {
            const choice = await Swal.fire({
            confirmButtonText:'Yes',
            cancelButtonText:'No',
            showCancelButton:true,
            showConfirmButton:true,
            text:'Provided allocated hrs to this action exceeds the project planned allocated hrs. Do you want to continue?',
            title:'Exceeds project allocated hrs.'
           });
           if(choice.isConfirmed==false){
            return;
           }
    }
  }

  //ii. when draft action deadline matches with main project deadline.
  const actn_deadline = new Date(this._EndDate);
  const prj_deadline = new Date(this.ProjectDeadLineDate);
  if(actn_deadline.getTime()==prj_deadline.getTime()){
        const already_matched=this.createproject.actnsMatchingPrjDeadline();
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


}


// Action creation here
this.startActionCreation();

}

azuremessage: any;
IsFile:boolean=false;
contentType:string="";








startActionCreation=async()=>{

  // Action cost calculate.
   this.actionCost=null;  // must be empty before calculating.
   this.processingActionCreate=true;
   const res:any=await this.service.GetCPProjectCost(this.selectedEmpNo,this._allocated.toString()).toPromise();
   if(res&&res.Status){
         this.actionCost=res.Data;
         console.log("action cost:",this.actionCost);
   }
   else{
    //  this.notifyService.showError('','Internal server error');
    //  this.processingActionCreate=false;
    //  console.error('Unable to get action cost value.')
    //  return;


    // test for new users (Temporary)
    const cost=this._allocated*10;
    this.actionCost=cost;
    // test for new users (Temporary)

   }
 // Action cost calculate.


   if(this.owner==null || this.owner==undefined || this.owner==''){
     this.owner=this.Owner_Empno;
   }
   else{
     this.owner = this.owner;
   }

   if (this._MasterCode == null) {
     this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
     this._MasterCode = this.selectedProjectCode;
   }
   else {
     this.ObjSubTaskDTO.MasterCode = this._MasterCode;
   }

   // console.log(this.owner,"selected owner")

   this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {   

     this.Sub_ProjectCode = data['SubTask_ProjectCode'];
     this.EmpNo_Autho = data['Team_Autho'];
     this.ProjectBlock = data['ProjectBlock'];

     if (this.task_id != null) {
       this.ObjSubTaskDTO.AssignId = this.task_id;
     }
     else {
       this.task_id = 0;
     }

     this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName.trim();
     this.ObjSubTaskDTO.SubtaskDescription = this._Description;
     this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
     this.ObjSubTaskDTO.StartDate = this._StartDate;
     this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;

     // this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
     // this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
     //If we are using 8 hours format then divide by 3 for HourDifference.

     this.maxAllocation = this.maxAllocation * 8 / 1;
     this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
     this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
     this.ObjSubTaskDTO.Remarks = this._remarks;
     this.ObjSubTaskDTO.Duration = this._allocated;
     // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
     console.log( this.fileAttachment)
    // if (this.fileAttachment&& this.fileAttachment.length > 0) {
    //    this.ObjSubTaskDTO.Attachments =  this.fileAttachment;
    //  }   
    

     var datestrStart = moment(this._StartDate).format("MM/DD/YYYY");
     var datestrEnd = moment(this._EndDate).format("MM/DD/YYYY");
     // alert(datestrStart)
     // alert(datestrEnd)
     console.log(datestrStart,this._StartDate,"startdate")
     console.log(datestrEnd,this._EndDate,"enddate")
     const fd = new FormData();
     fd.append("Project_Code", this.Sub_ProjectCode);
     fd.append("Team_Autho", this.EmpNo_Autho);
     // fd.append('file', this._inputAttachments[0].Files);
     if ( this.fileAttachment) {
       fd.append("Attachment", "true");
     }
     else {
       fd.append("Attachment", "false");
       fd.append('file', "");
     }   
     fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
     fd.append("SubtaskName", this.Sub_ProjectName.trim());
     fd.append("Desc", this._Description);
     fd.append("Projectblock", this.ProjectBlock);
     fd.append("StartDate", datestrStart);
     fd.append("EndDate", datestrEnd);
     // fd.append("Allocated", this.maxAllocation.toString());
     fd.append("Emp_No", this.CurrentUser_ID);
     fd.append("AssignTo", this.selectedEmpNo.trim());
     fd.append("Remarks", this._remarks);
     fd.append("EmployeeName", localStorage.getItem('UserfullName'));
     fd.append("AssignId", this.task_id.toString());
     fd.append("Owner", this.owner);
     fd.append("proState",this.completionattachment.toString());
     fd.append("actionCost",this.actionCost);
     fd.append("contentType",this.contentType);


     if (this.ObjSubTaskDTO.Duration != null) {
       fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
     }
     else {
       this.ObjSubTaskDTO.Duration = 0;
     }

    //  this.service._InsertNewSubtask(fd).subscribe(event => {

     this.service._InsertNewSubtaskcore(fd).subscribe((event: HttpEvent<any>) => {

       if (event.type === HttpEventType.Response){
         var myJSON = JSON.stringify(event);
         this._Message = (JSON.parse(myJSON).body).message;
         console.log(event,myJSON,this._Message,"action data");

         if(this._Message=='1'){
          if (this.fileAttachment) {
          this.fileInUpload={ filename:this.fileAttachment.name, uploaded:0, processingUploadFile:false };
          this.setFileUploadingBarVisible(true);

          fd.append('file',  this.fileAttachment);

          this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
            switch (event1.type) {
              case HttpEventType.Sent:
                console.log('Request sent!');
                break;
              case HttpEventType.ResponseHeader:
                console.log('Response header received!');
                break;
              case HttpEventType.UploadProgress:
                const progress = Math.round(event1.loaded / event1.total * 100);
                this.fileInUpload.uploaded=progress;
                if(this.fileInUpload.uploaded==100){
                  setTimeout(()=>{
                    this.fileInUpload.processingUploadFile=true; //when server processing the file upload.
                  },1000);
                }
                break;
              case HttpEventType.Response:{
                console.log('Response received:', event1.body);
                if(event1.body==1){
                  this.notifyService.showSuccess(this.fileInUpload.filename,"Uploaded successfully");
                  this.fileInUpload=null;
                  this.setFileUploadingBarVisible(false);
                  this.exitActionToProject();
                }
              };break;
            }

            console.log(event1,"azure data");
            var myJSON = JSON.stringify(event1);
          //  this._Message = (JSON.parse(myJSON).body);

          });

          }else{ this.exitActionToProject();   }
           this.notifyService.showSuccess("Action created successfully", "Success");

         }
         else if(this._Message=='2'){
          if (this.fileAttachment) {
            this.fileInUpload={ filename:this.fileAttachment.name, uploaded:0, processingUploadFile:false };
            this.setFileUploadingBarVisible(true);

            fd.append('file',  this.fileAttachment);
            this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
              switch (event1.type) {
                case HttpEventType.Sent:
                  console.log('Request sent!');
                  break;
                case HttpEventType.ResponseHeader:
                  console.log('Response header received!');
                  break;
                case HttpEventType.UploadProgress:
                  const progress = Math.round(event1.loaded / event1.total * 100);
                  this.fileInUpload.uploaded=progress;
                  if(this.fileInUpload.uploaded==100){
                    setTimeout(()=>{
                      this.fileInUpload.processingUploadFile=true; //when server processing the file upload.
                    },1000);
                  }
                  break;
                case HttpEventType.Response:{
                  console.log('Response received:', event1.body);
                  if(event1.body==1){
                    this.notifyService.showSuccess(this.fileInUpload.filename,"Uploaded successfully");
                    this.fileInUpload=null;
                    this.setFileUploadingBarVisible(false);
                    this.exitActionToProject();
                  }
                };break;
              }
              console.log(event1,"azure data");
              var myJSON = JSON.stringify(event1);
            //  this._Message = (JSON.parse(myJSON).body);

            });
          }else{ this.exitActionToProject();  }
           this.notifyService.showInfo("Request submitted to the Assigned employee","Action Under Approval");
         }
         else if(this._Message=='3'){
           this.notifyService.showError("Something went wrong", "Action not created");
         }
         else if(this._Message=='7'){
           this.notifyService.showError("Something went wrong", "Action not created");
         }
         else{
           this.notifyService.showError("Something went wrong", "Action not created");
         }
         this.processingActionCreate=false;
       }

     });

     });
}


exitActionToProject(){
    if (this._Urlid == 1) {
      this._Todoproject.CallOnSubmitAction();
      this.Clear_Feilds();
      this.closeInfo();
      this._inputAttachments = [];
    }
    else if(this._Urlid == 2){
      this._projectunplanned.getCatid();
      this.Clear_Feilds();
      this.closeInfo();
      this._inputAttachments = [];
    }
    else if(this._Urlid == 3){
      this._meetingreport.getScheduleId();
      this._meetingreport.GetAssigned_SubtaskProjects();
      this.Clear_Feilds();
      this.closeInfo();
      this._inputAttachments = [];
    }
    else if(this._Urlid == 7){
      this._meetingreport.getScheduleId();
        this._meetingreport.GetAssigned_SubtaskProjects();
      this.Clear_Feilds();
      this.closeInfo();
      this._inputAttachments = [];
    }
    else if(this._Urlid == 4){

      this._details.getProjectDetails(this.selectedProjectCode);
      this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection
      this.closeInfo();
    }
    else if(this._Urlid == 5){
      this.createproject.getActionsDetails();
      this.createproject.newProjectDetails(this._MasterCode);
      this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection
      this.closeInfo();
    }
    else {
    //  this._MoreDetails.GetProjectDetails();
    //  this._MoreDetails.GetSubtask_Details();
    //  this._MoreDetails.getapproval_actiondetails();
    //  this._MoreDetails.getRejectType();
    //  this.Clear_Feilds();
    //  this.closeInfo();
    //  this._inputAttachments = [];
    }
}








getFileExtension(fileName: any): string | null {
  if (!fileName) {
    return null;
  }
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
}

// sweet alert method new



  closeInfo() {
     this.characterCount=0;
    // alert(this._Urlid);
    if(this._Urlid==2){

      this.router.navigate(["UnplannedTask/"]);
    document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");

    }
    else if(this._Urlid==1){
      this.router.navigate(["./backend/ToDoProjects/"]);
    // document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");
    $('#Project_info_slider_bar').removeClass('kt-action-panel--on');
    }
    else if(this._Urlid==3){
      this._meetingreport.getScheduleId();
    document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");

    }
    else if(this._Urlid==7){
    this._meetingDetails.getDetailsScheduleId();
    document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
    }
    else if(this._Urlid==4){
    this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection if present.
    this.router.navigate(["./Details", this.selectedProjectCode]);
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    }
    else if(this._Urlid==5){
    this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection if present.
    this.router.navigate(["./backend/createproject"]);
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("kt_wrapper").style.zIndex="unset";
    }
    else{
      this.router.navigate(["./MoreDetails", this.selectedProjectCode]);
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");

    }
    this.Clear_Feilds();

    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  Clear_Feilds() {
    this.selectedProjectCodelist = [];
    this.Sub_ProjectCode = null;
    this.Sub_ProjectName = null;
    this._Description = null;
    this._projcode = false;
    this._desbool = false;
    this._subname = false;
    this._sdate = false;
    this._edate = false;
    this._selectemp = false;
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._allocated = null;
    this._inputAttachments = [];
    this._inputAttachments2 = [];
    this.selectedEmpNo = '';
    this.selected_Employee = [];
    this.actionCost=null;


    if((<HTMLInputElement>document.getElementById("uploadFile")))
    (<HTMLInputElement>document.getElementById("uploadFile")).files=null;

  }

  startdatechecker(){
    this._sdate=false;
    this._EndDate=null;
  }

  myFilter:any;

  enddateChecker(){
    this._sdate=true;
    this.myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
    };
  }



// action dependent start
// isActionIndependent:boolean=true;


// selectedActions:any[]=[];
// isActionsDrpDwnOpen:boolean=false;
// allactions:[]=[];

// removeSelectedAction(action){

// }

// closeAutocompleteDrpDwn(x){

// }

// openAutocompleteDrpDwn(x){

// }


// action dependent end





selectFile() {
  this.fileInput.nativeElement.click();
}




permittedFileFormats=[
  "image/*", "application/pdf", "text/plain", "text/html", "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/json", "application/xml", "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
];
invalidFileSelected:boolean=false;
onFileChanged(event: any) {
  const files: File[] = event.target.files;

  if (files && files.length > 0) {
   // if file is selected.
   const filetype = files[0].type;
   const isValidFile=this.permittedFileFormats.some((format)=>{
         return (filetype==format)||(filetype.startsWith('image/')&&format=='image/*');
   });

   if(isValidFile){
    this.file = files[0];
    this.fileAttachment = this.file;
    this.invalidFileSelected=false;
    this.contentType=this.getFileExtension(this.fileAttachment.name);
   }else{
    this.file = null;
    this.fileAttachment = null;
    this.invalidFileSelected=true;
    this.contentType="";
   }

  }else {
   // if no file is selected.
    this.file = null;
    this.fileAttachment = null;
    this.invalidFileSelected=false;
    this.contentType="";
  }
  console.log('File Object:', this.file);

  // Reset file input value to allow selecting the same file again
  this.fileInput.nativeElement.value = '';
}



// testfiletype(){
//   alert(this.contentType);
// }

onInputChange(value: string) {
  this.Sub_ProjectName = value.trim();

}

onDescriptionChange(value:string){
  this._Description=value.trim()

}

 _curtd=new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0)
// @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
//  openAutocompleteDrpDwn(Acomp: string) {
//    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
//    requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
//  }

//  closeAutocompleteDrpDwn(Acomp: string) {
//    const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
//    requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
//  }

// PrjSupport:{RACIS:string,Emp_No:string}[]=[];
// isPrjSprtDrpDwnOpen:boolean=false;
// PrjResp:string;



// onPrjSprtSelected(e:any){
//   const sprtChoosed=this._ProjectDataList.find((p:any)=>p.Emp_No===e.option.value);
//   if(sprtChoosed){
//        const index=this.PrjSupport.indexOf(sprtChoosed);
//        if(index===-1){
//           // if not present then add it
//           this.PrjSupport.push(sprtChoosed);
//        }
//        else{ //  if item choosed is already selected then remove it.
//         this.PrjSupport.splice(index,1);
//        }
//   }
//   this.openAutocompleteDrpDwn('PrjSprtDrpDwn');
// }

// removeSelectedPrjSprt(sprt:{Emp_No:string,RACIS:string}){
//   const index=this.PrjSupport.indexOf(sprt);
//   if(index!==-1){
//     this.PrjSupport.splice(index,1);
//   }
// }

isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
isPrjDesValid:'TOOSHORT'|'VALID'='VALID'

isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
  if(inputString){

  let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
  const x=rg.test(inputString);

 return x ? 'VALID' : 'TOOSHORT';

  }
 return 'TOOSHORT'

 }

 characterCount: number = 0;

 updateCharacterCount(): void {

   // Create a temporary div element to strip out HTML tags
   const tempElement = document.createElement('div');
   tempElement.innerHTML = this._Description;
   const textContent = tempElement.textContent || tempElement.innerText || '';
   this.characterCount = textContent.length;
 }



 actionCount:any
 getActionCount(prjcode){

   this.projectMoreDetailsService.GetActionDeadlineList(prjcode).subscribe((res)=>{
    this.actionCount = JSON.parse(res[0].deadlineList)
    console.log(this.actionCount,' this.actionCount this.actionCount this.actionCount')

   })
 }


// if (this.actionCount.DeadLine==this.End_Date&&this.actionCount.count>3){
//   Swal.fire({
//     title:'invalid Date',
//     text:'you have 3 action on that date',
//     showCloseButton:true
//    });
//    return;
// }


sameDateActions:boolean=false;
hasSameDateActions(){
  const result:boolean=this.actionCount.some((item:any)=>{
             const d1=moment(item.DeadLine).format("MM/DD/YYYY");
             const d2=moment(this._EndDate).format("MM/DD/YYYY");
             return (d1==d2&&item.count>3);
  });
  this.sameDateActions=result;
}


isActionStartBeforeProject():boolean{ 
  let isStartsBefore=false;
  if(this.ProjectStartDate&&this._StartDate){
    const mainPrjStartdate=new Date(this.ProjectStartDate);  // project start date.
    const inputActnStartdate=this._StartDate;               // action start date.
    isStartsBefore=inputActnStartdate<mainPrjStartdate;  // is action starts before main project.
  }
  return isStartsBefore;
}





// action cost start.


// getActionCost(userId:string,allocatedhr:string){
//   this.actionCost=null;

//   const empno=userId;
//   const allcHr=allocatedhr;
//   this.service.GetCPProjectCost(empno,allcHr).subscribe((res:{Status:boolean,Message:string,Data:number})=>{
//       if(res.Status){
//          this.actionCost=res.Data;
//          console.log("action cost:",this.actionCost);
//       }
//   });
// }

// action cost end.


// file uploading progress bar start.
fileInUpload:{filename:string, uploaded:number, processingUploadFile:boolean};
isFileUploadingBarVisible:boolean=false;  // whether file uploading bar is visible or not.

setFileUploadingBarVisible(_visible:boolean){
     this.isFileUploadingBarVisible=_visible;
     if(this.isFileUploadingBarVisible){
      document.getElementById("actnfile-upload-modal-backdrop").style.display = "block";
      document.getElementsByClassName('file-upload-progress')[0].classList.remove('d-none');
     }
     else{
      document.getElementById("actnfile-upload-modal-backdrop").style.display = "none";
      document.getElementsByClassName('file-upload-progress')[0].classList.add('d-none');
     }
}

// file uploading progress bar end.






// New allocated hrs validation start.
weekendPolicy:{ [key:number]:'full'|'half'  }={  6:'full', 0:'full'   };  // 0- sunday, 1-monday, 2-tuesday, .... 6-saturday
perDayAlhr_Limit:number=8;  // per day allocatable hrs limit. 8 hrs 
totalWorkingDays:number=0; // from start date and end date selected. it gives total working days in that duration.
totalOffDays:{date:string, reason:string}[]=[];  // total off days in the selected start date and end date duration.

isDateSelectable=(date:Moment|null):boolean=>{  
   if(!date)
   { return false; }
   else{
    return this.weekendPolicy?.[date.day()]=='full'?false:true;
   }
} 

setWeekendPolicy(companyId:any){
   this.weekendPolicy=companyId=='400'?{ 6:'full',0:'full' }:{ 5:'full', 6:'half'};
}

alertMaxAllocation(){
    if (this._StartDate == null || this._EndDate == null) {
      this._message = "Start Date/End date missing!"
      this.maxAllocation=0;
      this.totalWorkingDays=0;
      this.totalOffDays=[];
    }
    else{

      this.start_dt=new Date(this._StartDate);  this.start_dt.setHours(0,0,0,0);
      this.end_dt=new Date(this._EndDate);   this.end_dt.setHours(0,0,0,0);

      let total_duration_days=(Math.abs(moment(this.start_dt).diff(this.end_dt,'days'))+1);
      let total_off=0;  
      let total_working_days=0;
      let total_off_dates:any=[];

      const tempdate=new Date(this.start_dt); tempdate.setHours(0,0,0,0); 
      while(tempdate<=this.end_dt)
      {
         const isWeekend=this.weekendPolicy[tempdate.getDay()];
         if(isWeekend)
         {
           total_off+=(isWeekend=='full'?1:isWeekend=='half'?0.5:0);
           if(isWeekend=='half'){  total_working_days+=1;   }
           if(isWeekend=='full'){  total_off_dates.push({ date:tempdate.toString(), reason:'Weekend'}); }
         }
         else{
           total_working_days+=1;
         }
         tempdate.setDate(tempdate.getDate()+1);
      }

       this.totalWorkingDays=total_working_days;
       this.maxAllocation=(total_duration_days-total_off)*this.perDayAlhr_Limit;
       this.totalOffDays=[...total_off_dates];
        

    }
}





// New allocated hrs validation end.


}
