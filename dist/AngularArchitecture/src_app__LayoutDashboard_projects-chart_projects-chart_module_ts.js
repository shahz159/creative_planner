"use strict";
(self["webpackChunkAngularArchitecture"] = self["webpackChunkAngularArchitecture"] || []).push([["src_app__LayoutDashboard_projects-chart_projects-chart_module_ts"],{

/***/ 17346:
/*!**********************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-chart/projects-chart-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsChartRoutingModule": () => (/* binding */ ProjectsChartRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _projects_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-chart.component */ 32172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{ path: '', component: _projects_chart_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsChartComponent }];
class ProjectsChartRoutingModule {
}
ProjectsChartRoutingModule.ɵfac = function ProjectsChartRoutingModule_Factory(t) { return new (t || ProjectsChartRoutingModule)(); };
ProjectsChartRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProjectsChartRoutingModule });
ProjectsChartRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProjectsChartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 32172:
/*!*****************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-chart/projects-chart.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsChartComponent": () => (/* binding */ ProjectsChartComponent)
/* harmony export */ });
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ 19839);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ 19770);
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ 61049);
/* harmony import */ var _amcharts_amcharts4_plugins_forceDirected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/plugins/forceDirected */ 42540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_Services/project-type.service */ 42430);






//import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
class ProjectsChartComponent {
    constructor(service) {
        this.service = service;
        this.EmpCountInFilter = [];
        this.ColumnchartData = [];
    }
    //loadingBar_state = this.loadingBar.useRef('http');
    ngOnInit() {
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
    LoadBarChart() {
        // alert('ok');
        this.service.ColumnChartData(this.Current_user_ID).subscribe((data) => {
            this.ColumnchartData = data;
            if (this.ColumnchartData) {
                //this.loadingBar_state.stop();
            }
            //console.log("ColumnchartData", this.ColumnchartData);
            let chart1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.create("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.XYChart3D);
            chart1.data = this.ColumnchartData;
            // Create axes
            let categoryAxis = chart1.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.CategoryAxis());
            categoryAxis.dataFields.category = "ProjectType";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            let valueAxis = chart1.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ValueAxis());
            //valueAxis.adjustLabelPrecision = false;
            // valueAxis.numberFormatter.numberFormat = "#1"; 
            valueAxis.title.text = "[bold]Projects[/]";
            valueAxis.renderer.minGridDistance = 30;
            valueAxis.renderer.labels.template.adapter.add("text", function (text) {
                return text;
            });
            //Completed Status
            let series3 = chart1.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries3D());
            series3.columns.template.propertyFields.fill = "#20c997";
            series3.dataFields.valueY = "Completed_Count";
            series3.dataFields.categoryX = "ProjectType";
            series3.name = "Completed";
            series3.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#20c997");
            series3.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#20c997");
            series3.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.percent(75);
            series3.clustered = false;
            series3.columns.template.tooltipText = "Completed : [bold]{Completed_Count}[/]";
            series3.columns.template.fillOpacity = 0.9;
            //Total Projects
            let series4 = chart1.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries3D());
            series4.dataFields.valueY = "TypeCount";
            series4.dataFields.categoryX = "ProjectType";
            series4.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#ffb822"); //#ffb822
            series4.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#ffb822"); //34495E
            series4.columns.template.tooltipText = "Total {ProjectType}  : [bold]{TypeCount}[/]";
            series4.name = "Total Types";
            series4.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.percent(75);
            series4.clustered = false;
            //legend start
            chart1.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.Legend();
            chart1.legend.position = "bottom";
            chart1.legend.reverseOrder = true;
            //legend Ends
        });
    }
    LoadBarChart2() {
        // alert('ok');
        this.service.ColumnChartData(this.Current_user_ID).subscribe((data) => {
            this.ColumnchartData = data;
            // console.log("ColumnchartData", this.ColumnchartData);
            let chart1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.create("chartdiv5", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.XYChart3D);
            chart1.data = this.ColumnchartData;
            // Create axes
            let categoryAxis = chart1.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.CategoryAxis());
            categoryAxis.dataFields.category = "TotalProject";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            let valueAxis = chart1.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ValueAxis());
            //valueAxis.adjustLabelPrecision = false;
            // valueAxis.numberFormatter.numberFormat = "#1"; 
            valueAxis.title.text = "[bold]Total Projects[/]";
            valueAxis.renderer.minGridDistance = 30;
            valueAxis.renderer.labels.template.adapter.add("text", function (text) {
                return text;
            });
            // Create series One
            let series1 = chart1.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries3D());
            //series1.columns.template.propertyFields.fill = "#20c997";
            series1.dataFields.valueY = "TotalComplete_Count";
            series1.dataFields.categoryX = "TotalProject";
            series1.name = "Total Completed";
            series1.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#20c997");
            series1.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#20c997");
            series1.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.percent(20);
            series1.clustered = false;
            series1.columns.template.tooltipText = "Total Completed : [bold]{TotalComplete_Count}[/]";
            series1.columns.template.fillOpacity = 0.9;
            //Series 2
            let series2 = chart1.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries3D());
            series2.columns.template.propertyFields.fill = "#F7DC6F";
            series2.dataFields.valueY = "TotalProjects_Count";
            series2.dataFields.categoryX = "TotalProject";
            series2.name = "Total Projects";
            series2.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#2980B9");
            series2.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#2980B9"); //E59866
            series2.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.percent(20);
            series2.clustered = false;
            series2.columns.template.tooltipText = "Total Projects : [bold]{TotalProjects_Count}[/]";
            series2.columns.template.fillOpacity = 0.9;
            //legend start
            chart1.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.Legend();
            chart1.legend.position = "bottom";
            chart1.legend.reverseOrder = true;
            //legend Ends
            // series2.columns.template.tooltipText = "GDP grow in {category} (2017): [bold]{valueY}[/]";
        });
    }
    NetworkChart() {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.useTheme(_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"]);
        let chart2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.create("chartdiv2", _amcharts_amcharts4_plugins_forceDirected__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedTree);
        let networkSeries = chart2.series.push(new _amcharts_amcharts4_plugins_forceDirected__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedSeries());
        networkSeries.dataFields.linkWith = "linkWith";
        networkSeries.dataFields.name = "name";
        networkSeries.dataFields.id = "name";
        networkSeries.dataFields.value = "value";
        networkSeries.dataFields.children = "children";
        networkSeries.nodes.template.label.text = "{name}";
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
            });
        });
        nodeTemplate.events.on("out", function (event) {
            let dataItem = event.target.dataItem;
            dataItem.childLinks.each(function (link) {
                link.isHover = false;
            });
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
        let chart3 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.create("chartdiv3", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.XYChart);
        // Title
        let title = chart3.titles.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.Label());
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
        let categoryAxis = chart3.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.CategoryAxis());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.axisFills.template.disabled = false;
        categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;
        let valueAxis = chart3.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ValueAxis());
        valueAxis.min = -100;
        valueAxis.max = 100;
        valueAxis.renderer.minGridDistance = 50;
        valueAxis.renderer.ticks.template.length = 5;
        valueAxis.renderer.ticks.template.disabled = false;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
        valueAxis.renderer.labels.template.adapter.add("text", function (text) {
            return text + "%";
        });
        // Legend
        chart3.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.Legend();
        chart3.legend.position = "right";
        // Use only absolute numbers
        chart3.numberFormatter.numberFormat = "#.#s";
        // Create series
        function createSeries(field, name, color) {
            let series = chart3.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.ColumnSeries());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "category";
            series.stacked = true;
            series.name = name;
            series.stroke = color;
            series.fill = color;
            let label = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.LabelBullet);
            label.label.text = "{valueX}%";
            label.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.color("#fff");
            label.label.strokeWidth = 0;
            label.label.truncate = false;
            label.label.hideOversized = true;
            label.locationX = 0.5;
            return series;
        }
        let interfaceColors = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.InterfaceColorSet();
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
        });
    }
    height3DPieChart() {
        let chart4 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.create("chartdiv4", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.PieChart3D);
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
        chart4.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__.percent(40);
        chart4.depth = 120;
        chart4.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.Legend();
        let series = chart4.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    }
    closeInfo() {
        document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
        document.getElementById("rightbar-overlay").style.display = "none";
        document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    }
}
ProjectsChartComponent.ɵfac = function ProjectsChartComponent_Factory(t) { return new (t || ProjectsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_Services_project_type_service__WEBPACK_IMPORTED_MODULE_4__.ProjectTypeService)); };
ProjectsChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProjectsChartComponent, selectors: [["app-projects-chart"]], inputs: { child_ProjectList: "child_ProjectList" }, decls: 59, vars: 0, consts: [[1, "kt-container", "kt-container--fluid", "kt-grid__item", "kt-grid__item--fluid"], [1, "row"], [1, "col-lg-12"], [1, "kt-portlet", "kt-portlet--bordered-semi", "mb-2"], [1, "kt-portlet__head"], [1, "kt-portlet__head-label"], [1, "kt-portlet__head-title"], [1, "col-lg-6"], ["id", "kt_portlet", 1, "kt-portlet"], [1, "kt-portlet__head-icon"], [1, "flaticon-map-location"], [1, "kt-portlet__body"], ["id", "chartdiv5", 2, "width", "100%", "height", "500px"], [1, "kt-portlet"], ["id", "chartdiv", 2, "width", "100%", "height", "500px"], ["id", "chartdiv4", 2, "width", "100%", "height", "500px"], ["id", "chartdiv3", 2, "width", "100%", "height", "500px"], ["id", "chartdiv2", 2, "width", "100%", "height", "500px"], ["id", "rightbar-overlay", 3, "click"]], template: function ProjectsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Performance Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 4)(11, "div", 5)(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Total Projects Vs Total Completed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7)(19, "div", 13)(20, "div", 4)(21, "div", 5)(22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Project Type vs Completed Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 2)(29, "div", 13)(30, "div", 4)(31, "div", 5)(32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Status Performance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 2)(39, "div", 13)(40, "div", 4)(41, "div", 5)(42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Team Performance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 2)(49, "div", 13)(50, "div", 4)(51, "div", 5)(52, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " Portfolio Graph vs Team members ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProjectsChartComponent_Template_div_click_58_listener() { return ctx.closeInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 75821:
/*!**************************************************************************!*\
  !*** ./src/app/_LayoutDashboard/projects-chart/projects-chart.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsChartModule": () => (/* binding */ ProjectsChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _projects_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-chart-routing.module */ 17346);
/* harmony import */ var _projects_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-chart.component */ 32172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




class ProjectsChartModule {
}
ProjectsChartModule.ɵfac = function ProjectsChartModule_Factory(t) { return new (t || ProjectsChartModule)(); };
ProjectsChartModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProjectsChartModule });
ProjectsChartModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _projects_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsChartRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectsChartModule, { declarations: [_projects_chart_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _projects_chart_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectsChartRoutingModule] }); })();


/***/ }),

