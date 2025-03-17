import { forEach } from '@angular-devkit/schematics';
import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
declare var $: any;
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';
import { StatusDTO } from 'src/app/_Models/status-dto';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApprovalsService } from 'src/app/_Services/approvals.service';



@Component({
  selector: 'app-stream-dashboard',
  templateUrl: './stream-dashboard.component.html',
  styleUrls: ['./stream-dashboard.component.css']
})
export class StreamDashboardComponent implements OnInit {
  Emp_No: any;
  DelayCount: any = sessionStorage.getItem('DelayCount');
  DelayActionCount: any = sessionStorage.getItem('DelayActionCount');
  AssignActionCount: any = sessionStorage.getItem('AssignActionCount');
  CompletedCount: any = sessionStorage.getItem('CompletedCount');
  TotalExpiryInMonth: any = sessionStorage.getItem('TotalExpiryInMonth');
  EmployeeVacationInDays: any = sessionStorage.getItem('EmployeeVacationInDays');
  TotalDARSubmitted: any = sessionStorage.getItem('TotalDARSubmitted');
  TodaysDARAchievement: any = sessionStorage.getItem('TodaysDARAchievement');
  TotalDARRejected: any = sessionStorage.getItem('TotalDARRejected');
  YesterdaysDAR_Status: any = sessionStorage.getItem('YesterdaysDAR_Status');
  RejectedCount: any = sessionStorage.getItem('RejectedCount');
  AssignedProjects: any = sessionStorage.getItem('AssignedProjects');
  ProjectsNotStarted: any = sessionStorage.getItem('ProjectsNotStarted');
  ProjectsNotWorking: any = sessionStorage.getItem('ProjectsNotWorking');
  NotificationCount: any = sessionStorage.getItem('NotificationCount');
  _calenderDto: CalenderDTO;
  _objStatusDTO: StatusDTO;
  isLoading: boolean = true;
  _ListProjStat: StatusDTO[];
  Companylist_Json: any;
  Employeelist_Json: any;
  Statuslist_Json: any;
  countFav: any;

  constructor(public service: ProjectTypeService,
    private cdr: ChangeDetectorRef, private router: Router,
    private _snackBar: MatSnackBar,
    private CalenderService: CalenderService,
     public approvalservice: ApprovalsService,
  ) {
    this._calenderDto = new CalenderDTO;
    this._objStatusDTO = new StatusDTO;
   }

  async ngOnInit() {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.UserfullName = localStorage.getItem("UserfullName");
   



    await this.loadDashboardBanners();
    // this.initializeOwlCarousels();
    this.initializeOwlCarousels2();
    // this.initializeOwlCarousels3();
    this.todayDate = new Date();
    this.meetingDetails();
    this.portfolioSerivce();
    this.getTimeLineStatus();
    this.getEmployee()
    this._objStatusDTO.Emp_No = this.Current_user_ID;

    this.GetDashboardSummary();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

    this.getRecentActivities();  // fetch recent activities
  }


