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
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthenticationDTO } from '../_Models/authentication-dto';
import { ApprovalDTO } from '../_Models/approval-dto';
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
  _ObjProjectDTO: ProjectDetailsDTO
  ObjStatusDTO: StatusDTO;
  ObjNotificationDto: NotificationActivityDTO;
  _ObjChartDTO: ChartDTO;
  _ObjCompletedProj: CompletedProjectsDTO;
  _objDARAchievement: DarDTO;
  _ObjAssigntaskDTO: AssigntaskDTO;
  _userobj: AuthenticationDTO;
  aprvDtoObj:ApprovalDTO;

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
    this._ObjProjectDTO = new ProjectDetailsDTO();
    this._userobj = new AuthenticationDTO();
    this.aprvDtoObj= new ApprovalDTO();
  }
  readonly rootUrl = this.commonUrl.apiurl;
  readonly rootUrlcore = this.commonUrl.apiurlcore;

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


  UpdateRestorePortfolioProjects(proj_Id,pid){
    this.objPortfolioDTO.Project_ID = proj_Id;
    this.objPortfolioDTO.Portfolio_ID = pid;
    this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "TestAPI/NewUpdateRestorePortfolioProjects", this.objPortfolioDTO)
  }



  async getSasUrl(filePath: string, expiryTime: Date): Promise<string> {
    const expiryTimeString = expiryTime.toISOString(); // Convert to UTC string
    const response = await this.http.get<{ sasUrl: string }>(
      `${this.rootUrlcore}Azure/NewGenerateSASTokenUrl?filePath=${encodeURIComponent(filePath)}&expiryTime=${expiryTimeString}`
    ).toPromise();
   
    return response.sasUrl;
  }


  GetPortfoliosBy_ProjectId(pid) {
    this.objPortfolioDTO.Project_Code = pid;
    this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfoliosBy_ProjectId", this.objPortfolioDTO)
  }

  GetPortfoliosForAssignTask() {
    this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfoliosForAssignTask", this.objPortfolioDTO)
  }

  GetTotalPortfoliosBy_Employeeid() {
    this.objPortfolioDTO.Emp_No = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "TestAPI/NewGetTotalPortfoliosofEmployee", this.objPortfolioDTO)
  }


  GetProjectsByUserName_Service(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
    this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
    this.ObjUserDetails.SelectedCompany = obj.SelectedCompany;
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
    this.ObjUserDetails.SelectedCompany = obj.SelectedCompany;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    this.ObjUserDetails.ActiveStatus = obj.ActiveStatus;
    this.ObjUserDetails.startdate=obj.startdate;
    this.ObjUserDetails.enddate=obj.enddate;
    //this.ObjUserDetails.PortfolioId = obj.PortfolioId;

    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByUserName_ForSummary", this.ObjUserDetails);
  }
  GetProjectsByOwner_Service_ForSummary(obj: UserDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjUserDetails.Emp_No = EmpNo;
    this.ObjUserDetails.SelectedBlock_No = obj.SelectedBlock_No;
    this.ObjUserDetails.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjUserDetails.SelectedStatus = obj.SelectedStatus;
    this.ObjUserDetails.SelectedCompany = obj.SelectedCompany;
    this.ObjUserDetails.PageNumber = obj.PageNumber;
    this.ObjUserDetails.PageSize = obj.PageSize;
    this.ObjUserDetails.SearchText = obj.SearchText;
    this.ObjUserDetails.ActiveStatus = obj.ActiveStatus;
    this.ObjUserDetails.startdate=obj.startdate;
    this.ObjUserDetails.enddate=obj.enddate;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectDetailsByOwner_ForSummary", this.ObjUserDetails);

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
    console.log(objFromComp.SelectedProjects,"home portfoli")
    return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfolio", objFromComp);
    // .subscribe(data => {
    //   this.objPortfolioDTO = data as PortfolioDTO;
    //   // this.getDocTypeData();
    // });

  }



  createPortfolioOfProjects(ob:PortfolioDTO) {

    const _objPortfolioDTO = new PortfolioDTO();
    _objPortfolioDTO.Created_By = ob.Created_By;
    _objPortfolioDTO.Modified_By = ob.Modified_By;
    _objPortfolioDTO.Portfolio_ID = ob.Portfolio_ID;
    _objPortfolioDTO.Portfolio_Name = ob.Portfolio_Name;
    _objPortfolioDTO.SelectedProjects = ob.SelectedProjects;
    console.log(ob.SelectedProjects,"createPortfolioOfProjects")
    return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfolio", _objPortfolioDTO);
  }




  InsertPortfolioIdsByProjectCode(objFromComp: PortfolioDTO) {
    this.objPortfolioDTO.SelectedPortIdsJson = objFromComp.SelectedPortIdsJson;
    this.objPortfolioDTO.Project_Code = objFromComp.Project_Code;
    this.objPortfolioDTO.Emp_No = objFromComp.Emp_No;
    this.objPortfolioDTO.Created_By = objFromComp.Emp_No;
    this.objPortfolioDTO.Modified_By = objFromComp.Emp_No;

    return this.http.post(this.rootUrl + "/TestAPI/NewInsertPortfoliosByProjectCode", this.objPortfolioDTO);

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

  login(uobjLoginDetails) { 
    this._userobj.userId = uobjLoginDetails.UserName;
    this._userobj.OldPassWord = uobjLoginDetails.Password;
    return this.http.post<any>('https://cswebapps.com/dmscoretestapi/api/Login/StreamLoginAPI', this._userobj);
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
    return this.http.post(this.rootUrl + "TestAPI/NewInsertUpdateSharePortfolio", _ObjShare);
  }
  GetPreferences(empId, pid) {
    this._ObjSharePortfolio.EmployeeId = empId;
    this._ObjSharePortfolio.Portfolio_ID = pid;
    return this.http.post(this.rootUrl + "TestAPI/NewGetPreferencesByEmployeeId", this._ObjSharePortfolio);
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
    this.ObjStatusDTO.RowsOfPage = 32;
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

  GetDashboardnotifications(obj: NotificationActivityDTO) {
    this.ObjNotificationDto.Emp_No = obj.Emp_No;
    return this.http.post(this.rootUrl + "Notification/NewGetDashboardNotifications", this.ObjNotificationDto)
  }

  GetHierarchyofOwnerforMoredetails(empno, projcode) {
    this._ObjProjectDTO.Emp_No = empno;
    this._ObjProjectDTO.Project_Code = projcode;
    return this.http.post(this.rootUrl + "Notification/NewGetHierarchyofOwnerforMoredetails", this._ObjProjectDTO)
  }

  GetViewAllDashboardnotifications(obj: NotificationActivityDTO) {  debugger
    this.ObjNotificationDto.Emp_No = obj.Emp_No;
    this.ObjNotificationDto.PageNumber = obj.PageNumber;
    this.ObjNotificationDto.PageSize = obj.PageSize;
    this.ObjNotificationDto.SelectedType = obj.SelectedType;
    this.ObjNotificationDto.SelectedRequest = obj.SelectedRequest;
    this.ObjNotificationDto.SelectedStatus = obj.SelectedStatus;
    this.ObjNotificationDto.SelectedCompany= obj.SelectedCompany;
    this.ObjNotificationDto.SelectedEmp_No = obj.SelectedEmp_No;
    this.ObjNotificationDto.SearchText = obj.SearchText;
    this.ObjNotificationDto.sendtype = obj.sendtype;

    return this.http.post(this.rootUrl + "Notification/NewGetViewAllNotifications", this.ObjNotificationDto)
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

  GetRACISandNonRACISEmployeesforMoredetails(prjCode,empno) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    this.ObjSubTaskDTO.Emp_No = empno;
    console.log("---->",this.rootUrl + "TestAPI/NewGetRACISandNonRACISEmployees");
    return this.http.post(this.rootUrl + "TestAPI/NewGetRACISandNonRACISEmployees", this.ObjSubTaskDTO);
  }

  GetHierarchydropdownforMoredetails(empno) {
    this.ObjSubTaskDTO.Emp_No = empno;
    return this.http.post(this.rootUrl + "TestAPI/NewGetHierarchydropdownformoredetails", this.ObjSubTaskDTO);
  }

  SubTaskDetailsService(prjCode) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO.Emp_No = EmpNo;
    return this.http.post(this.rootUrl + "TestAPI/NewSubTaskDetails", this.ObjSubTaskDTO);
  }


  NewProjectService(prjCode){
     this.ObjSubTaskDTO.Project_Code=prjCode;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectPeople", this.ObjSubTaskDTO);
   }






   NewActivityService(prjCode){
    this.ObjSubTaskDTO.Project_Code=prjCode
    return this.http.post(this.rootUrl + "ApprovalAPI/NewGetProjectActivity",this.ObjSubTaskDTO);
   }

  getPortfolios(prjCode) {
    let EmpNo = localStorage.getItem('EmpNo');
    const body={
      Emp_No:EmpNo,
      Project_Code:prjCode
    };
    return this.http.post(this.rootUrl + "TestAPI/NewGetPortfolioDetails",body);
  }



  NewSubTaskDetailsService(prjCode) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    return this.http.post(this.rootUrl + "TestAPI/NewGetProjectInfoDetails", this.ObjSubTaskDTO);
  }

  // New Subtask Page
  SubTaskDetailsService_ToDo_Page(prjCode, compCode, empno) {
    this.ObjSubTaskDTO.Project_Code = prjCode;
    this.ObjSubTaskDTO.Comp_No = compCode;
    this.ObjSubTaskDTO.Emp_No = empno;
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
    this.objDropdownsDTO.SelectedCompany = obj.SelectedCompany;
    this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
    this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsData", this.objDropdownsDTO);
  }
  GetDropDownsData_ForSummary(obj: DropdownDTO) {
    this.objDropdownsDTO.EmpNo = obj.EmpNo;
    this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
    this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
    this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
    this.objDropdownsDTO.SelectedCompany = obj.SelectedCompany;
    this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
    this.objDropdownsDTO.ActiveStatus = obj.ActiveStatus;

    //this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsDataForSummary", this.objDropdownsDTO);
  }
  GetDropDownsOwnerData_ForSummary(obj: DropdownDTO) {
    this.objDropdownsDTO.EmpNo = obj.EmpNo;
    this.objDropdownsDTO.Selected_ProjectType = obj.Selected_ProjectType;
    this.objDropdownsDTO.Selected_Status = obj.Selected_Status;
    this.objDropdownsDTO.SelectedEmp_No = obj.SelectedEmp_No;
    this.objDropdownsDTO.SelectedCompany = obj.SelectedCompany;
    this.objDropdownsDTO.Selected_SearchText = obj.Selected_SearchText;
    this.objDropdownsDTO.ActiveStatus = obj.ActiveStatus;

    //this.objDropdownsDTO.PortfolioId = obj.PortfolioId;
    return this.http.post(this.rootUrl + "TestAPI/NewGetDropdownsOwnerDataForSummary", this.objDropdownsDTO);
  }
  clearSession(): void {
    localStorage.clear();
  }
  DeleteProject(proj_Id, port_id, PrjCode, proj_Name, createdBy, deletedBy) {
    // debugger
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


  NewDashboardPortfolio(Emp_No: string){
    this.ObjSubTaskDTO.Emp_No = Emp_No
    return this.http.post(this.rootUrl + "TestAPI/NewGetDashboardPortfolios", this.ObjSubTaskDTO);
  }

  NewGetDashboardTimelineStatus(Emp_No: string){
    this.ObjSubTaskDTO.Emp_No = Emp_No
    return this.http.post(this.rootUrl + "TestAPI/NewGetDashboardTimelineStatus", this.ObjSubTaskDTO);
  }


  GetEmployeePerformance(Emp_No: string){
    this.ObjSubTaskDTO.Emp_No = Emp_No
    return this.http.post(this.rootUrl + "TestAPI/NewGetEmployeePerformance", this.ObjSubTaskDTO);
  }



  _GetCompletedProjects(objDTO: CompletedProjectsDTO) {

    this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
    this._ObjCompletedProj.Mode = objDTO.Mode;
    this._ObjCompletedProj.PageNumber = objDTO.PageNumber;
    this._ObjCompletedProj.Agenda_id=objDTO.Agenda_id;
    this._ObjCompletedProj.SelectedBlock_No = objDTO.SelectedBlock_No;
    this._ObjCompletedProj.SelectedStatus = objDTO.SelectedStatus;
    this._ObjCompletedProj.SelectedEmp_No = objDTO.SelectedEmp_No;
    this._ObjCompletedProj.CategoryId = objDTO.CategoryId;
    this._ObjCompletedProj.Schedule_ID = objDTO.Schedule_ID;
    this._ObjCompletedProj.Agenda_Id = objDTO.Agenda_Id;
    this._ObjCompletedProj.Filter = objDTO.Filter;
    this._ObjCompletedProj.Project_SearchText = objDTO.Project_SearchText;
    console.log(this._ObjCompletedProj,'_ObjCompletedProj')
    return this.http.post(this.rootUrl + "Notification/NewGetCompletedProjects", this._ObjCompletedProj);
  }


  _GetCategoryCountforRunway(objDTO: CompletedProjectsDTO) {

    this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
    return this.http.post(this.rootUrl + "Notification/NewGetCategoryCountforRunway", this._ObjCompletedProj);
  }

  _GetRunwayCatId(EmpID) {
    this._ObjCompletedProj.Emp_No = EmpID;
    return this.http.post(this.rootUrl + "Notification/NewGetRunwayCatId", this._ObjCompletedProj);
  }


  _GetAssignedProjects(objDTO: CompletedProjectsDTO) {

    this._ObjCompletedProj.Emp_No = objDTO.Emp_No;
    this._ObjCompletedProj.Type = objDTO.Type;
    this._ObjCompletedProj.PageNumber = objDTO.PageNumber;
    this._ObjCompletedProj.RowsOfPage = objDTO.RowsOfPage;
    this._ObjCompletedProj.SelectedBlock_No = objDTO.SelectedBlock_No;
    this._ObjCompletedProj.SelectedStatus = objDTO.SelectedStatus;
    this._ObjCompletedProj.SelectedEmp_No = objDTO.SelectedEmp_No;
    this._ObjCompletedProj.Project_SearchText = objDTO.Project_SearchText;
    return this.http.post(this.rootUrl + "Notification/NewGetAssignedProjects", this._ObjCompletedProj);
  }

  _GetCalendarProjects(empNo: string) {
    this._ObjCompletedProj.Emp_No = empNo;
    return this.http.post(this.rootUrl + "Notification/NewGetCalendarProjects", this._ObjCompletedProj);
  }
  _GetDARAchievements(projectCode: string) {
    this._objDARAchievement.project_code = projectCode;
    return this.http.post(this.rootUrl + "Notification/NewGetDARAchievement", this._objDARAchievement);
  }

  _GetDARbyMasterCode(obj: SubTaskDTO) {
    this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
    this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
    this.ObjSubTaskDTO.PageSize = obj.PageSize;
    return this.http.post(this.rootUrl + "TestAPI/NewDARDetailsByMasterCode", this.ObjSubTaskDTO);
  }
  _GetMeetingList(obj: SubTaskDTO) {
    this.ObjSubTaskDTO.Project_Code = obj.Project_Code;
    this.ObjSubTaskDTO.startdate = obj.startdate;
    this.ObjSubTaskDTO.enddate = obj.enddate;
    return this.http.post(this.rootUrl + "TestAPI/NewMeeting_Viewsinmores", this.ObjSubTaskDTO);
  }


  _GetMeetingListportfolio(obj: SubTaskDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO.portfolio_id = obj.portfolio_id;
    this.ObjSubTaskDTO.Emp_No = EmpNo;
    this.ObjSubTaskDTO.startdate = obj.startdate;
    this.ObjSubTaskDTO.enddate = obj.enddate;
    return this.http.post(this.rootUrl + "TestAPI/NewMeeting_ViewsinPortfolio", this.ObjSubTaskDTO);
  }

  _GetUserName(empno) {
    this.ObjSubTaskDTO.Emp_No = empno;
    return this.http.post(this.rootUrl + "TestAPI/NewGetUserName", this.ObjSubTaskDTO);
  }

  _GetTimelineActivity(obj: SubTaskDTO) {
    // let EmpNo = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
    this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
    this.ObjSubTaskDTO.PageSize = obj.PageSize;
    this.ObjSubTaskDTO.sort = obj.sort;
    this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
    this.ObjSubTaskDTO.End_Date = obj.End_Date;

    return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineActivity", this.ObjSubTaskDTO);
  }

  _GetTimelineActivityforRACIS(obj: SubTaskDTO) {
    // let EmpNo = localStorage.getItem('EmpNo');
    this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
    this.ObjSubTaskDTO.PageNumber = obj.PageNumber;
    this.ObjSubTaskDTO.PageSize = obj.PageSize;
    this.ObjSubTaskDTO.sort = obj.sort;
    this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
    this.ObjSubTaskDTO.End_Date = obj.End_Date;
    this.ObjSubTaskDTO.selected_emp = obj.selected_emp;

    return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineActivityforRACIS", this.ObjSubTaskDTO);
  }

  _GetTimelineDurationforRACIS(obj: SubTaskDTO) {
    this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
    this.ObjSubTaskDTO.sort = obj.sort;
    this.ObjSubTaskDTO.Start_Date = obj.Start_Date;
    this.ObjSubTaskDTO.End_Date = obj.End_Date;
    this.ObjSubTaskDTO.selected_emp = obj.selected_emp;
    return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineDurationforRACIS", this.ObjSubTaskDTO);
  }

  _GetTimelineProjects(obj: SubTaskDTO) {
    this.ObjSubTaskDTO.Emp_No = obj.Emp_No;
    this.ObjSubTaskDTO.ProjectBlock = obj.ProjectBlock;
    this.ObjSubTaskDTO.Project_Code = obj.Project_Code;
    return this.http.post(this.rootUrl + "TestAPI/NewGetTimelineProjects", this.ObjSubTaskDTO);
  }

  autoRefresh(interval: number): Observable<any> {
    return new Observable<any>(observer => {
      setInterval(() => {
        this._GetTimelineActivity(this.ObjSubTaskDTO).subscribe(data => {
          observer.next(data);
        });
      }, interval);
    });
  }

  _GetNewProjectCode(obj) {
    this.ObjSubTaskDTO.MasterCode = obj.MasterCode;
    return this.http.post(this.rootUrl + "Notification/NewGenerateNewProjectCode", this.ObjSubTaskDTO);
  }

  _InsertNewSubtask(data) {
    return this.http.post(this.rootUrl + "Notification/NewInsertSubTaskByProjectCode", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _InsertNewSubtaskcore(data) {
   
    return this.http.post(this.rootUrlcore + "Notification/NewInsertSubTaskByProjectCodeCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _AzureUploadNewAction(data) {
    return this.http.post(this.rootUrlcore + "Azure/NewInsertSubTaskByProjectCodeCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _fileuploadService(data) {
    return this.http.post(this.rootUrl + "Notification/UpdateMainProject_ByProjectCode", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _UpdateProjectCompleteCore(data) {
    return this.http.post(this.rootUrlcore + "Notification/NewUpdateMainProjectCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _AzureUploadProjectComplete(data) {
    return this.http.post(this.rootUrlcore + "Azure/NewUpdateprojectCompleteCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _UpdateStandardTaskSubmission(data) {
    return this.http.post(this.rootUrl + "Notification/UpdateStandardTaskSubmission", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _UpdateStandardTaskSubmissionCore(data) {
    return this.http.post(this.rootUrlcore + "Notification/NewUpdateStandardTaskSubmissionCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _AzureUploadStandardTaskComplete(data) {
    return this.http.post(this.rootUrlcore + "Azure/NewUpdateStandardTaskSubmissionCore", data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _UpdateSubtaskByProjectCode(fd) {
    return this.http.post(this.rootUrl + "Notification/NewUpdateSubTaskByProjectCode", fd, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }


  _UpdateSubtaskByProjectCodeCore(fd) {
    return this.http.post(this.rootUrlcore + "Notification/NewUpdateSubTaskByProjectCodeCore", fd, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(this.errorMgmt)
    );
  }

  _AzureUploadActionComplete(data) {
   
    return this.http.post(this.rootUrlcore + "Azure/NewUpdateActionCompleteCore", data, {
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
    this._ObjAssigntaskDTO.Schedule_ID = _ObjAssigntaskDTO.Schedule_ID;
    console.log(this._ObjAssigntaskDTO,'this._ObjAssigntaskDTO55285')
    return this.http.post(this.rootUrl + "Notification/NewInsertOnlyTask", this._ObjAssigntaskDTO);
  }

  _NewInsertOnlyTaskServie(_ObjAssigntaskDTO) {    

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
    this._ObjAssigntaskDTO.Schedule_ID = _ObjAssigntaskDTO.Schedule_ID;
    this._ObjAssigntaskDTO.Agenda_Id = _ObjAssigntaskDTO.Agenda_Id;
debugger
    return this.http.post(this.rootUrl + "Notification/NewInsertOnlyTaskwithAgenda", this._ObjAssigntaskDTO);
  }


  _InsertAssignTaskServie(fd) {
    return this.http.post(this.rootUrl + "Notification/NewInsertAssignTask", fd);
  }

  _InsertAssignTaskServieCore(fd) { 
    return this.http.post(this.rootUrlcore + "Notification/NewInsertAssignTaskCore", fd);
  }

  _AzureAssigntaskCore(fd) {
    return this.http.post(this.rootUrlcore + "Azure/NewInsertAssignTaskCore", fd);
  }


  updatePendingtask(fd) {

    return this.http.post(this.rootUrl + "Notification/NewUpdateAssignTask", fd);
  }

  updatePendingtaskCore(fd) {

    return this.http.post(this.rootUrlcore + "Notification/NewInsertAssignTaskCore", fd);
  }


  _InsertDARServie(obj: ProjectDetailsDTO) {  debugger
    this.ObjDto.Emp_No = obj.Emp_No;
    this.ObjDto.Exec_BlockName = obj.Exec_BlockName;
    this.ObjDto.Project_Name = obj.Project_Name;
    this.ObjDto.StartTime = obj.StartTime;
    this.ObjDto.EndTime = obj.EndTime;
    this.ObjDto.WorkAchieved = obj.WorkAchieved;
    this.ObjDto.date = obj.date;
    this.ObjDto.TimeCount = obj.TimeCount;
    this.ObjDto.Emp_Comp_No = obj.Emp_Comp_No;
    this.ObjDto.Project_Code = obj.Project_Code;
    this.ObjDto.Master_code = obj.Master_code;

    return this.http.post(this.rootUrl + "TestAPI/NewInsertDAR", this.ObjDto);
  }

  _InsertDownloadhistoryServie(obj: ProjectDetailsDTO) {
    this.ObjDto.Emp_No = obj.Emp_No;
    this.ObjDto.Project_Code = obj.Project_Code;
    this.ObjDto.filename = obj.filename;

    return this.http.post(this.rootUrl + "TestAPI/NewInsertDownloadHistory", this.ObjDto);
  }

  _GetDownloadhistoryServie(obj: ProjectDetailsDTO) {
    this.ObjDto.Project_Code = obj.Project_Code;
    this.ObjDto.filename = obj.filename;

    return this.http.post(this.rootUrl + "TestAPI/NewGetDownloadHistory", this.ObjDto);
  }

  _GetTimeforDar(empid, date) {
    this.ObjDto.Emp_No = empid;
    this.ObjDto.date = date;
    return this.http.post(this.rootUrl + "TestAPI/NewGetTimeForDarService", this.ObjDto);
  }

  ObjCategoryDTO: CategoryDTO;
  _CategoryRenameDelete(obj) {
    this.ObjCategoryDTO.Mode = obj.Mode;
    this.ObjCategoryDTO.CategoryId = obj.CategoryId;
    this.ObjCategoryDTO.CategoryName = obj.CategoryName;
    this.ObjCategoryDTO.CurrentUser = obj.CurrentUser;
    return this.http.post(this.rootUrl + "Category/NewCategoryRenameDelete", this.ObjCategoryDTO);
  }

  _ProjectRenameService(id, pname, Desc, Currentuser) {
    this.ObjDto.Project_Id = id;
    this.ObjDto.Project_Name = pname;
    this.ObjDto.Project_Description = Desc;
    this.ObjDto.Emp_No = Currentuser;
    return this.http.post(this.rootUrl + "Category/NewProjectRename", this.ObjDto);
  }

  _NewProjectDurationService(pcode, duration, remarks, emp_no) {
    this.ObjDto.Project_Code = pcode;
    this.ObjDto.Duration = duration;
    this.ObjDto.Emp_No = emp_no;
    this.ObjDto.Remarks = remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectDuration", this.ObjDto);
  } NewProjectChangeClient

  _NewProjectCategoryService(pcode, Empno, reportid, remarks) {
    this.ObjDto.Project_Code = pcode;
    this.ObjDto.Emp_No = Empno;
    this.ObjDto.ReportId = reportid;
    this.ObjDto.Remarks = remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectChangeCategory", this.ObjDto);
  }

  _NewProjectClientService(pcode, Empno, clientid, remarks) {
    this.ObjDto.Project_Code = pcode;
    this.ObjDto.Emp_No = Empno;
    this.ObjDto.ClientId = clientid;
    this.ObjDto.Remarks = remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectChangeClient", this.ObjDto);
  }

  _NewProjectSupportService(pcode, Empno, support, remarks) {
    this.ObjDto.Project_Code = pcode;
    this.ObjDto.Emp_No = Empno;
    this.ObjDto.Team_Support = support;
    this.ObjDto.Remarks = remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectUpdateSupport", this.ObjDto);
  }

  _NewProjectOwnerRespService(obj: ProjectDetailsDTO) {
    this.ObjDto.Project_Code = obj.Project_Code;
    this.ObjDto.Emp_No = obj.Emp_No;
    this.ObjDto.Project_Owner = obj.Project_Owner;
    this.ObjDto.Team_Res = obj.Team_Res;
    this.ObjDto.Remarks = obj.Remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectUpdateOwnerResponsible", this.ObjDto);
  }

  _ProjectDeadlineExtendService(pcode, enddate, startdate, remarks, allocated) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjDto.Emp_No = EmpNo;
    this.ObjDto.Project_Code = pcode;
    this.ObjDto.Project_EndDate = enddate;
    this.ObjDto.Project_StartDate = startdate;
    this.ObjDto.Remarks = remarks;
    this.ObjDto.Duration = allocated;
    return this.http.post(this.rootUrl + "Category/NewProjectDeadlineExtend", this.ObjDto);
  }


  _ProjectHoldService(obj: ProjectDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjDto.Emp_No = EmpNo;
    this.ObjDto.Project_Code = obj.Project_Code;
    this.ObjDto.Project_holddate = obj.Project_holddate;
    this.ObjDto.Remarks = obj.Remarks;
    return this.http.post(this.rootUrl + "Category/NewProjectHold", this.ObjDto);
  }

  GetUserMeetingcount(obj: ProjectDetailsDTO) {
    let EmpNo = localStorage.getItem('EmpNo');
    this.ObjDto.Emp_No = EmpNo;
    this.ObjDto.Project_Code = obj.Project_Code;
    return this.http.post(this.rootUrl + "Projects/NewGetUserMeetingCount", this.ObjDto);
  }




  GetEmployeeLeaveRequests(Emp_no){
    this.ObjDto.Emp_No=Emp_no
    return this.http.post(this.rootUrl+"ApprovalAPI/NewGetEmployeeLeaveRequests",this.ObjDto)
  }

  InsertNewFeatureView(Emp_no){
    this.ObjDto.Emp_No=Emp_no
    return this.http.post(this.rootUrl+"Projects/NewInsertNewFeatureView",this.ObjDto)
  }

  GetNewFeatureView(Emp_no){
    this.ObjDto.Emp_No=Emp_no
    return this.http.post(this.rootUrl+"Projects/NewGetNewFeatureView",this.ObjDto)
  }


  GetEmployeeLeaveResponses(Emp_no){
    this.ObjDto.Emp_No=Emp_no
    return this.http.post(this.rootUrl+"ApprovalAPI/NewGetEmployeeLeaveResponses",this.ObjDto)
  }

  getDeadlineCountbyProjectcode(pCode) {
    this.ObjDto.Project_Code = pCode;
    return this.http.post(this.rootUrl + "Category/NewGetDeadlineCountbyPCode", this.ObjDto);
  }

  getHoldDatebyProjectcode(pCode) {
    this.ObjDto.Project_Code = pCode;
    return this.http.post(this.rootUrl + "Category/NewGetProjectHoldDatebyPCode", this.ObjDto);
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

  PathExtention(url: string) {
    this.ObjDto.message = url;
    return this.http.post(this.rootUrl + 'Notification/NewGetPathFileExtention', this.ObjDto);
  }



  NewGetLeaveDetails(emp_no:string){
        this.aprvDtoObj.Emp_no=emp_no;
        return this.http.post(this.rootUrl+'ApprovalAPI/NewGetLeaveDetails',this.aprvDtoObj);
  }


  NewNewInsertEmployeeLeave(obj){
     this.aprvDtoObj.Emp_no=obj.Emp_no;
     this.aprvDtoObj.LeaveType=obj.LeaveType;
     this.aprvDtoObj.TripType=obj.TripType;
     this.aprvDtoObj.Type=obj.Type;
     this.aprvDtoObj.Travel=obj.Travel;
     this.aprvDtoObj.FromDate=obj.FromDate;
     this.aprvDtoObj.ToDate=obj.ToDate;
     this.aprvDtoObj.LeaveDays=obj.LeaveDays;
     this.aprvDtoObj.Remarks=obj.Remarks;
     this.aprvDtoObj.Country=obj.Country;
     this.aprvDtoObj.CountryId=obj.CountryId;
     return this.http.post(this.rootUrl+'ApprovalAPI/NewNewInsertEmployeeLeave',this.aprvDtoObj);
  }




  GetTimelineSubmissionStatus(empno:string){
       this.ObjSubTaskDTO.Emp_No=empno;
       return this.http.post(this.rootUrl+'TestAPI/NewGetTimelineSubmissionStatus',this.ObjSubTaskDTO);
  }


  NewInsertTimelineReport(empno:string,submDate:string){
    this.ObjSubTaskDTO.Emp_No=empno;
    this.ObjSubTaskDTO.submissionDate=submDate;
    return this.http.post(this.rootUrl+'ApprovalAPI/NewInsertTimelineReport',this.ObjSubTaskDTO);
  }



  NewGetEmployeePerformance(empno:string){
    this.ObjSubTaskDTO.Emp_No=empno;
    return this.http.post(this.rootUrl+'TestAPI/NewGetEmployeePerformance',this.ObjSubTaskDTO);
  }

  GetCPProjectCost(empno:string,allocatedHr:string){  
    this.ObjDto.Emp_No=empno;
    this.ObjDto.Hours=allocatedHr;
    return this.http.post('https://cswebapps.com/ProjectCostAPI/api/ProjectCost/GetCPProjectCost',this.ObjDto);
  }


  NewUpdateTimelineActivity(empno:string,recordId:number,newworkdes:string,operationType:1|2){  
     this.ObjDto.Emp_No=empno;
     this.ObjDto.id=recordId;
     this.ObjDto.flagid=operationType;  
     this.ObjDto.achievement=newworkdes;
     return this.http.post(this.rootUrl+'TestAPI/NewUpdateTimelineActivity',this.ObjDto);
  }



  NewGetTimelineInbox(obj:StatusDTO){   
    this.ObjStatusDTO.Type=obj.Type;
    this.ObjStatusDTO.Emp_No=obj.Emp_No;
    this.ObjStatusDTO.SelectedEmp_No=obj.SelectedEmp_No;
    this.ObjStatusDTO.SelectedCompany=obj.SelectedCompany;
    this.ObjStatusDTO.PageNumber=obj.PageNumber;
    this.ObjStatusDTO.RowsOfPage=obj.RowsOfPage;
    this.ObjStatusDTO.startdate=obj.startdate;
    this.ObjStatusDTO.enddate=obj.enddate; 
    return this.http.post(this.rootUrl+'TestAPI/NewGetTimelineInbox',this.ObjStatusDTO);
  }


  NewGetTimelinedropdown(obj:StatusDTO){   
    this.ObjStatusDTO.Type=obj.Type;
    this.ObjStatusDTO.EmpNo=obj.EmpNo;
    this.ObjStatusDTO.SelectedEmp_No=obj.SelectedEmp_No;
    this.ObjStatusDTO.SelectedCompany=obj.SelectedCompany;
    this.ObjStatusDTO.startdate=obj.startdate; 
    this.ObjStatusDTO.enddate=obj.enddate;
    return this.http.post(this.rootUrl+'TestAPI/NewGetTimelinedropdown',this.ObjStatusDTO);
  }



  NewGetUserTimeline(darSno:number,Empno:string,darReportDate:string){  debugger
     this.ObjStatusDTO.Sno=darSno;
     this.ObjStatusDTO.Emp_No=Empno;
     this.ObjStatusDTO.rep_date=darReportDate;
     return this.http.post(this.rootUrl+'TestAPI/NewGetUserTimeline',this.ObjStatusDTO);
  }

  NewGetPinDetails(empNo:string,type:string,portid:number|null){
     this.aprvDtoObj.Emp_No=empNo;
     this.aprvDtoObj.type=type;
     this.aprvDtoObj.portid=portid;
     return this.http.post(this.rootUrl+'Projects/NewGetPinDetails',this.aprvDtoObj);
  }
  NewGetGroups(empNo:string){
    this.aprvDtoObj.Emp_No=empNo;
    return this.http.post(this.rootUrl+'Projects/NewGetGroups',this.aprvDtoObj);
  }
  NewCreateEditGroup(obj:ApprovalDTO){
    this.aprvDtoObj.Emp_No=obj.Emp_No;
    this.aprvDtoObj.groupName=obj.groupName;
    this.aprvDtoObj.type=obj.type;
    this.aprvDtoObj.gid=obj.gid;
    return this.http.post(this.rootUrl+'Projects/NewCreateEditGroup',this.aprvDtoObj);
  }
  NewDeleteGroup(obj:ApprovalDTO){
    this.aprvDtoObj.Emp_No=obj.Emp_No;
    this.aprvDtoObj.gid=obj.gid;
    return this.http.post(this.rootUrl+'Projects/NewDeleteGroup',this.aprvDtoObj);
  }
  NewGetGroupDetails(empNo:string,groupId:number){
    this.aprvDtoObj.Emp_No=empNo;
    this.aprvDtoObj.gid=groupId;
    console.log("asdf",this.rootUrl+'Projects/NewGetGroupDetails');
    console.log("body",this.aprvDtoObj);
    return this.http.post(this.rootUrl+'Projects/NewGetGroupDetails',this.aprvDtoObj);
  }
  NewUpdateGroup(obj:ApprovalDTO){   debugger
    const grpDTOobj=new ApprovalDTO();
    grpDTOobj.Emp_No = obj.Emp_No;
    grpDTOobj.gid = obj.gid;
    grpDTOobj.type = obj.type;
    grpDTOobj.Project_Code = obj.Project_Code;
    grpDTOobj.PortfolioId = obj.PortfolioId;
    grpDTOobj.Schedule_id = obj.Schedule_id;
    return this.http.post(this.rootUrl+'Projects/NewUpdateGroup',grpDTOobj);
  }


  NewValidateGroupDetails(obj:ApprovalDTO){
    this.aprvDtoObj.Emp_No=obj.Emp_No;
    this.aprvDtoObj.Project_Code=obj.Project_Code;
    this.aprvDtoObj.PortfolioId=obj.PortfolioId;
    this.aprvDtoObj.Schedule_id =obj.Schedule_id;
    return this.http.post(this.rootUrl+'Projects/NewValidateGroupDetails',this.aprvDtoObj);
  }

}