/***/ 91218:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/plugins/forceDirected/ForceDirectedLink.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedLink": () => (/* binding */ ForceDirectedLink)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 44585);
/* harmony import */ var _core_Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Sprite */ 83157);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Registry */ 95277);
/* harmony import */ var _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/InterfaceColorSet */ 71466);
/* harmony import */ var _core_rendering_Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/rendering/Path */ 30185);
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Percent */ 70067);
/**
 * ForceDirectedLink module.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */






/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */

/**
 * A class that builds links between [[ForceDirectedNode]] elements.
 *
 * @see {@link IForceDirectedLinkEvents} for a list of available events
 * @see {@link IForceDirectedLinkAdapters} for a list of available Adapters
 * @since 4.3.8
 * @important
 */

var ForceDirectedLink =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(ForceDirectedLink, _super);
  /**
   * Constructor
   */


  function ForceDirectedLink() {
    var _this = _super.call(this) || this;

    _this.className = "ForceDirectedLink";
    var interfaceColors = new _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_2__.InterfaceColorSet();
    _this.fillOpacity = 0;
    _this.strokeOpacity = 0.5;
    _this.stroke = interfaceColors.getFor("grid");
    _this.isMeasured = false;
    _this.nonScalingStroke = true;
    _this.interactionsEnabled = false;
    _this.distance = 1.5;
    _this.strength = 1;

    _this.applyTheme();

    return _this;
  }
  /**
   * Validates element:
   * * Triggers events
   * * Redraws the element
   *
   * @ignore Exclude from docs
   */


  ForceDirectedLink.prototype.validate = function () {
    _super.prototype.validate.call(this);

    var source = this.source;
    var target = this.target;

    if (source && target) {
      this.path = _core_rendering_Path__WEBPACK_IMPORTED_MODULE_3__.moveTo({
        x: source.pixelX,
        y: source.pixelY
      }) + _core_rendering_Path__WEBPACK_IMPORTED_MODULE_3__.lineTo({
        x: target.pixelX,
        y: target.pixelY
      });

      if (source.isHidden || target.isHidden || source.isHiding || target.isHiding) {
        this.hide();
      } else {
        this.show();
      }
    }
  };

  Object.defineProperty(ForceDirectedLink.prototype, "source", {
    /**
     * @return Source node
     */
    get: function () {
      return this._source;
    },

    /**
     * Source node - a node link starts from.
     *
     * @param  value  Source node
     */
    set: function (value) {
      if (value) {
        this._source = value;

        this._disposers.push(value.events.on("positionchanged", this.invalidate, this, false));

        this._disposers.push(value.events.on("validated", this.invalidate, this, false));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedLink.prototype, "target", {
    /**
     * @return Target node
     */
    get: function () {
      return this._target;
    },

    /**
     * Target node - a node link ends at.
     *
     * @param  value  Target node
     */
    set: function (value) {
      if (value) {
        this._target = value;

        this._disposers.push(value.events.on("positionchanged", this.invalidate, this, false));

        this._disposers.push(value.events.on("validated", this.invalidate, this, false));
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedLink.prototype, "distance", {
    /**
     * @return Distance
     */
    get: function () {
      if (this._adapterO) {
        if (this._adapterO.isEnabled("distance")) {
          return this._adapterO.apply("distance", this.properties.distance);
        }
      }

      return this.properties.distance;
    },

    /**
     * Distance between centers of source and target nodes.
     *
     * This is relative to the radii to sum of both source and target nodes.
     *
     * E.g. if this would be set to `1` both nodes would be touching each other.
     *
     * @default 1.5
     * @param  value  Distance
     */
    set: function (value) {
      this.setPropertyValue("distance", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedLink.prototype, "strength", {
    /**
     * @return Strength
     */
    get: function () {
      if (this._adapterO) {
        if (this._adapterO.isEnabled("strength")) {
          return this._adapterO.apply("strength", this.properties.strength);
        }
      }

      return this.properties.strength;
    },

    /**
     * Relative "strength" of the traction between linked nodes.
     *
     * Available values: 0 to XX.
     *
     * The bigger the number, the more rigid the link and the less it will
     * stretch when node is dragged.
     *
     * Carefully with very big numbers: nodes and links might start behaving
     * quite "nerviously".
     *
     * @default 1
     * @param  value  Strength
     */
    set: function (value) {
      this.setPropertyValue("strength", value);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * X coordinate for the slice tooltip.
   *
   * @ignore
   * @return X
   */

  ForceDirectedLink.prototype.getTooltipX = function () {
    var x = this.getPropertyValue("tooltipX");

    if (!(x instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.Percent)) {
      x = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.percent)(50);
    }

    if (x instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.Percent) {
      var source = this.source;
      var target = this.target;

      if (source && target) {
        var x1 = source.pixelX;
        var x2 = target.pixelX;
        return x1 + (x2 - x1) * x.value;
      }
    }

    return 0;
  };
  /**
   * Y coordinate for the slice tooltip.
   *
   * @ignore
   * @return Y
   */


  ForceDirectedLink.prototype.getTooltipY = function () {
    var y = this.getPropertyValue("tooltipY");

    if (!(y instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.Percent)) {
      y = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.percent)(50);
    }

    if (y instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_4__.Percent) {
      var source = this.source;
      var target = this.target;

      if (source && target) {
        var y1 = source.pixelY;
        var y2 = target.pixelY;
        return y1 + (y2 - y1) * y.value;
      }
    }

    return 0;
  };

  return ForceDirectedLink;
}(_core_Sprite__WEBPACK_IMPORTED_MODULE_0__.Sprite);


/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */

_core_Registry__WEBPACK_IMPORTED_MODULE_1__.registry.registeredClasses.ForceDirectedLink = ForceDirectedLink;

/***/ }),

/***/ 52320:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/plugins/forceDirected/ForceDirectedNode.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedNode": () => (/* binding */ ForceDirectedNode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 44585);
/* harmony import */ var _core_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Container */ 65380);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Registry */ 95277);
/* harmony import */ var _core_elements_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/elements/Circle */ 29603);
/* harmony import */ var _core_elements_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/elements/Label */ 95914);
/* harmony import */ var _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/InterfaceColorSet */ 71466);
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/Type */ 68701);
/* harmony import */ var _core_utils_Dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/Dictionary */ 83902);
/**
 * Module that defines everything related to building ForceDirectedNodes.
 *
 * It is a container which has ForceDirectedNode element which is a RoundedRectangle.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */








/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */

/**
 * Class used to creates [[ForceDirectedNode]] elements (circles).
 *
 * @see {@link IForceDirectedNodeEvents} for a list of available events
 * @see {@link IForceDirectedNodeAdapters} for a list of available Adapters
 * @since 4.3.8
 * @important
 */

var ForceDirectedNode =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__extends)(ForceDirectedNode, _super);
  /**
   * Constructor
   */


  function ForceDirectedNode() {
    var _this = _super.call(this) || this;

    _this.className = "ForceDirectedNode"; //this.isMeasured = true; // for correct position of the tooltip

    _this.applyOnClones = true;
    _this.togglable = true;
    _this.draggable = true;
    _this.setStateOnChildren = true;
    _this.isActive = false;
    _this.expandAll = true;
    _this.paddingRadius = 0;
    _this.linksWith = new _core_utils_Dictionary__WEBPACK_IMPORTED_MODULE_6__.Dictionary();

    _this._disposers.push(new _core_utils_Dictionary__WEBPACK_IMPORTED_MODULE_6__.DictionaryDisposer(_this.linksWith));

    _this.events.on("dragstart", function () {
      if (_this.dataItem.component) {
        _this.dataItem.component.nodeDragStarted();
      }
    }, _this, false);

    _this.events.on("drag", function () {
      _this.updateSimulation();
    }, _this, false);

    var outerCircle = _this.createChild(_core_elements_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle);

    outerCircle.shouldClone = false;
    outerCircle.strokeWidth = 2;
    outerCircle.nonScalingStroke = true;
    var bgColor = new _core_utils_InterfaceColorSet__WEBPACK_IMPORTED_MODULE_4__.InterfaceColorSet().getFor("background");
    outerCircle.fill = bgColor;
    _this.outerCircle = outerCircle;
    var hoverState = outerCircle.states.create("hover");
    hoverState.properties.scale = 1.1;
    var outerActiveState = outerCircle.states.create("active");
    outerActiveState.properties.scale = 1.1;
    outerActiveState.properties.visible = true;
    var activeHoverState = outerCircle.states.create("hoverActive");
    activeHoverState.properties.scale = 1;

    var circle = _this.createChild(_core_elements_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle);

    var activeState = circle.states.create("active");
    activeState.properties.visible = true;
    circle.shouldClone = false;
    circle.interactionsEnabled = false;
    circle.hiddenState.properties.radius = 0.01;
    circle.events.on("validated", _this.updateSimulation, _this, false);
    circle.hiddenState.properties.visible = true;
    _this.circle = circle;

    _this.addDisposer(circle.events.on("validated", _this.updateLabelSize, _this, false));

    _this._disposers.push(_this.circle);

    var label = _this.createChild(_core_elements_Label__WEBPACK_IMPORTED_MODULE_3__.Label);

    label.shouldClone = false;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fill = bgColor;
    label.strokeOpacity = 0;
    label.interactionsEnabled = false;
    label.textAlign = "middle";
    label.textValign = "middle";
    label.nonScaling = true;
    _this.label = label;

    _this.adapter.add("tooltipY", function (y, target) {
      return -target.circle.pixelRadius;
    });

    return _this;
  }
  /**
   * @ignore
   */


  ForceDirectedNode.prototype.updateLabelSize = function () {
    if (this.label.text) {
      var circle = this.circle;
      var radius = circle.pixelRadius;
      var ds = circle.defaultState;
      var dsRadius = ds.properties.radius;

      if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(dsRadius)) {
        radius = dsRadius;
      }

      var scale = 1;

      if (this.parent && this.parent.parent) {
        scale = this.parent.parent.scale;
      }

      this.label.width = 2 * radius * scale;
      this.label.height = 2 * radius * scale;
    }
  };
  /**
   * Copies all parameters from another [[ForceDirectedNode]].
   *
   * @param source Source ForceDirectedNode
   */


  ForceDirectedNode.prototype.copyFrom = function (source) {
    _super.prototype.copyFrom.call(this, source);

    if (this.circle) {
      this.circle.copyFrom(source.circle);
    }

    if (this.label) {
      this.label.copyFrom(source.label);
    }

    if (this.outerCircle) {
      this.outerCircle.copyFrom(source.outerCircle);
    }
  };
  /**
   * Sets node as "active" (expanded).
   *
   * @ignore
   * @param  value  Active or not?
   */


  ForceDirectedNode.prototype.setActive = function (value) {
    var _this = this;

    _super.prototype.setActive.call(this, value);

    var dataItem = this.dataItem;

    if (dataItem) {
      var children = dataItem.children;
      var component = dataItem.component;

      if (!component.dataItemsInvalid) {
        if (value && children && !dataItem.childrenInited) {
          component.initNode(dataItem);
          component.updateNodeList();
        }

        if (value) {
          this.show();

          if (children) {
            children.each(function (child) {
              child.node.show();
              child.node.interactionsEnabled = true;

              if (child.parentLink) {
                child.parentLink.show();
              }

              if (_this.expandAll) {
                child.node.isActive = true;
              } else {
                child.node.isActive = false; //child.node.hide(0)
              }
            });
          }

          dataItem.dispatchVisibility(true);
        } else {
          if (children) {
            children.each(function (child) {
              if (child.parentLink) {
                child.parentLink.hide();
              }

              child.node.isActive = false;
              child.node.interactionsEnabled = false;
              child.node.hide();
            });
          }

          dataItem.dispatchVisibility(false);
        }
      }
    }

    this.updateSimulation();
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedNode.prototype.updateSimulation = function () {
    var dataItem = this.dataItem;

    if (dataItem && dataItem.component) {
      dataItem.component.restartSimulation();
    }
  };

  Object.defineProperty(ForceDirectedNode.prototype, "expandAll", {
    /**
     * @return Expand all?
     */
    get: function () {
      return this.getPropertyValue("expandAll");
    },

    /**
     * If set to `true` (default) toggling a node on will automatically expand
     * all nodes across the whole tree (all levels) of its descendants.
     *
     * Setting to `false` will only expand immediate children (one level).
     *
     * @default true
     * @since 4.4.8
     * @param  value  Expand all?
     */
    set: function (value) {
      this.setPropertyValue("expandAll", value);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Creates a new link between two nodes.
   *
   * Use this method to dynamically add links without requiring to revalidate
   * whole of the data.
   *
   * @since 4.4.8
   * @param   node      Target node
   * @param   strength  Link strength
   * @return            New link
   */

  ForceDirectedNode.prototype.linkWith = function (node, strength) {
    var link = this.linksWith.getKey(node.uid);

    if (!link) {
      link = node.linksWith.getKey(this.uid);
    }

    if (!link) {
      var dataItem = this.dataItem;
      var component = dataItem.component;
      link = component.links.create();
      link.parent = component;
      link.zIndex = -1;
      link.source = this;
      link.target = node;
      link.stroke = dataItem.node.fill;
      link.dataItem = node.dataItem;

      if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_5__.isNumber(strength)) {
        link.strength = strength;
      }

      var nodeIndex = component.nodes.indexOf(dataItem.node);
      var childIndex = component.nodes.indexOf(node);
      component.forceLinks.push({
        source: nodeIndex,
        target: childIndex
      });
      component.updateNodeList();
      dataItem.childLinks.push(link);
      this.linksWith.setKey(node.uid, link);
    }

    return link;
  };
  /**
   * Removes a link between two nodes.
   *
   * @since 4.4.8
   * @param  node  Target node
   */


  ForceDirectedNode.prototype.unlinkWith = function (node) {
    this.linksWith.removeKey(node.uid);
  };

  Object.defineProperty(ForceDirectedNode.prototype, "paddingRadius", {
    /**
     * @return Padding radius
     */
    get: function () {
      return this.getPropertyValue("paddingRadius");
    },

    /**
     * Padding of the nodes, in pixels.
     *
     * @since 4.6.7
     * @default 0
     * @param  value  padding radius
     */
    set: function (value) {
      this.setPropertyValue("paddingRadius", value);
    },
    enumerable: true,
    configurable: true
  });
  return ForceDirectedNode;
}(_core_Container__WEBPACK_IMPORTED_MODULE_0__.Container);


/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */

_core_Registry__WEBPACK_IMPORTED_MODULE_1__.registry.registeredClasses.ForceDirectedNode = ForceDirectedNode;

/***/ }),

