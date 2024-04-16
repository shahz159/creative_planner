import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectMoreDetailsService } from '../../_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { LinkService } from 'src/app/_Services/link.service';
import { ApprovalsService } from 'src/app/_Services/approvals.service';
import { ApprovalDTO } from 'src/app/_Models/approval-dto';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectsSummaryComponent } from '../projects-summary/projects-summary.component';

import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ProjectDetailsDTO } from 'src/app/_Models/project-details-dto';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MatCalendar} from '@angular/material/datepicker';
import { CalendarOptions } from '@fullcalendar/angular';
import { Subscription } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import 'moment/locale/ja';
// import 'moment/locale/fr';

import tippy from 'tippy.js';
import { CreateprojectService } from 'src/app/_Services/createproject.service';
declare var FusionCharts: any;

declare const ApexCharts:any;





declare var $: any;
// export const MY_FORMATS = {
//   parse: {
//     dateInput: "YYYY-MM-DD"
//   },
//   display: {
//     dateInput: "dddd, MMMM D YYYY",
//     monthYearLabel: "MMM YYYY",
//     dateA11yLabel: "YYYY-MM-DD HH:mm:ss",
//     monthYearA11yLabel: "MMMM YYYY"
//   }
// };
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

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
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

export class DetailsComponent implements OnInit, AfterViewInit {

  userFound:boolean|undefined;     // initially undefined.
  myTime = new Date();
  projectInfo: any;
  projectActionInfo: any;         // contain all prj actions which are in  Delay,In Process,Complete....
  projectMemos: any;
  _totalMemos: number = 0;
  _linkedMemos: number = 0;
  Memos_List: any;
  memosOptions: any;
  approvalObj: ApprovalDTO;
  myUnderApprvActions:any=[];
  myDelayPrjActions:any=[];
  delayActionsOfEmps:any=[];
  actionsWith0hrs:any=[];
  totalActionsWith0hrs:number=0;


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
  dropdownSettings_Memo: { singleSelection: boolean, idField: string, textField: string, selectAllText: string, unSelectAllText: string, itemsShowLimit: number, allowSearchFilter: boolean } | undefined;
  selectedMemos: { MailId: number, Subject: string }[] = new Array();

  requestDetails: any;
  requestType: any;
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


  @ViewChild('auto') autoComplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autoCompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  @ViewChild('fruitInput') fruitInput: ElementRef;

  @ViewChild('FirstChart') firstchart:any;


  constructor(private projectMoreDetailsService: ProjectMoreDetailsService,
    private route: ActivatedRoute,
    private router: Router, private activatedRoute: ActivatedRoute,
    private bsService: BsServiceService, public _LinkService: LinkService,
    private dialog: MatDialog,
    public approvalservice: ApprovalsService,
    public service: ProjectTypeService,
    public _projectSummary: ProjectsSummaryComponent,
    private notifyService: NotificationService,
    public datepipe: DatePipe,
    private CalenderService: CalenderService,
    private createProjectService:CreateprojectService

  ) {

    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.objPortfolioDto = new PortfolioDTO();
    this.approvalObj = new ApprovalDTO();
  }

