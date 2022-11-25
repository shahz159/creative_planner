import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectUnplannedTaskComponent } from 'src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component'
import { rgbToHsl } from '@amcharts/amcharts4/.internal/core/utils/Colors';
import { DatePipe } from '@angular/common';

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
  public cat_id: any;
  cat_name: any = "";
  public txtdisabled: boolean = false;
  buttondisable: boolean = true;
  _ObjAssigntaskDTO: AssigntaskDTO;
  _remarks: string = "";
  CurrentUser_ID: string;
  _inputAttachments: any = [];
  selectedFile: any = null;
  typeoftask: any = "";
  Difference_In_Time: any;
  Difference_In_Days: any;

  constructor(private notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    private dateAdapter: DateAdapter<Date>,
    public datepipe: DatePipe,
    public BsService: BsServiceService
    , public _projectunplanned: ProjectUnplannedTaskComponent) {

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
    this.BsService.bs_catId.subscribe(c =>{this.cat_id = c} );
    this.BsService.bs_catName.subscribe(d =>{ this.cat_name = d});
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
    this._SelectedEmpNo = obj;
    this.selectedEmployee = this._SelectedEmpNo;
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

  noStartDate: boolean = false;
  noEndDate: boolean = false;

  datesCheck() {
    this.noStartDate = false;
    this.noEndDate = false;
  }

  OnAssignTask_Submit() {
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
        // current_Date: any = this.datepipe.transform(new Date(), 'yyyy/MM/dd');
        // datestrStart = (new Date(this._StartDate)).toUTCString();
        // datestrEnd = (new Date(this._EndDate)).toUTCString();
        datestrStart = this.datepipe.transform(this._StartDate, 'yyyy/MM/dd HH:MM:SS');
        datestrEnd = this.datepipe.transform(this._EndDate, 'yyyy/MM/dd HH:MM:SS');

        this._ObjAssigntaskDTO.StartDate = datestrStart;
        this._ObjAssigntaskDTO.EndDate = datestrEnd;
      }

      else {
        datestrStart = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');
        datestrEnd = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');

        this._ObjAssigntaskDTO.StartDate = datestrStart;
        this._ObjAssigntaskDTO.EndDate = datestrEnd;
      }


      if (this._StartDate != null && this._EndDate != null) {
        this.Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
        this.Difference_In_Days = this.Difference_In_Time / (1000 * 3600 * 24);
        this._ObjAssigntaskDTO.ProjectDays = (-this.Difference_In_Days);
      }
      else {
        this._ObjAssigntaskDTO.ProjectDays = 0;
      }
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
      // console.log(this.selectedProjectType);
      if (this._inputAttachments != null) {
        if (this._inputAttachments.length > 0) {
          this._ObjAssigntaskDTO.Reference = this._inputAttachments[0].Files;
        }
      }


      //console.log("Sending Obj..",this._ObjAssigntaskDTO)
      const fd = new FormData();
      fd.append("AssignTo", this._ObjAssigntaskDTO.AssignTo);
      if (this._inputAttachments != null) {
        if (this._inputAttachments.length > 0) {
          fd.append("Attachment", "true");
          fd.append('file', this._inputAttachments[0].Files);
          console.log(this._inputAttachments, 'files')
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
      fd.append("ProjectDays", this._ObjAssigntaskDTO.ProjectDays.toString());
      fd.append("TypeofTask", this.typeoftask);
      fd.append("Remarks", this._remarks);
      fd.append("ProjectType", this.selectedProjectType);
      if (this.task_id != null) {
        fd.append("AssignId", this.task_id.toString());
      }
      fd.append("AssignedBy", this.CurrentUser_ID);

      // alert(datestrStart);
      // alert(datestrEnd);

      // alert(this.cat_id);
      // alert(this.cat_name);

      this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
        (data) => {
          this._projectunplanned.OnCategoryClick(this.cat_id,this.cat_name);
          let message: string = data['Message'];
          this.notifyService.showSuccess("Task sent to assign projects", message);

          // alert(1);
         

          this.clearFeilds();
          this.closeInfo();
          this._inputAttachments = [];
        });
      
    }

  }
  // this.OnCategoryClick(this._Categoryid, this._CategoryName);
  // this._TodoList = JSON.parse(data['TodoList']);
  // this._CompletedList = JSON.parse(data['CompletedList']);

  closeInfo() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.clearFeilds();
    // document.getElementById("mysideInfobar_NewSubtask").classList.remove("kt-quick-panel--on");
    //document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
  }

  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._remarks = null;
    this._inputAttachments = null;
    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
    //document.getElementById("uploadFile").Value = null;
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
