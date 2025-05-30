// import { LinkService } from './../../_Services/link.service';
// import { ConeColumn } from '@amcharts/amcharts4/charts';
// import { number } from '@amcharts/amcharts4/core';
// import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
// import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ViewChild, Component,ChangeDetectorRef, OnInit,Renderer2,ViewChildren,QueryList } from '@angular/core';
import { LinkService } from 'src/app/_Services/link.service';
import { DatePipe } from '@angular/common';
import { StatusDTO } from 'src/app/_Models/status-dto';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { UserDetailsDTO } from 'src/app/_Models/user-details-dto';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CategoryDTO } from 'src/app/_Models/category-dto';
import { CreateProjectComponent } from '../create-project/create-project.component';
import Swal from 'sweetalert2';
import { CalenderService } from 'src/app/_Services/calender.service';
import { ProjectMoreDetailsService } from '../../_Services/project-more-details.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatCalendar} from '@angular/material/datepicker';
import { AngularEditorConfig } from '@kolkov/angular-editor';


import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as _ from 'underscore';
import {  HttpEvent, HttpEventType } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { string } from '@amcharts/amcharts4/core';
import { pluginService } from 'chart.js';
import { add } from '@amcharts/amcharts4/.internal/core/utils/Array';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete'

import { BsServiceService } from 'src/app/_Services/bs-service.service';
// import { ac } from 'src/app/_LayoutDashboard/action-to-project/action-to-project.component';
import tippy from 'node_modules/tippy.js';
import {  ElementRef } from '@angular/core';
import * as moment from 'moment';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { ActionToAssignComponent } from '../action-to-assign/action-to-assign.component';
import { EventEmitter } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';


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
};


declare var $: any;
@Component({
  selector: 'app-project-unplanned-task',
  templateUrl: './project-unplanned-task.component.html',
  styleUrls: ['./project-unplanned-task.component.css'],
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

export class ProjectUnplannedTaskComponent implements OnInit{
    // selectedOption: string = '';
    @ViewChild('fileInput') fileInput: any;
    fileAttachment: any;
    file: File | null = null;
    selectedOption: string = 'option1';
    selectedFileName: string | null = null;

// meeting start


calendarOptions: CalendarOptions;

_ListProjStat: StatusDTO[];
  Current_user_ID: any;
  messageForEmpty: boolean;
  myDate: number;
  CurrentUser_fullname: string;
  _ActualProjectList = [];
  _CalendarProjectsList = {};
  _calenderDto: CalenderDTO;
  ProjectListArray: any = [];
  BlockNameProject1: any;
  Timeslab: any;
  MasterCode: any = [];
  MasterCode1: any = [];
  Subtask: any;
  Startts: any;
  PropStart: any;
  PurposeEnd: any;
  Endtms: any;
  Alltimes: any = [];
  selectedadayandtime: any = [];
  CalenderScheduletaskevent: any[] = [];
  Selecteddaate: any
  _arrayObj: any;
  StartTimearr: any = [];
  EndTimearr: any[] = [];
  validStartTimearr:any=[];
  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string;
  AllocatedHours: number;
  St_date: string = "";
  Ed_date: string;
  _status: string;
  Allocated_subtask: number;
  TM_DisplayName: string;
  SubmissionName: string;
  SearchOfPendingItem: any
  SearchOfDraftItem: any;
  SearchOfRequestItem: any;
  _Exec_BlockName: string = "";
  _SEndDate: any;



  _hrtime: any;
  _subname1: boolean;
  Project_Code: string;
  flagevent: number;
  flag_id: number;
  Schedule_ID: number = 0;
  pro_date: any;
  pro_sttime: any;
  pro_edtime: any;
  Event_requests1: any = [];
  EventAction_type: number;
  myFiles: string[] = [];
  _lstMultipleFiales: any;
  f1: any;
  arr: any = [];
  arr1: any = [];
  arr2: any = [];
  editTask: boolean = false;
  copyTask: boolean = false;
  create: boolean = false;
  _FutureEventTasksCount: number = 0;
  _AllEventTasksCount: number = 0;
  _OldRecurranceId: string;
  _OldRecurranceValues: string;
  _Oldstart_date: string;
  _OldEnd_date: string;
  _PopupConfirmedValue: number;
  dmsIdjson: any = [];
  Attachments_ary: any = [];
  Locationfulladd: string;
  ObjSubTaskDTO: SubTaskDTO;
  _onlinelink: boolean = false;
  _meetingroom:boolean=false;
  Link_Details: string;
  _labelName: string;
  timelineList: any;
  timelineType: string;
  type1: string = 'self';
  type2: string = 'racis';
  sortList: any = ['today', 'yesterday', 'this week', 'last week', 'this month', 'last month']
  selectedSort: string;
  yesterday: any;
  timelineDuration: any;
  showtimeline: boolean = true;
  today: any = new Date().toISOString().substring(0, 10);
  timeFrom: any;
  timeTo: any;
  creation_date: string;
  pending_status: boolean;
  pending: boolean;
  notProvided: boolean = false;
  projectsSelected: any = [];
  ScheduleType: any;



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
  // calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  // calendarEvents: EventInput[] = [];
  //For dates
  AllDatesSDandED: any[] = [];
  daysSelected: any[] = [];
  selectdaytime: any[] = [];
  daysSelectedII: any[] = [];
  singleselectarry: any[] = [];
  Doubleselectedday: any[] = [];
  Avaliabletime: any[] = [];
  Timechangearry: any[] = [];
  event: any;
  selected: Date | null;
  minDate = moment().format("YYYY-MM-DD").toString();
  // minDate = "2022-11-01";
  // maxDate = "2022-11-30";
  selecteddays: any[] = [];
  timeslotsavl: any[] = [];
  isChecked: string
  @ViewChild(MatCalendar) calendar: MatCalendar<Date>;
  Checkdatetimejson: any = [];
  initials: string;
  Subtask_List: SubTaskDTO[];
  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  pCode: string;
  StartDate: string; EndDate: string; ProjectName: string;
  ProjectCode: string; Status: string; ProjectType: string; Owner: string;
  Responsible: string; Autho: string; Coordinator: string; Informer: string;
  Support: string; Description: string; Com_Name: string; Project_Cost: number; Client_Name: string;
  duration: number; SubmissionType1: string; StandardDuration: string;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  MoreDetailsList: any;
  doubleclickdate: any;
  preventSingleClick = false;
  timer: any;
  delay: Number;
  _objStatusDTO: StatusDTO;



  _Message: string;
  slottime: string;
  _AssignedProjectsList: any;
  memoId: any;
  Projecttype: any;
  _selectedId = 0;
  _SecondSelectedId = 0;
  _total = 14;
  _firstClick: number = 0;
  Title_Name: any;
  Link_Type: any;
  Location_Type: any;
  Latitude_Type: any;
  Longtitude_Type: any;
  Description_Type: any;
  DMS_Name: any;
  User_Name: any;
  EventNumber: any;
  _EmployeeListForDropdown: any[] = [];
  loadAPI: Promise<any>;
  dropdownSettings_Emp: IDropdownSettings = {};
  ngEmployeeDropdown: any;
  ngEmployeeDropdown1: any = [];
  ngEmployeeDropdown2: any = [];
  EmployeeDropdown: string;
  monthdates: any[] = [];
  Scheduledjson: any[] = [];
  EventScheduledjson: any[] = [];
  Project_NameScheduledjson: any[] = [];
  Project_dateScheduledjson: any[] = [];
  Schedule_type1: any = 'Event';
  Status1: any;
  portfolio_Scheduledjson: any[] = [];
  User_Scheduledjson: any[] = [];
  DMS_Scheduledjson: any = [];
  Portfolio: any = [];
  Portfolio1: any = [];
  Portfoliolist_1: any = [];
  Note_deadlineexpire: boolean;
  MinLastNameLength: boolean;
  _SelectedEmployees: any = [];
  _SelectedEmpIds_String: string;
  SelectDms: any;
  SelectDms1: any;
  Searchword: string

  Proposedate: any;
  _StartDate: any;
  _EndDate: any;
  _MemosSubjectList: any;

  display: string;
  progress: number = 0;
  pro_enddate: string;
  Addressurl: string = "";
  selectedrecuvalue: string;
  timearr1: any = [];
  AllEndtime: any = [];
  timingarryend: any = [];
  Time_End: any = [];
  scstartdate: any = new Date();
  showsearch: boolean = false;
  Attachment12_ary: any = [];
  RemovedAttach: any = [];
  Memos_List: any;

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'undo', // Hide Undo button
        'redo', // Hide Redo button
        'strikeThrough',
        'subscript',
        'superscript',
        'indent',
        'outdent',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'heading',
        'fontName',
        // 'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses'
      ],
      [
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

// meeting end




    _SearchTask:string
    categorySearch:string
  _PortFolio_Namecardheader: any;
  _Portfolio_CreatedDT: string;
  portfolioName: string;

  _ObjAssigntaskDTO: AssigntaskDTO;
  _ObjCompletedProj: CompletedProjectsDTO;
  CurrentUser_ID: string;
  panelOpenState: boolean = false;
  public _selectedcatname: string;
  public _selectedcatid: string;
  public task_id: number;
    public datepipe: DatePipe

  // private _bar: boolean = false;
  get selectedcatname(): string {
    return this._selectedcatname;
  }
  set selectedcatname(value: string) {
    this._selectedcatname = value;
  }
  disablePreviousDate = new Date();
  disableAfterStartDate = new Date();

  isTodoProjectsLoaded:boolean=false;
  isDropdownDataLoaded:boolean=false;
  isCountsDataLoaded:boolean=false;

  public PortfolioList: any;
  SelectStartdate: null;
  Selectenddate: null;
  selectDay: null;


  constructor(public notifyService: NotificationService,
    public ProjectTypeService: ProjectTypeService,
    private renderer: Renderer2,
    public router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private CalenderService: CalenderService,
    private projectMoreDetailsService: ProjectMoreDetailsService,
    // public _projectunplanned: ProjectUnplannedTaskComponent,
    // public BsService: BsServiceService,
    // public service:GetRACISandNonRACISEmployeesforMoredetails,


    public dialog: MatDialog, public dateAdapter: DateAdapter<Date>,
    public BsService: BsServiceService,
    public _LinkService: LinkService,
    public service: ProjectTypeService,
    public createproject: CreateProjectComponent,
    private el: ElementRef


    // ,_Id
    // ,_Name
  ) {
    // this._Id='0';
    // this._Name='NA';
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._calenderDto = new CalenderDTO;
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.BsService.bs_AssignId.subscribe(i => this.task_id = i);
    this.BsService.bs_TaskName.subscribe(t => {
      this._taskName = t
      if (this._taskName == null) {

        this._taskName = null;
      }

    });


    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.ObjUserDetails = new UserDetailsDTO();
    this.ObjSubTaskDTO = new SubTaskDTO();
    this.ObjCategoryDTO = new CategoryDTO();
    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate());
    this.disableAfterStartDate.setDate(this.disableAfterStartDate.getDate());
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.isTodoProjectsLoaded=false;
    this.isDropdownDataLoaded=false;
    this.isCountsDataLoaded=false;
    this._FilteredTodoList = this._TodoList,
    this._FilteredCompletedList = this._CompletedList;
  }

  IfNoCategoryFound: string;
  IfNoTaskFound: string = "Please select category to view task's";
  IfNoCompletedTaskFound: string;

  // ngAfterContentChecked() {
  //   tippy('.Start_Date', {
  //     content: "Enter qwerty Name",
  //     arrow: true,
  //     animation: 'scale-extreme',
  //     theme: 'gradient',
  //     animateFill: true,
  //     inertia: true,
  //   });

  // }

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
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this.MinLastNameLength = true;

    this.getRACISandNonRACIS();
    this.GetProjectsByUserName();  // Fetch projects list. used in sidebars.
    // this.totalproject()
    this.getProjectTypeList();   // Fetch possible project types array. used in sidebars.
    this.getCatid();         // Fetch the previously opened category ID from the API or use the category ID from query params (if provided) and displays the category.
    this.GetAssignFormEmployeeDropdownList();  // Fetch employees list. used in sidebars.
    this.getrunwayCount();   // Fetch all categories count values eg: accepted count, pending count, rejected count and others .
    this.fetchPortfolios();  // Fetch portfolios list. used in sidebars.
    this.setTippys(); // Setting tippys. 
    this.getSidebarDropdownData();  // fetches required dropdowns data required in the sidebar area.

    this.totalproject();     // removes d-none from 4 accordians
    this.openTab();
  }


setTippys(){

   tippy('#tippy1', {
    content: "Runway tasks",
    arrow: true,
    animation: 'scale-extreme',
    //animation: 'tada',
    theme: 'gradient',
    animateFill: true,
    inertia: true,
    // trigger: 'click',
    // delay: [1000, 200]
   });

   tippy('#tippy2', {
    content: "Add category",
    arrow: true,
    animation: 'scale-extreme',
    //animation: 'tada',
    theme: 'gradient',
    animateFill: true,
    inertia: true,
    // trigger: 'click',
    // delay: [1000, 200]
  });

  tippy('#tippy3', {
    content: "Add task",
    arrow: true,
    animation: 'scale-extreme',
    //animation: 'tada',
    theme: 'gradient',
    animateFill: true,
    inertia: true,
    // trigger: 'click',
    // delay: [1000, 200]
  });

  tippy('.mybutton', {
    content: "Enter rack name",
    arrow: true,
    animation: 'scale-extreme',
    //animation: 'tada',
    theme: 'gradient',
    animateFill: true,
    inertia: true,
    // trigger: 'click',
    // delay: [1000, 200]
  });

}

fetchPortfolios(){
  this.ProjectTypeService.GetPortfoliosForAssignTask().subscribe(
    (data) => {  console.log("asdf::::::",data)
      this.PortfolioList = data as PortfolioDTO;
      console.log(this.PortfolioList,"portfoliosubn;");
    });
}




//  ngAfterViewInit(){
//        // open assigned task if asked in url
//     this.route.queryParamMap.subscribe((qparams)=>{
//       const assigned_taskId=qparams.get('taskId');
//       if(assigned_taskId){
//             alert(assigned_taskId)
//       }
//     });
//      // open assigned task if asked in url
//  }








  // ngAfterViewInit(): void {

  // }

  newCatid:any;
  categoryTasksLoaded:EventEmitter<any>;
  getCatid(){

    let category_Id;
    let taskToOpen;
    this.route.queryParamMap.subscribe((qparams)=>{
         category_Id=qparams.get('category');
         taskToOpen=qparams.get('taskid');
    });

    if(category_Id&&taskToOpen){
      this.newCatid=category_Id;
      this.GetTodoProjects();
      this.expandTask(taskToOpen);
    }
    else{
        // get last open category and show the list.
        this.ProjectTypeService._GetRunwayCatId(this.CurrentUser_ID).subscribe(
          (data) => {
            if(data!=null && data!=undefined && data!='')
            this.newCatid=(data[0]['CategoryId']);
            this.GetTodoProjects();
          });
    }
      this.router.navigate(["UnplannedTask/"]);
  }


  expandTask(taskId:number){

    this.categoryTasksLoaded=new EventEmitter<any>();
    this.categoryTasksLoaded.subscribe(()=>{ 
      // when all tasks of the category loaded.
      const listindex=[this._TodoList,this.ActionedAssigned_Josn,this._CompletedList,this.ActionedSubtask_Json].findIndex((list)=>{
        return list&&list.find((item)=>item.Assign_Id==taskId);
      });

      if(listindex>-1){
             const anchrId=listindex==0?'Unassigntask':
                           listindex==1?'AssignedTaskProject':
                           listindex==2?'Completed':
                           'Actiontoprojects';
             const e1:any=document.querySelector(`#${anchrId}Btn`);
             const e2=document.querySelector(`#${anchrId}Item-${taskId}`);
             const e3:any=e2.querySelector('.inputforfocus');

              if(e1.getAttribute('aria-expanded')=='false'){
                e1.click();
              }
          
             setTimeout(()=>e3.focus(),500);
             e2.classList.add('task-item-focus');
             e2.addEventListener('animationend',()=>e2.classList.remove('task-item-focus'));
             this.categoryTasksLoaded.unsubscribe();
      }
    });

  }








  _Demotext: string = "";
  _TodoList = [];
  _CompletedList = [];

  EnterSubmit(_Demotext) {

    if (_Demotext != "") {

      this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
      this._ObjAssigntaskDTO.TypeOfTask = "ToDo";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.TaskName = this._Demotext;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          //console.log("Data---->", data);
          this._TodoList = JSON.parse(data['TodoList']);
          let message: string = data['Message'];
          this._Demotext = "";
          //this.GetAssignTask();
          this.notifyService.showSuccess("Successfully", "Added");
          // this.closeInfo();

          // show user the task he added without need him to open the accordian
          this.openTab();   // 1. clear all accordian current state. 2. open the first accordian.   

        });
    }
    else {
      this.notifyService.showInfo("Failed to add task", "Please enter task name");
    }
    this.clearFeilds();
  }



 // new design of select prj,select memo, select portfo, select participants.....etc start

// choosedItems:any=[];   // initially nothing selected.
// onItemChoosed(itemno:any){
//    this.choosedItems.push(itemno);
// }
companies_Arr:any;
basedOnFilter:any={};
projectmodaltype:'project'|'portfolio'|'SMail'|'participant'|undefined;
choosedItems:any=new Array();
FilteredResults:any=[];     // it is used to store the filtered result.
isFilteredOn:boolean=false;
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

keepChoosedItems(){
  switch(this.projectmodaltype)
  {
      case 'project':{
        if(!this.MasterCode) // if MasterCode is null,undefined,'',0
          this.MasterCode=[];

        this.MasterCode=[...this.MasterCode, ...this.choosedItems.map(item=>item.Project_Code)]; // selected prj codes
        this.projectsSelected=[...this.projectsSelected,...this.choosedItems.map(item=>({ Project_Code:item.Project_Code, Project_Name:item.Project_Name, BlockNameProject:item.BlockNameProject, TM_DisplayName:item.TM_DisplayName }))]; // selected prj objs
        this.close_projectmodal();
      };break;

      case 'portfolio':{
            if (!this.Portfolio)   // if Portfolio is null,undefined,''
            this.Portfolio = [];

           this.Portfolio=[...this.Portfolio,...this.choosedItems];  // array of portfolio ids.
           this.close_projectmodal();
      };break;

     case 'SMail':{
          if(!this.SelectDms)   // if SelectDms is null,undefined,''
            this.SelectDms=[];

          this.SelectDms=[...this.SelectDms,...this.choosedItems];   // array of all selected dms id.
          this.close_projectmodal();
     };break;

     case 'participant':{
      if(!this.ngEmployeeDropdown)
         this.ngEmployeeDropdown=[];

        this.ngEmployeeDropdown=[...this.ngEmployeeDropdown,...this.choosedItems];
        this.close_projectmodal();
     };break;

  }

}