/***/ 24954:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/plugins/forceDirected/ForceDirectedSeries.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedSeries": () => (/* binding */ ForceDirectedSeries),
/* harmony export */   "ForceDirectedSeriesDataItem": () => (/* binding */ ForceDirectedSeriesDataItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 44585);
/* harmony import */ var _charts_series_Series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../charts/series/Series */ 32228);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Registry */ 95277);
/* harmony import */ var _core_utils_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/List */ 48182);
/* harmony import */ var _ForceDirectedNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ForceDirectedNode */ 52320);
/* harmony import */ var _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Disposer */ 12730);
/* harmony import */ var _ForceDirectedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ForceDirectedLink */ 91218);
/* harmony import */ var _core_utils_ColorSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/ColorSet */ 37479);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! d3-force */ 10370);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! d3-force */ 73460);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! d3-force */ 99994);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! d3-force */ 22306);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-force */ 35349);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3-force */ 9832);
/* harmony import */ var _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/Math */ 18053);
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/Type */ 68701);
/* harmony import */ var _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/Utils */ 74220);
/* harmony import */ var _core_utils_Array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/Array */ 66181);
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/utils/Percent */ 70067);
/* harmony import */ var _core_interaction_Mouse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/interaction/Mouse */ 28626);
/* harmony import */ var _core_elements_RoundedRectangle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/elements/RoundedRectangle */ 69805);
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
















/**
 * ============================================================================
 * DATA ITEM
 * ============================================================================
 * @hidden
 */

/**
 * Defines a [[DataItem]] for [[ForceDirectedSeries]].
 *
 * @see {@link DataItem}
 * @since 4.3.8
 */

