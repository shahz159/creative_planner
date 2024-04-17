import { Component, ElementRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { LinkService } from 'src/app/_Services/link.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ParameterService } from 'src/app/_Services/parameter.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import * as _ from 'underscore';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { DatePipe } from '@angular/common';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { PortfolioProjectsComponent } from '../portfolio-projects/portfolio-projects.component';
import { ViewDashboardProjectsComponent } from '../view-dashboard-projects/view-dashboard-projects.component';
import { ProjectsAddComponent } from '../projects-add/projects-add.component';
import { ToDoProjectsComponent } from '../to-do-projects/to-do-projects.component';
import Swal from 'sweetalert2';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})

export class ProjectInfoComponent implements OnInit, OnDestroy {
  constructor(public service: ProjectTypeService,
    public _LinkService: LinkService,
    public approvalservice: ApprovalsService,
    private notifyService: NotificationService,
    public router: Router,
    public BsService: BsServiceService,
    public _projectSummary: ProjectsSummaryComponent,
    public _portfolioprojects: PortfolioProjectsComponent,
    public _viewdashboard: ViewDashboardProjectsComponent,
    public _toDo: ToDoProjectsComponent,
    public _notification: NotificationComponent,
    public _projectsAdd: ProjectsAddComponent,
    public datepipe: DatePipe,
    private dialog: MatDialog,
    private ShareParameter_Service: ParameterService,
    private route: ActivatedRoute,
    private elementRef: ElementRef) {
    this.objPortfolioDto = new PortfolioDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.BsService.bs_SummaryType.subscribe(t => {
      this.Summarytype = t;
    });
    this.BsService.bs_standardid.subscribe(t => {
      this.standardid = t;
    });
  }

  @Input() inputFromParent: string;
  projectCode: string;
  ProjectNameJson: any;
  ProjectInfoJson: any;
  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  TotalWork_Hours: any;
  totalSubtaskHours: number;
  ProjectPercentage: any; ProjectStatus: string;
  standardDuration: any;
  _MainProjectStatus: string;
  _subtaskDiv: boolean;
  Current_user_ID: string;
  _LinkSideBar: boolean = true;
  _LinkSideBar1: boolean = true;
  _openInfoSideBar: boolean = false;
  interval: any;
  MoreDetailsList: any;
  Summarytype: string;

  approvalObj = new ApprovalDTO();
  objProjectDto: ProjectDetailsDTO;
  requestDate: any;
  requestDeadline: any;
  requestType: any;
  approvalEmpId: any;
  requestComments: any;
  requestDetails: any;
  commentSelected: string;
  comments: string = "";
  selectedType: string;
  _Urlid: any;
  port_id: any;
  Mode: string = "UnderApproval";
  _fullname: any;


  /*
    routing Url id's for different components
      URL_ID     Component
        1       Projects Summary
        2       Portfolio Projects
        3       View dashboard Projects
        4       Projects Add to Portfolio
        5       ToDo Projects
        6       Notifications

  */

  ngOnInit() {

    this.Current_user_ID = localStorage.getItem('EmpNo');
    this._Urlid = this.route.snapshot.params['id'];
    // alert(this._Urlid);
    this.route.paramMap.subscribe(params => {
      var Pcode = params.get('projectcode');
      this.projectCode = Pcode;
      this.getusername();
      this.LoadProjectDetails();
      this.GetRacisPeople()
      // this.getapprovalStats();

      // this.getdeadlinecount();
      // this.getProjectHoldDate();
      // this.getapproval_actiondetails();
    });

    this.EndDate1.setDate(this.EndDate1.getDate() + 1);
    this.minhold.setDate(this.minhold.getDate() + 1);
    this.maxhold.setDate(this.minhold.getDate() + 90);
    //   $('.date-drop').on('hide.bs.dropdown', function (event) {
    //     var tigger = $(".dropdown-menu");
    //       if( tigger !== event.target && !tigger.has(event.target).length){
    //            event.preventDefault();
    //       }
    // });
  }

  getusername() {
    this.service._GetUserName(this.Current_user_ID).subscribe(data => {
      this._fullname = data['Emp_First_Name'];
    });
  }

  scrldwn() {
    $('#mysideInfobar').animate({ scrollTop: $(document).height() + $('#mysideInfobar').height() });
  }


  initials: string;
  Project_Responsible;
  dateResut: any;
  Difference_In_Days: number;
  date1: any;
  date2: any;
  CompletedList: any;
  AssigntaskList: any;
  ifcategoryZero: any;

  _ProjectName: string;
  EmpNo_Own: string;
  EmpNo_Res: string;
  EmpNo_Autho: string;
  Pid: number;
  _MasterCode: string;
  ProjectStatesJson: any;
  Action_countJson: any;
  _portfolioLength: any;
  objPortfolioDto: PortfolioDTO;
  EndDate1: any = new Date();

  minhold: any = new Date();
  maxhold: any = new Date();
  Project_Owner: string;
  Project_Cost: any;


  // fun_LoadProjectDetails() {
  //   // alert(this.Summarytype);
  //   this.service.SubTaskDetailsService(this.projectCode).subscribe(
  //     (data) => {
  //       console.log("project Details---->", data);

  //       if (data != null && data != undefined) {
  //         this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
  //         this.Employee_List = JSON.parse(data[0]['EmployeeDropdown']);
  //         // console.log(this.Employee_List,'EMPList');
  //         this._portfoliolist = JSON.parse(data[0]['Portfolio_json']);
  //         // console.log(this.ProjectInfo_List,"pt");
  //         // this.ifcategoryZero = this.ProjectInfo_List['CompleteReportType'];
  //         // if (Object.keys(data).length > 0) {
  //         this.Subtask_List = JSON.parse(data[0]['projectinfo_SubtaskDetails']);
  //         this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
  //         this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
  //         // // this.CompletedList.push(this.Subtask_List);
  //         // console.log("subtask Details--->",this.Subtask_List);
  //         // console.log("Assign Details--->",this.AssigntaskList);
  //         this.totalSubtaskHours = (data[0]['SubtaskHours']);
  //         this.TotalWork_Hours = data[0]['TotalHours'];
  //         this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
  //         this.ProjectStatus = data[0]['ProjectStatus'];
  //         this._MainProjectStatus = data[0]['MainProjectStatus'];
  //         console.log("ProjectDetails-->", this.ProjectInfo_List);
  //         this.date1 = this.ProjectInfo_List[0]['DPG'];
  //         this.date2 = this.ProjectInfo_List[0]['DeadLine'];
  //         this.Project_Cost= this.ProjectInfo_List[0]['Project_Cost'];
  //         this.EndDate1 = this.date2;
  //         this.Pid = this.ProjectInfo_List[0]['id'];
  //         this._MasterCode = this.ProjectInfo_List[0]['Project_Code'];
  //         this._ProjectName = this.ProjectInfo_List[0]['Project_Name'];
  //         this.Proj_Desc = this.ProjectInfo_List[0]['Project_Description'];
  //         this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
  //         this.Project_Owner = this.ProjectInfo_List[0]['Project_Owner'];
  //         this.EmpNo_Own = this.ProjectInfo_List[0]['OwnerEmpNo'];
  //         this.EmpNo_Res = this.ProjectInfo_List[0]['Responsible'];
  //         this.EmpNo_Autho = this.ProjectInfo_List[0]['Authority'];
  //         // alert(this.EmpNo_Own);
  //         //console.log("Date In ----->", this.date1, this.date2)
  //         this.Project_Responsible = this.ProjectInfo_List[0]['Team_Res'];
  //         // Date Diff In Days...
  //         this.date1 = moment(this.date1);
  //         this.date2 = moment(this.date2);
  //         this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));
  //         this.subtaskNotFoundMsg = "";
  //         this._subtaskDiv = false;
  //         // For  More Details Component...
  //         this.MoreDetailsList = [
  //           { ProjectCode: this.ProjectInfo_List[0]['Project_Code'] },
  //           { ProjectName: this.ProjectInfo_List[0]['Project_Name'] },
  //           { Description: this.ProjectInfo_List[0]['Project_Description'] },
  //           { StartDate: this.ProjectInfo_List[0]['DPG'] },
  //           { EndDate: this.ProjectInfo_List[0]['DeadLine'] },
  //           { Cost: this.ProjectInfo_List[0]['Project_Cost'] },
  //           { Client: this.ProjectInfo_List[0]['Client_Name'] },
  //           { Owner: this.ProjectInfo_List[0]['Project_Owner'] },
  //           { Responsible: this.ProjectInfo_List[0]['Team_Res'] },
  //           { Authority: this.ProjectInfo_List[0]['Team_Autho'] },
  //           { Coordinator: this.ProjectInfo_List[0]['Team_Coor'] },
  //           { Informer: this.ProjectInfo_List[0]['Team_Informer'] },
  //           { Support: this.ProjectInfo_List[0]['Team_Support'] },
  //           { ProjectType: this.ProjectInfo_List[0]['Project_Block'] },
  //           { Authorty_EmpNo: this.ProjectInfo_List[0]['Authority'] },
  //           { Responisble_EmpNo: this.ProjectInfo_List[0]['Responsible'] },
  //           { Category: this.ProjectInfo_List[0]['ReportType'] },
  //           { Owner_EmpNo: this.ProjectInfo_List[0]['OwnerEmpNo'] },
  //         ]

