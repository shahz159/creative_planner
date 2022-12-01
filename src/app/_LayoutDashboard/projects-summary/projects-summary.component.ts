import { Component, Input, OnInit } from '@angular/core';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { LinkService } from 'src/app/_Services/link.service';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { Router, RouterLink } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NotificationService } from 'src/app/_Services/notification.service';
import * as _ from 'underscore';
// import { object, string } from '@amcharts/amcharts4/core';
// import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { ParameterService } from "src/app/_Services/parameter.service";
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
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
  searchResult: Boolean = false;
  _ObjCompletedProj: CompletedProjectsDTO;

  constructor(public service: ProjectTypeService,
    public _LinkService: LinkService,
    private ShareParameter: ParameterService,
    // private loadingBar: LoadingBarService,
    private router: Router,
    public approvalservice: ApprovalsService,
    private notifyService: NotificationService) {
    this.ObjUserDetails = new UserDetailsDTO();
    this._objDropdownDTO = new DropdownDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
  }

  _subtaskDiv: boolean;
  keyword = 'Subject';
  countries: any;
  A2Z: boolean;
  Z2A: boolean;
  _raciDetails: boolean = true;
  approvalObj = new ApprovalDTO();

  ngOnInit() {
    this._raciDetails = true;
    this.A2Z = true;
    this.Z2A = false;
    this._subtaskDiv = true;
    this.Current_user_ID = localStorage.getItem('EmpNo');
    // this.GetApplicationDetails();
    this.GetProjectsByUserName();
    this.getDropdownsDataFromDB();
    //this.portfolioName = localStorage.getItem('_PortfolioName');
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
  count_LinkedProjects: number;
  Current_user_ID: string;

  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = data;
      console.log("Summary Data---->", this._ProjectDataList);
      // this.count_LinkedProjects= this._ProjectDataList.filter(x => x.Link_Status === true).length 
      this.ActualDataList = data;
      if (this._ProjectDataList.length > 0) {
        // this.LoadingBar.stop();
      }
      this.un_FilteredProjects = this.ActualDataList;
      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
        // console.log("ProjectList----------->", this._ProjectDataList.length);
      }
    });
  }

  LastPage:number;
  lastPagerecords:number;

  getDropdownsDataFromDB() {
    this._objDropdownDTO.EmpNo = this.Current_user_ID;
    this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
    this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
    this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
    this._objDropdownDTO.Selected_SearchText = this.searchText;
    // this._objDropdownDTO.PortfolioId = null;
    this.service.GetDropDownsData_ForSummary(this._objDropdownDTO)
      .subscribe((data) => {
        //Emp
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

  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  selectedItem_Status = [];

  isStatusChecked(item) {
    let arr = [];
    this.edited = true;
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0){
      this.edited=false;
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
    }
    else{
      this.searchResult = true;
      this.CurrentPageNo = 1;
      this.applyFilters();
    }    
  }

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
    this.service.GetProjectsByUserName_Service_ForSummary(this.ObjUserDetails)
      .subscribe(data => {
        //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
        this._ProjectDataList = data;
        this._CurrentpageRecords = this._ProjectDataList.length;
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
    this.getDropdownsDataFromDB();
    
  }

  resetFilters() {
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
    //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);
    this.applyFilters();
  }

  resetAll() {
    this.searchResult=false;
    this.txtSearch = '';
    this.searchText= '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0
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

  openInfo(pcode, pName) {
    document.getElementById("mysideInfobar").style.width = "65%";
    this.router.navigate(["../backend/ProjectsSummary/projectinfo", pcode]);
    document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementById("sumdet").classList.add("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  closeInfo() {
    this.Clear_Feilds();
    document.getElementById("mysideInfobar").style.width = "0";
    document.getElementById("proactbar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    //document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");

  }

  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _MemosSubjectList: any;
  _displayProjName: string;
  _MemosNotFound: string = "";
  _DBMemosIDList: any;

  _OpenMemosInfo(_projectCode, _projectName) {
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
  }

  _CloseMemosidebar() {
    document.getElementById("MemosSideBar").style.width = "0";
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
        this._DARList = data;
        if (this._DARList.length) {
          this._DarAchievement = data[0]['WorkAchieved'];
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

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
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

  sideviw() {
    document.getElementById("proactbar").classList.add("kt-quick-panel--on");
    document.getElementById("sumdet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  closeApproval() {
    document.getElementById("proactbar").classList.remove("kt-quick-panel--on");
    document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.Clear_Feilds();
    this.notifyService.showError("Cancelled", '');    
  }

  comments:string;
  commentSelected:string;

  typeChange(){
    this.comments="";
    this.commentSelected="";
  }

  selectedType: string;
  _Message:string;

  submitApproval() {
    if (this.selectedType == '1') {
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.Projectcode;
      this.approvalObj.Request_type = this.requestType;
      this.approvalObj.Remarks = this.comments;
      if(this.requestType=='New Project' || this.requestType=='Project Complete' || this.requestType=='Deadline Extend'){
        this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
        subscribe((data) => {
          this._Message = (data['message']);
          this.notifyService.showSuccess("Project Approved Successfully", this._Message);
          this.GetProjectsByUserName();
        });
      }
      else{
        this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
      }
      
    }
    else if (this.selectedType == '2') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
    else if (this.selectedType == '3') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
    else if (this.selectedType == '4') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");  
    document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.Clear_Feilds();
    this.closeInfo();
    this.GetProjectsByUserName();
  }


  Clear_Feilds() {
    this.selectedType = null;
    this.commentSelected = null;
  }
}
