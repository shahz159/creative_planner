import { element } from 'protractor';
import { forEach } from '@angular-devkit/schematics';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { DropdownDTO } from 'src/app/_Models/dropdown-dto';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'underscore';
import { LinkService } from 'src/app/_Services/link.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  @ViewChild('selectAllCheckbox') selectAllCheckbox: any;
  btn_CreatePortfolio: boolean;

  hidetotalProjects: boolean;
  selectedItemsList: any;
  btnGetRecords: boolean;
  EmpCountInFilter = [];
  TypeContInFilter = [];
  CompanyCountFilter =[];
  StatusCountFilter = [];
  searchText: string;
  txtSearch: string;
  public _totalProjectsCount: any;
  Portfolio_FormGroup: FormGroup;
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

  searchResult: boolean = false;
  edited: boolean = false;

  // textMessage:boolean=true;

  constructor(
    public service: ProjectTypeService,
    // private loadingBar: LoadingBarService,
    private notifyService: NotificationService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    public BsService: BsServiceService,
    public _LinkService: LinkService,
    private activatedRoute: ActivatedRoute

  ) {
    this._objStatusDTO = new StatusDTO;
    this.ObjUserDetails = new UserDetailsDTO();
    this._objDropdownDTO = new DropdownDTO();
    this.Obj_Portfolio_DTO = new PortfolioDTO();
  }

  //Properties
  ObjUserDetails: UserDetailsDTO;
  _objDropdownDTO: DropdownDTO;
  Obj_Portfolio_DTO: PortfolioDTO;

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
  // LoadingBar_state = this.loadingBar.useRef('http');
  Current_user_ID = localStorage.getItem('EmpNo');
  _portfolioId: any;

  subtaskDiv: boolean;
  Url_portfolioId: any;
  _PortfolioDetailsById: any;
  public _PortFolio_Namecardheader: string;
  ngOnInit() {

    this.portfolioName = localStorage.getItem('_PortfolioName');
    // console.log("----Currrent Portfolio Name----->", this.portfolioName, this.Current_user_ID);
    this._portfolioId = localStorage.getItem('Pid');

    this.route.paramMap.subscribe(params => {
      var id = params.get('portfolioId');
      this.Url_portfolioId = parseInt(id);
      this.BsService.setSelectedPortId(this.Url_portfolioId);
    });
    this.router.navigate(["../AddProjectsToPortfolio/" + this.Url_portfolioId]);
    this.service.GetProjectsBy_portfolioId(this.Url_portfolioId)
      .subscribe((data) => {

        this._PortfolioDetailsById = JSON.parse(data[0]['PortfolioDetailsJson']);
        if (this.portfolioName == "" || this.portfolioName == undefined || this.portfolioName == null) {
          this.portfolioName = this._PortfolioDetailsById[0]['Portfolio_Name'];
         // console.log("Inside Service---->", this._PortFolio_Namecardheader);
        }
      });
    // console.log("Outside Service---->",this._PortFolio_Namecardheader);



    // this._portfolioId=localStorage.getItem('_PortfolioId');
    this.GetProjectsByUserName();
    this.getDropdownsDataFromDB();
  }
  userFound:boolean | undefined
  GetProjectsByUserName() {
    //this.LoadingBar_state.start();
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.PortfolioId = parseInt(this.Url_portfolioId, 10);
    // console.log(this.ObjUserDetails.PortfolioId);
    this.service.GetProjectsByUserName_Service(this.ObjUserDetails).subscribe(data => {
      this._ProjectDataList = data;
      this.ActualDataList = data;
      this.un_FilteredProjects = this.ActualDataList;
      if (this._ProjectDataList) {
        this._CurrentpageRecords = this._ProjectDataList.length;
        // this._totalProjectsCount = this._ProjectDataList.length;
        console.log("ProjectList----------->", this._ProjectDataList.length);
        console.log("ProjectListssssssssss-------->", this._ProjectDataList);
        this.userFound = true
      }
    });
    this.getDropdownsDataFromDB();
  }
  getDropdownsDataFromDB() {
    this._objDropdownDTO.EmpNo = this.Current_user_ID;
    this._objDropdownDTO.Selected_ProjectType = this.selectedType_String;
    this._objDropdownDTO.Selected_Status = this.selectedStatus_String;
    this._objDropdownDTO.SelectedEmp_No = this.selectedEmp_String;
    this._objDropdownDTO.SelectedCompany = this.selectedCompany_String;
    this._objDropdownDTO.Selected_SearchText = this.searchText;
    this._objDropdownDTO.PortfolioId = parseInt(this._portfolioId, 10);
    this.service.GetDropDownsData(this._objDropdownDTO)
      .subscribe((data) => {
        //Emp
        console.log("company data",data)
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
          this.CompanyCountFilter = JSON.parse(data[0]['Cmp_Json']);
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
        this._totalProjectsCount = this._totalProjectsCount[0]['TotalProjects'];
        //console.log(this._totalProjectsCount)
      });
  }
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
  checkboxclick(item, Pcode) {
debugger
    if (item == true) {
      for (let value of Object.values(this._ProjectDataList)) {
        if (value['checked'] == true && value['Project_Code'] == Pcode) {
          this.OnSave();
          return true;
        }
      }
    }
    if (item == false) {
      debugger
      console.log(this._ProjectDataList)
      this._ProjectDataList.forEach(element => {
        if (element.checked == false && element.Project_Code == Pcode) {
          let prid = element.id;
          let poid = this._portfolioId;
          let Projname = element.Project_Name;
          let pCode = element.Project_Code;
          let Createdby = element.Emp_No;
          this.DeleteProject(prid, poid, pCode, Projname, Createdby);
          return true;
        }
      });
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
    this.str_portName = this.portfolioName;
  }
  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];
  checkedItems_Cmp: any = [];
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  selectedCompany_String: string;

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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
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
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
    }

  }

  selectedItem_Company=[];

  isCompanyChecked(item) {
    let arr = [];
    this.CompanyCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Com_No: element.Com_No });
        return this.checkedItems_Cmp = arr;
      }
    });
    let arr2 = [];
    this.CompanyCountFilter.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Company.push(arr2);
    this.CompanyCountFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Company.length = 0;
        this.resetFilters();
      }
    });
    if(this.selectedItem_Type.length==0 && this.selectedItem_Status.length==0 && this.selectedItem_Emp.length==0 && this.selectedItem_Company.length==0){
      this.edited=false;
    }
    else{
      this.edited=true;
    }
  }
  //Apply Filters
  SearchbyText() {
    this.searchResult = true;
    this.CurrentPageNo = 1;
    this.applyFilters();
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

    this.selectedCompany_String = this.checkedItems_Cmp.map(select => {
      return select.Com_No;
    }).join(',');

    //console.log(this.checkedItems_Status, this.checkedItems_Type, this.checkedItems_Emp);

    this.ObjUserDetails.SelectedStatus = this.selectedStatus_String;
    this.ObjUserDetails.SelectedEmp_No = this.selectedEmp_String;
    this.ObjUserDetails.SelectedBlock_No = this.selectedType_String;
    this.ObjUserDetails.SelectedCompany = this.selectedCompany_String;
    this.ObjUserDetails.PageNumber = this.CurrentPageNo;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.searchText;

    if(this._portfolioId==0 || this._portfolioId==undefined ||this._portfolioId==null){
      this.ObjUserDetails.PortfolioId = parseInt(this.Url_portfolioId);
    }
    else{
      this.ObjUserDetails.PortfolioId = parseInt(this._portfolioId);
    }

    //console.log("string------->", this.selectedType_String, this.selectedEmp_String, this.selectedStatus_String);
    this.service.GetProjectsByUserName_Service(this.ObjUserDetails)
      .subscribe(data => {

        //this._ProjectDataList = JSON.parse(data[0]['Projects_Json']);
        this._ProjectDataList = data;
        this._CurrentpageRecords = this._ProjectDataList.length;
        //this._totalProjectsCount=this._ProjectDataList.length;
console.log(this._ProjectDataList,'this._ProjectDataListthis._ProjectDataListthis._ProjectDataList')
        if (this._ProjectDataList.length == 0) {
          this._filtersMessage = "No more projects matched your search";
          this._filtersMessage2 = " Clear the filters & try again";

        }
        else {
          this._filtersMessage = "";
          this._filtersMessage2 = "";
        }





     // this code decides whether select all checkbox should be checked or unchecked
      const allRselected:boolean=this._ProjectDataList.map(p=>p.Project_Code).every((prC:any)=>{
                 return this.allSelectedProjects.map(sp=>sp.Project_Code).includes(prC);
       })
       this.isAllPrjSelected=allRselected;


       // this code decides whether select all checkbox should be checked or unchecked


      });

    //Filtering Checkbox de
    this.getDropdownsDataFromDB();
  }
  _subtaskDiv: boolean;
  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  initials: string;
  pCode: string;
  pName: string;
  pDesc: string; pType: string; pStdt: Date; pEndDT: Date; pStat: string;
  pCost: number; pComp: string; pClient: string; Powner: string;
  PRespon: string; PAut: string; Pcoor: String; PInfo: String; pSupprt: string; pRType: string;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  duration: any; submissiontype: string; StandardDuration: string;
  openInfo(pcode, pName) {
    this._portfolioId = this.activatedRoute.snapshot.params.portfolioId;
    this.router.navigate(["../AddProjectsToPortfolio/" + this._portfolioId + "/projectinfo", pcode,"4"]);

    // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

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

  closeInfo() {
    this._ProjectDataList.forEach(item => item.isActive = false);
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["../AddProjectsToPortfolio/" + this._portfolioId]);
  }
  _objStatusDTO: StatusDTO;
  //Save Portfolio


  OnSave() {
    debugger
    this.Obj_Portfolio_DTO.Portfolio_Name = this.portfolioName;
    let LengthOfSelectedItems: any;
    LengthOfSelectedItems = JSON.stringify(this.selectedItemsList.length);
    this.Obj_Portfolio_DTO.SelectedProjects = this.selectedItemsList;
    this.service.SavePortfolio(this.Obj_Portfolio_DTO)
      .subscribe(data => {
        debugger
        this._portfolioId = data['Portfolio_ID'];
        this._objStatusDTO.Emp_No = this.Current_user_ID;
        //console.log("Return value--------->", this._portfolioId);
        this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
          (data) => {
            debugger
            this._ListProjStat = data as StatusDTO[];
            //console.log("ListForStatus", this._ListProjStat);
            //Owners Portfolios
            let Listown: any = this._ListProjStat.filter(i => (i.CreatedName));
            this.countOwners = Listown.length;
            this.countAll = this._ListProjStat.length;
            if (this._ListProjStat.length == 0) {
              this.messageForEmpty = false;//"No Portfolio's has created";
            }
            else {
              this.messageForEmpty = true;
            }
          });
      });

    // if (this._portfolioId == 0 || this._portfolioId == null || this._portfolioId == '') {
    //   this.notifyService.showSuccess("Portfolio Created " + ' ' + ' Added ' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');
    // }
    if (this._portfolioId != '') {
      this.notifyService.showSuccess("" + ' ' + 'Added' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');
    }
  }

  //Function Reset Filters
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
    if (this.selectedItem_Company.length == 0) {
      this.selectedCompany_String = null;
      this.checkedItems_Cmp = [];
    }
    //console.log("On Reset--->", this.checkedItems_Type, this.checkedItems_Status, this.checkedItems_Emp);
    this.applyFilters();
  }
  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Emp.length = 0;
    this.selectedItem_Company.length = 0;
    this.resetFilters();
  }
  BackBttn() {
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    console.log("URl Portfolio ID :", this._portfolioId);
    if (!this.Url_portfolioId) {
      this.router.navigate(['backend/Portfolio']);
      //this.router.navigate(["../backend/Portfolio"]);
      //var myWindow = window.open(url);
      //myWindow.focus();
      // var myurl = `${Url2}`;
      // var myWindow = window.open(myurl);
    }
    else {
      this.router.navigate(['portfolioprojects/', this.Url_portfolioId]);
      // var myurl = `${url}/${this._portfolioId}`;
      // var myWindow = window.open(myurl, this._portfolioId);

      // myWindow.focus();
    }

    // this.router.navigate(['backend/Portfolio'])
    //this.router.serializeUrl(this.router.createUrlTree(['Home/Portfolio/']));
    // const Url = this.router.serializeUrl(this.router.createUrlTree(['Home/Portfolio/']));
    // window.open(Url);
  }
  deletedBy: string;
  DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
    this.deletedBy = this.Current_user_ID;
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
              //console.log("Retrun After Delete :" + data);
              this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
              this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
              this.notifyService.showInfo("Project removed successfully ", '');
            });
          this._objStatusDTO.Emp_No = this.Current_user_ID;
          this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
            (data) => {
              this._ListProjStat = data as StatusDTO[];
            });
        })
      }
      else {
        this.notifyService.showInfo("Action Cancelled ", '');
        //checking again if delete Cancel
        this._ProjectDataList.forEach(element => {
          if (element.checked == false && element.id == Proj_id) {
            return element.checked = true;
          }
        });
      }
    });
  }