  charts() { }
  private subscription: Subscription;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      var pcode = params.get('ProjectCode');
      if(pcode){
        this.URL_ProjectCode = pcode;
        this._MasterCode = pcode;
      }
       else {
        this.router.navigate(["../backend/ProjectsSummary"]);
      }
    });




    this.Current_user_ID = localStorage.getItem('EmpNo');  // get the EmpNo from the local storage .
    this.activatedRoute.paramMap.subscribe(params => this.URL_ProjectCode = params.get('ProjectCode'));  // GET THE PROJECT CODE AND SET it.
    this.getProjectDetails(this.URL_ProjectCode);

    // get all project details from the api.
    this.getapprovalStats();
    this.getusername();
    this.gethierarchy();
    this.showActionDetails(undefined);     // initially show the Project details
    this.getapproval_actiondetails();      // get main project approval state.
    this.getholdate();
    this.GetPeopleDatils();
    this.timearrays();
    this.getRejectType();
    this.getusermeetings();

    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });
    // these minhold and maxhold are used in the project hold section,project release section
    this.minhold.setDate(this.minhold.getDate() + 1);
    this.maxhold.setDate(this.minhold.getDate() + 90);
    this.release_date = moment(new Date().getTime() + 24 * 60 * 60 * 1000).format("MM/DD/YYYY");
    //

    tippy('#dmsasfa', {
      content: "Link DMS",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right',
      interactive: true
    });







  }





  ngAfterViewInit(): void {
    this.getResponsibleActions();
    this.GetActivityDetails();
  }

  getusername() {
    this.service._GetUserName(this.Current_user_ID).subscribe(data => {
      this._fullname = data['Emp_First_Name'];
    });
  }

  MeetingCount:any
  getusermeetings(){
    this.objProjectDto.Project_Code=this.URL_ProjectCode;
    this.service.GetUserMeetingcount(this.objProjectDto).subscribe(data => {
    this.MeetingCount=JSON.parse(data['MeetingCount'])
      console.log(this.MeetingCount, "meetings count");
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // SummaryChart start


  maxDuration: any;
  IsData: string;
  RemainingHours: any;
  UsedInDAR: any;




  prjBARCHART:any;
  prjPIECHART:any;

  drawStatistics() {
//standard graph cal start
let x=0;
let AL=0;
if(['003','008'].includes(this.projectInfo.Project_Block)){

  let d1=new Date(this.projectInfo.StartDate);  // PROJECT STARTDATE.
  let d2=new Date();                           // TODAY DATE.
  x=0;
  switch(this.projectInfo.SubmissionId){
        case 1:{ x=moment(d1).diff(d2,'days');    };break;
        case 2:{ x=moment(d1).diff(d2,'weeks');    };break;
        case 3:{ x=moment(d1).diff(d2,'months');    };break;
        case 4:{ x=moment(d1).diff(d2,'quarters');   };break;
        case 5:{      };break;
        case 6:{ x=moment(d1).diff(d2,'years');     };break;
  }


  let timestr=this.projectInfo.StandardAllocatedHours;
  let t=timestr.split(':');
  let prjAlHrs=+(Number.parseInt(t[0].trim())+'.'+Number.parseInt(t[1].trim()));
  AL=+(prjAlHrs*Math.abs(x)).toFixed(2);

}
//standard graph cal end

if(this.tlTotalHours){

// 1. bar chart.
var options = {
  series: [{
    data: ['001', '002','011'].includes(this.projectInfo.Project_Block) ? [+this.projectInfo.AllocatedHours, this.tlTotalHours, ((+this.projectInfo.AllocatedHours) - this.tlTotalHours).toFixed(2)]
      : [AL, this.tlTotalHours, (AL - this.tlTotalHours).toFixed(2)]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      distributed: true,
      horizontal: false,
      columnWidth: '62%',
    }
  },
  dataLabels: {
    enabled: true,
    style:{
       colors:['#3a81c9','#3e6be0','#303031'],
       fontFamily:'Lucida Sans Unicode'
    },
    formatter: function (v) {
      return v + ' hrs';
    }
  },
  yaxis: {
    title: {
      text: ''
    },
    labels: {}
  },
  xaxis: {
    categories: ['Allocated', 'Used', 'Remaining'],
    labels: {
      rotate: -90
    }
  },
  colors:['003', '008'].includes(this.projectInfo.Project_Block)?
         ['#7dbeff', '#7da1ff',(AL-this.tlTotalHours)<0?'#757575':'#dbe1e4']:
         ['#7dbeff', '#7da1ff',((+this.projectInfo.AllocatedHours) - this.tlTotalHours)<0?'#757575':'#dbe1e4']

};

if (this.prjBARCHART)
  this.prjBARCHART.destroy();

this.prjBARCHART = new ApexCharts(document.querySelector("#Bar-chart"), options);
this.prjBARCHART.render();

// 2. pie chart.
let usedhr=this.tlTotalHours;
let remaininghr=['003','008'].includes(this.projectInfo.Project_Block)?(AL-this.tlTotalHours):(Number.parseFloat(this.projectInfo.AllocatedHours)-this.tlTotalHours);

if(remaininghr<0){
  remaininghr=0;
  usedhr=this.projectInfo.AllocatedHours;
}

var options1 = {
  series: [usedhr,remaininghr],
  chart: {
    width: 480,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#b1b1b1',
      top: 0,
      left: 0,
      blur: 1,
      opacity: 0.5
    }
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true
          }
        }
      }
    }
  },
  labels: ["Used Hours", "Remaining Hours"],
  dataLabels: {
   style:{
     colors:['#2b4790','#616262'],
     fontWeight:'normal',
   },

  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  theme: {
    palette: 'palette2'
  },
  colors: ['#8faeff', '#dbe1e4'],
  title: {
    text: "Hours used",
    style: {
      fontSize: '10px',
      color: '#6b6b6b',
      fontFamily: 'Lucida Sans Unicode',
      fontWeight: 'bold'

    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};
if(this.prjPIECHART)
this.prjPIECHART.destroy();
this.prjPIECHART = new ApexCharts(document.querySelector("#Pie-chart"), options1);
this.prjPIECHART.render();


}else{
    setTimeout(()=>this.drawStatistics(),2000);   // if tlTotalHours is undefined then run drawStatistics when tlTotalHours is defined.
}

  }

  drawStatisticsNew(){
    if(this.currentActionView===undefined){

         // 1. bar chart start.
             this.projectMoreDetailsService.getProjectTimeLine(this.projectInfo.Project_Code, '1', this.Current_user_ID).subscribe((res: any) => {

               let tlTotalHrs:number = +JSON.parse(res[0].Totalhours);


                 //standard  graph cal start    may need updation.
                 let x=0;
                 let AL=0;
                 if(['003','008'].includes(this.projectInfo.Project_Block)){

                   let d1=new Date(this.projectInfo.StartDate);  // PROJECT STARTDATE.
                   let d2=new Date();                           // TODAY DATE.
                   x=0;
                   switch(this.projectInfo.SubmissionId){
                         case 1:{ x=moment(d1).diff(d2,'days');    };break;
                         case 2:{ x=moment(d1).diff(d2,'weeks');    };break;
                         case 3:{ x=moment(d1).diff(d2,'months');    };break;
                         case 4:{ x=moment(d1).diff(d2,'quarters');   };break;
                         case 5:{      };break;
                         case 6:{ x=moment(d1).diff(d2,'years');     };break;
                   }


                   let timestr=this.projectInfo.StandardAllocatedHours;
                   let t=timestr.split(':');
                   let prjAlHrs=+(Number.parseInt(t[0].trim())+'.'+Number.parseInt(t[1].trim()));
                   AL=+(prjAlHrs*Math.abs(x)).toFixed(2);

                 }
                 //standard graph cal end




               var options = {
                 series: [{
                   data: ['001', '002','011'].includes(this.projectInfo.Project_Block) ? [+this.projectInfo.AllocatedHours, tlTotalHrs, ((+this.projectInfo.AllocatedHours) - tlTotalHrs).toFixed(2)]
                     : [AL, tlTotalHrs, (AL - tlTotalHrs).toFixed(2)]
                 }],
                 chart: {
                   type: 'bar',
                   height: 350
                 },
                 plotOptions: {
                   bar: {
                     distributed: true,
                     horizontal: false,
                     columnWidth: '62%',
                   }
                 },
                 dataLabels: {
                   enabled: true,
                   style:{
                     colors:['#3a81c9','#3e6be0','#303031'],
                     fontFamily:'Lucida Sans Unicode'
                   },
                   formatter: function (v) {
                     return v + ' hrs';
                   }
                 },
                 yaxis: {
                   title: {
                     text: ''
                   },
                   labels: {}
                 },
                 xaxis: {
                   categories: ['Allocated', 'Used', 'Remaining'],
                   labels: {
                     rotate: -90
                   }
                 },
                 colors:['003', '008'].includes(this.projectInfo.Project_Block)?
                       ['#7dbeff', '#7da1ff',(AL-this.tlTotalHours)<0?'#757575':'#dbe1e4']:
                       ['#7dbeff', '#7da1ff',((+this.projectInfo.AllocatedHours) - this.tlTotalHours)<0?'#757575':'#dbe1e4']

               };

               if (this.prjBARCHART)
                 this.prjBARCHART.destroy();

               let bchr=document.querySelector("#Bar-chart");
               if(bchr)
               {
                 this.prjBARCHART = new ApexCharts(bchr, options);
                 this.prjBARCHART.render();
               }





             });
         //  bar chart end.

         // 2. Pie chart start.

         if(['001','002'].includes(this.projectInfo.Project_Block)){
             // core, secondary.
             if(Array.isArray(this.projectActionInfo)&&this.projectActionInfo.length>0){
                 // actions are available.
               let peoples=JSON.parse(this.projectActionInfo[0].filteremployee);

               let _users=peoples.map(item=>{
                 const obj:any={
                   Emp_Name:item.Responsible,
                 };

                 let totalactions=0;
                 this.filterstatus.forEach(st=>{
                   const actns=this.getFilteredPrjActions(st.Status,item.Team_Res);
                   if(actns.length>0){
                       obj[st.Status]=actns.length;
                       totalactions+=actns.length;
                   }
                 });
                 obj.total_actions=totalactions;
                 return obj;

               });





               var options123 = {
                 series: _users.map(item=>item.total_actions),
                 chart: {
                   width: 420,
                   type: 'pie',
                   toolbar: {
                     show: true
                   }
                 },
                 labels: _users.map(item=>item.Emp_Name),
                 legend: {
                   position: 'bottom',
                   fontSize: '10px',
                   fontFamily: 'Lucida Sans Unicode',
                   fontWeight: 900,
                   offsetY: 8,
                   markers: {
                     width: 9,
                     height: 9,
                     radius: 2
                   },
                   itemMargin: {
                     vertical: 5
                   }
                 },
                 colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a'],
                 responsive: [{
                   breakpoint: 480,
                   options: {
                     chart: {
                       width: 200
                     },
                     legend: {
                       position: 'bottom'
                     }
                   }
                 }],

                 tooltip: {
                   enabled: true,
                   custom: ({ series, seriesIndex,dataPointIndex,w})=>{

                   let temp:any={};
                   Object.assign(temp,_users[seriesIndex])
                   delete temp.Emp_Name;
                   delete temp.total_actions;

                   let r=[];
                   for(let k in temp){
                       r.push(k+' : '+temp[k])
                   }

                     return `<div style="background-color:#6c78e699; color:white; padding:3px;">
                             <div> <u>${_users[seriesIndex].Emp_Name}</u> </div>
                             <div> Total :  ${series[seriesIndex]} Actions.</div>
                                   ${
                                     r.join('<br/>')
                                   }
                           </div>`;
                   }
                 }


               };

               var chart = new ApexCharts(document.querySelector("#Pie-chart"), options123);
               chart.render();


             }
         }

         // Pie chart end.
    }
   }





  private loadData() {
    this.subscription = this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        this.processData(data);
        this.renderChart();
        this.updateLabels();
      });
  }

  private processData(data: any) {
    this.maxDuration = data[0]['ProjectMaxDuration'];
    this.UsedInDAR = data[0]['TotalHoursUsedInDAR'];
    this.RemainingHours = data[0]['RemainingHours'];

    this.maxDuration = (this.maxDuration / this.maxDuration) * 100;
    this.RemainingHours = (this.RemainingHours / this.maxDuration) * 100;
    this.UsedInDAR = (this.UsedInDAR / this.maxDuration) * 100;
  }

  private renderChart() {
    new FusionCharts({

      type: "radialbar",
      width: "100%",
      height: "100%",
      renderAt: "chart-container",
      dataSource: {
        chart: {
          theme: "fusion",
          // caption: "7Hr 32M",
          // subCaption: "January 2021",
          showLegend: 1,
          innerRadius: 30,
          outerRadius: 105,
          showLabels: 1,
          labelText: "$label"
        },
        data: [
          {
            label: "Remaining hours",
            value: this.RemainingHours,
            color: "#5867dd" //Custom Color
          },

          {
            label: "Used hours",
            value: this.UsedInDAR,
            color: "#b2beff" //Custom Color
          },
          {
            label: "Total hours",
            value: this.maxDuration,
            color: "#985eff" //Custom Color
          }
        ]
      }
    }).render();
  }

  private updateLabels() {
    const lang = {
      "javascript": "70%",
    };

    let multiply = 4;
    Object.entries(lang).forEach(([language, pourcent]) => {
      const delay = 700;
      setTimeout(() => {
        document.getElementById(`${language}-pourcent`).innerHTML = pourcent;
      }, delay * multiply);
      multiply++;
    });
  }


  // SummaryChart End


  Pid: any;

  calculateProjectActions() {
    if (this.projectActionInfo) {
      // all must be zero before calculation.
      this.TOTAL_ACTIONS_DONE = 0;
      this.TOTAL_ACTIONS = 0;
      this.TOTAL_ACTIONS_IN_HOLD = 0;
      this.TOTAL_ACTIONS_IN_CUA = 0;
      this.TOTAL_ACTIONS_IN_FUA = 0;
      this.TOTAL_ACTIONS_IN_DELAY = 0;
      this.TOTAL_ACTIONS_IN_PROCESS = 0;
      this.TOTAL_ACTIONS_REJECTED = 0;
      this.TOTAL_ACTIONS_UNDER_APPROVAL = 0;
      //
      this.projectActionInfo.forEach(action => {
        switch (action.Status) {
          case 'Completed': this.TOTAL_ACTIONS_DONE += 1; break;
          case 'Delay': this.TOTAL_ACTIONS_IN_DELAY += 1; break;
          case 'InProcess': this.TOTAL_ACTIONS_IN_PROCESS += 1; break;
          case 'Under Approval': this.TOTAL_ACTIONS_UNDER_APPROVAL += 1; break;
          case 'New Project Rejected': this.TOTAL_ACTIONS_REJECTED += 1; break;
          case 'Completion Under Approval': this.TOTAL_ACTIONS_IN_CUA += 1; break;
          case 'Forward Under Approval': this.TOTAL_ACTIONS_IN_FUA += 1; break;
          case 'Hold': this.TOTAL_ACTIONS_IN_HOLD += 1; break;
          default: { };
        }
      })

    }
    else
      this.projectActionInfo = null;
    this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS + this.TOTAL_ACTIONS_UNDER_APPROVAL + this.TOTAL_ACTIONS_REJECTED + this.TOTAL_ACTIONS_IN_CUA + this.TOTAL_ACTIONS_IN_FUA + this.TOTAL_ACTIONS_IN_HOLD;
  }

  isDMS:any
  sourceFile:any
  Submission: any;
  filterstatus: any;
  filteremployee: any;
  remark:any;
  isrespactive:boolean=true;
  requestlist: any;
  approverequestlist: any=[];
  noapproverequestlist: any=[];

  // getRequestAcessdetails(){
  //   this.projectMoreDetailsService.getRequestAccessDetails(this.URL_ProjectCode).subscribe(res => {
  //     this.requestlist=JSON.parse(res[0]['requestlist']);
  //         this.requestlist.forEach(element => {
  //           if(element.Emp_no==this.Current_user_ID){
  //             this.approvalEmpId=this.Current_user_ID;
  //             this.approverequestlist.push(element);
  //           }
  //           else{
  //               this.noapproverequestlist.push(element);
  //           }


  //   });
  //     if(this.approverequestlist.length==0){
  //       alert(1)
  //     }
  //         console.log("requestlist", this.approverequestlist,this.noapproverequestlist)
  //   });

  // }

  userRequestCount: number = 0;


  getRequestAcessdetails() {
    this.projectMoreDetailsService.getRequestAccessDetails(this.URL_ProjectCode).subscribe(res => {
      this.requestlist = JSON.parse(res[0]['requestlist']);

      const uniqueNamesSet = new Set<string>(); // Use a Set to track unique names

      this.requestlist.forEach(element => {
        if (element.Emp_no == this.Current_user_ID) {
          this.approvalEmpId = this.Current_user_ID;
          this.approverequestlist.push(element);
          this.userRequestCount = this.approverequestlist.length;
        } else {
          if (uniqueNamesSet.size < 2 && !uniqueNamesSet.has(element.Submitted_By)) {
            this.noapproverequestlist.push(element);
            uniqueNamesSet.add(element.Submitted_By);


          }
        }
      });

      console.log("requestlist", this.approverequestlist, 'noaprrequest-list',this.noapproverequestlist);
    });
  }

  requestaccessList:any=[];

 getProjectDetails(prjCode: string,actionIndex:number|undefined=undefined) {

    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
      this.Submission = JSON.parse(res[0].submission_json);
      this.projectInfo = JSON.parse(res[0].ProjectInfo_Json)[0];
      if(this.projectInfo['requestaccessList']!=undefined && this.projectInfo['requestaccessList']!=null){
        this.requestaccessList = JSON.parse(this.projectInfo['requestaccessList']);
        this.requestaccessList.forEach(element => {
          if(element.Submitted_By_EmpNo == this.Current_user_ID){
                  this.isRequestSent = true;
            this.ishide=false
            $('.hide-content').addClass('d-none')
          }
        });
      }
      this.isDMS= this.projectInfo.isDMS;
      this.bsService.SetNewPojectCode(this.URL_ProjectCode);
      this.bsService.SetNewPojectName(this.projectInfo.Project_Name);
      this.type_list = this.projectInfo.typelist;
      console.log( this.requestaccessList, "testtsfs")
      this.Pid = JSON.parse(res[0].ProjectInfo_Json)[0].id;
      this._MasterCode = this.projectInfo.Project_Code;
      this.ProjectType = this.projectInfo.Project_Type;
      this.isrespactive =  this.projectInfo.isRespActive;
      this.projectActionInfo = JSON.parse(res[0].Action_Json);
      this.type_list = JSON.parse(this.projectInfo['typelist']);
      this.Title_Name=this.projectInfo.Project_Name;
      console.log("projectInfo:", this.projectInfo, "projectActionInfo:", this.projectActionInfo)
      if(this.projectActionInfo && this.projectActionInfo.length>0){
        this.projectActionInfo.sort((a,b)=>a.IndexId-b.IndexId);  // Sorting Project Actions Info  * important
        console.log('Now After Sorting:',this.projectActionInfo);
        this.filteredPrjAction=this.getFilteredPrjActions('All','All');
        this.filterstatus = JSON.parse(this.projectActionInfo[0].filterstatus);
        this.filteremployee = JSON.parse(this.projectActionInfo[0].filteremployee);
      }
      this.calculateProjectActions();    // calculate project actions details.

      this.myUnderApprvActions=this.getFilteredPrjActions('Under Approval',this.Current_user_ID);   // get all my underapproval actions.
      this.myDelayPrjActions=this.getFilteredPrjActions('Delay',this.Current_user_ID);   // get all my delay actions .
      this.myDelayPrjActions=this.myDelayPrjActions.sort((a,b)=>{
            return b.Delaydays-a.Delaydays;
      });

     if(this.filteremployee)
     {
       this.delayActionsOfEmps=[];   // must be empty before calculation.
          this.filteremployee.forEach((emp)=>{
            let delayActionsOfEmp=this.getFilteredPrjActions('Delay',emp.Team_Res);
            if(delayActionsOfEmp.length>0){
              delayActionsOfEmp=delayActionsOfEmp.sort((a,b)=>b.Delaydays-a.Delaydays)
              this.delayActionsOfEmps.push({ name:emp.Responsible, delayActions:delayActionsOfEmp})
            }
          });
     }




     if(this.projectActionInfo){
      this.actionsWith0hrs=[];   // must be empty before calculation.
     this.projectActionInfo.forEach((actn)=>{
            if(Number.parseInt(actn.AllocatedHours)===0){
              const temp=this.actionsWith0hrs.find(item=>item.name===actn.Responsible);
              if(temp)
                  temp.holdactions+=1;
              else
              this.actionsWith0hrs.push({ name:actn.Responsible, holdactions:1 });
            }
     });
     this.totalActionsWith0hrs=this.projectActionInfo.filter(item=>Number.parseInt(item.AllocatedHours)===0).length;
    }

debugger

      console.log("delay-", this.delayActionsOfEmps)
      this.route.queryParamMap.subscribe((qparams)=>{
        const actionCode=qparams.get('actionCode');
        if(actionCode)
        {   // if action Code is additional along with the project code then redirect to that action.
          const Action=this.projectActionInfo.find((action)=>action.Project_Code===actionCode);
          if(Action)
             {
                this.showActionDetails(Action.IndexId-1);
                setTimeout(()=>{
                  document.getElementById('actionCode:'+this.projectActionInfo[Action.IndexId-1].Project_Code).focus();
                  window.scrollTo(0,0);
                },2000);
            }
          else
           this.showActionDetails(undefined);
        }
        else
          this.showActionDetails(undefined);  // opens the main project.
    })
    if(actionIndex!==undefined){
      this.showActionDetails(actionIndex);
    }
    this.onTLSrtOrdrChanged('Date');  //for utilization bar 'tlTotalHours'
    // setTimeout(() => this.drawStatistics(), 5000);
    setTimeout(()=>this.drawStatisticsNew(),3000);
    });
  }
  uniqueName:any
  uniqueNamesArray:any
  firstthreeRecords:any
  firstRecords:any
  secondRecords:any
  thirdRecords:any
  newArray:any
  uniqueSet :any
  uniqueOwner:any
  uniqueNamesArray1:any
  PeopleOnProject:any;

  nonRacisList:any=[];
  GetPeopleDatils(){

    this.service.NewProjectService(this.URL_ProjectCode).subscribe(
      (data) => {
           
        if (data != null && data != undefined) {
          this.Project_List = JSON.parse(data[0]['RacisList']);

          this.uniqueName = new Set(this.Project_List.map(record => record.RACIS));
          const uniqueNamesArray = [...this.uniqueName];

          this.newArray = uniqueNamesArray.slice(3);
          this.firstthreeRecords = uniqueNamesArray.slice(0, 3);
          this.firstRecords=this.firstthreeRecords[0][0].split(' ')[0]
          this.secondRecords= this.firstthreeRecords[1][0].split(' ')[0]
          this.thirdRecords= this.firstthreeRecords[2][0].split(' ')[0]

          this.PeopleOnProject=Array.from(new Set(this.Project_List.map(item=>item.Emp_No))).map(emp=>{
            const result=this.Project_List.filter(item=>item.Emp_No===emp);
            const obj:any={Emp_Name:result[0].RACIS, Emp_No:result[0].Emp_No, Role:result.map(item=>item.Role).join(', ')};
          //   const p=this.Subtask_Res_List.find(item=>item.Team_Res==result[0].Emp_No);
          //   if(p)
          //    obj.contribution=p.RespDuration;
            return obj;
          });

        }
      });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode).subscribe(
      (data) => {

        this.nonRacisList = (JSON.parse(data[0]['OtherList']));

        this.filteredEmployees = this.nonRacisList;

        const RACISList = (JSON.parse(data[0]['RacisList']));

        if (RACISList && RACISList.length > 0) {
          const racisUserIds = RACISList.map((user: any) => user.Emp_No);
          this.userFound = racisUserIds.includes(this.Current_user_ID);
        }

      });




    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        ///  this.DarGraphDataList = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        //  console.log(data[0]['RemainingHours']);
        // console.log("MaxDu....", data1);
        this.maxDuration = (data1[0]['ProjectMaxDuration']);
        let data2 = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        /// this.standardDuration = (data2[0]['DurationTime']);
      });


  }


  activitiesLoading:boolean=false;
  activitiesOf:'ACTION-ACTIVITIES'|'PROJECT-ACTIVITIES'='PROJECT-ACTIVITIES';
  firstFiveRecords: any[] = [];
  GetActivityDetails() {
    this.activitiesLoading=true; // start the loading.
    this.service.NewActivityService(this.URL_ProjectCode).subscribe(
      (data) => {   
        if (data !== null && data !== undefined) {

          this.Activity_List = JSON.parse(data[0]['ActivityList']); console.log("all activities:",this.Activity_List)
          this.firstFiveRecords = this.Activity_List.slice(0, 5);
debugger
          this.firstFiveRecords=this.firstFiveRecords.map((item)=>{
           const d=moment(new Date()).diff(moment(item.ModifiedDate),'days');
                 return {
                  ...item,
                  ModifiedDate:d===0?'Today':
                  d===1?'Yesterday':
                  [2,3].includes(d)?d+' days ago':
                  this.datepipe.transform(item.ModifiedDate,'dd-MM-yyyy')
                };
          })

        }
        this.activitiesLoading=false;  // end the loading.
      })
  }

 
  ActionActivity_List:any=[];
  ActionfirstFiveRecords: any[] = [];
  GetActionActivityDetails(code) {
    this.activitiesLoading=true; // start the loading.
    this.service.NewActivityService(code).subscribe(
      (data) => {  
        if (data !== null && data !== undefined) {
          this.ActionActivity_List = JSON.parse(data[0]['ActivityList'])
          this.ActionfirstFiveRecords = this.ActionActivity_List.slice(0, 5);
          this.ActionfirstFiveRecords=this.ActionfirstFiveRecords.map((item)=>{
            const d=moment(new Date()).diff(moment(item.ModifiedDate),'days');
                  return {
                   ...item,
                   ModifiedDate:d===0?'Today': 
                   d===1?'Yesterday':
                   [2,3].includes(d)?d+' days ago':
                   this.datepipe.transform(item.ModifiedDate,'dd-MM-yyyy')
                 };
           })
        }
        this.activitiesLoading=false;   // end the loading.
      })
  }


  formatTime(time: string): string {
   try{
    const parsedTime = new Date(`1970-01-01T${time}`);
    return this.datepipe.transform(parsedTime, 'HH:mm');
   }catch(e){
      return '';
   }
  }




  actionCost: any = '';

  showProjectDetails() {
    $(document).ready(() => this.drawStatisticsNew());
    this.showActionDetails(undefined);
    this.getapprovalStats();
  }

  showActionDetails(index: number | undefined) {
    this.requestType = null;
    this.currentActionView = index;
    this.actionCost = index && this.projectActionInfo[this.currentActionView].Project_Cost;
    if (index && (this.projectActionInfo[index].Status === "Under Approval" ||this.projectActionInfo[index].Status === "Completion Under Approval" || this.projectActionInfo[index].Status === "Forward Under Approval") )
      this.GetApproval(this.projectActionInfo[index].Project_Code);

    if(index!=undefined){
      this.GetActionActivityDetails(this.projectActionInfo[index].Project_Code);
      $(document).ready(() =>this.drawStatistics1(this.projectActionInfo[index].Project_Code));
    }
  }

  prostate(pstate){
    this.proState=pstate;
  }

  Usercomment: string = '';
  isRequestDialogOpen: boolean = false;
  isRequestSent: boolean = false;
  ishide:boolean=true

  openRequestDialog() {
    this.isRequestDialogOpen = true;
    $('.hide-button').addClass('d-none');
  }

  closeRequestDialog() {
    this.isRequestDialogOpen = false;
    this.Usercomment = '';
    $('.hide-button').removeClass('d-none');
  }


  sendRequest(): void {
    this.projectMoreDetailsService.NewInsertProjectRequestAccesss(this.projectInfo.Project_Code,this.Usercomment,this.Current_user_ID).subscribe(res => {
   console.log(res,'openRequestDialog')
    })
    Swal.fire('Request Sent Successfully');
    this.isRequestSent = true;
    this.ishide=false
    $('.hide-content').addClass('d-none')

  }

  BarChartOfAction:any;
  drawStatistics1(actionCode:string) {

    this.service.DARGraphCalculations_Json(actionCode)
      .subscribe(data1 => {
        console.log("drawstatistics data1:",data1)
        this.maxDuration = (data1[0]['ProjectMaxDuration']);
        this.UsedInDAR = (data1[0]['TotalHoursUsedInDAR']);
        // this.RemainingHours = (data1[0]['RemainingHours']);

            // new code

            var options = {
              series: [{
                data: [
                  this.maxDuration,
                  this.UsedInDAR,
                  this.maxDuration-this.UsedInDAR
                  ]
              }],
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  distributed: true,
                  horizontal: false,
                  columnWidth: '55%',
                }
              },
              dataLabels: {
                enabled: true,
                style:{
                  colors:['#3a81c9','#3e6be0','#303031'],
                  fontFamily:'Lucida Sans Unicode'
                },
                formatter: function (v) {
                  return v + ' hrs';
                }
              },
              yaxis: {
                title: {
                  text: ''
                },
                labels: {}
              },
              xaxis: {
                categories: ['Allocated', 'Used', 'Remaining'],
                labels: {
                  rotate: -90
                }
              },
              colors:['#7dbeff', '#7da1ff',(this.maxDuration-this.UsedInDAR)<0?'#757575':'#dbe1e4']

            };

            if (this.prjBARCHART)
              this.prjBARCHART.destroy();
            this.prjBARCHART = new ApexCharts(document.querySelector("#chart-container1"), options);
            this.prjBARCHART.render();
            // new code
            });

  }





  // ADDING NEW ACTIONS
  addNewAction() {
    if (this.projectInfo.Status === 'Completed') {
      Swal.fire({
        title: "Wait This Project is Already Completed",
        text: 'Do you want to reopen this Project?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      })
        .then((option) => {
          if (option.isConfirmed) {   // user said yes to add new action into a project which is already completed.
            this.showSideBar();
          }
          else {
            // when the user said no
            Swal.fire(
              'Cancelled',
              'Action not created',
              'error'
            )
          }
        })
        .catch(e => console.log(e));
    }
    else {
      // if projectStatus is 'Delay' ...
      this.showSideBar();
    }


  }

  showSideBar() {
    this.router.navigate(["./Details", this.URL_ProjectCode, "ActionToProject", "4"]);
    document.getElementById("mysideInfobar1").classList.add("kt-action-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    $("#mysideInfobar1").scrollTop(0);
  }


  List_Of_Meetings() {
    document.getElementById("Meetings_SideBar").classList.add("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  Project_details_edit() {
    document.getElementById("Project_Details_Edit_form").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.getResponsibleActions();
    this.initializeSelectedValue()
    // this.isStartDateEditable=new Date().getTime()<=new Date(this.projectInfo.StartDate).getTime();
  }

  Action_details_edit() {
    document.getElementById("Action_Details_Edit_form").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.getResponsibleActions();
    this.initializeSelectedValues()

  }
  ApprovalSideBar() {
    document.getElementById("Approval_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
  }
  
  closeApprovalSideBar(){
    document.getElementById("Approval_view").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
  }
  hide_main_approval(){
    if(this.selectedStdAprvs&&this.selectedStdAprvs.length>0){
      // atleast one selection required.
    document.getElementById("main-approval").classList.add("d-none");
    document.getElementById("main-reject").classList.remove("d-none");
    }
    else{
      this.notifyService.showError('Please choose atleast one approval.','No Approval Selected.');
    }
  }
  backmainapproval(){
    document.getElementById("main-approval").classList.remove("d-none");
    document.getElementById("main-reject").classList.add("d-none");
  }
  closeInfo() {  
    this._remarks = ''
    this.selectedFile=null;
    this._inputAttachments='';
    this.formFieldsRequired=false;
    document.getElementById("Action_Details_Edit_form").classList.remove("kt-quick-Project_edit_form--on");
    document.getElementById("Project_Details_Edit_form").classList.remove("kt-quick-Project_edit_form--on");
    document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");
    document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    document.getElementById("View_comments").classList.remove("kt-quick-View_comments--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("Timeline_view").classList.remove("kt-timeline-panel--on");
    document.getElementById("User_list_View").classList.remove("kt-quick-active--on");
    document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("prj-hold-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("prj-cancel-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("new-prj-release-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("Approval_view").classList.remove("kt-quick-active--on");

    // if the add support sidebar had opened and close , by default tab1 is on.
    document.getElementById('kt_tab_pane_1_4').classList.add("show","active");
    document.querySelector("a[href='#kt_tab_pane_1_4']").classList.add("active");

    // document.getElementById('kt_tab_pane_2_4').classList.remove("show","active");
    // document.querySelector("a[href='#kt_tab_pane_2_4']").classList.remove("active");

    $("#kt_tab_pane_2_4").removeClass("show active");
    $("a[href='#kt_tab_pane_2_4']").removeClass("active");


     //  add support close end here.

    document.getElementById("newdetails").classList.remove("position-fixed");

    this.selectedEmployees=[];    //this will empty the add support selection's field in add people sidebar if its was open and selection done.
    // in case if project submission (main or action) operation cancelled.
    $('#mainPrjCheckbox').prop('checked', false);
    $('#project-action-Checkbox').prop('checked', false);
    //
    document.getElementById("rightbar-overlay").style.display = "none";
    this.router.navigate(["./Details", this.URL_ProjectCode]);
    // this.getProjectDetails(this.URL_ProjectCode);
    this.closeLinkSideBar();
    this.closeMeetingSidebar();
    this.closePrjReleaseSideBar();
  }



  View_Comments(){
    document.getElementById("View_comments").classList.add("kt-quick-View_comments--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='COMMENTS';
    this.GetprojectComments()
   }

  View_Activity(type:"PROJECT-ACTIVITIES"|"ACTION-ACTIVITIES") {
    document.getElementById("Activity_Log").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='ACTIVITY_LOG';
    this.activitiesOf=type;
    if(this.activitiesOf==='PROJECT-ACTIVITIES'){
      this.GetActivityDetails();    // get all activities of the project.
    }
    else if(this.activitiesOf==='ACTION-ACTIVITIES'){
      this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);   // get all activities of the action selcted.
    }
    
  }
  Attachment_view() {
    document.getElementById("Attachment_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='LIST_OF_ATTACHMENTS';
    this.getAttachments(1);
  }
  View_User_list() {
    document.getElementById("User_list_View").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened="PEOPLES";
    this.GetPeopleDatils()
  }



  closedarBar() {
    // document.getElementById("Attachment_view").classList.remove("kt-quick-active--on");
    // document.getElementById("Activity_Log").classList.remove("kt-quick-active--on");
    // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("Timeline_view").classList.remove("kt-quick-panel--on");
    // document.getElementById("newdetails").classList.remove("position-fixed");
    // document.getElementById("rightbar-overlay").style.display = "none";
    this.closeInfo();
    this.workdes = "";
    this.starttime = null;
    this.endtime = null;
    this.isSelection=false;
    this.selectedEmployees=[];
    this.dateF=new FormControl(new Date());
    this._remarks='';
    this._inputAttachments='';
    this.selectedFile=null;
    this.notProvided=false;
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


  tmlSrtOrd: "Date" | "Action" | "Employee" | "Me" | undefined;

  View_timeline() {
    document.getElementById("Timeline_view").classList.add("kt-timeline-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.currentSidebarOpened='TIMELINE_VIEW';
    this.tmlSrtOrd = 'Date';   // by default.
    this.onTLSrtOrdrChanged(this.tmlSrtOrd);
  }

  add_support_team() {
    document.getElementById("Team_view_pr").classList.add("d-none");
    document.getElementById("add_new_team_sp").classList.remove("d-none");
  }
  back_to_team_list() {
    document.getElementById("Team_view_pr").classList.remove("d-none");
    document.getElementById("add_new_team_sp").classList.add("d-none");
  }

  ///

  //  ADD NEW DMS


  addNewDMS() {
    this.GetMemosByEmployeeId();   // get all project's memos and memos for ngselect.
    // opens the addnewdms sidebar
    document.getElementById("LinkSideBar").classList.add("kt-quick-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.currentSidebarOpened='LINK_DMS';
    //
  }


  // closes open linksidebar.
  closeLinkSideBar() {
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.currentSidebarOpened='NOT_OPENED';

  }

  //








  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).subscribe((data: any) => {
      this._totalMemos = JSON.parse(data.JsonData).length;
      this.Memos_List = JSON.parse(data.JsonData);
      console.log("this is Memos_List:", this.Memos_List);
      this.dropdownSettings_Memo = {
        singleSelection: true,
        idField: 'MailId',
        textField: 'Subject',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true
      };
      this.GetDMS_Memos();

    });
  }


  GetDMS_Memos() {
    this._LinkService._GetOnlyMemoIdsByProjectCode(this.URL_ProjectCode).
      subscribe((data: any) => {
        console.log("inside GetDMS_Memos:", data);
        if (data && data.length > 0) { // if data is not [] means there will be atleast one memo present in the project.
          this._LinkService._GetMemosSubject(data[0]['JsonData']).
            subscribe((data: any) => {

              if (data.JsonData) {
                this.projectMemos = JSON.parse(data.JsonData);
                this._linkedMemos = this.projectMemos.length;

                // at this point we have projmemos and totalmemos available. we dont need to show memos in the ngselect which are already selected so
                this.memosOptions = this.Memos_List.filter((item: any) => {
                  let selectornot = true;
                  for (let i = 0; i < this.projectMemos.length; i++) {
                    if (this.projectMemos[i].MailId === item.MailId) { selectornot = false; break; }
                  }
                  return selectornot;
                });

                // now only unselected memos will be visible.

                console.log("this memosOptions:", this.memosOptions)

              }
              console.log("get memo subject:", this.projectMemos);

            });
        }
        else {   // if data is [] and length is 0.   means if there is not even one memo present in the project.
          this.memosOptions = this.Memos_List;   // if the project contain no memos then all list memos in the memos options.
          this._linkedMemos = 0;
        }

      });
  }



   onMemoSelected(e:{MailId:number,Subject:string}){
    // when single selection
      this.selectedMemos=new Array({MailId:e.MailId,Subject:e.Subject});
    //
       console.log("selectedMemos:",this.selectedMemos);
   }


   onMemoDeselected(e:{MailId:number,Subject:string}){
       const index=this.selectedMemos.indexOf({MailId:e.MailId,Subject:e.Subject});
       if(index!==-1){
        this.selectedMemos.splice(index,1);
       }
       console.log("selectedMemos:",this.selectedMemos);
    }



  @ViewChild('DMSDROPDOWN') dmsDD:MatAutocompleteTrigger;











  // ADD DMS STARTS HERE
  addDMSToTheProject() {
    try {

      if (this.selectedMemos.length) {
        // when user has selected memo.  when selectedMemos.length>0
        let totalmemos = [];
        if (this.projectMemos)
          totalmemos = this.projectMemos.map((item: any) => ({ MailId: item.MailId })); // get current memos list.

        let newmemos = this.selectedMemos.map((item: any) => ({ MailId: item.MailId }));  // get selected memos.
        newmemos.forEach((memo: { MailId: number }) => {
          totalmemos.push(memo);
        });   // adding selected memos to the totalmemos


        let projectcode: number = this.URL_ProjectCode;
        let appId: number = 101;//this._ApplicationId;
        let dmsMemo = JSON.stringify(totalmemos); //[{MailId:123,Subject:'abc'}]->[{MailId:123}]->'[{MailId:123}]'
        let userid: number = +this.Current_user_ID;
        console.log("here we go", projectcode, appId, dmsMemo, userid);
        this._LinkService.InsertMemosOn_ProjectCode(projectcode, appId, dmsMemo, userid).subscribe((res: any) => {
          console.log("Response=>", res);
          if (res.Message === "Updated Successfully") {
            this.notifyService.showSuccess("", "DMS Successfully Added.");
          }

        });


      }
      else {
        // when user tries to click addlink btn without selecting memo.   when selectedMemos.length=0
        this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
      }

    }
    catch (e) {  // if we faces any error during the process.
      console.log(e);
      this.notifyService.showInfo("Request Cancelled", "Error!");
    }
    this.GetMemosByEmployeeId();    // get new data.
    this.selectedMemos = new Array();
    // this.closeLinkSideBar();         //closes the sidebar.
  }
  // ADD DMS END HERE




  deleteMemos(memoId: number) {

    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'memos_Delete',
        title1: 'Confirmation ',
        //message1: "proj_Name"
      }
    });
    confirmDialog.afterClosed().subscribe((result: any) => {
      if (result === true) {    // user confirmed to do deletion.
        let projectcode = this.URL_ProjectCode;
        let appId: number = 101;
        let totalmemos = this.projectMemos; // current total memos list.
        let userid: number = +this.Current_user_ID;
        if (this._linkedMemos) {   // if there is atleast one memo.
          let memotodelete: any = totalmemos.find((amemo: any) => amemo.MailId === memoId);
          if (memotodelete) {   // memo found
            let index = totalmemos.indexOf(memotodelete);    // it will never return -1 at this point.
            totalmemos.splice(index, 1);
            let memosAfterDeletion: string = JSON.stringify(totalmemos.map((item: any) => ({ MailId: item.MailId }))) // [{MailId:123,Subject:'asd'},{MailId:234,Subject:'hdf'}]->[{MailId:123},{MailId:234}]->'[{MailId:123},{MailId:234}]'
            this._LinkService.InsertMemosOn_ProjectCode(projectcode, appId, memosAfterDeletion, userid).subscribe((res: any) => {
              if (res.Message === 'Updated Successfully') {
                this.notifyService.showInfo("", "Memo Removed.");
                this._linkedMemos--;
                this.GetDMS_Memos();
              }
            });
          }
        }
        else {  // if there is no memos to delete.
          this.notifyService.showError("No Memos Present", '');
        }
      }
      else {   // when deletion operation has cancelled.
        this.notifyService.showInfo("Action Cancelled ", '');
      }
    });

  }

  ///////////////////////////new Approval section Start ////////////////////
  url: any;
  iscloud: any;
  completedoc: any;
  complete_List: any;
  forwardfrom: any;
  forwardto: any;
  comments: string = "";
  rejectType: any;
  selectedType: string;
  isTextAreaVisible: boolean = false;
  isRejectOptionsVisible: boolean = false;
  active: boolean = false;
  Accept_active: boolean = false;
  Conditional_Active: boolean = false;
  Reject_active: boolean = false;
  rejDesc: any;
  noRejectType: boolean = false;
  exist_comment: any[] = [];
  rejectcommentsList: any;
  rejectlength: any;
  //noRejectType: boolean = false;
  _Message: string;
  Summarytype: string;
  _Urlid: any;
  _fullname: any;



  resetApproval() {
    this.selectedType = null;
    // this.commentSelected = null;
    this.noRejectType = false;
    this.exist_comment = [];
  }
  typeChange() {
    this.comments = null;
    //  this.commentSelected = null;
    this.rejectType = null;
    this.noRejectType = false;
  }
  Close_Comments() {
    this.comments = "";
  }

  sidno:any;
  emp:any;
  repdate:any;
  contenttype: any;
  submitby:any;

  getapprovalStats() {
    // this.approvalEmpId = null;

    this.approvalObj.Project_Code = this.URL_ProjectCode;

    this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
      debugger
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
        //this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
        this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
        const fullName = this.Submitted_By.split(' ');
        this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        this.initials1 = this.initials1.toUpperCase();
        this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
        this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
        this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
        this.reject_list.splice(0, 1);
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
          if (this.complete_List != "" && this.complete_List != undefined && this.complete_List != null) {
            this.completedoc = (this.complete_List[0]['Sourcefile']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
            this.url = (this.complete_List[0]['CompleteProofDoc']);
          }

        }
        debugger
        if (this.requestType == 'Task Complete') {
          this.isApprovalSection=false;   // std task approvals will be in sidebar not on front page.
          console.log("requestDetails :",this.requestDetails);
        try{
          this.complete_List = JSON.parse(this.requestDetails[0]['standardDoc']); console.log("=>complete_list:",this.complete_List);
         this.completedoc = (this.complete_List[0]['Proofdoc']);
         this.sidno = (this.complete_List[0]['StandardId']);
         this.emp = (this.complete_List[0]['Emp_No']);
         this.repdate = (this.complete_List[0]['Reportdate']);
         this.submitby = (this.complete_List[0]['SubmittedBy']);
         this.contenttype = (this.complete_List[0]['contenttype']);
         this.iscloud = (this.complete_List[0]['IsCloud']);
        }catch(e){
          console.log(e.message);
        }

         this.getstandardapprovalStats();
         
        }

      }
      else{
        // if there is no requests
        this.isApprovalSection=false;
        // if there is no requests

        // if there are no std task aprv request
         this.standardjson=[];
         this.currentStdAprView=undefined;
         this.closeApprovalSideBar();
        // if there is no std task aprv request
      }
      this.getRequestAcessdetails();
    });

    // console.log(this.requestDetails, 'transfer');
  }

standardjson:any;
currentStdAprView:number|undefined;
  getstandardapprovalStats(){  
    this.approvalservice.GetStandardApprovals(this.URL_ProjectCode).subscribe((data) => {  debugger
      console.log("getstandardapprovalStats:",JSON.parse(data[0]['standardJson']));
      this.requestDetails = data as [];
      console.log(this.requestDetails,"task approvals");
      this.standardjson = JSON.parse(this.requestDetails[0]['standardJson']); console.log('standardjson:',this.standardjson); 
      

      // if(this.standardjson.length>0){
      //     this.isApprovalSection=true;
      //     this.isTextAreaVisible=false;
      //     this.currentStdAprView=(this.Current_user_ID==this.projectInfo.OwnerEmpNo||this.isHierarchy==true)?0:undefined;
      // }

    });
  }

  approvalClick(actionType) {  debugger
    this.comments = ""
    switch (actionType) {
      case 'ACCEPT': {
        this.isRejectOptionsVisible = false
        this.selectedType = '1';
        this.rejectType = null;
        this.Accept_active = true;
        this.Conditional_Active = false;
        this.Reject_active = false;
      }; break;
      case 'CONDITIONAL': {
        this.isRejectOptionsVisible = false;
        this.selectedType = '2';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = true;
        this.Reject_active = false;
      }; break;
      case 'REJECT': {
        this.isRejectOptionsVisible = true;
        this.selectedType = '3';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = true;
      };break;
      case 'NOTSELECTED':{
        this.isRejectOptionsVisible = false;
        this.selectedType = undefined;
        this.rejectType = undefined;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = false;
        this.isTextAreaVisible = false;
      }
      default: { }
    }
    if(actionType!=='NOTSELECTED')
    this.isTextAreaVisible = true;
  }

  removeCommit() {
    this.isTextAreaVisible = false;
    $(".Btn_Accpet").removeClass('active');
    $(".Btn_Conditional_Accept").removeClass('active');
    $(".Btn_Reject").removeClass('active');
  }


  rejectApproval() {
    this.exist_comment = [];
    this.comments = "";
    this.noRejectType = false;
    // alert(this.rejectType)
    if (this.rejectType != null && this.rejectType != "") {
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
        console.log('++>', JSON.parse(data[0]['reject_CommentsList']));
        this.rejectcommentsList = JSON.parse(data[0]['reject_CommentsList']);  
        this.rejectlength = this.rejectcommentsList.length;
      });
    }
  }




  showStdTaskAprvReq(index){
    if(this.Current_user_ID==this.projectInfo.OwnerEmpNo||this.isHierarchy==true){
      if(!Number.isNaN(index)){
        this.currentStdAprView=index;

          this.requestComments=this.standardjson[index].Remarks;  // remarks
          this.completedoc=this.standardjson[index].ProofDoc;    // task attachment
          this.requestType=this.standardjson[index].Req_Type;    // Request type
          this.Submitted_By=this.standardjson[index].SubmittedBy; // Request by
          this.requestDate=this.standardjson[index].Rec_Date;     // Request date
          this.sidno=this.standardjson[index].SNo;
          this.emp=this.standardjson[index].Emp_No;
          this.repdate=this.standardjson[index].Rec_Date;
          this.submitby=this.standardjson[index].SubmittedBy;
          this.iscloud=this.standardjson[index].IsCloud;
          this.contenttype=this.standardjson[index].contenttype;

          const aprObj={
            SNo:this.standardjson[index].SNo,
            Type:this.standardjson[index].Req_Type,
            ReportType:this.standardjson[index].ReportType,
            RejectType:this.standardjson[index].RejectType,
            sendFrom:this.standardjson[index].sendFrom,
            Project_Code:this.standardjson[index].Project_Code,
            Remarks: this.standardjson[index].Remarks,
            Rec_Date: this.standardjson[index].Rec_Date
        };
        this.singleapporval_json=[aprObj];      // set singleapproval_json for submit approval.
      }
    }
    else
     this.currentStdAprView=undefined;
  }

  allStdAprSelected:boolean=false;
  selectedStdAprvs:any=[];
  acceptAllStdApprReq(){
     debugger
    if(this.selectedStdAprvs.length===0){
      this.notifyService.showError('Please choose atleast one approval.','No Approval Selected.');
      return;
    }
     


    const stdtasktoApprove=this.standardjson.filter(item=>this.selectedStdAprvs.includes(item.SNo));
    const x=this.standardjson.length-stdtasktoApprove.length;   // decides whether the sidebar remain open or should close.
    this.approvalservice.NewUpdateAcceptApprovalsService(stdtasktoApprove).subscribe(data =>{
      console.log(data,"accept-data");
       if(x===0)
        this.closeApprovalSideBar(); 

       this.notifyService.showSuccess("tasks requests Approved.",'Success');
       this.selectedStdAprvs=[];
       this.getapprovalStats();
       this.allStdAprSelected=false;
      
    });
  }

  onStdAprvSelected(e,aprvls){
   
    aprvls.forEach(aprv=>{
          if(e.target.checked){
                if(!this.selectedStdAprvs.includes(aprv.SNo))
                this.selectedStdAprvs.push(aprv.SNo);
          }else{
                const x=this.selectedStdAprvs.indexOf(aprv.SNo);
                this.selectedStdAprvs.splice(x,1);
          }
    });
      
  }



  isApprovalSection: boolean = true;

  Close_Approval() {
    this.comments=null;
    this.isApprovalSection = false;
    $(".Btn_Accpet").removeClass('active');
    $(".Btn_Conditional_Accept").removeClass('active');
    $(".Btn_Reject").removeClass('active');
  }




  submitApproval() {     debugger
    if (this.selectedType == '1') {
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
      debugger
      this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
        subscribe((data) => {
          this.notifyService.showSuccess("Project Approved successfully by - " + this._fullname, "Success");
          this.getapprovalStats();
          this.GetApproval(1);
          this.getProjectDetails(this.URL_ProjectCode);
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
            this.getapprovalStats();
            this.getProjectDetails(this.URL_ProjectCode);


          }
        });
    }
    else if (this.selectedType == '3') {
      if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
        this.noRejectType = true;
        this.notifyService.showError("Please select Reject Type", "Failed");
        return false;
      }
      else {
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
          element.RejectType = this.rejectType;
        });
        this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
          subscribe((data) => {
            this.notifyService.showSuccess("Project Rejected successfully by - " + this._fullname, "Success");
            this.getapprovalStats();
            this.getProjectDetails(this.URL_ProjectCode);
            this.getRejectType();

          });
      }
    }
    else if (this.selectedType == '4') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
    this.close_info_Slide();

  }


  close_info_Slide() {
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
    console.log(this.exist_comment, "select");
  }
  clickondeselect(com, id) {
    // let smallerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.exist_comment : this.rejectcommentsList;
    // let largerArray: any[] = this.exist_comment.length < this.rejectcommentsList.length ? this.rejectcommentsList : this.exist_comment;

    // for (let i = 0; i < smallerArray.length; i++) {
    //   let index = largerArray.findIndex((el) => el.Req_Coments == smallerArray[i]);
    //   if (index !== -1) {
    //     smallerArray.splice(i, 1);
    //     i--;
    //   }
    // }
    this.exist_comment = this.exist_comment.filter((comment) => comment != com);
    this.comments = this.comments.replace(com, "").trim();
    console.log(this.exist_comment, "deselect");
  }


  EmpNo_Res: string;
  EmpNo_Autho: string;
  ProjectNameJson: any;
  projectCode: string;

  // LoadProjectDetails() {
  //   this.service.NewSubTaskDetailsService(this.projectCode).subscribe(
  //     (data) => {
  //       if (data != null && data != undefined){
  //         this.EmpNo_Autho = this.ProjectNameJson[0]['Authority'];
  //         this.EmpNo_Res = this.ProjectNameJson[0]['Responsible'];
  //         this.ProjectName = this.ProjectNameJson[0]['Project_Name'];
  //       }
  //     })
  // }

  _day: any;
  _month: any;



  _portfoliolist: any;
  _portfolioLength: any;
  totalPortfolios: number;
  _portfoliosList: any;
  dropdownSettings_Portfolio: IDropdownSettings = {};
  ngDropdwonPort: any = [];
  Empty_portDropdown: any;
  _SelectedPorts: any;
  selectedportID: any;
  objPortfolioDto: PortfolioDTO;
  deletedBy: string;
  portfolioName: string;




  getPortfoliosDetails() {
    this.service.getPortfolios(this.URL_ProjectCode).subscribe((res) => {
      if (res != null && res != undefined) {
        this._portfoliolist = JSON.parse(res[0].Portfolio_json);
        this.getPortfolios()
      }
    });
  }


  // Action completion sidebar code starts from here
  isHierarchy: boolean|undefined;
  _MasterCode: string;


  _Subtaskname: string;
  Sub_ProjectCode: string;
  Sub_Desc: string;
  Sub_StartDT: Date;
  Sub_EndDT: Date;
  Sub_Autho: string;
  Sub_Status: string;
  _remarks: string = "";
  selectedFile: any = null;
  progress: any;
  _inputAttachments: string = '';

  gethierarchy() {
    this.service.GetHierarchyofOwnerforMoredetails(this.Current_user_ID, this.URL_ProjectCode).subscribe((data) => {
      if (data['message'] == '1') {
        this.isHierarchy = true;
      }
      else {
        this.isHierarchy = false;
      }
    });

  }


  onFileChangeUST(e) {
    console.log(e.target.files[0]);
    this._inputAttachments = e.target.files[0].name;
  }
  onFileChange(e) {
      this._inputAttachments = e.target.files[0].name;
      this.selectedFile = <File>e.target.files[0];
      e.target.files=null;
  }




  markCompleted(selectedAction: { Project_Code: string, Project_Description: string, Project_Name: string, StartDate: Date, EndDate: Date, Team_Res: string, Status: string }) {

    this._Subtaskname = selectedAction.Project_Name;
    this.Sub_ProjectCode = selectedAction.Project_Code;
    this.Sub_Desc = selectedAction.Project_Description;
    this.Sub_StartDT = selectedAction.StartDate;
    this.Sub_EndDT = selectedAction.EndDate;
    this.Sub_Autho = selectedAction.Team_Res;
    this.Sub_Status = selectedAction.Status;

    // opens the actioncompletion sidebar code here.
    document.getElementById("mysideInfobar_Update").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    //
  }

  closeActCompSideBar() {

    this.selectedFile = null;
    this._inputAttachments = '';
    this._remarks = '';
    this.formFieldsRequired=false;
    $('#project-action-Checkbox').prop('checked', false);
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
    $('#_file1').val('');
    $('#upload').html('Select a file');
  }  // for temp we are using this.

  proState:boolean=false
  actionCompleted() {

   const fieldsprvided:boolean=this._remarks&&(this.proState?this.selectedFile:true);

    if (!fieldsprvided) { // when the user not provided the required fields then .
      this.formFieldsRequired=true;
      this.notifyService.showInfo("Please fill in the mandatory fields.", '');
    }
    else if ((this.TOTAL_ACTIONS_IN_PROCESS + this.TOTAL_ACTIONS_IN_DELAY) === 1 && (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo || this.Current_user_ID == this.projectInfo.Authority_EmpNo || this.isHierarchy === true)) {   // if user is O,R,A or is in heirarchy and there is only one action in inprocess or delay state.
      Swal.fire({
        title: 'This is the last action to be completed.',
        text: 'Do you want to proceed with main project submission?',
        // icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((res: any) => {

        if (res.value) {   // when user proceed also with the main project submission.
          if (this.selectedFile == null) {
            this.notifyService.showInfo("Please attach the completion file to complete the main project", "Note");
          }
          else {
            // 1.  ACTION SUBMISSION
            const fd = new FormData();
            fd.append("Project_Code", this.Sub_ProjectCode);
            fd.append("Master_Code", this._MasterCode);
            fd.append("Team_Autho", this.Sub_Autho);
            fd.append("Projectblock", this.projectInfo.Project_Block);
            fd.append("Remarks", this._remarks);
            fd.append('file', this.selectedFile);
            fd.append("Project_Name", this._Subtaskname);
            this.service._UpdateSubtaskByProjectCode(fd)
              .subscribe((event: HttpEvent<any>) => {

                switch (event.type) {
                  case HttpEventType.Sent:console.log('Request has been made!');break;
                  case HttpEventType.ResponseHeader:console.log('Response header has been received!');break;
                  case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    if (this.progress == 100) console.log('progress completed');
                    break;
                  case HttpEventType.Response:{
                    var myJSON = JSON.stringify(event);
                    this._Message = (JSON.parse(myJSON).body).Message;
                    if(this._Message==='Success')
                    {
                      this.notifyService.showSuccess("Successfully Updated", 'Action completed');
                      // after the action is successfully completed
                      this.closeInfo();
                      this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
                      this.getAttachments(1);
                      this.calculateProjectActions();
                      this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
                    }
                    else
                    this.notifyService.showError('Unable to complete this Action.','Something went wrong!');
                  };break;

                }
              });

            // ACTION SUBMITTED.



            // 2.  PROJECT SUBMISSION.
            const fd1 = new FormData();
            fd1.append("Project_Code", this.URL_ProjectCode);
            fd1.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
            fd1.append("Remarks", this._remarks);
            fd1.append("Projectblock", this.projectInfo.Project_Block);
            fd1.append('file', this.selectedFile);
            fd1.append("Emp_No", this.Current_user_ID);
            fd1.append("Project_Name", this.projectInfo.Project_Name);
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

                this.selectedFile = null;
                this._inputAttachments = '';
                this._remarks = '';
                this.closeInfo();
                this.getProjectDetails(this.URL_ProjectCode);
                this.getAttachments(1);
                this.calculateProjectActions();
                // this.GetSubtask_Details();
                // this.GetProjectDetails();
                // this.getapprovalStats();
                // this._projectSummary.GetProjectsByUserName('RACIS Projects');
              });
          }
        }
        else if (res.dismiss === Swal.DismissReason.cancel) {
          const fd = new FormData();
          fd.append("Project_Code", this.Sub_ProjectCode);
          fd.append("Master_Code", this._MasterCode);
          fd.append("Team_Autho", this.Sub_Autho);
          fd.append("Projectblock", this.projectInfo.Project_Block);
          fd.append("Remarks", this._remarks);
          fd.append('file', this.selectedFile);
          fd.append("Project_Name", this._Subtaskname);
          console.log(this.selectedFile, "action file")

          this.service._UpdateSubtaskByProjectCode(fd)
            .subscribe(data => {
              this._remarks = "";
              this._inputAttachments = "";
              this.selectedFile = null;
              this.getProjectDetails(this.URL_ProjectCode);
              this.calculateProjectActions();     // recalculate the project actions.
              this.closeActCompSideBar();
              this.getAttachments(1);      // close action completion sidebar.
            });
          this.notifyService.showSuccess("Successfully Updated", 'Action completed');
          this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
        }
      });   //swal end

    }
    else {
      // if user is O,R,A or is in Heirarchy and there are some actions in the project which are in process and delay states.

      const fd = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Master_Code", this._MasterCode);
      fd.append("Team_Autho", this.Sub_Autho);
      fd.append("Projectblock", this.projectInfo.Project_Block);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this._Subtaskname);
      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe((event: HttpEvent<any>) => {

          switch (event.type) {
            case HttpEventType.Sent:console.log('Request has been made!');break;
            case HttpEventType.ResponseHeader:console.log('Response header has been received!');break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / event.total * 100);
              if (this.progress == 100) console.log('progress completed');
              break;
            case HttpEventType.Response:{
              var myJSON = JSON.stringify(event);
              this._Message = (JSON.parse(myJSON).body).Message;
              if(this._Message==='Success')
              {
                this.notifyService.showSuccess("Successfully Updated", 'Action completed.');
                // after the action is successfully completed
                let prjAction = this.projectActionInfo.find((prjAct: any) => prjAct.Project_Code === this.Sub_ProjectCode)
                const prjActionindex = this.projectActionInfo.indexOf(prjAction)
                if (prjActionindex !== -1) {
                  const prjActionComp = { ...prjAction, Status: 'Completed', Remarks: fd.get('Remarks'), IndexId: prjAction.IndexId };
                  this.projectActionInfo.splice(prjActionindex, 1, prjActionComp);
                  this.clearFilterConfigs();
                }  // updated project action.

                this._remarks = "";
                this._inputAttachments = "";
                this.selectedFile = null;
                // this.getProjectDetails(this.URL_ProjectCode);
                this.calculateProjectActions();     // recalculate the project actions.
                this.closeActCompSideBar();   // close action completion sidebar.
                this.getAttachments(1);

              }
              else
              this.notifyService.showError('Unable to complete this Action.','Something went wrong!');

            };break;

          }
        });

    }

  }





  // Action completion sidebar code end at here.


  //timeline section code here start
  noTimeline: boolean;
  darList: any;
  darArr: any;
  darArray: any = [];
  totalHours: any;
  totalRecords: any;
  _CurrentpageRecords: any;
  showaction: boolean = false;
  workdes: string="";
  current_Date: any = this.datepipe.transform(new Date(), 'MM/dd/yyyy');
  dateF = new FormControl(new Date());
  todayDate = new Date();
  disablePreviousDate = new Date();
  starttime: any=null;
  timedata: any = [];
  timedata1: any;
  objProjectDto: ProjectDetailsDTO;
  date11: any;
  currenthours: any;
  timeList: any;
  bol: boolean = true;
  starttimearr: any = [];
  endtimearr: any = [];
  lastEndtime: any;
  endtime: any=null;
  coresecondary: boolean = true;
  Responsible_EmpNo: string;
  noact_msg: boolean = false;
  date = new Date();
  actionCode: any;
  timecount: any;
  minutes: any;
  hours: any;
  Comp_No: string;
  inProcessCount: number;
  delaycount: number;
  notProvided:boolean=false;


  openDarSideBar() {
    // opens the dar side bar

    document.getElementById("darsidebar").classList.add("kt-quick-panel--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    //
    // get all actions
    this.getResponsibleActions();
    //
    this.currenthours = this.date.getHours();

  }
  closeDarSideBar() {
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
  }

  ProjectPercentage: any;
  ProjectStatus: string;
  Subtask_Res_List:any;
  totalSubtaskHours:number=0;

  getResponsibleActions() {

    this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null, this.Current_user_ID).subscribe(
      (data) => {
        this.ProjectPercentage = data[0]['ProjectPercentage'];
        this.ProjectStatus = data[0]['ProjectStatus'];
        this.Client_List = JSON.parse(data[0]['ClientDropdown']);
        this.Category_List = JSON.parse(data[0]['CategoryDropdown']);
        this.darArr = JSON.parse(data[0]['Json_ResponsibleInProcess']);
        this.Subtask_Res_List=JSON.parse(data[0]['SubTaskResponsibe_Json']);
        this.totalSubtaskHours = (data[0]['SubtaskHours']);
        console.log('Subtask_Res_List:',this.Subtask_Res_List);
        console.log('totalSubtaskHours:',this.totalSubtaskHours);

        console.log('darArr:', this.Category_List);

        if (this.darArr.length == 0 && (this.projectInfo.OwnerEmpNo == this.Current_user_ID || this.projectInfo.ResponsibleEmpNo == this.Current_user_ID)) {
// user is prj owner
// user is prj resp + he does not contains any actions.
          this.showaction = false;
        }
        else if (this.darArr.length == 0 && this.projectInfo.OwnerEmpNo != this.Current_user_ID && this.projectInfo.ResponsibleEmpNo != this.Current_user_ID) {
// user is authority/support  + he does not contain any actions.
          this.showaction = true;
          this.noact_msg = true;
        }
        else {
// user is prj resp + he contains actions.
// user is authority/support + he contains actions.
                this.showaction = true;
                if(this.currentActionView!==undefined){
                  const selectedActionOpt = this.darArr.find((item: any) => (item.Project_Code === this.projectActionInfo[this.currentActionView].Project_Code))
                  if (selectedActionOpt)
                  this.actionCode = selectedActionOpt.Project_Code;
                }
        }
      });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode).subscribe(
      (data) => {
        console.log(data, "RACIS");
        this.owner_dropdown = (JSON.parse(data[0]['owner_dropdown']));
        this.responsible_dropdown = (JSON.parse(data[0]['responsible_dropdown']));
      });
  }



  selectedOwner: any;
  ProjectType: string
  ProjectDescription: string
  Start_Date: string;
  OGowner: any;
  OGresponsible: any;
  OGownerid: any;
  OGresponsibleid: any;
  OGclientId: any;
  Submission_Name: string
  Allocated_Hours: any;
  Daily_array: any = [];
  Week_array: any = [];
  Month_array: any = [];
  Quarter_array: any = [];
  Halfyear_array: any = [];
  Annual_array: any = [];
  End_Date: any
  Annual_date: any
  Allocated: any
  OGselectedcategoryid: any
  OGcategory: any
  OGselectedclientid: any
  OGclient: any;
  OGSubmission_Nameid: any
  OGSubmission: any;
  OGProjectType: any;


  generateTimeIntervals(duration: number, interval: number, maxLimit: number): string[] {
    const timeArray: string[] = [];

    for (let i = 1; i <= duration; i++) {
      const hours: number = Math.floor(i * interval / 60);
      const minutes: number = i * interval % 60;

      // Check if the time exceeds the specified maximum limit
      if (hours < maxLimit || (hours === maxLimit && minutes === 0)) {
        const timeStr: string = `${hours.toString().padStart(2, '0')} Hr : ${minutes.toString().padStart(2, '0')} Mins`;
        timeArray.push(timeStr);
      } else {
        break;  // Exit the loop once the maximum limit is reached
      }
    }

    return timeArray;
  }

  timearrays() {
    this.Daily_array = this.generateTimeIntervals(4, 15, 1);
    this.Week_array = this.generateTimeIntervals(8, 15, 2);
    this.Month_array = this.generateTimeIntervals(16, 15, 4);
    this.Quarter_array = this.generateTimeIntervals(32, 15, 8);
    this.Halfyear_array = this.generateTimeIntervals(40, 15, 10);
    this.Annual_array = this.generateTimeIntervals(64, 15, 16);

    // console.log("Daily Array:", this.Daily_array);
    // console.log("Weekly Array:", this.Week_array);
    // console.log("Monthly Array:", this.Month_array);
  }

  type_list: any
  OGProjectTypeid: any
  ActionName: any

  initializeSelectedValue() {
    this.OGownerid = this.projectInfo['OwnerEmpNo'];
    this.OGresponsibleid = this.projectInfo['ResponsibleEmpNo'];
    this.OGselectedcategoryid = this.projectInfo['Reportid'];
    this.OGselectedclientid = this.projectInfo['ClientNo'];
    this.OGSubmission_Nameid = this.projectInfo['SubmissionId'];
    this.OGProjectTypeid = this.projectInfo['Project_Block'];
    // console.log("test",this.OGProjectTypeid)
    this.OGProjectType = this.projectInfo.Project_Type;
    this.selectedOwner = this.projectInfo.Owner;
    this.OGowner = this.projectInfo.Owner;
    this.selectedOwnResp = this.projectInfo.Responsible;
    this.OGresponsible = this.projectInfo.Responsible;
    this.selectedcategory = this.projectInfo.Category;
    this.OGcategory = this.projectInfo.Category;
    this.selectedclient = this.projectInfo.Client;
    this.OGclient = this.projectInfo.Client
    this.Submission_Name = this.projectInfo.SubmissionName
    this.OGSubmission = this.projectInfo.SubmissionName
    this.ProjectName = this.projectInfo.Project_Name
    this.ProjectDescription = this.projectInfo.Project_Description
    this.Start_Date = this.projectInfo.StartDate
    this.Allocated_Hours = this.projectInfo.StandardAllocatedHours
    this.Allocated = this.projectInfo.AllocatedHours
    this.End_Date = this.projectInfo.EndDate;
  }

  // isStartDateEditable:boolean=false;
  onAction_updateProject(val) {
    this._remarks = '';
    if (this.OGProjectType != this.ProjectType) {
      var type = this.ProjectType
      this.ProjectType = this.ProjectType;
    }
    else {
      var type: string = this.OGProjectTypeid;
    }

    if (this.OGowner != this.selectedOwner) {
      var owner = this.selectedOwner
      this.selectedOwner = this.selectedOwner;
    }
    else {
      var owner = this.OGownerid;
    }

    if (this.OGresponsible != this.selectedOwnResp) {
      var resp = this.selectedOwnResp;
      this.selectedOwnResp = this.selectedOwnResp;
    }
    else {
      var resp = this.OGresponsibleid;
    }

    if (this.OGcategory != this.selectedcategory) {
      var category = this.selectedcategory;
      this.selectedcategory = this.selectedcategory;
    }
    else {
      var category = this.OGselectedcategoryid;
    }

    if (this.OGclient != this.selectedclient) {
      var client = this.selectedclient;
      this.selectedclient = this.selectedclient;
    }
    else {
      var client: string = this.OGselectedclientid;
    }

    if (this.OGSubmission != this.Submission_Name) {
      var Submission = this.Submission_Name;
      this.Submission_Name = this.Submission_Name;
    }
    else {
      var Submission: string = this.OGSubmission_Nameid;
    }

    if (this.OGSubmission != this.Submission_Name) {
      var Submission = this.Submission_Name;
      this.Submission_Name = this.Submission_Name;
    }
    else {
      var Submission: string = this.OGSubmission_Nameid;
    }

    if (type == '003' || type == '008') {
      var allocation = this.Allocated_Hours["$ngOptionLabel"];
    }
    else {
      var allocation = this.Allocated;
    }

    var datestrStart = moment(this.Start_Date).format("MM/DD/YYYY");
    var datestrEnd = moment(this.End_Date).format("MM/DD/YYYY");

    const jsonobj = {
      Project_Type: type,
      Project_Name: this.ProjectName,
      Project_Description: this.ProjectDescription,
      Owner: owner,
      Responsible: resp,
      Category: category,
      Client: client,
      StartDate: datestrStart,
      EndDate: datestrEnd,
      SubmissionName: Submission,
      AllocatedHours: allocation,
      Recurrence:this.Annual_date
    }
    const jsonvalue = JSON.stringify(jsonobj)
    console.log(jsonvalue, 'json');

    if (val == 0) {
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.json = jsonvalue;
      this.approvalObj.Remarks = this._remarks;
      this.approvalObj.isApproval = val;

      this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
        console.log(data['message'], "edit response");
        if (data['message'] == '1') {
          this.notifyService.showSuccess("Updated successfully", "Success");
        }
        else if (data['message'] == '2') {
          this.notifyService.showError("Not updated", "Failed");
        }
        else if (data['message'] == '5') {
          this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===resp))[0]["RACIS"], "Updated successfully");
        }
        else if (data['message'] == '6') {
          this.notifyService.showSuccess("Updated successfully"+"Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
        }
        else if (data['message'] == '8') {
          this.notifyService.showError("Selected Project owner cannot be updated", "Not updated");
        }
        this.getProjectDetails(this.URL_ProjectCode);
        this.closeInfo();
      });
    }
    else if (val == 1) {
      debugger
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.json = jsonvalue;
      this.approvalObj.Remarks = this._remarks;
      this.approvalObj.isApproval = val;

      this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
        debugger
        console.log(data['message'], "edit response");
        if (data['message'] == '3') {
          this.notifyService.showSuccess("Project updated and Approved successfully", "Success");
          this.Close_Approval();
        }
        else if (data['message'] == '2') {
          this.notifyService.showError("Not updated", "Failed");
        }
        this.getProjectDetails(this.URL_ProjectCode);
        this.getapprovalStats();
        this.closeInfo();
      });
    }




  }


  ActionCode: any
  ActionDescription: any
  ActionOwner: any
  ActionResponsible: any
  Actioncategory: any
  ActionClient: any
  ActionstartDate: any
  ActionendDate: any
  ActionDuration: any
  ActionAllocatedHours: any
  editAllocatedhours: any=0;
  ActionOwnerid: any
  OGActionOwner: any
  OGActionResponsible: any
  ActionResponsibleid: any
  ActionClientid: any
  OGActionClient: any
  ActionmaxAllocation:number=0;


  /// Action Edits start
  initializeSelectedValues() {
    this.ActionOwnerid = this.projectActionInfo[this.currentActionView].Project_Owner;
    this.ActionResponsibleid = this.projectActionInfo[this.currentActionView].Team_Res;
    this.ActionClientid = this.projectActionInfo[this.currentActionView].ClientNo;
    this.OGselectedcategoryid = this.projectInfo['Reportid']
    this.OGProjectTypeid = this.projectInfo['Project_Block'];
    this.OGProjectType = this.projectInfo.Project_Type;
    this.OGActionOwner = this.projectActionInfo[this.currentActionView].Owner;
    this.ActionOwner = this.projectActionInfo[this.currentActionView].Owner;
    this.ActionResponsible = this.projectActionInfo[this.currentActionView].Responsible;
    this.OGActionResponsible = this.projectActionInfo[this.currentActionView].Responsible;
    this.ActionClient = this.projectActionInfo[this.currentActionView].Client;
    this.OGActionClient = this.projectActionInfo[this.currentActionView].Client;

    this.selectedcategory = this.projectInfo.Category;
    this.OGcategory = this.projectInfo.Category;
    this.ActionCode = this.projectActionInfo[this.currentActionView].Project_Code;
    this.ActionName = this.projectActionInfo[this.currentActionView].Project_Name;
    this.ActionDescription = this.projectActionInfo[this.currentActionView].Project_Description;
    this.ActionstartDate = this.projectActionInfo[this.currentActionView].StartDate
    this.ActionendDate = this.projectActionInfo[this.currentActionView].EndDate
    this.ActionDuration = this.projectActionInfo[this.currentActionView].Duration
    this.ActionAllocatedHours = this.projectActionInfo[this.currentActionView].AllocatedHours;
    this.editAllocatedhours = this.ActionAllocatedHours;
    this.onActionDateChanged();
  }


  onActionDateChanged(){
    let start_dt=new Date(this.ActionstartDate);
    let end_dt=new Date(this.ActionendDate);
    let Difference_In_Time = start_dt.getTime() - end_dt.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days==0){
      Difference_In_Days=-1;
      this.ActionmaxAllocation = (-Difference_In_Days) * 10 / 1;
    }
    else{
      this.ActionmaxAllocation = (-Difference_In_Days) * 10 / 1 +10;
    }

  }






  onAction_update() {

    this._remarks = '';
    if (this.OGProjectType != this.ProjectType) {
      var type = this.ProjectType
      this.ProjectType = this.ProjectType;
    }
    else {
      var type: string = this.OGProjectTypeid;
    }

    if (this.OGActionOwner != this.ActionOwner) {
      var actionowner = this.ActionOwner
      this.ActionOwner = this.ActionOwner;
    }
    else {
      var actionowner = this.ActionOwnerid;
    }


    if (this.OGActionResponsible != this.ActionResponsible) {
      var actionresp = this.ActionResponsible;
      this.ActionResponsible = this.ActionResponsible;
    }
    else {
      var actionresp = this.ActionResponsibleid;
    }

    if (this.OGActionClient != this.ActionClient) {
      var Actionclient = this.ActionClient;
      this.ActionClient = this.ActionClient;
    }
    else {
      var Actionclient = this.ActionClientid;
    }


    if (this.OGcategory != this.selectedcategory) {
      var category = this.selectedcategory;
      this.selectedcategory = this.selectedcategory;
    }
    else {
      var category = this.OGselectedcategoryid;
    }

    if(this.editAllocatedhours==0){
      this.editAllocatedhours = this.ActionAllocatedHours;
    }

    var datestrStart = moment(this.ActionstartDate).format("MM/DD/YYYY");
    var datestrEnd = moment(this.ActionendDate).format("MM/DD/YYYY");

    const jsonobj = {
      Project_Type: type,
      Project_Name: this.ActionName,
      Project_Description: this.ActionDescription,
      Owner: actionowner,
      Responsible: actionresp,
      Category: category,
      Client: Actionclient,
      StartDate: datestrStart,
      EndDate: datestrEnd,
      AllocatedHours: this.editAllocatedhours,
    }



    const jsonvalues = JSON.stringify(jsonobj)
    console.log(jsonvalues, 'json');

  const dateOne = moment(this.projectInfo.EndDate).format("YYYY/MM/DD");
  const dateTwo = moment(this.ActionendDate).format("YYYY/MM/DD");


  this.approvalObj.Emp_no = this.Current_user_ID;
  this.approvalObj.Project_Code = this.ActionCode;
  this.approvalObj.json = jsonvalues;
  this.approvalObj.Remarks = this._remarks;



  console.log(dateOne, dateTwo, "dates")
  if ((dateOne < dateTwo) && (this.Current_user_ID == this.projectInfo.OwnerEmpNo || this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID== this.projectInfo.AuthorityEmpNo || this.isHierarchy==true)) {
    Swal.fire({
      title: 'Action deadline is greater than main project deadline ?',
      text: 'Do you want to continue for selection of date after main project deadline!!',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
          console.log(data['message'], "edit response");
          if (data['message'] == '1') {
            this.notifyService.showSuccess("Updated successfully", "Success");
            this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
          }
          else if (data['message'] == '2') {
            this.notifyService.showError("Not updated", "Failed");
          }
          else if (data['message'] == '5') {
            this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===actionresp))[0]["RACIS"], "Updated successfully");
          }
          else if (data['message'] == '6') {
            this.notifyService.showSuccess("Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
          }
          else if (data['message'] == '8') {
            this.notifyService.showError("Selected action owner cannot be updated", "Not updated");
          }
          this.getProjectDetails(this.URL_ProjectCode);
          this.closeInfo();
          this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
        });
      } else if (response.dismiss === Swal.DismissReason.cancel) {
    //    this.close_space();
        Swal.fire(
          'Cancelled',
          'Action end date not updated',
          'error'
        )
      }
    });
  }
  else if ((dateOne < dateTwo) && (this.Current_user_ID != this.projectInfo.OwnerEmpNo && this.Current_user_ID != this.Responsible_EmpNo && this.Current_user_ID != this.projectInfo.Authority_EmpNo  && this.isHierarchy == false)) {
    Swal.fire({
      title: 'Unable to extend end date for this action.',
      text: 'You have selected the action end date greater than project deadline. Please contact the project responsible to extend project end date and try again.',
    });
  }
  else {
    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
      console.log(data['message'], "edit response");
      if (data['message'] == '1') {
        this.notifyService.showSuccess("Updated successfully", "Success");
        this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
      }
      else if (data['message'] == '2') {
        this.notifyService.showError("Not updated", "Failed");
      }
      else if (data['message'] == '5') {
        this.notifyService.showSuccess("Project Transfer request sent to the new responsible "+ this.responsible_dropdown.filter((element)=>(element.Emp_No===actionresp))[0]["RACIS"], "Updated successfully");
      }
      else if (data['message'] == '6') {
        this.notifyService.showSuccess("Updated successfully"+"Project Transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully");
      }
      else if (data['message'] == '8') {
        this.notifyService.showError("Selected action owner cannot be updated", "Not updated");
      }

      this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
      this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
      this.closeInfo();
    });
  }

  }