onItemChoosed(choosed:boolean,choosedItem:any){
    if(choosed){
      this.choosedItems.push(choosedItem);
    }
    else{
      const i=this.choosedItems.findIndex(item=>(this.projectmodaltype==='project')?(item.Project_Code==choosedItem.Project_Code):(item===choosedItem));
      if(i>-1)
      this.choosedItems.splice(i,1);

      // when removing already selected items
      // if(this.projectmodaltype==='PROJECT'){
      //       const j=this.MasterCode.findIndex(item=>item==choosedItem.Project_Code);
      //       if(j>-1){
      //         this.MasterCode.splice(j,1);
      //         this.projectsSelected.splice(j,1);
      //       }
      // }
      // else{
      //   const ary=this.projectmodaltype=='PORTFOLIO'?this.Portfolio:this.projectmodaltype=='DMS'?this.SelectDms:this.ngEmployeeDropdown;
      //   const j=ary.findIndex(item=>item==choosedItem);
      //   if(j>-1)
      //   ary.splice(j,1);
      // }
         // when removing already selected items
    }

    this.updateTippyItems();
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

clearAppliedFiltered(){
  this.basedOnFilter.byuser=null;
  this.basedOnFilter.bycompany=null;
    switch(this.projectmodaltype){
        case 'project':{
          this.onProjectSearch('');
        };break;
        case 'portfolio':{
          this.onPortfolioFilter();
        };break;
        case 'SMail':{
          this.onDMSFilter();
        };break;
        case 'participant':{
          this.onParticipantFilter();
        };break;
        default:{};
    }
    this.isFilteredOn=false;
}

// new design of select prj,select memo, select portfo, select participants.....etc end



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
    if(this.projectmodaltype=='participant')
     {
       keyname='DisplayName';
       arrtype=this._EmployeeListForDropdown;
       selectedinto='ngEmployeeDropdown';
       property_name='Emp_No';
     }
    else if(this.projectmodaltype=='portfolio')
    {
       keyname='Portfolio_Name';
       arrtype=this.Portfoliolist_1;
       selectedinto='Portfolio';
       property_name='portfolio_id';
    }
    else if(this.projectmodaltype=='SMail')
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

  selectedItemsTippy:any;
updateTippyItems(){
  let newstr='';
  let names=[];
  switch(this.projectmodaltype)
  {
      case 'project':{
         names=this.choosedItems.map((obj)=>obj.BlockNameProject);
      };break;
      case 'SMail':{
         names=this.Memos_List.filter(item=>this.choosedItems.includes(item.MailId)).map(obj=>obj.Subject);
      };break;
      case 'participant':{
         names=this._EmployeeListForDropdown.filter(item=>this.choosedItems.includes(item.Emp_No)).map(obj=>obj.DisplayName);
      };break;
      case 'portfolio':{
         names=this.Portfoliolist_1.filter(item=>this.choosedItems.includes(item.portfolio_id)).map(obj=>obj.Portfolio_Name);
      };break;
  }

  if(names&&names.length){
      newstr=`
      <div class='p-1'>
        <div class='fs-6 mb-3 text-info'>(${names.length}) selected</div>
        <ul type='i' class='pl-3'>
          ${names.map(item=>`<li class='fs-7 mb-1'>${item}</li>`).join('')}
        </ul>
      </div>
      `;
  }
  this.selectedItemsTippy[0].setContent(newstr);
}


projectmodal(modaltype:'project'|'portfolio'|'SMail'|'participant'){

  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("projectmodal").style.display = "block";
  this.projectmodaltype=modaltype;
  const searchField:any=document.querySelector(`#projectmodal input#${modaltype=='project'?'PrjInputSearch':'InputSearch'}`);
  if(searchField)searchField.focus();

  if(modaltype==='project'){
    this.onProjectSearch('');
    this.choosedItems.getPcodes=()=>{
        return this.choosedItems.map(item=>item.Project_Code);
    }
  }

  if(modaltype!='project'){
    this.onInputSearch('');
  }

  setTimeout(()=>{
    this.selectedItemsTippy=tippy((this.projectmodaltype=='project')?'#keep-items-btn1':'#keep-items-btn2', {
      content: '',
      arrow: true,
      animation: 'scale-extreme',
      theme: '',
      placement: 'left',
      allowHTML: true
    });
  },1000)

}


  characterCount: number = 0;

  updateCharacterCount(): void {

    // Create a temporary div element to strip out HTML tags
    const tempElement = document.createElement('div');
    tempElement.innerHTML = this.Description_Type;
    const textContent = tempElement.textContent || tempElement.innerText || '';
    this.characterCount = textContent.length;
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

customrecurrencemodal() {
    // document.getElementById('drop-overlay').classList.add("show");
    // document.getElementById('customrecurrence').classList.add("show");
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

  close_customrecurrencemodal() {
    // document.getElementById('drop-overlay').classList.remove("show");
    // document.getElementById('customrecurrence').classList.remove("show");
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

  date_menu(dialogId:string){
    document.getElementById(dialogId).classList.add("show");
    document.getElementById('date-menu').classList.add("show");
    document.getElementById('drop-overlay').classList.add("show");


  }
  date_menu_close(dialogId:string){
    $(`#${dialogId}`).removeClass('show');
    $('#date-menu').removeClass('show');
    $('#drop-overlay').removeClass('show');

  }
  date_menu_modal() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "block";
    document.getElementById("datemenu").style.display = "block";

  }
  date_menu_modal_close() {
    document.getElementById("schedule-event-modal-backdrop").style.display = "none";
    document.getElementById("datemenu").style.display = "none";

  }

datemen(dialogId:string){
  document.getElementById(dialogId).classList.add("show");

}
date_menuclo(dialogId:string){
  $(`#${dialogId}`).removeClass('show');
}





  before_edit(){
    document.getElementById("before-edit").style.display = "none";
    document.getElementById("cancelid").style.display = "flex";
    document.getElementById("after-edit").style.display = "flex";
  }

  showedit(){
    document.getElementById("before-edit").style.display = "flex";
    document.getElementById("after-edit").style.display = "none";
    document.getElementById("cancelid").style.display = "none";
  }
  // previousdate :Date= new Date(this._EndDate.getFullYear(),this._EndDate.getMonth(),this._EndDate.getDate(),0,0,0,0)

  ActionedSubtask_Json = [];
  ActionedAssigned_Josn = [];
  ActualActionedAssigned_Josn=[];
  CountsJson: any;
  Clientjson:any;
  EmployeeLists:any;
  userFound:boolean | undefined

  GetAssigned_SubtaskProjects() {
    this.loading = true;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this._Categoryid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.loading = false;
        this.CategoryList = JSON.parse(data[0]['CategoryList']);

        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        console.log('sdcssd',this._TodoList)
        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        this.Clientjson=JSON.parse(data[0]['Client_json'])

        this.EmployeeLists = JSON.parse(data[0]['EmployeeList']);

        this.FiterEmployee=this.EmployeeList;
        this.userFound = true

        console.log("Data---->", this.FiterEmployee);




      });
  }

  LoadDocument(url: string){
    var myWindow = window.open(url);
    myWindow.focus();
  }


  status_list:any;
  procount:any;
  catcount:any;
  acceptCount: any;
  pendingCount:any;
  rejectCount:any;
  allCount:any;
  completedCount: any;
  UnassignCount:any
  getrunwayCount(){
    this.isCountsDataLoaded=false;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this.ProjectTypeService._GetCategoryCountforRunway(this._ObjCompletedProj).subscribe(
      (data) => {

        this.isCountsDataLoaded=true;
        this.procount = JSON.parse(data[0]['Procount']);
        this.catcount = JSON.parse(data[0]['CatCount']);
        this.status_list = JSON.parse(data[0]['statuscount']);
        console.log(this.status_list,"this.status_listthis.status_list")

        this.status_list.forEach(element => {
          // if(element.Status=='All'){
          //   this.allCount = element.SCount;
          // }
          if(element.Status=='Accepted'){
            this.acceptCount = element.SCount;
          }
          if(element.Status=='Pending'){
            this.pendingCount = element.SCount;
          }
          if(element.Status=='Rejected'){
            this.rejectCount = element.SCount;
          }

          if(element.Status=='Completed'){
            this.completedCount = element.SCount;
          }
          if(element.Status=="UnAssigned"){
            this.UnassignCount = element.SCount;
          }
          this.allCount = this.acceptCount + this.pendingCount + this.rejectCount +  this.completedCount + this.UnassignCount
        });

      console.log(this.acceptCount,this.pendingCount,this.rejectCount,this.procount,this.catcount,this.completedCount,this.allCount,"count","this.completedCount");

      });

  }

  underDev() {
    this.notifyService.showError("**Development under maintainance", "Failed!!");
  }

  userCategory:any[] = []
  SystemCategory:any[] = []


  refetchPageContent(){
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this.newCatid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe((data) => {
         this.CategoryList = JSON.parse(data[0]['CategoryList']);

         // Prepare SystemCategory using CategoryList
         this.SystemCategory = [];
         this.CategoryList.forEach((item)=>{
           if(  item.Category_ID == 2411 || item.Category_ID == 3595){
             this.SystemCategory.push(item)
           }
         });

        // Prepare userCategory using CategoryList
        this.userCategory = [];
        this.CategoryList.forEach((item)=>{
        if(item.Category_ID !== 2411 && item.Category_ID !== 3595){
          this.userCategory.push(item)
        }
        });

        //Prepare accordian runways
        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.openTab();

        if(this.ActionedSubtask_Json.length>0 || this.ActionedAssigned_Josn.length>0 || this._TodoList.length>0){


          //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
          this._CategoryActive = true;

          this.IfNoTaskFound = "";
          this._Categoryid = data[0]["CategoryId"];
          this._CategoryName = data[0]["CategoryName"];
          this.ShowTaskList_Div = false;
          this.Label_TaskName = false;
          this.Textbox_EditTaskName = true;
          this._taskName = "";

          /// Get Tasks On Category Click  /////
          this._ObjCompletedProj.PageNumber = 1;
          this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
          this._ObjCompletedProj.CategoryId = this._Categoryid;
          this._ObjCompletedProj.Mode = 'Todo';
          // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        }
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        let _Accepted =0;
        let _Pending =0;
        let _Rejected=0;
        this.ActionedAssigned_Josn.forEach(element => {
          if(element.Status=="Accepted"){
            _Accepted=_Accepted+1;
          }
          else if(element.Status == "Pending"){
            _Pending=_Pending+1;
          }
          else if(element.Status == "Rejected"){
            _Rejected=_Rejected+1;
          }
        });
        this.CountsAccepted= _Accepted;
        this.CountsPending= _Pending;
        this.CountsRejected= _Rejected;

    })
  }















  GetTodoProjects() {

    this.isTodoProjectsLoaded=false;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this.newCatid;
    this._ObjCompletedProj.Mode = 'Todo';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {     
        this.isTodoProjectsLoaded=true;
        // console.log("Data---->", data);
        this.CategoryList = JSON.parse(data[0]['CategoryList']);   console.log(this.CategoryList,"this.CategoryList");

        // Prepare SystemCategory using CategoryList
        this.SystemCategory = [];
        this.CategoryList.forEach((item)=>{
          if(  item.Category_ID == 2411 || item.Category_ID == 3595){
            this.SystemCategory.push(item)
          }
        });

        // Prepare userCategory using CategoryList
        this.userCategory = [];
        this.CategoryList.forEach((item)=>{
        if(item.Category_ID !== 2411 && item.Category_ID !== 3595){
          this.userCategory.push(item)
        }
        });
 
        //Prepare accordian runways

        if (this.newCatid == '-1'||this.newCatid == '-2'||this.newCatid == '-3'){  //Accepted, Pending, Rejected
          this.ActualActionedAssigned_Josn=JSON.parse(data[0]['ActionedAssigned_Josn']);
          this.ActionedAssigned_Josn=[...this.ActualActionedAssigned_Josn];
          // prepare filter box sort by emps dropdown. 
          const allemps:any=[];
          this.ActionedAssigned_Josn.forEach((ob:any)=>{
              const k=allemps.findIndex(_e=>_e.empNo==ob.Emp_No);
              if(k==-1){
                allemps.push({ empNo:ob.Emp_No, empName:ob.AssignedTo, total:1});
              }
              else{
                allemps[k].total+=1;
              }
          });
          this.employeeOptions=allemps;
          console.log('allemps:',allemps);
          // prepare filter box sort by emps dropdown. 
        
        }
        else if(this._selectedcatid == '-4'){      // UnAssign
          this._TodoList = JSON.parse(data[0]['ActionedAssigned_Josn']);
        }
        else if(this._selectedcatid == '-5'){     // Completed
          this._CompletedList = JSON.parse(data[0]['ActionedAssigned_Josn']);
        }
        else{    // All, System category, user category
                this._TodoList = JSON.parse(data[0]['JsonData_Json']);
                this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
                this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
                this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        }



        // this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        // this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        // this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        // this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        debugger
        if(['-1','-2','-3','-4','-5','-6'].includes(this.newCatid.toString())){
          this.showAddTaskOption(false);

        }
        else{
          this.showAddTaskOption(true);
        }
        
        this.openTab();   

        console.log(this._TodoList,"this._TodoList");
        console.log(this.ActionedAssigned_Josn,"this.ActionedAssigned_Josn");
        console.log(this._CompletedList,"this._CompletedList");
        console.log(this.ActionedSubtask_Json,"ActionedSubtask_Json");

        if(this.ActionedSubtask_Json.length>0 || this.ActionedAssigned_Josn.length>0 || this._TodoList.length>0){


          //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
          this._CategoryActive = true;

          this.IfNoTaskFound = "";
          this._Categoryid = data[0]["CategoryId"];   
          const category_name=data[0]["CategoryName"];
          this._CategoryName=category_name?category_name:this._Categoryid=='-1'?'Accepted':this._Categoryid=='-2'?'Pending':this._Categoryid=='-3'?'Rejected':
          this._Categoryid=='-4'?'Unassign':this._Categoryid=='-5'?'Completed':this._Categoryid=='-6'?'All':'';

          this.ShowTaskList_Div = false;
          this.Label_TaskName = false;
          this.Textbox_EditTaskName = true;
          this._taskName = "";

          /// Get Tasks On Category Click  /////
          this._ObjCompletedProj.PageNumber = 1;
          this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
          this._ObjCompletedProj.CategoryId = this._Categoryid;
          this._ObjCompletedProj.Mode = 'Todo';
          // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
        }
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
        let _Accepted =0;
        let _Pending =0;
        let _Rejected=0;
        this.ActionedAssigned_Josn.forEach(element => {
          if(element.Status=="Accepted"){
            _Accepted=_Accepted+1;
          }
          else if(element.Status == "Pending"){
            _Pending=_Pending+1;
          }
          else if(element.Status == "Rejected"){
            _Rejected=_Rejected+1;
          }
        });
        this.CountsAccepted= _Accepted;
        this.CountsPending= _Pending;
        this.CountsRejected= _Rejected;


        if(this.categoryTasksLoaded){
          setTimeout(()=>{
            this.categoryTasksLoaded.emit();
          },1000);
        }


      });

  }

  OnRadioClick(id) {

    this._ObjAssigntaskDTO.TypeOfTask = "Update";
    this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {

        this.GetAssigned_SubtaskProjects();
        // this._TodoList = JSON.parse(data['TodoList']);
        // this._CompletedList
        // this._CompletedList = JSON.parse(data['CompletedList']);

        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
          this._Demotext = "";
        this.notifyService.showSuccess("", 'Task completed successfully.');

  //  if (message=='Todomeeting'){
  //   this.GetAssigned_SubtaskProjects();
  //   this._Demotext = "";
  //   this.notifyService.showSuccess("", message);
  //  }
  //  else{
  //   this.notifyService.showError('error',message)
  //  }

      });
      this.unassign_closeInfo()
      this.checkedTaskNames = []

  }

  On_Uncheck(id) {

    this._ObjAssigntaskDTO.TypeOfTask = "UnCheck";
    this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
    this._ObjAssigntaskDTO.AssignId = id;
    this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
    this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
      (data) => {


        let message: string = data['Message'];
        this.GetAssigned_SubtaskProjects();
        this._Demotext = "";
        this.notifyService.showInfo("", 'Task removed successfully from completed.');


        // if( message =='Todomeeting'){
        // this.GetAssigned_SubtaskProjects();
        // this._Demotext = "";

        // this.notifyService.showInfo("", message);
        // }
        // else{
        //   this.notifyService.showError('error',message)
        // }

      });

  }

  _Deletetask(id, name) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'Todo_Delete',
        title1: 'Confirmation ',
        taskName: name
        //message1: "proj_Name"
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this._ObjAssigntaskDTO.TypeOfTask = "Delete";
        this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
        this._ObjAssigntaskDTO.AssignId = id;
        this._ObjAssigntaskDTO.CategoryId = this._Categoryid;
        this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
          (data) => {
            this._TodoList = JSON.parse(data['TodoList']);
            this._CompletedList = JSON.parse(data['CompletedList']);
            let message: string = data['Message'];
            this._Demotext = "";
            this.notifyService.showInfo("Successfully", message);
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
    });
  }

  public EmployeeList: any;
  public filterText: any;
  

  onFilterChange(event) {
    this.filterText = event
    //console.log("---Event------>", this.filterText);
    this.GetProjectsByUserName();
  }





  //Fetching Employee For Assigning Projects
  GetAssignFormEmployeeDropdownList() {
    this.isDropdownDataLoaded=false;
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    console.log('Employee List:',this._ObjCompletedProj);
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.isDropdownDataLoaded=true;
        this.EmployeeList = JSON.parse(data[0]&&data[0]['EmployeeList']);
        console.log(this.EmployeeList,'this.EmployeeListthis.EmployeeListthis.EmployeeList')
      });
  }

  todayDate: Date = (new Date);
  // _EndDate: Date = null;
  // _StartDate: Date = null;

  _Description: string;
  _SelectedEmpNo: string = '';
  SelectedEmplList = [];
  _remarks: string = "";

  EmployeeOnSelect(obj) {
    this._SelectedEmpNo = obj['Emp_No'];
    this.selectedEmployee = this._SelectedEmpNo;
  }

  EmployeeOnDeselect(obj) {
    this._SelectedEmpNo = "";
    this.selectedEmployee = this._SelectedEmpNo;
  }



  // EmployeeOnSelected(obj) {
  //
  //   // this.selectedEmpNo = obj['Emp_No'];
  //   if(obj['Emp_No'] == this.Owner_Empno){
  //     this.selectedEmpNo="";
  //     this.formFieldsRequired = true;
  //     this.notifyService.showInfo("Action cannot be assigned to project owner","");
  //   }
  //   else{
  //     this.formFieldsRequired = false;
  //     this.selectedEmpNo = obj['Emp_No'];
  //   }
  // }





  // onEmpChange(selectedEmpNo) {
  //   this._SelectedEmpNo = selectedEmpNo;
  // }
  //---------- Insert Assign Task ----------------//

  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._SelectedEmpNo = "";
    this.selectedProjecttype = null;
    this.selectedProjectCode = "";
    this.SelectedEmplList = [];
    this.selectedProjectCodelist = [];
    this._Demotext="";
    this.Mdl_CategoryName= "";
  }

  // CallOnSubmitCategory() {
  //   // console.log('A');
  //   this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
  //   // this.GetTodoProjects();

  //   // setTimeout(function(){
  //   //   alert(this._selectedcatid);
  //   //   this.OnCategoryClick(this._selectedcatid, this._selectedcatname);
  //   // },3000);

  // }

  Mdl_CategoryName: string = "";
  CategoryList: any;

  OnSubmitCategory(Mdl_CategoryName) {
    if (this.Mdl_CategoryName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "CategoryInsert";
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.CategoryName = Mdl_CategoryName;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          //console.log(data);
          //this._TodoList = JSON.parse(data['TodoList']);
          // this.GetTodoProjects();
          // this.CategoryList = JSON.parse(data['CategoryList']);
          let message: string = data['Message'];
          this.notifyService.showSuccess("Successfully", message);
          this.refetchPageContent();  // rebind

          // this.Mdl_CategoryName = "";
        });
    }
    else {
      this.notifyService.showInfo("Category name required.", "");
    }
    this.clearFeilds()
  }

















  _Categoryid: any;
  _CategoryName: string;
  ShowTaskList_Div: boolean = true;
  _CategoryActive: boolean;
  CountsAccepted: any;
  CountsPending: any;
  CountsRejected: any;
  Countunassign:any;
  employeeOptions:{empNo:string, empName:string}[]=[];   // list of all employees info for dropdown used in filter dropdown.


  sortListByEmployee(_option:string){
    
    this.ActionedAssigned_Josn=this.ActualActionedAssigned_Josn.filter((ob:any)=>{
          return _option=='totalProjects'||ob.Emp_No==_option;
    });   
  }



  isCategoryContentLoading:boolean=false;

  OnCategoryClick(C_id, C_Name) {
    // _Id = C_id;
    // _Name = C_Name;

    this._selectedcatname = C_Name;
    this._selectedcatid = C_id;
    this.BsService.setNewCategoryID(this._selectedcatid);
    this.BsService.setNewCategoryName(this._selectedcatname);
    //(<HTMLInputElement>document.getElementById("SelectedCat_" + C_id)).style.backgroundColor = "#e1e1ef";
    this._CategoryActive = true;

    this.IfNoTaskFound = "";
    this._Categoryid = C_id;
    this._CategoryName = C_Name;
    this.ShowTaskList_Div = false;
    this.Label_TaskName = false;
    this.Textbox_EditTaskName = true;
    this._taskName = "";
    /// Get Tasks On Category Click  /////
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.CategoryId = this._Categoryid;
    this._ObjCompletedProj.Mode = 'Todo';
    // alert(this._Categoryid);
    this.isCategoryContentLoading=true;

    
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {   
        this.isCategoryContentLoading=false;
console.log(data,"Checking data of tasks")

this._TodoList = [];
this._CompletedList = [];
this.ActionedSubtask_Json = [];
this.ActionedAssigned_Josn = [];
this.ActualActionedAssigned_Josn=[];
this.employeeOptions=[];  
this.setActiveButton('totalProjects');  // set to default
 // clear prev data.

if (this._selectedcatid == '-1'||this._selectedcatid == '-2'||this._selectedcatid == '-3'){  //Accepted, Pending, Rejected
  this.ActualActionedAssigned_Josn=JSON.parse(data[0]['ActionedAssigned_Josn']);
  this.ActionedAssigned_Josn=[...this.ActualActionedAssigned_Josn];
  // prepare filter box sort by emps dropdown. 
  const allemps:any=[];
  this.ActionedAssigned_Josn.forEach((ob:any)=>{
      const k=allemps.findIndex(_e=>_e.empNo==ob.Emp_No);
      if(k==-1){
        allemps.push({ empNo:ob.Emp_No, empName:ob.AssignedTo, total:1});
      }
      else{
        allemps[k].total+=1;
      }
  });
  this.employeeOptions=allemps;
  console.log('allemps:',allemps);
  // prepare filter box sort by emps dropdown. 

}
else if(this._selectedcatid == '-4'){      // UnAssign
  this._TodoList = JSON.parse(data[0]['ActionedAssigned_Josn']);
}
else if(this._selectedcatid == '-5'){     // Completed
  this._CompletedList = JSON.parse(data[0]['ActionedAssigned_Josn']);
}
else{    // All, System category, user category
        this._TodoList = JSON.parse(data[0]['JsonData_Json']);
        this._CompletedList = JSON.parse(data[0]['Completedlist_Json']);
        this.ActionedSubtask_Json = JSON.parse(data[0]['ActionedSubtask_Json']);
        this.ActionedAssigned_Josn = JSON.parse(data[0]['ActionedAssigned_Josn']);
}
        this.openTab();   
        console.log(this.ActionedAssigned_Josn,"accept,pend")

        let _Accepted =0;
        let _Pending =0;
        let _Rejected=0;
        // let _unassign = 0;
        this.ActionedAssigned_Josn.forEach(element => {

          if(element.Status=="Accepted"){
            _Accepted=_Accepted+1;
          }
          else if(element.Status == "Pending"){
            _Pending=_Pending+1;
          }
          else if(element.Status == "Rejected"){
            _Rejected=_Rejected+1;
          }
          // else if(element.Status == "Unassign"){
          //   _unassign=_unassign+1;
          // }
        });
        this.CountsAccepted= _Accepted;
        this.CountsPending= _Pending;
        this.CountsRejected= _Rejected;
        // this.Countunassign = _unassign
        // console.log(this.CountsAccepted);
      });
      // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
      this.totalproject();
      
  }












  

  assignvalue:any
  ProjectTypelist: any;
  _taskName: string = "";
  _description: string;
  _projectDays: number;
  _fileName: string;
  SelectedSubmissionType: any;
  selectedEmployee: string = "";
  // selectedProjectType: string;


  GetProjectTypeList() {

    this._taskName =this.Task_name;
    this.task_id = this.AssignID;
    this.router.navigate(["UnplannedTask/ActionToAssign/1"]);
    this.BsService.SetNewAssignId(this.task_id);
    this.BsService.SetNewAssignedName(this._taskName);
    let typeoftask: any = "IFRT";
    this.BsService.setNewTypeofTask(typeoftask);

    // this._ObjCompletedProj.PageNumber = 1;
    // this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    // this._ObjCompletedProj.Mode = 'AssignedTask';
    // this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    //   (data) => {

    //     this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
    //   });
    //document.getElementById("mysideInfobar_AssignTask").classList.add("kt-quick-panel--on");


    document.getElementById("Project_info_slider_bar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#Project_info_slider_bar").scrollTop(0);


  }






 typeoftask: any = "IFRT";



