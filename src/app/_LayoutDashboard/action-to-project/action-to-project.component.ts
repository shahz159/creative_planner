
import { Component, OnInit,ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
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
import tippy from 'node_modules/tippy.js';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {  MAT_DATE_FORMATS,MAT_DATE_LOCALE} from '@angular/material/core';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';

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
  ProjectDeadLineDate: Date;
  ProjectStartDate: Date;
  maxAllocation: number;
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


  CurrentUser_ID: string;
  _EmployeeListForDropdown = [];
  selectedProjectCodelist:any;
  ownerName:string;
  RespName:string;
  ownerArr:any = []
  nonRacis:any = [];
  allUsers:any=[];

  constructor(
    public notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    public router: Router,public _meetingreport: MeetingReportComponent,
    public _details: DetailsComponent,
    public createproject: CreateProjectComponent,
    public dialog: MatDialog, public dateAdapter: DateAdapter<Date>,
    public BsService: BsServiceService,
    public service: ProjectTypeService,
    public _projectunplanned: ProjectUnplannedTaskComponent,
    public _Todoproject: ToDoProjectsComponent,
    public _MoreDetails: MoreDetailsComponent,
    private route: ActivatedRoute,
    public _meetingDetails:MeetingDetailsComponent
  ) {

    // super(notifyService,ProjectTypeService,router,dialog,dateAdapter,BsService);
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO = new SubTaskDTO;
    this.ObjUserDetails = new UserDetailsDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.BsService.bs_projectCode.subscribe(p => this.pcode=p);
    this.BsService.bs_ProjectName.subscribe(N => this._MainPrjectName = N);
    this.BsService.bs_AssignId.subscribe(id => this.task_id = id);
    this.BsService.bs_TaskName.subscribe(t => {
      this.Sub_ProjectName = t
    });
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


         })

         tippy('#actattach', {
          content: "If you select this checkbox, you need to attach a file when completing the action.",
          arrow: true,
          animation: 'scale-extreme',
          theme: 'dark',
          animateFill: true,
          inertia: true,
          placement:'left'
        });

  }

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

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.pcode).subscribe(
      (data) => {
        this.ownerArr=(JSON.parse(data[0]['RacisList']));
        this.nonRacis=(JSON.parse(data[0]['OtherList']));
        this.allUsers=(JSON.parse(data[0]['alluserlist']));
        console.log(this.allUsers,"groupby");
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
        this.disablePreviousDate = this.ProjectStartDate;
      }
    });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode).subscribe(
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
      // console.log("Project List for Dropdown...",this._ProjectDataList);
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
    // this.selectedEmpNo = obj['Emp_No'];
    if(obj['Emp_No'] == this.Owner_Empno){
      this.selectedEmpNo="";
      this._selectemp = true;
      this.notifyService.showInfo("Action cannot be assigned to project owner","");
    }
    else{
      this._selectemp = false;
      this.selectedEmpNo = obj['Emp_No'];
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


  alertMaxAllocation() {
    if (this._StartDate == null || this._EndDate == null) {
      this._message = "Start Date/End date missing!!"
    }
    else {
      // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
      // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
      this.start_dt=new Date(this._StartDate);
      this.end_dt=new Date(this._EndDate);

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


  ownerNo:string;




  OnSubmit() {
debugger
    if (this._Urlid==2 && (this.selectedProjectCodelist == null || this.selectedProjectCodelist == undefined)) {
      this._projcode = true;
      // return false;
    }

    if (this.Sub_ProjectName == "" || this.Sub_ProjectName == null || this.Sub_ProjectName == undefined) {
      this._subname = true;
      // return false;
    }else this._subname=false;

    if (this._Description == "" || this._Description == null || this._Description == undefined) {
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
    
    if(this._allocated==null||this._allocated==undefined||this._allocated==0){
      this._alchr=true;
      // return false;
    }else  this._alchr=false;



   const fieldsRequired:boolean=[(this._Urlid=='2'?this._projcode:false),this._subname,this._desbool,this._selectemp,this._sdate,this._edate,this._alchr].some(item=>item);
   if(fieldsRequired)    
   return false;        // please provide all mandatory fields value.






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

      this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName;
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

      if (this._inputAttachments.length > 0) {
        this.ObjSubTaskDTO.Attachments = this._inputAttachments[0].Files;
      }

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
      if (this._inputAttachments.length > 0) {
        fd.append("Attachment", "true");
        fd.append('file', this._inputAttachments[0].Files);
      }
      else {
        fd.append("Attachment", "false");
        fd.append('file', "");
      }
      fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
      fd.append("SubtaskName", this.Sub_ProjectName);
      fd.append("Desc", this._Description);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("StartDate", datestrStart);
      fd.append("EndDate", datestrEnd);
      // fd.append("Allocated", this.maxAllocation.toString());
      fd.append("Emp_No", this.CurrentUser_ID);
      fd.append("AssignTo", this.selectedEmpNo);
      fd.append("Remarks", this._remarks);
      fd.append("EmployeeName", localStorage.getItem('UserfullName'));
      fd.append("AssignId", this.task_id.toString());
      fd.append("Owner", this.owner);
      fd.append("isattachment",this.completionattachment.toString());

      if (this.ObjSubTaskDTO.Duration != null) {
        fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
      }
      else {
        this.ObjSubTaskDTO.Duration = 0;
      }

      this.service._InsertNewSubtask(fd).subscribe(event => {

        if (event.type === HttpEventType.Response){
          var myJSON = JSON.stringify(event);
          this._Message = (JSON.parse(myJSON).body).Message;
          // console.log(event,myJSON,this._Message,"action data");
          if(this._Message=='1'){
            this.notifyService.showSuccess("Action created successfully", "Success");
          }
          else if(this._Message=='2'){
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
        }

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
          this.closeInfo();
        }
        else if(this._Urlid == 5){


          this.createproject.getActionsDetails();
          this.createproject.newProjectDetails(this._MasterCode);

          this.BsService.setSelectedTemplAction({name:'',description:'',assignedTo:''});  // erase the default selection
          this.closeInfo();
        }
        else {
          this._MoreDetails.GetProjectDetails();
          this._MoreDetails.GetSubtask_Details();
          this._MoreDetails.getapproval_actiondetails();
          this._MoreDetails.getRejectType();
          this.Clear_Feilds();
          this.closeInfo();
          this._inputAttachments = [];
        }



      });
    });
  }

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
  sweetAlert() {
    var datestrEnd = (new Date(this._EndDate)).toUTCString();
    var datedead = (new Date(this.ProjectDeadLineDate)).toUTCString();
    const dateOne = new Date(this._EndDate);
    const dateTwo = new Date(this.ProjectDeadLineDate);
    // console.log(dateOne)
    // console.log(dateTwo)
    if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {
      Swal.fire({
        title: 'Action deadine is greater than main project deadline ?',
        text: 'Do you want to continue for selection of date after main project deadline!!',
        // icon: 'warning',
        // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          this.OnSubmit();
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Action not created',
            'error'
          )
        }
      });
    }
    else if ((dateTwo < dateOne) && (this.Current_user_ID!=this.Owner_Empno && this.Current_user_ID!=this.Resp_empno && this.Current_user_ID!=this.Autho_empno && this.isHierarchy==false)) {
      Swal.fire({
        title: 'Unable to create this action.',
        text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
        // showCancelButton: true
      });

    }
    else {
      this.OnSubmit();
    }
  }

  closeInfo() {

    // alert(this._Urlid);
    if(this._Urlid==2){
      debugger
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

      this.router.navigate(["./Details", this.selectedProjectCode]);
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");

    }
    else if(this._Urlid==5){

    this.router.navigate(["./backend/createproject"]);
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
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

onFileChanged(event: any) {
  const files: File[] = event.target.files;

  if (files && files.length > 0) {
    this.file = files[0];
    this.fileAttachment = this.file;
  } else {
    this.file = null;
    this.fileAttachment = null;
  }
  // Reset file input value to allow selecting the same file again
  this.fileInput.nativeElement.value = '';
}





}
