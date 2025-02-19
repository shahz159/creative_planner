import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DateAdapter } from '@angular/material/core';
//import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service'
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
//import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
//import { ContentObserver } from '@angular/cdk/observers';
import { MatDialog } from '@angular/material/dialog';
import { ResizeButton, string } from '@amcharts/amcharts4/core';
import Swal from 'sweetalert2';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-to-do-projects',
  templateUrl: './to-do-projects.component.html',
  styleUrls: ['./to-do-projects.component.css']
})

export class ToDoProjectsComponent implements OnInit {
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  _objDropdownDTO: DropdownDTO;



  constructor(public service: ProjectTypeService,
    private notifyService: NotificationService,
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private BsService: BsServiceService) {
    this._objDropdownDTO = new DropdownDTO();
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.campaignOne = new FormGroup({
      start: new FormControl,
      end: new FormControl
    });
    this.ObjUserDetails = new UserDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disablePreviousDate.getDate());
  }

  // @Input() max: any;
  // @Input() min: any;
  minDate: any;
  maxDate: any;
  disablePreviousDate = new Date();
  disableAfterStartDate = new Date();
  edited: boolean = false;

  ngOnInit() {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    //this._ProjectName = "Project Name"
    this.GetProjectsByUserName();
    // this.applyFilters();

    //uploaded file name
    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });
  }

  _ProjectDataList: any;
  ActualDataList: any;
  un_FilteredProjects: any
  CurrentPageNo: number = 1;
  _CurrentpageRecords: number = 30;
  _totalProjectsCount: any;
  searchText: string;
  ObjUserDetails: UserDetailsDTO;
  CurrentUser_ID: string;
  SubmissionType: string;
  //Racis Properties
  Owner: string; EmpNo_Own: string;
  Resp: string; EmpNo_Res: string;
  Autho: string; EmpNo_Autho: string;
  Informer: string; EmpNo_Info: string;
  Coor: string; EmpNo_Coor: string;
  Support: string; EmpNo_Supp: string;
  Comp_No: string; ProjectBlock: string;
  userFound:boolean |undefined
  GetProjectsByUserName() {
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
      this._totalProjectsCount = data[0]['ProjectsCount_Json'];
      // console.log(this._totalProjectsCount);
      this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
      }
      this.userFound = true
      if (this.selectedItem_Emp.length == 0) {
        this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
      }
      else {
        this.EmpCountInFilter = this.selectedItem_Emp[0];
      }
      //Type
      if (this.selectedItem_Type.length == 0) {
        this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
      }
      else {
        this.TypeContInFilter = this.selectedItem_Type[0];
      }
      //Status
      if (this.selectedItem_Status.length == 0) {
        this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
      }
      else {
        this.StatusCountFilter = this.selectedItem_Status[0];
      }
      this._totalProjectsCount = JSON.parse(data[0]['ProjectsCount_Json']);
    });
     this.router.navigate(["./backend/ToDoProjects/"]);
  }

  _ProjectName: string;
  _ProjectCode: string;
  Proj_Desc: string;
  PstDT: string;
  PEndDT: string;
  Proj_ExecBlck: string;
  Project_Status: string;
  lengthOfRACIS: number;
  onradioclick: boolean = false;
  titles: boolean = true;
  addbutton_hidden: boolean = true;
  _subtaskDetails: boolean = true;
  _projectDetails: boolean = true;
  _CompletedDetails: boolean = true;
  _EmployeeListForDropdown = [];
  _Projecttest=[];
  Proj_checkbox: boolean = true;
  _topbar: boolean = true;
  paragraph_msg: boolean = false;
  activeClass: boolean = false;
  dropdownSettings_EMP = {};
  Checkbox_checked: any;
  projectCost: any;
  Duration: any;
  standardDuration:any;
  Client_Name: string;
  Remarks: string = "";
  Remarkss: string = "";
  CD: string = "";
  ReportType: string;
  Attachments: string = "";
  FileName: string = null;
  Pid: number;
  cloud:boolean;
  delaydays:any;

  OnProjectClick(Pcode, Pname, Owner, Res, Autho, Informer, Coor, Supp, EmpNo_Own, EmpNo_Res, EmpNo_Autho,
    EmpNo_Coor, EmpNo_Info, EmpNo_Supp, Comp_No, proj_Block, PDesc, PStDT, PExecBlck, PendDT, Pstatus, Pdelay,checked,
    PCost, duration, standardduration, Client_Name, Remarks, Remarkss, CD, ReportType, Attachments, pid, SourceFile, SubmissionType,cloud) {

    this.BsService.SetNewPojectCode(Pcode);
    this.BsService.SetNewPojectName(Pname);
    this.SubmissionType = SubmissionType;
    this.Pid = pid;
    this.cloud=cloud;
    this.activeClass = true;
    this._topbar = false;
    this.paragraph_msg = true;
    this.Proj_checkbox = false;
    this.addbutton_hidden = false;
    this.onradioclick = true;
    this._ProjectCode = Pcode;
    this._MasterCode = Pcode;
    this._ProjectName = Pname;
    this.Owner = Owner; this.EmpNo_Own = EmpNo_Own;
    this.Resp = Res; this.EmpNo_Res = EmpNo_Res;
    this.Autho = Autho; this.EmpNo_Autho = EmpNo_Autho;
    this.Informer = Informer; this.EmpNo_Info = EmpNo_Info;
    this.Coor = Coor; this.EmpNo_Coor = EmpNo_Coor;
    this.Support = Supp; this.EmpNo_Supp = EmpNo_Supp;
    this.Comp_No = Comp_No;
    this.ProjectBlock = proj_Block;
    this.Proj_ExecBlck = PExecBlck;
    this.Proj_Desc = PDesc;
    this.PstDT = PStDT;
    this.PEndDT = PendDT;
    this.Project_Status = Pstatus;
    this.delaydays=Pdelay;
    this.Checkbox_checked = checked;
    this.projectCost = PCost;
    this.Duration = duration;
    this.standardDuration = standardduration;
    this.Client_Name = Client_Name;
    this.Remarks = Remarks;
    this.Remarkss = Remarkss;
    this.CD = CD;
    this.ReportType = ReportType;
    this.Attachments = Attachments;
    this.FileName = SourceFile;
    this.GetSubtask_Details();
    //console.log("Max-Proj Code--->",this.Max_ProjectCode);
    this.titles = false;
    this.minDate = PStDT; //minDate is 1st Jan 2019
    this.maxDate = PendDT; //maxDate is 1st Jan 2020

    if (this.Proj_ExecBlck == "Core Tasks" || this.Proj_ExecBlck == "Secondary Tasks") {
      this.addbutton_hidden = false;
    }
    else {
      this.addbutton_hidden = true;
    }
    // if(this.Project_Status == 'Completion Under Approval' || this.Project_Status == 'Under Approval'){
    //   this.addbutton_hidden = true;
    // }
    this.closeInfo();
  }

  async CallOnSubmitAction() {

  let a= await this.GetSubtask_Details();
  let b =await this.GetProjectsByUserName();
  this.router.navigate(["./backend/ToDoProjects/"]);
  }
