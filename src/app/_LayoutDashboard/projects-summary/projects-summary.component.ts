import { forEach } from '@angular-devkit/schematics';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, QueryList, ViewChildren,ViewChild } from '@angular/core';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { LinkService } from 'src/app/_Services/link.service';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NotificationService } from 'src/app/_Services/notification.service';
import * as _ from 'underscore';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import * as moment from 'moment';
// import { object, string } from '@amcharts/amcharts4/core';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { ParameterService } from "src/app/_Services/parameter.service";
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import tippy from 'node_modules/tippy.js';
import { MatAutocompleteTrigger,MatAutocomplete } from '@angular/material/autocomplete';
import * as ApexCharts from 'apexcharts';
import { DatePipe } from '@angular/common';

//import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
// import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
//import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects-summary',
  templateUrl: './projects-summary.component.html',
  styleUrls: ['./projects-summary.component.css']
})

export class ProjectsSummaryComponent implements OnInit {
  // maskEditorAppliedMessage: string;
  // @ViewChild('popOver') public popover: NgbPopover;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  edited: boolean = false;
  canceledit: boolean =false;
  searchResult: Boolean = false;
  _ObjCompletedProj: CompletedProjectsDTO;
  companyDDwn: boolean;
  @ViewChild('auto') autoComplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autoCompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  pipe: any;

selected_dates:any= null;
ranges: any = {
  'Today': [moment(), moment()],
  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
};
Dateselectionrange: string = 'Date selection range';

  constructor(public service: ProjectTypeService,
    public _LinkService: LinkService,
    private ShareParameter: ParameterService,
    private cdr: ChangeDetectorRef,
    // private loadingBar: LoadingBarService,
    private router: Router,
    public BsService: BsServiceService,
    public approvalservice: ApprovalsService,
    private notifyService: NotificationService,
    private route:ActivatedRoute,
    public datepipe: DatePipe,
    ) {
    this.ObjUserDetails = new UserDetailsDTO();
    this._objDropdownDTO = new DropdownDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    // this.selected = {
    //   startDate: moment().startOf('day'),
    //   endDate: moment().endOf('day')
    // };
  }
  userFound:boolean | undefined
  _subtaskDiv: boolean;
  keyword = 'Subject';
  countries: any;
  A2Z: boolean;
  Z2A: boolean;
  _raciDetails: boolean = true;
  approvalObj = new ApprovalDTO();


  ngOnInit() {

    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.A2Z = true;
    this.Z2A = false;
    this._raciDetails = true;
    this._subtaskDiv = true;
    this.Dateoftoday = this.getCurrentDate();
    this.router.navigate(["/backend/ProjectsSummary/"]);
    this.BsService.ProjectCreatedEvent.subscribe(()=>{
      this.GetProjectsByUserName(this.type1);
    });

   let filterprjsby:any=sessionStorage.getItem('filterprjsby');
   if(filterprjsby){   // show only standard type projects which are in delay.
        filterprjsby=JSON.parse(filterprjsby);
        this.emplyToselect=filterprjsby.EmpNo?[filterprjsby.EmpNo]:[];
        this.projtypeToselect=filterprjsby.ProjectType?[filterprjsby.ProjectType]:[];
        this.enterStatus=filterprjsby.Status?[filterprjsby.Status]:[];
        this.comToselect=filterprjsby.Company?[filterprjsby.Company]:[];

        this.EmpCountInFilter=filterprjsby.EmpNo?[{ Emp_No: filterprjsby.EmpNo }]:[];
        this.TypeContInFilter=filterprjsby.ProjectType?[{ Block_No: filterprjsby.ProjectType }]:[];
        this.StatusCountFilter=filterprjsby.Status?[{ Name: filterprjsby.Status }]:[];
        this.CompanyCountFilter=filterprjsby.Company?[{Company_No:filterprjsby.Company}]:[];

        this.Type=this.type1;
        this.userFound=true;
        sessionStorage.removeItem('filterprjsby');

        this.getNewFilterResult();
        this.applyFilters();
   }
   else{  //  show all projects without any filter.
    this.GetProjectsByUserName(this.type1);
   }



    // this.getDropdownsDataFromDB();

// JQUERY
    $(document).ready(function() {
      // Action next
      $('.btn-next').on('click', function() {
        // Get value from data-to in button next
        const n = $(this).attr('data-to');
        // Action trigger click for tag a with id in value n
        $(n).trigger('click');
      });
      // Action back
      $('.btn-prev').on('click', function() {
        // Get value from data-to in button prev
        const n = $(this).attr('data-to');
        // Action trigger click for tag a with id in value n
        $(n).trigger('click');
      });
    });
    $(document).ready(function(){
      $('.card').click(function(){
        $('.card').removeClass("active");
        $(this).addClass("active");
    });

    });


  //  alert(123)
    // this.GetApplicationDetails();
   // this.GetProjectsByUserName(this.type1);
    //this.portfolioName = localStorage.getItem('_PortfolioName');

   // dropdowns data
    // this.getDropdownsDataFromDB1();
    // this.changingdaysinweek(this.index)

  }



  Memos_List: any;
  _ActualMemoslist: any;

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
        this._totalMemos = this._ActualMemoslist.length;
        // console.log("Memos List", JSON.parse(data['JsonData']));
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
  _JsonString: string;
  Selected_Projectcode: string;

  _onRowClick(projectCode, ProjName) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    // console.log("projt Code------->",projectCode);
    this._displayProjName = ProjName;
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
          // console.log("No Memos linked For This Project...")
        }
      });
    document.getElementById("LinkSideBar").style.width = "360px";
  }

  closeLinkSideBar() {
    document.getElementById("LinkSideBar").style.width = "0";
  }

  //Get Application Details
  _ApplicationUrl: string;
  _ApplicationName: string;
  _ApplicationId: number;
  _AppIcon

  GetApplicationDetails() {
    let AppData: any;
    this._LinkService.GetApplicationDetails().
      subscribe((data) => {
        AppData = JSON.parse(data[0]['ApplicationDetails_Json']);
        // console.log(AppData);
        this._ApplicationId = AppData[0]['Application_Id'];
        this._ApplicationName = AppData[0]['Application_Name'];
        this._ApplicationUrl = AppData[0]['Api_Url'];
        this._AppIcon = AppData[0]['Icon'];
        sessionStorage.setItem("_AppUrl", this._ApplicationUrl);
        //console.log(this._ApplicationUrl);
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
    //console.log("Deselect Memos--->", this._SelectedMemos)
  }

  SearchMemo: string;
  // search(value: string) {
  //   let filter = value.toLowerCase();
  //   return this.Memos_List.filter(option => option.toLowerCase().startsWith(filter));
  // }
  // onKey(value) {
  //   this.Memos_List = this.search(value);
  //   }

  deleteMemos(memoId, pcode) {
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
    this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
      subscribe((data) => {
        // this._OpenMemosInfo(pcode,this.pName);
        //this.GetProjectsByUserName();
        let Returndata: any = data['Message'];
        this.UpdateMemos(pcode);
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

  memoId: any;

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
          this.UpdateMemos(this.pCode)
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
  }

  onFocused(e) {
    // do something when input is focused
  }

  btn_CreatePortfolio: boolean;
  selectedItemsList: any;
  btnGetRecords: boolean;
  EmpCountInFilter = [];
  TypeContInFilter = [];
  StatusCountFilter = [];
  CompanyCountFilter = [];
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
  _filtersMessage2: string;
  _filtersMessage: string;
  emptyspace:boolean = true;
  _ProjectDataList: any;
  ActualDataList: any;
  un_FilteredProjects: any = [];
  CurrentPageNo: number = 1;
  public _CurrentpageRecords: number;
  _StatusCountDB: any;
  //Properties
  ObjUserDetails: UserDetailsDTO;
  _objDropdownDTO: DropdownDTO;
  Obj_Portfolio_DTO: PortfolioDTO;
  portfolioId: number;
  count_LinkedProjects: number;
  Current_user_ID: string;
  Type:string;
  type1:string = "RACIS Projects";
  type2:string = "ALL Projects";
  isChecked: boolean =false;
  cancelcheck:any;
  cancelcount:any;

  onCheckboxClick(type) {
    this.edited=false;
    // Update the isChecked property whenever the checkbox is clicked
    this.isChecked = !this.isChecked;
    if(this.isChecked==true){
      this.edited=true;
    }
    else{
      this.edited=false;
    }
    this.GetProjectsByUserName(type);
    // this.getDropdownsDataFromDB();
    // this.applyFilters();
    // alert(this.isChecked);
  }

    GetProjectsByUserName(type) {
    this.Type=type;
    this.BsService.setProjectSummaryType(type);

    if(this.Type=='ALL Projects'){
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    if(this.isChecked==true){
      this.ObjUserDetails.ActiveStatus = "Inactive";
    }
    else{
      this.ObjUserDetails.ActiveStatus = "Active";
    }

    this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = data;
      this.ActualDataList = data;
      this.cancelcheck=this.ActualDataList[0]['cancel'];
      this.cancelcount=this.ActualDataList[0]['cancelcount'];

      if (this._ProjectDataList.length > 0) {
      }
      this.un_FilteredProjects = this.ActualDataList;
      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
      }
      if (this._ProjectDataList.length == 0) {
        this._filtersMessage = "No more projects matched your search";
        this._filtersMessage2 = " Clear the filters & try again";
        this.emptyspace=false;
      }
      else {
        this._filtersMessage = "";
        this._filtersMessage2 = "";
        this.emptyspace=true;
      }
      this.getDropdownsDataFromDB();
    });
    }
    else if(this.Type=='RACIS Projects'){
      this.ObjUserDetails.PageNumber = this.CurrentPageNo;
      this.ObjUserDetails.PageSize = 30;
      if(this.isChecked==true){
        this.ObjUserDetails.ActiveStatus = "Inactive";
      }
      else{
        this.ObjUserDetails.ActiveStatus = "Active";
      }

      this.service.GetProjectsByOwner_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
        this._ProjectDataList = data;

         console.log("Summary Data---->",this._ProjectDataList);



        this.userFound = true
        this.ActualDataList = data;
        this.cancelcheck=this.ActualDataList[0]['cancel'];
        this.cancelcount=this.ActualDataList[0]['cancelcount'];

        if (this._ProjectDataList.length > 0) {
        }
        this.un_FilteredProjects = this.ActualDataList;
        if (this._ProjectDataList) {
          this._CurrentpageRecords = this._ProjectDataList.length;

        }
        if (this._ProjectDataList.length == 0) {
          this._filtersMessage = "No more projects matched your search";
          this._filtersMessage2 = " Clear the filters & try again";
          this.emptyspace=false;
        }
        else {
          this._filtersMessage = "";
          this._filtersMessage2 = "";
          this.emptyspace=true;
        }
      this.getDropdownsDataFromDB();


      // this.changeDaysInWeek()

      });
    }


  }


  // getFormattedDelay(delayDays: any): string {
  //   let delayText = '';
  //   if (delayDays >= 365) {
  //     const years = Math.floor(delayDays / 365); delayText = years === 1 ? '1 year' : `${years} years`; }
  //     else if (delayDays >= 30) { const months = Math.floor(delayDays / 30); delayText = months === 1 ? '1 month' : `${months} months`; }
  //     else if (delayDays >= 7) { const weeks = Math.floor(delayDays / 7); delayText = weeks === 1 ? '1 week' : `${weeks} weeks`; }
  //     else { delayText = `${delayDays} days`; } return `${delayText} Delay`;
  //    }
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

    return `${delayText} delay`;
  }



      getStatusNumber(status: string): number {
        const match = status.match(/\d+/); // Find digits in the string
        return match ? parseInt(match[0], 10) : null; // Convert to number, or return null if no number found
      }




      getDelayText(action: any): string {

        if (!action || action.Delaydays == null) return '';

        let delayText = '';

        if (action.Delaydays >= 365) {
          const years = Math.floor(action.Delaydays / 365);
          delayText = years === 1 ? '01 year' : years < 10 ? `0${years} years` : `${years} years`;
        } else if (action.Delaydays >= 30) {
          const months = Math.floor(action.Delaydays / 30);
          delayText = months === 1 ? '01 month' : months < 10 ? `0${months} months` : `${months} months`;
        } else if (action.Delaydays >= 7) {
          const weeks = Math.floor(action.Delaydays / 7);
          delayText = weeks === 1 ? '01 week' : weeks < 10 ? `0${weeks} weeks` : `${weeks} weeks`;
        } else {
          delayText = action.Delaydays < 10 ? `0${action.Delaydays} day(s)` : `${action.Delaydays} day(s)`;
        }

        return delayText + ' Delay';
      }