///////////////////duration Edit start//////////////////////


allocation: boolean = false;
check_allocation() {
  const newenddate = new Date(this.ActionendDate);
  const oldendate = new Date(this.projectInfo.EndDate);

  if (newenddate > oldendate) {
    this.allocation = true;
  }
  else {
    this.allocation = false;
  }

}

///////////////////duration Edit end//////////////////////




  limit = 60;  // Set the initial limit
  limited_data= 98;

  isExpanded = false;
  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }

  limit_data=75;
  isExpandeds = false;
  _toggleReadMore() {
    this.isExpandeds = !this.isExpandeds;
  }
  /// Action Edits End



  dar_details() {
    this.noTimeline = false;
    this.ObjSubTaskDTO.MasterCode = this.URL_ProjectCode;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 10;
    this.service._GetDARbyMasterCode(this.ObjSubTaskDTO)
      .subscribe(data1 => {

        this.darList = JSON.parse(data1[0]['DAR_Details_Json']);
        this.darArray = this.darList;
        console.log("sahil bhai this is your DAR array:", this.darArray);
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
      console.log('check this:', this.timedata);

    }
    else {
      this.timedata1.forEach(element => {
        this.timedata.push(element);
      });
    }
    console.log("timedata:", this.timedata);
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

  orgValueChange(val) {
    this.current_Date = moment(val.value).format("MM/DD/YYYY");
  }

  diff_minutes(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }


 submitDar(){

   const isPrjCoreSecondary=['001','002'].includes(this.projectInfo.Project_Block);
   if(
   ((isPrjCoreSecondary&&this.showaction)?this.actionCode:true)&&
   this.workdes&&
   this.starttime&&
   this.endtime&&
   ((isPrjCoreSecondary&&this.actionCode&&this.bothActTlSubm)?this._remarks:true)
   ){
    // if all mandatory fields are provided.


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

    this.objProjectDto.Emp_No = this.Current_user_ID;                  // setting the current user id.
    this.objProjectDto.Exec_BlockName = this.projectInfo.Project_Type;  // setting the project type.
    if (this.starttime != undefined && this.endtime != undefined && this.timecount != undefined) {
      this.objProjectDto.StartTime = this.starttime;
      this.objProjectDto.EndTime = this.endtime;
      this.objProjectDto.TimeCount = this.timecount;
    }
    this.current_Date = this.datepipe.transform(this.current_Date, 'MM/dd/yyyy');
    this.objProjectDto.date = this.current_Date;
    this.objProjectDto.WorkAchieved = this.workdes;
    this.objProjectDto.Emp_Comp_No = this.Comp_No;


   // new start

   if(['003','008','011'].includes(this.projectInfo.Project_Block)){
    // std, routine or todo
    this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    this.objProjectDto.Master_code = this.URL_ProjectCode;
    this.objProjectDto.Project_Code = this.URL_ProjectCode;
   }
   else{
      // core, secondary


     if(this.Current_user_ID==this.projectInfo.OwnerEmpNo){
       // user is project owner.
      this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
      this.objProjectDto.Master_code = this.URL_ProjectCode;
      this.objProjectDto.Project_Code = this.URL_ProjectCode;
     }
     else if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo){
      // user is project responsible.
      this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
      this.objProjectDto.Master_code = this.URL_ProjectCode;
      this.objProjectDto.Project_Code=this.showaction?this.actionCode:this.URL_ProjectCode; // If resp have action then provide that action code else provide prj code.
     }
     else{
           // user is authority/support.
           this.objProjectDto.Master_code = this.URL_ProjectCode;
           this.objProjectDto.Project_Code = this.actionCode;
     }

   }

   // new end


    // if (this.projectInfo.Project_Type == 'Standard Tasks' || this.projectInfo.Project_Type == 'Routine Tasks' || this.projectInfo.Project_Type == 'To do List') {
    //   this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    //   this.objProjectDto.Master_code = this.URL_ProjectCode;
    //   this.objProjectDto.Project_Code = this.URL_ProjectCode;
    // }
    // else if ((this.projectInfo.Project_Type == 'Core Tasks' || this.projectInfo.Project_Type == 'Secondary Tasks') && (this.inProcessCount == 0 && this.delaycount == 0)) {
    //   this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    //   this.objProjectDto.Master_code = this.URL_ProjectCode;
    //   this.objProjectDto.Project_Code = this.URL_ProjectCode;
    // }
    // else if ((this.projectInfo.Project_Type == 'Core Tasks' || this.projectInfo.Project_Type == 'Secondary Tasks' || this.projectInfo.OwnerEmpNo==this.Current_user_ID)) {
    //   this.objProjectDto.Project_Name = this.projectInfo.Project_Name;
    //   this.objProjectDto.Master_code = this.URL_ProjectCode;
    //   this.objProjectDto.Project_Code = this.URL_ProjectCode;
    // }
    // else {
    //   this.objProjectDto.Master_code = this.URL_ProjectCode;
    //   this.objProjectDto.Project_Code = this.actionCode;
    // }


    this.service._InsertDARServie(this.objProjectDto)
      .subscribe(data => {
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "Success");


        if(this.currentActionView!==undefined)
        this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);   // get action activities update.
       else
        this.GetActivityDetails();     // get project activities update.



        // Timeline submitted
        // if action submission is also required
        if(this.bothActTlSubm&&['Delay','InProcess'].includes(this.projectActionInfo[this.currentActionView].Status)){
          this._Subtaskname = this.projectActionInfo[this.currentActionView].Project_Name;
          this.Sub_ProjectCode = this.projectActionInfo[this.currentActionView].Project_Code;
          this.Sub_Desc = this.projectActionInfo[this.currentActionView].Project_Description;
          this.Sub_StartDT = this.projectActionInfo[this.currentActionView].StartDate;
          this.Sub_EndDT = this.projectActionInfo[this.currentActionView].EndDate;
          this.Sub_Autho = this.projectActionInfo[this.currentActionView].Team_Res;
          this.Sub_Status = this.projectActionInfo[this.currentActionView].Status;
          this.actionCompleted();
          this.closeDarSideBar();

          this.bothActTlSubm=false;
          this._remarks='';
          this._inputAttachments='';
        }
      });
      this.dar_details();
      this.getDarTime();

      this.workdes = "";
      this.starttime = null;
      this.endtime = null;
      this.notProvided=false;
    // document.getElementById("newdetails").classList.remove("position-fixed");
    // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("rightbar-overlay").style.display = "none";
    // this.Clear_Feilds();


   }
   else // some mandatory field are missing.
     this.notProvided=true;
 }



  onActionChanged(e) {
    let i;
    for (i = 0; i < this.projectActionInfo.length; i++)
      if (this.projectActionInfo[i].Project_Code.toString().trim() === e.toString().trim())
        break;
    if (i !== this.projectActionInfo.length)
      this.currentActionView = i;
  }   // whenever action is changed or selected.



  // timeline code end here


  AddPortfolio() {
    this.getPortfoliosDetails()
  }

  // timeline view section start here
  timelineList: any;
  isTimelinePresent: boolean = false;
  tlTotalHours: number;



  onTLSrtOrdrChanged(option: "Date" | "Action" | "Employee" | "Me") {
    this.tmlSrtOrd = option;
    let sorttype: string = "1";
    switch (option) {
      case 'Date': sorttype = "1"; break;
      case 'Action': sorttype = "2"; break;
      case 'Employee': sorttype = "3"; break;
      case 'Me': sorttype = "4"; break;
      default: sorttype = "1";
    }
    this.projectMoreDetailsService.getProjectTimeLine(this.projectInfo.Project_Code, sorttype, this.Current_user_ID).subscribe((res: any) => {
      console.log("timeline data here:", res);
      this.timelineList = JSON.parse(res[0].Timeline_List);
      this.tlTotalHours = +JSON.parse(res[0].Totalhours);
      console.log(Math.abs(this.tlTotalHours))
      if (this.timelineList && this.timelineList.length) {
        this.isTimelinePresent = true;
        this.timelineList = this.timelineList.map((timeline: any) => ({ ...timeline, JsonData: JSON.parse(timeline.JsonData) }));
        console.log('our new timeline:', this.timelineList);
      }

    });

  }

  originalportfolios:any

  getPortfolios() {
    if ((this._portfoliolist.length == 1) && (this._portfoliolist[0]['Portfolio_Name'] == '')) {
      this._portfolioLength = 0;
    }
    else
      this._portfolioLength = this._portfoliolist.length;

    this.service.GetTotalPortfoliosBy_Employeeid().subscribe
      ((data) => {
        this.totalPortfolios = (data[0]['TotalPortfolios']);
      });
    this.service.GetPortfoliosBy_ProjectId(this.URL_ProjectCode).subscribe
      ((data) => {
        this._portfoliosList = data as [];
        this.originalportfolios=this._portfoliosList
       console.log(this._portfoliolist,'_portfoliolist')
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
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }


  Portfolio_Select(selecteditems) {
    debugger
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_portDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_portDropdown.forEach(element => {
      arr.push({ Port_Id: element.Portfolio_ID })
      this._SelectedPorts = arr;
    });
    this.openAutocompleteDrpDwn('PORTFOLIOdrpdwn')
    // console.log("Selected Ports In Array--->", this._SelectedPorts);
    // console.log(this.ngDropdwonPort,"ports");

  }

  Portfolio_SelectAll(selecteditems) {
    let arr = [];
    this.Empty_portDropdown = selecteditems;
    console.log("Before ForEach data Selected Memos---->", this.Empty_portDropdown)
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
    const index = this.ngDropdwonPort.indexOf(selecteditems);
    if (index !== -1) {
      this.ngDropdwonPort.splice(index, 1);
    }

    let arr = [];

    this.Empty_portDropdown = this.ngDropdwonPort;
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


  filterportfolio(input:string){
   if(input.trim()===''){
    this._portfoliosList=[...this.originalportfolios];

   }else{
    this._portfoliosList=this.originalportfolios.filter(item=>{
      return `${item.Portfolio_Name}-${item.TM_DisplayName}`.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })
   }
  }

  addProjectToPortfolio() {
    debugger
    if(this._SelectedPorts==' '||this._SelectedPorts==null){
      this.notifyService.showInfo("Please select Porfolio(s) to link",'Request cancelled');
      return;
    }



    this.selectedportID = JSON.stringify(this._SelectedPorts);
    // console.log(this.selectedportID,"portids");
    if (this.selectedportID != null) {
      this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
      this.objPortfolioDto.Project_Code = this.URL_ProjectCode;
      this.objPortfolioDto.Emp_No = this.Current_user_ID;
      this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
        subscribe((data) => {
          this._Message = (data['message']);
          if (this._Message == 'Updated Successfully') {
            this.getPortfoliosDetails();
            this._SelectedPorts=null;
            this.notifyService.showSuccess("Project successfully added to selected Portfolio(s)", this._Message);
          } else {
            this.notifyService.showInfo("Please select atleast one portfolio and try again", "");
          }
        });

    }


    this.ngDropdwonPort = [];
    //this.closeLinkSideBar();
    this.getPortfoliosDetails();
    // this._openInfoSideBar = false;
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

          this.getPortfoliosDetails();
          this.getPortfolios();
          this.notifyService.showSuccess("Deleted successfully ", '');
        });
      }
      else {
        this.notifyService.showError("Action Cancelled ", '');
      }
    });
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


  // this is main project submission code start here
  isAction: boolean = false;

  mainDeadline: any;
  mainowner: any;
  mainResp: any;
  mainAutho: any;
  mainMastercode: any;
  approve_details: any;

  getapproval_actiondetails() {
    this.approvalObj.Project_Code = this.URL_ProjectCode;

    this.approvalservice.GetAppovalandActionDetails(this.approvalObj).subscribe(data => {
      // console.log(data,"appact");
      if (data[0]['actiondetails'] != '[]' || data[0]['approvaldetails'] != '[]') {
        if (data[0]['actiondetails'] != '[]') {
          let action_details = JSON.parse(data[0]['actiondetails']);

          this.mainDeadline = action_details[0]['mainDeadline'];
          this.mainowner = action_details[0]['mainowner'];
          this.mainResp = action_details[0]['mainResp'];
          this.mainAutho = action_details[0]['mainAutho'];
          this.mainMastercode = action_details[0]['Master_Code'];
          this.isAction = true;
        }
        if (data[0]['approvaldetails'] != '[]')
          this.approve_details = JSON.parse(data[0]['approvaldetails']);

      }
    });
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
          document.getElementById("newdetails").classList.add("position-fixed");
          // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");   // i have commit this for a while.
          document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
        }
      });



  }




  closeInfoProject() { debugger
    // For closing sidebar on 'X' buttton
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    // For sidebar overlay background removing the slide on 'X' button
    document.getElementById("rightbar-overlay").style.display = "none";
    // For page top div removing fixed
    // document.getElementById("newdetails").classList.remove("position-fixed");
    // $('#mainPrjCheckbox').prop('checked', false);
    this._inputAttachments = '';
    this._remarks = '';
    this.selectedFile = null;
    this.formFieldsRequired=false;
    // $('#_file1').val('');
    // $('#upload').html('Select a file');
    // this.OnClickCheckboxProjectUpdate();
    // this.Clear_Feilds();
  }





  updateMainProject() {
    debugger
// for checking whether mandatory fields are provided or not.
   if((this.projectInfo.Project_Type!='To do List' && this.isAction==false) && ( !this._remarks&&!this.selectedFile)){
      this.formFieldsRequired=true;
      return;
   }


  if((this.projectInfo.Project_Type=='To do List' || this.isAction==true)&&(!this._remarks)){
     this.formFieldsRequired=true;
     return;
  }
// for checking whether mandatory fields are provided or not.



    
    if (this.projectInfo.Project_Type == 'To do List') {
      this.selectedFile = null;
    }

    if (this.isAction == false) {
      const fd = new FormData();
      fd.append("Project_Code", this._MasterCode);
      fd.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
      fd.append("Remarks", this._remarks);
      fd.append("Projectblock", this.projectInfo.Project_Block);
      fd.append('file', this.selectedFile);
      fd.append("Emp_No", this.Current_user_ID);
      fd.append("Project_Name", this.projectInfo.Project_Name);
      this.service._fileuploadService(fd).
        subscribe((event: HttpEvent<any>) => {
          debugger
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
          this.GetActivityDetails();
          this.closeInfoProject();
          this.getProjectDetails(this.URL_ProjectCode);
          // this.getapproval_actiondetails();
          // this.GetSubtask_Details();
          // this.GetProjectDetails();
          this.getapprovalStats();
          // this._projectSummary.GetProjectsByUserName('RACIS Projects');
        });
    }
    else if (this.isAction == true) {
      const fd = new FormData();
      fd.append("Project_Code", this.URL_ProjectCode);
      fd.append("Master_Code", this.mainMastercode);
      fd.append("Team_Autho", this.projectInfo.AuthorityEmpNo);
      fd.append("Projectblock", this.projectInfo.Project_Block);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      fd.append("Project_Name", this.projectInfo.Project_Name);

      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          this._remarks = "";
          this._inputAttachments = "";
          // this.GetProjectDetails();
          // this.GetSubtask_Details();
          this.getProjectDetails(this.URL_ProjectCode);
          this.closeInfoProject();

        });
      this.notifyService.showSuccess("Successfully Updated", 'Action completed');
    }

  }
  // Files Attachment Working Area Start

  flSrtOrd: string;
  AttachmentList: any;
  _TotalDocs: any;
  // _attachmentOf:'PROJECT'|'ACTIONS'='PROJECT';
  // SortBy:number;
  // projectatt: any;
  // Actionatt: any;

  // AttachmentListTemp:any=[];
  getAttachments(sorttype: number) {
    switch (sorttype) {
      case 1: this.flSrtOrd = "Date"; break;
      case 2: this.flSrtOrd = "Project"; break;
      case 3: this.flSrtOrd = "Employee"; break;
      case 4: this.flSrtOrd = "me"; break;
      default: this.flSrtOrd = "none";
    }

    this._LinkService.GetAttachements(this.Current_user_ID, this.URL_ProjectCode, sorttype.toString())
      .subscribe((data) => {
            this.AttachmentList = JSON.parse(data[0]['Attachments_Json']);
            console.log('my AttachmentList:',this.AttachmentList);
            this._TotalDocs = JSON.parse(data[0]["TotalDocs"]);
           if (this.AttachmentList && this.AttachmentList.length) {
          this.AttachmentList = this.AttachmentList.map((Attachment: any) => ({ ...Attachment, JsonData: JSON.parse(Attachment.JsonData) }));
          console.log(this.AttachmentList,'AttachmentList')
          // this.getProjectAttachments();

        }
      });

  // by default project tab selected.
$('#prj-attachments-tab-btn').addClass('active');
$('#acts-attachments-tab-btn').removeClass('active');


  }

