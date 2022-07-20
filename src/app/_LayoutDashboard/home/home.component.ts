import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { EmployeeDTO } from 'src/app/_Models/employee-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { CompanyDTO } from 'src/app/_Models/company-dto';
//import { LoginDTO } from 'src/app/_Models/login-dto';
//import { LoginComponent } from '../login/login.component';
import { ProjecttypeDTO } from 'src/app/_Models/projecttype-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { Shareportfolio_DTO } from 'src/app/_Models/shareportfolio';
import * as _ from 'underscore';
import { Router } from '@angular/router';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StatusDTO } from 'src/app/_Models/status-dto';
import { ChartDTO } from 'src/app/_Models/chart-dto';
import { BarChartDTO } from 'src/app/_Models/bar-chart-dto';
//import { LoadingBarService } from '@ngx-loading-bar/core';
//Pie - Charts-------------------
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
//Bar - Charts
//import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
//import { MatIconModule } from '@angular/material/icon';
//import {MatChipsModule} from '@angular/material/chips';
// import * as Chart from 'chart.js';
// import { find } from '@amcharts/amcharts4/.internal/core/utils/Iterator';
// import { isHidden } from '@amcharts/amcharts4/.internal/core/utils/DOM';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
// import { PaginatePipe } from 'ngx-pagination';
import { GrdFilterPipePipe } from 'src/app/Shared/Filter/grd-filter-pipe.pipe'
//import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { LinkService } from 'src/app/_Services/link.service';


//import { disableCursor } from '@fullcalendar/angular';
//import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
//import { MatPaginator } from '@angular/material/paginator/paginator';
//import { ViewChild } from '@angular/core';

