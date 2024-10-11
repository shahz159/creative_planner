// import { ConeColumn } from '@amcharts/amcharts4/charts';
// import { number } from '@amcharts/amcharts4/core';
// import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ViewChild, Component, OnInit,Renderer2,ViewChildren,QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { DateAdapter } from '@angular/material/core';
import { CategoryDTO } from 'src/app/_Models/category-dto';
import { CreateProjectComponent } from '../create-project/create-project.component';
import Swal from 'sweetalert2';

import {  HttpEventType } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { string } from '@amcharts/amcharts4/core';
import { pluginService } from 'chart.js';
import { add } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete'

import { BsServiceService } from 'src/app/_Services/bs-service.service';
// import { ac } from 'src/app/_LayoutDashboard/action-to-project/action-to-project.component';
import tippy from 'node_modules/tippy.js';
import {  ElementRef } from '@angular/core';
import * as moment from 'moment';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { ActionToAssignComponent } from '../action-to-assign/action-to-assign.component';
declare var $: any;
@Component({
  selector: 'app-project-unplanned-task',
  templateUrl: './project-unplanned-task.component.html',
  styleUrls: ['./project-unplanned-task.component.css']
})

export class ProjectUnplannedTaskComponent implements OnInit{
    // selectedOption: string = '';
    @ViewChild('fileInput') fileInput: any;
    fileAttachment: any;
    file: File | null = null;
    selectedOption: string = 'option1';
    selectedFileName: string | null = null;

  _ObjAssigntaskDTO: AssigntaskDTO;
  _ObjCompletedProj: CompletedProjectsDTO;
  CurrentUser_ID: string;
  panelOpenState: boolean = false;
  public _selectedcatname: string;
  public _selectedcatid: string;
  public task_id: number;

  // private _bar: boolean = false;
  get selectedcatname(): string {
    return this._selectedcatname;
  }
  set selectedcatname(value: string) {
    this._selectedcatname = value;
  }
  disablePreviousDate = new Date();
  disableAfterStartDate = new Date();

  isTodoProjectsLoaded:boolean=false;
  isDropdownDataLoaded:boolean=false;
  isCountsDataLoaded:boolean=false;

  public PortfolioList: any;