//  CallOnSubmitAction() {
//     //  console.log('A');
//   this.GetSubtask_Details();
//   // this.OnProjectClick(this.Pcode,this.Pname, this.Owner, this.Res, this.Autho, this.Informer, this.Coor, this.Supp, this.EmpNo_Own, this.EmpNo_Res, this.EmpNo_Autho,
//   //   this.EmpNo_Coor, this.EmpNo_Info, this.EmpNo_Supp, this.Comp_No, this.proj_Block, this.PDesc, this.PStDT, this.PExecBlck, this.PendDT, this.Pstatus, this.checked,
//   //   this.PCost, this.duration, this.standardduration, this.Client_Name, this.Remarks, this.Remarkss, this.CD, this.ReportType, this.Attachments, this.pid, this.SourceFile, this.SubmissionType)
//      this.GetProjectsByUserName();
//     // this.getDropdownsDataFromDB();
//   }

  ProjectInfoDetails() {
    // var myWindow = window.open(myurl);
    // myWindow.focus();
    //this.router.navigate([myurl,this._ProjectCode]);
    this.router.navigate(["./backend/ToDoProjects/projectinfo/", this._ProjectCode,"5"]);
    // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    //this.router.navigate(["../backend/ToDoProjects/projectinfo", this._ProjectCode]);
    // document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("todo").classList.add("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }

  selected_Employee = [];
  selectedEmpNo: string = null;

  EmployeeOnSelect(obj) {
    this.selectedEmpNo = obj['Emp_No'];
  }

  EmployeeOnDeselect(obj) {
    this.selectedEmpNo = null;
  }

  NoSubtaskFound: string;
  Subtask_List: any;
  Project_Authority: string;
  Maximum_ProjectCodeFrom_DB: string;
  SplittedProject_Number: number;

  GetAllEmployeesForAssignDropdown() {
    let obj: any = {
      pagenumber: 1,
      Emp_No: this.CurrentUser_ID,
      Mode: 'AssignedTask'
    }
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
          allowSearchFilter: true,
          closeDropDownOnSelection: true,
        };
      });
  }

  totalSubtaskHours:number;



 GetSubtask_Details() {

   this.service.SubTaskDetailsService_ToDo_Page(this._ProjectCode, this.Comp_No, null).subscribe(
       (data) => {

        this._EmployeeListForDropdown = JSON.parse(data[0]['RacisEmployee_Json']);
        if (data[0]['SubtaskDetails_Json'] == ' ') {
          this._subtaskDetails = true;
          this._projectDetails = false;
        }
        else {
          this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
          this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          this.totalSubtaskHours = (data[0]['SubtaskHours']);
          this._subtaskDetails = false;
          this._projectDetails = true;
          // console.log("To Do Completed---->", this.CompletedList);
           console.log("to Incomplete---->", this.Subtask_List);
        }
        if (data[0]['CompletedTasks_Json'] == ' ') {
          this._CompletedDetails = true;
        }
        else {
          this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          // console.log("To Do Completed---->", this.CompletedList);
          this._CompletedDetails = false;
        }

        this._Projecttest=JSON.parse(data[0]["ProjectInfo"]);

         this._ProjectCode = this._Projecttest[0].Project_Code;
         this._MasterCode = this._Projecttest[0].Project_Code;
         this._ProjectName = this._Projecttest[0].Project_Name;
         this.Proj_Desc = this._Projecttest[0].Project_Description;
         this.Proj_ExecBlck =this._Projecttest[0].Exec_BlockName;
         this.Project_Status=this._Projecttest[0].Status;
         this.PstDT = this._Projecttest[0].DPG;
         this.PEndDT = this._Projecttest[0].DeadLine;
         this.projectCost=this._Projecttest[0].Project_Cost;
         this.Duration=this._Projecttest[0].Duration;
         this.Resp=this._Projecttest[0].Team_Res;
         this.Client_Name=this._Projecttest[0].Client_Name;

        // console.log(this._projectDetails,this._subtaskDetails,this._CompletedDetails,"Testing complete");
        // console.log(this.Subtask_List,this.CompletedList,"Same");
      });
  }

  _Subtaskname: string;
  Block3: boolean = true;
  Sub_StartDT: Date;
  Sub_EndDT: Date;
  Sub_Autho: string;
  Sub_Status: string;
  Sub_Desc:string;

  OnSubtaskClick(item) {
    this.Sub_ProjectCode = item.Project_Code;
    this.Sub_Desc=item.Project_Description;
    this._Subtaskname = item.Project_Name;
    this.Sub_StartDT = item.StartDate;
    this.Sub_EndDT = item.SubProject_DeadLine;
    this.Sub_Autho = item.Subtask_Autho;
    this.Sub_Status = item.SubProject_Status;

    document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
   this.Clear_Feilds();

    // document
    // this.Block3 = false;
  }

  clicks: number = 0;
  A2Z: boolean = true;
  Z2A: boolean = false;

  _SortProjectList() {
    this.clicks += 1;
    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this._ProjectDataList = this._ProjectDataList.sort((a, b) => (a.Project_Code > b.Project_Code) ? -1 : 1);
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
      this._ProjectDataList = this._ProjectDataList.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
    }
  }


  _completed() {
    this.clicks += 1;
    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this.Subtask_List = this.Subtask_List.sort((a, b) => (a.Project_Code > b.Project_Code) ? -1 : 1);
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
      this.Subtask_List = this.Subtask_List.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
    }
  }



  AddTask: boolean = false;
  MatInput: boolean = true;
  ButtonAdd: boolean = true;
  TaskName: string = "";

  OnAddTaskClick() {
    this.router.navigate(["./backend/ToDoProjects/ActionToProject/1"]);
    // document.getElementById("Project_info_slider_bar").classList.add("kt-action-panel--on");
    $('#Project_info_slider_bar').addClass('kt-action-panel--on');

    // document.getElementById("mysideInfobar_NewSubtask").style.width = "60%";
    // document.getElementById("mysideInfobar_Update").style.width = "0px";
     document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("todo").classList.add("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // this.MatInput = false;
    // this.ButtonAdd = false;
    // this.GetAllEmployeesForAssignDropdown();
    // $("#mysideInfobar").scrollTop(0);
  }

  // OnADDClick() {
  //   this.AddTask = false;
  //   this.MatInput = true;
  //   this.ButtonAdd = true;
  // }

  _inputAttachments: string;
  _inputAttachments2: string;
  _remarks: string = "";
  _upload: File;
  Sub_ProjectCode: string;
  _MasterCode: string;
  ObjSubTaskDTO: SubTaskDTO;
  CompletedList: any;
  FolderPath = "D:/Application/creativeplanner_angular/creativeplanner_angular/src/assets/Project_Completion";
  fileToUpload: File | null = null;
  _IsPdf: boolean;
  src: any;

  LoadDocument(cloud,Pcode,Resp, url: string) {
    // (<HTMLInputElement>document.getElementById("documentPreview")).style.display="block";
    // url = "http://208.109.13.37/dmsapi/DataOutPut/react-handbook.pdf";
    // contenttype=".pdf";
    // if (contenttype == ".PDF" || contenttype == ".pdf" || contenttype == "application/pdf") {
    //   this._IsPdf = true;
    // }
    // else if (contenttype == ".jpg" || contenttype == ".png" || contenttype == ".PNG" || contenttype == ".jpeg") {
    //   this._IsPdf = false;
    // }
    this.src = url;

    let FileUrl: string;
    FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";

    if(cloud==false){
      var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/"  + url);
      myWindow.focus();
    }
    else if(cloud==true){
      var myWindow = window.open(url);
      myWindow.focus();
    }
    //this.cd.detectChanges();
    //$('#documentPreview').modal('toggle');
  }

  Sub_ProjectName: string = "";
  _Description: string;
  _EndDate: Date = null;
  _StartDate: Date = null;
  _Message: string;
  _validname: string;

  selectedFile: any = null;
  onFileChange(e) {
    this.selectedFile = <File>e.target.files[0];
    console.log("--------------->",this.selectedFile)
  }

  //Subtask Creation//
  // OnSubmit() {
  //   if (this.Sub_ProjectName == "" || this._StartDate == null || this._EndDate == null) {
  //     this.notifyService.showInfo("", 'Star(*) mark feilds required ')
  //   }
  //   else {
  //     this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {
  //       console.log("-ProjectCode Generated------->", data);
  //       this.ObjSubTaskDTO.MasterCode = this._MasterCode;
  //       this.ObjSubTaskDTO.SubProject_Name = this.Sub_ProjectName;
  //       this.ObjSubTaskDTO.SubtaskDescription = this._Description;
  //       this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
  //       this.ObjSubTaskDTO.StartDate = this._StartDate;
  //       this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
  //       var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
  //       var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //       this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
  //       this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
  //       this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
  //       this.ObjSubTaskDTO.Comp_No = this.Comp_No;
  //       this.ObjSubTaskDTO.Team_Res = this.EmpNo_Res;
  //       this.ObjSubTaskDTO.Team_Autho = this.EmpNo_Autho;
  //       this.ObjSubTaskDTO.Team_Coor = this.EmpNo_Coor;
  //       this.ObjSubTaskDTO.Team_Informer = this.EmpNo_Info;
  //       this.ObjSubTaskDTO.Team_Support = this.EmpNo_Supp;
  //       this.ObjSubTaskDTO.Project_Owner = this.EmpNo_Own;
  //       this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
  //       this.ObjSubTaskDTO.Remarks = this._remarks;
  //       this.ObjSubTaskDTO.Attachments = this._inputAttachments;
  //       this.service._InsertNewSubtask(this.ObjSubTaskDTO).subscribe(data => {
  //         this.GetSubtask_Details();
  //         this.notifyService.showInfo("Created Successfully", "Action")
  //       });
  //     });
  //   }
  // }

  Subproj_Code: string;

  closeInfo() {
    // debugger
    this.Checkbox_checked = 0;
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    // document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    $('#Project_info_slider_bar').removeClass('kt-action-panel--on');
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
     document.getElementById("todo").classList.remove("position-fixed");
     document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
     $('#uploadFile').val('');
     $('#_upload').html('Select a file');
    // document.getElementById("rightbar-overlay").style.display = "none";
    this.Clear_Feilds();
    this.router.navigate(["./backend/ToDoProjects/"]);
  }

  Clear_Feilds() {
    this.Sub_ProjectName = "";
    this._Description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._inputAttachments = null;
    this._inputAttachments2 = null;
    this.selectedEmpNo = '';
    this.selected_Employee = [];
    $('#uploadFile').val('');
    $('#_upload').html('Select a file');
    $('#_pdf').val('');
    $('#upload').html('Select a file');

    }

  closeInfoProject() {
    this.OnClickCheckboxProjectUpdate(0);
    // document.getElementById("todo").classList.remove("position-fixed");
    this.Clear_Feilds();
  }

  // SearchbyText() {
  //   this.CurrentPageNo = 1;
  //   this.applyFilters();
  // }

  search(event) {
    this.SearchbyText();
    // console.log("Searh Text---->", event);
  }

  test() {
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(this._StartDate, 'DD-MMM-YYYY HH:mm:ss')
    // console.log("Noremal", this._StartDate)
    // this._StartDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
    // console.log("after Convert--->", formattedDate)
    //console.log(this._EndDate = (moment(this._EndDate)).format('DD-MMM-YYYY HH:mm:ss'))
  }

  // openInfo(pcode, pName) {
  //   document.getElementById("mysideInfobar").style.width = "400px";
  //   this.router.navigate(["../backend/ToDoProjects/projectinfo", pcode]);
  // }

  OnClickCheckboxProjectUpdate(value) {
    this.service.SubTaskStatusCheck(this._ProjectCode).subscribe(
      (data) => {
        if (data['Message'] == 1) {
          Swal.fire({
            title: 'Unable To Complete This Project !!',
            text: 'SubTask Status Are In Rejected or Pending ?',
            // icon: 'warning',
            showCancelButton: true
          });
        }
        else {
          this.Checkbox_checked = value;
          if (value == true) {
            document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
            document.getElementById("rightbar-overlay").style.display = "block";
          }
          else {
            document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
            document.getElementById("rightbar-overlay").style.display = "none";
          }
          document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
          document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
        }
      });
  }

  //Project Update
  progress: any;

  updateMainProject() {
    if(this.Proj_ExecBlck=='To do List'){
      this.selectedFile=null;
    }
    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.EmpNo_Autho);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.CurrentUser_ID);
    fd.append("Project_Name", this._ProjectName);
    this.service._fileuploadService(fd).
      subscribe(event => {
        //console.log(event);
        // if (event.type == HttpEventType.UploadProgress) {
        //   this.progress = Math.round(event.loaded / event.total * 100);
        //   this.notifyService.showSuccess("", "File uploaded successfully");
        //   this.notifyService.showInfo("", "Project Updated");
        // }
        // else if (event.type === HttpEventType.Response) {
        //   //console.log(event);
        // }
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
        }
        else if (event.type === HttpEventType.Response) {
          // console.log(event);
          var myJSON = JSON.stringify(event);
          this._Message = (JSON.parse(myJSON).body).Message;
          this.notifyService.showSuccess(this._Message, 'Success');
          // console.log(this._Message,this.progress,"json");
        }
        this.closeInfo();
        this.GetProjectsByUserName();
        this.GetSubtask_Details();

        //this.getDropdownsDataFromDB();
        // this.OnProjectClick();
      });
  }

  // @ViewChild('uploadFile')
  // myInput: ElementRef;


  //Subtask Update
  OnUpdateSubtask() {
    if (this._remarks == "") {
      this.notifyService.showInfo("Remarks Cannot be Empty", '');
    }
    else {
      const fd = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Master_Code", this._MasterCode);
      fd.append("Team_Autho", this.EmpNo_Autho);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this._Subtaskname);
      // this.ObjSubTaskDTO.Formdata = fd;
      // this.ObjSubTaskDTO.MasterCode = this._MasterCode;
      // this.ObjSubTaskDTO.SubTask_ProjectCode = this.Sub_ProjectCode;
      // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      // this.ObjSubTaskDTO.Remarks = this._remarks;
      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          // debugger
            this._remarks = "";
          this._inputAttachments = "";


          //this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          this.GetSubtask_Details();

          document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
          document.getElementById("rightbar-overlay").style.display = "none";
          document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
          document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
          document.getElementById("todo").classList.remove("position-fixed");
          $('#uploadFile').val('');
          $('#_upload').html('Select a file');
        });
        this.notifyService.showInfo("Successfully Updated", '');
    }

  }

  Btn_NewProjectCreation() {
    let name: string = "NewProjectCreation";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  Btn_AssignTask() {
    let name: string = "AssignTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  Btn_UnplannedTask() {
    let name: string = "UnplannedTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  Editbutton: boolean;
  _modelProjectName: string;
  _modelProjDesc: string;
  _modelProjAlloc: number;

  OnEditProject(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textboxfocus_" + id)).focus();
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Span_DescName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextarea_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textareafocus_" + id)).focus();
  }

  OnEditProject_Alloc(id, allocated){
    this._modelProjAlloc = allocated;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Span_DescName_all" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextarea_all" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textareafocus_all" + id)).focus();

  }

  onCancel(id) {
    (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "none";
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "inline-block";
    this.Editbutton = false;
    // For Description
    (<HTMLInputElement>document.getElementById("Span_DescName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextarea_" + id)).style.display = "none";
    this._modelProjDesc = null;
    this._modelProjectName = null;
    // For Allocated Hours
    (<HTMLInputElement>document.getElementById("Span_DescName_all" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextarea_all" + id)).style.display = "none";
    //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";
  }

  OnProject_Rename(id, Pcode) {
    if (this._modelProjectName != "" && this._modelProjDesc != "") {
      this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.CurrentUser_ID).subscribe(data => {
        this._Message = data['message'];

        this.notifyService.showSuccess(this._Message, "");
        this.GetSubtask_Details();
        this.GetProjectsByUserName();
        this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No, null).subscribe(
          (data) => {
            if (data && Array.isArray(data) && data.length > 0 && data[0]['ProjectInfo']) {
              let list: any;
              list = JSON.parse(data[0]['ProjectInfo']);
              if (list && Array.isArray(list) && list.length > 0) {
                this._ProjectName = list[0]['Project_Name'];
                this.Proj_Desc = list[0]['Project_Description'];
              }
            }})
      });
      this.onCancel(id);
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  onProject_updateDuration(id,pcode){

    if (this._modelProjAlloc != null && this._modelProjAlloc!=0) {
      this.service._NewProjectDurationService(pcode,this._modelProjAlloc,null,this.CurrentUser_ID).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Action duration not updated", "Failed");
          this.GetSubtask_Details();
          this.GetProjectsByUserName();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Action duration added successfully", "Success");
          this.GetSubtask_Details();
          this.GetProjectsByUserName();
        }
      });
      this.onCancel(id);
    }
    else {
      this.notifyService.showInfo("Hours cannot be 0 or null", "Please try again with correct value");
    }
  }

  moreDetails() {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${this._ProjectCode}`;
    var myWindow = window.open(myurl, this._ProjectCode);
    myWindow.focus();
  }
  newDetails() {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${this._ProjectCode}`;
    var myWindow = window.open(myurl,this._ProjectCode);
    myWindow.focus();
  }

  ////////////////------------------------------- Filters ------------------------------///////////////
  EmpCountInFilter = [];
  TypeContInFilter = [];
  StatusCountFilter = [];
  count_LinkedProjects: number;
  LastPage:number;
  lastPagerecords:number;

  getDropdownsDataFromDB() {
    this._objDropdownDTO.EmpNo = this.CurrentUser_ID;
    this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
    this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
    this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
    this._objDropdownDTO.Selected_SearchText = this.searchText;
    // this._objDropdownDTO.PortfolioId = null;
    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails)
      .subscribe((data) => {

         console.log(this._CurrentpageRecords,this.CurrentPageNo,this._totalProjectsCount,this.LastPage, this.lastPagerecords);
      });
  }

  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  selectedItem_Status = [];

  isStatusChecked(item) {
    let arr = [];
    this.StatusCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Status: element.Name });
        return this.checkedItems_Status = arr;
      }
    });
    let arr2 = [];
    this.StatusCountFilter.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Status.push(arr2);
    this.StatusCountFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Status.length = 0;
        this.resetFilters();
      }
    });
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }

  selectedItem_Type = [];

  isTypeChecked(item) {
    let arr = [];
    this.TypeContInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Block_No: element.Block_No });
        return this.checkedItems_Type = arr;
      }
    });
    let arr2 = [];
    this.TypeContInFilter.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Type.push(arr2);
    this.TypeContInFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Type.length = 0;
        this.resetFilters();
      }
    });
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }

  selectedItem_Emp = [];

  isEmpChecked(item) {
    let arr = [];
    this.EmpCountInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Emp_No: element.Emp_No });
        return this.checkedItems_Emp = arr;
      }
    });
    let arr2 = [];
    this.EmpCountInFilter.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Emp.push(arr2);
    this.EmpCountInFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
      }
    });
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 && this.selectedItem_Emp.length == 0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }
  //Apply Filters
  SearchbyText() {
    this.CurrentPageNo = 1;
    this.applyFilters();
  }

  _filtersMessage2: string;
  _filtersMessage: string;

  // applyFilters_Old() {
  //   this.ObjUserDetails.PageNumber = this.CurrentPageNo;
  //   this.ObjUserDetails.PageSize = 30;
  //   this.ObjUserDetails.SearchText = this.searchText;
  //   this.ObjUserDetails.PortfolioId = null;
  //   this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails).subscribe(data => {
  //     this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
  //     // this._totalProjectsCount = data[0]['ProjectsCount_Json'];
  //     //console.log("To DO Data---->", (data[0]['ProjectsCount_Json']));
  //     //Racis Details
  //     // this._totalProjectsCount = this._ProjectDataList.length
  //     if (this._ProjectDataList) {
  //       this._CurrentpageRecords = this._ProjectDataList.length;
  //       // console.log("ProjectList----------->", this._ProjectDataList.length);
  //     }
  //   });
  // }

  applyFilters() {
    this.selectedEmp_String = this.checkedItems_Emp.map(select => {
      return select.Emp_No;
    }).join(',');
    this.selectedType_String = this.checkedItems_Type.map(select => {
      return select.Block_No;
    }).join(',');
    this.selectedStatus_String = this.checkedItems_Status.map(select => {
      return select.Status;
    }).join(',');
    //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);
    this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
    this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
    this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.searchText;
    this.ObjUserDetails.PortfolioId = null;
    //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
    this.service.GetProjectsByUserName_Service_ForProjectsTODO(this.ObjUserDetails)
      .subscribe(data => {
        //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
        this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
        // console.log(this._ProjectDataList);
        // this._totalProjectsCount = data[0]['ProjectsCount_Json'];
        //Emp
        if (this.selectedItem_Emp.length == 0) {
          this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
        }
        else {
          this.EmpCountInFilter = this.selectedItem_Emp[0];
        }
        //Type
        if (this.selectedItem_Type.length == 0) {
          this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
        }
        else {
          this.TypeContInFilter = this.selectedItem_Type[0];
        }
        //Status
        if (this.selectedItem_Status.length == 0) {
          this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
        }
        else {
          this.StatusCountFilter = this.selectedItem_Status[0];
        }
        this._totalProjectsCount = JSON.parse(data[0]['ProjectsCount_Json']);


        let _vl = this._totalProjectsCount / 30;
        let _vl1 = _vl % 1;
        if (_vl1 > 0.000) {
          this.LastPage = Math.trunc(_vl) + 1;
        }
        else {
          this.LastPage = Math.trunc(_vl);
        }

        if(this.CurrentPageNo == this.LastPage){
          this.lastPagerecords=30;
        }
        if (this._ProjectDataList) {
          this._CurrentpageRecords = this._ProjectDataList.length;
        }
        // this._ProjectDataList = data;
        // this._CurrentpageRecords = this._ProjectDataList.length;
        if (this._ProjectDataList.length == 0) {
          this._filtersMessage = "No more projects matched your search";
          this._filtersMessage2 = " Clear the filters & try again";
        }
        else {
          this._filtersMessage = "";
          this._filtersMessage2 = "";
        }
      });
    //Filtering Checkbox de
    // this.getDropdownsDataFromDB();
  }

  search_Type: any[];

  resetFilters() {
    this.searchText = "";
    this.search_Type = [];
    this.CurrentPageNo = 1;
    this.edited = false;
    if (this.selectedItem_Type.length == 0) {
      this.selectedType_String = null;
      this.checkedItems_Type = [];
    }
    if (this.selectedItem_Status.length == 0) {
      this.selectedStatus_String = null;
      this.checkedItems_Status = [];
    }
    if (this.selectedItem_Emp.length == 0) {
      this.selectedEmp_String = null;
      this.checkedItems_Emp = [];
    }
    //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);
    this.applyFilters();
  }

  txtSearch: string;

  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0
    this.resetFilters();
  }

  sweetAlert() {
    if (this.Project_Status == 'Completed') {
      Swal.fire({
        title: 'This Project is Compelted !!',
        text: 'Do You Want To Reopen This Project ?',
        // icon: 'warning',
        // iconHtml: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Blue_question_mark_icon.svg">',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          this.OnAddTaskClick();
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Action is Not Created',
            'error'
          )
        }
      });
    }
    else {
      this.OnAddTaskClick();
    }
  }

  // OpenDialog(){
  //   const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
  //     data: {
  //       mode: 'fileUpload',
  //       filetitle: 'File Upload Component',
  //       //message1: proj_Name
  //     }
  //   });
  //   confirmDialog.afterClosed().subscribe(result => {
  //      if(result=true){
  //        console.log("true");
  //      }
  //   });
  // }
}