DeleteProjects(projInfo:any){

  this.service.DeleteProject(projInfo.Proj_id,projInfo.port_id,projInfo.Pcode,projInfo.proj_Name,projInfo.createdBy,this.deletedBy).subscribe((data) => {

    // this.service.GetProjectsBy_portfolioId(this._Pid)
    //   .subscribe((data) => {
    //     // //console.log("Retrun After Delete :" + data);
    //     // this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
    //     // this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
    //     this.notifyService.showSuccess("Project removed successfully ", '');
    //   });
    // // this._objStatusDTO.Emp_No = this.Current_user_ID;
    // this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
    //   (data) => {
    //     this._ListProjStat = data as StatusDTO[];
    //   });



  })
}





  _JsonString: any;
  _totalMemos: number;
  _mappedMemos: number;
  _leftMemos: number;
  _MemosSubjectList: any;
  _displayProjName: string;
  _MemosNotFound: string = "";
  _OpenMemosInfo(_projectCode) {
    // this._displayProjName = _projectName;
    this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._JsonString = data[0]['JsonData'];
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("Data------------>", data)
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              //console.log("Subject Name ------------>",this._MemosSubjectList);
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
  _raciDetails: boolean = true;
  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }
  clicks: number = 0;
  A2Z: boolean = true;
  Z2A: boolean = false;
  _SortPortfoliolist() {
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

  //Add DMS And Delete Functionality...

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
          this._OpenMemosInfo(this.pCode);
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
        this._OpenMemosInfo(this.pCode);
        let Returndata: any = data['Message'];
        this.notifyService.showInfo("", Returndata);
      });
    this.UpdateMemos(pcode);
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




  //  approve all selected projects start.

  // selectedCheckboxes: boolean[] = [];