selectedAttendeesList = new Set<any>();

  onCheckboxChange(event: any, employee: any) {
    if (event.checked) {
      this.selectedAttendeesList.add(employee);
    } else {
      this.selectedAttendeesList.delete(employee);
    }
    console.log('Selected Employees:', this.selectedAttendeesList);
  }

  listAttendees:any;
  Assigntext:any;
  datestrStart:any;
  datestrEnd:any

  AssignID:any;
  Task_name:any;

  GetAssignName_id(taskName, id){
    this.AssignID=id;
    this.Task_name=taskName
}


  addSelectedEmployees() {

       const selectedArray = Array.from(this.selectedAttendeesList);
       this.listAttendees=selectedArray.map((item)=>item.Emp_No).join(',');

       if(this.listAttendees.length>0){
       this.BsService.SetNewAssignId( this.AssignID);
       this.BsService.SetNewAssignedName(this.Task_name);
       let typeoftask: any = "IFRT";
       this.BsService.setNewTypeofTask(typeoftask);
       this.datestrStart = moment(new Date()).format();
       this.datestrEnd = moment(new Date()).format();

       this._ObjAssigntaskDTO.AssignId = this.AssignID;
       this._ObjCompletedProj.PageNumber = 1;
       this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
       this._ObjCompletedProj.Mode = 'AssignedTask';
       this._ObjAssigntaskDTO.TaskName =  this.Task_name;
       this._ObjAssigntaskDTO.TypeOfTask = 'IFRT';
       this._ObjAssigntaskDTO.ProjectType = "";
       this._ObjAssigntaskDTO.AssignTo = this.listAttendees;




      const fd = new FormData();
      fd.append("AssignedBy", this.CurrentUser_ID);
      fd.append("AssignTo", this.listAttendees);
      fd.append("TaskName", this._ObjAssigntaskDTO.TaskName);
      fd.append("CreatedBy", this._ObjAssigntaskDTO.CreatedBy);
      fd.append("AssignId",  this.AssignID);
      fd.append("ProjectType", this._ObjAssigntaskDTO.ProjectType);
      fd.append("StartDate", this.datestrStart);
      fd.append("EndDate", this.datestrEnd);
      fd.append("ProjectDays",'0');
      fd.append("Desc", "");
      fd.append("Remarks", "");
      fd.append("TypeofTask", this._ObjAssigntaskDTO.TypeOfTask );


      this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
      (data) => {
        let message: string = data['Message'];
        this.notifyService.showSuccess("Task sent to assign projects", message);
        this.GetAssigned_SubtaskProjects()
         document.getElementById("schedule-event-modal-backdrop").style.display = "none";
         document.getElementById("projectmodal").style.display = "none";
         this.Assigntext=''
      });
    }
    else{
      this.notifyService.showInfo("Please select atleast one user to assign",'');
     }

  }





  project_filter() {
    document.getElementById("project-filter").classList.add("show");
    document.getElementById("filter-icon").classList.add("active");
  }

  close_project_filter() {
    document.getElementById("project-filter").classList.remove("show");
    document.getElementById("filter-icon").classList.remove("active");
  }

  CompanyName:any;
  FiterEmployee:any

  AddCom(){
    if(this.CompanyName){
    this.FiterEmployee = this.EmployeeLists.filter((item) => {
      return item.Com_No === this.CompanyName;
  })
}else{
    this.GetAssigned_SubtaskProjects()
  }
  }



  detailsbar() {
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  // ---------------- Action To Project For Subtask Creation -------------------- //
  selectedProjectCode: string;
  selectedProjectCodelist = [];
  _AssignId: number;

  ActionToProject_Click(taskName, Assignid) {

    this._taskName = taskName;
    this._AssignId = Assignid;
    this.router.navigate(["UnplannedTask/ActionToProject/2"]);
    this.BsService.SetNewAssignId(this._AssignId);
    this.BsService.SetNewAssignedName(this._taskName);

    document.getElementById("Project_info_slider_bar").classList.add("kt-action-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");

    $("#Project_info_slider_bar").scrollTop(0);

    //this.GetProjectsByUserName();
  }

  ObjUserDetails: UserDetailsDTO;
  _ProjectDataList: any;



  GetProjectsByUserName() {
    // this.LoadingBar.start();
    this.ObjUserDetails.PageNumber = 1;
    this.ObjUserDetails.PageSize = 30;
    this.ObjUserDetails.SearchText = this.filterText;
    this.ProjectTypeService.GetProjectsForRunwayTaskDropdown(this.ObjUserDetails).subscribe(data => {
      const all_projects_ofuser = JSON.parse(data[0]['DropdownProjects_Json']);
      //for listdown only valid projects.
      this._ProjectDataList=all_projects_ofuser.filter(p=>['Cancelled','Project Hold'].includes(p.Status)==false);
      console.log("Project List for Dropdown...",this._ProjectDataList);
    });
  }

  RACI_Resp: any;
  RACI_Supp: any;
  RACI_Autho: any;
  RACI_Coor: any;
  RACI_Informer: any;
  RACI_Owner: any;
  _subname:boolean=false
  Sub_ProjectName:any

  ProjectOnSelect() {
    // this.selectedProjectCode = obj['Project_Code'];
    this.BsService.setSelectedProjectCodeFromRunwayTask(this.selectedProjectCode);
    this.ProjectTypeService.SubTaskDetailsService(this.selectedProjectCode).subscribe(
      (data) => {
        console.log(data,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
        let ProjectInfo_List: any;
        ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
        this.RACI_Autho = ProjectInfo_List[0]['Authority'];
        this.RACI_Coor = ProjectInfo_List[0]['Coor'];
        this.RACI_Informer = ProjectInfo_List[0]['Informer'];
        this.RACI_Resp = ProjectInfo_List[0]['Responsible'];
        this.RACI_Supp = ProjectInfo_List[0]['Support'];
        this.RACI_Owner = ProjectInfo_List[0]['OwnerEmpNo'];
        this.Comp_No = ProjectInfo_List[0]['Emp_Comp_No'];
        this.ProjectType_DB = ProjectInfo_List[0]['Project_Block'];
        this.BsService.setProjectAuthoity(this.RACI_Autho);
      });
      this.service.GetRACISandNonRACISEmployeesforMoredetails(this.selectedProjectCode,this.Current_user_ID).subscribe(
        (data) => {

          this.ownerArr=(JSON.parse(data[0]['RacisList']));
          // this.nonRacis=(JSON.parse(data[0]['OtherList']));
          // this.allUsers=(JSON.parse(data[0]['alluserlist']));
          console.log(this.ownerArr,"groupby");

        });

        this.getPrj_Info();


  }

  ProjectOnDeselect(obj) {
    this.selectedProjectCode = "";
  }

  Maximum_ProjectCodeFrom_DB: string;

  SplittedProject_Number: number;
  public Subproj_Code: string;
  Comp_No: string;
  ProjectType_DB: any;
  _inputAttachments: string;

  OnSubmit() {
    // console.log("--------->",this._StartDate.getTime());
    if (this.Subproj_Code != undefined || this._StartDate != null || this._EndDate != null) {
      this.ObjSubTaskDTO.AssignId = this._AssignId;
      this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
      this.ObjSubTaskDTO.SubTask_ProjectCode = this.Subproj_Code;
      this.ObjSubTaskDTO.SubProject_Name = this._taskName;
      this.ObjSubTaskDTO.SubtaskDescription = this._description;
      this.ObjSubTaskDTO.ProjectBlock = this.ProjectType_DB;
      //this._StartDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
      this.ObjSubTaskDTO.StartDate = this._StartDate;
      // this._EndDate = (moment(this._StartDate)).format('DD-MMM-YYYY HH:mm:ss')
      this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;
      var Difference_In_Time = this._StartDate.getTime() - this._EndDate.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.ObjSubTaskDTO.Duration = (-Difference_In_Days);
      this.ObjSubTaskDTO.Duration = this.ObjSubTaskDTO.Duration * 8 / 1;
      this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
      this.ObjSubTaskDTO.Comp_No = this.Comp_No;
      this.ObjSubTaskDTO.Team_Res = this.RACI_Resp;;
      this.ObjSubTaskDTO.Team_Autho = this.RACI_Autho;
      this.ObjSubTaskDTO.Team_Coor = this.RACI_Coor;
      this.ObjSubTaskDTO.Team_Informer = this.RACI_Informer;
      this.ObjSubTaskDTO.Team_Support = this.RACI_Supp;
      this.ObjSubTaskDTO.Project_Owner = this.CurrentUser_ID;
      this.ObjSubTaskDTO.AssignTo = this._SelectedEmpNo;
      this.ObjSubTaskDTO.Remarks = this._remarks;
      this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      this.ProjectTypeService._InsertNewSubtask(this.ObjSubTaskDTO).subscribe(data => {
        this.notifyService.showInfo("Created Successfully", '');
        this.closeInfo();
        this.clearFeilds();
        this.GetAssigned_SubtaskProjects();
      });
    }
    else {
      this.notifyService.showInfo("", 'Star(*) mark feilds required ')
    }
  }

  Clear_Feilds() {
    this._taskName = "";
    this._Description = "";
    this._description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
  }

  Label_TaskName: boolean = false;
  Textbox_EditTaskName: boolean = true;

  OnEditNameClick(name, id) {
    this._taskName = name;
    this._AssignId = id;
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("spnLabel_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("div_" + id)).style.display = "none";
  }

renameTask(task_id:any,new_name:any){
  this._ObjAssigntaskDTO.TypeOfTask = "Rename";
  this._ObjAssigntaskDTO.TaskName = new_name;
  this._ObjAssigntaskDTO.AssignId = task_id;
  this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
  this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
    (data) => {
      let message: string = data['Message'];
      this.notifyService.showInfo("Rename successfully", message);
    });
}








  OnTask_Rename() {

    if (this._taskName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this._taskName;
      this._ObjAssigntaskDTO.AssignId = this._AssignId;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName); // rebinding
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
          (<HTMLInputElement>document.getElementById("spanTextbox_" + this._AssignId)).style.display = "none";
          (<HTMLInputElement>document.getElementById("spnLabel_" + this._AssignId)).style.display = "block";
          (<HTMLInputElement>document.getElementById("div_" + this._AssignId)).style.display = "block";

        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }


  OnTask_Renameofnew() {

    // const tf: any = document.getElementById(`agenda-text-field-${index}`);
    // if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
    // this.checkedTaskNames[index].Task_Name = tf.value;
    // this.selected_taskName[index].Task_Name =   this.checkedTaskNames[index].Task_Name
    // }
    if (this.selected_taskName != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this.selected_taskName;
      this._ObjAssigntaskDTO.AssignId = this.selected_taskId;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName)
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
          // (<HTMLInputElement>document.getElementById("spanTextbox_" + this._AssignId)).style.display = "none";
          // (<HTMLInputElement>document.getElementById("spnLabel_" + this._AssignId)).style.display = "block";
          // (<HTMLInputElement>document.getElementById("div_" + this._AssignId)).style.display = "block";
          // this.checkedTaskNames = []
          this.showedit()
          // this._taskName = this.selected_taskName
        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  Emp_No:any
  OnTask_Renameofpending() {

    if (this.task__name != "") {
      this._ObjAssigntaskDTO.TypeOfTask = "Rename";
      this._ObjAssigntaskDTO.TaskName = this.task__name;
      this._ObjAssigntaskDTO.AssignId = this.Emp_No;
      this._ObjAssigntaskDTO.CreatedBy = this.CurrentUser_ID;
      this.ProjectTypeService._InsertOnlyTaskServie(this._ObjAssigntaskDTO).subscribe(
        (data) => {
          this.OnCategoryClick(this._Categoryid, this._CategoryName)
          let message: string = data['Message'];
          this.notifyService.showInfo("Rename successfully", message);
         });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }


  onCancel(id) {
    (<HTMLInputElement>document.getElementById("div_" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("spanTextbox_" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spnLabel_" + id)).style.display = "flex";
  }

  Cat_Name: string;
  hideMenuOfCategory: boolean = false;

  OnCategoryEdit_Click(Cid, Cname) {
    (<HTMLInputElement>document.getElementById("TextboxCat_" + Cid)).style.display = "block";
    (<HTMLInputElement>document.getElementById("LabelCat_" + Cid)).style.display = "none";
    this.Cat_Name = Cname;
    this.hideMenuOfCategory = true;
  }

  OnCat_Cancel(Cid) {
    (<HTMLInputElement>document.getElementById("TextboxCat_" + Cid)).style.display = "none";
    (<HTMLInputElement>document.getElementById("LabelCat_" + Cid)).style.display = "flex";
    this.hideMenuOfCategory = false;
  }

  ObjCategoryDTO: CategoryDTO;

  OnCategoryRename(Cid) {
    if (this.Cat_Name != "") {
      this.ObjCategoryDTO.Mode = "Rename";
      this.ObjCategoryDTO.CategoryId = Cid;
      this.ObjCategoryDTO.CategoryName = this.Cat_Name;
      this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
      this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe(
        (data) => {
          // console.log(data);
          let message = data['Message'];
          this.notifyService.showSuccess("", message);
          // this.GetTodoProjects(); 
          this.refetchPageContent();
          this.OnCategoryClick(Cid, this.Cat_Name);
          this.OnCat_Cancel(Cid);
        });
    }
    else {
      this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
    }
  }

  OnDeleteCategory(Cid, Cname) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'Category_Delete',
        titleDelete: 'Delete Confirmation ',
        CategoryName: Cname
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.ObjCategoryDTO.Mode = "Delete";
        this.ObjCategoryDTO.CategoryId = Cid;
        this.ObjCategoryDTO.CategoryName = Cname;
        this.ObjCategoryDTO.CurrentUser = this.CurrentUser_ID;
        this.ProjectTypeService._CategoryRenameDelete(this.ObjCategoryDTO).subscribe(
          (data) => {
            let message = data['Message'];
            this.notifyService.showInfo("", message);
            // this.GetTodoProjects();
            this.refetchPageContent();

            this.IfNoTaskFound;
            this.ShowTaskList_Div = true;
            this.Label_TaskName = true;
            // this.Textbox_EditTaskName = true;
            // this._taskName = "";

            this.OnCat_Cancel(Cid);
          });
      }
      else {
        //this.notifyService.showInfo("Cancelled", "Delete");
      }
    });
  }

  openInfo(pcode, pName) {
    // document.getElementById("mysideInfobar").classList.add("kt-quick-panel--on");
    $('#Project_info_slider_bar').addClass('open_sidebar_info');
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // this.router.navigate(["UnplannedTask/ActionToProject/"]);
    this.router.navigate(["UnplannedTask/projectinfo/", pcode]);
  }

  closeInfo() {
    this.clearFeilds();
    document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");
    // document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
    // document.getElementById('ProjectAssignpending').classList.remove('kt-action-panel--on');
    document.getElementById('openactionassign').classList.remove('kt-action-panel--on');
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    $('#Project_info_slider_bar').removeClass('open_sidebar_info');
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.formFieldsRequired = false
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["UnplannedTask/"]);
  }

  moreDetails(ProjectCode) {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }

  newDetails(pcode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${pcode}`;
    var myWindow = window.open(myurl,pcode);
    myWindow.focus();
  }

  openActionInDetails(pcode,acode){
   let Url=`${document.baseURI}Details/${pcode}/?actionCode=${acode}`;
   const myWindow = window.open(Url);
   myWindow.focus();
  }




  scrollTo(sectionId: string): void {

    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
// onbuttonclick(buttonId:string){
//
//   const elements={
//  'ActionToProjects':'active-action-to-project',
//  'taskdd':'active-task',

//   };

// for (const id in elements){
//       const elements= document.getElementById(id)
//       if (elements) {
//         if (buttonId === id) {
//           this.renderer.addClass(elements, elements[id]);
//         } else {
//           this.renderer.removeClass(elements, elements[id]);
//         }
//       }
//     }
// }

isTotalProjectsActive = true;
totalproject(){
  document.getElementById('taskdd').classList.remove('d-none')
  document.getElementById('Completed').classList.remove('d-none')
  document.getElementById('ActionToProjects').classList.remove('d-none')
  document.getElementById('AssignedTask').classList.remove('d-none')
  this.isTotalProjectsActive = true;
}


taskside(){

  document.getElementById('taskdd').classList.remove('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

completed(){

  document.getElementById('Completed').classList.remove('d-none')
  document.getElementById('taskdd').classList.add('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

showactprj(){
  document.getElementById('ActionToProjects').classList.remove('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('taskdd').classList.add('d-none')
  document.getElementById('AssignedTask').classList.add('d-none')

}

showassign(){
  document.getElementById('AssignedTask').classList.remove('d-none')
  document.getElementById('ActionToProjects').classList.add('d-none')
  document.getElementById('Completed').classList.add('d-none')
  document.getElementById('taskdd').classList.add('d-none')
}


goToCreatePage(){

  this.router.navigate(['/backend/createproject']);
  this.createproject.Scratech_btn()
  this.selectedtaskNames=JSON.parse(JSON.stringify(this.checkedTaskNames));   // copy of selected items.
  this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
  const combinedobj = {
    task : this.selected_taskName,
    navigatingfromrunway: 'true'
  }
  localStorage.setItem('combinedobj',JSON.stringify(combinedobj) )
}


selected_date:any
selected_taskId:any;
selected_taskName:any= [];
formattedTaskNames :any;
copyofItem: { Task_Name: string, Assign_Id: any }[] = [];
Creation_Date:any

unassign_edit1(id, task, date){  
    console.log( id, task, date,'task date')

this.copyofItem.push({
  Task_Name: task,
  Assign_Id: id
});
this.selectedtaskNames=JSON.parse(JSON.stringify(this.copyofItem));   // copy of selected items.
this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
this.selected_taskId =  this.selectedtaskNames.map(task=>task.Assign_Id).join(', ');
this.Creation_Date = date;


  document.getElementById('unassign-editsidebar').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  const radioButton = document.getElementById('projectRadio1') as HTMLInputElement;
  if (radioButton) { radioButton.checked = true;}
  this.selectedOption = 'option1'; // Set the default radio button checked
  this.port_id = [];
  this.employeSelect = null;
  // this.selectedProjecttype = null;
  // this.selectedtaskNames=null;  // Clear  previous seletion
  if(this.checkedTaskNames.length>0){
    this.selectedtaskNames=JSON.parse(JSON.stringify(this.checkedTaskNames));   // copy of selected items.
    this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
  }


  

  // to fixed mat dropdowns scroll position issue.
  const TEsb = document.querySelector('#unassign-editsidebar .unassign-editsidebar-body');
      TEsb.addEventListener('scroll', () => {
        this.autocompletes.forEach((ac) => {
          if (ac.panelOpen)
            ac.updatePosition();
        });
  })
 //

   

  //




  //



}


// this.checkedTaskNames.push({
//   Task_Name: task,
//   Assign_Id: id
// });
// this.selectedtaskNames=JSON.parse(JSON.stringify(this.checkedTaskNames));   // copy of selected items.
// this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ')


  // const assignids = this.checkedTaskNames.map(task=>task.Assign_Id).join(', ')


unassign_closeInfo(){
  document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
  this.resetAssign()
  this.formFieldsRequired = false
}

assign_to:any=[];
Proj_type:any
Start__Date:any
End__Date:any
__remarks:any
task__name:any
Portfolio_Id:any
assign_Id:any
editTaskat:number|undefined= undefined;

editassignPending(id:any){
const selectedindex=this.ActionedAssigned_Josn.findIndex((ob)=>ob.Assign_Id==id);
  this.editTaskat=selectedindex;
  this.task__name = this.ActionedAssigned_Josn[selectedindex].Task_Name.trim();
  this.employeSelect=(this.ActionedAssigned_Josn[selectedindex].Emp_No)?this.ActionedAssigned_Josn[selectedindex].Emp_No.split(','):[];
  // Portfolio_Id
  this.Start__Date  =this.ActionedAssigned_Josn[selectedindex].Start_Date;
  this.End__Date =this.ActionedAssigned_Josn[selectedindex].End_Date
  this.__remarks= this.ActionedAssigned_Josn[selectedindex].Remarks || '';
  this.port_id=(this.ActionedAssigned_Josn[selectedindex].Portfolio_Id)?this.ActionedAssigned_Josn[selectedindex].Portfolio_Id.split(','):[];
  this.assign_Id = this.ActionedAssigned_Josn[selectedindex].Assign_Id
  this.fileAttachment = this.ActionedAssigned_Josn[this.editTaskat]&&this.ActionedAssigned_Josn[this.editTaskat].FileName;
  if(this.ActionedAssigned_Josn[selectedindex].Project_type){
    const prjTypeObj=this.ProjectTypelist.find(obj=>obj.Exec_BlockName==this.ActionedAssigned_Josn[selectedindex].Project_type.trim());
    this.Proj_type=prjTypeObj.Exec_BlockNo;
  }
  else
  this.Proj_type=null;

   // this.Prjstartdate =this.bind_Project[0].Start_Date
   // this.Prjenddate = this.bind_Project[0].End_Date


  document.getElementById('ProjectAssignpending').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
  // this.initAutosize('unassigneditside2')
}


closeditassignPending(){
  document.getElementById('ProjectAssignpending').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
}

bindvalue :number | undefined = undefined
openActionassign(id:any){
    const selectedaction = this.ActionedSubtask_Json.findIndex((ob)=>ob.Assign_Id==id)
  this.bindvalue = selectedaction;
  document.getElementById('openactionassign').classList.add('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
}


closedActionassign(){
  document.getElementById('openactionassign').classList.remove('kt-action-panel--on');
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
}


toggleProjectoptions(option: string) {

  this.selectedOption = option;
  this.formFieldsRequired = false;
  this._StartDate = null
  this._EndDate = null
}

// unassign_edit(){
//   document.getElementById('unassign-editsidebar').classList.add('kt-action-panel--on');
//   document.getElementById("rightbar-overlay").style.display = "block";
//   document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
// }
// unassign_closeInfo(){
//   document.getElementById('unassign-editsidebar').classList.remove('kt-action-panel--on');
//   document.getElementById("rightbar-overlay").style.display = "none";
//   document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
// }
// toggleProjectoptions(option: string) {
//   this.selectedOption = option;
// }
activeButton: string = 'totalProjects';

setActiveButton(buttonName: string) {
  this.activeButton = buttonName;
}

items = [
  { total: 1, details: 'Unassign task' },
  { total: 2, details: 'Completed' },
  { total: 3, details: 'Assign task/project' },
  { total: 4, details: 'Action to project'}
];
currentStatus: string = 'Accepted'; // Default to 'Accepted'

setStatus(status: string) {

  this.currentStatus = status;
}

//method to show/hide Add Task option on page.
showAddTaskOption(show:boolean){
   if(show)
   {
     document.getElementById('addtsk').classList.remove('d-none');
     document.getElementById("accordionRunway").classList.remove("acc-runway-no-button");
   }
   else
   {
     document.getElementById('addtsk').classList.add('d-none');
     if(this.newCatid!=-6){
      document.getElementById('accordionRunway').classList.add('acc-runway-no-button');
     }
     
   }
}

getVisibleHeaderCount(): number {
  let count = 0;
  if (this._TodoList.length > 0) count++;
  if (this._CompletedList && this._CompletedList.length > 0) count++;
  if (this.ActionedSubtask_Json.length > 0) count++;
  if (this.ActionedAssigned_Josn.length > 0) count++;
  return count;
}

getAccordionClass(): string {
  const count = this.getVisibleHeaderCount();
  return count > 0 ? `runway-${count}` : '';
}

getProjectTypeList() {

  this._ObjCompletedProj.PageNumber = 1;
  this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
  this._ObjCompletedProj.Mode = 'AssignedTask';
  console.log('project type list inputs:',this._ObjCompletedProj);
  this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
    (data) => {
      this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
      console.log('gggggggggggggggggggggggg',this.ProjectTypelist);
    });
}

isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
isPrjDesValid:'TOOSHORT'|'VALID'='VALID';


isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
 if(inputString){

 let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
 const x=rg.test(inputString);

return x ? 'VALID' : 'TOOSHORT';
 }
return 'TOOSHORT'
}



selectFile() {
  this.fileInput.nativeElement.click();
}


contentType:any="";
onFileChanged(event: any) {

  const files: File[] = event.target.files;

  if (files && files.length > 0) {
    this.file = files[0];
    this.fileAttachment =  this.FileName
    this.selectedFileName =  this.FileName
    this.fileAttachment = this.file;
    this.selectedFileName = this.file.name;
    console.log('File Object:', this.file);
    this.contentType=this.getFileExtension(this.fileAttachment.name);
  }
  else {
    this.file = null;
    this.fileAttachment = null;
    this.selectedFileName = null;
    this.FileName = null
  }
  // Reset file input value to allow selecting the same file again
  this.fileInput.nativeElement.value = '';
}
FileName:any
removeFile() {

  this.file = null;
  this.fileAttachment = null;
  this.selectedFileName = null;
  this.FileName = null
}
owner:any
onInputChange(value: string) {
  this.Sub_ProjectName = value.trim();

}

pcode:any;
ownerArr:any
getRACISandNonRACIS(){

  this.service.GetRACISandNonRACISEmployeesforMoredetails(this.pcode,this.Current_user_ID).subscribe(
    (data) => {

      this.ownerArr=(JSON.parse(data[0]['RacisList']));
      // this.nonRacis=(JSON.parse(data[0]['OtherList']));
      // this.allUsers=(JSON.parse(data[0]['alluserlist']));
      console.log(this.ownerArr,"groupby");


    });
}
_allocated:any
maxlimit: boolean = true;
_message: string;
start_dt:any =new Date();
end_dt:any =new Date();
maxAllocation: number;
_alchr:boolean = false

alertMaxAllocation() {
  if (this._StartDate == null || this._EndDate == null) {
    this._message = "Start Date/End date missing!!"
  }
  else {
    // this.start_dt = moment(this._StartDate).format("MM/DD/YYYY");
    // this.end_dt = moment(this._EndDate).format("MM/DD/YYYY");
    this.start_dt=new Date(this._StartDate);
    this.end_dt=new Date(this._EndDate);

    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")

    var Difference_In_Time = this.start_dt.getTime() - this.end_dt.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days==0){
      Difference_In_Days=-1;
      this.maxAllocation = (-Difference_In_Days) * 10 / 1;
    }
    else{
      this.maxAllocation = (-Difference_In_Days) * 10 / 1 +10;
    }
    console.log(this.start_dt,this.end_dt,this.maxAllocation,"allcoation")
  }
}

formFieldsRequired: boolean = false;
Selec:any
// typeoftask: any = "";
_Urlid:any;
selectedProjecttype: string = "";
noEndDate:boolean = false
noStartDate : boolean = false




maxDate:any
setMaxDate(dateField){
      const d=new Date(dateField);
       d.setDate(d.getDate()+2);
      this.maxDate=d;

      }



assignTasksub1(){    debugger
    this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
    this.selected_taskId =  this.selectedtaskNames.map(task=>task.Assign_Id).join(', ');
    console.log( this.selected_taskName,"pending")

    if (this.employeSelect == null || this.employeSelect == undefined && this.selected_taskName == null || this.selected_taskName == undefined || this.selected_taskName.trim() == "") {
      this.formFieldsRequired = true
      return
    }
    else {
      this.formFieldsRequired = false
    }


    var datestrStart;
    var datestrEnd;
    if (this._StartDate != null && this._EndDate != null) {
      datestrStart = moment(this._StartDate).format();
      datestrEnd = moment(this._EndDate).format();
    }
    else {
      datestrStart = moment(new Date()).format();
      datestrEnd = moment(new Date()).format();
    }


    var ProjectDays;
    if (this._StartDate instanceof Date && this._EndDate instanceof Date) {
      const differenceInTime = this._EndDate.getTime() - this._StartDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      ProjectDays = differenceInDays;
    }
    else {
      ProjectDays = 0;
    }


    if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
      this.port_id =  this.port_id
    }
    else{
      this.port_id=0;
    }





  const fd = new FormData();
  fd.append("TaskName", this.selected_taskName.trim());
  fd.append("Desc", '');
  fd.append("ProjectType", this.selectedProjecttype);
  fd.append("AssignTo", this.employeSelect);
  fd.append("Portfolio_Id", this.port_id);
  fd.append("StartDate", datestrStart);
  fd.append("EndDate", datestrEnd);

  fd.append("ProjectDays", ProjectDays.toString());
  fd.append("Remarks", this._remarks);
  // fd.append("attachment",this.fileAttachment);
  fd.append("AssignedBy", this.CurrentUser_ID);
  fd.append("AssignIds", this.selected_taskId.toString());
  fd.append("TypeofTask", this.typeoftask);
  fd.append("contentType",this.contentType);
  if (this.fileAttachment) {
      fd.append("Attachment", "true");
  }
  else {
    fd.append("Attachment", "false");
    fd.append('file', "");
  }


 // this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
  this.ProjectTypeService._InsertAssignTaskServieCore(fd).subscribe(
    (data) => {
      // alert(data['message'])
      console.log(data,"checking")
      if(data['message']=="Assigned Successfully" && this.fileAttachment){
        fd.append('file', this.fileAttachment);
        fd.append('TaskName',data['taskName']);
        fd.append("contentType",data['contentType']);
        this.ProjectTypeService._AzureAssigntaskCore(fd).subscribe((event1: HttpEvent<any>) => {
          console.log(event1,"azure data");
          var myJSON = JSON.stringify(event1);
        });
      }
      console.log(data,'atattachmeatattachmeatattachmeatattachme')
        let message: string = data['message'];
        this.notifyService.showSuccess("Task sent to assign projects.", message);
        // this.GetTodoProjects();
        this.refetchPageContent();  // rebind

      });
 this.checkedTaskNames = []
      this.resetAssign()
      this.unassign_closeInfo()

}

getFileExtension(fileName: any): string | null {
  if (!fileName) {
    return null;
  }
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex !== -1 ? fileName.substring(lastDotIndex + 1) : null;
}

resetAssign(){
  this.selectedProjecttype = null
  this.employeSelect  = null

  // this.selected
  this.port_id  = null
  this._remarks  = null
  this.file=null

  this._StartDate = null
  this._EndDate = null

  this.selectedtaskNames=null;
  this.selected_taskName = null;
  this.copyofItem = []

}











selectedAssign:any
Sub_ProjectCode: any;
EmpNo_Autho: any;
ProjectBlock: string = null;
selectedEmpNo: string = null;
completionattachment:boolean=true;
actionCost:any;

actionSubmit=async()=>{ 
 

// Action cost calculate.
this.actionCost=null;  // must be empty before calculating.
const res:any=await this.service.GetCPProjectCost(this.selectedEmpNo,this._allocated.toString()).toPromise();
if(res&&res.Status){
      this.actionCost=res.Data;
      console.log("action cost:",this.actionCost);
}
else{

  // test for new users (Temporary)
  const cost=this._allocated*10;
  this.actionCost=cost;
  // test for new users (Temporary)

  // this.notifyService.showError('','Internal server error');
  // console.error('Unable to get action cost value.')
  // return;
}
// Action cost calculate.
 debugger
  this.ObjSubTaskDTO.MasterCode = this.selectedProjectCode;
  this.service._GetNewProjectCode(this.ObjSubTaskDTO).subscribe(data => {   debugger

    this.Sub_ProjectCode = data['SubTask_ProjectCode'];
    this.EmpNo_Autho = data['Team_Autho'];
    this.ProjectBlock = data['ProjectBlock'];

    if (this.task_id != null) {
      this.ObjSubTaskDTO.AssignId = this.task_id;
    }
    else {
      this.task_id = 0;
    }


    this.ObjSubTaskDTO.SubProject_Name = this.selected_taskName;
    this.ObjSubTaskDTO.SubtaskDescription = "";
    this.ObjSubTaskDTO.ProjectBlock = this.ProjectBlock;
    this.ObjSubTaskDTO.StartDate = this._StartDate;
    this.ObjSubTaskDTO.SubProject_DeadLine = this._EndDate;

    this.maxAllocation = this.maxAllocation * 8 / 1;
    this.ObjSubTaskDTO.Emp_No = this.CurrentUser_ID;
    this.ObjSubTaskDTO.AssignTo = this.selectedEmpNo;
    this.ObjSubTaskDTO.Remarks = this._remarks;
    this.ObjSubTaskDTO.Duration = this._allocated;
    // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
    console.log( this.fileAttachment)
  //  if (this.fileAttachment&& this.fileAttachment.length > 0) {
  //     this.ObjSubTaskDTO.Attachments =  this.fileAttachment;
  //   }

    var datestrStart = moment(this._StartDate).format("MM/DD/YYYY");
    var datestrEnd = moment(this._EndDate).format("MM/DD/YYYY");
    // alert(datestrStart)
    // alert(datestrEnd)
    console.log(datestrStart,this._StartDate,"startdate")
    console.log(datestrEnd,this._EndDate,"enddate")
    const fd:any = new FormData();
    fd.append("Project_Code", this.Sub_ProjectCode);
    fd.append("Team_Autho", this.EmpNo_Autho);
    // fd.append('file', this._inputAttachments[0].Files);
    if ( this.fileAttachment) {
      fd.append("Attachment", "true");
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }
    fd.append("_MasterCode", this.ObjSubTaskDTO.MasterCode);
    fd.append("SubtaskName", this.selected_taskName.trim());
    fd.append("Desc", "");
    fd.append("Projectblock", this.ProjectBlock);
    fd.append("StartDate", datestrStart);
    fd.append("EndDate", datestrEnd);
    // fd.append("Allocated", this.maxAllocation.toString());
    fd.append("Emp_No", this.CurrentUser_ID);
    fd.append("AssignTo", this.selectedEmpNo);
    fd.append("Remarks", this._remarks);
    fd.append("EmployeeName", localStorage.getItem('UserfullName'));
    fd.append("AssignIds", this.selected_taskId.toString());     
    fd.append("Owner", this.owner);
    fd.append("proState",this.completionattachment.toString());
    fd.append("actionCost",this.actionCost);
    fd.append("contentType",this.contentType);
    fd.append("AssignId", this.task_id.toString());

    if (this.ObjSubTaskDTO.Duration != null) {
      fd.append("Duration", this.ObjSubTaskDTO.Duration.toString());
    }
    else {
      this.ObjSubTaskDTO.Duration = 0;
    }

    for (let [key, value] of fd.entries()) {
      console.log(`${key}: ${value}`);
    }
    // this.service._InsertNewSubtask(fd).subscribe(event => {
      this.service._InsertNewSubtaskcore(fd).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response){
        var myJSON = JSON.stringify(event);
        this._Message = (JSON.parse(myJSON).body).message;
          console.log(this._Message,"this._Message");
        if(this._Message=='1'){
          if ( this.fileAttachment) {
            fd.append('file',  this.fileAttachment);
            this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
              console.log(event1,"azure data");
              var myJSON = JSON.stringify(event1);
            //  this._Message = (JSON.parse(myJSON).body);

            });}
          this.notifyService.showSuccess("Action created successfully", "Success");
        }
        else if(this._Message=='2'){
          if ( this.fileAttachment) {
            fd.append('file',  this.fileAttachment);
            this.service._AzureUploadNewAction(fd).subscribe((event1: HttpEvent<any>) => {
              console.log(event1,"azure data");
              var myJSON = JSON.stringify(event1);
            //  this._Message = (JSON.parse(myJSON).body);

            });}
          this.notifyService.showInfo("Request submitted to the Assigned employee","Action Under Approval");
        }
        else if(this._Message=='3'){
          this.notifyService.showError("Something went wrong", "Action not created");
        }
        else if(this._Message=='7'){
          this.notifyService.showError("Something went wrong", "Action not created");
        }
        else{
          this.notifyService.showError("Something went wrong", "Action not created");
        }
      }
      // this.GetTodoProjects();  // rebinding.
      this.refetchPageContent(); // rebinding.
      this.resetAssign()
      this.unassign_closeInfo()
    });



  this.resetActionvalue()
  this.unassign_closeInfo();

    });

}





 // mat-autocomplete dropdowns code start.
 @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
 openAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
 }

 closeAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
 }


  // Portfolio: any = [];
  isPortfolioDrpDwnOpen: boolean = false;
  port_id_string:any
  port_id:any;
  onPortfolioSelected(e: any) {

    const portfolioChoosed: any = this.PortfolioList.find((p: any) => p.Portfolio_ID === e.option.value);
    console.log(portfolioChoosed);
    if (portfolioChoosed) {
      if (!this.port_id)   // if Portfolio is null,undefined,''
        this.port_id = [];
      const index = this.port_id.indexOf(portfolioChoosed.Portfolio_ID);
      if (index === -1) {
        // if not present then add it
         this.port_id.push(portfolioChoosed.Portfolio_ID);

      }
      else { //  if item choosed is already selected then remove it.
        this.port_id.splice(index, 1);
      }

    }
    this.openAutocompleteDrpDwn('PortfolioDrpDwn');
  }


  removeSelectedPortfolio(item) {
    const index = this.port_id.indexOf(item);
    if (index !== -1) {
      this.port_id.splice(index, 1);
    }
  }


  getObjOf(arr, id, idName) {
    const obj = arr.find(item => item[idName] == id);
    return obj;
  }



  isemployeeDrpDwnOpen : boolean = false
  employeSelect:any
  onEmployeeselected(e: any) {

    const employeeChoosed: any = this.EmployeeList.find((p: any) => p.Emp_No === e.option.value);
    console.log(employeeChoosed);
    if (employeeChoosed) {
      if (!this.employeSelect)   // if Portfolio is null,undefined,''
        this.employeSelect = [];
      const index = this.employeSelect.indexOf(employeeChoosed.Emp_No);
      if (index === -1) {
        // if not present then add it
         this.employeSelect.push(employeeChoosed.Emp_No);

      }
      else { //  if item choosed is already selected then remove it.
        this.employeSelect.splice(index, 1);
      }

    }
    this.openAutocompleteDrpDwn('employeeDrpDwn');
  }


  removeSelectedemployee(item) {
    const index = this.employeSelect.indexOf(item);
    if (index !== -1) {
      this.employeSelect.splice(index, 1);
    }
  }









  // EmployeeOnSelect(obj) {
  //   // this.selectedEmpNo = obj['Emp_No'];
  //   if(obj['Emp_No'] == this.Owner_Empno){
  //     this.selectedEmpNo="";
  //     this._selectemp = true;
  //     this.notifyService.showInfo("Action cannot be assigned to project owner","");
  //   }
  //   else{
  //     this._selectemp = false;
  //     this.selectedEmpNo = obj['Emp_No'];
  //   }
  // }


  EmployeeOnSelecting(obj) {
    this._SelectedEmpNo = obj;
    this.selectedEmployee = this._SelectedEmpNo;

  }


  sweetAlert() {

if(this._allocated &&this.selectedProjectCode&&this.selectedEmpNo&&this._StartDate &&this._EndDate&&this.selected_taskName&&this._allocated <= this.maxAllocation){
  this.formFieldsRequired = false
}
else{
  this.formFieldsRequired = true
  return
}


        const dateOne = new Date(this._EndDate);
        const dateTwo = new Date(this.ProjectDeadLineDate);
        if ((dateTwo < dateOne) && (this.Current_user_ID==this.Owner_Empno || this.Current_user_ID==this.Resp_empno || this.Current_user_ID==this.Autho_empno || this.isHierarchy==true)) {
          Swal.fire({
            title: 'Action deadine is greater than main project deadline ?',
            text: 'Do you want to continue for selection of date after main project deadline!!',

            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((response: any) => {
            if (response.value) {
              this.actionSubmit();
            } else if (response.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Action not created',
                'error'
              )
            }
          });
        }
        else if ((dateTwo < dateOne) && (this.Current_user_ID!=this.Owner_Empno && this.Current_user_ID!=this.Resp_empno && this.Current_user_ID!=this.Autho_empno && this.isHierarchy==false)) {
          Swal.fire({
            title: 'Unable to create this action.',
            text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
            // showCancelButton: true
          });

        }
        else {
          this.actionSubmit();
        }
      }

ProjectDeadLineDate:any
ProjectStartDate:any
Owner_Empno:any
Resp_empno:any
Autho_empno:any
allocatedHour:any

getPrj_Info(){
      this.service.GetDeadlineByProjectCode(this.selectedProjectCode).subscribe(data => {

        this.ProjectDeadLineDate = data["DeadLine"];
        this.ProjectStartDate = data["StartDate"];
        this.owner=data["Owner_empno"];
        this.Owner_Empno = data['Owner_empno'];
        this.Resp_empno = data['Resp_empno'];
        this.Autho_empno = data['Autho_empno'];

        // const dateOne = new Date(this.disablePreviousDate);
        // const dateTwo = new Date(this.ProjectStartDate);
        // if(dateTwo > dateOne){
        //   this.disablePreviousDate = this.ProjectStartDate;
        // }

      });

      this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID,this.selectedProjectCode).subscribe((data) => {
        if(data['message']=='1'){
          this.isHierarchy=true;
        }
        else{
          this.isHierarchy=false;
        }
      });

    }


isHierarchy:boolean = false;




resetActionvalue(){
  this.selectedEmpNo = null
  this.selectedProjectCode  = null
  this._allocated  = null
  this._remarks  = null
  this.file=null
  this._StartDate = null
  this._EndDate = null
}
datesCheck() {
  this.noEndDate = false;
}
startdatechecker(){
  this.noStartDate=false;
  this.noEndDate=true;
  this._EndDate=null;
}
myFilter:any;
enddateChecker(){  debugger
  this.noStartDate=true;
  this.myFilter = (d: Date | null): boolean => {
    if(d instanceof Date){
       const day=d.getDay();
       return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
    }
    else
    return false;
    
   
  };

}

vart:any = null
todo(type,datefields) {

  if (type === '011') {
const  d = new Date(datefields)
this.vart = d
  }
}

isReadOnly: boolean = true;
pendingUpdatesection(){

      if(this.employeSelect ===null || this.employeSelect === undefined &&this.task__name==null|| this.task__name == undefined || this.task__name.trim() ==""){
        this.formFieldsRequired = true
        return
      }
      else{
      this.formFieldsRequired = false
      }

      var datestrStart;
      var datestrEnd;
      if (this.Start__Date != null && this.End__Date != null) {
        datestrStart = moment(this.Start__Date).format();
        datestrEnd = moment(this.End__Date).format();
      }
      else {
        datestrStart = moment(new Date()).format();
        datestrEnd = moment(new Date()).format();
      }

      // var datestrStart;
      // var datestrEnd;
      // if (this._StartDate != null && this._EndDate != null) {
      //   datestrStart = moment(this._StartDate).format();
      //   datestrEnd = moment(this._EndDate).format();
      // }
      // else {
      //   datestrStart = moment(new Date()).format();
      //   datestrEnd = moment(new Date()).format();
      // }

      var ProjectDays;
      if (this.Start__Date instanceof Date && this.End__Date instanceof Date) {
        const differenceInTime = this.End__Date.getTime() - this.Start__Date.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        ProjectDays = differenceInDays;
      }
      else {
        ProjectDays = 0;
      }

      if(this.employeSelect!=null && this.employeSelect!=undefined && this.employeSelect!=''){
        this.employeSelect =  this.employeSelect
      }
      else{
        this.employeSelect=0;
      }


      // if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
      //   this.port_id =  this.port_id
      // }
      // else{
      //   this.port_id=0;
      // }

const portfoliosSelected = this.port_id&&this.port_id.length>0?this.port_id:0;


  const fd = new FormData();
    fd.append("TaskName", this.task__name.trim());
    fd.append("Desc", '');
    fd.append("ProjectType", this.Proj_type);
    // fd.append("AssignTo", this.assign_to);
    fd.append("AssignTo", this.employeSelect);
    fd.append("StartDate", datestrStart);
    fd.append("EndDate", datestrEnd);
    fd.append("AssignIds",this.assign_Id)
    fd.append("Portfolio_Id", portfoliosSelected);
    fd.append("ProjectDays", ProjectDays.toString());
    fd.append("Remarks", this.__remarks);
    // fd.append("attachment",this.fileAttachment);
    fd.append("AssignedBy", this.CurrentUser_ID);
    // fd.append("AssignId", this.selected_taskId.toString());
    fd.append("TypeofTask", this.typeoftask);
    fd.append("contentType",this.contentType);

    if ( this.fileAttachment) {
      fd.append("Attachment", "true");
    }
    else {
      fd.append("Attachment", "false");
      fd.append('file', "");
    }
    // this.ProjectTypeService.updatePendingtask(fd).subscribe(
      this.ProjectTypeService.updatePendingtaskCore(fd).subscribe(
      (data) => {
        console.log(data,'atattachmeatattachmeatattachmeatattachme')
        if(data['message']=="Assigned Successfully" && this.fileAttachment){
          fd.append('file', this.fileAttachment);
          fd.append('TaskName',data['taskName']);
          fd.append("contentType",data['contentType']);
          this.ProjectTypeService._AzureAssigntaskCore(fd).subscribe((event1: HttpEvent<any>) => {
            console.log(event1,"azure data");
            var myJSON = JSON.stringify(event1);
          });
        }
          let message: string = data['Message'];
          this.notifyService.showSuccess("Task sent to assign projects.",message);
          // this.GetTodoProjects();
          this.refetchPageContent();  //rebind
    });

        this.closeditassignPending()

  }



 initAutosize(area:string): void {
    function autosize() {

      var $text = $(`#${area}`);

      $text.each(function () {
        $(this).attr('rows', 1);
        resize($(this));
      });

      $text.on('input', function () {
        resize($(this));
      });

      function resize($element) {
        $element.css({
          'height': 'auto',
          'min-height': '34px'
        });
        $element.css('height', $element[0].scrollHeight + 'px');
      }
    }
    autosize();
  }



  openTab() {  debugger
   // Now, check which condition matches and add 'show' to the appropriate element

  //1. clear all accordians current state to default state (closed state).    
   document.getElementById('collapseUnassign').classList.remove('show');
   document.getElementById('UnassigntaskBtn').setAttribute('aria-expanded','false');
   document.getElementById('collapseActionproject').classList.remove('show');
   document.getElementById('ActiontoprojectsBtn').setAttribute('aria-expanded','false');
   document.getElementById('collapseActiontask').classList.remove('show');
   document.getElementById('AssignedTaskProjectBtn').setAttribute('aria-expanded','false');
   document.getElementById('collapseCompleted').classList.remove('show');
   document.getElementById('CompletedBtn').setAttribute('aria-expanded','false');
  // clear all accordians current state to default state (closed state).


  //2. opens accordians which have data in it.  ( opens first accordian )
    if (this._TodoList.length > 0) {
      document.getElementById('collapseUnassign').classList.add('show');
      document.getElementById('UnassigntaskBtn').setAttribute('aria-expanded','true');
    } 
    else if (this.ActionedSubtask_Json.length > 0) {
      document.getElementById('collapseActionproject').classList.add('show');
      document.getElementById('ActiontoprojectsBtn').setAttribute('aria-expanded','true');
    }
    else if (this.ActionedAssigned_Josn.length > 0){
      document.getElementById('collapseActiontask').classList.add('show');
      document.getElementById('AssignedTaskProjectBtn').setAttribute('aria-expanded','true');
    } 
    else if (this._CompletedList.length > 0) {
      document.getElementById('collapseCompleted').classList.add('show');
      document.getElementById('CompletedBtn').setAttribute('aria-expanded','true');
// this.openTab()
    }
   // opens accordians which have data in it.  ( opens first accordian )
}



checkedItem = []

checkedTaskNames: { Task_Name: string, Assign_Id: any }[] = [];
selectedtaskNames: { Task_Name: string, Assign_Id: any }[] = [];

selectunSelect(e, item) {

  if (e.checked) {
    // Add task name and assign id to checkedTaskNames array
    this.checkedTaskNames.push({
      Task_Name: item.Task_Name,
      Assign_Id: item.Assign_Id
    });
    console.log(this.checkedTaskNames, "ThisCheckedTaskNames");
  } else {
    // Remove task name and assign id from checkedTaskNames array
    let index = this.checkedTaskNames.findIndex(task => task.Task_Name === item.Task_Name && task.Assign_Id === item.Assign_Id);
    if (index !== -1) {
      this.checkedTaskNames.splice(index, 1);
    }
    console.log(this.checkedTaskNames, "ThisCheckedTaskNames Remove");
  }
}

DisplayCreateIcon(item) {
  return this.checkedTaskNames.some(task => task.Task_Name === item.Task_Name && task.Assign_Id === item.Assign_Id);
}

projectInfo: any;
URL_ProjectCode: any;
projectCode:any

LoadDocument1(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {


  let FileUrl: string;
  // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
  FileUrl="https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

  if (iscloud == false) {
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";

    if (this.projectInfo.AuthorityEmpNo == this.projectInfo.ResponsibleEmpNo) {
      // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
      FileUrl = (FileUrl +  this.projectInfo.ResponsibleEmpNo + "/" + this.URL_ProjectCode + "/" + url1);
    }
    else if (this.projectInfo.AuthorityEmpNo != this.projectInfo.ResponsibleEmpNo) {
      FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + this.URL_ProjectCode + "/" + url1);
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
    let name = "ArchiveView/" + this.projectCode;
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


_FilteredTodoList = [];
_FilteredCompletedList = [];
_FilteredActionList = [];
_FilteredAssignList = [];

filterLists() {
  let noResultsFound = true;  // Flag to check if no results are found in any list

  // If there is a search term
  if (this._SearchTask) {
    // Filter Todo List based on search term
    this._FilteredTodoList = this._TodoList.filter(item =>
      item.Task_Name.toLowerCase().includes(this._SearchTask.toLowerCase())
    );

    // Filter Completed List based on search term
    this._FilteredCompletedList = this._CompletedList.filter(item =>
      item.Task_Name.toLowerCase().includes(this._SearchTask.toLowerCase())
    );

    // Filter Actioned Subtasks based on search term
    this._FilteredActionList = this.ActionedSubtask_Json.filter(item =>
      item.Task_Name.toLowerCase().includes(this._SearchTask.toLowerCase())
    );

    // Filter Assigned Tasks based on search term
    this._FilteredAssignList = this.ActionedAssigned_Josn.filter(item =>
      item.Task_Name.toLowerCase().includes(this._SearchTask.toLowerCase())
    );

    // Check if any list has results
    if (this._FilteredTodoList.length > 0) {
      document.getElementById("taskdd").style.display = "block";  // Show ToDoList
      noResultsFound = false;
    } else {
      document.getElementById("taskdd").style.display = "none";   // Hide ToDoList
    }

    if (this._FilteredCompletedList.length > 0) {
      document.getElementById("Completed").style.display = "block"; // Show CompletedList
      noResultsFound = false;
    } else {
      document.getElementById("Completed").style.display = "none"; // Hide CompletedList
    }

    if (this._FilteredActionList.length > 0) {
      document.getElementById("ActionToProjects").style.display = "block"; // Show Action List
      noResultsFound = false;
    } else {
      document.getElementById("ActionToProjects").style.display = "none"; // Hide Action List
    }

    if (this._FilteredAssignList.length > 0) {
      document.getElementById("AssignedTask").style.display = "block"; // Show Assigned Task List
      noResultsFound = false;
    } else {
      document.getElementById("AssignedTask").style.display = "none"; // Hide Assigned Task List
    }

  } else {
    // If search term is empty, reset and show all lists
    this._FilteredTodoList = this._TodoList;
    this._FilteredCompletedList = this._CompletedList;
    this._FilteredActionList = this.ActionedSubtask_Json;
    this._FilteredAssignList = this.ActionedAssigned_Josn;

    // Show all lists when there's no search term
    document.getElementById("taskdd").style.display = "block";  // Show ToDoList
    document.getElementById("Completed").style.display = "block"; // Show CompletedList
    document.getElementById("ActionToProjects").style.display = "block"; // Show Action List
    document.getElementById("AssignedTask").style.display = "block"; // Show Assigned Task List

    noResultsFound = false;  // Since no search term, lists are visible by default
  }

  // If no results were found in any of the filtered lists, show the "No search found" message
  if (noResultsFound) {
    document.getElementById("noSearchFoundMessage").style.display = "block"; // Show message
  } else {
    document.getElementById("noSearchFoundMessage").style.display = "none"; // Hide message
  }
}


_azureMessage:any="";

generateRandomId(): string {
  return Math.random().toString().substr(2, 6).padStart(6, '0');
}

sanitizeFileName(fileName: string): string {
  return fileName
    .replace(/[^a-zA-Z0-9. ]/g, '_') // Allow dots by including '.' in the regex
    .replace(/ /g, '_')              // Replace spaces with _
    .replace(/_+/g, '_');            // Replace multiple underscores with a single _
}



getContentType(item: any): string {
  // Check if 'item' has the 'Reference' or 'FileName' property

  if (item.Reference) {
    if (item.Reference.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.Reference.endsWith('.png')) {
      return 'png';
    } else if (item.Reference.endsWith('.svg')) {
      return 'svg';
    }
  }

  // Proceed to check 'FileName' if no match in 'Reference'
  if (item.FileName) {
    if (item.FileName.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.FileName.endsWith('.png')) {
      return 'png';
    } else if (item.FileName.endsWith('.svg')) {
      return 'svg';
    } else if (item.FileName.endsWith('.jpg')) {
      return 'jpg';
    } else if (item.FileName.endsWith('.jpeg')) {
      return 'jpeg';
    }
  }

  // Return default value if no conditions match
  return ''; // Default value if no valid file extension is found
}


forActionType(item: any): string {
  // First check 'FileName' for valid extension
  if (item && item.FileName) {
    if (item.FileName.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.FileName.endsWith('.png')) {
      return 'png';
    } else if (item.FileName.endsWith('.svg')) {
      return 'svg';
    } else if (item.FileName.endsWith('.jpg')) {
      return 'jpg';
    } else if (item.FileName.endsWith('.jpeg')) {
      return 'jpeg';
    }
  }

  // If no valid extension is found in 'FileName', check 'Reference'
  if (item && item.Reference) {
    if (item.Reference.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.Reference.endsWith('.png')) {
      return 'png';
    } else if (item.Reference.endsWith('.svg')) {
      return 'svg';
    } else if (item.Reference.endsWith('.jpg')) {
      return 'jpg';
    } else if (item.Reference.endsWith('.jpeg')) {
      return 'jpeg';
    }
  }

  // Return default value if no conditions match
  return ''; // Default value if no valid file extension is found
}

forAssignFile(item: any): string {
  // First check 'FileName' for valid extension

  if (item && item.FileName) {
    if (item.FileName.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.FileName.endsWith('.png')) {
      return 'png';
    } else if (item.FileName.endsWith('.svg')) {
      return 'svg';
    } else if (item.FileName.endsWith('.jpg')) {
      return 'jpg';
    } else if (item.FileName.endsWith('.jpeg')) {
      return 'jpeg';
    }
  }

  // If no valid extension is found in 'FileName', check 'Reference'
  if (item && item.Reference) {
    if (item.Reference.endsWith('.pdf')) {
      return 'pdf';
    } else if (item.Reference.endsWith('.png')) {
      return 'png';
    } else if (item.Reference.endsWith('.svg')) {
      return 'svg';
    } else if (item.Reference.endsWith('.jpg')) {
      return 'jpg';
    } else if (item.Reference.endsWith('.jpeg')) {
      return 'jpeg';
    }
  }

  // Return default value if no conditions match
  return ''; // Default value if no valid file extension is found
}



editTaskname(index: number) {
  $(`#agenda-label-${index}`).addClass('d-none');
  $(`#agenda-text-field-${index}`).removeClass('d-none');
  $(`#agenda-text-field-${index}`).focus();
  $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
}

canceleditTaskname(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  tf.value = this.selectedtaskNames[index].Task_Name;

  $(`#agenda-label-${index}`).removeClass('d-none');   // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');   // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.

}

// editAgenda(index: number) {
//   $(`#agenda-label-${index}`).addClass('d-none');
//   $(`#agenda-text-field-${index}`).removeClass('d-none');
//   $(`#agenda-text-field-${index}`).focus();

//   $(`#edit-cancel-${index}`).removeClass('d-none');   // cancel btn is visible.
//   $(`#editing-save-${index}`).removeClass('d-none');   // save btn is visible.

//   $(`#edit-agendaname-btn-${index}`).addClass('d-none');  // edit btn is invisible.
//   $(`#remove-agenda-btn-${index}`).addClass('d-none');   // delete btn is invisible.

// }


updateAgenda(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
  this.allAgendas[index].name = tf.value;

  $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.

} else if (tf.value.trim().length == 0){
  this.notifyService.showInfo("Please enter atleast one word","");
}else {
  this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
}
  console.log('all agendas after updating:', this.allAgendas);
}

updateTask(index: number) {
  const tf: any = document.getElementById(`agenda-text-field-${index}`);
  if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
  this.selectedtaskNames[index].Task_Name = tf.value;

  $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
  $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
  $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
  $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
  $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
  $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.
} else if (tf.value.trim().length == 0){
  this.notifyService.showInfo("Please enter atleast one word","");
}else {
  this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
}

}



// Task and event code start

  Task_type(value) {

    document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");
    document.getElementById("rightbar-overlay-et").style.display = "block";
    // document.getElementById("rightbar-overlay").style.display = "block";
    // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    // document.getElementById("kt-bodyc").classList.add("overflow-hidden");


    document.getElementById("div_recurrence").style.display = "block";
    document.getElementById("weekly_121_new").style.display = "none";
    document.getElementById("div_endDate_new").style.display = "none";
    document.getElementById("Monthly_121_new").style.display = "none";
    document.getElementById("Recurrence_hide").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Schenddate").style.display = "none";
    document.getElementById("Descrip_Name12").style.display = "none";
    document.getElementById("Location_Name").style.display = "none";

    this.clearallfields();
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
    this.eventRepeat=false;
    this.create = true;
    this.currentTime=moment().format('h:mm A');

    if (value == 1) {
      this.ScheduleType = "Task";
      this.GetProjectAndsubtashDrpforCalender();
      document.getElementById("subtaskid").style.display = "flex";   // actions
      // document.getElementById("Link_Name").style.display = "none";
      document.getElementById("Guest_Name").style.display = "none";  // participants
      document.getElementById("Descrip_Name").style.display = "none";  // description
      document.getElementById("core_viw123").style.display = "flex";   // select projects (in task)
      document.getElementById("core_viw121").style.display = "none";   // select project (in event)
      document.getElementById("core_viw222").style.display = "none";   // select portfolio
      document.getElementById("core_Dms").style.display = "none";       // select dms
      document.getElementById("meeting-online-add").style.display = "none";  // meeting online or offline

    }
    else {
      this.ScheduleType = "Event";
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = null;
      this.GetProjectAndsubtashDrpforCalender();
      this.GetMemosByEmployeeId();


      document.getElementById("subtaskid").style.display = "none";    // actions
      // document.getElementById("Link_Name").style.display = "block";
      document.getElementById("Guest_Name").style.display = "flex";    // participants
      document.getElementById("Descrip_Name").style.display = "flex";  // description
      document.getElementById("core_viw121").style.display = "flex";   // select project (in event)
      document.getElementById("core_viw123").style.display = "none";   // select projects (in task)
      document.getElementById("core_viw222").style.display = "flex";  // select portfolio
      document.getElementById("core_Dms").style.display = "flex";      // select dms
      document.getElementById("meeting-online-add").style.display = "flex";  // meeting online or offline


      const TEsb = document.getElementById('TaskEvent-Sidebar');
      TEsb.addEventListener('scroll', () => {
        this.autocompletes.forEach((ac) => {
          if (ac.panelOpen)
            ac.updatePosition();
        });
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
    console.log(this.daysSelectedII, "default")
    // this.Project_Code = "4001176";

  }

  changeScheduleType(val:number){
    if(val==1)
    {  // Task
      this.ScheduleType = "Task";
      this.GetProjectAndsubtashDrpforCalender();
      document.getElementById("subtaskid").style.display = "flex";
      document.getElementById("Guest_Name").style.display = "none";
      document.getElementById("Location_Name").style.display = "none";
      document.getElementById("Descrip_Name").style.display = "none";
      document.getElementById("core_viw123").style.display = "flex";
      document.getElementById("core_viw121").style.display = "none";
      document.getElementById("core_viw222").style.display = "none";
      document.getElementById("core_Dms").style.display = "none";
      document.getElementById("meeting-online-add").style.display = "none";
      document.getElementById('Descrip_Name12').style.display='none';

    }
    else if(val==2)
    {  // Event
      this.ScheduleType = "Event";
      this._calenderDto.Emp_No = this.Current_user_ID;
      this._calenderDto.Project_Code = null;
      this.GetProjectAndsubtashDrpforCalender();
      this.GetMemosByEmployeeId();
      document.getElementById("subtaskid").style.display = "none";
      document.getElementById("Guest_Name").style.display = "flex";
      document.getElementById("Location_Name").style.display = "flex";
      document.getElementById("Descrip_Name").style.display = "flex";
      document.getElementById("core_viw121").style.display = "flex";
      document.getElementById("core_viw123").style.display = "none";
      document.getElementById("core_viw222").style.display = "flex";
      document.getElementById("core_Dms").style.display = "flex";
      document.getElementById("meeting-online-add").style.display = "flex";
      document.getElementById('Descrip_Name12').style.display=this._onlinelink?'flex':'none';

    }
    this.MasterCode=null; // whenever user switches task to event or viceversa remove all selected projects.
 }

 GetMemosByEmployeeId() {
  this.loading=true;
  this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
    subscribe((data) => {
      this.Memos_List = JSON.parse(data['JsonData']);
      console.log(this.Memos_List, "test iiii");
      this.loading=false;
    });
}


   clearallfields() {

     this._StartDate = moment().format("YYYY-MM-DD").toString();
     // this._EndDate = moment().format("YYYY-MM-DD").toString();
     this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();

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
     // this.Recurr_arr = [];
     this._status = null;
     this.Portfolio = null;
     this.Location_Type = null;
     this.Allocated_subtask = null;
     this.Projectstartdate = "";
     this.projectEnddate = null;
     this.Status_project = null;
     this.AllocatedHours = null;
     this.Link_Details = null;
     this.Meeting_Id = null;
     this.Meeting_password = null;
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
     this.subtask_loading=false;
     this.subtashDrpLoading=false;
     this.loading=false;
   }

   calculateDiff(dateSent) {
    let currentDate = new Date();

    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / (1000 * 60 * 60 * 24));
  }


  subtask_loading:boolean=false;
  GetSubtasklistfromProject(MasterCode) {


    this.ProjectListArray.forEach(element => {

      if (element.Project_Code == MasterCode) {

        this.Projectstartdate = element.StatDate;
        this.projectEnddate = element.Enddate;
        this.Status_project = element.Status;
        this.AllocatedHours = element.Allocated;
        var number = this.calculateDiff(this.projectEnddate);
        const format2 = "YYYY-MM-DD"
        if (number >= 90) {

          // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
          this.Note_deadlineexpire = false;
        }
        else {
          if (number < 0) {
            if (this.ScheduleType == "Task") {
              // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
              this.Note_deadlineexpire = true;
            }
            else {
              // this.maxDate = moment(moment().add(90, 'days')).format(format2).toString();
            }
          }
          else {
            // this.maxDate = moment(this.projectEnddate).format("YYYY-MM-DD").toString();
            this.Note_deadlineexpire = false;
          }
        }
      }

    });
    if (MasterCode != undefined) {
      this.subtask_loading=true;
      this._calenderDto.Project_Code = MasterCode;
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          // console.log(data);
          this.BlockNameProject1 = JSON.parse(data['Projectlist']);
          this.subtask_loading=false;
        });
      this._subname = false;
      this.ProjectListArray.forEach(element => {
        if (element.Project_Code == MasterCode) {
          this._Exec_BlockName = element.Exec_BlockName;
          this.SubmissionName = element.Submission;
        }
      });
      if (this._Exec_BlockName == "Standard Tasks" || this._Exec_BlockName == "To do List" || this._Exec_BlockName == "Routine Tasks") {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "none";

      }
      else {
        (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "flex";
      }
    }
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

  selectedDay(days) {

    //Checked the day
    let objIndex = this.dayArr1.findIndex((obj => obj.value == days.target.value));
    this.dayArr1[objIndex].checked = days.target.checked;
    // this.Recurr_arr.push(days.target.value);

    if(days.target.checked&&this.notProvided1=='dayarr1')
      this.notProvided1="";
  }

  pendingavailability: boolean = true;


  selectStartDate(event) {

    this._StartDate = event;
    let sd = event.format("YYYY-MM-DD").toString();
    this._SEndDate = event.format("YYYY-MM-DD").toString();
    this.minDate = sd;
    this._calenderDto.Schedule_ID = this.Schedule_ID;
    this._calenderDto.Scheduled_date = sd;
    // this.CalenderService.NewGetPendingAvailability(this._calenderDto).subscribe((data)=>{
    //   if(data['message']=='1'){
    //     this.pendingavailability==false;
    //   }
    //   else{
    //     this.pendingavailability==true;
    //   }
    // });


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
      jsonData[Day] = event.format('dddd').substring(0, 3);
      jsonData[DayNum] = event.format('DD').substring(0, 3);
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



    // valid starttimearr setting start.
    let _inputdate=event;
    let _currentdate=moment();
    if(_inputdate.format('YYYY-MM-DD')==_currentdate.format('YYYY-MM-DD'))
    {
        const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
        const index:number=this.StartTimearr.findIndex((item:any)=>{
            const t=moment(item,'h:mm A');
            const result=t>=ct;
            return result;
        });
        this.validStartTimearr=this.StartTimearr.slice(index);

    // verify whether starttime and endtime are valid or not. start
    _currentdate.format('h:mm A');

    const inputtime1=moment(this.Startts,'h:mm A');
    const inputtime2=moment(this.Endtms,'h:mm A');
    if(inputtime1<ct)
      this.Startts=this.validStartTimearr[0];
    if(inputtime2<ct)
      this.Endtms=this.validStartTimearr[1];

   // verify whether starttime and endtime are valid or not. end

    }
    else
    this.validStartTimearr=[...this.StartTimearr];
    // valid starttimearr setting end.



////test start ///////////////////////////////////////////

if(this.editTask && this.selectedrecuvalue =='2'){

// uncheck prev date.
  let d=new Date(this._Oldstart_date);
  const index=d.getDay();
  this.dayArr[index].checked=false;
// uncheck prev date.

// update new
  let d2=new Date(this._StartDate);
  const index2=d2.getDay();
  this.dayArr[index2].checked=true;

  this.mtgOnDays=[];
  this.dayArr.forEach((item:any)=>{
    if(item.checked){
        let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
       this.mtgOnDays.push(d_name);
    }
 });
// update new
} else if(this.editTask && this.selectedrecuvalue == "3"){

    // uncheck prev date.
    let d=new Date(this._Oldstart_date);
    const index=d.getDate();
    this.MonthArr[index].checked=false;
    // uncheck prev date.

    // update new
    let d2=new Date(this._StartDate);
    const index2=d2.getDate();
    this.MonthArr[index2-1].checked=true;

    this.mtgOnDays=[];
    this.MonthArr.forEach((item:any)=>{
      if(item.checked){

         const d_no=Number.parseInt(item.value);
         this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
      }
    });
    // update new
}
////test end  ///////////////////////////////////////////
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

  isSelected = (event: any) => {
    // const date =
    //   event.getFullYear() +
    //   "-" +
    //   ("00" + (event.getMonth() + 1)).slice(-2) +
    //   "-" +
    //   ("00" + event.getDate()).slice(-2);
    var dateObj = new Date(event);
    var momentObj = moment(dateObj);
    var date = momentObj.format('YYYY-MM-DD');

    //return this.daysSelected.find(x => x == Date) ? "selected" : null;
    return this.daysSelectedII.find(x => x.Date == date && x.IsActive == false) ? "selected" :
      this.daysSelectedII.find(y => y.Date == date && y.IsActive == true) ? "selectedinvalid" : null;
  };

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
        // this.calendar.updateTodaysDate();
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

        // this.calendar.updateTodaysDate();
      }
    }, delay);


  }

  Checkdatetimetable(_array) {


    this._calenderDto.json = JSON.stringify(_array);

    this._calenderDto.EmpNo = this.Current_user_ID;
    this.CalenderService.NewGetcheckdateandtime(this._calenderDto).subscribe
      ((data) => {
        this.daysSelectedII = JSON.parse(data['Checkdatetimejson']);
        // this.calendar.updateTodaysDate();

      });
  }

  getavltime(e) {
    this.timeslotsavl = [];
    this.timeslotsavl.push(this.Avaliabletime.find(i => i.count === parseInt(e.target.value)));
    this._selectedId = 0;
    this._SecondSelectedId = 0;
    this.timeslotsavl.forEach(element => {
      this._total = element.SlotsJson.length;
    });
  }


  subtashDrpLoading:boolean=false;
  GetProjectAndsubtashDrpforCalender() {
    this.subtashDrpLoading=true;
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        this.subtashDrpLoading=false;
        console.log(" Result of GetProjectAndsubtashDrpforCalender:", data);
        this.ProjectListArray = JSON.parse(data['Projectlist']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        this.companies_Arr=JSON.parse(data['Client_json']);
        this.selectedtaskNames=JSON.parse(JSON.stringify(this.checkedTaskNames));   // copy of selected items.
        this.selected_taskName = this.selectedtaskNames.map(task=>task.Task_Name).join(', ');
        this.Title_Name = this.selected_taskName
        console.log("_EmployeeListForDropdown",this._EmployeeListForDropdown);
        console.log("Portfoliolist_1:",this.Portfoliolist_1);
        console.log("ProjectListArray:",this.ProjectListArray);
        console.log('companies_Arr :',this.companies_Arr);
      });
  }


  getSidebarDropdownData(){
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
    ((data) => {
      this.ProjectListArray = JSON.parse(data['Projectlist']);
      this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
      this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
      this.companies_Arr=JSON.parse(data['Client_json']);   
    });
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
        this.Alltimes = [];
        this.EndTimearr = [];
        this.AllEndtime = [];
        this.StartTimearr = [];

          this._arrayObj.forEach(element => {
          this.EndTimearr.push(element.TSEnd);
          this.AllEndtime.push(element.TSEnd);
          this.StartTimearr.push(element.TSStart);
          this.Alltimes.push(element.TSStart);

        });



      // provide valid starttiming and endtimearr.    start
      let _currentdate=moment();
      const ct=moment(_currentdate.format('h:mm A'),'h:mm A');
      const index:number=this.StartTimearr.findIndex((item:any)=>{
        const t=moment(item,'h:mm A');
        const result=t>=ct;
        return result;
      });

      this.validStartTimearr=this.StartTimearr.slice(index);


      this.timingarryend = [];
      this.Time_End = [];
      this.Time_End = this.AllEndtime;
      let _index = this.Time_End.indexOf(this.Startts);
      if (_index + 1 === this.Time_End.length) {
        _index = -1;
      }
      this.timingarryend = this.Time_End.splice(_index + 1);
      this.EndTimearr = this.timingarryend;
      // provide valid starttiming and endtimearr.    end

      });
  }


