import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef,Renderer2 } from '@angular/core';
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
import { ActivatedRoute, Router } from '@angular/router';
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
import { LoadingBarService } from '@ngx-loading-bar/core';
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
import { BsServiceService } from 'src/app/_Services/bs-service.service';

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.css']
})

export class PortfolioProjectsComponent implements OnInit {
  _PortProjStatus: string;
  _ShareDetailsList: any;
  //_PortfolioListTable: boolean;
  PortfolioList: boolean;
  //Rename_PortfolioName: any;
  Obj_Portfolio_DTO: any;
  _Pid: any;
  _ProjectsListBy_Pid: any[];
  //service: any;
  _StatusCountDB: any;
  TotalProjects: any;
  CountInprocess: any;
  CountCompleted: any;
  CountNotStarted:any;
  CountDelay: any;
  CountNewProject: any;
  countnewprojecRejected: any;
  countprojectCompletelyRejected: any;
  CountForward: any;
  CountCompletionUA: any;
  CountDeadLineExtendedUA: any;
  CountProjectHoldUA: any;
  CountUnderApproval: any;
  CountProjectHold: any;
  CountAll_UA: any;
  CountRejecteds: any;
  MaxDelays: any;
  snackBarRef: any;
  CountDeleted:any
  showDeletedPrjOnly:boolean=false;
  //_snackBar: any;
  dropdownSettings_Status: { singleSelection: boolean; idField: string; textField: string; selectAllText: string; unSelectAllText: string; itemsShowLimit: number; allowSearchFilter: boolean; };
  EmpDropdwn: unknown[];
  dropdownSettings_forEmpChart:
    {
      singleSelection: boolean;
      idField: string; textField:
      string; selectAllText:
      string; unSelectAllText: string;
      itemsShowLimit: number;
      allowSearchFilter: boolean;
    };
  _btnShareDetails: boolean;
  PreferenceTpye: any;
  With_Data: any;
  Share_preferences: boolean;
  _objStatusDTO: StatusDTO;
  ObjSharePortfolio: Shareportfolio_DTO;
  _objDropdownDTO: DropdownDTO;
  Current_user_ID: string;//1
  _ListProjStat: StatusDTO[];
  HideStatusDropdown: boolean;
  _SearchProjects: string;
  PortfolioCreated_UserName: string;
  _PortfolioOwner: string;
  viewpreference:any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public service: ProjectTypeService,
    private notifyService: NotificationService,
    private cdr: ChangeDetectorRef, private router: Router,
    private route: ActivatedRoute,
    // private loadingBar: LoadingBarService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    public BsService: BsServiceService,
    public _LinkService: LinkService) {
    //this.ObjUserDetails = new UserDetailsDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._objStatusDTO = new StatusDTO;
    this.ObjSharePortfolio = new Shareportfolio_DTO();
    this._objDropdownDTO = new DropdownDTO();
  }

  _PortFolio_Namecardheader: string;
  _Portfolio_CreatedDT: string;
  // LoadingBar_state = this.loadingBar.useRef('http');
  Max50Char: boolean;
  Url_portfolioId: number;

  ngOnInit(): void {


    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.Project_Graph = "Graphs";
    this.Max50Char = true;
    this.pieBarCharts = true;
    this._btnShareDetails = true;
    this.route.paramMap.subscribe(params => {
      var id = params.get('portfolioId');
      this.Url_portfolioId = parseInt(id);
      this.BsService.setSelectedPortId(this.Url_portfolioId);
    });
    this.GetPortfolioProjectsByPid();
    this.router.navigate(["../portfolioprojects/" + this._Pid+"/"]);
    this.labelAll();
    this.onButtonClick('tot')
  }

  _PortfolioDetailsById: any;
  _MessageIfNotOwner: string;
  createdBy:any;
  lastProject:any;
  Deletedproject:any
  availablereport:any

  GetPortfolioProjectsByPid() {
    this._PortFolio_Namecardheader = sessionStorage.getItem('portfolioname');
    this._Pid = this.Url_portfolioId;
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this._PortfolioOwner = sessionStorage.getItem('PortfolioOwner');
    this._Portfolio_CreatedDT = sessionStorage.getItem('portfolioCDT');
    // this._PortProjStatus = "";
    this._ShareDetailsList = [];
    // console.log(this._PortFolio_Namecardheader, this._Pid, this.Current_user_ID);
    // this._PortfolioListTable = false;
    this.PortfolioList = true;
    this.Obj_Portfolio_DTO.Portfolio_ID = this._Pid;
    //this._Pid = P_id;
    //this._PortFolio_Namecardheader = P_Name;
    this.Obj_Portfolio_DTO.Portfolio_Name = this._PortFolio_Namecardheader;
    //Get Projects
    this._ProjectsListBy_Pid = [];
    //this.LoadingBar_state.start();
    this.service.GetProjectsBy_portfolioId(this._Pid)
      .subscribe((data) => {
        this._MessageIfNotOwner = data[0]['message'];

        this._PortfolioDetailsById = JSON.parse(data[0]['PortfolioDetailsJson']);
        this._PortFolio_Namecardheader = this._PortfolioDetailsById[0]['Portfolio_Name'];
        this.Rename_PortfolioName = this._PortFolio_Namecardheader;
        this._PortfolioOwner = this._PortfolioDetailsById[0]['Portfolio_Owner'];
        this.createdBy= this._PortfolioDetailsById[0]['Created_By'];
        this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
        this.lastProject=this._ProjectsListBy_Pid.length;
        console.log("Portfolio Projects---->", this._ProjectsListBy_Pid);
        // this.filteredPortfolioProjects = this._ProjectsListBy_Pid;
        this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
        this.Deletedproject=JSON.parse(data[0]['PortfolioDeletedProjects']);
        console.log(" this.Deletedproject", this.Deletedproject)
        //  this.availablereport=this.Deletedproject.availablereport
        // console.log(this.availablereport,'eeeeeeeeeeeeeeeeeeeeeeeeeeeee')
        this.CountDeleted=this.Deletedproject.length
        // this.LoadingBar_state.stop();
        this.TotalProjects = this._ProjectsListBy_Pid.length;
        var rez = {};
        this._ProjectsListBy_Pid.forEach(function (item) {
          rez[item.Status] ? rez[item.Status]++ : rez[item.Status] = 1;
        });
        // Countsall
        this.CountInprocess = rez['InProcess'];
        if (!this.CountInprocess) {
          this.CountInprocess = 0;
        }
        this.CountCompleted = rez['Completed'];
        if (!this.CountCompleted) {
          this.CountCompleted = 0;
        }

        this.CountNotStarted = rez['Not Started'];
        if (!this.CountNotStarted) {
          this.CountNotStarted = 0;
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
        //Step One
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
        this.Count_ToDoAchieved = rez['ToDo Achieved'];
        if (!this.Count_ToDoAchieved) {
          this.Count_ToDoAchieved = 0;
        }
        this.Count_ToDoCompleted = rez['ToDo Completed'];
        if (!this.Count_ToDoCompleted) {
          this.Count_ToDoCompleted = 0;
        }
        let ProjectHolded: number = rez['Project Holded'];
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
        //console.log("rejecteds Projects Count---->",this.CountRejecteds)
        this.CountProjectHold = this.CountProjectHold + ProjectHolded;
        //Returns Max Value
        this.MaxDelays = Math.max.apply(Math, this._ProjectsListBy_Pid.map(function (o) { return o.Delaydays; }))
        //let DelayStat:any = this._ProjectsListBy_Pid.map(function (o) { return o.Status=="Delay"; })
        if (this.MaxDelays > 0) {
          let action = "Close"
          this.snackBarRef = this._snackBar.open('Maximum Delay Days    ' + "  (" + this.MaxDelays + ')', action,
            {
              duration: 2500,
            });
          //this.notifyService.showError(" Maximum Days Delay",this.MaxDelays);
          this.snackBarRef._open();
          // this._snackBar.open("Maximum Days Delay",this.MaxDelays);
        }
        this.dropdownSettings_Status = {
          singleSelection: true,
          idField: 'StatusCountDB',
          textField: 'StatusCountDB',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true
        };
        this.EmpDropdwn = Array.from(this._ProjectsListBy_Pid.reduce((m, t) => m.set(t.TM_DisplayName, t), new Map()).values());
        // this.EmpDropdwn = this.EmpDropdwn.sort((a, b) => (a.TM_DisplayName > b.TM_DisplayName) ? 1 : -1);
        this.dropdownSettings_forEmpChart = {
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'TM_DisplayName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true,
        };
        this._ShareDetailsList = JSON.parse(data[0]['SharedDetailsJson']);
        if (this._ShareDetailsList == 0) {
          this._btnShareDetails = true;
        }
        else {
          this._btnShareDetails = false;
        }
        this.PreferenceTpye = data[0]["PreferenceType"];
        this.With_Data = JSON.parse(data[0]['EmployeePreferenceJson']);
        this.Share_preferences = false;
        this.viewpreference=this.With_Data[0]&&this.With_Data.Preferences;
        if (this.PreferenceTpye == 1) {
          if (this.With_Data[0].Preferences == "View Only") {
            this.Share_preferences = true;
          }
          else if (this.With_Data[0].Preferences == "Full Access") {
            this.Share_preferences = false;
          }
        }
        else if (this.PreferenceTpye == 0) {
          this.Share_preferences = false;
        }
      });
  }

  btnEdit() {
    this.Max50Char = true;
  }

  _raciDetails: boolean = true;

  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }

  clearSession(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  returnProjectsUrl: string;

  populateForm() {
    this.Obj_Portfolio_DTO.Portfolio_ID;
    let _Portid: any = this.Obj_Portfolio_DTO.Portfolio_ID;
    // localStorage.setItem('_PortfolioId', _Portid);
    //console.log("Populate Form Id", _Portid);
    localStorage.setItem('_PortfolioName', this._PortFolio_Namecardheader);
    // this.returnProjectsUrl = 'CreatePortfolio';
    // this.router.navigate([this.returnProjectsUrl]);
    let name: string = 'AddProjectsToPortfolio';
    var url = document.baseURI + name;
    var myurl = `${url}/${_Portid}`;
    var myWindow = window.open(myurl, _Portid);
    myWindow.focus();
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
      this.service.Portfolio_Rename(_Pname, _Pid).subscribe(data => {
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
          (data) => {
            // this.LoadingBar_state.start();
            this._ListProjStat = data as StatusDTO[];
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
  _portfolioName: string;
  alreadyExists: string;

  resetInputText() {
    this._portfolioName = '';
    this.alreadyExists = '';
    this.activeClass_NewPortfolio = false;
  }

  DropdownOpen() {
    this.activeClass_NewPortfolio = true;
  }

  EmployeeList: EmployeeDTO[];
  Company_List: CompanyDTO[];
  selectedItems = [];
  _FilterStatusList: any;
  // dropdownSettings_Status: IDropdownSettings = {};
  dropdownSettings: IDropdownSettings = {};
  dropdownSettings_Emp: IDropdownSettings = {};
  dropdownSettings_Cmp: IDropdownSettings = {};
  dropdownSettings_Stat: IDropdownSettings = {};
  dropdownSettings_Team: IDropdownSettings = {};
  dropdownsettings_Page: IDropdownSettings = {};
  _SelectedEmployees: any = [];
  _SelectedEmpIds_String: string;

  GetCompanies() {
    this.service.GetCompanies().subscribe(res => {
      this.Company_List = res as CompanyDTO[];
      // console.log(this.Company_List)
      this.dropdownSettings_Cmp = {
        singleSelection: true,
        idField: 'Com_No',
        textField: 'Com_Name',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        closeDropDownOnSelection: true
      };
    })
  }

  //Employee DropDown Bind
  ngEmployeeDropdown: any;
  ngEmployeeDropdown2: any = [];
  EmployeeDropdown: string;
  _ErrorMessage_comp: string;
  _ErrorMessage_User: string;
  _ErrorMessage_Pref: string;

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
  }

  Project_Code:any
  Team_Autho:any
  Team_Res:any



LoadDocument(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

  let FileUrl: string;
  // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
  FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

  if (iscloud == false) {
    if (this.Team_Autho == this.Team_Res) {
      // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
      FileUrl = (FileUrl +  this.Team_Res + "/" + this.Project_Code + "/" + url1);

    }
    else if (this.Team_Autho !=  this.Team_Res) {
      FileUrl = (FileUrl + this.Team_Res + "/" + this.Project_Code + "/" + url1);
    }

    let name = "ArchiveView/" + this.Project_Code;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(FileUrl);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    filename = filename.replace(/#/g, "%23");
    filename = filename.replace(/&/g, "%26");
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&"+  "type=" + type;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }

  else if (iscloud == true) {
    let name = "ArchiveView/" + this.Project_Code;
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
  }

  _CompanyNo: string;
  _EmployeeId: string;
  _Preferences: string;
  preferences: any;
  CompanyDropdown: string;
  ngCompanyDropdown: any;

  share_Users() {
    document.getElementById("shareBar").style.width = "400px";
    document.getElementById("rightbar-overlay").style.display = "block";
    this.GetCompanies();
    //SnackBar Dismiss
  }

  OnCompanySelect(CompNo: string) {
    this.ngEmployeeDropdown = null;
    this._ErrorMessage_comp = "";
    this._CompanyNo = CompNo['Com_No'];
    this.CompanyDropdown = this._CompanyNo;
    // let PortfolioId: any = localStorage.getItem('Pid');
    this.service.GetEmployeesby_CompNo(this._CompanyNo, this.Url_portfolioId)
      .subscribe((data) => {
        console.log("Portfolio Id-------->", this.Url_portfolioId, this._CompanyNo)
        console.log("-Employees--->", data);
        this.EmployeeList = data as EmployeeDTO[];
        //console.log("employee lst",this.EmployeeList);
        this.dropdownSettings_Emp = {
          singleSelection: false,
          idField: 'Emp_No',
          textField: 'TM_DisplayName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 5,
          allowSearchFilter: true,
          closeDropDownOnSelection: true
        };
      });
  }

  OnCmpDeselect() {
    //this.ngCompanyDropdown = [{}];
    this.ngCompanyDropdown = "";
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

  Current_user: string;
  _PortfolioList: PortfolioDTO[];
  _ExistingPortfolioOfProjects = [];
  // Current_user_ID: string;

  GetUserDetails() {
    this.service.NewGetUserDetails(this.Current_user);
  }

  GetPortfolioByEmployee() {
    this.service.GetPortfolioByEmployee()
      .subscribe(
        (data) => {
          this._PortfolioList = data as PortfolioDTO[];
          this._ExistingPortfolioOfProjects = this._PortfolioList;
          //console.log("Portfolio:", this._ExistingPortfolioOfProjects);
          this.cdr.detectChanges();
        });
  }


  _PreferencesList: any;

  _PortfolioListTable_Bttn() {
    this._ShareDetailsList = [];
    this._ProjectsListBy_Pid = [];
    // this._PortfolioListTable = true;
    this.PortfolioList = false;
    this._PreferencesList = [];
  }

  Radio_View_fullaccess(val: string) {
    this._ErrorMessage_Pref = "";
    this._Preferences = val;
  }

  share() {
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
      this.notifyService.showInfo("You Can't Share Portfolio by yourSelf", "");

    }
    else {
      if (this.CompanyDropdown != undefined && this.EmployeeDropdown != undefined && this.preferences != null) {
        this.ObjSharePortfolio.CompanyId = this._CompanyNo;
        this.ObjSharePortfolio.EmployeeId = this._SelectedEmpIds_String;
        this.ObjSharePortfolio.Portfolio_ID = this.Url_portfolioId;
        this.ObjSharePortfolio.Preference = this._Preferences;
        this.ObjSharePortfolio.Shared_By = this.Current_user_ID;
        this.ObjSharePortfolio.IsActive = true;
        this.service.SharePortfolio(this.ObjSharePortfolio);
        this.notifyService.showInfo("Successfully", "Portfolio Shared");
        this.GetPortfolioProjectsByPid();
        this.Close_ShareModel();
        this.PortfolioList = false;
        this.cdr.detectChanges();
      }
    }
  }

  @ViewChild('closebutton') closebutton;
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
    this.closebutton.nativeElement.click();
  }

  // BackBttn() {
  //   //
  //   //Working
  //   this.ngStatusDrpDwn = [];
  //   this.BarChartEmp = [];
  //   this.BarChartEmpNo = null;
  //   this.PortfolioList = false;
  //   this._PortfolioListTable = true;
  //   this.Project_Graph = "Graphs";
  //   this.ProjectsClick();
  //   // if (this._snackBar.open) {
  //   //   this.snackBarRef.dismiss();
  //   // }
  //   // if (this.LoadingBar_state) {
  //   //   this.LoadingBar_state.stop();
  //   // }
  // }

  deletedBy: string;
  Count_ToDoAchieved: any;
  Count_ToDoCompleted: any;

  DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
    if(this.lastProject==1){
      this.deletedBy = this.Current_user_ID;
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: proj_Name,
        message2 : 'Note: Deleting all the projects will delete the portfolio.',
        message3 : 'Hint: Before deleting this project, Please add more projects to avail "' +this._PortFolio_Namecardheader+'" portfolio.'
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

              this.Count_ToDoAchieved = rez['ToDo Achieved'];
              if (!this.Count_ToDoAchieved) {
                this.Count_ToDoAchieved = 0;
              }
              this.Count_ToDoCompleted = rez['ToDo Completed'];
              if (!this.Count_ToDoCompleted) {
                this.Count_ToDoCompleted = 0;
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
              this.notifyService.showInfo("Please add projects to avail this portfolio",'Alert');
            });
          this._objStatusDTO.Emp_No = this.Current_user_ID;
          this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
            (data) => {
              this._ListProjStat = data as StatusDTO[];
              this.cdr.detectChanges();
            });
        })
      }
      else {
        this.notifyService.showInfo("Action Cancelled ", '');
      }
    });
    }
    else{
      this.deletedBy = this.Current_user_ID;
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: proj_Name,
        message2 : 'Note: Deleting all the projects will delete the portfolio.'
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

              this.Count_ToDoAchieved = rez['ToDo Achieved'];
              if (!this.Count_ToDoAchieved) {
                this.Count_ToDoAchieved = 0;
              }
              this.Count_ToDoCompleted = rez['ToDo Completed'];
              if (!this.Count_ToDoCompleted) {
                this.Count_ToDoCompleted = 0;
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
              this.CountNotStarted = rez[' Not Started '];
              if (!this.CountNotStarted) {
                this.CountNotStarted = 0;
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
              this._ListProjStat = data as StatusDTO[];
              this.cdr.detectChanges();
            });
        })
      }
      else {
        this.notifyService.showInfo("Action Cancelled ", '');
      }
    });
    }

     //}
    //  else {
    // this.notifyService.showError("Can't delete shared projects", 'Permission Denied ');
    //  }
  }

  messagefav: string;
  countFav: number;

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

  labelAll() {
    this._PortProjStatus = "";
    this.showDeletedPrjOnly=false;
  }

  labelInprocess() {
    this._PortProjStatus = "InProcess";
    this.showDeletedPrjOnly=false;
  }


  labeldeletedproject(){
    this.showDeletedPrjOnly=true;
    this._PortProjStatus = "";
  }



  labelDelay() {
    this._PortProjStatus = "Delay";
    this.showDeletedPrjOnly=false;
  }

  labelDraft(){
    this._PortProjStatus = "Not Started";
    this.showDeletedPrjOnly=false;
  }


  labelCompleted() {
    this._PortProjStatus = 'Completed';
    this.showDeletedPrjOnly=false;
    console.log('_PortProjStatus:',this._PortProjStatus);
    console.log('_ProjectsListBy_Pid:',this._ProjectsListBy_Pid);
  }

  labelNewProject() {
    this._PortProjStatus = "New Project";
    this.showDeletedPrjOnly=false;
    if (this._PortProjStatus.includes('New Project')) {
      this._PortProjStatus = 'New Project';
    }
  }

  labelRejecteds() {
    this._PortProjStatus = "Rejected";
    this._PortProjStatus.includes('Rejected');
    this.showDeletedPrjOnly=false;
    //this._PortProjStatus.includes('New Project Rejected');
  }



  labelToDoAchieved() {
    this._PortProjStatus = "ToDo Achieved";
    this.showDeletedPrjOnly=false;
    // this._PortProjStatus.includes('ToDo Achieved');
  }
  labelToDoCompleted() {
    this._PortProjStatus = "ToDo Completed";
    this.showDeletedPrjOnly=false;
  }

  labelUA() {
    this._PortProjStatus = "Under Approval";
    this._PortProjStatus.includes('Under Approval')
    this.showDeletedPrjOnly=false;
  }

  labelProjectHold() {
    this._PortProjStatus = "Project Hold";
    this._PortProjStatus.includes('Project Hold');
    this.showDeletedPrjOnly=false;
  }

  //Sorting.....
  clicks: number = 0;
  A2Z: boolean = true;
  Z2A: boolean = false;

  _SortProjectList() {
    this.clicks += 1;
    if (this.clicks != 1) {
      this.A2Z = true;
      this.Z2A = false;
      this.clicks = 0;
    } else {
      this.A2Z = false;
      this.Z2A = true;
    }
  }

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

      setTimeout(() => {
        const buttonElement = this.el.nativeElement.querySelector('.badge');
        if (buttonElement) {
          buttonElement.focus();
        }
      }, 0);
    }

  }

  HideProjects: boolean;
  pieBarCharts: boolean;

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
  BarChartEmp: any;

  LoadBarChart() {
    am4core.options.autoDispose = true;
    let BarChart = am4core.create("chartdiv1", am4charts.XYChart3D);
    BarChart.logo.disabled = true;
    this.service._BarChart(this._Pid, this.BarChartEmpNo).subscribe(
      (data) => {
        //this.LoadingBar_state.start();
        this.barchartData = data as BarChartDTO[];
        console.log("BarChartData", this.barchartData);
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
          this._DBMemosIDList = data[0]['JsonData'];
          //console.log("--------->",this._DBMemosIDList);
          if (this._DBMemosIDList == '[]') {
            this._MemosNotFound = "No memos linked";
          }
          else {
            this._MemosNotFound = "";
            this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          }

          // console.log("--------->",this._DBMemosIDList);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              this._MemosNotFound = "";
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
    // console.log("Url----------->", memo_Url);
    window.open(Url);
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
  duration: any;
  submissiontype: any;
  StandardDuration: any;


  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }


  newDetails(pcode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  _MainProjectStatus: string;
  _loadChildComponent = false;
  parentToChild: string;
  // openInfo(pcode, pName) {
  //   this._loadChildComponent = true;
  //   this.parentToChild = pcode;
  //   let projName = pName;
  //   document.getElementById("mysideInfobar").style.width = "410px";
  // }

  openInfo2(pcode) {
    this.router.navigate(["../portfolioprojects/" + this._Pid + "/projectinfo/", pcode,"2"]);
    //document.getElementById("mysideInfobar").style.width = "410px";
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    //setTimeout((this.closeInfo2),1000, "Hello", "John");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");


  }

  closeInfo2() {
    document.getElementById("InfoContent2").style.width = "0";
    //document.getElementById("mysideInfobar").style.width='0';
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }

  info_active_btn(item: any): void {
      // If the item is already active, deactivate it
      // If the item is not active, deactivate all items and activate the clicked one
      this._ProjectsListBy_Pid.forEach(otherItem => otherItem.active = false);
      item.active = true;

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

  closeInfo() {
    this._ProjectsListBy_Pid.forEach(item => item.active = false);
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    // $('.project-list_AC').removeClass('active');
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["../portfolioprojects/" + this._Pid+"/"]);
  }


  // share_Users() {
  // }

  _CloseshareBar() {
    this.Close_ShareModel();
    document.getElementById("shareBar").style.width = "0";
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  // *---------- Dms Add ANd Delete Fuctionality-------------*//
  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  //_displayProjName: string;
  _DBMemosIDList: any;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  Memos_List: any;
  _ActualMemoslist: any;

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
          // console.log("No Memos linked For This Project...")
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
          this._OpenMemosInfo(this.pCode, this.pName);
          document.getElementById("MemosSideBar").style.width = "0";
          // this.GetmemosInSideInfoBar();
          let Returndata: any = data['Message'];
          this.notifyService.showSuccess("", Returndata);
          this.closeLinkSideBar();
          this.ngDropdwonMemo = [];
          this._SelectedMemos = [];
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
    }
  }

  //Delete Memos 162942  CRS26428
  deleteMemos(memoId, pcode) {
    // memoId = 162942;
    // pcode = 'CRS26428';
    this._MemosSubjectList = [];
    let _DeleteSelectedMemo = [];
    _DeleteSelectedMemo.push({ MailId: memoId });
    let arr1: any = this._DBMemosIDList;
    let arr2: any = _DeleteSelectedMemo;
    // console.log("DB Memo List=--------->", this._DBMemosIDList);
    // console.log("_DeleteSelectedMemo List------------>", _DeleteSelectedMemo);
    let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
    this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
    this.memoId = JSON.stringify(result);
    let appId: number = 101;
    let UserId = this.Current_user_ID;
    this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
      subscribe((data) => {
        this.UpdateMemos(pcode);
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

  onButtonClick(buttonId: string) {

    const elements = {
      'tot': 'active-total-project',
      'inn': 'active-in-processs',
      'del': 'active-Delay-head',
      'draft': 'active-Not-started-head',
      'underappr': 'active-new-project-head',
      'pro-hold':'active-Hold_color',
      'compl' : 'active-complteed_color',
       'delete':'active-Delete-head',
       'reject':'active-rejected',
       'todocomp':'active-todo-completed-head',
       'todoachi':'active-todo-achieved',
       'new-pro':'active-new-project-head'

    };

    for (const id in elements) {
      const element = document.getElementById(id);
      if (element) {
        if (buttonId === id) {
          this.renderer.addClass(element, elements[id]);
        } else {
          this.renderer.removeClass(element, elements[id]);
        }
      }
    }
  }
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

}
/// <!-- <ng-select [placeholder]="' Company '" [(ngModel)]="ngCompanyDropdown" (click)="OnCompanySelect()">
// <ng-option [value]="com.Com_No" *ngFor="let com of Company_List" >
// {{com.Com_Name}}
// </ng-option>
// </ng-select> -->
// <!-- <ng-select  [placeholder]="' TM Name '"
// multiple="true" [(ngModel)]="ngEmployeeDropdown" (change)="OnEmpSelect()">
// <ng-option [value]="usr.Emp_No" *ngFor="let usr of EmployeeList">
// <a *ngIf="usr.Emp_No!=Current_user_ID">{{usr.TM_DisplayName}}</a>
// </ng-option>
// </ng-select> -->
