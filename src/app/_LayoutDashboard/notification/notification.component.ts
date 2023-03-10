import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  
  Current_user_ID: any;
  _NotificationActivityList: NotificationActivityDTO[];
  _RequestActivity: [];
  _DarActivityList: [];
  _NotificationActivity: [];
  _AlertActivity:[];
  notilength:number;
  _totalProjectsCount:number;
  _filtersMessage:string;
  _filtersMessage2:string;
  CurrentPageNo: number = 1;
  _CurrentpageRecords: any;
  LastPage:number;
  lastPagerecords:number;
  emptyspace:boolean = true;

  ////////////////------------------------------- Filters ------------------------------///////////////
  EmpCountInFilter = [];
  TypeContInFilter = [];
  StatusCountFilter = [];
  RequestCountFilter = [];

  notificationDTO: NotificationActivityDTO;
  approvalObj = new ApprovalDTO();

  constructor(
    public service: ProjectTypeService,
    public approvalservice: ApprovalsService,
    private notifyService: NotificationService,
    private router: Router
  ) {
    this.notificationDTO=new NotificationActivityDTO();
   }



  ngOnInit(){
    this.router.navigate(["Notifications"]);
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.viewAll();
  }


  viewAll(){

    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=1;
    this.notificationDTO.PageSize=20;
    this.notificationDTO.SelectedStatus = null;
    this.notificationDTO.SelectedEmp_No = null;
    this.notificationDTO.SelectedType = null;
    this.notificationDTO.SearchText = null;

    this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        // this._NotificationActivityList = data as NotificationActivityDTO[];
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
        this._totalProjectsCount = (data[0]['notificationcount']);
        if(this._NotificationActivity){
            this.notilength = this._NotificationActivity.length;
            this._CurrentpageRecords = this._NotificationActivity.length;
        }
        //Emp
        if (this.selectedItem_Emp.length == 0) {
          this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
        }
        else {
          this.EmpCountInFilter = this.selectedItem_Emp[0];
        }
         //Request
         if (this.selectedItem_Request.length == 0) {
          this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
        }
        else {
          this.RequestCountFilter = this.selectedItem_Request[0];
        }
        //Type
        if (this.selectedItem_Type.length == 0) {
          this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
        }
        else {
          this.TypeContInFilter = this.selectedItem_Type[0];
        }
        //Status
        if (this.selectedItem_Status.length == 0) {
          this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
        }
        else {
          this.StatusCountFilter = this.selectedItem_Status[0];
        }
        this._totalProjectsCount = JSON.parse(data[0]['notificationcount']);
        if (this._NotificationActivity.length == 0) {
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
        let _vl = this._totalProjectsCount / 20;
        let _vl1 = _vl % 1;
        if (_vl1 > 0.000) {
          this.LastPage = Math.trunc(_vl) + 1;
        }
        else {
          this.LastPage = Math.trunc(_vl);
        }
        if(this.CurrentPageNo == this.LastPage){
          this.lastPagerecords=20;
        }
  }

  loadMore() {
    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=this.CurrentPageNo;
    this.notificationDTO.PageSize=20;
    this.service.GetViewAllDashboardnotifications(this.notificationDTO)
      .subscribe(data1 => {
        this._NotificationActivity = JSON.parse(data1[0]['Notification_Json']);
        if (this._NotificationActivity) {
          this._CurrentpageRecords = this._NotificationActivity.length;
        }
      });
  }

  openInfo(pcode) {
    document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    this.router.navigate(["Notifications/projectinfo/", pcode,"6"]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  moreDetails(pcode,rec_date,req_type) {
    this.approvalObj.Emp_no=this.Current_user_ID;
    this.approvalObj.Project_Code=pcode;
    this.approvalObj.Request_Date=rec_date;
    this.approvalObj.Request_type=req_type;
    console.log(this.approvalObj,"response");
    this.approvalservice.NewResponseService(this.approvalObj).subscribe(data =>{
      console.log(data,"response-data");
      if(data[0]['message']=='1')
      this.notifyService.showInfo("Response recorded.",'');
      this.viewAll();
    });
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  closeInfo() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  }

  checkedItems_Status: any = [];
  checkedItems_Type: any = [];
  checkedItems_Emp: any = [];
  checkedItems_Request: any = [];
  selectedType_String: string;
  selectedEmp_String: string;
  selectedStatus_String: string;
  selectedRequest_String: string;
  selectedItem_Status = [];
  selectedItem_Type = [];
  selectedItem_Emp = [];
  selectedItem_Request = [];


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
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 
      && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }

  isRequestChecked(item) {
    let arr = [];
    this.RequestCountFilter.forEach(element => {
      if (element.checked == true) {
        arr.push({ Name: element.Name });
        return this.checkedItems_Request = arr;
      }
    });
    let arr2 = [];
    this.RequestCountFilter.filter((item) => {
      if (item.checked == true) {
        this.applyFilters();
        return arr2.push(item);
      }
    });
    this.selectedItem_Request.push(arr2);
    this.RequestCountFilter.forEach(element => {
      if (element.checked == false) {
        this.selectedItem_Request.length = 0;
        this.resetFilters();
      }
    });
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 
      && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }

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
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 
      && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }


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
    if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0 
        && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
      this.edited = false;
    }
    else {
      this.edited = true;
    }
  }
  //Apply Filters
  SearchbyText() {
    this.CurrentPageNo = 1;
    this.applyFilters();
  }

  applyFilters() {
    this.selectedEmp_String = this.checkedItems_Emp.map(select => {
      return select.Emp_No;
    }).join(',');
    this.selectedRequest_String = this.checkedItems_Request.map(select => {
      return select.Name;
    }).join(',');
    this.selectedType_String = this.checkedItems_Type.map(select => {
      return select.Block_No;
    }).join(',');
    this.selectedStatus_String = this.checkedItems_Status.map(select => {
      return select.Status;
    }).join(',');

    this.notificationDTO.Emp_No = this.Current_user_ID;
    this.notificationDTO.SelectedEmp_No = this.selectedEmp_String;
    this.notificationDTO.SelectedStatus = this.selectedStatus_String;
    this.notificationDTO.SelectedRequest = this.selectedRequest_String;
    this.notificationDTO.SelectedType = this.selectedType_String;
    this.notificationDTO.PageNumber = this.CurrentPageNo;
    this.notificationDTO.PageSize = 20;
    this.notificationDTO.SearchText = this.searchText;

    this.service.GetViewAllDashboardnotifications(this.notificationDTO)
      .subscribe(data => {
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);       
        //Emp
        if (this.selectedItem_Emp.length == 0) {
          this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
        }
        else {
          this.EmpCountInFilter = this.selectedItem_Emp[0];
        }
         //Request
         if (this.selectedItem_Request.length == 0) {
          this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
        }
        else {
          this.RequestCountFilter = this.selectedItem_Request[0];
        }
        //Type
        if (this.selectedItem_Type.length == 0) {
          this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
        }
        else {
          this.TypeContInFilter = this.selectedItem_Type[0];
        }
        //Status
        if (this.selectedItem_Status.length == 0) {
          this.StatusCountFilter = JSON.parse(data[0]['Status_json']);
        }
        else {
          this.StatusCountFilter = this.selectedItem_Status[0];
        }
        this._totalProjectsCount = JSON.parse(data[0]['notificationcount']);
        
        let _vl = this._totalProjectsCount / 20;
        let _vl1 = _vl % 1;
        if (_vl1 > 0.000) {
          this.LastPage = Math.trunc(_vl) + 1;
        }
        else {
          this.LastPage = Math.trunc(_vl);
        }
        if(this.CurrentPageNo == this.LastPage){
          this.lastPagerecords=20;
        }
        if (this._NotificationActivity) {
          this._CurrentpageRecords = this._NotificationActivity.length;
        }
        if (this._NotificationActivity.length == 0) {
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
  }

  search_Type: any[];
  edited: boolean = false;
  searchText: string;

  resetFilters() {
    this.searchText = "";
    this.search_Type = [];
    this.CurrentPageNo = 1;
    this.edited = false;
    if (this.selectedItem_Type.length == 0) {
      this.selectedType_String = null;
      this.checkedItems_Type = [];
    }
    if (this.selectedItem_Request.length == 0) {
      this.selectedRequest_String = null;
      this.checkedItems_Request = [];
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

  txtSearch: string;
  
  resetAll() {
    this.txtSearch = '';
    this.selectedItem_Type.length = 0;
    this.selectedItem_Status.length = 0;
    this.selectedItem_Request.length = 0;
    this.selectedItem_Emp.length = 0
    this.resetFilters();
  }

  search(event) {
    this.SearchbyText();
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

  clicks: number = 0;
  A2Z: boolean = true;
  Z2A: boolean = false;

  // _SortProjectList() {
  //   this.clicks += 1;
  //   if (this.clicks != 1) {
  //     this.A2Z = true;
  //     this.Z2A = false;
  //     this._NotificationActivity = this._NotificationActivity.sort((a, b) => (a.Project_Name > b.Project_Code) ? -1 : 1);
  //     this.clicks = 0;
  //   } else {
  //     this.A2Z = false;
  //     this.Z2A = true;
  //     this._NotificationActivity = this._NotificationActivity.sort((a, b) => (a.Project_Code > b.Project_Code) ? 1 : -1);
  //   }
  // }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }
}