// index:any
dates:any
  LastPage:number;
  lastPagerecords:number;
  duplicateofCompany:any[]=[]



  getDropdownsDataFromDB() {
    if(this.Type=='ALL Projects'){
    this._objDropdownDTO.EmpNo = this.Current_user_ID;
    this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
    this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
    this._objDropdownDTO.SelectedCompany = this.selectedCompany_String;
    this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
    this._objDropdownDTO.Selected_SearchText = this.searchText;


    if(this.isChecked==true){
      this._objDropdownDTO.ActiveStatus = "Inactive";
    }
    else{
      this._objDropdownDTO.ActiveStatus = "Active";
    }
    // this._objDropdownDTO.PortfolioId = null;
    this.service.GetDropDownsData_ForSummary(this._objDropdownDTO)
      .subscribe((data) => {
        // console.log("company data",data)

        if (this.selectedItem_Emp.length == 0) {
          this.EmpCountInFilter = JSON.parse(data[0]['Emp_Json']);

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
        //Company

        if (this.selectedItem_Company.length == 0) {

          this.CompanyCountFilter =  this.CompanyCountFilter.length==0?JSON.parse(data[0]['CompanyType_Json']):this.CompanyCountFilter;
          console.log(this.CompanyCountFilter,'CompanyCountFilterCompanyCountFilterCompanyCountFilter');
        }
        else {
          this.CompanyCountFilter = this.selectedItem_Company[0];
        }
        //Status
        if (this.selectedItem_Status.length == 0) {
          this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);

        }
        else {
          this.StatusCountFilter = this.selectedItem_Status[0];
        }
        this._totalProjectsCount = JSON.parse(data[0]['TotalProjectsCount_Json']);
        this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
        this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];

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
        //  console.log(this._totalProjectsCount, this._CurrentpageRecords,this.LastPage,this.lastPagerecords,"drop" );
      });
    }
    else if(this.Type=='RACIS Projects'){

      this._objDropdownDTO.EmpNo = this.Current_user_ID;
      this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
      this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
      this._objDropdownDTO.SelectedCompany = this.selectedCompany_String;
      this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
      this._objDropdownDTO.Selected_SearchText = this.searchText;

      if(this.isChecked==true){
        this._objDropdownDTO.ActiveStatus = "Inactive";
      }
      else{
        this._objDropdownDTO.ActiveStatus = "Active";
      }
      // this._objDropdownDTO.PortfolioId = null;
      this.service.GetDropDownsOwnerData_ForSummary(this._objDropdownDTO)
        .subscribe((data) => {
          //Emp
          // console.log("company data",data)

          if (this.selectedItem_Emp.length == 0) {
            this.EmpCountInFilter = JSON.parse(data[0]['Emp_Json']);
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
          //Company
          if (this.selectedItem_Company.length == 0) {
            this.CompanyCountFilter = this.CompanyCountFilter.length===0?JSON.parse(data[0]['CompanyType_Json']):this.CompanyCountFilter;
          }
          else {
            this.CompanyCountFilter = this.selectedItem_Company[0];
          }
          //Status
          if (this.selectedItem_Status.length == 0) {
            this.StatusCountFilter = JSON.parse(data[0]['Status_Json']);
          }
          else {
            this.StatusCountFilter = this.selectedItem_Status[0];
          }
          this._totalProjectsCount = JSON.parse(data[0]['TotalProjectsCount_Json']);
          this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
          this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];

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
          // console.log(this._totalProjectsCount, this._CurrentpageRecords,this.LastPage,this.lastPagerecords );
        });
    }
  }


//test
// all_companiesList:any=[];
// all_project_types:any=[];
// all_employees_list:any=[];
// all_status_types:any=[];

// getDropdownsDataFromDB1(){   debugger

//   this._objDropdownDTO.EmpNo = this.Current_user_ID;
//   this._objDropdownDTO.Selected_ProjectType = "";
//   this._objDropdownDTO.Selected_Status = "";
//   this._objDropdownDTO.SelectedCompany = "";
//   this._objDropdownDTO.SelectedEmp_No = "";
//   this._objDropdownDTO.Selected_SearchText = "";
//   this._objDropdownDTO.ActiveStatus = "Active";
//   this.service.GetDropDownsOwnerData_ForSummary(this._objDropdownDTO).subscribe((data:any)=>{ debugger

//     this.all_companiesList=JSON.parse(data[0]['CompanyType_Json']);
//     this.all_project_types=JSON.parse(data[0]['ProjectType_Json']);
//     this.all_employees_list=JSON.parse(data[0]['Emp_Json']);
//     this.all_status_types=JSON.parse(data[0]['Status_Json']);

//     this.CompanyCountFilter=[...this.all_companiesList];
//     this.EmpCountInFilter=[...this.all_employees_list];
//     this.TypeContInFilter=[... this.all_project_types];
//     this.StatusCountFilter=[...this.all_status_types];


//       this._totalProjectsCount = JSON.parse(data[0]['TotalProjectsCount_Json']);
//       this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
//       this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];

//       let _vl = this._totalProjectsCount / 30;
//       let _vl1 = _vl % 1;
//       if (_vl1 > 0.000) {
//         this.LastPage = Math.trunc(_vl) + 1;
//       }
//       else {
//         this.LastPage = Math.trunc(_vl);
//       }

//       if(this.CurrentPageNo == this.LastPage){
//         this.lastPagerecords=30;
//       }
//   });
// };








  getDropdownsDataFromDB1(){



      this._objDropdownDTO.EmpNo = this.Current_user_ID;
      this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
      this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
      this._objDropdownDTO.SelectedCompany = this.selectedCompany_String;
      this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
      this._objDropdownDTO.Selected_SearchText = this.searchText;
      this._objDropdownDTO.ActiveStatus = "Active";

      this.service[this.Type=='RACIS Projects'?'GetDropDownsOwnerData_ForSummary':this.Type=='ALL Projects'?'GetDropDownsData_ForSummary':''](this._objDropdownDTO).subscribe((data:any)=>{
          this.EmpCountInFilter=this.emplyToselect.length==0?JSON.parse(data[0]['Emp_Json']):this.EmpCountInFilter;
          this.TypeContInFilter=this.projtypeToselect.length==0?JSON.parse(data[0]['ProjectType_Json']):this.TypeContInFilter;
          this.CompanyCountFilter=this.comToselect.length==0?JSON.parse(data[0]['CompanyType_Json']):this.CompanyCountFilter;
          this.StatusCountFilter=this.enterStatus.length==0?JSON.parse(data[0]['Status_Json']):this.StatusCountFilter;


        console.log( JSON.parse(data[0]['Emp_Json']),'  this.EmpCountInFilter  this.EmpCountInFilter')
        console.log(JSON.parse(data[0]['ProjectType_Json']),' this.TypeContInFilter this.TypeContInFilter')
        console.log(JSON.parse(data[0]['CompanyType_Json']),' this.CompanyCountFilter this.CompanyCountFilter')
        console.log(JSON.parse(data[0]['Status_Json']),'this.StatusCountFilterthis.StatusCountFilterthis.StatusCountFilter')

          this._totalProjectsCount = JSON.parse(data[0]['TotalProjectsCount_Json']);
          this.count_LinkedProjects = this._totalProjectsCount[0]['TotalLinked'];
          this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];
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



      });

  };





















