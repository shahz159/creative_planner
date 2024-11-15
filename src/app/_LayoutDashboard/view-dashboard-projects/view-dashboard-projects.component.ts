import { Component, OnInit } from '@angular/core';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/_Services/link.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as _ from 'underscore';
import { NotificationService } from 'src/app/_Services/notification.service';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-view-dashboard-projects',
  templateUrl: './view-dashboard-projects.component.html',
  styleUrls: ['./view-dashboard-projects.component.css']
})
export class ViewDashboardProjectsComponent implements OnInit {

  _ObjCompletedProj: CompletedProjectsDTO;
  btn_CreatePortfolio: boolean;
  hidetotalProjects: boolean;
  selectedItemsList: any;
  btnGetRecords: boolean;
  EmpCountInFilter = [];
  TypeContInFilter = [];
  StatusCountFilter = [];
  searchText: string;
  txtSearch: string;
  public _totalProjectsCount: number;

  portfolioName: string;
  submitted: boolean;
  public _ListProjStat: any[];
  countOwners: any;
  countAll: number;
  messageForEmpty: boolean;
  public _Pid: number;
  TotalProjects: any;
  public _ProjectsListBy_Pid: any;
  CountInprocess: any;
  CountDelay: any;
  search_Type: any[];
  search_status: any[];
  str_portName: string;
  StoredPortfolio_ID: number;

  //Declarations//
  master_checked: boolean = false;
  checked: boolean = false;
  CurrentPageNo: number = 1;
  _filtersMessage2: string;
  _filtersMessage: string;
  _ProjectDataList: any;
  ActualDataList: any;
  un_FilteredProjects: any = [];
  public _CurrentpageRecords: number;
  _StatusCountDB: any;
  //Properties
  ObjUserDetails: UserDetailsDTO;
  _objDropdownDTO: DropdownDTO;
  Obj_Portfolio_DTO: PortfolioDTO;
  portfolioId: number;
  edited: boolean = false;

  Current_user_ID = localStorage.getItem('EmpNo');

  constructor(public service: ProjectTypeService,
    public _LinkService: LinkService,
    private notifyService: NotificationService,
    private route: ActivatedRoute,
    private router: Router, private activatedRoute: ActivatedRoute,
    public createproject: CreateProjectComponent

  ) {
    this.ObjUserDetails = new UserDetailsDTO();
    this._objDropdownDTO = new DropdownDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();

  }

  Mode: string;
  _subtaskDiv: boolean;
  delayType: string;
  delayType1: string='Projects';
  delayType2: string='Actions';


  ngOnInit() {
    console.log("------base Url-------->", this.router.url);
    this.A2Z = true;
    this.Z2A = false;
    this._subtaskDiv = true;
    this.activatedRoute.queryParams.subscribe(params => {
      const section = params['section'];
debugger
      if (section) {
        // Handle the case when you are coming from the dashboard
        if (section === 'Projects') {
          this.getDelayProjects(this.delayType1);
        } else if (section === 'Actions') {
          this.getDelayProjects(this.delayType2);
        } else if (section === 'Assigned Project') {
          this.Mode = this.activatedRoute.snapshot.params['Mode'];
          this.getAssignedProjects(this.type1);
          this.router.navigate(["../ViewProjects/" + this.Mode]);
        }
      } else {
        // Handle the case when you are on this page or coming from another page
        this.Mode = this.activatedRoute.snapshot.params['Mode'];
        if (this.Mode === 'DelayProjects') {
          this.getDelayProjects(this.delayType1);
        } else if (this.Mode === 'AssignedActions') {
          this.getAssignedActions('TOME');
        } else {
          this.GetCompletedProjects();
        }
        this.getAssignedProjects(this.type1);
        this.router.navigate(["../ViewProjects/" + this.Mode]);
      }
    });


    // this.route.queryParams.subscribe(params => {
    //   const section=params.section;
    //   this.getDelayProjects(section=='Projects'?this.delayType1:section=='Actions'?this.delayType2:this.delayType1);
    // });


    // this.notFoundData=true;
    //this.AssignedTask = true;
    //this.projectsDataTable = false;
    //this.portfolioName = localStorage.getItem('_PortfolioName');
  }



