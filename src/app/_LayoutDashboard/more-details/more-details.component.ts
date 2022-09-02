import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am5 from "@amcharts/amcharts5";
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';

import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/_Services/link.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import * as _ from 'underscore';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { Tooltip } from 'chart.js';
import * as moment from 'moment';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
am4core.useTheme(am4themes_animated);
import Swal from 'sweetalert2';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})

export class MoreDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    public _LinkService: LinkService,
    private router: Router,
    public service: ProjectTypeService,
    private notifyService: NotificationService,
    private dialog: MatDialog,
    private BsService: BsServiceService) {
    this.ObjSubTaskDTO = new SubTaskDTO();
  }

  projectCode: string;
  URL_ProjectCode: string
  IsData: string;
  _LinkSideBar: boolean = true;
  maxDuration: any;
  standardDuration:any;
  totalPercent: number = 1;
  SubmissionName: string;
  noRecords: boolean = false;
  noMilestones: boolean = true;
  noFiles: boolean;
  noTimeline: boolean;
  noNotes: boolean = true;
  noMeeting: boolean = true;
  checked: any;
  totalSubtaskHours : any;
  actionResponsibles: any = [];
  ProjectStatus: string;
  ProjectPercentage: any;
  src: any;
  actionButton:boolean=false;
  darList:string;

  ngOnInit(): void {
    this.Current_user_ID = localStorage.getItem('EmpNo');
    //Fetching URL ProjectCode
    this.route.paramMap.subscribe(params => {
      var pcode = params.get('projectcode');
      this.URL_ProjectCode = pcode;
      this._MasterCode = pcode;

      let data1: any;
      this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
        .subscribe(data => {
          // console.log("data1 Testong---->", data);
          data1 = JSON.parse(data[0]['DARGraphCalculations_Json']);
          this.DarGraphDataList = data1;
          console.log(this.DarGraphDataList);
        });
      this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null).subscribe(
        (data) => {
          // console.log(this.noRecords);
          this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
          this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          // console.log("Completed--------->", this.CompletedList, this.Subtask_List);
          this.Subtask_Res_List = JSON.parse(data[0]['SubTaskResponsibe_Json']);
          this.ProjectStatus = data[0]['ProjectStatus'];
          this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
          
          
          // console.log(this.actionResponsibles,"test");
          // for(var val of this.Subtask_Res_List){
          //   this.actionResponsibles = this.Subtask_Res_List[val]['TM_DisplayName'];
          // }
          
          this.totalSubtaskHours = (data[0]['SubtaskHours']);
          // console.log(this.totalSubtaskHours,"Total subhours");
          if ((this.Subtask_List == '') && (this.CompletedList == '')) {
            this.noRecords = true;
            // console.log(this.noRecords);
          }
          if (this.Subtask_List == '') {
            this.noInprocess = true;
          }
          if (this.CompletedList == '') {
            this.noCompleted = true;
          }
          this.inProcessCount = this.Subtask_List.length;
          this.completedCount = this.CompletedList.length;
          this.subTaskCount = this.inProcessCount + this.completedCount;
          //  console.log('inprocess=', this.inProcessCount, 'completed', this.completedCount, 'total=', this.subTaskCount);
        });
    });

    this.GetProjectDetails();
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        let projectType: any = (data[0]['ProjectType']);
        this.IsData = (data[0]['DARGraphCalculations_Json']);
        //console.log("data isnull/not---->", this.IsData);
        if (projectType == '001' || projectType == '002') {
          // document.getElementById('act-tab-1').classList.add("d-none");
          // document.getElementById('Activity').classList.remove("show", "active");
          // document.getElementById('sum-tab-1').classList.remove("d-none");
          // document.getElementById('sum-tab-1').classList.add("active");
          // document.getElementById('Summary').classList.add("show", "active");
          this.CoreSecodaryCharts();
        }
        else if (projectType != '001' || projectType != '002') {
          // document.getElementById('act-tab-1').classList.remove("d-none");
          // document.getElementById('act-tab-1').classList.add("active");
          // document.getElementById('Activity').classList.add("show", "active");
          // document.getElementById('sum-tab-1').classList.add("d-none");
          // document.getElementById('Summary').classList.remove("show", "active");
          this.OtherCharts();
        }
      });
    //uploaded file name
    $(document).on('change', '.custom-file-input', function (event) {
      $(this).next('.custom-file-label').html(event.target.files[0].name);
    });
  }


  dar_details(){
    this.noTimeline = false;
    this.service._GetDARbyMasterCode(this.URL_ProjectCode)
    .subscribe(data1 => {
            this.darList = JSON.parse(data1[0]['DAR_Details_Json']);
            // console.log(this.darList,"DAR");
            if(this.darList == null){
              this.noTimeline =true;
            }
    });
  }

  CoreSecodaryCharts() {
    //this.TaskChart();
    //this.UserGraphs();
    this.DARSummaryChart();
    this.ProjectCompletionChart();
    if (this.IsData != null) {
      this.HybridDrillChart();
      this.SubtaskSummaryChart();
    }
    // this.ProjectCompleteChart();
    // this.GetDMS_Memos();
    //this.getAttachments();
    this.ProjectTrendChart();
    // this.dummyChart();
  }

  OtherCharts() {
    this.GetProjectDetails();
    this.StandardTask();
  }

  _Subtaskname: string;
  Sub_ProjectCode: string;
  Sub_StartDT: Date;
  Sub_EndDT: Date;
  Sub_Autho: string;
  Sub_Status: string;
  _remarks: string = "";
  Sub_Desc: string;

  OnSubtaskClick(item) {
    this.Sub_ProjectCode = item.Project_Code;
    this.Sub_Desc = item.Project_Description;
    this._Subtaskname = item.Project_Name;
    this.Sub_StartDT = item.StartDate;
    this.Sub_EndDT = item.SubProject_DeadLine;
    this.Sub_Autho = item.Subtask_Autho;
    this.Sub_Status = item.SubProject_Status;

    document.getElementById("mysideInfobar_Update").style.width = "60%";
    document.getElementById("rightbar-overlay").style.display = "block";
    // For page top div position fix
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("mysideInfobar_NewSubtask").style.width = "0px";
    document.getElementById("mysideInfobar").style.width = "0px";
    // document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("mysideInfobar_ProjectsUpdate").style.width = "0px";
    // document
    // this.Block3 = false;
  }

  // closeInfo() {
  //   document.getElementById("mysideInfobar_Update").style.width = "0";
  // }

  _inputAttachments: string;
  _inputAttachments2: string;

  onFileChangeUST(e) {
    this._inputAttachments = e.target.files[0].name;
  }

  //Subtask Update 
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
  ProjectInfo_List: any;
  StandardDuration: any;
  ProjectBlockName: any;
  Status: any;
  Pid:number;
  Comp_No:string;

  GetProjectDetails() {
    this.service.SubTaskDetailsService(this.URL_ProjectCode).subscribe(
      (data) => {
        if (data != null && data != undefined) {
          this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);
          // console.log("Test---->", this.ProjectInfo_List);
          this.ProjectName = this.ProjectInfo_List[0]['Project_Name'];
          this.Pid = this.ProjectInfo_List[0]['id'];
          this.Status = this.ProjectInfo_List[0]['Status'];
          this.Description = this.ProjectInfo_List[0]['Project_Description'];
          this.Comp_No = this.ProjectInfo_List[0]['Emp_Comp_No'];
          this.StartDate = this.ProjectInfo_List[0]['DPG'];
          this.Client = this.ProjectInfo_List[0]['Client_Name']
          this.EndDate = this.ProjectInfo_List[0]['DeadLine'];
          this.Cost = this.ProjectInfo_List[0]['Project_Cost'];
          this.Owner = this.ProjectInfo_List[0]['Project_Owner'];
          this.Responsible = this.ProjectInfo_List[0]['Team_Res'];
          this.Authority = this.ProjectInfo_List[0]['Team_Autho'];
          this.Coordinator = this.ProjectInfo_List[0]['Team_Coor'];
          this.Informer = this.ProjectInfo_List[0]['Team_Informer'];
          this.Support = this.ProjectInfo_List[0]['Team_Support'];
          this.Category = this.ProjectInfo_List[0]['ReportType'];
          this.ProjectBlock = this.ProjectInfo_List[0]['Project_Block'];
          this.ProjectBlockName = this.ProjectInfo_List[0]['Exec_BlockName'];
          this.Authority_EmpNo = this.ProjectInfo_List[0]['Authority'];
          this.Responsible_EmpNo = this.ProjectInfo_List[0]['Responsible'];
          this.Owner_EmpNo = this.ProjectInfo_List[0]['OwnerEmpNo'];
          this.StandardDuration = this.ProjectInfo_List[0]['StandardDuration'];
          this.SubmissionName = this.ProjectInfo_List[0]['SubmissionType1'];
          var fullname_R = this.Responsible.split(' ');
          this.InitR = fullname_R.shift().charAt(0) + fullname_R.pop().charAt(0);
          this.InitR.toUpperCase();
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
          this.InitOwn = fullname_Own.shift().charAt(0) + fullname_Own.pop().charAt(0);
          this.InitOwn.toUpperCase();

          var fullname_Auth = this.Authority.split(' ');
          this.InitAut = fullname_Auth.shift().charAt(0) + fullname_Auth.pop().charAt(0);
          this.InitAut.toUpperCase();

          var fullname_Coor = this.Coordinator.split(' ');
          this.InitCoor = fullname_Coor.shift().charAt(0) + fullname_Coor.pop().charAt(0);
          this.InitCoor.toUpperCase();
          // var fullname_Inf = this.Informer.split(' ');
          // this.InitInformer = fullname_Inf.shift().charAt(0) + fullname_Inf.pop().charAt(0);
          // this.InitInformer.toUpperCase();
          this.InitInformer = "IN";
          // var fullname_Supp = this.Support.split(' ');
          // this.InitSupp = fullname_Supp.shift().charAt(0) + fullname_Supp.pop().charAt(0);
          // this.InitSupp.toUpperCase();
          this.InitSupp = "SU";

          if(this.Status =='Completion Under Approval' || this.Status == 'Under Approval'){
            this.actionButton=true;
          }
        }
      });
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data1 => {
        // let data = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        //  console.log(data[0]['RemainingHours']);
        //console.log("MaxDu....", MaxDuration);
        this.maxDuration = (data1[0]['ProjectMaxDuration']);
        let data2 = JSON.parse(data1[0]['DARGraphCalculations_Json']);
        this.standardDuration= (data2[0]['DurationTime']);

      })
  }

  AddDms() {
    this._LinkSideBar = false;
    this._onRowClick(this.projectCode);
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

  Memo_Select(selecteditems) {
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    //console.log("Selected Memos In Array--->", arr)
  }

  Memo_Deselect() {
    let arr = [];
    this.Empty_MemoDropdown = this.ngDropdwonMemo;
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
    document.getElementById("LinkSideBar").style.width = "50%";
  }

  closeInfo() {
    document.getElementById("mysideInfobar").classList.remove("side--on");
    document.getElementById("mysideInfobar_Update").style.width = "0";
    document.getElementById("mysideInfobar1").style.width = "0";
    document.getElementById("mysideInfobar_ProjectsUpdate").style.width = "0";
    // document.getElementById("mysideInfobar1").classList.remove("side--on");
    // For page top div removing the fixed
    document.getElementById("moredet").classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    this.Clear_Feilds();
    this.GetSubtask_Details();
  }

  sideviw() {
    document.getElementById("mysideInfobar").classList.add("side--on");
    document.getElementById("moredet").classList.add("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "block";
  }

  DarGraphDataList: any;

  TaskChart() {
    let data1: any;
    this.service.DARGraphCalculations_Json(this.URL_ProjectCode)
      .subscribe(data => {
        // console.log("data1 Testong---->", data);
        data1 = JSON.parse(data[0]['DARGraphCalculations_Json']);
        this.DarGraphDataList = data1;
        console.log(this.DarGraphDataList);
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
    // let data22 = [{
    //   category: "Critical",
    //   value: 89,
    //   sliceSettings: {
    //     fill: '#D4897F'
    //   },
    //   breakdown: [{
    //     category: "Sales inquiries",
    //     value: 29
    //   }, {
    //     category: "Support requests",
    //     value: 40
    //   }, {
    //     category: "Bug reports",
    //     value: 11
    //   }, {
    //     category: "Other",
    //     value: 9
    //   }]
    // }, {
    //   category: "Acceptable",
    //   value: 71,
    //   sliceSettings: {
    //     fill: '#9898DE'
    //   },
    //   breakdown: [{
    //     category: "Sales inquiries",
    //     value: 22
    //   }, {
    //     category: "Support requests",
    //     value: 30
    //   }, {
    //     category: "Bug reports",
    //     value: 11
    //   }, {
    //     category: "Other",
    //     value: 10
    //   }]
    // }, {
    //   category: "Good",
    //   value: 120,
    //   sliceSettings: {
    //     fill: '#FC798A',
    //   },
    //   breakdown: [{
    //     category: "Sales inquiries",
    //     value: 60
    //   }, {
    //     category: "Support requests",
    //     value: 35
    //   }, {
    //     category: "Bug reports",
    //     value: 15
    //   }, {
    //     category: "Other",
    //     value: 10
    //   }]
    // }]

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

  _displayProjName: string;
  _MemosSubjectList: any;
  _MemosNotFound: string;
  _DBMemosIDList: any;
  _CommentsList: any;
  _EvenRecordsList: any

  GetprojectComments() {
    this.service._GetDARAchievements(this.URL_ProjectCode).
      subscribe((data) => {
        // console.log("Comments data----------->",data)
        this._CommentsList = JSON.parse(data[0]['CommentsJson']);
        // this._EvenRecordsList = JSON.parse(data[0]['EvenRecordsJson']);
        // console.log("Comments-List--------->",this._CommentsList)
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
              // console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  Current_user_ID: string;
  memoId: any;

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
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  _AddLink() {
    let _ProjectCode: string = this.Selected_Projectcode;
    let appId: number = 101;//this._ApplicationId;
    //console.log("selected Memos From Dropdown-->", this._SelectedMemos);
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
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.UpdateMemos(this.projectCode)
          this.GetMemosByEmployeeId();
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

  AttachmentList: any;
  data1: any;

  getAttachments() {
    this._LinkService._GetAttachments(this.Authority_EmpNo, this.URL_ProjectCode, this.ProjectBlock)
      .subscribe((data) => {
        this.data1 = (data[0]['Attachments_Json']);
        if (this.data1 != '') {
          this.noFiles = false;
        }
        else {
          this.noFiles = true;
        }
        this.AttachmentList = JSON.parse(data[0]['Attachments_Json']);
        //console.log("Attachments---->", this.AttachmentList);
      });
  }

  _day: any;
  _month: any;

  openPDF_Standard(repDate: Date, proofDoc) {
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
    // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + date + "/" + proofDoc);
    window.open(proofDoc);
    
  }

  openPDF(cd_date, docName) {
    cd_date = new Date(cd_date);
    let FileUrl: string;
    FileUrl = "https://yrglobaldocuments.blob.core.windows.net/documents/EP/";
    let Day = cd_date.getDate();
    let Month = cd_date.getMonth() + 1;
    let Year = cd_date.getFullYear();
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
    var date = this._month + "_" + this._day + "_" + cd_date.getFullYear();
    // window.open(FileUrl + this.Responsible_EmpNo + "/" + this.URL_ProjectCode + "/" + "/" + docName);
    window.open(docName);
  }

  Subtask_List: any;
  CompletedList: any;
  noInprocess: boolean = false;
  noCompleted: boolean = false;
  inProcessCount: number;
  completedCount: number;
  subTaskCount: number;

  GetSubtask_Details() {
    this.service.SubTaskDetailsService_ToDo_Page(this.URL_ProjectCode, null).subscribe(
      (data) => {
        // console.log(this.noRecords);
        this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
        this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
        // console.log("Completed--------->", this.CompletedList, this.Subtask_List);
        this.Subtask_Res_List = JSON.parse(data[0]['SubTaskResponsibe_Json']);
        // console.log(this.Subtask_Res_List);
        if ((this.Subtask_List == '') && (this.CompletedList == '')) {
          this.noRecords = true;
          // console.log(this.noRecords);
        }
        if (this.Subtask_List == '') {
          this.noInprocess = true;
        }
        if (this.CompletedList == '') {
          this.noCompleted = true;
        }
        this.inProcessCount = this.Subtask_List.length;
        this.completedCount = this.CompletedList.length;
        this.subTaskCount = this.inProcessCount + this.completedCount;
        // console.log('inprocess=', this.inProcessCount, 'completed', this.completedCount, 'total=', this.subTaskCount);
      });
  }

  OnUpdateClick() {
    if (this._remarks == "") {
      this.notifyService.showInfo("Remarks Cannot be Empty", '');
    }
    else {
      const fd = new FormData();
      fd.append("Project_Code", this.Sub_ProjectCode);
      fd.append("Master_Code", this._MasterCode);
      fd.append("Team_Autho", this.Authority);
      fd.append("Projectblock", this.ProjectBlock);
      fd.append("Remarks", this._remarks);
      fd.append('file', this.selectedFile);
      // this._MasterCode = this.URL_ProjectCode;
      // this.ObjSubTaskDTO.MasterCode = this._MasterCode;
      // this.ObjSubTaskDTO.SubTask_ProjectCode = this.Sub_ProjectCode;
      // this.ObjSubTaskDTO.Attachments = this._inputAttachments;
      // this.ObjSubTaskDTO.Remarks = this._remarks;
      this.service._UpdateSubtaskByProjectCode(fd)
        .subscribe(data => {
          this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
          this.GetSubtask_Details();
        });
      this.notifyService.showInfo("Successfully Updated", '');
      this.closeInfo();
      this._remarks = "";
      this._inputAttachments = "";
    }
  }

  OnTabTask_Click() {
    this.GetSubtask_Details();
  }
  OnOverview_Click(){
    this.GetSubtask_Details();
  }

  Editbutton: boolean;
  _modelProjectName: string;
  _modelProjDesc: string;
  

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

  _modelProjAlloc: number =0;
  OnEditProject_Alloc(id, allocated){
    this._modelProjAlloc = allocated;
    this.Editbutton = true;
    (<HTMLInputElement>document.getElementById("Span_DescName_all" + id)).style.display = "none";
    (<HTMLInputElement>document.getElementById("spanTextarea_all" + id)).style.display = "block";
    (<HTMLInputElement>document.getElementById("textareafocus_all" + id)).focus();
    
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
    //(<HTMLInputElement>document.getElementById("Editbutton")).style.display = "inline-block";
  }

  _Message: string;

  // OnProject_Rename(id, Pcode) {
  //   if (this._modelProjectName != "" && this._modelProjDesc != "") {
  //     this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID).subscribe(data => {
  //       this._Message = data['message'];
  //       this.notifyService.showSuccess(this._Message, "");
  //       this.GetSubtask_Details();
  //     });
  //     this.onCancel(id);
  //   }
  //   else {
  //     this.notifyService.showInfo("Empty string cannot be save", "Please give some name.");
  //   }
  // }

  OnProject_Rename(id, Pcode) {
    if (this._modelProjectName != "" && this._modelProjDesc != "") {
      this.service._ProjectRenameService(id, this._modelProjectName, this._modelProjDesc, this.Current_user_ID,this._modelProjAlloc).subscribe(data => {
        this._Message = data['message'];
        this.notifyService.showSuccess(this._Message, "");
        this.GetSubtask_Details();
        // this.GetProjectsByUserName();
        this.service.SubTaskDetailsService_ToDo_Page(Pcode, this.Comp_No).subscribe(
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

  closeLinkSideBar() {
    document.getElementById("LinkSideBar").style.width = "0";

  }

  OnAddTaskClick() {
    this.router.navigate(["./MoreDetails", this.URL_ProjectCode, "ActionToProject"]);
    document.getElementById("mysideInfobar1").style.width = "60%";
    // document.getElementById("mysideInfobar_NewSubtask").style.width = "60%";
    // document.getElementById("mysideInfobar_Update").style.width = "0px";
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementById("moredet").classList.add("position-fixed");
    // this.MatInput = false;
    // this.ButtonAdd = false;
    // this.GetAllEmployeesForAssignDropdown();
  }

  selectedFile: any = null;

  onFileChange(e) {
    this.selectedFile = <File>e.target.files[0];
    //console.log("--------------->",this.selectedFile)
  }

  sweetAlert() {
    if (this.Status == 'Completed') {
      Swal.fire({
        title: 'This Project is Compelted !!',
        text: 'Do You Want To Reopen This Project ?',
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
            'Action is Not Created',
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
    document.getElementById("mysideInfobar_ProjectsUpdate").style.width = "0";
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
            title: 'Unable To Complete This Project !!',
            text: 'SubTask Status Are In Rejected or Pending ?',
            // icon: 'warning',
            showCancelButton: true       
          });
        }
        else {
        // applying sidebar from mysideInfobar_ProjectsUpdate in html
        document.getElementById("mysideInfobar_ProjectsUpdate").style.width = "60%";
        // placing the backgorund dim on opening sidebar
        document.getElementById("rightbar-overlay").style.display = "block";
        // Fixing the scrollbar for sidebar
        document.getElementById("moredet").classList.add("position-fixed");
        document.getElementById("mysideInfobar").style.width = "0px";
        document.getElementById("mysideInfobar_Update").style.width = "0px";
        }
      });
  }

  Sub_ProjectName: string = "";
  _Description: string;
  _EndDate: Date = null;
  _StartDate: Date = null;
  selected_Employee = [];
  selectedEmpNo: string = null;

  Clear_Feilds() {
    this.Sub_ProjectName = "";
    this._Description = "";
    this._StartDate = null;
    this._EndDate = null;
    this._remarks = "";
    this._inputAttachments = null;
    this._inputAttachments2 = null;
    this.selectedEmpNo = '';
    this.selected_Employee = [];
    this.selectedFile = " ";
  }

  //Project Update
  progress: any;

  updateMainProject() {
    const fd = new FormData();
    fd.append("Project_Code", this._MasterCode);
    fd.append("Team_Autho", this.Authority);
    fd.append("Remarks", this._remarks);
    fd.append("Projectblock", this.ProjectBlock);
    fd.append('file', this.selectedFile);
    this.service._fileuploadService(fd).
      subscribe(event => {
        //console.log(event);
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round(event.loaded / event.total * 100);
          this.notifyService.showSuccess("", "File uploaded successfully");
          this.notifyService.showInfo("", "Project Updated");
        }
        else if (event.type === HttpEventType.Response) {
          //console.log(event);
        }
        this.closeInfo();
        this.GetSubtask_Details();
      });
  }
  LoadDocument(url: string) {
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
    var myWindow = window.open(url);
    myWindow.focus();
    //this.cd.detectChanges();
    //$('#documentPreview').modal('toggle');
  }
}
