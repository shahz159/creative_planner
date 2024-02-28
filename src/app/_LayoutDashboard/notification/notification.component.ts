import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  autocompleteOptions: string[] = ['One', 'Two', 'Three'];
  Current_user_ID: any;
  _NotificationActivityList: NotificationActivityDTO[];
  _RequestActivity: [];
  _DarActivityList: [];
  _NotificationActivity:any= [];
  _AlertActivity:[];
  notilength:number;
  _totalProjectsCount:number;
  WScount:number;
  WRcount:number;
  _filtersMessage:string;
  _filtersMessage2:string;
  CurrentPageNo: number = 1;
  _CurrentpageRecords: any;
  LastPage:number;
  lastPagerecords:number;
  emptyspace:boolean = true;
  sendtype:any='Req';
  type1:any='Req';
  type2:any='Res';

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
    private router: Router,public BsService: BsServiceService
  ) {
    this.notificationDTO=new NotificationActivityDTO();

   }



  ngOnInit(){
    this.router.navigate(["Notifications"]);
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.viewAll(this.sendtype);
    this.showPrjAprv();
    this.newNotificationLeave()
    this.newNotificationLeaveRequests()
    // this.GetEmployeeLeaveDetail()
  }


  viewAll(type){
    this.sendtype=type;
    if(type=='Req'){
      this.selectedItems=[];
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=1;
    this.notificationDTO.PageSize=20;
    this.notificationDTO.SelectedStatus = null;
    this.notificationDTO.SelectedEmp_No = null;
    this.notificationDTO.SelectedType = null;
    this.notificationDTO.SearchText = null;
    this.notificationDTO.sendtype = type;

    this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        // this._NotificationActivityList = data as NotificationActivityDTO[];
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
        console.log(this._NotificationActivity,"ws");
        this._totalProjectsCount = (data[0]['notificationcount']);
        this.WScount = (data[0]['WScount']);
        this.WRcount = (data[0]['WRcount']);
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
    else if(type=='Res'){
      this.selectedItems=[];
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
    this.notificationDTO.Emp_No=this.Current_user_ID;
    this.notificationDTO.PageNumber=1;
    this.notificationDTO.PageSize=20;
    this.notificationDTO.SelectedStatus = null;
    this.notificationDTO.SelectedEmp_No = null;
    this.notificationDTO.SelectedType = null;
    this.notificationDTO.SearchText = null;
    this.notificationDTO.sendtype = type;

    this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        // this._NotificationActivityList = data as NotificationActivityDTO[];
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
        console.log(this._NotificationActivity,"ws");
        this._totalProjectsCount = (data[0]['notificationcount']);
        this.WScount = (data[0]['WScount']);
        this.WRcount = (data[0]['WRcount']);
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
    // document.getElementById("Project_info_slider_bar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    this.router.navigate(["Notifications/projectinfo/", pcode,"6"]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  openInfo1(pcode,sid) {
    this.BsService.SetNewStandardId(sid);
    // document.getElementById("Project_info_slider_bar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    this.router.navigate(["Notifications/projectinfo/", pcode,"6"]);
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  }

  clearResponse(pcode,rec_date,req_type){
    this.approvalObj.Emp_no=this.Current_user_ID;
    this.approvalObj.Project_Code=pcode;
    this.approvalObj.Request_Date=rec_date;
    this.approvalObj.Request_type=req_type;
    console.log(this.approvalObj,"response");
    this.approvalservice.NewResponseService(this.approvalObj).subscribe(data =>{
      console.log(data,"response-data");
      if(data[0]['message']=='1')
      this.notifyService.showSuccess("Response cleared.",'');
      this.applyFilters();
    });
  }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  // newDetails1(prjcode,actcode) {
  //   let name: string = 'Details';
  //   let qparams='?actionCode='+actcode;
  //   var url = document.baseURI + name;
  //   var myurl = `${url}/${prjcode}${qparams}`;
  //   var myWindow = window.open(myurl);
  //   myWindow.focus();
  // }

  // newDetails(prjcode) {

  //   let name: string = 'Details';
  //   var url = document.baseURI + name;
  //   var myurl = `${url}/${prjcode}`;
  //   var myWindow = window.open(myurl);
  //   myWindow.focus();


  // }


  openDetails(p1,p2){
    let name: string = 'Details';
    var url = document.baseURI + name;
    let qparams='';
    let myurl;
    if(p1){
      qparams='?actionCode='+p2;
      myurl = `${url}/${p1}${qparams}`;
    }
    else{
      myurl = `${url}/${p2}`;
    }
    var myWindow = window.open(myurl);
    myWindow.focus();
  }



  closeInfo() {
    this._NotificationActivity.forEach(item => item.isActive = false);
    this.resetReject();
    $('.project-list_AC').removeClass('active');
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("rejectbar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    this.router.navigate(["Notifications"]);
  }
LeaveDetail:any
  currentReqIndex:number=0;
  open_leave_requisition(submitby,leavecode) {

    this.approvalservice.GetEmployeeLeaveDetail(submitby,leavecode).subscribe((data)=>{
      this.LeaveDetail=JSON.parse(data[0]['LeaveDetails_json'])
      // this.currentReqIndex=index;
      console.log( this.LeaveDetail,"leavedetailss")
   });

//  this.GetEmployeeLeaveDetails(this.leave_Requests[this.currentReqIndex].Leave_Code);
    //  sidebar open
    $('#leave_requisition_slider_bar').addClass('open_requisition_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // sidebar open

  }
  // open_leave_requisition1() {
  //   $('#leave_requisition_slider_bar').addClass('open_requisition_sidebar_info');
  //   document.getElementById("rightbar-overlay").style.display = "block";
  //   document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

  // }
  close_requisition_Info() {
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("leave_requisition_slider_bar").classList.remove("kt-quick-panel--on");
    $('#leave_requisition_slider_bar').removeClass('open_requisition_sidebar_info');
  }

  showPrjAprv(){
    document.getElementById('prj-aprv-list').classList.remove('d-none');
    document.getElementById('leave-aprv-list').classList.add('d-none');
  }

  showLeaveAprv(){
     document.getElementById('prj-aprv-list').classList.add('d-none');
     document.getElementById('leave-aprv-list').classList.remove('d-none');
  }


  leave_Requests:any=[]
  newNotificationLeaveRequests(){
    this.service.GetEmployeeLeaveRequests(this.Current_user_ID).subscribe((data)=>{
      this.leave_Requests=JSON.parse(data[0]['LeaveRequests_json'])
      console.log(this.leave_Requests,"_newNotificationLeaveRequest")
    })

  }



  Leave_code: any = []
  _newNotificationLeave: any = []
  newNotificationLeave() {
    this.service.GetEmployeeLeaveResponses(this.Current_user_ID).subscribe((data) => {
      this._newNotificationLeave = JSON.parse(data[0]['LeaveResponses_json'])
      console.log(this._newNotificationLeave, 'newNotificationLeavesresponse')
    })
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
    this.notificationDTO.sendtype = this.sendtype;

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

  sno_arr:any=[];
  selectedItems: any[] = [];
  selectAllCheckbox: boolean = false;

  selectall(ev){
    if (this.selectAllCheckbox) {
      this.selectedItems = [...this._NotificationActivity];
    } else {
      this.selectedItems = this.selectedItems.filter(item => !this._NotificationActivity.includes(item));
    }
    console.log(this.selectedItems,"all");
  }



  select(ev,item){

    if(ev.target.checked==false){
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;

      checkbox.checked = false;
    }

    else if(ev.target.checked==true){
      // Assuming you have checkboxes with a common class name 'checkbox'
      const checkboxes = document.querySelectorAll('.form-check-input');
      const selectAllCheckbox = document.getElementById('snocheck') as HTMLInputElement;

      // Add event listeners to each checkbox
      checkboxes.forEach((checkbox: HTMLInputElement) => {
        checkbox.addEventListener('change', updateSelectAllCheckbox);
      });

      // Function to update the "Select All" checkbox state
      function updateSelectAllCheckbox() {
        const allChecked = Array.from(checkboxes).every((checkbox: HTMLInputElement) => checkbox.checked);
        selectAllCheckbox.checked = allChecked;
      }

      // Add event listener to the "Select All" checkbox
      selectAllCheckbox.addEventListener('change', toggleAllCheckboxes);

      // Function to toggle the state of all checkboxes based on the "Select All" checkbox
      function toggleAllCheckboxes() {
        const isChecked = selectAllCheckbox.checked;
        checkboxes.forEach((checkbox: HTMLInputElement) => {
          checkbox.checked = isChecked;
        });
    }
  }

  const checkbox = ev.target as HTMLInputElement;

  if (checkbox.checked) {
    this.selectedItems.push(item);
  } else {
    const index = this.selectedItems.findIndex((selectedItem) => selectedItem === item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
  }
  console.log(this.selectedItems,"single");
}

isSelected(item: any): boolean {
  return this.selectedItems.includes(item);
}

acceptSelectedValues() {

    console.log(this.selectedItems,"accept");



  if( this.selectedItems.length > 0){
    debugger
    this.approvalservice.NewUpdateAcceptApprovalsService(this.selectedItems).subscribe(data =>{
      console.log(data,"accept-data");

      this.applyFilters();
    });
    const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
    this.selectedItems=[];
    this.notifyService.showSuccess("Project(s) approved successfully",'Success');
  }
  else{
    this.notifyService.showInfo("Please select atleast one project to approve",'');
  }

  }

  reject_list: any;
  rejectType: any;
  noRejectType: boolean = false;
  rejectype: any;
  rejDesc: any;
  rejectcommentsList: any;
  comments: string;
  exist_comment: any[] = [];
  rejectcomments:any;


  rejectApproval() {
    this.noRejectType = false;
    this.reject_list.forEach(element => {
      if (this.rejectType == element.TypeID) {
        this.rejDesc = element.Reject_Description;
      }
    });

    if(this.selectedItems.length==1){
      this.approvalObj.Project_Code=(this.selectedItems[0]['Project_Code1'])
      if ((this.selectedItems[0]['Req_Type']) == 'New Project')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'New Project Reject Release')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'New Project Hold')
        this.approvalObj.Status = 'New Project Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete Reject Release')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Project Complete Hold')
        this.approvalObj.Status = 'Project Complete Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Deadline Extend')
        this.approvalObj.Status = 'Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Deadline Extend Hold')
        this.approvalObj.Status = 'Rejected';
      else if ((this.selectedItems[0]['Req_Type']) == 'Standardtask Enactive')
        this.approvalObj.Status = 'Enactive-Reject';
      else if ((this.selectedItems[0]['Req_Type']) == 'Project Forward')
        this.approvalObj.Status = 'Forward Reject';
      else if ((this.selectedItems[0]['Req_Type']) == 'Project Hold')
        this.approvalObj.Status = 'Project Hold Reject';
      else if ((this.selectedItems[0]['Req_Type']) == 'Revert Back')
        this.approvalObj.Status = 'Revert Reject';
        else if ((this.selectedItems[0]['Req_Type']) == 'Task Complete')
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

  rejectpros() {
    this.approvalObj.Project_Code = null;

    this.approvalservice.GetGlobalRejectList(this.approvalObj).subscribe((data) => {
      this.reject_list = JSON.parse(data[0]['reject_list']);
    });
    document.getElementById("rejectbar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
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

  resetReject(){
    this.noRejectType = false;
    this.comments = "";
    this.exist_comment =[];
    this.rejectType=null;
  }

  submitReject(){
    console.log(this.selectedItems,"reject");
    this.selectedItems.forEach(element => {
      element.RejectType=this.rejectType;
      element.Remarks=this.comments;
    });
    console.log(this.selectedItems,"reject1");
    if( this.selectedItems.length > 0){
      this.approvalservice.NewUpdateRejectApprovalsService(this.selectedItems).subscribe(data =>{
        console.log(data,"reject-data");

        this.applyFilters();
      });
      const checkbox = document.getElementById('snocheck') as HTMLInputElement;
      checkbox.checked = false;
      this.selectedItems=[];
      this.notifyService.showSuccess("Project(s) rejected successfully",'Success');
    }
    else{
      this.notifyService.showInfo("Please select atleast one project to reject",'');
    }
    this.resetReject();
    this.closeInfo();
  }

  responselist:any=[];

  clearResponses(){

    if( this.selectedItems.length > 0){
      this.selectedItems.forEach(element => {
        this.responselist.push(element.SNo);
      });
      this.responselist=this.responselist.join(',');
      this.approvalObj.responselist=this.responselist;

      this.approvalservice.NewMultiResponseService(this.approvalObj).subscribe(data =>{
        console.log(data,"response-data");
        if(data['message']=='1')
        this.notifyService.showSuccess("Response(s) cleared.",'');
        this.viewAll(this.sendtype);
        this.responselist=[];
      });
    }
    else{
      this.notifyService.showInfo("Please select atleast one response to clear",'');
    }

  }


  info_active_btn(item){

    item.isActive = !item.isActive;

      // If you want to allow only one item to be active at a time, uncomment the following lines:
    if (item.isActive) {
      this._NotificationActivity.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.isActive = false;
        }
      });
    }

  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }




  leavePanel:"REQUESTS"|"RESPONSES"="REQUESTS";
  changeLeavePanel(panel:"REQUESTS"|"RESPONSES"){
       this.leavePanel=panel;
  }
}
