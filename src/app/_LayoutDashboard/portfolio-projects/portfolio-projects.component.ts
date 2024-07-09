import { DatePipe } from '@angular/common';
import { BsServiceService } from './../../_Services/bs-service.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef,Renderer2,ViewChildren,QueryList } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { EmployeeDTO } from 'src/app/_Models/employee-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { CompanyDTO } from 'src/app/_Models/company-dto';
import { MatCalendar} from '@angular/material/datepicker';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as moment from 'moment';
import { CalendarOptions } from '@fullcalendar/angular';
import { CalenderService } from 'src/app/_Services/calender.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ProjectMoreDetailsService } from '../../_Services/project-more-details.service';
import Swal from 'sweetalert2';

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
// import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { helpers } from 'chart.js';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { debug } from 'console';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


declare var ApexCharts: any;

export const MY_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD"
  },
  display: {
    dateInput: "dddd, MMMM D YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "YYYY-MM-DD HH:mm:ss",
    monthYearA11yLabel: "MMMM YYYY"
  }
};
moment.locale('en');

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.css']
})

export class PortfolioProjectsComponent implements OnInit {
  _PortProjStatus: string;
  _ShareDetailsList: any;
  _SharedToEmps:any=[];   // array of emp number to whom the portfolio shared.
  //_PortfolioListTable: boolean;
  PortfolioList: boolean;
  //Rename_PortfolioName: any;
  Obj_Portfolio_DTO: any;
  _Pid: any;
  _ProjectsListBy_Pid: any[];
  //service: any;

  TOTAL_ACTIONS_IN_PROCESS: number = 0;
  TOTAL_ACTIONS_IN_DELAY: number = 0;
  TOTAL_ACTIONS_DONE: number = 0;
  TOTAL_ACTIONS_UNDER_APPROVAL: number = 0;
  TOTAL_ACTIONS_REJECTED: number = 0;
  TOTAL_ACTIONS_IN_CUA: number = 0;
  TOTAL_ACTIONS_IN_FUA: number = 0;
  TOTAL_ACTIONS_IN_HOLD: number = 0;
  TOTAL_ACTIONS: number = 0;





  currentActionView: number | undefined;
  URL_ProjectCode: any;
  Current_user_ID: string;


  requestDetails: any;
  requestType: any;
  isPrjContainAprvls:boolean=false;  // to control pending approval label located in prj status section.
  forwardType: string;
  requestDate: any;
  requestDeadline: any;
  approvalEmpId: any;
  requestComments: any;
  new_deadline: any;
  newResponsible: any;
  previouscoments: boolean = false;
  singleapporval_json: any[] = [];
  revert_json: any;
  transfer_json: any;
  prviousCommentsList: any;
  initials1: any;
  Submitted_By: string;
  reject_list: any;
  comments_list: any;
  new_cost: any;
  ObjSubTaskDTO: SubTaskDTO;
  Activity_List: any=[];
  Project_List: any;
  filteredEmployees: any = [];
  Client_List: any;
  selectedclient: string;
  owner_dropdown: any;
  selectedOwnResp: any;
  responsible_dropdown: any;
  Category_List: any;
  selectedcategory: any;
  EndDate1: any = new Date();
  currentSidebarOpened:"LINK_DMS"|"LINK_PORTFOLIO"|"LIST_OF_ATTACHMENTS"|"COMMENTS"|"ACTIVITY_LOG"|"TIMELINE_VIEW"|"PEOPLES"|"MEETINGS"|"NOT_OPENED"='NOT_OPENED';
  bothActTlSubm:boolean=false;
  ProjDto:ProjectDetailsDTO|undefined;
  formFieldsRequired:boolean=false;
  isLoadingData:boolean|undefined;




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
  CountCancellation:any
  CountCompletionUA: any;
  CountDeadLineExtendedUA: any;
  CountProjectHoldUA: any;
  CountUnderApproval: any;
  CountProjectHold: any;
  CountCompletionapproval:any
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
  Share_preferences: any;
  _objStatusDTO: StatusDTO;
  ObjSharePortfolio: Shareportfolio_DTO;
  _objDropdownDTO: DropdownDTO;

  _ListProjStat: StatusDTO[];
  HideStatusDropdown: boolean;
  _SearchProjects: string;
  PortfolioCreated_UserName: string;
  _PortfolioOwner: string;
  viewpreference:any;

  Submission: any;
  requestaccessList: any;
  isRequestSent: boolean;

  type_list: any;
  Pid: any;
  ProjectType: any;
  _MasterCode: any;
  isrespactive: any;
  projectActionInfo: any;
  filteredPrjAction: any;
  filterstatus: any;
  filteremployee: any;

  // selected: null;
  SelectStartdate: null;
  Selectenddate: null;
  selectDay: null;
  selectdaytime: any[];
  singleselectarry: any[];
  Avaliabletime: any[];
  objProjectDto: ProjectDetailsDTO;
  portfolioid: any;
  fruitInput: any;


  constructor(
    private el: ElementRef,
    private projectMoreDetailsService: ProjectMoreDetailsService,
    private renderer: Renderer2,
    public service: ProjectTypeService,
    private notifyService: NotificationService,
    private cdr: ChangeDetectorRef, private router: Router,
    private route: ActivatedRoute,
    private bsService: BsServiceService,



    // private loadingBar: LoadingBarService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    public datepipe: DatePipe,
    public BsService: BsServiceService,

    public _LinkService: LinkService,  private CalenderService: CalenderService,) {
    //this.ObjUserDetails = new UserDetailsDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._objStatusDTO = new StatusDTO;
    this.ObjSharePortfolio = new Shareportfolio_DTO();
    this._objDropdownDTO = new DropdownDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.BsService.data$.subscribe((data)=>{
      console.log("data is this:",data);
   });



  }

  _PortFolio_Namecardheader: any;
  _Portfolio_CreatedDT: string;
  // LoadingBar_state = this.loadingBar.useRef('http');
  Max50Char: boolean;
  Url_portfolioId: any;