//   getProjectAttachments(){

//    this.AttachmentListTemp=this.AttachmentList.map((item)=>{
//       return {
//        ...item,
//        JsonData:item.JsonData.filter((item1)=>item1.Project_Code==this.URL_ProjectCode)
//      }
// });
//     console.log("=>",this.AttachmentListTemp);
//   }



//   getActionAttachments(){
//     this.AttachmentListTemp=this.AttachmentList.map((item)=>{
//       return {
//        ...item,
//        JsonData:item.JsonData.filter((item1)=>item1.Project_Code!=this.URL_ProjectCode)
//      }
//      });
//      console.log("a=>",this.AttachmentListTemp);
//   }


  openPDF_Standards(standardid, emp_no, cloud, repDate: Date, proofDoc, type, submitby) {
    repDate = new Date(repDate);
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
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "submitby=" + submitby + "&" + "filename=" + proofDoc + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }


  }

  LoadDocument(pcode: string, iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {

    let FileUrl: string;
    // FileUrl = "http://217.145.247.42:81/yrgep/Uploads/";
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";

    if (iscloud == false) {
      FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/uploads/";
      if (this.projectInfo.AuthorityEmpNo == this.projectInfo.ResponsibleEmpNo) {
        // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + docName);
        FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
      }
      else if (this.projectInfo.AuthorityEmpNo != this.projectInfo.ResponsibleEmpNo) {
        FileUrl = (FileUrl + this.projectInfo.ResponsibleEmpNo + "/" + pcode + "/" + url1);
      }

      let name = "ArchiveView/" + pcode;
      var rurl = document.baseURI + name;
      var encoder = new TextEncoder();
      let url = encoder.encode(FileUrl);
      let encodeduserid = encoder.encode(this.Current_user_ID.toString());
      filename = filename.replace(/#/g, "%23");
      filename = filename.replace(/&/g, "%26");
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
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
      var myurl = rurl + "/url?url=" + url + "&" + "uid=" + encodeduserid + "&" + "filename=" + filename + "&" + "submitby=" + submitby + "&" + "type=" + type;
      var myWindow = window.open(myurl, url.toString());
      myWindow.focus();
    }
  }
  // Files Attachment Working Area End






  ///////////////////////////////////// Approval section Start  ////////////////////////////////////

  filterText: string;
  approval_Emp: any
  SearchItem: string;
  action_approver:any;
  action_assignedby: any;

  filterSearch() {
    this.filterText = "";
    this.SearchItem = "";
  }





  GetApproval(code) {
    this.approvalObj = new ApprovalDTO();
    this.approvalObj.Project_Code = code;
    this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
      this.requestDetails = data as [];
      console.log(data,'jjj----------->')
      if (this.requestDetails.length > 0) {
        this.requestType = (this.requestDetails[0]['Request_type']);
        this.forwardType = (this.requestDetails[0]['ForwardType']);
        this.requestDate = (this.requestDetails[0]['Request_date']);
        this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
        this.approval_Emp = (this.requestDetails[0]['Emp_no']);
        this.action_approver = (this.requestDetails[0]['Responsible']);
        this.action_assignedby = (this.requestDetails[0]['Submitted_By']);
        // alert(this.approval_Emp)
        this.requestComments = (this.requestDetails[0]['Remarks']);
        this.new_deadline = (this.requestDetails[0]['new_deadline']);
        this.new_cost = (this.requestDetails[0]['new_cost']);
        this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);

        this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
        const fullName = this.Submitted_By.split(' ');
        this.initials1 = fullName.shift().charAt(0) + fullName.pop().charAt(0);
        this.initials1 = this.initials1.toUpperCase();
        this.prviousCommentsList = JSON.parse(this.requestDetails[0]['previousComments_JSON']);
        this.transfer_json = JSON.parse(this.requestDetails[0]['transfer_json']);
        this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
        this.reject_list.splice(0, 1);
        this.revert_json = JSON.parse(this.requestDetails[0]['revert_json']);
        this.singleapporval_json = JSON.parse(this.requestDetails[0]['singleapproval_json']);
        console.log(this.singleapporval_json, "s-1");
        if (this.prviousCommentsList.length > 1) {
          this.previouscoments = true;
        }
        else {
          this.previouscoments = false;
        }

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
          if (this.complete_List != "" && this.complete_List != undefined && this.complete_List != null) {
            this.completedoc = (this.complete_List[0]['Sourcefile']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
            this.url = (this.complete_List[0]['CompleteProofDoc']);
          }
          console.log(this.complete_List, 'complete');
        }
      }
    });
    console.log(this.requestDetails, 'transfer');
  }




  // project submission code end here


  pro_act: boolean = true;
  hold_upto: any;

  closeApproval() {
    document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("mysideInfobar1").classList.remove("kt-action-panel--on");
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.remove("kt-quick-panel--on");
    document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("mysideInfobar1").classList.remove("kt-quick-panel--on");
    // For page top div removing the fixed
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.notifyService.showError("Cancelled", '');
    // this.Clear_Feilds();
    // this.GetSubtask_Details();
  }



  getholdate() {
    this.service.getHoldDatebyProjectcode(this.URL_ProjectCode).subscribe((data) => {
      this.hold_upto = data["Project_holddate"];
      // this.hold_upto=moment(this.hold_upto).format("DD-MM-YYYY");
    });
  }




  ///////////////////////////////////// Approval section Start  ////////////////////////////////////




  // meeting section code starts here
  meetingList: any;
  meeting_arry: any;
  meetinglength: any;

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


  GetmeetingDetails() {

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
    //




    this.ObjSubTaskDTO.Project_Code = this.URL_ProjectCode;
    this.ObjSubTaskDTO.startdate = null;
    this.ObjSubTaskDTO.enddate = null;

    this.service._GetMeetingList(this.ObjSubTaskDTO)
      .subscribe(data => {
        if ((data[0]['MeetingFor_projects'].length > 0) && data != null) {
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
        this.upcomingMeetings.reverse();                                         // get upcoming meetings.
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

      });


    //
  }







  openMeetingSidebar() {



    // window.addEventListener('scroll',()=>{
    //   this.autocompletes.forEach((ac)=>{
    //           if(ac.panelOpen)
    //           ac.updatePosition();
    //   });
    // },true);


    document.getElementById("Meetings_SideBar").classList.add("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='MEETINGS';
    // sidebar is open
    this.GetmeetingDetails(); // get all meeting details.
  }

  closeMeetingSidebar() {
    document.getElementById("Meetings_SideBar").classList.remove("kt-quick-Mettings--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
    this.currentSidebarOpened='NOT_OPENED';

    this.meetingsViewOn = true;
    // empty all variables
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
    //
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

    this.ObjSubTaskDTO.Project_Code = this.URL_ProjectCode;
    this.ObjSubTaskDTO.startdate = this.mtgFromD;
    this.ObjSubTaskDTO.enddate = this.mtgUptoD;
    this.mLdng = true;     // made loading visible.
    this.service._GetMeetingList(this.ObjSubTaskDTO).subscribe((res: any) => {
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
MasterCode: any=null;

  Title_Name: any;
  Startts: any;
  Endtms: any;

  Projectstartdate: string = "";
  projectEnddate: string;
  Status_project: string; days
  AllocatedHours: number;
  BlockNameProject1: any;
  SubmissionName: string;
  _Exec_BlockName: string = "";
  ngEmployeeDropdown: any = [];
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
Portfolio: any = [];
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






Task_type(value:number){
  this.meetingsViewOn=false;      // opens the meeting event task section and closes the meeting view section.
  this.MasterCode=(value===1)?this.projectInfo.Project_Code:[this.projectInfo.Project_Code];    // by default only the project opened is included in the select project field.
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
      $("#weekly_121").css("display", "none");
      $("#div_endDate").css("display", "none");
      $("#Monthly_121").css("display", "none");
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
      $('#subtaskid').css('display','block');
      $('#Guest_Name').css('display','none');
      $('#Location_Name').css('display','none');
      $('#Descrip_Name').css('display','none');
      $('#core_viw123').css('display','block');
      $('#core_viw121').css('display','none');
      $('#core_viw222').css('display','none');
      $('#core_Dms').css('display','none');
      $('#online-add').css('display','none');
    });
    this.GetSubtasklistfromProject(this.MasterCode);
  }
  else{
    this.ScheduleType = "Event";
   $(document).ready(()=>{
     $('#subtaskid').css('display','none');
        $('#Guest_Name').css('display','block');
        $('#Location_Name').css('display','block');
        $('#Descrip_Name').css('display','block');
        $('#core_viw121').css('display','block');
        $('#core_viw123').css('display','none');
        $('#core_viw222').css('display','block');
        $('#core_Dms').css('display','block');
       $('#online-add').css('display','block');


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

    this._calenderDto.EmpNo = this.Current_user_ID;

    this.CalenderService.NewGetScheduledtimejson(this._calenderDto).subscribe
      ((data) => {

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


  GetProjectAndsubtashDrpforCalender() {
    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {
        this.ProjectListArray = JSON.parse(data['Projectlist']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        const racisPeople=this.Project_List.map(item=>item.Emp_No);
        this._EmployeeListForDropdown.sort((el:any)=>{
        return racisPeople.includes(el.Emp_No)?-1:+1
         });    // to change the order : first racis people and then rest

        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);
        console.log(this.Portfoliolist_1, "Project List Array");

      });
  }


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

      this._calenderDto.Project_Code = MasterCode;
      this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
        ((data) => {
          // console.log(data);
          this.BlockNameProject1 = JSON.parse(data['Projectlist']);
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
      (<HTMLInputElement>document.getElementById("subtaskid")).style.display = "block";
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

  onFileChange_(event) {

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
  StartTimearr: any = [];
  _arrayObj: any;
  timingarryend: any = [];
  Time_End: any = [];
  timearr1: any = [];
  daysSelected: any[] = [];
  singleselectarry: any[] = [];
  preventSingleClick = false;
  timer: any;
  doubleclickdate: any;
  Avaliabletime: any[] = [];
  timeslotsavl: any[] = [];
  Timechangearry: any[] = [];
  isChecked: string
  selected: Date | null;
  SelectStartdate: any;
  Selectenddate: any;
  selectDay: any;
  selectdaytime: any[] = [];
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
    //Checked the day
    let objIndex = this.dayArr.findIndex((obj => obj.value == days.target.value));
    this.dayArr[objIndex].checked = days.target.checked;
    // this.Recurr_arr.push(days.target.value);
  }

  selectmonthlydays(day) {
    let objIndex = this.MonthArr.findIndex((obj => obj.value == day.target.value));
    this.MonthArr[objIndex].checked = day.target.checked;
    this.calendar.updateTodaysDate();
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
    this.Title_Name = this.projectInfo.Project_Name;
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

  OnSubmitSchedule() {
    debugger
    if (this.Title_Name == "" || this.Title_Name == null || this.Title_Name == undefined) {
      this._subname1 = true;
      return false;
    }
    if ((this.MasterCode == "" || this.MasterCode == null || this.MasterCode == undefined) && this.ScheduleType == "Task") {
      this._subname = true;
      return false;
    }
    var now = new Date();
    let timestamp = "";
    timestamp = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString()
      + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString(); // 2011

    this.EventNumber = timestamp;
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

    finalarray = this.daysSelectedII.filter(x => x.IsActive == true);


    if (finalarray.length > 0) {
      finalarray.forEach(element => {
        const date1: Date = new Date(this._StartDate);
        const date2: Date = new Date(this._SEndDate);

        const diffInMs: number = date2.getTime() - date1.getTime();

        const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        var date3 = moment(element.Date).format("YYYY-MM-DD").toString();
        var dd = moment(date3).add(diffInDays, 'days')


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
        element[vUser_Name] = this.ngEmployeeDropdown == undefined ? "" : this.ngEmployeeDropdown.map((e)=>e.Emp_No).toString();   //when mat chip

        var vLocation_Type = "Location_Type";
        element[vLocation_Type] = this.Location_Type == undefined ? "" : this.Location_Type;

        var vLocation_fulladd = "FullAddress_loc";
        element[vLocation_fulladd] = this.Locationfulladd == undefined ? "" : this.Locationfulladd;

        var vLocation_url = "Addressurl";
        element[vLocation_url] = this.Addressurl;

        var vOnlinelink = "Onlinelink";
        element[vOnlinelink] = this._onlinelink == undefined ? false : this._onlinelink;

        var vLink_Details = "Link_Details";
        element[vLink_Details] = this.Link_Details == undefined ? "" : this.Link_Details;

        var vDescription = "Description";
        element[vDescription] = this.Description_Type == undefined ? "" : this.Description_Type;

        var vSubtask = "Subtask";
        element[vSubtask] = this.Subtask == undefined ? "" : this.Subtask;

        var vEventNumber = "EventNumber";
        element[vEventNumber] = this.EventNumber;

        var vPortfolio_name = "Portfolio_name";
        element[vPortfolio_name] = this.Portfolio == undefined ? "" : this.Portfolio.map(p=>p.portfolio_id).toString();  // when mat-chip

        var vDMS_Name = "DMS_Name";
        element[vDMS_Name] = this.SelectDms == undefined ? "" : this.SelectDms.map(m=>m.MailId).toString();    //when mat chip

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
          this.Title_Name = this.projectInfo.Project_Name;
          this.ngEmployeeDropdown = [];
          this.Description_Type = null;
          this.MasterCode = [];
          this.Subtask = null;
          this.Startts = null;
          this.Endtms = null;
          this.St_date = null;
          this.Ed_date = null;
          this._SEndDate = null;
          this._SEndDate = moment().format("YYYY-MM-DD").toString();
          this.Locationfulladd = null;
          this._status = null;
          this.SelectDms = [];
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
          this.calendar.updateTodaysDate();
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








@ViewChildren(MatAutocompleteTrigger) autocompletes:QueryList<MatAutocompleteTrigger>;
isParticipantDrpDwnOpen:boolean=false;
isDMSMemoDrpDwnOpen:boolean=false;
isPortfolioDrpDwnOpen:boolean=false;
isProjectDrpDwnOpen:boolean=false;
 openAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.openPanel());
}

 closeAutocompleteDrpDwn(Acomp:string){
  const autoCompleteDrpDwn=this.autocompletes.find((item)=>item.autocomplete.ariaLabel===Acomp);
  requestAnimationFrame(()=>autoCompleteDrpDwn.closePanel());
}


onPrjSelected(e:any){
  const prjChoosed=this.ProjectListArray.find((p:any)=>p.Project_Code===e.option.value);
  if(prjChoosed){
       const index=this.MasterCode.indexOf(prjChoosed.Project_Code);
       if(index===-1){
          // if not present then add it
          this.MasterCode.push(prjChoosed.Project_Code);
       }
       else if(this.MasterCode[index]!=this.projectInfo.Project_Code){ //  if item choosed is already selected then remove it. but it should not be the default project.
        this.MasterCode.splice(index,1);
       }
  }
  this.openAutocompleteDrpDwn('ProjectDrpDwn');
}
 removeSelectedPrj(item){
  if(this.projectInfo.Project_Code!=item){   // cannot remove the default selected project.
    const index=this.MasterCode.indexOf(item);
    if(index!==-1)
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



onPortfolioSelected(e:any){
  const portfolioChoosed=this.Portfoliolist_1.find((p:any)=>p.portfolio_id===e.option.value);
  if(portfolioChoosed){
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




  onParticipantSelected(e: any) {
    const participantChoosed = this._EmployeeListForDropdown.find((c) => c.Emp_No === e.option.value);
    if (participantChoosed) {
      const index = this.ngEmployeeDropdown.indexOf(participantChoosed);
      if (index === -1) {
        // if not present then add it
        this.ngEmployeeDropdown.push(participantChoosed);
      }
      else { //  if item choosed is already selected then remove it.
        this.ngEmployeeDropdown.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('ParticipantDrpDwn');
}
removeSelectedParticipant(item){
    const index=this.ngEmployeeDropdown.indexOf(item);
    if(index!==-1){
      this.ngEmployeeDropdown.splice(index,1);
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


  // meeting section code end here



  // project hold section and release section start
  hold_remarks: string;
  Holddate: string;
  holdDate: any;
  minhold: any = new Date();
  maxhold: any = new Date();
  release_date: any = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  dateR = new FormControl(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
  
  onProject_Hold(id, Pcode) {
  
  if(this.Holddate&&this.hold_remarks){
       // if holddate and remarks are provided.
       this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
       this.objProjectDto.Project_holddate = this.Holddate;
       this.objProjectDto.Project_Code = Pcode;
       this.objProjectDto.Remarks = this.hold_remarks;
       this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {
        
         this._Message = data['message'];
         if (this._Message == 'Project Hold Updated') {
 
           if(this.currentActionView!==undefined)
           this._Message=this._Message.replace('Project','Action')
 
           this.notifyService.showSuccess(this._Message + " by " + this._fullname, "Success");
           this.closePrjHoldSideBar();
           this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
           this.getholdate();
           this.getRejectType();
           debugger
           if(this.currentActionView!==undefined){
             this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
             }else{
               this.GetActivityDetails();
 
             }
 
 
 
         }
       });
  }
  else 
   this.formFieldsRequired=true;   

  }



  orgValueChange1(val) {
    this.release_date = moment(val.value).format("MM/DD/YYYY");
  }



// Project / Action release.
  holdreleaseProject() {

    if(this.hold_remarks){
      // if remarks are provided.
      if(this.currentActionView===undefined){
        // project release
        if (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo) {
          debugger
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Release';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;
          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => { debugger
            this.closePrjReleaseSideBar();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project released by " + this._fullname, "Success");
              this.getProjectDetails(this.URL_ProjectCode);
              this.getRejectType();
            }
            else if (this._Message == '2' || this._Message == '0') {
              this.notifyService.showError("Project release failed", "Failed");
            }
          });
          console.log(this.approvalObj, "cancel")
        }
        else {
          this.closePrjReleaseSideBar();
          this.notifyService.showError("Access denied", "Failed")
        }


       }
      else{
      // action release

      if ([
        this.projectInfo.OwnerEmpNo,
        this.projectActionInfo[this.currentActionView].Team_Res,this.projectActionInfo[this.currentActionView].Project_Owner
      ].includes(this.Current_user_ID)){
        this.approvalObj.Project_Code = this.projectActionInfo[this.currentActionView].Project_Code;
        this.approvalObj.Request_type = 'Project Release';
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;
        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {

          this.closePrjReleaseSideBar();
          this._Message = (data['message']);
          if (this._Message == '1') {
            this.notifyService.showSuccess("Action released by " + this._fullname, "Success");
            this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
            this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Action release failed", "Failed");
          }
        });
      }
      else {
        this.closePrjReleaseSideBar();
        this.notifyService.showError("Access denied", "Failed")
      }
       }
    }
    else 
     this.formFieldsRequired=true;

  }

  updateReleaseDate() {

    if(this.release_date&&this.hold_remarks){
     // if release date and remarks both are provided 
      if (this.release_date == null || this.release_date == 'Invalid date') {
        this.notifyService.showError("Please enter valid date", "Failed");
        return false;
      }
      else {
        this.release_date = this.datepipe.transform(this.release_date, 'MM/dd/yyyy');
        this.holdDate = moment(this.release_date).format("DD-MM-YYYY")
        this.approvalObj.Project_Code = (this.currentActionView===undefined)?this.URL_ProjectCode:this.projectActionInfo[this.currentActionView].Project_Code;
        this.approvalObj.hold_date = this.release_date;
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;
        this.approvalservice.UpdateReleaseDate(this.approvalObj).subscribe((data) => {
          this._Message = (data['message']);
          if (this._Message == '1') {
            this.notifyService.showSuccess("Project release date updated", "Success");
            this.notifyService.showInfo("Project will be released on " + this.holdDate, "Note");
            this.getProjectDetails(this.projectInfo.Project_Code);
            this.getholdate();
            this.closePrjReleaseSideBar();
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Project release date not updated", "Failed");
          }
        });
      }

    }
    else 
    this.formFieldsRequired=true;

  }



  openPrjHoldSideBar() {
    document.getElementById("prj-hold-sidebar").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
  }
  closePrjHoldSideBar() {
    this.hold_remarks = '';
    this.Holddate = null;
    this.formFieldsRequired=false;
    document.getElementById("prj-hold-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
  }



  openPrjReleaseSideBar() {  
    document.getElementById("prj-release-sidebar").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
  }

  closePrjReleaseSideBar() {
    this.hold_remarks = '';
    this.Holddate = null;
    this.formFieldsRequired=false;
    document.getElementById("prj-release-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
  }

  // project hold section and release section end

  // Task submission section code start here

  Authority: string;
  ProjectBlock: string;
  ProjectName: string;

  OnStandardTaskSubmit() {
    $('#_file1').val('');
    $('#upload').html('Select a file');
    document.getElementById("mysideInfobar_ProjectsUpdate").classList.add("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    // document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
    // document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");

  }

  changeStandard() {
    $('#_file1').val('');
    $('#upload').html('Select a file');
    this.selectedFile = null;
    this._remarks = "";
    this.formFieldsRequired=false;
  }


  // project cancel section  start

  openPrjCancelSb() {
    document.getElementById("prj-cancel-sidebar").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
  }

  closePrjCancelSb() {
    this.hold_remarks = '';
    this.formFieldsRequired=false;
    document.getElementById("prj-cancel-sidebar").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
  }


  updateProjectCancel() {

  if(this.hold_remarks){

    Swal.fire({
      title: 'Project Cancel',
      html: 'Are you sure to cancel the project "<strong>' + this.projectInfo.Project_Name + '</strong>"?<br>Note: The cancelled project will be deactivated.',
      // icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
      if (response.value) {
        if (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo) {
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Cancel';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;

          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
            this.closePrjCancelSb();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project cancel request sent to the project owner", "Success");
              this.getProjectDetails(this.URL_ProjectCode);
              this.getapproval_actiondetails();
            }
            else if (this._Message == '2' || this._Message == '0') {
              this.notifyService.showError("Project cancel failed", "Failed");
            }
          });
          // this.Clear_Feilds();
          console.log(this.approvalObj, "cancel")
        }
        else if (this.Current_user_ID == this.projectInfo.OwnerEmpNo || this.isHierarchy == true) {
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Cancel';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;

          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
            this.closePrjCancelSb();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project cancelled by " + this._fullname, "Success");
              this.getProjectDetails(this.URL_ProjectCode);
            }
            else if (this._Message == '2' || this._Message == '0') {
              this.notifyService.showError("Project cancel failed", "Failed");
            }
          });
          // this.Clear_Feilds();
          console.log(this.approvalObj, "cancel")
        }
        else {
          this.closePrjCancelSb();
          this.notifyService.showError("Access denied", "Failed")
        }

      } else if (response.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Project not cancelled',
          'error'
        )
        this.closePrjCancelSb();
      }
    });

  }
  else 
   this.formFieldsRequired=true;

  }

  // project cancel section end


  achieveStandard() {
    if(this._remarks==''||this.selectedFile==null){
        this.formFieldsRequired=true;
        return;
    }
     



    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.Authority);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    fd.append("Emp_No", this.Current_user_ID);
    fd.append("Project_Name", this.projectInfo.Project_Name);

    console.log(this._MasterCode, this._remarks, this.selectedFile, this.Current_user_ID, "fd");

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
        this.getapprovalStats();
        this._projectSummary.GetProjectsByUserName('RACIS Projects');
      });
  }

  notachieveStandard() {
    if(this._remarks==''){
      this.formFieldsRequired=true;  
      return;
    }


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

      });
      this.getapprovalStats();
      this._projectSummary.GetProjectsByUserName('RACIS Projects');
  }

  //  $('#_file1').val('');
  // Task submission section code End here
  fruitCtrl = new FormControl();
  selectedEmployees: any = [];
  selectedEmpIds: any = [];


  remove(employee: any): void {
    const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === employee.Emp_No);
    this.isSelection = false;
    if (index !== -1) {
      // Remove the employee from the selectedEmployees array
      this.selectedEmployees.splice(index, 1);
      this.selectedEmpIds.splice(index, 1);

      console.log(this.selectedEmpIds, "selected supprem")
    }

  // Optionally, you can uncheck the checkbox in the Project_List array
  employee.checked = false;
  this.closeAutocompleteDrpDwn('supportDrpDwn'); // close the panel

  }

isSelection: boolean =false;
isSupportDrpDwnOpen:boolean=false;

  selectedChip(event: MatAutocompleteSelectedEvent): void {
    this._keeppanelopen();
    const selectedEmployee = this.nonRacisList.find((fruit) => fruit.Emp_No === event.option.value);
    if (selectedEmployee) {
      const index = this.selectedEmployees.findIndex((emp) => emp.Emp_No === selectedEmployee.Emp_No);

      if (index === -1) {
        // Employee not found in the selected array, add it
        this.selectedEmployees.push(selectedEmployee);
        this.selectedEmpIds.push(selectedEmployee.Emp_No);
      } else {
        // Employee found in the selected array, remove it
        this.selectedEmployees.splice(index, 1);
        this.selectedEmpIds.splice(index, 1);
      }
    }

    this.fruitInput.nativeElement.value = '';
    this.filteredEmployees = this.nonRacisList;
    console.log(this.selectedEmpIds, "selected")
  }

  isSelectedChip(employee: any): boolean {
    return this.selectedEmployees.some((emp) => emp.Emp_No === employee.Emp_No);
  }

  filterEmployees(input: string): void {
    this.isSelection = true;
    this.filteredEmployees = this.nonRacisList.filter((employee) =>
      employee.NonRACIS.toLowerCase().includes(input.toLowerCase())
    );
  }


_keeppanelopen(){
  this.filteredEmployees = this.nonRacisList;
  this.isSelection=true;
  this.openAutocompleteDrpDwn('supportDrpDwn');// open the panel
}

closePanel(){
  this.isSelection=false;
  this.fruitInput.nativeElement.value = '';
  this.closeAutocompleteDrpDwn('supportDrpDwn'); // close the panel
}


  onProject_updateSupport() {
  
    const commaSeparatedString = this.selectedEmpIds.join(', ');

    if (this.selectedEmployees != null&&this.selectedEmployees.length>0) {
      this.service._NewProjectSupportService(this.URL_ProjectCode, this.Current_user_ID, commaSeparatedString, null).subscribe(data => {
        this._Message = data['message'];

        if (this._Message == '2') {
          this.notifyService.showError("Project Support team not updated", "Failed");
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project Support team updated successfully", "Success");

        }
        this.GetPeopleDatils();
        this.selectedEmpIds.length = 0;
        this.selectedEmployees.length = 0;
        this.closePanel();
      });
    }
    else {
      this.notifyService.showInfo("support team member cannot be empty", "Please try again with correct value");
    }
  }

  isPortDrpDwnOpen: any

  onPrtClicked(e: any) {
    const prtChoosed = this._portfoliosList.find((p) => p.Portfolio_ID === e.option.value)
    if (prtChoosed) {
      const index = this.ngDropdwonPort.indexOf(prtChoosed)
      if (index === -1) {
        this.ngDropdwonPort.push(prtChoosed)
      } else {
        this.ngDropdwonPort.splice(index, 1);
      }
    }
    requestAnimationFrame(() => this.customTrigger.openPanel());
  }
  // new dms section code:

  isDMSDrpDwnOpen: boolean = false;    // initially dms dropdown is in closed state.










  onMemoClicked(e: any) {
    const memoChoosed = this.memosOptions.find((c) => c.MailId === e.option.value)
    if (memoChoosed) {
      const index = this.selectedMemos.indexOf(memoChoosed)
      if (index === -1) {
        // if not present in the selectedcourses then add it
           this.selectedMemos.push(memoChoosed);
       }
       else{ //  if course choosed is already selected then remove it.
           this.selectedMemos.splice(index,1);
       }
   }
   requestAnimationFrame(()=>this.customTrigger.openPanel());
}



removeSelectedMemo(item){
    const index=this.selectedMemos.indexOf(item);
    if(index!==-1){
      this.selectedMemos.splice(index,1);
    }
}

  closeMemoDrpDwn() {
    this.isDMSDrpDwnOpen = false;
    requestAnimationFrame(() => this.customTrigger.closePanel()); // close the panel
  }


  openMemoDrpDwn() {
    this.isDMSDrpDwnOpen = true;
    requestAnimationFrame(() => this.customTrigger.openPanel()); // open the panel
  }




  removeSelectedPrt(item) {
    const index = this.ngDropdwonPort.indexOf(item);
    if (index !== -1) {
      this.ngDropdwonPort.splice(index, 1);
    }
  }



  closePortDrpDwn() {
    this.isPortDrpDwnOpen = false;
    requestAnimationFrame(() => this.customTrigger.closePanel())
  }

  openPortDrpDwn() {
    this.isPortDrpDwnOpen = true;
    requestAnimationFrame(() => this.customTrigger.openPanel())
  }

  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }








// project action search and filter start here
actionsNotFound:boolean=false;
filteredPrjAction:any=[];
filterConfigChanged:boolean=false;
filterConfig:{filterby:string,sortby:string}={
         filterby:'All',
         sortby:'All'
};
onFilterConfigChanged({filterBy,sortBy}){
  this.filterConfig.filterby=filterBy;
  this.filterConfig.sortby=sortBy;
  this.filterConfigChanged=true;
  this.filteredPrjAction=this.getFilteredPrjActions(this.filterConfig.filterby,this.filterConfig.sortby);
}

clearFilterConfigs(){
  this.filterConfig.filterby='All';
  this.filterConfig.sortby='All';
  this.filteredPrjAction=this.getFilteredPrjActions(this.filterConfig.filterby,this.filterConfig.sortby);
  this.filterConfigChanged=false;
}

getFilteredPrjActions(filterby:string='All',sortby:string='All'){
if(['001','002'].includes(this.projectInfo.Project_Block)){

  let arr=this.projectActionInfo;
  if(!(filterby==='All'&&sortby==='All'))
  {
    if(sortby!=='All'){
     if(sortby!=='Assigned By me'){  // when sortby is 'md waseem akram','aquib shabaz' .....
      arr=arr.filter((action)=>{
        return action.Team_Res===sortby;
       });
     }
     else{  // when sortby is 'Assigned By me'
        arr=arr.filter((action)=>{
              return action.AssignedbyEmpno===this.Current_user_ID;
        });
     }
    }

    if(filterby!=='All'){
      arr=arr.filter((action)=>{
         return action.Status===filterby;
       })
    }
  }
  return arr;

}

return [];
}

isActionAvailable(e){
   this.actionsNotFound=!(this.filteredPrjAction.some((action)=>{
            return action.Project_Name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim());
   }));
}


// project action search and filter end here.




///////////////////Comments start//////////////////////
_CommentsList: any;
commentsLength: number;
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


/////////////////Comments end////////////////////////


LoadDocument1(iscloud: boolean, filename: string, url1: string, type: string, submitby: string) {
  debugger
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


///////////////////attchement end//////////////////////

/////////////////////task attachemnets start///////////////////////////////////////
openPDF_task_att(standardid: number, emp_no: string, cloud: boolean, repDate: Date, proofDoc: string, type: string,submitby: string) {
debugger
  repDate = new Date(repDate);
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

/////////////////////task attachemnets start///////////////////////////////////////



getShorterName(name:string|undefined){
  if(name)
   return name.split(' ').map(wrd=>wrd[0]).slice(0,2).join('')
  return '';
}






// new project release code start
activity: any;
lastactivity: any;
send_from: any;
rejectactivity: any;


openNewPrjReleaseSideBar() { debugger
  document.getElementById("new-prj-release-sidebar").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
}


closeNewPrjReleaseSideBar() {
   this.hold_remarks = '';
  document.getElementById("new-prj-release-sidebar").classList.remove("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("newdetails").classList.remove("position-fixed");
}

getRejectType() {
  this.approvalObj.Project_Code = this.URL_ProjectCode;
  this.approvalservice.GetRejecttype(this.approvalObj).subscribe((data) => {
    this.activity = data[0]["activity"];
    this.send_from = data[0]["sendFrom"];
    this.rejectactivity = data[0]["rejectactivity"];
    this.lastactivity = JSON.parse(data[0]["lastactivity"]);
    console.log('activity:',this.activity,'last activity:', this.lastactivity);
  });
}

releasenewProject(){

  if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo||this.Current_user_ID==this.projectInfo.OwnerEmpNo){
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalObj.Request_type = 'New Project Reject Release';
    this.approvalObj.Emp_no = this.Current_user_ID;
    this.approvalObj.Remarks = this.hold_remarks;

    this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
      this.closeNewPrjReleaseSideBar();
      this._Message = (data['message']);
      if (this._Message == '1') {
        this.notifyService.showSuccess("New Project reject release request sent to the project owner", "Success");
        this.getProjectDetails(this.URL_ProjectCode);
        this.getRejectType();
        this.getapproval_actiondetails();


        if(this.Current_user_ID==this.projectInfo.OwnerEmpNo)
        { 
          this.isApprovalSection=true; // back to initial value
          this.isTextAreaVisible=false;    // back to initial value
          this.getapprovalStats();
        }



      }
      else if (this._Message == '2' || this._Message == '0') {
        this.notifyService.showError("Project release failed", "Failed");
      }
    });
  // this.Clear_Feilds();
  console.log(this.approvalObj,"cancel")
}
else{
  // this.close_space();
  this.notifyService.showError("Access denied","Failed")
}
}



// new project release end here

displaymessage(){
  if(this.projectInfo.Status=='Completion Under Approval'){
    this.notifyService.showInfo("Please reject the project first and then you can change the project responsible as the project is in completion under approval","Not editable");
  }
  else{
    this.notifyService.showInfo("Please complete the approval process and change the project responsible","Not editable");
  }
}

displaymessagemain(){
  this.notifyService.showInfo("Project Owner cannot be changed","Not editable");
}


formatTimes(time: string): string {
  
  const [hours, minutes] = time.split(':'); 
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));

  const options :any = { hour: 'numeric', minute: 'numeric', hour12: true };
  const x=date.toLocaleTimeString('en-US', options);
  return x;
}


convertDateFormat(dateString: string): string {
  if (!dateString) return ''; // Handle empty or null values
  const dateParts = dateString.split(' ');
  const month = dateParts[0];
  const day = dateParts[1];
  const year = dateParts[2];
  return `${day}-${this.getMonthNumber(month)}-${year}`;
}

getMonthNumber(month: string): string {
  const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return (monthAbbreviations.indexOf(month) + 1).toString().padStart(2, '0');
}






// open Graph screen start

openFullGraph(){
  $('#recent-activities-section').addClass('d-none');

  $('#bar-and-pie').removeClass('col-lg-6');
  $('#bar-and-pie').addClass('col-lg');

  $('#Pie-chart').removeClass('d-none');

  $('.CHARTS').css('grid-template-columns', '1fr 1fr');

}

closeFullGraph(){
  $('#recent-activities-section').removeClass('d-none');
  $('#bar-and-pie').removeClass('col-lg');
  $('#bar-and-pie').addClass('col-lg-6');
  $('#Pie-chart').addClass('d-none');
  $('.CHARTS').css('grid-template-columns','1fr');
}
// open Graph screen end






// People Approve request  start
approveUserRequest(requestNo:number){
  const {Submitted_By,Remarks,Request_type,Request_date}=this.approverequestlist[requestNo];



  const userReqObj={
    Project_Code:this.projectInfo.Project_Code,
    Project_Code1:this.projectInfo.Project_Code,
    Category:this.projectInfo.Category,
    Duration: this.projectInfo.Duration,

    DurationTime: "0",
    Project_Owner:this.projectInfo.Owner,
    Team_Res: this.projectInfo.Responsible,
    Delaydays:this.projectInfo.Delaydays,
    DeadLine:this.projectInfo.EndDate,
    Project_Description:this.projectInfo.Project_Description,
    Responsible:this.projectInfo.Responsible,
    Exec_BlockName:this.projectInfo.Project_Type,
    Project_Block:this.projectInfo.Project_Block,
    RejectType: " ",
    Project_Name:this.projectInfo.Project_Name,




    Req_Coments:Remarks,
    Remarks:Remarks,
    SubmittedTo: this.projectInfo.Owner,
    SubmittedBy:Submitted_By,
    Emp_No: '',
    Req_Type: Request_type,
    Type: Request_type,
    Rec_Date:Request_date,

  }
  this.approvalservice.NewUpdateAcceptApprovalsService([userReqObj]).subscribe(res=>{
         console.log("+>",res);
  });

}


// People Approve request end


















//  Full Graph code start

graphOption:string='PROJECT';
graphOptionChanged:boolean=false;
getActivitiesOfDates(emp,...dates){
// input date format must be: 'yyyy-MM-dd'
 const result=dates.map((date)=>({date:this.datepipe.transform(date,'dd-MM-yyyy'),total:0}));
 this.Activity_List.forEach((actv)=>{
          const index=dates.indexOf(actv.ModifiedDate);
          if(index!==-1){
            if(emp==='PROJECT')
            result[index].total+=1;
            else if(emp===actv.Modifiedby)
            result[index].total+=1;
          }
    });
  return result;
}


getActivitiesOf(d){
  let _Activity_List=this.Activity_List;
  if(this.graphOption!='PROJECT')
  {
    _Activity_List=_Activity_List.filter(item=>item.Modifiedby===this.graphOption);
  }
     const x=_Activity_List.filter(activity=>activity.ModifiedDate==d);
     console.log(x);
     return x;
}



activitiesOnthat:any=[];
selectedactvy:string|undefined;


showFullGraph(){
  debugger
  let alldates=this.Activity_List.map(actvy=>actvy.ModifiedDate);    //  ['2024-02-02','2024-02-03','2024-02-02','2023-08-11']
  alldates=Array.from(new Set(alldates)).reverse();    // ['2023-08-11','2024-02-02','2024-02-03']   distinct and reverse

  const actvies=this.getActivitiesOfDates(this.graphOption,...alldates);       //[{date:'2023-08-11',total:4},{date:'2024-02-02',total:8} ...]
  console.log("all graph line points :",actvies);

  this.loadActivitiesByDate(alldates[alldates.length-1]);    // show recent activity

  const dataSource = {
    chart: {
      caption: "Activities Over Time",
      compactdatamode: "1",
      dataseparator: "|",
      yaxisname: "Activities",
      snumberprefix: "",
      setadaptiveymin: "0",
      formatnumberscale: "0",
      sformatnumberscale: "1",
      linethickness: "4",
      showsecondarylimits: "0",
      bgcolor: "#ffffff",  // white background color
      basefontcolor: "#333", // Base font color
      canvasbgalpha: "0", // Make the canvas background fully transparent
      showplotborder: "1", // Show plot border
      plotbordercolor: "#ddd", // Plot border color
      showalternatehgridcolor: "0", // Disable alternate horizontal grid color
      showplotshadow: "0", // Disable plot shadow
      showvalues: "0", // Hide data values on the plot
      theme: "fusion", // Use Fusion theme for modern styling
      multiCanvas: "false",
      scrollheight: "4",
      scrollColor: "#f9f9f9",


    },
    categories: [
      {
        category: alldates.join('|')     // '2022-01-20'|'2021-05-01'|'2024-08-11'....
      }
    ],

    dataset: [
      {
        seriesname: this.graphOption,
        data: actvies.map(n => n.total).join('|'),  // 2|5|8|2|3|4|5|5|5|8 ....
        color: "#6388e3" // Set line color
      }
    ]
  };

  
  FusionCharts.ready(()=> {
    var myChart = new FusionCharts({
      type: "zoomline",
      renderAt: "full-graph",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();


    myChart.addEventListener('dataplotClick',(e)=>{
       console.log(e.data.categoryLabel,e.data.dataValue);
       this.loadActivitiesByDate(e.data.categoryLabel);
    });  
   
    // this is for remove fusion chart watermark label from the graph.
    myChart.addEventListener('rendered',()=>{
      setTimeout(()=>{
        const x:any=document.querySelectorAll('#full-graph .fusioncharts-container svg>g[class^="raphael"]');
        x[1].style.display='none';
      },10);
    });   
   // this is for remove fusion chart watermark label from the graph.



  });

 
  
}

onGraphOptionChanged(option:string){
    this.activitiesOnthat=[];
    this.selectedactvy=undefined;
    this.graphOption=option;
    this.showFullGraph();
    this.graphOptionChanged=true;
   
}

loadActivitiesByDate(d){
  this.activitiesOnthat=this.getActivitiesOf(d);   console.log("activities on that: ",this.activitiesOnthat);
  const currentDt=new Date();
  this.selectedactvy=d==currentDt?'TODAY':d;
}






































//  Full Graph code end

// approval_btn(){
//   alert('approval accepted')
// }

// trackbyfuncton(index, item){
//   if(!item) return null;
//   return item.MailId;
// }





// action cancelled start


cancelAction(index) {

  Swal.fire({
    title: 'Action Cancel',
    html: 'Are you sure to cancel the Action "<strong>' + this.projectActionInfo[index].Project_Name + '</strong>"?<br>Note: The cancelled Action will be deactivated.',
    // icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((response: any) => {
    if (response.value) {



    if([this.projectActionInfo[index].Project_Owner,this.projectInfo.OwnerEmpNo,this.isHierarchy].includes(this.Current_user_ID)){
        // if user is project owner, action owner or is in heirarchy.
        this.approvalObj.Project_Code = this.projectActionInfo[index].Project_Code;
        this.approvalObj.Request_type = 'Project Cancel';
        this.approvalObj.Emp_no = this.Current_user_ID;
        this.approvalObj.Remarks = this.hold_remarks;

        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
          this.closePrjCancelSb();
          this._Message = (data['message']);
          if (this._Message == '1') {
            this.notifyService.showSuccess("Action cancelled by " + this._fullname, "Success");
            this.getProjectDetails(this.URL_ProjectCode);
          }
          else if (this._Message == '2' || this._Message == '0') {
            this.notifyService.showError("Project cancel failed", "Failed");
          }
        });

    }
    else{
      this.closePrjCancelSb();
      this.notifyService.showError("Access denied", "Failed")
    }




      // if (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo) {


      //   this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
      //     this.closePrjCancelSb();
      //     this._Message = (data['message']);
      //     if (this._Message == '1') {
      //       this.notifyService.showSuccess("Project cancel request sent to the project owner", "Success");
      //       this.getProjectDetails(this.URL_ProjectCode);
      //       this.getapproval_actiondetails();
      //     }
      //     else if (this._Message == '2' || this._Message == '0') {
      //       this.notifyService.showError("Project cancel failed", "Failed");
      //     }
      //   });
      //   // this.Clear_Feilds();
      //   console.log(this.approvalObj, "cancel")
      // }
      // else if (this.Current_user_ID == this.projectInfo.OwnerEmpNo || this.isHierarchy == true) {



      // }
      // else {

      // }


    } else if (response.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Action not cancelled',
        'error'
      )
      this.closePrjCancelSb();
    }
  });


}

// action cancelled end





// submit 'not started' project to project owner for approval start.

submitPrjApprv2Owner(){

if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo){
  if(this.projectActionInfo&&this.projectActionInfo.length>0){
    this.ProjDto=new ProjectDetailsDTO();

    Swal.fire({
      title: 'Submit Project',
      html: `Are you sure to Submit this Project : <strong><q>${this.projectInfo.Project_Name}</q></strong> to <u>${this.projectInfo.Owner}</u> for Approval?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((response: any) => {
        if(response.isConfirmed){
// submit project
          this.ProjDto.Emp_No=this.Current_user_ID;
          this.ProjDto.isTemplate=false;
          this.ProjDto.Project_Code=this.projectInfo.Project_Code;
          this.ProjDto.Remarks=null;

          this.createProjectService.NewUpdateNewProjectApproval(this.ProjDto).subscribe((res:any)=>{
              if(res&&res.message==='Success'){
                this.notifyService.showSuccess("Project is send to Project Owner :"+this.projectInfo.Owner+' for Approval',"Success");
                this.getProjectDetails(this.URL_ProjectCode);
              }
              else
              this.notifyService.showError('something went wrong!','Failed');


          });
// submit project
        } })

  }
  else{
    Swal.fire(
      'Action Required',
      'Please provide atleast one action to submit the project.',
      'error'
    );
  }
}
else{
console.log('you are not allowed to submit this project.')
}

}

// submit 'not started' project to project owner for approval end.






// actions with 0 allc hrs start.
showActionsWith0AlcHrs(){
this.filteredPrjAction=this.projectActionInfo.filter(item=>Number.parseInt(item.AllocatedHours)===0);
}



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



//  save meeting as draft start.
Insert_indraft() { debugger
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
    (data => { debugger
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


// save meeting as draft end.







// std task apr and reject code new start.


rejectAllStdTaskAprvs(){   
  if (this.selectedType == '3') {
    if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
      this.noRejectType = true;
      this.notifyService.showError("Please select Reject Type", "Failed");
      return false;
    }
    else {
    
    

    let selectedStdApprovals=this.standardjson.filter(item=>this.selectedStdAprvs.includes(item.SNo));
    selectedStdApprovals=selectedStdApprovals.map(item=>({
              SNo: item.SNo,
              Type: item.Type,
              ReportType: item.ReportType,
              RejectType: item.RejectType,
              sendFrom: item.sendFrom,
              Project_Code: item.Project_Code,
              Remarks: item.Remarks,
              Rec_Date: item.Rec_Date
    }));
      selectedStdApprovals.forEach(element => {
        element.Remarks = this.comments;
        element.RejectType = this.rejectType;
      });

      this.approvalservice.NewUpdateSingleRejectApprovalsService(selectedStdApprovals).
        subscribe((data) => {  
          this.notifyService.showSuccess("Approvals Rejected successfully by - " + this._fullname, "Success");

          if(this.standardjson.length-this.selectedStdAprvs.length!==0){
              this.backmainapproval();
          }  // back to approvals list.
          
          
          this.getapprovalStats();
          this.getProjectDetails(this.URL_ProjectCode);
          this.getRejectType();
          


        });




    }
  }
}


// std task apr and reject code new end.


// meeting recall start

linkMeetingToProject(mtgScheduleid:any){

  
  // this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  // this.obj_CalenderDTO.Project_Code=obj.Project_Code;
  // this.obj_CalenderDTO.flagid=obj.flagid;





  this._calenderDto = new CalenderDTO;

  this._calenderDto.Schedule_ID=mtgScheduleid;
  this._calenderDto.Emp_No=this.Current_user_ID;
  this._calenderDto.flagid=1;
  this._calenderDto.Project_Code=this.URL_ProjectCode;
     this.CalenderService.Newinsertproject_meetingreport(this._calenderDto).subscribe(res=>{
        console.log("after linking:",res);
     });
}







// meeting recall end


}