var ForceDirectedSeriesDataItem =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__extends)(ForceDirectedSeriesDataItem, _super);
  /**
   * Constructor
   */


  function ForceDirectedSeriesDataItem() {
    var _this = _super.call(this) || this;
    /**
     * Have all children already been initialized?
     */


    _this.childrenInited = false;
    _this.className = "ForceDirectedSeriesDataItem";
    _this.hasChildren.children = true;
    _this.childLinks = new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.List();

    _this.applyTheme();

    return _this;
  }
  /**
   * Shows the Data Item and related visual elements.
   *
   * @param duration  Animation duration (ms)
   * @param delay     Delay animation (ms)
   * @param fields    A list of fields to set values of
   */


  ForceDirectedSeriesDataItem.prototype.show = function (duration, delay, fields) {
    this._visible = true;

    if (this.node) {
      this.node.isActive = true;
    }

    return;
  };
  /**
   * @ignore
   */


  ForceDirectedSeriesDataItem.prototype.dispatchVisibility = function (visible) {
    if (this.events.isEnabled("visibilitychanged")) {
      var event_1 = {
        type: "visibilitychanged",
        target: this,
        visible: visible
      };
      this.events.dispatchImmediately("visibilitychanged", event_1);
    }
  };
  /**
   * Hides the Data Item and related visual elements.
   *
   * @param duration  Animation duration (ms)
   * @param delay     Delay animation (ms)
   * @param toValue   A value to set to `fields` when hiding
   * @param fields    A list of data fields to set value to `toValue`
   */


  ForceDirectedSeriesDataItem.prototype.hide = function (duration, delay, toValue, fields) {
    this._visible = false;

    if (this.events.isEnabled("visibilitychanged")) {
      var event_2 = {
        type: "visibilitychanged",
        target: this,
        visible: false
      };
      this.events.dispatchImmediately("visibilitychanged", event_2);
    }

    if (this.node) {
      this.node.isActive = false;
    }

    return;
  };

  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "value", {
    /**
     * @return Value
     */
    get: function () {
      var value = this.values.value.value;

      if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.isNumber(value)) {
        if (this.children) {
          value = 0;
          this.children.each(function (child) {
            value += child.value;
          });
        }
      }

      return value;
    },

    /**
     * Numeric value of the item.
     *
     * @param value  Value
     */
    set: function (value) {
      this.setValue("value", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "node", {
    /**
     * An element, related to this data item. (node)
     *
     * @readonly
     * @return node element
     */
    get: function () {
      var _this = this;

      if (!this._node) {
        var component_1 = this.component;
        var node_1 = component_1.nodes.create();
        node_1.draggable = true;
        this._node = node_1;

        this._disposers.push(node_1);

        this._disposers.push(new _core_utils_Disposer__WEBPACK_IMPORTED_MODULE_4__.Disposer(function () {
          component_1.nodes.removeValue(node_1);
        }));

        this.addSprite(node_1);
        node_1.visible = this.visible;
        node_1.hiddenState.properties.visible = true; // Apply accessibility

        if (component_1.itemsFocusable()) {
          this.component.role = "menu";
          node_1.role = "menuitem";
          node_1.focusable = true;
        } else {
          this.component.role = "list";
          node_1.role = "listitem";
          node_1.focusable = false;
        } // Apply screen reader label


        if (node_1.focusable) {
          node_1.events.once("focus", function (ev) {
            node_1.readerTitle = component_1.populateString(component_1.itemReaderText, _this);
          }, undefined, false);
          node_1.events.once("blur", function (ev) {
            node_1.readerTitle = "";
          }, undefined, false);
        }

        if (node_1.hoverable) {
          node_1.events.once("over", function (ev) {
            node_1.readerTitle = component_1.populateString(component_1.itemReaderText, _this);
          }, undefined, false);
          node_1.events.once("out", function (ev) {
            node_1.readerTitle = "";
          }, undefined, false);
        }
      }

      return this._node;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "level", {
    /**
     * Depth level in the series hierarchy.
     *
     * The top-level item will have level set at 0. Its children will have
     * level 1, and so on.
     *
     * @readonly
     * @return Level
     */
    get: function () {
      if (!this.parent) {
        return 0;
      } else {
        return this.parent.level + 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "percent", {
    /**
     * Percent value of a node.
     *
     * @since 4.9.0
     * @return Percent
     */
    get: function () {
      if (this.parent) {
        return this.value / this.parent.value * 100;
      }

      return 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "color", {
    /**
     * @return Color
     */
    get: function () {
      var color = this.properties.color;

      if (color == undefined) {
        if (this.parent) {
          color = this.parent.color;
        }
      }

      if (color == undefined) {
        if (this.component) {
          color = this.component.colors.getIndex(this.component.colors.step * this.index);
        }
      }

      return color;
    },

    /**
     * Item's color.
     *
     * If not set, will use parent's color, or, if that is not set either,
     * automatically assigned color from chart's color set. (`chart.colors`)
     *
     * @param value  : Color | LinearGradient | RadialGradient | Pattern
     */
    set: function (value) {
      this.setProperty("color", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "linkWith", {
    /**
     * @return Link list
     */
    get: function () {
      return this.properties.linkWith;
    },

    /**
     * An array of id's of other nodes outside of the child/parent tree to link
     * with.
     *
     * @param  value  Link list
     */
    set: function (value) {
      this.setProperty("linkWith", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "hiddenInLegend", {
    /**
     * @return Hidden in legend?
     */
    get: function () {
      return this.properties.hiddenInLegend;
    },

    /**
     * Should dataItem (node) be hidden in legend?
     *
     * @param value Visible in legend?
     */
    set: function (value) {
      this.setProperty("hiddenInLegend", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "collapsed", {
    /**
     * @return Collapsed?
     */
    get: function () {
      return this.properties.collapsed;
    },

    /**
     * Indicates whether node should start off as collapsed.
     *
     * This can be used to specify whether node should start off as collapsed
     * via data.
     *
     * To toggle actual node, use its `isActive` property instead.
     *
     * @param  value  Collapsed?
     */
    set: function (value) {
      this.setProperty("collapsed", value);
      this.node.isActive = !value;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "fixed", {
    /**
     * @return Fixed?
     */
    get: function () {
      return this.properties.fixed;
    },

    /**
     * Is this node fixed (immovable)?
     *
     * @since 4.6.2
     * @param  value  Fixed?
     */
    set: function (value) {
      this.setProperty("fixed", value);

      if (this.component) {
        this.component.handleFixed(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "children", {
    /**
     * @return Item's children
     */
    get: function () {
      return this.properties.children;
    },

    /**
     * A list of item's sub-children.
     *
     * @param children  Item's children
     */
    set: function (children) {
      this.setProperty("children", children);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Creates a marker used in the legend for this slice.
   *
   * @ignore Exclude from docs
   * @param marker  Marker container
   */

  ForceDirectedSeriesDataItem.prototype.createLegendMarker = function (marker) {
    this.component.createLegendMarker(marker, this);

    if (!this.node.isActive) {
      this.hide();
    }
  };

  Object.defineProperty(ForceDirectedSeriesDataItem.prototype, "legendDataItem", {
    /**
     * @return Legend data item
     */
    get: function () {
      return this._legendDataItem;
    },

    /**
     * A legend's data item, that corresponds to this data item.
     *
     * @param value  Legend data item
     */
    set: function (value) {
      this._legendDataItem = value;

      if (value.label) {
        value.label.dataItem = this;
      }

      if (value.valueLabel) {
        value.valueLabel.dataItem = this;
      }
    },
    enumerable: true,
    configurable: true
  });
  return ForceDirectedSeriesDataItem;
}(_charts_series_Series__WEBPACK_IMPORTED_MODULE_0__.SeriesDataItem);


/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */

/**
 * Defines [[Series]] for a [[ForceDirectedTree]] chart.
 *
 * @see {@link IForceDirectedSeriesEvents} for a list of available Events
 * @see {@link IForceDirectedSeriesAdapters} for a list of available Adapters
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/ForceDirectedTree/} For more information
 * @todo Example
 * @since 4.3.8
 * @important
 */

var ForceDirectedSeries =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__extends)(ForceDirectedSeries, _super);
  /**
   * Constructor
   */


  function ForceDirectedSeries() {
    var _this = _super.call(this) || this;

    _this._tick = 0;
    _this.className = "ForceDirectedSeries";
    _this.d3forceSimulation = d3_force__WEBPACK_IMPORTED_MODULE_15__["default"]();
    _this.maxRadius = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(8);
    _this.minRadius = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(1);
    _this.width = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(100);
    _this.height = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(100);
    _this.colors = new _core_utils_ColorSet__WEBPACK_IMPORTED_MODULE_6__.ColorSet();
    _this.colors.step = 2;
    _this.width = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(100);
    _this.height = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.percent)(100);
    _this.manyBodyStrength = -15;
    _this.centerStrength = 0.8;
    _this.showOnTick = 10;
    _this.baseValue = 0;

    _this.setPropertyValue("dragFixedNodes", false);

    _this.setPropertyValue("velocityDecay", 0.4);

    _this.events.on("maxsizechanged", function () {
      _this.updateRadiuses(_this.dataItems);

      _this.updateLinksAndNodes();

      _this.dataItems.each(function (dataItem) {
        _this.handleFixed(dataItem);
      });

      var d3forceSimulation = _this.d3forceSimulation;
      var w = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(_core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(50, _this.innerWidth), _this.innerWidth);
      var h = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(_core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(50, _this.innerHeight), _this.innerHeight);

      if (d3forceSimulation) {
        d3forceSimulation.force("x", d3_force__WEBPACK_IMPORTED_MODULE_16__["default"]().x(w / 2).strength(_this.centerStrength * 100 / w));
        d3forceSimulation.force("y", d3_force__WEBPACK_IMPORTED_MODULE_17__["default"]().y(h / 2).strength(_this.centerStrength * 100 / h));

        if (d3forceSimulation.alpha() < 0.4) {
          d3forceSimulation.alpha(0.4);
          d3forceSimulation.restart();
        }
      }
    });

    _this.applyTheme();

    return _this;
  }
  /**
   * Returns maximum value from all supplied data items.
   *
   * @ignore
   * @param   dataItems  List of data items
   * @param   max        Default max
   * @return             Max
   */


  ForceDirectedSeries.prototype.getMaxValue = function (dataItems, max) {
    var _this = this;

    dataItems.each(function (dataItem) {
      if (dataItem.value > max) {
        max = dataItem.value;
      }

      if (dataItem.children) {
        var cmax = _this.getMaxValue(dataItem.children, max);

        if (cmax > max) {
          max = cmax;
        }
      }
    });
    return max;
  };
  /**
   * Returns maximum value from all supplied data items.
   *
   * @ignore
   * @param   dataItems  List of data items
   * @param   max        Default max
   * @return             Max
   */


  ForceDirectedSeries.prototype.getMinValue = function (dataItems, min) {
    var _this = this;

    dataItems.each(function (dataItem) {
      if (dataItem.value < min) {
        min = dataItem.value;
      }

      if (dataItem.children) {
        var cmin = _this.getMaxValue(dataItem.children, min);

        if (cmin < min) {
          min = cmin;
        }
      }
    });
    return min;
  };
  /**
   * Validates (processes) data items.
   *
   * @ignore Exclude from docs
   */


  ForceDirectedSeries.prototype.validateDataItems = function () {
    var _this = this;

    if (this.chart.__disabled) {
      _super.prototype.validateDataItems.call(this);

      return;
    }

    this._dataDisposers.push(new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.ListDisposer(this.links));

    this._maxValue = this.getMaxValue(this.dataItems, 0);
    this._minValue = this.getMinValue(this.dataItems, this._maxValue);
    this.forceLinks = [];
    this.colors.reset();
    var index = 0;
    var radius = Math.min(this.innerHeight / 3, this.innerWidth / 3);

    if (this.dataItems.length <= 1) {
      radius = 0;
    }

    this.dataItems.each(function (dataItem) {
      var angle = index / _this.dataItems.length * 360;
      var node = dataItem.node;
      var xField = node.propertyFields.x;
      var yField = node.propertyFields.y;

      if (xField && _core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.hasValue(dataItem.dataContext[xField])) {
        node.x = dataItem.dataContext[xField];
      } else {
        node.x = _this.innerWidth / 2 + radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.cos(angle);
      }

      if (yField && _core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.hasValue(dataItem.dataContext[yField])) {
        node.y = dataItem.dataContext[yField];
      } else {
        node.y = _this.innerHeight / 2 + radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.sin(angle);
      }

      dataItem.node.fill = dataItem.color;
      dataItem.node.stroke = dataItem.color;
      index++;

      _this.initNode(dataItem);
    });

    if (this.dataFields.linkWith) {
      this.dataItems.each(function (dataItem) {
        _this.processLinkWith(dataItem);
      });
    }

    var d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.on("tick", function () {
      _this.updateLinksAndNodes();
    }); // helps to avoid initial scatter

    for (var i = 0; i < 10; i++) {//d3forceSimulation.tick();
    }

    d3forceSimulation.alphaDecay(1 - Math.pow(0.001, 1 / 600));
    this.chart.feedLegend();

    _super.prototype.validateDataItems.call(this);
  };
  /**
   * @ignore
   */


  ForceDirectedSeries.prototype.handleFixed = function (dataItem) {
    var _this = this;

    var node = dataItem.node;
    var xField = node.propertyFields.x;
    var yField = node.propertyFields.y;

    if (xField && _core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.hasValue(dataItem.dataContext[xField])) {
      node.x = dataItem.dataContext[xField];
    }

    if (yField && _core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.hasValue(dataItem.dataContext[yField])) {
      node.y = dataItem.dataContext[yField];
    }

    if (dataItem.fixed) {
      if (node.x instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.Percent) {
        node.fx = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.relativeToValue(node.x, this.innerWidth);
      } else {
        node.fx = node.x;
      }

      if (node.y instanceof _core_utils_Percent__WEBPACK_IMPORTED_MODULE_11__.Percent) {
        node.fy = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.relativeToValue(node.y, this.innerHeight);
      } else {
        node.fy = node.y;
      }

      node.draggable = this.dragFixedNodes;
      node.validate(); // for links to redraw
    } else {
      node.fx = undefined;
      node.fy = undefined;
      node.draggable = true;
    }

    if (dataItem && dataItem.children) {
      dataItem.children.each(function (di) {
        _this.handleFixed(di);
      });
    }
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedSeries.prototype.updateNodeList = function () {
    var d3forceSimulation = this.d3forceSimulation;
    d3forceSimulation.nodes(this.nodes.values);
    this._linkForce = d3_force__WEBPACK_IMPORTED_MODULE_18__["default"](this.forceLinks);
    d3forceSimulation.force("link", this._linkForce);
    this._collisionForce = d3_force__WEBPACK_IMPORTED_MODULE_19__["default"]();
    d3forceSimulation.force("collision", this._collisionForce);
    var w = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(50, this.innerWidth);
    var h = _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.max(50, this.innerHeight);
    d3forceSimulation.force("x", d3_force__WEBPACK_IMPORTED_MODULE_16__["default"]().x(w / 2).strength(this.centerStrength * 100 / w));
    d3forceSimulation.force("y", d3_force__WEBPACK_IMPORTED_MODULE_17__["default"]().y(h / 2).strength(this.centerStrength * 100 / h));
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedSeries.prototype.updateLinksAndNodes = function () {
    var _this = this;

    if (this._tick < this.showOnTick) {
      this._tick++;
      this.opacity = 0;
    } else if (this._tick == this.showOnTick) {
      this.opacity = 1;
      this._tick++;
    }

    if (this._linkForce) {
      this._linkForce.distance(function (linkDatum) {
        return _this.getDistance(linkDatum);
      });

      this._linkForce.strength(function (linkDatum) {
        return _this.getStrength(linkDatum);
      });
    }

    if (this._collisionForce) {
      this._collisionForce.radius(function (node) {
        if (node instanceof _ForceDirectedNode__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedNode) {
          var radius = node.circle.pixelRadius;

          if (!node.outerCircle.__disabled && !node.outerCircle.disabled && node.outerCircle.visible) {
            radius = (radius + 3) * node.outerCircle.scale;
          }

          return radius + node.paddingRadius;
        }

        return 1;
      });
    }

    this.d3forceSimulation.force("manybody", d3_force__WEBPACK_IMPORTED_MODULE_20__["default"]().strength(function (node) {
      if (node instanceof _ForceDirectedNode__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedNode) {
        return node.circle.pixelRadius * _this.manyBodyStrength;
      }

      return _this.manyBodyStrength;
    }));
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedSeries.prototype.getDistance = function (linkDatum) {
    var source = linkDatum.source;
    var target = linkDatum.target;
    var distance = 0;

    if (target.dataItem && source.dataItem) {
      var link = source.linksWith.getKey(target.uid);

      if (link) {
        distance = link.distance;
      }

      if (!source.isActive) {
        distance = 1;
      }

      if (target.isHidden) {
        return 0;
      }

      return distance * (source.circle.pixelRadius + target.circle.pixelRadius);
    }

    return distance;
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedSeries.prototype.getStrength = function (linkDatum) {
    var source = linkDatum.source;
    var target = linkDatum.target;
    var strength = 0;
    var link = source.linksWith.getKey(target.uid);

    if (link) {
      strength = link.strength;
    }

    if (target.isHidden) {
      return 0;
    }

    return strength;
  };
  /**
   * Handler for drag end event.
   *
   * @ignore
   */


  ForceDirectedSeries.prototype.nodeDragEnded = function () {
    this.d3forceSimulation.alphaTarget(0);
  };
  /**
   * Handler for drag start event.
   *
   * @ignore
   */


  ForceDirectedSeries.prototype.nodeDragStarted = function () {
    this.d3forceSimulation.alpha(0.1);
    this.d3forceSimulation.restart();
  };
  /**
   * Resets positions of whole tree.
   *
   * @ignore
   */


  ForceDirectedSeries.prototype.restartSimulation = function () {
    if (this.d3forceSimulation.alpha() <= 0.3) {
      this.d3forceSimulation.alpha(0.3);
      this.d3forceSimulation.restart();
    }
  };
  /**
   * @ignore
   */


  ForceDirectedSeries.prototype.updateRadiuses = function (dataItems) {
    var _this = this;

    dataItems.each(function (dataItem) {
      _this.updateRadius(dataItem);

      if (dataItem.childrenInited) {
        _this.updateRadiuses(dataItem.children);
      }
    });
  };
  /**
   * @ignore
   */


  ForceDirectedSeries.prototype.updateRadius = function (dataItem) {
    var node = dataItem.node;
    var minSide = (this.innerWidth + this.innerHeight) / 2;
    var minRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.relativeToValue(this.minRadius, minSide);
    var maxRadius = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_9__.relativeToValue(this.maxRadius, minSide);
    var baseValue = this.baseValue;

    if (baseValue == null) {
      baseValue = this._minValue;
    }

    var radius = minRadius + (dataItem.value - baseValue) / (this._maxValue - baseValue) * (maxRadius - minRadius);

    if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.isNumber(radius)) {
      radius = minRadius;
    } //if(!node.circle.isHidden){


    node.circle.radius = radius; //}

    node.outerCircle.radius = radius + 3;
    node.circle.states.getKey("active").properties.radius = radius;
    node.circle.defaultState.properties.radius = radius;
  };
  /**
   * Initializes node.
   *
   * @ignore
   */


  ForceDirectedSeries.prototype.initNode = function (dataItem) {
    var _this = this;

    var node = dataItem.node;
    node.parent = this;
    this.updateRadius(dataItem); //let nodeIndex = this.nodes.indexOf(dataItem.node);

    if (!dataItem.children || dataItem.children.length == 0) {
      node.outerCircle.disabled = true;
      node.circle.interactionsEnabled = true;
      node.cursorOverStyle = _core_interaction_Mouse__WEBPACK_IMPORTED_MODULE_12__.MouseCursorStyle["default"];
    } else {
      node.cursorOverStyle = _core_interaction_Mouse__WEBPACK_IMPORTED_MODULE_12__.MouseCursorStyle.pointer;
    }

    if (this.dataItemsInvalid && (dataItem.level >= this.maxLevels - 1 || dataItem.collapsed)) {
      node.isActive = false;
      this.updateNodeList();
      return;
    }

    if (!node.isActive) {
      node.hide(0);
    }

    this.handleFixed(dataItem);

    if (dataItem.children) {
      var index_1 = 0;
      dataItem.childrenInited = true;

      if (this.dataItems.length == 1 && dataItem.level == 0) {
        this.colors.next();
      }

      dataItem.children.each(function (child) {
        /*
        let link = this.links.create();
        link.parent = this;
        link.zIndex = -1;
        dataItem.childLinks.push(link);
        link.source = dataItem.node;
        let childIndex = this.nodes.indexOf(child.node);
        link.target = child.node;
        child.parentLink = link;
         this._forceLinks.push({ source: nodeIndex, target: childIndex });
        */
        var link = node.linkWith(child.node);
        child.parentLink = link;
        var radius = 2 * node.circle.pixelRadius + child.node.circle.pixelRadius;
        var angle = index_1 / dataItem.children.length * 360;
        child.node.x = node.pixelX + radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.cos(angle);
        child.node.y = node.pixelY + radius * _core_utils_Math__WEBPACK_IMPORTED_MODULE_7__.sin(angle);
        child.node.circle.radius = 0;
        var color;
        var diColor = child.properties.color;

        if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_8__.hasValue(diColor)) {
          color = diColor;
        } else {
          if (_this.dataItems.length == 1 && dataItem.level == 0) {
            color = _this.colors.next();
          } else {
            color = dataItem.color;
          }
        }

        child.color = color;
        child.node.fill = color;
        child.node.stroke = color;
        child.parentLink.stroke = color;
        child.node.fill = child.node.fill;
        child.node.stroke = child.node.stroke;

        _this.initNode(child);

        index_1++;
      });
    }

    node.isActive = true;
    node.show(0);
    this.updateNodeList();
  };
  /**
   * @ignore
   * @todo description
   */


  ForceDirectedSeries.prototype.processLinkWith = function (dataItem) {
    var _this = this;

    if (dataItem.linkWith) {
      _core_utils_Array__WEBPACK_IMPORTED_MODULE_10__.each(dataItem.linkWith, function (id, index) {
        var dataItemToConnect = _this.getDataItemById(_this.dataItems, id);

        if (dataItemToConnect) {
          dataItem.node.linkWith(dataItemToConnect.node, _this.linkWithStrength);
        }
      });
    }

    if (dataItem.children) {
      dataItem.children.each(function (child) {
        _this.processLinkWith(child);
      });
    }
  };
  /**
   * Returns a [[ForceDirectedSeriesDataItem]] related to node by specific id.
   *
   * @param   dataItems  List of data items to search in
   * @param   id         Id to search for
   * @return             Data item
   */


  ForceDirectedSeries.prototype.getDataItemById = function (dataItems, id) {
    for (var i = dataItems.length - 1; i >= 0; i--) {
      var dataItem = dataItems.getIndex(i);

      if (dataItem.id == id) {
        return dataItem;
      }

      if (dataItem.children) {
        var di = this.getDataItemById(dataItem.children, id);

        if (di) {
          return di;
        }
      }
    }
  };
  /**
   * Returns a new/empty DataItem of the type appropriate for this object.
   *
   * @see {@link DataItem}
   * @return Data Item
   */


  ForceDirectedSeries.prototype.createDataItem = function () {
    return new ForceDirectedSeriesDataItem();
  };

  Object.defineProperty(ForceDirectedSeries.prototype, "nodes", {
    /**
     * A list of nodes in series.
     *
     * @return  Node list
     */
    get: function () {
      if (!this._nodes) {
        var node = this.createNode();
        node.applyOnClones = true;

        this._disposers.push(node);

        this._nodes = new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(node);

        this._disposers.push(new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.ListDisposer(this._nodes));
      }

      return this._nodes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "links", {
    /**
     * A list of links between nodes.
     *
     * @return  Link list
     */
    get: function () {
      if (!this._links) {
        var link = this.createLink();
        link.applyOnClones = true;

        this._disposers.push(link);

        this._links = new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(link);

        this._disposers.push(new _core_utils_List__WEBPACK_IMPORTED_MODULE_2__.ListDisposer(this._links));
      }

      return this._links;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Creates a new node.
   */

  ForceDirectedSeries.prototype.createNode = function () {
    return new _ForceDirectedNode__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedNode();
  };
  /**
   * Creates a new link.
   */


  ForceDirectedSeries.prototype.createLink = function () {
    return new _ForceDirectedLink__WEBPACK_IMPORTED_MODULE_5__.ForceDirectedLink();
  };

  Object.defineProperty(ForceDirectedSeries.prototype, "minRadius", {
    /**
     * @return Minimum radius (px or percent)
     */
    get: function () {
      return this.getPropertyValue("minRadius");
    },

    /**
     * Smallest possible radius in pixels of the node circle.
     *
     * If set in percent, it radius will be calculated from average width and
     * height of series.
     *
     * @default Percent(1)
     * @param  value  Minimum radius (px or percent)
     */
    set: function (value) {
      this.setPropertyValue("minRadius", value, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "baseValue", {
    /**
     * @return Minimum value
     */
    get: function () {
      return this.getPropertyValue("baseValue");
    },

    /**
     * Base value. If you set it to null, real minimum value of your data will be used.
     *
     * @default 0
     * @param  value  Minimum value
     */
    set: function (value) {
      this.setPropertyValue("baseValue", value, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "maxRadius", {
    /**
     * @return Maximum radius (px or Percent)
     */
    get: function () {
      return this.getPropertyValue("maxRadius");
    },

    /**
     * Biggest possible radius in pixels of the node circle.
     *
     * If set in percent, it radius will be calculated from average width and
     * height of series.
     *
     * @default Percent(8)
     * @param  value  Maximum radius (px or Percent)
     */
    set: function (value) {
      this.setPropertyValue("maxRadius", value, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "colors", {
    /**
     * @return Color set
     */
    get: function () {
      return this.getPropertyValue("colors");
    },

    /**
     * A color set to be used for nodes.
     *
     * iIt works like this:
     *
     * The first level with more than one node, assigns different colors to all
     * nodes in this list. Their child nodes inherit the color.
     *
     * For example, if the top level has one node with three children, the top
     * node will get first color, the first child will get second color, etc.
     *
     * If there are two top nodes, the first top node gets first color, the
     * second top node gets the second color. Their subsequent children inherit
     * colors.
     *
     * @param value  Color set
     */
    set: function (value) {
      this.setPropertyValue("colors", value, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "maxLevels", {
    /**
     * @return Number of levels
     */
    get: function () {
      return this.getPropertyValue("maxLevels");
    },

    /**
     * Number of levels to be displayed initially.
     *
     * @param  value  Number of levels
     */
    set: function (value) {
      this.setPropertyValue("maxLevels", value, true);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "manyBodyStrength", {
    /**
     * @return  Body push/attrack strength
     */
    get: function () {
      return this.getPropertyValue("manyBodyStrength");
    },

    /**
     * Relative strength each node pushes (or attracts) other nodes (it is
     * multiplied by `node.circle.radius` for big nodes to push stronger).
     *
     * Positive value will make nodes attract each other, while negative will
     * push away each other. The bigger the negative number is, the more
     * scattered nodes will be.
     *
     * Available value range: `-XX` to `XX`.
     *
     * @default -15
     * @param  value  Body push/attrack strength
     */
    set: function (value) {
      if (this.setPropertyValue("manyBodyStrength", value)) {
        this.restartSimulation();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "centerStrength", {
    /**
     * @return  Stregth of attraction to center
     */
    get: function () {
      return this.getPropertyValue("centerStrength");
    },

    /**
     * Relative strength each child node is pushes (or attracted) to the center
     * of the chart.
     *
     * Positive value will make nodes to be attracted to center, while negative
     * will push them away.
     *
     * Available value range: `-50` to `50`.
     *
     * @default 0.8
     * @param  value  Stregth of attraction to center
     */
    set: function (value) {
      if (this.setPropertyValue("centerStrength", value)) {
        this.restartSimulation();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "linkWithStrength", {
    /**
     * @return Strength
     */
    get: function () {
      return this.getPropertyValue("linkWithStrength");
    },

    /**
     * Relative attraction strength between the nodes connected with `linkWith`.
     *
     * @since 4.4.8
     * @param  value  Strength
     * @default undefined
     */
    set: function (value) {
      if (this.setPropertyValue("linkWithStrength", value)) {
        this.restartSimulation();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "velocityDecay", {
    /**
     * @return Velocity decay
     */
    get: function () {
      return this.getPropertyValue("velocityDecay");
    },

    /**
     * The bigger the number the more slowly the nodes will move. Think of it as
     * friction.
     *
     * @since 4.9.2
     * @param  value  Velocity decay
     * @default 0.4
     */
    set: function (value) {
      if (this.setPropertyValue("velocityDecay", value)) {
        this.d3forceSimulation.velocityDecay(value);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedSeries.prototype, "dragFixedNodes", {
    /**
     * @return Allow drag fixed nodes?
     */
    get: function () {
      return this.getPropertyValue("dragFixedNodes");
    },

    /**
     * Specifies if user can drag fixed nodes.
     *
     * @since 4.9.0
     * @default false
     * @param  value  Allow drag fixed nodes?
     */
    set: function (value) {
      var _this = this;

      if (this.setPropertyValue("dragFixedNodes", value)) {
        this.dataItems.each(function (dataItem) {
          _this.handleFixed(dataItem);
        });
      }
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Binds related legend data item's visual settings to this series' visual
   * settings.
   *
   * @ignore Exclude from docs
   * @param marker    Container
   * @param dataItem  Data item
   */

  ForceDirectedSeries.prototype.createLegendMarker = function (marker, dataItem) {
    marker.children.each(function (child) {
      var node = dataItem.node;

      if (child instanceof _core_elements_RoundedRectangle__WEBPACK_IMPORTED_MODULE_13__.RoundedRectangle) {
        child.cornerRadius(40, 40, 40, 40);
      }

      child.defaultState.properties.fill = node.fill;
      child.defaultState.properties.stroke = node.stroke;
      child.defaultState.properties.fillOpacity = node.fillOpacity;
      child.defaultState.properties.strokeOpacity = node.strokeOpacity;
      child.fill = node.fill;
      child.stroke = node.stroke;
      child.fillOpacity = node.fillOpacity;
      child.strokeOpacity = node.strokeOpacity;

      if (child.fill == undefined) {
        child.__disabled = true;
      }

      var legendDataItem = marker.dataItem;
      legendDataItem.color = node.fill;
      legendDataItem.colorOrig = node.fill;
      node.events.on("propertychanged", function (ev) {
        if (ev.property == "fill") {
          child.__disabled = false;

          if (!child.isActive) {
            child.fill = node.fill;
          }

          child.defaultState.properties.fill = node.fill;
          legendDataItem.color = node.fill;
          legendDataItem.colorOrig = node.fill;
        }

        if (ev.property == "stroke") {
          if (!child.isActive) {
            child.stroke = node.stroke;
          }

          child.defaultState.properties.stroke = node.stroke;
        }
      }, undefined, false);
    });
  };

  Object.defineProperty(ForceDirectedSeries.prototype, "showOnTick", {
    /**
     * @return Number of ticks to delay rendering
     */
    get: function () {
      return this.getPropertyValue("showOnTick");
    },

    /**
     * Renders series hidden until Xth tick.
     *
     * @default 10
     * @since 4.10.17
     * @param value Number of ticks to delay rendering
     */
    set: function (value) {
      this.setPropertyValue("showOnTick", value);
    },
    enumerable: true,
    configurable: true
  });
  return ForceDirectedSeries;
}(_charts_series_Series__WEBPACK_IMPORTED_MODULE_0__.Series);


/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */

_core_Registry__WEBPACK_IMPORTED_MODULE_1__.registry.registeredClasses.ForceDirectedSeries = ForceDirectedSeries;
_core_Registry__WEBPACK_IMPORTED_MODULE_1__.registry.registeredClasses.ForceDirectedSeriesDataItem = ForceDirectedSeriesDataItem;

/***/ }),

/***/ 52158:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/plugins/forceDirected/ForceDirectedTree.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedTree": () => (/* binding */ ForceDirectedTree),
/* harmony export */   "ForceDirectedTreeDataItem": () => (/* binding */ ForceDirectedTreeDataItem)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 44585);
/* harmony import */ var _charts_types_SerialChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../charts/types/SerialChart */ 86033);
/* harmony import */ var _ForceDirectedSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForceDirectedSeries */ 24954);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Registry */ 95277);
/* harmony import */ var _core_utils_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/Type */ 68701);
/* harmony import */ var _core_utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/Utils */ 74220);
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/Color */ 13519);
/* harmony import */ var _core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/Percent */ 70067);
/* harmony import */ var _core_utils_Ease__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/Ease */ 9589);
/* harmony import */ var _core_utils_Math__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/Math */ 18053);
/* harmony import */ var _core_elements_ZoomOutButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/elements/ZoomOutButton */ 74646);
/* harmony import */ var _core_interaction_Interaction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/interaction/Interaction */ 83244);
/**
 * ForceDirectedTree chart module.
 */

/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */












/**
 * ============================================================================
 * DATA ITEM
 * ============================================================================
 * @hidden
 */

/**
 * Defines a [[DataItem]] for [[ForceDirectedTree]].
 *
 * @since 4.3.8
 * @see {@link DataItem}
 */

var ForceDirectedTreeDataItem =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__extends)(ForceDirectedTreeDataItem, _super);

  function ForceDirectedTreeDataItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return ForceDirectedTreeDataItem;
}(_charts_types_SerialChart__WEBPACK_IMPORTED_MODULE_0__.SerialChartDataItem);


/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */

/**
 * A main class for [[ForceDirectedTree]] chart type.
 *
 * @see {@link IForceDirectedTreeEvents} for a list of available Events
 * @see {@link IForceDirectedTreeAdapters} for a list of available Adapters
 * @see {@link https://www.amcharts.com/docs/v4/chart-types/force-directed/} For more information
 * @since 4.3.8
 * @important
 */

var ForceDirectedTree =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__extends)(ForceDirectedTree, _super);
  /**
   * Constructor
   */


  function ForceDirectedTree() {
    var _this = // Init
    _super.call(this) || this;
    /**
     * Default duration of zoom animations (ms).
     */


    _this.zoomDuration = 1000;
    /**
     * Default zooming animation easing function.
     */

    _this.zoomEasing = _core_utils_Ease__WEBPACK_IMPORTED_MODULE_7__.cubicOut;
    /**
     * Smallest available zoom level. The chart will not allow to zoom out past
     * this setting.
     *
     * NOTE: Should be power of 2.
     *
     * @default 1
     */

    _this.minZoomLevel = 1;
    /**
     * Biggest available zoom level. The chart will not allow to zoom in past
     * this setting.
     *
     * NOTE: Should be power of 2.
     *
     * @default 32
     */

    _this.maxZoomLevel = 16;
    _this.className = "ForceDirectedTree";
    _this.seriesContainer.isMeasured = true;
    _this.seriesContainer.layout = "absolute";
    _this.mouseWheelBehavior = "none";
    _this.zoomStep = 2;
    _this.seriesContainer.background.fillOpacity = 0;
    _this.seriesContainer.background.fill = (0,_core_utils_Color__WEBPACK_IMPORTED_MODULE_5__.color)("#ffffff");

    var zoomOutButton = _this.createChild(_core_elements_ZoomOutButton__WEBPACK_IMPORTED_MODULE_9__.ZoomOutButton);

    zoomOutButton.shouldClone = false;
    zoomOutButton.x = (0,_core_utils_Percent__WEBPACK_IMPORTED_MODULE_6__.percent)(100);
    zoomOutButton.horizontalCenter = "right";
    zoomOutButton.valign = "top";
    zoomOutButton.zIndex = Number.MAX_SAFE_INTEGER;
    zoomOutButton.marginTop = 5;
    zoomOutButton.marginRight = 5;
    zoomOutButton.isMeasured = false;
    zoomOutButton.adapter.add("dx", function (dx, target) {
      return -zoomOutButton.marginRight;
    });
    zoomOutButton.hide(0);
    _this.zoomOutButton = zoomOutButton;

    _this.addDisposer(_this.seriesContainer.events.on("sizechanged", function () {
      if (_this.seriesContainer.scale != 1) {
        _this.zoomOutButton.show();
      } else {
        _this.zoomOutButton.hide();
      }
    }));

    var interaction = (0,_core_interaction_Interaction__WEBPACK_IMPORTED_MODULE_10__.getInteraction)();

    _this._disposers.push(interaction.body.events.on("down", function (event) {
      if (_this.zoomable) {
        var svgPoint = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_4__.documentPointToSvg(event.pointer.point, _this.htmlContainer);

        if (svgPoint.x > 0 && svgPoint.y > 0 && svgPoint.x < _this.svgContainer.width && svgPoint.y < _this.svgContainer.height) {
          _this.seriesContainer.dragStart(event.pointer);
        }
      }
    }, _this));

    _this._disposers.push(interaction.body.events.on("up", function (event) {
      if (_this.zoomable) {
        _this.seriesContainer.dragStop(event.pointer, true);
      }
    }, _this)); // Apply theme


    _this.applyTheme();

    return _this;
  }
  /**
   * Creates and returns a new series of the suitable type.
   *
   * @return New series
   */


  ForceDirectedTree.prototype.createSeries = function () {
    return new _ForceDirectedSeries__WEBPACK_IMPORTED_MODULE_1__.ForceDirectedSeries();
  };
  /**
   * Returns a new/empty DataItem of the type appropriate for this object.
   *
   * @see {@link DataItem}
   * @return Data Item
   */


  ForceDirectedTree.prototype.createDataItem = function () {
    return new ForceDirectedTreeDataItem();
  };
  /**
   * Setups the legend to use the chart's data.
   *
   * @ignore
   */


  ForceDirectedTree.prototype.feedLegend = function () {
    var legend = this.legend;

    if (legend) {
      var legendData_1 = [];
      this.series.each(function (series) {
        if (!series.hiddenInLegend) {
          var dataItems = series.dataItems;

          if (dataItems.length == 1) {
            var children = series.dataItems.getIndex(0).children;

            if (children && children.length > 0) {
              dataItems = children;
            }
          }

          dataItems.each(function (dataItem) {
            if (!dataItem.hiddenInLegend) {
              legendData_1.push(dataItem);
              var legendSettings = series.legendSettings;

              if (legendSettings) {
                if (legendSettings.labelText) {
                  legend.labels.template.text = legendSettings.labelText;
                }

                if (legendSettings.itemLabelText) {
                  legend.labels.template.text = legendSettings.itemLabelText;
                }

                if (legendSettings.valueText) {
                  legend.valueLabels.template.text = legendSettings.valueText;
                }

                if (legendSettings.itemValueText) {
                  legend.valueLabels.template.text = legendSettings.itemValueText;
                }
              }
            }
          });
        }
      });
      legend.data = legendData_1;
      legend.dataFields.name = "name";
    }
  };
  /**
   * Sets defaults that instantiate some objects that rely on parent, so they
   * cannot be set in constructor.
   */


  ForceDirectedTree.prototype.applyInternalDefaults = function () {
    _super.prototype.applyInternalDefaults.call(this); // Add a default screen reader title for accessibility
    // This will be overridden in screen reader if there are any `titles` set


    if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_3__.hasValue(this.readerTitle)) {
      this.readerTitle = this.language.translate("Force directed tree");
    }
  };
  /**
   * Since this chart uses hierarchical data, we need to remove childrent
   * dataField from export of non-hierarchical formats such as CSV and XSLX.
   *
   * @return Export
   */


  ForceDirectedTree.prototype.getExporting = function () {
    var _this = this;

    var exporting = _super.prototype.getExporting.call(this);

    exporting.adapter.add("formatDataFields", function (info) {
      if (info.format == "csv" || info.format == "xlsx") {
        _this.series.each(function (series) {
          if (_core_utils_Type__WEBPACK_IMPORTED_MODULE_3__.hasValue(series.dataFields.children)) {
            delete info.dataFields[series.dataFields.children];
          }
        });
      }

      return info;
    });
    return exporting;
  };
  /**
   * Handles mouse wheel event, e.g. user rotates mouse wheel while over the
   * map: zooms in or out depending on the direction of the wheel turn.
   *
   * @param event  Original event
   */


  ForceDirectedTree.prototype.handleWheel = function (event) {
    var point = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_4__.documentPointToSprite(event.point, this.seriesContainer);
    var zoomLevel = this.seriesContainer.scale;

    if (event.shift.y < 0) {
      zoomLevel *= this.zoomStep;
    } else {
      zoomLevel /= this.zoomStep;
    }

    zoomLevel = _core_utils_Math__WEBPACK_IMPORTED_MODULE_8__.fitToRange(zoomLevel, this.minZoomLevel, this.maxZoomLevel);
    this.zoomToPoint(point, zoomLevel);
  };
  /**
   * Zooms the chart to particular point.
   *
   * @from 4.10.0
   * @param  point      A point to zoom to
   * @param  zoomLevel  Zoom level
   * @param  center     Should the chart center on the target point?
   */


  ForceDirectedTree.prototype.zoomToPoint = function (point, zoomLevel, center) {
    var container = this.seriesContainer;
    var svgPoint;

    if (center) {
      svgPoint = {
        x: this.maxWidth / 2,
        y: this.maxHeight / 2
      };
    } else {
      svgPoint = _core_utils_Utils__WEBPACK_IMPORTED_MODULE_4__.spritePointToSvg(point, container);
    }

    var x = svgPoint.x - point.x * zoomLevel;
    var y = svgPoint.y - point.y * zoomLevel;
    container.animate([{
      property: "scale",
      to: zoomLevel
    }, {
      property: "x",
      to: x
    }, {
      property: "y",
      to: y
    }], this.zoomDuration, this.zoomEasing);
  };
  /**
   * Zooms the chart to particular data item (node).
   *
   * @from 4.10.0
   * @param  dataItem   A data item to zoom to
   * @param  zoomLevel  Zoom level
   * @param  center     Should the chart center on the target point?
   */


  ForceDirectedTree.prototype.zoomToDataItem = function (dataItem, zoomLevel, center) {
    var x = dataItem.node.pixelX;
    var y = dataItem.node.pixelY;

    if (!_core_utils_Type__WEBPACK_IMPORTED_MODULE_3__.isNumber(zoomLevel)) {
      zoomLevel = this.seriesContainer.scale * this.zoomStep;
    }

    this.zoomToPoint({
      x: x,
      y: y
    }, zoomLevel, center);
  };
  /**
   * Zooms out the chart to initial full view.
   *
   * @from 4.10.0
   */


  ForceDirectedTree.prototype.zoomOut = function () {
    var container = this.seriesContainer;
    this.zoomToPoint({
      x: container.pixelWidth / 2,
      y: container.pixelHeight / 2
    }, 1, true);
  };

  Object.defineProperty(ForceDirectedTree.prototype, "zoomable", {
    /**
     * @return Zoomable
     */
    get: function () {
      return this.getPropertyValue("zoomable");
    },

    /**
     * When user zooms in or out current zoom level is multiplied or divided
     * by value of this setting.
     *
     * @default false
     * @since 4.10.0
     * @see {@link https://www.amcharts.com/docs/v4/chart-types/force-directed/#Zooming} for more information about zooming ForceDirectedTree
     * @param value  Zoomable
     */
    set: function (value) {
      var _this = this;

      if (this.setPropertyValue("zoomable", value)) {
        if (value) {
          this.seriesContainer.resizable = true;
          this.seriesContainer.draggable = true;
          this.seriesContainer.dragWhileResize = true;
          this.mouseWheelBehavior = "zoom";
          this._backgroundZoomoutDisposer = this.seriesContainer.background.events.on("hit", function () {
            _this.zoomOut();
          }, this, false);

          this._disposers.push(this._backgroundZoomoutDisposer);

          this._disposers.push(this.seriesContainer.events.on("sizechanged", function () {
            _this.series.each(function (series) {
              series.nodes.each(function (node) {
                node.updateLabelSize();
              });
            });
          }));
        } else {
          this.seriesContainer.resizable = false;
          this.seriesContainer.draggable = false;
          this.seriesContainer.dragWhileResize = false;
          this.mouseWheelBehavior = "none";

          if (this._backgroundZoomoutDisposer) {
            this._backgroundZoomoutDisposer.dispose();
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedTree.prototype, "mouseWheelBehavior", {
    /**
     * @return Mouse wheel behavior
     */
    get: function () {
      return this.getPropertyValue("mouseWheelBehavior");
    },

    /**
     * Specifies what should chart do if when mouse wheel is rotated.
     *
     * @param Mouse wheel behavior
     * @since 4.10.0
     * @default none
     */
    set: function (value) {
      if (this.setPropertyValue("mouseWheelBehavior", value)) {
        if (value != "none") {
          this._mouseWheelDisposer = this.chartContainer.events.on("wheel", this.handleWheel, this, false);

          this._disposers.push(this._mouseWheelDisposer);
        } else {
          if (this._mouseWheelDisposer) {
            this._mouseWheelDisposer.dispose();
          }

          this.chartContainer.wheelable = false;
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedTree.prototype, "zoomStep", {
    /**
     * @return Zoom factor
     */
    get: function () {
      return this.getPropertyValue("zoomStep");
    },

    /**
     * When user zooms in or out current zoom level is multiplied or divided
     * by value of this setting.
     *
     * @since 4.10.0
     * @default 2
     * @param value  Zoom factor
     */
    set: function (value) {
      this.setPropertyValue("zoomStep", value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ForceDirectedTree.prototype, "zoomOutButton", {
    /**
     * @return Zoom out button
     */
    get: function () {
      return this._zoomOutButton;
    },

    /**
     * A [[Button]] element that is used for zooming out the chart.
     *
     * This button appears only when chart is zoomed in, and disappears
     * autoamatically when it is zoome dout.
     *
     * @param button  Zoom out button
     */
    set: function (button) {
      var _this = this;

      this._zoomOutButton = button;

      if (button) {
        button.events.on("hit", function () {
          _this.zoomOut();
        }, undefined, false);
      }
    },
    enumerable: true,
    configurable: true
  });
  return ForceDirectedTree;
}(_charts_types_SerialChart__WEBPACK_IMPORTED_MODULE_0__.SerialChart);


/**
 * Register class in system, so that it can be instantiated using its name from
 * anywhere.
 *
 * @ignore
 */

_core_Registry__WEBPACK_IMPORTED_MODULE_2__.registry.registeredClasses.ForceDirectedTree = ForceDirectedTree;
_core_Registry__WEBPACK_IMPORTED_MODULE_2__.registry.registeredClasses.ForceDirectedTreeDataItem = ForceDirectedTreeDataItem;

/***/ }),

/***/ 86986:
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/animated.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ 95277);


var theme = function (object) {
  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "SpriteState")) {
    object.transitionDuration = 400;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Component")) {
    object.rangeChangeDuration = 500;
    object.interpolationDuration = 500;
    object.sequencedInterpolation = false;

    if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "SankeyDiagram")) {
      object.sequencedInterpolation = true;
    }

    if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "FunnelSeries")) {
      object.sequencedInterpolation = true;
    }
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Chart")) {
    object.defaultState.transitionDuration = 2000;
    object.hiddenState.transitionDuration = 1000;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Tooltip")) {
    object.animationDuration = 400;
    object.defaultState.transitionDuration = 400;
    object.hiddenState.transitionDuration = 400;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Scrollbar")) {
    object.animationDuration = 500;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Series")) {
    object.defaultState.transitionDuration = 1000;
    object.hiddenState.transitionDuration = 700;
    object.hiddenState.properties.opacity = 1;
    object.showOnInit = true;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "MapSeries")) {
    object.hiddenState.properties.opacity = 0;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "PercentSeries")) {
    object.hiddenState.properties.opacity = 0;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "FunnelSlice")) {
    object.defaultState.transitionDuration = 800;
    object.hiddenState.transitionDuration = 1000;
    object.hiddenState.properties.opacity = 1;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Slice")) {
    object.defaultState.transitionDuration = 700;
    object.hiddenState.transitionDuration = 1000;
    object.hiddenState.properties.opacity = 1;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Preloader")) {
    object.hiddenState.transitionDuration = 2000;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Column")) {
    object.defaultState.transitionDuration = 700;
    object.hiddenState.transitionDuration = 1000;
    object.hiddenState.properties.opacity = 1;
  }

  if ((0,_core_Registry__WEBPACK_IMPORTED_MODULE_0__.is)(object, "Column3D")) {
    object.hiddenState.properties.opacity = 0;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 42540:
/*!*******************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/plugins/forceDirected.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForceDirectedLink": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedLink__WEBPACK_IMPORTED_MODULE_0__.ForceDirectedLink),
/* harmony export */   "ForceDirectedNode": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedNode__WEBPACK_IMPORTED_MODULE_2__.ForceDirectedNode),
/* harmony export */   "ForceDirectedSeries": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedSeries__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedSeries),
/* harmony export */   "ForceDirectedSeriesDataItem": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedSeries__WEBPACK_IMPORTED_MODULE_3__.ForceDirectedSeriesDataItem),
/* harmony export */   "ForceDirectedTree": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedTree__WEBPACK_IMPORTED_MODULE_1__.ForceDirectedTree),
/* harmony export */   "ForceDirectedTreeDataItem": () => (/* reexport safe */ _internal_plugins_forceDirected_ForceDirectedTree__WEBPACK_IMPORTED_MODULE_1__.ForceDirectedTreeDataItem)
/* harmony export */ });
/* harmony import */ var _internal_plugins_forceDirected_ForceDirectedLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/plugins/forceDirected/ForceDirectedLink */ 91218);
/* harmony import */ var _internal_plugins_forceDirected_ForceDirectedTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.internal/plugins/forceDirected/ForceDirectedTree */ 52158);
/* harmony import */ var _internal_plugins_forceDirected_ForceDirectedNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.internal/plugins/forceDirected/ForceDirectedNode */ 52320);
/* harmony import */ var _internal_plugins_forceDirected_ForceDirectedSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.internal/plugins/forceDirected/ForceDirectedSeries */ 24954);





/***/ }),

/***/ 19839:
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/animated.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _internal_themes_animated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/animated */ 86986);


/***/ }),

/***/ 69712:
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {
  value: () => {}
};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }

  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function (t) {
    var name = "",
        i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {
      type: t,
      name: name
    };
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function (typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length; // If no callback was specified, return the callback of the given type and name.

    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;

      return;
    } // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.


    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);

    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function () {
    var copy = {},
        _ = this._;

    for (var t in _) copy[t] = _[t].slice();

    return new Dispatch(copy);
  },
  call: function (type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function (type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);

    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }

  if (callback != null) type.push({
    name: name,
    value: callback
  });
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);

/***/ }),

/***/ 35349:
/*!**********************************************!*\
  !*** ./node_modules/d3-force/src/collide.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ 32658);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 75455);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jiggle.js */ 30680);




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(radius) {
  var nodes,
      radii,
      random,
      strength = 1,
      iterations = 1;
  if (typeof radius !== "function") radius = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(radius == null ? 1 : +radius);

  function force() {
    var i,
        n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, x, y).visitAfter(prepare);

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data,
          rj = quad.r,
          r = ri + rj;

      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;

          if (l < r * r) {
            if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += x * x;
            if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(random), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }

        return;
      }

      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];

    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    radii = new Array(n);

    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function (_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : radius;
  };

  return force;
}

/***/ }),

/***/ 75455:
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function () {
    return x;
  };
}

/***/ }),

/***/ 30680:
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/jiggle.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(random) {
  return (random() - 0.5) * 1e-6;
}

/***/ }),

/***/ 30418:
/*!******************************************!*\
  !*** ./node_modules/d3-force/src/lcg.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}

/***/ }),

/***/ 22306:
/*!*******************************************!*\
  !*** ./node_modules/d3-force/src/link.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 75455);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ 30680);



function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      random,
      iterations = 1;
  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        y = target.y + target.vy - source.y - source.vy || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.links = function (_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function (_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function (_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function (_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
}

/***/ }),

/***/ 9832:
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/manyBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ 32658);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 75455);
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jiggle.js */ 30680);
/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation.js */ 10370);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var nodes,
      node,
      random,
      alpha,
      strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i,
        n = nodes.length,
        tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.x, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.y).visitAfter(accumulate);

    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length,
        node;
    strengths = new Array(n);

    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0,
        q,
        c,
        weight = 0,
        x,
        y,
        i; // For internal nodes, accumulate forces from child quadrants.

    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }

      quad.x = x / weight;
      quad.y = y / weight;
    } // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;

      do strength += strengths[q.data.index]; while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;
    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y; // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.

    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
        if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }

      return true;
    } // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return; // Limit forces for very close nodes; randomize direction if coincident.


    if (quad.data !== node || quad.next) {
      if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
      if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function (_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function (_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function (_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function (_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
}

/***/ }),

/***/ 10370:
/*!*************************************************!*\
  !*** ./node_modules/d3-force/src/simulation.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x": () => (/* binding */ x),
/* harmony export */   "y": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dispatch */ 69712);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ 35404);
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ 30418);