currentTime:any;

  addstarttime() {

    this.Alltimes = [];
    this.EndTimearr = [];
    this.AllEndtime = [];
    this.StartTimearr = [];

    this._arrayObj.forEach(element => {
      this.EndTimearr.push(element.TSStart);
      this.AllEndtime.push(element.TSStart);
      this.StartTimearr.push(element.TSStart);
      this.Alltimes.push(element.TSStart);
      //  console.log( this.Alltimes,"times")
    });

    console.log("StartTimearr:", this.StartTimearr);
    console.log("EndTimearr:", this.EndTimearr);
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
    if (_index + 1 === this.Time_End.length) {
      _index = -1;
    }
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

    if (this.timearr1[0] == 11) {
      this._arrayObj.forEach(element => {
        this.EndTimearr.push(element.TSStart);

      });
      vahr = Number(vahr) + 1;
      if (vahr == 13) {
        vahr = '1'

      }
      this.Endtms = vahr.toString() + ':' + mins;
      // alert(this.Startts)
      // alert(this.Endtms)

      if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
        this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
        //  alert(this.scstartdate)
        // document.getElementById("Schenddate").style.display = "block";

      }
      else {
        this._SEndDate = this._StartDate;
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


  delayMeeting:any;
  upcomingMeeting:any;
  meetingDuration:any;

  meetingRestriction(actualMeeting){

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 8);
    const meetingDate = new Date(actualMeeting);


    if (meetingDate >= sevenDaysAgo && meetingDate <= today) {
        this.delayMeeting = true;
        this.upcomingMeeting = false;
    }
    // Check if meeting date is in the future
    else if (meetingDate > today) {
        this.upcomingMeeting = true;
        this.delayMeeting = false;
    } else {
        this.delayMeeting = false;
        this.upcomingMeeting = false;
        const durationMillis = meetingDate.getTime() - sevenDaysAgo.getTime();
        // Convert milliseconds to days and add 8 to start from 8 days
        var meetingDurations = Math.ceil(durationMillis / (1000 * 60 * 60 * 24)) - 7;
        this.meetingDuration = Math.abs(meetingDurations);
       // console.log(this.meetingDuration, 'meetingDate:');
      }
  }





Meeting_status: boolean;
  AdminMeeting_Status: string;
  Isadmin: boolean;
  loading: boolean = false;
  statusofMeeting:any|undefined;
  RecurrenceValue:any

  GetClickEventJSON_Calender(arg) {

    this.EventScheduledjson = [];
    this.loading = true;
    this.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    $('.bg-ovr').addClass('d-block');
    $('.side_view').addClass('position-fixed');
    this._calenderDto.Schedule_ID = arg.event._def.extendedProps.Schedule_ID;
    this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
      ((data) => {
        this.loading = false;
        this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
        var Schedule_date =this.EventScheduledjson[0].Schedule_date
        this.meetingRestriction(Schedule_date);
        this.AdminMeeting_Status = data['AdminMeeting_Status'];
        this.Isadmin = this.EventScheduledjson[0]['IsAdmin'];


         console.log(this.EventScheduledjson, "Testing12");
        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson
        this.Project_dateScheduledjson = this.EventScheduledjson[0].Schedule_date;
        this.Schedule_type1 = this.EventScheduledjson[0].Schedule_Type;
        this.Status1 = this.EventScheduledjson[0].Status.trim();
        console.log(this.Attachments_ary, "Attachments_ary");
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
        console.log(this.Meeting_status,'Meeting_status')

        this._StartDate=this.EventScheduledjson[0].Schedule_date;
        this.Startts=this.EventScheduledjson[0].St_Time;
        this.Endtms=this.EventScheduledjson[0].Ed_Time;
        this.RecurrenceValue=this.EventScheduledjson[0].Recurrence
        this.Link_Details = this.EventScheduledjson[0]['Link_Details'];


        // var details = this.Link_Details.split(', ')
        // this.Link_Details= details[0].split('Meeting link:-')[1].trim()==undefined || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
        // this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
        // this.Meeting_password=  details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
        // console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")


        // document.getElementById("deleteendit").style.display = "flex";
        if ((this.Schedule_type1 == 'Event') && (this.Status1 != 'Pending' && this.Status1 != 'Accepted' && this.Status1 != 'Rejected' && this.Status1 != 'May be' && this.Status1 != 'Proposed')) {

          document.getElementById("hiddenedit").style.display = this.Meeting_status==true?'none':'flex';
          document.getElementById("deleteendit").style.display =this.Meeting_status==true?'none':'flex';
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("act-btn").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
        }
        else if ((this.Schedule_type1 == 'Event') && (this.Meeting_status==false) && (this.Status1 == 'Pending' || this.Status1 == 'Accepted' || this.Status1 == 'Rejected' || this.Status1 == 'May be' || this.Status1 == 'Proposed')) {

          document.getElementById("hiddenedit").style.display = "none";
          document.getElementById("deleteendit").style.display = "none";

          document.getElementById("main-foot").style.display = "flex";


          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";
        }
        else if ((this.Schedule_type1 == 'Task') && (this.Project_dateScheduledjson >= this._StartDate)) {
          document.getElementById("hiddenedit").style.display = "flex";
          document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "flex";
          // document.getElementById("copy_data1").style.display = "flex";
          // document.getElementById("copy_data2").style.display = "flex";
          // document.getElementById("act-btn").style.display = "none";
        }
        else {
          document.getElementById("hiddenedit").style.display = "none";
           document.getElementById("deleteendit").style.display = "flex";
          document.getElementById("main-foot").style.display = "none";
          // document.getElementById("copy_data").style.display = "none";
          // document.getElementById("copy_data1").style.display = "none";
          // document.getElementById("copy_data2").style.display = "none";
          // document.getElementById("act-btn").style.display = "none";
        }
        this.Project_NameScheduledjson = JSON.parse(this.EventScheduledjson[0].Project_code);

        this.portfolio_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Portfolio_Name);
        this.User_Scheduledjson = JSON.parse(this.EventScheduledjson[0].Add_guests);
        console.log(this.User_Scheduledjson, "000");
        this.DMS_Scheduledjson = this.EventScheduledjson[0].DMS_Name;
        this.DMS_Scheduledjson = this.DMS_Scheduledjson.split(',');

        var eventStatus=  this.User_Scheduledjson.filter(e=>e.stringval==this.Current_user_ID);
         this.statusofMeeting =eventStatus.length?eventStatus[0].Status:undefined;

        // console.log(this.statusofMeeting[0].Status, "12")
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
              console.log("Subject Name 2------------>", this._MemosSubjectList);
            });
        }




        // console.log(this.dmsIdjson,"ids");
      });
  }




  user_Type:any=0;

  fetchDataStartTime: number;
  fetchDataEndTime: number;
  dataBindStartTime: number;
  dataBindEndTime: number;
  fetchDataTime: number;
  dataBindTime: number;
  GetScheduledJson() {

    this._calenderDto.EmpNo = this.Current_user_ID;
    this._calenderDto.User_Type=this.user_Type;
    this.fetchDataStartTime = performance.now();
    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe
      ((data) => {
        console.log(data,'dataCalendar Json List')
        this.fetchDataEndTime = performance.now();
        this.fetchDataTime = this.fetchDataEndTime - this.fetchDataStartTime;

        this.dataBindStartTime = performance.now();
        this.Scheduledjson = JSON.parse(data['Scheduledtime']);
        console.log(this.Scheduledjson,'Calendar Json List')
        this.dataBindEndTime = performance.now();
        this.dataBindTime = this.dataBindEndTime - this.dataBindStartTime;
        this.userFound = true
        console.log("Fetch Data Time: in milliseconds", this.fetchDataTime);
        console.log("Data Bind Time: in milliseconds", this.dataBindTime);


        // var _now = moment().format() + "T" + moment().format("hh:mm:ss");

        this.calendarOptions = {
          initialView: 'listWeek',

          firstDay: moment().weekday(),

          // timeZone: 'local',
          // initialDate:new Date(1, 3-9, 2023),'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
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
          allDaySlot: false,
          datesSet: () => {
            this.TwinEvent = [];
          }
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







  TimeClick(id, stime) {

    if (this._selectedId == 0) {
      $('.wp-100 .active').removeClass('active');
      $('#div_' + id).children('.time-slt-card').addClass('active');
      this._selectedId = id;
      this.slottime = stime;
    }
    else if (this._SecondSelectedId == 0) {
      this._SecondSelectedId = id;

      for (var i = 1; i <= this._SecondSelectedId; i++) {
        if (i > this._selectedId) {
          $('#div_' + i).children('.time-slt-card').addClass('active');
        }

      }

      this.daysSelectedII.forEach(element => {
        if (element.Date == this.doubleclickdate) {
          element.StartTime = this.slottime;
          element.EndTime = stime;
          element.IsActive = false;
        }
      });
      // console.log("Updated Array"+JSON.stringify(this.daysSelectedII))
      const found = this.Timechangearry.some(el => el.Date === this.doubleclickdate);
      if (!found) {
        var jsonData = {};
        var columnName = "Date";
        jsonData[columnName] = this.doubleclickdate;
        var columnNames = "StartTime";
        jsonData[columnNames] = this.slottime;
        var columnNamee = "EndTime";
        jsonData[columnNamee] = stime;
        this.Timechangearry.push(jsonData)
      }
      else {
        this.Timechangearry.forEach(element => {
          if (element.Date == this.doubleclickdate) {
            element.StartTime = this.slottime;
            element.EndTime = stime;
          }
        });
      }
      // console.log("Updated Array" + JSON.stringify(this.Timechangearry))
      // this.calendar.updateTodaysDate();
      this._selectedId = 0;
      this._SecondSelectedId = 0;
      $('.wp-100 .time').removeClass('time');
    }
    else {
      this._selectedId = id;
      this._SecondSelectedId = 0;
      this._firstClick = 0;
      $('.wp-100 .active').removeClass('active');
      $('.wp-100 .time').removeClass('time');
      $('#div_' + id).children('.time-slt-card').addClass('active');
    }
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });



    // var _selectedId = this._selectedId;
    // var _SecondSelectedId = this._SecondSelectedId;
    // var _total = 14;
    // if (this._firstClick == 0) {

    //   $('table tr td').on("mouseenter", function () {

    //     if (_selectedId != 0 && _SecondSelectedId == 0) {
    //       for (var i = 1; i <= _total; i++) {
    //         if (i > _selectedId) {
    //           $('#div_' + i).children('.time-slt-card').addClass('time');
    //         }
    //         if ((parseInt(this.id) == i) && (i > _selectedId)) {
    //           $('#div_' + i).children('.time-slt-card').addClass('time');
    //           return false;
    //         }
    //       }
    //     }
    //   }).on("mouseleave", function () {
    //     if (_selectedId != 0) {
    //       for (var i = 1; i <= _total; i++) {
    //         if (i > _selectedId) {
    //           $('#div_' + i).children('.time-slt-card').removeClass('time');
    //         }
    //       }
    //     }
    //   });
    // }
    // this._firstClick = 1;
  }


  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = [
        "../../../assets/js/timehover.js",
      ];
      // var dynamicScripts = [
      //   environment.assetsurl + "../../../assets/js/dashboard/jquery.knob.min.js",
      //   environment.assetsurl + "assets/js/dashboard/jquery.peity.min.js",
      //   environment.assetsurl + "assets/js/dashboard/main.js"
      // ];

      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

    SelectDropDown(val) {
      this.selectedrecuvalue = val.value.toString();
      // alert(this.selectedrecuvalue)
      if (this.selectedrecuvalue == '0') {
        this._PopupConfirmedValue = 1;
      }
      else {
        this._PopupConfirmedValue = 2;
      }
      this._labelName = "Start Date";   // based on repeat type setting label to 'start date' or 'schedule date'.
      document.getElementById("div_endDate_new").style.display = "block";
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
        this._labelName = "Schedule Date";
        document.getElementById("Monthly_121_new").style.display = "none";
        document.getElementById("div_endDate_new").style.display = "none";
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
        // this.calendar.updateTodaysDate();
        document.getElementById("weekly_121_new").style.display = "none";
        document.getElementById("weekly_122_new").style.display = "none";
        document.getElementById("Monthly_121_new").style.display = "none";
      }
      if (val.value == 2) {

        document.getElementById("weekly_121_new").style.display = "block";
        document.getElementById("Monthly_121_new").style.display = "none";

      }
      else if (val.value == 1) {
        document.getElementById("weekly_121_new").style.display = "none";
        document.getElementById("Monthly_121_new").style.display = "none";
        // this.maxDate = moment(this._EndDate).format("YYYY-MM-DD").toString()
        // for (let index = 0; index < this.dayArr.length; index++) {
        //   this.dayArr[index].checked = false;
        // }

        // alert(this.AllDatesSDandED.length)
        // while (date <= d2) {

        //   dates.push(moment(date).format(format2));

        //   var jsonData = {};
        //   var columnName = "Date";
        //   jsonData[columnName] = (moment(date).format(format2));
        //   var columnNames = "StartTime";
        //   jsonData[columnNames] = this.Startts;
        //   var columnNamee = "EndTime";
        //   jsonData[columnNamee] = this.Endtms;
        //   if (this.ScheduleType == "Event" || this.ScheduleType == "Task") {
        //     var IsActive = "IsActive";
        //     jsonData[IsActive] = 1;
        //   }
        //   this.daysSelectedII.push(jsonData);
        //   date.setDate(date.getDate() + 1);
        // }
        // this.daysSelected = dates;
        // this.calendar.updateTodaysDate();
      }
      else if (val.value == 3) {
        document.getElementById("weekly_121_new").style.display = "none";
        document.getElementById("Monthly_121_new").style.display = "block";
      }

    }


    selectmonthlydays(day) {
      let objIndex = this.MonthArr1.findIndex((obj => obj.value == day.target.value));
      this.MonthArr1[objIndex].checked = day.target.checked;
      // this.calendar.updateTodaysDate();
      if(day.target.checked&&this.notProvided1=='montharr1')
        this.notProvided1="";
    }


    TwinEvent = [];
    customizeEvent = (info) => {

      const eventDate = info.event.end;
      const currentDate = new Date();
      const taskComplete = info.event.className;
      if (eventDate < currentDate) {
        const eventElement = info.el;
        eventElement.style.opacity = '0.5'; // Change the background color for past events
      }

      // const time_str=info.el.children[0].innerHTML.toUpperCase();
      // info.el.children[0].innerHTML=time_str.replace(/([0-9]+:[0-9]+)(AM|PM)/g, '$1 $2');
      // if(taskComplete == 'fc-green'){
      //   const eventElement = info.el;
      //   eventElement.style.opacity = '0.5';
      // }

      const event = info.event;
      const start = new Date(event.start);
      const end = new Date(event.end);

      // Normalize the start and end to the start of the day for comparison
      let startMidnight: any = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      let endMidnight: any = new Date(end.getFullYear(), end.getMonth(), end.getDate());
      startMidnight = startMidnight.getTime();
      endMidnight = endMidnight.getTime();

      // Calculate the view range
      const viewStart = new Date(info.view.activeStart);
      const viewEnd = new Date(info.view.activeEnd);

      // Adjust viewEnd to the end of the last day of the range
      viewEnd.setDate(viewEnd.getDate() - 1);
      const viewStartMidnight = new Date(viewStart.getFullYear(), viewStart.getMonth(), viewStart.getDate()).getTime();
      const viewEndMidnight = new Date(viewEnd.getFullYear(), viewEnd.getMonth(), viewEnd.getDate(), 23, 59, 59, 999).getTime();

      // Determine if the event is within the current view
      const eventIsWithinView = startMidnight <= viewEndMidnight && endMidnight >= viewStartMidnight;

      // Only process events that are within the view and span more than one day

      // if (eventIsWithinView && (startMidnight !== endMidnight)) {
      //   let dayLabel = '';

      //   if (startMidnight >= viewStartMidnight && startMidnight <= viewEndMidnight) {
      //     dayLabel = 'Day (2/2)';
      //   }
      //   if (endMidnight > viewStartMidnight && endMidnight < viewEndMidnight) {
      //     dayLabel = 'Day (1/2)';
      //   }

      // //   // Check if the label should be applied
      //   if (dayLabel && !event.title.includes(dayLabel)) {
      //     const titleWithoutDay = event.title.replace(/ - Day \(.\..?\)/, '');
      //     const newTitle = `${titleWithoutDay} - ${dayLabel}`;
      //     event.setProp('title', newTitle);
      //   }
      // }
      //
      let is12am: boolean = (end.getHours() == 0 && end.getMinutes() == 0 && end.getSeconds() == 0);
      if (eventIsWithinView && (startMidnight !== endMidnight) && !is12am) {

        if (start < viewStart) {
          this.TwinEvent.push(event._def.extendedProps.Schedule_ID);
        }
        const r = this.TwinEvent.includes(event._def.extendedProps.Schedule_ID);

        let dayLabel = '';

        if (r) {
          dayLabel = 'Day (2/2)';
          const index = this.TwinEvent.indexOf(event._def.extendedProps.Schedule_ID);
          this.TwinEvent.splice(index, 1);
        }
        else {
          dayLabel = 'Day (1/2)';
          this.TwinEvent.push(event._def.extendedProps.Schedule_ID);
        }




        //   // Check if the label should be applied
        if (dayLabel && !event.title.includes(dayLabel)) {
          const titleWithoutDay = event.title.replace(/ - Day \(.\..?\)/, '');
          const newTitle = `${titleWithoutDay} - ${dayLabel}`;

          if (info.view.type === 'listWeek') {

            info.el.children[2].innerText = newTitle;
          }
          else {
            event.setProp('title', event.title);
            this.TwinEvent = [];
          }
        }
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

      console.log(address, "add11")
      this.Locationfulladd = address.formatted_address;
    }



    checkAddressURL(str) {

      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      return regexp.test(str);
    }
    addreschange() {
      //24.668213927924413, 46.74734971286595
      //17.4333782,78.3664286
      const isValidStrings = ["17.4333", "78.3664"];
      // alert(validationLatitudeLongitude.latLong(...isValidStrings));

      if (this.Location_Type.includes(',')) {
        // alert(111)
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


    handleEventClick(arg) {
      // console.log(arg, "ttttt")
      this.ProjectCode = arg.event._def.extendedProps.Schedule_ID;
      // alert(arg.event._def.extendedProps.Schedule_ID)
      // this.router.navigate(["../backend/dashboard/projectinfo", this.ProjectCode]);
      // document.getElementById("mysideInfobar").style.width = "70%";
      // document.getElementById("rightbar-overlay").style.display = "block";
      // document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    }

    onfocus(val) {
      console.log(val, "ttt");
    }






// new eventsidebar design code start

selectedrecuvalue1:string='0';
dayArr1:any=JSON.parse(JSON.stringify(this.dayArr)); // deep copying all content
MonthArr1:any=JSON.parse(JSON.stringify(this.MonthArr)); // deep copying all content
_EndDate1:any;
mtgOnDays:any=[];  // list of day name on which mtg is present.
notProvided1:any;

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


bindCustomRecurrenceValues(){


if(this.selectedrecuvalue1=='2'&&!this.dayArr1.some((item)=>item.checked)){
  this.notProvided1='dayarr1';
  return;
}

if(this.selectedrecuvalue1=='3'&&!this.MonthArr1.some(item=>item.checked)){
  this.notProvided1='montharr1';
  return;
}

if(['1','2','3'].includes(this.selectedrecuvalue1)&&!this._EndDate1){
  this.notProvided1='enddate1';
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
console.log(this._PopupConfirmedValue)




// if (this.selectedrecuvalue == '0') {
//   this._PopupConfirmedValue = 1;
// }
// else if(this._OldRecurranceId == this.selectedrecuvalue && this._OldRecurranceValues == _arraytext.toString()){
//   this._PopupConfirmedValue = 1;
// }
// else {
//   this._PopupConfirmedValue = 2;
// }

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
view_graph_div(){
  document.getElementById("graph-div").style.display = "block";
}
close_graph_div(){
  document.getElementById("graph-div").style.display = "none";
}
// new eventsidebar design code end




// 'repeat' new option start
eventRepeat:boolean=false;
earlyDate:boolean=false;
onCustomBtnClicked(){
  Swal.fire({
    title: `Repeat meeting`,
    text: `A meeting cannot be scheduled more than once on the same day. To change the meeting time, please edit the existing meeting`,
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      // Call your second function when OK is clicked
      $('#propse11').removeClass('show');
      this.repeatEvent();
    }
    // else if (result.isDismissed) {
      // Skip all when Cancel is clicked
      // continue; // Skip this file
    // }
  })
}

repeatEvent() {
  document.getElementById("div_endDate_new").style.display = "none";
  document.getElementById("Schenddate").style.display = "none";

  this.editTask = false;
  this.copyTask = false;
  this.create = false;
  this.eventRepeat=true;


  this.Schedule_ID = this._calenderDto.Schedule_ID;
  this.CalenderService.NewClickEventJSON(this._calenderDto).subscribe
    ((data) => {

      this.EventScheduledjson = JSON.parse(data['ClickEventJSON']);
      this.Schedule_ID = 0;   // schedule id.
      this.ScheduleType = (this.EventScheduledjson)[0]['Schedule_Type'];  // event or task
      this.EventNumber = this.EventScheduledjson[0]['EventNumber'];

      this._FutureEventTasksCount = this.EventScheduledjson[0]['FutureCount'];
      this._AllEventTasksCount = this.EventScheduledjson[0]['AllEventsCount'];
      this._OldRecurranceId = this.EventScheduledjson[0]['RecurrenceId'];
      this._OldRecurranceValues = this.EventScheduledjson[0]['Recurrence_values'];
      this._Oldstart_date = this.EventScheduledjson[0]['StartDate'];
      this.Addressurl = this.EventScheduledjson[0]['Addressurl'];             // url
      this.Attachment12_ary = this.EventScheduledjson[0]['Attachmentsjson'];   // file attachment

      // if (this._FutureEventTasksCount > 0) {

      // }
      // else if (this._FutureEventTasksCount == 0) {

      // }
      document.getElementById("div_recurrence").style.display = "block";
      document.getElementById("Monthly_121_new").style.display = "none";
      document.getElementById("weekly_121_new").style.display = "none";
      document.getElementById("mysideInfobar_schd").classList.add("open_sidebar");


      this.AllDatesSDandED = [];
      var jsonData = {};
      var columnName = "Date";
      jsonData[columnName] = (moment(this.minDate).format("YYYY-MM-DD"));//this.EventScheduledjson[0]['Schedule_date'];
      var IsActive = "IsActive";
      jsonData[IsActive] = 1;
      var Day = "Day";
      jsonData[Day] = "NA";
      var DayNum = "DayNum";
      jsonData[DayNum] = "NA";
      this.AllDatesSDandED.push(jsonData);
      this._StartDate = moment().format("YYYY-MM-DD").toString();
      this.minDate = moment().format("YYYY-MM-DD").toString();
      if (this.minDate > this._StartDate) {
        this.minDate = this._StartDate;
      }
      this._EndDate = moment().add(3, 'months').format("YYYY-MM-DD").toString();



       if (this.ScheduleType == 'Event') {
        this.allAgendas=this.EventScheduledjson[0]['Agendas'].map(item=>({index:item.AgendaId,name:item.Agenda_Name}));
        this.GetProjectAndsubtashDrpforCalender();
        this.Title_Name = (this.EventScheduledjson[0]['Task_Name']);
        this.MasterCode = [];
        this.arr = JSON.parse(this.EventScheduledjson[0]['Project_code']);
        this.arr.forEach(element => {
          this.MasterCode.push(element.stringval);
          this.projectsSelected.push({  Project_Code:element.stringval,  Project_Name:element.Project_Name, BlockNameProject:element.BlockNameProject, TM_DisplayName:element.TM_DisplayName });
        });
        this.Portfolio = [];
        this.Portfolio1 = [];
        this.arr1 = JSON.parse(this.EventScheduledjson[0]['Portfolio_Name']);
        this.arr1.forEach(element => {
          this.Portfolio.push(element.numberval);
        });

        this.ngEmployeeDropdown = [];
        this.ngEmployeeDropdown1 = [];
        this.arr2 = JSON.parse(this.EventScheduledjson[0]['Add_guests']);
        this.arr2.forEach(element => {
          this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
        });


        this.SelectDms = [];
        this.SelectDms1 = [];

        this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data) => {
               this.Memos_List = JSON.parse(data['JsonData']);
               console.log(this.Memos_List, "test iiii");

               let arr3 = [];
               var str = (this.EventScheduledjson[0]['DMS_Name']);
               arr3 = str.split(",");
               for (var i = 0; i < arr3.length; i++) {
                    this.Memos_List.forEach(element => {
                      if (element.MailId == arr3[i]) {
                        this.SelectDms.push(element.MailId);
                      }
                    });
               }

        });


        this.Location_Type = (this.EventScheduledjson[0]['Location']);
        this.Link_Details = this.EventScheduledjson[0]['Link_Details'];

        if(this.Link_Details != ''){
          if(!this.Link_Details.includes('<a href=')){
            var details = this.Link_Details.split(', ')
            this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
            this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
            this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
          }
          else if(this.Link_Details.includes('<a href=')){
            this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
            this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
            this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');

            console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details 69');
          }
         }

        this.Description_Type = (this.EventScheduledjson[0]['Description']);
        document.getElementById("subtaskid").style.display = "none";
        document.getElementById("Guest_Name").style.display = "flex";
        document.getElementById("Location_Name").style.display = "flex";
        document.getElementById("Descrip_Name").style.display = "flex";
        document.getElementById("core_viw121").style.display = "flex";
        document.getElementById("core_viw123").style.display = "none";
        document.getElementById("core_viw222").style.display = "flex";
        document.getElementById("core_Dms").style.display = "flex";

        const TEsb = document.getElementById('TaskEvent-Sidebar')
        TEsb.addEventListener('scroll', () => {
          this.autocompletes.forEach((ac) => {
            if (ac.panelOpen)
              ac.updatePosition();
          });
        })

       }

    });
  this.closeevearea();

}


closeevearea() {
  $('.bg-ovr').removeClass('d-block');
  $('.bg-ovr1').removeClass('d-block');
  $('.side_view').removeClass('position-fixed');
  this.date_menu_close('date-menu-1');
  $('#propse11').removeClass('show');
  this.closefooter();

  $("#ft_body").removeClass("go-up");
  $("#secfootr").addClass("opend");
  $("#main-foot").addClass("overflow-hidden");
}

openfooter1() {
  document.getElementById("ft_body1").classList.toggle("go-up");
  document.getElementById("secfootr1").classList.toggle("opend");
  document.getElementById("main-foot1").classList.toggle("overflow-hidden");
}

closefooter() {
  // $('.secfootr1').removeClass('opend');
  document.getElementById("ft_body1").classList.toggle("go-up");
  document.getElementById("secfootr1").classList.toggle("opend");
  document.getElementById("main-foot1").classList.toggle("overflow-hidden");
  $('#upload').html('Select a file');
  this._remarks = "";
}

isValidURL = true;

validateURL(value: string): void {
  if(value){
    this.isValidURL = /^(https?:\/\/)/.test(value);
  }else{
    this.isValidURL=true
  }

}




onSubmitBtnClicked() {

  if(this.Link_Details){
  this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
  }

  if (
    (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
    (this.Description_Type?(this.characterCount<=500):true)&& this.isValidURL &&
    this.Startts &&
    this.Endtms &&
    this.MinLastNameLength
    && (this.ScheduleType === 'Event' ? this.allAgendas.length > 0: true )
    // && (this.ngEmployeeDropdown&&this.ngEmployeeDropdown.length > 0)
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




 getLastDaysOfEachMonth() {
    const allDates = this.AllDatesSDandED;
    const lastDays = [];

    const groupedByMonth = allDates.reduce((acc, date) => {
      const month = moment(date.Date).format('YYYY-MM');
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(date);
      return acc;
    }, {});

    Object.keys(groupedByMonth).forEach(month => {
      const datesInMonth = groupedByMonth[month];
      const lastDay = datesInMonth.reduce((latest, current) => {
        return moment(current.Date).isAfter(moment(latest.Date)) ? current : latest;
      });
      lastDays.push(lastDay);
    });

    return lastDays;
  }

  Meeting_Id:any;
  Meeting_password:any;
  rapeatLink_Details:boolean=true;


  OnSubmitSchedule() {

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



        if(this.Link_Details!=null){
          this.Link_Details = this.Link_Details.trim() == ''?null:this.Link_Details;
        }
        if(this.Meeting_Id!=null){
          this.Meeting_Id = this.Meeting_Id.trim()  == ''?null:this.Meeting_Id;
        }
        if(this.Meeting_password!=null){
          this.Meeting_password = this.Meeting_password.trim() == ''?null:this.Meeting_password;
        }
        if(this.Link_Details==null && this.Meeting_Id==null && this.Meeting_password==null){
          this._onlinelink =false
        }



        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;
        if(this.rapeatLink_Details==true){
        this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password;
        this.rapeatLink_Details=false;
      }
        // console.log('this.Link_Details :->',this.Link_Details ,'this.Meeting_Id :->', this.Meeting_Id, 'this.Meeting_password :->',this.Meeting_password)

        var vLink_Details = "Link_Details";
        element[vLink_Details]=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';
        // var vLink_Details = "Link_Details";
        // let link_d=this.Link_Details;
        // if(this.Link_Details){
        //   link_d=this.Link_Details.replace(/&#160;/g, ' ');
        //   link_d=this.anchoredIt(link_d);
        // }
        // element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';

        if (this.Description_Type && this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, '').length > 0) {
          // Remove occurrences of &nbsp; and &#160; while collapsing spaces
          this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       } else if(this.Description_Type!=null ){
         this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
       }

        var vDescription = "Description";
        element[vDescription] = this.Description_Type == undefined || this.Description_Type == '<font face="Arial"> </font>' ? "" : this.Description_Type;

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

      const frmData = new FormData();


      if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
        frmData.append("Attachment", "true");
        this._attachmentValue = 1;

        for (var i = 0; i < this._lstMultipleFiales.length; i++) {
          frmData.append("files", this._lstMultipleFiales[i].Files);
        }
        const xmlDoc = document.implementation.createDocument('', '', null);
      const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element

      // Iterate over the file groups
      this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
        console.log(`Processing group ${groupIndex}:`, fileGroup);

        // Normalize Files to an array
        const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);

        files.forEach((file, fileIndex) => {
          if (!file || !file.name || !file.type) {
            console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
            return;
          }

          console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);

          const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
          const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
          const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
          const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element

          // Populate <FileName> element
          nameElement.textContent = file.name;

          // Generate a random ID and sanitize the file name for CloudName
          const randomId = this.generateRandomId();
          const sanitizedFileName = this.sanitizeFileName(file.name);
          cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;

          // Populate <ContentType> element
          const contentType = this.getContentType(file.type);
          contentTypeElement.textContent = contentType;

          // Append child elements to the <Row>
          rowElement.appendChild(nameElement);
          rowElement.appendChild(cloudNameElement);
          rowElement.appendChild(contentTypeElement);

          // Append the <Row> to the root element
          parentElement.appendChild(rowElement);
          });
        });

      // Append the root <MultiDocument> element to the XML document
        xmlDoc.appendChild(parentElement);

        // Serialize the XML document to a string
        const serializer = new XMLSerializer();
        const xmlString = serializer.serializeToString(xmlDoc);

        // Append the XML string to FormData
        frmData.append("docs_multiple_xml", xmlString);

        // Log the XML string for debugging
        console.log("Generated XML:", xmlString);

          }
          else {
            this._attachmentValue = 0;
            frmData.append("Attachment", "false");
          }



      frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
      frmData.append("CreatedBy", this.Current_user_ID.toString());

      this._calenderDto.draftid = this.draftid? this.draftid : 0;
      frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');

      this._calenderDto.attachment =this._attachmentValue.toString();


      frmData.forEach((value, key) => {
        console.log("Start", `${key} : ${value}, = ${typeof value}` ,"End");
      });


      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {


          this.Attamentdraftid= data['draftid']
          frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);

          if (this._attachmentValue == 1) {
            // this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
            this.CalenderService.UploadCalendarAttachmenstCore(frmData).subscribe(

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
                    var myJSON = JSON.stringify(event);
                    this._azureMessage = (JSON.parse(myJSON).body).message;

                    if(this._azureMessage=="1"){
                      this.CalenderService._AzureUploadCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                        console.log(event1,"azure data");
                        var myJSON = JSON.stringify(event1);
                      //  this._Message = (JSON.parse(myJSON).body);

                      });
                    }

                    // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";
                    // (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
                    // this._lstMultipleFiales = [];
                    // // empty(this._lstMultipleFiales);
                    // // alert(this._lstMultipleFiales.length);
                    // setTimeout(() => {
                    //   this.progress = 0;
                    // }, 1500);

                    // (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                    // (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                    // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
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
              this.draftid = 0;
            }
            this.notifyService.showSuccess(this._Message.split(' ').map((word, index) => index === 1 ? word.charAt(0).toLowerCase() + word.slice(1) : word).join(' '), "Success");
            this.Getdraft_datalistmeeting();
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
          this.Meeting_Id = null;
          this.Meeting_password = null;
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
          this._attachmentValue=0;
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
    }
    else {
      alert('Please Select Valid Date and Time');
    }

  }



  hasWhiteSpace(s: string) {
    return /\s/.test(s);
  }

  LastLengthValidation11() {
    if (this.Title_Name&&(this.Title_Name.trim().length < 3)) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }
    TImetable() {
      let now = moment(new Date());
      let _shr = now.hour();
      let _s = now.minute();

      if (_s >= 0 && _s < 15) {
        this.Startts = this.formatTime(_shr, 30);
        this.Endtms = this.formatTime(_shr, 45);
      } else if (_s >= 15 && _s < 30) {
        this.Startts = this.formatTime(_shr, 45);
        this.Endtms = this.formatTime(_shr + 1, 0);
      } else if (_s >= 30 && _s < 45) {
        this.Startts = this.formatTime(_shr + 1, 0);
        this.Endtms = this.formatTime(_shr + 1, 15);
      } else if (_s >= 45 && _s < 59) {
        this.Startts = this.formatTime(_shr + 1, 15);
        this.Endtms = this.formatTime(_shr + 1, 30);
      }
    }

    formatTime(hour, minute) {
      return moment({ hour, minute }).format("hh:mm A");
    }


 // agenda in event creation start
 agendaInput: string | undefined;
 allAgendas: any = [];
 agendasAdded: number = 0;
 addAgenda() {
   if (this.agendaInput.trim().length > 0 && this.agendaInput.trim().length < 100) {
     this.agendasAdded += 1;
     const agenda = {
       index: this.agendasAdded,
       name: this.agendaInput
     };
     this.allAgendas.push(agenda);
     this.agendaInput = undefined;
   }

   console.log("allAgendas:", this.allAgendas);
 }

 deleteAgenda(index: number) {

   if (this.allAgendas.length > 0 && (index < this.allAgendas.length && index > -1)) {
     const agenda_toRemove=this.allAgendas[index].name;
     this.allAgendas.splice(index, 1);
     this.notifyService.showSuccess(agenda_toRemove,'Agenda removed');
   }
   console.log("allAgendas:", this.allAgendas);
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


//  updateAgenda(index: number) {
//    const tf: any = document.getElementById(`agenda-text-field-${index}`);

//    if(tf.value.trim().length > 0 && tf.value.trim().length < 100){
//    this.allAgendas[index].name = tf.value;

//    $(`#agenda-label-${index}`).removeClass('d-none'); // label is visible.
//    $(`#agenda-text-field-${index}`).addClass('d-none');  // textfield is invisible.
//    $(`#edit-cancel-${index}`).addClass('d-none');   // cancel btn is visible.
//    $(`#editing-save-${index}`).addClass('d-none');   // save btn is visible.
//    $(`#edit-agendaname-btn-${index}`).removeClass('d-none');  // edit btn is visible.
//    $(`#remove-agenda-btn-${index}`).removeClass('d-none');   // delete btn is visible.

//  } else if (tf.value.trim().length == 0){
//    this.notifyService.showInfo("Please enter atleast one word","");
//  }else {
//    this.notifyService.showInfo("Maximum 100 characters are allowed", 'Please shorten it.');
//  }

//  }
 // agenda in event creation end



 penhide() {
  document.getElementById("pendlist").classList.remove("show");
  document.getElementById("cal-main").classList.remove("col-lg-9");
  document.getElementById("cal-main").classList.add("col-lg-12");
}
penhide1() {

  // document.getElementById("pendlist1").classList.remove("show");
  // document.getElementById("cal-main").classList.remove("col-lg-9");
  // document.getElementById("cal-main").classList.add("col-lg-12");
  const pendlist1 = document.getElementById("pendlist1");
  const calMain = document.getElementById("cal-main");

  if (pendlist1 && calMain) {
    pendlist1.classList.remove("show");
    calMain.classList.remove("col-lg-9");
    calMain.classList.add("col-lg-12");
  }
}



  OnSubmitReSchedule(type: number) {

    if(this.Link_Details){
      this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
      }


    if (
      this.Title_Name &&
      this.Startts &&
      this.Endtms && this.isValidURL &&
      this.MinLastNameLength
      && (this.ScheduleType === 'Event' ?  this.allAgendas.length > 0 : true)
      && (this.Description_Type?(this.characterCount<=500):true)
    ) {
      this.notProvided = false;

      // update code below

      this._calenderDto.flagid = this._PopupConfirmedValue;
      this._calenderDto.type = type;
      var start = moment(this.minDate);

      if (this._PopupConfirmedValue == 3) {
        // start = moment(this._Oldstart_date);
        start = moment(this.minDate);
      }

      if (this.selectedrecuvalue == "0") {
        var end = moment(this.minDate);
      }
      else if (this.pending_status == true || this._PopupConfirmedValue == 1) {
        var end = moment(this.minDate);
      }
      else {
        var end = moment(this.maxDate);
      }
      // alert(end);
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
        // alert(moment(date).format('ddd').substring(0, 3));
        jsonData[Day] = moment(date).format('ddd').substring(0, 3);
        var DayNum = "DayNum";
        jsonData[DayNum] = moment(date).format('DD').substring(0, 3);
        this.AllDatesSDandED.push(jsonData);
        date.setDate(date.getDate() + 1);
      }

      if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
        this._subname1 = true;
        return false;
      }
      if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
        this._subname = true;
        return false;
      }
      var now = new Date();
      // let timestamp = "";
      // timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
      //   + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011
      // this.EventNumber = timestamp;


      let finalarray = [];
      this.daysSelectedII = [];
      // const format2 = "YYYY-MM-DD";
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
      finalarray = this.daysSelectedII.filter(x => x.IsActive == true);

      if (finalarray.length > 0) {
        finalarray.forEach(element => {

          const date1: Date = new Date(this._StartDate);
          if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
            this._SEndDate = moment(this._StartDate, "YYYY-MM-DD").add(1, 'days');
          }
          else {
            this._SEndDate = this._StartDate;
          }
          const date2: Date = new Date(this._SEndDate);

          const diffInMs: number = date2.getTime() - date1.getTime();

          const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
          // var date3 = moment(date2).format("YYYY-MM-DD").toString();
          // // var dd = moment(date3).add(diffInDays, 'days')


          // var SEndDates = "SEndDate";
          // element[SEndDates] = (date3);
          if (this.Startts.includes("PM") && this.Endtms.includes("AM")) {
            var date3 = moment(element.Date).add(1, 'days').format("YYYY-MM-DD").toString();
          }
          else {
            var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
          }
          var dd = moment(date3).add(diffInDays, 'days')


          var SEndDates = "SEndDate";
          element[SEndDates] = (dd.format(format2));
          //  alert( element[SEndDates])

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

          var vRecurrence = "Recurrence"
          element[vRecurrence] = this.selectedrecuvalue;

          var vRecurrence_value = "Recurrence_values"
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
          element[vLocation_Type] = this._meetingroom==true?(this.Location_Type == undefined ? "" : this.Location_Type):'';

          var vLocation_fulladd = "FullAddress_loc";
          element[vLocation_fulladd] = this._meetingroom==true?(this.Locationfulladd == undefined ? "" : this.Locationfulladd):'';

          var vLocation_url = "Addressurl";
          element[vLocation_url] = this._meetingroom==true?(this.Addressurl==undefined?'':this.Addressurl):'';

          if(this.Link_Details!=null){
            this.Link_Details = this.Link_Details.trim() == ''?null:this.Link_Details;
          }
          if(this.Meeting_Id!=null){
            this.Meeting_Id = this.Meeting_Id.trim()  == ''?null:this.Meeting_Id;
          }
          if(this.Meeting_password!=null){
            this.Meeting_password = this.Meeting_password.trim() == ''?null:this.Meeting_password;
          }
          if(this.Link_Details==null && this.Meeting_Id==null && this.Meeting_password==null){
            this._onlinelink =false
          }

          var vOnlinelink = "Onlinelink";
          element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;
          this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password

          var vLink_Details = "Link_Details";
          element[vLink_Details]=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';
          // let link_d=this.Link_Details.replace(/&#160;/g, ' ');
          // link_d=this.anchoredIt(link_d);
          // let link_d=this.Link_Details;

          // let link_d=this.Link_Details;
          // if(this.Link_Details){
          //   link_d=this.Link_Details.replace(/&#160;/g, ' ');
          //   link_d=this.anchoredIt(link_d);
          // }
          // element[vLink_Details]=this._onlinelink?(this.Link_Details?link_d:''):'';

          if (this.Description_Type && this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, '').length > 0) {
             this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
         } else if(this.Description_Type!=null ){
           this.Description_Type = this.Description_Type.replace(/(&nbsp;|&#160;|\s)+/g, ' ').trim();
         }

          var vDescription = "Description";
          element[vDescription] = this.Description_Type == undefined || this.Description_Type == '<font face="Arial"> </font>' ? "" : this.Description_Type;

          var vSubtask = "Subtask";
          element[vSubtask] = this.Subtask == undefined ? "" : this.Subtask;

          var vEventNumber = "EventNumber";
          element[vEventNumber] = this.EventNumber;

          var vPortfolio_name = "Portfolio_name";
          element[vPortfolio_name] = this.Portfolio == undefined ? "" : this.Portfolio.toString();

          var vDMS_Name = "DMS_Name";
          element[vDMS_Name] = this.SelectDms == undefined ? "" : this.SelectDms.toString();


          var vMeeting_Agendas = "Meeting_Agendas";
          const updatedAgnds = JSON.stringify(this.allAgendas.map(item => ({ index: item.index, name: item.name })));
          element[vMeeting_Agendas] = updatedAgnds;

        });
        if (this._OldRecurranceId == '0') {
          if (this.selectedrecuvalue != this._OldRecurranceId) {
            this._calenderDto.flagid = 3;
          }
        }

        this._calenderDto.ScheduleJson = JSON.stringify(finalarray);
        if (this._OldRecurranceId == this.selectedrecuvalue) {
          if (this._OldEnd_date != this._EndDate) {
            if (this._PopupConfirmedValue == 1)
              this._calenderDto.flagid = 1;
            else
              this._calenderDto.flagid = 2;
          }
        }
        console.log(this._calenderDto.flagid, "finalarray");
        if (this.Schedule_ID != 0) {
          this._calenderDto.Schedule_ID = this.Schedule_ID;

        }
        else {
          this._calenderDto.Schedule_ID = 0;
        }


        const frmData = new FormData();

        if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
          frmData.append("Attachment", "true");
          this._attachmentValue = 1;

          for (var i = 0; i < this._lstMultipleFiales.length; i++) {
            frmData.append("files", this._lstMultipleFiales[i].Files);
          }
    const xmlDoc = document.implementation.createDocument('', '', null);
    const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element

    // Iterate over the file groups
    this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
    console.log(`Processing group ${groupIndex}:`, fileGroup);

    // Normalize Files to an array
    const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);

    files.forEach((file, fileIndex) => {
      if (!file || !file.name || !file.type) {
        console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
        return;
      }

      console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);

      const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
      const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
      const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
      const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element

      // Populate <FileName> element
      nameElement.textContent = file.name;

      // Generate a random ID and sanitize the file name for CloudName
      const randomId = this.generateRandomId();
      const sanitizedFileName = this.sanitizeFileName(file.name);
      cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;

      // Populate <ContentType> element
      const contentType = this.getContentType(file.type);
      contentTypeElement.textContent = contentType;

      // Append child elements to the <Row>
      rowElement.appendChild(nameElement);
      rowElement.appendChild(cloudNameElement);
      rowElement.appendChild(contentTypeElement);

      // Append the <Row> to the root element
      parentElement.appendChild(rowElement);
    });
    });

    // Append the root <MultiDocument> element to the XML document
    xmlDoc.appendChild(parentElement);

    // Serialize the XML document to a string
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(xmlDoc);

    // Append the XML string to FormData
    frmData.append("docs_multiple_xml", xmlString);

    // Log the XML string for debugging
    console.log("Generated XML:", xmlString);

    }
    else {
      this._attachmentValue = 0;
      frmData.append("Attachment", "false");
    }


        frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
        frmData.append("CreatedBy", this.Current_user_ID.toString());
        frmData.append("Schedule_ID", this._calenderDto.Schedule_ID.toString());
        frmData.append("flag_id", this._calenderDto.flagid.toString());
        frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');

        this._calenderDto.attachment =this._attachmentValue.toString();



        this.CalenderService.NewUpdateCalender(this._calenderDto).subscribe
          (data => {

            // alert(data['Schedule_date'])
            this.Attamentdraftid= data['draftid']
           frmData.append("draftid", this.Attamentdraftid= this.Attamentdraftid?this.Attamentdraftid:0);

            frmData.append("Schedule_date", data['Schedule_date'].toString());
            if (this._attachmentValue == 1) {
              // this.CalenderService.EditUploadCalendarAttachmenst(frmData).subscribe(
                this.CalenderService.EditUploadCalendarAttachmenstCore(frmData).subscribe(
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
                      var myJSON = JSON.stringify(event);
                      this._azureMessage = (JSON.parse(myJSON).body).message;

                      if(this._azureMessage=="1"){
                        this.CalenderService._AzureUpdateCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                          console.log(event1,"azure data");
                          var myJSON = JSON.stringify(event1);
                        //  this._Message = (JSON.parse(myJSON).body);

                        });
                      }


                      // (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                      // (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                      document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                      // document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
                  }
                }
              )
            }

            // console.log(data, "m");
            this._Message = data['message'];

            if (this._Message == 'Not updated') {
              Swal.fire({
                title: 'Meeting not released from the Pending list.',
                text: 'Meeting already exists on the selected scheduled date. Please change the Schedule date and try again.',
              });
            }
            else if (this._Message == 'Nothing to Update') {
              this.notifyService.showInfo(this._Message, "Update failed");
            }
            else {
              this.notifyService.showSuccess(this._Message, "Success");
            }

            // 1. sol
            // if(this.showsearch)
            //   this.evesrchclose();
            // this.GetScheduledJson();

            // 2. sol
            if (this.showsearch)
              this.Search_byname();
            else
              this.GetScheduledJson();


            this.GetPending_Request();
            this.penhide();
            this.Title_Name = null;
            this.RemovedAttach = [];
            this.ngEmployeeDropdown = null;
            this.Description_Type = null;
            this.MasterCode = null;
            this.projectsSelected = [];
            this.Subtask = null;
            this.Startts = null;
            this.Endtms = null;
            this.St_date = null;
            this.Ed_date = null;
            this._status = null;
            this.SelectDms = null;
            this._SEndDate = moment().format("YYYY-MM-DD").toString();
            this.Location_Type = null;
            this.Allocated_subtask = null;
            this.Link_Details = null;
            this.Meeting_Id = null;
            this.Meeting_password = null;
            this._onlinelink = false;
            this.TM_DisplayName = null;
            this._attachmentValue=0;
            this.Projectstartdate = "";
            this.projectEnddate = null;
            this.Status_project = null;
            this.AllocatedHours = null;
            this.daysSelectedII = [];
            this.Avaliabletime = [];
            this.timeslotsavl = [];
            this.singleselectarry = [];
            this.daysSelected = [];
            this._lstMultipleFiales = [];
            this.Attachment12_ary = [];
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
      }
      else {
        alert('Please Select Valid Date and Time');
      }
    }
    else {
      if (!this.Title_Name)
        document.getElementById('dsb-evt-titleName').focus();
      else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.action-section .agenda-input-field input#todo-input'); agf.focus(); }


      this.notProvided = true;
    }


  }

  Pending_request: any[] = [];
  pendingcount: any;
  GetPending_Request() {
    this._calenderDto.Emp_No = this.Current_user_ID;

    this.CalenderService.NewGetPending_request(this._calenderDto).subscribe
      ((data) => {
        this.Pending_request = data as [];
        this.pendingcount = this.Pending_request.length;
        this.filterPending('date');
        console.log(this.Pending_request, "111100000")
      });
  }


  activePendingMeeting:any;

  filterPending(type: 'date' | 'meeting'): void {
    this.Pending_request.sort((a, b) => {
      if (type === 'date') {
        this.activePendingMeeting ='date';
        return new Date(b.Schedule_date).getTime() - new Date(a.Schedule_date).getTime();

      }
      this.activePendingMeeting ='meeting';
      return a.Task_Name.trim().localeCompare(b.Task_Name.trim());

    });
  }


  Search_byname() {
    this.showsearch = true;
    this._calenderDto.EmpNo = this.Current_user_ID;
    this._calenderDto.Search_text = this.Searchword;
    // alert(this.Searchword);

    this.CalenderService.NewGetSearchResults(this._calenderDto).subscribe
      ((data) => {
        this.Scheduledjson = JSON.parse(data['Scheduledsearchlist']);
        console.log(this.Scheduledjson, "Testing");
      });

    //document.getElementById("showlist").classList.add("show");

  }

  Online_method(event) {

    if (event.target.checked) {
      document.getElementById("Descrip_Name12").style.display = "flex";
      this._onlinelink = event.target.checked;
      // alert(this._onlinelink)
    }
    else {
      document.getElementById("Descrip_Name12").style.display = "none";
      this._onlinelink = false;
      // alert(this._onlinelink)
    }

  }

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


  onFileChange(event) {

    if (event.target.files.length > 0) {
      const allowedTypes = [
        "image/*", "application/pdf", "text/plain", "text/html", "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/json", "application/xml", "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ];

      const length = event.target.files.length;
      for (let index = 0; index < length; index++) {
        const file = event.target.files[index];
        const fileName = file.name;
        const contentType = file.type;
        if (!allowedTypes.some(type => file.type.match(type))) {
          // Show a sweet alert popup for unsupported file types
          Swal.fire({
            title: `This File "${fileName}" cannot be accepted!`,
            text: `Supported file types: Images, PDFs, Text, HTML, Word, JSON, XML, PowerPoint, Excel.`
            });
          continue;
        }


        // Skip file if its name already exists in either array
        const fileAlreadyExists =
          this.Attachment12_ary.some(att => att.File_Name === fileName) ||
          this._lstMultipleFiales.some(existingFile => existingFile.FileName === fileName);

        if (fileAlreadyExists) {
          Swal.fire({
            title: `File "${fileName}" Already Exists`,
            text: `The file "${fileName}" was not added to avoid duplication.`
          })
          continue; // Skip this file
        }

        // Determine file extension
        let fileExtension = '';
        if (contentType === "application/pdf") {
          fileExtension = ".pdf";
        } else if (contentType === "image/png") {
          fileExtension = ".png";
        } else if (contentType === "image/jpeg") {
          fileExtension = ".jpeg";
        } else if (contentType === "image/jpg") {
          fileExtension = ".jpg";
        }

        // Add file to _lstMultipleFiales array
        this.myFiles.push(fileName);
        const uniqueId = new Date().valueOf();

        this._lstMultipleFiales.push({
          UniqueId: uniqueId,
          FileName: fileName,
          Size: file.size,
          Files: file
        });
      }
    }

    // Reset the input value and styling
    const uploadFileInput = document.getElementById("uploadFile") as HTMLInputElement;
    if (uploadFileInput) {
      uploadFileInput.value = null;
      uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
    }
    (event.target as HTMLInputElement).value = '';
  }










  RemoveSelectedFile(_id) {
    var removeIndex = this._lstMultipleFiales.map(function (item) { return item.UniqueId; }).indexOf(_id);
    this._lstMultipleFiales.splice(removeIndex, 1);

    const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
    uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';

  }



  _attachmentValue:any = 0;
  RemovedFile_id:any = [];


  RemoveExistingFile(_id) {

    this.Attachment12_ary.forEach(element => {
      if (element.file_id == _id) {
        // this.RemovedAttach.push(element.Cloud_Name);
        this.RemovedFile_id.push(element.file_id);
      }
    });
    var removeIndex = this.Attachment12_ary.map(function (item) { return item.file_id; }).indexOf(_id);
    this.Attachment12_ary.splice(removeIndex, 1);

  }

  Attamentdraftid:any;


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
    this._calenderDto.Dms = this.SelectDms.toString();
    if (this.Portfolio == null) {
      this.Portfolio = [];
    }


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

    this._calenderDto.Portfolio = this.Portfolio.toString();
    this._calenderDto.location = this.Location_Type;
    this._calenderDto.loc_status = this._onlinelink;
    this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password;
    this._calenderDto.Link_details=this._onlinelink?(this.Link_Details?this.Link_Details:''):'';

    this._calenderDto.Recurrence = this.selectedrecuvalue ;
    this._calenderDto.Rec_values = _arraytext.toString();
    this._calenderDto.Rec_EndDate = this._EndDate;



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


    let _attachmentValue = 0;
    const frmData = new FormData();


    if (this._lstMultipleFiales.length > 0 || this.RemovedFile_id.length > 0) {
      frmData.append("Attachment", "true");
      this._attachmentValue = 1;

      for (var i = 0; i < this._lstMultipleFiales.length; i++) {
        frmData.append("files", this._lstMultipleFiales[i].Files);
      }
      const xmlDoc = document.implementation.createDocument('', '', null);
const parentElement = xmlDoc.createElement('MultiDocument'); // Create the root <MultiDocument> element

// Iterate over the file groups
this._lstMultipleFiales.forEach((fileGroup, groupIndex) => {
console.log(`Processing group ${groupIndex}:`, fileGroup);

// Normalize Files to an array
const files = Array.isArray(fileGroup.Files) ? fileGroup.Files : (fileGroup.Files ? [fileGroup.Files] : []);

files.forEach((file, fileIndex) => {
  if (!file || !file.name || !file.type) {
    console.warn(`Skipping invalid file in group ${groupIndex}, file ${fileIndex}:`, file);
    return;
  }

  console.log(`Adding file ${fileIndex} from group ${groupIndex}:`, file.name);

  const rowElement = xmlDoc.createElement('Row'); // Create <Row> element
  const contentTypeElement = xmlDoc.createElement('ContentType'); // Create <ContentType> element
  const nameElement = xmlDoc.createElement('FileName'); // Create <FileName> element
  const cloudNameElement = xmlDoc.createElement('CloudName'); // Create <CloudName> element

  // Populate <FileName> element
  nameElement.textContent = file.name;

  // Generate a random ID and sanitize the file name for CloudName
  const randomId = this.generateRandomId();
  const sanitizedFileName = this.sanitizeFileName(file.name);
  cloudNameElement.textContent = `${randomId}_${sanitizedFileName}`;

  // Populate <ContentType> element
  const contentType = this.getContentType(file.type);
  contentTypeElement.textContent = contentType;

  // Append child elements to the <Row>
  rowElement.appendChild(nameElement);
  rowElement.appendChild(cloudNameElement);
  rowElement.appendChild(contentTypeElement);

  // Append the <Row> to the root element
  parentElement.appendChild(rowElement);
});
});

// Append the root <MultiDocument> element to the XML document
xmlDoc.appendChild(parentElement);

// Serialize the XML document to a string
const serializer = new XMLSerializer();
const xmlString = serializer.serializeToString(xmlDoc);

// Append the XML string to FormData
frmData.append("docs_multiple_xml", xmlString);

// Log the XML string for debugging
console.log("Generated XML:", xmlString);

    }
    else {
      this._attachmentValue = 0;
      frmData.append("Attachment", "false");
    }

      frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
      frmData.append("CreatedBy", this.Current_user_ID.toString());
      frmData.append("RemovedFile_id", this._calenderDto.file_ids=this.RemovedFile_id?this.RemovedFile_id:'');

      const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
      this._calenderDto.DraftAgendas=mtgAgendas;

    console.log(this._calenderDto,'this._calenderDto Draft')
    this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
      (data => {


      this.Attamentdraftid= data['draftid']
      frmData.append("draftid", this.Attamentdraftid);

        if (this._attachmentValue == 1) {
          // this.CalenderService.UploadCalendarAttachmenst(frmData).subscribe(
            this.CalenderService.UploadCalendarAttachmenstCore(frmData).subscribe(
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
                  var myJSON = JSON.stringify(event);
                  this._azureMessage = (JSON.parse(myJSON).body).message;

                  if(this._azureMessage=="1"){
                    this.CalenderService._AzureUploadCalendarAttachments(frmData).subscribe((event1: HttpEvent<any>) => {
                      console.log(event1,"azure data");
                      var myJSON = JSON.stringify(event1);
                    //  this._Message = (JSON.parse(myJSON).body);

                    });
                  }

                  // (<HTMLInputElement>document.getElementById("div_exixtingfiles")).innerHTML = "";


                  (<HTMLInputElement>document.getElementById("customFile")).value = "";
                  this._lstMultipleFiales = [];
                  // empty(this._lstMultipleFiales);
                  // alert(this._lstMultipleFiales.length);
                  setTimeout(() => {
                    this.progress = 0;
                  }, 2000);

                  //69 (<HTMLInputElement>document.getElementById("Kt_reply_Memo")).classList.remove("kt-quick-panel--on");
                  //69 (<HTMLInputElement>document.getElementById("hdnMailId")).value = "0";
                  document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
                  //69 document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
              }
            }
          )
        }

        if (data['message'] == '1') {
          this.closeschd();
          this.notifyService.showSuccess("Draft saved", "Success");
        }
        if (data['message'] == '2') {
          this.closeschd();
          this.notifyService.showSuccess("Draft updated", "Success");
        }
      });
      this.Getdraft_datalistmeeting();
  }


  draftdata_meet: any = [];
  draftcount: any;
  Getdraft_datalistmeeting() {

    this._calenderDto.Emp_No = this.Current_user_ID;
    this.CalenderService.NewGetMeeting_darftdata(this._calenderDto).subscribe
      (data => {


        if (data['Draft_meetingdata'] != "" && data['Draft_meetingdata'] != null && data['Draft_meetingdata'] != undefined) {
          this.draftdata_meet = JSON.parse(data['Draft_meetingdata']);
          this.draftcount = this.draftdata_meet.length;
          this.filterDraft('date');
          console.log(this.draftdata_meet,'testing process')
        }
        else {
          this.draftdata_meet = null;
          this.draftcount = 0;
          this.penhide1();
        }

        // alert(this.draftcount)
      });

  }
  activeDraftMeeting:any;

