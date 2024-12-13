import { DropdownDTO } from './../../_Models/dropdown-dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { NotificationActivityDTO } from 'src/app/_Models/notification-activity-dto';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS,} from '@angular/material-moment-adapter';
import * as moment from 'moment';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
  providers:[]
};


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]
})
export class NotificationComponent implements OnInit {
  autocompleteOptions: string[] = ['One', 'Two', 'Three'];
  Current_user_ID: any;
  Current_user_Name:any;
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
  notificationsLoading : boolean=false;
  // pleasewait:boolean = false
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
    this.Current_user_Name=localStorage.getItem('UserfullName');
    this.viewAll(this.sendtype);
    this.showPrjAprv();
    this.newNotificationLeave()
    this.newNotificationLeaveRequests()
    this.Leaveapprovaltab()
    this.selectedDropdown = 'ProjectApproval';




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
    this.notificationsLoading = true;
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
        this.notificationsLoading = false;
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
    this.notificationsLoading = true;
    this.service.GetViewAllDashboardnotifications(this.notificationDTO).subscribe(
      (data) => {
        // this._NotificationActivityList = data as NotificationActivityDTO[];
        this._NotificationActivity = JSON.parse(data[0]['Notification_Json']);
        console.log(this._NotificationActivity,"ws");
        this._totalProjectsCount = (data[0]['notificationcount']);
        this.notificationsLoading = false;
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

  showLeaveAprv() {
    document.getElementById('prj-aprv-list').classList.add('d-none');
    document.getElementById('leave-aprv-list').classList.remove('d-none');

  }

  titleapp() {
    document.getElementById("titlepro").style.display = "block";
    document.getElementById("titleinfo").style.display = "none";
    document.getElementById("titlereq").style.display = "none";
    document.getElementById("titleres").style.display = "none";
  }
  titleinfo() {
    document.getElementById("titleinfo").style.display = "block";
    document.getElementById("titlepro").style.display = "none";
    document.getElementById("titlereq").style.display = "none";
    document.getElementById("titleres").style.display = "none";
  }
  titlereq() {
    document.getElementById("titlereq").style.display = "block";
    document.getElementById("titlepro").style.display = "none";
    document.getElementById("titleinfo").style.display = "none";
    document.getElementById("titleres").style.display = "none";
  }
  titleres() {
    document.getElementById("titleres").style.display = "block";
    document.getElementById("titlepro").style.display = "none";
    document.getElementById("titleinfo").style.display = "none";
    document.getElementById("titlereq").style.display = "none";
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
    this.router.navigate(["Notifications"]);
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');

    document.getElementById("leave_requisition_slider_bar").classList.remove("kt-quick-panel--on");
    $('#leave_requisition_slider_bar').removeClass('open_requisition_sidebar_info');
    this.clear_requisitionForm_Info();

    document.getElementById("leave_requisition_form_slider_bar").classList.remove("kt-quick-panel--on");
    $('#leave_requisition_form_slider_bar').removeClass('open_requisition_sidebar_info');


    document.getElementById("acceptbar").classList.remove("kt-quick-panel--on");
    this.approverComments=null;

  }

  LeaveDetail: any;
  // myLeaveDetails:any;
  empInformation:any;
  empLeaveDetails:any;
  managerApproval:any;
  hrApproval:any;

  currentReqIndex: number = -1;
  currentResIndex:number=-1;
  notProvided:boolean=false;
  open_leave_requisition(index, submitby, leavecode) {
    this.currentReqIndex = index;
    this.approvalservice.GetEmployeeLeaveDetail(submitby, leavecode).subscribe((data) => {
      this.LeaveDetail = JSON.parse(data[0]['LeaveDetails_json']);
      this.lv_startdate=moment(this.LeaveDetail[0].VacFrom);
      this.lv_enddate=moment(this.LeaveDetail[0].VacTo);
      console.log(this.LeaveDetail, "leavedetailss")
    });
    $('#leave_requisition_slider_bar').addClass('open_requisition_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  }



  close_requisition_Info() {
    this.clear_requisitionForm_Info();
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("leave_requisition_slider_bar").classList.remove("kt-quick-panel--on");
    $('#leave_requisition_slider_bar').removeClass('open_requisition_sidebar_info');
  }


  clear_requisitionForm_Info(){
    this.currentReqIndex=-1;
    this.LeaveDetail=null;
    this.lv_startdate=null;
    this.lv_enddate=null;
    this.aprv_cmts=null;
    this.notProvided=false;
    this.leaveDecision=undefined;
  }


  showPrjAprv(){
    document.getElementById('prj-aprv-list').classList.remove('d-none');
    document.getElementById('leave-aprv-list').classList.add('d-none');
  }


  // leaveform(index,currentuser,leavecode){

  //   this.currentResIndex=index;



  //   this.approvalservice.GetEmployeeLeaveDetail(currentuser, leavecode).subscribe((data) => {
  //       console.log("responssesse:",data);
  //       // this.myLeaveDetails=JSON.parse(data[0].LeaveResponsedetails);
  //       // console.log("leave deatils asdf:",this.myLeaveDetails);

  //     });

  //   document.getElementById("rightbar-overlay").style.display = "block";
  //   document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  //   document.getElementById("leave_requisition_form_slider_bar").classList.add("kt-quick-panel--on");
  //   $('#leave_requisition_form_slider_bar').addClass('open_requisition_sidebar_info');
  // }



  viewLeaveResponseDetails(index:number,leaveCode:string,requestType:string){
    this.currentResIndex=index;
    this.approvalObj.Emp_no=this.Current_user_ID;
    this.approvalObj.Leave_Code=leaveCode;
    this.approvalObj.Request_type=requestType;

    this.approvalservice.NewGetEmployeeLeaveResponse(this.approvalObj).subscribe((res:any)=>{
            console.log('NewGetEmployeeLeaveResponse  data: ',res);
             if(res){
              this.empInformation=JSON.parse(res[0].EmpInformation);
              this.empLeaveDetails=JSON.parse(res[0].EmpLeaveDetails);

              const mngAprv=JSON.parse(res[0].ManagerApproval);
              if(mngAprv&&mngAprv.length>0){
                 this.managerApproval=mngAprv[0];
                 this.managerApproval.duration=Math.abs(moment(mngAprv[0].Start_Date).diff(moment(mngAprv[0].End_Date),'days'))+1;
              }

              const hrAprvl=JSON.parse(res[0].HRApproval);
              if(hrAprvl&&hrAprvl.length>0){
                  this.managerApproval=hrAprvl[0];
                  this.hrApproval=hrAprvl[1];
                  this.managerApproval.duration=Math.abs(moment(this.managerApproval.Start_Date).diff(moment(this.managerApproval.End_Date),'days'))+1;
                  this.hrApproval.duration=Math.abs(moment(this.hrApproval.Start_Date).diff(moment(this.hrApproval.End_Date),'days'))+1;
              }
              else
              this.hrApproval=null;



                console.log('managerApproval:',this.managerApproval);
                console.log('hrApproval:',this.hrApproval);
             }
    });

    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("leave_requisition_form_slider_bar").classList.add("kt-quick-panel--on");
    $('#leave_requisition_form_slider_bar').addClass('open_requisition_sidebar_info');
  }


  close_requisition_form() {
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("leave_requisition_form_slider_bar").classList.remove("kt-quick-panel--on");
    $('#leave_requisition_form_slider_bar').removeClass('open_requisition_sidebar_info');
    this.currentResIndex=-1;
  }

  leave_Requests: any = []
  newNotificationLeaveRequests() {
    this.notificationsLoading = true;
    this.service.GetEmployeeLeaveRequests(this.Current_user_ID).subscribe((data) => {
      this.leave_Requests = JSON.parse(data[0]['LeaveRequests_json']);
      this.notificationsLoading = false;
      console.log(this.leave_Requests, "_newNotificationLeaveRequest");
    });

  }



  Leave_code: any = [];
  _newNotificationLeave: any = [];
  newNotificationLeave() {
    this.notificationsLoading=true;
    this.service.GetEmployeeLeaveResponses(this.Current_user_ID).subscribe((data) => {
      this.notificationsLoading=false;
      this._newNotificationLeave = JSON.parse(data[0]['LeaveResponses_json']);
      console.log(this._newNotificationLeave, '+++++++++++++++++++++++++ ')
      if(this._newNotificationLeave){
        const lv_codes=Array.from(new Set(this._newNotificationLeave.map(_leave=>_leave.Leave_Code)));
        this._newNotificationLeave=lv_codes.map((_lc)=>this._newNotificationLeave.find(lobj=>lobj.Leave_Code==_lc));
      }
    });
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
console.log( this._NotificationActivity," this._NotificationActivity")



        //Emp
        if (this.selectedItem_Emp.length == 0) {
          this.EmpCountInFilter = JSON.parse(data[0]['Employee_json']);
        }
        else {
          let _empjsonnew=JSON.parse(data[0]['Employee_json']);

// new
          let _updateddata=_empjsonnew.filter(item=>item.Emp_No==this.selectedItem_Emp[0][0].Emp_No);
          if(_updateddata.length>0){
              _updateddata[0].checked=true;
              this.EmpCountInFilter = _updateddata;
          }
          else if(_updateddata.length==0){
             this.EmpCountInFilter=_empjsonnew;
             this.selectedItem_Emp.length=0;
          }
// new

        }
         //Request
         if (this.selectedItem_Request.length == 0) {
          this.RequestCountFilter = JSON.parse(data[0]['Request_json']);
        }
        else {
          // this.RequestCountFilter = this.selectedItem_Request[0];


// new
          const reqjsonnew=JSON.parse(data[0]['Request_json']);
          let _updateddata=reqjsonnew.filter(item=>item.Name==this.selectedItem_Request[0][0].Name);
          if(_updateddata.length>0){
             _updateddata[0].checked=true;
             this.RequestCountFilter=_updateddata;
          }
          else if(_updateddata.length==0){
             this.RequestCountFilter=reqjsonnew;
             this.selectedItem_Request.length=0;
          }
// new



        }
        //Type
        if (this.selectedItem_Type.length == 0) {
          this.TypeContInFilter = JSON.parse(data[0]['ProjectType_json']);
        }
        else {
          // this.TypeContInFilter = this.selectedItem_Type[0];

// new
          const prjtypejson=JSON.parse(data[0]['ProjectType_json']);
          let _updateddata=prjtypejson.filter(item=>item.Block_No==this.selectedItem_Type[0][0].Block_No);
          if(_updateddata.length>0){
             _updateddata[0].checked=true;
             this.TypeContInFilter=_updateddata;
          }
          else if(_updateddata.length==0){
             this.TypeContInFilter=prjtypejson;
             this.selectedItem_Type.length=0;
          }

// new



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



        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
          && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
          this.edited = false;
        }
        else {
          this.edited = true;
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
    debugger
    if (this.selectAllCheckbox) {
      this.selectedItems = [...this._NotificationActivity];

    } else {
      this.selectedItems = this.selectedItems.filter(item => !this._NotificationActivity.includes(item));
    }
    console.log(this.selectedItems,"all");
  }



//   select(ev,item){

//     if(ev.target.checked==false){
//       // const checkbox = document.getElementById('snocheck') as HTMLInputElement;
//       // checkbox.checked = false;
//     }
//     else if(ev.target.checked==true){



//     //   // Assuming you have checkboxes with a common class name 'checkbox'
//     //   const checkboxes = document.querySelectorAll('.form-check-input');   // this includes both subcheckboxes + maincheckbox.
//     //   const selectAllCheckbox = document.getElementById('snocheck') as HTMLInputElement;  // maincheckbox

//     //   // Add event listeners to each checkbox
//     //   checkboxes.forEach((checkbox: HTMLInputElement) => {
//     //     checkbox.addEventListener('change', updateSelectAllCheckbox);
//     //   });

//     //   // Function to update the "Select All" checkbox state
//     //   function updateSelectAllCheckbox() {
//     //     const allChecked = Array.from(checkboxes).every((checkbox: HTMLInputElement) => checkbox.checked);
//     //     selectAllCheckbox.checked = allChecked;
//     //   }

//     //   // Add event listener to the "Select All" checkbox
//     //   selectAllCheckbox.addEventListener('change', toggleAllCheckboxes);

//     //   // Function to toggle the state of all checkboxes based on the "Select All" checkbox
//     //   function toggleAllCheckboxes() {
//     //     const isChecked = selectAllCheckbox.checked;
//     //     checkboxes.forEach((checkbox: HTMLInputElement) => {
//     //       checkbox.checked = isChecked;
//     //     });
//     // }
//     }

//   const checkbox = ev.target as HTMLInputElement;
//   if (checkbox.checked) {
//     this.selectedItems.push(item);
//   } else {
//     const index = this.selectedItems.findIndex((selectedItem) => selectedItem === item);
//     if (index > -1) {
//       this.selectedItems.splice(index, 1);
//     }
//   }
//   console.log(this.selectedItems,"single");
// }


select(ev,item){

   if(ev.target.checked)
   {  // select
      this.selectedItems.push(item);
      if(this.selectedItems.length==this._NotificationActivity.length){
        this.selectAllCheckbox=true;
      }
      else
      this.selectAllCheckbox=false;
   }
   else
   {   // unselect
    const index = this.selectedItems.findIndex((selectedItem) => selectedItem === item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
    this.selectAllCheckbox=false;
   }

   console.log("selected projects:",this.selectedItems);
}



isSelected(item: any): boolean {
  return this.selectedItems.includes(item);
}


prjtypeCount:number=-1;
reqtypeCount:number=-1;


acceptSelectedValues(_comments?:string) {

    console.log(this.selectedItems,"accept");

  if( this.selectedItems.length > 0){

    let withCmts=false;
    if(_comments&&_comments.trim()){
        this.selectedItems.forEach(ob=>ob.sameRemarks=_comments);
        withCmts=true;
    }

     this.approvalservice.NewUpdateAcceptApprovalsService(this.selectedItems).subscribe(data =>{
      console.log(data,"accept-data");
        const checkbox = document.getElementById('snocheck') as HTMLInputElement;
        checkbox.checked = false;
        this.notifyService.showSuccess("Project(s) approved successfully",'Success');

        this.applyFilters();

        this.selectedItems=[];
        this.selectedItem_Emp=[];
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
          && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
          this.edited = false;
        }
        else {
          this.edited = true;
        }



      if(withCmts){     // close the accept with comments sidebar if approving with comments is on.
          this.closeInfo();
      }


    });

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
        this.selectedItems=[];
        this.selectedItem_Emp=[];
        if (this.selectedItem_Type.length == 0 && this.selectedItem_Status.length == 0
          && this.selectedItem_Emp.length == 0 && this.selectedItem_Request.length==0) {
          this.edited = false;
        }
        else {
          this.edited = true;
        }

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

  dropdown = true;
  leavePanelTitle: string = 'Leave Approval';
  leavePanel: "REQUESTS" | "RESPONSES" = "REQUESTS";
  selectedLeaveApproval: string = '';
  selectedDropdown: string = 'none';

  changeLeavePanel(panel: "REQUESTS" | "RESPONSES") {
    this.leavePanel = panel;
    this.leavePanelTitle = panel === 'REQUESTS' ? 'Leave Requests' : 'Leave Responses';
    this.selectedDropdown = 'none';
    this.dropdown = true;
    this.isSelectedBlue = true;
  }

  isSelectedBlue: boolean = true;
   Leaveapprovaltab() {
    this.isSelectedBlue = false;
  }

  // leaveapp:"Project Approval"| "information"="Project Approval"
  // projectapp(app:"Project Approval"| "information"){
  //   this.leaveapp=app
  // }

//  leave requests approval start
leaveDecision:"APPROVE"|"APPROVEBUT"|"REJECTED"|undefined=undefined;
aprv_cmts:string|undefined;
lv_startdate:any;
lv_enddate:any;
previousCmts:any=[];
cmts_Loading:boolean=false;
today:Date=new Date();

onSubmitLRbtn(){debugger

  if(  (this.aprv_cmts&&this.aprv_cmts.trim())&&
       (this.leaveDecision=='APPROVEBUT'?(this.lv_startdate&&this.lv_enddate):true)
    ){
  this.notProvided=false;

  let type:any;
  let fr_date:string|undefined;
  let to_date:string|undefined;

  if(this.leaveDecision=='APPROVE'||this.leaveDecision=='APPROVEBUT')
  type='Approve';
  else if(this.leaveDecision=='REJECTED')
  type='Reject';


  if(this.leaveDecision=='APPROVE'||this.leaveDecision=='REJECTED'){
     fr_date=moment(this.LeaveDetail[0].VacFrom).format('YYYY-MM-DD');
     to_date=moment(this.LeaveDetail[0].VacTo).format('YYYY-MM-DD');
  }
  else if(this.leaveDecision=='APPROVEBUT'){
    fr_date=this.lv_startdate.format('YYYY-MM-DD');
    to_date=this.lv_enddate.format('YYYY-MM-DD');
  }


  this.approvalObj.Emp_no=this.Current_user_ID;
  this.approvalObj.Leave_Code=this.leave_Requests[this.currentReqIndex].Leave_Code.trim();
  this.approvalObj.Type=type;
  this.approvalObj.SNo=this.leave_Requests[this.currentReqIndex].Sno;
  this.approvalObj.FromDate=fr_date;
  this.approvalObj.ToDate=to_date;
  this.approvalObj.Remarks=this.aprv_cmts;
  try{
  this.approvalservice.approveLeaveRequest(this.approvalObj).subscribe((res:any)=>{
      console.log("approveleaveRequest:",res);
      if(res&&res.message){
           if(res.message=='Not Updated')
           this.notifyService.showError(res.message,'Failed');
           else{
               this.notifyService.showSuccess(res.message,'Success');
               this.close_requisition_Info();
               this.newNotificationLeaveRequests();
           }

      }
      else
      this.notifyService.showError('Something went wrong.','');
  });
   }catch(e){
        console.log('error after leave response submitted:',e);
        this.notifyService.showError('Something went wrong.','');
   }

  }
  else
  this.notProvided=true;

}

onDecisionChanged(decision:"APPROVE"|"APPROVEBUT"|"REJECTED"){
  this.leaveDecision=decision;
  this.lrprev_comments();
}

closeLeaveAprvlSec(){
  this.leaveDecision=null;
  this.aprv_cmts=null;
  this.lv_startdate=null;
  this.lv_enddate=null;
  this.previousCmts=[];
  this.cmts_Loading=false;
}






lrprev_comments()
{
    let aprvDto=new ApprovalDTO();
    aprvDto.Emp_no=this.Current_user_ID;
    aprvDto.Request_type=(this.leaveDecision=='APPROVE'||this.leaveDecision=='APPROVEBUT')?'Approved Leave':'Leave Rejected';
    this.cmts_Loading=true;
    this.approvalservice.NewGetLeaveComments(aprvDto).subscribe((res:any)=>{
     this.cmts_Loading=false;
     if(res)
     {
      this.previousCmts=JSON.parse(res.previousComments_JSON);
     }
    });
}

putCmts(cmt:string)
{
   if(!this.aprv_cmts)
      this.aprv_cmts='';
   this.aprv_cmts=this.aprv_cmts+cmt;
}


// leave requests approval end
onButtonClick(buttonId: string) {
  const elements = document.getElementsByClassName('btn-filtr');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
  }


  if(buttonId=='tot')
    document.getElementById('tot').classList.add('active');
  else if(buttonId=='inn')
    document.getElementById('inn').classList.add('active');
}

Team_Autho:any
Emp_No:any
Project_Code:any
LoadDocument1(Iscloud: boolean, FileName: string, url1: string, type: string, Submitby: string,Pcode:string,tauth:string,tresp:string) {
  debugger
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


URL_ProjectCode:any
projectInfo:any
projectCode:any
AuthorityEmpNo
Project_Code1:any
_day: any;
_month: any;
openPDF_Standards(standardid, emp_no, cloud, repDate: Date, proofDoc, type, submitby, pro_code) {
  debugger
  repDate = new Date(repDate);
  this.Project_Code1=pro_code
  let FileUrl: string;
  // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
  FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";


  let Day = repDate.getDate();
  let Month = repDate.getMonth() + 1;
  let Year = repDate.getFullYear();
  if (Month < 10) {
    this._month = '0' + Month;
  }
  else {
    this._month = Month;
  }
  if (Day < 10) {
    this._day = '0' + Day;
  }
  else {
    this._day = Day;
  }
  var date = this._month + "_" + this._day + "_" + repDate.getFullYear();

  if (cloud == false) {

    FileUrl = (FileUrl + emp_no + "/" + this.Project_Code1 + "/" + date + "/" + proofDoc);

    let name = "ArchiveView/" + standardid;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(FileUrl);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    proofDoc = proofDoc.replace(/#/g, "%23");
    proofDoc = proofDoc.replace(/&/g, "%26");
    // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&" + "filename=" + proofDoc + "&" + "type=" + type;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();

  }
  else if (cloud == true) {

    let FileUrl: string;
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (proofDoc.includes(FileUrl)) {
      FileUrl = proofDoc
    }
    else {
      let Day = repDate.getDate();
      let Month = repDate.getMonth() + 1;
      let Year = repDate.getFullYear();
      if (Month < 10) {
        this._month = '0' + Month;
      }
      else {
        this._month = Month;
      }
      if (Day < 10) {
        this._day = Day;
      }
      else {
        this._day = Day;
      }
      var date = this._day + "_" + this._month + "_" + repDate.getFullYear();


      FileUrl = (FileUrl + emp_no + "/" + this.Project_Code1 + "/" + date + "/" + proofDoc + "." + type);
    }

    let name = "ArchiveView/" + standardid;
    var rurl = document.baseURI + name;
    var encoder = new TextEncoder();
    let url = encoder.encode(FileUrl);
    let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    proofDoc = proofDoc.replace(/#/g, "%23");
    proofDoc = proofDoc.replace(/&/g, "%26");
    // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
    var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&" + "filename=" + proofDoc + "&" + "type=" + type;
    var myWindow = window.open(myurl, url.toString());
    myWindow.focus();
  }


}



// accept selected approvals with comments start.

approverComments:string;

submitAprvlsWithCmts(){
  if(this.approverComments&&this.approverComments.trim()){
    this.notProvided=false;
    this.acceptSelectedValues(this.approverComments);
  }
  else{
     this.notProvided=true;
  }

}

onAcceptWithCmtsBtnClicked(){
  document.getElementById("acceptbar").classList.add("kt-quick-panel--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
}








// accept selected approvals with comments end.

}