  constructor(public notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    private renderer: Renderer2,
    public router: Router,
    private route: ActivatedRoute,
    // public _projectunplanned: ProjectUnplannedTaskComponent,
    // public BsService: BsServiceService,
    // public service:GetRACISandNonRACISEmployeesforMoredetails,
    public dialog: MatDialog, public dateAdapter: DateAdapter<Date>,
    public BsService: BsServiceService,
    public service: ProjectTypeService,
    public createproject: CreateProjectComponent,
    private el: ElementRef

    // ,_Id
    // ,_Name
  ) {
    // this._Id='0';
    // this._Name='NA';
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.BsService.bs_AssignId.subscribe(i => this.task_id = i);
    this.BsService.bs_TaskName.subscribe(t => {
      this._taskName = t
      if (this._taskName == null) {

        this._taskName = null;
      }

    });


    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.ObjUserDetails = new UserDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.ObjCategoryDTO = new CategoryDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disableAfterStartDate.getDate());
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.isTodoProjectsLoaded=false;
    this.isDropdownDataLoaded=false;
    this.isCountsDataLoaded=false;
  }

  IfNoCategoryFound: string;
  IfNoTaskFound: string = "Please select category to view task's";
  IfNoCompletedTaskFound: string;

  // ngAfterContentChecked() {
  //   tippy('.Start_Date', {
  //     content: "Enter qwerty Name",
  //     arrow: true,
  //     animation: 'scale-extreme',
  //     theme: 'gradient',
  //     animateFill: true,
  //     inertia: true,
  //   });

  // }




  ngOnInit(): void {

    this.getRACISandNonRACIS();
    this.GetProjectsByUserName();
    // this.totalproject()
    this.getProjectTypeList();
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.getCatid();
    this.GetAssignFormEmployeeDropdownList();
    this.getrunwayCount();
    this.Current_user_ID = localStorage.getItem('EmpNo');

    this.ProjectTypeService.GetPortfoliosForAssignTask().subscribe(
      (data) => {  console.log("asdf::::::",data)
        this.PortfolioList = data as PortfolioDTO;
        console.log(this.PortfolioList,"portfoliosubn;");
      });

      tippy('#tippy1', {
        content: "Runway tasks",
        arrow: true,
        animation: 'scale-extreme',
        //animation: 'tada',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
        // trigger: 'click',
        // delay: [1000, 200]
      });

      tippy('#tippy2', {
        content: "Add category",
        arrow: true,
        animation: 'scale-extreme',
        //animation: 'tada',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
        // trigger: 'click',
        // delay: [1000, 200]
      });

      tippy('#tippy3', {
        content: "Add task",
        arrow: true,
        animation: 'scale-extreme',
        //animation: 'tada',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
        // trigger: 'click',
        // delay: [1000, 200]
      });

      tippy('.mybutton', {
        content: "Enter rack name",
        arrow: true,
        animation: 'scale-extreme',
        //animation: 'tada',
        theme: 'gradient',
        animateFill: true,
        inertia: true,
        // trigger: 'click',
        // delay: [1000, 200]
      });


    //   window.onload = () => {
    //   tippy('#tippy1', {
    //     arrow: true,
    //     animation: 'scale-extreme',
    //     //animation: 'tada',
    //     theme: 'gradient',
    //     animateFill: true,
    //     inertia: true,
    //     // trigger: 'click',
    //     // delay: [1000, 200]
    //   });
    // }
    this.totalproject();
    // this.initAutosize();
  }



 ngAfterViewInit(){
       // open assigned task if asked in url
    this.route.queryParamMap.subscribe((qparams)=>{
      const assigned_taskId=qparams.get('taskId');
      if(assigned_taskId){
            //
      }
    });
     // open assigned task if asked in url
 }








  // ngAfterViewInit(): void {

  // }

  newCatid:any;

  getCatid(){


    this.ProjectTypeService._GetRunwayCatId(this.CurrentUser_ID).subscribe(
      (data) => {
        debugger
        if(data!=null && data!=undefined && data!='')
        this.newCatid=(data[0]['CategoryId']);
        this.GetTodoProjects();
      });
      this.router.navigate(["UnplannedTask/"]);

  }

  _Demotext: string = "";
  _TodoList = [];
  _CompletedList = [];

  EnterSubmit(_Demotext) {

    if (_Demotext != "") {

      this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
      this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.TaskName = this._Demotext;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          //console.log("Data---->", data);
          this._TodoList = JSON.parse(data['TodoList']);
          let message: string = data['Message'];
          this._Demotext = "";
          //this.GetAssignTask();
          this.notifyService.showSuccess("Successfully", "Added");
          // this.closeInfo();
        });
    }
    else {
      this.notifyService.showInfo("Failed to add task", "Please enter task name");
    }
    this.clearFeilds();
  }


  projectmodal(){
    this.GetAssigned_SubtaskProjects();
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("projectmodal").style.display = "block";

  }
  close_projectmodal(){
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("projectmodal").style.display = "none";
    this.Assigntext=''
  }
  before_edit(){
    document.getElementById("before-edit").style.display = "none";
    document.getElementById("cancelid").style.display = "flex";
    document.getElementById("after-edit").style.display = "flex";
  }

  showedit(){
    document.getElementById("before-edit").style.display = "flex";
    document.getElementById("after-edit").style.display = "none";
    document.getElementById("cancelid").style.display = "none";
  }
  // previousdate :Date= new Date(this._EndDate.getFullYear(),this._EndDate.getMonth(),this._EndDate.getDate(),0,0,0,0)

  ActionedSubtask_Json = [];
  ActionedAssigned_Josn = [];
  CountsJson: any;
  Clientjson:any;
  EmployeeLists:any;
  loading: boolean = false;
  userFound:boolean | undefined

  GetAssigned_SubtaskProjects() {
    this.loading = true;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this._Categoryid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.loading = false;
        this.CategoryList = JSON.parse(data[0]['CategoryList']);

        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        console.log('sdcssd',this._TodoList)
        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        this.Clientjson=JSON.parse(data[0]['Client_json'])

        this.EmployeeLists = JSON.parse(data[0]['EmployeeList']);

        this.FiterEmployee=this.EmployeeList;
        this.userFound = true

        console.log("Data---->", this.FiterEmployee);
      });
  }

  LoadDocument(url: string){
    var myWindow = window.open(url);
    myWindow.focus();
  }


  status_list:any;
  procount:any;
  catcount:any;
  acceptCount: any;
  pendingCount:any;
  rejectCount:any;


  getrunwayCount(){
    this.isCountsDataLoaded=false;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this.ProjectTypeService._GetCategoryCountforRunway(this._ObjCompletedProj).subscribe(
      (data) => {
        this.isCountsDataLoaded=true;
        this.procount = JSON.parse(data[0]['Procount']);
        this.catcount = JSON.parse(data[0]['CatCount']);
        this.status_list = JSON.parse(data[0]['statuscount']);

        this.status_list.forEach(element => {
          if(element.Status=='Accepted'){
            this.acceptCount = element.SCount;
          }
          if(element.Status=='Pending'){
            this.pendingCount = element.SCount;
          }
          if(element.Status=='Rejected'){
            this.rejectCount = element.SCount;
          }
        });
      console.log(this.acceptCount,this.pendingCount,this.rejectCount,this.procount,this.catcount,"count");

      });
  }

  underDev() {
    this.notifyService.showError("**Development under maintainance", "Failed!!");
  }

  GetTodoProjects() {

    this.isTodoProjectsLoaded=false;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this.newCatid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.isTodoProjectsLoaded=true;
        // console.log("Data---->", data);
        this.CategoryList = JSON.parse(data[0]['CategoryList']);
        console.log(this.CategoryList,"this.CategoryListthis.CategoryListthis.CategoryListthis.CategoryList")
        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        if(this.ActionedSubtask_Json.length>0 || this.ActionedAssigned_Josn.length>0 || this._TodoList.length>0){


          //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
          this._CategoryActive = true;

          this.IfNoTaskFound = "";
          this._Categoryid = data[0]["CategoryId"];
          this._CategoryName = data[0]["CategoryName"];
          this.ShowTaskList_Div = false;
          this.Label_TaskName = false;
          this.Textbox_EditTaskName = true;
          this._taskName = "";

          /// Get Tasks On Category Click  /////
          this._ObjCompletedProj.PageNumber = 1;
          this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
          this._ObjCompletedProj.CategoryId = this._Categoryid;
          this._ObjCompletedProj.Mode = 'Todo';
          // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        }
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        let _Accepted =0;
        let _Pending =0;
        let _Rejected=0;
        this.ActionedAssigned_Josn.forEach(element => {
          if(element.Status=="Accepted"){
            _Accepted=_Accepted+1;
          }
          else if(element.Status == "Pending"){
            _Pending=_Pending+1;
          }
          else if(element.Status == "Rejected"){
            _Rejected=_Rejected+1;
          }
        });
        this.CountsAccepted= _Accepted;
        this.CountsPending= _Pending;
        this.CountsRejected= _Rejected;
      });

  }

  OnRadioClick(id) {

    this._ObjAssigntaskDTO.TypeOfTask = "Update";
    this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {

        this.GetAssigned_SubtaskProjects();
        // this._TodoList = JSON.parse(data['TodoList']);
        // this._CompletedList
        // this._CompletedList = JSON.parse(data['CompletedList']);

        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
          this._Demotext = "";
        this.notifyService.showSuccess("", message);

  //  if (message=='Todomeeting'){
  //   this.GetAssigned_SubtaskProjects();
  //   this._Demotext = "";
  //   this.notifyService.showSuccess("", message);
  //  }
  //  else{
  //   this.notifyService.showError('error',message)
  //  }

      });
      this.unassign_closeInfo()
  }

  On_Uncheck(id) {

    this._ObjAssigntaskDTO.TypeOfTask = "UnCheck";
    this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {


        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
        this._Demotext = "";
        this.notifyService.showInfo("", message);


        // if( message =='Todomeeting'){
        // this.GetAssigned_SubtaskProjects();
        // this._Demotext = "";

        // this.notifyService.showInfo("", message);
        // }
        // else{
        //   this.notifyService.showError('error',message)
        // }

      });

  }

  _Deletetask(id, name) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'Todo_Delete',
        title1: 'Confirmation ',
        taskName: name
        //message1: "proj_Name"
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this._ObjAssigntaskDTO.TypeOfTask = "Delete";
        this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
          (data) => {
            this._TodoList = JSON.parse(data['TodoList']);
            this._CompletedList = JSON.parse(data['CompletedList']);
            let message: string = data['Message'];
            this._Demotext = "";
            this.notifyService.showInfo("Successfully", message);
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
    });
  }

  public EmployeeList: any;
  public filterText: any;
  // GetActionToProjectEmployeeDropdownList() {

  //   this.ProjectTypeService.SubTaskDetailsService_ToDo_Page(this.selectedProjectCode, this.Comp_No).subscribe(
  //     (data) => {
  //       this.EmployeeList = JSON.parse(data[0]['RacisEmployee_Json']);

  //       this.dropdownSettings_Employee = {
  //         singleSelection: true,
  //         idField: 'Emp_No',
  //         textField: 'Name',
  //         itemsShowLimit: 1,
  //         allowSearchFilter: true,
  //         closeDropDownOnSelection: true,
  //         searchAutofocus:true
  //       };

  //     })
  // }

  onFilterChange(event) {
    this.filterText = event
    //console.log("---Event------>", this.filterText);
    this.GetProjectsByUserName();
  }





  //Fetching Employee For Assigning Projects
  GetAssignFormEmployeeDropdownList() {

    this.isDropdownDataLoaded=false;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    console.log('Employee List:',this._ObjCompletedProj);
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.isDropdownDataLoaded=true;
        this.EmployeeList = JSON.parse(data[0]&&data[0]['EmployeeList']);

console.log(this.EmployeeList,'this.EmployeeListthis.EmployeeListthis.EmployeeList')

        this.dropdownSettings_Employee = {
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'DisplayName',
          itemsShowLimit: 3,
          allowSearchFilter: true,
          closeDropDownOnSelection: true
        };
      });
  }

  todayDate: Date = (new Date);
  _EndDate: Date = null;
  _StartDate: Date = null;
  _Description: string;
  _SelectedEmpNo: string = '';
  SelectedEmplList = [];
  _remarks: string = "";

  EmployeeOnSelect(obj) {
    this._SelectedEmpNo = obj['Emp_No'];
    this.selectedEmployee = this._SelectedEmpNo;
  }

  EmployeeOnDeselect(obj) {
    this._SelectedEmpNo = "";
    this.selectedEmployee = this._SelectedEmpNo;
  }



  // EmployeeOnSelected(obj) {
  //   debugger
  //   // this.selectedEmpNo = obj['Emp_No'];
  //   if(obj['Emp_No'] == this.Owner_Empno){
  //     this.selectedEmpNo="";
  //     this.formFieldsRequired = true;
  //     this.notifyService.showInfo("Action cannot be assigned to project owner","");
  //   }
  //   else{
  //     this.formFieldsRequired = false;
  //     this.selectedEmpNo = obj['Emp_No'];
  //   }
  // }





  // onEmpChange(selectedEmpNo) {
  //   this._SelectedEmpNo = selectedEmpNo;
  // }
  //---------- Insert Assign Task ----------------//

  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._SelectedEmpNo = "";
    this.selectedProjecttype = null;
    this.selectedProjectCode = "";
    this.SelectedEmplList = [];
    this.selectedProjectCodelist = [];
    this._Demotext="";
    this.Mdl_CategoryName= "";
  }

  CallOnSubmitCategory() {
    // console.log('A');
    this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
    // this.GetTodoProjects();

    // setTimeout(function(){
    //   alert(this._selectedcatid);
    //   this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
    // },3000);

  }

  Mdl_CategoryName: string = "";
  CategoryList: any;

  OnSubmitCategory(Mdl_CategoryName) {
    if (this.Mdl_CategoryName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "CategoryInsert";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.CategoryName = Mdl_CategoryName;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          //console.log(data);
          //this._TodoList = JSON.parse(data['TodoList']);
          this.GetTodoProjects();
          // this.CategoryList = JSON.parse(data['CategoryList']);
          let message: string = data['Message'];
          this.notifyService.showSuccess("Successfully", message);

          // this.Mdl_CategoryName = "";
        });
    }
    else {
      this.notifyService.showInfo("Category name required", "");
    }
    this.clearFeilds()
  }

  _Categoryid: number;
  _CategoryName: string;
  ShowTaskList_Div: boolean = true;
  _CategoryActive: boolean;
  CountsAccepted: any;
  CountsPending: any;
  CountsRejected: any;


  OnCategoryClick(C_id, C_Name) {
    // _Id = C_id;
    // _Name = C_Name;

    this._selectedcatname = C_Name;
    this._selectedcatid = C_id;
    this.BsService.setNewCategoryID(this._selectedcatid);
    this.BsService.setNewCategoryName(this._selectedcatname);
    //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
    this._CategoryActive = true;

    this.IfNoTaskFound = "";
    this._Categoryid = C_id;
    this._CategoryName = C_Name;
    this.ShowTaskList_Div = false;
    this.Label_TaskName = false;
    this.Textbox_EditTaskName = true;
    this._taskName = "";
    /// Get Tasks On Category Click  /////
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this._Categoryid;
    this._ObjCompletedProj.Mode = 'Todo';
    // alert(this._Categoryid);
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {

        this._TodoList = JSON.parse(data[0]['JsonData_Json']);

        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        console.log(this.ActionedAssigned_Josn,"accept,pend")

        let _Accepted =0;
        let _Pending =0;
        let _Rejected=0;
        this.ActionedAssigned_Josn.forEach(element => {
          if(element.Status=="Accepted"){
            _Accepted=_Accepted+1;
          }
          else if(element.Status == "Pending"){
            _Pending=_Pending+1;
          }
          else if(element.Status == "Rejected"){
            _Rejected=_Rejected+1;
          }
        });
        this.CountsAccepted= _Accepted;
        this.CountsPending= _Pending;
        this.CountsRejected= _Rejected;

        // console.log(this.CountsAccepted);
      });
      // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
      this.totalproject()
      document.getElementById('addtsk').classList.remove('d-none');
      document.getElementById("accordionRunway").classList.remove("acc-runway-no-button");
  }


  assignvalue:any
  ProjectTypelist: any;
  _taskName: string = "";
  _description: string;
  _projectDays: number;
  _fileName: string;
  SelectedSubmissionType: any;
  selectedEmployee: string = "";
  // selectedProjectType: string;


  GetProjectTypeList() {

    this._taskName =this.Task_name;
    this.task_id = this.AssignID;
    this.router.navigate(["UnplannedTask/ActionToAssign/1"]);
    this.BsService.SetNewAssignId(this.task_id);
    this.BsService.SetNewAssignedName(this._taskName);
    let typeoftask: any = "IFRT";
    this.BsService.setNewTypeofTask(typeoftask);

    // this._ObjCompletedProj.PageNumber = 1;
    // this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    // this._ObjCompletedProj.Mode = 'AssignedTask';
    // this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    //   (data) => {

    //     this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
    //   });
    //document.getElementById("mysideInfobar_AssignTask").classList.add("kt-quick-panel--on");


    document.getElementById("Project_info_slider_bar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#Project_info_slider_bar").scrollTop(0);


  }






 typeoftask: any = "IFRT";



