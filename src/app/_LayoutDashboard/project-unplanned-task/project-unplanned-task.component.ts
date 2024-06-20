// import { ConeColumn } from '@amcharts/amcharts4/charts';
// import { number } from '@amcharts/amcharts4/core';
// import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit,Renderer2 } from '@angular/core';
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
import { catchError } from 'rxjs/operators';
import { string } from '@amcharts/amcharts4/core';
import { pluginService } from 'chart.js';
import { add } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { Router } from '@angular/router';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
// import { ac } from 'src/app/_LayoutDashboard/action-to-project/action-to-project.component';
import tippy from 'node_modules/tippy.js';
import {  ElementRef } from '@angular/core';
import * as moment from 'moment';
import { ActionToAssignComponent } from '../action-to-assign/action-to-assign.component';

@Component({
  selector: 'app-project-unplanned-task',
  templateUrl: './project-unplanned-task.component.html',
  styleUrls: ['./project-unplanned-task.component.css']
})

export class ProjectUnplannedTaskComponent implements OnInit {
  _ObjAssigntaskDTO: AssigntaskDTO;
  _ObjCompletedProj: CompletedProjectsDTO;
  CurrentUser_ID: string;
  panelOpenState: boolean = false;
  public _selectedcatname: string;
  public _selectedcatid: string;
  // private _bar: boolean = false;
  get selectedcatname(): string {
    return this._selectedcatname;
  }
  set selectedcatname(value: string) {
    this._selectedcatname = value;
  }
  disablePreviousDate = new Date();
  disableAfterStartDate = new Date();

  constructor(public notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    private renderer: Renderer2,
    public router: Router,
    public dialog: MatDialog, public dateAdapter: DateAdapter<Date>,
    public BsService: BsServiceService,
    private el: ElementRef

    // ,_Id
    // ,_Name
  ) {
    // this._Id='0';
    // this._Name='NA';
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.ObjUserDetails = new UserDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.ObjCategoryDTO = new CategoryDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disableAfterStartDate.getDate());
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
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
    this.totalproject()
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.getCatid();
    this.GetAssignFormEmployeeDropdownList();
    this.getrunwayCount();


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
  }

  newCatid:any;
  getCatid(){
    this.ProjectTypeService._GetRunwayCatId(this.CurrentUser_ID).subscribe(
      (data) => {
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
      this.notifyService.showInfo("Failed to add task!!", "Please Enter Task Name");
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


  ActionedSubtask_Json = [];
  ActionedAssigned_Josn = [];
  CountsJson: any;
  Clientjson:any;
  EmployeeLists:any;
  loading: boolean = false;


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
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this.ProjectTypeService._GetCategoryCountforRunway(this._ObjCompletedProj).subscribe(
      (data) => {
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
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this.newCatid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {

        // console.log("Data---->", data);
        this.CategoryList = JSON.parse(data[0]['CategoryList']);
        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        // console.log(this.ActionedAssigned_Josn)
        // this._TodoList = JSON.parse(data[0]['JsonData_Json']);
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
debugger
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

  }

  On_Uncheck(id) {
    debugger
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
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.EmployeeList = JSON.parse(data[0]&&data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
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

  // onEmpChange(selectedEmpNo) {
  //   this._SelectedEmpNo = selectedEmpNo;
  // }
  //---------- Insert Assign Task ----------------//

  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._SelectedEmpNo = "";
    this.selectedProjectType = null;
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
      this.notifyService.showInfo("Category Name Required", "");
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
    // debugger
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
        //this.CategoryList = JSON.parse(data[0]['CategoryList']);
        this._TodoList = JSON.parse(data[0]['JsonData_Json']);

        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
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
        // alert(this.CountsAccepted);
        // console.log(this.CountsAccepted);
      });
      // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
      this.totalproject()
  }



  ProjectTypelist: any;
  _taskName: string = "";
  _description: string;
  _projectDays: number;
  _fileName: string;
  SelectedSubmissionType: any;
  selectedEmployee: string = "";
  selectedProjectType: string;
  public task_id: number;

  GetProjectTypeList() {
    // debugger
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
    // debugger
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
      // console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }

  RACI_Resp: any;
  RACI_Supp: any;
  RACI_Autho: any;
  RACI_Coor: any;
  RACI_Informer: any;
  RACI_Owner: any;

  ProjectOnSelect(obj) {
    this.selectedProjectCode = obj['Project_Code'];
    this.BsService.setSelectedProjectCodeFromRunwayTask(this.selectedProjectCode);
    this.ProjectTypeService.SubTaskDetailsService(this.selectedProjectCode).subscribe(
      (data) => {
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

  OnTask_Rename() {
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

  onCancel(id) {
    (<HTMLInputElement>document.getElementById("div_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spnLabel_" + id)).style.display = "block";
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
    (<HTMLInputElement>document.getElementById("LabelCat_" + Cid)).style.display = "block";
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
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
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
  debugger
  document.getElementById('taskdd').classList.remove('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

completed(){
  debugger
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

}