  initials: string;
  SubmissionType: string;
  SubmissionType1: string; StandardDuration: string;
  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  pCode: string;
  pName: string;
  pDesc: string; pType: string; pStdt: Date; pEndDT: Date; pStat: string;
  pCost: number; pComp: string; pClient: string; Powner: string;
  PRespon: string; PAut: string; Pcoor: String; PInfo: String; pSupprt: string; pRType: string; duration: string;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  MoreDetailsList: any;

  openInfo(prjCode:string,actCode:string) {
    // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");

    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    if(prjCode&&actCode)
      this.router.navigate(["../ViewProjects/" + this.Mode + "/projectinfo/", prjCode,actCode, "3"]);
    else
    this.router.navigate(["../ViewProjects/" + this.Mode + "/projectinfo/", prjCode, "3"]);

    //this.router.navigate(["../portfolioprojects/" + this._Pid + "/projectinfo/", pcode]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }
  closeInfo() {
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    // $('.project-list_AC').removeClass('active');
    if (this.Mode == 'AssignedTask') {
      this._AssignedProjectsList.forEach(item => item.isActive = false);
    }
    else{
      this._ProjectDataList.forEach(item => item.isActive = false);
    }
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["../ViewProjects/" + this.Mode]);

  }

  _CloseMemosidebar() {
    document.getElementById("MemosSideBar").style.width = "0";
  }
  _Closeportflosidebar() {
    document.getElementById("portfloSideBar").style.width = "0";
  }

  projectsDataTable: boolean;
  AssignedTask: boolean;
  _AssignedProjectsList: any;
  _Statustitle: string;
  notFoundData: boolean;
  notSelectedAnything_msg: string;
  notSelectedAnything_msg2: string;