// item1:any
// chooose(item) {
//   if (this.item && this.item1.Project_Code) {
//     this.selectedCheckboxes.push(this.item.Project_Code);
//   }}


// removePrjsOfPortflio(){
//   let removedCount:number=0;
//   this._ProjectDataList.forEach(element => {
//     if (element.checked == false) {
//       let prid = element.id;
//       let poid = this._portfolioId;
//       let Projname = element.Project_Name;
//       let pCode = element.Project_Code;
//       let Createdby = element.Emp_No;
//       try{
//       this.service.DeleteProject(prid,poid,pCode,Projname,Createdby,this.deletedBy).subscribe((data) => {
//              removedCount+=1;
//              if(removedCount==this._ProjectDataList.length)
//              { this.notifyService.showInfo(`${removedCount} Projects removed successfully `, '');   }
//         // this.service.GetProjectsBy_portfolioId(this._Pid)
//         //   .subscribe((data) => {
//         //     // //console.log("Retrun After Delete :" + data);
//         //     // this._ProjectsListBy_Pid = JSON.parse(data[0]['JosnProjectsByPid']);
//         //     // this._StatusCountDB = JSON.parse(data[0]['JsonStatusCount']);
//         //     this.notifyService.showSuccess("Project removed successfully ", '');
//         //   });
//         // // this._objStatusDTO.Emp_No = this.Current_user_ID;
//         // this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(
//         //   (data) => {
//         //     this._ListProjStat = data as StatusDTO[];
//         //   });



