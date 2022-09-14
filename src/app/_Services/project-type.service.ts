import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ProjecttypeDTO } from '../_Models/projecttype-dto';
import { ApiurlService } from './apiurl.service';
import { ProjectDetailsDTO } from '../_Models/project-details-dto';
import { EmployeeDTO } from '../_Models/employee-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { CompanyDTO } from 'src/app/_Models/company-dto';
import { LoginDTO } from '../_Models/login-dto';
import { Login } from 'src/app/_Interface/login';
import { UserDetailsDTO } from '../_Models/user-details-dto';
import { Shareportfolio_DTO } from '../_Models/shareportfolio';
import { StatusDTO } from '../_Models/status-dto';
import { NotificationActivityDTO } from '../_Models/notification-activity-dto';
import { ChartDTO } from '../_Models/chart-dto';
import { BarChartDTO } from 'src/app/_Models/bar-chart-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { ColumnChartDTO } from 'src/app/_Models/column-chart';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { CompletedProjectsDTO } from '../_Models/completed-projects-dto';
import { DarDTO } from '../_Models/dar-dto';
import { AssigntaskDTO } from '../_Models/assigntask-dto';
import { CategoryDTO } from '../_Models/category-dto';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import { BarChartComponent } from '../_Views/bar-chart/bar-chart.component';
@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {
  ProjectDetails_List: ProjectDetailsDTO[];
  ProjectTypeList: ProjecttypeDTO[];
  ObjprojectTypeDto: ProjecttypeDTO;
  ObjDto: ProjectDetailsDTO;
  EmployeeList: EmployeeDTO[];
  ObjEmployeeDetails: EmployeeDTO;
  objPortfolioDTO: PortfolioDTO;
  obj_CompanyDTO: CompanyDTO;
  Obj_LoginDTO: LoginDTO;
  User_Details: LoginDTO[];
  ObjUserDetails: UserDetailsDTO;
  Obj_ILogin: Login[];
  user_DetailList: UserDetailsDTO[];
  Teamlist: ProjectDetailsDTO[];
  StatusList: ProjectDetailsDTO[];
  userDTO: UserDetailsDTO;
  EmpNo: string; EmpCompNo: string; SystemRole: string;

  Portfolio_List: PortfolioDTO[];
  Project_TypeList = [];
  _ObjSharePortfolio: Shareportfolio_DTO;
  ObjStatusDTO: StatusDTO;
  ObjNotificationDto: NotificationActivityDTO;
  _ObjChartDTO: ChartDTO;
  _ObjCompletedProj: CompletedProjectsDTO;
  _objDARAchievement: DarDTO;
  _ObjAssigntaskDTO: AssigntaskDTO;

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
    this.ObjprojectTypeDto = new ProjecttypeDTO;
    this.ObjEmployeeDetails = new EmployeeDTO;
    this.Obj_LoginDTO = new LoginDTO;
    this.userDTO = new UserDetailsDTO;
    this.ObjUserDetails = new UserDetailsDTO;
    this._ObjSharePortfolio = new Shareportfolio_DTO;
    this.objPortfolioDTO = new PortfolioDTO;
    this.ObjStatusDTO = new StatusDTO;
    this.ObjNotificationDto = new NotificationActivityDTO;
    this._ObjChartDTO = new ChartDTO;
    this.ObjBarChartDTO = new BarChartDTO;
    this.ObjSubTaskDTO = new SubTaskDTO;
    this.objColumnChartDTO = new ColumnChartDTO;
    this.objDropdownsDTO = new DropdownDTO;
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this._objDARAchievement = new DarDTO();
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this.ObjCategoryDTO = new CategoryDTO();
    this.ObjDto = new ProjectDetailsDTO();
  }
  readonly rootUrl = this.commonUrl.apiurl;

  GetProjectTypeList() {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectTypes", this.ObjUserDetails)
    // .subscribe(data => {this.ProjectTypeList = data as ProjecttypeDTO[]
    //   this.Project_TypeList=this.ProjectTypeList.sort((a, b) => (a.Exec_BlockName > b.Exec_BlockName) ? 1 : -1);
    // });
  }
  GetProjects(Ptype_Id) {
    this.ObjprojectTypeDto.ProjectType_ID = Ptype_Id;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjects", this.ObjprojectTypeDto)
  }
  GetProjects_EPDB() {
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectsDetails", this.ObjDto)
    // .subscribe((data) =>this.ProjectDetails_List = data as ProjectDetailsDTO[]);
  }
  AlreadyExistsPortfolioService(pname) {
    this.objPortfolioDTO.SearchText = pname;
    return this.http.post(this.rootUrl + "Projects/NewCheckPortfolioExists", this.objPortfolioDTO)
  }

  GetProjectsBy_portfolioId(pid: number) {

    // let P_Id: string = sessionStorage.getItem('Pid');
    // let parsePid: number = +P_Id;
    this.objPortfolioDTO.Portfolio_ID = pid;
    this.objPortfolioDTO.EmployeeId = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioSharePreferences_Json", this.objPortfolioDTO)
  }
  GetProjectsByUserName_Service(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
    this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    this.ObjUserDetails.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName", this.ObjUserDetails);
  }
  GetProjectsByUserName_Service_ForSummary(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
    this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName_ForSummary", this.ObjUserDetails);
  }
  GetProjectsByUserName_Service_ForProjectsTODO(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
    this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName_ForToDoProjects", this.ObjUserDetails);
  }
  GetProjectsForRunwayTaskDropdown(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    //this.ObjUserDetails.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "Projects/NewGetProjectsForRunwayTask", this.ObjUserDetails);
  }
  GetDeadlineByProjectCode(Project_Code) {
    this.ObjUserDetails.Project_Code = Project_Code;
    return this.http.post(this.rootUrl + "Notification/NewGetDeadLineByProjectCode", this.ObjUserDetails);

  }

  GetProjectsFor_ProjectsChart(EmpNo) {
    this.ObjUserDetails.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName", this.ObjUserDetails);

  }
  GetEmployeesById(EmpNo: string) {
    this.ObjEmployeeDetails.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewGetEmployeById", this.ObjEmployeeDetails)
    // .subscribe((data) =>this.ProjectDetails_List = data as ProjectDetailsDTO[]);
  }
  // GetEmployees() {
  //   return this.http.post(this.rootUrl + "TestAPI/NewGetEmployees", this.ObjEmployeeDetails)
  //     .subscribe((data) => this.EmployeeList = data as EmployeeDTO[]);
  // }
  GetEmployeesby_CompNo(cmpNo, Pid) {
    this.ObjEmployeeDetails.Emp_Comp_No = cmpNo;
    this.ObjEmployeeDetails.Portfolio_ID = Pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetEmployeesByComp_No", this.ObjEmployeeDetails);
  }
  SavePortfolio(objFromComp) {
    this.objPortfolioDTO = objFromComp;
    objFromComp.Portfolio_ID = this.ObjUserDetails.PortfolioId;
    this.objPortfolioDTO.Portfolio_Name = objFromComp.Portfolio_Name;
    // this.objPortfolioDTO.Status;
    this.objPortfolioDTO.SelectedProjects = objFromComp.SelectedProjects;

    if (this.objPortfolioDTO.Portfolio_ID == 0) {
      this.objPortfolioDTO.Created_By = this.ObjUserDetails.Emp_No;
      this.objPortfolioDTO.Modified_By = null;
    }
    else {
      this.objPortfolioDTO.Created_By = null;
      this.objPortfolioDTO.Modified_By = this.ObjUserDetails.Emp_No;
      this.objPortfolioDTO.Created_By = this.ObjUserDetails.Emp_No;
    }
    return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfolio", objFromComp);
    // .subscribe(data => {
    //   this.objPortfolioDTO = data as PortfolioDTO;
    //   // this.getDocTypeData();
    // });

  }
  //Get Portfolio
  GetPortfolio() {
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolio", this.objPortfolioDTO)
  }
  //Get Companies
  GetCompanies() {
    return this.http.post(this.rootUrl + "TestAPI/NewGetCompanies", this.obj_CompanyDTO)
  }
  LoginCredentials(objLoginDetails) {

    return this.http.post(this.rootUrl + "TestAPI/NewGetLoginDetails", objLoginDetails);
    // .subscribe(data => {
    //   this.User_Details = data as LoginDTO[];
    //   alert("Second :" + JSON.stringify(this.User_Details));
    // });
  }
  NewGetUserDetails(UserName) {
    this.userDTO.UserName = UserName;
    return this.http.post(this.rootUrl + "TestAPI/NewGetUserDetails", this.userDTO).
      subscribe(
        (data) => {
          this.user_DetailList = data as UserDetailsDTO[]
          this.EmpNo = data[0]['Emp_No'].replace(/\s/g, "");
          this.EmpCompNo = data[0]['Emp_Comp_No'].replace(/\s/g, "");
          this.SystemRole = data[0]['Emp_SystemRole'];
        });
  }
  GetPortfolioByEmployee() {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioByEmployee", this.ObjUserDetails)
    // .subscribe(
    //   (data) => {
    //     this.Portfolio_List = data as PortfolioDTO[];
    //     console.log("PortfolioList------>", this.Portfolio_List);
    //   });
  }
  SharePortfolio(_ObjShare: Shareportfolio_DTO) {
    console.log("Obj Share---->", _ObjShare);
    return this.http.post(this.rootUrl + "TestAPI/NewInsertUpdateSharePortfolio", _ObjShare)
      .subscribe(data => {
        this._ObjSharePortfolio = data as Shareportfolio_DTO;
      });
  }
  GetPreferences(empId, pid) {
    this._ObjSharePortfolio.EmployeeId = empId;
    this._ObjSharePortfolio.Portfolio_ID = pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetPreferencesByEmployeeId", this._ObjSharePortfolio)
  }
  GetShareDetailsBy_PId(pid) {
    this._ObjSharePortfolio.Portfolio_ID = pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetShareDetailsByPortfolio_ID", this._ObjSharePortfolio)
  }
  GetStatusByPortfolioId(pid) {
    this.ObjStatusDTO.Portfolio_ID = pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetStatus", this._ObjSharePortfolio)
  }
  GetPortfolioStatus(objStatus: StatusDTO) {

    this.ObjStatusDTO.Emp_No = objStatus.Emp_No;
    this.ObjStatusDTO.SelectedEmployee = objStatus.SelectedEmployee;
    this.ObjStatusDTO.SelectedCompany = objStatus.SelectedCompany;
    this.ObjStatusDTO.SelectedStatus = objStatus.SelectedStatus;

    this.ObjStatusDTO.PageNumber = objStatus.PageNumber;
    this.ObjStatusDTO.RowsOfPage = 30;
    this.ObjStatusDTO.SearchText = objStatus.SearchText;

    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioStatusColor", this.ObjStatusDTO)
  }
  // GetPortfolioStatus_For_Filter(objStatus: StatusDTO) {
  //   this.ObjStatusDTO.Emp_No = objStatus.Emp_No;
  //   this.ObjStatusDTO.SelectedEmployee = objStatus.SelectedEmployee;
  //   this.ObjStatusDTO.SelectedCompany = objStatus.SelectedCompany;
  //   this.ObjStatusDTO.SelectedStatus = objStatus.SelectedStatus;
  //   debugger
  //   return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioStatusColor", this.ObjStatusDTO);
  // }
  GetActivities(Emp_No) {
    this.ObjNotificationDto.Emp_No = Emp_No;
    return this.http.post(this.rootUrl + "Notification/NewGetNotificationActivities", this.ObjNotificationDto)
  }

  SetFavourite_Service(portfolioId, isfav, empId) {
    this.ObjStatusDTO.Portfolio_ID = portfolioId;
    this.ObjStatusDTO.IsFavourite = isfav;
    this.ObjStatusDTO.Emp_No = empId;
    return this.http.post(this.rootUrl + "TestAPI/NewPortfolioIsFavourite", this.ObjStatusDTO)
  }
  Portfolio_Rename(PortName, portfolioId) {

    this.ObjStatusDTO.Portfolio_ID = portfolioId;
    this.ObjStatusDTO.Portfolio_Name = PortName;
    return this.http.post(this.rootUrl + "TestAPI/NewPortfolioRenamed", this.ObjStatusDTO)
  }
  Portfolio_ShareUsersDelete(pid, empId, shareby) {

    this.objPortfolioDTO.Portfolio_ID = pid;
    this.objPortfolioDTO.Shared_To = empId;
    this.objPortfolioDTO.SharedbyEmpNo = shareby;
    return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolioShareUsers", this.objPortfolioDTO)
  }

  _Chart_Percentage(pid) {
    this._ObjChartDTO.PortfolioId = pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetChartDetails", this._ObjChartDTO);
    //this.clear3();
  }

  ObjBarChartDTO: BarChartDTO;
  _BarChart(pid, empNo) {
    this.ObjBarChartDTO.PortfolioId = pid;
    this.ObjBarChartDTO.Emp_No = empNo;
    // this._ObjChartDTO.Employee=empId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetBarChart", this.ObjBarChartDTO);
    //this.clearSession();
  }
  // Project Info 
  ObjSubTaskDTO: SubTaskDTO;
  SubTaskDetailsService(prjCode) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO.Emp_No= EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewSubTaskDetails", this.ObjSubTaskDTO);
  }
  // New Subtask Page
  SubTaskDetailsService_ToDo_Page(prjCode, compCode) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    this.ObjSubTaskDTO.Comp_No = compCode;

    return this.http.post(this.rootUrl + "TestAPI/NewSubTaskDetails", this.ObjSubTaskDTO);
  }
  SubTaskStatusCheck(Project_Code) {
    this.ObjSubTaskDTO.Project_Code = Project_Code;


    return this.http.post(this.rootUrl + "Notification/NewGetSubtaskStatusCheck", this.ObjSubTaskDTO);
  }
  objColumnChartDTO: ColumnChartDTO;
  ColumnChartData(emp) {
    //alert(emp);
    this.objColumnChartDTO.Emp_No = emp;
    return this.http.post(this.rootUrl + "TestAPI/NewColumnChart", this.objColumnChartDTO);
  }
  DARGraphCalculations_Json(Pcode) {
    //alert(emp);
    this.objColumnChartDTO.ProjectCode = Pcode;
    return this.http.post(this.rootUrl + "TestAPI/NewDARGraphCalculations_Json", this.objColumnChartDTO);
  }
  objDropdownsDTO: DropdownDTO;
  GetDropDownsData(obj: DropdownDTO) {
    this.objDropdownsDTO.EmpNo = obj.EmpNo;
    this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
    this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
    this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
    this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
    this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsData", this.objDropdownsDTO);
  }
  GetDropDownsData_ForSummary(obj: DropdownDTO) {
    this.objDropdownsDTO.EmpNo = obj.EmpNo;
    this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
    this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
    this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
    this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
    //this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsDataForSummary", this.objDropdownsDTO);
  }
  clearSession(): void {
    localStorage.clear();
  }
  DeleteProject(proj_Id, port_id, PrjCode, proj_Name, createdBy, deletedBy) {
    debugger
    this.objPortfolioDTO.Portfolio_ID = port_id;
    this.objPortfolioDTO.Project_ID = proj_Id;

    this.objPortfolioDTO.Project_Code = PrjCode;
    this.objPortfolioDTO.Project_Name = proj_Name;
    this.objPortfolioDTO.Created_By = createdBy;
    this.objPortfolioDTO.Deleted_By = deletedBy;

    return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolioProjects", this.objPortfolioDTO)
  }
  _DeletePortfolios(pid, portName, createdBy, createdDT, deletedBy, ProjCount, status) {

    this.objPortfolioDTO.Portfolio_ID = pid;
    this.objPortfolioDTO.Portfolio_Name = portName;
    this.objPortfolioDTO.Created_By = createdBy;
    this.objPortfolioDTO.Created_DT = createdDT;
    this.objPortfolioDTO.Deleted_By = deletedBy;
    this.objPortfolioDTO.ProjectsCount = ProjCount;
    this.objPortfolioDTO.Status = status;

    return this.http.post(this.rootUrl + "TestAPI/NewDeletePortfolio", this.objPortfolioDTO);
  }
  _GetDashboardSummaryCount(Emp_No: string) {
    this.ObjNotificationDto.Emp_No = Emp_No;
    return this.http.post(this.rootUrl + "Notification/NewGetDashboardSummaryCount", this.ObjNotificationDto);
  }
  _GetCompletedProjects(objDTO: CompletedProjectsDTO) {

    this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
    this._ObjCompletedProj.Mode = objDTO.Mode;
    this._ObjCompletedProj.PageNumber = objDTO.PageNumber;

    this._ObjCompletedProj.SelectedBlock_No = objDTO.SelectedBlock_No;
    this._ObjCompletedProj.SelectedStatus = objDTO.SelectedStatus;
    this._ObjCompletedProj.SelectedEmp_No = objDTO.SelectedEmp_No;
    this._ObjCompletedProj.CategoryId = objDTO.CategoryId;
    this._ObjCompletedProj.Filter = objDTO.Filter;
    this._ObjCompletedProj.Project_SearchText = objDTO.Project_SearchText;
    return this.http.post(this.rootUrl + "Notification/NewGetCompletedProjects", this._ObjCompletedProj);
  }

  _GetCalendarProjects(empNo: string) {
    this._ObjCompletedProj.Emp_No = empNo;
    return this.http.post(this.rootUrl + "Notification/NewGetCalendarProjects", this._ObjCompletedProj);
  }
  _GetDARAchievements(projectCode: string) {
    this._objDARAchievement.project_code = projectCode;
    return this.http.post(this.rootUrl + "Notification/NewGetDARAchievement", this._objDARAchievement);
  }

  _GetDARbyMasterCode(MasterCode: string) {
    this.ObjSubTaskDTO.MasterCode = MasterCode;
    return this.http.post(this.rootUrl + "TestAPI/DARDetailsByMasterCode", this.ObjSubTaskDTO);
  }

  _GetNewProjectCode(obj) {
    this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
    return this.http.post(this.rootUrl + "Notification/GenerateNewProjectCode", this.ObjSubTaskDTO);
  }

  _InsertNewSubtask(data) {
    // let _fullname = localStorage.getItem('UserfullName');
    // this.ObjSubTaskDTO.AssignId = obj.AssignId;
    // this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
    // // this.ObjSubTaskDTO.SubTask_ProjectCode = obj.SubTask_ProjectCode;
    // this.ObjSubTaskDTO.SubProject_Name = obj.SubProject_Name;
    // this.ObjSubTaskDTO.ProjectBlock = obj.ProjectBlock;

    // this.ObjSubTaskDTO.SubtaskDescription = obj.SubtaskDescription;
    // this.ObjSubTaskDTO.StartDate = obj.StartDate;
    // this.ObjSubTaskDTO.SubProject_DeadLine = obj.SubProject_DeadLine;
    // this.ObjSubTaskDTO.Duration = obj.Duration;
    // this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
    // this.ObjSubTaskDTO.EmployeeName = _fullname;
    // this.ObjSubTaskDTO.Comp_No = obj.Comp_No;
    // this.ObjSubTaskDTO.Team_Res = obj.Team_Res;
    // this.ObjSubTaskDTO.Team_Autho = obj.Team_Autho;
    // this.ObjSubTaskDTO.Team_Coor = obj.Team_Coor;
    // this.ObjSubTaskDTO.Team_Informer = obj.Team_Informer;
    // this.ObjSubTaskDTO.Team_Support = obj.Team_Support;
    // this.ObjSubTaskDTO.Project_Owner = obj.Project_Owner;
    // this.ObjSubTaskDTO.AssignTo = obj.AssignTo;
    // this.ObjSubTaskDTO.Remarks = obj.Remarks;
    // this.ObjSubTaskDTO.Attachments = obj.Attachments;
    return this.http.post(this.rootUrl + "Notification/NewInsertSubTaskByProjectCode", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
    //Notification/NewInsertSubTaskByProjectCode


  }
  // _UpdateMainProjectByProjectCode(objsubtask) {
  //   this.ObjSubTaskDTO.MasterCode = objsubtask.MasterCode;
  //   this.ObjSubTaskDTO.Attachments = objsubtask.Attachments;
  //   this.ObjSubTaskDTO.Attachments2 = objsubtask.Attachments2;
  //   this.ObjSubTaskDTO.Remarks = objsubtask.Remarks;
  //   return this.http.post(this.rootUrl + "Notification/UploadToAzureAsyn", this.ObjSubTaskDTO);
  // }

  _fileuploadService(data) {
    return this.http.post(this.rootUrl + "Notification/UpdateMainProject_ByProjectCode", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }
  _UpdateSubtaskByProjectCode(fd) {
    // this.ObjSubTaskDTO.MasterCode = objsubtask.MasterCode;
    // this.ObjSubTaskDTO.SubTask_ProjectCode = objsubtask.SubTask_ProjectCode;
    // this.ObjSubTaskDTO.Attachments = objsubtask.Attachments;
    // this.ObjSubTaskDTO.Remarks = objsubtask.Remarks;
    return this.http.post(this.rootUrl + "Notification/NewUpdateSubTaskByProjectCode", fd, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }
  _InsertOnlyTaskServie(_ObjAssigntaskDTO) {

    this._ObjAssigntaskDTO.TypeOfTask = _ObjAssigntaskDTO.TypeOfTask;
    this._ObjAssigntaskDTO.CreatedBy = localStorage.getItem('EmpNo');
    this._ObjAssigntaskDTO.ProjectType = _ObjAssigntaskDTO.ProjectType;
    this._ObjAssigntaskDTO.TaskName = _ObjAssigntaskDTO.TaskName;
    this._ObjAssigntaskDTO.TaskDescription = _ObjAssigntaskDTO.TaskDescription;
    this._ObjAssigntaskDTO.AssignTo = _ObjAssigntaskDTO.AssignTo;
    this._ObjAssigntaskDTO.StartDate = _ObjAssigntaskDTO.StartDate;
    this._ObjAssigntaskDTO.EndDate = _ObjAssigntaskDTO.EndDate;
    this._ObjAssigntaskDTO.ProjectDays = _ObjAssigntaskDTO.ProjectDays;
    this._ObjAssigntaskDTO.SubmissionType = _ObjAssigntaskDTO.SubmissionType;
    this._ObjAssigntaskDTO.AssignId = _ObjAssigntaskDTO.AssignId;
    this._ObjAssigntaskDTO.CategoryName = _ObjAssigntaskDTO.CategoryName;
    this._ObjAssigntaskDTO.CategoryId = _ObjAssigntaskDTO.CategoryId;
    this._ObjAssigntaskDTO.Remarks = _ObjAssigntaskDTO.Remarks;
    this._ObjAssigntaskDTO.Reference = _ObjAssigntaskDTO.Reference;

    return this.http.post(this.rootUrl + "Notification/NewInsertOnlyTask", this._ObjAssigntaskDTO);
  }

  _InsertAssignTaskServie(fd) {
    return this.http.post(this.rootUrl + "Notification/NewInsertAssignTask", fd);
  }

  ObjCategoryDTO: CategoryDTO;
  _CategoryRenameDelete(obj) {
    this.ObjCategoryDTO.Mode = obj.Mode;
    this.ObjCategoryDTO.CategoryId = obj.CategoryId;
    this.ObjCategoryDTO.CategoryName = obj.CategoryName;
    this.ObjCategoryDTO.CurrentUser = obj.CurrentUser;
    return this.http.post(this.rootUrl + "Category/NewCategoryRenameDelete", this.ObjCategoryDTO);
  }

  _ProjectRenameService(id, pname, Desc, Currentuser, Allocated) {
    this.ObjDto.Project_Id = id;
    this.ObjDto.Project_Name = pname;
    this.ObjDto.Project_Description = Desc;
    this.ObjDto.Emp_No = Currentuser;
    this.ObjDto.Duration = Allocated;
    return this.http.post(this.rootUrl + "Category/NewProjectRename", this.ObjDto);
  }




  SharingDataService(obj) {
    return obj;
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  Mode: string;
  _setMessage(mode) {
    this.Mode = mode;
  }
  _getMessage() {
    return this.Mode;
  }

}