//test

  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];
  checkedItems_Cmp: any = [];
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  selectedCompany_String: string;
  selectedItem_Status = [];
  selectedItem_Company = [];

  isStatusChecked(item) {

    let arr = [];
    this.edited = true;
    this.canceledit = true;
    this.StatusCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Status: element.Name });
        return this.checkedItems_Status = arr;
      }
    });
    let arr2 = [];
    this.StatusCountFilter.filter((item) => {
      if (item.checked == true) {
        // this.applyFilters();
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
      this.canceledit = false;
    }
    else{
      this.edited=true;
      // this.canceledit = true;
    }
  }



  //   submit() {
  //     debugger
  //     // Filter the data based on the selected filters
  //     const coreFilter = this.TypeContInFilter.find(item => item.Name === 'Core Tasks' && item.checked);

  //       if (coreFilter) {
  //           // Filter the data based on the "Core" filter
  //           const filteredData = this.TypeContInFilter.filter(item => item.Type === 'Core');
  //           console.log(filteredData); // Output the filtered data
  // }


  selectedItem_Type = [];

  isTypeChecked(item) {

    let arr = [];
    this.edited = true;
    this.canceledit = true;
    console.log(this.TypeContInFilter,"type")
    this.TypeContInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Block_No: element.Block_No });
        return this.checkedItems_Type = arr;
      }
    });
    let arr2 = [];
    this.TypeContInFilter.filter((item) => {
      if (item.checked == true) {
        // this.applyFilters();
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
      this.canceledit = false;
    }
    else{
      this.edited=true;
    }
  }

  isCompanyChecked(item) {
    let arr = [];
    this.edited = true;
    this.canceledit = true;
    this.CompanyCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Company_No: element.Company_No });
        return this.checkedItems_Cmp = arr;
      }
    });
    let arr2 = [];
    this.CompanyCountFilter.filter((item) => {
      if (item.checked == true) {
        // this.applyFilters();
        console.log(arr2,'companyyyyyyyyyyyy')
        return arr2.push(item);

      }
    });
    this.selectedItem_Company.push(arr2);
    this.CompanyCountFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Company.length = 0;
        this.resetFilters();
        console.log(this.selectedItem_Company,'selectedItem_Company')
      }
    });
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
      this.canceledit = false;
    }
    else{
      this.edited=true;
    }
  }

  selectedItem_Emp = [];

  isEmpChecked(item) {
    let arr = [];
    this.edited = true;
    this.canceledit = true;
    this.EmpCountInFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Emp_No: element.Emp_No });
        return this.checkedItems_Emp = arr;
      }
    });
    let arr2 = [];
    this.EmpCountInFilter.filter((item) => {
      if (item.checked == true) {
        // this.applyFilters();
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0) {
      this.edited=false;
      this.canceledit = false;
    }
    else{
      this.edited=true;
    }
  }

  //Apply Filters
  SearchbyText() {
    if(this.searchText ==''){
      this.searchResult = false;

      this.CurrentPageNo = 1;
      this.applyFilters();
      this.edited = false
    }
    else{
      this.searchResult = true;
      this.CurrentPageNo = 1;
      this.applyFilters();
      this.edited = false
    }
  }

  applyFilters() {
debugger
    this.edited = true
    this.selectedEmp_String = this.checkedItems_Emp.map(select => {
      return select.Emp_No;
    }).join(',');
    this.selectedType_String = this.checkedItems_Type.map(select => {
      return select.Block_No;
    }).join(',');
    this.selectedStatus_String = this.checkedItems_Status.map(select => {
      return select.Name;
    }).join(',');
    this.selectedCompany_String = this.checkedItems_Cmp.map(select => {
      return select.Company_No;
    }).join(',');


    const date_1 = this.selected_dates?moment(this.selected_dates.startDate.$d).format('YYYY-MM-DD'):null;
    const date_2 = this.selected_dates?moment(this.selected_dates.endDate.$d).format('YYYY-MM-DD'):null;

    // const datesString = `${date_1}, ${date_2}`;

    if(this.Type=='ALL Projects'){
    this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
    this.ObjUserDetails.SelectedCompany = this.selectedCompany_String;
    this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
    this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.searchText;
    this.ObjUserDetails.PortfolioId = null;
    // this.ObjUserDetails.startdate = date_1;
    // this.ObjUserDetails.enddate = date_2;

    if(this.isChecked==true){
      this.ObjUserDetails.ActiveStatus = "Inactive";
    }
    else{
      this.ObjUserDetails.ActiveStatus = "Active";
    }
    //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
    this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails)
      .subscribe(data => {
        //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
        this._ProjectDataList = data;
        console.log(this._ProjectDataList,"this._ProjectDataListthis._ProjectDataListthis._ProjectDataList")
        this._CurrentpageRecords = this._ProjectDataList.length;
        if (this._ProjectDataList.length == 0) {
          this._filtersMessage = "No more projects matched your search";
          this._filtersMessage2 = " Clear the filters & try again";
          this.emptyspace=false;
        }
        else {
          this._filtersMessage = "";
          this._filtersMessage2 = "";
          this.emptyspace=true;
        }
      });

    //Filtering Checkbox de
    this.filterMegadropdownclose()
    this.getDropdownsDataFromDB();
    this.filterMegadropdownclose();
    }
    else if(this.Type=='RACIS Projects'){
      moment.locale('en');
      this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
      this.ObjUserDetails.SelectedCompany = this.selectedCompany_String;
      this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
      this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
      this.ObjUserDetails.PageNumber = this.CurrentPageNo;
      this.ObjUserDetails.PageSize = 30;
      this.ObjUserDetails.SearchText = this.searchText;
      this.ObjUserDetails.PortfolioId = null;
      this.ObjUserDetails.startdate = date_1;
      this.ObjUserDetails.enddate = date_2


      if(this.isChecked==true){
        this.ObjUserDetails.ActiveStatus = "Inactive";
      }
      else{
        this.ObjUserDetails.ActiveStatus = "Active";
      }

      //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
      this.service.GetProjectsByOwner_Service_ForSummary(this.ObjUserDetails)
        .subscribe(data => {
          //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
          this._ProjectDataList = data;
          this._CurrentpageRecords = this._ProjectDataList.length;
          console.log('this._ProjectDataList:tjhis,this',this._ProjectDataList);
    console.log('lastPagerecords:',this.lastPagerecords);
    console.log('CurrentPageNo:',this.CurrentPageNo);
    console.log('_CurrentpageRecords:',this._CurrentpageRecords);

          if (this._ProjectDataList.length == 0) {
            this._filtersMessage = "No more projects matched your search";
            this._filtersMessage2 = " Clear the filters & try again";
            this.emptyspace=false;
          }
          else {
            this._filtersMessage = "";
            this._filtersMessage2 = "";
            this.emptyspace=true;
          }
        });

     this.getDropdownsDataFromDB();
    this.filterMegadropdownclose();
    }

  }

  Team_Autho:any
  Emp_No:any
  Project_Code:any
  LoadDocument(Iscloud: boolean, FileName: string, url1: string, type: string, Submitby: string,Pcode:string,tauth:string,tresp:string) {
    this.Project_Code=Pcode;
    this.Team_Autho=tauth;
    this.Emp_No=tresp;
    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
    FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (Iscloud == false) {
      FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";
      if (this.Team_Autho == this.Emp_No) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl +  this.Emp_No + "/" + this.Project_Code + "/" + url1);

      }
      else if (this.Team_Autho !=  this.Emp_No) {
        FileUrl = (FileUrl + this.Emp_No + "/" + this.Project_Code + "/" + url1);
      }

      let name = "ArchiveView/" + this.Project_Code.trim();
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      FileName = FileName.replace(/#/g, "%23");
      FileName = FileName.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + FileName + "&" + "submitby=" + Submitby + "&"+  "type=" + type;

      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();














    }

    else if (Iscloud == true) {
      let name = "ArchiveView/" + this.Project_Code;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(url1);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      FileName = FileName.replace(/#/g, "%23");
      FileName = FileName.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + FileName + "&" + "submitby=" + Submitby + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }
  }

  resetFilters() {
    // this.getDropdownsDataFromDB()
    this.searchText = "";

    this.search_Type = [];
    this.CurrentPageNo = 1;
    this.edited=false;
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
    if (this.selectedItem_Company.length == 0) {
      this.selectedCompany_String = null;
      this.checkedItems_Cmp = [];
    }
    //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);

    this.applyFilters();
    // this.getNewFilterResult()
  }

  submit_Data(){
    this.txtSearch='';
  }
  Cancelled: any[] = [{ name: 'Cancelled' }];



  resetAll() {


  // const type: string='RACIS Projects'
  //   this.GetProjectsByUserName(type);
  // this.getDropdownsDataFromDB()
  this.edited=false
  this.selected_dates = null
    this.emplyToselect=[]
    this.comToselect=[]
    this.enterStatus = []
    this.projtypeToselect = []
    this.searchResult=false;
    this.txtSearch = '';
    this.searchText= '';
    // const date_1 = null
    // const date_2 = null
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0;
    this.selectedItem_Company.length = 0;
    this.isChecked=false;
    this.resetFilters();
  }

  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  pCode: string;
  pName: string;
  pDesc: string; pType: string; pStdt: Date; pEndDT: Date; pStat: string;
  pCost: number; pComp: string; pClient: string; Powner: string;
  PRespon: string; PAut: string; Pcoor: String; PInfo: String; pSupprt: string; pRType: string
  initials: string; duration: string; SubmissionType: string; SubmissionType1: string; StandardDuration: string;
  MoreDetailsList: any;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  standardDuration: any;
  days: any;
  _MainProjectStatus: string;
  showCreateProject: boolean = false;
  showProjectInfo: boolean = false;

  openInfo(pcode, pName) {
    this.showProjectInfo = true;
    this.showCreateProject = true;
    this.showCreateProject = false;
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode,"1"]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("sumdet").classList.add("position-fixed");
    // document.getElementsByClassName("kt_wrapper")[0].classList.add("position-fixed");

  }
  selectedIndex: number | null = null;

  info_active_btn(item) {
    item.isActive = !item.isActive;

      // If you want to allow only one item to be active at a time, uncomment the following lines:
    if (item.isActive) {
      this._ProjectDataList.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.isActive = false;
        }
      });
    }
  }

  OpenProject(){
    this.showCreateProject = true;
    this.showProjectInfo = false;
    this.router.navigate(["../backend/ProjectsSummary/createproject"]);
    document.getElementById("New_project_Add").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("sumdet").classList.add("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }

  closeInfo() {

      // Close/Create Project Component
      this.showCreateProject = false;
      // Close Project Info Component
      this.showProjectInfo = false;
    // $('.project-list_AC').removeClass('active');
    this._ProjectDataList.forEach(item => item.isActive = false);
    this.Clear_Feilds();
    // document.getElementById("Project_info_slider_bar").classList.remove("kt-quick-panel--on");
    document.getElementById("New_project_Add").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementById("acceptbar").classList.remove("kt-quick-panel--on");
    document.getElementById("rejectbar").classList.remove("kt-quick-panel--on");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["/backend/ProjectsSummary/"]);
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
  }



  // project info js -------------------------------------
  Open_project_info(){
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }



  //----------------------project info js end ------------
  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _MemosSubjectList: any;
  _displayProjName: string;
  _MemosNotFound: string = "";
  _DBMemosIDList: any;

  _OpenMemosInfo(_projectCode, _projectName) {
    if(_projectCode !=undefined && _projectName != undefined){
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
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
    //Displaying Right Side Bar...
    document.getElementById("MemosSideBar").style.width = "350px";
    document.getElementById("prtfloSideBar").style.width = "0";
  }else{
    document.getElementById("MemosSideBar").style.width = "0";
    document.getElementById("prtfloSideBar").style.width = "0";
    this.notifyService.showInfo("",'No Smail link in this project.')
  }
  }

  _CloseMemosidebar() {
    document.getElementById("MemosSideBar").style.width = "0";
    document.getElementById("prtfloSideBar").style.width = "0";
  }


  portfolio_List:any;
  _displayprtflioName:any;

  _OpenfortfolioInfo(index:number,Project_Name) {
   if(index!=undefined &&Project_Name!=undefined){
    this._displayprtflioName=Project_Name
    this.portfolio_List=JSON.parse(this._ProjectDataList[index]['availableports']);

     //Displaying Right Side Bar...
     document.getElementById("prtfloSideBar").style.width = "350px";
     document.getElementById("MemosSideBar").style.width = "0";
   }else{
        document.getElementById("prtfloSideBar").style.width = "0";
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




  Mode: string;
  // LoadingBar = this.loadingBar.useRef('http');

  BackBttn() {
    this._ProjectDataList = [];
    this.service.Mode = "";
    // this.LoadingBar.stop();
    this.router.navigate(['/MainDashboard']);
  }

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

  //_ProjectCode:string;

  openUrl(memo_Url) {
    const Url = memo_Url;
    //console.log("Url----------->", memo_Url);
    window.open(Url);
  }

  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }

  projCode: string;
  _DarAchievement: string;
  _DARProjectName: string;
  _DARList: any;
  OpenDARinfo(projCode) {
    this.projCode = projCode;
    this.service._GetDARAchievements(projCode)
      .subscribe((data) => {
        console.log(data,"dar");
        this._DARList = JSON.parse(data[0]['DAR_AchievementJson']);
        if (this._DARList.length) {
          this._DarAchievement = this._DARList[0]['WorkAchieved']== null ? "Not Found" : this._DARList[0]['WorkAchieved'];
        }
        else {
          this._DarAchievement = "Not Found";
        }
        //console.log(this._DARProjectName)
      });
    document.getElementById("DARSideBar").style.width = "350px";
  }

  _CloseDARSideBar() {
    document.getElementById("DARSideBar").style.width = "0";
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

 delaySrtOrder:'ASC'|'DESC'='ASC';
  newDelaySorting(){
    if(this._ProjectDataList[0].Status=='Delay'){
      this.delaySrtOrder=this.delaySrtOrder==='ASC'?'DESC':'ASC';
      this._ProjectDataList = this._ProjectDataList.sort((a, b) => {
       return this.delaySrtOrder==='DESC'?a.Delaydays - b.Delaydays:b.Delaydays-a.Delaydays;
      });
     // console.log(this._ProjectDataList,'_ProjectDataList')
    }
    console.log(this._ProjectDataList,'_ProjectDataLists')
  }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;

    var myWindow = window.open(myurl,"_");
    myWindow.focus();
  }

  newDetails(pcode) {

    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;

    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  AddDms() {
    this._onRowClick(this.pCode, this.pName);
  }

  search(event) {
    if(this.searchText ==""){
      this.searchResult = true;
      this.SearchbyText();
    }
    else{
      this.searchResult = true;
      this.SearchbyText();
    }

    //console.log("Searh Text---->",event)
  }

  requestDetails:any;
  requestDate: any;
  requestDeadline: any;
  requestType: any;
  approvalEmpId: any;
  requestComments: any;
  Projectcode:string;
  Status:string;

  getapprovalStats(project_code,status) {
    this.Projectcode=project_code;
    this.Status=status;
    this.approvalObj.Project_Code = project_code;

    this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
      this.requestDetails= data as [];
      // console.log(this.requestDetails, "req")
      if (this.requestDetails.length > 0) {
        this.requestType = (this.requestDetails[0]['Request_type']);
        this.requestDate = (this.requestDetails[0]['Request_date']);
        this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
        this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
        this.requestComments = (this.requestDetails[0]['Remarks']);
      }
      // console.log(this.approvalEmpId ,this.requestComments,this.requestDate,this.requestDeadline,this.requestType,"request status");
    });
  }


  comments:string;
  commentSelected:string;

  typeChange(){
    this.comments="";
    this.commentSelected="";
  }

  selectedType: string;
  _Message:string;

  Clear_Feilds() {
    this.selectedType = null;
    this.commentSelected = null;
  }


  limit =  71;





// new filter functionality start.
selectedCompanies = [];
selectedEmp = [];
selectedTypes=[];
selectedStatus=[];


onTypeSelected(selected:boolean,selectedItem:any){

      if(selected){
        this.selectedTypes.push(selectedItem);

      }
      else
       {
          const index:number=this.selectedTypes.findIndex(obj=>obj===selectedItem);
          if(index>-1)
          this.selectedTypes.splice(index,1);

       }
}

onStatusSelected(selected:boolean,selectedItem:any){
  if(selected){
    this.selectedStatus.push(selectedItem);

  }
  else
   {
      const index:number=this.selectedStatus.findIndex(obj=>obj===selectedItem);
      if(index>-1)
      this.selectedStatus.splice(index,1);

   }
}

onCompanySelected(selected:boolean,selectedItem:any){
  if(selected){
    this.selectedCompanies.push(selectedItem);

  }
  else
   {
      const index:number=this.selectedCompanies.findIndex(obj=>obj===selectedItem);
      if(index>-1)
      this.selectedCompanies.splice(index,1);

   }
}

onEmpSelected(selected:boolean,selectedItem:any){
  if(selected){
    this.selectedEmp.push(selectedItem);

  }
  else
   {
      const index:number=this.selectedEmp.findIndex(obj=>obj===selectedItem);
      if(index>-1)
      this.selectedEmp.splice(index,1);

   }
}


filterByResult:boolean=false

getNewFilterResult(){

this.edited = false

  this.checkedItems_Emp=this.EmpCountInFilter.filter(item=>this.emplyToselect.includes(item.Emp_No));
  this.checkedItems_Cmp=this.CompanyCountFilter.filter(item=>this.comToselect.includes(item.Company_No));
  this.checkedItems_Type=this.TypeContInFilter.filter(item=>this.projtypeToselect.includes(item.Block_No));
  this.checkedItems_Status=this.StatusCountFilter.filter(item=>this.enterStatus.includes(item.Name));

  if(this.emplyToselect.length>0 || this.comToselect.length>0  ||this.projtypeToselect.length>0  ||this.enterStatus.length>0 ){
    this.filterByResult =true;
  }else{
    this.filterByResult =false;
  }

  // this.edited=true
  console.log(this.checkedItems_Cmp,'ddddddddddddddddddddddddddddddddddddddddddddd')
console.log(this.checkedItems_Emp,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  this.selectedEmp_String = this.checkedItems_Emp.map(select => {
    return select.Emp_No;
  }).join(',');
  this.selectedType_String = this.checkedItems_Type.map(select => {
    return select.Block_No;
  }).join(',');
  this.selectedStatus_String = this.checkedItems_Status.map(select => {
    return select.Name;
  }).join(',');
  this.selectedCompany_String = this.checkedItems_Cmp.map(select => {
    return select.Company_No;
  }).join(',');








  // console.log(this.checkedItems_Emp,'employee')
  // console.log(this.checkedItems_Cmp,'company')
  // console.log(this.checkedItems_Type,'type')
  // console.log(this.checkedItems_Status,'status')

  // console.log(this.EmpCountInFilter)
  // console.log(this.CompanyCountFilter)
  // console.log(this.TypeContInFilter)
  // console.log(this.StatusCountFilter)


  // this.applyFilters();
  this.getDropdownsDataFromDB1();
}






// updateSelected(item){
//   if(item.checked){
//     this.SelectedItems.push(item)
//     // const Selectedcomma = this.SelectedItems.join(',')
//  const   Selectedcomma =  this.SelectedItems.map(SelectedItem => SelectedItem.Name).join(', ')
//  console.log(Selectedcomma)
//   }else{
//     this.SelectedItems=this.SelectedItems.filter(SelectedItem => SelectedItem !== item)

//   }
// }
// removeSelected(item){
//   item.checked=false
//   this.SelectedItems=this.SelectedItems.filter(SelectedItem => SelectedItem !== item)
//   const Selectedcomma = this.SelectedItems.map(selectedItem => selectedItem.Name).join(', ')
//   console.log(Selectedcomma)
// }



// updateStatus(item) {
//   if (item.checked) {
//     this.selectedStatus.push(item)
//     const statusComma = this.selectedStatus.map(selectedStatu => selectedStatu.Name).join(', ')
//     console.log(statusComma)
//   } else {
//     this.selectedStatus = this.selectedStatus.filter(selectedStatu => selectedStatu !== item)

//   }
// }
// removeStau(item) {
//   item.checked = false
//   this.selectedStatus = this.selectedStatus.filter(selectedStatu => selectedStatu !== item)
//   const statusComma = this.selectedStatus.map(selectedStatu => selectedStatu.Name).join(', ')
//   console.log(statusComma)

// }


// updateCompany(item) {
//   if (item.checked) {
//     this.companyArr.push(item)
//     const comapayComma = this.companyArr.map(companyarr => companyarr.Name).join(', ')
//     console.log(comapayComma)
//   } else {
//     this.companyArr = this.companyArr.filter(companyarr => companyarr !== item)
//   }
// }

// removeCompany(item) {
//   item.checked = false
//   this.companyArr = this.companyArr.filter(companyarr => companyarr !== item)
//   const companyComma = this.companyArr.map(companyarr => companyarr.Name).join(', ')
//   console.log(companyComma)
// }



// updateEmployes(item) {
//   if (item.checked) {
//     this.employeeArr.push(item)
//     const employeeComma = this.employeeArr.map(employeearr => employeearr.Name).join(', ')
//     console.log(employeeComma)
//   } else {

//     this.employeeArr = this.employeeArr.filter(employeearr => employeearr !== item)

//   }

// }

// removeEmployee(item) {
//   item.checked = false
//   this.employeeArr = this.employeeArr.filter(employeearr => employeearr !== item)
//   const employeeComma = this.employeeArr.map(employeearr => employeearr.Name).join(', ')
//   console.log(employeeComma)
// }

// new filter functionality end.

@ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;

isEmployeeDrpDwnOpen:boolean=false
iscompanyDrpDwnOpen:boolean=false
isprojectDrpDwnOpen:boolean=false;
isstatusDrpDwnOpen:boolean=false



 openAutocompleteDrpDwn(Acomp:string){

    //  this.autocompletes.forEach((item) =>
    //   {
    //     if (item.autocomplete.ariaLabel !== Acomp)
    //       {
    //         requestAnimationFrame(() => item.closePanel());

    //       }
    //     })
      const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
      requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());

}

 closeAutocompleteDrpDwn(Acomp:string){

  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());

}