  GetCompletedProjects() {
    // this.Mode = this.service._getMessage();
    let EmpNo = this.Current_user_ID;
    let Pgno: number = this.CurrentPageNo;
    //Passing to OBJ DTO...
    this._ObjCompletedProj.Mode = this.Mode;
    this._ObjCompletedProj.Emp_No = EmpNo;
    this._ObjCompletedProj.PageNumber = Pgno;
    this._ObjCompletedProj.PageSize = 30;

    if (this.Mode != "AssignedTask" && this.Mode != "Delay" && this.Mode != "") {
      this.projectsDataTable = false;
      this.AssignedTask = true;

      if (this.Mode == "UnderApproval") {
        this._Statustitle = "Under Approval Projects";
        this._totalProjectsCount = parseInt(sessionStorage.getItem('CompletedCount'));
      }
      if (this.Mode == "Rejected") {
        this._Statustitle = "Rejected Projects";
        this._totalProjectsCount = parseInt(sessionStorage.getItem('RejectedCount'));
      }
      if (this.Mode == "ExOneMonth") {
        this._Statustitle = "Delay In One Month";
        this._totalProjectsCount = parseInt(sessionStorage.getItem('TotalExpiryInMonth'));
      }
      if (this.Mode == "NotWorking") {
        this._Statustitle = "Not Working Projects From One Month";
        this._totalProjectsCount = parseInt(sessionStorage.getItem('ProjectsNotWorking'));
      }
      if (this.Mode == "NotStarted") {
        this._Statustitle = "Projects Not Started";
        this._totalProjectsCount = parseInt(sessionStorage.getItem('ProjectsNotStarted'));
      }

      //Reset The List for New Data
      this._ProjectDataList = [];

      this.service._GetCompletedProjects(this._ObjCompletedProj)
        .subscribe((data) => {

          if (JSON.parse(data[0]['JsonData_Json']).length == 0) {
            this.notSelectedAnything_msg = "Sorry, No records found in " + this._Statustitle;
            this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
            this.CurrentPageNo = 0;
            this._CurrentpageRecords = 0;
          }
          else {
            this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);
console.log(this._ProjectDataList,'_ProjectDataListxxxxxxxxxxxxxx')
            this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
            this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

            this._CurrentpageRecords = this._ProjectDataList.length;
            this._totalProjectsCount = data[0]['delaycount'];
          }
        });
    }
  }
  ActionhiddenIcon:boolean=true;
  portfolio_List:any
  _totalfortfolio:any


  getDelayProjects(type) {

    this.projectsDataTable = false;
    this.AssignedTask = true;
    this.delayType=type;
    if(type=='Projects'){
      this.Mode='DelayProjects';
      this.ActionhiddenIcon=true
      console.log("_ProjectDataList:",this._ProjectDataList);
    }
    else{
      this.Mode='DelayActions';
      this.ActionhiddenIcon=false
    }
    let EmpNo = this.Current_user_ID;
    let Pgno: number = this.CurrentPageNo;
    //Passing to OBJ DTO...
    this._ObjCompletedProj.Mode = this.Mode;
    this._ObjCompletedProj.Emp_No = EmpNo;
    this._ObjCompletedProj.PageNumber = Pgno;
    this._ObjCompletedProj.PageSize = 30;



      if (this.Mode == "DelayProjects") {
        this._totalProjectsCount = parseInt(sessionStorage.getItem('DelayCount'));
      }
      else
      {
        this._totalProjectsCount = parseInt(sessionStorage.getItem('DelayActionCount'));
      }
      //Reset The List for New Data
      this._ProjectDataList = [];
      this.service._GetCompletedProjects(this._ObjCompletedProj)
        .subscribe((data) => {
          console.log(data,'data2')
          if (JSON.parse(data[0]['JsonData_Json']).length == 0) {
            this.notSelectedAnything_msg = "Sorry, No records found in Delay" + type;
            this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
            this.CurrentPageNo = 0;
            this._CurrentpageRecords = 0;
          }
          else {
            this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);
            console.log(  this._ProjectDataList,'_ProjectDataList')
            this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
            this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

            this._CurrentpageRecords = this._ProjectDataList.length;
            this._totalProjectsCount = data[0]['delaycount'];
            // this.portfolio_List=JSON.parse(this._ProjectDataList['availableports'])

             console.log(this._ProjectDataList,"portfolio_List")
          }
        });
  }

  type1: string = "Assigned by me";
  type2: string = "Assigned to me";
  Type: String;

  getAssignedProjects(type) {
debugger
    let EmpNo = this.Current_user_ID;
    if (this.Mode == "AssignedTask") {
      this.AssignedTask = false;
      this.projectsDataTable = true;
      this._Statustitle = "Assigned Projects";
      this.CurrentPageNo = 1;

      this._ObjCompletedProj.Type = type;
      this.Type = type;
      // alert(type);
      this._ObjCompletedProj.Emp_No = EmpNo;
      this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
      this._ObjCompletedProj.RowsOfPage = 30;


      this.service._GetAssignedProjects(this._ObjCompletedProj).
        subscribe(data => {
          console.log(data);

          if (JSON.parse(data[0]['JsonData_Json']).length == 0) {
            this.notSelectedAnything_msg = "Sorry, No records found in " + this._Statustitle;
            this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
            this.CurrentPageNo = 0;
            this._totalProjectsCount = 0;
            this._CurrentpageRecords = 0;
          }
          else {
            this._AssignedProjectsList = JSON.parse(data[0]['JsonData_Json']);
          console.log(this._AssignedProjectsList,'Task Assigned list')
            this._CurrentpageRecords = this._AssignedProjectsList.length;
            if (type == 'Assigned by me')
              this._totalProjectsCount = (data[0]['AssignTOcount']);
            else
              this._totalProjectsCount = (data[0]['AssignBYcount']);
            this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

            this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
            console.log(this.TypeContInFilter, "TypeContInFilter");

            console.log(this.StatusCountFilter, "StatusCountFilter");

            console.log(this.EmpCountInFilter, "EmpCountInFilter");

          }
        });
    }
  }

  LastPage: number;
  lastPagerecords: number;

  BackBttn() {
    this._ProjectDataList = [];
    this.service.Mode = "";
    this.router.navigate(['backend/dashboard']);
  }
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];

  selectedItem_Status = [];
  isStatusChecked(item) {
    let arr = [];
    this.edited = true;
    this.StatusCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Status: element.Status });
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
        arr.push({ Block_No: element.Project_Block });
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
    this.edited = true;
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
  //Apply Filters
  SearchbyText() {
    this.CurrentPageNo = 1;
    this.applyFilters();
  }
  applyFilters() {
    if (this.Mode != "AssignedTask" && this.Mode != "") {
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
      this._ObjCompletedProj.SelectedStatus = this.selectedStatus_String;
      this._ObjCompletedProj.SelectedEmp_No = this.selectedEmp_String;
      this._ObjCompletedProj.SelectedBlock_No = this.selectedType_String;
      this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
      this._ObjCompletedProj.PageSize = 30;
      this._ObjCompletedProj.Project_SearchText = this.searchText;
      //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
      this.service._GetCompletedProjects(this._ObjCompletedProj)
        .subscribe(data => {

          this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);
          this._CurrentpageRecords = this._ProjectDataList.length;
          if (this._ProjectDataList.length == 0) {
            this._filtersMessage = "No projects matched your search";
            this._filtersMessage2 = "Please try again";
          }
          else {
            this._filtersMessage = "";
            this._filtersMessage2 = "";
          }
          //Employee
          if (this.selectedItem_Emp.length == 0) {
            this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
          }
          else {
            this.EmpCountInFilter = this.selectedItem_Emp[0];
          }
          //Type
          if (this.selectedItem_Type.length == 0) {
            this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
          }
          else {
            this.TypeContInFilter = this.selectedItem_Type[0];
          }
          //Status
          if (this.selectedItem_Status.length == 0) {
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

          }
          else {
            this.StatusCountFilter = this.selectedItem_Status[0];
          }

          this._totalProjectsCount = data[0]['delaycount'];

          let _vl = this._totalProjectsCount / 30;
          let _vl1 = _vl % 1;
          if (_vl1 > 0.000) {
            this.LastPage = Math.trunc(_vl) + 1;
          }
          else {
            this.LastPage = Math.trunc(_vl);
          }

          if (this.CurrentPageNo == this.LastPage) {
            this.lastPagerecords = 30;
          }
        });
    }
    else if (this.Mode == "AssignedTask") {
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
      this._ObjCompletedProj.SelectedStatus = this.selectedStatus_String;
      this._ObjCompletedProj.SelectedEmp_No = this.selectedEmp_String;
      this._ObjCompletedProj.SelectedBlock_No = this.selectedType_String;
      this._ObjCompletedProj.PageNumber = this.CurrentPageNo;
      this._ObjCompletedProj.RowsOfPage = 30;
      this._ObjCompletedProj.Project_SearchText = this.searchText;
      this.service._GetAssignedProjects(this._ObjCompletedProj).
        subscribe(data => {

          this._AssignedProjectsList = JSON.parse(data[0]['JsonData_Json']);

          this._CurrentpageRecords = this._AssignedProjectsList.length;
          //Type
          if (this.selectedItem_Type.length == 0) {
            this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
          }
          else {
            this.TypeContInFilter = this.selectedItem_Type[0];
          }
          //Status
          if (this.selectedItem_Status.length == 0) {
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

          }
          else {
            this.StatusCountFilter = this.selectedItem_Status[0];
          }
          //Employees
          if (this.selectedItem_Emp.length == 0) {
            this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);

          }
          else {
            this.EmpCountInFilter = this.selectedItem_Emp[0];
          }
          if (this._ObjCompletedProj.Type == 'Assigned by me')
            this._totalProjectsCount = (data[0]['AssignTOcount']);
          else
            this._totalProjectsCount = (data[0]['AssignBYcount']);
          let _vl = this._totalProjectsCount / 30;
          let _vl1 = _vl % 1;
          if (_vl1 > 0.000) {
            this.LastPage = Math.trunc(_vl) + 1;
          }
          else {
            this.LastPage = Math.trunc(_vl);
          }

          if (this.CurrentPageNo == this.LastPage) {
            this.lastPagerecords = 30;
          }
        });
    }
  }

  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0
    this.resetFilters();
  }
  A2Z: boolean;
  Z2A: boolean;
  clicks: number = 0;
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

  Memos_List: any;
  _ActualMemoslist: any;
  _MemosNotFound: string = "";
  _JsonString: any;
  _MemosSubjectList: any;
  GetmemosInSideInfoBar() {
    this._LinkService._GetOnlyMemoIdsByProjectCode(this.pCode).
      subscribe((data) => {
        let Table_data: any = data;
        console.log("----data---->", data);
        // if(Table_data[0]['JsonData']==[]){
        //   this._MemosSubjectList = [];
        //   this._MemosNotFound = "No memos linked";
        // }
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._JsonString = data[0]['JsonData'];
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);

            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
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
  clicks1: number = 0;
  A2Z1: boolean = true;
  Z2A1: boolean = false;
  _SortPortfoliolist() {
    this.clicks1 += 1;
    if (this.clicks1 != 1) {
      this.A2Z1 = true;
      this.Z2A1 = false;
      this.clicks1 = 0;
    } else {
      this.A2Z1 = false;
      this.Z2A1 = true;
    }
  }

  //DMs Add And Delete
  _DBMemosIDList: any;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _displayProjName: string;

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        this._totalMemos = this._ActualMemoslist.length;
        this.dropdownSettings_Memo = {
          singleSelection: false,
          idField: 'MailId',
          textField: 'Subject',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true
        };
      });
  }
  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  Selected_Projectcode: string;
  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;
  Memo_Select(selecteditems) {
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
  }
  Memo_Deselect() {
    let arr = [];
    this.Empty_MemoDropdown = this.ngDropdwonMemo;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
  }
  SearchMemo: string;
  _onRowClick(projectCode, ProjName) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    this._displayProjName = ProjName;
    this.GetMemosByEmployeeId();
    this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._JsonString = JSON.stringify(data[0]['JsonData']);
          this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
          let arr1: any = this._ActualMemoslist;
          let arr2: any = this._dbMemoIdList;
          this._SelectedIdsfromDb = _.map(arr2, (d) => { return d.MailId });
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
        }
        else {
          this._mappedMemos = 0;
          console.log("No Memos linked For This Project...")
        }
      });
    document.getElementById("LinkSideBar").style.width = "360px";
  }
  closeLinkSideBar() {
    document.getElementById("LinkSideBar").style.width = "0";
  }

  AddDms() {
    this._onRowClick(this.pCode, this.pName);
  }
  memoId: any;
  _AddLink() {
    let _ProjectCode: string = this.Selected_Projectcode;
    let appId: number = 101;//this._ApplicationId;
    if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
      this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
    }
    else {
      this.memoId = JSON.stringify(this._SelectedMemos);
    }
    let UserId = this.Current_user_ID;
    if (this._SelectedMemos.length > 0) {
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.GetmemosInSideInfoBar();
          let Returndata: any = data['Message'];
          this.notifyService.showSuccess("", Returndata);
          this.ngDropdwonMemo = [];
          this._SelectedMemos = [];
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
    }
  }

  //Delete Memos 96290  CRS2004
  deleteMemos(memoId, pcode) {
    this._MemosSubjectList = [];
    let _DeleteSelectedMemo = [];
    _DeleteSelectedMemo.push({ MailId: memoId })
    let arr1: any = this._DBMemosIDList;
    let arr2: any = _DeleteSelectedMemo;
    let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
    this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
    this.memoId = JSON.stringify(result);
    let appId: number = 101;
    let UserId = this.Current_user_ID;
    this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
      subscribe((data) => {
        this.UpdateMemos(pcode);
        // this.GetmemosInSideInfoBar();
        let Returndata: any = data['Message'];
        this.notifyService.showInfo("", Returndata);
      });

  }
  UpdateMemos(pcode) {
    this._MemosSubjectList = [];
    this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);

            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  _OpenMemosInfo(_projectCode, _projectName) {
    if(_projectCode!=undefined && _projectName!=undefined){
    this._dbMemoIdList = [];
    this._displayProjName = _projectName;
    this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        //console.log("Linked Db Memos Data---->",data);
        let Dbdata: any = data[0]['JsonData'];
        // console.log(Dbdata);
        //console.log("DBdata Memos Data---->",Dbdata);
        if (Dbdata == '[]') {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
        if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);

              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
    //Displaying Right Side Bar...
      document.getElementById("MemosSideBar").style.width = "350px";
      document.getElementById("portfloSideBar").style.width = "0";
    }else{
      document.getElementById("MemosSideBar").style.width = "0";
      document.getElementById("portfloSideBar").style.width = "0";
      this.notifyService.showInfo("",'No Smail link in this project.')
    }

  }

  _displayPrtName:any
  _OpenfortfolioInfo(index:number,Project_Name) {

     this._displayPrtName=Project_Name
    this.portfolio_List=JSON.parse(this._ProjectDataList[index]['availableports']);
    if(this.portfolio_List!=null){
      document.getElementById("portfloSideBar").style.width = "350px";
      document.getElementById("MemosSideBar").style.width = "0";
    }else{
      document.getElementById("portfloSideBar").style.width = "0";
      document.getElementById("MemosSideBar").style.width = "0";
      this.notifyService.showInfo("",'No portfolio link in this project.')
    }
   }



   OnCardClick(P_id: any) {
    sessionStorage.setItem('portfolioId', P_id);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }




  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl, pcode);
    myWindow.focus();
  }

  newDetails(pcode,acode:string|undefined) {
debugger
    let qparams='';
    if(acode!==undefined){
      qparams=`?actionCode=${acode}`;
    }
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}${qparams}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  info_active_btn(item) {
    item.isActive = !item.isActive;

    if (this.Mode == 'AssignedTask') {
      if (item.isActive) {
        this._AssignedProjectsList.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.isActive = false;
          }
        });
      }
    }
    else {
      if (item.isActive) {
        this._ProjectDataList.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.isActive = false;
          }
        });
      }

    }
  }





