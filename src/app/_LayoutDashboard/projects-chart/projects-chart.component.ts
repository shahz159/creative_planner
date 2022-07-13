import { Component, OnInit, Input } from '@angular/core';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
//import { LoadingBarService } from '@ngx-loading-bar/core';
import { ColumnChartDTO } from 'src/app/_Models/column-chart';
//import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
@Component({
  selector: 'app-projects-chart',
  templateUrl: './projects-chart.component.html',
  styleUrls: ['./projects-chart.component.css']
})
export class ProjectsChartComponent implements OnInit {

  constructor(private service: ProjectTypeService,
    //private loadingBar: LoadingBarService,
  ) { }
  //LoadingBar_state = this.loadingBar.useRef('http');
  //private loadingBar: LoadingBarService

  @Input() child_ProjectList: any;

  Current_user_ID: string;
  _ProjectDataList: any;
  totalProjs: number;
  EmpCountInFilter = [];

  //loadingBar_state = this.loadingBar.useRef('http');
  ngOnInit(): void {
    //this.loadingBar_state.start();
    this.Current_user_ID = localStorage.getItem('EmpNo');
  }
  ngAfterViewInit() {
    this.LoadBarChart();
    this.LoadBarChart2();
    this.DivergentChart();
    this.NetworkChart();
    this.height3DPieChart();
    // this.LoadingBar_state.stop();
  }


