import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectUnplannedTaskComponent } from 'src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component'

@Component({
  selector: 'app-action-to-assign',
  templateUrl: './action-to-assign.component.html',
  styleUrls: ['./action-to-assign.component.css']
})
export class ActionToAssignComponent implements OnInit {
  selectedProjectType: string = "";
  ProjectTypelist: any;
  _description: string = "";
  _StartDate: Date = null;
  _EndDate: Date = null;
  _SelectedEmpNo: string = "";
  selectedProjectCode: string;
  SelectedEmplList: any[];
  selectedProjectCodelist: any[];
  public EmployeeList: any;
  disablePreviousDate = new Date();
  SelectedSubmissionType: any;
  _taskName: string = "";
  dropdownSettings_Employee = {};
  public task_id: number;
  public txtdisabled: boolean = false;
  buttondisable: boolean = true;
  _ObjAssigntaskDTO: AssigntaskDTO;
  _remarks: string = "";
  CurrentUser_ID: string;
  _inputAttachments: any = [];
  selectedFile: any = null;
  typeoftask: any = "";

  constructor(private notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    private dateAdapter: DateAdapter<Date>,
    private BsService: BsServiceService
    ,public _projectunplanned:ProjectUnplannedTaskComponent) {
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.BsService.bs_AssignId.subscribe(i => this.task_id = i);
    this.BsService.bs_TaskName.subscribe(t => {
      this._taskName = t
      if (this._taskName == null) {
        this.txtdisabled = false;
        this._taskName = null;

      }
      else {
        this.txtdisabled = true;
      }
    });
    this._inputAttachments = [];
  }

  ngOnInit(): void {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.getProjectTypeList();
    this.GetAssignFormEmployeeDropdownList();
  }

  _ObjCompletedProj: CompletedProjectsDTO;
  getProjectTypeList() {
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
      });
  }

  selectedEmployee: string = "";
  EmployeeOnSelect(obj) {
    this._SelectedEmpNo = obj['Emp_No'];
    this.selectedEmployee = this._SelectedEmpNo;
    // alert(this._SelectedEmpNo);
  }
  EmployeeOnDeselect(obj) {
    this._SelectedEmpNo = null;
    this.selectedEmployee = this._SelectedEmpNo;
  }

  onFileChangeATP(e) {
    // this._inputAttachments = <File>e.target.files[0];
    this._inputAttachments = [...this._inputAttachments, {
      FileName: e.target.files[0].name,
      Size: e.target.files[0].size,
      Files: e.target.files[0]
    }];
  }

  OnAssignTask_Submit() {


    this._ObjAssigntaskDTO.TaskName = this._taskName;
    this._ObjAssigntaskDTO.TaskDescription = this._description;
    this._ObjAssigntaskDTO.StartDate = this._StartDate;
    this._ObjAssigntaskDTO.EndDate = this._EndDate;
    // console.log(this._StartDate, this._EndDate);

    var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this._ObjAssigntaskDTO.ProjectDays = (-Difference_In_Days);
    //for hours Un-Comment Below Line
    //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
    this.BsService.bs_TypeofTask.subscribe(t => {
      this.typeoftask = t;
    });
    this._ObjAssigntaskDTO.TypeOfTask = this.typeoftask;

    this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
    this._ObjAssigntaskDTO.Assigned_By = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = this.task_id;
    this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
    this._ObjAssigntaskDTO.Remarks = this._remarks;
    if (this._inputAttachments.length > 0) {
      this._ObjAssigntaskDTO.Reference = this._inputAttachments[0].Files;
    }
    var datestrStart = (new Date(this._StartDate)).toUTCString();
    var datestrEnd = (new Date(this._EndDate)).toUTCString();
    //console.log("Sending Obj..",this._ObjAssigntaskDTO)

    const fd = new FormData();

    fd.append("AssignTo", this._ObjAssigntaskDTO.AssignTo);
    if (this._inputAttachments.length > 0) {
      debugger
      fd.append("Attachment", "true");
      fd.append('file', this._inputAttachments[0].Files);
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }

    fd.append("TaskName", this._taskName);
    fd.append("Desc", this._description);
    fd.append("StartDate", datestrStart);
    fd.append("EndDate", datestrEnd);
    fd.append("ProjectDays", this._ObjAssigntaskDTO.ProjectDays.toString());
    fd.append("TypeofTask", this.typeoftask);
    fd.append("Remarks", this._remarks);
    fd.append("ProjectType", this.selectedProjectType);
    if (this.task_id != null) {
      fd.append("AssignId", this.task_id.toString());
    }
    fd.append("AssignedBy", this.CurrentUser_ID);
    this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
      (data) => {
        let message: string = data['Message'];
        this.notifyService.showSuccess("Task sent to assign projects", message);
        this._projectunplanned.CallOnSubmitCategory();
        this.clearFeilds();
        this.closeInfo();
        this._inputAttachments = [];
      });
  }

  // this.OnCategoryClick(this._Categoryid, this._CategoryName);
  // this._TodoList = JSON.parse(data['TodoList']);
  // this._CompletedList = JSON.parse(data['CompletedList']);

  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0px";
    // document.getElementById("rightbar-overlay").style.display = "none";
    this.clearFeilds();
    // document.getElementById("mysideInfobar_NewSubtask").style.width = "0px";
    //document.getElementById("mysideInfobar").style.width = "0px";
  }
  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._SelectedEmpNo = "";
    this.selectedProjectType = null;
    this.selectedProjectCode = "";
    this.SelectedEmplList = [];
    this.selectedProjectCodelist = [];
  }
  GetAssignFormEmployeeDropdownList() {
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
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
}