//       });
//     }catch(e){
//         this.notifyService.showInfo(`${removedCount} Projects removed successfully `, '');
//         console.log(e);
//     }
//     }
//   });

// }




// portfolio new start
allSelectedProjects:any=[];  // overall selection
isAllPrjSelected:boolean=false;

selectUnSelectProject(e,item){ debugger
      if(e.checked){
          this.allSelectedProjects.push(item);

          const allsel=this._ProjectDataList.every(item=>{
            return this.allSelectedProjects.map(p=>p.Project_Code).includes(item.Project_Code)
          })
          this.isAllPrjSelected=allsel;
      }
      else{   // when unchecked
          let index=this.allSelectedProjects.findIndex(obj=>obj.Project_Code==item.Project_Code)
          if(index!=-1)
          this.allSelectedProjects.splice(index,1);


          // when attempt is made to remove added project.

           const alreadyAddedPrj=this._ProjectDataList.find(p=>p.Project_Code==item.Project_Code)
           if(alreadyAddedPrj){
               if(alreadyAddedPrj.addedIntoPortfolio)
                this.removePrjFromPortfolio(alreadyAddedPrj);
           }

          // when attempt is made to remove added project.

          this.isAllPrjSelected=false;
      }
}


addPrjsToPortflio() {
  debugger
  if(this.allSelectedProjects.length>0){
      this.Obj_Portfolio_DTO.Portfolio_Name = this.portfolioName;
      const selectedPrjs=this.allSelectedProjects;
      let LengthOfSelectedItems = JSON.stringify(selectedPrjs.length);
      this.Obj_Portfolio_DTO.SelectedProjects = selectedPrjs;
      this.service.SavePortfolio(this.Obj_Portfolio_DTO)
        .subscribe(data => {
          debugger
          this._portfolioId = data['Portfolio_ID'];
          if(this._portfolioId!==''){
            this.notifyService.showSuccess("" + ' ' + 'Added' + ' ' + LengthOfSelectedItems + ' ' + 'Project(s)', '');
          }


           this._ProjectDataList.map(PRJ=>{

              const isAdded:boolean=this.allSelectedProjects.map(item=>item.Project_Code).includes(PRJ.Project_Code)
              if(isAdded)
              PRJ.addedIntoPortfolio=true;

              return PRJ;
           })



          this.allSelectedProjects=[];
        });

  }
  else{
    this.notifyService.showInfo("please select atleast one project to add.","");
  }

}