  //         let List_string: any = JSON.stringify(this.MoreDetailsList);
  //         localStorage.setItem("moreDetails", List_string);
  //         const fullName = this.Project_Responsible.split(' ');
  //         this.initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  //         this.initials = this.initials.toUpperCase();
  //       }
  //       else {
  //         this._subtaskDiv = true;
  //         this.subtaskNotFoundMsg = "No Subtask found";
  //       }
  //       if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
  //         this._portfoliolist = [];
  //         this.noPort = "No portfolios linked"
  //       }
  //       else {
  //         this.noPort = "";
  //         // console.log(this._portfoliolist,this.Pid, this._MasterCode,this._ProjectName,this.Current_user_ID,"portfolio list");
  //       }

  //     });
  //   this._OpenMemosInfo(this.projectCode);
  // }

  total: number = 0;
  completed: number = 0;
  delay: number = 0;
  inprogress: number = 0;
  Rejected: number = 0;
  Completion_Under: number = 0;
  Forward_Under: number = 0;
  Under_Approval: number = 0;
  Project_Hold: number = 0;
  Project_type: any;
  Approver_Name: any;
  Approver_No: any;
  isRequest: any;

  LoadProjectDetails() {
    this.service.NewSubTaskDetailsService(this.projectCode).subscribe(
      (data) => {

        console.log(data, "data")
        if (data != null && data != undefined) {
          this.ProjectNameJson = JSON.parse(data[0]['ProjectName_Json']);
          this.Project_type = this.ProjectNameJson[0]['Project_Type'];
          this.ProjectInfoJson = JSON.parse(data[0]['ProjectInfo_Json']);

          this.ProjectStatesJson = JSON.parse(data[0]['ProjectStates_Json']);
          this.Approver_No = this.ProjectStatesJson[0]['ApproverEmpNo'];
          this.isRequest = this.ProjectStatesJson[0]['request_type'];
          if(this.Approver_No && this.Approver_No==this.Current_user_ID){
            this.getapprovalStats();
          }
          this.ProjectStatesJson.forEach((item) => {
            this.Approver_Name = item.ApproverName
          });

          if (this.Project_type != 'Routine Tasks' && this.Project_type != 'Standard Tasks' && this.Project_type != 'To do List' && this.ProjectStatesJson[0]['action_json'] != undefined) {
            this.Action_countJson = JSON.parse(this.ProjectStatesJson[0]['action_json']);
            this.total = this.Action_countJson.reduce((sum, item) => sum + item.count, 0);
            this.Action_countJson.forEach((item) => {

              if (item.Status.trim() === "Completed") {
                this.completed = item.count;
              }

              if (item.Status.trim() === 'Delay') {
                this.delay = item.count;
              }
              if (item.Status.trim() === 'InProcess') {
                this.inprogress = item.count;
              }
              if (item.Status.trim() === 'New Project Rejected') {
                this.Rejected = item.count;
              }
              if (item.Status.trim() === 'Completion Under Approval') {
                this.Completion_Under = item.count;
              }
              if (item.Status.trim() === 'Forward Under Approval') {
                this.Forward_Under = item.count;
              }
              if (item.Status.trim() === 'Under Approval') {
                this.Under_Approval = item.count;
              }

              if (item.Status.trim() === 'Project Hold') {
                this.Project_Hold = item.count;
              }
            });
          }

          this.ProjectStatesJson = JSON.parse(data[0]['ProjectStates_Json']);

          // console.log(this.ProjectInfoList,"pt");
          // this.ifcategoryZero = this.ProjectInfoList['CompleteReportType'];
          // if (Object.keys(data).length > 0) {
          this.Subtask_List = JSON.parse(data[0]['projectinfo_SubtaskDetails']);
          this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
          this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
          // // this.CompletedList.push(this.Subtask_List);
          // console.log("subtask Details--->",this.Subtask_List);
          // console.log("Assign Details--->",this.AssigntaskList);
          this.totalSubtaskHours = (data[0]['SubtaskHours']);

          this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
          this.ProjectStatus = data[0]['ProjectStatus'];
          this._MainProjectStatus = this.ProjectStatesJson[0]['Status'];

          console.log("ProjectDetails-->", this.ProjectNameJson);
          this.date1 = this.ProjectStatesJson[0]['StartDate'];

          this.date2 = this.ProjectStatesJson[0]['EndDate'];

          this.Project_Cost = this.ProjectNameJson[0]['Project_Cost'];
          this.EndDate1 = this.date2;

          this.Pid = this.ProjectNameJson[0]['id'];
          this._MasterCode = this.ProjectNameJson[0]['Project_Code'];
          this._ProjectName = this.ProjectNameJson[0]['Project_Name'];
          this.Proj_Desc = this.ProjectNameJson[0]['Project_Description'];
          this.Comp_No = this.ProjectNameJson[0]['Emp_Comp_No'];
          this.Project_Owner = this.ProjectNameJson[0]['Project_Owner'];
          this.EmpNo_Own = this.ProjectInfoJson[0]['OwnerEmpNo'];
          this.EmpNo_Res = this.ProjectInfoJson[0]['ResponsibleEmpNo'];
          this.EmpNo_Autho = this.ProjectNameJson[0]['Authority'];
          // alert(this.EmpNo_Own);
          //console.log("Date In ----->", this.date1, this.date2)
          this.Project_Responsible = this.ProjectNameJson[0]['Team_Res'];
          // Date Diff In Days...
          this.date1 = moment(this.date1);
          this.date2 = moment(this.date2);
          this.TotalWork_Hours = this.ProjectStatesJson[0].AllocatedHours;
          this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));
          this.subtaskNotFoundMsg = "";
          this._subtaskDiv = false;
        }
      });


      // this.approvalservice.GetProjectApproval(this.projectCode).subscribe((data)=>{
      //   if(data['message']="1"){
      //   }
      // });
  }

  isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnDestroy() {
  }

  closeInfo() {
    this.selectedType = null;
    this.commentSelected = null;
    this.comments = "";
    this.exist_comment = [];
    // $('.project-list_AC').removeClass('active');
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("todo").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("btm-space").classList.add("d-none");

    if (this._Urlid == '1') {
      this._projectSummary.closeInfo();
      this.router.navigate(["/backend/ProjectsSummary/"]);

    }
    else if (this._Urlid == '2') {
      this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c });
      // alert(this.port_id);
      this.router.navigate(["../portfolioprojects/" + this.port_id + "/"]);
    }
    else if (this._Urlid == '3') {
      this.router.navigate(["../ViewProjects/" + this.Mode]);
    }
    else if (this._Urlid == '4') {
      this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c });
      this.router.navigate(["../AddProjectsToPortfolio/" + this.port_id]);
    }
    else if (this._Urlid == '5') {
      this.router.navigate(["./backend/ToDoProjects/"]);
    }
    else if (this._Urlid == '6') {
      this.router.navigate(["Notifications"]);
    }
    this.ngOnDestroy();
  }

  AddDms() {
    this._openInfoSideBar = true;
    this._LinkSideBar = false;
    this._LinkSideBar1 = true;
    this._onRowClick(this.projectCode);
  }

  AddPortfolio() {
    this._openInfoSideBar = true;
    this._LinkSideBar = true;
    this._LinkSideBar1 = false;
    this.getPortfolios();
  }

  getPortfolios() {

    if ((this.ProjectStatesJson.length == 1) && (this.ProjectStatesJson[0]['Portfolio_Name'] == '')) {
      this._portfolioLength = 0;

    }

    else
      this._portfolioLength = this.ProjectStatesJson.length;
    // console.log(this._portfoliolist,"lll");

    this.service.GetTotalPortfoliosBy_Employeeid().subscribe
      ((data) => {
        this.totalPortfolios = (data[0]['TotalPortfolios']);
      });

    this.service.GetPortfoliosBy_ProjectId(this.projectCode).subscribe
      ((data) => {
        this._portfoliosList = data as [];

        this.dropdownSettings_Portfolio = {
          singleSelection: false,
          idField: 'Portfolio_ID',
          textField: 'Portfolio_Name',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 4,
          allowSearchFilter: true,
          clearSearchFilter: true
        };
      });
    document.getElementById("LinkSideBar1").style.width = "100%";

  }

  Empty_portDropdown: any;
  _SelectedPorts: any;
  Port_Id: number;

  Portfolio_Select(selecteditems) {
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_portDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    // console.log("Selected Ports In Array--->", this._SelectedPorts);
    // console.log(this.ngDropdwonPort,"ports");

  }

  Portfolio_SelectAll(selecteditems) {

    let arr = [];
    this.Empty_portDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    //  console.log("Selected Ports In Array1--->", this._SelectedPorts);

  }

  Portfolio_DeSelectAll() {
    this._SelectedPorts = [];
    // console.log("Selected Ports In Array1--->", this._SelectedPorts);
  }

  Portfolio_Deselect(selecteditems) {
    let arr = [];

    this.Empty_portDropdown = selecteditems;
    if (this.Empty_portDropdown != '') {
      this.Empty_portDropdown.forEach(element => {
        arr.push({ Port_Id: element.Portfolio_ID })
        this._SelectedPorts = arr;
      });
    }
    else {
      this._SelectedPorts = [];
    }

    // console.log("Deselect Memos--->", this._SelectedPorts, this.Empty_portDropdown);
  }

  selectedportID: any;
  noPort: string;

  addProjectToPortfolio() {
    this.selectedportID = JSON.stringify(this._SelectedPorts);
    // console.log(this.selectedportID,"portids");
    if (this.selectedportID != null) {
      this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
      this.objPortfolioDto.Project_Code = this.projectCode;
      this.objPortfolioDto.Emp_No = this.Current_user_ID;

      this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
        subscribe((data) => {
          this._Message = (data['message']);
          // console.log(data);

          if (this._Message == 'Updated Successfully')
            this.notifyService.showSuccess("Project Successfully added to selected Portfolio(s)", this._Message);
          else
            this.notifyService.showInfo("Please select atleast one portfolio and try again", "");

        });
    }

    this.ngDropdwonPort = [];
    this.closeLinkSideBar();
    this.LoadProjectDetails();
    // this._openInfoSideBar = false;
  }

  OnPortfolioClick(P_id: any, P_Name: string, CreatedName: string) {
    sessionStorage.setItem('portfolioId', P_id);
    sessionStorage.setItem('portfolioname', P_Name);
    sessionStorage.setItem('PortfolioOwner', CreatedName);
    //sessionStorage.setItem('portfolioCDT', P_CDT);
    //this.router.navigate(['/portfolioprojects/', P_id]);
    // const Url = this.router.serializeUrl(this.router.createUrlTree(['testcreativeplanner/portfolioprojects/', P_id]));
    // window.open(Url);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }

  deletedBy: string;
  portfolioName: string;

  DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
    this.deletedBy = this.Current_user_ID;

    this.ProjectStatesJson.forEach(element => {
      if (port_id == element.Portfolio_ID)
        this.portfolioName = element.Portfolio_Name
    });
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.portfolioName

      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
          this.LoadProjectDetails();
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action Cancelled ", '');
      }
    });
  }

  totalPortfolios: number;
  portfolioId: any;
  _portfoliosList: any;

  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  _JsonString: string;
  Selected_Projectcode: string;
  Memos_List: any;
  _ActualMemoslist: any;
  _totalMemos: number;
  _mappedMemos: number;
  dropdownSettings_Memo: IDropdownSettings = {};
  dropdownSettings_Portfolio: IDropdownSettings = {};
  ngDropdwonMemo: any;
  ngDropdwonPort: any;

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
        this._totalMemos = this._ActualMemoslist.length;
        // console.log("Memos List", JSON.parse(data['JsonData']));
        this.dropdownSettings_Memo = {
          singleSelection: true,
          idField: 'MailId',
          textField: 'Subject',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
      });
  }

  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;

  Memo_Select(selecteditems) {
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    //console.log("Selected Memos In Array--->", arr)
  }

  Memo_Deselect() {
    let arr = [];

    this.Empty_MemoDropdown = this.ngDropdwonMemo;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    // console.log("Deselect Memos--->", this._SelectedMemos)
  }

  _onRowClick(projectCode) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    this.GetMemosByEmployeeId();
    this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        // console.log("Memos Id Form DB--->", data);
        if (Table_data.length > 0) {
          this._JsonString = JSON.stringify(data[0]['JsonData']);
          //console.log("Memos Ids-------->", (this._JsonString));
          this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
          let arr1: any = this._ActualMemoslist;
          // console.log("Actula Memo List On Row Click--->", this._ActualMemoslist);
          let arr2: any = this._dbMemoIdList;
          this._SelectedIdsfromDb = _.map(arr2, (d) => { return d.MailId });
          //Rejecting Same Ids
          this.Memos_List = _.reject(arr1, (d) => {
            var findId = _.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId });
            if (findId) {
              return true;
            }
            else {
              return false;
            }
          })
          let arr = [];
          this._SelectedIdsfromDb.forEach(item => {
            arr.push({ MailId: item })
            this._SelectedIdsfromDb = arr;
          });
          if (this._dbMemoIdList == undefined) {
            this._mappedMemos = 0;
          }
          else {
            this._mappedMemos = this._dbMemoIdList.length;
          }
          //   // console.log("On Row Click----selectedIdfrom DB---->",this._SelectedIdsfromDb);
        }
        else {
          this._mappedMemos = 0;
          console.log("No Memos linked For This Project...");
        }
      });
    document.getElementById("LinkSideBar").style.width = "100%";
  }

  moreDetails() {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${this._MasterCode}`;
    var myWindow = window.open(myurl, this._MasterCode);
    myWindow.focus();
  }

  newDetails() {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${this._MasterCode}`;
    var myWindow = window.open(myurl,this._MasterCode);
    myWindow.focus();
  }

  moreDetails1(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl, pcode);
    myWindow.focus();
  }

  _raciDetails: boolean = true;

  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }

  _displayProjName: string;
  _MemosSubjectList: any;
  _MemosNotFound: string;
  _DBMemosIDList: any;

  _OpenMemosInfo(_projectCode) {
    this._dbMemoIdList = [];
    // this._displayProjName = _projectName;
    this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        // console.log("---->Table Data", Table_data);
        // let Dbdata: any = JSON.parse(data[0]['JsonData']);
        // if (Dbdata == '[]') {
        //   this._MemosSubjectList = [];
        //   this._MemosNotFound = "No memos linked";
        // }
        if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          // console.log(this._JsonString);
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
    //Displaying Right Side Bar...
    //document.getElementById("MemosSideBar").style.width = "350px";
  }

  memoId: any;

  deleteMemos(memoId) {
    this._MemosSubjectList = [];
    let _DeleteSelectedMemo = [];
    _DeleteSelectedMemo.push({ MailId: memoId })
    //_DeleteList.push(pcode);
    //console.log("---->Delete Memo",_DeleteSelectedMemo);
    let arr1: any = this._DBMemosIDList;
    let arr2: any = _DeleteSelectedMemo;
    let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
    //console.log("Final Result ----->",result);
    this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
    this.memoId = JSON.stringify(result);
    //console.log("-----Final O/p--->", this.memoId);
    let appId: number = 101;
    let UserId = this.Current_user_ID;
    this._LinkService.InsertMemosOn_ProjectCode(this.projectCode, appId, this.memoId, UserId).
      subscribe((data) => {
        // this._OpenMemosInfo(pcode,this.pName);
        //this.GetProjectsByUserName();
        let Returndata: any = data['Message'];
        this.UpdateMemos(this.projectCode);
        this.notifyService.showInfo("", Returndata);
      });
  }

  UpdateMemos(pcode) {
    this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
      subscribe((data) => {
        let Table_data: any = data;
        //console.log("Linked Db Memos Data---->",data[0]['JsonData']);
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          // console.log("List----->",this._dbMemoIdList)
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              //console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  _AddLink() {
    let _ProjectCode: string = this.Selected_Projectcode;
    let appId: number = 101;//this._ApplicationId;
    //console.log("selected Memos From Dropdown-->", this._SelectedMemos);
    if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
      // console.log("Table Ids-->", this._SelectedIdsfromDb);
      this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
      // console.log("After Joins Final Output=======>", this.memoId);
    }
    else {
      this.memoId = JSON.stringify(this._SelectedMemos);
      // console.log("Ëlse Block...Executed---->", this.memoId);
    }
    let UserId = this.Current_user_ID;
    if (this._SelectedMemos.length > 0) {
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.UpdateMemos(this.projectCode)
          this.GetMemosByEmployeeId();
          //this.GetProjectsByUserName();
          let Returndata: any = data['Message'];
          this.notifyService.showSuccess("", Returndata);
          this.ngDropdwonMemo = [];
          this._SelectedMemos = [];
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
    }
    this.closeLinkSideBar();
    this._openInfoSideBar = false;
    // this._LinkSideBar=true;
  }

  closeLinkSideBar() {
    this.ngDropdwonPort = [];
    document.getElementById("LinkSideBar").style.width = "0";
    document.getElementById("LinkSideBar1").style.width = "0";
    this._LinkSideBar = true;
    this._LinkSideBar1 = true;
    this._openInfoSideBar = false;
  }

  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }

  Editbutton: boolean;
  _modelProjectName: string;
  _modelProjDesc: string;
  _Message: string;

  Proj_Desc: string;
  Comp_No: string


  OnEditProject(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    // (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
    // (<HTMLInputElement>document.getElementById("textboxfocus_" + id)).focus();


    (<HTMLInputElement>document.getElementById("pro_name_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextbox_single" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textboxfocus_single" + id)).focus();
    // (<HTMLInputElement>document.getElementById("EidtBtn_single" + id)).style.display = "none";
  }

  OnEditProject_Desc(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Span_Desc_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextarea_single" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textareafocus_" + id)).focus();
  }



  onCancel(id) {
    (<HTMLInputElement>document.getElementById("pro_name_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextbox_single" + id)).style.display = "none";
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "inline-block";
    this.Editbutton = false;
    // For Description
    (<HTMLInputElement>document.getElementById("Span_Desc_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextarea_single" + id)).style.display = "none";
    this._modelProjDesc = null;
    this._modelProjectName = null;
    //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";

    // (<HTMLInputElement>document.getElementById("Span_Deadline_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("DeadlineArea_" + id)).classList.remove("d-block");
    this._ProjDeadline = null;
    this.extend_remarks = "";

    (<HTMLInputElement>document.getElementById("HoldArea_" + id)).classList.remove("d-block");
    this.Holddate = null;
    this.hold_remarks = "";

    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.remove("d-block");
    this.selectedEmpNo = null;
    this.TransDate = null;
    this.transfer_remarks = "";
  }

  onTransferCancel(id) {
    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.remove("d-block");
    this.selectedEmpNo = null;
    this.TransDate = null;
    this.transfer_remarks = "";
  }
  _modelProjAlloc: number = 0;

  // OnProject_Rename(id, Pcode) {
  //   if (this._modelProjectName != "" && this._modelProjDesc != "") {
  //     this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID).subscribe(data => {
  //       this._Message = data['message'];
  //       this.notifyService.showSuccess(this._Message, "");
  //       // this.GetSubtask_Details();
  //       // this.GetProjectsByUserName();
  //       this.LoadProjectDetails();
  //       this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No, null).subscribe(
  //         (data) => {
  //           let list: any;
  //           list = JSON.parse(data[0]['ProjectInfo']);
  //           this._ProjectName = list[0]['Project_Name'];
  //           this.Proj_Desc = list[0]['Project_Description'];
  //         });
  //     });
  //     this.onCancel(id);
  //   }
  //   else {
  //     this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
  //   }
  // }

  exist_comment: any[] = [];

  clickonselect(com) {
    if (this.comments == null) {
      this.comments = com;
      this.exist_comment.push(com);
    }
    else {
      this.comments = this.comments + " " + com;
      this.exist_comment.push(com);
    }
    console.log(this.exist_comment, "select");
  }

  clickondeselect(com, id) {

    // let smallerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.exist_comment : this.rejectcommentsList;
    // let largerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.rejectcommentsList : this.exist_comment;

    // for (let i = 0; i < smallerArray.length; i++) {
    //   let index = largerArray.findIndex((el) => el.Req_Coments == smallerArray[i]);
    //   if (index !== -1) {
    //     smallerArray.splice(i, 1);
    //     i--;
    //   }
    // }

    this.exist_comment = this.exist_comment.filter((comment) => comment != com);

    this.comments = this.comments.replace(com,"").trim();
    console.log(this.exist_comment, "deselect");

  }

  typeChange() {
    this.comments = null;
    this.commentSelected = null;
    this.rejectType = null;
    this.noRejectType = false;
  }

  Close_Comments() {
    this.comments = "";
  }

  noRejectType: boolean = false;

  isTextAreaVisible: boolean = false;
  isRejectOptionsVisible: boolean = false;
  active: boolean = false;
  Accept_active: boolean = false;
  Conditional_Active: boolean = false;
  Reject_active: boolean = false;

  removeCommit() {
    this.isTextAreaVisible = false;
    $(".Btn_Accpet").removeClass('active');
    $(".Btn_Conditional_Accept").removeClass('active');
    $(".Btn_Reject").removeClass('active');
  }

  approvalClick(actionType) {
    // $("#ProjectInfoNew").scrollTop(0);
    this.comments=""
   switch (actionType) {
      case 'ACCEPT': {
        this.isRejectOptionsVisible = false
        this.selectedType = '1';
        this.rejectType = null;
        this.Accept_active = true;
        $(".Btn_Accpet").addClass('active');
        this.Conditional_Active = false;
        this.Reject_active = false;
      }; break;
      case 'CONDITIONAL': {
        this.isRejectOptionsVisible = false;
        this.selectedType = '2';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = true;
        $(".Btn_Conditional_Accept").addClass('active');
        this.Reject_active = false;
      }; break;
      case 'REJECT': {
        this.isRejectOptionsVisible = true;
        this.selectedType = '3';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = true;
        $(".Btn_Reject").addClass('active');
      };
        break;
      default: { }
    }
    this.isTextAreaVisible = true;

    // const targetElementId = `kt_open_scroll`;
    // const targetElement = this.elementRef.nativeElement.querySelector(`#${targetElementId}`);
    // if (targetElement) {
    //   targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    // }

  }
  Approval_View() {
    const targetElementId = `kt_open_scroll`;
    const targetElement = this.elementRef.nativeElement.querySelector(`#${targetElementId}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  submitApproval() {
    if (this.selectedType == '1') {
      if (this.comments == '' || this.comments == null) {
        this.singleapporval_json.forEach(element => {
          element.Remarks = 'Accepted';
        });
      }
      else {
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
        });
      }
      this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
        subscribe((data) => {
          this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
          this.LoadProjectDetails();
          this.getapprovalStats();
          if (this._Urlid == '1') {
            this.router.navigate(["/backend/ProjectsSummary/"]);
            this._projectSummary.GetProjectsByUserName(this.Summarytype);
          }
          else if (this._Urlid == '2') {
            this._portfolioprojects.GetPortfolioProjectsByPid();
          }
          else if (this._Urlid == '3') {
            this._viewdashboard.GetCompletedProjects();
          }
          else if (this._Urlid == '4') {
            this._projectsAdd.GetProjectsByUserName();
            this._projectsAdd.getDropdownsDataFromDB();
          }
          else if (this._Urlid == '5') {
            this._toDo.GetProjectsByUserName();
            this._toDo.GetSubtask_Details();
          }
          else if (this._Urlid == '6') {
            this.router.navigate(["Notifications"]);
            this._notification.viewAll('Req');
          }
        });
      console.log(this.singleapporval_json, "accept")

    }

    else if (this.selectedType == '2') {
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.projectCode;
      this.approvalObj.Request_type = this.requestType;
      if (this.comments == '' || this.comments == null) {
        this.approvalObj.Remarks = 'Accepted';
      }
      else {
        this.approvalObj.Remarks = this.comments;
      }
      this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
        subscribe((data) => {
          this._Message = (data['message']);
          if (this._Message == 'Not Authorized' || this._Message == '0') {
            this.notifyService.showError("project not approved", 'Failed.');
          }
          else {
            this.notifyService.showSuccess("Project Approved Successfully", this._Message);
            this.LoadProjectDetails();
            this.getapprovalStats();
            if (this._Urlid == '1') {
              this.router.navigate(["/backend/ProjectsSummary/"]);
              this._projectSummary.GetProjectsByUserName(this.Summarytype);
            }
            else if (this._Urlid == '2') {
              this._portfolioprojects.GetPortfolioProjectsByPid();
            }
            else if (this._Urlid == '3') {
              this._viewdashboard.GetCompletedProjects();
            }
            else if (this._Urlid == '4') {
              this._projectsAdd.GetProjectsByUserName();
              this._projectsAdd.getDropdownsDataFromDB();
            }
            else if (this._Urlid == '5') {
              this._toDo.GetProjectsByUserName();
            }
            else if (this._Urlid == '6') {
              this.router.navigate(["Notifications"]);
              this._notification.viewAll('Req');
            }
          }
        });
    }
    else if (this.selectedType == '3') {
      if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        this.noRejectType = true;
        this.notifyService.showError("Please select Reject Type", "Failed");
        return false;
      }
      else {
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
          element.RejectType = this.rejectType;
        });

        this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
          subscribe((data) => {
            this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
            this.LoadProjectDetails();
            this.getapprovalStats();
            if (this._Urlid == '1') {
              this.router.navigate(["/backend/ProjectsSummary/"]);
              this._projectSummary.GetProjectsByUserName(this.Summarytype);
            }
            else if (this._Urlid == '2') {
              this._portfolioprojects.GetPortfolioProjectsByPid();
            }
            else if (this._Urlid == '3') {
              this._viewdashboard.GetCompletedProjects();
            }
            else if (this._Urlid == '4') {
              this._projectsAdd.GetProjectsByUserName();
              this._projectsAdd.getDropdownsDataFromDB();
            }
            else if (this._Urlid == '5') {
              this._toDo.GetProjectsByUserName();
              this._toDo.GetSubtask_Details();
            }
            else if (this._Urlid == '6') {
              this.router.navigate(["Notifications"]);
              this._notification.viewAll('Req');
            }
          });
      }
    }
    else if (this.selectedType == '4') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
    this.close_info_Slide();
  }



  submitApproval1() {
    this.active = true;
    this.Accept_active = false;
    this.Conditional_Active = false;
    this.Reject_active = false;
    if (this.comments == '' || this.comments == null) {
      this.singleapporval_json.forEach(element => {
        element.Remarks = 'Accepted';
      });
    }
    else {
      this.singleapporval_json.forEach(element => {
        element.Remarks = this.comments;
      });
    }
    this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
      subscribe((data) => {
        this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
        this.LoadProjectDetails();
        this.getapprovalStats();
        if (this._Urlid == '1') {
          this.router.navigate(["/backend/ProjectsSummary/"]);
          this._projectSummary.GetProjectsByUserName(this.Summarytype);
        }
        else if (this._Urlid == '2') {
          this._portfolioprojects.GetPortfolioProjectsByPid();
        }
        else if (this._Urlid == '3') {
          this._viewdashboard.GetCompletedProjects();
        }
        else if (this._Urlid == '4') {
          this._projectsAdd.GetProjectsByUserName();
          this._projectsAdd.getDropdownsDataFromDB();
        }
        else if (this._Urlid == '5') {
          this._toDo.GetProjectsByUserName();
          this._toDo.GetSubtask_Details();
        }
        else if (this._Urlid == '6') {
          this.router.navigate(["Notifications"]);
          this._notification.viewAll('Req');
        }
      });
    console.log(this.singleapporval_json, "accept")


    this.close_info_Slide();
  }

  comments_list: any;
  initials1: any;
  Submitted_By: string;
  prviousCommentsList: any;
  transfer_json: any;
  revert_json: any;
  forwardType: string;
  pro_act: boolean = true;
  newResponsible: any;
  new_deadline: any;
  new_cost: any;
  new_duration: any;
  hold_upto: any;
  forwardto: any;
  forwardfrom: any;
  completedoc: any;
  complete_List: any;
  iscloud: any;
  url: any;
  previouscoments: boolean = false;
  singleapporval_json: any[] = [];
  standardDoc:any;
  sidno:any;
  emp:any;
  repdate:any;
  contenttype: any;
  submitby:any;
  standardid:any;

  getapprovalStats() {
    this.approvalEmpId = null;
    this.selectedType = null;
    this.commentSelected = null;
    this.comments = "";

    if(this.standardid==null || this.standardid== ''){
      this.approvalObj.Project_Code = this.projectCode;
      this.approvalObj.standardid =0;

      this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
        this.requestDetails = data as [];
        console.log(this.requestDetails, "approval")
  debugger
        if (this.requestDetails.length > 0) {
          this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
          this.requestType = (this.requestDetails[0]['Request_type']);
          this.forwardType = (this.requestDetails[0]['ForwardType']);
          this.requestDate = (this.requestDetails[0]['Request_date']);
          this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
          this.requestComments = (this.requestDetails[0]['Remarks']);
          this.new_deadline = (this.requestDetails[0]['new_deadline']);
          this.hold_upto = (this.requestDetails[0]['hold_date']);
          this.new_cost = (this.requestDetails[0]['new_cost']);
          this.new_duration = (this.requestDetails[0]['new_duration']);
          this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
          this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
          const fullName = this.Submitted_By && this.Submitted_By.split(' ');
          this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
          this.initials1 = this.initials1.toUpperCase();
          this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
                  this.reject_list.splice(0,1);
          this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
          this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
          console.log(this.reject_list, "service");
          if (this.prviousCommentsList.length > 1) {
            this.previouscoments = true;
          }
          else {
            this.previouscoments = false;
          }
          this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
          if (this.requestType == 'Project Forward') {
            this.newResponsible = (this.transfer_json[0]['newResp']);
            this.forwardto = (this.transfer_json[0]['Forwardedto']);
            this.forwardfrom = (this.transfer_json[0]['Forwardedfrom']);
          }
          this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
          if (this.requestType == 'Revert Back') {
            this.newResponsible = (this.revert_json[0]['newResp']);
            this.forwardto = (this.revert_json[0]['Forwardedto']);
            this.forwardfrom = (this.revert_json[0]['Forwardedfrom']);
          }
          if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved') {
            this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
            this.completedoc = (this.complete_List[0]['Sourcefile']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
            this.url = (this.complete_List[0]['CompleteProofDoc']);
            console.log( this.complete_List ,'contenrt')
          }
          if (this.requestType == 'Task Complete') {
            this.complete_List = JSON.parse(this.requestDetails[0]['standardDoc']);
            console.log(this.complete_List, "standard")
            this.completedoc = (this.complete_List[0]['Proofdoc']);
            this.sidno = (this.complete_List[0]['StandardId']);
            this.emp = (this.complete_List[0]['Emp_No']);
            this.repdate = (this.complete_List[0]['Reportdate']);
            this.submitby = (this.complete_List[0]['SubmittedBy']);
            this.contenttype = (this.complete_List[0]['contenttype']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
          }

          console.log(this.requestDetails, 'transfer');
        }
        // console.log(this.comments_list, "req")
        // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
      });
    }
    else{
      this.approvalObj.Project_Code = this.projectCode;
      this.approvalObj.standardid = this.standardid;

      this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
        this.requestDetails = data as [];
        console.log(this.requestDetails, "approval")

        if (this.requestDetails.length > 0) {
          this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
          this.requestType = (this.requestDetails[0]['Request_type']);
          this.forwardType = (this.requestDetails[0]['ForwardType']);
          this.requestDate = (this.requestDetails[0]['Request_date']);
          this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
          this.requestComments = (this.requestDetails[0]['Remarks']);
          this.new_deadline = (this.requestDetails[0]['new_deadline']);
          this.hold_upto = (this.requestDetails[0]['hold_date']);
          this.new_cost = (this.requestDetails[0]['new_cost']);
          this.new_duration = (this.requestDetails[0]['new_duration']);
          this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
          this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
          const fullName = this.Submitted_By && this.Submitted_By.split(' ');
          this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
          this.initials1 = this.initials1.toUpperCase();
          this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
                  this.reject_list.splice(0,1);
          this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
          this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
          console.log(this.reject_list, "service");
          if (this.prviousCommentsList.length > 1) {
            this.previouscoments = true;
          }
          else {
            this.previouscoments = false;
          }
          // this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
          // if (this.requestType == 'Project Forward') {
          //   this.newResponsible = (this.transfer_json[0]['newResp']);
          //   this.forwardto = (this.transfer_json[0]['Forwardedto']);
          //   this.forwardfrom = (this.transfer_json[0]['Forwardedfrom']);
          // }
          // this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
          // if (this.requestType == 'Revert Back') {
          //   this.newResponsible = (this.revert_json[0]['newResp']);
          //   this.forwardto = (this.revert_json[0]['Forwardedto']);
          //   this.forwardfrom = (this.revert_json[0]['Forwardedfrom']);
          // }
          // if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved') {
          //   this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
          //   this.completedoc = (this.complete_List[0]['Sourcefile']);
          //   this.iscloud = (this.complete_List[0]['IsCloud']);
          //   this.url = (this.complete_List[0]['CompleteProofDoc']);
          // }
          if (this.requestType == 'Task Complete') {
            this.complete_List = JSON.parse(this.requestDetails[0]['standardDoc']);
            console.log(this.complete_List, "standard")
            this.completedoc = (this.complete_List[0]['Proofdoc']);
            this.sidno = (this.complete_List[0]['StandardId']);
            this.emp = (this.complete_List[0]['Emp_No']);
            this.repdate = (this.complete_List[0]['Reportdate']);
            this.submitby = (this.complete_List[0]['SubmittedBy']);
            this.contenttype = (this.complete_List[0]['contenttype']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
          }
          if (this.requestType == 'Task Complete' && this._Urlid==6) {
            this.complete_List = JSON.parse(this.requestDetails[0]['standardDoc']);
            console.log(this.complete_List, "standard")
            this.completedoc = (this.complete_List[0]['Proofdoc']);
            this.sidno = (this.complete_List[0]['StandardId']);
            this.emp = (this.complete_List[0]['Emp_No']);
            this.repdate = (this.complete_List[0]['Reportdate']);
            this.submitby = (this.complete_List[0]['SubmittedBy']);
            this.contenttype = (this.complete_List[0]['contenttype']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
          }
          console.log(this.requestDetails, 'transfer');
        }
        // console.log(this.comments_list, "req")
        // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
      });
    }



  }

  resetApproval() {
    this.selectedType = null;
    this.commentSelected = null;
    this.noRejectType = false;
    this.exist_comment = [];
  }

  rejDesc: any;
  rejectcommentsList: any;
  reject_list: any;
  rejectType: any;
  rejectlength: any;

  rejectApproval() {
    this.exist_comment = [];
    this.comments = "";
    this.noRejectType = false;
    // alert(this.rejectType)
    if (this.rejectType != null && this.rejectType != "") {
      this.reject_list.forEach(element => {
        if (this.rejectType == element.TypeID) {
          this.rejDesc = element.Reject_Description;
        }
      });
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.rejectType = this.rejectType;
      this.approvalObj.Project_Code = this.projectCode;
      if (this.requestType == 'New Project')
        this.approvalObj.Status = 'New Project Rejected';
      else if (this.requestType == 'New Project Reject Release')
        this.approvalObj.Status = 'New Project Rejected';
      else if (this.requestType == 'New Project Hold')
        this.approvalObj.Status = 'New Project Rejected';
      else if (this.requestType == 'Project Complete')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if (this.requestType == 'Project Complete Reject Release')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if (this.requestType == 'Project Complete Hold')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if (this.requestType == 'Deadline Extend')
        this.approvalObj.Status = 'Rejected';
      else if (this.requestType == 'Deadline Extend Hold')
        this.approvalObj.Status = 'Rejected';
      else if (this.requestType == 'Standardtask Enactive')
        this.approvalObj.Status = 'Enactive-Reject';
      else if (this.requestType == 'Project Forward')
        this.approvalObj.Status = 'Forward Reject';
      else if (this.requestType == 'Project Hold')
        this.approvalObj.Status = 'Project Hold Reject';
      else if (this.requestType == 'Revert Back')
        this.approvalObj.Status = 'Revert Reject';
      else if (this.requestType == 'Task Complete')
        this.approvalObj.Status = 'Task-Reject';
      else {
        this.approvalObj.Status = 'Rejected';
      }
      this.approvalservice.GetRejectComments(this.approvalObj).subscribe(data => {
        console.log('++>',JSON.parse(data[0]['reject_CommentsList']));
        this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
        this.rejectlength = this.rejectcommentsList.length;
      });
    }
  }

  underDev() {
    this.TransDate = this.datepipe.transform(this.TransDate, 'MM/dd/yyyy');

    console.log(this.selectedEmpNo, this.transfer_remarks, this.TransDate, "transfer");
    this.notifyService.showError("**Development under maintainance", "Failed!!");
  }

  //Edit deadline
  _ProjDeadline: string;
  extend_remarks: string;

  onEditDeadline(id, enddate) {
    (<HTMLInputElement>document.getElementById("DeadlineArea_" + id)).classList.add("d-block");
    document.getElementsByClassName("date-drop2")[0].classList.remove("d-block");
    // document.getElementsByClassName("date-drop3")[0].classList.remove("d-block");


    // this._ProjDeadline = enddate;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Deadlinetext_" + id)).focus();
  }

  onProject_ExtendDeadline(id, Pcode) {
    this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
    // alert(Pcode);
    if (this._ProjDeadline != null) {
      this.service._ProjectDeadlineExtendService(Pcode, this._ProjDeadline, null, this.extend_remarks, null).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == 'Project Deadline not Updated') {
          this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
          this.LoadProjectDetails();
        }
        else if (this._Message == 'Project Deadline Updated') {
          this.notifyService.showSuccess("Project end date updated", "Success");
          this.LoadProjectDetails();
        }
      });
      this.onCancel(id);
    }
    else {
      this.notifyService.showInfo("Deadline date cannot be empty", "Please select date.");
    }
  }

  deadlineCount: any;
  getdeadlinecount() {
    this.service.getDeadlineCountbyProjectcode(this.projectCode).subscribe(data => {
      this.deadlineCount = data['deadlineCount'];
    })
  }

  // Hold Project
  Holddate: string;
  hold_remarks: string;


  onHoldClick(id) {
    (<HTMLInputElement>document.getElementById("HoldArea_" + id)).classList.add("d-block");
    document.getElementsByClassName("date-drop1")[0].classList.remove("d-block");
    // document.getElementsByClassName("date-drop3")[0].classList.remove("d-block");


    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Holdtext_" + id)).focus();
  }

  onProject_Hold(id, Pcode) {
    this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
    // alert(Pcode);
    if (this.Holddate != null) {

      this.objProjectDto.Project_holddate = this.Holddate;
      this.objProjectDto.Project_Code = Pcode;
      this.objProjectDto.Remarks = this.hold_remarks;
      this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == 'Project Hold Updated') {
          this.notifyService.showSuccess(this._Message + " by " + this.Current_user_ID, "Success");
          this.LoadProjectDetails();
        }
      });
      this.onCancel(id);
    }
    else {
      this.notifyService.showInfo("Project Hold date cannot be empty", "Please select a date.");
    }
  }


  proj_holddate: any;
  getProjectHoldDate() {
    this.service.getHoldDatebyProjectcode(this.projectCode).subscribe(data => {
      this.proj_holddate = data['Project_holddate'];
    })
  }

  //Transfer Project
  selectedEmpNo: string = null;
  transfer_remarks: string;
  TransDate: string;

  // EmployeeOnSelect(obj) {
  //   this.selectedEmpNo = obj;
  //   alert(this.selectedEmpNo);
  // }

  onTransferClick(id) {
    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.add("d-block");

    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Transtext_" + id)).focus();
  }

  sweetAlert(id, pcode) {
    Swal.fire({
      title: 'Project transfer!!',
      html: 'Do you want to transfer the project "<b>' + this._ProjectName + '</b>" ?',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.onProject_Transfer(id, pcode);
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Project not transferred!',
          'error'
        )
        this.onCancel(id);
      }
    });

  }

  new_Res: string;

  onProject_Transfer(id, Pcode) {
    if (this.TransDate != null) {
      this.TransDate = this.datepipe.transform(this.TransDate, 'MM/dd/yyyy');
    }
    else {
      this.TransDate = null;
    }
    this.ProjectInfoJson.forEach(element => {
      if (element.Emp_No == this.selectedEmpNo) {
        this.new_Res = element.DisplayName;
      }
    });


    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Responsible = this.selectedEmpNo;
    this.approvalObj.deadline = this.TransDate;
    this.approvalObj.Project_Code = Pcode;
    this.approvalObj.Remarks = this.transfer_remarks;

    this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
      this._Message = data['message'];

      if (this._Message == '1') {
        this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Project_Responsible + '(' + this.EmpNo_Res + ')', "Successfully Transferred");
        this.LoadProjectDetails();
        this.getapprovalStats();
        if (this._Urlid == '1') {
          this.router.navigate(["/backend/ProjectsSummary/"]);
          this._projectSummary.GetProjectsByUserName(this.Summarytype);
        }
        else if (this._Urlid == '2') {
          this._portfolioprojects.GetPortfolioProjectsByPid();
        }
        else if (this._Urlid == '3') {
          this._viewdashboard.GetCompletedProjects();
        }
        else if (this._Urlid == '4') {
          this._projectsAdd.GetProjectsByUserName();
          this._projectsAdd.getDropdownsDataFromDB();
        }
        else if (this._Urlid == '5') {
          this._toDo.GetProjectsByUserName();
        }
        else if (this._Urlid == '6') {
          // this.router.navigate(["Notifications"]);
        }
      }
      else if (this._Message == '2') {
        this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
        this.LoadProjectDetails();
        this.getapprovalStats();
        if (this._Urlid == '1') {
          this.router.navigate(["/backend/ProjectsSummary/"]);
          this._projectSummary.GetProjectsByUserName(this.Summarytype);
        }
        else if (this._Urlid == '2') {
          this._portfolioprojects.GetPortfolioProjectsByPid();
        }
        else if (this._Urlid == '3') {
          this._viewdashboard.GetCompletedProjects();
        }
        else if (this._Urlid == '4') {
          this._projectsAdd.GetProjectsByUserName();
          this._projectsAdd.getDropdownsDataFromDB();
        }
        else if (this._Urlid == '5') {
          this._toDo.GetProjectsByUserName();
        }
        else if (this._Urlid == '6') {
          this.router.navigate(["Notifications"]);
          this._notification.viewAll('Req');
        }
      }
      else if (this._Message == '3') {
        this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Project_Owner + '(' + this.EmpNo_Own + ')', "Transfer under approval!");
        this.LoadProjectDetails();
        this.getapprovalStats();
        if (this._Urlid == '1') {
          this.router.navigate(["/backend/ProjectsSummary/"]);
          this._projectSummary.GetProjectsByUserName(this.Summarytype);
        }
        else if (this._Urlid == '2') {
          this._portfolioprojects.GetPortfolioProjectsByPid();
        }
        else if (this._Urlid == '3') {
          this._viewdashboard.GetCompletedProjects();
        }
        else if (this._Urlid == '4') {
          this._projectsAdd.GetProjectsByUserName();
          this._projectsAdd.getDropdownsDataFromDB();
        }
        else if (this._Urlid == '5') {
          this._toDo.GetProjectsByUserName();
        }
        else if (this._Urlid == '6') {
          // this.router.navigate(["Notifications"]);
        }
      }
      else if (this._Message == '4') {
        this.notifyService.showError("Please contact Project Owner", "Project Not Transferred!");
      }
    });
    this.onCancel(id);
    this.closeInfo();
    // else {
    //   this.notifyService.showInfo("Project Deadline date cannot be empty", "Please select a date.");
    // }
  }

  _day: any;
  _month: any;

  // openPDF_Standard(cloud, repDate: Date, proofDoc) {
  //   repDate = new Date(repDate);
  //   let FileUrl: string;
  //   FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

  //   let Day = repDate.getDate();
  //   let Month = repDate.getMonth() + 1;
  //   let Year = repDate.getFullYear();
  //   if (Month < 10) {
  //     this._month = '0' + Month;
  //   }
  //   else {
  //     this._month = Month;
  //   }
  //   if (Day < 10) {
  //     this._day = '0' + Day;
  //   }
  //   else {
  //     this._day = Day;
  //   }
  //   var date = this._month + "_" + this._day + "_" + repDate.getFullYear();

  //   if (cloud == false) {
  //     if (this.EmpNo_Autho == this.EmpNo_Res) {
  //       window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + date + "/" + proofDoc);
  //     }
  //     else if (this.EmpNo_Autho != this.EmpNo_Res) {
  //       window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + date + "/" + proofDoc);
  //     }
  //   }
  //   else if (cloud == true) {
  //     window.open(proofDoc);
  //   }
  // }

  openPDF(cloud, docName) {
    let FileUrl: string;
    FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

    if (cloud == false) {
      if (this.EmpNo_Autho == this.EmpNo_Res) {
        window.open(FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + docName);
      }
      else if (this.EmpNo_Autho != this.EmpNo_Res) {
        window.open(FileUrl + this.EmpNo_Autho + "/" + this.projectCode + "/" + docName);
      }
    }
    else if (cloud == true) {
      window.open(docName);
    }
  }

  src: any;

  LoadDocument(cloud, Pcode, Resp, url: string) {
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
    // FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (cloud == false) {
      var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/" + url);
      myWindow.focus();
    }
    else if (cloud == true) {
      var myWindow = window.open(url);
      myWindow.focus();
    }
  }


  LoadDocument1(pcode: string, iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {
    let FileUrl: string;
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (iscloud == false) {
      if (this.EmpNo_Autho == this.EmpNo_Res) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + url1);
      }
      else if (this.EmpNo_Autho != this.EmpNo_Res) {
        FileUrl = (FileUrl + this.EmpNo_Res + "/" + this.projectCode + "/" + url1);
      }

      let name = "ArchiveView/" + this.projectCode;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      filename = filename.replace(/#/g, "%23");
      filename = filename.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }

    else if (iscloud == true) {
      let name = "ArchiveView/" + this.projectCode;
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

  openPDF_Standard(standardid: number, emp_no: string, cloud: boolean, repDate: Date, proofDoc: string, type: string,submitby: string) {

    repDate = new Date(repDate);
    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";


    let Day = repDate.getDate();
    let Month = repDate.getMonth() + 1;
    let Year = repDate.getFullYear();
    if (Month < 10) {
      this._month = '0' + Month;
    }
    else {
      this._month = Month;
    }
    if (Day < 10) {
      this._day = '0' + Day;
    }
    else {
      this._day = Day;
    }
    var date = this._month + "_" + this._day + "_" + repDate.getFullYear();

    if (cloud == false) {
      FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";
      FileUrl = (FileUrl + emp_no + "/" + this.projectCode + "/" + date + "/" + proofDoc);

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&"+ "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();

    }

    else if (cloud == true) {

      let FileUrl: string;
      FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

      if (proofDoc.includes(FileUrl)) {
        FileUrl = proofDoc
      }
      else {
        let Day = repDate.getDate();
        let Month = repDate.getMonth() + 1;
        let Year = repDate.getFullYear();
        if (Month < 10) {
          this._month = '0' + Month;
        }
        else {
          this._month = Month;
        }
        if (Day < 10) {
          this._day = Day;
        }
        else {
          this._day = Day;
        }
        var date = this._day + "_" + this._month + "_" + repDate.getFullYear();

        FileUrl = (FileUrl + emp_no + "/" + this.projectCode + "/" + date + "/" + proofDoc + "." + type);
      }

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&"+ "submitby=" + submitby + "&"+  "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }


  }


  btmspace_opn() {
    document.getElementById("btm-space").classList.remove("d-none");
  }
  close_space() {
    document.getElementById("btm-space").classList.add("d-none");
  }


  action_details: any;
  approve_details: any;

  getapproval_actiondetails() {
    this.approvalObj.Project_Code = this.projectCode;

    this.approvalservice.GetAppovalandActionDetails(this.approvalObj).subscribe(data => {
      // console.log(data,"appact");
      if (data[0]['actiondetails'] != '[]' || data[0]['approvaldetails'] != '[]') {
        if (data[0]['actiondetails'] != '[]')
          this.action_details = JSON.parse(data[0]['actiondetails']);
        if (data[0]['approvaldetails'] != '[]')
          this.approve_details = JSON.parse(data[0]['approvaldetails']);

        // console.log(this.action_details,this.approve_details,"details");
      }
    })
  }

  close_info_Slide() {
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    if (this._Urlid == '1') {
      this._projectSummary.closeInfo();
      this.router.navigate(["/backend/ProjectsSummary/"]);
    }
    else if (this._Urlid == '2') {
      this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c });
      this._portfolioprojects.closeInfo();
      // alert(this.port_id);
      this.router.navigate(["../portfolioprojects/" + this.port_id + "/"]);
    }
    else if (this._Urlid == '3') {
      this._viewdashboard.closeInfo();
      this.router.navigate(["../ViewProjects/" + this.Mode]);
    }
    else if (this._Urlid == '4') {
      this._projectsAdd.closeInfo();
      this.BsService.bs_SelectedPortId.subscribe(c => { this.port_id = c });
      this.router.navigate(["../AddProjectsToPortfolio/" + this.port_id]);
    }
    else if (this._Urlid == '5') {
      this.router.navigate(["./backend/ToDoProjects/"]);
    }
    else if (this._Urlid == '6') {
      this._notification.closeInfo();
      this.router.navigate(["Notifications"]);
    }
  }
//////////////////////// RACIS start ////////////////////////////////////////////////////////
// uniqueName:any
// uniqueNamesArray:any
// firstthreeRecords:any
// firstRecords:any
// secondRecords:any
// thirdRecords:any
// newArray:any
// uniqueSet :any
// nonRacisList:any=[];
// GetPeopleDatils(){
//   this.service.NewProjectService(this.URL_ProjectCode).subscribe(
//     (data) => {

//       if (data != null && data != undefined) {
//         this.Project_List = JSON.parse(data[0]['RacisList']);
//         this.uniqueName = new Set(this.Project_List.map(record => record.RACIS));
//         const uniqueNamesArray = [...this.uniqueName];
//          this.newArray = uniqueNamesArray.slice(3);
//         this.firstthreeRecords = uniqueNamesArray.slice(0, 3);
//         this.firstRecords=this.firstthreeRecords[0][0].split(' ')[0]
//         this.secondRecords= this.firstthreeRecords[1][0].split(' ')[0]
//         this.thirdRecords= this.firstthreeRecords[2][0].split(' ')[0]
//       }
//     });



Project_List:any
uniqueName_List:any
uniqueName_array:any
newArray:any
three_Records:any
firstRecord:any
secondRecord:any
thirdRecord:any

GetRacisPeople(){
  this.service.NewProjectService(this.projectCode).subscribe(
    (data)=>{
      this.Project_List=JSON.parse(data[0]['RacisList'])
      this.uniqueName_List=new Set(this.Project_List.map(record=>record.RACIS))
      this.uniqueName_array=[...this.uniqueName_List]
      this.newArray=this.uniqueName_array.slice(3).map(item=>" "+item+" ")
      this.three_Records=this.uniqueName_array.slice(0,3)

      this.firstRecord=this.three_Records[0][0]
      this.secondRecord=this.three_Records[1][0]
      this.thirdRecord=this.three_Records[2][0]
      console.log(this.thirdRecord,'==============>')
    }
  )
}



   limit =  115; // Set the initial limit
   isExpandeds = false;
  toggleReadMores() {
    this.isExpandeds = !this.isExpandeds;
  }

///////////////////////////////////// RACIS end /////////////////////////


}