// assigned actions by me, to me start
actionAssignedType:"BYME"|"TOME"="TOME";

getAssignedActions(type:'BYME'|'TOME'){
    this.actionAssignedType=type;
    this.AssignedTask = true;
    this.projectsDataTable = false;
    this._Statustitle='Assigned Actions'

    let EmpNo = this.Current_user_ID;
    let Pgno: number = this.CurrentPageNo;

    this._ObjCompletedProj.Mode = type==='TOME'?'AssignedActions':'AssignedActionsbyMe';
    this._ObjCompletedProj.Emp_No = EmpNo;
    this._ObjCompletedProj.PageNumber = Pgno;
    this._ObjCompletedProj.PageSize = 30;

   //Reset The List for New Data
    this._ProjectDataList = [];

    this.service._GetCompletedProjects(this._ObjCompletedProj)
      .subscribe((data) => {
        if (JSON.parse(data[0]['JsonData_Json']).length == 0) {    console.log('no list present');
          this.notSelectedAnything_msg = `No Actions found Assigned ${type==='BYME'?'By You':'To You'}`;
          this.notSelectedAnything_msg2 = "Please select from dashboard, the data you're looking for";
          this.CurrentPageNo = 0;
          this._CurrentpageRecords = 0;
        }
        else {
          this._ProjectDataList = JSON.parse(data[0]['JsonData_Json']);  console.log(type+' _ProjectDataList-ssssssssss>',this._ProjectDataList);
          this.EmpCountInFilter = JSON.parse(data[0]['Employee_Json']);
          this.TypeContInFilter = JSON.parse(data[0]['ProjectType_Json']);
          this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

          this._CurrentpageRecords = this._ProjectDataList.length;
          this._totalProjectsCount = data[0]['delaycount'];
          // console.log(this._ProjectDataList,"delay actions")
        }
      });

}