selectedAttendeesList = new Set<any>();

  onCheckboxChange(event: any, employee: any) {
    if (event.checked) {
      this.selectedAttendeesList.add(employee);
    } else {
      this.selectedAttendeesList.delete(employee);
    }
    console.log('Selected Employees:', this.selectedAttendeesList);
  }

  listAttendees:any;
  Assigntext:any;
  datestrStart:any;
  datestrEnd:any

  AssignID:any;
  Task_name:any;

  GetAssignName_id(taskName, id){
    this.AssignID=id;
    this.Task_name=taskName
}


  addSelectedEmployees() {

       const selectedArray = Array.from(this.selectedAttendeesList);
       this.listAttendees=selectedArray.map((item)=>item.Emp_No).join(',');

       if(this.listAttendees.length>0){
       this.BsService.SetNewAssignId( this.AssignID);
       this.BsService.SetNewAssignedName(this.Task_name);
       let typeoftask: any = "IFRT";
       this.BsService.setNewTypeofTask(typeoftask);
       this.datestrStart = moment(new Date()).format();
       this.datestrEnd = moment(new Date()).format();

       this._ObjAssigntaskDTO.AssignId = this.AssignID;
       this._ObjCompletedProj.PageNumber = 1;
       this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
       this._ObjCompletedProj.Mode = 'AssignedTask';
       this._ObjAssigntaskDTO.TaskName =  this.Task_name;
       this._ObjAssigntaskDTO.TypeOfTask = 'IFRT';
       this._ObjAssigntaskDTO.ProjectType = "";
       this._ObjAssigntaskDTO.AssignTo = this.listAttendees;




      const fd = new FormData();
      fd.append("AssignedBy", this.CurrentUser_ID);
      fd.append("AssignTo", this.listAttendees);
      fd.append("TaskName", this._ObjAssigntaskDTO.TaskName);
      fd.append("CreatedBy", this._ObjAssigntaskDTO.CreatedBy);
      fd.append("AssignId",  this.AssignID);
      fd.append("ProjectType", this._ObjAssigntaskDTO.ProjectType);
      fd.append("StartDate", this.datestrStart);
      fd.append("EndDate", this.datestrEnd);
      fd.append("ProjectDays",'0');
      fd.append("Desc", "");
      fd.append("Remarks", "");
      fd.append("TypeofTask", this._ObjAssigntaskDTO.TypeOfTask );


      this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
      (data) => {
        let message: string = data['Message'];
        this.notifyService.showSuccess("Task sent to assign projects", message);
        this.GetAssigned_SubtaskProjects()
         document.getElementById("schedule-event-modal-backdrop").style.display = "none";
         document.getElementById("projectmodal").style.display = "none";
         this.Assigntext=''
      });
    }
    else{
      this.notifyService.showInfo("Please select atleast one user to assign",'');
     }

  }





  project_filter() {
    document.getElementById("project-filter").classList.add("show");
    document.getElementById("filter-icon").classList.add("active");
  }

  close_project_filter() {
    document.getElementById("project-filter").classList.remove("show");
    document.getElementById("filter-icon").classList.remove("active");
  }

  CompanyName:any;
  FiterEmployee:any

  AddCom(){
    if(this.CompanyName){
    this.FiterEmployee = this.EmployeeLists.filter((item) => {
      return item.Com_No === this.CompanyName;
  })
}else{
    this.GetAssigned_SubtaskProjects()
  }
  }



  detailsbar() {
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  // ---------------- Action To Project For Subtask Creation -------------------- //
  selectedProjectCode: string;
  selectedProjectCodelist = [];
  _AssignId: number;

  ActionToProject_Click(taskName, Assignid) {

    this._taskName = taskName;
    this._AssignId = Assignid;
    this.router.navigate(["UnplannedTask/ActionToProject/2"]);
    this.BsService.SetNewAssignId(this._AssignId);
    this.BsService.SetNewAssignedName(this._taskName);

    document.getElementById("Project_info_slider_bar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#Project_info_slider_bar").scrollTop(0);

    //this.GetProjectsByUserName();
  }

  ObjUserDetails: UserDetailsDTO;
  _ProjectDataList: any;
  dropdownSettings_Projects = {};
  dropdownSettings_Employee = {};

  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = 1;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.filterText;
    this.ProjectTypeService.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = JSON.parse(data[0]['DropdownProjects_Json']);
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
        noDataAvailablePlaceholderText: 'Please wait..'
      };
      console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }

  RACI_Resp: any;
  RACI_Supp: any;
  RACI_Autho: any;
  RACI_Coor: any;
  RACI_Informer: any;
  RACI_Owner: any;
  _subname:boolean=false
  Sub_ProjectName:any

  ProjectOnSelect() {
    // this.selectedProjectCode = obj['Project_Code'];
    this.BsService.setSelectedProjectCodeFromRunwayTask(this.selectedProjectCode);
    this.ProjectTypeService.SubTaskDetailsService(this.selectedProjectCode).subscribe(
      (data) => {
        console.log(data,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
        let ProjectInfo_List: any;
        ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
        this.RACI_Autho = ProjectInfo_List[0]['Authority'];
        this.RACI_Coor = ProjectInfo_List[0]['Coor'];
        this.RACI_Informer = ProjectInfo_List[0]['Informer'];
        this.RACI_Resp = ProjectInfo_List[0]['Responsible'];
        this.RACI_Supp = ProjectInfo_List[0]['Support'];
        this.RACI_Owner = ProjectInfo_List[0]['OwnerEmpNo'];
        this.Comp_No = ProjectInfo_List[0]['Emp_Comp_No'];
        this.ProjectType_DB = ProjectInfo_List[0]['Project_Block'];
        this.BsService.setProjectAuthoity(this.RACI_Autho);
      });
      this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode).subscribe(
        (data) => {

          this.ownerArr=(JSON.parse(data[0]['RacisList']));
          // this.nonRacis=(JSON.parse(data[0]['OtherList']));
          // this.allUsers=(JSON.parse(data[0]['alluserlist']));
          console.log(this.ownerArr,"groupby");

        });

        this.getPrj_Info();


  }

  ProjectOnDeselect(obj) {
    this.selectedProjectCode = "";
  }

  Maximum_ProjectCodeFrom_DB: string;

  SplittedProject_Number: number;
  public Subproj_Code: string;
  Comp_No: string;
  ProjectType_DB: any;
  ObjSubTaskDTO: SubTaskDTO;
  _inputAttachments: string;

  OnSubmit() {
    // console.log("--------->",this._StartDate.getTime());
    if (this.Subproj_Code != undefined || this._StartDate != null || this._EndDate != null) {
      this.ObjSubTaskDTO.AssignId = this._AssignId;
      this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
      this.ObjSubTaskDTO.SubTask_ProjectCode = this.Subproj_Code;
      this.ObjSubTaskDTO.SubProject_Name = this._taskName;
      this.ObjSubTaskDTO.SubtaskDescription = this._description;
      this.ObjSubTaskDTO.ProjectBlock = this.ProjectType_DB;
      //this._StartDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
      this.ObjSubTaskDTO.StartDate = this._StartDate;
      // this._EndDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
      this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
      var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
      this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
      this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
      this.ObjSubTaskDTO.Comp_No = this.Comp_No;
      this.ObjSubTaskDTO.Team_Res = this.RACI_Resp;;
      this.ObjSubTaskDTO.Team_Autho = this.RACI_Autho;
      this.ObjSubTaskDTO.Team_Coor = this.RACI_Coor;
      this.ObjSubTaskDTO.Team_Informer = this.RACI_Informer;
      this.ObjSubTaskDTO.Team_Support = this.RACI_Supp;
      this.ObjSubTaskDTO.Project_Owner = this.CurrentUser_ID;
      this.ObjSubTaskDTO.AssignTo = this._SelectedEmpNo;
      this.ObjSubTaskDTO.Remarks = this._remarks;
      this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      this.ProjectTypeService._InsertNewSubtask(this.ObjSubTaskDTO).subscribe(data => {
        this.notifyService.showInfo("Created Successfully", '');
        this.closeInfo();
        this.clearFeilds();
        this.GetAssigned_SubtaskProjects();
      });
    }
    else {
      this.notifyService.showInfo("", 'Star(*) mark feilds required ')
    }
  }

  Clear_Feilds() {
    this._taskName = "";
    this._Description = "";
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
  }

  Label_TaskName: boolean = false;
  Textbox_EditTaskName: boolean = true;

  OnEditNameClick(name, id) {
    this._taskName = name;
    this._AssignId = id;
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("spnLabel_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("div_" + id)).style.display = "none";
  }

renameTask(task_id:any,new_name:any){
  this._ObjAssigntaskDTO.TypeOfTask = "Rename";
  this._ObjAssigntaskDTO.TaskName = new_name;
  this._ObjAssigntaskDTO.AssignId = task_id;
  this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
  this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
    (data) => {
      let message: string = data['Message'];
      this.notifyService.showInfo("Rename successfully", message);
    });
}








  OnTask_Rename() {
    debugger
    if (this._taskName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this._taskName;
      this._ObjAssigntaskDTO.AssignId = this._AssignId;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName)
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
          (<HTMLInputElement>document.getElementById("spanTextbox_" + this._AssignId)).style.display = "none";
          (<HTMLInputElement>document.getElementById("spnLabel_" + this._AssignId)).style.display = "block";
          (<HTMLInputElement>document.getElementById("div_" + this._AssignId)).style.display = "block";

        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }


  OnTask_Renameofnew() {
    debugger
    if (this.selected_taskName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this.selected_taskName;
      this._ObjAssigntaskDTO.AssignId = this.selected_taskId;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName)
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
          // (<HTMLInputElement>document.getElementById("spanTextbox_" + this._AssignId)).style.display = "none";
          // (<HTMLInputElement>document.getElementById("spnLabel_" + this._AssignId)).style.display = "block";
          // (<HTMLInputElement>document.getElementById("div_" + this._AssignId)).style.display = "block";
          this.showedit()
          // this._taskName = this.selected_taskName
        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  Emp_No:any
  OnTask_Renameofpending() {
    debugger
    if (this.task__name != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this.task__name;
      this._ObjAssigntaskDTO.AssignId = this.Emp_No;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName)
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
         });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }


  onCancel(id) {
    (<HTMLInputElement>document.getElementById("div_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spnLabel_" + id)).style.display = "flex";
  }

  Cat_Name: string;
  hideMenuOfCategory: boolean = false;

  OnCategoryEdit_Click(Cid, Cname) {
    (<HTMLInputElement>document.getElementById("TextboxCat_" + Cid)).style.display = "block";
    (<HTMLInputElement>document.getElementById("LabelCat_" + Cid)).style.display = "none";
    this.Cat_Name = Cname;
    this.hideMenuOfCategory = true;
  }

  OnCat_Cancel(Cid) {
    (<HTMLInputElement>document.getElementById("TextboxCat_" + Cid)).style.display = "none";
    (<HTMLInputElement>document.getElementById("LabelCat_" + Cid)).style.display = "flex";
    this.hideMenuOfCategory = false;
  }

  ObjCategoryDTO: CategoryDTO;

  OnCategoryRename(Cid) {
    if (this.Cat_Name != "") {
      this.ObjCategoryDTO.Mode = "Rename";
      this.ObjCategoryDTO.CategoryId = Cid;
      this.ObjCategoryDTO.CategoryName = this.Cat_Name;
      this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
      this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe(
        (data) => {
          // console.log(data);
          let message = data['Message'];
          this.notifyService.showSuccess("", message);
          this.GetTodoProjects();
          this.OnCategoryClick(Cid, this.Cat_Name);
          this.OnCat_Cancel(Cid);
        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  OnDeleteCategory(Cid, Cname) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'Category_Delete',
        titleDelete: 'Delete Confirmation ',
        CategoryName: Cname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.ObjCategoryDTO.Mode = "Delete";
        this.ObjCategoryDTO.CategoryId = Cid;
        this.ObjCategoryDTO.CategoryName = Cname;
        this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
        this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe(
          (data) => {
            let message = data['Message'];
            this.notifyService.showInfo("", message);
            this.GetTodoProjects();

            this.IfNoTaskFound;
            this.ShowTaskList_Div = true;
            this.Label_TaskName = true;
            // this.Textbox_EditTaskName = true;
            // this._taskName = "";

            this.OnCat_Cancel(Cid);
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
    });
  }

  openInfo(pcode, pName) {
    // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // this.router.navigate(["UnplannedTask/ActionToProject/"]);
    this.router.navigate(["UnplannedTask/projectinfo/", pcode]);
  }

  closeInfo() {
    this.clearFeilds();
    document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");
    document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
    document.getElementById('ProjectAssignpending').classList.remove('kt-action-panel--on');
    document.getElementById('openactionassign').classList.remove('kt-action-panel--on');
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.formFieldsRequired = false
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["UnplannedTask/"]);
  }

  moreDetails(ProjectCode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }

  newDetails(pcode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  openActionInDetails(pcode,acode){
   let Url=`${document.baseURI}Details/${pcode}/?actionCode=${acode}`;
   const myWindow = window.open(Url);
   myWindow.focus();
  }




  scrollTo(sectionId: string): void {

    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
// onbuttonclick(buttonId:string){
//   debugger
//   const elements={
//  'ActionToProjects':'active-action-to-project',
//  'taskdd':'active-task',

//   };

// for (const id in elements){
//       const elements= document.getElementById(id)
//       if (elements) {
//         if (buttonId === id) {
//           this.renderer.addClass(elements, elements[id]);
//         } else {
//           this.renderer.removeClass(elements, elements[id]);
//         }
//       }
//     }
// }

isTotalProjectsActive = true;
totalproject(){
  document.getElementById('taskdd').classList.remove('d-none')
  document.getElementById('Completed').classList.remove('d-none')
  document.getElementById('ActionToProjects').classList.remove('d-none')
  document.getElementById('AssignedTask').classList.remove('d-none')
  this.isTotalProjectsActive = true;
}


taskside(){

  document.getElementById('taskdd').classList.remove('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

completed(){

  document.getElementById('Completed').classList.remove('d-none')
  document.getElementById('taskdd').classList.add('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

showactprj(){
  document.getElementById('ActionToProjects').classList.remove('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('taskdd').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

showassign(){
  document.getElementById('AssignedTask').classList.remove('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('taskdd').classList.add('d-none')
}
selected_date:any
selected_taskId:any;
selected_taskName:any;
unassign_edit(id:any,taskname:any,date:any){
  this.selected_taskId=id;
  this.selected_taskName=taskname.trim();
  this.selected_date = date
  document.getElementById('unassign-editsidebar').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  // this.initAutosize('unassigneditside1')
  this.port_id = []
  this.employeSelect = null
  this.selectedProjecttype = null


  // this.toggleProjectoptions('option1')
}

unassign_closeInfo(){
  document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  this.resetAssign()
  this.formFieldsRequired = false
}

assign_to:any=[];
Proj_type:any
Start__Date:any
End__Date:any
__remarks:any
task__name:any
Portfolio_Id:any
assign_Id:any
editTaskat:number|undefined= undefined;

editassignPending(i:any){
  debugger
  this.editTaskat=i;
  this.task__name = this.ActionedAssigned_Josn[i].Task_Name.trim();
  this.employeSelect=(this.ActionedAssigned_Josn[i].Emp_No)?this.ActionedAssigned_Josn[i].Emp_No.split(','):[];
  // Portfolio_Id
  this.Start__Date  =this.ActionedAssigned_Josn[i].Start_Date;
  this.End__Date =this.ActionedAssigned_Josn[i].End_Date
  this.__remarks= this.ActionedAssigned_Josn[i].Remarks || '';
  this.port_id=(this.ActionedAssigned_Josn[i].Portfolio_Id)?this.ActionedAssigned_Josn[i].Portfolio_Id.split(','):[];
  this.assign_Id = this.ActionedAssigned_Josn[i].Assign_Id
  this.fileAttachment = this.ActionedAssigned_Josn[this.editTaskat]&&this.ActionedAssigned_Josn[this.editTaskat].FileName;
  if(this.ActionedAssigned_Josn[i].Project_type){
    const prjTypeObj=this.ProjectTypelist.find(obj=>obj.Exec_BlockName==this.ActionedAssigned_Josn[i].Project_type.trim());
    this.Proj_type=prjTypeObj.Exec_BlockNo;
  }
  else
  this.Proj_type=null;

   // this.Prjstartdate =this.bind_Project[0].Start_Date
   // this.Prjenddate = this.bind_Project[0].End_Date


  document.getElementById('ProjectAssignpending').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  // this.initAutosize('unassigneditside2')
}


closeditassignPending(){
  document.getElementById('ProjectAssignpending').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
}

bindvalue :number | undefined = undefined
openActionassign(i:any){
  this.bindvalue = i;
  document.getElementById('openactionassign').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
}


closedActionassign(){
  document.getElementById('openactionassign').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
}


toggleProjectoptions(option: string) {
  this.selectedOption = option;
  this.formFieldsRequired = false;
  this._StartDate = null
  this._EndDate = null
}

// unassign_edit(){
//   document.getElementById('unassign-editsidebar').classList.add('kt-action-panel--on');
//   document.getElementById("rightbar-overlay").style.display = "block";
//   document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
// }
// unassign_closeInfo(){
//   document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
//   document.getElementById("rightbar-overlay").style.display = "none";
//   document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
// }
// toggleProjectoptions(option: string) {
//   this.selectedOption = option;
// }
activeButton: string = 'totalProjects';

setActiveButton(buttonName: string) {

  this.activeButton = buttonName;
}

items = [
  { total: 1, details: 'Unassign task' },
  { total: 2, details: 'Completed' },
  { total: 3, details: 'Assign task/project' },
  { total: 4, details: 'Action to project'}
];
currentStatus: string = 'Accepted'; // Default to 'Accepted'

setStatus(status: string) {

  this.currentStatus = status;
}

hideAddTask(){
  document.getElementById('addtsk').classList.add('d-none');
  document.getElementById('accordionRunway').classList.add('acc-runway-no-button');
}

getVisibleHeaderCount(): number {
  let count = 0;
  if (this._TodoList.length > 0) count++;
  if (this._CompletedList && this._CompletedList.length > 0) count++;
  if (this.ActionedSubtask_Json.length > 0) count++;
  if (this.ActionedAssigned_Josn.length > 0) count++;
  return count;
}

getAccordionClass(): string {
  const count = this.getVisibleHeaderCount();
  return count > 0 ? `runway-${count}` : '';
}

getProjectTypeList() {

  this._ObjCompletedProj.PageNumber = 1;
  this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
  this._ObjCompletedProj.Mode = 'AssignedTask';
  console.log('project type list inputs:',this._ObjCompletedProj);
  this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    (data) => {
      this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
      console.log('gggggggggggggggggggggggg',this.ProjectTypelist);
    });
}

isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
isPrjDesValid:'TOOSHORT'|'VALID'='VALID';


isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
 if(inputString){

 let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
 const x=rg.test(inputString);

return x ? 'VALID' : 'TOOSHORT';
 }
return 'TOOSHORT'
}



selectFile() {
  this.fileInput.nativeElement.click();
}

onFileChanged(event: any) {
  debugger
  const files: File[] = event.target.files;

  if (files && files.length > 0) {
    this.file = files[0];
    this.fileAttachment = this.file;
    this.selectedFileName = this.file.name;

  } else {
    this.file = null;
    this.fileAttachment = null;
    this.selectedFileName = null;
    this.FileName = null
  }
  // Reset file input value to allow selecting the same file again
  this.fileInput.nativeElement.value = '';
}
FileName:any
removeFile() {
  debugger
  this.file = null;
  this.fileAttachment = null;
  this.selectedFileName = null;
  this.FileName = null
}
owner:any
onInputChange(value: string) {
  this.Sub_ProjectName = value.trim();

}

pcode:any;
ownerArr:any
getRACISandNonRACIS(){

  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.pcode).subscribe(
    (data) => {

      this.ownerArr=(JSON.parse(data[0]['RacisList']));
      // this.nonRacis=(JSON.parse(data[0]['OtherList']));
      // this.allUsers=(JSON.parse(data[0]['alluserlist']));
      console.log(this.ownerArr,"groupby");


    });
}
_allocated:any
maxlimit: boolean = true;
_message: string;
_Message: string;
start_dt:any =new Date();
end_dt:any =new Date();
maxAllocation: number;
_alchr:boolean = false

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

formFieldsRequired: boolean = false;
Selec:any
// typeoftask: any = "";
_Urlid:any;
selectedProjecttype: string = "";
noEndDate:boolean = false
noStartDate : boolean = false

assignTasksub(){

  // if(this.SelectedEmplList ==null || this.SelectedEmplList == undefined || this._taskName == null || this._taskName == undefined || this._taskName == ""){
  //   this.formFieldsRequired = true

  // }
  // else{

  // if(!((this._taskName)&&this.SelectedEmplList)){
  //   this.formFieldsRequired=true;
  //   return;
  // }
  // else this.formFieldsRequired=false;
  // check whether all mandatory fields provided



  // debugger
  if (this._StartDate == null && this._EndDate != null) {
    this.noStartDate = true;
    this.noEndDate = false;
  }
  else if (this._StartDate != null && this._EndDate == null) {
    this.noEndDate = true;
    this.noStartDate = false;
  }
  else {
    this._ObjAssigntaskDTO.TaskName = this._taskName;
    this._ObjAssigntaskDTO.TaskDescription = this._description;


    var datestrStart;
    var datestrEnd;

    if (this._StartDate != null && this._EndDate != null) {
      datestrStart = moment(this._StartDate).format();
      datestrEnd = moment(this._EndDate).format();
      this._ObjAssigntaskDTO.StartDate = datestrStart;
      this._ObjAssigntaskDTO.EndDate = datestrEnd;
    }
    else {
      datestrStart = moment(new Date()).format();
      datestrEnd = moment(new Date()).format();
      this._ObjAssigntaskDTO.StartDate = datestrStart;
      this._ObjAssigntaskDTO.EndDate = datestrEnd;
    }


    if (this._StartDate instanceof Date && this._EndDate instanceof Date) {
      // Check if both _StartDate and _EndDate are valid Date objects
      const differenceInTime = this._EndDate.getTime() - this._StartDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      this._ObjAssigntaskDTO.ProjectDays = -differenceInDays;
    }
    else {
      this._ObjAssigntaskDTO.ProjectDays = 0;
    }


    this.BsService.bs_TypeofTask.subscribe(t => {

      this.typeoftask = t;
    });
    // this.BsService.SetNewAssignId(this.task_id);

    this._ObjAssigntaskDTO.TypeOfTask = this.typeoftask;
    this._ObjAssigntaskDTO.AssignTo = this.Selec;
    this._ObjAssigntaskDTO.Assigned_By = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = this.task_id;
    this._ObjAssigntaskDTO.ProjectType = this.selectedProjecttype;
    this._ObjAssigntaskDTO.Remarks = this._remarks;
    this._ObjAssigntaskDTO.Attachment = this.fileAttachment;

    // console.log(this.selectedProjectType);
    if (this.fileAttachment != null) {
      if (this.fileAttachment.length > 0) {
        this._ObjAssigntaskDTO.Reference = this.fileAttachment[0].Files;
      }
    }
    console.log("Sending Obj..",this._ObjAssigntaskDTO)
    const fd = new FormData();
    fd.append("AssignTo", this._ObjAssigntaskDTO.AssignTo);
    if (this.fileAttachment != null) {
      if (this.fileAttachment.length > 0) {
        fd.append("Attachment", "true");
        fd.append('file', this.fileAttachment[0].Files);
        console.log(this.fileAttachment, 'files')
      }
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }
    fd.append("TaskName", this._taskName);
    fd.append("Desc", this._description);
    fd.append("StartDate", datestrStart);
    fd.append("EndDate", datestrEnd);
    fd.append("attachment",this.fileAttachment);
    fd.append("ProjectDays", this._ObjAssigntaskDTO.ProjectDays.toString());
    fd.append("TypeofTask", this.typeoftask);
    fd.append("Remarks", this._remarks);
    fd.append("ProjectType", this.selectedProjecttype);
    if (this.task_id != null) {
      fd.append("AssignId", this.task_id.toString());
    }
    fd.append("AssignedBy", this.CurrentUser_ID);

    if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
      this.port_id =  this.port_id
    }
    else{
      this.port_id=0;
    }
    fd.append("Portfolio_Id", this.port_id);

    this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
      (data) => {
        console.log(data,'atattachmeatattachmeatattachmeatattachme')

          let message: string = data['Message'];
          this.notifyService.showSuccess("Task sent to assign projects", message);

          this.clearFeilds();
          this.closeInfo();
          this.fileAttachment = [];
        }

       )



      }
      }


maxDate:any
setMaxDate(dateField){
      const d=new Date(dateField);
       d.setDate(d.getDate()+2);
      this.maxDate=d;

      }



assignTasksub1(){

debugger


  if(this.employeSelect ==null || this.employeSelect == undefined &&this.selected_taskName==null|| this.selected_taskName == undefined || this.selected_taskName.trim() ==""){
    this.formFieldsRequired = true
return
  }
else{
  this.formFieldsRequired = false
}





    var datestrStart;
    var datestrEnd;
    if (this._StartDate != null && this._EndDate != null) {
      datestrStart = moment(this._StartDate).format();
      datestrEnd = moment(this._EndDate).format();
    }
    else {
      datestrStart = moment(new Date()).format();
      datestrEnd = moment(new Date()).format();
    }


    var ProjectDays;
    if (this._StartDate instanceof Date && this._EndDate instanceof Date) {
      const differenceInTime = this._EndDate.getTime() - this._StartDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      ProjectDays = -differenceInDays;
    }
    else {
      ProjectDays = 0;
    }


    if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
      this.port_id =  this.port_id
    }
    else{
      this.port_id=0;
    }


  const fd = new FormData();
  fd.append("TaskName", this.selected_taskName.trim());
  fd.append("Desc", '');
  fd.append("ProjectType", this.selectedProjecttype);
  fd.append("AssignTo", this.employeSelect);
  fd.append("Portfolio_Id", this.port_id);
  fd.append("StartDate", datestrStart);
  fd.append("EndDate", datestrEnd);

  fd.append("ProjectDays", ProjectDays.toString());
  fd.append("Remarks", this._remarks);
  fd.append("attachment",this.fileAttachment);
  fd.append("AssignedBy", this.CurrentUser_ID);
  fd.append("AssignId", this.selected_taskId.toString());
  fd.append("TypeofTask", this.typeoftask);
  if (this.fileAttachment != null) {
    if (this.fileAttachment.length > 0) {
      fd.append("Attachment", "true");
      fd.append('file', this.fileAttachment[0].Files);
    }
  }
  else {
    fd.append("Attachment", "false");
    fd.append('file', "");
  }


  this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
    (data) => {
      console.log(data,'atattachmeatattachmeatattachmeatattachme')
        let message: string = data['Message'];
        this.notifyService.showSuccess("Task sent to assign projects", message);
        this.GetTodoProjects();

      });

      this.resetAssign()
      this.unassign_closeInfo()



}



resetAssign(){
  this.selectedProjecttype = null
  this.employeSelect  = null
  this.port_id  = null
  this._remarks  = null
  this.file=null

  this._StartDate = null
  this._EndDate = null

}











selectedAssign:any
Sub_ProjectCode: any;
EmpNo_Autho: any;
ProjectBlock: string = null;
selectedEmpNo: string = null;
completionattachment:boolean=true

actionSubmit(){




  this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;  
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


    this.ObjSubTaskDTO.SubProject_Name = this.selected_taskName
    this.ObjSubTaskDTO.SubtaskDescription = "";
    this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
    this.ObjSubTaskDTO.StartDate = this._StartDate;
    this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;

    this.maxAllocation = this.maxAllocation * 8 / 1;
    this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
    this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
    this.ObjSubTaskDTO.Remarks = this._remarks;
    this.ObjSubTaskDTO.Duration = this._allocated;
    // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
    console.log( this.fileAttachment)
   if (this.fileAttachment&& this.fileAttachment.length > 0) {
      this.ObjSubTaskDTO.Attachments =  this.fileAttachment;
    }

    var datestrStart = moment(this._StartDate).format("MM/DD/YYYY");
    var datestrEnd = moment(this._EndDate).format("MM/DD/YYYY");
    // alert(datestrStart)
    // alert(datestrEnd)
    console.log(datestrStart,this._StartDate,"startdate")
    console.log(datestrEnd,this._EndDate,"enddate")
    const fd:any = new FormData(); 
    fd.append("Project_Code", this.Sub_ProjectCode);
    fd.append("Team_Autho", this.EmpNo_Autho);
    // fd.append('file', this._inputAttachments[0].Files);
    if ( this.fileAttachment) {
      fd.append("Attachment", "true");
      fd.append('file',  this.fileAttachment);
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }
    fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
    fd.append("SubtaskName", this.selected_taskName.trim());
    fd.append("Desc", "");
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

    for (let [key, value] of fd.entries()) {
      console.log(`${key}: ${value}`);
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
      // this.GetTodoProjects();
    });



  this.resetActionvalue()
  this.unassign_closeInfo();

    });

}





 // mat-autocomplete dropdowns code start.
 @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
 openAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
 }

 closeAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
 }


  // Portfolio: any = [];
  isPortfolioDrpDwnOpen: boolean = false;
  port_id_string:any
  port_id:any;
  onPortfolioSelected(e: any) {

    const portfolioChoosed: any = this.PortfolioList.find((p: any) => p.Portfolio_ID === e.option.value);
    console.log(portfolioChoosed);
    if (portfolioChoosed) {
      if (!this.port_id)   // if Portfolio is null,undefined,''
        this.port_id = [];
      const index = this.port_id.indexOf(portfolioChoosed.Portfolio_ID);
      if (index === -1) {
        // if not present then add it
         this.port_id.push(portfolioChoosed.Portfolio_ID);

      }
      else { //  if item choosed is already selected then remove it.
        this.port_id.splice(index, 1);
      }

    }
    this.openAutocompleteDrpDwn('PortfolioDrpDwn');
  }


  removeSelectedPortfolio(item) {
    const index = this.port_id.indexOf(item);
    if (index !== -1) {
      this.port_id.splice(index, 1);
    }
  }


  getObjOf(arr, id, idName) {
    const obj = arr.find(item => item[idName] == id);
    return obj;
  }



  isemployeeDrpDwnOpen : boolean = false
  employeSelect:any
  onEmployeeselected(e: any) {
debugger
    const employeeChoosed: any = this.EmployeeList.find((p: any) => p.Emp_No === e.option.value);
    console.log(employeeChoosed);
    if (employeeChoosed) {
      if (!this.employeSelect)   // if Portfolio is null,undefined,''
        this.employeSelect = [];
      const index = this.employeSelect.indexOf(employeeChoosed.Emp_No);
      if (index === -1) {
        // if not present then add it
         this.employeSelect.push(employeeChoosed.Emp_No);

      }
      else { //  if item choosed is already selected then remove it.
        this.employeSelect.splice(index, 1);
      }

    }
    this.openAutocompleteDrpDwn('employeeDrpDwn');
  }


  removeSelectedemployee(item) {
    const index = this.employeSelect.indexOf(item);
    if (index !== -1) {
      this.employeSelect.splice(index, 1);
    }
  }









  // EmployeeOnSelect(obj) {
  //   // this.selectedEmpNo = obj['Emp_No'];
  //   if(obj['Emp_No'] == this.Owner_Empno){
  //     this.selectedEmpNo="";
  //     this._selectemp = true;
  //     this.notifyService.showInfo("Action cannot be assigned to project owner","");
  //   }
  //   else{
  //     this._selectemp = false;
  //     this.selectedEmpNo = obj['Emp_No'];
  //   }
  // }


  EmployeeOnSelecting(obj) {
    this._SelectedEmpNo = obj;
    this.selectedEmployee = this._SelectedEmpNo;

  }


  sweetAlert() {
debugger
if(this._allocated &&this.selectedProjectCode&&this.selectedEmpNo&&this._StartDate &&this._EndDate&&this.selected_taskName&&this._allocated <= this.maxAllocation){
  this.formFieldsRequired = false
}
else{
  this.formFieldsRequired = true
  return
}






        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {
          Swal.fire({
            title: 'Action deadine is greater than main project deadline ?',
            text: 'Do you want to continue for selection of date after main project deadline!!',

            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((response: any) => {
            if (response.value) {
              this.actionSubmit();
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
          this.actionSubmit();
        }
      }

ProjectDeadLineDate:any
ProjectStartDate:any
Owner_Empno:any
Resp_empno:any
Autho_empno:any
allocatedHour:any

getPrj_Info(){
      this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {

        this.ProjectDeadLineDate = data["DeadLine"];
        this.ProjectStartDate = data["StartDate"];
        this.owner=data["Owner_empno"];
        this.Owner_Empno = data['Owner_empno'];
        this.Resp_empno = data['Resp_empno'];
        this.Autho_empno = data['Autho_empno'];

        // const dateOne = new Date(this.disablePreviousDate);
        // const dateTwo = new Date(this.ProjectStartDate);
        // if(dateTwo > dateOne){
        //   this.disablePreviousDate = this.ProjectStartDate;
        // }

      });

      this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID,this.selectedProjectCode).subscribe((data) => {
        if(data['message']=='1'){
          this.isHierarchy=true;
        }
        else{
          this.isHierarchy=false;
        }
      });

    }


Current_user_ID: string;
isHierarchy:boolean = false;




resetActionvalue(){
  this.selectedEmpNo = null
  this.selectedProjectCode  = null
  this._allocated  = null
  this._remarks  = null
  this.file=null
  this._StartDate = null
  this._EndDate = null
}
datesCheck() {
  this.noEndDate = false;
}
startdatechecker(){
  this.noStartDate=false;
  this.noEndDate=true;
  this._EndDate=null;
}
myFilter:any;
enddateChecker(){
  this.noStartDate=true;
  this.myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
  };
}

vart:any = null
todo(type,datefields) {
  debugger
  if (type === '011') {
const  d = new Date(datefields)
this.vart = d
  }
}

isReadOnly: boolean = true;
pendingUpdatesection(){


  debugger



  if(this.employeSelect ===null || this.employeSelect === undefined &&this.task__name==null|| this.task__name == undefined || this.task__name.trim() ==""){
    this.formFieldsRequired = true
return
  }
else{
  this.formFieldsRequired = false
}



      var datestrStart;
      var datestrEnd;
      if (this.Start__Date != null && this.End__Date != null) {
        datestrStart = moment(this.Start__Date).format();
        datestrEnd = moment(this.End__Date).format();
      }
      else {
        datestrStart = moment(new Date()).format();
        datestrEnd = moment(new Date()).format();
      }

      // var datestrStart;
      // var datestrEnd;
      // if (this._StartDate != null && this._EndDate != null) {
      //   datestrStart = moment(this._StartDate).format();
      //   datestrEnd = moment(this._EndDate).format();
      // }
      // else {
      //   datestrStart = moment(new Date()).format();
      //   datestrEnd = moment(new Date()).format();
      // }





      var ProjectDays;
      if (this.Start__Date instanceof Date && this.End__Date instanceof Date) {
        const differenceInTime = this.End__Date.getTime() - this.Start__Date.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        ProjectDays = differenceInDays;
      }
      else {
        ProjectDays = 0;
      }


      if(this.employeSelect!=null && this.employeSelect!=undefined && this.employeSelect!=''){
        this.employeSelect =  this.employeSelect
      }
      else{
        this.employeSelect=0;
      }


      if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
        this.port_id =  this.port_id
      }
      else{
        this.port_id=0;
      }


    const fd = new FormData();
    fd.append("TaskName", this.task__name.trim());
    fd.append("Desc", '');
    fd.append("ProjectType", this.Proj_type);
    // fd.append("AssignTo", this.assign_to);
    fd.append("AssignTo", this.employeSelect);
    fd.append("StartDate", datestrStart);
    fd.append("EndDate", datestrEnd);
    fd.append("assignid",this.assign_Id)
    fd.append("Portfolio_Id", this.port_id);
    fd.append("ProjectDays", ProjectDays.toString());
    fd.append("Remarks", this.__remarks);
    fd.append("attachment",this.fileAttachment);
    fd.append("AssignedBy", this.CurrentUser_ID);
    // fd.append("AssignId", this.selected_taskId.toString());
    fd.append("TypeofTask", this.typeoftask);
    if (this.fileAttachment != null) {
      if (this.fileAttachment.length > 0) {
        fd.append("Attachment", "true");
        fd.append('file', this.fileAttachment[0].Files);
      }
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }






    this.ProjectTypeService.updatePendingtask(fd).subscribe(
      (data) => {
        console.log(data,'atattachmeatattachmeatattachmeatattachme')
          let message: string = data['Message'];
          this.notifyService.showSuccess("Task sent to assign projects", message);
          this.GetTodoProjects();

        });

        this.closeditassignPending()



  }



 initAutosize(area:string): void {
    function autosize() {
      debugger
      var $text = $(`#${area}`);

      $text.each(function () {
        $(this).attr('rows', 1);
        resize($(this));
      });

      $text.on('input', function () {
        resize($(this));
      });

      function resize($element) {
        $element.css({
          'height': 'auto',
          'min-height': '34px'
        });
        $element.css('height', $element[0].scrollHeight + 'px');
      }
    }
    autosize();
  }
}

// new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate(),0,0,0,0)

