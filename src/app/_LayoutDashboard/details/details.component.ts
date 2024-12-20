import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';
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
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { MatCalendar} from '@angular/material/datepicker';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable, Subscription } from 'rxjs';


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
import * as ApexCharts from 'apexcharts';

declare var FusionCharts: any;

// declare const ApexCharts:any;





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
  isClassAdded: boolean = false;
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
  selfAssignedActns:any=[];
  pendingActns4Aprvls:any=[];
  totalActionsWith0hrs:number=0;
  totalSelfAssignedActns:number=0;
  totalPActns4Aprvls:number=0;
  actionsAssignedByMe:number=0;


  TOTAL_ACTIONS_IN_PROCESS: number = 0;
  TOTAL_ACTIONS_IN_DELAY: number = 0;
  TOTAL_ACTIONS_DONE: number = 0;
  TOTAL_ACTIONS_UNDER_APPROVAL: number = 0;
  TOTAL_ACTIONS_REJECTED: number = 0;
  TOTAL_ACTIONS_IN_CUA: number = 0;
  TOTAL_ACTIONS_IN_FUA: number = 0;
  TOTAL_ACTIONS_IN_HOLD: number = 0;
  TOTAL_ACTIONS_IN_CNUA:number=0;
  TOTAL_ACTIONS: number = 0;





  currentActionView: number | undefined;
  URL_ProjectCode: any;
  Current_user_ID: string;
  dropdownSettings_Memo: { singleSelection: boolean, idField: string, textField: string, selectAllText: string, unSelectAllText: string, itemsShowLimit: number, allowSearchFilter: boolean } | undefined;
  selectedMemos: { MailId: number, Subject: string }[] = new Array();

  requestDetails: any;
  requestType: any;
  isPrjContainAprvls:boolean=false;  // to control pending approval label located in prj status section.
  forwardType: string;
  requestDate: any;
  requestDeadline: any;
  approvalEmpId: any;
  requestComments: any;
  newcomments:any;
  new_deadline: any;
  newResponsible: any;
  previouscoments: boolean = false;
  singleapporval_json: any[] = [];
  revert_json: any;
  transfer_json: any;
  prviousCommentsList: any;
  initials1: any;
  Submitted_By: string;
  AuditRequestBY:string;
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
  taskDelayedby:number|undefined;
  projectAuditor:any;
  loading: boolean = false;
  actionowner_dropdown:any;
  actionresponsible_dropdown:any;
  isNewOwnerOk:boolean=false;
  pageContentType:'PROJECT_DETAILS'|'ACTION_DETAILS'='PROJECT_DETAILS';  // which content the page is display project or action. by default project.
  noActvySinceCreation:boolean=false;
  noActvy4NDays:number=-1;
  prjResHasActions:boolean=false;   // project responsible has actions or not.
  actnsWithoutProgress:any[]=[];   // actions with no progress since their start date in the project. 




  @ViewChild('auto') autoComplete: MatAutocomplete;
  @ViewChild(MatAutocompleteTrigger) autoCompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  @ViewChild('fruitInput') fruitInput: ElementRef;




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
    private createProjectService:CreateprojectService,
    public cdr:ChangeDetectorRef

  ) {

    this.ObjSubTaskDTO = new SubTaskDTO();
    this.objProjectDto = new ProjectDetailsDTO();
    this.objPortfolioDto = new PortfolioDTO();
    this.approvalObj = new ApprovalDTO();
  }









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
  charts() { }
  private subscription: Subscription;

  ngOnInit(): void {
    // this.ProjectTypes = "Standard task"
    this.MinLastNameLength = true;
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
    this.getstandardapprovalStats();
    this.getusername();
    this.gethierarchy();
    this.showActionDetails(undefined);     // initially show the Project details
    this.getapproval_actiondetails();      // get main project approval state.
    this.getholdate();
    this.GetPeopleDatils();
    this.timearrays();
    this.getRejectType();
    this.getusermeetings();
    // this.GetProjectAndsubtashDrpforCalender()

    this.disablePreviousDate.setDate(this.disablePreviousDate.getDate() - 1);
    this.disablePreviousDate.setHours(0,0,0,0);
    this.DisablePrevious.setDate(this.DisablePrevious.getDate());
    // $(document).on('change', '.custom-file-input', function (event) {
    //   $(this).next('.custom-file-label').html(event.target.files[0].name);
    // });
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
  ProjectTypes:any



  prjBARCHART:any;
  prjPIECHART:any;

//   drawStatistics() {
// //standard graph cal start
// let x=0;
// let AL=0;
// if(['003','008'].includes(this.projectInfo.Project_Block)){

//   let d1=new Date(this.projectInfo.StartDate);  // PROJECT STARTDATE.
//   let d2=new Date();                           // TODAY DATE.
//   x=0;
//   switch(this.projectInfo.SubmissionId){
//         case 1:{ x=moment(d1).diff(d2,'days');    };break;
//         case 2:{ x=moment(d1).diff(d2,'weeks');    };break;
//         case 3:{ x=moment(d1).diff(d2,'months');    };break;
//         case 4:{ x=moment(d1).diff(d2,'quarters');   };break;
//         case 5:{      };break;
//         case 6:{ x=moment(d1).diff(d2,'years');     };break;
//   }


//   let timestr=this.projectInfo.StandardAllocatedHours;
//   let t=timestr.split(':');
//   let prjAlHrs=+(Number.parseInt(t[0].trim())+'.'+Number.parseInt(t[1].trim()));
//   AL=+(prjAlHrs*Math.abs(x)).toFixed(2);

// }
// //standard graph cal end

// if(this.tlTotalHours){

// // 1. bar chart.
// var options = {
//   series: [{
//     data: ['001', '002','011'].includes(this.projectInfo.Project_Block) ? [+this.projectInfo.AllocatedHours, this.tlTotalHours, ((+this.projectInfo.AllocatedHours) - this.tlTotalHours).toFixed(2)]
//       : [AL, this.tlTotalHours, (AL - this.tlTotalHours).toFixed(2)]
//   }],
//   chart: {
//     type: 'bar',
//     height: 350
//   },
//   plotOptions: {
//     bar: {
//       distributed: true,
//       horizontal: false,
//       columnWidth: '62%',
//     }
//   },
//   dataLabels: {
//     enabled: true,
//     style:{
//        colors:['#3a81c9','#3e6be0','#303031'],
//        fontFamily:'Lucida Sans Unicode'
//     },
//     formatter: function (v) {
//       return v + ' hrs';
//     }
//   },
//   yaxis: {
//     title: {
//       text: ''
//     },
//     labels: {}
//   },
//   xaxis: {
//     categories: ['Allocated', 'Used', 'Remaining'],
//     labels: {
//       rotate: -90
//     }
//   },
//   colors:['003', '008'].includes(this.projectInfo.Project_Block)?
//          ['#7dbeff', '#7da1ff',(AL-this.tlTotalHours)<0?'#757575':'#dbe1e4']:
//          ['#7dbeff', '#7da1ff',((+this.projectInfo.AllocatedHours) - this.tlTotalHours)<0?'#757575':'#dbe1e4']

// };

// if (this.prjBARCHART)
//   this.prjBARCHART.destroy();

// this.prjBARCHART = new ApexCharts(document.querySelector("#Bar-chart"), options);
// this.prjBARCHART.render();

// // 2. pie chart.
// let usedhr=this.tlTotalHours;
// let remaininghr=['003','008'].includes(this.projectInfo.Project_Block)?(AL-this.tlTotalHours):(Number.parseFloat(this.projectInfo.AllocatedHours)-this.tlTotalHours);

// if(remaininghr<0){
//   remaininghr=0;
//   usedhr=this.projectInfo.AllocatedHours;
// }

// var options1 = {
//   series: [usedhr,remaininghr],
//   chart: {
//     width: 480,
//     type: 'donut',
//     dropShadow: {
//       enabled: true,
//       color: '#b1b1b1',
//       top: 0,
//       left: 0,
//       blur: 1,
//       opacity: 0.5
//     }
//   },
//   stroke: {
//     width: 0,
//   },
//   plotOptions: {
//     pie: {
//       donut: {
//         labels: {
//           show: true,
//           total: {
//             showAlways: true,
//             show: true
//           }
//         }
//       }
//     }
//   },
//   labels: ["Used Hours", "Remaining Hours"],
//   dataLabels: {
//    style:{
//      colors:['#2b4790','#616262'],
//      fontWeight:'normal',
//    },

//   },
//   states: {
//     hover: {
//       filter: 'none'
//     }
//   },
//   theme: {
//     palette: 'palette2'
//   },
//   colors: ['#8faeff', '#dbe1e4'],
//   title: {
//     text: "Hours used",
//     style: {
//       fontSize: '10px',
//       color: '#6b6b6b',
//       fontFamily: 'Lucida Sans Unicode',
//       fontWeight: 'bold'

//     }
//   },
//   responsive: [{
//     breakpoint: 480,
//     options: {
//       chart: {
//         width: 200
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   }]
// };
// if(this.prjPIECHART)
// this.prjPIECHART.destroy();
// this.prjPIECHART = new ApexCharts(document.querySelector("#Pie-chart"), options1);
// this.prjPIECHART.render();


// }else{
//     setTimeout(()=>this.drawStatistics(),2000);   // if tlTotalHours is undefined then run drawStatistics when tlTotalHours is defined.
// }

//   }

  darOfEmpl=[];

  drawStatisticsNew(){
    if(this.currentActionView===undefined){

         // 1. bar chart start.

            this.projectMoreDetailsService.getProjectTimeLine(this.projectInfo.Project_Code, "3", this.Current_user_ID).subscribe((res: any) => {
              const tml = JSON.parse(res[0].Timeline_List);
              console.log("timeline data here11111:", tml);
              this.darOfEmpl=tml.map((ob)=>{
                  return { member:ob.Value, totalTimeline:(+ob.TotalDuration).toFixed(2)}
              });
              this.darOfEmpl.sort((a,b)=>b.totalTimeline-a.totalTimeline);
            });

            let tlTotalHrs:number = this.projectInfo.TotalHours;



            let includeExpectedhrs:boolean=false;
            let alloc4Ndays=0;
            const crd=new Date();                                          // current date.
            const ped=new Date(this.projectInfo.EndDate.split('T')[0]);    // project end date.
            const psd=new Date(this.projectInfo.StartDate.split('T')[0]);  // project start date.

            if(['Completed','New Project Rejected','Cancelled'].includes(this.projectInfo.Status)==false&&crd>=psd&&crd<=ped){
                const K=this.projectInfo.AllocatedHours/(this.projectInfo.Duration+1);
                const N=(Math.abs(moment(psd).diff(crd,'days'))+1);
                alloc4Ndays=N*K;
                alloc4Ndays=(+alloc4Ndays.toFixed(2));
                includeExpectedhrs=true;
            }


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


              let r_Hrs=['001', '002','011'].includes(this.projectInfo.Project_Block)?((+this.projectInfo.AllocatedHours)-tlTotalHrs):(AL - tlTotalHrs);
              r_Hrs=(+r_Hrs.toFixed(2));
              

               var options = {
                 series: [{
                   data: ['001', '002','011'].includes(this.projectInfo.Project_Block) ? 
                         ( includeExpectedhrs?[+this.projectInfo.AllocatedHours,alloc4Ndays,tlTotalHrs,r_Hrs<0?0:r_Hrs]:[+this.projectInfo.AllocatedHours,tlTotalHrs,r_Hrs<0?0:r_Hrs] )  
                        : [AL, tlTotalHrs, r_Hrs]
                 }],
                 chart: {
                   type: 'bar',
                   height: 350,
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
                     colors:includeExpectedhrs?['#3a81c9','#8d48d7','#3e6be0','#303031']:['#3a81c9','#3e6be0','#303031'],
                     fontFamily:'Lucida Sans Unicode',
                     fontSize:'10px'
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
                   categories: includeExpectedhrs?['Planned', 'Expected', 'Used', 'Remaining']:['Allocated','Used','Remaining'],
                   labels: {
                     rotate: -90,
                     style: {
                      fontSize: '10px'
                    }
                   }
                 },
                 colors:['003', '008'].includes(this.projectInfo.Project_Block)?
                       ['#7dbeff', '#7da1ff',r_Hrs<0?'#757575':'#dbe1e4']:
                       ( includeExpectedhrs?['#7dbeff','#c187ff','#7da1ff',r_Hrs<0?'#757575':'#dbe1e4']:['#7dbeff','#7da1ff',r_Hrs<0?'#757575':'#dbe1e4'] ),
                 
                tooltip: {
                    enabled: true, 
                    custom: ({ series, seriesIndex, dataPointIndex, w })=> {
                          const value = series[seriesIndex][dataPointIndex];
                          const category = w.globals.labels[dataPointIndex];
     
                     return `${
                       category=='Used'?`<div style=""><div style="border-radius: 4px;padding: 4px;font-family: monospace;box-shadow: 0px 0px 0px 1px #527ce2;">
                             <div style="padding: 5px;border-radius: 5px; background-color: #527ce2;color: white;font-size: 11px;">Total used: ${value} hrs</div>
                              <table>
                                ${ this.darOfEmpl.map((ob)=>{
                                          return `<tr>
                                                  <td style="padding: 7px 2px 0px 2px; font-size: 10px;">${ob.member}:</td>
                                                  <td style="padding: 7px 2px 0px 2px;font-family: 'Lucida Sans Unicode';font-weight: 600;font-size: 9px;">
                                                    ${ob.totalTimeline} hrs
                                                  </td>
                                                </tr>`;
                                      }).join('')
                                  }
                          </table>
                        </div>`:
                      `<div style="padding: 10px; background-color: #f4f4f4; border-radius: 5px;">
                         <strong>${category}</strong>: ${value} hrs
                      </div></div>`
                      
                      }`;
                        }
                      }       

               };


               if (this.prjBARCHART)
               this.prjBARCHART.destroy();

           
                let bchr=document.querySelector("#Bar-chart");
                if(bchr)
                {  
                  this.prjBARCHART = new ApexCharts(bchr, options);
                  this.prjBARCHART.render();
                }
            
              
              

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
                   const actns=this.getFilteredPrjActions([st.Status],[item.Team_Res]);
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


                  let _piechartsec=document.querySelector("#Pie-chart");
                  if(_piechartsec){
                    let pchart = new ApexCharts(_piechartsec, options123);
                    pchart.render();
                  }
              
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
      this.TOTAL_ACTIONS_IN_CNUA=0;
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
          case 'Project Hold': this.TOTAL_ACTIONS_IN_HOLD += 1; break;
          case 'Cancellation Under Approval':this.TOTAL_ACTIONS_IN_CNUA+=1; break;
          default: { };
        }
      })

    }
    else
      this.projectActionInfo = null;

    this.TOTAL_ACTIONS = this.TOTAL_ACTIONS_DONE + this.TOTAL_ACTIONS_IN_DELAY + this.TOTAL_ACTIONS_IN_PROCESS + this.TOTAL_ACTIONS_UNDER_APPROVAL + this.TOTAL_ACTIONS_REJECTED + this.TOTAL_ACTIONS_IN_CUA + this.TOTAL_ACTIONS_IN_FUA + this.TOTAL_ACTIONS_IN_HOLD+this.TOTAL_ACTIONS_IN_CNUA;
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
  deadlineExtendlist:any;
  totaldeadlineExtend:any;
  // projectActionDelay:any;
  // projectDelay:any;
  errorFetchingProjectInfo:boolean=false;
  projecttypes : any
  task_assign_json:any;

 getProjectDetails(prjCode: string,actionIndex:number|undefined=undefined) {
    this.errorFetchingProjectInfo=false;
    this.projectMoreDetailsService.getProjectMoreDetails(prjCode).subscribe(res => {
      try{
      this.projectInfo = JSON.parse(res[0].ProjectInfo_Json)[0];      console.log('projectInfo:',this.projectInfo);
      }catch(er){
        console.log('project Info fetching failure:',er);
        this.errorFetchingProjectInfo=true;
      }


     if(this.projectInfo.isProject==false&&this.projectInfo.isTask==true){
         this.task_assign_json=JSON.parse(this.projectInfo.assign_json);
     }

      this.pageContentType=this.projectInfo.Master_Code?'ACTION_DETAILS':'PROJECT_DETAILS';
      this.Submission = JSON.parse(res[0].submission_json);
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
      this.projecttypes = this.projectInfo.Project_Type;
      this.isrespactive =  this.projectInfo.isRespActive;
      this.projectActionInfo = JSON.parse(res[0].Action_Json);
      this.type_list = JSON.parse(this.projectInfo['typelist']);
      this.Title_Name=this.projectInfo.Project_Name;

      if(this.projectInfo.Project_Block=='003'&&this.projectInfo.Status.includes('Delay')){
          let regex=/[0-9]+/;
          const result=regex.exec(this.projectInfo.Status);
          if(result)
          this.taskDelayedby=+result[0].trim();
      }

      if(['001','002','011'].includes(this.projectInfo.Project_Block)){

        const _deadlineextendlist=this.projectInfo['deadlineExtendlist'];
        if(_deadlineextendlist){
          var deadlineExtend=JSON.parse(_deadlineextendlist);
          this.deadlineExtendlist=Object.values(deadlineExtend);
          this.totaldeadlineExtend=this.deadlineExtendlist.length;
          let count:number=0;
          this.deadlineExtendlist.map((actv:any)=>{
            if(actv.count>1&&actv.Value.includes('Deadline changed')&&count+1!=actv.count)
               {   // actv.count : 2,3,4....
                   let updatecount=(actv.count-count);
                   let x=updatecount>3?'th':updatecount==3?'rd':'nd';
                   actv.Value=actv.Value.replace('Deadline changed',`Deadline changed ${updatecount+x} Time`);
                   count+=1;
               }
              return actv;
          });
          console.log('this.deadlineExtendlist:',this.deadlineExtendlist);
        }

      }


      console.log("projectInfo:", this.projectInfo, "projectActionInfossssssssssssssss:", this.projectActionInfo)
      if(this.projectActionInfo && this.projectActionInfo.length>0){
        this.projectActionInfo.sort((a,b)=>a.IndexId-b.IndexId);  // Sorting Project Actions Info  * important

        this.filteredPrjAction=this.getFilteredPrjActions(['All'],['All']);
        this.filterstatus = JSON.parse(this.projectActionInfo[0].filterstatus);
        this.filteremployee = JSON.parse(this.projectActionInfo[0].filteremployee);
        console.log('Now After Sorting:',this.filteremployee);

      }
      this.calculateProjectActions();    // calculate project actions details.

      this.myUnderApprvActions=this.getFilteredPrjActions(['Under Approval'],[this.Current_user_ID]);   // get all my underapproval actions.
      this.myDelayPrjActions=this.getFilteredPrjActions(['Delay'],[this.Current_user_ID]);   // get all my delay actions .
      this.myDelayPrjActions=this.myDelayPrjActions.sort((a,b)=>{
            return b.Delaydays-a.Delaydays;
      });

     if(this.filteremployee)
     {
       this.delayActionsOfEmps=[];   // must be empty before calculation.
          this.filteremployee.forEach((emp)=>{
            let delayActionsOfEmp=this.getFilteredPrjActions(['Delay'],[emp.Team_Res]);
            if(delayActionsOfEmp.length>0){ 
              delayActionsOfEmp=delayActionsOfEmp.sort((a,b)=>b.Delaydays-a.Delaydays)
              const percentInDelay=((delayActionsOfEmp[0].Delaydays/this.projectInfo.Delaydays)*100).toFixed(1);
              this.delayActionsOfEmps.push({ name:emp.Responsible, emp_no:emp.Team_Res, delayActions:delayActionsOfEmp, percentInDelay:percentInDelay})
              this.delayActionsOfEmps=this.delayActionsOfEmps.sort((a,b)=>b.delayActions[0].Delaydays-a.delayActions[0].Delaydays);
            }
          });

      this.prjResHasActions=this.filteremployee.some((ob)=>ob.Team_Res.trim()==this.projectInfo.ResponsibleEmpNo.trim());  // whether project responsible has actions in the project or not.
     }



debugger
     if(this.projectActionInfo){
      this.actionsWith0hrs=[];   // must be empty before calculation.
      this.selfAssignedActns=[];  // must be empty before calculation.
      this.pendingActns4Aprvls=[];   // must be empty before calculation.
      this.actnsWithoutProgress=[];   // must be empty before calculation.
      
     const cr_date=new Date(); cr_date.setHours(0,0,0,0);

     this.projectActionInfo.forEach((actn)=>{
            if(Number.parseInt(actn.AllocatedHours)===0){
              const temp=this.actionsWith0hrs.find(item=>item.name===actn.Responsible);
              if(temp)
                  temp.holdactions+=1;
              else
              this.actionsWith0hrs.push({ name:actn.Responsible, holdactions:1 });
            }

            if(actn.Project_Owner==actn.Team_Res){
              const temp=this.selfAssignedActns.find(item=>item.name===actn.Responsible);
              if(temp)
              temp.selfactns+=1;
              else
              this.selfAssignedActns.push({name:actn.Responsible, selfactns:1,empno:actn.Team_Res});
            }

            if(['Under Approval','Forward Under Approval'].includes(actn.Status)){
                  const temp=this.pendingActns4Aprvls.find(item=>item.empno==actn.Team_Res);
                  if(temp)
                  temp.totalApprovals+=1;
                  else
                  this.pendingActns4Aprvls.push({ name:actn.Responsible, empno:actn.Team_Res, totalApprovals:1   });
            }


            const actn_sdate=new Date(actn.StartDate); actn_sdate.setHours(0,0,0,0);
            const no_progessOnActn=(['Completed','Cancelled'].includes(actn.Status)==false&&cr_date>actn_sdate&&actn.TotalHours==0);
            if(no_progessOnActn){
              this.actnsWithoutProgress.push(actn.Project_Code);
            }

            if((actn.AssignedbyEmpno==this.Current_user_ID)&&(actn.AssignedbyEmpno!=actn.Team_Res)){
              this.actionsAssignedByMe+=1;
            }

     });
     this.totalActionsWith0hrs=this.projectActionInfo.filter(item=>Number.parseInt(item.AllocatedHours)===0).length;
     this.totalSelfAssignedActns=this.projectActionInfo.filter(item=>item.Project_Owner==item.Team_Res).length;
     this.totalPActns4Aprvls=this.projectActionInfo.filter(item=>['Under Approval','Forward Under Approval'].includes(item.Status)).length;


    }



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
 
    setTimeout(()=>{
      this.drawStatisticsNew();
    },3000)
    


    if(this.projectInfo&&this.projectInfo.Status=='Completed'){
         this.prjRunFor=Math.abs(moment(this.projectInfo.StartDate).diff(moment(this.projectInfo.CD),'days'))+1;
         this.completionOffset=moment(this.projectInfo.CD).diff(moment(this.projectInfo.EndDate),'days');
         console.log('completionOffset value:',this.completionOffset);
    }

    if(this.allUsers1){
      this.allUsers2=this.allUsers1.filter((usr:any)=>(![this.projectInfo.OwnerEmpNo,this.projectInfo.ResponsibleEmpNo].includes(usr.Emp_No)));
    }


    if(this.projectInfo.NewOwner==this.Current_user_ID){
       const usr_ak=localStorage.getItem('userAcknowledgements');
       if(usr_ak){
            const arr=JSON.parse(usr_ak);
            const r=arr.find((ob)=>ob['userNewOwner-'+this.projectInfo.Project_Code]==true);
            this.isNewOwnerOk=r?false:true;
       }
       else
       this.isNewOwnerOk=true;    // popup visible
    }


    


   // when project has no activity done even after start date.   calculation here.
    const prjs_date=new Date(this.projectInfo.StartDate); prjs_date.setHours(0,0,0,0);
    const cr_date=new Date(); cr_date.setHours(0,0,0,0);
    this.noActvySinceCreation=(['Completed','Cancelled'].includes(this.projectInfo.Status)==false&&cr_date>prjs_date&&this.projectInfo.TotalHours==0);
    if(this.noActvySinceCreation){
      this.noActvy4NDays=moment(cr_date).diff(prjs_date,'days');
    }
    // when project has no activity done even after start date.









    });
  }


  onGotItBtnClicked(){
      const usr_ak=localStorage.getItem('userAcknowledgements');
      if(usr_ak){
            const arr=JSON.parse(usr_ak);
            const ob={};
            ob['userNewOwner-'+this.projectInfo.Project_Code]=true;
            arr.push(ob);
            const r=JSON.stringify(arr);
            localStorage.setItem('userAcknowledgements',r);
      }
      else{
           const ob={};
           ob['userNewOwner-'+this.projectInfo.Project_Code]=true;
           const r=JSON.stringify([ob]);
           localStorage.setItem('userAcknowledgements',r);
      }
      this.isNewOwnerOk=false;  // popup invisible.
  }







  completionOffset:number=0;


  // getDelayText(action: any): string {
  //   if (!action || action.Delaydays == null) return '';

  //   let delayText = '';

  //   if (action.Delaydays >= 365) {
  //     const years = Math.floor(action.Delaydays / 365);
  //     delayText = years === 1 ? '1 year' : `${years} years`;
  //   } else if (action.Delaydays >= 30) {
  //     const months = Math.floor(action.Delaydays / 30);
  //     delayText = months === 1 ? '1 month' : `${months} months`;
  //   } else if (action.Delaydays >= 7) {
  //     const weeks = Math.floor(action.Delaydays / 7);
  //     delayText = weeks === 1 ? '1 week' : `${weeks} weeks`;
  //   } else {
  //     delayText = `${action.Delaydays} day(s)`;
  //   }

  //   return delayText + ' Delay';
  // }


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
      delayText=action.Delaydays==0?'0 days': action.Delaydays < 10 ? `0${action.Delaydays} days`:`${action.Delaydays} days`;
    }

    return delayText + ' delay';
  }




  getStandardText(action: any): string {
    if (!action?.Status) return '';

    const days = parseInt(action.Status);
    if (isNaN(days)) return action.Status; // Return original status if it's not a number

    const periods = [
      { unit: 'year', duration: 365 },
      { unit: 'month', duration: 30 },
      { unit: 'week', duration: 7 }
    ];

    for (const { unit, duration } of periods) {
      const count = Math.floor(days / duration);
      if (count > 0) {
        const formattedCount = count < 10 ? `0${count}` : `${count}`;
        return count === 1 ? `01 ${unit} delay` : `${formattedCount} ${unit}s delay`;
      }
    }

    const formattedDays = days < 10 ? `0${days}` : `${days}`;
    return `${formattedDays} day${days === 1 ? '' : 's'} delay`;
  }



  prjRunFor:number=0;
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
          console.log(this.Project_List,"dddddd")

          this.uniqueName = new Set(this.Project_List.map(record => record.RACIS));
          const uniqueNamesArray = [...this.uniqueName];

          this.newArray = uniqueNamesArray.slice(3);
          this.firstthreeRecords = uniqueNamesArray.slice(0, 3);

            this.firstRecords=this.firstthreeRecords[0]?this.firstthreeRecords[0][0].split(' ')[0]:'';
            this.secondRecords=this.firstthreeRecords[1]?this.firstthreeRecords[1][0].split(' ')[0]:'';
            this.thirdRecords=this.firstthreeRecords[2]?this.firstthreeRecords[2][0].split(' ')[0]:'';

