import { Component, ElementRef, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am5 from "@amcharts/amcharts5";
import { Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/_Services/link.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import * as _ from 'underscore';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import * as moment from 'moment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
am4core.useTheme(am4themes_animated);
import Swal from 'sweetalert2';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { DatePipe } from '@angular/common';
// import { getDateMeta } from '@fullcalendar/angular';
import { FormControl } from '@angular/forms';
import { data } from 'jquery';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { Hierarchy } from '@amcharts/amcharts5/.internal/charts/hierarchy/Hierarchy';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
// import 'moment/locale/ja';
// import 'moment/locale/fr';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css'],
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

export class MoreDetailsComponent implements OnInit {
  @ViewChild('colp') colpRef!: ElementRef; // Reference to the collapsible content
  
  constructor(private route: ActivatedRoute,
    public _LinkService: LinkService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    public approvalservice: ApprovalsService,
    private router: Router,
    public service: ProjectTypeService,
    public _projectSummary: ProjectsSummaryComponent,
    private notifyService: NotificationService, public dateAdapter: DateAdapter<Date>,
    private dialog: MatDialog,
    public datepipe: DatePipe,
    public BsService: BsServiceService) {
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.objPortfolioDto = new PortfolioDTO();
  }

  projectCode: string;
  URL_ProjectCode: string
  IsData: string;
  _LinkSideBar: boolean = true;
  maxDuration: any;
  standardDuration: any;
  totalPercent: number = 1;
  SubmissionName: string;
  noMilestones: boolean = true;
  noFiles: boolean = true;
  noTimeline: boolean;
  noNotes: boolean = true;
  noMeeting: boolean = true;
  checked: any;
  totalSubtaskHours: any;
  actionResponsibles: any = [];
  ProjectStatus: string;
  ProjectPercentage: any;
  src: any;
  actionButton: boolean = false;
  darbutton: boolean = true;
  darList: any;
  disablePreviousDate = new Date();
  disablePreviousDate1 = new Date();
  todayDate = new Date();
  timedata: any = [];
  EndDate1: any = new Date();
  commentSelected: string;
  comments: string;
  selectedType: string;
  date = new Date();
  dateF = new FormControl(new Date());
  dateR = new FormControl(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  today: number;
  currenthours: any;
  currentminutes: any;
  Summarytype: string;

  approvalObj = new ApprovalDTO();
  requestDate: any;
  requestDeadline: any;
  requestType: any;
  approvalEmpId: any;
  requestComments: any;
  requestDetails: any;
  exist_comment: any[] = [];
  date11: any;

  comments_list: any;
  reject_list: any;
  rejectType: any;
  initials1: any;
  Submitted_By: string;
  prviousCommentsList: any;
  noRejectType: boolean = false;
  transfer_json: any;
  revert_json: any;
  forwardType: string;
  pro_act: boolean = true;
  newResponsible: any;
  new_deadline: any;
  new_cost: any;
  hold_upto: any;
  reason: any;
  rejectype: any;
  forwardto: any;
  forwardfrom: any;
  completedoc: any;
  complete_List: any;
  iscloud: any;
  url: any;
  previouscoments: boolean = false;
  isHierarchy: boolean = false;
  rejDesc: any;
  rejectcommentsList: any;
  totalHours: any;
  totalRecords: any;
  _CurrentpageRecords: any;
  CurrentPageNo: number = 1;
  darArray: any = [];
  meetingList: any = [];
  meeting_arry: any = [];
  meetinglength: any;
  workdes: string;
  starttime: any;
  endtime: any;
  timecount: any;
  current_Date: any = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
  releaseDate: any;
  objProjectDto: ProjectDetailsDTO;
  actionCode: string;
  actionName: string;
  actionStartdate: any = new Date();
  actionenddate: any = new Date();
  minutes: any;
  hours: any;
  temp: any;

  timeList: any;
  starttimearr: any = [];
  endtimearr: any = [];
  bol: boolean = true;
  lastEndtime: any;
  s_ind: number;
  e_ind: number;
  timedata1: any;
  stdata: any;
  etdata: any;
  _Subtaskname: string;
  Sub_ProjectCode: string;
  Sub_StartDT: Date;
  Sub_EndDT: Date;
  Sub_Autho: string;
  Sub_Status: string;
  _remarks: string = "";
  Sub_Desc: string;
  _inputAttachments: string;
  _inputAttachments2: string;

  ObjSubTaskDTO: SubTaskDTO;
  _MasterCode: string;
  List: any;
  ProjectName: string;
  Description: string;
  StartDate: string;
  EndDate: string;
  Cost: string;
  Owner: string;
  Client: string;
  Responsible: string;
  Subtask_Res_List: any;
  Authority: string;
  Coordinator: string;
  Informer: string;
  Support: string;
  ProjectBlock: string;
  dateResut: any;
  Difference_In_Days: number;
  date1: any;
  date2: any;
  Category: any;
  Project_Responsible;
  InitR: string;
  InitOwn: string;
  InitAut: string;
  InitCoor: string;
  InitInformer: string;
  InitSupp: string;
  Responsible_EmpNo: string;
  Authority_EmpNo: string;
  Owner_EmpNo: string;
  Coor_EmpNo: string;
  Inform_EmpNo: string;
  Support_EmpNo: string;
  ProjectInfo_List: any;
  StandardDuration: any;
  ProjectBlockName: any;
  Status: any;
  Pid: number;
  Comp_No: string;
  Employee_List: any;
  Category_List: any;
  Client_List: any;
  _portfoliolist: any;
  portslength: any;
  selectedcategory: any;
  selectedclient: any;
  selectedsupport: any;
  selectedOwnResp: any;
  Delaydays: any;
  supp: boolean = false;
  nonRacisList: any;
  hierarchydropdown: any;
  RACISList: any;
  responsible_dropdown: any;
  owner_dropdown: any;
  Projectdeadline: any;
  sdate: any;
  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  _JsonString: string;
  Selected_Projectcode: string;
  Memos_List: any;
  _ActualMemoslist: any;
  _totalMemos: number;
  _mappedMemos: number;
  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;
  DarGraphDataList: any;
  _displayProjName: string;
  _MemosSubjectList: any;
  _MemosNotFound: string;
  _DBMemosIDList: any;
  _CommentsList: any;
  _EvenRecordsList: any
  commentsLength: number;
  dmslist: number;
  Current_user_ID: string;
  memoId: any;
  AttachmentList: any;
  action_attachment: any;
  attachmentlength: any;
  TotalDocs: number;

  _day: any;
  _month: any;
  Subtask_List: any;
  underapproval_list: any;
  Inprocess_List: any;
  Delay_List: any;
  Reject_List: any;
  Cancel_List: any;
  CompletedList: any;
  inProcessCount: number;
  underapprovalcount: number;
  delaycount: number;
  rejectcount: number;
  cancelcount: number;
  completedCount: number;
  subTaskCount: number;
  empDropdown: any = [];
  dropdownSettings_Employee = {};
  selectedEmp: string;
  filteredemp: boolean = false;
  darArr: any;
  RACIS: any = [];
  racislength: any;
  raciPeople: any;
  action_count: any;
  selectedEmployee: string;
  selectedAction: any;
  Editbutton: boolean;
  _modelProjectName: string;
  _modelProjDesc: string;
  _ProjDeadline: string;
  action_enddate: string;
  action_startdate: string;
  action_remarks: string;
  alloc_remarks: string;
  _modelProjAlloc: number = 0;
  editduration: boolean = false;
  subduration: any;
  extend_remarks: string;
  editDeadline: boolean = false;
  editCategory: boolean = false;
  editClient: boolean = false;
  editSupport: boolean = false;
  editprojectOwner: boolean = false;
  editprojectResponsible: boolean = false;
  editActionOwner: boolean = false;
  editActionResp: boolean = false;

  actendedit: boolean = false;
  actnum: any;
  actCode: string;
  actstartedit: boolean = false;
  edithold: boolean = false;
  editRelease: boolean = false;
  editcancel: boolean = false;
  editnewrelease: boolean = false;
  editholdrelease: boolean = false;
  holdDate: any;
  release_date: any = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  transferproject: boolean = false;
  _Message: any;

  Holddate: string;
  hold_remarks: string;
  minhold: any = new Date();
  minDate: any = new Date();
  maxhold: any = new Date();
  selectedFile: any = null;
  Sub_ProjectName: string = "";
  _Description: string;
  _EndDate: Date = null;
  _StartDate: Date = null;
  selected_Employee = [];
  selectedEmpNo: string = null;
  progress: any;
  coresecondary: boolean = true;
  deadlineCount: any;
  selectedEmp_No: string = null;
  transfer_remarks: string;
  TransDate: string;
  new_Res: string;

  _LinkSideBar1: boolean = true;
  objPortfolioDto: PortfolioDTO;
  _portfolioLength: any;
  dropdownSettings_Portfolio: IDropdownSettings = {};
  Empty_portDropdown: any;
  _SelectedPorts: any;
  Port_Id: number;
  selectedportID: any;
  noPort: string;
  ngDropdwonPort: any;
  deletedBy: string;
  portfolioName: string;
  totalPortfolios: number;
  portfolioId: any; 
  _portfoliosList: any;
  action_details: any;
  approve_details: any;
  _fullname: any;
  isAction:boolean = false;
  showContent = false;
  

  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
    this.disablePreviousDate1.setDate(this.disablePreviousDate1.getDate());
    //Fetching URL ProjectCode
    this.route.paramMap.subscribe(params => {
      var pcode = params.get('projectcode');
      this.URL_ProjectCode = pcode;
      this._MasterCode = pcode;
    });

    this.getRACISandNonRACIS();
    this.gethierarchy();
    this.getusername();
    this.getholdate();
    this.getRejectType();
    this.getReasonforholdandRejected();
    this.GetProjectDetails();
    this.GetSubtask_Details();
    this.getapproval_actiondetails();
    this.dar_details();
    this.getResponsibleActions();
    this.getapprovalStats();
    this.getdeadlinecount();
    this.GetDMS_Memos();
    this.GetprojectComments();
    this.GetmeetingDetails();
    // //this.french();

    this.EndDate1 = moment(new Date()).format("YYYY/MM/DD");
    this.minDate.setDate(this.minDate.getDate());
    this.minhold.setDate(this.minhold.getDate() + 1);
    this.maxhold.setDate(this.minhold.getDate() + 90);

    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        let projectType: any = (data[0]['ProjectType']);
        this.IsData = (data[0]['DARGraphCalculations_Json']);
        if (projectType == '001' || projectType == '002') {
          this.CoreSecodaryCharts();
        }
        else if (projectType != '001' || projectType != '002') {
          this.OtherCharts();
        }
      });
    //uploaded file name
    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });
    this.current_Date = moment(new Date()).format("MM/DD/YYYY");
    this.release_date = moment(new Date().getTime() + 24 * 60 * 60 * 1000).format("MM/DD/YYYY");
    this.currenthours = this.date.getHours();
    this.currentminutes = this.date.getMinutes();

    this.router.navigate(["./MoreDetails", this.URL_ProjectCode]);

  }

  getusername() {
    this.service._GetUserName(this.Current_user_ID).subscribe(data => {
      this._fullname = data['Emp_First_Name'];
    });
  }

  // french() {
  //   this._locale = 'fr';
  //   this._adapter.setLocale(this._locale);
  // }

  mainDeadline:any;
  mainowner:any;
  mainResp:any;
  mainAutho:any;
  mainMastercode:any;
  
  getapproval_actiondetails() {
    this.approvalObj.Project_Code = this.URL_ProjectCode;

    this.approvalservice.GetAppovalandActionDetails(this.approvalObj).subscribe(data => {
      // console.log(data,"appact");
      if (data[0]['actiondetails'] != '[]' || data[0]['approvaldetails'] != '[]') {
        if (data[0]['actiondetails'] != '[]'){
          this.action_details = JSON.parse(data[0]['actiondetails']);
          this.mainDeadline = this.action_details[0]['mainDeadline'];
          this.mainowner = this.action_details[0]['mainowner'];
          this.mainResp = this.action_details[0]['mainResp'];
          this.mainAutho = this.action_details[0]['mainAutho'];
          this.mainMastercode = this.action_details[0]['Master_Code'];
          console.log(this.action_details,"actionss")
          this.isAction=true;
        }
        if (data[0]['approvaldetails'] != '[]')
          this.approve_details = JSON.parse(data[0]['approvaldetails']);

        console.log(this.action_details,"details");
      }
    });
  }

  moreDetails(pcode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl, pcode);
    myWindow.focus();
  }


  orgValueChange(val) {
    this.current_Date = moment(val.value).format("MM/DD/YYYY");
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

  typeChange() {
    this.comments = null;
    this.commentSelected = null;
    this.rejectType = null;
    this.noRejectType = false;
  }

  singleapporval_json: any[] = [];
  standardDoc:any;
  sidno:any;
  emp:any;
  repdate:any;
  contenttype: any;
  submitby:any;

  getapprovalStats() {
    this.approvalEmpId = null;
    this.approvalObj.Project_Code = this.URL_ProjectCode;

    this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
      this.requestDetails = data as [];
      console.log(this.requestDetails, "approvals");
      if (this.requestDetails.length > 0) {
        this.requestType = (this.requestDetails[0]['Request_type']);
        this.forwardType = (this.requestDetails[0]['ForwardType']);
        this.requestDate = (this.requestDetails[0]['Request_date']);
        this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
        this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
        this.requestComments = (this.requestDetails[0]['Remarks']);
        this.new_deadline = (this.requestDetails[0]['new_deadline']);
        this.new_cost = (this.requestDetails[0]['new_cost']);
        this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
        this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
        this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
        const fullName = this.Submitted_By.split(' ');
        this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        this.initials1 = this.initials1.toUpperCase();
        this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
        this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
        this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
        this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
        console.log(this.singleapporval_json, "s-1");
        if (this.prviousCommentsList.length > 1) {
          this.previouscoments = true;
        }
        else {
          this.previouscoments = false;
        }
        // this.newResponsible = (this.transfer_json[0]['newResp']);
        if (this.requestType == 'Project Forward') {
          this.newResponsible = (this.transfer_json[0]['newResp']);
          this.forwardto = (this.transfer_json[0]['Forwardedto']);
          this.forwardfrom = (this.transfer_json[0]['Forwardedfrom']);
        }
        if (this.requestType == 'Revert Back') {
          this.newResponsible = (this.revert_json[0]['newResp']);
          this.forwardto = (this.revert_json[0]['Forwardedto']);
          this.forwardfrom = (this.revert_json[0]['Forwardedfrom']);
        }
        if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved') {
          this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
          if(this.complete_List !="" && this.complete_List !=undefined && this.complete_List !=null){
            this.completedoc = (this.complete_List[0]['Sourcefile']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
            this.url = (this.complete_List[0]['CompleteProofDoc']);
          }
          console.log(this.complete_List, 'complete');

        }
        if (this.requestType == 'Task Complete') {
          this.complete_List = JSON.parse(this.requestDetails[0]['standardDoc']);
          console.log(this.complete_List, "standard")
          this.completedoc = (this.complete_List[0]['Proofdoc']);
          this.sidno = (this.complete_List[0]['StandardId']);
          this.emp = (this.complete_List[0]['Emp_No']);
          this.repdate = (this.complete_List[0]['Reportdate']);
          this.submitby = (this.complete_List[0]['SubmittedBy']);
          this.contenttype = (this.complete_List[0]['contenttype']);
          this.iscloud = (this.complete_List[0]['IsCloud']);
        }
      }
      // console.log(this.requestDetails, 'transfer');
    });
  }

  getholdate() {
    this.service.getHoldDatebyProjectcode(this.URL_ProjectCode).subscribe((data) => {
      this.hold_upto = data["Project_holddate"];
      // this.hold_upto=moment(this.hold_upto).format("DD-MM-YYYY");
    });
  }


  gethierarchy() {
    this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID, this.URL_ProjectCode).subscribe((data) => {
      if (data['message'] == '1') {
        this.isHierarchy = true;
      }
      else {
        this.isHierarchy = false;
      }
      this.showContent = true;
    });
  }

  getReasonforholdandRejected() {
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalservice.GetHoldDate(this.approvalObj).subscribe((data) => {
      this.reason = data["Reason"];
    });
  }

  activity: any;
  lastactivity: any;
  send_from: any;
  rejectactivity: any;

  getRejectType() {
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalservice.GetRejecttype(this.approvalObj).subscribe((data) => {
      this.activity = data[0]["activity"];
      this.send_from = data[0]["sendFrom"];
      this.rejectactivity = data[0]["rejectactivity"];
      this.lastactivity = JSON.parse(data[0]["lastactivity"]);
      console.log(this.activity, this.lastactivity)
    });
  }


  updateReleaseDate() {
    if (this.release_date == null || this.release_date == 'Invalid date') {
      this.notifyService.showError("Please enter valid date", "Failed");
      return false;
    }
    else {
      this.release_date = this.datepipe.transform(this.release_date, 'MM/dd/yyyy');
      this.holdDate = moment(this.release_date).format("DD-MM-YYYY")
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.hold_date = this.release_date;
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Remarks = this.hold_remarks;

      this.approvalservice.UpdateReleaseDate(this.approvalObj).subscribe((data) => {
        this.close_space();
        this._Message = (data['message']);
        if (this._Message == '1') {
          this.notifyService.showSuccess("Project release date updated", "Success");
          this.notifyService.showInfo("Project will be released on " + this.holdDate, "Note");
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.getholdate();
          this.getRejectType();
        }
        else if (this._Message == '2' || this._Message == '0') {
          this.notifyService.showError("Project release date not updated", "Failed");
        }
      });
    }
    this.Clear_Feilds();

    console.log(this.approvalObj, this.holdDate, "hold")

  }

  rejectlength: any;

  rejectApproval() {
    this.noRejectType = false;
    this.reject_list.forEach(element => {
      if (this.rejectType == element.TypeID) {
        this.rejDesc = element.Reject_Description;
      }
    });
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.rejectType = this.rejectType;
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    if (this.requestType == 'New Project')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'New Project Reject Release')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'New Project Hold')
      this.approvalObj.Status = 'New Project Rejected';
    else if (this.requestType == 'Project Complete')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Project Complete Reject Release')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Project Complete Hold')
      this.approvalObj.Status = 'Project Complete Rejected';
    else if (this.requestType == 'Deadline Extend')
      this.approvalObj.Status = 'Rejected';
    else if (this.requestType == 'Deadline Extend Hold')
      this.approvalObj.Status = 'Rejected';
    else if (this.requestType == 'Standardtask Enactive')
      this.approvalObj.Status = 'Enactive-Reject';
    else if (this.requestType == 'Project Forward')
      this.approvalObj.Status = 'Forward Reject';
    else if (this.requestType == 'Project Hold')
      this.approvalObj.Status = 'Project Hold Reject';
    else if (this.requestType == 'Revert Back')
      this.approvalObj.Status = 'Revert Reject';
    else if (this.requestType == 'Task Complete')
      this.approvalObj.Status = 'Task-Reject';
    else {
      this.approvalObj.Status = 'Rejected';
    }

    this.approvalservice.GetRejectComments(this.approvalObj).subscribe(data => {
      this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);
      this.rejectlength = this.rejectcommentsList.length;
    });
  }


  submitApproval() {

    // if (this.requestType != 'Project Forward' && this.requestType!='Task Complete' && this.requestType!='Revert Back') {
    //   if (this.selectedType == '1') {
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     this.approvalObj.Request_type = this.requestType;
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }
    //     this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
    //       subscribe((data) => {
    //         this._Message = (data['message']);
    //         if (this._Message == 'Not Authorized' || this._Message == '0') {
    //           this.notifyService.showError("project not approved", 'Failed.');
    //         }
    //         else {
    //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
    //           this.GetProjectDetails();
    //           this.GetSubtask_Details();
    //           this.getapprovalStats();
    //           this.GetprojectComments();
    //         }
    //         this.Clear_Feilds();
    //       });
    //   }
    //   else if (this.selectedType == '2') {
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     this.approvalObj.Request_type = this.requestType;
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }

    //     this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
    //       subscribe((data) => {
    //         this._Message = (data['message']);
    //         if (this._Message == 'Not Authorized' || this._Message == '0') {
    //           this.notifyService.showError("project not approved", 'Failed.');
    //         }
    //         else {
    //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
    //           this.GetProjectDetails();
    //           this.GetSubtask_Details();
    //           this.getapprovalStats();
    //           this.GetprojectComments();
    //         }
    //         this.Clear_Feilds();
    //       });
    //   }
    //   else if (this.selectedType == '3') {
    //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
    //       this.noRejectType = true;
    //       this.notifyService.showError("Please select Reject Type", "Failed");
    //       return false;
    //     }
    //     else {
    //       this.approvalObj.Emp_no = this.Current_user_ID;
    //       this.approvalObj.Project_Code = this.URL_ProjectCode;
    //       this.approvalObj.Request_type = this.requestType;
    //       this.approvalObj.rejectType = this.rejectType;
    //       this.approvalObj.Remarks = this.comments;

    //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
    //         subscribe((data) => {
    //           this._Message = (data['message']);
    //           if (this._Message == 'Not Authorized' || this._Message == '0') {
    //             this.notifyService.showError("project not approved", 'Failed.');
    //           }
    //           else {
    //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
    //             this.GetProjectDetails();
    //             this.GetSubtask_Details();
    //             this.getapprovalStats();
    //             this.GetprojectComments();
    //             this.getRejectType();
    //             this.getReasonforholdandRejected();
    //           }
    //           this.Clear_Feilds();
    //         });
    //     }
    //   }
    //   document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("moredet").classList.remove("position-fixed");
    //   document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("rightbar-overlay").style.display = "none";
    // }
    // else if (this.requestType == 'Project Forward' && this.forwardType != 'T') {
    //   if (this.selectedType == '3') {
    //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
    //       this.noRejectType = true;
    //       this.notifyService.showError("Please select Reject Type", "Failed");
    //       return false;
    //     }
    //     else {
    //       this.approvalObj.Emp_no = this.Current_user_ID;
    //       this.approvalObj.Project_Code = this.URL_ProjectCode;
    //       this.approvalObj.Request_type = this.requestType;
    //       this.approvalObj.rejectType = this.rejectType;
    //       this.approvalObj.Remarks = this.comments;

    //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
    //         subscribe((data) => {
    //           this._Message = (data['message']);
    //           if (this._Message == 'Not Authorized') {
    //             this.notifyService.showError("project not approved.", 'you are not authorized to approve the project!!')
    //             this.notifyService.showInfo('to approve the project', 'Please contact the Project Owner');
    //           }
    //           else {
    //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
    //             this.GetProjectDetails();
    //             this.GetSubtask_Details();
    //             this.getapprovalStats();
    //             this.GetprojectComments();
    //             this.getRejectType();
    //             this.getReasonforholdandRejected();
    //           }
    //           this.Clear_Feilds();
    //         });
    //     }
    //   }
    //   else if (this.selectedType == '1') {
    //     this.Employee_List.forEach(element => {
    //       if (element.Emp_No == this.newResponsible) {
    //         this.new_Res = element.DisplayName;
    //       }
    //     });
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Responsible = this.newResponsible;
    //     this.approvalObj.deadline = this.requestDeadline;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }

    //     this.approvalservice.InsertForwardApprovalService(this.approvalObj).subscribe(data => {
    //       this._Message = data['message'];

    //       if (this._Message == '1') {
    //         this.notifyService.showSuccess("Project will be forwarded to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Forwarded");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '2') {
    //         this.notifyService.showSuccess("Project Forward request sent to -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Forward under approval!");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '4' || this._Message == null) {
    //         this.notifyService.showError("Please contact Support.", "Project not forwarded!");
    //       }
    //     });
    //     this.closeInfo();
    //   }
    //   this.closeInfo();
    //   document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("moredet").classList.remove("position-fixed");
    //   document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("rightbar-overlay").style.display = "none";
    // }
    // else if (this.requestType == 'Project Forward' && this.forwardType == 'T') {
    //   if (this.selectedType == '3') {
    //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
    //       this.noRejectType = true;
    //       this.notifyService.showError("Please select Reject Type", "Failed");
    //       return false;
    //     }
    //     else {
    //       this.approvalObj.Emp_no = this.Current_user_ID;
    //       this.approvalObj.Project_Code = this.URL_ProjectCode;
    //       this.approvalObj.Request_type = this.requestType;
    //       this.approvalObj.rejectType = this.rejectType;
    //       this.approvalObj.Remarks = this.comments;

    //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
    //         subscribe((data) => {
    //           this._Message = (data['message']);
    //           if (this._Message == 'Not Authorized') {
    //             this.notifyService.showError("project not approved", 'Failed.');
    //           }
    //           else {
    //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
    //             this.GetProjectDetails();
    //             this.GetSubtask_Details();
    //             this.getapprovalStats();
    //             this.GetprojectComments();
    //             this.getRejectType();
    //             this.getReasonforholdandRejected();
    //           }
    //           this.Clear_Feilds();
    //         });
    //     }
    //   }
    //   else if (this.selectedType == '1') {
    //     this.Employee_List.forEach(element => {
    //       if (element.Emp_No == this.newResponsible) {
    //         this.new_Res = element.DisplayName;
    //       }
    //     });
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Responsible = this.newResponsible;
    //     this.approvalObj.deadline = this.requestDeadline;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }

    //     this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
    //       this._Message = data['message'];

    //       if (this._Message == '1') {
    //         this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Transferred");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '2') {
    //         this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '4' || this._Message == null || this._Message == '0') {
    //         this.notifyService.showError("Please contact Support.", "Project Not Transferred!");
    //       }
    //     });
    //     this.closeInfo();
    //   }
    //   document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("moredet").classList.remove("position-fixed");
    //   document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("rightbar-overlay").style.display = "none";
    // }
    // else if (this.requestType == 'Task Complete') {
    //   if (this.selectedType == '1') {
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     this.approvalObj.Request_Date = this.requestDate;
    //     this.approvalObj.Request_type = this.requestType;
    //     this.approvalObj.rejectType = null;
    //     this.approvalObj.approvaltype = 'Accept';
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }
    //     this.approvalservice.InsertStandardApprovalService(this.approvalObj).
    //       subscribe((data) => {
    //         this._Message = (data['message']);
    //         if (this._Message == 'Not Authorized' || this._Message == '0') {
    //           this.notifyService.showError("project not approved", 'Failed.');
    //         }
    //         else {
    //           this.notifyService.showSuccess("Project Approved Successfully", this._Message);
    //           this.GetProjectDetails();
    //           this.GetSubtask_Details();
    //           this.getapprovalStats();
    //           this.GetprojectComments();
    //         }
    //         this.Clear_Feilds();
    //       });
    //   }
    //   else if (this.selectedType == '3') {
    //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
    //       this.noRejectType = true;
    //       this.notifyService.showError("Please select Reject Type", "Failed");
    //       return false;
    //     }
    //     else {
    //       this.approvalObj.Emp_no = this.Current_user_ID;
    //       this.approvalObj.Project_Code = this.URL_ProjectCode;
    //       this.approvalObj.Request_Date = this.requestDate;
    //       this.approvalObj.Request_type = this.requestType;
    //       this.approvalObj.rejectType = this.rejectType;
    //       this.approvalObj.Remarks = this.comments;
    //       this.approvalObj.approvaltype = 'Reject';

    //       this.approvalservice.InsertStandardApprovalService(this.approvalObj).
    //         subscribe((data) => {
    //           this._Message = (data['message']);
    //           if (this._Message == 'Not Authorized' || this._Message == '0') {
    //             this.notifyService.showError("project not approved", 'Failed.');
    //           }
    //           else {
    //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
    //             this.GetProjectDetails();
    //             this.GetSubtask_Details();
    //             this.getapprovalStats();
    //             this.GetprojectComments();
    //             this.getRejectType();
    //             this.getReasonforholdandRejected();
    //           }
    //           this.Clear_Feilds();
    //         });
    //     }
    //   }
    //   else if (this._Message == '4' || this._Message == null) {
    //     this.notifyService.showError("Please contact Support.", "Project Not Transferred!");
    //   }
    //   document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("moredet").classList.remove("position-fixed");
    //   document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("rightbar-overlay").style.display = "none";
    // }
    // else if (this.requestType == 'Revert Back'){
    //   if (this.selectedType == '3') {
    //     if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
    //       this.noRejectType = true;
    //       this.notifyService.showError("Please select Reject Type", "Failed");
    //       return false;
    //     }
    //     else {
    //       this.approvalObj.Emp_no = this.Current_user_ID;
    //       this.approvalObj.Project_Code = this.URL_ProjectCode;
    //       this.approvalObj.Request_type = this.requestType;
    //       this.approvalObj.rejectType = this.rejectType;
    //       this.approvalObj.Remarks = this.comments;

    //       this.approvalservice.InsertRejectApprovalService(this.approvalObj).
    //         subscribe((data) => {
    //           this._Message = (data['message']);
    //           if (this._Message == 'Not Authorized') {
    //             this.notifyService.showError("project not approved", 'Failed.');
    //           }
    //           else {
    //             this.notifyService.showSuccess(this._Message, "Rejected Successfully");
    //             this.GetProjectDetails();
    //             this.GetSubtask_Details();
    //             this.getapprovalStats();
    //             this.GetprojectComments();
    //             this.getRejectType();
    //             this.getReasonforholdandRejected();
    //           }
    //           this.Clear_Feilds();
    //         });
    //     }
    //   }
    //   else if (this.selectedType == '1') {
    //     this.Employee_List.forEach(element => {
    //       if (element.Emp_No == this.newResponsible) {
    //         this.new_Res = element.DisplayName;
    //       }
    //     });
    //     this.approvalObj.Emp_no = this.Current_user_ID;
    //     this.approvalObj.Responsible = this.newResponsible;
    //     this.approvalObj.deadline = this.requestDeadline;
    //     this.approvalObj.Project_Code = this.URL_ProjectCode;
    //     if (this.comments == '' || this.comments == null) {
    //       this.approvalObj.Remarks = 'Accepted';
    //     }
    //     else {
    //       this.approvalObj.Remarks = this.comments;
    //     }

    //     this.approvalservice.InsertRevertApprovalService(this.approvalObj).subscribe(data => {
    //       this._Message = data['message'];

    //       if (this._Message == '1') {
    //         this.notifyService.showSuccess("Project Reverted back to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Reverted back");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '2') {
    //         this.notifyService.showSuccess("Project Revert back request sent to -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Success!");
    //         this.GetProjectDetails();
    //         this.GetSubtask_Details();
    //         this.getapprovalStats();
    //         this.GetprojectComments();
    //       }
    //       else if (this._Message == '4' || this._Message == null) {
    //         this.notifyService.showError("Please contact Support.", "Project not Reverted!");
    //       }
    //     });
    //     this.closeInfo();
    //   }
    //   this.closeInfo();
    //   document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("moredet").classList.remove("position-fixed");
    //   document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    //   document.getElementById("rightbar-overlay").style.display = "none";
    // }


    if (this.selectedType == '1') {
      // this.approvalObj.Emp_no = this.Current_user_ID;
      // this.approvalObj.Project_Code = this.URL_ProjectCode;
      // this.approvalObj.Request_type = this.requestType;
      // if (this.comments == '' || this.comments == null) {
      //   this.approvalObj.Remarks = 'Accepted';
      // }
      // else {
      //   this.approvalObj.Remarks = this.comments;
      // }
      // this.approvalservice.InsertAcceptApprovalService(this.approvalObj).
      //   subscribe((data) => {
      //     this._Message = (data['message']);
      //     if (this._Message == 'Not Authorized' || this._Message == '0') {
      //       this.notifyService.showError("project not approved", 'Failed.');
      //     }
      //     else {

      //     }
      //   this.notifyService.showSuccess("Project Approved Successfully", "");
      //   this.GetProjectDetails();
      //   this.GetSubtask_Details();
      //   this.getapprovalStats();
      //   this.GetprojectComments();
      // this.Clear_Feilds();
      // });

      if (this.comments == '' || this.comments == null) {

        this.singleapporval_json.forEach(element => {
          element.Remarks = 'Accepted';
        });
      }
      else {
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
        });
      }


      this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
        subscribe((data) => {
          this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.getapprovalStats();
          this.GetprojectComments();
          this.getRejectType();
          this.getReasonforholdandRejected();
          this.Clear_Feilds();
        });
      console.log(this.singleapporval_json, "accept")
    }
    else if (this.selectedType == '2') {
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.Request_type = this.requestType;
      if (this.comments == '' || this.comments == null) {
        this.approvalObj.Remarks = 'Accepted';
      }
      else {
        this.approvalObj.Remarks = this.comments;
      }

      this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
        subscribe((data) => {
          this._Message = (data['message']);
          if (this._Message == 'Not Authorized' || this._Message == '0') {
            this.notifyService.showError("project not approved", 'Failed.');
          }
          else {
            this.notifyService.showSuccess("Project Approved Successfully", this._Message);
            this.GetProjectDetails();
            this.GetSubtask_Details();
            this.getapprovalStats();
            this.GetprojectComments();
          }
          this.Clear_Feilds();
        });
    }
    else if (this.selectedType == '3') {
      if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        this.noRejectType = true;
        this.notifyService.showError("Please select Reject Type", "Failed");
        return false;
      }
      else {
        // this.approvalObj.Emp_no = this.Current_user_ID;
        // this.approvalObj.Project_Code = this.URL_ProjectCode;
        // this.approvalObj.Request_type = this.requestType;
        // this.approvalObj.rejectType = this.rejectType;
        // this.approvalObj.Remarks = this.comments;
        // this._Message = (data['message']);
        // if (this._Message == 'Not Authorized' || this._Message == '0') {
        //   this.notifyService.showError("project not approved", 'Failed.');
        // }
        // else {

        // }
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
          element.RejectType = this.rejectType;
        });

        this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
          subscribe((data) => {

            this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
            this.GetProjectDetails();
            this.GetSubtask_Details();
            this.getapprovalStats();
            this.GetprojectComments();
            this.getRejectType();
            this.getReasonforholdandRejected();
            this.Clear_Feilds();
          });
      }
      console.log(this.singleapporval_json, "reject")

    }
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  getnextDeadline() {
    return this.datepipe.transform(this.EndDate, 'MM-dd-YYYY');
  }

  showaction: boolean =true;
  noact_msg:boolean=false;

  getResponsibleActions() {
    this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null, this.Current_user_ID).subscribe(
      (data) => {
        this.darArr = JSON.parse(data[0]['Json_ResponsibleInProcess']);
        if(this.darArr.length==0 && (this.Owner_EmpNo==this.Current_user_ID || this.Responsible_EmpNo==this.Current_user_ID)){
          this.showaction=false;
        }
        else if(this.darArr.length==0 && this.Owner_EmpNo!=this.Current_user_ID && this.Responsible_EmpNo!=this.Current_user_ID){
          this.showaction=true;
          this.noact_msg=true;
        }
        else{
          this.showaction=true;
        }
      });
  }


  GetmeetingDetails() {
    this.ObjSubTaskDTO.Project_Code = this.URL_ProjectCode;
    this.service._GetMeetingList(this.ObjSubTaskDTO)
      .subscribe(data => {
        // console.log(data,"meet")
        if ((data[0]['MeetingFor_projects'].length > 0) && data != null) {
          this.meetingList = JSON.parse(data[0]['MeetingFor_projects']);
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
      });
  }

  dar_details() {
    this.noTimeline = false;
    this.ObjSubTaskDTO.MasterCode = this.URL_ProjectCode;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 10;
    this.service._GetDARbyMasterCode(this.ObjSubTaskDTO)
      .subscribe(data1 => {
        this.darList = JSON.parse(data1[0]['DAR_Details_Json']);
        this.darArray = this.darList;
        console.log(this.darArray,"DARsahil");
        this.totalHours = (data1[0]['Totalhours']);
        this.totalRecords = (data1[0]['TotalRecords']);
        if (this.darList.length == 0) {
          this.noTimeline = true;
        }
        if (this.darList) {
          this._CurrentpageRecords = this.darList.length;
        }
      });
  }

  loadMore() {
    this.ObjSubTaskDTO.MasterCode = this.URL_ProjectCode;
    this.ObjSubTaskDTO.PageNumber = this.CurrentPageNo;
    this.ObjSubTaskDTO.PageSize = 10;
    this.service._GetDARbyMasterCode(this.ObjSubTaskDTO)
      .subscribe(data1 => {
        this.darList = JSON.parse(data1[0]['DAR_Details_Json']);
        this.darList.forEach(element => {
          this.darArray.push(element);
        });
        if (this.darList) {
          this._CurrentpageRecords = this.darList.length;
        }
      });
  }

  diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

  submitDar() {
    
    if (this.starttime != null && this.endtime != null) {
      const [shours, sminutes] = this.starttime.split(":");
      const [ehours, eminutes] = this.endtime.split(":");
      var dt1 = new Date(2014, 10, 2, shours, sminutes);
      var dt2 = new Date(2014, 10, 2, ehours, eminutes);
      this.minutes = this.diff_minutes(dt1, dt2) % 60;
      if (this.minutes < 10) {
        this.minutes = "0" + this.minutes
      }
      this.hours = Math.floor(this.diff_minutes(dt1, dt2) / 60);
      if (this.hours < 10) {
        this.hours = "0" + this.hours;
      }
      this.timecount = (this.hours + ":" + this.minutes);
    }  // this is for calculating the timecount using the hours and minutes

    this.objProjectDto.Emp_No = this.Current_user_ID;
    this.objProjectDto.Exec_BlockName = this.ProjectBlockName;
    if (this.starttime != undefined && this.endtime != undefined && this.timecount != undefined) {
      this.objProjectDto.StartTime = this.starttime;
      this.objProjectDto.EndTime = this.endtime;
      this.objProjectDto.TimeCount = this.timecount;
    }
    this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
    this.objProjectDto.date = this.current_Date;
    this.objProjectDto.WorkAchieved = this.workdes;
    this.objProjectDto.Emp_Comp_No = this.Comp_No;

    if (this.ProjectBlockName == 'Standard Tasks' || this.ProjectBlockName == 'Routine Tasks' || this.ProjectBlockName == 'To do List') {
      this.objProjectDto.Project_Name = this.ProjectName;
      this.objProjectDto.Master_code = this.URL_ProjectCode;
      this.objProjectDto.Project_Code = this.URL_ProjectCode;
    }
    else if ((this.ProjectBlockName == 'Core Tasks' || this.ProjectBlockName == 'Secondary Tasks') && (this.inProcessCount == 0 && this.delaycount==0)) {
      this.objProjectDto.Project_Name = this.ProjectName;
      this.objProjectDto.Master_code = this.URL_ProjectCode;
      this.objProjectDto.Project_Code = this.URL_ProjectCode;
    }
    else {
      this.objProjectDto.Master_code = this.URL_ProjectCode;
      this.objProjectDto.Project_Code = this.actionCode;
    }

   console.log("objProjectDto:",this.objProjectDto);

 

    this.service._InsertDARServie(this.objProjectDto)
      .subscribe(data => {
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Success");
      });
    this.dar_details();
    this.getDarTime();
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.Clear_Feilds();
  }

  getDarTime() { 
    this.timedata = [];
    this.timedata1 = ["08:00",
      "08:15", "08:30", "08:45", "09:00",
      "09:15", "09:30", "09:45", "10:00",
      "10:15", "10:30", "10:45", "11:00",
      "11:15", "11:30", "11:45", "12:00",
      "12:15", "12:30", "12:45", "13:00",
      "13:15", "13:30", "13:45", "14:00",
      "14:15", "14:30", "14:45", "15:00",
      "15:15", "15:30", "15:45", "16:00",
      "16:15", "16:30", "16:45", "17:00",
      "17:15", "17:30", "17:45", "18:00",
      "18:15", "18:30", "18:45", "19:00",
      "19:15", "19:30", "19:45", "20:00"];

    this.objProjectDto.Emp_No = this.Current_user_ID;
    this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
    this.date11 = moment(new Date()).format("MM/DD/YYYY");
    this.objProjectDto.date = this.current_Date;

   

    if (this.current_Date == this.date11) {
       
      this.timedata1.forEach(element => {
        const [shours, sminutes] = element.split(":");
        if (shours <= this.currenthours)
          this.timedata.push(element);
      });
      console.log('check this:',this.timedata);
    }
    else {
      this.timedata1.forEach(element => {
        this.timedata.push(element);
      });
    }

    this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
      .subscribe(data => {
      
        this.timeList = JSON.parse(data[0]['time_json']);
        console.log(this.timeList, "time");
        if (this.timeList.length != 0) {
          this.bol = false;
          this.timeList.forEach(element => {
            this.starttimearr.push(element.starttime);
          });
          this.timeList.forEach(element => {
            this.endtimearr.push(element.endtime);
          });
          let l = this.endtimearr.length;
          this.lastEndtime = this.endtimearr[l - 1];
        }
        else if (this.timeList.length == 0) { 
          this.bol = true;
          this.lastEndtime = 0;
          this.starttimearr = [];
          this.endtimearr = [];
        }
      });
  }

  time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
  }

  CoreSecodaryCharts() {
    this.DARSummaryChart();
    this.ProjectCompletionChart();
    if (this.IsData != null) {
      this.HybridDrillChart();
      this.SubtaskSummaryChart();
    }
    this.ProjectTrendChart();
  }

  OtherCharts() {
    this.GetProjectDetails();
    this.StandardTask();
  }

  OnSubtaskClick(item) {
    
    this.Sub_ProjectCode = item.Project_Code;
    this.Sub_Desc = item.Project_Description;
    this._Subtaskname = item.Project_Name;
    this.Sub_StartDT = item.StartDate;
    this.Sub_EndDT = item.SubProject_DeadLine;
    this.Sub_Autho = item.Team_Res;
    this.Sub_Status = item.SubProject_Status;

    document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    // For page top div position fix
    document.getElementById("moredet").classList.add("position-fixed");
    // document
    // this.Block3 = false;
  }


  onFileChangeUST(e) {
    this._inputAttachments = e.target.files[0].name;
  }

  userFound:boolean=false;
  getRACISandNonRACIS() {
    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode,this.Current_user_ID).subscribe(
      (data) => {
        this.nonRacisList = (JSON.parse(data[0]['OtherList']));

        this.RACISList = (JSON.parse(data[0]['RacisList']));
        console.log(this.RACISList,"RACIS");

        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
        if (this.RACISList && this.RACISList.length > 0) {
          // Extract Emp_No values from this.RACISList array
          const racisUserIds = this.RACISList.map((user: any) => user.Emp_No);
          // Check if currentUserId is in the racisUserIds array
          this.userFound = racisUserIds.includes(this.Current_user_ID);
        
          console.log(this.userFound, this.isHierarchy, "pagett"); // true or false
        } else {
          console.log('this.RACISList is either undefined or empty.');
        }
      });

      

    // this.service.GetHierarchydropdownforMoredetails(this.Current_user_ID).subscribe(
    //   (data) => {
    //     console.log(JSON.parse(data[0]['hierarchy_dropdown']),"hierarchy_dropdown");
    //     this.hierarchydropdown=(JSON.parse(data[0]['hierarchy_dropdown']));
    //   });
  }

  isStandardSubmit:any;
  GetProjectDetails() {
   
    this.service.SubTaskDetailsService(this.URL_ProjectCode).subscribe(
      (data) => {
        if (data != null && data != undefined) {
        console.log("GetProjectDetails data:",data);
          this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
          this.Category = this.ProjectInfo_List[0]['ReportType'];
          this.Employee_List = JSON.parse(data[0]['EmployeeDropdown']);
          this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
          this.Client_List = JSON.parse(data[0]['ClientDropdown']);
          this._portfoliolist = JSON.parse(data[0]['Portfolio_json']);
          //  console.log("Test---->", this.ProjectInfo_List);
          this.ProjectName = this.ProjectInfo_List[0]['Project_Name'];
          this.Pid = this.ProjectInfo_List[0]['id'];
          this.Status = this.ProjectInfo_List[0]['Status'];
          this.Delaydays = this.ProjectInfo_List[0]['Delaydays'];
          this.Description = this.ProjectInfo_List[0]['Project_Description'];
          this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
          this.StartDate = this.ProjectInfo_List[0]['DPG'];
          this.Client = this.ProjectInfo_List[0]['Client_Name'];
          this.EndDate = this.ProjectInfo_List[0]['DeadLine'];
          this.Projectdeadline = this.EndDate;
          // this.EndDate1 = this.EndDate;
          this.EndDate = this.datepipe.transform(this.EndDate, 'dd-MM-yyyy');
          console.log(this.EndDate,"pause")
          this.sdate = this.datepipe.transform(this.StartDate, 'yyyy-MM-dd');
          this.Cost = this.ProjectInfo_List[0]['Project_Cost'];
          this.Owner = this.ProjectInfo_List[0]['Project_Owner'];
          this.Responsible = this.ProjectInfo_List[0]['Team_Res'];
          this.Authority = this.ProjectInfo_List[0]['Team_Autho'];
          this.Coordinator = this.ProjectInfo_List[0]['Team_Coor'];
          this.Informer = this.ProjectInfo_List[0]['Team_Informer'];
          this.Support = this.ProjectInfo_List[0]['Team_Support'];

          this.ProjectBlock = this.ProjectInfo_List[0]['Project_Block'];
          this.ProjectBlockName = this.ProjectInfo_List[0]['Exec_BlockName'];
          //console.log("Test---->", this.ProjectBlockName);
          this.Authority_EmpNo = this.ProjectInfo_List[0]['Authority'];
          this.Responsible_EmpNo = this.ProjectInfo_List[0]['Responsible'];
          this.Owner_EmpNo = this.ProjectInfo_List[0]['OwnerEmpNo'];
          this.Coor_EmpNo = this.ProjectInfo_List[0]['Coor'];
          this.Inform_EmpNo = this.ProjectInfo_List[0]['Informer'];
          this.Support_EmpNo = this.ProjectInfo_List[0]['Support'];
          this.isStandardSubmit = this.ProjectInfo_List[0]['isStandardSubmit'];
          // console.log(this.Coor_EmpNo,this.Inform_EmpNo,this.Support_EmpNo,"RACIS");
          this.StandardDuration = this.ProjectInfo_List[0]['StandardDuration'];
          this.SubmissionName = this.ProjectInfo_List[0]['SubmissionType1'];
          console.log("Exec_BlockName:",this.ProjectInfo_List[0]['Exec_BlockName'])
        console.log('here man:',this.ProjectInfo_List[0])
          this._LinkService._GetAttachments(this.Authority_EmpNo, this.URL_ProjectCode, this.ProjectBlock)
            .subscribe((data) => {
              this.AttachmentList = JSON.parse(data[0]['Attachments_Json']);
              this.action_attachment = JSON.parse(data[0]['action_attachments']);
              if (this.action_attachment == null) 
                this.attachmentlength = this.AttachmentList.length;
              else
                this.attachmentlength = this.AttachmentList.length + this.action_attachment.length;
              this.TotalDocs = (data[0]['TotalDocs']);
            });
          var fullname_R = this.Responsible.split(' ');
          // this.InitR = fullname_R.shift().charAt(0) + fullname_R.pop().charAt(0);
          if (fullname_R.length === 1) {
            this.InitR = fullname_R[0].charAt(0);
          } else {
            this.InitR = fullname_R.shift().charAt(0) + fullname_R.pop().charAt(0);
          }
          this.InitR.toUpperCase();
          // console.log(this.InitR,"initial")
          this.date1 = this.ProjectInfo_List[0]['DPG'];
          this.date2 = this.ProjectInfo_List[0]['DeadLine'];
          //add data to service
          this.BsService.SetNewPojectCode(this.URL_ProjectCode);
          this.BsService.SetNewPojectName(this.ProjectName);
          //console.log("Date In ----->", this.date1, this.date2)
          this.Project_Responsible = this.ProjectInfo_List[0]['Team_Res'];
          // Date Diff In Days...
          this.date1 = moment(this.date1);
          this.date2 = moment(this.date2);
          this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));

          var fullname_Own = this.Owner.split(' ');
          // this.InitOwn = fullname_Own.shift().charAt(0) + fullname_Own.pop().charAt(0);
          if (fullname_Own.length === 1) {
            this.InitOwn = fullname_Own[0].charAt(0);
          } else {
            this.InitOwn = fullname_Own.shift().charAt(0) + fullname_Own.pop().charAt(0);
          }
          this.InitOwn.toUpperCase();

          var fullname_Auth = this.Authority.split(' ');
          if (fullname_Auth.length === 1) {
            this.InitAut = fullname_Auth[0].charAt(0);
          } else {
            this.InitAut = fullname_Auth.shift().charAt(0) + fullname_Auth.pop().charAt(0);
          }
          // this.InitAut = fullname_Auth.shift().charAt(0) + fullname_Auth.pop().charAt(0);
          this.InitAut.toUpperCase();

          var fullname_Coor = this.Coordinator.split(' ');
          if (fullname_Coor.length === 1) {
            this.InitCoor = fullname_Coor[0].charAt(0);
          } else {
            this.InitCoor = fullname_Coor.shift().charAt(0) + fullname_Coor.pop().charAt(0);
          }
          // this.InitCoor = fullname_Coor.shift().charAt(0) + fullname_Coor.pop().charAt(0);
          this.InitCoor.toUpperCase();
          // var fullname_Inf = this.Informer.split(' ');
          // this.InitInformer = fullname_Inf.shift().charAt(0) + fullname_Inf.pop().charAt(0);
          // this.InitInformer.toUpperCase();
          this.InitInformer = "IN";
          // var fullname_Supp = this.Support.split(' ');
          // this.InitSupp = fullname_Supp.shift().charAt(0) + fullname_Supp.pop().charAt(0);
          // this.InitSupp.toUpperCase();
          this.InitSupp = "SU";
          const array: string[] = this.Support_EmpNo.split(',');
          if (this.Support_EmpNo.includes(this.Current_user_ID)) {
            this.supp = true;
          }
          if (this.ProjectBlockName == 'To do List' || this.ProjectBlockName == 'Standard Tasks' || this.ProjectBlockName == 'Routine Tasks'  || this.Status=='Cancelled') {
            this.actionButton = true;
          }
          if (this.Status == 'ToDo Completed' || this.Status == 'Completed' || this.Status == 'New KPI Rejected' || this.Status == 'Rejected' || this.Status=='Cancelled') {
            this.darbutton = false;
          }
        }

        if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
          this._portfoliolist = [];
          this.noPort = "No portfolios linked";
          this.portslength = 0;
        }
        else {
          this.portslength = this._portfoliolist.length;
          this.noPort = "";
          // console.log(this._portfoliolist,this.Pid, this._MasterCode,this._ProjectName,this.Current_user_ID,"portfolio list");
        }
      });
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        this.DarGraphDataList = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        //  console.log(data[0]['RemainingHours']);
        // console.log("MaxDu....", data1);
        this.maxDuration = (data1[0]['ProjectMaxDuration']);
        let data2 = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        this.standardDuration = (data2[0]['DurationTime']);
      });

  }

  ngOnDestroy(){

  }

  isExpanded: boolean = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  AddDms() {
    this._LinkSideBar = false;
    this.GetDMS_Memos();
    this._onRowClick(this.URL_ProjectCode);
  }

  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {
        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
        this._totalMemos = this._ActualMemoslist.length;
        // console.log("Memos List", JSON.parse(data['JsonData']));
        this.dropdownSettings_Memo = {
          singleSelection: true,
          idField: 'MailId',
          textField: 'Subject',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true
        };
      });
  }

  Memo_Select(selecteditems) {
    
    console.log("Selected Item-sahil--->",selecteditems)
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
      console.log("you have selected:",this._SelectedMemos);
    });
    //console.log("Selected Memos In Array--->", arr)
  }

  Memo_Deselect() {
    let arr = [];
    this.Empty_MemoDropdown = this.ngDropdwonMemo;
    console.log("ngDropdwonMemo:",this.ngDropdwonMemo)
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    //console.log("Deselect Memos--->", this._SelectedMemos)
  }

  _onRowClick(projectCode) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    // console.log("projt Code------->",projectCode);
    // this._displayProjName = ProjName;
    this.GetMemosByEmployeeId();
    this.GetDMS_Memos();

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
    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  closeInfo() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("btm-space").classList.add("d-none");
    // document.getElementById("mysideInfobar1").classList.remove("kt-quick-panel--on");
    // For page top div removing the fixed
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    // this.notifyService.showError("Cancelled", '');
    this.Clear_Feilds();
    this.GetSubtask_Details();
    this.router.navigate(["./MoreDetails", this.URL_ProjectCode]);
  }

  btmspace_opn() {
    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  _allocated: any;

  close_space() {
    this.Editbutton = false;
    this.selectedEmp_No = null;
    this.TransDate = null;
    this.transfer_remarks = "";
    this.Holddate = null;
    this.hold_remarks = "";
    this._ProjDeadline = null;
    this.extend_remarks = "";
    this.selectedcategory = null;
    this.selectedclient = null;
    this.selectedsupport = null;
    this.selectedOwnResp = null;
    this.allocation = false;

    document.getElementById("btm-space").classList.add("d-none");
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  closeApproval() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("mysideInfobar1").classList.remove("kt-quick-panel--on");
    // For page top div removing the fixed
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.notifyService.showError("Cancelled", '');
    this.Clear_Feilds();
    this.GetSubtask_Details();
  }

  sideviw() {
    document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  TaskChart() {
    let data1: any;
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        // console.log("data1 Testong---->", data);
        data1 = JSON.parse(data[0]['DARGraphCalculations_Json']);
        this.DarGraphDataList = data1;
        // console.log(this.DarGraphDataList);
        //console.log("DarGraphDataList---->",this.DarGraphDataList);
        let root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout
        }));
        let legend = chart.children.push(
          am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
          })
        );
        //data1;
        // [{
        //   "year": "2021",
        //   "europe": 10,
        //   "namerica": 2.5,
        //   "asia": 2.1,
        //   "lamerica": 1,
        //   "meast": 0.8,
        //   "africa": 0.4
        // }, {
        //   "year": "2022",
        //   "europe": 2.6,
        //   "namerica": 2.7,
        //   "asia": 2.2,
        //   "lamerica": 0.5,
        //   "meast": 0.4,
        //   "africa": 0.3
        // }, {
        //   "year": "2023",
        //   "europe": 2.8,
        //   "namerica": 2.9,
        //   "asia": 2.4,
        //   "lamerica": 0.3,
        //   "meast": 0.9,
        //   "africa": 0.5
        // }];
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/

        let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          categoryField: 'category',
          renderer: am5xy.AxisRendererX.new(root, {
            cellStartLocation: 0.1,
            cellEndLocation: 0.9
          }),
          tooltip: am5.Tooltip.new(root, {})
        }));

        xAxis.data.setAll(data1);
        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        }));
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        function makeSeries(name, fieldName) {
          let series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: fieldName,
            categoryXField: 'category'
          }));

          series.columns.template.setAll({
            tooltipText: "{category} - {name} : {valueY}",
            width: am5.percent(90),
            tooltipY: 0
          });

          series.data.setAll(data1);
          // Make stuff animate on load
          // https://www.amcharts.com/docs/v5/concepts/animations/
          series.appear();

          series.bullets.push(function () {
            return am5.Bullet.new(root, {
              locationY: 0,
              sprite: am5.Label.new(root, {
                text: "{valueY}",
                fill: root.interfaceColors.get("alternativeText"),
                centerY: 0,
                centerX: am5.p50,
                populateText: true
              })
            });
          });
          //series.set("fill", am5.color(0xff0000)); // set Series color to red
          //  series.set("fill", am5.color("#00ff00")); // set Series color to green
          legend.data.push(series);
        }
        makeSeries("Used Hours In DAR", "DARUsedHours");
        makeSeries("Remaining Hours In DAR", "RemainingHours");
        makeSeries("Total DAR Hours", "TotalDARHours");

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
      });
  }

  ProjectTrendChart() {
    let chart = am4core.create("ProjectTrendchart", am4charts.XYChart);
    //let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    // Add data
    chart.data = [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967",
      "value": -0.15
    }, {
      "year": "1968",
      "value": -0.16
    }, {
      "year": "1969",
      "value": -0.011
    }, {
      "year": "1970",
      "value": -0.068
    }, {
      "year": "1971",
      "value": -0.19
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function (fill, target) {
      if (target.dataItem['valueY'] < 0) {
        return am4core.color("#FF0000");
      }
      return fill;
    })
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();
  }

  dummyChart() {
    // let chart = am4core.create("projecttrenddiv", am4charts.XYChart);
    //let chart = am4core.create("chartdiv", am4charts.XYChart);
    let allData = {
      "2002": {
        "Friendster": 0,
        "Facebook": 0,
        "Flickr": 0,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 0,
        "Instagram": 0,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 0
      },
      "2003": {
        "Friendster": 4470000,
        "Facebook": 0,
        "Flickr": 0,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 0,
        "Instagram": 0,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 0
      },
      "2004": {
        "Friendster": 5970054,
        "Facebook": 0,
        "Flickr": 3675135,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 0,
        "Instagram": 0,
        "MySpace": 980036,
        "Orkut": 4900180,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 0
      },
      "2005": {
        "Friendster": 7459742,
        "Facebook": 0,
        "Flickr": 7399354,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 9731610,
        "Instagram": 0,
        "MySpace": 19490059,
        "Orkut": 9865805,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 1946322
      },
      "2006": {
        "Friendster": 8989854,
        "Facebook": 0,
        "Flickr": 14949270,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 19932360,
        "Instagram": 0,
        "MySpace": 54763260,
        "Orkut": 14966180,
        "Pinterest": 0,
        "Reddit": 248309,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 19878248
      },
      "2007": {
        "Friendster": 24253200,
        "Facebook": 0,
        "Flickr": 29299875,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 29533250,
        "Instagram": 0,
        "MySpace": 69299875,
        "Orkut": 26916562,
        "Pinterest": 0,
        "Reddit": 488331,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 143932250
      },
      "2008": {
        "Friendster": 51008911,
        "Facebook": 100000000,
        "Flickr": 30000000,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 55045618,
        "Instagram": 0,
        "MySpace": 72408233,
        "Orkut": 44357628,
        "Pinterest": 0,
        "Reddit": 1944940,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 294493950
      },
      "2009": {
        "Friendster": 28804331,
        "Facebook": 276000000,
        "Flickr": 41834525,
        "Google Buzz": 0,
        "Google+": 0,
        "Hi5": 57893524,
        "Instagram": 0,
        "MySpace": 70133095,
        "Orkut": 47366905,
        "Pinterest": 0,
        "Reddit": 3893524,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 0,
        "WeChat": 0,
        "Weibo": 0,
        "Whatsapp": 0,
        "YouTube": 413611440
      },
      "2010": {
        "Friendster": 0,
        "Facebook": 517750000,
        "Flickr": 54708063,
        "Google Buzz": 166029650,
        "Google+": 0,
        "Hi5": 59953290,
        "Instagram": 0,
        "MySpace": 68046710,
        "Orkut": 49941613,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 43250000,
        "WeChat": 0,
        "Weibo": 19532900,
        "Whatsapp": 0,
        "YouTube": 480551990
      },
      "2011": {
        "Friendster": 0,
        "Facebook": 766000000,
        "Flickr": 66954600,
        "Google Buzz": 170000000,
        "Google+": 0,
        "Hi5": 46610848,
        "Instagram": 0,
        "MySpace": 46003536,
        "Orkut": 47609080,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 0,
        "Twitter": 92750000,
        "WeChat": 47818400,
        "Weibo": 48691040,
        "Whatsapp": 0,
        "YouTube": 642669824
      },
      "2012": {
        "Friendster": 0,
        "Facebook": 979750000,
        "Flickr": 79664888,
        "Google Buzz": 170000000,
        "Google+": 107319100,
        "Hi5": 0,
        "Instagram": 0,
        "MySpace": 0,
        "Orkut": 45067022,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 146890156,
        "Twitter": 160250000,
        "WeChat": 118123370,
        "Weibo": 79195730,
        "Whatsapp": 0,
        "YouTube": 844638200
      },
      "2013": {
        "Friendster": 0,
        "Facebook": 1170500000,
        "Flickr": 80000000,
        "Google Buzz": 170000000,
        "Google+": 205654700,
        "Hi5": 0,
        "Instagram": 117500000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 0,
        "Reddit": 0,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 293482050,
        "Twitter": 223675000,
        "WeChat": 196523760,
        "Weibo": 118261880,
        "Whatsapp": 300000000,
        "YouTube": 1065223075
      },
      "2014": {
        "Friendster": 0,
        "Facebook": 1334000000,
        "Flickr": 0,
        "Google Buzz": 170000000,
        "Google+": 254859015,
        "Hi5": 0,
        "Instagram": 250000000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 0,
        "Reddit": 135786956,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 388721163,
        "Twitter": 223675000,
        "WeChat": 444232415,
        "Weibo": 154890345,
        "Whatsapp": 498750000,
        "YouTube": 1249451725
      },
      "2015": {
        "Friendster": 0,
        "Facebook": 1516750000,
        "Flickr": 0,
        "Google Buzz": 170000000,
        "Google+": 298950015,
        "Hi5": 0,
        "Instagram": 400000000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 0,
        "Reddit": 163346676,
        "Snapchat": 0,
        "TikTok": 0,
        "Tumblr": 475923363,
        "Twitter": 304500000,
        "WeChat": 660843407,
        "Weibo": 208716685,
        "Whatsapp": 800000000,
        "YouTube": 1328133360
      },
      "2016": {
        "Friendster": 0,
        "Facebook": 1753500000,
        "Flickr": 0,
        "Google Buzz": 0,
        "Google+": 398648000,
        "Hi5": 0,
        "Instagram": 550000000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 143250000,
        "Reddit": 238972480,
        "Snapchat": 238648000,
        "TikTok": 0,
        "Tumblr": 565796720,
        "Twitter": 314500000,
        "WeChat": 847512320,
        "Weibo": 281026560,
        "Whatsapp": 1000000000,
        "YouTube": 1399053600
      },
      "2017": {
        "Friendster": 0,
        "Facebook": 2035750000,
        "Flickr": 0,
        "Google Buzz": 0,
        "Google+": 495657000,
        "Hi5": 0,
        "Instagram": 750000000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 195000000,
        "Reddit": 297394200,
        "Snapchat": 0,
        "TikTok": 239142500,
        "Tumblr": 593783960,
        "Twitter": 328250000,
        "WeChat": 921742750,
        "Weibo": 357569030,
        "Whatsapp": 1333333333,
        "YouTube": 1495657000
      },
      "2022": {
        "Friendster": 0,
        "Facebook": 2255250000,
        "Flickr": 0,
        "Google Buzz": 0,
        "Google+": 430000000,
        "Hi5": 0,
        "Instagram": 1000000000,
        "MySpace": 0,
        "Orkut": 0,
        "Pinterest": 246500000,
        "Reddit": 355000000,
        "Snapchat": 0,
        "TikTok": 500000000,
        "Tumblr": 624000000,
        "Twitter": 329500000,
        "WeChat": 1000000000,
        "Weibo": 431000000,
        "Whatsapp": 1433333333,
        "YouTube": 1900000000
      }
    };

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("projecttrenddiv");

    root.numberFormatter.setAll({
      numberFormat: "#a",

      // Group only into M (millions), and B (billions)
      bigNumberPrefixes: [
        { number: 1e6, suffix: "M" },
        { number: 1e9, suffix: "B" }
      ],
      // Do not use small number prefixes at all
      smallNumberPrefixes: []
    });

    let stepDuration = 2000;

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "none",
      wheelY: "none"
    }));

    // We don't want zoom-out button to appear while animating, so we hide it at all
    chart.zoomOutButton.set("forceHidden", true);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 20,
      inversed: true
    });

    // hide grid
    yRenderer.grid.template.set("visible", false);

    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer
    }));

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      strictMinMax: true,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {})
    }));

    xAxis.set("interpolationDuration", stepDuration / 10);
    xAxis.set("interpolationEasing", am5.ease.linear);

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network"
    }));

    // Rounded corners for columns
    series.columns.template.setAll({ cornerRadiusBR: 5, cornerRadiusTR: 5 });

    // Make each column to be of a different color

    // Add label bullet
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Label.new(root, {
          text: "{valueXWorking.formatNumber('#.# a')}",
          fill: root.interfaceColors.get("alternativeText"),
          centerX: am5.p100,
          centerY: am5.p50,
          populateText: true
        })
      });
    });

    let label = chart.plotContainer.children.push(am5.Label.new(root, {
      text: "2022",
      fontSize: "8em",
      opacity: 0.2,
      x: am5.p100,
      y: am5.p100,
      centerY: am5.p100,
      centerX: am5.p100
    }));

    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }

    // Axis sorting
    function sortCategoryAxis() {
      // sort by value
      series.dataItems.sort(function (x, y) {
        return y.get("valueX") - x.get("valueX"); // descending
        //return x.get("valueX") - y.get("valueX"); // ascending
      });

      // go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        let seriesDataItem = getSeriesItem(dataItem.get("category"));

        if (seriesDataItem) {
          // get index of series data item
          let index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          let deltaPosition =
            (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          if (dataItem.get("index") != index) {
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: stepDuration / 2,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
      });
      // sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set, they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }

    let year = 1;

    // update data with values each 1.5 sec
    let interval = setInterval(function () {
      year++;

      if (year > 2022) {
        clearInterval(interval);
        clearInterval(sortInterval);
      }
      updateData();
    }, stepDuration);

    let sortInterval = setInterval(function () {
      sortCategoryAxis();
    }, 100);

    function setInitialData() {
      let d = allData[year];
      for (var n in d) {
        series.data.push({ network: n, value: d[n] });
        yAxis.data.push({ network: n });
      }
    }

    function updateData() {
      let itemsWithNonZero = 0;

      if (allData[year]) {
        label.set("text", year.toString());

        am5.array.each(series.dataItems, function (dataItem) {
          let category = dataItem.get("categoryY");
          let value = allData[year][category];

          if (value > 0) {
            itemsWithNonZero++;
          }

          dataItem.animate({
            key: "valueX",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
          dataItem.animate({
            key: "valueXWorking",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
        });
        yAxis.zoom(0, itemsWithNonZero / yAxis.dataItems.length);
      }
    }

    setInitialData();
    setTimeout(function () {
      year++;
      updateData();
    }, 50);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
  }

  UserGraphs() {
    let chart = am4core.create("userchartdiv", am4charts.XYChart);
    chart.paddingRight = 20;
    // Add data
    chart.data = [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1963",
      "value": 0
    }, {
      "year": "1964",
      "value": -0.296
    }, {
      "year": "1965",
      "value": -0.217
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967",
      "value": -0.15
    }, {
      "year": "1968",
      "value": -0.16
    }, {
      "year": "1969",
      "value": -0.011
    }, {
      "year": "1970",
      "value": -0.068
    }, {
      "year": "1971",
      "value": -0.19
    }, {
      "year": "1972",
      "value": -0.056
    }, {
      "year": "1973",
      "value": 0.077
    }, {
      "year": "1974",
      "value": -0.213
    }, {
      "year": "1975",
      "value": -0.17
    }, {
      "year": "1976",
      "value": -0.254
    }, {
      "year": "1977",
      "value": 0.019
    }, {
      "year": "1978",
      "value": -0.063
    }, {
      "year": "1979",
      "value": 0.05
    }, {
      "year": "1980",
      "value": 0.077
    }, {
      "year": "1981",
      "value": 0.12
    }, {
      "year": "1982",
      "value": 0.011
    }, {
      "year": "1983",
      "value": 0.177
    }, {
      "year": "1984",
      "value": -0.021
    }, {
      "year": "1985",
      "value": -0.037
    }, {
      "year": "1986",
      "value": 0.03
    }, {
      "year": "1987",
      "value": 0.179
    }, {
      "year": "1988",
      "value": 0.18
    }, {
      "year": "1989",
      "value": 0.104
    }, {
      "year": "1990",
      "value": 0.255
    }, {
      "year": "1991",
      "value": 0.21
    }, {
      "year": "1992",
      "value": 0.065
    }, {
      "year": "1993",
      "value": 0.11
    }, {
      "year": "1994",
      "value": 0.172
    }, {
      "year": "1995",
      "value": 0.269
    }, {
      "year": "1996",
      "value": 0.141
    }, {
      "year": "1997",
      "value": 0.353
    }, {
      "year": "1998",
      "value": 0.548
    }, {
      "year": "1999",
      "value": 0.298
    }, {
      "year": "2000",
      "value": 0.267
    }, {
      "year": "2001",
      "value": 0.411
    }, {
      "year": "2002",
      "value": 0.462
    }, {
      "year": "2003",
      "value": 0.47
    }, {
      "year": "2004",
      "value": 0.445
    }, {
      "year": "2005",
      "value": 0.47
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function (fill, target) {
      if (target.dataItem['valueY'] < 0) {
        return am4core.color("#FF0000");
      }
      return fill;
    })

    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();
  }

  ProjectCompletionChart() {
    let data1: any;
    let data2: any;
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        // data1 = (JSON.parse(data[0]['DARGraphCalculations_Json']));
        data2 = (JSON.parse(data[0]['ProjectCompletionChart']));
        // console.log(data[0]['RemainingHours']);
        //  let data2 = [{
        //     size: 82,
        //     sector: "UnderApproval",
        //     }]

        let chartData = data2;
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element

        let root = am5.Root.new("pieChatDiv");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
          innerRadius: 100,
          layout: root.verticalLayout
        }));

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        let series = chart.series.push(am5percent.PieSeries.new(root, {
          valueField: "size",
          categoryField: "sector",
          tooltipText: "{sector}: {size}%"
        }));

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll(data2);

        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);

        // Add label
        let label = root.tooltipContainer.children.push(am5.Label.new(root, {
          x: am5.p50,
          y: am5.p50,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0x000000),
          fontSize: 50
        }));

        // Animate chart data
        // let currentYear = 1995;
        // function getCurrentData() {
        //   let data = chartData[currentYear];
        //   currentYear++;
        //   if (currentYear > 2014)
        //     currentYear = 1995;
        //   return data;
        // }

        function loop() {
          label.set("text", data2[0]['size'] + '%');
          let data = data2;
          for (var i = 0; i < data.length; i++) {
            series.data.setIndex(i, data[i]);
          }
          chart.setTimeout(loop, 4000);
        }
        loop();
      });
  }

  HybridDrillChart() {
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        // console.log("data1---->",data);
        let data = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        //console.log("---->",data);
        let root = am5.Root.new("Hybridchartdiv");
        // Create wrapper container
        let container = root.container.children.push(am5.Container.new(root, {
          width: am5.p100,
          height: am5.p100,
          layout: root.horizontalLayout
        }));
        // ==============================================
        // Column chart
        // ==============================================
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let columnChart = container.children.push(am5xy.XYChart.new(root, {
          width: am5.p50,
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          layout: root.verticalLayout
        }));
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let yAxis = columnChart.yAxes.push(am5xy.CategoryAxis.new(root, {
          categoryField: "category",
          renderer: am5xy.AxisRendererY.new(root, {})
        }));

        let xAxis = columnChart.xAxes.push(am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {})
        }));
        xAxis.data.setAll(data);
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let columnSeries = columnChart.series.push(am5xy.ColumnSeries.new(root, {
          //name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "value",
          categoryYField: "category"
        }));

        columnSeries.columns.template.setAll({
          tooltipText: "{categoryY}: {valueX}"
        });
        //series.data.setAll(data);
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        columnChart.appear(1000, 100);

        // ==============================================
        // Column chart
        // ==============================================

        let pieChart = container.children.push(
          am5percent.PieChart.new(root, {
            width: am5.p50,
            innerRadius: am5.percent(50)
          })
        );

        // Create series
        let pieSeries = pieChart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category"
          })
        );

        pieSeries.slices.template.setAll({
          templateField: "sliceSettings",
          strokeOpacity: 0
        });

        let currentSlice;

        pieSeries.slices.template.on("active", function (active, slice) {
          if (currentSlice && currentSlice != slice && active) {
            currentSlice.set("active", false)
          }

          let color = slice.get("fill");

          label1.setAll({
            fill: color,
            text: root.numberFormatter.format(data[0]['Percentage'], "#.'%'")
          });

          label2.set("text", 'Project Percentage');

          columnSeries.columns.template.setAll({
            fill: slice.get("fill"),
            stroke: slice.get("fill")
          });

          columnSeries.data.setAll(data);
          yAxis.data.setAll(data);
          currentSlice = slice;
        });

        pieSeries.labels.template.set("forceHidden", true);
        pieSeries.ticks.template.set("forceHidden", true);
        pieSeries.data.setAll(data);

        // Add label
        let label1 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
          text: "Used Hours",
          fontSize: 35,
          centerX: am5.p50,
          centerY: am5.p50
        }));

        let label2 = pieChart.seriesContainer.children.push(am5.Label.new(root, {
          text: "Used Percentage",
          fontSize: 12,
          centerX: am5.p50,
          centerY: am5.p50,
          dy: 30
        }));

        // Pre-select first slice
        pieSeries.events.on("datavalidated", function () {
          pieSeries.slices.getIndex(0).set("active", true);
        });

      });
  }

  SubtaskSummaryChart() {
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        let data = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        let chart = am4core.create('SummaryChart', am4charts.XYChart)
        chart.colors.step = 2;

        chart.legend = new am4charts.Legend()
        chart.legend.position = 'top'
        chart.legend.paddingBottom = 20
        chart.legend.labels.template.maxWidth = 95

        let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        xAxis.dataFields.category = 'category'
        xAxis.renderer.cellStartLocation = 0.1
        xAxis.renderer.cellEndLocation = 0.9
        xAxis.renderer.grid.template.location = 0;

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        yAxis.min = 0;

        function createSeries(value, name) {
          let series = chart.series.push(new am4charts.ColumnSeries())
          series.dataFields.valueY = value
          series.dataFields.categoryX = 'category'
          series.name = name

          series.events.on("hidden", arrangeColumns);
          series.events.on("shown", arrangeColumns);

          let bullet = series.bullets.push(new am4charts.LabelBullet())
          bullet.interactionsEnabled = false
          bullet.dy = 30;
          bullet.label.text = '{valueY}'
          bullet.label.fill = am4core.color('#ffffff')

          return series;
        }

        chart.data = data;
        // [
        //   {
        //     category: 'Place #1',
        //     first: 40,
        //     second: 55,
        //     third: 60
        //   },
        //   {
        //     category: 'Place #2',
        //     first: 30,
        //     second: 78,
        //     third: 69
        //   },
        //   {
        //     category: 'Place #3',
        //     first: 27,
        //     second: 40,
        //     third: 45
        //   },
        //   {
        //     category: 'Place #4',
        //     first: 50,
        //     second: 33,
        //     third: 22
        //   }
        // ]

        createSeries('RemainingHours', 'Remaining Hours');
        createSeries('DARUsedHours', 'Used Hours');
        createSeries('TotalDARHours', 'Total Hours');

        function arrangeColumns() {
          let series = chart.series.getIndex(0);

          let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
          if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
              let middle = chart.series.length / 2;

              let newIndex = 0;
              chart.series.each(function (series) {
                if (!series.isHidden && !series.isHiding) {
                  series.dummyData = newIndex;
                  newIndex++;
                }
                else {
                  series.dummyData = chart.series.indexOf(series);
                }
              })
              let visibleCount = newIndex;
              let newMiddle = visibleCount / 2;

              chart.series.each(function (series) {
                let trueIndex = chart.series.indexOf(series);
                let newIndex = series.dummyData;

                let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
              })
            }
          }
        }
      });
  }

  DARSummaryChart() {
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        // let data = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        //  console.log(data[0]['RemainingHours']);
        //console.log("MaxDu....", MaxDuration);
        this.maxDuration = (data1[0]['ProjectMaxDuration']);
        let chart = am4core.create("DARSummary", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.legend = new am4charts.Legend();
        chart.data =
          [
            {
              name: "Remaining Hours",
              value: (data1[0]['RemainingHours']),
            },
            {
              name: "Total Hours Used In DAR",
              value: (data1[0]['TotalHoursUsedInDAR']),
            },
          ];

        let series = chart.series.push(new am4charts.PieSeries3D(

        ));
        series.dataFields.value = "value";
        series.dataFields.category = "name";
        series.autoDispose = true;
      });
  }

  /// Standard Task //////////////
  StandardTask() {
    let root = am5.Root.new("StandardChart");
    // Generate random data
    var data = [{
      date: new Date(2022, 0, 1).getTime(),
      value: 2,
      value2: 362,
      value3: 699
    }, {
      date: new Date(2022, 0, 2).getTime(),
      value: 4,
      value2: 450,
      value3: 841
    }, {
      date: new Date(2022, 0, 3).getTime(),
      value: 6,
      value2: 358,
      value3: 699
    }, {
      date: new Date(2022, 0, 4).getTime(),
      value: 8,
      value2: 367,
      value3: 500
    }, {
      date: new Date(2022, 0, 5).getTime(),
      value: 10,
      value2: 485,
      value3: 369
    }, {
      date: new Date(2022, 0, 6).getTime(),
      value: 12,
      value2: 354,
      value3: 250
    }, {
      date: new Date(2022, 0, 7).getTime(),
      value: 14,
      value2: 350,
      value3: 600
    }];;

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      })
    );

    var easing = am5.ease.linear;

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function createSeries(field, name, visible) {
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          minBulletDistance: 10,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{valueY}"
          }),
          visible: visible
        })
      );

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill"),
            stroke: root.interfaceColors.get("background"),
            strokeWidth: 2
          })
        });
      });

      series.data.setAll(data);
      legend.data.push(series);

      series.on("visible", function (visible, target) {
        if (visible) {
          chart.series.each(function (series) {
            if (series !== target) {
              series.set("visible", false);
            }
          });
        }
      });
    }

    createSeries("value", "Series 1", true);
    // createSeries("value2", "Series 2", false);
    // createSeries("value3", "Series 3", false);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(100, 30);
  }

  GetprojectComments() {
    this.service._GetDARAchievements(this.URL_ProjectCode).
      subscribe((data) => {
        // console.log("Comments data----------->",data)
        this._CommentsList = JSON.parse(data[0]['CommentsJson']);
        this.commentsLength = this._CommentsList.length;
        // this._EvenRecordsList = JSON.parse(data[0]['EvenRecordsJson']);
         console.log("Comments-List--------->",this._CommentsList)
      });
  }

  GetDMS_Memos() {
    this._LinkService._GetOnlyMemoIdsByProjectCode(this.URL_ProjectCode).
      subscribe((data) => {
        let Table_data: any = data;
        if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              this.dmslist = this._MemosSubjectList.length;
              console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
          this.dmslist = 0;
        }
      });
  }

  deleteMemos(memoId) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'memos_Delete',
        title1: 'Confirmation ',
        //message1: "proj_Name"
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      this._MemosSubjectList = [];
      let _DeleteSelectedMemo = [];
      _DeleteSelectedMemo.push({ MailId: memoId })
      //_DeleteList.push(pcode);
      //console.log("---->Delete Memo",_DeleteSelectedMemo);
      let arr1: any = this._DBMemosIDList;
      let arr2: any = _DeleteSelectedMemo;
      let result1 = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
      //console.log("Final Result ----->",result);
      this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
      this.memoId = JSON.stringify(result1);
      //console.log("-----Final O/p--->", this.memoId);
      let appId: number = 101;
      let UserId = this.Current_user_ID;
      if (result === true) {
        this._LinkService.InsertMemosOn_ProjectCode(this.URL_ProjectCode, appId, this.memoId, UserId).
          subscribe((data) => {
            // this._OpenMemosInfo(pcode,this.pName);
            //this.GetProjectsByUserName();
            let Returndata: any = data['Message'];
            this.notifyService.showInfo("", Returndata);
            this.UpdateMemos(this.URL_ProjectCode);
          });
      }
      else {
        this.notifyService.showInfo("Action Cancelled ", '');
        this.UpdateMemos(this.URL_ProjectCode);
      }
      this.UpdateMemos(this.URL_ProjectCode);
      this.GetDMS_Memos();
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
              this.dmslist = this._MemosSubjectList.length;
              
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this.dmslist = 0;
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  _AddLink() {
    let _ProjectCode: string = this.URL_ProjectCode;
    let appId: number = 101;//this._ApplicationId;
    // console.log("selected Memos From Dropdown-->", this._SelectedMemos); //eg: [{MailId:234}]
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
      console.log("body:",_ProjectCode,appId,this.memoId,UserId);
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.UpdateMemos(_ProjectCode);
          // this.GetDMS_Memos();
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
    // this._openInfoSideBar = false;
    // this._LinkSideBar=true;
  }

  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }

  getAttachments() {
    this.noFiles = false;
    this._LinkService._GetAttachments(this.Authority_EmpNo, this.URL_ProjectCode, this.ProjectBlock)
      .subscribe((data) => {
        this.AttachmentList = JSON.parse(data[0]['Attachments_Json']);
        this.action_attachment = JSON.parse(data[0]['action_attachments']);
        if (this.action_attachment == null)
          this.attachmentlength = this.AttachmentList.length;
        else
          this.attachmentlength = this.AttachmentList.length + this.action_attachment.length;
        this.TotalDocs = (data[0]['TotalDocs']);
        if (this.TotalDocs == 0)
          this.noFiles = true;
        // console.log(this.TotalDocs,this.AttachmentList.length);            
        // console.log("Attachments---->", this.AttachmentList);
      });
  }




  openPDF_Standard(standardid, emp_no, cloud, repDate: Date, proofDoc, type,submitby) {
    repDate = new Date(repDate);
    let FileUrl: string;
    FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

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
      // if (this.Authority_EmpNo == this.Responsible_EmpNo) {
      //   FileUrl= (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);
      // }
      // else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
      //   FileUrl= (FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);
      // }

      FileUrl = (FileUrl + emp_no + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&"+ "filename=" + proofDoc + "&" + "type=" + type;
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

        // if (this.Authority_EmpNo == this.Responsible_EmpNo) {
        //   FileUrl= (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." +type);
        // }
        // else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
        //   FileUrl= (FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." +type);
        // }
        FileUrl = (FileUrl + emp_no + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc + "." + type);
      }

      let name = "ArchiveView/" + standardid;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      proofDoc = proofDoc.replace(/#/g, "%23");
      proofDoc = proofDoc.replace(/&/g, "%26");
      // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&"+ "submitby=" + submitby + "&"+  "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }


  }

  openPDF(cloud, docName) {

    let FileUrl: string;
    FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";

    // if (cloud == false) {
    //   if (this.Authority_EmpNo == this.Responsible_EmpNo) {
    //     FileUrl=(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
    //   }
    //   else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
    //     FileUrl=(FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
    //   }

    // let name = "ArchiveView/"+this.URL_ProjectCode;
    // var rurl = document.baseURI + name;
    // var encoder = new TextEncoder();
    // let url = encoder.encode(FileUrl);
    // let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    // // proofDoc = proofDoc.replace(/#/g, "%23");
    // // proofDoc = proofDoc.replace(/&/g, "%26");
    // // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
    // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid;
    // var myWindow = window.open(myurl, url.toString());
    // myWindow.focus();
    // }
    // else if (cloud == true) {
    //   // window.open(docName);
    //   let name = "ArchiveView/"+this.URL_ProjectCode;
    // var rurl = document.baseURI + name;
    // var encoder = new TextEncoder();
    // let url = encoder.encode(FileUrl);
    // let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    // // proofDoc = proofDoc.replace(/#/g, "%23");
    // // proofDoc = proofDoc.replace(/&/g, "%26");
    // // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
    // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid ;
    // var myWindow = window.open(myurl, url.toString());
    // myWindow.focus();
    // }

    if (cloud == false) {
      if (this.Authority_EmpNo == this.Responsible_EmpNo) {
        window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
      }
      else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
        window.open(FileUrl + this.Authority_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
      }
    }
    else if (cloud == true) {
      window.open(docName);
    }
  }



  GetSubtask_Details() {
    if (this.filteredemp == true) {   
      this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null, this.selectedEmployee).subscribe(
        (data) => {
       
          this.Subtask_List = JSON.parse(data[0]['All_ResponsibleActions']);
          this.underapproval_list = JSON.parse(data[0]['Underapproval_Responsibleations']);
          this.Inprocess_List = JSON.parse(data[0]['Inprocess_Responsibleations']);
          this.Delay_List = JSON.parse(data[0]['Delay_Responsibleations']);
          this.Reject_List = JSON.parse(data[0]['Rejected_Responsibleations']);
          this.Cancel_List = JSON.parse(data[0]['Cancelled_Responsibleations']);
          this.CompletedList = JSON.parse(data[0]['Completed_Responsibleations']);
          this.Subtask_Res_List = JSON.parse(data[0]['SubTaskResponsibe_Json']);

          this.inProcessCount = this.Inprocess_List.length;
          this.underapprovalcount = this.underapproval_list.length;
          this.delaycount = this.Delay_List.length;
          this.rejectcount = this.Reject_List.length;
          this.cancelcount = this.Cancel_List.length;
          this.completedCount = this.CompletedList.length;
          this.subTaskCount = this.Subtask_List.length;

          if (this.subTaskCount != 0 && this.completedCount != 0) {
            this.action_count = this.completedCount + '/' + this.subTaskCount;
          }
         
          //  console.log('inprocess=', this.inProcessCount, 'completed', this.completedCount, 'total=', this.subTaskCount);
        });
    }

    else if (this.filteredemp == false) {
      this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null, null).subscribe(
        (data) => {
        
          this.Subtask_List = JSON.parse(data[0]['All_SubtaskDetails']);
          this.underapproval_list = JSON.parse(data[0]['Underapproval_subtaskdetails']);
          this.Inprocess_List = JSON.parse(data[0]['Inprocess_SubtaskDetails']);
          this.Delay_List = JSON.parse(data[0]['Delay_SubtaskDetails']);
          this.Reject_List = JSON.parse(data[0]['Rejected_SubtaskDetails']);
          this.Cancel_List = JSON.parse(data[0]['Cancelled_SubtaskDetails']);
          this.CompletedList = JSON.parse(data[0]['Completed_SubtaskDetails']);
          this.darArr = JSON.parse(data[0]['Json_ResponsibleInProcess']);

          this.Subtask_Res_List = JSON.parse(data[0]['SubTaskResponsibe_Json']);
          this.ProjectStatus = data[0]['ProjectStatus'];
           //console.log(this.raciPeople,"RACIS");
          this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
          this.totalSubtaskHours = (data[0]['SubtaskHours']);
          this.RACIS = JSON.parse(data[0]['RACIS_Count']);
          this.racislength = this.RACIS.length;
          const values = this.RACIS.map(obj => obj.RACIS);

          // Convert values to comma-separated string
          this.raciPeople = values.join(", ");
          //console.log(this.raciPeople,"RACIS");

          console.log(this.Subtask_List, "tasklist");
          //SubTasks Multiselect start         

          this.dropdownSettings_Employee = {
            singleSelection: true,
            idField: 'Team_Res',
            textField: 'TM_DisplayName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 1,
            allowSearchFilter: true
          };
          this.empDropdown = Array.from(this.Subtask_Res_List.reduce((m, t) => m.set(t.TM_DisplayName, t), new Map()).values());
          // console.log(this.empDropdown);
          //SubTasks Multiselect End
          this.underapprovalcount = this.underapproval_list.length;
          this.inProcessCount = this.Inprocess_List.length;
          this.delaycount = this.Delay_List.length;
          this.rejectcount = this.Reject_List.length;
          this.cancelcount = this.Cancel_List.length;
          this.completedCount = this.CompletedList.length;
          this.subTaskCount = this.Subtask_List.length;

          if (this.subTaskCount != 0 && this.completedCount != 0) {
            this.action_count = this.completedCount + '/' + this.subTaskCount;
          }
          // console.log('inprocess=', this.inProcessCount, 'completed', this.completedCount, 'total=', this.subTaskCount);
        });
    }
  }

  EmpOnselect(obj) {
    this.filteredemp = true;
    this.selectedEmployee = obj['Team_Res'];
    // console.log(this.selectedEmployee);
    this.GetSubtask_Details();
  }

  EmpOnDeselect() {
    this.filteredemp = false;
    this.selectedEmployee = null;
    this.GetSubtask_Details();
  }

  ActionOnSelect(obj) {
    // this.selectedEmpNo = obj['Emp_No'];
    this.selectedAction = obj;
  }

  OnUpdateClick() {
    if (this._remarks == "") {
      this.notifyService.showInfo("Remarks Cannot be Empty", '');
    }
    else if ((this.inProcessCount + this.delaycount) == 1 && (this.Current_user_ID == this.Responsible_EmpNo || this.Current_user_ID == this.Owner_EmpNo || this.Current_user_ID == this.Authority_EmpNo || this.isHierarchy == true)) {

      Swal.fire({
        title: 'This is the last action to be completed.',
        text: 'Do you want to proceed with main project submission?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          if (this.selectedFile == null) {
            this.notifyService.showInfo("Please attach the completion file to complete the main project", "Note");
          }
          else {
            const fd = new FormData();
            fd.append("Project_Code", this.Sub_ProjectCode);
            fd.append("Master_Code", this._MasterCode);
            fd.append("Team_Autho", this.Sub_Autho);
            fd.append("Projectblock", this.ProjectBlock);
            fd.append("Remarks", this._remarks);
            fd.append('file', this.selectedFile);
            fd.append("Project_Name", this._Subtaskname);
            this.service._UpdateSubtaskByProjectCode(fd)
              .subscribe(data => {
                // this.GetProjectDetails();
                // this.GetSubtask_Details();
                // Rebinding    
              });
            this.notifyService.showSuccess("Successfully Updated", 'Action completed');
            const fd1 = new FormData();
            fd1.append("Project_Code", this.URL_ProjectCode);
            fd1.append("Team_Autho", this.Authority_EmpNo);
            fd1.append("Remarks", this._remarks);
            fd1.append("Projectblock", this.ProjectBlock);
            fd1.append('file', this.selectedFile);
            fd1.append("Emp_No", this.Current_user_ID);
            fd1.append("Project_Name", this.ProjectName);
            console.log(fd1, "complete");
            this.service._fileuploadService(fd1).
              subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                  case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                  case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                  case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    console.log(this.progress, "progress");
                    if (this.progress == 100) {
                      this.notifyService.showInfo("File uploaded successfully", "Project Updated");
                      
                    }
                    break;
                  case HttpEventType.Response:
                    console.log('File upload done!', event.body);
                    var myJSON = JSON.stringify(event);
                      this._Message = (JSON.parse(myJSON).body).Message;
                      this.notifyService.showSuccess(this._Message, 'Success');
                }
                // console.log(event, "PC");
                // if (event.type == HttpEventType.UploadProgress) {
                //   this.progress = Math.round(event.loaded / event.total * 100);
                // }
                // else if (event.type === HttpEventType.Response) {
                //   // console.log(event);
                //   var myJSON = JSON.stringify(event);
                //   this._Message = (JSON.parse(myJSON).body).Message;
                //   this.notifyService.showSuccess(this._Message, 'Success');
                //   // console.log(this._Message,this.progress,"json");
                // }
                this.closeInfo();
                this.GetSubtask_Details();
                this.GetProjectDetails();
                this.getapprovalStats();
                this._projectSummary.GetProjectsByUserName('RACIS Projects');
              });
          }
        }
        else if (response.dismiss === Swal.DismissReason.cancel) {
          const fd = new FormData();
          fd.append("Project_Code", this.Sub_ProjectCode);
          fd.append("Master_Code", this._MasterCode);
          fd.append("Team_Autho", this.Sub_Autho);
          fd.append("Projectblock", this.ProjectBlock);
          fd.append("Remarks", this._remarks);
          fd.append('file', this.selectedFile);
          fd.append("Project_Name", this._Subtaskname);
          this.service._UpdateSubtaskByProjectCode(fd)
            .subscribe(data => {
              this._remarks = "";
              this._inputAttachments = "";
              this.GetProjectDetails();
              this.GetSubtask_Details();
              // Rebinding    
              this.closeInfo();
            });
          this.notifyService.showSuccess("Successfully Updated", 'Action completed');
        }
      });
    }
    else {
      console.log('in process count:',this.inProcessCount,'delay count:',this.delaycount);
      const fd = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Master_Code", this._MasterCode);
      fd.append("Team_Autho", this.Sub_Autho);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this._Subtaskname);
      // this._MasterCode = this.URL_ProjectCode;
      // this.ObjSubTaskDTO.MasterCode = this._MasterCode;
      // this.ObjSubTaskDTO.SubTask_ProjectCode = this.Sub_ProjectCode;
      // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      // this.ObjSubTaskDTO.Remarks = this._remarks;
      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          // this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          this._remarks = "";
          this._inputAttachments = "";
          this.GetProjectDetails();
          this.GetSubtask_Details();

          // Rebinding    

          this.closeInfo();

        });
      this.notifyService.showSuccess("Successfully Updated", 'Action completed');
    }
  }

  OnTabTask_Click() {
    this.GetSubtask_Details();
  }

  OnOverview_Click() {
    this.GetSubtask_Details();
  }



  OnEditProject(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textboxfocus_" + id)).focus();
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Span_DescName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextarea_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textareafocus_" + id)).focus();
  }

  OnEditProject_underapproval(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("underapprovalName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("underapprovalTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("underapprovalfocus_" + id)).focus();
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc_underapproval(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("underapproval_DescName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("underapprovalTextarea_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("underapprovalareafocus_" + id)).focus();
  }

  OnEditProject_inprocess(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("InprocessProjName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("InprocessTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("Inprocessfocus_" + id)).focus();
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc_inprocess(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Inprocess_DescName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("InprocessTextarea_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("Inprocessareafocus_" + id)).focus();
  }

  OnEditProject_delay(id, Pname) {
    this._modelProjectName = Pname;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("DelayProjName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("DelayTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("Delayboxfocus_" + id)).focus();
    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "none";
  }

  OnEditProject_Desc_delay(id, Desc) {
    this._modelProjDesc = Desc;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Delay_DescName_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("DelayTextarea_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("Delayareafocus_" + id)).focus();
  }



  OnEditProject_Alloc(id, aname, i, acode, duration) {
    this.actionName = aname;
    this.actCode = acode;
    this.actnum = i;
    this.subduration = duration;
    this.Editbutton = true;
    this.editduration = true;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editCategory = false;
    this.editRelease = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    // this._modelProjAlloc = allocated;
    // this.Editbutton = true;
    // // (<HTMLInputElement>document.getElementById("Span_DescName_all" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("AllocArea_" + id)).style.display = "block";
    // (<HTMLInputElement>document.getElementById("AllocFocus_" + id)).focus();

  }

  onEditDeadline(id) {
    // this._ProjDeadline = enddate;
    this.Editbutton = true;
    this.edithold = false;
    this.editDeadline = true;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editCategory = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    // (<HTMLInputElement>document.getElementById("Span_Deadline_" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("DeadlineArea_" + id)).style.display = "block";
    // (<HTMLInputElement>document.getElementById("Deadlinetext_" + id)).focus();
  }

  onEditCategory() {
    this.Editbutton = true;
    this.editCategory = true;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditClient() {
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = true;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditProjectResponsible() {
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = true;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode,this.Current_user_ID).subscribe(
      (data) => {
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
      });

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditProjectOwner() {
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = true;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode,this.Current_user_ID).subscribe(
      (data) => {
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
      });

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditActionResponsible(id, aname, i, acode) {
    this.actionName = aname;
    this.actCode = acode;
    this.actnum = i;
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = true;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.actCode,this.Current_user_ID).subscribe(
      (data) => {
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
      });

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditActionOwner(id, aname, i, acode) {
    this.actionName = aname;
    this.actCode = acode;
    this.actnum = i;
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = true;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.actCode,this.Current_user_ID).subscribe(
      (data) => {
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
      });

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditSupport() {
    this.Editbutton = true;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = true;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditEndDate(id, aname, i, acode, edate, sdate) {
    this.actionName = aname;
    this.actCode = acode;
    this.actnum = i;
    this.actionenddate = edate;
    this.actionStartdate = sdate;
    this.Editbutton = true;
    this.edithold = false;
    this.editCategory = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = true;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    // (<HTMLInputElement>document.getElementById("Span_EndDate_" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("EndDateArea_" + id)).style.display = "block";
    // (<HTMLInputElement>document.getElementById("EndDatetext_" + id)).focus(); 
    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onEditStartDate(id, aname, i, acode, sdate) {
    this.actionName = aname;
    this.actCode = acode;
    this.actnum = i;
    this.actionStartdate = sdate;
    this.Editbutton = true;
    this.edithold = false;
    this.editCategory = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = true;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    // (<HTMLInputElement>document.getElementById("Span_EndDate_" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("StartDateArea_" + id)).style.display = "block";
    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    // (<HTMLInputElement>document.getElementById("StartDatetext_" + id)).focus(); 
  }

  cancelProject(){
    this.Editbutton = false;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editcancel=true;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";

  }

  releaseProject(){
    this.Editbutton = false;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editnewrelease=true;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  releaseholdProject(){
    this.Editbutton = false;
    this.editCategory = false;
    this.edithold = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editnewrelease=false;
    this.editholdrelease=true;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onCancel(id) {

    (<HTMLInputElement>document.getElementById("SpanProjName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "none";

    //(<HTMLInputElement>document.getElementById("EidtBtn_" + id)).style.display = "inline-block";
    this.Editbutton = false;
    // For Description
    (<HTMLInputElement>document.getElementById("Span_DescName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("spanTextarea_" + id)).style.display = "none";

    this._modelProjDesc = null;
    this._modelProjectName = null;

    // (<HTMLInputElement>document.getElementById("Span_Deadline_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("DeadlineArea_" + id)).style.display = "none";
    // (<HTMLInputElement>document.getElementById("DeadlineArea_" + id)).classList.remove("d-block");

    //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";

    (<HTMLInputElement>document.getElementById("HoldArea_" + id)).classList.remove("d-block");

    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.remove("d-block");


  }

  onCancel_underapproval(id) {
    this.Editbutton = false;
    this._modelProjDesc = null;
    this._modelProjectName = null;

    (<HTMLInputElement>document.getElementById("underapprovalName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("underapprovalTextbox_" + id)).style.display = "none";

    (<HTMLInputElement>document.getElementById("underapproval_DescName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("underapprovalTextarea_" + id)).style.display = "none";
  }

  onCancel_inprocess(id) {
    this.Editbutton = false;
    this._modelProjDesc = null;
    this._modelProjectName = null;


    (<HTMLInputElement>document.getElementById("InprocessProjName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("InprocessTextbox_" + id)).style.display = "none";

    (<HTMLInputElement>document.getElementById("Inprocess_DescName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("InprocessTextarea_" + id)).style.display = "none";
  }

  onCancel_delay(id) {
    this.Editbutton = false;
    this._modelProjDesc = null;
    this._modelProjectName = null;


    (<HTMLInputElement>document.getElementById("DelayProjName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("DelayTextbox_" + id)).style.display = "none";

    (<HTMLInputElement>document.getElementById("Delay_DescName_" + id)).style.display = "inline-block";
    (<HTMLInputElement>document.getElementById("DelayTextarea_" + id)).style.display = "none";
  }

  closeAction(id) {
    this.Editbutton = false;
    this._ProjDeadline = null;
    this.extend_remarks = "";

    (<HTMLInputElement>document.getElementById("EndDateArea_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("StartDateArea_" + id)).style.display = "none";
  }

  closeDuration(id) {
    this.Editbutton = false;
    this._modelProjAlloc = null;
    this.alloc_remarks = "";
    (<HTMLInputElement>document.getElementById("AllocArea_" + id)).style.display = "none";
  }

  onHoldClick(id) {
    this.Editbutton = true;
    this.edithold = true;
    this.editCategory = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    // (<HTMLInputElement>document.getElementById("HoldArea")).classList.add("d-block");
    // (<HTMLInputElement>document.getElementById("HoldArea_" + id)).classList.add("d-block");
    // document.getElementsByClassName("date-drop1")[0].classList.remove("d-block");
    // document.getElementsByClassName("date-drop3")[0].classList.remove("d-block");
    // (<HTMLInputElement>document.getElementById("Holdtext_" + id)).focus();
  }

  release_alert() {
    this.holdDate = moment(this.hold_upto).format("DD-MM-YYYY");

    if (this.Status == 'Project Hold') {
      Swal.fire({
        title: 'This project is on hold until ' + this.holdDate,
        text: 'Are you sure to release this project?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          this.release_project();
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Project release cancelled!',
            'error'
          )
        }
      });
    }
    else {
      this.OnAddTaskClick();
    }
  }

  orgValueChange1(val) {
    this.release_date = moment(val.value).format("MM/DD/YYYY");
  }

  release_project() {

    // this.holdDate = moment(this.hold_upto).format("DD-MM-YYYY");
    this.dateR = new FormControl(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    this.Editbutton = true;
    this.edithold = false;
    this.editCategory = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editDeadline = false;
    this.transferproject = false;
    this.actendedit = false;
    this.actstartedit = false;
    this.editduration = false;
    this.editRelease = true;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  onTransferClick(id) {
    this.Editbutton = true;
    this.edithold = false;
    this.editCategory = false;
    this.editClient = false;
    this.editprojectOwner = false;
    this.editprojectResponsible = false;
    this.editActionOwner = false;
    this.editActionResp = false;
    this.editSupport = false;
    this.editDeadline = false;
    this.transferproject = true;
    this.actstartedit = false;
    this.actendedit = false;
    this.editduration = false;
    this.editRelease = false;
    this.editcancel=false;
    this.editnewrelease=false;
    this.editholdrelease=false;

    document.getElementById("btm-space").classList.remove("d-none");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
   
  }

  closehold(id) {
    // (<HTMLInputElement>document.getElementById("HoldArea")).classList.remove("d-block");
    (<HTMLInputElement>document.getElementById("HoldArea_" + id)).classList.remove("d-block");
    this.Holddate = null;
    this.hold_remarks = "";
  }

  closetransfer(id) {
    // (<HTMLInputElement>document.getElementById("TransferArea")).classList.remove("d-block");
    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.remove("d-block");
    this.selectedEmpNo = null;
    this.TransDate = null;
    this.transfer_remarks = "";
  }

  OnProject_Rename(id, Pcode) {
    if (this._modelProjectName != "" && this._modelProjDesc != "") {
      this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID).subscribe(data => {
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "");
        this.GetSubtask_Details();
        // this.GetProjectsByUserName();
        this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No, null).subscribe(
          (data) => {
            let list: any;
            list = JSON.parse(data[0]['ProjectInfo']);
            this.ProjectName = list[0]['Project_Name'];
            this.Description = list[0]['Project_Description'];
          });
      });
      this.onCancel(id);
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  onProject_ExtendDeadline(id, Pcode) {

    if(this.isAction==false){
      this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
    console.log(this._ProjDeadline, Pcode, "act");
    if (this._ProjDeadline != null) {
      this.service._ProjectDeadlineExtendService(Pcode, this._ProjDeadline, null, this.extend_remarks, null).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == 'Project Deadline not Updated') {
          this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
          this.GetProjectDetails();
        }
        else if (this._Message == 'Project Deadline Updated') {
          this.notifyService.showSuccess("Project end date updated", "Success");
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Date field cannot be empty", "Please select date.");
    }
    }
    else if(this.isAction==true){
      const dateOne = moment(this.mainDeadline).format("YYYY/MM/DD");
      const dateTwo = moment(this._ProjDeadline).format("YYYY/MM/DD");
      console.log(dateOne, dateTwo, "dates")
      if ((dateOne < dateTwo) && ((this.Current_user_ID == this.mainowner || this.Current_user_ID == this.mainResp || this.Current_user_ID == this.mainAutho))) {
        Swal.fire({
          title: 'Action deadline is greater than main project deadline ?',
          text: 'Do you want to continue for selection of date after main project deadline!!',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((response: any) => {
          if (response.value) {
            this.onAction_ExtendDeadline();
          } else if (response.dismiss === Swal.DismissReason.cancel) {
            this.close_space();
            Swal.fire(
              'Cancelled',
              'Action end date not updated',
              'error'
            )
          }
        });
      }
      else if ((dateOne < dateTwo) && (this.Current_user_ID != this.mainowner && this.Current_user_ID != this.mainResp && this.Current_user_ID != this.mainAutho)) {
        Swal.fire({
          title: 'Unable to extend end date for this action.',
          text: 'You have selected the action end date greater than project deadline. Please contact the main project responsible to extend main project end date and try again.',
        });
      }
      else {
        this.onAction_ExtendDeadline();
      }
    }
    
  }

  allocation: boolean = false;

  actiondeadline_alert() {

    const dateOne = moment(this.Projectdeadline).format("YYYY/MM/DD");
    const dateTwo = moment(this._ProjDeadline).format("YYYY/MM/DD");
    console.log(dateOne, dateTwo, "dates")
    if ((dateOne < dateTwo) && ((this.Current_user_ID == this.Owner_EmpNo || this.Current_user_ID == this.Responsible_EmpNo || this.Current_user_ID == this.Authority_EmpNo || this.isHierarchy == true))) {
      Swal.fire({
        title: 'Action deadline is greater than main project deadline ?',
        text: 'Do you want to continue for selection of date after main project deadline!!',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          this.onAction_ExtendDeadline();
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          this.close_space();
          Swal.fire(
            'Cancelled',
            'Action end date not updated',
            'error'
          )
        }
      });
    }
    else if ((dateOne < dateTwo) && (this.Current_user_ID != this.Owner_EmpNo && this.Current_user_ID != this.Responsible_EmpNo && this.Current_user_ID != this.Authority_EmpNo && this.isHierarchy == false)) {
      Swal.fire({
        title: 'Unable to extend end date for this action.',
        text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
      });
    }
    else {
      this.onAction_ExtendDeadline();
    }
  }

  check_allocation() {
    const newenddate = new Date(this._ProjDeadline);
    const oldendate = new Date(this.actionenddate);

    if (newenddate > oldendate) {
      this.allocation = true;
    }
    else {
      this.allocation = false;
    }

  }

  onAction_ExtendDeadline() {

    if(this.isAction==false){
          this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
        if (this._ProjDeadline != null) {
          this.service._ProjectDeadlineExtendService(this.actCode, this._ProjDeadline, null, this.extend_remarks, this._allocated).subscribe(data => {
            this._Message = data['message'];

            if (this._Message == 'Project Deadline not Updated') {
              this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
              this.GetProjectDetails();
              this.GetSubtask_Details();
            }
            else if (this._Message == 'Project Deadline Updated') {
              this.notifyService.showSuccess("Action end date updated.", "Success");
              this.dar_details();
              this.getDarTime();
              this.GetProjectDetails();
              this.GetSubtask_Details();
            }
            else if (this._Message == 'Project and action Deadline Updated') {
              this.notifyService.showSuccess("Project and Action end date updated.", "Success");

              this.GetProjectDetails();
              this.GetSubtask_Details();
            }
          });
          this.close_space();
        }
        else {
          this.notifyService.showInfo("Date field cannot be empty", "Please select date.");
        }

    }
    else if(this.isAction==true){
      this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
      if (this._ProjDeadline != null) {
        this.service._ProjectDeadlineExtendService(this.URL_ProjectCode, this._ProjDeadline, null, this.extend_remarks, this._allocated).subscribe(data => {
          this._Message = data['message'];

        if (this._Message == 'Project Deadline not Updated') {
          this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == 'Project Deadline Updated') {
          this.notifyService.showSuccess("Action end date updated.", "Success");
          this.dar_details();
          this.getDarTime();
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == 'Project and action Deadline Updated') {
          this.notifyService.showSuccess("Project and Action end date updated.", "Success");

          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Date field cannot be empty", "Please select date.");
    }

}
    

  }

  onAction_ExtendDPG() {
    this._ProjDeadline = this.datepipe.transform(this._ProjDeadline, 'MM/dd/yyyy');
    // console.log(this._ProjDeadline,id,Pcode,"act");
    if (this._ProjDeadline != null) {
      this.service._ProjectDeadlineExtendService(this.actCode, null, this._ProjDeadline, this.extend_remarks, null).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == 'Project Deadline not Updated') {
          this.notifyService.showError(this._Message + '.' + "Please select the appropriate date and try again.", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == 'Project Start-Date Updated') {
          this.notifyService.showSuccess("Action start date updated", "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Date field cannot be empty", "Please select date.");
    }
  }

  onProject_updateDuration() {

    if (this._modelProjAlloc != null && this._modelProjAlloc != 0) {
      this.service._NewProjectDurationService(this.actCode, this._modelProjAlloc, this.alloc_remarks, this.Current_user_ID).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Action duration not updated", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Action duration added successfully", "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Hours cannot be 0 or null", "Please try again with correct value");
    }
  }

  onProject_updateCategory() {

    if (this.selectedcategory != null && this.extend_remarks != null) {
      this.service._NewProjectCategoryService(this.URL_ProjectCode, this.Current_user_ID, this.selectedcategory, this.extend_remarks).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Project Category not updated", "Failed");
          this.GetProjectDetails();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project Category updated successfully", "Success");
          this.GetProjectDetails();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Category cannot be empty", "Please try again with correct value");
    }
  }


  onProject_updateClient() {
    if (this.selectedclient != null && this.extend_remarks != null) {
      this.service._NewProjectClientService(this.URL_ProjectCode, this.Current_user_ID, this.selectedclient, this.extend_remarks).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Project Client not updated", "Failed");
          this.GetProjectDetails();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project Client updated successfully", "Success");
          this.GetProjectDetails();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Client cannot be empty", "Please try again with correct value");
    }
  }

  onProject_updateSupport() {
    if (this.selectedsupport != null) {
      this.service._NewProjectSupportService(this.URL_ProjectCode, this.Current_user_ID, this.selectedsupport, this.extend_remarks).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Project Support team not updated", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project Support team updated successfully", "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("support team member cannot be empty", "Please try again with correct value");
    }
  }


  onProject_updateOwner() {
    this.objProjectDto.Project_Code = this.URL_ProjectCode;
    this.objProjectDto.Emp_No = this.Current_user_ID;
    this.objProjectDto.Project_Owner = this.selectedOwnResp;
    this.objProjectDto.Team_Res = null;
    this.objProjectDto.Remarks = this.extend_remarks;
    if (this.selectedOwnResp != null) {
      this.service._NewProjectOwnerRespService(this.objProjectDto).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Project owner not updated", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project owner updated successfully", "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.getapproval_actiondetails();
          this.getRACISandNonRACIS();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Project owner cannot be empty", "Please try again with correct value");
    }
  }

  onAction_updateOwner() {
    this.objProjectDto.Project_Code = this.actCode;
    this.objProjectDto.Emp_No = this.Current_user_ID;
    this.objProjectDto.Project_Owner = this.selectedOwnResp;
    this.objProjectDto.Team_Res = null;
    this.objProjectDto.Remarks = this.extend_remarks;
    if (this.selectedOwnResp != null) {
      this.service._NewProjectOwnerRespService(this.objProjectDto).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Action owner not updated", "Failed");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Action owner updated successfully", "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Action owner cannot be empty", "Please try again with correct value");
    }
  }

  onProject_updateResp() {
    // this.objProjectDto.Project_Code=this.URL_ProjectCode;
    // this.objProjectDto.Emp_No=this.Current_user_ID;
    // this.objProjectDto.Project_Owner=null;
    // this.objProjectDto.Team_Res=this.selectedOwnResp;
    // this.objProjectDto.Remarks=this.extend_remarks;
    // if (this.selectedOwnResp != null) {
    //   this.service._NewProjectOwnerRespService(this.objProjectDto).subscribe(data => {
    //     this._Message = data['message'];

    //     if (this._Message == '2') {
    //       this.notifyService.showError("Project responsible not updated", "Failed");
    //       this.GetProjectDetails();
    //       this.GetSubtask_Details();
    //     }
    //     else if (this._Message == '1') {
    //       this.notifyService.showSuccess("Project responsible updated successfully", "Success");
    //       this.GetProjectDetails();
    //       this.GetSubtask_Details();
    //     }
    //   });
    //   this.close_space();
    // }
    // else {
    //   this.notifyService.showInfo("Project responsible cannot be empty", "Please try again with correct value");
    // }

    this.Employee_List.forEach(element => {
      if (element.Emp_No == this.selectedOwnResp) {
        this.new_Res = element.DisplayName;
      }
    });

    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Responsible = this.selectedOwnResp;
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalObj.Remarks = this.extend_remarks;

    this.approvalservice.InsertProjectTransfer(this.approvalObj).subscribe(data => {
      this._Message = data['message'];

      if (this._Message == '1') {
        this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Transferred");
        this.GetProjectDetails();

      }
      else if (this._Message == '2') {
        this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
        this.GetProjectDetails();
      }
      else if (this._Message == '3') {
        this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Owner + '(' + this.Owner_EmpNo + ')', "Transfer under approval!");
        this.GetProjectDetails();
      }
      else if (this._Message == '4') {
        this.notifyService.showError("Please contact Project Owner", "Project Not Transferred!");
      }
    });
    this.close_space();
    this.closeInfo();

  }

  onAction_updateResp() {
    // this.objProjectDto.Project_Code=this.actCode;
    // this.objProjectDto.Emp_No=this.Current_user_ID;
    // this.objProjectDto.Project_Owner=null;
    // this.objProjectDto.Team_Res=this.selectedOwnResp;
    // this.objProjectDto.Remarks=this.extend_remarks;
    // if (this.selectedOwnResp != null) {
    //   this.service._NewProjectOwnerRespService(this.objProjectDto).subscribe(data => {
    //     this._Message = data['message'];

    //     if (this._Message == '2') {
    //       this.notifyService.showError("Action responsible not updated", "Failed");
    //       this.GetProjectDetails();
    //       this.GetSubtask_Details();
    //     }
    //     else if (this._Message == '1') {
    //       this.notifyService.showSuccess("Action responsible updated successfully", "Success");
    //       this.GetProjectDetails();
    //       this.GetSubtask_Details();
    //     }
    //   });
    //   this.close_space();
    // }
    // else {
    //   this.notifyService.showInfo("Action responsible cannot be empty", "Please try again with correct value");
    // }


    this.Employee_List.forEach(element => {
      if (element.Emp_No == this.selectedOwnResp) {
        this.new_Res = element.DisplayName;
      }
    });

    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Responsible = this.selectedOwnResp;
    this.approvalObj.Project_Code = this.actCode;
    this.approvalObj.Remarks = this.extend_remarks;

    this.approvalservice.InsertProjectTransfer(this.approvalObj).subscribe(data => {
      this._Message = data['message'];

      if (this._Message == '1') {
        this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Transferred");
        this.GetProjectDetails();
        this.GetSubtask_Details();

      }
      else if (this._Message == '2') {
        this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
        this.GetProjectDetails();
        this.GetSubtask_Details();
      }
      else if (this._Message == '3') {
        this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Owner + '(' + this.Owner_EmpNo + ')', "Transfer under approval!");
        this.GetProjectDetails();
        this.GetSubtask_Details();
      }
      else if (this._Message == '4') {
        this.notifyService.showError("Please contact Project Owner", "Project Not Transferred!");
      }
    });
    this.close_space();
    this.closeInfo();
  }

  onProject_Hold(id, Pcode) {
    this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
    // alert(Pcode);
    if (this.Holddate != null) {

      this.objProjectDto.Project_holddate = this.Holddate;
      this.objProjectDto.Project_Code = Pcode;
      this.objProjectDto.Remarks = this.hold_remarks;
      this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == 'Project Hold Updated') {
          this.notifyService.showSuccess(this._Message + " by " + this._fullname, "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.getReasonforholdandRejected();
          this.getRejectType();
          this.getholdate();
        }
      });
      this.close_space();
    }
    else {
      this.notifyService.showInfo("Project Hold date cannot be empty", "Please select a date.");
    }
  }

  closeLinkSideBar() {
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  OnAddTaskClick() {
    this.router.navigate(["./MoreDetails", this.URL_ProjectCode, "ActionToProject"]);
    document.getElementById("mysideInfobar1").classList.add("kt-action-panel--on");
    // document.getElementById("mysideInfobar_NewSubtask").style.width = "60%";
    // document.getElementById("mysideInfobar_Update").style.width = "0px";
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("moredet").classList.add("position-fixed");
    // this.MatInput = false;
    // this.ButtonAdd = false;
    // this.GetAllEmployeesForAssignDropdown();
    $("#mysideInfobar1").scrollTop(0);
  }

  onFileChange(e) {
    this.selectedFile = <File>e.target.files[0];
    console.log("--------------->",this.selectedFile);
  }
 
  sweetAlert() {
    if (this.Status == 'Completed') { 
      Swal.fire({
        title: 'This project is completed !',
        text: 'Do you want to reopen this project ?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((response: any) => {
        if (response.value) {
          this.OnAddTaskClick();
        } else if (response.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Action not created',
            'error'
          )
        }
      });
    }
    else {
      this.OnAddTaskClick();
    }
  }

  closeInfoProject() {
    // For closing sidebar on 'X' buttton
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    // For sidebar overlay background removing the slide on 'X' button
    document.getElementById("rightbar-overlay").style.display = "none";
    // For page top div removing fixed
    document.getElementById("moredet").classList.remove("position-fixed");
    this.selectedFile = "";
    // this.OnClickCheckboxProjectUpdate();
    this.Clear_Feilds();
  }

  OnClickCheckboxProjectUpdate() {
    this.service.SubTaskStatusCheck(this.URL_ProjectCode).subscribe(
      (data) => {
        if (data['Message'] == 1) {
          Swal.fire({
            title: 'Unable to complete this project !!',
            text: 'Action status are in rejected or pending ?',
            // icon: 'warning',
            showCancelButton: true
          });
        }
        else {
          // applying sidebar from mysideInfobar_ProjectsUpdate in html
          document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
          // placing the backgorund dim on opening sidebar
          document.getElementById("rightbar-overlay").style.display = "block";
          // Fixing the scrollbar for sidebar
          document.getElementById("moredet").classList.add("position-fixed");
          document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
          document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
        }
      });
  }

  OnStandardTaskSubmit() {
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
    // placing the backgorund dim on opening sidebar
    document.getElementById("rightbar-overlay").style.display = "block";
    // Fixing the scrollbar for sidebar
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
  }

  Clear_Feilds() {
    this.Editbutton = false;
    this.Sub_ProjectName = "";
    this._Description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._inputAttachments = null;
    this._inputAttachments2 = null;
    this.selectedEmpNo = '';
    this.selected_Employee = [];
    this.selectedFile = null;
    $('#uploadFile').val('');
    $('#_pdf').val('');
    $('#_file1').val('');
    $('#_upload').html('Select a file');
    $('#upload').html('Select a file');
    this.actionCode = null;
    this.workdes = "";
    this.current_Date = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
    this.dateF = new FormControl(new Date());
    this.starttime = null;
    this.endtime = null;
    this.starttimearr = [];
    this.endtimearr = [];
    $("#err2").empty();
    this.selectedType = null;
    this.commentSelected = null;
    this.noRejectType = false;
    this.comments = "";
    this.exist_comment = [];
    this.selectedEmp_No = null;
    this.TransDate = null;
    this.transfer_remarks = "";
    this.Holddate = null;
    this.hold_remarks = "";
    this._ProjDeadline = null;
    this.extend_remarks = "";
    this.dateR = new FormControl(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  }


  updateMainProject() {
    if (this.ProjectBlockName == 'To do List') {
      this.selectedFile = null;
    }

    if(this.isAction==false){
      const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.Authority_EmpNo);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.Current_user_ID);
    fd.append("Project_Name", this.ProjectName);
    this.service._fileuploadService(fd).
      subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(this.progress, "progress");
            break;
          case HttpEventType.Response:
            console.log('File upload done!', event.body);
            var myJSON = JSON.stringify(event);
              this._Message = (JSON.parse(myJSON).body).Message;
              if(this._Message=='Actions are in Under Approval'){
                this.notifyService.showError(this._Message, 'Failed');
              }
              else{
                if (this.progress == 100) {
                  this.notifyService.showInfo("File uploaded successfully", "Project Updated");
                }
                this.notifyService.showSuccess(this._Message, 'Success');
              }
        }
        this.closeInfo();
        this.getapproval_actiondetails();
        this.GetSubtask_Details();
        this.GetProjectDetails();
        this.getapprovalStats();
        this._projectSummary.GetProjectsByUserName('RACIS Projects');
      });
    }

    else if(this.isAction==true){
      const fd = new FormData();
      fd.append("Project_Code", this.URL_ProjectCode);
      fd.append("Master_Code", this.mainMastercode);
      fd.append("Team_Autho", this.Authority_EmpNo);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this.ProjectName);

      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          this._remarks = "";
          this._inputAttachments = "";
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.closeInfo();

        });
      this.notifyService.showSuccess("Successfully Updated", 'Action completed');
    }
    
  }

  changeStandard() {
    $('#_file1').val('');
    $('#upload').html('Select a file');
    this.selectedFile = null;
    this._remarks = "";
  }

  achieveStandard() {
    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.Authority);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.Current_user_ID);
    fd.append("Project_Name", this.ProjectName);
    // console.log(this._MasterCode,this._remarks,this.selectedFile,this.Current_user_ID,"fd");
    this.service._UpdateStandardTaskSubmission(fd).
      subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(this.progress, "progress");
            if (this.progress == 100) {
              this.notifyService.showInfo("File uploaded successfully", "Project Updated");
              
            }
            break;
          case HttpEventType.Response:
            console.log('File upload done!', event.body);
            var myJSON = JSON.stringify(event);
              this._Message = (JSON.parse(myJSON).body).Message;
              this.notifyService.showSuccess(this._Message, 'Success');
        }
        // if (event.type == HttpEventType.UploadProgress) {
        //   this.progress = Math.round(event.loaded / event.total * 100);
        //   console.log(this.progress, "progress")
        //   this.notifyService.showInfo("File uploaded successfully", "Project Updated");
        // }
        // else if (event.type === HttpEventType.Response) {
        //   alert(1)
        //   var myJSON = JSON.stringify(event);
        //   this._Message = (JSON.parse(myJSON).body).Message;
        //   this.notifyService.showSuccess(this._Message, 'Success');
        // }
        this.closeInfo();
        this.GetSubtask_Details();
        this.GetProjectDetails();
        this.getapprovalStats();
        this._projectSummary.GetProjectsByUserName('RACIS Projects');
      });
  }

  notachieveStandard() {
    this.selectedFile = null;
    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.Authority);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.Current_user_ID);
    fd.append("Project_Name", this.ProjectName);
    // console.log(this._MasterCode,this._remarks,this.selectedFile,this.Current_user_ID,"fd");
    this.service._UpdateStandardTaskSubmission(fd).
      subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
          this.notifyService.showInfo("File uploaded successfully", "Project Updated");
        }
        else if (event.type === HttpEventType.Response) {
          var myJSON = JSON.stringify(event);
          this._Message = (JSON.parse(myJSON).body).Message;
          this.notifyService.showSuccess(this._Message, 'Success');
        }
        this.closeInfo();
        this.GetSubtask_Details();
        this.GetProjectDetails();
        this.getapprovalStats();
        this._projectSummary.GetProjectsByUserName('RACIS Projects');
      });
  }

  LoadDocument(cloud, Pcode, Resp, url: string) {
    // (<HTMLInputElement>document.getElementById("documentPreview")).style.display="block";
    // url = "http://208.109.13.37/dmsapi/DataOutPut/react-handbook.pdf";
    // contenttype=".pdf";
    // if (contenttype == ".PDF" || contenttype == ".pdf" || contenttype == "application/pdf") {
    //   this._IsPdf = true;
    // }
    // else if (contenttype == ".jpg" || contenttype == ".png" || contenttype == ".PNG" || contenttype == ".jpeg") {
    //   this._IsPdf = false;
    // }
    this.src = url;

    let FileUrl: string;
    FileUrl = "http://217.145.247.42:81/YRGEP/Uploads/";

    if (cloud == false) {
      var myWindow = window.open(FileUrl + Resp + "/" + Pcode + "/" + url);
      myWindow.focus();
    }
    else if (cloud == true) {
      var myWindow = window.open(url);
      myWindow.focus();
    }

    // var myWindow = window.open(url);
    // myWindow.focus();
    //this.cd.detectChanges();
    //$('#documentPreview').modal('toggle');
  }

  async CallOnSubmitAction() {
    //  console.log('A');
    let a = await this.GetSubtask_Details();
    let b = await this.GetProjectDetails();
    this.router.navigate(["./MoreDetails", this.URL_ProjectCode]);
    // this. GetProjectsByUserName();
    // this.getDropdownsDataFromDB();
  }

  darcreate() {
    this.dateF = new FormControl(new Date());

    // this.dateF.setValue(this.datepipe.transform(new Date(), 'dd/MM/yyyy'));
    if (this.ProjectBlockName == 'Standard Tasks' || this.ProjectBlockName == 'Routine Tasks' || this.ProjectBlockName == 'To do List') {
      this.coresecondary = false;
    }
    else if ((this.ProjectBlockName == 'Core Tasks' || this.ProjectBlockName == 'Secondary Tasks') && (this.inProcessCount == 0 && this.delaycount==0)) {
      this.coresecondary = false;
    }
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  closedarBar() {
    // console.log(this.actionCode,"darcode");
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.notifyService.showError("Cancelled", '');
    this.Clear_Feilds();
  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }

  getdeadlinecount() {
    this.service.getDeadlineCountbyProjectcode(this.URL_ProjectCode).subscribe(data => {
      this.deadlineCount = data['deadlineCount'];
    })
  }

  //project transfer

  sweetAlert1(id, pcode) {
    let _ary = this.Employee_List.filter(x => x.Emp_No == this.selectedEmp_No);
    Swal.fire({
      title: 'Project Transfer!!',
      html: 'Do you want to transfer the project "<b>' + this.ProjectName + '</b> to <b>' + _ary[0].DisplayName + '</b>" ?',
      // icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.onProject_Transfer(id, pcode);
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Project Not Transferred!',
          'error'
        )
        this.close_space();
      }
    });
  }


  onProject_Transfer(id, Pcode) {
    if (this.TransDate != null || this.TransDate != undefined) {
      this.TransDate = this.datepipe.transform(this.TransDate, 'MM/dd/yyyy');
    }
    else {
      this.TransDate = null;
    }
    this.Employee_List.forEach(element => {
      if (element.Emp_No == this.selectedEmp_No) {
        this.new_Res = element.DisplayName;
      }
    });

    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Responsible = this.selectedEmp_No;
    this.approvalObj.deadline = this.TransDate;
    this.approvalObj.Project_Code = Pcode;
    this.approvalObj.Remarks = this.transfer_remarks;

    this.approvalservice.InsertTransferApprovalService(this.approvalObj).subscribe(data => {
      this._Message = data['message'];

      if (this._Message == '1') {
        this.notifyService.showSuccess("Project transferred to " + this.new_Res + '(' + this.approvalObj.Responsible + ')' + " from " + this.Responsible + '(' + this.Responsible_EmpNo + ')', "Successfully Transferred");
        this.GetProjectDetails();
        this.GetSubtask_Details();
        this.getapprovalStats();
        this.GetprojectComments();

      }
      else if (this._Message == '2') {
        this.notifyService.showSuccess("Project Transfer request sent to the transferee -" + this.new_Res + '(' + this.approvalObj.Responsible + ')', "Transfer under approval!");
        this.GetProjectDetails();
        this.GetSubtask_Details();
        this.getapprovalStats();
        this.GetprojectComments();
      }
      else if (this._Message == '3') {
        this.notifyService.showSuccess("Project Transfer request sent to Project Owner -" + this.Owner + '(' + this.Owner_EmpNo + ')', "Transfer under approval!");
        this.GetProjectDetails();
        this.GetSubtask_Details();
        this.getapprovalStats();
        this.GetprojectComments();
      }
      else if (this._Message == '4') {
        this.notifyService.showError("Please contact Project Owner", "Project Not Transferred!");
      }
    });
    this.close_space();
    this.closeInfo();
    // else {
    //   this.notifyService.showInfo("Project Deadline date cannot be empty", "Please select a date.");
    // }
  }
  showpro() {
    document.getElementById("showpro").classList.add("d-none");
    document.getElementById("hidepro").classList.remove("d-none");
  }
  // hidepro(){
  //   document.getElementById("hidepro").classList.add("d-none");
  //   document.getElementById("showpro").classList.remove("d-none");
  // }
  // hidecc(){
  //   document.getElementById("hidecc").classList.add("d-none");
  //   document.getElementById("showcc").classList.remove("d-none");
  // }
  showcc() {
    document.getElementById("showcc").classList.add("d-none");
    document.getElementById("hidecc").classList.remove("d-none");
  }
  onTransferCancel(id) {
    (<HTMLInputElement>document.getElementById("TransferArea_" + id)).classList.remove("d-block");
    this.selectedEmp_No = null;
    this.TransDate = null;
    this.transfer_remarks = "";
  }

  //Portfolio region

  AddPortfolio() {
    this._LinkSideBar = true;
    this._LinkSideBar1 = false;
    this.getPortfolios();
  }

  getPortfolios() {

    if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
      this._portfolioLength = 0;

    }
    else
      this._portfolioLength = this._portfoliolist.length;
    // console.log(this._portfoliolist,"lll");

    this.service.GetTotalPortfoliosBy_Employeeid().subscribe
      ((data) => {
        this.totalPortfolios = (data[0]['TotalPortfolios']);
      });

    this.service.GetPortfoliosBy_ProjectId(this.URL_ProjectCode).subscribe
      ((data) => {
        this._portfoliosList = data as [];

        this.dropdownSettings_Portfolio = {
          singleSelection: false,
          idField: 'Portfolio_ID',
          textField: 'Portfolio_Name',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 4,
          allowSearchFilter: true,
          clearSearchFilter: true
        };
      });
    document.getElementById("LinkSideBar1").classList.add("kt-quick-panel--on");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  Portfolio_Select(selecteditems) {
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_portDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    // console.log("Selected Ports In Array--->", this._SelectedPorts);
    // console.log(this.ngDropdwonPort,"ports");

  }

  Portfolio_SelectAll(selecteditems) {

    let arr = [];
    this.Empty_portDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    //  console.log("Selected Ports In Array1--->", this._SelectedPorts);

  }

  Portfolio_DeSelectAll() {
    this._SelectedPorts = [];
    // console.log("Selected Ports In Array1--->", this._SelectedPorts);
  }

  Portfolio_Deselect(selecteditems) {
    let arr = [];

    this.Empty_portDropdown = selecteditems;
    if (this.Empty_portDropdown != '') {
      this.Empty_portDropdown.forEach(element => {
        arr.push({ Port_Id: element.Portfolio_ID })
        this._SelectedPorts = arr;
      });
    }
    else {
      this._SelectedPorts = [];
    }

    // console.log("Deselect Memos--->", this._SelectedPorts, this.Empty_portDropdown);
  }

  addProjectToPortfolio() {
    this.selectedportID = JSON.stringify(this._SelectedPorts);
    // console.log(this.selectedportID,"portids");
    if (this.selectedportID != null) {
      this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
      this.objPortfolioDto.Project_Code = this.URL_ProjectCode;
      this.objPortfolioDto.Emp_No = this.Current_user_ID;

      this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
        subscribe((data) => {
          this._Message = (data['message']);
          // console.log(data);

          if (this._Message == 'Updated Successfully')
            this.notifyService.showSuccess("Project successfully added to selected Portfolio(s)", this._Message);
          else
            this.notifyService.showInfo("Please select atleast one portfolio and try again", "");

        });
    }

    this.ngDropdwonPort = [];
    this.closeLinkSideBar();
    this.GetProjectDetails();
    // this._openInfoSideBar = false;
  }

  OnPortfolioClick(P_id: any, P_Name: string, CreatedName: string) {
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

  DeleteProject(Proj_id: number, port_id: number, Pcode: string, proj_Name: string, createdBy: string) {
    this.deletedBy = this.Current_user_ID;
   
    this._portfoliolist.forEach(element => {
      if (port_id == element.Portfolio_ID)
        this.portfolioName = element.Portfolio_Name
    });
    //if (createdBy == this.Current_user_ID) {
    let String_Text = 'Delete';
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: this.portfolioName
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      
      if (result === true) {
        this.service.DeleteProject(Proj_id, port_id, Pcode, proj_Name, createdBy, this.deletedBy).subscribe((data) => {
          this.GetProjectDetails();
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action Cancelled ", '');
      }
    });
  }


  LoadDocument1(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
    FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (iscloud == false) {
      if (this.Authority_EmpNo == this.Responsible_EmpNo) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + url1);
      }
      else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
        FileUrl = (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + url1);
      }

      let name = "ArchiveView/" + this.URL_ProjectCode;
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
      let name = "ArchiveView/" + this.URL_ProjectCode;
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

  LoadDocument_action(pcode: string, iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
    FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (iscloud == false) {
      if (this.Authority_EmpNo == this.Responsible_EmpNo) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + url1);
      }
      else if (this.Authority_EmpNo != this.Responsible_EmpNo) {
        FileUrl = (FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + url1);
      }

      let name = "ArchiveView/" + pcode;
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
      let name = "ArchiveView/" + pcode;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(url1);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      filename = filename.replace(/#/g, "%23");
      filename = filename.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&"+ "submitby=" + submitby + "&"+ "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }



    // let name = "ArchiveView/"+pcode;
    // var rurl = document.baseURI + name;
    // var encoder = new TextEncoder();
    // let url = encoder.encode(url1);
    // let encodeduserid = encoder.encode(this.Current_user_ID.toString());
    // filename = filename.replace(/#/g, "%23");
    // filename = filename.replace(/&/g, "%26");
    // // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&type=1" + "&" + "MailDocId=" + MailDocId + "&" + "MailId=" + this._MemoId + "&" + "LoginUserId=" + this._LoginUserId + "&" + "IsConfidential=" + this.IsConfidential + "&" + "AnnouncementDocId=" + 0;
    // var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "type=" + type;
    // var myWindow = window.open(myurl, url.toString());
    // myWindow.focus();
  }


  //search actions:
  actionsearch: any;
  maxAllocation: any;

  clearsearch() {
    this.actionsearch = "";
  }

  alertMaxAllocation() {
    const newenddate = new Date(this._ProjDeadline);
    const oldendate = new Date(this.actionenddate);

    if (newenddate > oldendate) {
      var Difference_In_Time = oldendate.getTime() - newenddate.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      if (Difference_In_Days == 0) {
        Difference_In_Days = -1;
      }
      console.log(Difference_In_Time, Difference_In_Days, "allocation");
      this.maxAllocation = (-Difference_In_Days) * 10 / 1;
    }
  }
  
  
  updateProjectCancel(){

    Swal.fire({
      title: 'Project Cancel',
      html: 'Are you sure to cancel the project "<strong>' + this.ProjectName +'</strong>"?<br>Note: The cancelled project will be deactivated.',
      // icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        if(this.Current_user_ID==this.Responsible_EmpNo){
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Cancel';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;
  
          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
            this.close_space();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project cancel request sent to the project owner", "Success");
              this.GetProjectDetails();
              this.GetSubtask_Details();
              this.getRejectType();
              this.getapproval_actiondetails();
            }
            else if (this._Message == '2' || this._Message == '0') {
              this.notifyService.showError("Project cancel failed", "Failed");
            }
          });
        this.Clear_Feilds();
        console.log(this.approvalObj,"cancel")
      }
      else if(this.Current_user_ID==this.Owner_EmpNo || this.isHierarchy==true){
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Cancel';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;
  
          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
            this.close_space();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project cancelled by "+this._fullname, "Success");
              this.GetProjectDetails();
              this.GetSubtask_Details();
              this.getRejectType();
            }
            else if (this._Message == '2' || this._Message == '0') {
              this.notifyService.showError("Project cancel failed", "Failed");
            }
          });
        this.Clear_Feilds();
        console.log(this.approvalObj,"cancel")
      }
      else{
        this.close_space();
        this.notifyService.showError("Access denied","Failed")
      }
        
      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Project not canceled',
          'error'
        )
        this.close_space();
      }
    });

    
  }

  releasenewProject(){
      if(this.Current_user_ID==this.Responsible_EmpNo){
        this.approvalObj.Project_Code = this.URL_ProjectCode;
        this.approvalObj.Request_type = 'New Project Reject Release';
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;

        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
          this.close_space();
          this._Message = (data['message']);
          if (this._Message == '1') {
            this.notifyService.showSuccess("New Project reject release request sent to the project owner", "Success");
            this.GetProjectDetails();
            this.GetSubtask_Details();
            this.getRejectType();
            this.getapproval_actiondetails();
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Project release failed", "Failed");
          }
        });
      this.Clear_Feilds();
      console.log(this.approvalObj,"cancel")
    }
    else{
      this.close_space();
      this.notifyService.showError("Access denied","Failed")
    }
  }

  holdreleaseProject(){
    if(this.Current_user_ID==this.Responsible_EmpNo || this.Current_user_ID==this.Owner_EmpNo){
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.Request_type = 'Project Release';
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Remarks = this.hold_remarks;

      this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
        this.close_space();
        this._Message = (data['message']);
        if (this._Message == '1') {
          this.notifyService.showSuccess("Project released by "+this._fullname, "Success");
          this.GetProjectDetails();
          this.GetSubtask_Details();
          this.getRejectType();
        }
        else if (this._Message == '2' || this._Message == '0') {
          this.notifyService.showError("Project release failed", "Failed");
        }
       
      });
    this.Clear_Feilds();
    console.log(this.approvalObj,"cancel")
  }
  else{
    this.close_space();
    this.notifyService.showError("Access denied","Failed")
  }
}


}