  checkForUpdates(){
        const data=localStorage.getItem('newdata');
        console.log('data is',data)
  }
  isClassAdded: boolean = false;
  onKeyPress() {
    // Check if the input field is empty
    if (this.agendaInput===undefined||this.agendaInput.trim() === '') {
      // If input field is empty, remove the class
      this.isClassAdded = false;
    } else {
      // If input field is not empty, add the class
      this.isClassAdded = true;
    }
  }

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
    this.onButtonClick('tot');
    // this.getusermeetings();
    this.updateListbyDetailsPage();
  }

  updateListbyDetailsPage(){
    setInterval(() => {
      const update = localStorage.getItem('projectUpdated');

      if (update && update == '1') {
        this.GetPortfolioProjectsByPid();
        localStorage.setItem('projectUpdated', '0');
      }
    }, 1000);
  }

  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   //Add 'implements AfterViewInit' to the class.
  //   this.Task_type(2)
  // }


  _PortfolioDetailsById: any;
  _MessageIfNotOwner: string;
  createdBy:any;
  lastProject:any;
  Deletedproject:any
  availablereport:any
  Availableport:any
  Portfolio : any[]
  Employeshare:any[]
  GetPortfolioProjectsByPid() {
    debugger
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
debugger
        this._MessageIfNotOwner = data[0]['message'];

        this._PortfolioDetailsById = JSON.parse(data[0]['PortfolioDetailsJson']);
        this._PortFolio_Namecardheader = this._PortfolioDetailsById[0]['Portfolio_Name'];
        this.Rename_PortfolioName = this._PortFolio_Namecardheader;
        this._PortfolioOwner = this._PortfolioDetailsById[0]['Portfolio_Owner'];
        this.createdBy = this._PortfolioDetailsById[0]['Created_By'];
        this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
        this.lastProject = this._ProjectsListBy_Pid.length;
        this.Employeshare =JSON.parse(data[0]['Employee_Json']);
        console.log( this.Employeshare,'employeeeeeeeeeeee')
        console.log("Portfolio Projects---->", data);
        // this.filteredPortfolioProjects = this._ProjectsListBy_Pid;
        this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
        this.Deletedproject = JSON.parse(data[0]['PortfolioDeletedProjects']);
        console.log(" this.Deletedproject", this.Deletedproject)
        this.Availableport = this._ProjectsListBy_Pid[0].availableports
        console.log(this.Availableport,"availableportsavailableportsavailableports")

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

        this.CountCancellation = rez['Cancellation Under Approval'];
        if (!this.CountCancellation) {
          this.CountCancellation = 0;
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
        this.CountAll_UA =    this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;
        this.CountNewProject = this.CountNewProject;
        this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
        //console.log("rejecteds Projects Count---->",this.CountRejecteds)
        this.CountProjectHold = this.CountProjectHold + ProjectHolded;
        //Returns Max Value
        this.MaxDelays = Math.max.apply(Math, this._ProjectsListBy_Pid.map(function (o) { return o.Delaydays; }))
        //let DelayStat:any = this._ProjectsListBy_Pid.map(function (o) { return o.Status=="Delay"; })
        // if (this.MaxDelays > 0) {
          // let action = "Close"
          // this.snackBarRef = this._snackBar.open('Maximum Delay Days    ' + "  (" + this.MaxDelays + ')', action,
          //   {
          //     duration: 2500,
          //   });
          //this.notifyService.showError(" Maximum Days Delay",this.MaxDelays);
          // this.snackBarRef._open();
          // this._snackBar.open("Maximum Days Delay",this.MaxDelays);
        // }
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
        if(this._ShareDetailsList){

          this._SharedToEmps=this._ShareDetailsList.map(item=>item.EmployeeId);
          }
        if (this._ShareDetailsList == 0) {
          this._btnShareDetails = true;
        }
        else {
          this._btnShareDetails = false;
        }
        this.PreferenceTpye = data[0]["PreferenceType"];
        debugger
        this.With_Data = JSON.parse(data[0]['EmployeePreferenceJson']);
        this.Share_preferences = false;
        this.viewpreference=this.With_Data[0]&&this.With_Data.Preferences;
        if (this.PreferenceTpye == 1) {
          if (this.With_Data && this.With_Data.length > 0 && this.With_Data[0].Preferences === "View Only") {
            this.Share_preferences = true;
        }
          else if (this.With_Data[0] && this.With_Data[0].Preferences == "Full Access") {
            this.Share_preferences = false;
          }
        }
        else if (this.PreferenceTpye == 0) {
          this.Share_preferences = false;
        }

        if(
            (this._PortProjStatus=='Delay' && this.CountDelay==0) ||
            (this._PortProjStatus=='Project Hold' && this.CountProjectHold==0) ||
            (this._PortProjStatus=='InProcess' && this.CountInprocess==0) ||
            (this._PortProjStatus=='Not Started' && this.CountInprocess ==0) ||
            (this._PortProjStatus=='Completed' && this.CountCompleted == 0) ||
            (this._PortProjStatus == 'New Project Rejected' && this.CountNewProject==0) ||
            (this._PortProjStatus=='Rejected' && this.CountRejecteds==0) ||
            (this._PortProjStatus=='ToDo Achieved' && this.Count_ToDoAchieved==0) ||
            (this._PortProjStatus=='Under Approval' && this.CountAll_UA==0) ||
            (this._PortProjStatus=='ToDo Completed' && this.Count_ToDoCompleted==0)||
            (this._PortProjStatus=='Completion Under Approval' && this.CountCompletionUA==0)||
            (this._PortProjStatus=='Cancellation Under Approval' && this.CountCancellation==0)||
            (this._PortProjStatus=='Deadline Extend Under Approval' && this.CountDeadLineExtendedUA==0)||
            (this._PortProjStatus==''&&this.showDeletedPrjOnly==true && this.CountDeleted==0)

         ){
        this.labelAll()
        this.onButtonClick('tot')
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
    document.getElementById("shareBar").classList.add("kt-action-panel--on");
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
  shararrayseprate:any
  isElementPresent:any
  share() {
    // if (this.CompanyDropdown == undefined) {
    //   return this._ErrorMessage_comp = "* Please Select Company";
    // }
    debugger
    if (this.shareToEmplys == undefined) {
      return this._ErrorMessage_User = "* Please Select User Name";

    }
    if (this.preferences == null) {
      return this._ErrorMessage_Pref = "* Please Select Preferences";
    }
    if (this.Current_user_ID == this.shareToEmplys[0]) {
      this.notifyService.showInfo("You Can't Share Portfolio by yourSelf", "");
    }

    else {
      //  this.shararrayseprate = this.shareToEmplys.join(', ')
      if (this.shareToEmplys != undefined && this.preferences != null) {
        // this.ObjSharePortfolio.CompanyId = '400';
        this.ObjSharePortfolio.EmployeeId = this.shareToEmplys.join(',');
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
    this.shareToEmplys=[]
    // this.shareToEmplys=''
    // this.Employeshare =[]
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

              this.CountCancellation = rez['Cancellation Under Approval'];
              if (!this.CountCancellation) {
                this.CountCancellation = 0;
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
              this.CountAll_UA =   this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;

              this.CountNewProject = this.CountNewProject;
              this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
              // console.log("rejecteds Projects Count---->", this.CountRejecteds)
              this.CountProjectHold = this.CountProjectHold + ProjectHolded;
              this.notifyService.showSuccess("Deleted successfully ", '');
              // this.GetPortfolioProjectsByPid()
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
              this.CountCancellation = rez['Cancellation Under Approval'];
              if (!this.CountCancellation) {
                this.CountCancellation = 0;
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
              this.CountAll_UA =   this.CountUnderApproval + this.CountProjectHoldUA + EnactiveUA;
              this.CountNewProject = this.CountNewProject;
              this.CountRejecteds = this.countprojectCompletelyRejected + this.countnewprojecRejected;
              // console.log("rejecteds Projects Count---->", this.CountRejecteds)
              this.CountProjectHold = this.CountProjectHold + ProjectHolded;
              this.notifyService.showSuccess("Deleted successfully ", '');
              this.GetPortfolioProjectsByPid()

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
    debugger
    var deleteProject = window.confirm('Are you sure you want to Remove ?');
    if (deleteProject) {
      //console.log(p_id, empid, Sharedby);
      this.service.Portfolio_ShareUsersDelete(p_id, empid, Sharedby).subscribe(
        (data) => {
          this.service.GetProjectsBy_portfolioId(p_id)
            .subscribe((data) => {
              this._ShareDetailsList = JSON.parse(data[0]['SharedDetailsJson']);
              if(this._ShareDetailsList){
                this._SharedToEmps=this._ShareDetailsList.map(item=>item.EmployeeId);
                }
              console.log(this._ShareDetailsList)
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

  labelCompletionapproval(){
    this._PortProjStatus="Completion Under Approval"
    this.showDeletedPrjOnly=false;
    console.log("Completion approval",this._PortProjStatus)
  }

  labelCancellationapproval(){
    this._PortProjStatus='Cancellation Under Approval'
    this.showDeletedPrjOnly=false
  }


  labelForward(){
    this._PortProjStatus="Forward Under Approval"
    this.showDeletedPrjOnly=false
  }

  labelDeadline(){
    this._PortProjStatus="Deadline Extended Under Approval"
    this.showDeletedPrjOnly=false
  }


  labelDelay() {
    debugger
    this._PortProjStatus = "Delay";
    this.showDeletedPrjOnly=false;
  }

  labelDraft(){
    this._PortProjStatus = "Not Started";
    this.showDeletedPrjOnly=false;
  }


  labelCompleted() {
    debugger
    this._PortProjStatus = 'Completed';
    this.showDeletedPrjOnly=false;
    console.log('_PortProjStatus:',this._PortProjStatus);
    console.log('_ProjectsListBy_Pid:',this._ProjectsListBy_Pid);
  }

  labelNewProject() {
    debugger
    this._PortProjStatus = "New Project";
    this.showDeletedPrjOnly=false;
    if (this._PortProjStatus.includes('New Project')) {
      this._PortProjStatus = 'New Project';
    }
  }

  labelRejecteds() {
    debugger
    this._PortProjStatus = "New Project Rejected";
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
debugger
    this._PortProjStatus = "Under Approval";
    // this._PortProjStatus.includes('Under Approval')
    this.showDeletedPrjOnly=false;
    console.log(this._PortProjStatus,"Under Apprval")
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
    this.loadGanttChart();
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
    document.getElementById("portfoliosideBar").classList.remove("active");
    document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");

    // $('.project-list_AC').removeClass('active');
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["../portfolioprojects/" + this._Pid+"/"]);
  }



  _CloseshareBar() {
    this.Close_ShareModel();
    document.getElementById("shareBar").classList.remove("kt-action-panel--on");
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

    // const elements = {
    //   'tot': 'active-total-project',
    //   'inn': 'active-in-processs',
    //   'del': 'active-Delay-head',
    //   'draft': 'active-Not-started-head',
    //   'underappr': 'active-new-project-head',
    //   'pro-hold':'active-Hold_color',
    //   'compl' : 'active-complteed_color',
    //    'delete':'active-Delete-head',
    //    'reject':'active-rejected',
    //    'todocomp':'active-todo-completed-head',
    //    'todoachi':'active-todo-achieved',
    //    'new-pro':'active-new-project-head',
    //    'Compl-Apprv':'active-Completion',
    //    'Cancel-app':'active-Cancel-app',
    //    'Count-forward':'active-foward-color',
    //    'Count-deadline':'active-Count-deadline'

    // };

    // for (const id in elements) {
    //   const element = document.getElementById(id);
    //   if (element) {
    //     if (buttonId === id) {
    //       this.renderer.addClass(element, elements[id]);
    //     } else {
    //       this.renderer.removeClass(element, elements[id]);
    //     }
    //   }
    // }
    const elements = document.getElementsByClassName('btn-filtr');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }


    if(buttonId=='tot')
      document.getElementById('tot').classList.add('active');
    else if(buttonId=='inn')
      document.getElementById('inn').classList.add('active');
    else if(buttonId=='del')
      document.getElementById('del').classList.add('active');
    else if(buttonId=='draft')
      document.getElementById('draft').classList.add('active');
    else if(buttonId=='compl')
      document.getElementById('compl').classList.add('active');
    else if(buttonId=='new-pro')
      document.getElementById('new-pro').classList.add('active');
    else if(buttonId=='Compl-Apprv')
      document.getElementById('Compl-Apprv').classList.add('active');
    else if(buttonId=='Cancel-app')
      document.getElementById('Cancel-app').classList.add('active');
    else if(buttonId=='Count-forward')
      document.getElementById('Count-forward').classList.add('active');
    else if(buttonId=='Count-deadline')
      document.getElementById('Count-deadline').classList.add('active');
    else if(buttonId=='underappr')
      document.getElementById('underappr').classList.add('active');
    else if(buttonId=='pro-hold')
      document.getElementById('pro-hold').classList.add('active');
    else if(buttonId=='reject')
      document.getElementById('reject').classList.add('active');
    else if(buttonId=='todocomp')
      document.getElementById('todocomp').classList.add('active');
    else if(buttonId=='todoachi')
      document.getElementById('todoachi').classList.add('active');
    else if(buttonId=='delete')
      document.getElementById('delete').classList.add('active');

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




triger(){
  if (this.CountProjectHold == 0){
    this.onButtonClick('tot');
  this.labelAll();
}

}




  RestorePortfolioProjects(prjcode,portfolioid) {

    this.service.UpdateRestorePortfolioProjects(prjcode,portfolioid).subscribe((data:any) => {
      console.log('Response data:', data);
      if (data.message==="1"){
      this.notifyService.showSuccess("Project Restored Successfully", '');
      this.GetPortfolioProjectsByPid()
      }
      else if (data.message==="2"){
        this.notifyService.showError("Project Failed to Restore",'');
      }

    });

  }
  Openportfoliosidebar(){
    document.getElementById("portfoliosideBar").classList.add("active");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }
  Closeportfoliosidebar(){
    document.getElementById("portfoliosideBar").classList.remove("active");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }
  backMainMeetings() {
    document.getElementById("recall-meeting").style.display = "none";
    document.getElementById("main-meeting").style.display = "block";
    this.selectedMtgs2Link=[];  // clear selected meetings.
  }
  showRecallMeetingsView() {

    document.getElementById("recall-meeting").style.display = "block";
    document.getElementById("main-meeting").style.display = "none";

  }

//  save meeting as draft start.
Insert_indraft() {
  if (this.draftid != 0) {
    this._calenderDto.draftid = this.draftid;
  }
  else {
    this._calenderDto.draftid = 0;
  }
  this._calenderDto.Task_Name = this.Title_Name;
  this._calenderDto.Emp_No = this.Current_user_ID;
  if (this.SelectDms == null) {
    this.SelectDms = [];
  }
  this._calenderDto.Dms = this.SelectDms.map(item=>item.MailId).join(',');
  if (this.Portfolio == null) {
    this.Portfolio = [];
  }
  this._calenderDto.Portfolio = this.Portfolio.map(item=>item.portfolio_id).join(',');
  this._calenderDto.location = this.Location_Type;
  this._calenderDto.loc_status = this._onlinelink;
  this._calenderDto.Note = this.Description_Type;
  this._calenderDto.Schedule_type = this.ScheduleType == "Task" ? 1 : 2;
  //  alert( this.ScheduleType);
  if (this.ngEmployeeDropdown == null) {
    this.ngEmployeeDropdown = [];
  }
  this._calenderDto.User_list = this.ngEmployeeDropdown.map(item=>item.Emp_No).join(",");
  if (this.MasterCode == null) {
    this.MasterCode = [];
  }
  this._calenderDto.Project_Code = this.MasterCode.toString();

  this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
    (data => {
      if (data['message'] == '1') {
        // this.Getdraft_datalistmeeting();
        this.closeschd();
        this.meetingsViewOn=true;
        this.notifyService.showSuccess("Draft saved", "Success");
      }
      // if (data['message'] == '2') {
      //   // this.Getdraft_datalistmeeting();
      //   this.closeschd();
      //   this.notifyService.showSuccess("Draft updated", "Success");
      // }
    });


}







// meeting side bar code start

  // meeting section code starts here
  meetingList: any;
  meeting_arry: any;
  meetinglength: any;
  projectInfo: any;

  upcomingMeetings: any;
  todaymeetings: any;
  last7dmeetings: any;
  lastMonthMeetings: any;
  olderMeetings: any;
  mtgFromD: string = '';
  mtgUptoD: string = '';
  mtgsInRange: any;
  mLdng: boolean = false;

  tdMtgCnt: number = 0;   // Today Meetings Count
  upcMtgCnt: number = 0;  // Upcoming Meetings Count
  lstMthCnt: number = 0;  // Last Month Meetings Count
  lst7dCnt: number = 0;   // Last 7 Days Meetings Count
  oldMtgCnt: number = 0;  // Older Meetings Count
  Addguest:any
  MeetingParticipants:any
  portfolioId:any
  loading: boolean=false


  openMeetingSidebar() {

   document.getElementById("Meetings_SideBar").classList.add("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='MEETINGS';
    // sidebar is open
    this.GetmeetingDetails(); // get all meeting details.
  }

  GetmeetingDetails() {
debugger
    // first initialize all meetings variables to empty . and to avoid any miscalculation .  this is mandatory before calculating.
    this.meetingList = [];
    this.meeting_arry = [];
    this.meetinglength = 0;

    this.upcomingMeetings = [];
    this.todaymeetings = [];
    this.last7dmeetings = [];
    this.lastMonthMeetings = [];
    this.olderMeetings = [];
    this.mtgFromD = '';
    this.mtgUptoD = '';
    this.mtgsInRange = [];
    this.mLdng = false;

    this.tdMtgCnt = 0;   // Today Meetings Count
    this.upcMtgCnt = 0;  // Upcoming Meetings Count
    this.lstMthCnt = 0;  // Last Month Meetings Count
    this.lst7dCnt = 0;   // Last 7 Days Meetings Count
    this.oldMtgCnt = 0;  // Older Meetings Count

    this.ObjSubTaskDTO.portfolio_id = this.Url_portfolioId;
    this.ObjSubTaskDTO.startdate = null;
    this.ObjSubTaskDTO.enddate = null;
    this.isLoadingData=true;

    this.service._GetMeetingListportfolio(this.ObjSubTaskDTO)
      .subscribe(data => {
        debugger
        if (data && Array.isArray(data) && data.length > 0 && data[0]?.['MeetingFor_projects']?.length > 0) {
          this.meetingList = JSON.parse(data[0]['MeetingFor_projects']);
          this.Addguest= this.meetingList[0].Addguest
          this.MeetingParticipants= JSON.parse(this.Addguest);
          console.log('meeting we have:', this.meetingList);
          this.meeting_arry = this.meetingList;
          if (this.meeting_arry.length > 0)
            this.meetinglength = this.meeting_arry.length;
          this.meeting_arry.forEach(element => {
            element.usersjson = JSON.parse(element.Addguest);
          });

        }
        else {
          this.meetinglength = 0;
        }

        // AFTER GETTING ALL MEETINGS DETAILS

        this.upcomingMeetings = this.getUpcomingMeeting();
        this.upcomingMeetings.reverse();
        console.log(this.upcomingMeetings,'linklkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')                                        // get upcoming meetings.
        this.upcMtgCnt = this.upcomingMeetings.length;                           // store totalno of meetings.
        this.upcomingMeetings = this.groupMeetingsByDate(this.upcomingMeetings);
        console.log("UPCOMMING MEETINGS:",this.upcomingMeetings);

        this.todaymeetings = this.getMeetingsByDate(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));     // get todays meetings.
        this.tdMtgCnt = this.todaymeetings.length;                                                        // store totalno of meetings.
        this.todaymeetings = this.groupMeetingsByDate(this.todaymeetings);                                 // format them.
        console.log(this.todaymeetings,"this.todaymeetings")

        for (let i = 1; i <= 7; i++) {
          const date = new Date();                     // get the current date.
          date.setDate(date.getDate() - i);
          this.last7dmeetings = this.last7dmeetings.concat(this.getMeetingsByDate(this.datepipe.transform(date, 'yyyy-MM-dd')));
        }                                                                                               // get last 7 days meetings.
        this.lst7dCnt = this.last7dmeetings.length;                                                    // store totalno of meetings.
        this.last7dmeetings = this.groupMeetingsByDate(this.last7dmeetings);
        console.log (this.last7dmeetings,"last7dmeetings")                        // format them.
        const date1 = new Date();                 // currentdate.
        date1.setMonth(date1.getMonth() - 1);    // date1 is prev month.
        this.meeting_arry.forEach(m => {

          const sd = new Date(m.Schedule_date);
          if (sd.getMonth() === date1.getMonth() && sd.getFullYear() === date1.getFullYear()) {  // when meeting held in last month
            this.lastMonthMeetings.push(m);
          }
          else if (!(sd.getTime() > date1.getTime())) {   // when meeting held date is even order than last months
            this.olderMeetings.push(m);
          }
        });

        this.lstMthCnt = this.lastMonthMeetings.length;
        this.oldMtgCnt = this.olderMeetings.length;

        this.lastMonthMeetings = this.groupMeetingsByDate(this.lastMonthMeetings);      // format them.
        console.log(this.lastMonthMeetings,"this.lastMonthMeetings")
        this.olderMeetings = this.groupMeetingsByDate(this.olderMeetings);
        console.log(this.olderMeetings,"olderrr meetings")    // format them.

        this.isLoadingData=false;

      });


    //
  }

  closeMeetingSidebar() {
    document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("newdetails").classList.remove("position-fixed");
    this.currentSidebarOpened='NOT_OPENED';

    this.meetingsViewOn = true;
    // empty all variables
    this.meetingList = [];
    this.meeting_arry = [];
    this.meetinglength = 0;
    this.allAgendas = [];
    this.upcomingMeetings = [];
    this.todaymeetings = [];
    this.last7dmeetings = [];
    this.lastMonthMeetings = [];
    this.olderMeetings = [];
    this.mtgFromD = '';
    this.mtgUptoD = '';
    this.mtgsInRange = [];
    this.mLdng = false;

    this.tdMtgCnt = 0;   // Today Meetings Count
    this.upcMtgCnt = 0;  // Upcoming Meetings Count
    this.lstMthCnt = 0;  // Last Month Meetings Count
    this.lst7dCnt = 0;   // Last 7 Days Meetings Count
    this.oldMtgCnt = 0;  // Older Meetings Count
    //

    this.backMainMeetings();
  }


  getUpcomingMeeting() {
    const cd = new Date();   // takes the current date.
    const upcoming = this.meeting_arry.filter((meeting) => {
      const sd = new Date(meeting.Schedule_date);
      return sd > cd;
    });
    return upcoming;
  }


  groupMeetingsByDate(ar) {
    let result = [];
    for (let i = 0; i < ar.length; i++) {
      let date1 = new Date(ar[i].Schedule_date);
      if (!result.find((e) => new Date(e.date).getTime() === date1.getTime())) {

        let totalmeetings = [ar[i]];
        for (let j = i + 1; j < ar.length; j++) {

          if (new Date(ar[j].Schedule_date).getTime() === date1.getTime())
            totalmeetings.push(ar[j]);
        }
        result.push({ date: date1, totalmeetings: totalmeetings })
      }
    }
    return result;
  }


  getMeetingsByDate(date) {
    const inputdate = new Date(date);
    const meetingsfound = this.meeting_arry.filter((meeting) => {
      const tempd = new Date(meeting.Schedule_date);
      return (tempd.getTime() === inputdate.getTime())
    });
    return meetingsfound;
  }


  getAttendeesInMeeting(people) {
    if (Array.isArray(people)) {
      let total = 0;
      people.forEach((pr) => {
        if (pr.Status === "Accepted")
          total = total + 1;
      });
      return total;
    }
    return "";
  }


  MeetingCount:any;

  // getusermeetings(){
  //   this.objProjectDto.Project_Code=this.Url_portfolioId;
  //   this.service.GetUserMeetingcount(this.objProjectDto).subscribe(data => {
  //   this.MeetingCount=JSON.parse(data['MeetingCount'])
  //     console.log(this.MeetingCount, "meetings count");
  //   });
  // }


  getMeetingsInRange() {
    /*---------- set time out for hide the dropdown --------*/
    setTimeout(function () {
      loadSelect()
    },
      1500);
    function loadSelect() {
      $(".dropdown_left_fix").removeClass("show");
    }
    /*---------- set time out for hide the dropdown end --------*/

    this.ObjSubTaskDTO.portfolio_id = this.Url_portfolioId;
    this.ObjSubTaskDTO.startdate = this.mtgFromD;
    this.ObjSubTaskDTO.enddate = this.mtgUptoD;
    this.mLdng = true;     // made loading visible.
    this.service._GetMeetingListportfolio(this.ObjSubTaskDTO).subscribe((res: any) => {
      this.mLdng = false;   // made loading invisible.
      console.log("after sending meeting range:", res)
      if (res && res[0].MeetingFor_projects) {  // if MeetingFor_projects is not '' , null , undefined
        this.mtgsInRange = JSON.parse(res[0].MeetingFor_projects)
        this.mtgsInRange.forEach(element => {
          element.usersjson = JSON.parse(element.Addguest);
        });
        this.mtgsInRange = this.groupMeetingsByDate(this.mtgsInRange);
        console.log("get meetings list:", this.mtgsInRange);
      }
      else {
        this.mtgsInRange = [];  // when no meetings held during the range.
      }


    })

  }






ScheduleType:string='';
editTask: boolean = false;
copyTask: boolean = false;
create:boolean=false;
draftid: number = 0;
_AllEventTasksCount: number = 0;
pending_status: boolean;
_FutureEventTasksCount: number = 0;
MinLastNameLength: boolean;
MasterCode: any=[];

  Title_Name: any;
  Startts: any;
  Endtms: any;
  _Message: string;
  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string; days
  AllocatedHours: number;
  BlockNameProject1: any;
  SubmissionName: string;
  _Exec_BlockName: string = "";

  RemovedAttach: any = [];


selectedrecuvalue: string;
dayArr: any = [
  {
    "Day": "S",
    "value": "Sun",
    "checked": false
  },
  {
    "Day": "M",
    "value": "Mon",
    "checked": false
  },
  {
    "Day": "T",
    "value": "Tue",
    "checked": false
  },
  {
    "Day": "W",
    "value": "Wed",
    "checked": false
  },
  {
    "Day": "Th",
    "value": "Thu",
    "checked": false
  },
  {
    "Day": "Fr",
    "value": "Fri",
    "checked": false
  },
  {
    "Day": "Sa",
    "value": "Sat",
    "checked": false
  }
];
MonthArr: any = [
  { "Day": "01", "value": "01", "checked": false },
  { "Day": "02", "value": "02", "checked": false },
  { "Day": "03", "value": "03", "checked": false },
  { "Day": "04", "value": "04", "checked": false },
  { "Day": "05", "value": "05", "checked": false },
  { "Day": "06", "value": "06", "checked": false },
  { "Day": "07", "value": "07", "checked": false },
  { "Day": "08", "value": "08", "checked": false },
  { "Day": "09", "value": "09", "checked": false },
  { "Day": "10", "value": "10", "checked": false },
  { "Day": "11", "value": "11", "checked": false },
  { "Day": "12", "value": "12", "checked": false },
  { "Day": "13", "value": "13", "checked": false },
  { "Day": "14", "value": "14", "checked": false },
  { "Day": "15", "value": "15", "checked": false },
  { "Day": "16", "value": "16", "checked": false },
  { "Day": "17", "value": "17", "checked": false },
  { "Day": "18", "value": "18", "checked": false },
  { "Day": "19", "value": "19", "checked": false },
  { "Day": "20", "value": "20", "checked": false },
  { "Day": "21", "value": "21", "checked": false },
  { "Day": "22", "value": "22", "checked": false },
  { "Day": "23", "value": "23", "checked": false },
  { "Day": "24", "value": "24", "checked": false },
  { "Day": "25", "value": "25", "checked": false },
  { "Day": "26", "value": "26", "checked": false },
  { "Day": "27", "value": "27", "checked": false },
  { "Day": "28", "value": "28", "checked": false },
  { "Day": "29", "value": "29", "checked": false },
  { "Day": "30", "value": "30", "checked": false },
  { "Day": "31", "value": "31", "checked": false }
];
maxDate = "";
_OldRecurranceId: string;
_OldRecurranceValues: string;
_PopupConfirmedValue: number;
_subname: boolean;
_calenderDto: CalenderDTO;
ProjectListArray: any=[];
_EmployeeListForDropdown: any[] = [];
Portfoliolist_1: [];
Note_deadlineexpire: boolean;
Subtask: any;
St_date: string = "";
Ed_date: string;
_status: string;
Allocated_subtask: number;
TM_DisplayName: string;
// Portfolio: any = [];
SelectDms: any=[];
_onlinelink: boolean = false;
Link_Details: string;
config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        // 'bold',
        // 'italic',
        // 'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        'heading',
        // 'fontName'
      ],
      [
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
        'customClasses',

        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };
  Location_Type: any;
  Addressurl: string = "";
  Locationfulladd: string;
  Description_Type: any;
  _lstMultipleFiales: any;
  myFiles: string[] = [];
  Attachment12_ary: any = [];
  _labelName: string;
  _StartDate: any;
  _EndDate: any;
  _SEndDate: any;
  minDate = moment().format("YYYY-MM-DD").toString();
  Schedule_ID: number = 0;
  daysSelectedII: any[] = [];
  scstartdate: any = new Date();
  AllDatesSDandED: any[] = [];
  EventScheduledjson: any[] = [];
  Scheduledjson: any[] = [];
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  calendarOptions: CalendarOptions;
  Meeting_status: boolean;
  AdminMeeting_Status: string;
  Isadmin: boolean;
  Attachments_ary: any = [];
  Project_dateScheduledjson: any[] = [];
  Schedule_type1: any = 'Event';
  Status1: any;
  Proposedate: any;
  PropStart: any;
  PurposeEnd: any;
  pro_date: any;
  pro_sttime: any;
  pro_edtime: any;
  pro_enddate: string;
  creation_date: string;
  Project_NameScheduledjson: any[] = [];
  portfolio_Scheduledjson: any[] = [];
  User_Scheduledjson: any[] = [];
  DMS_Scheduledjson: any = [];
  dmsIdjson: any = [];
  _MemosSubjectList: any;

  meetingsViewOn: boolean = true;


  isLoading=true

Task_type(value:number){


  this.meetingsViewOn=false;      // opens the meeting event task section and closes the meeting view section.
  // this.MasterCode=(value===1)?this.projectInfo.portfolio_id:[this.projectInfo.portfolio_id];    // by default only the project opened is included in the select project field.
  this.Portfolio=[];                                  // by default no portfolio is selected
  this.selectedrecuvalue = "0";
  this._PopupConfirmedValue = 1;
  this.MinLastNameLength = true;
  this._subname = false;
  this._calenderDto = new CalenderDTO;
  this.BlockNameProject1 = [];
  this._lstMultipleFiales = [];
  this._labelName = "Schedule Date :";
  this._StartDate = moment().format("YYYY-MM-DD").toString();
  this._subname1 = false;

  this.AllDatesSDandED = [];
  var jsonData = {};
  var columnName = "Date";
  jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
  var IsActive = "IsActive";
  jsonData[IsActive] = 1;
  var Day = "Day";
  jsonData[Day] = moment().format('dddd').substring(0, 3);
  var DayNum1 = "DayNum";
  jsonData[DayNum1] = moment(this._StartDate).format('DD').substring(0, 3);
  this.AllDatesSDandED.push(jsonData);
  this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();




    // initialization

    this.GetProjectAndsubtashDrpforCalender();   // GET PROJECT LIST,PORTFOLIOS LIST and PAERTICIPANTS
    this.GetMemosByEmployeeId();                 // GET THE DMS MEMOS LIST.
    this.GetTimeslabfordate();                   // GET timing
    this.TImetable();                            // GET start time and end time.
    this.GetScheduledJson();                     // GET Scheduledjson
    this.Getdraft_datalistmeeting();

    // opens the sidebar
    // document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("newdetails").classList.add("position-fixed");

    //
    $(document).ready(function () {
      $("#div_recurrence").css("display", "block");
      $("#weekly_121_new").css("display", "none");
      $("#div_endDate_new").css("display", "none");
      $("#Monthly_121_new").css("display", "none");
      $("#Recurrence_hide").css("display", "none");
      $("#Schenddate").css("display", "none");
      $("#Descrip_Name12").css("display", "none");
    });

    // this.clearallfields();
    this.daysSelected = [];
    this.singleselectarry = [];
    this.daysSelectedII = [];
    this.daysSelected.push(this._StartDate);
    this.singleselectarry.push(this._StartDate);
    this.Schedule_ID = 0;
    this._subname = false;
    this.Note_deadlineexpire = false;
    this.editTask = false;
    this.copyTask = false;
    this.create = true;

  if (value===1) {
    this.ScheduleType = "Task";
    $(document).ready(()=>{
      $('#subtaskid').css('display','flex');
      $('#Guest_Name').css('display','none');
      $('#Location_Name').css('display','none');
      $('#Descrip_Name').css('display','none');
      $('#core_viw123').css('display','flex');
      $('#core_viw121').css('display','none');

      $('#core_viw222').css('display','none');
      $('#core_Dms').css('display','none');
      $('#online-add').css('display','none');
    });
    // this.GetSubtasklistfromProject(this.MasterCode);
  }
  else{
    this.ScheduleType = "Event";

   $(document).ready(()=>{
     $('#subtaskid').css('display','none');
        $('#Guest_Name').css('display','flex');
        $('#Location_Name').css('display','none');
        $('#Descrip_Name').css('display','flex');
        $('#core_viw121').css('display','flex');

        $('#core_viw123').css('display','none');
        $('#core_viw222').css('display','flex');
        $('#core_Dms').css('display','flex');
       $('#online-add').css('display','flex');


      const es=document.getElementById('event-Sidebar');
      es.addEventListener('scroll',()=>{
            this.autocompletes.forEach((ac)=>{
              if(ac.panelOpen)
              ac.updatePosition();
            });
      })



    })


  }

    const format2 = "YYYY-MM-DD";
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = (moment(this.minDate).format(format2));
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
    }
    this.daysSelectedII.push(jsonData);


  }

  GetScheduledJson() {
debugger
    this._calenderDto.EmpNo = this.Current_user_ID;

    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe
      ((data) => { debugger

        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        console.log(this.Scheduledjson, "Testingssd");
        // var _now = moment().format() + "T" + moment().format("hh:mm:ss");


        this.calendarOptions = {

          initialView: 'listWeek',
          firstDay: moment().weekday(),

          // timeZone: 'local',
          // initialDate:new Date(1, 3-9, 2023),
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },

          themeSystem: "solar",
          weekNumbers: true,
          eventClick: this.GetClickEventJSON_Calender.bind(this),
          events: this.Scheduledjson,
          eventDidMount: this.customizeEvent,
          dayMaxEvents: 4,
          eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            meridiem: 'short',
            hour12: true
          },
          nowIndicator: true,
          allDaySlot: false
          // eventClick: function(info) {
          //   alert('Event: ' + info.event.title);
          //   alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
          //   alert('View: ' + info.view.type);

          //   // change the border color just for fun
          //   info.el.style.borderColor = 'red';
          // }
        };
      });
  }

  customizeEvent(info) {
    const eventDate = info.event.start;
    const currentDate = new Date();
    const taskComplete = info.event.className;
    if (eventDate < currentDate) {
      const eventElement = info.el;
      eventElement.style.opacity = '0.5'; // Change the background color for past events
    }
    // if(taskComplete == 'fc-green'){
    //   const eventElement = info.el;
    //   eventElement.style.opacity = '0.5';
    // }
  }


  GetClickEventJSON_Calender(arg) {
    this.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        this.AdminMeeting_Status = data['AdminMeeting_Status'];
        this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];
        console.log(this.EventScheduledjson, "Testing1");
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status;
        this.Proposedate = this.EventScheduledjson[0].Schedule_date;
        this.PropStart = this.EventScheduledjson[0].St_Time;
        this.PurposeEnd = this.EventScheduledjson[0].Ed_Time;
        this.pro_date = this.EventScheduledjson[0].Purposedate;
        this.pro_sttime = this.EventScheduledjson[0].PurposeStarttime;
        this.pro_edtime = this.EventScheduledjson[0].PurposeEndtime;
        this.pro_enddate = this.EventScheduledjson[0].SEndDate;
        this.creation_date = this.EventScheduledjson[0].Created_date;
        this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
        this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
        this.pending_status = this.EventScheduledjson[0].Pending_meeting;
        this.Meeting_status = this.EventScheduledjson[0].Meeting_status;
        console.log(this.EventScheduledjson, "Testing12");
        document.getElementById("deleteendit").style.display = "flex";
        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("main-foot").style.display = "flex";
        }

        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("main-foot").style.display = "none";
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');
        console.log(this.User_Scheduledjson, "12")
        this.dmsIdjson = [];
        if (this.DMS_Scheduledjson.length > 0) {
          this.DMS_Scheduledjson.forEach(element => {
            var jsonData = {};
            var columnName = "MailId";
            jsonData[columnName] = element;
            this.dmsIdjson.push(jsonData);
          });
          this.dmsIdjson = JSON.stringify(this.dmsIdjson);
          this._LinkService._GetMemosSubject(this.dmsIdjson).
            subscribe((data) => {
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
      });
  }


  LastLengthValidation11() {
    if (this.Title_Name.trim().length < 3) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }
  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }


  subtashDrpLoading:boolean=false;
  GetProjectAndsubtashDrpforCalender() {
    this.subtashDrpLoading=true;
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        this.subtashDrpLoading=false;
        this.ProjectListArray = JSON.parse(data['Projectlist']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        this.companies_Arr=JSON.parse(data['Client_json']);

        // by default selected portfolio
        const portfolioChoosed:any=this.Portfoliolist_1.find((p:any)=>p.portfolio_id==this.Url_portfolioId);
        this.Portfolio=[portfolioChoosed.portfolio_id];
        this.Title_Name =this._PortFolio_Namecardheader
        console.log(this.Portfoliolist_1, "Project List Array");

        console.log("_EmployeeListForDropdown",this._EmployeeListForDropdown);
        console.log("Portfoliolist_1:",this.Portfoliolist_1);
        console.log("ProjectListArray:",this.ProjectListArray);
        console.log('companies_Arr :',this.companies_Arr);


      });
  }




getChangeSubtaskDetais(Project_Code) {

  this.BlockNameProject1.forEach(element => {

      if (element.Project_Code == Project_Code) {
        this.St_date = element.StatDate;
        this.Ed_date = element.Enddate;
        this._status = element.Status;
        this.Allocated_subtask = element.Allocated
        this.TM_DisplayName = element.TM_DisplayName
      }
    });


  }


  Online_method(event) {

    if (event.target.checked) {
      document.getElementById("Descrip_Name12").style.display = "block";
      this._onlinelink = event.target.checked;
    }
    else {
      document.getElementById("Descrip_Name12").style.display = "none";
      this._onlinelink = false;
    }

  }


  public handleAddressChange(address: Address) {

    if (this.checkAddressURL(address.name.toString())) {
      this.Addressurl = address.name;
    }
    else {
      this.Addressurl = address.url;
    }
    this.Location_Type = address.name;
    this.Locationfulladd = address.formatted_address;
  }



  checkAddressURL(str) {

    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(str);
  }

  addreschange() {
    const isValidStrings = ["17.4333", "78.3664"];
    if (this.Location_Type.includes(',')) {
      const loc = this.Location_Type.split(',');
      var lat = loc[0];
      var long = loc[1];
      var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
      if (reg.exec("40.6892")) {

        // alert(lat);
      } else {
      }
      if (reg.exec(long)) {
        // alert(long);
      }
      else {
      }
    }
  }

  selectedFile: any = null;
  onFileChange1(e) {
    this.selectedFile = <File>e.target.files[0];
    console.log("--------------->", this.selectedFile)
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      var length = event.target.files.length;
      for (let index = 0; index < length; index++) {
        const file = event.target.files[index];
        var contentType = file.type;
        if (contentType === "application/pdf") {
          contentType = ".pdf";
        }
        else if (contentType === "image/png") {
          contentType = ".png";
        }
        else if (contentType === "image/jpeg") {
          contentType = ".jpeg";
        }
        else if (contentType === "image/jpg") {
          contentType = ".jpg";
        }
        this.myFiles.push(event.target.files[index].name);
        var d = new Date().valueOf();
        this._lstMultipleFiales = [...this._lstMultipleFiales, {
          UniqueId: d,
          FileName: event.target.files[index].name,
          Size: event.target.files[index].size,
          Files: event.target.files[index]
        }];
      }
    }
    (<HTMLInputElement>document.getElementById("uploadFile_")).value = "";
  }

  RemoveSelectedFile(_id) {
    var removeIndex = this._lstMultipleFiales.map(function (item) { return item.UniqueId; }).indexOf(_id);
    this._lstMultipleFiales.splice(removeIndex, 1);

    const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';

  }

  RemoveExistingFile(_id) {


    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {
        this.RemovedAttach.push(element.Cloud_Name)
      }

    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);

  }
  selectStartDate(event) {
    this._StartDate = event.value;
    let sd = event.value.format("YYYY-MM-DD").toString();
    this._SEndDate = event.value.format("YYYY-MM-DD").toString();
    this.minDate = sd;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Scheduled_date = sd;
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.scstartdate = d1;
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    var columnNames = "StartTime";
    var columnNamee = "EndTime";
    var IsActive = "IsActive";
    var Day = "Day";
    var DayNum = "DayNum";

    if (this.selectedrecuvalue == "0") {

      // this._EndDate = event.value.format("YYYY-MM-DD").toString();
      // this.maxDate = event.value.format("YYYY-MM-DD").toString();
      jsonData[columnName] = (moment(date).format(format2));
      jsonData[columnNames] = this.Startts;
      jsonData[columnNamee] = this.Endtms;
      jsonData[IsActive] = 1;
      jsonData[Day] = event.value.format('dddd').substring(0, 3);
      jsonData[DayNum] = event.value.format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
    }
    else {
      const dates = [];
      while (date <= d2) {
        dates.push(moment(date).format(format2));
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = (moment(date).format(format2));
        var columnNames = "StartTime";
        jsonData[columnNames] = this.Startts;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = this.Endtms;
        var IsActive = "IsActive";
        jsonData[IsActive] = 1;
        var Day = "Day";
        jsonData[Day] = moment(date).format('dddd').substring(0, 3);
        var DayNum = "DayNum";
        jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
        this.AllDatesSDandED.push(jsonData);
        date.setDate(date.getDate() + 1);
      }
    }

  }


  Alltimes: any = [];
  EndTimearr: any = [];
  AllEndtime: any = [];
  progress: any;
  StartTimearr: any = [];
  _arrayObj: any;
  timingarryend: any = [];
  Time_End: any = [];
  timearr1: any = [];
  daysSelected: any[] = [];
  // singleselectarry: any[] = [];
  preventSingleClick = false;
  timer: any;
  doubleclickdate: any;
  // Avaliabletime: any[] = [];
  timeslotsavl: any[] = [];
  Timechangearry: any[] = [];
  isChecked: string
  selected: Date | null;
  // SelectStartdate: any;
  // Selectenddate: any;
  // selectDay: any;
  // selectdaytime: any[] = [];
  event: any;
  _subname1: boolean;
  EventNumber: any;
  draftdata_meet: any = [];
  draftcount: any;

  addstarttime() {
    this.Alltimes = [];
    this.EndTimearr = [];
    this.AllEndtime = [];
    this.StartTimearr = [];

    this._arrayObj.forEach(element => {
      this.EndTimearr.push(element.TSEnd);
      this.AllEndtime.push(element.TSEnd);
      this.StartTimearr.push(element.TSStart);
      this.Alltimes.push(element.TSStart);
      // console.log( this.Alltimes,"times")
    });


    // alert(this.Startts);




    // this.Alltimes = [];
    // this.StartTimearr.forEach(element => {
    //   this.Alltimes.push(element);
    // });
    // this.Startts = this.Startts;

    this.timingarryend = [];
    this.Time_End = [];
    this.Time_End = this.AllEndtime;
    // this.Startts = TSStart;
    let _index = this.Time_End.indexOf(this.Startts);
    this.timingarryend = this.Time_End.splice(_index + 1);
    this.EndTimearr = this.timingarryend;
    this.timearr1 = this.Startts.split(":");
    let vahr = this.timearr1[0];
    let mins = this.timearr1[1].toString();

    if (vahr == 11 && mins.includes("AM")) {
      mins = mins.replace("AM", "PM")
    }
    else if (vahr == 11 && mins.includes("PM")) {
      mins = mins.replace("PM", "AM")
    }

    if (this.timearr1[0] == 23) {
      this._arrayObj.forEach(element => {
        this.EndTimearr.push(element.TSStart);

      });
      vahr = Number(vahr) + 1;
      if (vahr == 13) {
        vahr = '1'

      }
      this.Endtms = vahr.toString() + ':' + mins;
      if (vahr == '00') {
        this._SEndDate = moment(this.scstartdate, "YYYY-MM-DD").add(1, 'days');
        // alert(this.scstartdate)
        document.getElementById("Schenddate").style.display = "none";

      }
      else {
        this._SEndDate = this.scstartdate;
      }

    }
    else {
      vahr = Number(vahr) + 1;
      if (vahr == 13) {
        vahr = '1'
      }
      if (vahr <= 9) {
        this.Endtms = '0' + vahr.toString() + ':' + mins;
      }
      else {
        this.Endtms = vahr.toString() + ':' + mins;
      }
    }



    //  alert(this._SEndDate)

    // this.Endtms = this.EndTimearr[0];

    this.daysSelectedII = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = this.minDate;
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    var columnNameess = "SEndDate";
    jsonData[columnNameess] = moment(this._SEndDate).format("YYYY-MM-DD").toString();

    if (this.ScheduleType == "Event") {
      var IsActive = "IsActive";
      jsonData[IsActive] = 0;
    }
    this.daysSelectedII.push(jsonData)

    const selectedStartTimeObj = new Date(`2000-01-01T${this.Startts}:00`);
    this.EndTimearr.forEach(element => {
      // alert(element)
      const _element = element;
      const EndTimeObj = new Date(`2000-01-01T${_element}:00`);
      const diffInMinutes = (EndTimeObj.getTime() - selectedStartTimeObj.getTime()) / 60000;
      // alert(diffInMinutes)
      element = _element.toString() + "-" + diffInMinutes.toString();

    });

    console.log(this.EndTimearr, "End Time Updated")
  }

  SelectDropDown(val) {
    this.selectedrecuvalue = val.value.toString();
    this._labelName = "Start Date :";
    document.getElementById("div_endDate").style.display = "block";
    for (let index = 0; index < this.dayArr.length; index++) {
      this.dayArr[index].checked = false;
    }
    for (let index = 0; index < this.MonthArr.length; index++) {
      this.MonthArr[index].checked = false;
    }
    this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.AllDatesSDandED = [];
    const dates = [];

    while (date <= d2) {
      dates.push(moment(date).format(format2));
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(date).format(format2));
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = moment(date).format('dddd').substring(0, 3);
      var DayNum = "DayNum";
      jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
      date.setDate(date.getDate() + 1);
    }
    if (val.value == 0) {
      this.maxDate = moment(this.minDate).format("YYYY-MM-DD").toString()
      this._labelName = "Schedule Date :";
      document.getElementById("Monthly_121").style.display = "none";
      document.getElementById("div_endDate").style.display = "none";
      this.daysSelectedII = [];
      this.daysSelected = [];
      this.singleselectarry = [];
      const format2 = "YYYY-MM-DD";
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(this.minDate).format(format2));
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;

      this.daysSelectedII.push(jsonData);
      this.calendar.updateTodaysDate();
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("weekly_122").style.display = "none";
      document.getElementById("Monthly_121").style.display = "none";
    }
    if (val.value == 2) {

      document.getElementById("weekly_121").style.display = "block";
      document.getElementById("Monthly_121").style.display = "none";

    }
    else if (val.value == 1) {
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("Monthly_121").style.display = "none";
    }
    else if (val.value == 3) {
      document.getElementById("weekly_121").style.display = "none";
      document.getElementById("Monthly_121").style.display = "block";
    }

  }

  selectedDay(days) {


    let objIndex = this.dayArr1.findIndex((obj => obj.value == days.target.value));
    this.dayArr1[objIndex].checked = days.target.checked;

    if(days.target.checked&&this.notProvided=='dayarr1')
      this.notProvided="";
  }



  selectEndDate(event) {

    for (let index = 0; index < this.dayArr.length; index++) {
      this.dayArr[index].checked = false;
    }

    this._EndDate = event.value.format("YYYY-MM-DD").toString();
    this.maxDate = event.value.format("YYYY-MM-DD").toString();

    var start = moment(this.minDate);
    var end = moment(this.maxDate);
    const format2 = "YYYY-MM-DD";
    const d1 = new Date(moment(start).format(format2));
    const d2 = new Date(moment(end).format(format2));
    const date = new Date(d1.getTime());
    this.daysSelectedII = [];
    this.AllDatesSDandED = [];
    const dates = [];
    while (date <= d2) {
      dates.push(moment(date).format(format2));
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(date).format(format2));
      var columnNames = "StartTime";
      jsonData[columnNames] = this.Startts;
      var columnNamee = "EndTime";
      jsonData[columnNamee] = this.Endtms;
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = moment(date).format('dddd').substring(0, 3);
      var DayNum = "DayNum";
      jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
      this.AllDatesSDandED.push(jsonData);
      date.setDate(date.getDate() + 1);
    }
    console.log(this.daysSelectedII, "Day Added array")
  }


  select(event: any) {

    //Tue Dec 20 2022 00:00:00 GMT+0530 (India Standard Time)
    this.preventSingleClick = false;
    const delay = 200;
    // const date = event.getFullYear() + "-" + ("00" + (event.getMonth() + 1)).slice(-2) + "-" + ("00" + event.getDate()).slice(-2);
    // var dateString = 'Thu Jul 15 2016 19:31:44 GMT+0200 (CEST)';
    var dateObj = new Date(event);
    var momentObj = moment(dateObj);
    var date = momentObj.format('YYYY-MM-DD');
    this.doubleclickdate = date;

    this.timer = setTimeout(() => {
      if (!this.preventSingleClick) {

        const index = this.daysSelected.findIndex(x => x == date);
        if (index < 0) {
          this.daysSelected.push(date);
          this.singleselectarry.push(date);
        }
        else {
          this.daysSelected.splice(index, 1);
          this.singleselectarry.splice(index, 1);
        }
        this.calendar.updateTodaysDate();
        this.daysSelectedII = [];
        this.daysSelected.forEach(element => {
          const found = this.Timechangearry.some(el => el.Date === element);
          if (found) {
            this.Timechangearry.forEach(element2 => {
              if (element2.Date == element) {


                var jsonData = {};
                var columnName = "Date";
                jsonData[columnName] = element2.Date;
                var columnNames = "StartTime";
                jsonData[columnNames] = element2.StartTime;
                var columnNamee = "EndTime";
                jsonData[columnNamee] = element2.EndTime;
                if (this.ScheduleType == "Event") {
                  var IsActive = "IsActive";
                  jsonData[IsActive] = 0;
                }
                this.daysSelectedII.push(jsonData);

              }
            });
          }
          else {
            var jsonData = {};
            var columnName = "Date";
            jsonData[columnName] = element;
            var columnNames = "StartTime";
            jsonData[columnNames] = this.Startts;
            var columnNamee = "EndTime";
            jsonData[columnNamee] = this.Endtms;
            if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
              var IsActive = "IsActive";
              jsonData[IsActive] = 1;
            }
            this.daysSelectedII.push(jsonData);
          }
        });
        // if (this.ScheduleType == "Task") {
        //   this.Checkdatetimetable(this.daysSelectedII);
        // }

        this.calendar.updateTodaysDate();
      }
    }, delay);


  }




  isSelected = (event: any) => {
    var dateObj = new Date(event);
    var momentObj = moment(dateObj);
    var date = momentObj.format('YYYY-MM-DD');
    return this.daysSelectedII.find(x => x.Date == date && x.IsActive == false) ? "selected" :
      this.daysSelectedII.find(y => y.Date == date && y.IsActive == true) ? "selectedinvalid" : null;
  };



  closeschd() {

    // document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    // document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("newdetails").classList.remove("position-fixed");

    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().format("YYYY-MM-DD").toString();
    this._SEndDate = null;
    this._SEndDate = moment().format("YYYY-MM-DD").toString();
    this.minDate = moment().format("YYYY-MM-DD").toString();
    this.Attachment12_ary = [];
    this.RemovedAttach = [];
    this._lstMultipleFiales = [];
    this.maxDate = null;
    this.selected = null;

  this.Title_Name = '';

    this.ngEmployeeDropdown = [];
    this.Description_Type = null;
    this.SelectDms = [];
    this.MasterCode = null;
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    this.draftid = 0;
    // this.Recurr_arr = [];
    this._status = null;
    this.Portfolio = [];
    this.Location_Type = null;
    this.Allocated_subtask = null;
    this.Projectstartdate = "";
    this.projectEnddate = null;
    this.Status_project = null;
    this.AllocatedHours = null;
    this.daysSelected = [];
    this.selectdaytime = [];
    this.allAgendas = [];
    this.daysSelectedII = [];
    this.singleselectarry = [];
    this.Avaliabletime = [];
    this.TImetable();
    this.selectedrecuvalue = "0";
    // this.Doubleclick(this.event);
    this.calendar.updateTodaysDate();
    this.dayArr.map((element) => {
      return element.checked = false;;
    });
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
    // var columnNames = "StartTime";
    // jsonData[columnNames] = this.Startts;
    // var columnNamee = "EndTime";
    // jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment().format('dddd').substring(0, 3);
    var DayNum = "DayNum";
    jsonData[DayNum] = moment().format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    this.GetTimeslabfordate();

  }



  TImetable() {
    let now = moment(new Date());
    let _shr = now.hour();
    let _s = now.minute();

    if (_s >= 0 && _s < 15) {
      this.Startts = this.formatTime1(_shr, 30);
      this.Endtms = this.formatTime1(_shr, 45);
    } else if (_s >= 15 && _s < 30) {
      this.Startts = this.formatTime1(_shr, 45);
      this.Endtms = this.formatTime1(_shr + 1, 0);
    } else if (_s >= 30 && _s < 45) {
      this.Startts = this.formatTime1(_shr + 1, 0);
      this.Endtms = this.formatTime1(_shr + 1, 15);
    } else if (_s >= 45 && _s < 59) {
      this.Startts = this.formatTime1(_shr + 1, 15);
      this.Endtms = this.formatTime1(_shr + 1, 30);
    }
  }

  GetTimeslabfordate() {
    this._calenderDto.minutes = 5;
    // this._hrtime = parseInt(moment(new Date()).format("HH"));
    // this.Startts = this._hrtime.toString() + ':00';
    this._calenderDto.StartTime = "00:00";
    this._calenderDto.EndTime = "23:55";

    this.CalenderService.GetTimeslabcalender(this._calenderDto).subscribe
      ((data) => {

        this._arrayObj = data as [];
        this._arrayObj.forEach(element => {
          this.EndTimearr.push(element.TSEnd);
          this.AllEndtime.push(element.TSEnd);
          this.StartTimearr.push(element.TSStart);
          this.Alltimes.push(element.TSStart);
        });

        // console.log(this.EndTimearr[0]);
        // console.log("Array" + this.EndTimearr);
      });
  }

  formatTime1(hour, minute) {
    return moment({ hour, minute }).format("hh:mm A");
  }
  eventRepeat:boolean = false
  OnSubmitSchedule() { debugger
    if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
      this._subname1 = true;
      return false;
    }
    if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
      this._subname = true;
      return false;
    }

    var now = new Date();
    if(this.eventRepeat===false){
      let timestamp = "";
      timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
        + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
      this.EventNumber = timestamp;
    }

    let finalarray = [];
    this.daysSelectedII = [];
    const format2 = "YYYY-MM-DD";
    var start = moment(this.minDate);
    const _arraytext = [];
    if (this.selectedrecuvalue == "0") {
      const d1 = new Date(moment(start).format(format2));
      const date = new Date(d1.getTime());
      this.daysSelectedII = this.AllDatesSDandED.filter(x => x.Date == (moment(date).format(format2)));
    }
    else if (this.selectedrecuvalue == "1") {
      this.daysSelectedII = this.AllDatesSDandED;
    }
    else if (this.selectedrecuvalue == "2") {
      if (this.dayArr.filter(x => x.checked == true).length == 0) {
        alert('Please select day');
        return false;
      }
      for (let index = 0; index < this.dayArr.length; index++) {
        if (this.dayArr[index].checked) {
          const day = this.dayArr[index].value;
          _arraytext.push(day);
          var newArray = this.AllDatesSDandED.filter(obj => obj.Day == day);
          this.daysSelectedII = this.daysSelectedII.concat(newArray);
        }
      }
      if (this.daysSelectedII.length == 0) {
        alert('please select valid day');
      }
    }
    else if (this.selectedrecuvalue == "3") {

      if (this.MonthArr.filter(x => x.checked == true).length == 0) {
        alert('Please select day');
        return false;
      }
      for (let index = 0; index < this.MonthArr.length; index++) {
        if (this.MonthArr[index].checked == true) {
          const day = this.MonthArr[index].value;
          _arraytext.push(day);
          var newArray = this.AllDatesSDandED.filter(txt => txt.DayNum == day);
          this.daysSelectedII = this.daysSelectedII.concat(newArray);
        }
      }
    }
    // else if (this.selectedrecuvalue === "4") {
    //   this.daysSelectedII = this.getBiWeeklyDates(startDate);
    // }
    // else if (this.selectedrecuvalue === "5") {
    //   this.daysSelectedII = this.getLastDaysOfEachMonth();
    // }

    finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

    if (finalarray.length > 0) {
      finalarray.forEach(element => {
        debugger
        const date1: Date = new Date(this._StartDate);
        // if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        //   this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
        // }
        // else {
        //   this._SEndDate = this._StartDate;
        // }
        const date2: Date = new Date(this._SEndDate);

        const diffInMs: number = date2.getTime() - date1.getTime();

        const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
          var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
        }
        else {
          var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        }
        // var dd = moment(date3).add(diffInDays, 'days')
        // var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        var dd = moment(date3).add(diffInDays, 'days')
        console.log(dd, date3, diffInDays, date2, this._SEndDate, "update edit")
        var SEndDates = "SEndDate";
        element[SEndDates] = (dd.format(format2));

        var vStartTime = "StartTime";
        element[vStartTime] = this.Startts;

        var vEndTime = "EndTime";
        element[vEndTime] = this.Endtms;

        var vEnd_date = "End_date";
        element[vEnd_date] = this._EndDate;

        var vIsDeleted = "IsDeleted";
        element[vIsDeleted] = 0;

        var vPending = "Pending_meeting";
        element[vPending] = 0;

        var vRecurrence = "Recurrence";
        element[vRecurrence] = this.selectedrecuvalue;

        var vRecurrence_value = "Recurrence_values";
        element[vRecurrence_value] = _arraytext.toString();

        var vEmp_No = "Emp_No";
        element[vEmp_No] = this.Current_user_ID;

        var vScheduleType = "ScheduleType";
        element[vScheduleType] = this.ScheduleType == "Task" ? 1 : 2;

        var vTitle_Name = "Title_Name";
        element[vTitle_Name] = this.Title_Name;

        var vMasterCode = "MasterCode";
        element[vMasterCode] = this.MasterCode == undefined ? "" : this.MasterCode.toString();

        // var columnName = "Link_Type";
        // element[columnName] = this.Link_Type == undefined ? "" : this.Link_Type;
        var vUser_Name = "User_Name";
        element[vUser_Name] = this.ngEmployeeDropdown == undefined ? "" : this.ngEmployeeDropdown.toString();


        var vLocation_Type = "Location_Type";
        element[vLocation_Type] = (this._meetingroom==true)?(this.Location_Type == undefined ? "" : this.Location_Type):'';

        var vLocation_fulladd = "FullAddress_loc";
        element[vLocation_fulladd] = (this._meetingroom==true)?(this.Locationfulladd == undefined ? "" : this.Locationfulladd):'';

        var vLocation_url = "Addressurl";
        element[vLocation_url] = (this._meetingroom==true)?(this.Addressurl==undefined?'':this.Addressurl):'';

        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;


        var vLink_Details = "Link_Details";
        element[vLink_Details]=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';


        var vDescription = "Description";
        element[vDescription] = this.Description_Type == undefined ? "" : this.Description_Type;

        var vSubtask = "Subtask";
        element[vSubtask] = this.Subtask == undefined ? "" : this.Subtask;

        var vEventNumber = "EventNumber";
        element[vEventNumber] = this.EventNumber;

        var vPortfolio_name = "Portfolio_name";
        element[vPortfolio_name] = this.Portfolio == undefined ? "" : this.Portfolio.toString();

        var vDMS_Name = "DMS_Name";
        element[vDMS_Name] = this.SelectDms == undefined ? "" : this.SelectDms.toString();


        var vAgendas = "Meeting_Agendas";
        const mtgAgendas = JSON.stringify(this.allAgendas.length > 0 ? this.allAgendas : []);
        element[vAgendas] = mtgAgendas;



// dont provide unnecessary values to api when task is creating.
       if(this.ScheduleType=='Task'){
        element[vUser_Name]='';
        element[vLocation_Type]='';
        element[vLocation_fulladd]='';
        element[vLocation_url]='';
        element[vOnlinelink]=false;
         element[vLink_Details]='';
         element[vDescription]='';
         element[vPortfolio_name]='';
         element[vDMS_Name]='';
         element[vAgendas]='[]';
       }
// dont provide unnecessary values to api when task is creating.


        //
      });

      this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
      if (this.Schedule_ID != 0) {
        this._calenderDto.Schedule_ID = this.Schedule_ID;

      }
      else {
        this._calenderDto.Schedule_ID = 0;
      }

      let _attachmentValue = 0;
      const frmData = new FormData();
      for (var i = 0; i < this._lstMultipleFiales.length; i++) {
        frmData.append("fileUpload", this._lstMultipleFiales[i].Files);
      }
      if (this._lstMultipleFiales.length > 0)
        _attachmentValue = 1;
      else
        _attachmentValue = 0;

      frmData.append("EventNumber", this.EventNumber.toString());
      frmData.append("CreatedBy", this.Current_user_ID.toString());
      console.log(JSON.stringify(finalarray), "finalarray")
      this._calenderDto.draftid = this.draftid;


      console.log('_calenderDto obj:', JSON.parse(this._calenderDto.ScheduleJson));

      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {

          if (_attachmentValue == 1) {
            this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
              (event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                  case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    console.log(`Uploaded! ${this.progress}%`);
                    break;
                  case HttpEventType.Response:
                    console.log('User successfully created!', event.body);

                    // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    this._lstMultipleFiales = [];
                    // empty(this._lstMultipleFiales);
                    // alert(this._lstMultipleFiales.length);
                    setTimeout(() => {
                      this.progress = 0;
                    }, 1500);

                    (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                    (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
                }
              }
            )
          }
          //UploadCalendarAttachmenst
          // console.log(data, "m");
          this._Message = data['message'];
          if (this._Message == "Updated Successfully") {
            if (this.draftid != 0) {
              this.Getdraft_datalistmeeting();
              this.draftid = 0
            }
            this.notifyService.showSuccess(this._Message, "Success");
          }
          else {
            this.notifyService.showError(this._Message, "Failed");
          }


          this.GetScheduledJson();
          this.Title_Name = null;
          this.ngEmployeeDropdown = null;
          this.Description_Type = null;
          this.MasterCode = null;
          this.projectsSelected = [];
          this.Subtask = null;
          this.Startts = null;
          this.Endtms = null;
          this.St_date = null;
          this.Ed_date = null;
          this._SEndDate = null;
          this._SEndDate = moment().format("YYYY-MM-DD").toString();
          this.Locationfulladd = null;
          this._status = null;
          this.SelectDms = null;
          this.Location_Type = null;
          this.Link_Details = null;
          this._onlinelink = false;
          this.Allocated_subtask = null;
          this.TM_DisplayName = null;
          this.Projectstartdate = "";
          this.projectEnddate = null;
          this.Status_project = null;
          this.AllocatedHours = null;
          this.daysSelectedII = [];
          this.Avaliabletime = [];
          this.timeslotsavl = [];
          this.singleselectarry = [];
          this.daysSelected = [];
          // this.Recurr_arr = [];
          this.selected = null;
          this.TImetable();
          this.Portfolio = null;
          this.minDate = moment().format("YYYY-MM-DD").toString();
          this.maxDate = null;
          // this.calendar.updateTodaysDate();
          this.TImetable();

        });
      this.closeschd();
      this.meetingsViewOn = true;   // closes the event task creation section.
      this.meetingList = [];
      this.meeting_arry = [];
      this.meetinglength = 0;
      this.upcomingMeetings = [];
      this.todaymeetings = [];
      this.last7dmeetings = [];
      this.lastMonthMeetings = [];
      this.olderMeetings = [];
      this.mtgFromD = '';
      this.mtgUptoD = '';
      this.mtgsInRange = [];
      this.mLdng = false;
      this.tdMtgCnt = 0;   // Today Meetings Count
      this.upcMtgCnt = 0;  // Upcoming Meetings Count
      this.lstMthCnt = 0;  // Last Month Meetings Count
      this.lst7dCnt = 0;   // Last 7 Days Meetings Count
      this.oldMtgCnt = 0;  // Older Meetings Count
      this.GetmeetingDetails();

    }
    else {
      alert('Please Select Valid Date and Time');
    }

  }

  penhide1() {
    document.getElementById("pendlist1").classList.remove("show");
    document.getElementById("cal-main").classList.remove("col-lg-9");
    document.getElementById("cal-main").classList.add("col-lg-12");
  }

  Getdraft_datalistmeeting() {

    this._calenderDto.Emp_No = this.Current_user_ID;
    this.CalenderService.NewGetMeeting_darftdata(this._calenderDto).subscribe
      (data => {
        if (data['Draft_meetingdata'] != "" && data['Draft_meetingdata'] != null && data['Draft_meetingdata'] != undefined) {
          this.draftdata_meet = JSON.parse(data['Draft_meetingdata']);
          this.draftcount = this.draftdata_meet.length;
        }
        else {
          this.draftdata_meet = null;
          this.draftcount = 0;
          this.penhide1();
        }
      });

  }





  // @ViewChild('auto') autoComplete: MatAutocomplete;
  // @ViewChild(MatAutocompleteTrigger) autoCompleteTrigger: MatAutocompleteTrigger;
  // @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  // @ViewChild('fruitInput') fruitInput: ElementRef;

  // @ViewChild('FirstChart') firstchart:any;


@ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;
isParticipantDrpDwnOpen:boolean=false;
isDMSMemoDrpDwnOpen:boolean=false;
isPortfolioDrpDwnOpen:boolean=false;
isProjectDrpDwnOpen:boolean=false;
isEmployeeDrpDwnOpen:boolean=false
 openAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
}

 closeAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
}

onPrjSelected(e: any) {


  const prjChoosed = this.ProjectListArray.find((p: any) => p.Project_Code === e.option.value);

  if (prjChoosed) {

     if(!this.MasterCode)
      this.MasterCode=[];

      const index = this.MasterCode.indexOf(prjChoosed.Project_Code);
      if (index === -1) {
          this.MasterCode.push(prjChoosed.Project_Code);
      }
       else {
        this.MasterCode.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('ProjectDrpDwn');
}
 removeSelectedPrj(item){
    const index=this.MasterCode.indexOf(item);
    if(index!==-1){
      this.MasterCode.splice(index,1);
  }

}


 getPrjName(projectCode:string){
  if(this.ProjectListArray){
   const P=this.ProjectListArray.find(pr=>pr.Project_Code.trim()==projectCode.trim());
   return P?P.BlockNameProject:'';
  }
   return [];
}





portfolio_id:any

onPortfolioSelected(e:any){

  const portfolioChoosed=this.Portfoliolist_1.find((p:any)=>p.portfolio_id===e.option.value);

  if(portfolioChoosed){
    if(!this.Portfolio)
      this.Portfolio=[]

       const index=this.Portfolio.indexOf(portfolioChoosed);
       if(index===-1){
          // if not present then add it
          this.Portfolio.push(portfolioChoosed);
       }
       else{ //  if item choosed is already selected then remove it.
        this.Portfolio.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('PortfolioDrpDwn');
}
removeSelectedPortfolio(item){
  const index=this.Portfolio.indexOf(item);
  if(index!==-1){
    this.Portfolio.splice(index,1);
  }
}


// getPortName(Portfolioid:any){
//   if(this.Portfoliolist_1){
//     const p = this.Portfoliolist_1.find(pt=>pt.portfolio_id == Portfolioid)
//     return p?p.Portfolio_Name:'';
//   }
//   return []
// }



onParticipantSelected(e: any) {
  // Ensure _EmployeeListForDropdown is not undefined
  if (!this._EmployeeListForDropdown) {
      console.error('_EmployeeListForDropdown is undefined');
      return;
  }

  const participantChoosed = this._EmployeeListForDropdown.find((c) => c.Emp_No === e.option.value);

  // Ensure ngEmployeeDropdown is initialized
  if (!this.ngEmployeeDropdown) {
      this.ngEmployeeDropdown = [];
  }

  if (participantChoosed) {
      const index = this.ngEmployeeDropdown.indexOf(participantChoosed);
      if (index === -1) {
          // If not present, then add it
          this.ngEmployeeDropdown.push(participantChoosed);
      } else {
          // If the item is already selected, then remove it
          this.ngEmployeeDropdown.splice(index, 1);
      }
  } else {
      console.error('Participant not found in _EmployeeListForDropdown');
  }

  this.openAutocompleteDrpDwn('ParticipantDrpDwn');
}removeSelectedParticipant(item: any) {
  if (!this.ngEmployeeDropdown) {
      console.error('ngEmployeeDropdown is undefined');
      return;
  }

  const index = this.ngEmployeeDropdown.indexOf(item);
  if (index !== -1) {
      this.ngEmployeeDropdown.splice(index, 1);
  } else {
      console.error('Item not found in ngEmployeeDropdown');
  }
}


// DMS SIDEBAR SECTION CODE DROPDOWN START

onDMSMemoSelected(e){
  const memoChoosed=this.Memos_List.find((c)=>c.MailId===e.option.value);
  if(memoChoosed){
       const index=this.SelectDms.indexOf(memoChoosed);
       if(index===-1){
          // if not present then add it
          this.SelectDms.push(memoChoosed);
       }
       else{ //  if item choosed is already selected then remove it.
        this.SelectDms.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('MemoDrpDwn');
}
removeSelectedDMSMemo(item){
  const index=this.SelectDms.indexOf(item);
  if(index!==-1){
    this.SelectDms.splice(index,1);
  }
}











// DMS SIDEBAR SECTION CODE DROPDOWN END










//meeting side bar code end



// NewLinkMeetingInPortfolio









// meeting recall start
isLinkableMtgsDrpDwnOpened:boolean=false;
LinkableMtgsList:any;
selectedMtgs2Link:any=[];

getLinkableMtgsList(){

    this.projectMoreDetailsService.NewGetEmployeeMeetings(this.Current_user_ID,this.Url_portfolioId).subscribe((res:any)=>{
           this.LinkableMtgsList=JSON.parse(res['AvailableSlotsJson']);
           console.log("LinkableMtgsList:",this.LinkableMtgsList);
    })
}


removeSelectedLinkableMtg(mtg:any){
    const index=this.selectedMtgs2Link.indexOf(mtg);
    if(index!==-1)
      this.selectedMtgs2Link.splice(index,1);
}

onMtgForLinkSelected(e:any){
     const mtgChoosed=this.LinkableMtgsList.find((m:any)=>m.EventNumber===e.option.value);
     if(mtgChoosed){
          const index=this.selectedMtgs2Link.indexOf(mtgChoosed.EventNumber);
          if(index===-1){
               this.selectedMtgs2Link.push(mtgChoosed.EventNumber);
          }else {
               this.selectedMtgs2Link.splice(index,1);
          }
     }
     this.openAutocompleteDrpDwn('LinkableMtgsDrpDwn');
}


 getSelectedMtgName(eventno:string){

  if(this.LinkableMtgsList){
   const M=this.LinkableMtgsList.find(m=>m.EventNumber.trim()==eventno.trim());
   return M?M.Task_Name:'';
  }
   return [];
}


// linkMtgsToProject(){

//   const mtgsSelected=this.selectedMtgs2Link.join(',');
//   let empno=this.Current_user_ID;
//   let prj_code=this.projectInfo.Project_Code;

//      this.projectMoreDetailsService.NewLinkMeetingInProjectDetails(mtgsSelected,empno,prj_code).subscribe(res=>{
//             console.log(res);
//             if(res){
//               if(res['message']==1){
//                 this.notifyService.showSuccess("Successfully meeting added to the project","")
//                 this.backMainMeetings();
//                 this.GetmeetingDetails();
//                 this.selectedMtgs2Link=[];
//               }
//               else if(res['message']==2){
//                 this.notifyService.showError("Failed to link selected meeting into the project.","")
//               }
//             }
//             else
//             this.notifyService.showError("something went wrong","");


//      })

// }

linkMtgsToPortfolio(){
debugger
  const mtgsSelected=this.selectedMtgs2Link.join(',');
  let empno=this.Current_user_ID;
  let pid=this.Url_portfolioId;

     this.projectMoreDetailsService.NewLinkMeetingInPortfolio(mtgsSelected,empno,pid).subscribe(res=>{
            console.log(res);
            if(res){
              if(res['message']==1){
                this.notifyService.showSuccess("Successfully meeting added to the portfolio","")
                this.backMainMeetings();
                this.GetmeetingDetails();
                this.selectedMtgs2Link=[];
              }
              else if(res['message']==2){
                this.notifyService.showError("Failed to link selected meeting into the portfolio","")
              }
            }
            else
            this.notifyService.showError("something went wrong","");


     })


    }







// meeting recall end
// agenda in event creation start
agendaInput: string | undefined;
allAgendas: any = [];
agendasAdded: number = 0;
totalcountofagenda:any
addAgenda() {
debugger
  if (this.agendaInput && this.agendaInput.trim().length > 0) {
    this.agendasAdded += 1;
    const agenda = {
      index: this.agendasAdded,
      name: this.agendaInput
    };
    this.allAgendas.push(agenda);
    this.agendaInput = null;
  }
  this.totalcountofagenda = this.allAgendas.length;
  console.log("allAgendas:", this.totalcountofagenda);

}

deleteAgenda(index: number) {
  if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
    Swal.fire({
      title: 'Remove this Agenda ?',
      text: this.allAgendas[index].name,
      showConfirmButton: true,
      showCancelButton: true,
    }).then(option => {
      if (option.isConfirmed) {
        this.allAgendas.splice(index, 1);
      }
      this.totalcountofagenda = this.allAgendas.length;
    });

  }

// console.log("allAgendas:", this.allAgendas);

}


editAgenda(index: number) {
  $(`#agenda-label-${index}`).addClass('d-none');
  $(`#agenda-text-field-${index}`).removeClass('d-none');
  $(`#agenda-text-field-${index}`).focus();

  $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

  $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
  $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.

}

cancelAgendaEdit(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  tf.value = this.allAgendas[index].name;

  $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
}


updateAgenda(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  this.allAgendas[index].name = tf.value;

  $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.


  console.log('all agendas after updating:', this.allAgendas);
}
// agenda in event creation end



// start meeting feature start

meetingReport(mtgScheduleId:any) {
  let name: string = 'Meeting-Report';
  var url = document.baseURI + name;
  var myurl = `${url}/${mtgScheduleId}`;
  var myWindow = window.open(myurl);
  myWindow.focus();
}
// start meeting feature end

featuremodel() {
  document.getElementById("newfeatures").style.display = "block";
  document.getElementById("newfeatures").style.overflow = "auto";
  document.getElementById("feature-modal-backdrop").classList.add("show");
}
NewAddUserCountFeature() {
      document.getElementById("newfeatures").style.display = "none";
      document.getElementById("newfeatures").style.overflow = "hidden";
      document.getElementById("feature-modal-backdrop").classList.remove("show");
}

// share and shared comibines side bar
View_User_list() {
  document.getElementById("User_list_View").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
  this.currentSidebarOpened="PEOPLES";

}
closedarBar() {
  // document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
  // document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
  // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  // document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
  // document.getElementById("newdetails").classList.remove("position-fixed");
  // document.getElementById("rightbar-overlay").style.display = "none";
  this.closeInfo();

  document.getElementById("User_list_View").classList.remove("kt-quick-active--on");
  document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
  document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
  document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
  document.getElementById("Timeline_view").classList.remove("kt-timeline-panel--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("newdetails").classList.remove("position-fixed");


  document.getElementById('kt_tab_pane_1_4').classList.add("show","active");
  document.querySelector("a[href='#kt_tab_pane_1_4']").classList.add("active");  // PEOPLE ON PROJECT TAB.

  // document.getElementById('kt_tab_pane_2_4').classList.remove("show","active");
  // document.querySelector("a[href='#kt_tab_pane_2_4']").classList.remove("active");

  // document.getElementById('kt_tab_pane_user-request_approver').classList.remove("show","active");
  // document.querySelector("a[href='#kt_tab_pane_user-request_approver']").classList.remove("active");

  $('#kt_tab_pane_2_4').removeClass("show active");
  $('a[href="#kt_tab_pane_2_4"]').removeClass("active");   // ADD SUPPORTS TAB.

  $('#kt_tab_pane_user-request_approver').removeClass("show active");
  $('a[href="#kt_tab_pane_user-request_approver"]').removeClass("active");

  // document.getElementById('kt_tab_pane_user-request_notapprover').classList.remove("show","active");
  // document.querySelector("a[href='#kt_tab_pane_user-request_notapprover']").classList.remove("active");


  // USER REQUESTS TAB.
  // back to 1st 'People on the project' tab.


}
// shared and shared details side bar end


all_status={
  'Under Approval': '#B2D732',
  'InProcess':'#0089FB',
  'Completed':'#62B134',
  'Delay':'#EE4137',
  'Completion Under Approval':'#B2D732',
  'Forward Under Approval':'#B2D732',
  'Project Hold':'#E2D9BC',
  'Cancelled':'#EE4137',
  'New Project Rejected':'#DFDFDF',
  'Deadline Extend Under Approval':'#F88282',
  'other':'#d0d0d0'
};
prj_statuses:any=[];
loadGanttChart(){
  console.log(">pr>",this._ProjectsListBy_Pid);

  this.prj_statuses=this._ProjectsListBy_Pid.map(item=>item.Status.includes('Delay')?'Delay':item.Status);
  this.prj_statuses=Array.from(new Set(this.prj_statuses));

  const _series=this._ProjectsListBy_Pid.map((prj,_index)=>{
      const color=this.all_status[prj.Status]||this.all_status['other'];
      const isDelayPrj=prj.Status=='Delay';


      const data_ar=[{
        x:`${prj.Project_Name} (${prj.Project_Code})`,
        y:[new Date(prj.DPG).getTime(),new Date(prj.DeadLine).getTime()],
        fillColor:color,
        index:_index
      }];

      const data_ar1=[
        {
          x:`${prj.Project_Name} (${prj.Project_Code})`,
            y:[new Date(prj.DPG).getTime(),new Date(prj.DeadLine).getTime()],
            fillColor:'#0089FB',
            index:_index
        },
        {
          x:`${prj.Project_Name} (${prj.Project_Code})`,
          y:[new Date(prj.DeadLine).getTime(),new Date().getTime()],
          fillColor:'#EE4137',
          index:_index,
        }
      ];


      const obj={
          name:prj.Status,
          data:isDelayPrj?data_ar1:data_ar
      };
      return obj;
  });

  console.log('series here:',_series);



// Desired height per row in pixels
const rowHeight = 40;
const dataPoints = _series.reduce((sum, series) => sum + series.data.length, 0);
let chartHeight = rowHeight * dataPoints*(_series.length<10?2:1);
chartHeight=chartHeight<200?200:chartHeight;


var options = {
  series: _series,
  chart: {
    height: chartHeight,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '58%', // Adjust to fill the available space
      rangeBarGroupRows: true
    }
  },

  fill: {
    type: 'solid'
  },



  dataLabels: {
    enabled:false,
    formatter: function(val, opts) {
      // var label = opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex].x;
      // let text;
      // if(label == 'Stream Planner work scheduling')
      //   text = '43/58 actions completed';
      // else if(label == 'Test project for new project title')
      //   text = 'completed';
      // else if(label == 'Water colors project')
      //   text = '5 days delay.';
      // return text;
      return '';
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },



  xaxis: {
    type: 'datetime',
    position: 'top', // This moves the x-axis to the top
    labels: {
      show: true
    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    }
  },


  grid: {
    yaxis: {
      lines: {
        show: true
      }
    },
    xaxis: {
      lines: {
        show: true
      }
    },
    padding: {
      top: 35,
      right: 10,
      bottom: 20, // Add padding to the bottom to create space below the controller buttons
      left: 0
    }
  },
  legend: { show:false },
  tooltip: {
    custom: ({series, seriesIndex, dataPointIndex, w})=> {

 const data = w.config.series[seriesIndex].data[dataPointIndex];
 const index=data.index;
 const prj_type=this._ProjectsListBy_Pid[index].Exec_BlockName;
 const prj_start=this.datepipe.transform(new Date(this._ProjectsListBy_Pid[index].DPG), 'MMM d, y');
 const prj_end=this.datepipe.transform(new Date(this._ProjectsListBy_Pid[index].DeadLine), 'MMM d, y');
 const daydiff=Math.abs(moment(this._ProjectsListBy_Pid[index].DPG,'YYYY-MM-DD').diff(moment(this._ProjectsListBy_Pid[index].DeadLine,'YYYY-MM-DD'),'days'));
 const prj_totalactions=this._ProjectsListBy_Pid[index].Actioncount;
 const completed_actions=this._ProjectsListBy_Pid[index].CompletedActioncount;
 const prj_status=this._ProjectsListBy_Pid[index].Status;
 const statusColor=this.all_status[prj_status];
 const prjsubmtype=this._ProjectsListBy_Pid[index].SubmissionType;
 const prjdurationtime=this._ProjectsListBy_Pid[index].StandardDuration;
 const delaydays_=Math.abs(this._ProjectsListBy_Pid[index].Delaydays);


    return  `<div style="width: fit-content; min-width: 300px; padding: 0.5em; border-radius: 4px; box-shadow: 0 0 35px #6e6e6e33; background-color:white;">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 7px;">
       <span style="padding: 0.3em 0.6em 0.2em 0.6em; color: #0089FB; font-family: 'Lucida Sans Unicode'; font-size: 12px; margin-right:5px;">${prj_type}</span>
       <span style="padding: 0.3em 0.6em 0.2em 0.6em; border-radius: 4px; background-color: ${statusColor}; color: white; font-family: 'Lucida Sans Unicode'; font-size: 12px; margin-right:5px;">${prj_status} ${prj_status=='Delay'?delaydays_+' days':''}</span>
          ${
            ['Core Tasks','Secondary Tasks'].includes(prj_type)?
            `<span style="font-size: 13px; color: #0d0d0dd6; display: flex; align-items: flex-end; column-gap: 3px;">
              <fieldset style="border: 2px solid #4e49491f; padding: 0.2em; border-radius: 6px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e4949d9; min-width: 55px; display: flex; justify-content: center;">
                <legend style="font-size: 8px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e4949d9; width:fit-content;   ">actions</legend>
                ${completed_actions}<span style="color: #b4b4b4db;">/</span>${prj_totalactions}
              </fieldset>
              <span style="color: #4e4949d9; font-weight: bold; font-family: 'Lucida Sans Unicode'; font-size: 9px;">DONE</span>
            </span>`:''
          }
    </div>
    <div style="font-size: 12px; display: flex; column-gap: 3px;">
      <fieldset style=" flex-grow:1;   border: 1px solid #4e49491f; padding: 0.3em; border-radius: 6px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e49499c; min-width: 50px; display: flex; justify-content: center; font-size: 10px;">
        <legend style="font-size: 8px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: grey;  width:fit-content; ">${(prj_type=='Standard Tasks'||prj_type=='Routine Tasks')?'submission':'start'}</legend>
        ${(prj_type=='Standard Tasks'||prj_type=='Routine Tasks')?prjsubmtype:prj_start}
      </fieldset>
      ${(prj_type=='Standard Tasks'||prj_type=='Routine Tasks')?'':`
        <span style="flex-grow: 1;display: flex;flex-direction: column;justify-content: end;"> <span style="border: 1px dashed lightgray;"></span>
          <span style="text-align: center; color: gray; font-family: Lucida Sans Unicode; font-size: 8px;">${daydiff+(daydiff>1?' days':' day')}</span>
        </span>
       `}
      <fieldset style=" flex-grow:1; border: 1px solid #4e49491f; padding: 0.3em; border-radius: 6px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e49499c; min-width: 50px; display: flex; justify-content: center; font-size: 10px;">
        <legend style="font-size: 8px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: gray;   width:fit-content; ">${(prj_type=='Standard Tasks'||prj_type=='Routine Tasks')?'duration':'end'}</legend>
        ${(prj_type=='Standard Tasks'||prj_type=='Routine Tasks')?prjdurationtime:prj_end}
      </fieldset>
    </div>
  </div>`;

    }
  },



};

var chart = new ApexCharts(document.querySelector("#chartdiv3"), options);
chart.render();

}




 shareToEmplys:any=[];
onEmployeeSelected(e:any){
debugger
  const employeeChoosed=this.Employeshare.find((p:any)=>p.Emp_No===e.option.value);

  if(employeeChoosed){
    if(!this.shareToEmplys)
      this.shareToEmplys=[]

       const index=this.shareToEmplys.indexOf(employeeChoosed.Emp_No);
       if(index===-1){
          // if not present then add it
          this.shareToEmplys.push(employeeChoosed.Emp_No);
       }
       else{ //  if item choosed is already selected then remove it.
        this.shareToEmplys.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('employee2shareDrpDwn');
}
removeSelectedemployee(item){
  const index=this.shareToEmplys.indexOf(item);
  if(index!==-1){
    this.shareToEmplys.splice(index,1);
  }
}


getObjOf(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}

// fruitCtrl = new FormControl();
// selectedEmployees: any = [];
// selectedEmpIds: any = [];

// nonRacisList:any[]
// isSelection: boolean =false;
// isSupportDrpDwnOpen:boolean=false;

//   selectedChip(event: MatAutocompleteSelectedEvent): void {
//     // this._keeppanelopen();
//     const selectedEmployee = this.nonRacisList.find((fruit) => fruit.Emp_No === event.option.value);
//     if (selectedEmployee) {
//       const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === selectedEmployee.Emp_No);

//       if (index === -1) {
//         // Employee not found in the selected array, add it
//         this.selectedEmployees.push(selectedEmployee);
//         this.selectedEmpIds.push(selectedEmployee.Emp_No);
//       } else {
//         // Employee found in the selected array, remove it
//         this.selectedEmployees.splice(index, 1);
//         this.selectedEmpIds.splice(index, 1);
//       }
//     }

//     this.fruitInput.nativeElement.value = '';
//     this.filteredEmployees = this.nonRacisList;
//     console.log(this.selectedEmpIds, "selected")
//   }

//   isSelectedChip(employee: any): boolean {
//     return this.selectedEmployees.some((emp) => emp.Emp_No === employee.Emp_No);
//   }





// // selectedEmployees:any[]


// filterEmployees(input: string): void {
//   this.isSelection = true;
//   this.Employeshare = this.nonRacisList.filter((employee) =>
//     employee.NonRACIS.toLowerCase().includes(input.toLowerCase())
//   );
// }


// new code of portfolio meeting side bar start

date_menu(dialogId:string){
  document.getElementById(dialogId).classList.add("show");
}
date_menu_close(dialogId:string){
  document.getElementById(dialogId).classList.remove("show");
}

// selectStartDate(event) {
//   debugger
//       this._StartDate = event;
//       let sd = event.format("YYYY-MM-DD").toString();
//       this._SEndDate = event.format("YYYY-MM-DD").toString();
//       this.minDate = sd;
//       this._calenderDto.Schedule_ID = this.Schedule_ID;
//       this._calenderDto.Scheduled_date = sd;

//       var start = moment(this.minDate);
//       var end = moment(this.maxDate);
//       const format2 = "YYYY-MM-DD";
//       const d1 = new Date(moment(start).format(format2));
//       const d2 = new Date(moment(end).format(format2));
//       const date = new Date(d1.getTime());
//       this.daysSelectedII = [];
//       this.scstartdate = d1;
//       this.AllDatesSDandED = [];
//       var jsonData = {};
//       var columnName = "Date";
//       var columnNames = "StartTime";
//       var columnNamee = "EndTime";
//       var IsActive = "IsActive";
//       var Day = "Day";
//       var DayNum = "DayNum";

//       if (this.selectedrecuvalue == "0") {

//         jsonData[columnName] = (moment(date).format(format2));
//         jsonData[columnNames] = this.Startts;
//         jsonData[columnNamee] = this.Endtms;
//         jsonData[IsActive] = 1;
//         jsonData[Day] = event.format('dddd').substring(0, 3);
//         jsonData[DayNum] = event.format('DD').substring(0, 3);
//         this.AllDatesSDandED.push(jsonData);
//       }
//       else {
//         const dates = [];
//         while (date <= d2) {
//           dates.push(moment(date).format(format2));
//           var jsonData = {};
//           var columnName = "Date";
//           jsonData[columnName] = (moment(date).format(format2));
//           var columnNames = "StartTime";
//           jsonData[columnNames] = this.Startts;
//           var columnNamee = "EndTime";
//           jsonData[columnNamee] = this.Endtms;
//           var IsActive = "IsActive";
//           jsonData[IsActive] = 1;
//           var Day = "Day";
//           jsonData[Day] = moment(date).format('dddd').substring(0, 3);
//           var DayNum = "DayNum";
//           jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
//           this.AllDatesSDandED.push(jsonData);
//           date.setDate(date.getDate() + 1);
//         }
//       }



//       // valid starttimearr setting start.
//       let _inputdate=event;
//       let _currentdate=moment();
//       if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
//       {
//           const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
//           const index:number=this.StartTimearr.findIndex((item:any)=>{
//               const t=moment(item,'h:mm A');
//               const result=t>=ct;
//               return result;
//           });
//           this.validStartTimearr=this.StartTimearr.slice(index);

//       // verify whether starttime and endtime are valid or not. start
//       _currentdate.format('h:mm A');

//       const inputtime1=moment(this.Startts,'h:mm A');
//       const inputtime2=moment(this.Endtms,'h:mm A');
//       if(inputtime1<ct)
//         this.Startts=null;
//       if(inputtime2<ct)
//         this.Endtms=null;

//      // verify whether starttime and endtime are valid or not. end

//       }
//       else
//       this.validStartTimearr=[...this.StartTimearr];
//       // valid starttimearr setting end.


//     }
selectedrecuvalue1:string='0';
dayArr1:any=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
MonthArr1:any=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
_EndDate1:any;
mtgOnDays:any=[];  // list of day name on which mtg is present.
notProvided:any;
customrecurrencemodal() {
  debugger
  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("customrecurrence").style.display = "block";

  this.selectedrecuvalue1=this.selectedrecuvalue;
  this.dayArr1=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
  this.MonthArr1=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
  this._EndDate1=moment(this._EndDate);

  if(this.selectedrecuvalue1=='2')
    document.getElementById("weekly_121_new").style.display = "block";
  else if(this.selectedrecuvalue1=='3')
    document.getElementById("Monthly_121_new").style.display = "block";

  if(this.selectedrecuvalue1!='0')
    document.getElementById("div_endDate_new").style.display = "block";

}

onfocus(val) {
  console.log(val, "ttt");
}
_meetingroom:boolean=false;

Meeting_method(event){
  if (event.target.checked) {
    document.getElementById("Location_Name").style.display = "flex";
    this._meetingroom = event.target.checked;
  }
  else {
    document.getElementById("Location_Name").style.display = "none";
    this._meetingroom = false;
  }
 }

 projectsSelected: any = [];
 discardChoosedItem(listtype:'PROJECT'|'PORTFOLIO'|'DMS'|'PARTICIPANT',item:string){
  switch(listtype){
     case 'PROJECT':{
            const i=this.MasterCode.findIndex(pc=>pc==item);
            this.MasterCode.splice(i,1);
            this.projectsSelected.splice(i,1);
     };break;
     case 'PORTFOLIO':{
          const i=this.Portfolio.findIndex(ptf=>ptf==item);
          this.Portfolio.splice(i,1);

     };break;
     case 'DMS':{
           const i=this.SelectDms.findIndex(m=>m==item);
           this.SelectDms.splice(i,1);

     };break;
     case 'PARTICIPANT':{
          const i=this.ngEmployeeDropdown.findIndex(em=>em==item);
          this.ngEmployeeDropdown.splice(i,1);

     };break;
     default:{};
  }

}
companies_Arr:any;
basedOnFilter:any={};
projectmodaltype:'PROJECT'|'PORTFOLIO'|'DMS'|'PARTICIPANT'|undefined;
choosedItems:any=[];
FilteredResults:any=[];     // it is used to store the filtered result.
isFilteredOn:boolean=false;
projectmodal(modaltype:'PROJECT'|'PORTFOLIO'|'DMS'|'PARTICIPANT'){
  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("projectmodal").style.display = "block";
  this.projectmodaltype=modaltype;
  const searchField:any=document.querySelector(`#projectmodal input#${modaltype=='PROJECT'?'PrjInputSearch':'InputSearch'}`);
  if(searchField)searchField.focus();

  if(modaltype==='PROJECT')
  this.onProjectSearch('');

  if(modaltype!='PROJECT')
    this.onInputSearch('');
}
searchingResult: boolean = false;
inputTyped:string;
onProjectSearch(inputtext:any){

   if(this.searchingResult==false){
    const filterobj=this.basedOnFilter;

    this.isFilteredOn=(this.basedOnFilter.byuser||this.basedOnFilter.bycompany);  //  on the filter dot if applied.

    this.searchingResult=true;
    this.CalenderService.NewGetProjectandsubtaskDrp(inputtext,filterobj).subscribe((res:any)=>{
        console.log(res);
        if(res){
          this.ProjectListArray=JSON.parse(res['Projectlist']);
           console.log("project name searched result:",this.ProjectListArray);
          this.searchingResult=false;

          if(this.inputTyped!=undefined){
             const newsearch=this.inputTyped;
             this.inputTyped=undefined;
             this.onProjectSearch(newsearch);
          }

        }
    });
   }
   else
   this.inputTyped=inputtext;

}
onInputSearch(inputText:any){
  let keyname;
  let arrtype;
  let selectedinto;
  let property_name;
  if(this.projectmodaltype=='PARTICIPANT')
   {
     keyname='DisplayName';
     arrtype=this._EmployeeListForDropdown;
     selectedinto='ngEmployeeDropdown';
     property_name='Emp_No';
   }
  else if(this.projectmodaltype=='PORTFOLIO')
  {
     keyname='Portfolio_Name';
     arrtype=this.Portfoliolist_1;
     selectedinto='Portfolio';
     property_name='portfolio_id';
  }
  else if(this.projectmodaltype=='DMS')
  {
    keyname='Subject';
    arrtype=this.Memos_List;
    selectedinto='SelectDms';
    property_name='MailId';
  }

  const result=arrtype.filter(item=>{

    const unselected:boolean=!(this[selectedinto]&&this[selectedinto].includes(item[property_name]));
    let nameMatched:boolean=false;
    if(unselected)
    nameMatched=item[keyname].toLowerCase().trim().includes(inputText.toLowerCase().trim())

    return nameMatched;
  });
  this.FilteredResults=result;
}

project_filter() {
  document.getElementById("project-filter").classList.add("show");
  document.getElementById("filter-icon").classList.add("active");
}
close_project_filter() {
  document.getElementById("project-filter").classList.remove("show");
  document.getElementById("filter-icon").classList.remove("active");
}

clearAppliedFiltered(){
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;
    switch(this.projectmodaltype){
        case 'PROJECT':{
          this.onProjectSearch('');
        };break;
        case 'PORTFOLIO':{
          this.onPortfolioFilter();
        };break;
        case 'DMS':{
          this.onDMSFilter();
        };break;
        case 'PARTICIPANT':{
          this.onParticipantFilter();
        };break;
        default:{};
    }
    this.isFilteredOn=false;
}

onDMSFilter(){
  const _Emp=this._EmployeeListForDropdown.find(_emp=>_emp.Emp_No===this.basedOnFilter.byuser);
   const fresult=this.Memos_List.filter((_memo:any)=>{

    let hasMemo:boolean=false;
    hasMemo=(!this.basedOnFilter.byuser)||(_memo.DisplayName.toLowerCase().trim()===_Emp.TM_DisplayName.toLowerCase().trim());

    let isSelected:boolean=false;
    isSelected=this.SelectDms&&this.SelectDms.includes(_memo.MailId);

    return isSelected?false:hasMemo;
   });

   this.FilteredResults=fresult;
   this.isFilteredOn=true;
}

onParticipantFilter(){
const fresult=this._EmployeeListForDropdown.filter((_emp:any)=>{
   const isEmpIn:boolean=(!this.basedOnFilter.bycompany)||_emp.Emp_Comp_No.trim()===this.basedOnFilter.bycompany;
   let includeEmp:boolean=false;
   if(isEmpIn)
   includeEmp=!(this.ngEmployeeDropdown&&this.ngEmployeeDropdown.includes(_emp.Emp_No));
   return includeEmp;
});
this.FilteredResults=fresult;
this.isFilteredOn=true;
}
onPortfolioFilter(){
  const fresult=this.Portfoliolist_1.filter((prtf:any)=>{
       const x=(prtf.Emp_Comp_No===this.basedOnFilter.bycompany||!this.basedOnFilter.bycompany);
       const y=(prtf.Created_By===this.basedOnFilter.byuser||!this.basedOnFilter.byuser);
       const z=x&&y;
       const isSelected:boolean=this.Portfolio&&this.Portfolio.includes(prtf.portfolio_id);
       return isSelected?false:z;
  });
  this.FilteredResults=fresult;
  this.isFilteredOn=true;
}
keepChoosedItems(){
  debugger
  switch(this.projectmodaltype)
  {
      case 'PROJECT':{
        if(!this.MasterCode) // if MasterCode is null,undefined,'',0
          this.MasterCode=[];

        this.MasterCode=[...this.MasterCode, ...this.choosedItems.map(item=>item.Project_Code)]; // selected prj codes
        this.projectsSelected=[...this.projectsSelected,...this.choosedItems.map(item=>({ Project_Code:item.Project_Code, Project_Name:item.Project_Name, BlockNameProject:item.BlockNameProject, TM_DisplayName:item.TM_DisplayName }))]; // selected prj objs
        this.close_projectmodal();
      };break;

      case 'PORTFOLIO':{
            if (!this.Portfolio)   // if Portfolio is null,undefined,''
            this.Portfolio = [];

           this.Portfolio=[...this.Portfolio,...this.choosedItems];  // array of portfolio ids.
           console.log('portfolios selected:',this.Portfolio);
           this.close_projectmodal();
      };break;

     case 'DMS':{
          if(!this.SelectDms)   // if SelectDms is null,undefined,''
            this.SelectDms=[];

          this.SelectDms=[...this.SelectDms,...this.choosedItems];   // array of all selected dms id.
          this.close_projectmodal();
     };break;

     case 'PARTICIPANT':{
      if(!this.ngEmployeeDropdown)
         this.ngEmployeeDropdown=[];

        this.ngEmployeeDropdown=[...this.ngEmployeeDropdown,...this.choosedItems];
        this.close_projectmodal();
     };break;

  }

}
close_projectmodal(){
  document.getElementById("schedule-event-modal-backdrop").style.display = "none";
  document.getElementById("projectmodal").style.display = "none";
  this.choosedItems=[];   // clear selections.
  this.isFilteredOn=false;
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;    // clear filter applied.
  this.FilteredResults=[];             // clear filtered result.
  this.projectmodaltype=undefined; // no model open.
}

onItemChoosed(choosed:any,choosedItem:any){
  if(choosed){
    this.choosedItems.push(choosedItem);
  }
  else{
    const i=this.choosedItems.findIndex(item=>(this.projectmodaltype==='PROJECT')?(item.Project_Code==choosedItem.Project_Code):(item===choosedItem));
    if(i>-1)
    this.choosedItems.splice(i,1);

    // when removing already selected items
    if(this.projectmodaltype==='PROJECT'){
          const j=this.MasterCode.findIndex(item=>item==choosedItem.Project_Code);
          if(j>-1){
            this.MasterCode.splice(j,1);
            this.projectsSelected.splice(j,1);
          }
    }
    else{
      const ary=this.projectmodaltype=='PORTFOLIO'?this.Portfolio:this.projectmodaltype=='DMS'?this.SelectDms:this.ngEmployeeDropdown;
      const j=ary.findIndex(item=>item==choosedItem);
      if(j>-1)
      ary.splice(j,1);
    }
       // when removing already selected items
  }
}





onRecurrenceTypeChange(val:any){

    this.selectedrecuvalue1 = val.value.toString();
    this._labelName = "Start Date";

    for (let index = 0; index < this.dayArr1.length; index++) {
          this.dayArr1[index].checked = false;
    }
    for (let index = 0; index < this.MonthArr1.length; index++) {
          this.MonthArr1[index].checked = false;
    }


    document.getElementById("div_endDate_new").style.display = "block";
    if (val.value == 0) {
      this._labelName = "Schedule Date";
      document.getElementById("div_endDate_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==1){
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==2){
      document.getElementById("weekly_121_new").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
    }
    else if(val.value==3){
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "block";
    }
}

selectmonthlydays(day) {
  let objIndex = this.MonthArr1.findIndex((obj => obj.value == day.target.value));
  this.MonthArr1[objIndex].checked = day.target.checked;

  if(day.target.checked&&this.notProvided=='montharr1')
    this.notProvided="";
}


close_customrecurrencemodal() {
  document.getElementById("schedule-event-modal-backdrop").style.display = "none";
  document.getElementById("customrecurrence").style.display = "none";

  document.getElementById("div_endDate_new").style.display = "none";
  document.getElementById("weekly_121_new").style.display = "none";
  document.getElementById("Monthly_121_new").style.display = "none";

  this.selectedrecuvalue1='0';
  this.dayArr1=[];
  this.MonthArr1=[];
  this._EndDate1=moment().add(3, 'months').format("YYYY-MM-DD").toString();
}




bindCustomRecurrenceValues(){


  if(this.selectedrecuvalue1=='2'&&!this.dayArr1.some((item)=>item.checked)){
    this.notProvided='dayarr1';
    return;
  }

  if(this.selectedrecuvalue1=='3'&&!this.MonthArr1.some(item=>item.checked)){
    this.notProvided='montharr1';
    return;
  }

  if(['1','2','3'].includes(this.selectedrecuvalue1)&&!this._EndDate1){
    this.notProvided='enddate1';
    return;
  }


     //inserting values into these selectedrecuvalue, dayArr, MonthArr, _EndDate.
  this.selectedrecuvalue=this.selectedrecuvalue1;
  this.dayArr=[...this.dayArr1];
  this.MonthArr=[...this.MonthArr1];
  this._EndDate=this._EndDate1.format("YYYY-MM-DD").toString();
  this.maxDate = this._EndDate1.format("YYYY-MM-DD").toString();

  this.mtgOnDays=[];
  if(this.selectedrecuvalue==='2'){
    this.dayArr.forEach((item:any)=>{
      if(item.checked){
         let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
         this.mtgOnDays.push(d_name);
      }
  });
  }
  else if(this.selectedrecuvalue==='3'){
     this.MonthArr.forEach((item:any)=>{
       if(item.checked){
          const d_no=Number.parseInt(item.value);
          this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
       }
     });
  }




  if (this.selectedrecuvalue == '0') {
    this._PopupConfirmedValue = 1;
  }
  else {
    this._PopupConfirmedValue = 2;
  }

  this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
  var start = moment(this.minDate);
  var end = moment(this.maxDate);
  const format2 = "YYYY-MM-DD";
  const d1 = new Date(moment(start).format(format2));
  const d2 = new Date(moment(end).format(format2));
  const date = new Date(d1.getTime());
  this.daysSelectedII = [];
  this.AllDatesSDandED = [];
  const dates = [];

  while (date <= d2) {
    dates.push(moment(date).format(format2));
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = (moment(date).format(format2));
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment(date).format('dddd').substring(0, 3);
    var DayNum = "DayNum";
    jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    date.setDate(date.getDate() + 1);
  }

  if (this.selectedrecuvalue == '0') {
    this.maxDate = moment(this.minDate).format("YYYY-MM-DD").toString();
    this.daysSelectedII = [];
    this.daysSelected = [];
    this.singleselectarry = [];
    const format2 = "YYYY-MM-DD";
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = (moment(this.minDate).format(format2));
    var columnNames = "StartTime";
    jsonData[columnNames] = this.Startts;
    var columnNamee = "EndTime";
    jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    this.daysSelectedII.push(jsonData);
  }


  this.close_customrecurrencemodal();
  }

  onSubmitBtnClicked() {

    if (
      (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
      (this.Description_Type?(this.Description_Type.trim().length<=200):true)&&
      this.Startts &&
      this.Endtms &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ? this.allAgendas.length > 0 : true)
    ) {
      this.OnSubmitSchedule();
      this.notProvided = false;
    }
    else {
      if ((!this.Title_Name)||this.Title_Name.trim().length<3||this.Title_Name.trim().length>100)
        document.getElementById('dsb-evt-titleName').focus();
      else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.action-section .agenda-input-field input#todo-input'); agf.focus(); }

      this.notProvided = true;
    }
  }

  Insert_indrafts() {
    if (this.draftid != 0) {
      this._calenderDto.draftid = this.draftid;
    }
    else {
      this._calenderDto.draftid = 0;
    }
    this._calenderDto.Task_Name = this.Title_Name;
    this._calenderDto.Emp_No = this.Current_user_ID;
    if (this.SelectDms == null) {
      this.SelectDms = [];
    }
    this._calenderDto.Dms = this.SelectDms.toString();
    if (this.Portfolio == null) {
      this.Portfolio = [];
    }
    this._calenderDto.Portfolio = this.Portfolio.toString();
    this._calenderDto.location = this.Location_Type;
    this._calenderDto.loc_status = this._onlinelink;
    this._calenderDto.Note = this.Description_Type;
    this._calenderDto.Schedule_type = this.ScheduleType == "Task" ? 1 : 2;
    //  alert( this.ScheduleType);
    if (this.ngEmployeeDropdown == null) {
      this.ngEmployeeDropdown = [];
    }
    this._calenderDto.User_list = this.ngEmployeeDropdown.toString();
    if (this.MasterCode == null) {
      this.MasterCode = [];
    }
    this._calenderDto.Project_Code = this.MasterCode.toString();

    const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
    this._calenderDto.DraftAgendas=mtgAgendas;
    this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
      (data => {
        if (data['message'] == '1') {
          this.Getdraft_datalistmeeting();
          this.closeschd();
          this.notifyService.showSuccess("Draft saved", "Success");
        }
        if (data['message'] == '2') {
          this.Getdraft_datalistmeeting();
          this.closeschd();
          this.notifyService.showSuccess("Draft updated", "Success");
        }
      });


  }
  closeschds() {

    // this.Insert_indraft();
    document.getElementById('date-menu').classList.remove("show");
    document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("kt-bodyc").classList.remove("overflow-hidden");
    document.getElementById("Descrip_Name12").style.display = "none";

    this._StartDate = moment().format("YYYY-MM-DD").toString();
    this._EndDate = moment().format("YYYY-MM-DD").toString();
    this._SEndDate = null;
    this._SEndDate = moment().format("YYYY-MM-DD").toString();
    this.minDate = moment().format("YYYY-MM-DD").toString();
    this.Attachment12_ary = [];
    this.RemovedAttach = [];
    this._lstMultipleFiales = [];
    this.maxDate = null;
    this.selected = null;
    this.Title_Name = null;
    this.ngEmployeeDropdown = null;
    this.Description_Type = null;
    this.SelectDms = null;
    this.MasterCode = null;
    this.projectsSelected = [];
    this.Subtask = null;
    this.Startts = null;
    this.Endtms = null;
    this.SelectStartdate = null;
    this.Selectenddate = null;
    this.selectDay = null;
    this.St_date = "";
    this.Ed_date = null;
    this._subname = false;
    this.draftid = 0;
    // this.Recurr_arr = [];
    this._status = null;
    this.Portfolio = null;
    this.Location_Type = null;
    this.Allocated_subtask = null;
    this.Projectstartdate = "";
    this.projectEnddate = null;
    this.Status_project = null;
    this.AllocatedHours = null;
    this.daysSelected = [];
    this.selectdaytime = [];
    this.daysSelectedII = [];
    this.singleselectarry = [];
    this.Avaliabletime = [];
    this.allAgendas = [];
    this.agendasAdded = 0;
    this.TImetable();
    this.selectedrecuvalue = "0";
    // this.Doubleclick(this.event);
    // this.calendar.updateTodaysDate();
    this.dayArr.map((element) => {
      return element.checked = false;;
    });
    this.AllDatesSDandED = [];
    var jsonData = {};
    var columnName = "Date";
    jsonData[columnName] = moment().format("YYYY-MM-DD").toString();
    // var columnNames = "StartTime";
    // jsonData[columnNames] = this.Startts;
    // var columnNamee = "EndTime";
    // jsonData[columnNamee] = this.Endtms;
    var IsActive = "IsActive";
    jsonData[IsActive] = 1;
    var Day = "Day";
    jsonData[Day] = moment().format('dddd').substring(0, 3);
    var DayNum = "DayNum";
    jsonData[DayNum] = moment().format('DD').substring(0, 3);
    this.AllDatesSDandED.push(jsonData);
    this.GetTimeslabfordate();

    this.mtgOnDays=[];
    this.notProvided = false;
    this.subtashDrpLoading=false;
    this._onlinelink=false;
    this._meetingroom=false;
    this.Link_Details = null;
    this.subtashDrpLoading=false;
    this.loading=false;
    this.allAgendas = [];

  }





  // new code of portfolio meeting side bar end
}