// openDropdown(dropdown: string): void {
//   debugger
//   if (dropdown === 'companyDDwn') {
//     this.iscompanyDrpDwnOpen = true;
//     this.isEmployeeDrpDwnOpen = false; // Close employee dropdown
//   } else if (dropdown === 'employeeDDwn') {
//     this.isEmployeeDrpDwnOpen = true;
//     this.iscompanyDrpDwnOpen = false; // Close company dropdown
//   }
// }


// new
comToselect:any=[];
oncompanySelected(e:any){

  const companyChoosed=this.CompanyCountFilter.find((p:any)=>p.Company_No===e.option.value);

  if(companyChoosed){
       const index=this.comToselect.indexOf(companyChoosed.Company_No);
       if(index===-1){
          // if not present then add it
          this.comToselect.push(companyChoosed.Company_No);


       }
       else{ //  if item choosed is already selected then remove it.
        this.comToselect.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('companyDDwn');

  // this.applyNewFilter();
}
removeSelectedcomp(item){
  const index=this.comToselect.indexOf(item);
  if(index!==-1){
    this.comToselect.splice(index,1);
  }
}

getObjOfs(arr, id, idName) {
  const obj = arr.find(item => item[idName] == id);
  return obj;
}

// oncompanySelected(e:any){
//   const companyChoosed=this.CompanyCountFilter.find((p:any)=>p.Company_No===e.option.value);
//   if(companyChoosed){
//        const index=this.comToselect.indexOf(companyChoosed.Company_No);
//        if(index===-1){
//           // if not present then add it
//           this.comToselect.push(companyChoosed.Company_No);
//        }
//        else
//       //  if(this.comToselect[index]!=this.projectInfo.Project_Code)
//         { //  if item choosed is already selected then remove it. but it should not be the default project.
//         this.comToselect.splice(index,1);
//        }
//   }
//   this.openAutocompleteDrpDwn('companyDDwn');
// }
// removeSelectedcomp(item){
//   // if(this.projectInfo.Project_Code!=item){   // cannot remove the default selected project.
//     const index=this.comToselect.indexOf(item);
//     if(index!==-1)
//       this.comToselect.splice(index,1);
//   // }
// }

// getObjOfs(Company_No:string){
//   if(this.CompanyCountFilter){
//    const P=this.CompanyCountFilter.find(pr=>pr.Company_No==Company_No);
//    return P?P.Name:'';
//   }
//    return [];
// }









emplyToselect:any=[];
onEmployeeSelected(e:any){

  const employeeChoosed=this.EmpCountInFilter.find((p:any)=>p.Emp_No===e.option.value);

  if(employeeChoosed){
       const index=this.emplyToselect.indexOf(employeeChoosed.Emp_No);
       if(index===-1){
          // if not present then add it
          this.emplyToselect.push(employeeChoosed.Emp_No);
       }
       else{ //  if item choosed is already selected then remove it.
        this.emplyToselect.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('employeeDDwn');
  console.log('emplyToselect:',this.emplyToselect);
}
removeSelectedemployee(item){
  const index=this.emplyToselect.indexOf(item);
  if(index!==-1){
    this.emplyToselect.splice(index,1);
  }
}

getObjOf(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}



projtypeToselect:any=[];
onprojtypeSelected(e:any){

  const projtyChoosed=this.TypeContInFilter.find((p:any)=>p.Block_No===e.option.value);

  if(projtyChoosed){
       const index=this.projtypeToselect.indexOf(projtyChoosed.Block_No);
       if(index===-1){
          // if not present then add it
          this.projtypeToselect.push(projtyChoosed.Block_No);
       }
       else{ //  if item choosed is already selected then remove it.
        this.projtypeToselect.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('proDDwn');
}
removeSelectedproject(item){
  const index=this.projtypeToselect.indexOf(item);
  if(index!==-1){
    this.projtypeToselect.splice(index,1);
  }
}

getObjOfpro(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}



enterStatus:any=[];
onstatusSelected(e:any){
  const statusChoosed=this.StatusCountFilter.find((p:any)=>p.Name===e.option.value);
  if(statusChoosed){
       const index=this.enterStatus.indexOf(statusChoosed.Name);
       if(index===-1){
          // if not present then add it
          this.enterStatus.push(statusChoosed.Name);
       }
       else{ //  if item choosed is already selected then remove it.
        this.enterStatus.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('statusDDwn');
}
removeSelectedstatus(item){
  const index=this.enterStatus.indexOf(item);
  if(index!==-1){
    this.enterStatus.splice(index,1);
  }
}

getObjOfstatus(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}

filterMegadropdown(){
  document.getElementById("mega_dropdown_menu").classList.add("drop-active");
}
filterMegadropdownclose(){
  document.getElementById("mega_dropdown_menu").classList.remove("drop-active");
}


sortCompany:any[]


 _ErrorMessage_User:any

this_ErrorMessage_User = "* Please Select User Name"




// Other methods and properties
datesUpdated(range: any) {
  if(range.startDate){
      const start_date=range.startDate;
      const end_date=range.endDate;
      this.selected_dates={
            ...range,
            startDate:start_date,
            endDate:end_date.$D?end_date:start_date
      };
  }
  else{
     this.selected_dates=null;
  }

}

isInvalidDate(date: moment.Moment) {
  // Example logic for invalid dates
  return date.weekday() === 0 || date.weekday() === 6; // Disable weekends
}

// closeOnOtherClick(id){
//   debugger
//   if(id == 'company'){
//     this.closeAutocompleteDrpDwn('employeeDDwn');
//     this.closeAutocompleteDrpDwn('proDDwn')
//     this.closeAutocompleteDrpDwn('statusDDwn');
//   }
//   else if (id == 'employee'){
//     this.closeAutocompleteDrpDwn('companyDDwn');
//     this.closeAutocompleteDrpDwn('proDDwn')
//     this.closeAutocompleteDrpDwn('statusDDwn');
//   }
//   else if (id == 'project'){
//     this.closeAutocompleteDrpDwn('companyDDwn');
//     this.closeAutocompleteDrpDwn('employeeDDwn');
//     this.closeAutocompleteDrpDwn('statusDDwn');
//   }
//  else{
//   this.closeAutocompleteDrpDwn('companyDDwn');
//   this.closeAutocompleteDrpDwn('employeeDDwn');
//   this.closeAutocompleteDrpDwn('proDDwn')
//  }
// }

closeOnOtherClick(id){

  const dropdowns= ['companyDDwn', 'employeeDDwn', 'proDDwn', 'statusDDwn'];
  dropdowns.forEach((dropdown)=>{
  if(dropdown !== `${id}DDwn` ){
    this.closeAutocompleteDrpDwn(dropdown)
  }
  })
}



 closeallTab(){
this.closeAutocompleteDrpDwn('companyDDwn');
this.closeAutocompleteDrpDwn('employeeDDwn');
this.closeAutocompleteDrpDwn('statusDDwn');
this.closeAutocompleteDrpDwn('proDDwn')

 }

 isaction = false;
 isracis = false;
 isstatus = true;
 islastupdate = true;
 isdeadline = true;
 isrespon = true;
 isprojtype = true
 isdeleted = true
 isrefer = true
 iscost = true
 isowner = false
 isclient = false
 isDepartment = false

   togglevisibilityforClass(className: string, event: any): void {

     // Mapping object for class names and their corresponding state variables
     const classToStateMap: { [key: string]: string } = {
       'action_class': 'isaction',
       'racisClass': 'isracis',
       'statusClass': 'isstatus',
       'clas_lasup': 'islastupdate',
       'class_deadline': 'isdeadline',
       'responclass': 'isrespon',
       'projtypeclass': 'isprojtype',
       'isdeleteds': 'isdeleted',
       'referClass':  'isrefer',
       'classCost' :'iscost',
       'owner_class' :'isowner',
       'client_class': 'isclient',
       'class_depart'  : 'isDepartment'
     };

     // Check if the className exists in the map and update the corresponding state variable
     if (classToStateMap[className] !== undefined) {
       this[classToStateMap[className]] = event.target.checked;
     }

   }



   formatTime(input: string): string {
    if(input){

   // Check if the input is already in the correct format
   if (/^\d{2} Hr : \d{2} Mins$/.test(input)) {
    return input; // If the format is correct, return it as-is
  }

  // Extract hours and minutes using regex for formatting if needed
  const matches = input.match(/(\d+)Hr:(\d+)Mins/);

  if (!matches) {
    return 'Invalid Format'; // Handle unexpected format
  }

  // Extract hours and minutes
  const hours = parseInt(matches[1], 10) || 0;
  const minutes = parseInt(matches[2], 10) || 0;

  // Format the string
  return `${hours.toString().padStart(2, '0')} Hr : ${minutes.toString().padStart(2, '0')} Mins`;

    }

    return '';

  }




  calculateDateDifference(date1: string, date2: string): number {
    // Parse the dates from strings into Date objects
    const date1Obj = new Date(date1.split('-').reverse().join('-'));
    const date2Obj = new Date(date2.split('-').reverse().join('-'));

    // Calculate the difference in milliseconds
    const diffTime = Math.abs(date1Obj.getTime() - date2Obj.getTime());

    // Convert milliseconds to days
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));

    return diffDays;
  }

  getFormattedforRejected(delayDays: any): string {
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

    return `${delayText.toLowerCase()} `;
  }

  Dateoftoday:any
  getCurrentDate()  {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  }


  getTooltipText() {
    return `Company name: ${this.CountDelay} <br> Designation: ${this.CountDelay}`;
  }

  Value='Select All'



  rejectpros() {
    this.approvalObj.Project_Code = null;
    this.approvalservice.GetGlobalRejectList(this.approvalObj).subscribe((data) => {
      this.reject_list = JSON.parse(data[0]['reject_list']);
    });
    document.getElementById("rejectbar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    this.approvingRequest = []
    this.allSelectedProjects.forEach((item)=>{
      if( item.PendingapproverEmpNo&&item.PendingapproverEmpNo.trim() == this.Current_user_ID){
        this.approvingRequest.push(item)
        console.log(this.approvingRequest,'this.approvingRequestthis.approvingRequest')
      }

    })
  }


  isAllPrjSelected: boolean = false

  selectUnselectPagePrjs(evt) {


    this.isAllPrjSelected = evt.checked
    if (this.isAllPrjSelected) {
      const selprjs = this.allSelectedProjects.map(x => x.Project_Code)
      const PageunselPrjs = this._ProjectDataList.filter(item => {
        return !selprjs.includes(item.Project_Code);
      })
      this.allSelectedProjects = [...PageunselPrjs, ...this.allSelectedProjects];
      this.value()
    }
    else {
      // unchecked
      const curPagePrjs = this._ProjectDataList.map(x => x.Project_Code);
      this.allSelectedProjects = this.allSelectedProjects.filter(item => {
        return !curPagePrjs.includes(item.Project_Code)
      });
     this.value()
    }
    this.isapprovlFound = this.allSelectedProjects.some((ob) => ob.PendingapproverEmpNo && ob.PendingapproverEmpNo.trim() == this.Current_user_ID)
  }


  selectUnSelectProject(e, item) {
debugger
    if (e.checked) {
      this.allSelectedProjects.push(item)
      const allselec = this._ProjectDataList.every(item => {
        return this.allSelectedProjects.map(p => p.Project_Code).includes(item.Project_Code)
      })
      this.isAllPrjSelected = allselec
      this.value()
console.log(this.allSelectedProjects,"this.allSelectedProjectsthis.allSelectedProjects")
    }
    else {   // when unchecked
      let index = this.allSelectedProjects.findIndex(obj => obj.Project_Code == item.Project_Code)
      if (index != -1)
        this.allSelectedProjects.splice(index, 1);
      this.isAllPrjSelected = false;
      this.value()

    }

    this.isapprovlFound=this.allSelectedProjects.some((ob)=>ob.PendingapproverEmpNo&&ob.PendingapproverEmpNo.trim() == this.Current_user_ID)

}


isProjectSelected(prjcode: any): boolean {
  return   this.allSelectedProjects.map(x => x.Project_Code).includes(prjcode);

}




  value(){
    if( this.isAllPrjSelected == true){
      this.Value = 'Unselect all'
    }
    else{
      this.Value = 'Select all'
    }

  }


  acceptfunction(){
    this.approvingRequest =[]
    this.allSelectedProjects.forEach((item)=>{
      if( item.PendingapproverEmpNo&&item.PendingapproverEmpNo.trim() == this.Current_user_ID){
        this.approvingRequest.push(item)
        console.log(this.approvingRequest,'this.approvingRequestthis.approvingRequest')
      }

    })
    this.acceptSelectedValues()
  }


  approverComments:string;
  notProvided:any;
  approvingRequest = []
  submitAprvlsWithCmts(){
debugger

    if(this.approverComments&&this.approverComments.trim()){
      this.notProvided=false;
      this.acceptSelectedValues(this.approverComments);
    }
    else{
       this.notProvided=true;
    }

  }

  // approvingRequest = []
acceptSelectedValues(_comments?:string) {
debugger

if( this.approvingRequest.length > 0 ){

  let withCmts=false;
  if(_comments&&_comments.trim()){
      this.approvingRequest.forEach(ob=>ob.sameRemarks=_comments);
      withCmts=true;
  }

  this.approvingRequest.forEach(ob => {
    ob.ReportType = ob.ReportType1;
    // ob.Duration = 0;
  });

  this.approvalservice.NewUpdateAcceptApprovalsService(this.approvingRequest).subscribe(data =>{
    console.log(data,"accept-data");
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
      this.notifyService.showSuccess("Project(s) approved successfully.",'Success');

      this.approvingRequest=[];
      this.allSelectedProjects=[];

      this.GetProjectsByUserName(this.type1);
      this.isapprovlFound = false
    if(withCmts){     // close the accept with comments sidebar if approving with comments is on.
        this.closeInfo();
    }


  });

}
else{
  this.notifyService.showInfo("Please select atleast one project to approve",'');
}

}


  onAcceptWithCmtsBtnClicked(){
    document.getElementById("acceptbar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
   this.approvingRequest = []
    this.allSelectedProjects.forEach((item)=>{
      if( item.PendingapproverEmpNo&&item.PendingapproverEmpNo.trim() == this.Current_user_ID){
        this.approvingRequest.push(item)
        console.log(this.approvingRequest,'this.approvingRequestthis.approvingRequest')
      }

    })

  }

  rejectType: any;
  noRejectType: boolean = false;
  rejectype: any;
  rejDesc: any;
  rejectcommentsList: any;
  // comments: string;
  exist_comment: any[] = [];
  rejectcomments:any;
  reject_list: any;
  allSelectedProjects = [];
  isapprovlFound:boolean = false



  resetReject(){
    this.noRejectType = false;
    this.comments = "";
    this.exist_comment =[];
    this.rejectType=null;
  }

  rejectApproval() {
    this.noRejectType = false;
    this.reject_list.forEach(element => {
      if (this.rejectType == element.TypeID) {
        this.rejDesc = element.Reject_Description;
      }
    });

    if(this.allSelectedProjects.length==1){
      this.approvalObj.Project_Code=(this.allSelectedProjects[0]['Project_Code1'])
      if ((this.allSelectedProjects[0]['Req_Type']) == 'New Project')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'New Project Reject Release')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'New Project Hold')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Project Complete')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Project Complete Reject Release')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Project Complete Hold')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Deadline Extend')
        this.approvalObj.Status = 'Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Deadline Extend Hold')
        this.approvalObj.Status = 'Rejected';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Standardtask Enactive')
        this.approvalObj.Status = 'Enactive-Reject';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Project Forward')
        this.approvalObj.Status = 'Forward Reject';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Project Hold')
        this.approvalObj.Status = 'Project Hold Reject';
      else if ((this.allSelectedProjects[0]['Req_Type']) == 'Revert Back')
        this.approvalObj.Status = 'Revert Reject';
        else if ((this.allSelectedProjects[0]['Req_Type']) == 'Task Complete')
        this.approvalObj.Status = 'Task-Reject';
      else{
        this.approvalObj.Status = 'Rejected';
      }
    }


    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.rejectType = this.rejectType;
      this.approvalservice.GetGlobalRejectComments(this.approvalObj).subscribe(data => {
      this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
      this.rejectcomments=this.rejectcommentsList.length;
    });

  }

  submitReject(){
    console.log(this.allSelectedProjects,"reject");
    this.allSelectedProjects.forEach(element => {
      element.RejectType=this.rejectType;
      element.Remarks=this.comments;
    });
    console.log(this.allSelectedProjects,"reject1");
    if( this.allSelectedProjects.length > 0){

      this.approvalservice.NewUpdateRejectApprovalsService(this.approvingRequest).subscribe(data =>{
        console.log(data,"reject-data");

        this.allSelectedProjects=[];
        this.approvingRequest = []
        this.GetProjectsByUserName(this.type1);
        this.isapprovlFound = false
      });
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
      this.allSelectedProjects=[];
      this.notifyService.showSuccess("Project(s) rejected successfully.",'Success');
    }
    else{
      this.notifyService.showInfo("Please select atleast one project to reject.",'');
    }
    this.resetReject();
    this.closeInfo();
  }

  clickonselect(com) {
    if (this.comments == null) {
      this.comments = com;
      this.exist_comment.push(com);
    }
    else {
      this.comments = this.comments + " " + com;
      this.exist_comment.push(com);
    }
  }

  clickondeselect(com, id) {
    this.exist_comment = this.exist_comment.filter((comment) => comment != com);
    this.comments = this.comments.replace(com, "");
    console.log(this.exist_comment, "deselect");
}

  clearAllCheckboxes(){

  const curPagePrjs = this._ProjectDataList.map(x => x.Project_Code);
  this.allSelectedProjects = this.allSelectedProjects.filter(item => {
    return !curPagePrjs.includes(item.Project_Code)
  });
  this.isAllPrjSelected=false;
  this.isapprovlFound = false
  this.value()
}

// Creating portfolio code start
hideDropdown: boolean;
activeClass_NewPortfolio: boolean;
_portfolioName: string;
alreadyExists: string;

special:boolean=false;
specialnote:string="special characters `~!@#$%^&*()-_=+,<.>/?;:'"+'"'+"[]{}| not allowed";

omit_number(event) { //         key = event.keyCode;  (Both can be used)
  if(( (event.charCode > 96 && event.charCode < 123) || (event.charCode > 64 && event.charCode < 91) || (event.charCode >= 48 && event.charCode <= 57) || event.charCode <= 32)){
    this.special=false;
    return true;
  }
  else{
    this.notifyService.showInfo('','Allowed characters: a-z, A-Z, 0-9');
    this.special=true;
    return false;
  }
}


createNewPortfolio(){

  if (this._portfolioName != "") {
    this.portfolioName = this._portfolioName.trim();
    localStorage.setItem("portfolioName", this._portfolioName);
    let portId: any = 0;
    localStorage.setItem('Pid', portId);
  }

  this.service.AlreadyExistsPortfolioService(this._portfolioName).
  subscribe(data => {
    if (data['result'] == 0) {
      this.notifyService.showError("Portfolio With this Name ", "Already Exists");
    }
    else {
      this.addPrjsToPortflio()
    }
  });
}



addPrjsToPortflio() {
debugger
  if(this.allSelectedProjects.length>0){

    const selectedPrjs=this.allSelectedProjects;
    let LengthOfSelectedItems = JSON.stringify(selectedPrjs.length);
    this.Obj_Portfolio_DTO.Created_By =this.Current_user_ID;
    this.Obj_Portfolio_DTO.Modified_By = this.Current_user_ID;
    this.Obj_Portfolio_DTO.Portfolio_ID = 0;
    this.Obj_Portfolio_DTO.Portfolio_Name = this._portfolioName;
    this.Obj_Portfolio_DTO.SelectedProjects = this.allSelectedProjects
    // .map((item)=>({id:item.Project_ID}));

    this.service.createPortfolioOfProjects(this.Obj_Portfolio_DTO)
      .subscribe(data => {

        const _prtfId = data['Portfolio_ID'];
        if(_prtfId !==''){
          this.notifyService.showSuccess("" + ' ' + 'Added' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');

          let Mode = _prtfId
          var url = document.baseURI + "portfolioprojects";
          var myurl = `${url}/${Mode}`;
          var myWindow = window.open(myurl);
          myWindow.focus();
          this.allSelectedProjects=[];
          this.isAllPrjSelected = false
          this.value()
        }
    });

}
else{
  this.notifyService.showInfo("Please select atleast one project to add.","");
}
}





resetInputText() {
  this._portfolioName = '';
  this.alreadyExists = '';
  this.activeClass_NewPortfolio = false;
}

DropdownOpen() {
  this.activeClass_NewPortfolio = true;
}



// test new
// npm i apexcharts@3.52.0    works only on this version.
all_status={
  'Completed':'#388E3C',
  'InProcess':'#64B5F6',
  'Completion Under Approval':'#81C784',
  'Audit Approval':'#A5D6A7',
  'Forward Under Approval':'#64B5F6',
  'Under Approval': '#9C27B0',
  'Delay':'#D32F2F',
  'Project Hold':'#A1887F',
  'New Project Rejected':'#BA68C8',
  'Deadline Extend Under Approval':'#F9A825',
  'Cancellation Under Approval':'#EF5350',
  'Cancelled':'#EE4137',
  'ToDo Achieved':'#62B134',
  'ToDo Completed':'#62B134',
  'other':'#d0d0d0'
};
prj_statuses:any=[];
isGanttchartVisible:boolean=false;


loadGanttChart(){
  console.log("current projects on the page:",this._ProjectDataList);
  let _ProjectsListBy_Pid1=this._ProjectDataList.filter(prj=>['001','002','011'].includes(prj.Project_Block));  // showing only core,secondary and todo type projects.
  this.isGanttchartVisible=_ProjectsListBy_Pid1.length>0;
  this.prj_statuses=_ProjectsListBy_Pid1.map(item=>{
       let result=item.Status=='Completion Under Approval'?(item.AuditStatus=='Audit Pending'?'Audit Approval':'Completion Under Approval'):item.Status;
       return result;
  });
  this.prj_statuses=Array.from(new Set(this.prj_statuses));
  const todays_date=new Date().getTime();

  const _series=_ProjectsListBy_Pid1.map((prj,_index)=>{ 
      let p_status=prj.Status=='Completion Under Approval'?(prj.AuditStatus=='Audit Pending'?'Audit Approval':'Completion Under Approval'):prj.Status;
      const color=this.all_status[p_status]||this.all_status['other'];
      let data_ar=[];
      const prj_startd=new Date(prj.DPG);
      const prj_endd=new Date(prj.DeadLine);
      const curdate=new Date();

    if(prj_startd<curdate&&prj_endd>curdate){


       if(prj.Status=='InProcess')
       {
            data_ar=[
              {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date(prj.DPG).getTime(),new Date().getTime()],
                fillColor:color,
                index:_index
               },
               {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date().getTime(),new Date(prj.DeadLine).getTime()],
                fillColor:'#bebebe42',
                index:_index
               }
            ];
       }
       else if(prj.Status=='Delay')
       {
            data_ar=[
              {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date(prj.DPG).getTime(),new Date(prj.maxDeadline).getTime()],
                fillColor:this.all_status['InProcess'],
                index:_index
              },
              {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date(prj.maxDeadline).getTime(),new Date().getTime()],
                fillColor:this.all_status['Delay'],
                index:_index
              },
              {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date().getTime(),new Date(prj.DeadLine).getTime()],
                fillColor:'#bebebe42',
                index:_index
              }
            ];
       }
       else
       {
          data_ar=[{
            x:`${prj.Project_Name} (${prj.Project_Code})`,
            y:[new Date(prj.DPG).getTime(),new Date(prj.DeadLine).getTime()],
            fillColor:color,
            index:_index
           }];
       }


    }
    else{
          const colorvalue=prj_startd>=curdate&&prj.Status=='InProcess'?'#dcdcdc':color;

           data_ar=prj.Status=='Delay'?
            [{
              x:`${prj.Project_Name} (${prj.Project_Code})`,
              y:[new Date(prj.DPG).getTime(),new Date(prj.maxDeadline).getTime()],
              fillColor:this.all_status['InProcess'],
              index:_index
              },
              {
                x:`${prj.Project_Name} (${prj.Project_Code})`,
                y:[new Date(prj.maxDeadline).getTime(),new Date().getTime()],
                fillColor:colorvalue,
                index:_index
            }]:
            [{
              x:`${prj.Project_Name} (${prj.Project_Code})`,
              y:[new Date(prj.DPG).getTime(),new Date(prj.DeadLine).getTime()],
              fillColor:colorvalue,
              index:_index
            }];


    }

// when project start date and end date are same.
      if(data_ar.length==1){
        if(data_ar[0].y[0]==data_ar[0].y[1]){
                  data_ar[0].y[1]=data_ar[0].y[1]+86400000;
        }
      }
// when project start date and end date are same.

      const obj={
          name:prj.Status,
          data:data_ar
      };
      return obj;
  });

  console.log('series here:',_series);