filterDraft(type : 'date'|'meeting'):void{
  this.activeDraftMeeting=type;
  this.draftdata_meet.sort((a,b)=>{
    if(type ==='date'){
      if (a.Draft_date === undefined) return 1; // Place undefined at the end
      if (b.Draft_date === undefined) return -1; // Place undefined at the end
      return new Date(b.Draft_date).getTime() - new Date(a.Draft_date).getTime();
    }
    else if(type==='meeting'){
      return a.Task_name.trim().localeCompare(b.Task_name.trim());
    }

  })
  console.log(this.draftdata_meet,'checking draft functionality')
}



  delete_draft(draftid) {
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.draftid = draftid;
    this.CalenderService.NewDeleteDraft(this._calenderDto).subscribe
      (data => {
        if (data['message'] == '1') {
          this.Getdraft_datalistmeeting();
          this.notifyService.showSuccess("Draft deleted", "Success");
        }
      });
  }

  draftid: number = 0;
  draft_arry: any = [];

  darft_click(Sno, val, attachments) {
    this.draftid = Sno;

    this.Task_type(val);

    this.draft_arry = this.draftdata_meet.filter(x => x.Sno == Sno);
    this.Title_Name = this.draft_arry[0]["Task_name"]
    console.log(this.draft_arry[0], '6969')
    this. GetProjectAndsubtashDrpforCalender();

    this.allAgendas = JSON.parse(this.draft_arry[0]['Agendas']);
    this.Attachment12_ary= attachments;
    this.MasterCode = [];
    this.projectsSelected=[];
    this.arr = JSON.parse(this.draft_arry[0]['Project_code']);
    this.arr.forEach(element => {
      this.MasterCode.push(parseInt(element.stringval));
    });


    this.Link_Details= this.draft_arry[0].Link_details;
    if(this.Link_Details != '' && this.Link_Details != undefined ){
      if(!this.Link_Details.includes('<a href=')){
        var details = this.Link_Details.split(', ')
        this.Link_Details= details[0].split('Meeting link:-')[1].trim()=='undefined' || details[0].split('Meeting link:-')[1].trim()== 'null' ? '': details[0].split('Meeting link:-')[1].trim();
        this.Meeting_Id= details[1].split('Meeting Id:-')[1].trim() == 'undefined' || details[1].split('Meeting Id:-')[1].trim() == 'null' ? '' : details[1].split('Meeting Id:-')[1].trim();
        this.Meeting_password= details[2].split('Meeting password:-')[1].trim() == 'undefined' || details[2].split('Meeting password:-')[1].trim() == 'null' ? '' : details[2].split('Meeting password:-')[1].trim();
        console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, "Link_Details11")
      }
      else if(this.Link_Details.includes('<a href=')){
        this.Meeting_Id = this.Link_Details.match(/[\w.-]+@[\w.-]+\.\w+/)?.[0];
        this.Meeting_password = this.Link_Details.match(/password\s*:\s*(\d+)/)?.[1] || '';
        this.Link_Details = this.Link_Details.match(/https?:\/\/\S+/)[0].replace(/"$/, '');
        console.log(this.Link_Details,this.Meeting_Id,this.Meeting_password, 'Link_Details 69');
      }
     }
    // this.arr.forEach(element => {
    //   this.projectsSelected.push(element.stringval == this.ProjectListArray);
    // });
    //  this.MasterCode=this.draft_arry[0]["Project_Code"]


    this.Portfolio = [];
    this.Portfolio1 = [];
    this.arr1 = JSON.parse(this.draft_arry[0]['Portfolio_id']);
    this.arr1.forEach(element => {
      this.Portfolio.push(element.numberval);
    });
    //  this.Portfolio=this.draft_arry[0]["portfolio_id"]
    this.SelectDms = [];
    this.SelectDms1 = [];
    // let arr3 = [];
    // var str = (this.draft_arry[0]['dms_id']);
    // arr3 = str.split(",");
    // for (var i = 0; i < arr3.length; i++) {
    //   this.Memos_List.forEach(element => {
    //     if (element.MailId == arr3[i]) {
    //       this.SelectDms.push(element.MailId);
    //     }
    //   });
    // }
    if(this.draft_arry[0]['dms_id']){
       this.SelectDms=this.draft_arry[0]['dms_id'].split(',');
    }
    else
     this.SelectDms=[];

    this.ngEmployeeDropdown = [];
    this.ngEmployeeDropdown1 = [];
    this.arr2 = JSON.parse(this.draft_arry[0]['guest_id']);
    this.arr2.forEach(element => {
      this.ngEmployeeDropdown = [...this.ngEmployeeDropdown, element.stringval];
    });
    //  this.ngEmployeeDropdown=this.draft_arry[0]["guest_id"]
    this.Description_Type = this.draft_arry[0]["Description"];
    this._onlinelink = this.draft_arry[0]["online"];
    this.Location_Type = this.draft_arry[0]["location"];
    $('#Descrip_Name12').css('display',this._onlinelink?'flex':'none');





    this.selectedrecuvalue= this.draft_arry[0].Recurrence;
    this._EndDate = this.draft_arry[0].Rec_EndDate;



    if (this.selectedrecuvalue=='2') {

      this._labelName = "Schedule Date";
      // document.getElementById("div_endDate").style.display = "none";
      document.getElementById("div_endDate_new").style.display = "block";
      document.getElementById("Recurrence_hide").style.display = "block";
      document.getElementById("weekly_121_new").style.display = "block";
      this.selectedrecuvalue = '2';
      let Recc = [];
      var ret1 = this.draft_arry[0].Rec_values;
      Recc = ret1.split(",");

      for (var i = 0; i < Recc.length; i++) {
        this.dayArr.forEach(element => {
          if (element.value == Recc[i]) {
            element.checked = true;
          }
        });
      }

      this.dayArr.forEach((item:any)=>{
        if(item.checked){
            let d_name=item.value+(['S','M','Fr'].includes(item.Day)?'day':item.Day=='T'?'sday':item.Day==='W'?'nesday':item.Day==='Th'?'rsday':'urday');
           this.mtgOnDays.push(d_name);
        }
     });


    }
    else if (this.selectedrecuvalue=='3') {
      document.getElementById("Recurrence_hide").style.display = "block";
      document.getElementById("div_endDate_new").style.display = "block";
      // document.getElementById("div_endDate").style.display = "none";
      document.getElementById("Monthly_121_new").style.display = "block";
      this._labelName = "Schedule Date";
      this.selectedrecuvalue = '3';
      let Recc = [];
      var ret1 = this.draft_arry[0].Rec_values;
      Recc = ret1.split(",");
      for (var i = 0; i < Recc.length; i++) {
        this.MonthArr.forEach(element => {
          if (element.value == Recc[i]) {
            element.checked = true;
          }
        });
      }

      this.MonthArr.forEach((item:any)=>{
        if(item.checked){
           const d_no=Number.parseInt(item.value);
           this.mtgOnDays.push(d_no+([1,21,31].includes(d_no)?'st':[2,22].includes(d_no)?'nd':[3,23].includes(d_no)?'rd':'th'));
        }
      });

    }





   // setTimeout(() => {
    this.projectsSelected = this.ProjectListArray.filter(project =>
      this.arr.some(item => item.stringval === project.Project_Code)
     );
  // }, 2000);



    var start = moment(this.minDate);
    var end = moment(this._EndDate);
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
      // jsonData[Day] = event.format('dddd').substring(0, 3);
      // jsonData[DayNum] = event.format('DD').substring(0, 3);
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




    closeschd() {
      // this.Insert_indraft();
      // document.getElementById('date-menu').classList.remove("show");
      document.getElementById("mysideInfobar_schd").classList.remove("open_sidebar");
      document.getElementById("rightbar-overlay-et").style.display = "none";
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
      this.RemovedFile_id = [];
      this.maxDate = null;
      this.EventNumber=null;
      this.selected = null;
      this.Title_Name = null;
      this.ngEmployeeDropdown = null;
      this.Description_Type = null;
      this.characterCount=null;
      this.SelectDms = null;
      this.MasterCode = null;
      this.projectsSelected = [];
      this.Subtask = null;
      this.Startts = null;
      this.rapeatLink_Details=true;
      this.Endtms = null;
      this.SelectStartdate = null;
      this.Selectenddate = null;
      this.selectDay = null;
      this.St_date = "";
      this.Ed_date = null;
      this.isValidURL=true
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
      this.subtask_loading=false;
      this._onlinelink=false;
      this._meetingroom=false;
      this.Link_Details = null;
      this.Meeting_Id = null;
      this.Meeting_password = null;
      this.subtashDrpLoading=false;
      this.loading=false;

    }



// new popup selection dialog start.

  multiselect_dialog:'EMPLOYEES'|'PORTFOLIOS';
  filtered_list:any=[];
  selectedItems:any=[];
  hasmultiselectFilter:boolean=false;
  multiselectFilterConfig:any={};


  openMultiSelectDialog(model_type:'EMPLOYEES'|'PORTFOLIOS'){
      this.multiselect_dialog=model_type;
      document.getElementById("multiselect-2-modal-backdrop").style.display = "block";
      document.getElementById("multiselect-2-dialog").style.display = "block";
      this.searchItems('');
      const searchField:any=document.querySelector(`#multiselect-2-dialog input#InputSearch`);
      if(searchField)searchField.focus();
  }


  closeMultiSelectDialog(){
      this.multiselect_dialog=null;
      this.selectedItems=[];
      this.filtered_list=[];
      this.multiselectFilterConfig={};
      this.hasmultiselectFilter=false;
      document.getElementById("multiselect-2-modal-backdrop").style.display = "none";
      document.getElementById("multiselect-2-dialog").style.display = "none";
  }
 
  searchItems(_searchText:string){

    let keyname;
    let arrtype;
    let selectedinto;
    let property_name;
    if(this.multiselect_dialog=='EMPLOYEES')
    {
       keyname='DisplayName';
       arrtype=this.EmployeeList;
       selectedinto='employeSelect';
       property_name='Emp_No';
    }
    else if(this.multiselect_dialog=='PORTFOLIOS')
    {
       keyname='Portfolio_Name';
       arrtype=this.PortfolioList;
       selectedinto='port_id';
       property_name='Portfolio_ID';
    }


    const result=arrtype.filter(item=>{
      const unselected:boolean=!(this[selectedinto]&&this[selectedinto].includes(item[property_name]));
      let nameMatched:boolean=false;
      if(unselected)
      nameMatched=item[keyname].toLowerCase().trim().includes(_searchText.toLowerCase().trim())
      return nameMatched;
    });

   

    this.filtered_list=result;
  }

  onItemClicked(hasChecked:boolean,_item:any){
     if(hasChecked){
       this.selectedItems.push(_item);
     }
     else{
      const _index=this.selectedItems.indexOf(_item);
      if(_index>-1){
        this.selectedItems.splice(_index,1);
      }
     }
   
  }


  removeSelectedItem(listtype:'EMPLOYEES'|'PORTFOLIOS',item:string){
    switch(listtype){
       case 'EMPLOYEES':{
        const rmindx=this.employeSelect.findIndex(em=>em==item);
        this.employeSelect.splice(rmindx,1);
       };break;
       case 'PORTFOLIOS':{
        const rmindx=this.port_id.findIndex(ptf=>ptf==item);
        this.port_id.splice(rmindx,1);
       };break;
       default:{};
    }
  }


  addSelectedItems(){

    if(this.multiselect_dialog=='EMPLOYEES'){
      if (!this.employeSelect)   // if employeSelect is null,undefined,''
      this.employeSelect = [];
      
      this.employeSelect=[...this.employeSelect,...this.selectedItems];
    }
    else if(this.multiselect_dialog=='PORTFOLIOS'){
      if (!this.port_id)   // if port_id is null,undefined,''
      this.port_id = [];
      
      this.port_id=[...this.port_id,...this.selectedItems];
    }
    
    this.closeMultiSelectDialog();
 
  
  }
 

  showItemsFilter() {
    document.querySelector("#multiselect-2-dialog #project-filter").classList.add("show");
    document.querySelector("#multiselect-2-dialog #filter-icon").classList.add("active");
  }
  closeItemsFilter() {
    document.querySelector("#multiselect-2-dialog #project-filter").classList.remove("show");
    document.querySelector("#multiselect-2-dialog #filter-icon").classList.remove("active");
  }

 
  showUsersByFilterConfig(){ 
    const fresult=this.EmployeeList.filter((_emp:any)=>{   
      const isEmpIn:boolean=(!this.multiselectFilterConfig.bycompany)||_emp.Emp_Comp_No==this.multiselectFilterConfig.bycompany;
      let includeEmp:boolean=false;
      if(isEmpIn)
      includeEmp=!(this.employeSelect&&this.employeSelect.includes(_emp.Emp_No));
      return includeEmp;
   });

   this.filtered_list=fresult;
   this.hasmultiselectFilter=true;
  }

  showPortfoliosByFilterConfig(){  
    const fresult=this.PortfolioList.filter((prtf:any)=>{    
      const x=(prtf.CompanyId==this.multiselectFilterConfig.bycompany||!this.multiselectFilterConfig.bycompany);
      const y=(prtf.Created_By==this.multiselectFilterConfig.byuser||!this.multiselectFilterConfig.byuser);
      const z=x&&y;
      const isSelected:boolean=this.port_id&&this.port_id.includes(prtf.Portfolio_ID);
      return isSelected?false:z;
   });

   this.filtered_list=fresult;
   this.hasmultiselectFilter=true;
  }


  removeFilterConfig(){
    this.multiselectFilterConfig.byuser=null;
    this.multiselectFilterConfig.bycompany=null;
    this.hasmultiselectFilter=false;
    this.searchItems('');
   
  }
    
 
// new popup selection dialog end.



}











