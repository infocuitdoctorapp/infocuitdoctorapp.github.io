(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Reports-reports-module"],{

/***/ "./src/app/Reports/reports-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Reports/reports-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/Reports/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
    },
    {
        path: 'reports',
        component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
    },
];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Reports/reports.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Reports/reports.module.ts ***!
  \*******************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/Reports/reports-routing.module.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/Reports/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ }),

/***/ "./src/app/Reports/reports/reports.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Reports/reports/reports.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chartdiv {\r\n    width: 110% !important;\r\n    height:300%;\r\n}\r\n.map-content {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n}\r\n#m_donut_chart {\r\n    width\t\t: 100%;\r\n    height\t\t: 300px;\r\n    font-size\t: 11px;\r\n  }\r\n#chartdiv1{\r\n\r\n    width: 128% !important;\r\n    height:300%;\r\n  }\r\n#chartdiv2{\r\n\r\n    width: 110% !important;\r\n    height:300%;\r\n  }\r\n#m_donut_chart{\r\n       \r\n    width: 110% !important;\r\n    height:300%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVwb3J0cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBRUE7O0lBRUUsc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjtBQUVBOztJQUVFLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7QUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvUmVwb3J0cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTEwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjMwMCU7XHJcbn1cclxuLm1hcC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuI21fZG9udXRfY2hhcnQge1xyXG4gICAgd2lkdGhcdFx0OiAxMDAlO1xyXG4gICAgaGVpZ2h0XHRcdDogMzAwcHg7XHJcbiAgICBmb250LXNpemVcdDogMTFweDtcclxuICB9XHJcblxyXG4gICNjaGFydGRpdjF7XHJcblxyXG4gICAgd2lkdGg6IDEyOCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozMDAlO1xyXG4gIH1cclxuXHJcbiAgI2NoYXJ0ZGl2MntcclxuXHJcbiAgICB3aWR0aDogMTEwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OjMwMCU7XHJcbiAgfVxyXG5cclxuICAjbV9kb251dF9jaGFydHtcclxuICAgICAgIFxyXG4gICAgd2lkdGg6IDExMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDozMDAlO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Reports/reports/reports.component.html":
/*!********************************************************!*\
  !*** ./src/app/Reports/reports/reports.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content home\">\r\n  <div class=\"block-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-5 col-sm-12\">\r\n        <h2>Reports\r\n          <small>Welcome to Reports </small>\r\n        </h2>\r\n      </div>\r\n      <div class=\"col-lg-7 col-md-7 col-sm-12 text-right\">\r\n\r\n\r\n        <ul class=\"breadcrumb float-md-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/report/reports\"><i class=\"zmdi zmdi-home\"></i> Doctor</a></li>\r\n          <li class=\"breadcrumb-item active\">Reports</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"header\">\r\n                <h2><strong>Daily Status</strong> Reports</h2>\r\n            </div>\r\n          <div class=\"card-body\">\r\n            <div id=\"chartdiv\" [style.width.%]=\"100\" [style.height.px]=\"400\" ></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n          <div class=\"card\">\r\n              <div class=\"header\">\r\n                  <h2><strong>Illness</strong> Reports</h2>\r\n              </div>\r\n            <div class=\"card-body\">\r\n              <div id=\"chartdiv1\" [style.width.%]=\"100\" [style.height.px]=\"400\" ></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row clearfix\">\r\n          <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"header\">\r\n                      <h2><strong>Location</strong> Reports</h2>\r\n                  </div>\r\n                <div class=\"card-body\">\r\n                  <div id=\"chartdiv2\" [style.width.%]=\"100\" [style.height.px]=\"400\" ></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"header\">\r\n                        <h2><strong>Channel</strong> Reports</h2>\r\n                    </div>\r\n                  <div class=\"card-body\">\r\n                    <div id=\"m_donut_chart\" [style.width.%]=\"100\" [style.height.px]=\"400\" ></div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"row clearfix\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"header\">\r\n                      <h2><strong>Yearly</strong> Reports</h2>\r\n                  </div>\r\n                <div class=\"card-body\">\r\n                  <div id=\"m_bar_chart\" [style.width.%]=\"100\" [style.height.px]=\"400\" ></div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!-- <div class=\"row clearfix\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <div class=\"card\">\r\n                  <div class=\"header\">\r\n                      <h2><strong>Business</strong> Detail</h2>\r\n                  </div>\r\n                <div class=\"card-body\">\r\n                  <div id=\"world-map-markers\" [style.width.%]=\"100\" [style.height.px]=\"300\" ></div>\r\n                  <div class=\"row map-content\">\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">visitor from america</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-turquoise\" role=\"progressbar\" aria-valuenow=\"86\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 86%;\">\r\n                            <span class=\"progress-value\">86%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"progress-container m-t-20\">\r\n                        <span class=\"progress-badge\">visitor from Canada</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-coral\" role=\"progressbar\" aria-valuenow=\"86\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 86%;\">\r\n                            <span class=\"progress-value\">86%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"progress-container m-t-20\">\r\n                        <span class=\"progress-badge\">visitor from Germany</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-blue\" role=\"progressbar\" aria-valuenow=\"38\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 38%;\">\r\n                            <span class=\"progress-value\">86%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">visitor from UK</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-salmon\" role=\"progressbar\" aria-valuenow=\"48\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 48%;\">\r\n                            <span class=\"progress-value\">86%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"progress-container m-t-20\">\r\n                        <span class=\"progress-badge\">visitor from India</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-parpl\" role=\"progressbar\" aria-valuenow=\"86\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 86%;\">\r\n                            <span class=\"progress-value\">88%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"progress-container m-t-20\">\r\n                        <span class=\"progress-badge\">visitor from Australia</span>\r\n                        <div class=\"progress\">\r\n                          <div class=\"progress-bar l-amber\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 55%;\">\r\n                            <span class=\"progress-value\">86%</span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div> -->\r\n\r\n      <!-- /************************************************************************************************/ -->\r\n\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/Reports/reports/reports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Reports/reports/reports.component.ts ***!
  \******************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amcharts3_angular2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! amcharts3-angular2 */ "./node_modules/amcharts3-angular2/index.js");
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.service */ "./src/app/Reports/reports/reports.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as am4charts from "@amcharts/amcharts4/charts";




// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import { ReportsService } from './reports.service';
var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(AmCharts, reportservice, storage) {
        this.AmCharts = AmCharts;
        this.reportservice = reportservice;
        this.storage = storage;
        // public AmCharts:any= {}
        this.getroomdetails = [];
        this.chartDatas = [];
        this.charts = [];
        this.dailyreport = [];
        this.illreport = [];
        this.channel = [];
        this.location = [];
        this.yearlyreport = [];
        this.latlong = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.dailystatus();
        this.illnessreport();
        this.channelreport();
        this.locationreport();
        this.barchart();
        this.now = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
        console.log("DATEeeee :", this.now);
        // this.latlongreport();
        function exportChart() {
            // chart["export"].capture({}, function() {
            // SAVE TO PNG
            // this.toPNG({}, function(base64) {
            // We have now a Base64-encoded image data
            // which we can now transfer to server via AJAX
            // i.e. jQuery.post( "saveimage.php", { "data": base64 } )
            // console.log(base64);
            // });
            // });
        }
        //third chart
        //chart 6
        // var chart = this.AmCharts.makeChart( "chartdiv5", {
        //   "type": "serial",
        //   "theme": "none",
        //   "dataProvider": [ {
        //     "country": "USA",
        //     "visits": 2025
        //   }, {
        //     "country": "China",
        //     "visits": 1882
        //   }, {
        //     "country": "Japan",
        //     "visits": 1809
        //   }, {
        //     "country": "Germany",
        //     "visits": 1322
        //   }, {
        //     "country": "UK",
        //     "visits": 1122
        //   }, {
        //     "country": "France",
        //     "visits": 1114
        //   }, {
        //     "country": "India",
        //     "visits": 984
        //   }, {
        //     "country": "Spain",
        //     "visits": 711
        //   }, {
        //     "country": "Netherlands",
        //     "visits": 665
        //   }, {
        //     "country": "Russia",
        //     "visits": 580
        //   }, {
        //     "country": "South Korea",
        //     "visits": 443
        //   }, {
        //     "country": "Canada",
        //     "visits": 441
        //   }, {
        //     "country": "Brazil",
        //     "visits": 395
        //   } ],
        //   "valueAxes": [ {
        //     "gridColor": "#FFFFFF",
        //     "gridAlpha": 0.2,
        //     "dashLength": 0
        //   } ],
        //   "gridAboveGraphs": true,
        //   "startDuration": 1,
        //   "graphs": [ {
        //     "balloonText": "[[category]]: <b>[[value]]</b>",
        //     "fillAlphas": 0.8,
        //     "lineAlpha": 0.2,
        //     "type": "column",
        //     "valueField": "visits"
        //   } ],
        //   "chartCursor": {
        //     "categoryBalloonEnabled": false,
        //     "cursorAlpha": 0,
        //     "zoomable": false
        //   },
        //   "categoryField": "country",
        //   "categoryAxis": {
        //     "gridPosition": "start",
        //     "gridAlpha": 0,
        //     "tickPosition": "start",
        //     "tickLength": 20
        //   },
        //   "export": {
        //     "enabled": true
        //   }
        // } );
        // chat 4
        var chart = this.AmCharts.makeChart("chartdiv4", {
            "type": "pie",
            "theme": "none",
            "innerRadius": "50%",
            "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
            "dataProvider": this.channel,
            "balloonText": "[[value]]",
            "valueField": "count",
            "titleField": "channel",
            "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#FFFFFF",
                "fontSize": 16
            },
            "export": {
                "enabled": true
            }
        });
        //chart 7
        // Morris donut chart
        //chart 6
        // Morris bar chart
        // **************  MAP  **************
        //chart 7
        // $('#world-map-markers').vectorMap({
        //   map: 'in_mill',
        //   normalizeFunction: 'polynomial',
        //   hoverOpacity: 0.7,
        //   hoverColor: false,
        //   backgroundColor: 'transparent',
        //   regionStyle: {
        //       initial: {
        //           fill: 'rgba(210, 214, 222, 1)',
        //           'fill-opacity': 1,
        //           stroke: 'none',
        //           'stroke-width': 0,
        //           'stroke-opacity': 1
        //       },
        //       hover: {
        //           fill: 'rgba(255, 193, 7, 2)',
        //           cursor: 'pointer'
        //       },
        //       selected: {
        //           fill: 'yellow'
        //       },
        //       selectedHover: {}
        //   },
        //   markerStyle: {
        //       initial: {
        //           fill: '#fff',
        //           stroke: '#FFC107 '
        //       }
        //   },
        //   markers: [{
        //           latLng: [37.09, -95.71],
        //           name: 'America'
        //       },
        // {
        //     latLng: [51.16, 10.45],
        //     name: 'Germany'
        // },
        // {
        //     latLng: [-25.27, 133.77],
        //     name: 'Australia'
        // },
        // {
        //     latLng: [56.13, -106.34],
        //     name: 'Canada'
        // },
        // {
        //     latLng: [20.59, 78.96],
        //     name: 'India'
        // },
        // {
        //     latLng: [12.95, 80.14],
        //     name: 'Bala'
        // },
        //   ]
        // });
        /**
         * Create the chart
         */
    };
    //1st chart
    ReportsComponent.prototype.dailystatus = function () {
        var _this = this;
        var daily = {
            "doctor_id": this.storage.retrieve('doctor_id'),
            "business_id": this.storage.retrieve('business_id'),
            "business_date": moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD'),
        };
        console.log("daily", daily);
        this.reportservice.dailystatus(daily).subscribe(function (Response) {
            if (Response.Message_Code == "TCS") {
                _this.dailyreport = Response.token_count;
                console.log("Today's Token", JSON.stringify(_this.dailyreport));
                var chart = _this.AmCharts.makeChart("chartdiv", {
                    "type": "pie",
                    "theme": "light",
                    "dataProvider": _this.dailyreport,
                    "valueField": "count",
                    "titleField": "token_status",
                    "balloon": {
                        "fixedPosition": true
                    },
                    "export": {
                        "enabled": true,
                        "menu": []
                    }
                });
            }
        });
    };
    // chartr 2
    ReportsComponent.prototype.illnessreport = function () {
        var _this = this;
        var body = {
            "business_id": this.storage.retrieve('business_id'),
            "doctor_id": this.storage.retrieve('doctor_id')
        };
        this.reportservice.illnessreport(body).subscribe(function (Response) {
            if (Response.Message_Code == "ICS") {
                _this.illreport = Response.illness_count;
                var chart = _this.AmCharts.makeChart("chartdiv1", {
                    "type": "pie",
                    "theme": "light",
                    "path": "https://www.amcharts.com/lib/3/",
                    "dataProvider": _this.illreport,
                    "valueField": "count",
                    "titleField": "reason",
                    "pulledField": "pulled",
                    "outlineAlpha": 0.4,
                    "depth3D": 15,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "angle": 30,
                    "export": {
                        "enabled": true
                    }
                });
            }
        });
    };
    // chart 3
    ReportsComponent.prototype.locationreport = function () {
        var _this = this;
        var locat = {
            "business_id": this.storage.retrieve('business_id'),
            "doctor_id": this.storage.retrieve('doctor_id')
        };
        this.reportservice.locationreport(locat).subscribe(function (Response) {
            if (Response.Message_Code == "CCS") {
                _this.location = Response.ReturnValue;
                var chart = _this.AmCharts.makeChart("chartdiv2", {
                    "type": "pie",
                    "theme": "light",
                    "dataProvider": _this.location,
                    "valueField": "city_count",
                    "titleField": "city",
                    "balloon": {
                        "fixedPosition": true
                    },
                    "export": {
                        "enabled": true,
                        "menu": []
                    }
                });
            }
        });
    };
    // chart 4
    ReportsComponent.prototype.channelreport = function () {
        var _this = this;
        var body = {
            "doctor_id": this.storage.retrieve('doctor_id'),
            "business_id": this.storage.retrieve('business_id')
        };
        this.reportservice.channelreport(body).subscribe(function (Response) {
            if (Response.Message_Code == "CCS") {
                _this.channel = Response.illness_count;
                console.log("channel", JSON.stringify(_this.channel));
                var chart = _this.AmCharts.makeChart("m_donut_chart", {
                    "type": "pie",
                    "theme": "dark",
                    "dataProvider": _this.channel,
                    "valueField": "count",
                    "titleField": "label",
                    "startEffect": "elastic",
                    "startDuration": 2,
                    "labelRadius": 10,
                    "innerRadius": "70%",
                    "depth3D": 10,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                    "angle": 15,
                    "export": {
                        "enabled": true
                    }
                });
            }
        });
    };
    // yearlyreport
    ReportsComponent.prototype.barchart = function () {
        var _this = this;
        this.reportservice.barchart().subscribe(function (Response) {
            if (Response.Message_Code == "TCS") {
                _this.yearlyreport = Response.ReturnValue;
                console.log("bar chart", _this.yearlyreport);
                Morris.Bar({
                    element: 'm_bar_chart',
                    data: _this.yearlyreport,
                    xkey: ['period'],
                    ykeys: ['canceled_count', 'booked_count', 'Checked_out'],
                    labels: ['canceled_count', 'booked_count', 'Checked_out'],
                    barColors: ['#757575', '#26c6da', '#ffcc80'],
                    hideHover: 'auto',
                    gridLineColor: '#eef0f2',
                    resize: true
                });
            }
        });
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/Reports/reports/reports.component.html"),
            providers: [amcharts3_angular2__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"]],
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/Reports/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [amcharts3_angular2__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"], _reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/Reports/reports/reports.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Reports/reports/reports.service.ts ***!
  \****************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
var ReportsService = /** @class */ (function () {
    function ReportsService(http) {
        this.http = http;
    }
    ReportsService.prototype.extractData = function (res) {
        //alert('hai20')
        console.log('res========---====' + res);
        var body = res.json();
        console.log(JSON.stringify(body));
        return body;
    };
    ReportsService.prototype.dailystatus = function (rep) {
        return this.http.post('https://doctorappnew.herokuapp.com/dailystatusreport', rep);
    };
    ReportsService.prototype.illnessreport = function (ill) {
        return this.http.post('https://doctorappnew.herokuapp.com/illnessbasedreport', ill);
    };
    ReportsService.prototype.channelreport = function (report) {
        return this.http.post('https://doctorappnew.herokuapp.com/channelbasedreport', report);
    };
    ReportsService.prototype.locationreport = function (locat) {
        return this.http.post('https://doctorappnew.herokuapp.com/Locationreport', locat);
    };
    ReportsService.prototype.barchart = function () {
        var body = {
            "business_id": 103,
            "doctor_id": "janu118"
        };
        return this.http.post('https://doctorappnew.herokuapp.com/Weekdayreport', body);
    };
    ReportsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportsService);
    return ReportsService;
}());



/***/ })

}]);
//# sourceMappingURL=Reports-reports-module.js.map