function x(d) {
  return d.x;
}
function y(d) {
  return d.y;
}
var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(step),
      event = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_1__["default"])("tick", "end"),
      random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);

    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i,
        n = nodes.length,
        node;
    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function (force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;

      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i),
            angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }

      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();
  return simulation = {
    tick: tick,
    restart: function () {
      return stepper.restart(step), simulation;
    },
    stop: function () {
      return stepper.stop(), simulation;
    },
    nodes: function (_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function (_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },
    alphaMin: function (_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },
    alphaDecay: function (_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },
    alphaTarget: function (_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },
    velocityDecay: function (_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },
    randomSource: function (_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },
    force: function (name, _) {
      return arguments.length > 1 ? (_ == null ? forces.delete(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
    },
    find: function (x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;
      if (radius == null) radius = Infinity;else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },
    on: function (name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}

/***/ }),

/***/ 73460:
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/x.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 75455);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  var strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      xz;
  if (typeof x !== "function") x = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);

    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.x = function (_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : x;
  };

  return force;
}

/***/ }),

/***/ 99994:
/*!****************************************!*\
  !*** ./node_modules/d3-force/src/y.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ 75455);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(y) {
  var strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      yz;
  if (typeof y !== "function") y = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i,
        n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);

    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  force.strength = function (_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.y = function (_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : y;
  };

  return force;
}

/***/ }),