// If project has project auditor
          const prj_auditor=this.Project_List.find((item)=>item.Role==='Auditor');
          if(prj_auditor){
            this.projectAuditor={empName:prj_auditor.RACIS, empNo:prj_auditor.Emp_No};
          }
// If project has project auditor

          this.PeopleOnProject=Array.from(new Set(this.Project_List.map(item=>item.Emp_No))).map((emp:any)=>{

            const result=this.Project_List.filter(item=>item.Emp_No===emp);
            const obj:any={Emp_Name:result[0].RACIS, Emp_No:result[0].Emp_No, Role:result.map(item=>item.Role).join(', '), isActive:result[0].isActive};
            if(this.Subtask_Res_List){
              const p=this.Subtask_Res_List.find(item=>item.Team_Res==result[0].Emp_No);
              if(p){
                  obj.contribution=p.RespDuration;
                  obj.totalActionsCreated=p.SubtaskCount;
              }

            }


            if(this.filteremployee){
              const hasActions:boolean=this.filteremployee.map(item=>item.Team_Res).includes(emp);
              obj.isRemovable=(obj.Role.includes('Support')&&hasActions==false);
            }
            else {
              // prj type is core,secondary and has 0 actions.
              // prj type is std,routine,todo
               obj.isRemovable=obj.Role.includes('Support');
            }

            return obj;
          });

// sorting people based on active or inactive
          const active_emp=this.PeopleOnProject.filter(item=>item.isActive);
          const inactive_emp=this.PeopleOnProject.filter(item=>!item.isActive)
          this.PeopleOnProject=[...active_emp,...inactive_emp];
          console.log(this.PeopleOnProject,"sssssssss")