// Assigned_projects(){
//   alert("hello")
//   $('.Assigned-projects-list').removeClass('d-none');
//  $('.np-step-1').addClass('d-none');
// }



openAssignedProject(assignId:string) {
debugger
  let name = `/backend/createproject`;
  // var url = document.baseURI + name;
  // var myurl = `${url}`;
  let url = `${window.location.origin}/backend/createproject`;
  if (window.opener) {
    window.opener.location.href = url;
    this.createproject.Assigned_projects();
    window.close();// Redirect the opener window to the new URL
    localStorage.setItem('navigatingToCreateProject', 'true');
  }












  // this.router.navigateByUrl(myurl);

//   var myWindow = window.open(myurl,'_self');
//   myWindow.focus();
}






    getFormattedDelay(delayDays: any): string {
      let delayText = '';

      if (delayDays >= 365) {
        const years = Math.floor(delayDays / 365);
        delayText = years === 1 ? '01 year' : years < 10 ? `0${years} years` : `${years} years`;
      } else if (delayDays >= 30) {
        const months = Math.floor(delayDays / 30);
        delayText = months === 1 ? '01 month' : months < 10 ? `0${months} months` : `${months} months`;
      } else if (delayDays >= 7) {
        const weeks = Math.floor(delayDays / 7);
        delayText = weeks === 1 ? '01 week' : weeks < 10 ? `0${weeks} weeks` : `${weeks} weeks`;
      } else {
        delayText = delayDays==0?'0 days':delayDays < 10 ? `0${delayDays} days` : `${delayDays} days`;
      }

      return `${delayText.toLowerCase()} delay`;
    }

}