/***/ 66448:
/*!*********************************************!*\
  !*** ./node_modules/d3-quadtree/src/add.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAll": () => (/* binding */ addAll),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  const x = +this._x.call(null, d),
        y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {
    data: d
  },
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j; // If the tree is empty, initialize the root as a leaf.

  if (!node) return tree._root = leaf, tree; // Find the existing leaf for the new point, or add it.

  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  } // Is the new point is exactly coincident with the existing point?


  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree; // Otherwise, split the leaf node until the old and new point are separated.

  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));

  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d,
      i,
      n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity; // Compute the points and their extent.

  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  } // If there were no (valid) points, abort.


  if (x0 > x1 || y0 > y1) return this; // Expand the tree to cover the new points.

  this.cover(x0, y0).cover(x1, y1); // Add the new points.

  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

/***/ }),

/***/ 41179:
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/cover.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1; // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!

  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  } // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | x < x0;
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;

      switch (i) {
        case 0:
          x1 = x0 + z, y1 = y0 + z;
          break;

        case 1:
          x0 = x1 - z, y1 = y0 + z;
          break;

        case 2:
          x1 = x0 + z, y0 = y1 - z;
          break;

        case 3:
          x0 = x1 - z, y0 = y1 - z;
          break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

/***/ }),

/***/ 13103:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/data.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var data = [];
  this.visit(function (node) {
    if (!node.length) do data.push(node.data); while (node = node.next);
  });
  return data;
}