// sorting people based on active or inactive


         
        }
      });

    this.service.GetRACISandNonRACISEmployeesforMoredetails(this.URL_ProjectCode).subscribe(

      (data) => {
 console.log('GetRACISandNonRACISEmployeesforMoredetails:',data);
        this.nonRacisList = (JSON.parse(data[0]['OtherList']));

        this.filteredEmployees = this.nonRacisList;

        let RACISList = (JSON.parse(data[0]['RacisList']));

        if (RACISList && RACISList.length > 0) {

          const racisUserIds = RACISList.map((user: any) => user.Emp_No);
          this.userFound = racisUserIds.includes(this.Current_user_ID);
        }


        this.racisNonRacis=JSON.parse(data[0]['owner_dropdown']);      console.log('racisNonRacis list:',this.racisNonRacis);
        this.allUsers1=(JSON.parse(data[0]['alluserlist']));           console.log('alluserlist:',this.allUsers1);

        if(this.projectInfo){
          this.allUsers2=(JSON.parse(data[0]['alluserlist'])).filter((usr:any)=>(![this.projectInfo.OwnerEmpNo,this.projectInfo.ResponsibleEmpNo].includes(usr.Emp_No)));
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
  GetActivityDetails(filterConfig?:{activityType:string,byEmp:string}) {
    console.log('GetActivityDetails is called.');
    this.activitiesLoading=true; // start the loading.
    this.service.NewActivityService(this.URL_ProjectCode).subscribe(
      (data) => {
        if (data !== null && data !== undefined) {
          this.Activity_List = JSON.parse(data[0]['ActivityList']); console.log("all activities:",this.Activity_List);
          // adding _type property
          this.Activity_List.forEach((_actvy)=>{
                 let result='others';
                 if(_actvy.Value){

                 const _Value=_actvy.Value.trim();

                       result=/New Action- ".*"/.test(_Value)?'New Action':
                              (/Timeline added .*/.test(_Value)|| _Value=='Project Timeline added')?'Timeline added':
                              /Action Complete- ".*"/.test(_Value)?'Action Complete':
                              /Action -".*" Hold/.test(_Value)?'Action Hold':
                              /Action -".*" Start date changed/.test(_Value)?'Action Startdate changed':
                              /Action -".*" Deadline changed/.test(_Value)?'Action Deadline changed':
                              ['Project Name changed','Project Responsible changed','Project Description changed','Client changed','Category changed'].includes(_Value)?'Project Details changed':
                              [/Action Name changed for the Action -".*"/, /Description changed for the Action - ".*"/,/Action -".*" Owner changed/,/Action -".*" Responsible changed/].some(rg=>rg.test(_Value))?'Action Details changed':
                              (['Project Complete Approved','Project Complete Rejected','Project Audit Approved','Project Audit Rejected'].includes(_Value)||
                               [/Project Complete Submitted to ".*"/,/Project Audit Submitted to ".*"/,/Project Complete transferred to ".*"/,/Project next version assigned to ".*"/].some(rg=>rg.test(_Value)))?'Project Complete':
                              _Value;
                 }
                 _actvy._type=result.trim();
           });
          // adding _type property
         console.log('after foreach:',this.Activity_List);

          // PROJECT DEADLINE CHANGED HOW MANY NUMBER OF TIMES.
                let count:number=0;
                this.Activity_List.map((actv:any)=>{

                  if(actv.count>1&&actv.Value=='Project Deadline changed'&&count+1!=actv.count)
                    {   // actv.count : 2,3,4....
                        let updatecount=(actv.count-count);
                        let x=updatecount>3?'th':updatecount==3?'rd':'nd';
                        actv.Value=`Project Deadline changed ${updatecount+x} Time`;
                        count+=1;
                    }
                    return actv;
                });
         // PROJECT DEADLINE CHANGED HOW MANY NUMBER OF TIMES.

   if(filterConfig)
   this.arrangeActivitiesBy(filterConfig.activityType,filterConfig.byEmp);
   else
   this.arrangeActivitiesBy('all','all');
   this.emps_of_actvs=Array.from(new Set(this.Activity_List.map(_actv=>_actv.Modifiedby)));
   this.actvs_types=Array.from(new Set(this.Activity_List.map(_actv=>_actv._type)));


   console.log('actvs_types:',this.actvs_types);

          this.firstFiveRecords = this.Activity_List.slice(0, 5);
          console.log(this.firstFiveRecords,"ffffive ffffffffffffffff")

          this.firstFiveRecords=this.firstFiveRecords.map((item)=>{
           const d=moment(new Date()).diff(moment(item.ModifiedDate),'days');
                 return {
                  ...item,
                  ModifiedDate:d===0?'Today':
                  d===1?'Yesterday':
                  [2,3].includes(d)?d+' days ago':
                  this.datepipe.transform(item.ModifiedDate,'dd-MM-yyyy')
                };
          });

        }
        this.activitiesLoading=false;  // end the loading.
      });
  }


  ActionActivity_List:any=[];
  ActionfirstFiveRecords: any[] = [];
  GetActionActivityDetails(code) {
    this.activitiesLoading=true; // start the loading.
    this.service.NewActivityService(code).subscribe(
      (data) => {

        if (data !== null && data !== undefined) {
          this.ActionActivity_List = JSON.parse(data[0]['ActivityList']); console.log('ActinoActivity_List:',this.ActionActivity_List);
          let count:number=0;
          this.ActionActivity_List.map((actv:any)=>{

        // ACTION DEADLINE CHANGED HOW MANY NUMBER OF TIMES.
                if(actv.count>1&&actv.Value.includes('Deadline changed')&&count+1!=actv.count)
                  {   // actv.count : 2,3,4....
                      let updatecount=(actv.count-count);
                      let x=updatecount>3?'th':updatecount==3?'rd':'nd';
                      actv.Value=actv.Value.replace('Deadline changed',`Deadline changed ${updatecount+x} Time`);
                      count+=1;
                  }
                  return actv;
              });
        // ACTION DEADLINE CHANGED HOW MANY NUMBER OF TIMES.

   // adding _type property
      this.ActionActivity_List.forEach((_actvy)=>{
        let result='others';
        if(_actvy.Value){
        const _Value=_actvy.Value.trim();
        result=/New Action- ".*"/.test(_Value)?'New Action':
              _Value=='Project Timeline added'?'Timeline added':
              /Action Complete- ".*"/.test(_Value)?'Action Complete':
              [/Action Name changed for the Action -".*"/, /Description changed for the Action - ".*"/,/Action -".*" Owner changed/,/Action -".*" Responsible changed/].some(rg=>rg.test(_Value))?'Action Details changed':
              /Action -".*" Start date changed/.test(_Value)?'Action Startdate changed':
              /Action -".*" Deadline changed/.test(_Value)?'Action Deadline changed':
              _Value;
        }
        _actvy._type=result.trim();
      });
      // adding _type property

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
    this.clearFilterConfigs();
  }

  showActionDetails(index: number | undefined) {
    this.currentActionView = index;  
    if(index!=undefined){

      this.requestType = null;
      this.actionCost = index>-1 && this.projectActionInfo[this.currentActionView].Project_Cost;
      this.GetActionActivityDetails(this.projectActionInfo[index].Project_Code);

      if (this.projectActionInfo[index].Status === "Under Approval" ||this.projectActionInfo[index].Status === "Completion Under Approval" || this.projectActionInfo[index].Status === "Forward Under Approval"||this.projectActionInfo[index].Status === "Cancellation Under Approval"){
        this.GetApproval(this.projectActionInfo[index].Project_Code);
      }
      else if(this.projectActionInfo[this.currentActionView].Status=='New Project Rejected'){
        this.getActionRejectType(this.projectActionInfo[this.currentActionView].Project_Code);
      }
      
      // draw action's bar chart.
      this.maxDuration = (+this.projectActionInfo[this.currentActionView].AllocatedHours);
      this.UsedInDAR = this.projectActionInfo[this.currentActionView].TotalHours||0;
       $(document).ready(()=>{
        this.drawActionBarChart();
      });


      // when action has no activity done even after start date. 
      const actn_sdate=new Date(this.projectActionInfo[index].StartDate); actn_sdate.setHours(0,0,0,0);
      const cr_date=new Date(); cr_date.setHours(0,0,0,0);
      this.noActvyOnActnSinceCreation=(['Completed','Cancelled'].includes(this.projectActionInfo[index].Status)==false&&cr_date>actn_sdate&&this.UsedInDAR==0);
      if(this.noActvyOnActnSinceCreation){
        this.noActnActvy4NDays=moment(cr_date).diff(actn_sdate,'days');
      }
     
     
      // action owner drpdwn and action resp drpdwn.
      this.service.GetRACISandNonRACISEmployeesforMoredetails(this.projectActionInfo[index].Project_Code).subscribe(
        (data) => {
          console.log(data, "action racis");
          this.actionowner_dropdown=(JSON.parse(data[0]['owner_dropdown']));
          this.actionresponsible_dropdown=(JSON.parse(data[0]['responsible_dropdown']));
      });

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

    if (!this.Usercomment){
      this.formFieldsRequired=true;
      return
    }
    else{
      this.formFieldsRequired=false;
      var Scheduleid = '0'
      this.projectMoreDetailsService.NewInsertProjectRequestAccesss(this.projectInfo.Project_Code,this.Usercomment,this.Current_user_ID, Scheduleid).subscribe(res => {
        console.log(res,'openRequestDialog')
        this.closeRequestDialog();
        Swal.fire('Request Sent Successfully');
        this.isRequestSent = true;
        this.ishide=false
        $('.hide-content').addClass('d-none');

         });

    }
  }

  BarChartOfAction:any;
  noActvyOnActnSinceCreation:boolean=false;
  noActnActvy4NDays:number=0;

  // getDarInfoOfAction(index) {
  //   const actionCode:string=this.projectActionInfo[index].Project_Code;
  //   this.service.DARGraphCalculations_Json(actionCode)
  //     .subscribe(data1 => {
  //       console.log("drawstatistics data1:",data1)
  //       this.maxDuration = (data1[0]['ProjectMaxDuration']);
  //       this.UsedInDAR = (data1[0]['TotalHoursUsedInDAR']);
  //       // this.RemainingHours = (data1[0]['RemainingHours']);

  //       // when action has no activity done even after start date.   calculation here.
  //         const actn_sdate=new Date(this.projectActionInfo[index].StartDate); actn_sdate.setHours(0,0,0,0);
  //         const cr_date=new Date(); cr_date.setHours(0,0,0,0);
  //         this.noActvyOnActnSinceCreation=(['Completed','Cancelled'].includes(this.projectActionInfo[index].Status)==false&&cr_date>actn_sdate&&this.UsedInDAR==0);
  //         if(this.noActvyOnActnSinceCreation){
  //           this.noActnActvy4NDays=moment(cr_date).diff(actn_sdate,'days');
  //         }
  //       // when action has no activity done even after start date.



  //     // draw action bar chart.
  //       this.drawActionBarChart();
  //    });


  // }




  drawActionBarChart(){

    let includeExpectedhrs:boolean=false;
    let alloc4Ndays=0;
    const crd=new Date();                                          // current date.
    const aed=new Date(this.projectActionInfo[this.currentActionView].EndDate.split('T')[0]);    // action end date.
    const asd=new Date(this.projectActionInfo[this.currentActionView].StartDate.split('T')[0]);  // action start date.

    if(['Completed','New Project Rejected','Cancelled'].includes(this.projectActionInfo[this.currentActionView].Status)==false&&crd>=asd&&crd<=aed){
        const K=this.maxDuration/(this.projectActionInfo[this.currentActionView].Duration+1);
        const N=(Math.abs(moment(asd).diff(crd,'days'))+1);
        alloc4Ndays=N*K;
        alloc4Ndays=(+alloc4Ndays.toFixed(2));
        includeExpectedhrs=true;
    }

    const r_hrs=this.maxDuration-this.UsedInDAR;
    var options = {
      series: [{
        data: includeExpectedhrs?[
          this.maxDuration,
          alloc4Ndays,
          this.UsedInDAR,
          r_hrs<0?0:r_hrs
          ]:[this.maxDuration, this.UsedInDAR, r_hrs<0?0:r_hrs]
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
          colors:includeExpectedhrs?['#3a81c9','#8d48d7','#3e6be0','#303031']:['#3a81c9','#3e6be0','#303031'],
          fontFamily:'Lucida Sans Unicode',
          fontSize:'10px'
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
        categories: includeExpectedhrs?['Planned','Expected', 'Used', 'Remaining']:['Allocated', 'Used', 'Remaining'],
        labels: {
          rotate: -90
        }
      },
  
      colors:includeExpectedhrs?['#7dbeff','#c187ff','#7da1ff',r_hrs<0?'#757575':'#dbe1e4']:
                                ['#7dbeff','#7da1ff',r_hrs<0?'#757575':'#dbe1e4']

    };

    if (this.prjBARCHART)
      this.prjBARCHART.destroy();
    this.prjBARCHART = new ApexCharts(document.querySelector("#chart-container1"), options);
    this.prjBARCHART.render();
    // new code

  }





  // ADDING NEW ACTIONS
  addNewAction() {
    if (this.projectInfo.Status === 'Completed') {
      Swal.fire({
        title: "Wait this project is already completed",
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

    // first action must belongs to the project responsible.
    if(this.Current_user_ID==this.projectInfo.ResponsibleEmpNo.trim()&&this.prjResHasActions==false){
      this.bsService.setSelectedTemplAction({...this.bsService._templAction.value,assignedTo:this.Current_user_ID});
    }
    //

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
    this.formFieldsRequired = false
    // this.isStartDateEditable=new Date().getTime()<=new Date(this.projectInfo.StartDate).getTime();
  }

  Action_details_edit() {

    document.getElementById("Action_Details_Edit_form").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("newdetails").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
    this.getResponsibleActions();
    this.initializeSelectedValues()
    this.formFieldsRequired = false

  }
  ApprovalSideBar() {
    document.getElementById("Approval_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
      // to bydefault open the index 0 approval.
      setTimeout(()=>{
        const aprv1:any=document.querySelector('#Approval_view #heading-AprvReq-0 a.accordion-button');
        const isOpened=aprv1.getAttribute('aria-expanded');
        if(isOpened=='false'){
          aprv1.click();
        }
      },300)
  }


  MultipleApprovalSideBar() {
    document.getElementById("multiple_view").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    // to bydefault open the index 0 approval.
    setTimeout(()=>{
      const aprv1:any=document.querySelector('#multiple_view #heading-AprvReqm-0 a.accordion-button');
      const isOpened=aprv1.getAttribute('aria-expanded');
      if(isOpened=='false'){
        aprv1.click();
      }
    },300)

  }


  closeApprovalSideBar(){
    document.getElementById("Approval_view").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("newdetails").classList.remove("position-fixed");
    $('#newdetails').removeClass('position-fixed');
  }

  closeMultipleSideBar(){
    document.getElementById("multiple_view").classList.remove("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("newdetails").classList.remove("position-fixed");
    $('#newdetails').removeClass('position-fixed');

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

multipleback(){
  document.getElementById('multiple-approval').classList.remove('d-none')
  document.getElementById('multiple-reject').classList.add('d-none')
}


  closeInfo() {   
    this._remarks = '';
    this.characterCount=0;
    this.characterCount_Action=0;
    this.selectedFile=null;
    this._inputAttachments='';
    this.formFieldsRequired=false;
    this.isLoadingData=undefined;
    this.invalidFileSelected=false;
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
    document.getElementById("multiple_view").classList.remove("kt-quick-active--on");

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
    this.closePrjHoldSideBar();
  }



  View_Comments(){
    document.getElementById("View_comments").classList.add("kt-quick-View_comments--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='COMMENTS';
    this.GetprojectComments()
   }

  View_Activity(type:"PROJECT-ACTIVITIES"|"ACTION-ACTIVITIES",filterConfig?:{activityType:string,byEmp:string}) {
    document.getElementById("Activity_Log").classList.add("kt-quick-active--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("newdetails").classList.add("position-fixed");
    this.currentSidebarOpened='ACTIVITY_LOG';
    this.activitiesOf=type;
    if(this.activitiesOf==='PROJECT-ACTIVITIES'){
      this.GetActivityDetails(filterConfig);    // get all activities of the project.
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
    this.GetPeopleDatils();
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
    this.dateF=new Date();
    this._remarks='';
    this._inputAttachments='';
    this.selectedFile=null;
    this.notProvided=false;
    this.a_details=null;
    this.a_loading=false;
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
    this._calenderDto = new CalenderDTO();
    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Project_Code = null;
    this.GetProjectAndsubtashDrpforCalender();
    this.linkSMail=true;
    //
  }


  // closes open linksidebar.
  closeLinkSideBar() {
    document.getElementById("LinkSideBar").classList.remove("kt-quick-panel--on");
    document.getElementById("LinkSideBar1").classList.remove("kt-quick-panel--on");
    document.getElementById("newdetails").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.currentSidebarOpened='NOT_OPENED';
    this.isLoadingData=undefined;
    this.linkPort=false;
    this.linkSMail=false;

  }

  //








  GetMemosByEmployeeId() {
    this.loading=true;
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
      this.loading=false;
      this.GetDMS_Memos();
    });
  }



  GetDMS_Memos() {
    this.isLoadingData=true;
    this._LinkService._GetOnlyMemoIdsByProjectCode(this.URL_ProjectCode).
      subscribe((data: any) => {
        this.isLoadingData=false;
        console.log("inside GetDMS_Memos:", data);
        if (data && data.length > 0) { // if data is not [] means there will be atleast one memo present in the project.
           this.isLoadingData=true;
          this._LinkService._GetMemosSubject(data[0]['JsonData']).
            subscribe((data: any) => {
              console.log(data,"dms data");
              this.isLoadingData=false;
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





  linkSMail:boolean=false;
  linkPort:boolean=false;


  selectToLinkSMail(){
    this.linkSMail=true;
    if(this.projectmodaltype=='SMail' && this.linkSMail==true ){
    this.FilteredResults=this.FilteredResults.filter((res)=>{
      return !this.projectMemos.some(att => att.MailId === res.MailId);
    });
    }
  }


  selectToLinkPort(){
    this.linkPort=true
  }





  // ADD DMS STARTS HERE
  addDMSToTheProject() {
    try {
      this.SelectDms=this.SelectDms.map((item)=>({"MailId": item}))
      if (this.SelectDms.length) {
        // when user has selected memo.  when selectedMemos.length>0
        let totalmemos = [];
        if (this.projectMemos)
          totalmemos = this.projectMemos.map((item: any) => ({ MailId: item.MailId })); // get current memos list.

        let newmemos = this.SelectDms.map((item: any) => ({ MailId: item.MailId }));  // get selected memos.
        newmemos.forEach((memo: { MailId: number }) => {
          totalmemos.push(memo);
        });   // adding selected memos to the totalmemos


        let projectcode: number = this.URL_ProjectCode;
        let appId: number = 101;//this._ApplicationId;
        let dmsMemo = JSON.stringify(totalmemos); //[{MailId:123,Subject:'abc'}]->[{MailId:123}]->'[{MailId:123}]'
        let userid: number = +this.Current_user_ID;

        this._LinkService.InsertMemosOn_ProjectCode(projectcode, appId, dmsMemo, userid).subscribe((res: any) => {
          console.log("Response=>", res);
          if (res.Message === "Updated Successfully.") {
            this.notifyService.showSuccess("", "SMail successfully added.");
            this.GetDMS_Memos();
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
    this.SelectDms = new Array();
    this.linkSMail=false;
    // this.closeLinkSideBar();         //closes the sidebar.
  }
  // ADD DMS END HERE




  deleteMemos(memoId: number) {


    const memo_name=this.projectMemos.find(item=>item.MailId==memoId);
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        mode: 'delete',
        title1: 'Confirmation ',
        message1: memo_name.Subject
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
              if (res.Message === 'Updated Successfully.') {
                this.notifyService.showInfo("", "Memo removed.");
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
        this.notifyService.showInfo("Action cancelled. ", '');
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
  Audit_active:boolean=false;
  Transfer_active:boolean=false;
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
    this.notProvided=false;
  }

  sidno:any;
  emp:any;
  repdate:any;
  contenttype: any;
  submitby:any;
  multiapproval_list:any=[];
  pendingAprvls:any=[];

  approvalsFetching:boolean=false;
  getapprovalStats() {
    // this.approvalEmpId = null;
    this.approvalsFetching=true;   // fetching approvals or processing start.
    this.approvalObj.Project_Code = this.URL_ProjectCode;
    this.approvalservice.GetApprovalStatus(this.approvalObj).subscribe((data) => {
      this.approvalsFetching=false;    // fetched approvals or processing end.
      this.requestDetails = data as [];
      console.log(this.requestDetails, "approvals");  
      if (this.requestDetails.length > 0) {
        this.isPrjContainAprvls=true; //to show pending aprvl label of prj status section.
        this.requestType = (this.requestDetails[0]['Request_type']);


        this.multiapproval_list = JSON.parse((this.requestDetails[0]['multiapproval_json']));
        this.pendingAprvls=[];  // must be empty before calculation.
        if(this.multiapproval_list){
          this.multiapproval_list=this.multiapproval_list.filter((_aprvl)=>_aprvl.Emp_No==this.Current_user_ID);
          console.log('multiapproval_list my approvals:',this.multiapproval_list);
          this.multiapproval_list.forEach((item)=>{
               const temp=this.pendingAprvls.find((item1)=>item1.request_type==item.Type);
               if(temp)
               temp.totalRequests+=1;
               else
               this.pendingAprvls.push({ request_type:item.Type, totalRequests:1 });
          });
        }



        this.forwardType = (this.requestDetails[0]['ForwardType']);
        this.requestDate = (this.requestDetails[0]['Request_date']);
        this.requestDeadline = (this.requestDetails[0]['Request_deadline']);
        this.approvalEmpId = (this.requestDetails[0]['Emp_no']);
        this.requestComments = (this.requestDetails[0]['Remarks']);
        this.newcomments = (this.requestDetails[0]['NewRemarks']);
        this.new_deadline = (this.requestDetails[0]['new_deadline']);
        this.new_cost = (this.requestDetails[0]['new_cost']);
        this.comments_list = JSON.parse(this.requestDetails[0]['comments_Json']);
        //this.reject_list = JSON.parse(this.requestDetails[0]['reject_list']);
        this.Submitted_By = (this.requestDetails[0]['Submitted_By']);
        
        this.AuditRequestBY = (this.requestDetails[0]['AuditRequestBY']);   console.log('AuditRequestBY:',this.AuditRequestBY);
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
        if (this.requestType == 'Project Complete' || this.requestType == 'ToDo Achieved'||this.requestType == 'Project Audit') {
          this.complete_List = JSON.parse(this.requestDetails[0]['completeDoc']);
          if (this.complete_List != "" && this.complete_List != undefined && this.complete_List != null) {
            this.completedoc = (this.complete_List[0]['Sourcefile']);
            this.iscloud = (this.complete_List[0]['IsCloud']);
            this.url = (this.complete_List[0]['CompleteProofDoc']);
          }

        }
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


// prj request access aprvals
       if(this.requestType=='Request Access'&&this.multiapproval_list.length>0){
        this.isApprovalSection=false;
       }
// prj request access aprvals

      }
      else{
        // if there is no requests
        this.isApprovalSection=false;
        this.isPrjContainAprvls=false;  //to remove pending aprvl label of prj status section.
        // if there is no requests

        // if there are no std task aprv request
         this.standardjson=[];
         this.totalStdTskApvs=0;
         this.multiapproval_list=[]
         this.currentStdAprView=undefined;
         this.closeApprovalSideBar();
         this.closeMultipleSideBar();
        // if there is no std task aprv request
      }
      this.getRequestAcessdetails();

    });

    // console.log(this.requestDetails, 'transfer');
  }

standardjson:any;
currentStdAprView:number|undefined;
fetchingStdTaskAprvls:boolean=false;
  getstandardapprovalStats(){
    this.fetchingStdTaskAprvls=true;
    this.approvalservice.GetStandardApprovals(this.URL_ProjectCode).subscribe((data:any) => {
       this.fetchingStdTaskAprvls=false;
      if(data&&data.length>0){
        console.log("getstandardapprovalStats:",JSON.parse(data[0]['standardJson']));
        this.requestDetails = data as [];
        console.log(this.requestDetails,"task approvals");
        this.standardjson = JSON.parse(this.requestDetails[0]['standardJson']); console.log('standardjson:',this.standardjson);
        this.totalStdTskApvs=JSON.parse(this.requestDetails[0]['totalcount']); console.log('standardjson:',this.totalStdTskApvs);

        // console.log('approvalEmpID::',this.standardjson[0].approvalEmpID);
        // if(this.standardjson.length>0){
        //     this.isApprovalSection=true;
        //     this.isTextAreaVisible=false;
        //     this.currentStdAprView=(this.Current_user_ID==this.projectInfo.OwnerEmpNo||this.isHierarchy==true)?0:undefined;
        // }
      }

    });
  }

  approvalClick(actionType) {

  // clearing entered data if any.
    this.comments = "";
    this.empAuditor_remarks='';
    this.emp_Auditor=undefined;
     this.notProvided=false;
     this.sel_user=undefined;
     this.sel_ptype=undefined;
     this.sel_sdate=undefined;
     this.sel_edate=undefined;
     this.sel_submtype=undefined;
     this.ngDropdwonPort2=[];

  // clearing entered data if any.

    switch (actionType) {
      case 'ACCEPT': {
        this.isRejectOptionsVisible = false
        this.selectedType = '1';
        this.rejectType = null;
        this.Accept_active = true;
        this.Conditional_Active = false;
        this.Reject_active = false;
        this.Audit_active=false;
        this.Transfer_active=false;
        // this.getapprovalStats();
        //    this.getProjectDetails(this.URL_ProjectCode);

      }; break;
      case 'CONDITIONAL': {
        this.isRejectOptionsVisible = false;
        this.selectedType = '2';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = true;
        this.Reject_active = false;
        this.Audit_active=false;
        this.Transfer_active=false;
        this.sel_prjname=this.projectInfo.Project_Name+'- V2';
      }; break;
      case 'REJECT': {
        this.isRejectOptionsVisible = true;
        this.selectedType = '3';
        this.rejectType = null;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = true;
        this.Audit_active=false;
        this.Transfer_active=false;
      };break;
      case 'AUDIT':{
        this.isRejectOptionsVisible = false;
        this.selectedType = '5';
        this.rejectType = undefined;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = false;
        this.Audit_active=true;
        this.Transfer_active=false;
      };break;
      case 'TRANSFER':{
        this.isRejectOptionsVisible = false;
        this.selectedType = '6';
        this.rejectType = undefined;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = false;
        this.Audit_active=false;
        this.Transfer_active=true;
      };break;
      case 'NOTSELECTED':{
        this.isRejectOptionsVisible = false;
        this.selectedType = undefined;
        this.rejectType = undefined;
        this.Accept_active = false;
        this.Conditional_Active = false;
        this.Reject_active = false;
        this.Audit_active=false;
        this.Transfer_active=false;
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
    this.Accept_active=false;
    this.Reject_active=false;
    this.Audit_active=false;
    this.Transfer_active=false;
    this.Conditional_Active=false;
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
      else if (this.requestType == 'Project Audit')
        this.approvalObj.Status = 'Project Audit Rejected';
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
  selectedStdAprvs:any=[];    // selected std task aprvs ids.
  selectedStdAprvsObjs:any=[]; // selected std task aprvs objs.
  acceptAllStdApprReq(){
    if(this.selectedStdAprvs.length===0){
      this.notifyService.showError('Please choose atleast one approval.','No Approval Selected.');
      return;
    }
    else{
      const stdtasktoApprove=this.selectedStdAprvsObjs;
      this.approvalservice.NewUpdateAcceptApprovalsService(stdtasktoApprove).subscribe(data =>{  console.log(data,"selected tasks are approved.");
        const x=this.totalStdTskApvs-this.selectedStdAprvsObjs.length;                            // decides whether the sidebar remain open or should close.
          if(x===0)
          this.closeApprovalSideBar();
        this.notifyService.showSuccess("Standard Task complete approved.",'Success');
        this.selectedStdAprvs=[];
        this.selectedStdAprvsObjs=[];
        this.getapprovalStats();
        this.allStdAprSelected=false;
      });
   }


  }

  onStdAprvSelected(e,aprvls){
    aprvls.forEach(aprv=>{
          if(e.target.checked){
                if(!this.selectedStdAprvs.includes(aprv.SNo))
                {
                  this.selectedStdAprvs.push(aprv.SNo);     // storing only SNo of selected aprvl.
                  this.selectedStdAprvsObjs.push(aprv);    // storing selected aprvls obj.

                  if(e.target.id!=='selectall-stdapr-requests'){
                    const accordion_button:any=document.getElementById('stdtskaprv-'+aprv.SNo);
                    accordion_button.click();

                    // for select all check box status.
                    this.allStdAprSelected=this.standardjson.every((apr:any)=>{
                        return this.selectedStdAprvs.includes(apr.SNo);
                    });
                    // for select all check box status.
                  }
                }
          }else{
                const x=this.selectedStdAprvs.indexOf(aprv.SNo);
                this.selectedStdAprvs.splice(x,1);
                this.selectedStdAprvsObjs.splice(x,1);
                this.allStdAprSelected=false;
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

// accept, reject or next version submission done via this same method only.
approvalSubmitting:boolean=false;
  submitApproval() {
    console.log('passing single approvaljson:',this.singleapporval_json);
    if (this.selectedType == '1') {
      console.log("singleapporval_json:",this.singleapporval_json);
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
      this.approvalSubmitting=true;
      this.approvalservice.NewUpdateSingleAcceptApprovalsService(this.singleapporval_json).
        subscribe((data) => {
          this.Close_Approval();
          this.approvalSubmitting=false;
          this.notifyService.showSuccess(this.singleapporval_json[0].Type+" Approved successfully by - " + this._fullname, "Success");
          this.getapprovalStats();
          this.GetApproval(1);
          this.getProjectDetails(this.URL_ProjectCode);
          this.updatePortfolioPage();
        });
      console.log(this.singleapporval_json, "accept")
    }
    else if (this.selectedType == '2') {
// validation here
        if((this.sel_prjname&&this.sel_prjname.trim()!=='')&&this.sel_user&&(this.comments&&this.comments.trim()!=''))
        { // when user provided all mandatory fields.
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = this.requestType;

          this.approvalObj.taskname=this.sel_prjname;
          this.approvalObj.projecttype=this.sel_ptype?this.sel_ptype:'0';
          this.approvalObj.assignto=this.sel_user;
          this.approvalObj.portfolioId=(this.ngDropdwonPort2&&this.ngDropdwonPort2.length>0)?(this.ngDropdwonPort2.join(',')):'0';


          this.approvalObj.startdate=['003','008'].includes(this.sel_ptype)?'0': (this.sel_sdate?this.sel_sdate:'0');
          this.approvalObj.enddate=['003','008'].includes(this.sel_ptype)?'0': (this.sel_edate?this.sel_edate:'0');
          this.approvalObj.SubmissionType=['003','008'].includes(this.sel_ptype)?( this.sel_submtype?this.sel_submtype:'0' ):'0';

          if (this.comments == '' || this.comments == null) {
            this.approvalObj.Remarks = 'Accepted';
          }
          else {
            this.approvalObj.Remarks = this.comments;
          }

          this.approvalSubmitting=true;
          this.approvalservice.InsertConditionalAcceptApprovalService(this.approvalObj).
            subscribe((data) => {
              this.approvalSubmitting=false;
              this._Message = (data['message']);
              if (this._Message == 'Not Authorized' || this._Message == '0') {
                this.notifyService.showError("project not approved.", 'Failed');
              }
              else {
                this.Close_Approval();
                this.notifyService.showSuccess("Project Approved Successfully", this._Message);
                this.getapprovalStats();
                this.getProjectDetails(this.URL_ProjectCode);
              }
            });
        }
        else
        {  // when mandatory field are missing.
            this.notProvided=true;
        }
    }
    else if (this.selectedType == '3') {
// on reject btn click
      if(this.rejectType&&(this.comments&&this.comments.trim()!=''))
      {  // when both reject type and comments are provided.
        this.singleapporval_json.forEach(element => {
          element.Remarks = this.comments;
          element.RejectType = this.rejectType;
        });
        this.approvalSubmitting=true;
        this.approvalservice.NewUpdateSingleRejectApprovalsService(this.singleapporval_json).
          subscribe((data) => {
            // if success
            this.Close_Approval();
            this.approvalSubmitting=false;
            this.notifyService.showSuccess(this.singleapporval_json[0].Type+" Rejected successfully by - " + this._fullname, "Success");
            this.getapprovalStats();
            this.getProjectDetails(this.URL_ProjectCode);
            this.getRejectType();

        });
      }
      else
      {  // when mandatory field are not provided.
        this.notProvided=true;
      }
// on reject btn click
    }
    else if (this.selectedType == '4') {
      this.notifyService.showError("Not Approved - Development under maintainance", "Failed");
    }
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
    this.isLoadingData=true;
    this.service.getPortfolios(this.URL_ProjectCode).subscribe((res) => {
      if (res != null && res != undefined) {
        this._portfoliolist = JSON.parse(res[0].Portfolio_json);
        this.getPortfolios()
        this.isLoadingData=false;
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

  // permittedFileFormats='image/*,.pdf,.txt,.html,.htm,.doc,.docx,.json,.xml,.ppt,.pptx,.xlsx,.xls';

  permittedFileFormats=[
    "image/*", "application/pdf", "text/plain", "text/html", "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/json", "application/xml", "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ];
  invalidFileSelected:boolean=false;

  onFileChange(e){
    if(e.target.files.length>0){
      const filetype = e.target.files[0].type;
      const isValidFile=this.permittedFileFormats.some((format)=>{
            return (filetype==format)||(filetype.startsWith('image/')&&format=='image/*');
      });
      if (isValidFile) {
        this.selectedFile = <File>e.target.files[0];
        this._inputAttachments = e.target.files[0].name;
        this.invalidFileSelected=false;
      }
      else {
        this.invalidFileSelected=true;
        this.selectedFile = null;
        this._inputAttachments = '';
        e.target.value='';
      }
      this.cdr.detectChanges();
    }
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
    this.invalidFileSelected=false;

    $('#project-action-Checkbox').prop('checked', false);
    document.getElementById("mysideInfobar_Update").classList.remove("kt-quick-panel--on");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("newdetails").classList.remove("position-fixed");
    $('#_file1').val('');
    $('#upload').html('Select a file');
  }  // for temp we are using this.

  proState:boolean=false
  actionCompleted() {

   const fieldsprvided:boolean=(this._remarks&&this._remarks.trim())&&(this.proState?this.selectedFile:true);

    if (!fieldsprvided) { // when the user not provided the required fields then .
      this.formFieldsRequired=true;
      this.notifyService.showInfo("Please fill in the mandatory fields.", '');
    }
    else if (
      (this.TOTAL_ACTIONS_UNDER_APPROVAL+this.TOTAL_ACTIONS_IN_FUA+this.TOTAL_ACTIONS_IN_CNUA+this.TOTAL_ACTIONS_IN_CUA+this.TOTAL_ACTIONS_IN_HOLD)==0&&
      (this.TOTAL_ACTIONS_IN_PROCESS + this.TOTAL_ACTIONS_IN_DELAY) === 1&&
      (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo || this.Current_user_ID == this.projectInfo.Authority_EmpNo || this.isHierarchy === true)) {   // if user is O,R,A or is in heirarchy and there is only one action in inprocess or delay state.
      Swal.fire({
        title: 'Proceed With Project Submission ?',
        html: `<div class="text-justify">
        This is the last action to be completed in the project. Would you like to submit the project along with this action as well?
           </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Yes, Complete Both',
        cancelButtonText: 'Complete Action',
        cancelButtonColor:'#3085d6'
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
                      this.notifyService.showSuccess("Successfully updated", 'Action completed.');
                      // after the action is successfully completed
                      this.closeInfo();
                      this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
                      this.getAttachments(1);
                      this.calculateProjectActions();
                      this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
                    }
                    else
                    this.notifyService.showError('Unable to complete this action','Something went wrong');
                  };break;

                }
              });

            // ACTION SUBMITTED



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
                      this.notifyService.showInfo("File uploaded successfully", "Project updated");

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
                this.invalidFileSelected=false;
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
              this.invalidFileSelected=false;
              this.getProjectDetails(this.URL_ProjectCode);
              this.calculateProjectActions();     // recalculate the project actions.
              this.closeActCompSideBar();
              this.getAttachments(1);      // close action completion sidebar.
            });
          this.notifyService.showSuccess("Successfully updated", 'Action completed');
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
              console.log(this.progress, "progress");
              if (this.progress == 100) console.log('progress completed');
              break;
            case HttpEventType.Response:{
              var myJSON = JSON.stringify(event);
              this._Message = (JSON.parse(myJSON).body).Message;
              if(this._Message==='Success')
              {
                this.notifyService.showSuccess("Successfully updated", 'Action completed');
                // after the action is successfully completed
                let prjAction = this.projectActionInfo.find((prjAct: any) => prjAct.Project_Code === this.Sub_ProjectCode)
                const prjActionindex = this.projectActionInfo.indexOf(prjAction)
                if (prjActionindex !== -1) {
                  const prjActionComp = { ...prjAction,CD:new Date(), Status: 'Completed', Remarks: fd.get('Remarks'), IndexId: prjAction.IndexId };
                  this.projectActionInfo.splice(prjActionindex, 1, prjActionComp);
                  this.clearFilterConfigs();
                }  // updated project action.

                this._remarks = "";
                this._inputAttachments = "";
                this.selectedFile = null;
                this.invalidFileSelected=false;
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
  dateF:any=new Date();
  todayDate = new Date();
  disablePreviousDate = new Date();
  DisablePrevious = new Date();
  starttime: any=null;
  timedata: any = [];
  timedata1: any = ["08:00",
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
    this.setTimelineDate(this.current_Date);
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
        this.darArr=this.darArr.filter(acn=>['New Project Rejected','Cancelled','Completed','Project Hold','Cancellation Under Approval'].includes(acn.SubProject_Status.trim())==false);
        this.Subtask_Res_List=JSON.parse(data[0]['SubTaskResponsibe_Json']);
        this.totalSubtaskHours = (data[0]['SubtaskHours']);
        const pracis=JSON.parse(data[0]['RACIS_Count']);
        const projectinfo_=JSON.parse(data[0]['ProjectInfo'])[0];
        console.log('Subtask_Res_List:',this.Subtask_Res_List);
        console.log('totalSubtaskHours:',this.totalSubtaskHours);

        console.log('darArr:', this.darArr);
      try{
        if (this.darArr.length == 0 && (projectinfo_.OwnerEmpNo == this.Current_user_ID || projectinfo_.Responsible == this.Current_user_ID)) {
// user is prj owner
// user is prj resp + he does not contains any actions.
          this.showaction = false;
        }
        else if (this.darArr.length == 0 && projectinfo_.OwnerEmpNo != this.Current_user_ID && projectinfo_.Responsible != this.Current_user_ID) {
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
                  {
                    this.actionCode = selectedActionOpt.Project_Code;
                    this.getADetails(this.actionCode);
                  }
                }
        }


      }catch(e){
          console.error(e);
      }


     // detect members without actions. excluding inactive members also.
     if(['001','002'].includes(projectinfo_.Project_Block)){
     this.hasNoActionMembers=[];
     let pMemberwithActns=this.Subtask_Res_List.map(ob=>ob.Team_Res);
     const arr=[];
     
     pracis.forEach((tmember)=>{
      if( tmember.Emp_No!=projectinfo_.OwnerEmpNo&&pMemberwithActns.includes(tmember.Emp_No)==false&&tmember.Emp_Active==true){
            if(arr.findIndex(ob=>ob.Emp_No==tmember.Emp_No)==-1)
            arr.push({  Emp_No:tmember.Emp_No.trim(), Emp_Name:tmember.RACIS.trim() });
      }
     });
     this.hasNoActionMembers=arr;
    }
    // detect members without actions


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
    this.isPrjNameValid=this.isValidString(this.ProjectName,3);
    this.isPrjDesValid=this.isValidString(this.ProjectDescription,5);


// check all mandatory fields are provided or not
   if(!(
        (this.ProjectName&&this.ProjectName.trim()!=''&&(this.ProjectName&&this.isPrjNameValid==='VALID'&&this.ProjectName.length <=100)  )&&
        // (this.ProjectDescription&&this.ProjectDescription.trim()!='')
        (this.ProjectDescription&&this.ProjectDescription.trim()!=''&&this.ProjectDescription?(this.characterCount<=500)&&(this.ProjectDescription&&this.isPrjDesValid==='VALID'&&this.ProjectDescription.length <=500) :false)

      ))
   {
      this.formFieldsRequired=true;
      return;
   }
   else this.formFieldsRequired=false;  // back to initial value.
// check all mandatory fields are provided or not

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
          this.notifyService.showSuccess("Updated successfully.", "Success");
        }
        else if (data['message'] == '2') {
          this.notifyService.showError("Not updated.", "Failed");
        }
        else if (data['message'] == '5') {
          this.notifyService.showSuccess("Project transfer request sent to the new responsible " + this.responsible_dropdown.filter((element)=>(element.Emp_No===resp))[0]["RACIS"], "Updated successfully.");
        }
        else if (data['message'] == '6') {
          this.notifyService.showSuccess("Updated successfully,"+" Project transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully.");
        }
        else if (data['message'] == '8') {
          this.notifyService.showError("Selected project owner cannot be updated.", "Not updated");
        }
        this.getProjectDetails(this.URL_ProjectCode);
        this.closeInfo();
      });
    }
    else if (val == 1) {
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Project_Code = this.URL_ProjectCode;
      this.approvalObj.json = jsonvalue;
      this.approvalObj.Remarks = this._remarks;
      this.approvalObj.isApproval = val;

      this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
        console.log(data['message'], "edit response");
        if (data['message'] == '3') {
          this.notifyService.showSuccess("Project updated and Approved successfully.", "Success");
          this.Close_Approval();
        }
        else if (data['message'] == '2') {
          this.notifyService.showError("Not updated.", "Failed");
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



  updatingAction: boolean = false;

  isactionValid:'TOOSHORT'|'VALID'='VALID';
  isactdesValid:'TOOSHORT'|'VALID'='VALID';



  onAction_update() {
    
    this.updatingAction = true;
// check all mandatory field are provided.
this.isactionValid=this.isValidString(this.ActionName,2);
this.isactdesValid=this.isValidString(this.ActionDescription,3);

    if(!( (this.ActionName.trim() != '' && this.ActionName&&this.ActionName.length<=100&&this.ActionName&&this.isactionValid=='VALID')

      &&(this.ActionDescription?(this.characterCount_Action<=500)&&(this.ActionDescription&&this.isactdesValid==='VALID')&&this.ActionDescription.trim()!='' :false)&&

         this.ActionOwner&&this.ActionResponsible&&
         this.selectedcategory&&this.ActionClient&&
         this.ActionstartDate&&this.ActionendDate&&
         this.editAllocatedhours&&(this.editAllocatedhours<=this.ActionmaxAllocation))
       ){
            this.formFieldsRequired=true;
            return;
    }else this.formFieldsRequired=false;   // back to initial value.
// check all mandatory field are provided.

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
            this.notifyService.showSuccess("Updated successfully.", "Success");
            this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
          }
          else if (data['message'] == '2') {
            this.notifyService.showError("Not updated.", "Failed");
          }
          else if (data['message'] == '5') {
            this.notifyService.showSuccess("Project transfer request sent to the new responsible " + this.actionresponsible_dropdown.filter((element)=>(element.Emp_No===actionresp))[0]["RACIS"], "Updated successfully.");
          }
          else if (data['message'] == '6') {
            this.notifyService.showSuccess("Project transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully.");
          }
          else if (data['message'] == '8') {
            this.notifyService.showError("Selected action owner cannot be updated.", "Not updated");
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
        this.notifyService.showSuccess("Updated successfully.", "Success");
        this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
      }
      else if (data['message'] == '2') {
        this.notifyService.showError("Not updated", "Failed");
      }
      else if (data['message'] == '5') {
        this.notifyService.showSuccess("Project transfer request sent to the new responsible "+ this.actionresponsible_dropdown.filter((element)=>(element.Emp_No===actionresp))[0]["RACIS"], "Updated successfully.");
      }
      else if (data['message'] == '6') {
        this.notifyService.showSuccess("Updated successfully"+"Project transfer request sent to the owner "+ this.projectInfo.Owner, "Updated successfully.");
      }
      else if (data['message'] == '8') {
        this.notifyService.showError("Selected action owner cannot be updated", "Not updated");
      }

      this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
      this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
      this.closeInfo();
    });
  }
  this.updatingAction = false;
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
        // console.log("bhai this is your DAR array:", this.darArray);
        this.totalHours = (data1[0]['Totalhours']);
        console.log(this.totalHours,"this.totalhourtotalhour")
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

  // orgValueChange(val) {
  //   this.current_Date = moment(val.value).format("MM/DD/YYYY");
  // }

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
   this.dateF&&
   (this.starttime<this.endtime)
  // &&((isPrjCoreSecondary&&this.actionCode&&this.bothActTlSubm)?(this._remarks&&(this.proState?this.selectedFile:true)):true)
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
          this.a_details=null;
          this.a_loading=false;
        }
      });
      this.dar_details();
      this.getDarTime();
      this.actionCode=null
      this.workdes = "";
      this.starttime = null;
      this.endtime = null;
      this.notProvided=false;
      this.closedarBar()
    // document.getElementById("newdetails").classList.remove("position-fixed");
    // document.getElementById("darsidebar").classList.remove("kt-quick-panel--on");
    // document.getElementById("rightbar-overlay").style.display = "none";
    // this.Clear_Feilds();
   }
   else // some mandatory field are missing.
    {
      this.notProvided=true;
    // if start time, end time or date if not provided.
    if(!(this.starttime&&this.endtime&&this.dateF)){
      setTimeout(()=>document.getElementById("dropdown-timeline-menu").classList.add("show"),0);
    }
    //
    }
 }



  onActionChanged(e) {
    let i;
    for (i = 0; i < this.projectActionInfo.length; i++)
      if (this.projectActionInfo[i].Project_Code.toString().trim() === e.toString().trim())
        break;
    if (i !== this.projectActionInfo.length)
      this.currentActionView = i;

    this.prostate(this.projectActionInfo[this.currentActionView].proState);
    this.getADetails(this.projectActionInfo[this.currentActionView].Project_Code);
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
         console.log('porfolios at details:',this._portfoliosList);
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
    this.linkPort=true;


    this._calenderDto = new CalenderDTO();

    this._calenderDto.Emp_No = this.Current_user_ID;
    this._calenderDto.Project_Code = null;
    this.GetProjectAndsubtashDrpforCalender();

    // this._calenderDto.Emp_No = this.Current_user_ID;
    // console.log("Portfoliolist_1:",this._calenderDto.Emp_No);
    // this._calenderDto.Project_Code = this.URL_ProjectCode;
    // this.CalenderService.GetCalenderProjectandsubList(this.URL_ProjectCode).subscribe
    // ((data) => {

    //   this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);

    //   console.log("Portfoliolist_1:",this.Portfoliolist_1);

    // });

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
    if(this.Portfolio==' '||this.Portfolio==null){
      this.notifyService.showInfo("Please select porfolio(s) to link",'Request cancelled');
      return;
    }

    this.Portfolio=this.Portfolio.map((res)=>({"Port_Id": res}))
    this.selectedportID = JSON.stringify(this.Portfolio);
    if (this.selectedportID != null) {

      this.objPortfolioDto.SelectedPortIdsJson = this.selectedportID;
      this.objPortfolioDto.Project_Code = this.URL_ProjectCode;
      this.objPortfolioDto.Emp_No = this.Current_user_ID;
      this.service.InsertPortfolioIdsByProjectCode(this.objPortfolioDto).
        subscribe((data) => {

          this._Message = (data['message']);
          
          if (this._Message == 'Updated Successfully.') {
            this.getPortfoliosDetails();
            this.Portfolio=[];
            this.notifyService.showSuccess("Project successfully added to selected portfolio(s).", this._Message);
          } else {
            this.notifyService.showInfo("Please select atleast one portfolio and try again.", "");
          }
        });

    }


    this.ngDropdwonPort = [];
    //this.closeLinkSideBar();
    this.getPortfoliosDetails();
    this.linkPort=false
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
          this.notifyService.showSuccess("Deleted successfully. ", '');
        });
      }
      else {
        this.notifyService.showInfo("Action cancelled. ", '');
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


      const isactiondetails:boolean=((data[0]['actiondetails']!='[]'&&data[0]['actiondetails']!=null)&&data[0]['actiondetails'].length>0);
      const isapprovaldetails:boolean=(data[0]['approvaldetails']!='[]'&&data[0]['approvaldetails'].length>0);



      if (isactiondetails || isapprovaldetails) {
        if (isactiondetails) {
          let action_details = JSON.parse(data[0]['actiondetails']);

          this.mainDeadline = action_details[0]['mainDeadline'];
          this.mainowner = action_details[0]['mainowner'];
          this.mainResp = action_details[0]['mainResp'];
          this.mainAutho = action_details[0]['mainAutho'];
          this.mainMastercode = action_details[0]['Master_Code'];
          this.isAction = true;
        }
        if (isapprovaldetails)
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




  closeInfoProject() {
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
    this.invalidFileSelected=false;
    this.formFieldsRequired=false;
    // $('#_file1').val('');
    // $('#upload').html('Select a file');
    // this.OnClickCheckboxProjectUpdate();
    // this.Clear_Feilds();
  }





  updateMainProject() {
// for checking whether mandatory fields are provided or not.


  if((this.projectInfo.Project_Type!='To do List' && this.isAction==false) &&
  (!(this.selectedFile&&this._remarks&&this._remarks.trim()))){
    this.formFieldsRequired=true;
    return;
 }


  if((this.projectInfo.Project_Type=='To do List' || this.isAction==true)&&(!(this._remarks&&this._remarks.trim()))){
     this.formFieldsRequired=true;
     return;
  }
// for checking whether mandatory fields are provided or not.

    // if (this.projectInfo.Project_Type == 'To do List') {
    //   this.selectedFile = null;
    // }

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
                  this.notifyService.showInfo("File uploaded successfully", "Project updated");
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
      this.notifyService.showSuccess("Successfully updated", 'Action completed');
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
            // console.log(this.AttachmentList,'fileuploading fileupdloading')
            // console.log('my AttachmentList:',JSON.parse(this.AttachmentList[0]['JsonData']));
            this._TotalDocs = JSON.parse(data[0]["TotalDocs"]);
            console.log(this._TotalDocs,"this._TotalDocsthis._TotalDocs")
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
        this.newcomments = (this.requestDetails[0]['NewRemarks']);
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
  mtg_section:'UPCOMING'|'TODAY'|'LAST7DAYS'|'LASTMONTH'|'OLDER'|'CUSTOM'='TODAY';

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
    this.isLoadingData=true;
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
        this.isLoadingData=false;

        if(this.upcomingMeetings.length>0 && this.todaymeetings.length>0){
         this.mtg_section='TODAY';
        }else if (this.upcomingMeetings.length>0){
          this.mtg_section='UPCOMING';
        }


      // by default today section is opened, below line set the first meeting to open if present.
      setTimeout(()=>{
         this.toggleMtgsSection(this.mtg_section);
      },1000);
      // by default today section is opened, below line set the first meeting to open if present.

      });


    //
  }







  openMeetingSidebar() {
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
    this.characterCount_Meeting=0;
    this.Description_Type=null;

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

  toggleMtgsSection(sec:'UPCOMING'|'TODAY'|'LAST7DAYS'|'LASTMONTH'|'OLDER'|'CUSTOM'){
    
    this.mtg_section=sec;
    const bx=this.mtg_section=='UPCOMING'?'#upcoming_meetings_tabpanel div#upcoming-mtg-0-btn':
             this.mtg_section=='TODAY'?'#today_meetings_tabpanel div#today-mtg-0-btn':
             this.mtg_section=='LAST7DAYS'?'#last_7_days_meetings_tabpanel div#last7d-mtg-0-Btn':
             this.mtg_section=='LASTMONTH'?'#last_month_meetings_tabpanel div#lastmonth-mtg-0-Btn':
             null;
    if(bx){
        const btn:any=document.querySelector(bx);
        if(btn&&btn.getAttribute('aria-expanded')=='false'){
          btn.click();
        }
    }
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
    placeholder: 'Please enter description',
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
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
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



 onfocus(val) {
    console.log(val, "ttt");
  }


Task_type(value:number){

  this.meetingsViewOn=false;      // opens the meeting event task section and closes the meeting view section.
  this.MasterCode=(value===1)?this.projectInfo.Project_Code:[this.projectInfo.Project_Code];    // by default only the project opened is included in the select project field.
  this.Portfolio=[];                                  // by default no portfolio is selected
  this.selectedrecuvalue = "0";
  this._PopupConfirmedValue = 1;
  // this.MinLastNameLength = true;
  this._subname = false;
  this._calenderDto = new CalenderDTO();
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

  document.getElementById("weekly_121_new").style.display = "none";
  document.getElementById("div_endDate_new").style.display = "none";
  document.getElementById("Monthly_121_new").style.display = "none";



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
      $('#subtaskid').css('display','flex');
      $('#Guest_Name').css('display','none');
      $('#Location_Name').css('display','none');
      $('#Descrip_Name').css('display','none');
      $("#meeting-online-add").css('display','none')
      $('#core_viw123').css('display','flex');
      $('#core_viw121').css('display','none');
      $('#core_viw').css('display','block');
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
        $('#Guest_Name').css('display','flex');
        $('#Location_Name').css('display','none');
        $('#Descrip_Name').css('display','flex');
        $('#core_viw121').css('display','flex');
        $('#core_viw123').css('display','none');
        $('#core_viw222').css('display','flex');
        $('#core_Dms').css('display','flex');
       $('#online-add').css('display','block');


      // const es=document.getElementById('event-Sidebar');
      // es.addEventListener('scroll',()=>{
      //       this.autocompletes.forEach((ac)=>{
      //         if(ac.panelOpen)
      //         ac.updatePosition();
      //       });
      // })



                  // valid starttimearr and endtimearr setting start.
                  let _inputdate=moment(this._StartDate,'YYYY-MM-DD');
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
                  }
                  else
                  this.validStartTimearr=[...this.StartTimearr];

                  console.log(this.validStartTimearr,'this.validStartTimearr')

                  this.timingarryend = [];
                  this.Time_End = [];
                  this.Time_End = [...this.StartTimearr];

                  let _index = this.Time_End.indexOf(this.Startts);
                  if (_index + 1 === this.Time_End.length) {
                    _index = -1;
                  }
                  this.timingarryend = this.Time_End.splice(_index + 1);
                  this.EndTimearr = this.timingarryend;
                  // valid starttimearr and endtimearr setting end.
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

        this.Attachments_ary = this.EventScheduledjson[0].Attachmentsjson;
        console.log(this.Attachments_ary, "Attachments_ary");
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

  subtashDrpLoading:boolean = false
  GetProjectAndsubtashDrpforCalender() {

    this.CalenderService.GetCalenderProjectandsubList(this._calenderDto).subscribe
      ((data) => {

        this.subtashDrpLoading=false;
        this.ProjectListArray = JSON.parse(data['Projectlist']);
        this._EmployeeListForDropdown = JSON.parse(data['Employeelist']);
        this.companies_Arr=JSON.parse(data['Client_json']);
        const racisPeople=this.Project_List.map(item=>item.Emp_No);
        this._EmployeeListForDropdown.sort((el:any)=>{
        return racisPeople.includes(el.Emp_No)?-1:+1
         });    // to change the order : first racis people and then rest

        this.Portfoliolist_1 = JSON.parse(data['Portfolio_drp']);


        console.log("_EmployeeListForDropdown",this._EmployeeListForDropdown);
        console.log("Portfoliolist_1:",this.Portfoliolist_1);
        console.log("ProjectListArray:",this.ProjectListArray);
        console.log('companies_Arr :',this.companies_Arr);

      });
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


  // onFileChange1(event) {

  //   if (event.target.files.length > 0) {
  //     var length = event.target.files.length;
  //     for (let index = 0; index < length; index++) {
  //       const file = event.target.files[index];
  //       var contentType = file.type;
  //       if (contentType === "application/pdf") {
  //         contentType = ".pdf";
  //       }
  //       else if (contentType === "image/png") {
  //         contentType = ".png";
  //       }
  //       else if (contentType === "image/jpeg") {
  //         contentType = ".jpeg";
  //       }
  //       else if (contentType === "image/jpg") {
  //         contentType = ".jpg";
  //       }
  //       this.myFiles.push(event.target.files[index].name);
  //       // alert(this.myFiles.length);
  //       console.log(this.myFiles, "attach")
  //       //_lstMultipleFiales
  //       var d = new Date().valueOf();
  //       this._lstMultipleFiales = [...this._lstMultipleFiales, {
  //         UniqueId: d,
  //         FileName: event.target.files[index].name,
  //         Size: event.target.files[index].size,
  //         Files: event.target.files[index]
  //       }];
  //     }
  //   }

  //   const uploadFileInput = (<HTMLInputElement>document.getElementById("uploadFile"));
  //   uploadFileInput.value = null;
  //   uploadFileInput.style.color = this._lstMultipleFiales.length === 0 ? 'darkgray' : 'transparent';
  // }


  onFileChange1(event) {
 
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
    // let sd = event.value.format("YYYY-MM-DD").toString();
    let sd = event.format("YYYY-MM-DD").toString();
    this._SEndDate = event.format("YYYY-MM-DD").toString();
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


    let objIndex = this.dayArr1.findIndex((obj => obj.value == days.target.value));
    this.dayArr1[objIndex].checked = days.target.checked;

    if(days.target.checked&&this.notProvided1=='dayarr1')
      this.notProvided1="";
  }


  selectmonthlydays(day) {
    let objIndex = this.MonthArr1.findIndex((obj => obj.value == day.target.value));
    this.MonthArr1[objIndex].checked = day.target.checked;

    if(day.target.checked&&this.notProvided1=='montharr1')
      this.notProvided1="";
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
    this.EventNumber=null;
    this.Subtask = null;
    this.characterCount_Meeting=0;
    this.Description_Type=null;
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


    this.mtgOnDays=[];
    this.notProvided = false;
    this.subtask_loading=false;
    this._onlinelink=false;
    this._meetingroom=false;
    this.subtashDrpLoading=false;
    this.loading=false;
    this.allAgendas = [];
    this.Link_Details = null;
    this.Meeting_Id = null;
    this.Meeting_password = null;

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

  formatTime1(hour, minute) {
    return moment({ hour, minute }).format("hh:mm A");
  }






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

         var vAgendas = "Meeting_Agendas";
        const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
        element[vAgendas] = mtgAgendas;


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

      frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
      frmData.append("CreatedBy", this.Current_user_ID.toString());
      console.log(JSON.stringify(finalarray), "finalarray")
      this._calenderDto.draftid = this.draftid;



      console.log('_calenderDto obj:', JSON.parse(this._calenderDto.ScheduleJson));

      this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
        (data => {

          var Attamentdraftid= '0'
          frmData.append("draftid", Attamentdraftid= Attamentdraftid);


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
          if (this._Message == "Update successfully") {
            if (this.draftid != 0) {
              this.Getdraft_datalistmeeting();
              this.draftid = 0
            }
            this.notifyService.showError(this._Message, "Failed");




          }
          else {
            this.notifyService.showSuccess(this._Message, "Success");
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


holdcontinue(Pcode:any){
       this.Holddate = this.datepipe.transform(this.Holddate, 'MM/dd/yyyy');
       this.objProjectDto.Project_holddate = this.Holddate;
       this.objProjectDto.Project_Code = Pcode;
       this.objProjectDto.Remarks = this.hold_remarks;
       this.service._ProjectHoldService(this.objProjectDto).subscribe(data => {

         this._Message = data['message'];
         if (this._Message == 'Project Hold Updated') {

          this.HprocessDone--;

           if(this.currentActionView!==undefined)
           this._Message=this._Message.replace('Project','Action')

           this.notifyService.showSuccess(this._Message + " by " + this._fullname, "Success");
           this.closePrjHoldSideBar();
           this.getProjectDetails(this.URL_ProjectCode,this.currentActionView);
           this.getholdate();
           this.getRejectType();
           this.updatePortfolioPage();
           if(this.currentActionView!==undefined){
             this.GetActionActivityDetails(this.projectActionInfo[this.currentActionView].Project_Code);
             }else{
               this.GetActivityDetails();

             }


         }
       });
}



  newPrjDeadline:any;
  extendAndHold:boolean=false;
  isEHsectionVisible:boolean=false;
  minPrjDeadline:Date;
  HprocessDone:number=0;

  onHoldDateChanged(){

    const d1=new Date(this.Holddate);
    const d2=new Date(this.projectInfo.EndDate);
    this.isEHsectionVisible=d1>d2;
    d1.setDate(d1.getDate()+1);
    this.minPrjDeadline=d1;
}


  onProject_Hold(id, Pcode) {

  if(this.Holddate&&this.hold_remarks&&(this.extendAndHold?this.newPrjDeadline:true)){
       // if holddate and remarks are provided.
      this.HprocessDone=this.extendAndHold?2:1;

      if(this.isEHsectionVisible){
            if(this.extendAndHold){


    // 1. PRJ UPDATE     (updating project using 'newPrjDeadline' )
                   var datestrStart = moment(this.projectInfo.StartDate).format("MM/DD/YYYY");
                   var datestrEnd = moment(this.newPrjDeadline).format("MM/DD/YYYY");
                   const jsonobj = {
                    Project_Type: this.projectInfo.Project_Block,
                    Project_Name: this.projectInfo.Project_Name,
                    Project_Description: this.projectInfo.Project_Description,
                    Owner: this.projectInfo.OwnerEmpNo,
                    Responsible: this.projectInfo.ResponsibleEmpNo,
                    Category: this.projectInfo.Reportid,
                    Client: this.projectInfo.ClientNo,
                    StartDate: datestrStart,
                    EndDate: datestrEnd,
                    SubmissionName: 0,
                    AllocatedHours: this.projectInfo.AllocatedHours,
                    Recurrence:this.projectInfo.Annual_date
                  }
                  const jsonvalue = JSON.stringify(jsonobj);

                    this.approvalObj.Emp_no = this.Current_user_ID;
                    this.approvalObj.Project_Code = this.URL_ProjectCode;
                    this.approvalObj.json = jsonvalue;
                    this.approvalObj.Remarks = '';
                    this.approvalObj.isApproval = 0;

                    this.approvalservice.NewUpdateNewProjectDetails(this.approvalObj).subscribe((data) => {
                      this.HprocessDone--;
                      console.log(data['message'], "edit response");
                      if (data['message'] == '1') {
                        this.notifyService.showSuccess("Updated successfully.", "Success");
                      }
                      else if (data['message'] == '2') {
                        this.notifyService.showError("Not updated", "Failed");
                      }
                    });

   // 2. PRJ HOLD
           this.holdcontinue(Pcode);

            }
            else
            {
                  Swal.fire({
                    text:'Continuing will make you accountable for project delays. Do you still want to proceed?',
                    showConfirmButton:true,
                    confirmButtonText:'Hold Anyway',
                    confirmButtonColor:'',
                    showCancelButton:true,
                    icon:'warning',
                  }).then((choice1:any)=>{
                      if(choice1.value===true)
                        this.holdcontinue(Pcode);
                      else
                        this.HprocessDone=0;
                  });
            }

      }
      else
      this.holdcontinue(Pcode);

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
        this.HprocessDone=1;
        if (this.Current_user_ID == this.projectInfo.ResponsibleEmpNo || this.Current_user_ID == this.projectInfo.OwnerEmpNo) {
          this.approvalObj.Project_Code = this.URL_ProjectCode;
          this.approvalObj.Request_type = 'Project Release';
          this.approvalObj.Emp_no = this.Current_user_ID;
          this.approvalObj.Remarks = this.hold_remarks;
          this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
            this.HprocessDone=0;
            this.closePrjReleaseSideBar();
            this._Message = (data['message']);
            if (this._Message == '1') {
              this.notifyService.showSuccess("Project released by " + this._fullname, "Success");
              this.getProjectDetails(this.URL_ProjectCode);
              this.getRejectType();
              this.updatePortfolioPage();
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
        this.HprocessDone=1;
        this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
          this.HprocessDone=0;
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

    this.isEHsectionVisible=false;
    this.newPrjDeadline=undefined;
    this.extendAndHold=false;
    this.minPrjDeadline=undefined;

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

  if(this.hold_remarks&&this.hold_remarks.trim()!=''){

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
              this.notifyService.showSuccess("Project cancel request sent to the project owner.", "Success");
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
  ShowProgress: boolean = false;
  processingStd:boolean=false;
  achieveStandard() {
    if(!(this._remarks&&this._remarks.trim())||this.selectedFile==null){
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
    this.processingStd=true;
    this.service._UpdateStandardTaskSubmission(fd).
      subscribe((event: HttpEvent<any>) => {
        this.processingStd=false;
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.ShowProgress=true;
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(this.progress, "progress");
            if (this.progress == 100) {
              this.ShowProgress=false;
              this.notifyService.showInfo("File uploaded successfully", "Project updated");
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
        this.getProjectDetails(this.URL_ProjectCode);
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
    this.processingStd=true;
    this.service._UpdateStandardTaskSubmission(fd).
      subscribe(event => {
        this.processingStd=false;
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
          this.notifyService.showInfo("File uploaded successfully", "Project updated");
        }
        else if (event.type === HttpEventType.Response) {
          var myJSON = JSON.stringify(event);
          this._Message = (JSON.parse(myJSON).body).Message;
          this.notifyService.showSuccess(this._Message, 'Success');
        }
        this.closeInfo();

      });
      this.getProjectDetails(this.URL_ProjectCode);
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
          this.notifyService.showError("Project support team not updated", "Failed");
        }
        else if (this._Message == '1') {
          this.notifyService.showSuccess("Project support team updated successfully", "Success");

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
filterConfig:{ filterby:string[], sortby:string[] }={ 
    filterby:['All'],
    sortby:['All']
};



onFilterConfigChanged(ob:{ filterBy:string[], sortBy:string[]}){
  const {filterBy,sortBy}=ob;
  if(filterBy&&sortBy){
    this.filterConfig.filterby=filterBy;
    this.filterConfig.sortby=sortBy;
    this.filterConfigChanged=true;
    this.filteredPrjAction=this.getFilteredPrjActions(this.filterConfig.filterby,this.filterConfig.sortby);
  }
}

clearFilterConfigs(){
  this.filterConfig.filterby=['All'];
  this.filterConfig.sortby=['All'];
  this.filteredPrjAction=this.getFilteredPrjActions(this.filterConfig.filterby,this.filterConfig.sortby);
  this.filterConfigChanged=false;
}



onActnFilterOptionClicked(section:'filterby'|'sortby',item:string){
  if(item=='All'){
      if(this.filterConfig[section].length==1&&this.filterConfig[section][0]=='All')
      this.filterConfig[section]=[];
      else  
      this.filterConfig[section]=this.filterConfig[section]=[item];
  }else{
    
    if(this.filterConfig[section].length==1&&this.filterConfig[section][0]=='All'){
       this.filterConfig[section]=[];
    }
     
    if(this.filterConfig[section].includes(item)==false){
      this.filterConfig[section].push(item);
     }
     else{
       const i=this.filterConfig[section].indexOf(item);
       this.filterConfig[section].splice(i,1);
     }
  }

  console.log(this.filterConfig);
  
  this.onFilterConfigChanged({filterBy:this.filterConfig.filterby, sortBy:this.filterConfig.sortby});  
}




// count:any
getFilteredPrjActions(filterby:string[]=['All'],sortby:string[]=['All']){
  
if(['001','002'].includes(this.projectInfo.Project_Block)){
  let arr=this.projectActionInfo||[];

  const isAssignedbyme=sortby.includes('Assigned By me');

  arr=arr.filter((action)=>{
    const x=(filterby[0]=='All'||filterby.includes(action.Status));
    const y=(sortby[0]=='All'||sortby.includes(action.Team_Res.trim())|| (isAssignedbyme?(action.AssignedbyEmpno.trim()==this.Current_user_ID&&action.AssignedbyEmpno!=action.Team_Res):false));
    return x&&y;
  })
 

 

  
  // if(!(filterby.includes('All')&&sortby.includes('All')))
  // {
  //   if(sortby!=='All'){
  //    if(sortby!=='Assigned By me'){  // when sortby is 'md waseem akram','aquib shabaz' .....
  //     arr=arr.filter((action)=>{
  //       return action.Team_Res.trim()===sortby;
  //      });
  //    }
  //    else{  // when sortby is 'Assigned By me'
  //       arr=arr.filter((action)=>{
  //             return (action.AssignedbyEmpno.trim()==this.Current_user_ID&&action.AssignedbyEmpno!=action.Team_Res);
  //       });
  //    }
  //   }

  //   if(filterby!=='All'){
  //     arr=arr.filter((action)=>{
  //        return action.Status===filterby;
  //      })

  //   }
  // }

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


openNewPrjReleaseSideBar() {
  document.getElementById("new-prj-release-sidebar").classList.add("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "block";
  document.getElementById("newdetails").classList.add("position-fixed");
}


closeNewPrjReleaseSideBar() {
   this.hold_remarks = '';
   this.notProvided=false;
   this.isReleasingAction=false;
  document.getElementById("new-prj-release-sidebar").classList.remove("kt-quick-active--on");
  document.getElementById("rightbar-overlay").style.display = "none";
  document.getElementById("newdetails").classList.remove("position-fixed");
}

getRejectType() {
  this.approvalObj.Project_Code = this.URL_ProjectCode;
  this.approvalservice.GetRejecttype(this.approvalObj).subscribe((data) => {  console.log('getrejecttype:',data);
    this.activity = data[0]["activity"];
    this.send_from = data[0]["sendFrom"];
    this.rejectactivity = data[0]["rejectactivity"];
    this.lastactivity = JSON.parse(data[0]["lastactivity"]);
    console.log('activity:',this.activity,'last activity:', this.lastactivity);
  });
}


activity1: any;
lastactivity1: any;
send_from1: any;
rejectactivity1: any;

getActionRejectType(actioncode:any) {
  this.approvalObj.Project_Code = actioncode;
  this.approvalservice.GetRejecttype(this.approvalObj).subscribe((data) => { 
    this.activity1 = data[0]["activity"];
    this.send_from1 = data[0]["sendFrom"];
    this.rejectactivity1 = data[0]["rejectactivity"];
    this.lastactivity1 = JSON.parse(data[0]["lastactivity"]);
    console.log('action activity:',this.activity1,'action last activity:', this.lastactivity1);
  });
}




isReleasingAction:boolean=false;
newPrjreleasing:boolean=false;
releasenewProject(){


  this.isReleasingAction=!(this.currentActionView===undefined||this.currentActionView===null);

  if(!this.hold_remarks||this.hold_remarks.trim()==''){
    this.notProvided=true;
      return;
  }

  if(
    [this.projectInfo.OwnerEmpNo,this.projectInfo.ResponsibleEmpNo].includes(this.Current_user_ID)||
    (this.isReleasingAction?([this.projectActionInfo[this.currentActionView].Project_Owner,this.projectActionInfo[this.currentActionView].Team_Res].includes(this.Current_user_ID)):true)
    ){

      this.approvalObj.Project_Code = this.isReleasingAction?this.projectActionInfo[this.currentActionView].Project_Code:this.URL_ProjectCode;
      this.approvalObj.Request_type = 'New Project Reject Release';
      this.approvalObj.Emp_no = this.Current_user_ID;
      this.approvalObj.Remarks = this.hold_remarks;
      this.newPrjreleasing=true;
      this.approvalservice.InsertUpdateProjectCancelReleaseService(this.approvalObj).subscribe((data) => {
        this.newPrjreleasing=false;
        this.closeNewPrjReleaseSideBar();
        this._Message = (data['message']);
        if (this._Message == '1') {
          if(this.isReleasingAction)
            this.notifyService.showSuccess("New Action reject release request send.", "Success");
          else
            this.notifyService.showSuccess("New Project reject release request sent to the project owner.", "Success");

          this.getProjectDetails(this.URL_ProjectCode);
          this.getRejectType();
          if(this.isReleasingAction)this.getActionRejectType(this.projectActionInfo[this.currentActionView].Project_Code);
          this.getapproval_actiondetails();

          if(this.Current_user_ID==this.projectInfo.OwnerEmpNo)
          {
            this.isApprovalSection=true; // back to initial value
            this.isTextAreaVisible=false;    // back to initial value
            this.getapprovalStats();
          }



        }
        else if (this._Message == '2' || this._Message == '0') {
          this.notifyService.showError(`${this.isReleasingAction?'Action':'Project'} release failed`, "Failed");
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
    this.notifyService.showInfo("Please reject the project first and then you can change the project responsible as the project is in completion under approval.","Not editable");
  }
  else{
    this.notifyService.showInfo("Please complete the approval process and change the project responsible.","Not editable");
  }
}

displaymessagemain(){
  this.notifyService.showInfo("Project owner cannot be changed.","Not editable");
}


formatTimes(time: string): string {
  if(time){
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));

    const options :any = { hour: 'numeric', minute: 'numeric', hour12: true };
    const x=date.toLocaleTimeString('en-US', options);
    return x;
  }
  return '';
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
lastActivityOn:string|undefined;

showFullGraph(){
  let alldates=this.Activity_List.map(actvy=>actvy.ModifiedDate);    //  ['2024-02-02','2024-02-03','2024-02-02','2023-08-11']
  alldates=Array.from(new Set(alldates)).reverse();    // ['2023-08-11','2024-02-02','2024-02-03']   distinct and reverse
  this.lastActivityOn=alldates[alldates.length-1];   // last activity on
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
    let myChart=new FusionCharts({
      type: "zoomline",
      renderAt: "full-graph",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource:dataSource
    }).render();

 // resolves slowness occuring in the starting. by rendering graph again.
    myChart=new FusionCharts({
      type: "zoomline",
      renderAt: "full-graph",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource:dataSource
    }).render();
// resolves slowness occuring in the starting. by rendering graph again.

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
  console.log(d);
  this.activitiesOnthat=this.getActivitiesOf(d);
  const currentDt=new Date();
  const dateClicked=new Date(d);
  this.selectedactvy=(dateClicked.toDateString()==currentDt.toDateString())?'TODAY':this.lastActivityOn==d?`Last Activities on ${d}`:d;
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
    title: 'Action cancel',
    html: 'Are you sure to cancel the Action "<strong>' + this.projectActionInfo[index].Project_Name + '</strong>"?<br>Note: The cancelled Action will be deactivated.',
    // icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((response: any) => {
    if (response.value) {

    if([this.projectInfo.OwnerEmpNo,this.projectInfo.ResponsibleEmpNo,this.projectActionInfo[index].Project_Owner,this.projectActionInfo[index].Team_Res].includes(this.Current_user_ID)||this.isHierarchy){
        // if user is project owner, project res, action owner,action resp or is in heirarchy.
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

showSelfAssignedActns(userno){
  if(userno){
    this.filteredPrjAction = this.projectActionInfo.filter((item) => {
      return (item.Project_Owner == item.Team_Res) && (item.Team_Res == userno);
    });
  }
}

showPendingAprvlActnsOfEmp(userno:string){
  if(userno){
    this.filteredPrjAction = this.projectActionInfo.filter((item) => {
      return (['Under Approval','Forward Under Approval'].includes(item.Status)) && (item.Team_Res==userno);
    });
  }
}


showActionsWithNoProgress(){
  this.filteredPrjAction=this.projectActionInfo.filter(item=>this.actnsWithoutProgress.includes(item.Project_Code));
}


// start meeting feature start

meetingReport(mtgScheduleId:any) {
  
  let name: string = 'Meeting-Details';
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

showRecallMeetingsView() {

  document.getElementById("recall-meeting").style.display = "block";
  document.getElementById("main-meeting").style.display = "none";
}
backMainMeetings() {
  document.getElementById("recall-meeting").style.display = "none";
  document.getElementById("main-meeting").style.display = "block";
  this.selectedMtgs2Link=[];  // clear selected meetings.
}




Attamentdraftid:any


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
  for (var i = 0; i < this._lstMultipleFiales.length; i++) {
    frmData.append("fileUpload", this._lstMultipleFiales[i].Files);
  }
  if (this._lstMultipleFiales.length > 0)
    _attachmentValue = 1;
  else
    _attachmentValue = 0;

    frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
    frmData.append("CreatedBy", this.Current_user_ID.toString());
    frmData.append("RemovedFile_id", this._calenderDto.file_ids='');
    const mtgAgendas=JSON.stringify(this.allAgendas.length>0?this.allAgendas:[]);
    this._calenderDto.DraftAgendas=mtgAgendas;


  this.CalenderService.Newdraft_Meetingnotes(this._calenderDto).subscribe
    (data => {

      this.Attamentdraftid= data['draftid']
      frmData.append("draftid", this.Attamentdraftid);

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



    let selectedStdApprovals=this.selectedStdAprvsObjs;
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
          const x=this.totalStdTskApvs-this.selectedStdAprvs.length;
          if(x===0)
            this.closeApprovalSideBar();  // close aprv sidebar.
          else
            this.backmainapproval();   // back to approvals list.

          this.selectedStdAprvs=[];
          this.selectedStdAprvsObjs=[];
          this.allStdAprSelected=false;

          this.getapprovalStats();
          this.getProjectDetails(this.URL_ProjectCode);
          this.getRejectType();
        });

    }
  }
}


// std task apr and reject code new end.


// meeting recall start



// linkMeetingToProject(mtgScheduleid:any){


//   // this.obj_CalenderDTO.Emp_No=obj.Emp_No;
//   // this.obj_CalenderDTO.Project_Code=obj.Project_Code;
//   // this.obj_CalenderDTO.flagid=obj.flagid;





//   this._calenderDto = new CalenderDTO;

//   this._calenderDto.Schedule_ID=mtgScheduleid;
//   this._calenderDto.Emp_No=this.Current_user_ID;
//   this._calenderDto.flagid=1;
//   this._calenderDto.Project_Code=this.URL_ProjectCode;
//      this.CalenderService.Newinsertproject_meetingreport(this._calenderDto).subscribe(res=>{
//         console.log("after linking:",res);
//      });
// }


isLinkableMtgsDrpDwnOpened:boolean=false;
LinkableMtgsList:any;
selectedMtgs2Link:any=[];

getLinkableMtgsList(){

    this.projectMoreDetailsService.NewGetEmployeeMeetings(this.Current_user_ID,this.URL_ProjectCode).subscribe((res:any)=>{
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


linkMtgsToProject(){

  const mtgsSelected=this.selectedMtgs2Link.join(',');
  let empno=this.Current_user_ID;
  let prj_code=this.projectInfo.Project_Code;

     this.projectMoreDetailsService.NewLinkMeetingInProjectDetails(mtgsSelected,empno,prj_code).subscribe(res=>{
            console.log(res);
            if(res){
              if(res['message']==1){
                this.notifyService.showSuccess("Successfully meeting added to the project","")
                this.backMainMeetings();
                this.GetmeetingDetails();
                this.selectedMtgs2Link=[];
              }
              else if(res['message']==2){
                this.notifyService.showError("Failed to link selected meeting into the project.","")
              }
            }
            else
            this.notifyService.showError("something went wrong","");


     })


}










// meeting recall end

updatePortfolioPage(){
  // this.bsService.updateData("new bhai data");
   localStorage.setItem('projectUpdated','1');

}



allMUlAprSelected:boolean=false;
selectedmulAprvs:any=[];
acceptAllMulApprReq(){

  if(this.selectedmulAprvs.length===0){
    this.notifyService.showError('Please choose atleast one approval.','No Approval Selected.');
    return;
  }



  const multasktoApprove=this.multiapproval_list.filter(item=>this.selectedmulAprvs.includes(item.SNo));
  if(multasktoApprove.length==0){
    this.notifyService.showInfo("Please select atleast one task to approve","Note:");
  }
  else{
    const x=this.multiapproval_list.length-multasktoApprove.length;   // decides whether the sidebar remain open or should close.
    this.approvalservice.NewUpdateAcceptApprovalsService(multasktoApprove).subscribe(data =>{
    console.log(data,"accept-data");
     if(x===0)
      this.closeMultipleSideBar();

     this.notifyService.showSuccess("approved.",'Success');
     this.getProjectDetails(this.URL_ProjectCode);
     this.getapprovalStats();
     this.selectedmulAprvs=[];
     this.allMUlAprSelected=false;

    });
  }

}


hide_mul_approval(){
  if(this.selectedmulAprvs&&this.selectedmulAprvs.length>0){
    // atleast one selection required.
  document.getElementById("multiple-approval").classList.add("d-none");
  document.getElementById("multiple-reject").classList.remove("d-none");
  }
  else{
    this.notifyService.showError('Please choose atleast one approval.','No Approval Selected.');
  }
}


onMultipleAprvSel(e,aprvls){

  aprvls.forEach(aprv=>{
        if(e.target.checked){
              if(!this.selectedmulAprvs.includes(aprv.SNo))
              this.selectedmulAprvs.push(aprv.SNo);
        }else{
              const x=this.selectedmulAprvs.indexOf(aprv.SNo);
              this.selectedmulAprvs.splice(x,1);
        }
  });

}




rejectAllmultipleAprvs(){

  if (this.selectedType == '3') {
    if (this.rejectType == null || this.rejectType == undefined || this.rejectType == '') {
      this.noRejectType = true;

      this.notifyService.showError("Please select Reject Type", "Failed");
      return false;
    }
    else {


    let selectedmultipleApprovals=this.multiapproval_list.filter(item=>this.selectedmulAprvs.includes(item.SNo));
    selectedmultipleApprovals=selectedmultipleApprovals.map(item=>({
              SNo: item.SNo,
              Type: item.Type,
              ReportType: item.ReportType,
              RejectType: item.RejectType,
              sendFrom: item.sendFrom,
              Project_Code: item.Project_Code,
              Remarks: item.Remarks,
              Rec_Date: item.Rec_Date
    }));
    selectedmultipleApprovals.forEach(element => {
        element.Remarks = this.comments;
        element.RejectType = this.rejectType;
      });

      this.approvalservice.NewUpdateSingleRejectApprovalsService(selectedmultipleApprovals).
        subscribe((data) => {

          this.notifyService.showSuccess("Approvals Rejected successfully by - " + this._fullname, "Success");

          if(this.multiapproval_list.length-this.selectedmulAprvs.length!==0){
              this.multipleback();
          }  // back to approvals list.


          this.getapprovalStats();
          this.getProjectDetails(this.URL_ProjectCode);
          this.getRejectType();

          // this.getapproval_actiondetails();

        });




    }
  }
}


onPendingAprvlClicked(aprvIndex:number){
    const resultobj=this.multiapproval_list[aprvIndex];
     const aprObj={
      SNo:resultobj.SNo,
      Type:resultobj.Type,
      ReportType:resultobj.ReportType,
      RejectType:resultobj.RejectType,
      sendFrom:resultobj.sendFrom,
      Project_Code:resultobj.Project_Code,
      Remarks: resultobj.Remarks,
      Rec_Date: resultobj.Rec_Date
  };
  this.singleapporval_json=[aprObj];      // set singleapproval_json for submit approval.
}



// pagination inside the std task aprvls start
totalStdTskApvs:number=0;
stdTskPageno:number=1;
stdTskPagesz:number=10;    // limit of aprvs per page.
reqPgno:number;
getStdTskAprvsBy(pageno:number){
      this.isLoadingData=true;
      this.approvalservice.GetStandardApprovals(this.URL_ProjectCode,pageno,this.stdTskPagesz).subscribe((data) => {
      this.isLoadingData=false;
      this.standardjson=JSON.parse(data[0]['standardJson']);   // new data
      this.totalStdTskApvs=JSON.parse(data[0]['totalcount']);
      this.stdTskPageno=this.reqPgno;     // page no of the data.

      // for select all check box status.
      this.allStdAprSelected=this.standardjson.every((apr:any)=>{
        return this.selectedStdAprvs.includes(apr.SNo);
      });  // for select all check box status.

      console.log("new std json:",this.standardjson);
    });
}

// pagination inside the std task aprvls end
file = { Sourcefile: '16_05_2024' };

getFormattedDate(date: string): string {
  return date.replace(/_/g, '-');
}

// agenda in event creation start
agendaInput: string | undefined;
allAgendas: any = [];
agendasAdded: number = 0;
totalcountofagenda:any
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
  this.totalcountofagenda = this.allAgendas.length;
  console.log("allAgendas:", this.allAgendas);
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
// agenda in event creation end



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

  customrecurrencemodal() {
    
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




FilteredAttendees:any;



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

   if(this.projectmodaltype!='participant' && this.linkSMail==false  && this.linkPort==false){
      this.FilteredResults=result;
    }
    else if(this.projectmodaltype=='participant'){
      this.FilteredResults=result;
      this.FilteredAttendees = this.FilteredResults.filter((res) =>
        this.PeopleOnProject.some(person => person.Emp_No === res.Emp_No)
       );
      this.FilteredResults=this.FilteredResults.filter((res)=>{
        return !this.FilteredAttendees.some(att => att.Emp_No === res.Emp_No);
      });
    }
    else if(this.projectmodaltype=='SMail' && this.linkSMail==true ){
      this.FilteredResults=result;

    this.FilteredResults=this.FilteredResults.filter((res)=>{
      return !this.projectMemos.some(att => att.MailId === res.MailId);
    });
    }
    else if(this.projectmodaltype=='portfolio' && this.linkPort==true ){
      this.FilteredResults=result;
      this.FilteredResults=this.FilteredResults.filter((res)=>{
        return !this._portfoliolist.some(att => att.Portfolio_ID === res.portfolio_id);
      });
    }


    console.log(this.FilteredResults,'FilteredAttendees')
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

projectsSelected: any = [];
onItemChoosed(choosed:any,choosedItem:any){
  if(choosed){
    this.choosedItems.push(choosedItem);
  }
  else{
    const i=this.choosedItems.findIndex(item=>(this.projectmodaltype==='project')?(item.Project_Code==choosedItem.Project_Code):(item===choosedItem));
    if(i>-1)
    this.choosedItems.splice(i,1);

    // when removing already selected items
    if(this.projectmodaltype==='project'){
          const j=this.MasterCode.findIndex(item=>item==choosedItem.Project_Code);
          if(j>-1){
            this.MasterCode.splice(j,1);
            this.projectsSelected.splice(j,1);
          }
    }
    else{
      const ary=this.projectmodaltype=='portfolio'?this.Portfolio:this.projectmodaltype=='SMail'?this.SelectDms:this.ngEmployeeDropdown;
      const j=ary.findIndex(item=>item==choosedItem);
      if(j>-1)
      ary.splice(j,1);
    }
       // when removing already selected items
  }
}
companies_Arr:any;
basedOnFilter:any={};
projectmodaltype:'project'|'portfolio'|'SMail'|'participant'|undefined;
choosedItems:any=[];
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


date_menu(dialogId:string){
  document.getElementById(dialogId).classList.add("show");
}
date_menu_close(dialogId:string){
  document.getElementById(dialogId).classList.remove("show");
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

 projectmodal(modaltype:'project'|'portfolio'|'SMail'|'participant'){

  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("projectmodal").style.display = "block";
  this.projectmodaltype=modaltype;
  const searchField:any=document.querySelector(`#projectmodal input#${modaltype=='project'?'PrjInputSearch':'InputSearch'}`);
  if(searchField)searchField.focus();

  if(modaltype==='project')
  this.onProjectSearch('');
        this.choosedItems.getPcodes=()=>{
        return this.choosedItems.map(item=>item.Project_Code);
    }

  if(modaltype!='project')
    this.onInputSearch('');
}

isValidURL = true;


onSubmitBtnClicked() {
  if(this.Link_Details){
    this.isValidURL = /^(https?:\/\/)/.test(this.Link_Details);
  }

  if (
    (this.Title_Name&&( this.Title_Name.trim().length>2&&this.Title_Name.trim().length<=100 ))&&
    (this.Description_Type?(this.Description_Type.trim().length<=500):true)&& this.isValidURL &&
    this.Startts &&
    this.Endtms &&
    this.MinLastNameLength
    && (this.ScheduleType === 'Event' ? this.allAgendas.length > 0 : true)
  ) {
    this.OnSubmitSchedule1();
    this.notProvided = false;
  }
  else {
    if ((!this.Title_Name)||this.Title_Name.trim().length<3||this.Title_Name.trim().length>100)
      document.getElementById('dsb-evt-titleName').focus();
    else if (this.ScheduleType === 'Event' && this.allAgendas.length === 0) { const agf: any = document.querySelector('.action-section .agenda-input-field input#todo-input'); agf.focus(); }

    this.notProvided = true;
  }
}

getObjOf(arr, id, idName) {
  if(arr){
    const obj = arr.find(item => item[idName] == id);
    return obj?obj:'';
  }
  return '';
}


validStartTimearr:any=[];
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
    document.getElementById("core_viw").style.display = "block";
    document.getElementById("core_viw121").style.display = "none";
    document.getElementById("core_viw222").style.display = "none";
    document.getElementById("core_Dms").style.display = "none";
    document.getElementById("meeting-online-add").style.display ="none";
    document.getElementById("meeting-add").style.display="none"
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
    document.getElementById("Location_Name").style.display = "none";
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
eventRepeat:boolean = false;
Meeting_Id:any;
Meeting_password:any;


OnSubmitSchedule1() {
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
      this.Link_Details =`Meeting link:- `+ this.Link_Details +`, Meeting Id:- `+ this.Meeting_Id +`, Meeting password:- `+ this.Meeting_password

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

    frmData.append("EventNumber", this.EventNumber=this.EventNumber?this.EventNumber.toString():'');
    frmData.append("CreatedBy", this.Current_user_ID.toString());
    frmData.append("RemovedFile_id", this._calenderDto.file_ids='0');
    console.log(JSON.stringify(finalarray), "finalarray")
    this._calenderDto.draftid = this.draftid;


    console.log('_calenderDto obj:', JSON.parse(this._calenderDto.ScheduleJson));

    this.CalenderService.NewInsertCalender(this._calenderDto).subscribe
      (data => {
        var Attamentdraftid= '0'
        frmData.append("draftid", Attamentdraftid= Attamentdraftid);


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
        if (this._Message == "Updated Successfully.") {
          if (this.draftid != 0) {
            this.Getdraft_datalistmeeting();
            this.draftid = 0
          }
          this.notifyService.showSuccess(this._Message.split(' ').map((word, index) => index === 1 ? word.charAt(0).toLowerCase() + word.slice(1) : word).join(' '), "Success");
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




// PROJECT auditor, Transfer functionality start.

isAuditorDrpDwnOpen:boolean=false;
selectedAuditor:any;
racisNonRacis:any=[]; // all emp list.
sprtaudtr_remarks:string|undefined;   // remarks provided during removing of auditor or support member.
p_index:number=-1;                // selection info.
processingRemove:boolean=false;
typeUserRemove:'AUDITOR'|'SUPPORT'|undefined;
sa_notProvided:boolean=false;


emp_Auditor:string|undefined;
empAuditor_remarks:string|undefined;



onAuditorSelected(e){ 
  if(e.option.value){
    const selected_emp=e.option.value;
    this.selectedAuditor=selected_emp;
  }
  this.openAutocompleteDrpDwn('auditor_DrpDwn');
}


onAuditorSubmitClicked(){
  const selected_emp=this.selectedAuditor.empNo;
  this.projectMoreDetailsService.NewUpdateProjectAuditor(this.projectInfo.Project_Code,this.Current_user_ID,selected_emp).subscribe((res:any)=>{

          if(res.message==1){
             this.notifyService.showSuccess(`${this.selectedAuditor.empName} set as Auditor`,'Success');
             this.selectedAuditor=undefined;
             this.GetPeopleDatils();
          }else if(res.message==2){
             this.notifyService.showError(`Unable to set ${this.selectedAuditor.empName} as Auditor.`,'Failed.');
          }
          else
            this.notifyService.showError('Something went wrong.','');

  });
}


removeSelectedAuditor(){
  this.selectedAuditor=undefined;
}

onChangeAuditorBtnClicked(){
     const addteamtab_btn:any=document.querySelector("a[href='#kt_tab_pane_2_4']");
     addteamtab_btn.click();
    setTimeout(()=>{
      const auditorInput:any=document.querySelector('input#auditor-inputfield');
      auditorInput.click();
    },300)
}


openRemoveSADialog(index:number,removalType:'SUPPORT'|'AUDITOR'){
  if(this.p_index>-1){
    const pindex=this.p_index;
    this.closeRemoveSADialog(pindex);
  }   // closing opened dialog if present.

  this.p_index=index;
  this.typeUserRemove=removalType;
  document.getElementById(`mark-admin-drop${this.p_index}`).classList.add("show");
  let remarks_input:any=document.querySelector(`#mark-admin-drop${this.p_index} textarea.remarks-input`); remarks_input.focus();
  document.getElementById(`pOnPrj-user-row-${index}`).classList.add('pOnPrj-row-selection');
}

closeRemoveSADialog(index:number){
  document.getElementById(`mark-admin-drop${index}`).classList.remove("show");
  document.getElementById(`pOnPrj-user-row-${index}`).classList.remove('pOnPrj-row-selection');
  this.sprtaudtr_remarks=undefined;
  this.sa_notProvided=false;
  this.typeUserRemove=undefined;
  this.p_index=-1;
}






onSARemoveSubmit(){

   if(this.sprtaudtr_remarks&&this.sprtaudtr_remarks.trim()){
        const project_code=this.projectInfo.Project_Code;
        const current_userid=this.Current_user_ID;
        const auditor_empno=this.typeUserRemove=='AUDITOR'?this.PeopleOnProject[this.p_index].Emp_No:null;
        const support_empno=this.typeUserRemove=='SUPPORT'?this.PeopleOnProject[this.p_index].Emp_No:null;
        const remarks_=this.sprtaudtr_remarks;

        this.processingRemove=true;
        this.projectMoreDetailsService.NewDeleteProjectRACIS(project_code,current_userid,auditor_empno,support_empno,remarks_).subscribe((res:any)=>{
              console.log(res);
              this.processingRemove=false;
              if(res.message==1)
              {
                if(this.typeUserRemove=='SUPPORT')
                  this.notifyService.showSuccess(`Removed ${this.PeopleOnProject[this.p_index].Emp_Name} from Support.`,'Success');
                else if(this.typeUserRemove=='AUDITOR')
                  this.notifyService.showSuccess(`Removed ${this.PeopleOnProject[this.p_index].Emp_Name} as Auditor.`,'Success');

                this.closeRemoveSADialog(this.p_index);
                this.GetPeopleDatils();

              }
              else if(res.message==2){

                if(this.typeUserRemove=='SUPPORT')
                  this.notifyService.showError(`unable to remove ${this.PeopleOnProject[this.p_index].Emp_Name} from Support.`,'Failed');
                else if(this.typeUserRemove=='AUDITOR')
                  this.notifyService.showError(`unable to remove ${this.PeopleOnProject[this.p_index].Emp_Name} as Auditor of the project.`,'Failed');
              }
              else
              this.notifyService.showError('Something went wrong.','Failed');

        });
   }
   else
   this.sa_notProvided=true;

}


auditBtnDisabled:boolean=false;
onPrjAuditSubmitClicked(){

      if(!(this.empAuditor_remarks&&this.empAuditor_remarks.trim()) || !this.emp_Auditor){
          this.notProvided=true;
          return;
      }
      else
        this.notProvided=false;

     this.auditBtnDisabled=true;   //audit processing start
     const project_code:string=this.projectInfo.Project_Code;
     const empno:string=this.Current_user_ID;
     const auditor:string=this.emp_Auditor;
     const remarks:string=this.empAuditor_remarks;
     this.projectMoreDetailsService.NewUpdateProjectAuditApproval(project_code,empno,auditor,remarks).subscribe((res:any)=>{
          console.log(res);
          this.auditBtnDisabled=false;    // audit processing end
          if(res&&res.message){
            this.getapprovalStats();
            this.getProjectDetails(this.URL_ProjectCode);
            this.GetPeopleDatils();
            this.notifyService.showSuccess(res.message,'Success');
          }
          else
            this.notifyService.showError('something went wrong.','Failed');

     })
}

transferBtnDisabled:boolean=false;
onTransferBtnClicked(){
        if(!(this.empAuditor_remarks&&this.empAuditor_remarks.trim()) || !this.emp_Auditor){
            this.notProvided=true;
            return;
        }
        else
          this.notProvided=false;

      this.transferBtnDisabled=true;    // processing start.
      const project_code:string=this.projectInfo.Project_Code;
      const empno:string=this.Current_user_ID;
      const remarks:string=this.empAuditor_remarks;
      const newowner:string=this.emp_Auditor;
      this.projectMoreDetailsService.NewUpdateTransferProjectComplete(project_code,empno,remarks,newowner).subscribe((res:any)=>{
        this.transferBtnDisabled=false;  // processing end.
                 if(res&&res.message){
                    this.notifyService.showSuccess(res.message,'Success');
                    this.getProjectDetails(this.URL_ProjectCode);
                    this.getapprovalStats();
                 }
                 else{
                    this.notifyService.showError('something went wrong.','Failed');
                 }
      });

}





total_userActns:number|undefined;
// npm i apexcharts@3.52.0    works only on this version.
loadActionsGantt(){
  const all_status={
    'Completed':'#388E3C',
    'InProcess':'#64B5F6',
    'Completion Under Approval':'#81C784',
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


  const todays_date = new Date().getTime();
  const curdate = new Date();
  let actions_list:any=this.projectActionInfo.filter((actn)=>{
         const x=(this.ganttActnsConfig.bystatus=='All'||actn.Status.trim()==this.ganttActnsConfig.bystatus);
         const y=(this.ganttActnsConfig.byuser=='All'||actn.Team_Res.trim()==this.ganttActnsConfig.byuser);
         return x&&y;
  });

  this.total_userActns=actions_list.length;
  const _series = actions_list.map((actn, _index) => {
    const color = all_status[actn.Status] || all_status['other'];
    let data_ar = [];
    const actn_startd = new Date(actn.StartDate);
    const actn_endd = new Date(actn.EndDate);


    if (actn_startd < curdate && actn_endd > curdate) {
      if (actn.Status === 'InProcess') {
        data_ar = [
          {
            x: `${actn.Project_Name}(${actn.Project_Code})`,
            y: [new Date(actn.StartDate).getTime(), new Date().getTime()],
            fillColor: color,
            index: _index
          },
          {
            x: `${actn.Project_Name}(${actn.Project_Code})`,
            y: [new Date().getTime(), new Date(actn.EndDate).getTime()],
            fillColor: '#dcdcdc',
            index: _index
          }
        ];
      }else {
        data_ar = [{
          x: `${actn.Project_Name}(${actn.Project_Code})`,
          y: [new Date(actn.StartDate).getTime(), new Date(actn.EndDate).getTime()],
          fillColor: color,
          index: _index
        }];
      }
    } else {
      const colorvalue = actn_startd >= curdate && actn.Status === 'InProcess' ? '#dcdcdc' : color;

      data_ar = actn.Status === 'Delay' ? [
        {
          x: `${actn.Project_Name}(${actn.Project_Code})`,
          y: [new Date(actn.StartDate).getTime(), new Date(actn.EndDate).getTime()],
          fillColor: all_status['InProcess'],
          index: _index
        },
        {
          x: `${actn.Project_Name}(${actn.Project_Code})`,
          y: [new Date(actn.EndDate).getTime(), new Date().getTime()],
          fillColor: colorvalue,
          index: _index
        }] : [{
          x: `${actn.Project_Name}(${actn.Project_Code})`,
          y: [new Date(actn.StartDate).getTime(), new Date(actn.EndDate).getTime()],
          fillColor: colorvalue,
          index: _index
        }];
    }
// when action startdate and enddate are same.
      if(data_ar.length==1){
        if(data_ar[0].y[0]==data_ar[0].y[1]){
                  data_ar[0].y[1]=data_ar[0].y[1]+86400000;
        }
      }
// when action startdate and enddate are same.

    return {
      name: actn.Status,
      data: data_ar
    };
  });
  const rowHeight=55;
  let chartHeight=rowHeight*actions_list.length+125;   console.log('chartHeight value is:',chartHeight);
  let max_Xvalue=curdate;
  max_Xvalue.setMonth(max_Xvalue.getMonth()+2);


  const options = {
    series: _series,
    chart: {

      height: chartHeight+'px',
      type: 'rangeBar',
      animations: {
        enabled: false // Disable animations to improve performance
      },
      // zoom: {
      //   enabled: false, // Enable zoom if needed
      //   type: 'x', // Specify zoom type
      // },

      events: {
        updated: ()=>{


        try{

                const chartContainer = document.querySelector("#actnsfull-graph");

                const xAxisLabels:any = chartContainer.querySelector('.apexcharts-xaxis');
                let textElements = xAxisLabels.querySelectorAll('text');
                const hrline:any=document.querySelector('#actnsfull-graph .apexcharts-canvas svg.apexcharts-svg g.apexcharts-inner.apexcharts-graphical g.apexcharts-grid>line');
                console.log('hrline is:',hrline);
                const linewth=hrline.getAttribute('x2');
                const dateGcHl:any = document.querySelector('.actns-gantt-dates .dates-label');

                dateGcHl.style.width=linewth+'px';
                const dateGcHv:any=dateGcHl.querySelector('#this-is-head');
                dateGcHv.innerHTML='';
                textElements.forEach(te => {
                  const clonedTe = te.cloneNode(true);
                  clonedTe.setAttribute('y', '65%');
                  clonedTe.setAttribute('fill', '#6b6f71');
                  dateGcHv.appendChild(clonedTe);
                });

                const ctrlbtns:any=document.querySelector('#actnsfull-graph .apexcharts-toolbar');

                ctrlbtns.style.backgroundColor='rgb(255 255 255 / 65%)';
                ctrlbtns.style.padding='4px 6px 7px 5px';
                ctrlbtns.style.border='2px solid #b3b3b3';

                const ganttCtrls:any=document.querySelector('#actns-graphmodal .gantt-ctrls-btns');
                ganttCtrls.innerHTML='';
                ganttCtrls.append(ctrlbtns);

// yaxis label adjustments
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
                             tspan2.setAttribute('dy','11.8');
                             let fullname2=fullname.slice(20);
                             fullname2=fullname2.length>15?fullname2.substring(0,15)+'...':fullname2
                             tspan2.textContent=fullname2;

                             te.appendChild(tspan1);
                             te.appendChild(tspan2);
                        }

                    });
              }

// yaxis label adjustments

            Array.from(textelms).forEach((te:any,index)=>{
                        const _a_res:any=actions_list[index].Responsible;
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
                        tspan3.textContent=_a_res;
                        te.appendChild(tspan3);
               });

                const gcharttable:any=document.querySelector('#actnsfull-graph .apexcharts-svg .apexcharts-inner.apexcharts-graphical');
                const trsnfvalue=gcharttable.getAttribute('transform');
                console.log('valuasde:is :',trsnfvalue.split(',')[0]+',40)');
                gcharttable.setAttribute('transform',trsnfvalue.split(',')[0]+',40)');
                console.log('gcharttable:',gcharttable);


            }catch(e){
              console.log('error while rending actns gantt chart:',e);
            }


            console.log('update start and done.')
        },


      }

    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '32%',
        rangeBarGroupRows: true
      }
    },
    fill: {
      type: 'solid'
    },
    dataLabels: {
      enabled: false
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

        formatter:function(value) {
          if (value&&isNaN(value)) {
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
        bottom: 15,
        left: 0
      }
    },
    legend: {
      show: false
    },

    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const data = w.config.series[seriesIndex].data[dataPointIndex];
        const index = data.index;
        const actn_name = actions_list[index].Project_Name;
        const actn_descrp=actions_list[index].Project_Description;
        const actn_start = this.datepipe.transform(new Date(actions_list[index].StartDate), 'MMM d, y');
        const actn_end = this.datepipe.transform(new Date(actions_list[index].EndDate), 'MMM d, y');
        const daydiff = Math.abs(moment(actions_list[index].StartDate, 'YYYY-MM-DD').diff(moment(actions_list[index].EndDate, 'YYYY-MM-DD'), 'days')) + 1;
        const actn_status = actions_list[index].Status;
        const statusColor = all_status[actn_status] || all_status['other'];
        const delaydays_ = Math.abs(actions_list[index].Delaydays);
        const actn_res = actions_list[index].Responsible;
        const actn_alhrs = actions_list[index].AllocatedHours;

        const _cd = new Date();
        const d1 = new Date(actions_list[index].StartDate);
        const d2 = new Date(actions_list[index].EndDate);

        return `<div style="width: fit-content; min-width: 300px; padding: 0.5em; border-radius: 4px; box-shadow: 0 0 35px #6e6e6e33; background-color:#ffffff;">
          <div style="display: flex;margin-bottom: 4px;column-gap: 10px;">
            <span style="flex-grow: 1;">
              <span style="font-size: 10px;font-family: Lucida Sans Unicode;display: inline-block;max-width: 250px;text-wrap: nowrap;overflow: hidden;text-overflow: ellipsis;">${actn_name}</span>
              <span style="font-size: 9px;font-family: Lucida Sans Unicode;display: flex;align-items: center;justify-content: start;color: #afaeae;position: relative;top: -4px; text-decoration:underline;   ">${actn_res}</span>
            </span>
            <span style="padding: 0.3em 0.6em 0.2em 0.6em;border-radius: 2px;background-color:${statusColor}; color: white;font-family: 'Lucida Sans Unicode';font-size: 11px;align-self: flex-start;">${actn_status} </span>
          </div>
          <div style="display: flex;align-items: center;margin-bottom: 0px;column-gap: 10px; justify-content: space-between; ">
           <span style="font-size: 9px; font-family: 'Lucida Sans Unicode'; color: #afaeae; position: relative; top: -7px; max-width: 250px; text-wrap:wrap;overflow: hidden;text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; /* Limit to 4 lines */ -webkit-box-orient: vertical;">
            ${actn_descrp}
           </span>

            <span style="font-size: 10px;color: #0d0d0dd6;display: flex;align-items: flex-end;column-gap: 3px;">
              <fieldset style="border: 1px solid #55525226;padding: 0.5em;border-radius: 3px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e4949d9;min-width: 55px;display: flex;justify-content: center;">
                <legend style="font-size: 8.6px;font-family: 'Lucida Sans Unicode';color: #5a57578f;width:fit-content; margin-bottom:0;">Allocated hours</legend>
                ${actn_alhrs} hrs
              </fieldset>
            </span>
          </div>
          <div style="font-size: 12px; display: flex; column-gap: 3px;">
            <fieldset style="flex-grow:1; border: 1px solid #4e49491f; padding: 0.3em; border-radius: 3px; font-family: 'Lucida Sans Unicode'; font-weight: bold; color: #4e49499c; min-width: 50px; display: flex; justify-content: center; font-size: 10px;">
              <legend style="font-size: 8px;font-family: 'Lucida Sans Unicode';font-weight: 700;color: #5a57578f;width:fit-content;  margin-bottom:0;">${d1 < _cd ? 'Started on' : 'Starting from'}</legend>
              ${actn_start}
            </fieldset>
            <span style="flex-grow: 1;display: flex;flex-direction: column;justify-content: end;"> <span style="border: 1px dashed lightgray;"></span>
              <span style="text-align: center;color: #4e49499c;font-family: Lucida Sans Unicode;font-weight: bold;font-size: 9px;">${daydiff} ${daydiff > 1 ? 'days' : 'day'}</span>
            </span>
            <fieldset style="flex-grow:1;border: 1px solid #4e49491f;padding: 0.3em;border-radius: 6px;font-family: 'Lucida Sans Unicode';font-weight: bold;color: #4e49499c;min-width: 50px;display: flex;justify-content: center;font-size: 10px;text-align: left;">
              <legend style="font-size: 8px;font-family: 'Lucida Sans Unicode';font-weight: 700;color: #5a57578f;width: fit-content;margin-left: 5px; margin-bottom:0;">${d2 < _cd ? 'Ended on' : 'Ending on'}</legend>
              ${actn_end}
            </fieldset>
          </div>
        </div>`;
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


    title:{
      text: this.projectInfo.Project_Name,
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style:{
        fontSize: '15px',
        fontWeight: 'bold',
        fontFamily: 'Lucida Sans Unicode',
        color: '#263238'
      }

    }




  };


 if(this.ActnsGanttChart){
    this.ActnsGanttChart.updateOptions(options);
 }
 else{

  this.ActnsGanttChart = new ApexCharts(document.querySelector("#actnsfull-graph"), options);
  this.ActnsGanttChart.render();
console.log('apexchart gantt:',this.ActnsGanttChart);

 }


}




ActnsGanttChart:any;
ganttActnsConfig:{bystatus:string,byuser:string}={bystatus:'All',byuser:'All'};
filterActionsOnGantt(_bystatus:string,_byuser:string){
     this.ganttActnsConfig.bystatus=_bystatus;
     this.ganttActnsConfig.byuser=_byuser;
     this.loadActionsGantt();
}



onActnsGanttClosed(){
    this.ActnsGanttChart.destroy();
    this.ActnsGanttChart=null;
    this.ganttActnsConfig={bystatus:'All',byuser:'All'};
    this.total_userActns=undefined;

}



// PROJECT auditor, Transfer functionality end.

emps_of_actvs:any=[];
actvs_types:any=[];
actvsFltrBy:{ activityType:string, empType:string }={ activityType:'all',empType:'all' };
FilteredPrjActivities:any=[];

arrangeActivitiesBy(acttype:string,emptype:string){
  this.actvsFltrBy.activityType=acttype;
  this.actvsFltrBy.empType=emptype;
  this.FilteredPrjActivities=this.Activity_List.filter((actv)=>{
    const x=(this.actvsFltrBy.empType=='all'||actv.Modifiedby==this.actvsFltrBy.empType);
    const y=(this.actvsFltrBy.activityType=='all'||(actv._type==this.actvsFltrBy.activityType));
    return x&&y;
  });
}




characterCount: number = 0;

updateCharacterCount(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ProjectDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount = textContent.length;
}


characterCount_Action: number = 0;

updateCharacterCount_Action(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.ActionDescription;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Action = textContent.length;
}



characterCount_Meeting: number = 0;

updateCharacterCount_Meeting(): void {

  // Create a temporary div element to strip out HTML tags
  const tempElement = document.createElement('div');
  tempElement.innerHTML = this.Description_Type;
  const textContent = tempElement.textContent || tempElement.innerText || '';
  this.characterCount_Meeting = textContent.length;
}


// conditional accept functionality start

_portfoliosList2:any=[];  // all portfolios list.
ngDropdwonPort2:any=[];   // selected portfolios. array of portfolio ids.
iscaPortDrpDwnOpen:boolean=false;
ispncaPortDrpDwnOpen:boolean=false;    // this is for mat drpdwn present at pending approval sidebar.
ProjectType_json:any;   // prj types
allUsers1:any=[];       // all emps
allUsers2:any=[];       // all emps exclude owner and resp.

sel_prjname:string|undefined;
sel_user:any;       // selected emp
sel_ptype:any;     // selected prj type
sel_sdate:any;    // selected start date.
sel_edate:any;   // selected end date.
sel_submtype:any;  // selected submission type.

onca_PortfolioSelected(e){
  const prtfChoosed = this._portfoliosList2.find((p:any) => p.Portfolio_ID === e.option.value)
  if (prtfChoosed) {
    const index = this.ngDropdwonPort2.indexOf(prtfChoosed.Portfolio_ID)
    if (index === -1) {
         this.ngDropdwonPort2.push(prtfChoosed.Portfolio_ID);
    }
    else{
         this.ngDropdwonPort2.splice(index,1);
    }
 }
//  requestAnimationFrame(()=>this.customTrigger.openPanel());
}

onca_PortfolioDeSelected(prtid:string){
  const index=this.ngDropdwonPort2.indexOf(prtid);
  if(index!==-1){
   this.ngDropdwonPort2.splice(index,1);
  }
}



getca_Dropdowns(){
    // prj types
    this.ProjectType_json=this.projectInfo.ProjectType_json?JSON.parse(this.projectInfo.ProjectType_json):[];

    //all portfolios list
    this.service.GetPortfoliosBy_ProjectId(null).subscribe((data) => {
      this._portfoliosList2 = data as [];
    });
}


goToProject(pcode,acode:string|undefined) {
  let qparams='';
  if(acode!==undefined){
    qparams=`?actionCode=${acode}`;
  }
  let name: string = 'Details';
  var url = document.baseURI + name;
  var myurl = `${url}/${pcode}${qparams}`;
  var myWindow = window.open(myurl,pcode);
  myWindow.focus();
}


expandRemarks(id:string){
     const remark_sec=document.getElementById(id);
     if(remark_sec.classList.contains('compl-remarks-span')){
        remark_sec.classList.remove('compl-remarks-span');
        document.getElementById('less-btn').classList.remove('d-none');
     }
     else{
      remark_sec.classList.add('compl-remarks-span');
      document.getElementById('less-btn').classList.add('d-none');
     }

}




// conditional accept functionality end

///
date_menu_modal() {
  document.getElementById("schedule-event-modal-backdrop").style.display = "block";
  document.getElementById("datemenu").style.display = "block";

}
date_menu_modal_close() {
  document.getElementById("schedule-event-modal-backdrop").style.display = "none";
  document.getElementById("datemenu").style.display = "none";


}


//get notifications list.    start
// isNotificationsExpanded:boolean=false;
getNotificationsAnnouncements():string[]{

  let allnotif:string[]=[];

  if(this.myUnderApprvActions.length>0)
  allnotif=[...allnotif,'myUnderApprvActions'];
  if(this.myDelayPrjActions.length>0)
  allnotif=[...allnotif,'myDelayPrjActions'];
  if(+this.ProjectPercentage>100)
  allnotif=[...allnotif,'ProjectPercentage'];
  if(([this.projectInfo.OwnerEmpNo,this.projectInfo.ResponsibleEmpNo,this.projectInfo.AuthorityEmpNo].includes(this.Current_user_ID)||this.isHierarchy==true)&&this.delayActionsOfEmps.length>0)
  allnotif=[...allnotif,'delayActionsOfEmps'];
  if(this.MeetingCount>0)
  allnotif=[...allnotif,'MeetingCount'];
  if(this.actionsWith0hrs&&this.actionsWith0hrs.length>0)
  allnotif=[...allnotif,'actionsWith0hrs'];
  if(['New Project Rejected','New Action Rejected','Project Complete Rejected','Rejected'].includes(this.activity))
  allnotif=[...allnotif,'Rejected'];
  if(this.projectInfo&&this.projectInfo.Status==='Project Hold')
  allnotif=[...allnotif,'ProjectHold'];
  if(this.projectInfo&&this.projectInfo.Status=='Not Started')
  allnotif=[...allnotif,'NotStarted'];
  if((this.totalStdTskApvs&&this.totalStdTskApvs>0)&&(this.Current_user_ID  == this.standardjson[0].approvalEmpID))
  allnotif=[...allnotif,'totalStdTskApvs'];
  if((this.multiapproval_list&&this.multiapproval_list.length>0)&&(this.Current_user_ID  == this.approvalEmpId))
  allnotif=[...allnotif,'multiapproval_list'];
  if(this.projectInfo.Project_Block==='003')
  allnotif=[...allnotif,'stdTaskDelay'];
  if(this.projectInfo.Status=='Completed'&&this.projectInfo.VersionCode)
  allnotif=[...allnotif,'VersionCode'];
  if(this.selfAssignedActns&&this.selfAssignedActns.length>0)
  allnotif=[...allnotif,'selfAssignedActns'];
  if(this.totalPActns4Aprvls>0)
  allnotif=[...allnotif,'totalPActns4Aprvls'];
  if(this.pageContentType=='ACTION_DETAILS')
  allnotif=[...allnotif,'action_details'];
  if(this.hasNoActionMembers&&this.hasNoActionMembers.length>0&&['New Project Rejected','Cancelled','Completed','Project Hold','Cancellation Under Approval'].includes(this.projectInfo.Status.trim())==false)
  allnotif=[...allnotif,'hasNoActionMembers'];
  if(this.noActvySinceCreation&&['New Project Rejected','Cancelled','Completed','Project Hold','Cancellation Under Approval'].includes(this.projectInfo.Status.trim())==false)
  allnotif=[...allnotif,'noActvySinceCreation'];
  if(this.actnsWithoutProgress&&this.actnsWithoutProgress.length>0&&['New Project Rejected','Cancelled','Completed','Project Hold','Cancellation Under Approval'].includes(this.projectInfo.Status.trim())==false)
  allnotif=[...allnotif,'actnsWithoutProgress'];

  return allnotif;
}

//get notifications list.    end



getFormattedHours(tlTotalHours: number): string {
  if (tlTotalHours == null) return '00:00'; // or handle other cases as needed
  const hours = Math.floor(tlTotalHours);
  const minutes = Math.round((tlTotalHours % 1) * 60);
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

getFormattedDuration(totalDuration: number): string {
  if (totalDuration == null) return '00:00'; // Handle undefined or null

  const hours = Math.floor(totalDuration);
  const minutes = Math.round((totalDuration % 1) * 60);

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}



  openRunwayTask(taskid:string){
      // let name: string = 'UnplannedTask';
      // var url = document.baseURI + name;
      // var myurl = `${url}`;
      // var myWindow = window.open(myurl);
      // myWindow.focus();
      this.router.navigate(["../UnplannedTask"],{queryParams:{category:3595, taskid:taskid}});
  }

  openAssignedProject(taskid:string){
    // let name: string = 'backend/createproject';
    // var url = document.baseURI + name;
    // var myurl = `${url}`;
    // var myWindow = window.open(myurl);
    // myWindow.focus();

    this.router.navigate(["../backend/createproject"],{queryParams:{AssignedProjectId:taskid}});
  }





  hasNoActionMembers:any=[];




  newDetails(ProjectCode) {
    let name: string = 'Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${ProjectCode}`;
    var myWindow = window.open(myurl, ProjectCode);
    myWindow.focus();
  }



  OnCardClick(P_id: any) {
    sessionStorage.setItem('portfolioId', P_id);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }



  isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
  isPrjDesValid:'TOOSHORT'|'VALID'='VALID';



  isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
   if(inputString){

    // let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
    let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
  // let rg = new RegExp('^\\s*(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+(?:\\s+\\S+)*\\s*$');


   const x=rg.test(inputString.trim());

  return x ? 'VALID' : 'TOOSHORT';

   }
  return 'TOOSHORT'

  }



a_details:any;
a_loading:boolean=false;
getADetails(actncode){
    if(actncode)
    {
        this.a_details=null;
        this.a_loading=true;
        const actnObj=this.projectActionInfo.find(actnobj=>actnobj.Project_Code==actncode);
        let a_obj={
          AllocatedHours:actnObj.AllocatedHours,
          EndDate:actnObj.EndDate,
          Status:actnObj.Status,
          Delaydays:actnObj.Delaydays,
          usedHours:0,
          remainingHours:0,
          extraHours:0
        }

        this.service.DARGraphCalculations_Json(actncode).subscribe((res:any)=>{
          const actionAlhrs = (res[0]['ProjectMaxDuration']);  // action planned allocated hrs.
          const usedhrs = (res[0]['TotalHoursUsedInDAR']);  // my timeline hrs on the action.
          const remainingHrs:number=+((actionAlhrs-usedhrs).toFixed(1));
          this.a_details={
            ...a_obj,
            usedHours:usedhrs,
            remainingHours:remainingHrs<0?0:remainingHrs,
            extraHours:remainingHrs<0?(Math.abs(remainingHrs)):0
          };

          this.a_loading=false;
         });

    }
}



close_add_time() {
  document.getElementById("dropdown-timeline-menu").classList.remove("show");
}

btn_timeline_table_accordion(){
  document.getElementById("btn-timeline-table-accordion").classList.toggle("rotate");
}



tmReportArr:any[]=[];
tmReportTotalDuration:{hours:string,minutes:string};
// tmReportStatus:any;
tmSubmDate:any;
tmReportLoading:boolean=false;
getTimelineReportByDate(dateVal:'today'|'yesterday') {
  if(dateVal){
    this.tmReportArr=[];
    // this.tmReportStatus=null;
    this.tmReportTotalDuration=null;
    this.tmSubmDate=null;
    // erase prev data.

    this.ObjSubTaskDTO.Emp_No = this.Current_user_ID;
    this.ObjSubTaskDTO.PageNumber = 1;
    this.ObjSubTaskDTO.PageSize = 2;
    this.ObjSubTaskDTO.sort = dateVal
    this.ObjSubTaskDTO.Start_Date = null;
    this.ObjSubTaskDTO.End_Date = null;
    this.tmReportLoading=true;
    this.service._GetTimelineActivity(this.ObjSubTaskDTO).subscribe
      (data => {
        this.tmReportLoading=false;
        console.log(data);
        if(data&&data[0].DAR_Details_Json){
             const dar_json=JSON.parse(data[0].DAR_Details_Json);
             if(dar_json&&dar_json[0]){
                this.tmReportArr=dar_json[0].Dardata;     console.log('tmreportarr:',this.tmReportArr);
                this.tmReportArr.forEach(ob=>{
                  const k=/00:\d\d/.test(ob.Duration);
                   ob.duration=k?(ob.Duration.split(':')[1]+' mins'):(ob.Duration+' hrs');
                   ob.starttime=this.formatTimes(ob.starttime);
                   ob.endtime=this.formatTimes(ob.endtime);

                });  // adding 'duration' property to show timing in more easy way on the view.

                const [hrs,mins]=dar_json[0].TotalDuration.split(':');
                this.tmReportTotalDuration={hours:hrs,minutes:mins};
                this.tmSubmDate=dar_json[0].SubmissionDate;

                // if(this.submission_json){

                //     const d1=new Date(this.tmSubmDate);
                //     d1.setHours(0,0,0,0);
                //     const tm_submitted=this.submission_json.find(item=>{
                //         const d2=new Date(item.SubmissionDate);
                //         return d1.getTime()==d2.getTime();
                //     });


                //     if(tm_submitted)
                //       this.tmReportStatus=tm_submitted.Status;
                //     else{
                //       this.tmReportStatus='Not Submitted';
                //     }

                // }
            }
        }
      });

  }
}


timeline_of:'today'|'yesterday';
noTimeSpaceAvailable:boolean=false;
setTimelineDate(val)
{
     this.current_Date = moment(val).format("MM/DD/YYYY");
     this.dateF=moment(val).toDate();
     this.starttime = null;
     this.endtime = null;
     this.noTimeSpaceAvailable=false;
     this.service._GetTimeforDar(this.Current_user_ID, this.current_Date)
     .subscribe(data => {
      const _timeList=JSON.parse(data[0]['time_json']);
      let _lastEndtime;
      if (_timeList.length != 0) {
         // when some timeline submit done on the selected date.
         const _endtimearr=_timeList.map(ob=>ob.endtime);
         _lastEndtime=_endtimearr[_endtimearr.length-1];
         const i=this.timedata1.indexOf(_lastEndtime);
         if(i<this.timedata1.length-1){
             this.starttime=_lastEndtime;
             this.endtime=this.timedata1[i+1];
         }
         else{
            this.starttime=null;
            this.endtime=null;
            this.noTimeSpaceAvailable=true;
         }

      }
      else{
           // when no timeline submit done on the selected date.
           this.starttime=this.timedata1[0];
           this.endtime=this.timedata1[1];
      }
     });

     const todaystr=moment(this.todayDate).format("MM/DD/YYYY");
     const yesterdaystr=moment(this.disablePreviousDate).format("MM/DD/YYYY");
     this.timeline_of=this.current_Date==todaystr?'today':this.current_Date==yesterdaystr?'yesterday':null;
     this.getTimelineReportByDate(this.timeline_of);
}



onTimelineDateInput(val){
   if(val){  // user has input a value.
    const tm4Date=(val.toDate()<this.disablePreviousDate||val.toDate()>this.todayDate)?this.current_Date:val.toDate();
    this.setTimelineDate(tm4Date);
   }
   else{ // user has input null or undefined or val is falsy.
       this.current_Date=null;
   }
}


validateURL(value: string): void {
  if(value){
    this.isValidURL = /^(https?:\/\/)/.test(value);
  }else{
    this.isValidURL=true
  }
  
}

}