const rowHeight=55;   // old 45
let chartHeight=rowHeight*_ProjectsListBy_Pid1.length+125;
let max_Xvalue=new Date();
max_Xvalue.setMonth(max_Xvalue.getMonth()+2);

var options = {
  series: _series,
  chart: {
    height: chartHeight+'px',
    type: 'rangeBar',
    events: {
      updated: ()=>{

        const chartContainer = document.querySelector("#actnsfull-graph");
        const xAxisLabels:any = chartContainer.querySelector('.apexcharts-xaxis');
        let textElements = xAxisLabels.querySelectorAll('text');
        const hrline:any=document.querySelector('#actnsfull-graph .apexcharts-canvas svg.apexcharts-svg g.apexcharts-inner.apexcharts-graphical g.apexcharts-grid>line');
        const linewth=hrline.getAttribute('x2');
        const dateGcHl:any = document.querySelector('.actns-gantt-dates .dates-label');
        dateGcHl.style.width=linewth+'px';
        const dateGcHv:any=dateGcHl.querySelector('#this-is-head');
        dateGcHv.innerHTML='';
        textElements.forEach(te => {
          const clonedTe = te.cloneNode(true);
          clonedTe.setAttribute('y', '65%');
          clonedTe.setAttribute('fill', '#000');
          dateGcHv.appendChild(clonedTe);
        });

        const gcharttable:any=document.querySelector('#actnsfull-graph .apexcharts-svg .apexcharts-inner.apexcharts-graphical');
        const trsnfvalue=gcharttable.getAttribute('transform');
        console.log('valuasde:is :',trsnfvalue.split(',')[0]+',40)');
        gcharttable.setAttribute('transform',trsnfvalue.split(',')[0]+',40)');
        console.log('gcharttable:',gcharttable);


          const ctrlbtns:any=document.querySelector('#actnsfull-graph .apexcharts-toolbar');
          ctrlbtns.style.backgroundColor='rgb(255 255 255 / 65%)';
          ctrlbtns.style.padding='4px 6px 7px 5px';
          ctrlbtns.style.border='2px solid #b3b3b3';
          const ganttCtrls:any=document.querySelector('#actns-graphmodal .gantt-ctrls-btns');
          ganttCtrls.innerHTML='';
          ganttCtrls.append(ctrlbtns);


          const yaxis:any=document.querySelector('#actnsfull-graph .apexcharts-svg .apexcharts-yaxis-texts-g');
          const textelms:any=yaxis.querySelectorAll('text');
          const shouldwrap:boolean=Array.from(textelms).some((te:any)=>te.querySelector('title').textContent.length>20);
          if(shouldwrap){
            textelms.forEach((te:any)=>{
              te.setAttribute('x','-135');
              te.setAttribute('text-anchor','start');

              const fullname=te.querySelector('title').textContent;
              const maxl=20;
              const strl=fullname.length;
              if(strl>maxl){
                   te.querySelectorAll('tspan').forEach(tspn=>tspn.remove());

                   const tspan1 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                   tspan1.textContent=fullname.substring(0,20);
                   const tspan2 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                   tspan2.setAttribute('x','-135');
                   tspan2.setAttribute('dy','11');   // old 15.6
                   let fullname2=fullname.slice(20);
                   fullname2=fullname2.length>15?fullname2.substring(0,15)+'...':fullname2
                   tspan2.textContent=fullname2;

                   te.appendChild(tspan1);
                   te.appendChild(tspan2);
              }

          });
          }



          // add project code, project responsible info and hover effect to each yaxis label and open details on click
          Array.from(textelms).forEach((te:any,index)=>{
              const _p_code:any=_ProjectsListBy_Pid1[index].Project_Code;
              const _p_res:any=_ProjectsListBy_Pid1[index].Team_Res;
              te.style.cursor='pointer';
              te.setAttribute('data-projectcode',_p_code);
              te.setAttribute('data-projectres',_p_res);


              const ypos=te.getAttribute('y');
              te.setAttribute('y',ypos-12);

              const tspan3 = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
              tspan3.setAttribute('x','-135');
              tspan3.setAttribute('dy','13');
              tspan3.style.fill='#543fff';
              tspan3.style.fontSize='0.7em';
              tspan3.style.fontWeight='bold';
              tspan3.style.fontFamily='Lucida Sans Unicode';
              tspan3.style.textTransform='capitalize';
              tspan3.textContent=_p_res;
              te.appendChild(tspan3);

          });

          Array.from(textelms).forEach((te:any)=>{
              te.addEventListener('click',()=>{
                     const _prj_code=te.dataset.projectcode;
                     this.newDetails(_prj_code);
              });
              te.addEventListener('mouseover',()=>{
                   te.style.fill='#527ce2';
              });

              te.addEventListener('mouseout',()=>{
                   te.style.fill='unset';
              });
          });
        //add project code, project responsible info and hover effect to each yaxis label and open details on click


       },
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '33%', // Adjust to fill the available space
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


      // return opts.w.config.series[opts.seriesIndex].name;
      return '';
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },

  xaxis: {
    type: 'datetime',
    position: 'bottom',
    labels: {
      show: true,
      style: {
        offsetY: 10, // Adjust this value to add space below the labels
        colors:'#6b6f71',
        fontSize:'11px',
        fontWeight: 'bold'
      },
      datetimeFormatter: {
        month: "MMM",
        day: "dd MMM",
    },

    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: true
    },
    max:max_Xvalue.getTime(),

  },

  yaxis: {
    labels: {
      style: {
        fontSize: '11px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        textAnchor: 'start'
      },
      formatter: function(value) {
        if (isNaN(value)) {
            let str=value.substring(0,value.lastIndexOf('('));
            str=str.trim();
            return str;
        } else
          return value;

      }
    }
  },

  grid: {
    yaxis: {
      lines: {
        show: true,
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
    },

  },
  legend: { show:false },

  tooltip: {
    custom: ({series, seriesIndex, dataPointIndex, w})=> {

 const data = w.config.series[seriesIndex].data[dataPointIndex];
 const index=data.index;
 const prj_name=_ProjectsListBy_Pid1[index].Project_Name;
 const prj_start=this.datepipe.transform(new Date(_ProjectsListBy_Pid1[index].DPG), 'MMM d, y');
 const prj_end=this.datepipe.transform(new Date(_ProjectsListBy_Pid1[index].DeadLine), 'MMM d, y');
 const daydiff=Math.abs(moment(_ProjectsListBy_Pid1[index].DPG,'YYYY-MM-DD').diff(moment(_ProjectsListBy_Pid1[index].DeadLine,'YYYY-MM-DD'),'days'))+1;
 const prj_totalactions=_ProjectsListBy_Pid1[index].Actioncount;
 const completed_actions=_ProjectsListBy_Pid1[index].CompletedActioncount;
 const prj_status=_ProjectsListBy_Pid1[index].Status=='Completion Under Approval'?(_ProjectsListBy_Pid1[index].AuditStatus=='Audit Pending'?'Audit Approval':'Completion Under Approval'):_ProjectsListBy_Pid1[index].Status;
 const statusColor=this.all_status[prj_status]||this.all_status['other'];
 const delaydays_=Math.abs(_ProjectsListBy_Pid1[index].Delaydays);
 const prj_res=_ProjectsListBy_Pid1[index].Team_Res;
 const prj_alhrs=_ProjectsListBy_Pid1[index].AllocatedHours;
 const used_hrs=_ProjectsListBy_Pid1[index].UsedHours;

const _cd=new Date();
const d1=new Date(_ProjectsListBy_Pid1[index].DPG);
const d2=new Date(_ProjectsListBy_Pid1[index].DeadLine);





     return `<div style=" width: fit-content; min-width: 300px; padding: 0.5em; border-radius: 4px; box-shadow: 0 0 35px #6e6e6e33; background-color:#ffffff;">
                    <div style=" display: flex;margin-bottom: 4px;column-gap: 10px;">
                           <span style="flex-grow: 1;">
                              <span style="font-size: 10px;font-family: Lucida Sans Unicode;display: inline-block;max-width: 250px;text-wrap: nowrap;overflow: hidden hidden;text-overflow: ellipsis;">${prj_name}</span>
                             <span style="font-size: 9px;font-family: Lucida Sans Unicode;display: flex;align-items: center;justify-content: start;color: #afaeae;position: relative;top: -4px;">${prj_res}</span>
                           </span>
                         <span style="padding: 0.3em 0.6em 0.2em 0.6em;border-radius: 2px;background-color:${statusColor}; color: white;font-family: 'Lucida Sans Unicode';font-size: 11px;align-self: flex-start;">${prj_status} ${prj_status=='Delay'?(delaydays_+(delaydays_>1?' days':' day')):''}</span>
                    </div>


                    <div style="display: flex;align-items: center;margin-bottom: 0px;column-gap: 10px;">
                                <span style="font-size: 10px;color: #0d0d0dd6;display: flex;align-items: flex-end;column-gap: 3px;">
                                          <fieldset style="border: 1px solid #55525226;padding: 0.5em;border-radius: 3px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e4949d9;min-width: 55px;display: flex;justify-content: center;">
                                            <legend style="font-size: 8.6px;font-family: 'Lucida Sans Unicode';color: #5a57578f;width:fit-content; margin-bottom:0; ">Actions</legend>
                                            ${completed_actions}<span style="color: #b4b4b4db;">/</span>${prj_totalactions}
                                          </fieldset>
                                </span>

                               <span style="font-size: 10px;color: #0d0d0dd6;display: flex;align-items: flex-end;column-gap: 3px;">
                                          <fieldset style="border: 1px solid #55525226;padding: 0.5em;border-radius: 3px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e4949d9;min-width: 55px;display: flex;justify-content: center;">
                                            <legend style="font-size: 8.6px;font-family: 'Lucida Sans Unicode';color: #5a57578f;width:fit-content; margin-bottom:0;  ">Allocated hours</legend>
                                           ${prj_alhrs} hrs
                                          </fieldset>
                                </span>

                                 <span style="font-size: 10px;color: #0d0d0dd6;display: flex;align-items: flex-end;column-gap: 3px;">
                                          <fieldset style="border: 1px solid #55525226;padding: 0.5em;border-radius: 3px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e4949d9;min-width: 55px;display: flex;justify-content: center;">
                                            <legend style="font-size: 8.6px;font-family: 'Lucida Sans Unicode';color: #5a57578f;width:fit-content; margin-bottom:0;  ">Utilized hr</legend>
                                            ${used_hrs} hrs
                                          </fieldset>
                                </span>
                    </div>
                    <div style="font-size: 12px; display: flex; column-gap: 3px;">
                                  <fieldset style=" flex-grow:1;   border: 1px solid #4e49491f; padding: 0.3em; border-radius: 3px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e49499c; min-width: 50px; display: flex; justify-content: center; font-size: 10px;">
                                    <legend style="font-size: 8px;font-family: 'Lucida Sans Unicode';font-weight: 700;color: #5a57578f;width:fit-content;  margin-bottom:0; ">${d1<_cd?'Started on':'Starting from'}</legend>
                                   ${prj_start}
                                  </fieldset>

                                    <span style="flex-grow: 1;display: flex;flex-direction: column;justify-content: end;"> <span style="border: 1px dashed lightgray;"></span>
                                      <span style="text-align: center;color: #4e49499c;font-family: Lucida Sans Unicode;font-weight: bold;font-size: 9px;">${daydiff} ${daydiff>1?'days':'day'}</span>
                                    </span>

                                  <fieldset style="flex-grow:1;border: 1px solid #4e49491f;padding: 0.3em;border-radius: 6px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e49499c;min-width: 50px;display: flex;justify-content: center;font-size: 10px;text-align: left;">
                                    <legend style="font-size: 8px;font-family: 'Lucida Sans Unicode';font-weight: 700;color: #5a57578f;width: fit-content;margin-left: 5px; margin-bottom:0; ">${d2<_cd?'Ended on':'Ending on'}</legend>
                                    ${prj_end}
                                  </fieldset>
                    </div>
               </div> `;

    }
  },

  annotations: {
    xaxis: [{
      x: todays_date,
      borderColor: '#5867dd',
      borderWidth: 2,
      label: {
        style: {
          color: '#fff',
          background: '#5867dda5',
          fontFamily: 'Lucida Sans Unicode',
          fontWeight: 'normal',
          fontSize: '9px',
          padding: {
            left: 4,
            right: 4,
            top: 2,
            bottom: 2
          },
          borderRadius: '5px',
        },
        text: 'Today',
        textAnchor: 'start',
        offsetX: -13,
        offsetY: -20
      }
    }],


  },

  title: {
    text: `${this.Type} Summary`,
    align: 'left',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#263238'
    },
  },


};

var chart = new ApexCharts(document.querySelector("#actnsfull-graph"), options);
chart.render();



}


// test new 

}