/***/ }),

/***/ 2773:
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/extent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}

/***/ }),

/***/ 49956:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/find.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 12415);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {
    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue; // Bisect the current quadrant.

    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;
      quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[3], xm, ym, x2, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[2], x1, ym, xm, y2), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[1], xm, y1, x2, ym), new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[0], x1, y1, xm, ym)); // Visit the closest quadrant first.

      if (i = (y >= ym) << 1 | x >= xm) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    } // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;

      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}

/***/ }),

/***/ 12415:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/quad.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

/***/ }),

/***/ 32658:
/*!**************************************************!*\
  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quadtree)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ 66448);
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover.js */ 41179);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ 13103);
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extent.js */ 2773);
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find.js */ 49956);
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove.js */ 50123);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.js */ 30488);
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size.js */ 18372);
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visit.js */ 11749);
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visitAfter.js */ 45371);
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.js */ 98810);
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y.js */ 54332);












function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_0__.defaultX : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_1__.defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {
    data: leaf.data
  },
      next = copy;

  while (leaf = leaf.next) next = next.next = {
    data: leaf.data
  };

  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function () {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{
    source: node,
    target: copy._root = new Array(4)
  }];

  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({
          source: child,
          target: node.target[i] = new Array(4)
        });else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_2__["default"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_2__.addAll;
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_3__["default"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_4__["default"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_5__["default"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_6__["default"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_7__["default"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_7__.removeAll;
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_8__["default"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_9__["default"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_10__["default"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__["default"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_0__["default"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ 50123:
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/remove.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeAll": () => (/* binding */ removeAll)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j; // If the tree is empty, initialize the root as a leaf.

  if (!node) return this; // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.

  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
  } // Find the point to remove.

  while (node.data !== d) if (!(previous = node, node = node.next)) return this;

  if (next = node.next) delete node.next; // If there are multiple coincident points, remove just the point.

  if (previous) return next ? previous.next = next : delete previous.next, this; // If this is the root point, remove it.

  if (!parent) return this._root = next, this; // Remove this leaf.

  next ? parent[i] = next : delete parent[i]; // If the parent now contains exactly one leaf, collapse superfluous parents.

  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j] = node;else this._root = node;
  }

  return this;
}
function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);

  return this;
}

/***/ }),

/***/ 30488:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/root.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this._root;
}

/***/ }),