  private initializeOwlCarousels() {
    setTimeout(() => {
      $('.n-portfolio-ul-slider').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: false,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: [
            '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
            '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
        ],

        responsive: {
          556: {
            items: 2,
            slideBy: 2,
           },
          992: {
            items: 3,
            slideBy: 3,
           },
          1400: {
            items: 4,
            slideBy: 4,
           },
        }
      });
    }, 2000);
  }

  private initializeOwlCarousels2() {
    setTimeout(() => {
      $('.activity-item:not(.banner-item)').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
        navText: [
         '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
            '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
        ],

        responsive: {
          356: { items: 1 }
        }
      });
    }, 2000);
  }
  // private initializeOwlCarousels3() {
  //   setTimeout(() => {
  //     $('.banner-item').owlCarousel({
  //       loop: true,
  //       margin: 0,
  //       autoplay: true,
  //       autoplayTimeout:3700,
  //       autoplayHoverPause: false,
  //       nav: false,
  //       dots: true,
  //       navText: [
  //        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
  //           '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
  //       ],

  //       responsive: {
  //         356: { items: 1 }
  //       }
  //     });
  //   }, 100);
  // }








  view_graph_div() {
    document.getElementById("graph-div").style.display = "block";
  }
  close_graph_div() {
    document.getElementById("graph-div").style.display = "none";
  }
  week_report_more_btn(){
    document.getElementById("week-more").classList.toggle("d-none");
    document.getElementById("week-less").classList.toggle("d-flex");
  }
  page_Name: string = "ViewProjects";
  Current_user_ID: any;
  UserfullName: any
  todayDate: any
  getAll :any
  today: any = new Date().toISOString().substring(0, 10);


  GetDashboardSummary() {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service._GetDashboardSummaryCount(this.Emp_No)
      .subscribe((data) => {
        // console.log(data,"GetDashboardSummary()GetDashboardSummary()GetDashboardSummary()")



        this.DelayCount = data[0]['DelayCount'];
        sessionStorage.setItem('DelayCount', this.DelayCount);

        this.DelayActionCount = data[0]['DelayActionCount'];
        sessionStorage.setItem('DelayActionCount', this.DelayActionCount);
        // console.log( this.DelayActionCount," this.DelayActionCount this.DelayActionCount")

        this.AssignActionCount = data[0]['AssignActionCount'];
        sessionStorage.setItem('AssignActionCount', this.AssignActionCount);

        this.CompletedCount = data[0]['CompletedCount'];    // Under approval projects count.
        sessionStorage.setItem('CompletedCount', this.CompletedCount);

        this.TotalExpiryInMonth = data[0]['ExpiryOneMonth'];
        sessionStorage.setItem('TotalExpiryInMonth', this.TotalExpiryInMonth);

        this.EmployeeVacationInDays = data[0]['EmployeeVacationInDays'];
        sessionStorage.setItem('EmployeeVacationInDays', this.EmployeeVacationInDays);

        this.TotalDARSubmitted = data[0]['TotalDARSubmitted'];
        sessionStorage.setItem('TotalDARSubmitted', this.TotalDARSubmitted);

        this.TodaysDARAchievement = data[0]['TodaysDARAchievement'];
        sessionStorage.setItem('TodaysDARAchievement', this.TodaysDARAchievement);

        this.TotalDARRejected = data[0]['TotalDARRejected'];
        sessionStorage.setItem('TotalDARRejected', this.TotalDARRejected);

        this.YesterdaysDAR_Status = data[0]['YesterdaysDAR_Status'];
        sessionStorage.setItem('YesterdaysDAR_Status', this.YesterdaysDAR_Status);
        // console.log(this.YesterdaysDAR_Status,"this.YesterdaysDAR_Statusthis.YesterdaysDAR_Status")

        this.RejectedCount = data[0]['RejectedCount'];
        sessionStorage.setItem('RejectedCount', this.RejectedCount);

        this.AssignedProjects = data[0]['AssignedProjects'];
        sessionStorage.setItem('AssignedProjects', this.AssignedProjects);

        this.ProjectsNotStarted = data[0]['ProjectsNotStarted'];
        sessionStorage.setItem('ProjectsNotStarted', this.ProjectsNotStarted);

        this.ProjectsNotWorking = data[0]['ProjectsNotWorking'];
        sessionStorage.setItem('ProjectsNotWorking', this.ProjectsNotWorking);

        this.NotificationCount = data[0]['NotificationCount'];

      });
  }





  Delay_Click(type) {


    if (type === 'Assigned Project') {
      let Mode: string = 'AssignedTask'
      var url = document.baseURI + this.page_Name;
      var myurl = `${url}/${Mode}?section=${type}`;
      // console.log(myurl)
      var myWindow = window.open(myurl);
      myWindow.focus();
    } else {
      let Mode: string = "DelayProjects";
      var url = document.baseURI + this.page_Name;
      var myurl = `${url}/${Mode}?section=${type}`;
      // console.log(myurl)
      var myWindow = window.open(myurl);
      myWindow.focus();

    }
  }

  AssignedActions_Click() {
    let Mode: string = "AssignedActions"
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl)
    myWindow.focus()
  }

  notification() {
    let name: string = "Notifications"
    let url = document.baseURI + name
    let myurl = `${url} `
    var myWindow = window.open(myurl)
    myWindow.focus()

  }
  Not_Started() {

    let Mode: string = "NotStarted";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  Not_Working() {

    let Mode: string = "NotWorking";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  ExpiryInOneMonth_Click() {

    let Mode: string = "ExOneMonth";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  Rejected_Click() {

    let Mode: string = "Rejected";
    var url = document.baseURI + this.page_Name;
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }

  scheduleItems: any
  event: any
  // meetingDetails(){
  //   this.CalenderService.NewDashboardScheduled(this._calenderDto).subscribe((data)=>{
  //   this.scheduleItems = JSON.parse(data['Scheduledtime'])
  //   console.log(this.scheduleItems,"this.meetingoftheuserthis.meetingoftheuser")
  //   })

  //   }
  meetingDetails(): void {
   
    this.CalenderService.NewDashboardScheduled(this._calenderDto).subscribe((data) => {
   
      this.scheduleItems = JSON.parse(data['Scheduledtime']);
      console.log(this.scheduleItems, "Calendar Data 1");
      this.scheduleItems.forEach((day, index, arr) => {
        day.Events.forEach(event => {
          if (new Date(event.endTime).getDate() !== new Date(event.startTime).getDate()) {
            let nextDay = arr.find(d => d.Schedule_date === event.endTime.split(" ")[0]);
            
            if (!nextDay) {
              nextDay = { Schedule_date: event.endTime.split(" ")[0], Events: [] };
              arr.push(nextDay);
            }
            
            if (!nextDay.Events.some(e => e.Schedule_ID === event.Schedule_ID)) {
              nextDay.Events.push({ ...event, Task_Name: `${event.Task_Name} 2/2` });
            }
      
            event.Task_Name += " 1/2"; 
          }
        });
      });
      

     this.scheduleItems = this.scheduleItems.map(day => {
      let updatedEvents = day.Events.map(event => ({
          ...event,
          Task_Name: event.Task_Name.replace("2/2 1/2", "2/2")
      }));
      

      let specialEvents = updatedEvents.filter(event => event.Task_Name.includes("2/2"));
      let otherEvents = updatedEvents.filter(event => !event.Task_Name.includes("2/2"));
      
      return {
          ...day,
          Events: [...specialEvents, ...otherEvents]
      };
  });
  

  if (this.scheduleItems.length == 9) {
    this.scheduleItems.pop();
  } 
 

     this.scheduleItems.sort((a, b) => a.Schedule_date.localeCompare(b.Schedule_date));
      console.log(this.scheduleItems, "Calendar Data 2");
 
     
      if( this.scheduleItems.some(data => data.Schedule_date <  this.today)){
        this.scheduleItems.shift(); 
      }
      

    }); 
  }






















  

  
  // isToday(date: Date): boolean {
  //   const today = new Date();
  //   return (
  //     date.getDate() === today.getDate() &&
  //     date.getMonth() === today.getMonth() &&
  //     date.getFullYear() === today.getFullYear()
  //   );
  // }



  portfoiloData: any
  portfolioSerivce(): void {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service.NewDashboardPortfolio(this.Emp_No).subscribe((data) => {
      this.portfoiloData = JSON.parse(data[0]['PortfolioJson']);
      this.initializeOwlCarousels();   // 
        // this.userFound = true

      // console.log(this.portfoiloData, "this.portfoiloDatathis.portfoiloData")

    })

  }

  openCard(P_id: any, P_Name: any, CreatedName: any) {
    sessionStorage.setItem('portfolioId', P_id);
    sessionStorage.setItem('portfolioname', P_Name);
    sessionStorage.setItem('PortfolioOwner', CreatedName);
    let name: string = 'portfolioprojects';
    var url = document.baseURI + name;
    var myurl = `${url}/${P_id}`;
    var myWindow = window.open(myurl, P_id);
    myWindow.focus();
  }

  userFound:boolean = undefined
  darArray : any;
  weekArr : any = [
    {
        DayName: "Monday",
        SubmissionStatus: "Not Submitted"
    },
    {
        DayName: "Tuesday",
        SubmissionStatus: "Not Submitted"
    },
    {
        DayName: "Wednesday",
        SubmissionStatus: "Not Submitted"
    },
    {
        DayName: "Thursday",
        SubmissionStatus: "Not Submitted"
    },
    {
        DayName: "Friday",
        SubmissionStatus: "Not Submitted"
    },
    {
      DayName: "Saturday",
      SubmissionStatus: "Not Submitted"
  },
   {
    DayName: "Sunday",
    SubmissionStatus: "Not Submitted"
   }
  ];

  getTimeLineStatus(){
    this.Emp_No = localStorage.getItem('EmpNo')
    this.service.NewGetDashboardTimelineStatus(this.Emp_No).subscribe((data)=>{
      this.darArray = JSON.parse(data['DAR_Details_Json']);

      const week_Arr = this.darArray[0].WeekSubmissionStatus;
      // console.log(week_Arr,'week_Arrweek_Arrweek_Arr')
      this.weekArr.forEach((item,index)=>{

        if(week_Arr[index]){
          item.SubmissionStatus=week_Arr[index].SubmissionStatus;
        }

      })
    // console.log(this.darArray,'darArraydarArray')


    })

  }



  // TestAPI/NewGetEmployeePerformance
  employeeReport:any
  getEmployee(){
    this.service.GetEmployeePerformance(this.Emp_No).subscribe((data)=>{
          this.employeeReport =   JSON.parse(data['EmployeeReport'])
      // console.log(this.employeeReport,"GetEmployeePerformanceGetEmployeePerformance")
    })
  }



  gotoTimeline() {
    let Mode: string = "Timeline";
    var url = document.baseURI + "backend";
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }



  getStatusClass(status: string): string {
    switch (status) {
        case 'Delay':
            return 'status-delay';
        case 'InProcess':
            return 'status-in-process';
        case 'Completion Under Approval':
            return 'status-completion-under-approval';
        case 'Under Approval':
            return 'status-under-approval';
        case 'Forward Under Approval':
            return 'status-forward-under-approval';
        case 'Completed':
            return 'status-completed';
        case 'Project Hold':
            return 'status-project-hold';
        case 'Project Complete Rejected':
            return 'status-project-complete-rejected';
        case 'Project Holded':
            return 'status-project-holded';
        case 'New Project':
            return 'status-new-project';
        case 'Enactive Under Approval' :
        case 'Cancelled':
            return 'status-enactive-under-approval';
        case 'Deadline Extend Under Approval':
            return 'status-deadline-extend-under-approval';
        case 'Project Hold Under Approval':
            return 'status-project-hold-under-approval';
        case 'New Todo':
            return 'status-new-todo';
        case 'New Project Rejected':
            return 'status-new-project-rejected';
        case 'Version':
            return 'status-version';
        case 'ToDo Achieved':
            return 'status-todo-achieved';
        case 'ToDo Completed':
            return 'status-todo-completed';
        default:
            return '';
    }
  }

  messagefav: string;
  // AddFavourites(portfolioId, isfav) {

  //   // this.LoadingBar_state.start();
  //   this.service.SetFavourite_Service(portfolioId, isfav, this.Current_user_ID).subscribe((data) => {
  //     //  console.log("retrun Data----->",data1)

  //     this._objStatusDTO.Emp_No = this.Current_user_ID;
  //     this.service.GetPortfolioStatus(this._objStatusDTO).subscribe(

  //       (data) => {
  //         debugger
  //         console.log(data,"new StatusDTO;")
  //         this._ListProjStat = JSON.parse(data[0]['PortfolioList_Json']);
  //         this.Companylist_Json = JSON.parse(data[0]['Company_Json']);
  //         this.Employeelist_Json = JSON.parse(data[0]['Employee_Json']);
  //         this.Statuslist_Json = JSON.parse(data[0]['Status_Json']);
  //         this.countFav = data[0]['Favourites'];
  //         this.cdr.detectChanges();

  //         if (isfav == false) {
  //           this.messagefav = "Added to Favourites";
  //         }
  //         else {
  //           this.messagefav = "Removed From Favourites";
  //         }
  //         let action: string = ""
  //         this._snackBar.open(this.messagefav, action, {
  //           duration: 1500,
  //         });

  //       });
  //   })
  //   // this.isLoading = true
  // }
// page_Names: string = "backend";
// gotoPortfolioPage(){
//   let Mode: string = "Portfolio";
//   var url = document.baseURI + this.page_Names;
//   var myurl = `${url}/${Mode}`;
//   var myWindow = window.open(myurl);
//   myWindow.focus();
// }




  page_Names: string = "backend";
  gotoPortfolioPage(){
    this.router.navigate(['/backend/Portfolio']);
  }


  newMeetingDetails(Schedule_ID) { debugger
    let name: string = 'Meeting-Details';
    var url = document.baseURI + name;
    var myurl = `${url}/${Schedule_ID}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }


  openCalendar(Schedule_ID,className) { 
    let name: string = 'backend/StreamCalendar';
    var url = document.baseURI + name;
    var myurl = `${url}?calenderId=${Schedule_ID},${className}`;
    var myWindow = window.open(myurl, "_self");
    myWindow.focus(); 
  }
  


  gotoCalendar(){
    this.router.navigate(['/backend/StreamCalendar']);
  }


  

  formatTimes(dateTime?: string): string {   debugger
    if (!dateTime) return ''; // Handle undefined/null cases safely
  
    const timePart = dateTime.split(' ')[1]; // Extract time part safely
    if (!timePart) return ''; // Ensure there's a time component
  
    const [hours, minutes] = timePart.split(':');
    if (!hours || !minutes) return ''; // Ensure valid hours and minutes
  
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
  
    const tmValue=date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return tmValue;
  }






   // dashboard banners start.  
   dashboardBanners:any=[];
   dashboardBannersImages:any=[];
   
  async loadDashboardBanners(){
      
   this.CalenderService.NewUsersDashboard().subscribe(async (res:any)=>{ 
        // console.log("for dashboard banners :",res); 
        if(res){    
            const djson=JSON.parse(res.DashboardJson); 
            this.dashboardBanners=JSON.parse(djson[0].BannerJson);
            if (this.dashboardBanners && Array.isArray(this.dashboardBanners)) {
                    this.dashboardBannersImages=[];  // clear prev.
                    this.dashboardBanners.forEach(element => {
                      if (element.AttachmentJson && Array.isArray(element.AttachmentJson)) {
                        element.AttachmentJson.forEach(Attch => {
                          var _Obj = {};
                          _Obj["path"] = Attch.FileUrl;
                          _Obj["type"] = 'image';
                          _Obj["sasUrl"] = '';
                          this.dashboardBannersImages.push(_Obj);
                        });
                      }
                    });
            }

            if(this.dashboardBannersImages.length>0){
              await this.loadSasUrlsForImages();
              $(document).ready(() =>{
                $('.banner-item').owlCarousel({
                  loop: true,
                  margin: 0,
                  autoplay: true,
                  autoplayTimeout:3700,
                  autoplayHoverPause: false,
                  nav: false,
                  dots: true,
                  navText: [
                   '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
                      '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
                  ],
                  responsive: {
                    356: { items: 1 }
                  }
                });
              }); 
            }
         }
    });
   }

   // dashboard banners end.

   async loadSasUrlsForImages() {
    for (let image of this.dashboardBannersImages) {
      const expiryTime = new Date();
      expiryTime.setMinutes(expiryTime.getMinutes() + 5); // 5 minutes expiry
 
      try {
        image.sasUrl = await this.CalenderService.getSasUrl(image.path, expiryTime);
      } catch (error) {
        console.error(`Error fetching SAS URL for ${image.path}`, error);
      }
    }
  }


// recent activity section .  start
recentActivities:any[]=[];
totalRecentActivities:number=0;
getRecentActivities(){
     const empNo=this.Current_user_ID;
     this.approvalservice.NewGetUserActivity(empNo).subscribe((res)=>{
            // console.log("getRecentActivities:",res);
            if(res&&res[0]){  
                  this.recentActivities=JSON.parse(res[0].ActivityList);   console.log("recent actv:",this.recentActivities);
                  this.totalRecentActivities=res[0].ActivityCount;
                
                
                  this.recentActivities.forEach((_actvy)=>{

                   //1. adding _type property
                    let result='others';
                    if(_actvy.Value){
                    const _Value=_actvy.Value.trim();
                          result=/New Action- ".*"/.test(_Value)?'New Action':
                                (/Timeline added .*/.test(_Value)|| _Value=='Project Timeline added'||_Value=='Timeline submitted')?'Timeline added':
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
                  // added _type property.

                  //2. adding ModifiedTime12Hr property
                  let timeVal=_actvy.ModifiedTime;
                  if(timeVal){
                        const [hours, minutes] = timeVal.split(':');
                        const date = new Date();
                        date.setHours(parseInt(hours, 10));
                        date.setMinutes(parseInt(minutes, 10));
                        const options :any = { hour: 'numeric', minute: 'numeric', hour12: true };
                        timeVal=date.toLocaleTimeString('en-US', options);     
                  }
                  else{  timeVal='';  }
                  _actvy.ModifiedTime12Hr=timeVal;
                  //2. added ModifiedTime12Hr property


                  });
                 
                  // console.log('recent activities:',this.recentActivities,'total recent activities:',this.totalRecentActivities);
            }
     });
}



// formatTimes(time: string): string {
//   if(time){
//     const [hours, minutes] = time.split(':');
//     const date = new Date();
//     date.setHours(parseInt(hours, 10));
//     date.setMinutes(parseInt(minutes, 10));

//     const options :any = { hour: 'numeric', minute: 'numeric', hour12: true };
//     const x=date.toLocaleTimeString('en-US', options);
//     return x;
//   }
//   return '';
// }






openInDetailsPage(pcode,acode:string|undefined) {
  let qparams='';
      if(acode!==undefined){
        qparams=`?actionCode=${acode}`;
      }
      let name: string = 'Details';
      var url = document.baseURI + name;
      var myurl = `${url}/${pcode}${qparams}`;
      var myWindow = window.open(myurl,pcode);
      myWindow?.focus();
}








// recent activity section .  end



}