  ColumnchartData = [];
  LoadBarChart() {
    // alert('ok');
    this.service.ColumnChartData(this.Current_user_ID).subscribe(
      (data) => {
        this.ColumnchartData = data as ColumnChartDTO[];
        if (this.ColumnchartData) {
          //this.loadingBar_state.stop();
        }
        //console.log("ColumnchartData", this.ColumnchartData);
        let chart1 = am4core.create("chartdiv", am4charts.XYChart3D);
        chart1.data = this.ColumnchartData;
       

        // Create axes
        let categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "ProjectType";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
        //valueAxis.adjustLabelPrecision = false;
        // valueAxis.numberFormatter.numberFormat = "#1"; 
        valueAxis.title.text = "[bold]Projects[/]";
        valueAxis.renderer.minGridDistance = 30;
        valueAxis.renderer.labels.template.adapter.add("text", function (text) {
          return text;
        });
        //Completed Status
        let series3 = chart1.series.push(new am4charts.ColumnSeries3D());
        series3.columns.template.propertyFields.fill = "#20c997";
        series3.dataFields.valueY = "Completed_Count";
        series3.dataFields.categoryX = "ProjectType";
        series3.name = "Completed";
        series3.stroke = am4core.color("#20c997");
        series3.fill = am4core.color("#20c997");
        series3.columns.template.width = am4core.percent(75);
        series3.clustered = false;
        series3.columns.template.tooltipText = "Completed : [bold]{Completed_Count}[/]";
        series3.columns.template.fillOpacity = 0.9;
        //Total Projects
        let series4 = chart1.series.push(new am4charts.ColumnSeries3D());
        series4.dataFields.valueY = "TypeCount";
        series4.dataFields.categoryX = "ProjectType";
        series4.stroke = am4core.color("#ffb822");//#ffb822
        series4.fill = am4core.color("#ffb822"); //34495E
        series4.columns.template.tooltipText = "Total {ProjectType}  : [bold]{TypeCount}[/]";
        series4.name = "Total Types";
        series4.columns.template.width = am4core.percent(75);
        series4.clustered = false;

        //legend start
        chart1.legend = new am4charts.Legend();
        chart1.legend.position = "bottom";
        chart1.legend.reverseOrder = true;
        //legend Ends
      });
  }
  LoadBarChart2() {
    // alert('ok');
    this.service.ColumnChartData(this.Current_user_ID).subscribe(
      (data) => {
        this.ColumnchartData = data as ColumnChartDTO[];
       // console.log("ColumnchartData", this.ColumnchartData);
        let chart1 = am4core.create("chartdiv5", am4charts.XYChart3D);
        chart1.data = this.ColumnchartData;
        // Create axes
        let categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "TotalProject";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());
        //valueAxis.adjustLabelPrecision = false;
        // valueAxis.numberFormatter.numberFormat = "#1"; 
        valueAxis.title.text = "[bold]Total Projects[/]";
        valueAxis.renderer.minGridDistance = 30;
        valueAxis.renderer.labels.template.adapter.add("text", function (text) {
          return text;
        });
        // Create series One
        let series1 = chart1.series.push(new am4charts.ColumnSeries3D());
        //series1.columns.template.propertyFields.fill = "#20c997";
        series1.dataFields.valueY = "TotalComplete_Count";
        series1.dataFields.categoryX = "TotalProject";
        series1.name = "Total Completed";
        series1.stroke = am4core.color("#20c997");
        series1.fill = am4core.color("#20c997");
        series1.columns.template.width = am4core.percent(20);
        series1.clustered = false;
        series1.columns.template.tooltipText = "Total Completed : [bold]{TotalComplete_Count}[/]";
        series1.columns.template.fillOpacity = 0.9;
        //Series 2
        let series2 = chart1.series.push(new am4charts.ColumnSeries3D());
        series2.columns.template.propertyFields.fill = "#F7DC6F";
        series2.dataFields.valueY = "TotalProjects_Count";
        series2.dataFields.categoryX = "TotalProject";
        series2.name = "Total Projects";
        series2.stroke = am4core.color("#2980B9");
        series2.fill = am4core.color("#2980B9");//E59866
        series2.columns.template.width = am4core.percent(20);
        series2.clustered = false;
        series2.columns.template.tooltipText = "Total Projects : [bold]{TotalProjects_Count}[/]";
        series2.columns.template.fillOpacity = 0.9;
        //legend start
        chart1.legend = new am4charts.Legend();
        chart1.legend.position = "bottom";
        chart1.legend.reverseOrder = true;
        //legend Ends
        // series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
      });
  }

  NetworkChart() {
    am4core.useTheme(am4themes_animated);
    let chart2 = am4core.create("chartdiv2", am4plugins_forceDirected.ForceDirectedTree);
    let networkSeries = chart2.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 8;
    networkSeries.linkWithStrength = 0;

    let nodeTemplate = networkSeries.nodes.template;
    nodeTemplate.tooltipText = "{name}";
    nodeTemplate.fillOpacity = 1;
    nodeTemplate.label.hideOversized = true;
    nodeTemplate.label.truncate = true;

    let linkTemplate = networkSeries.links.template;
    linkTemplate.strokeWidth = 1;
    let linkHoverState = linkTemplate.states.create("hover");
    linkHoverState.properties.strokeOpacity = 1;
    linkHoverState.properties.strokeWidth = 2;

    nodeTemplate.events.on("over", function (event) {
      let dataItem = event.target.dataItem;
      dataItem.childLinks.each(function (link) {
        link.isHover = true;
      })
    })
    nodeTemplate.events.on("out", function (event) {
      let dataItem = event.target.dataItem;
      dataItem.childLinks.each(function (link) {
        link.isHover = false;
      })
    });
    networkSeries.data = [
      {
        "name": "Shaik Mohammed Rafi",
        "value": 40,
        "linkWith": [
          "Syed Syeduddin Hussain"
        ],
        "children": [
          {
            "name": "David",
            "value": 14
          },
          {
            "name": "Roger",
            "value": 1
          },
          {
            "name": "Duncan",
            "value": 1
          },
          {
            "name": "Rob Dohnen",
            "value": 2
          },
          {
            "name": "Ryan",
            "value": 5
          },
          {
            "name": "Malcom",
            "value": 1
          },
          {
            "name": "Robert",
            "value": 1
          },
          {
            "name": "Sergei",
            "value": 1
          },
          {
            "name": "Vince",
            "value": 2
          },
          {
            "name": "Jason",
            "value": 1
          },
          {
            "name": "Rick",
            "value": 2
          },
          {
            "name": "Gary",
            "value": 7
          },
          {
            "name": "Jake",
            "value": 2
          },
          {
            "name": "Eric",
            "value": 3
          },
          {
            "name": "Mike",
            "value": 18
          }
        ]
      },
      {
        "name": "Syed Syeduddin Hussain",
        "value": 204,
        "linkWith": [
          "Shaik Rafi",
          "Ravi Sir",
          "Hussain Sir",
          "Shujat Sir",
          "Shahbaz "
        ],
        "children": [
          {
            "name": "Projects {value}",
            "value": 20
          },
          {
            "name": "Mr Geller",
            "value": 8
          },
          {
            "name": "Mrs Geller",
            "value": 14
          },
          {
            "name": "Aunt Lilian",
            "value": 2
          },
          {
            "name": "Nana",
            "value": 1
          },
          {
            "name": "Young Ethan",
            "value": 5
          },
          {
            "name": "Ben",
            "value": 9
          },
          {
            "name": "Fun Bobby",
            "value": 3
          },
          {
            "name": "Richard",
            "value": 16
          },
          {
            "name": "Mrs Green",
            "value": 4
          },
          {
            "name": "Paolo2",
            "value": 1
          },
          {
            "name": "Pete",
            "value": 10
          },
          {
            "name": "Chip",
            "value": 1
          },
          {
            "name": "Timothy (Burke)",
            "value": 1
          },
          {
            "name": "Emily",
            "value": 17
          },
          {
            "name": "Dr. Roger",
            "value": 3
          }
        ]
      },
      {
        "name": "Vali Noor",
        "value": 216,
        "linkWith": [
          'Syed Sir'
        ],
        "children": [
          {
            "name": "Carol",
            "value": 10
          },
          {
            "name": "Celia",
            "value": 2
          },
          {
            "name": "Julie",
            "value": 6
          },
          {
            "name": "Chloe",
            "value": 1
          },
          {
            "name": "Bonnie",
            "value": 4
          },
          {
            "name": "Messy Girl (Cheryl)",
            "value": 5
          },
          {
            "name": "Jill",
            "value": 1
          },
          {
            "name": "Elizabeth",
            "value": 8
          },
          {
            "name": "Aunt Millie",
            "value": 2
          },
          {
            "name": "Mona",
            "value": 11
          },
          {
            "name": "Emma",
            "value": 7
          },
          {
            "name": "Charlie",
            "value": 13
          }
        ]
      },
      {
        "name": "Hussai Sir",
        "value": 167,
        "linkWith": [
          "Shujat Sir",
          "Rafi Sir"
        ],
        "children": [
          {
            "name": "Aurora",
            "value": 2
          },
          {
            "name": "Jill Goodacre",
            "value": 1
          },
          {
            "name": "Janice",
            "value": 12
          },
          {
            "name": "Mrs Bing",
            "value": 6
          },
          {
            "name": "Nina",
            "value": 1
          },
          {
            "name": "Susie",
            "value": 5
          },
          {
            "name": "Mary Theresa",
            "value": 1
          },
          {
            "name": "Ginger",
            "value": 2
          },
          {
            "name": "Joanna",
            "value": 5
          },
          {
            "name": "Kathy",
            "value": 9
          },
          {
            "name": "Mr Bing",
            "value": 1
          }
        ]
      },
      {
        "name": "Shujat Sir",
        "value": 158,
        "linkWith": [
          "Hussain Sir",
          "Syed Sir"

        ],
        "children": [
          {
            "name": "Paolo",
            "value": 5
          },
          {
            "name": "Barry",
            "value": 1
          },
          {
            "name": "Dr Green",
            "value": 3
          },
          {
            "name": "Mark3",
            "value": 1
          },
          {
            "name": "Josh",
            "value": 2
          },
          {
            "name": "Gunther",
            "value": 2
          },
          {
            "name": "Joshua",
            "value": 3
          },
          {
            "name": "Danny",
            "value": 1
          },
          {
            "name": "Mr. Zelner",
            "value": 1
          },
          {
            "name": "Paul Stevens",
            "value": 3
          },
          {
            "name": "Tag",
            "value": 4
          },
          {
            "name": "Melissa",
            "value": 1
          },
          {
            "name": "Gavin",
            "value": 2
          }
        ]
      },
      {
        "name": "Sharfu",
        "value": 88,
        "linkWith": [
          "Syed Sir",
          "Husain Sir"

        ],
        "children": [
          {
            "name": "Lorraine",
            "value": 2
          },
          {
            "name": "Melanie",
            "value": 2
          },
          {
            "name": "Erica",
            "value": 2
          },
          {
            "name": "Kate",
            "value": 4
          },
          {
            "name": "Lauren",
            "value": 2
          },
          {
            "name": "Estelle",
            "value": 1
          },
          {
            "name": "Katie",
            "value": 2
          },
          {
            "name": "Janine",
            "value": 9
          },
          {
            "name": "Erin",
            "value": 1
          },
          {
            "name": "Cecilia",
            "value": 3
          }
        ]
      }
    ];
  }
  DivergentChart() {
    let chart3 = am4core.create("chartdiv3", am4charts.XYChart);
    // Title
    let title = chart3.titles.push(new am4core.Label());
    title.text = "";
    title.fontSize = 25;
    title.marginBottom = 15;
    // Add data
    chart3.data = [{
      "category": "Syed Syeduddin Hussain",
      "negative1": -0.1,
      "negative2": -0.9,
      "positive1": 5,
      "positive2": 94
    }, {
      "category": "Shaik Mohammed Rafi",
      "negative1": -2,
      "negative2": -4,
      "positive1": 19,
      "positive2": 75
    }, {
      "category": "Hussain Sir",
      "negative1": -2,
      "negative2": -10,
      "positive1": 46,
      "positive2": 42
    }, {
      "category": "Vali Noor",
      "negative1": -2,
      "negative2": -13,
      "positive1": 33,
      "positive2": 52
    }, {
      "category": "Sharfuddin",
      "negative1": -6,
      "negative2": -19,
      "positive1": 34,
      "positive2": 41
    }, {
      "category": "Shujat Sir",
      "negative1": -3,
      "negative2": -23,
      "positive1": 49,
      "positive2": 25
    }, {
      "category": "Shahbaz",
      "negative1": -5,
      "negative2": -28,
      "positive1": 49,
      "positive2": 18
    }, {
      "category": "Nawaz Bahi",
      "negative1": -14,
      "negative2": -34,
      "positive1": 37,
      "positive2": 16
    },];

    // Create axes
    let categoryAxis = chart3.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;

    let valueAxis = chart3.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = -100;
    valueAxis.max = 100;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    })

    // Legend
    chart3.legend = new am4charts.Legend();
    chart3.legend.position = "right";
    // Use only absolute numbers
    chart3.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
      let series = chart3.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = field;
      series.dataFields.categoryY = "category";
      series.stacked = true;
      series.name = name;
      series.stroke = color;
      series.fill = color;
      let label = series.bullets.push(new am4charts.LabelBullet);
      label.label.text = "{valueX}%";
      label.label.fill = am4core.color("#fff");
      label.label.strokeWidth = 0;
      label.label.truncate = false;
      label.label.hideOversized = true;
      label.locationX = 0.5;
      return series;
    }

    let interfaceColors = new am4core.InterfaceColorSet();
    let positiveColor = interfaceColors.getFor("positive");
    let negativeColor = interfaceColors.getFor("negative");

    createSeries("negative2", "Hold", negativeColor.lighten(0.5));
    createSeries("negative1", "Delay", negativeColor);
    createSeries("positive1", "InProcess", positiveColor.lighten(0.5));
    createSeries("positive2", "Completed", positiveColor);

    chart3.legend.events.on("layoutvalidated", function (event) {
      // chart.legend.itemContainers.each((container) => {
      //   // if (container.dataItem.dataContext.name == "Never") {
      //   //   container.toBack();
      //   // }
      // })
    })
  }
  height3DPieChart() {
    let chart4 = am4core.create("chartdiv4", am4charts.PieChart3D);
    chart4.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart4.data = [
      {
        country: "Total Projects",
        litres: 501.9
      },
      {
        country: "Under Approval",
        litres: 301.9
      },
      {
        country: "Hold",
        litres: 201.1
      },
      {
        country: "Delay",
        litres: 165.8
      },
      {
        country: "InProcess",
        litres: 139.9
      },
      {
        country: "Completed",
        litres: 128.3
      }
    ];

    chart4.innerRadius = am4core.percent(40);
    chart4.depth = 120;

    chart4.legend = new am4charts.Legend();

    let series = chart4.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.depthValue = "litres";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;
  }
}