/***/ 18372:
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/size.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var size = 0;
  this.visit(function (node) {
    if (!node.length) do ++size; while (node = node.next);
  });
  return size;
}

/***/ }),

/***/ 11749:
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/visit.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 12415);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [],
      q,
      node = this._root,
      child,
      x0,
      y0,
      x1,
      y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, this._x0, this._y0, this._x1, this._y1));

  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
    }
  }

  return this;
}

/***/ }),

/***/ 45371:
/*!****************************************************!*\
  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ 12415);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [],
      next = [],
      q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._root, this._x0, this._y0, this._x1, this._y1));

  while (q = quads.pop()) {
    var node = q.node;

    if (node.length) {
      var child,
          x0 = q.x0,
          y0 = q.y0,
          x1 = q.x1,
          y1 = q.y1,
          xm = (x0 + x1) / 2,
          ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
    }

    next.push(q);
  }

  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }

  return this;
}

/***/ }),

/***/ 98810:
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/x.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultX": () => (/* binding */ defaultX)
/* harmony export */ });
function defaultX(d) {
  return d[0];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}

/***/ }),

/***/ 54332:
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/y.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultY": () => (/* binding */ defaultY)
/* harmony export */ });
function defaultY(d) {
  return d[1];
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}

/***/ }),

/***/ 35404:
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timer": () => (/* binding */ Timer),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerFlush": () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0,
    // is an animation frame pending?
timeout = 0,
    // is a timeout pending?
interval = 0,
    // are any timers active?
pokeDelay = 1000,
    // how frequently we check for clock skew
taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
  setTimeout(f, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function (callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);

    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;else taskHead = this;
      taskTail = this;
    }

    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function () {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay, time) {
  var t = new Timer();
  t.restart(callback, delay, time);
  return t;
}
function timerFlush() {
  now(); // Get the current time, if not already set.

  ++frame; // Pretend we’ve set an alarm, if we haven’t already.

  var t = taskHead,
      e;

  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }

  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;

  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(),
      delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0,
      t1 = taskHead,
      t2,
      time = Infinity;

  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }

  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.

  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.

  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app__LayoutDashboard_projects-chart_projects-chart_module_ts.js.map