import { Component, Input, OnInit } from '@angular/core';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { DateAdapter } from '@angular/material/core';
import { HttpClient } from "@angular/common/http"
import { Router } from '@angular/router';
import { BsServiceService } from 'src/app/_Services/bs-service.service';

@Component({
  selector: 'app-project-assign-task',
  templateUrl: './project-assign-task.component.html',
  styleUrls: ['./project-assign-task.component.css']
})

export class ProjectAssignTaskComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  selectedItems_Employee = [];
  dropdownSettings = {};
  dropdownSettings_EMP = {};
  //dropdownSettings_forProjectType: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAllText: string; itemsShowLimit: number; allowSearchFilter: boolean; };
  _ObjCompletedProj: CompletedProjectsDTO;
  searchText: string;
  paragraph_msg: boolean = false;
  _topbar: boolean;
  _DisplayForm: boolean = true;
  Div_TaskDetails: boolean = true;
  selectedProjectType: any;
  selectedEmployee: string = "";
  _ObjAssigntaskDTO: AssigntaskDTO;
  _remarks: string;
  disablePreviousDate = new Date();
  disableAfterStartDate = new Date();
  @Input() min: any;

  constructor(public ProjectTypeService: ProjectTypeService,
    private notifyService: NotificationService, private dateAdapter: DateAdapter<Date>,
    private http: HttpClient,
    private router: Router,
    private BsService: BsServiceService) {
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disablePreviousDate.getDate());
  }

  Assigntask_List: any;
  ProjectTypelist = [];
  EmployeeList: any;
  CurrentUser_ID: string;

  ngOnInit() {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.GetAssignTask();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'Exec_BlockNo',
      textField: 'Exec_BlockName',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.dropdownSettings_EMP = {
      searchAutofocus: true,
      singleSelection: true,
      idField: 'Emp_No',
      textField: 'DisplayName',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      closeDropDownOnSelection: true,
    };
  }
  //EmployeeList: any;
  // GetAllEmployeesForAssignDropdown() {
  //   let obj: any = {
  //     pagenumber: 1,
  //     Emp_No: this.CurrentUser_ID,
  //     Mode: 'AssignedTask'
  //   }
  //   this.ProjectTypeService._GetCompletedProjects(obj).subscribe(
  //     (data) => {
  //       this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
  //       //console.log(this.EmployeeList);
  //       this.dropdownSettings_EMP = {
  //         searchAutofocus: true,
  //         singleSelection: true,
  //         idField: 'Emp_No',
  //         textField: 'DisplayName',
  //         itemsShowLimit: 1,
  //         allowSearchFilter: true,
  //         closeDropDownOnSelection: true,
  //       };
  //     });
  // }

  countAssigned: any;
  countInprocess: any;
  countAccepted: any;
  countCompleted: any;
  countRejected: any;
  countNotStarted: any;
  NotfoundAssignedTask: string;
  FilteredText: string = "";

  GetAssignTask() {
    this.Div_TaskDetails = true;
    this.FilteredText = "ALL";
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this._ObjCompletedProj.Filter = null;
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
        // console.log("On First Load---->", this.Assigntask_List);
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.countAssigned = (data[0]['CountAssigned']);
        // console.log("Count--->",this.countAssigne)
        if (this.countAssigned == 0) {
          this.NotfoundAssignedTask = "Sorry, No records found ! ";
          this.paragraph_msg = true;
        }
        else {
          this.NotfoundAssignedTask = "";
          this.paragraph_msg = false;
        }
        this.countAccepted = (data[0]['CountAccepted']);
        this.countCompleted = (data[0]['CountCompleted']);
        this.countInprocess = (data[0]['CountInProcess']);
        this.countNotStarted = (data[0]['CountNotStarted']);
        this.countRejected = (data[0]['CountRejected']);
      });
  }

  GetAccepted() {
    this.Div_TaskDetails = true;
    this.FilteredText = "Accepted";
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this._ObjCompletedProj.Filter = 'Accepted';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
        //console.log("On Second Load---->", this.Assigntask_List);
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.countAssigned = (data[0]['CountAssigned']);
        // console.log("Count--->",this.countAssigne)
        if (this.countAssigned == 0) {
          this.NotfoundAssignedTask = "Sorry, No records found ! ";
          this.paragraph_msg = true;
        }
        else {
          this.NotfoundAssignedTask = "";
          this.paragraph_msg = false;
        }
        this.countAccepted = (data[0]['CountAccepted']);
        this.countCompleted = (data[0]['CountCompleted']);
        this.countInprocess = (data[0]['CountInProcess']);
        this.countNotStarted = (data[0]['CountNotStarted']);
        this.countRejected = (data[0]['CountRejected']);
      });
  }

  GetInProcess() {
    this.Div_TaskDetails = true;
    this.FilteredText = "In Process";
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this._ObjCompletedProj.Filter = 'InProcess';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
        //  console.log("On Second Load---->", this.Assigntask_List);
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.countAssigned = (data[0]['CountAssigned']);
        // console.log("Count--->",this.countAssigne)
        if (this.countAssigned == 0) {
          this.NotfoundAssignedTask = "Sorry, No records found ! ";
          this.paragraph_msg = true;
        }
        else {
          this.NotfoundAssignedTask = "";
          this.paragraph_msg = false;
        }
        this.countAccepted = (data[0]['CountAccepted']);
        this.countCompleted = (data[0]['CountCompleted']);
        this.countInprocess = (data[0]['CountInProcess']);
        this.countNotStarted = (data[0]['CountNotStarted']);
        this.countRejected = (data[0]['CountRejected']);
      });
  }

  GetRejected() {
    this.Div_TaskDetails = true;
    this.FilteredText = "Rejected";
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this._ObjCompletedProj.Filter = 'Rejected';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
        //console.log("On Second Load---->", this.Assigntask_List);
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.countAssigned = (data[0]['CountAssigned']);
        // console.log("Count--->",this.countAssigne)
        if (this.countAssigned == 0) {
          this.NotfoundAssignedTask = "Sorry, No records found ! ";
          this.paragraph_msg = true;
        }
        else {
          this.NotfoundAssignedTask = "";
          this.paragraph_msg = false;
        }
        this.countAccepted = (data[0]['CountAccepted']);
        this.countCompleted = (data[0]['CountCompleted']);
        this.countInprocess = (data[0]['CountInProcess']);
        this.countNotStarted = (data[0]['CountNotStarted']);
        this.countRejected = (data[0]['CountRejected']);
      });
  }

  GetNotStarted() {
    this.Div_TaskDetails = true;
    this.FilteredText = "Not Started";
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this._ObjCompletedProj.Filter = 'NotStarted';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        // console.log("Data---->", data);
        this.Assigntask_List = JSON.parse(data[0]['JsonData_Json']);
        //console.log("On Second Load---->", this.Assigntask_List);
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        //console.log(this.EmployeeList);
        this.countAssigned = (data[0]['CountAssigned']);
        // console.log("Count--->",this.countAssigne)
        if (this.countAssigned == 0) {
          this.NotfoundAssignedTask = "Sorry, No records found ! ";
          this.paragraph_msg = true;
        }
        else {
          this.NotfoundAssignedTask = "";
          this.paragraph_msg = false;
        }
        this.countAccepted = (data[0]['CountAccepted']);
        this.countCompleted = (data[0]['CountCompleted']);
        this.countInprocess = (data[0]['CountInProcess']);
        this.countNotStarted = (data[0]['CountNotStarted']);
        this.countRejected = (data[0]['CountRejected']);
      });
  }

  _AssignTaskSearch: any;

  Search() {
    if (this._AssignTaskSearch != "") {
      this.Assigntask_List = this.Assigntask_List.filter(res => {
        return res.Task_Name.toLocaleLowerCase().match(this._AssignTaskSearch.toLocaleLowerCase());
      });
    }
    else if (this._AssignTaskSearch == "") {
      this.ngOnInit();
    }
  }

  ProjectTypeOnSelect(obj) {
    this.selectedProjectType = obj['Exec_BlockNo'];
  }

  ProjectTypeOnDeselect(obj) {
    this.selectedProjectType = "Not Selected";
  }

  EmpOnSelect(obj) {
    this.selectedEmployee = obj['Emp_No'];
  }

  EmpOnDeselect(obj) {
    this.selectedEmployee = "Not Selected"
  }

  search(value) {
    value = this.searchText;
  }

  ShowForm() {
    this.paragraph_msg = true;
    this._DisplayForm = false;
    this.Div_TaskDetails = true;
    this._DemoVersion = true;
    let typeoftask: any = "IFAT";
    this.BsService.setNewTypeofTask(typeoftask);
    this.router.navigate(["AssignTask/ActionToAssign/"]);
    document.getElementById("mysideInfobar").style.width = "60%";
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  closeInfo() {
    this.Clearfeilds();
    document.getElementById("mysideInfobar").style.width = "0px";
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  Task_Name: string;
  ProjectType: string;
  Start_Date: Date;
  End_Date: Date
  Task_Description: string;
  Employee: string; AssignedBy: string; CreatedBy: string; Isactive: boolean;
  Rejected: boolean; RejectedComment: string; Status: string;
  Reference: string; ProjectDays: number; Creation_Date: Date;
  SubmissionType: string;
  ModifyDate: Date;
  public ProjectCode: string = null;
  Remarks: string;
  FileName: string;

  OnAssigntaskClick(Emp, Edt, Ptype, Sdt, TDesc, TName, ABy, CBy, IsAct, Reject,
    RejCommts, Status, Ref, Dur, Cr_DT, Sub_type, Mdy_DT, pCode, Remarks, FileName) {
    this.paragraph_msg = true;
    this.Div_TaskDetails = false;
    this._DisplayForm = true;
    this.Task_Name = TName;
    this.Task_Description = TDesc;
    this.Start_Date = Sdt;
    this.End_Date = Edt;
    this.ProjectType = Ptype;
    this.Employee = Emp;
    this.AssignedBy = ABy;
    this.CreatedBy = CBy;
    this.Isactive = IsAct;
    this.Rejected = Reject;
    this.RejectedComment = RejCommts;
    this.Status = Status;
    this.ProjectDays = Dur;
    this.Reference = Ref;
    this.Remarks = Remarks;
    this.ModifyDate = Mdy_DT;
    this.Creation_Date = Cr_DT;
    this.SubmissionType = Sub_type;
    this.ProjectCode = pCode;
    this.FileName = FileName;
    this.closeInfo();
  }

  onFileChange(filepath) {
    this._fileName = filepath.replace("C:\\fakepath\\", "");
  }

  src: any;

  LoadDocument(url: string) {
    this.src = url;
    var myWindow = window.open(url);
    myWindow.focus();
  }

  _taskName: string = "";
  _description: string = "";
  _projectDays: number;
  _fileName: string;
  _StartDate: Date;
  _EndDate: Date;
  SelectedSubmissionType: any;
  // OnSubmit() {
  //   if (this._taskName != "") {
  //     this._ObjAssigntaskDTO.TypeOfTask = "IFAT";
  //     this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
  //     this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
  //     this._ObjAssigntaskDTO.TaskName = this._taskName;
  //     this._ObjAssigntaskDTO.TaskDescription = this._description;
  //     this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
  //     this._ObjAssigntaskDTO.StartDate = this._StartDate;
  //     this._ObjAssigntaskDTO.EndDate = this._EndDate;
  //     this._ObjAssigntaskDTO.SubmissionType = this.SelectedSubmissionType;
  //     this._ObjAssigntaskDTO.Remarks = this._remarks;
  //     //Days Difference
  //     var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
  //     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //     this._ObjAssigntaskDTO.ProjectDays = (-Difference_In_Days);
  //     //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
  //     this._ObjAssigntaskDTO.Reference = this._fileName;
  //     this.ProjectTypeService._InsertAssignTaskServie(this._ObjAssigntaskDTO).subscribe(
  //       (data) => {
  //         this.GetAssignTask();
  //         this.notifyService.showSuccess("", "Inserted Successfully");
  //         this.closeInfo();
  //       });
  //   }
  //   else {
  //     this.notifyService.showInfo("Empty Inputs Found,   ...", "Try Again");
  //   }
  // }

  Clearfeilds() {
    this.selectedProjectType = "";
    this._taskName = "";
    this._description = "";
    this.selectedEmployee = "";
    this._StartDate = null;
    this._EndDate = null;
    this.SelectedSubmissionType = "";
    this._fileName = "";
    this.selectedItems = [];
    this.selectedItems_Employee = [];
  }

  _DemoVersion: boolean = true;
  _Demotext: string;

  DemoView() {
    this.paragraph_msg = true;
    this.Div_TaskDetails = true;
    this._DemoVersion = false;
    this.NotfoundAssignedTask = "";
    this.closeInfo();
  }

  public DemoTasksList: any[] = [
    {
      id: 1,
      name: 'Creative Planner Single User Login.'
    },
    {
      id: 2,
      name: 'Meeting With Rafi Sir.'
    },
    {
      id: 3,
      name: 'Merge Multiple Apps Organisation level.'
    }
  ];

  EnterSubmit(_Demotext) {
    if (_Demotext == "") {
      this.notifyService.showError("Plz Enter Task Name", "Failed To Add !")
    }
    else {
      let NewDemoTasksList = {
        id: 4,
        name: _Demotext,
      };
      this.DemoTasksList.push(NewDemoTasksList);
      this.DemoTasksList = this.DemoTasksList;
      this._Demotext = "";
      this.notifyService.showSuccess("Successfully Added", "Add Message");
    }
  }

  ////////////////////// File Upload ////////////////////////////////////////////////////////
  filename22: string;
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this._fileName = event.target.files[0]['name'];
      // console.log(this.filename22)
    }
  }

  submit() {
    const formData = new FormData();
    formData.append('file', this.filename22);
    //"http://localhost:4200/backend/dashboard"
    let url: string = "http://localhost:1221/Uploads";
    let angularUrl: string = "http://localhost:4200/Uploads";
    this.http.post(url, formData)
      .subscribe(res => {
        console.log(res);
      })
  }

  ProjectInfoDetails() {
    console.log("For Accept", this.ProjectCode);
    document.getElementById("mysideInfobar").style.width = "60%";
    //document.getElementById("rightbar-overlay").style.display = "block";
    this.router.navigate(["AssignTask/projectinfo", this.ProjectCode]);
  }

  moreDetails() {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${this.ProjectCode}`;
    var myWindow = window.open(myurl, this.ProjectCode);
    myWindow.focus();
  }
}