removePrjFromPortfolio(element:any){
   debugger
      let prid = element.id;
      let poid = this._portfolioId;
      let Projname = element.Project_Name;
      let pCode = element.Project_Code;
      let Createdby = element.Emp_No;

  this.service.DeleteProject(prid,poid,pCode,Projname,Createdby,this.deletedBy).subscribe((data) => {

     this.notifyService.showSuccess("Project removed successfully.","");

     const index=this._ProjectDataList.findIndex(p=>p.Project_Code==pCode);
     if(index!=-1){
           delete this._ProjectDataList[index].addedIntoPortfolio;
     }



  });

}


isProjectSelected(prjcode:any):boolean{

  // console.log("prj:",this.allSelectedProjects.map(x=>x.Project_Code).includes(prjcode));
  return this.allSelectedProjects.map(x=>x.Project_Code).includes(prjcode);
    //  const x=this.allSelectedProjects.find((item)=>item.Project_Code==prjcode);
    //  return x?true:false;
}


selectUnselectPagePrjs(evt){ debugger
  this.isAllPrjSelected=evt.checked;
    if(this.isAllPrjSelected)
    {   //checked
        const selprjs=this.allSelectedProjects.map(x=>x.Project_Code);
        const PageunselPrjs=this._ProjectDataList.filter(item=>{
             return !selprjs.includes(item.Project_Code);
        })
        this.allSelectedProjects=[...PageunselPrjs,...this.allSelectedProjects];   // current page projects + selected projects.
    }
    else{
         // unchecked
         const curPagePrjs=this._ProjectDataList.map(x=>x.Project_Code);
         this.allSelectedProjects=this.allSelectedProjects.filter(item=>{
                return !curPagePrjs.includes(item.Project_Code)
         });
    }
    console.log("allSelectedProjects:",this.allSelectedProjects);
}

Team_Res:any;
Project_Code:any;
Team_Autho:any

// portfolio new end
LoadDocument(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {
  debugger
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

getStatusNumber(status: string): number {
  const match = status.match(/\d+/); // Find digits in the string
  return match ? parseInt(match[0], 10) : null; // Convert to number, or return null if no number found
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
    delayText = delayDays < 10 ? `0${delayDays} days` : `${delayDays} days`;
  }

  return `${delayText.toLowerCase()}`;
}
formatStatus(status) {
  // Use a regular expression to replace '(s)' with an empty string
  return status.replace(/\(s\)/, 's').trim();
}

}
