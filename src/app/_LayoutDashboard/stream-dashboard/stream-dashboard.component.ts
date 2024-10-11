import { Component, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
declare var $: any;
import { CalenderService } from 'src/app/_Services/calender.service';
import { CalenderDTO } from 'src/app/_Models/calender-dto';





@Component({
  selector: 'app-stream-dashboard',
  templateUrl: './stream-dashboard.component.html',
  styleUrls: ['./stream-dashboard.component.css']
})
export class StreamDashboardComponent implements OnInit {
  Emp_No: string;
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



  constructor(public service: ProjectTypeService,
    private CalenderService: CalenderService
  ) { this._calenderDto = new CalenderDTO; }

  ngOnInit(): void {
    this.initializeOwlCarousels();
    this.initializeOwlCarousels2();
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.UserfullName = localStorage.getItem("UserfullName")
    this.todayDate = new Date()
    this.meetingDetails()
    this.portfolioSerivce()
    this.getTimeLineStatus()
    this.GetDashboardSummary()
  }


  private initializeOwlCarousels() {
    setTimeout(() => {
      $('.n-portfolio-ul').owlCarousel({
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
      $('.activity-item').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause: false,
        nav: false,
        dots: true,
        navText: [
         '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
            '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
        ],

        responsive: {
          992: { items: 1 }
        }
      });
    }, 500);
  }

  view_graph_div() {
    document.getElementById("graph-div").style.display = "block";
  }
  close_graph_div() {
    document.getElementById("graph-div").style.display = "none";
  }

  page_Name: string = "ViewProjects";
  Current_user_ID: any;
  UserfullName: any
  todayDate: any

  GetDashboardSummary() {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service._GetDashboardSummaryCount(this.Emp_No)
      .subscribe((data) => {
        console.log(data,"GetDashboardSummary()GetDashboardSummary()GetDashboardSummary()")

        this.DelayCount = data[0]['DelayCount'];
        sessionStorage.setItem('DelayCount', this.DelayCount);

        this.DelayActionCount = data[0]['DelayActionCount'];
        sessionStorage.setItem('DelayActionCount', this.DelayActionCount);
        console.log( this.DelayActionCount," this.DelayActionCount this.DelayActionCount")

        this.AssignActionCount = data[0]['AssignActionCount'];
        sessionStorage.setItem('AssignActionCount', this.AssignActionCount);

        this.CompletedCount = data[0]['CompletedCount'];
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
    debugger

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
      const items = JSON.parse(data['Scheduledtime']);

      // Convert date strings to Date objects and filter out past dates
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Normalize to start of the day for comparison

      this.scheduleItems = items
        .map((item: any) => ({
          ...item,
          Schedule_date: new Date(item.Schedule_date)
        }))
        .filter((item: any) => item.Schedule_date >= today); // Filter for future dates including today

      console.log(this.scheduleItems, "this.meetingoftheuserthis.meetingoftheuser");
    });
  }
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }



  portfoiloData: any
  portfolioSerivce(): void {
    this.Emp_No = localStorage.getItem('EmpNo');
    this.service.NewDashboardPortfolio(this.Emp_No).subscribe((data) => {
      this.portfoiloData = JSON.parse(data[0]['PortfolioJson']);

        this.userFound = true


      console.log(this.portfoiloData, "this.portfoiloDatathis.portfoiloData")

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
  darArray : any
  getTimeLineStatus(){
    this.Emp_No = localStorage.getItem('EmpNo')
    this.service.NewGetDashboardTimelineStatus(this.Emp_No).subscribe((data)=>{
      this.darArray = JSON.parse(data['DAR_Details_Json']);
      // this.userFound = true
      console.log(this.darArray,'darArraydarArray')
    })

  }



  gotoTimeline() {
    let Mode: string = "Timeline";
    var url = document.baseURI + "backend";
    var myurl = `${url}/${Mode}`;
    var myWindow = window.open(myurl);
    myWindow.focus();

  }





}