//import { MatPaginator } from '@angular/material/paginator';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  isFavorite: boolean = true;
  dropdownList = [];
  ProtypeArrlist: any = [];
  selectedItems = [];
  _FilterStatusList: any;
  dropdownSettings_Status: IDropdownSettings = {};
  dropdownSettings: IDropdownSettings = {};
  dropdownSettings_Emp: IDropdownSettings = {};
  dropdownSettings_Cmp: IDropdownSettings = {};
  dropdownSettings_Stat: IDropdownSettings = {};
  dropdownSettings_Team: IDropdownSettings = {};
  dropdownsettings_Page: IDropdownSettings = {};
  _SelectedEmployees: any = [];
  _SelectedEmpIds_String: string;

  edited:boolean = false;

  ObjUserDetails: UserDetailsDTO;
  _obj: PortfolioDTO;
  ProjectTypelist: ProjecttypeDTO[];
  Search_Value: any;
  ProjectDetails_List: ProjectDetailsDTO[];
  _ProjectDataList: any = [];
  // subscription: Subscription;
  // PPro_Subscription: Subscription;
  Obj_Portfolio_DTO: PortfolioDTO;
  //objLoginDTO: LoginDTO;
  EmployeeList: EmployeeDTO[];
  Company_List: CompanyDTO[];

  PortfolioSearch: string;
  // filteredPortfolioProjects=[];
  _SearchProjects: string;
  // get searchTerm(): string {
  //   return this._SearchProjects;
  // }
  // set searchTerm(value: string) {
  //   this._SearchProjects = value;
  //   this.filteredPortfolioProjects = this.filterPortProjs(value);
  // }

  search_Type: [];
  search_status = [];
  search_Team = [];
  checkbox: boolean;
  Selected_project_List = [];
  obj = {};

  selectedRowIds: Set<number> = new Set<number>();
  //===Booleans
  submitted: boolean;
  PortfolioList: boolean;
  matCard: boolean;
  _ProjectList: boolean;
  _PortfolioListTable: boolean;
  master_checked: boolean = false;
  btn_CreatePortfolio: boolean;
  // btnAddPortfolio: string = "Add Portfolio";
  Custom_chkbxvalue: boolean;
  matprogressbar: boolean;

  p: number = 1; //Paging

  //objLoginComp: LoginComponent;
  //objUserDetails: UserDetailsDTO;
  Current_user: string;
  UserDetailList: UserDetailsDTO[];
  ProTypeselectedId: any;
  Spinnerloading = false;
  //===================//
  EmpNo: string; EmpCompNo: string; SystemRole: string
  findedDataByType: any;
  SearchByType_List = [];
  //===================//
  progressbarValue = 0;
  curSec: number = 0;
  //isLoading: boolean;
  _PortfolioList: PortfolioDTO[];
  CompanyDropdown: string;
  EmployeeDropdown: string;
  ngCompanyDropdown: any;

  ngStatusDrpDwn: any;

  PortfolioNames_List: PortfolioDTO[];
  PortfolioNested_list: [];
  txtPortName: boolean;
  _ExistingPortfolioOfProjects = [];
  _ProjectsBasedonPortfolio: any;
  _ExistingPortfolioAddedProjectsList: any;
  _SharedPortfolios: any;
  Current_user_ID: string;
  _CurrentUserFullName: string;
  _ProjectsListBy_Pid: PortfolioDTO[];
  With_Data: PortfolioDTO[];
  _PrferencesData: PortfolioDTO[];
  Teamlist = [];
  StatusList = [];

  _CompanyNo: string;
  _EmployeeId: string;
  _Preferences: string;
  _PortFolio_Namecardheader: string;
  _Pid: any;
  Share_preferences: boolean;
  preferences: any;

  _btnShareDetails: boolean;
  _ShareDetailsList: any;
  ObjSharePortfolio: Shareportfolio_DTO;
  _PreferencesList: any;
  selectedItemsList = [];
  checkedIDs = [];
  _PreferenceType: string;
  _ErrorMessage_comp: string;
  _ErrorMessage_User: string;
  _ErrorMessage_Pref: string;
  CurrentPageNo: number = 1;
  btnPrevious: boolean;
  btn_Share = true;
  btn_addProject: boolean;
  PreferenceTpye: number
  btnGetRecords: boolean;
  //Filter Projects
  ProjectTyp_value: string;
  Status_value: string;
  Emp_value: string;
  _PortProjStatus: string;
  returnUrl = 'backend/Dashboard';
  returnUrlAddPortfolio = 'CreatePortfolio'
  modal: any;
  _ListProjStat: StatusDTO[];
  _objStatusDTO: StatusDTO;
  _DistinctList = [];
  messageForEmpty: boolean;
  _ObjChartDTO: ChartDTO;
  _objDropdownDTO: DropdownDTO;

  constructor(public service: ProjectTypeService,
    private notifyService: NotificationService,
    private cdr: ChangeDetectorRef, private router: Router,
    // private loadingBar: LoadingBarService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    public _LinkService: LinkService,
    //private dataFilterPipe: GrdFilterPipePipe
  ) {
    this.ObjUserDetails = new UserDetailsDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._objStatusDTO = new StatusDTO;
    this.ObjSharePortfolio = new Shareportfolio_DTO();
    this._objDropdownDTO = new DropdownDTO();
  }

  //LoadingBar_state = this.loadingBar.useRef('http');
  Max50Char: boolean;
  todaysDate = new Date();
  //-----------Filtering Dynmic -----//
  filteredProjects = [];
  searchText: string;
  txtSearch: string;
  _ActualPortfolioList_ForShare: any;
  _ActualPListFor_All: any;
  _portfolioName: string = "";
  pageList: any;

  Companylist_Json: any;
  Statuslist_Json: any;
  Employeelist_Json: any;
  ngOnInit() {
    this._raciDetails = true;
    this.A2Z = true;
    this.Z2A = false;
    this._subtaskDiv = true;
    this.hideDropdown = true;
    this._ItemsPerpage = 30;
    this.Portfolio_CurrentPage = 1;
    this._portfolioName = '';
    this.todaysDate;
    this.Project_Graph = "Graphs"
    this.NoSharedmsg = true;
    this.Nofavmsg = true;
    this.activeClassAll = true;
    this.activeClassOwners = false;
    this.activeClassShare = false;
    this.activeClassFav = false;
    this.pieBarCharts = true;
    this.Max50Char = true;
    this.HideStatusDropdown = false;
    //this.HideProjects = false;

    // this.isLoading = false;
    this._btnShareDetails = true;
    this.messageForEmpty = true;
    this.btnGetRecords = true;
    this.PortfolioList = false;
    this._PortfolioListTable = true;
    this._ProjectList = true;
    this.Share_preferences = true;
    this.btn_CreatePortfolio = true;
    this._CurrentUserFullName = localStorage.getItem('UserfullName');
    this.Current_user = localStorage.getItem('_Currentuser');
    this.Current_user_ID = localStorage.getItem('EmpNo');
    ///alert(this.Current_user_ID)
    this.searchText = '';
    this.search_Team = [];
    this.search_Type = [];
    this.search_status = [];
    this.service.ProjectDetails_List = [];
    this.selectedItemsList = [];
    this.checkedIDs = [];
    //console.log("Login By :", sessionStorage.getItem('EmpNo'));
    this._objStatusDTO.Emp_No = this.Current_user_ID;
    this.getPortfolio_List();
  }
  NoOfRecordsPerPage: number = 0;
  NoOfPages: number = 1;
  getPortfolio_List() {
    this._objStatusDTO.PageNumber = this.Portfolio_CurrentPage;
    this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
      (data) => {
        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
        this.NoOfRecordsPerPage = this._ListProjStat.length;
        // this.AllPortfolioslist = this._ListProjStat;

        this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
        this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
        this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
        // this._ActualPortfolioList_ForShare = JSON.parse(data[0]['PortfolioList_Json']);
        // this._ActualPListFor_All = JSON.parse(data[0]['PortfolioList_Json']);

        this.countAll = data[0]['Total'];
        this.countOwners = data[0]['Owners'];
        this.countShare = data[0]['Shared'];
        this.countFav = data[0]['Favourites'];
        this.NoOfPages = data[0]['NoOfPages'];
        let shrearry: any;
        shrearry = this._ListProjStat;
        if (this._ListProjStat.length == 0) {
          this.messageForEmpty = false;
        }
        else {
          this.messageForEmpty = true;
        }
      });
  }
  // OnNext(val) {
  //   if (val == 0) {
  //     this.Portfolio_CurrentPage = this.Portfolio_CurrentPage - 1;
  //     this.getPortfolio_List();
  //   }
  //   else if (val == 1) {
  //     this.Portfolio_CurrentPage = this.Portfolio_CurrentPage + 1;
  //     this.getPortfolio_List();
  //   }
  // }
  onKeyDownEvent(event: any) {
    this.searchText = event.target.value;
    this.applyFilters();
    //console.log(event.target.value);
  }
  ServerSide_Search(value) {
    this.searchText = value;
    this.applyFilters();
    // console.log(this.searchText);
  }
  Search() {
    if (this.PortfolioSearch != "") {
      this.Portfolio_CurrentPage = 1;
      this._ListProjStat = this._ListProjStat.filter(res => {
        return res.Portfolio_Name.toLocaleLowerCase().match(this.PortfolioSearch.toLocaleLowerCase());
      });
    }
    else if (this.PortfolioSearch == "") {
      this.ngOnInit();
    }
  }
  filterProjects(searchString: string) {
    return this.un_FilteredProjects.filter(p =>
      p.Project_Name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  // filterPortProjs(searchString: string) {
  //   return this.filteredPortfolioProjects.filter(proj =>
  //     proj.Project_Name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  // }
  //Portfolio-Counts
  countAll: number;
  countOwners: number;
  countFav: number;
  countShare: number;
  //for Sorting jan
  filterList_Type = [];
  filterList_Status = [];
  filterList_Emp = [];

  _searchFilterList: any;
  public filerpipe = new GrdFilterPipePipe();
  def_filter: boolean = true;
  public filtered;

  selected_arr_Type = [];
  selected_arr_status = [];
  selected_arr_Emp = [];

  //Function Reset Filters
  resetFilters() {
    this.searchText = "";
    this.search_Type = [];
    this.Portfolio_CurrentPage = 1;
    this.edited=false;

    if (this.selectedItem_Company.length == 0) {
      this.selectedCom_String = null;
      this.checkedItems_Company = [];
    }

    if (this.selectedItem_Status.length == 0) {
      this.selectedStatus_String = null;
      this.checkedItems_Status = [];
    }

    if (this.selectedItem_Emp.length == 0) {
      this.selectedEmp_String = null;
      this.checkedItems_Emp = [];
    }
    this.applyFilters();
  }
  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Company.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0
    this.resetFilters();

  }

  StatusSelect(PortfolioProjStatus) {
    //debugger
    this._PortProjStatus = PortfolioProjStatus['StatusCountDB'];
    if (this._PortProjStatus.includes('Delay')) {
      this._PortProjStatus = 'Delay';
    }
    if (this._PortProjStatus.includes('InProcess')) {
      this._PortProjStatus = 'InProcess';
    }

    if (this._PortProjStatus.includes('Completed')) {
      this._PortProjStatus = 'Completed';
    }

    if (this._PortProjStatus.includes('Project Complete Rejected')) {
      this._PortProjStatus = 'Project Complete Rejected';
    }
    if (this._PortProjStatus.includes('Project Hold')) {
      this._PortProjStatus = 'Project Hold';
    }
    if (this._PortProjStatus.includes('New Project Rejected')) {
      this._PortProjStatus = 'New Project Rejected';
    }
    if (this._PortProjStatus.includes('New Project')) {
      this._PortProjStatus = 'New Project';
    }
    if (this._PortProjStatus.includes('Project Holded')) {
      this._PortProjStatus = 'Project Holded';
    }
    if (this._PortProjStatus.includes('Under Approval')) {
      this._PortProjStatus = 'Under Approval';
    }
    if (this._PortProjStatus.includes('Forward Under Approval')) {
      this._PortProjStatus = 'Forward Under Approval';
    }
    if (this._PortProjStatus.includes('Completion Under Approval')) {
      this._PortProjStatus = 'Completion Under Approval';
    }
    if (this._PortProjStatus.includes('Enactive Under Approval')) {
      this._PortProjStatus = 'Enactive Under Approval';
    }
    if (this._PortProjStatus.includes('Deadline Extend Under Approval')) {
      this._PortProjStatus = 'Deadline Extend Under Approval';
    }
  }
  labelInprocess() {
    this._PortProjStatus = "InProcess"
  }
  labelDelay() {
    this._PortProjStatus = "Delay";
  }
  labelCompleted() {
    this._PortProjStatus = "Completed";
  }
  labelNewProject() {
    this._PortProjStatus = "New Project";
    if (this._PortProjStatus.includes('New Project')) {
      this._PortProjStatus = 'New Project';
    }
  }
  labelRejecteds() {
    this._PortProjStatus = "Rejected";
    this._PortProjStatus.includes('Rejected');
    //this._PortProjStatus.includes('New Project Rejected');
  }

  labelUA() {
    this._PortProjStatus = "Under Approval";
    this._PortProjStatus.includes('Under Approval')
  }
  labelProjectHold() {
    this._PortProjStatus = "Project Hold";
    this._PortProjStatus.includes('Project Hold');
  }
  labelAll() {
    this._PortProjStatus = "";
  }
  StatusDeselect() {
    this._PortProjStatus = "";
  }
  totalProjs: number;
  HCountRejected: boolean;
  HCountDelay: boolean;
  HCountEnactive: boolean;
  HCountForward: boolean;
  HCountProjectHold: boolean;
  HCountInprocess: boolean;
  HCountNewProject: boolean;

  CountRejected1: number;
  CountDelay1: number;
  CountEnactive1: number;
  CountForward1: number;
  CountProjectHold1: number;
  CountInprocess1: number;
  CountNewProject1: number;

  countEmp1: number;
  countEmp2: number;
  countEmp3: number;
  countEmp4: number;
  EmpCountInFilter = [];
  TypeContInFilter = [];
  StatusCountFilter = [];
  _filtersmenu: boolean;
  checked: boolean;
  checkedItems_Status = [];
  checkedItems_Company = [];
  checkedItems_Emp = [];
  selectedItem_Status = [];
  isStatusChecked(item) {
    //debugger
    let arr = [];
    this.Statuslist_Json.forEach(element => {
      if (element.checked == true) {
        arr.push({ Status: element.Name });
        // console.log("---S--->", this.checkedItems_Status = arr)
        return this.checkedItems_Status = arr;
      }
    });
    let arr2 = [];
    this.Statuslist_Json.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Status.push(arr2);
    this.Statuslist_Json.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Status.length = 0;
        this.resetFilters();
      }
    });
    if(this.selectedItem_Company.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
    }

  }
  selectedItem_Company = [];
  isCompanychecked(item) {
    let arr = [];
    this.Companylist_Json.forEach(element => {
      if (element.checked == true) {
        arr.push({ Company: element.Name });
        // console.log("Checked Company---->", this.checkedItems_Company = arr)
        return this.checkedItems_Company = arr;
      }
    });
    let arr2 = [];
    this.Companylist_Json.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Company.push(arr2);
    // console.log("selected Item Comp--->",this.selectedItem_Company)
    this.Companylist_Json.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Company.length = 0;
        this.resetFilters();
      }
    });
    if(this.selectedItem_Company.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
    }

  }
  selectedItem_Emp = [];
  isEmpChecked(item) {
    let arr = [];
    this.Employeelist_Json.forEach(element => {
      if (element.checked == true) {
        arr.push({ Employee: element.Name });
        return this.checkedItems_Emp = arr;
      }
    });
    let arr2 = [];
    this.Employeelist_Json.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Emp.push(arr2);
    this.Employeelist_Json.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Emp.length = 0;
        this.resetFilters();
      }
    });
    if(this.selectedItem_Company.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
    }

  }
  selectedCom_String: any;
  selectedEmp_String: any;
  selectedStatus_String: any;

  //Apply Filters
  SearchbyText() {
    this.CurrentPageNo = 1;
    this.applyFilters();
  }
  public _filtersMessage: string = "";
  public _filtersMessage2: string;
  public _CurrentpageRecords: number;
  applyFilters() {
    this.selectedEmp_String = this.checkedItems_Emp.map(select => {
      return select.Employee;
    }).join(',');

    // console.log("Emp--->",this.selectedEmp_String);
    this.selectedCom_String = this.checkedItems_Company.map(select => {
      return select.Company;
    }).join(',');

    // console.log("Comp--->",this.selectedType_String);

    this.selectedStatus_String = this.checkedItems_Status.map(select => {
      return select.Status;
    }).join(',');

    //console.log("Status--->",this.selectedStatus_String);

    this._objStatusDTO.SelectedStatus = this.selectedStatus_String;
    this._objStatusDTO.SelectedEmployee = this.selectedEmp_String;
    this._objStatusDTO.SelectedCompany = this.selectedCom_String;
    this._objStatusDTO.Emp_No = this.Current_user_ID;
    this._objStatusDTO.PageNumber = 1;
    this._objStatusDTO.RowsOfPage = 30;
    this._objStatusDTO.SearchText = this.searchText;

    // this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    // this.ObjUserDetails.PageSize = 30;
    //this.ObjUserDetails.SearchText = this.searchText;
    //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
    this.service.GetPortfolioStatus(this._objStatusDTO)
      .subscribe(data => {
        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
        this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
        this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
        this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
        this.NoOfPages = data[0]['NoOfPages'];
        this.countAll = data[0]['Total'];
        console.log("total values", this.countAll);

        if (this.selectedItem_Emp.length == 0) {
          this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
        }
        else {
          this.Employeelist_Json = this.selectedItem_Emp[0];
        }
        //Type
        if (this.selectedItem_Company.length == 0) {
          this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
        }
        else {
          this.Companylist_Json = this.selectedItem_Company[0];
        }
        //Status
        if (this.selectedItem_Status.length == 0) {
          this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);

        }
        else {
          this.Statuslist_Json = this.selectedItem_Status[0];
        }


        // this.countAll = this._ListProjStat.length;

        if (this._ListProjStat.length == 0) {
          this._filtersMessage = "No Portfolio Found";
          this._filtersMessage2 = "Please use clear for clearing filters & try again";

        }
        else {
          this._filtersMessage = "";
          this._filtersMessage2 = "";
        }





      });

    //Filtering Checkbox de
    //this.getDropdownsDataFromDB();
  }
  ActualDataList: any;
  un_FilteredProjects: any = [];
  GetProjectsByUserName() {
    //this.LoadingBar_state.start();
    this.ObjUserDetails.PageNumber = this.p;
    this.ObjUserDetails.PageSize = 30;
    this.service.GetProjectsByUserName_Service(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = data;
      this.ActualDataList = data;
      this.un_FilteredProjects = this.ActualDataList;
      //console.log("ProjectList----------->", this._ProjectDataList);
      // if (this._ProjectDataList) {
      //   this.LoadingBar_state.stop();
      // }
      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
      }
      //this.CountsOf_Emp_Status_ProjectType();
    });
  }

  trackByid(index: number, item: any) {
    return item.Project_Code;
  }

  //loadrstart: any = this.LoadingBar_state.start();
  //loadrstop: any = this.LoadingBar_state.stop();
  hidetotalProjects: boolean = false;
  PortfolioName: any;
  Displayprojectlist() {

    if (this._portfolioName != "") {
      this._portfolioName = this._portfolioName.trim();
      localStorage.setItem("_PortfolioName", this._portfolioName);
      let portId: any = 0;
      localStorage.setItem('Pid', portId);

      this.service.AlreadyExistsPortfolioService(this._portfolioName).
        subscribe(data => {
          if (data['result'] == 0) {
            this.notifyService.showError("Portfolio With this Name ", "Already Exists");
            this.alreadyExists = "! Portfolio already exists with this name";
          }
          else {
            this.alreadyExists = "";
            let name: string = 'AddProjectsToPortfolio';
            var url = document.baseURI + name;
            var myurl = `${url}/${this._portfolioName}`;
            var myWindow = window.open(myurl, this._portfolioName);
            myWindow.focus();
          }
        });

      // if (this._ListProjStat != null) {
      //   this.PortfolioName = this._ListProjStat.find((x) => x.Portfolio_Name === this._portfolioName);
      // }
      // if (this.PortfolioName == undefined) {
      //   this.alreadyExists = '';
      //   let name: string = 'AddProjectsToPortfolio';
      //   var url = document.baseURI + name;
      //   var myurl = `${url}/${this._portfolioName}`;
      //   var myWindow = window.open(myurl, this._portfolioName);
      //   myWindow.focus();
      // }
      // else {
      //   this.notifyService.showError("Portfolio With this Name ", "Already Exists");
      //   this.alreadyExists = "! Portfolio already exists with this name";

      // }
    }
  }
  public _totalProjectsCount: any;
  BarChartEmp: any;
  CloseBttn() {
    this.p = 1;
    this.Share_preferences = true;
    this._ProjectList = true;
    this.PortfolioList = false;
    this.search_Team = [];
    this.search_Type = [];
    this.search_status = [];
    this.master_CheckBox();
    this._PreferencesList = [];
    this.searchText = '';
  }
  //Master Check Box check/Un-checkAll

  master_CheckBox() {
    for (let value of Object.values(this._ProjectDataList)) {
      value['checked'] = this.master_checked;
      if (value['checked'] === true) {
        this.btn_CreatePortfolio = false;
        this.hidetotalProjects = true;
      }
      else {
        this.btn_CreatePortfolio = true;
        this.hidetotalProjects = false;
      }
      this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
        return checkboxes.checked == true;
      });
      //console.log("selectedList------>", this.selectedItemsList);
    }
  }
  checkboxclick() {
    for (let value of Object.values(this._ProjectDataList)) {
      if (value['checked'] === true) {
        this.btn_CreatePortfolio = false;
        this.hidetotalProjects = true;
        return true;
      }
      else {
        this.btn_CreatePortfolio = true;
        this.hidetotalProjects = false;
      }
    }
  }
  fetchSelectedItems() {
    this.selectedItemsList = this._ProjectDataList.filter((checkboxes) => {
      return checkboxes.checked == true;
    });
  }
  dataTableCheckbox() {
    this.btnGetRecords = true;
    this.fetchSelectedItems();
  }
  // ----Selected Rows Starts-
  // Selected Rows Ends----------------
  onSearchProjects(event: any) {
    this.Search_Value = event.target.value;
    if (this.Search_Value === "") {
      this.matCard = true;
    }
    else {
      this.matCard = false;
    }
  }
  GetProjectDetails() {
    this.service.GetProjects_EPDB().subscribe(res =>
      this.service.ProjectDetails_List = res as ProjectDetailsDTO[]);
  }
  DropdownEmployeeForChart: any;
  dropdownSettings_forEmpChart: {};
  MaxDelays: any;
  CountInprocess: number;
  CountCompleted: number;
  TotalProjects: number;
  CountDelay: number;
  CountUnderApproval: number;
  CountRejected: number;
  CountProjectHoldUA: number;
  CountProjectHold: number;
  CountEnactive: number;
  CountForward: number;
  CountNewProject: number;
  countnewprojecRejected: number;
  CountRejecteds: number;
  countprojectCompletelyRejected: number;
  CountDeadLineExtendedUA: number;
  CountCompletionUA: number;
  CountAll_UA: number;
  _StatusCountDB: any;
  snackBarRef: any;
  EmpDropdwn = [];
  PortfolioCreated_UserName: string;
  OnCardClick(P_id: any, P_Name: string, CreatedName: string) {
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
  dummy_function(name, id) {
    var url = document.baseURI + name;
    var myurl = `${url}/${id}`;
    var myWindow = window.open(myurl, id);
    myWindow.focus();
  }

  returnProjectsUrl: string;
  populateForm() {
    this.Obj_Portfolio_DTO.Portfolio_ID;
    let _Portid: any = this.Obj_Portfolio_DTO.Portfolio_ID;
    // localStorage.setItem('_PortfolioId', _Portid);
    //console.log("Populate Form Id", _Portid);
    localStorage.setItem('_PortfolioName', this.Obj_Portfolio_DTO.Portfolio_Name);

    this.returnProjectsUrl = 'backend/CreatePortfolio';
    this.router.navigate([this.returnProjectsUrl]);
  }
  Rename_PortfolioName: string;
  RenamePortfolio() {
    if (this.Rename_PortfolioName.length > 50) {
      this.Max50Char = false;
    }
    else {
      this.Max50Char = true;
      this._objStatusDTO.Portfolio_Name = this.Rename_PortfolioName;
      this._objStatusDTO.Portfolio_ID = this._Pid;
      let _Pname = this._objStatusDTO.Portfolio_Name;
      let _Pid = this._objStatusDTO.Portfolio_ID;
      this._objStatusDTO.Emp_No = this.Current_user_ID
      this.service.Portfolio_Rename(_Pname, _Pid).subscribe(data => {
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
          (data) => {
            // this.LoadingBar_state.start();
            this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
            this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
            this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
            this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
            this._PortFolio_Namecardheader = _Pname;
            // this.LoadingBar_state.stop();
            this.notifyService.showSuccess(this.Rename_PortfolioName, "Successfully Renamed To : ");
          });
        //this.service.GetProjectsBy_portfolioId(this._Pid);
      });
    }
  }
  hideDropdown: boolean;
  activeClass_NewPortfolio: boolean;
  resetInputText() {
    //debugger
    this._portfolioName = '';
    this.alreadyExists = '';
    this.activeClass_NewPortfolio = false;
  }
  DropdownOpen() {
    this.activeClass_NewPortfolio = true;
  }

  GetCompanies() {
    this.service.GetCompanies().subscribe(res => {
      this.Company_List = res as CompanyDTO[];
      // console.log(this.Company_List)
      this.dropdownSettings_Cmp = {
        singleSelection: true,
        idField: 'Com_No',
        textField: 'Com_Name',
        itemsShowLimit: 1,
        allowSearchFilter: true
      };
    })
  }
  //Employee DropDown Bind
  ngEmployeeDropdown: any;
  ngEmployeeDropdown2: any = [];
  OnEmpSelect(emp: string) {
    this._ErrorMessage_User = "";
    let arr = [];
    this.EmployeeDropdown = emp['Emp_No'];
    //console.log("Selected Employees---->", JSON.stringify(this.ngEmployeeDropdown));
    this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;
    this.ngEmployeeDropdown2.forEach(element => {
      arr.push({ Emp_No: element.Emp_No })
      this._SelectedEmployees = (arr);
    });

    //Make Comma Separate..
    this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
      return select.Emp_No;
    }).join(',');
    // alert(this._SelectedEmpIds_String);
  }
  OnEmpDeselect() {
    let arr = [];
    this.ngEmployeeDropdown2 = this.ngEmployeeDropdown;
    this.ngEmployeeDropdown2.forEach(element => {
      arr.push({ Emp_No: element.Emp_No })
      this._SelectedEmployees = arr;
    });
    this._SelectedEmpIds_String = this._SelectedEmployees.map(select => {
      return select.Emp_No;
    }).join(',');
    //alert(this._SelectedEmpIds_String);
  }
  OnCompanySelect(CompNo: string) {
    this._ErrorMessage_comp = "";
    this._CompanyNo = CompNo['Com_No'];
    this.CompanyDropdown = this._CompanyNo;
    // alert(this.CompanyDropdown);
    let PortfolioId: any = localStorage.getItem('Pid');
    this.service.GetEmployeesby_CompNo(this._CompanyNo, PortfolioId)
      .subscribe((data) => {
        this.EmployeeList = data as EmployeeDTO[];
        //console.log("employee lst",this.EmployeeList);
        this.dropdownSettings_Emp = {
          singleSelection: false,
          idField: 'Emp_No',
          textField: 'TM_DisplayName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 5,
          allowSearchFilter: true
        };
      });
  }
  OnCmpDeselect() {
    //this.ngCompanyDropdown = [{}];
    this.ngCompanyDropdown = "";
  }
  funforGetComp_Users() {
    this.GetCompanies();
    //SnackBar Dismiss
  }
  GetUserDetails() {
    this.service.NewGetUserDetails(this.Current_user);
  }
  GetPortfolioByEmployee() {
    this.service.GetPortfolioByEmployee()
      .subscribe(
        (data) => {
          // alert(JSON.stringify(data));
          this._PortfolioList = data as PortfolioDTO[];
          this._ExistingPortfolioOfProjects = this._PortfolioList;
          //console.log("Portfolio:", this._ExistingPortfolioOfProjects);
          this.cdr.detectChanges();
        });
  }
  _PortfolioListTable_Bttn() {
    this._ShareDetailsList = [];
    this._ProjectsListBy_Pid = [];
    this._PortfolioListTable = true;
    this.PortfolioList = false;
    this._PreferencesList = [];
  }
  Radio_View_fullaccess(val: string) {
    this._ErrorMessage_Pref = "";
    this._Preferences = val;
  }
  share() {
    //
    if (this.CompanyDropdown == undefined) {
      return this._ErrorMessage_comp = "* Please Select Company";
    }
    if (this.EmployeeDropdown == undefined) {
      return this._ErrorMessage_User = "* Please Select User Name";
    }
    if (this.preferences == null) {
      return this._ErrorMessage_Pref = "* Please Select Preferences";
    }
    if (this.Current_user_ID == this.EmployeeDropdown.replace(/\s/g, "")) {
      this.notifyService.showInfo("You Can't Share Portfolio by YourSelf", "Sorry");
      //this.Close_ShareModel();
    }
    else {
      this.ObjSharePortfolio.CompanyId = this._CompanyNo;
      this.ObjSharePortfolio.EmployeeId = this._SelectedEmpIds_String;
      this.ObjSharePortfolio.Portfolio_ID = this._Pid;
      this.ObjSharePortfolio.Preference = this._Preferences;
      this.ObjSharePortfolio.Shared_By = this.Current_user_ID;
      this.ObjSharePortfolio.IsActive = true;
      this.service.SharePortfolio(this.ObjSharePortfolio);
      this.notifyService.showInfo("Successfully", "Portfolio Shared");
      this.Close_ShareModel();
      this._PortfolioListTable = true;
      this.PortfolioList = false;
      this.cdr.detectChanges();
    }
  }
  Close_ShareModel() {
    this.CompanyDropdown = "";
    this.EmployeeDropdown = "";
    this._ErrorMessage_comp = "";
    this._ErrorMessage_User = "";
    this._ErrorMessage_Pref = "";
    this.preferences = null;
    // this.ngEmployeeDropdown.size == 0;
    this.ngCompanyDropdown = [];
    this.ngEmployeeDropdown = [];
  }
  GetDateDiff() {
    var date2 = new Date("06/30/2019");
    var date1 = new Date("07/30/2019");
    if (date1 > date2) {
      alert("Greater Than Date2 ");
    }
    else {
      alert("less than Date 1")
    }
  }
  BackBttn() {
    //
    //Working
    this.ngStatusDrpDwn = [];
    this.BarChartEmp = [];
    this.BarChartEmpNo = null;
    this.PortfolioList = false;
    this._PortfolioListTable = true;
    this.Project_Graph = "Graphs";
    this.ProjectsClick();
    // if (this._snackBar.open) {
    //   this.snackBarRef.dismiss();
    // }
    // if (this.LoadingBar_state) {
    //   this.LoadingBar_state.stop();
    // }
  }
  DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
    this.deletedBy = this.Current_user_ID;
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: proj_Name
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
          this.service.GetProjectsBy_portfolioId(this._Pid)
            .subscribe((data) => {
              //console.log("qwerty" + data);
              this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
              this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
              this.TotalProjects = this._ProjectsListBy_Pid.length;
              var rez = {};
              this._ProjectsListBy_Pid.forEach(function (item) {
                rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
              });
              // this.CountInprocess = rez['InProcess'];
              // this.CountDelay = rez['Delay'];
              this.CountInprocess = rez['InProcess'];
              if (!this.CountInprocess) {
                this.CountInprocess = 0;
              }
              this.CountCompleted = rez['Completed'];
              if (!this.CountCompleted) {
                this.CountCompleted = 0;
              }
              this.CountDelay = rez['Delay'];
              if (!this.CountDelay) {
                this.CountDelay = 0;
              }
              this.CountNewProject = rez['New Project'];
              if (!this.CountNewProject) {
                this.CountNewProject = 0;
              }
              this.countnewprojecRejected = rez['New Project Rejected'];
              if (!this.countnewprojecRejected) {
                this.countnewprojecRejected = 0;
              }
              //Step Two
              this.countprojectCompletelyRejected = rez['Project Complete Rejected'];
              if (!this.countprojectCompletelyRejected) {
                this.countprojectCompletelyRejected = 0;
              }
              this.CountForward = rez['Forward Under Approval'];
              if (!this.CountForward) {
                this.CountForward = 0;
              }
              this.CountCompletionUA = rez['Completion Under Approval'];
              if (!this.CountCompletionUA) {
                this.CountCompletionUA = 0;
              }
              this.CountDeadLineExtendedUA = rez['Deadline Extended Under Approval'];
              if (!this.CountDeadLineExtendedUA) {
                this.CountDeadLineExtendedUA = 0;
              }
              this.CountProjectHoldUA = rez['Project Hold Under Approval'];
              if (!this.CountProjectHoldUA) {
                this.CountProjectHoldUA = 0;
              }
              this.CountUnderApproval = rez['Under Approval'];
              if (!this.CountUnderApproval) {
                this.CountUnderApproval = 0;
              }
              this.CountProjectHold = rez['Project Hold'];
              if (!this.CountProjectHold) {
                this.CountProjectHold = 0;
              }

              let ProjectHolded: number = rez['Project Hold'];
              if (!ProjectHolded) {
                ProjectHolded = 0;
              }
              let EnactiveUA: number = rez['Enactive Under Approval'];
              if (!EnactiveUA) {
                EnactiveUA = 0;
              }
              this.CountAll_UA = this.CountForward + this.CountCompletionUA + this.CountDeadLineExtendedUA + this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;
              this.CountNewProject = this.CountNewProject;
              this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
              // console.log("rejecteds Projects Count---->", this.CountRejecteds)
              this.CountProjectHold = this.CountProjectHold + ProjectHolded;
              this.notifyService.showSuccess("Deleted successfully ", '');
            });
          this._objStatusDTO.Emp_No = this.Current_user_ID;
          this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
            (data) => {
              this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
              this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
              this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
              this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
              this.cdr.detectChanges();
            });
        })
      }
      else {
        this.notifyService.showInfo("Action Cancelled ", '');
      }
    });
    // }
    // else {
    //   this.notifyService.showError("Can't delete shared projects", 'Permission Denied ');
    // }
  }
  messagefav: string;
  AddFavourites(portfolioId, isfav) {
    // this.LoadingBar_state.start();
    this.service.SetFavourite_Service(portfolioId, isfav, this.Current_user_ID).subscribe((data) => {
      //  console.log("retrun Data----->",data1)
      this._objStatusDTO.Emp_No = this.Current_user_ID;
      this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
        (data) => {
          this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
          this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
          this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
          this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
          this.countFav = data[0]['Favourites'];
          //(i.CreatedName == this._CurrentUserFullName)
          // let filter_ListFav: any;
          // filter_ListFav = this._ListProjStat.filter(i => (i.CreatedName == this._CurrentUserFullName));
          // let ListFav: any = filter_ListFav.filter(i => (i.IsFavourite));
          // this.countFav = ListFav.length;
          this.cdr.detectChanges();
          // this.LoadingBar_state.stop();
          if (isfav == false) {
            this.messagefav = "Added to Favourites";
          }
          else {
            this.messagefav = "Removed From Favourites";
          }
          let action: string = ""
          this._snackBar.open(this.messagefav, action, {
            duration: 1500,
          });

        });
    })
    // this.isLoading = true
  }
  deleteSharedUsers(p_id, empid, Sharedby) {
    var deleteProject = window.confirm('Are you sure you want to Remove ?');
    if (deleteProject) {
      //console.log(p_id, empid, Sharedby);
      this.service.Portfolio_ShareUsersDelete(p_id, empid, Sharedby).subscribe(
        (data) => {
          this.service.GetProjectsBy_portfolioId(p_id)
            .subscribe((data) => {
              this._ShareDetailsList = JSON.parse(data[0]['SharedDetailsJson']);
              //console.log(this._ShareDetailsList)
              if (this._ShareDetailsList == 0) {
                this._btnShareDetails = true;
              }
              else {
                this._btnShareDetails = false;
              }
            })
        })
      this.notifyService.showSuccess("Removed Successfully", '')
    }
    else {
      this.notifyService.showInfo("Action Cancelled", '');
    }
  }
  activeClassOwners: boolean
  activeClassAll: boolean
  activeClassShare: boolean
  activeClassFav: boolean
  NoSharedmsg: boolean;
  Nofavmsg: boolean;
  Favourite_Portfolios() {
    this.Portfolio_CurrentPage = 1;
    this.NoSharedmsg = true;
    this.activeClassFav = true;
    this.activeClassAll = false;
    this.activeClassOwners = false;
    this.activeClassShare = false;
    this.activeClass_NewPortfolio = false;
    //
    this.service.GetPortfolioStatus(this._objStatusDTO)
      .subscribe(data => {
        this._ListProjStat = JSON.parse(data[0]['Portfolio_FavouritesList']);
        let favCount = this._ListProjStat.length;
        if (favCount < 30) {
          this.NoOfPages = 1;
        }
        else {
          this.NoOfPages = data[0]['NoOfPages'];
        }

        if (this._ListProjStat.length > 0) {
          this.Nofavmsg = true;
        }
        else {
          this.Nofavmsg = false;
        }
      });


    // this._ListProjStat = this.AllPortfolioslist.filter(i => (i.CreatedName == this._CurrentUserFullName));
    // this._ListProjStat = this._ListProjStat.filter(x => x.IsFavourite);
    // if (this._ListProjStat.length > 0) {
    //   this.Nofavmsg = true;
    //   this._ListProjStat = this._ListProjStat.filter(x => x.IsFavourite);
    // }
    // else {
    //   this.Nofavmsg = false;
    // }
  }
  Shared_Portfolios() {
    this.Portfolio_CurrentPage = 1;
    this.Nofavmsg = true;
    this.activeClassShare = true;
    this.activeClassAll = false;
    this.activeClassOwners = false;
    this.activeClassFav = false;
    this.activeClass_NewPortfolio = false;

    // this._ListProjStat = this._ActualPortfolioList_ForShare.filter(i => (i.CreatedName != this._CurrentUserFullName));
    this.service.GetPortfolioStatus(this._objStatusDTO)
      .subscribe(data => {
        this._ListProjStat = JSON.parse(data[0]['Portfolio_SharedList']);
        this.countShare = data[0]['Shared'];
        if (this.countShare < 30) {
          this.NoOfPages = 1;
        }
        else {
          this.NoOfPages = data[0]['NoOfPages'];
        }

        // this.countAll = data[0]['Total'];
        if (this._ListProjStat.length > 0) {
          this.NoSharedmsg = true;
        }
        else {
          this.NoSharedmsg = false;
        }
      });
  }
  Owners_Portfolios() {
    this.Portfolio_CurrentPage = 1;
    this.Nofavmsg = true;
    this.NoSharedmsg = true;
    this.activeClassOwners = true;
    this.activeClassShare = false;
    this.activeClassAll = false;
    this.activeClassFav = false;
    this.activeClass_NewPortfolio = false;
    // this._ListProjStat = this.AllPortfolioslist.filter(i => (i.CreatedName == this._CurrentUserFullName));
    this.service.GetPortfolioStatus(this._objStatusDTO)
      .subscribe(data => {
        this._ListProjStat = JSON.parse(data[0]['Portfolio_OwnersList']);
        this.countOwners = data[0]['Owners'];
        if (this.countOwners < 30) {
          this.NoOfPages = 1;
        }
        else {
          this.NoOfPages = data[0]['NoOfPages'];
        }
      });
  }
  AllPortfolioslist: any;
  All_Portfolio() {
    this.Portfolio_CurrentPage = 1;
    this.Nofavmsg = true;
    this.NoSharedmsg = true;
    this.activeClassAll = true;
    this.activeClassShare = false;
    this.activeClassOwners = false;
    this.activeClassFav = false;
    this.activeClass_NewPortfolio = false;
    this._objStatusDTO.SearchText = null;
    this._objStatusDTO.PageNumber = this.Portfolio_CurrentPage;
    this.service.GetPortfolioStatus(this._objStatusDTO)
      .subscribe(data => {
        this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
        this.countAll = data[0]['Total'];
        if (this.countAll < 30) {
          this.NoOfPages = 1;
        }
        else {
          this.NoOfPages = data[0]['NoOfPages'];
        }
      });
    //this._ListProjStat = this._ActualPListFor_All;
  }
  pieBarCharts: boolean;
  HideStatusDropdown: boolean;
  HideProjects: boolean;
  canvas: any;
  ctx: any;
  _ChartData: ChartDTO[];
  ObjChartDTO: ChartDTO;
  Project_Graph: string;
  ProjectsGraphsClick() {
    // this.snackBarRef.dismiss();
    if (this.Project_Graph == "Graphs") {
      this.Project_Graph = "Projects";
      this.Graphs();
    }
    else {
      this.Project_Graph = "Graphs"
      this.ProjectsClick();
    }
  }
  Graphs() {
    this.pieBarCharts = false;
    this.HideStatusDropdown = true;
    this.HideProjects = true;
    // this.BarChartEmp = [];
    // am4core.useTheme(am4themes_animated);
    this.LoadPieChart();
    this.LoadBarChart();
  }
  ProjectsClick() {
    this.HideProjects = false;
    this.pieBarCharts = true;
    this.HideStatusDropdown = false;
    // this.BarChartEmp = [];
  }
  LoadPieChart() {
    am4core.options.autoDispose = true;
    let PieChart = am4core.create("chartdiv2", am4charts.PieChart3D);
    PieChart.logo.disabled = true;
    PieChart.paddingRight = 20;
    this.service._Chart_Percentage(this._Pid).subscribe(
      (data) => {
        this._ChartData = data as ChartDTO[];
        //console.log("ChartData", this._ChartData);
        PieChart.data = this._ChartData;
        let pieSeries = PieChart.series.push(new am4charts.PieSeries3D());
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.dataFields.value = "Percentage";
        pieSeries.dataFields.category = "Status";
        PieChart.legend = new am4charts.Legend();
        PieChart.legend.position = "absolute";
        PieChart.legend.reverseOrder = true;
      });
  }
  ObjBarchartDTO: BarChartDTO;
  barchartData: BarChartDTO[];
  LoadBarChart() {
    am4core.options.autoDispose = true;
    let BarChart = am4core.create("chartdiv1", am4charts.XYChart3D);
    BarChart.logo.disabled = true;
    this.service._BarChart(this._Pid, this.BarChartEmpNo).subscribe(
      (data) => {
        //this.LoadingBar_state.start();
        this.barchartData = data as BarChartDTO[];
        //console.log("BarChartData", this.barchartData);
        if (this.barchartData) {
          //this.LoadingBar_state.stop();
        }
        BarChart.data = this.barchartData;
        //legend start
        BarChart.legend = new am4charts.Legend();
        BarChart.legend.position = "bottom";
        BarChart.legend.reverseOrder = true;
        //legend Ends
        let categoryAxis = BarChart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "Type";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 5;
        let valueAxis = BarChart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.strictMinMax = false;
        valueAxis.title.text = "Projects";
        valueAxis.renderer.labels.template.adapter.add("text", function (text) {
          return text;
        });
        // Create series 1  (Delay)
        this.barchartData.forEach(element => {
          if (element.DelayCount != 0 && element.Status == 'Delay') {
            let series = BarChart.series.push(new am4charts.ColumnSeries3D());
            series.columns.template.propertyFields.fill = "#F58A8B";
            series.dataFields.valueY = "DelayCount";
            series.dataFields.categoryX = "Type";
            series.name = "Delay";
            series.stroke = am4core.color("#F58A8B");
            series.fill = am4core.color("#F58A8B");
            series.clustered = false;
            series.columns.template.fillOpacity = 0.9;
            series.columns.template.width = am4core.percent(50);
            series.columns.template.tooltipText = "Delay : [bold]{DelayCount}[/]";
          }
          //Series 2 (InProcess)
          if (element.InProcessCount != 0 && element.Status == 'InProcess') {
            let series2 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series2.columns.template.propertyFields.fill = "#E1AC9B";
            series2.dataFields.valueY = "InProcessCount";
            series2.dataFields.categoryX = "Type";
            series2.name = "InProcess";
            series2.stroke = am4core.color("#E1AC9B");
            series2.fill = am4core.color("#E1AC9B");
            series2.clustered = false;
            series2.columns.template.width = am4core.percent(50);
            series2.columns.template.tooltipText = "InProcess : [bold]{InProcessCount}[/]";
          }
          //Series 2 (Completion Under Approval)
          if (element.CUA_Count != 0 && element.Status == 'Completion Under Approval') {
            let series4 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series4.columns.template.propertyFields.fill = "#98C7BF";
            series4.dataFields.valueY = "CUA_Count";
            series4.dataFields.categoryX = "Type";
            series4.name = "Completion UnderApproval";
            series4.stroke = am4core.color("#98C7BF");
            series4.fill = am4core.color("#98C7BF");
            series4.clustered = false;
            series4.columns.template.width = am4core.percent(50);
            series4.columns.template.tooltipText = "Completion Under Approval : [bold]{CompletionUnderApprovalCount}[/]";
          }
          // Series  (Under Approval)
          if (element.UA_Count != 0 && element.Status == "Under Approval") {
            let series5 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series5.columns.template.propertyFields.fill = "#BD838C";
            series5.dataFields.valueY = "UA_Count";
            series5.dataFields.categoryX = "Type";
            series5.name = "Under Approval";
            series5.stroke = am4core.color("#BD838C");
            series5.fill = am4core.color("#BD838C");
            series5.clustered = false;
            series5.columns.template.tooltipText = "Under Approval : [bold]{UA_Count}[/]";
            series5.columns.template.width = am4core.percent(50);
          }
          if (element.PHUA_Count != 0 && element.Status == "Project Hold Under Approval") {
            // Series 3 (Project Hold Under Approval)
            let series6 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series6.columns.template.propertyFields.fill = "#a85098";
            series6.dataFields.valueY = "PHUA_Count";
            series6.dataFields.categoryX = "Type";
            series6.name = "Project Hold Under Approval";
            series6.stroke = am4core.color("#a85098");
            series6.fill = am4core.color("#a85098");
            series6.clustered = false;
            series6.columns.template.tooltipText = "Hold Under Approval : [bold]{PHUA_Count}[/]";
            series6.columns.template.width = am4core.percent(50);
          }
          if (element.PCR_Count > 0 && element.Status == "Project Complete Rejected") {
            // Series 4 (Project Comlete Rejected)
            let series7 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series7.columns.template.propertyFields.fill = "#F5C293";
            series7.dataFields.valueY = "PCR_Count";
            series7.dataFields.categoryX = "Type";
            series7.name = "Project Complete Rejected";
            series7.stroke = am4core.color("#F5C293");
            series7.fill = am4core.color("#F5C293");
            series7.clustered = false;
            series7.columns.template.width = am4core.percent(50);
            series7.columns.template.tooltipText = "Project Complete Rejected : [bold]{PCR_Count}[/]";
          }
          if (element.PH_Count != 0 && element.Status == "Project Hold") {
            // Series 8
            let series8 = BarChart.series.push(new am4charts.ColumnSeries3D());
            series8.columns.template.propertyFields.fill = "#a85098";
            series8.dataFields.valueY = "PH_Count";
            series8.dataFields.categoryX = "Type";
            series8.name = "Project Hold";
            series8.stroke = am4core.color("#a85098");
            series8.fill = am4core.color("#a85098");
            series8.clustered = false;
            series8.columns.template.width = am4core.percent(50);
            series8.columns.template.tooltipText = "Project Hold : [bold]{PH_Count}[/]";
          }
        });
        //Series 3 (Total Projects)
        let series9 = BarChart.series.push(new am4charts.ColumnSeries3D());
        series9.dataFields.valueY = "TypeCount";
        series9.dataFields.categoryX = "Type";
        series9.name = "Total Projects";
        series9.clustered = false;
        series9.columns.template.propertyFields.fill = "#22b9ff";
        series9.stroke = am4core.color("#22b9ff");
        series9.fill = am4core.color("#22b9ff");
        series9.columns.template.tooltipText = "Total Projects: [bold]{TypeCount}[/]";
        series9.columns.template.width = am4core.percent(50);
      });
  }
  BarChartEmpNo: string;
  EmpChartOnSelect(emp) {
    this.BarChartEmpNo = emp['Emp_No'];
    this.LoadBarChart();
    // this.barchartData = this.barchartData.filter(i => this.BarChartEmpNo.includes(i.Emp_No));
  }
  EmpChartOnDeselect() {
    this.BarChartEmpNo = null;
    this.LoadBarChart();
  }
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  _subtaskDiv: boolean;
  initials: string;
  pCode: string;
  pName: string;
  pDesc: string; pType: string; pStdt: Date; pEndDT: Date; pStat: string;
  pCost: number; pComp: string; pClient: string; Powner: string;
  PRespon: string; PAut: string; Pcoor: String; PInfo: String; pSupprt: string; pRType: string;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  MoreDetailsList: any;

  Subtask_List: SubTaskDTO[];
  openInfo2(pcode, pName, pDes, ptype, pStDt, pEnDT, pStat, pCost, pCom, pCli, pOwn, pRes, pAut, pCoor, pInf, pSup, pReportType) {
    //debugger
    this.pName = pName;
    this.pDesc = pDes;
    this.pType = ptype;
    this.pStdt = pStDt;
    this.pEndDT = pEnDT;
    this.pStat = pStat;
    this.pCost = pCost;
    //alert(this.pCost);
    this.pComp = pCom;
    this.pClient = pCli;
    this.Powner = pOwn;
    this.PRespon = pRes;
    //Extracting First Letter From Name...
    this.initials = pRes.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')
    this.initials.toUpperCase();
    this.PAut = pAut;
    this.Pcoor = pCoor;
    this.PInfo = pInf;
    this.pSupprt = pSup;
    this.pRType = pReportType;

    //More Details------
    this.MoreDetailsList = [
      { ProjectCode: pcode },
      { ProjectName: pName },
      { Description: pDes },

      { StartDate: pStDt },
      { EndDate: pEnDT },
      { Cost: pCost },
      { Owner: pOwn },
      { Responsible: pRes },
      { Authority: pAut },
      { Coordinator: pCoor },
      { Informer: pInf },
      { Support: pSup },
    ]
    let List_string: any = JSON.stringify(this.MoreDetailsList);
    localStorage.setItem("moreDetails", List_string);

    this.service.SubTaskDetailsService(pcode).subscribe(
      (data) => {
        this.Subtask_List = data as SubTaskDTO[];
        if (Object.keys(data).length > 0) {
          this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
          this.TotalWork_Hours = data[0]['TotalHours'];
          this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
          this.ProjectStatus = data[0]['ProjectStatus'];
          this.subtaskNotFoundMsg = "No Subtask found";
          this._subtaskDiv = true;
        }
        else {
          this.subtaskNotFoundMsg = "";
          this._subtaskDiv = false;
        }
        //console.log("subtask Details 2---->", this.Subtask_List);
        this._TotalSubtaskCount = this.Subtask_List.length;
      });
    document.getElementById("InfoContent2").style.width = "410px";
    this._OpenMemosInfo(pcode, pName);
    document.getElementById("MemosSideBar").style.width = "0";
  }

  _loadChildComponent = false;
  parentToChild: string;
  openInfo(pcode, pName) {
    this._loadChildComponent = true;
    this.parentToChild = pcode;
    let projName = pName;
    document.getElementById("mysideInfobar").style.width = "410px";
  }

  closeInfo2() {
    document.getElementById("InfoContent2").style.width = "0";
  }
  btnEdit() {
    this.Max50Char = true;
  }
  _ItemsPerpage: number;
  Portfolio_CurrentPage: number = 1;
  _Showentries(event) {
    this._ItemsPerpage = event;
    this.Portfolio_CurrentPage = 1;
  }
  alreadyExists: string;
  NotMatched: boolean;
  _ontextChange() {
    this.alreadyExists = '';
  }
  //deleteDisable: boolean = true;
  deletedBy: string;
  _deletePortfolio(pid: number, portName: string, createdBy: string, createdDT: Date, ProjCount: number, status: string) {
    //if (createdBy == this.Current_user_ID) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: portName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.deletedBy = this.Current_user_ID;
        this.service._DeletePortfolios(pid, portName, createdBy, createdDT, this.deletedBy, ProjCount, status).subscribe((data) => {
          this._objStatusDTO.Emp_No = this.Current_user_ID;
          this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
            (data) => {
              //this.LoadingBar_state.start();
              this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
              this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
              this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
              this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
              //this.LoadingBar_state.stop();
              this._ActualPortfolioList_ForShare = JSON.parse(data[0]['PortfolioList_Json']);
              this._ActualPListFor_All = JSON.parse(data[0]['PortfolioList_Json']);
              this.AllPortfolioslist = this._ListProjStat;
              // this.countAll = this._ListProjStat.length;
              let Listown: any = this._ListProjStat.filter(i => (i.CreatedName == this._CurrentUserFullName));
              this.countOwners = Listown.length;
              let ListShare: any = this._ListProjStat.filter(i => (i.CreatedName != this._CurrentUserFullName));
              this.countShare = ListShare.length;
              //
              let shrearry: any;
              shrearry = this._ListProjStat;
              //console.log("-------->SharedArry--------->", shrearry);
              let ListFav: any = Listown.filter(i => (i.IsFavourite));
              this.countFav = ListFav.length;
              //console.log("ListForStatus", this._ListProjStat);
              if (this._ListProjStat.length == 0) {
                this.messageForEmpty = false;
              }
              else {
                this.messageForEmpty = true;
              }
              // this.cdr.detectChanges();
            });
        })
        this.notifyService.showSuccess("Deleted ", 'Successfully');
      }
      else {
        this.notifyService.showInfo("Delete Cancelled ", '');
      }
    });
    // }
    // else {
    //   this.notifyService.showError("Can't delete shared portfolio", 'Permission Denied');
    // }
  }
  //Sorting.....
  clicks: number = 0;
  A2Z: boolean;
  Z2A: boolean;
  _SortPortfoliolist() {
    this.clicks += 1;
    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this._ListProjStat = this._ListProjStat.sort((a, b) => (a.Portfolio_ID > b.Portfolio_ID) ? -1 : 1);
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
      this._ListProjStat = this._ListProjStat.sort((a, b) => (a.Portfolio_ID > b.Portfolio_ID) ? 1 : -1);
    }
  }
  _SortProjectList() {
    this.clicks += 1;
    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this._ProjectsListBy_Pid = this._ProjectsListBy_Pid.sort((a, b) => (a.Project_Code > b.Project_Code) ? -1 : 1);
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
      this._ProjectsListBy_Pid = this._ProjectsListBy_Pid.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
    }
  }
  _MemosSubjectList: any;
  _JsonString: any;
  _displayProjName: string;
  _MemosNotFound: string;
  _OpenMemosInfo(_projectCode, _projectName) {
    this._displayProjName = _projectName;
    this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("Data------------>", data)
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              this._MemosNotFound = "";
              //console.log("Subject Name ------------>",this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
    //Displaying Right Side Bar... 
    document.getElementById("MemosSideBar").style.width = "350px";
  }
  _CloseMemosidebar() {
    document.getElementById("MemosSideBar").style.width = "0";
  }

  openUrl(memo_Url) {
    const Url = memo_Url;
    console.log("Url----------->", memo_Url);
    window.open(Url);
  }
  _raciDetails: boolean = true;
  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }
  //Filter Box Counts Functionality
  CountsOf_Emp_Status_ProjectType() {
    //Employee Count
    let Emp = {};
    this._ProjectDataList.forEach(function (item) {
      Emp[item.TM_DisplayName] ? Emp[item.TM_DisplayName]++ : Emp[item.TM_DisplayName] = 1;
    });
    Object.entries(Emp).forEach(([Name, Count]) => {
      this.EmpCountInFilter.push({ Name, Count });
    });
    this.EmpCountInFilter = this.EmpCountInFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    //Project Type Count;
    let type = {};
    this._ProjectDataList.forEach(function (item) {
      type[item.Exec_BlockName] ? type[item.Exec_BlockName]++ : type[item.Exec_BlockName] = 1;
    });
    Object.entries(type).forEach(([Name, Count]) => {
      this.TypeContInFilter.push({ Name, Count });
    });
    this.TypeContInFilter = this.TypeContInFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
    //For Status Count
    let Status = {};
    this._ProjectDataList.forEach(function (item) {
      Status[item.Status] ? Status[item.Status]++ : Status[item.Status] = 1;
    });
    Object.entries(Status).forEach(([Name, Count]) => {
      this.StatusCountFilter.push({ Name, Count });
    });
    this.StatusCountFilter = this.StatusCountFilter.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
  }
  GetCounts_On_Filter() {
    //Emp
    let Emp = {};
    this._ProjectDataList.forEach(function (item) {
      Emp[item.TM_DisplayName] ? Emp[item.TM_DisplayName]++ : Emp[item.TM_DisplayName] = 1;
    });
    //console.log("Emp---------->", Emp)
    let arr1 = []
    Object.entries(Emp).forEach(([Name, Count]) => {
      arr1.push({ Name, Count });
    });
    this.EmpCountInFilter = arr1.sort((a, b) => (a.Name > b.Name) ? 1 : -1);

    //Project Type
    let type = {};
    this._ProjectDataList.forEach(function (item) {
      type[item.Exec_BlockName] ? type[item.Exec_BlockName]++ : type[item.Exec_BlockName] = 1;
    });
    let arr2 = []
    Object.entries(type).forEach(([Name, Count]) => {
      arr2.push({ Name, Count });
    });
    this.TypeContInFilter = arr2.sort((a, b) => (a.Name > b.Name) ? 1 : -1);

    //Status
    let Status = {};
    this._ProjectDataList.forEach(function (item) {
      Status[item.Status] ? Status[item.Status]++ : Status[item.Status] = 1;
    });
    let arr3 = []
    Object.entries(Status).forEach(([Name, Count]) => {
      arr3.push({ Name, Count });
    });
    this.StatusCountFilter = arr3.sort((a, b) => (a.Name > b.Name) ? 1 : -1);
  }


  _fromGetProjectsbyusername() {
    var rez = {};
    this._ProjectDataList.forEach(function (item) {
      rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
    });
    this.CountInprocess1 = rez['InProcess'];
    if (!this.CountInprocess1) {
      this.HCountInprocess = true;
      this.CountInprocess1 = 0;
    }
    this.CountDelay1 = rez['Delay'];
    if (!this.CountDelay1) {
      this.HCountDelay = true;
      this.CountDelay1 = 0;
    }
    this.CountRejected1 = rez['Project Complete Rejected'];
    if (!this.CountRejected1) {
      this.HCountRejected = true;
      this.CountRejected1 = 0;
    }
    this.CountProjectHold1 = rez['Project Hold'];
    if (!this.CountProjectHold1) {
      this.HCountProjectHold = true;
      this.CountProjectHold1 = 0;
    }
    this.CountEnactive1 = rez['Enactive Under Approval'];
    if (!this.CountEnactive1) {
      this.HCountEnactive = true;
      this.CountEnactive1 = 0;
    }
    this.CountForward1 = rez['Forward Under Approval'];
    if (!this.CountForward1) {
      this.HCountForward = true;
      this.CountForward1 = 0;
    }
    this.CountNewProject1 = rez['New Project'];
    if (!this.CountNewProject1) {
      this.HCountNewProject = true;
      this.CountNewProject1 = 0;
    }
  }
}