(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/dashboard/main/main.component.ts");
/* harmony import */ var _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rtl/rtl.component */ "./src/app/dashboard/rtl/rtl.component.ts");
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./horizontal/horizontal.component */ "./src/app/dashboard/horizontal/horizontal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    },
    {
        path: 'rtl',
        component: _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_3__["RtlComponent"]
    },
    {
        path: 'horizontal',
        component: _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["HorizontalComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/dashboard/main/main.component.ts");
/* harmony import */ var _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rtl/rtl.component */ "./src/app/dashboard/rtl/rtl.component.ts");
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal/horizontal.component */ "./src/app/dashboard/horizontal/horizontal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _rtl_rtl_component__WEBPACK_IMPORTED_MODULE_4__["RtlComponent"], _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_5__["HorizontalComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/horizontal/horizontal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/horizontal/horizontal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal section.content {\r\n  margin: 101px 0px 0px 0px !important;\r\n}\r\n.horizontal .navbar{width: 100%;}\r\n/* ––––––––––––––––––––––––––––––––––––––––––––––––––\r\nScreen style's\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.menu-container {\r\n  width:100%;\r\n  margin: 0 auto;\r\n  background:#263238;\r\n  position:fixed;\r\n  top:60px;\r\n  z-index:10;\r\n}\r\n.menu-mobile {\r\n  display: none;\r\n  padding: 20px;\r\n}\r\n.menu-mobile:after {\r\n  content: \"\\f313\";\r\n  font-family: \"Material-Design-Iconic-Font\";\r\n  font-size: 2.5rem;\r\n  padding: 0;\r\n  float: right;\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-25%);\r\n          transform: translateY(-25%);\r\n}\r\n.menu-dropdown-icon:before {\r\n  content: \"\\f2ee\";\r\n  font-family: \"Material-Design-Iconic-Font\";\r\n  display: none;\r\n  cursor: pointer;\r\n  float: right;\r\n  padding:13px 20px;\r\n  color: #ccc;\r\n}\r\n.menu > ul {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  list-style: none;\r\n  padding: 0;\r\n  position: relative;\r\n  /* IF .menu position=relative -> ul = container width, ELSE ul = 100% width */\r\n  box-sizing: border-box;\r\n}\r\n.menu > ul:before,\r\n.menu > ul:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n.menu > ul:after {\r\n  clear: both;\r\n}\r\n.menu > ul > li {\r\n  float: left;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.menu > ul > li a {\r\n  text-decoration: none;\r\n  padding:10px 15px;\r\n  display: block;\r\n  color:#bbb;  \r\n  font-size:14px;\r\n}\r\n.menu > ul > li a i{\r\n  font-size: 16px;\r\n}\r\n.menu > ul > li:hover {\r\n  background: #fff; \r\n}\r\n.menu > ul > li:hover a{\r\n  background: #fff;\r\n  color:#3d4c5a;\r\n}\r\n.menu > ul > li > ul {\r\n  display: none;\r\n  width: 100%;\r\n  background: #fff;\r\n  padding:10px;\r\n  position: absolute;\r\n  z-index: 99;\r\n  left: 0;\r\n  margin: 2px 0 0 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  box-shadow: 0 2px 10px rgba(0,0,0,0.2);\r\n  border-radius: 3px;\r\n}\r\n.menu > ul > li > ul.h-small-menu > li {width:33.33%;}\r\n.menu > ul > li > ul:before,\r\n.menu > ul > li > ul:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n.menu > ul > li > ul:after {\r\n  clear: both;\r\n}\r\n.menu > ul > li > ul > li {\r\n  margin: 0;\r\n  padding-bottom: 0;\r\n  list-style: none;\r\n  width: 25%;\r\n  background: none;\r\n  float: left;\r\n  padding:0px;\r\n}\r\n.menu > ul > li > ul > li span {\r\n  color: #777;\r\n  padding:15px;\r\n  width: 95%;\r\n  display: block;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.menu > ul > li > ul > li a:hover{color:#fff;}\r\n.menu > ul > li > ul > li > ul {\r\n  display: block;\r\n  padding: 0;\r\n  margin: 10px 0 0;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n}\r\n.menu > ul > li > ul > li > ul:before,\r\n.menu > ul > li > ul > li > ul:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n.menu > ul > li > ul > li > ul:after {\r\n  clear: both;\r\n}\r\n.menu > ul > li > ul > li > ul > li {\r\n  float: left;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: .8em;\r\n}\r\n.menu > ul > li > ul > li > ul > li a {\r\n  border: 0;\r\n}\r\n.menu > ul > li > ul.normal-sub {\r\n  width: 300px;\r\n  left: auto;\r\n  padding: 10px;\r\n}\r\n.menu > ul > li > ul.normal-sub > li {\r\n  width: 100%;\r\n}\r\n.menu > ul > li > ul.normal-sub > li a {\r\n  border: 0;\r\n  padding:12px;\r\n}\r\n.menu > ul > li > ul.normal-sub > li a:hover{background:#00BCD4; color:#fff;}\r\n/* ––––––––––––––––––––––––––––––––––––––––––––––––––\r\nMobile style's\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n@media only screen and (max-width: 959px) {\r\n  .h-bars:before {\r\n    content: '\\E5D2';\r\n    font-family: 'Material Icons';\r\n    color: #000;\r\n    line-height: 44px;\r\n    font-size: 24px;\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 12px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .horizontal section.content {\r\n    margin: 60px 0px 0px 0px !important;\r\n  }\r\n\r\n  .menu-container {\r\n    width: 100%;\r\n    padding:0 20px;\r\n  }\r\n\r\n  .menu-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .menu-dropdown-icon:before {\r\n    display: block;\r\n    position: absolute;\r\n    right: 0;\r\n  }\r\n\r\n  .menu > ul {\r\n    display: none;\r\n  }\r\n\r\n  .menu > ul > li {\r\n    width: 100%;\r\n    float: none;\r\n    display: block;\r\n    position: relative;\r\n  }\r\n\r\n  .menu > ul > li a {\r\n    padding: 13px 20px;\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n\r\n  .menu > ul > li > ul {\r\n    position: relative;\r\n  }\r\n\r\n  .menu > ul > li > ul.normal-sub {\r\n    width: 100%;\r\n  }\r\n\r\n  .menu > ul > li > ul > li {\r\n    float: none;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .menu > ul > li > ul > li:first-child {\r\n    margin: 0;\r\n  }\r\n\r\n  .menu > ul > li > ul > li > ul {\r\n    position: relative;\r\n  }\r\n\r\n  .menu > ul > li > ul > li > ul > li {\r\n    float: none;\r\n  }\r\n\r\n  .menu .show-on-mobile {\r\n    display: block;    \r\n    overflow-y: scroll;\r\n    height: calc(100vh - 70px);\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .menu > ul > li > ul.h-small-menu > li {\r\n    width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2htLXN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBLG9CQUFvQixXQUFXLENBQUM7QUFDaEM7O29EQUVvRDtBQUNwRDtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUNBQW1DO1VBQzNCLDJCQUEyQjtBQUNyQztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDZFQUE2RTtFQUM3RSxzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7QUFDQSx3Q0FBd0MsWUFBWSxDQUFDO0FBQ3JEOztFQUVFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUNBLGtDQUFrQyxVQUFVLENBQUM7QUFDN0M7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBLDZDQUE2QyxrQkFBa0IsRUFBRSxVQUFVLENBQUM7QUFHNUU7O29EQUVvRDtBQUNwRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvcml6b250YWwvaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwgc2VjdGlvbi5jb250ZW50IHtcclxuICBtYXJnaW46IDEwMXB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvcml6b250YWwgLm5hdmJhcnt3aWR0aDogMTAwJTt9XHJcbi8qIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xyXG5TY3JlZW4gc3R5bGUnc1xyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuLm1lbnUtY29udGFpbmVyIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IzI2MzIzODtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6NjBweDtcclxuICB6LWluZGV4OjEwO1xyXG59XHJcbi5tZW51LW1vYmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5tZW51LW1vYmlsZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcXGYzMTNcIjtcclxuICBmb250LWZhbWlseTogXCJNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnRcIjtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbn1cclxuLm1lbnUtZHJvcGRvd24taWNvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMmVlXCI7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250XCI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6MTNweCAyMHB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5tZW51ID4gdWwge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogSUYgLm1lbnUgcG9zaXRpb249cmVsYXRpdmUgLT4gdWwgPSBjb250YWluZXIgd2lkdGgsIEVMU0UgdWwgPSAxMDAlIHdpZHRoICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubWVudSA+IHVsOmJlZm9yZSxcclxuLm1lbnUgPiB1bDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4ubWVudSA+IHVsOmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG4ubWVudSA+IHVsID4gbGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzoxMHB4IDE1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6I2JiYjsgIFxyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSBhIGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjsgXHJcbn1cclxuLm1lbnUgPiB1bCA+IGxpOmhvdmVyIGF7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjojM2Q0YzVhO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbjogMnB4IDAgMCAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm1lbnUgPiB1bCA+IGxpID4gdWwuaC1zbWFsbC1tZW51ID4gbGkge3dpZHRoOjMzLjMzJTt9XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsOmJlZm9yZSxcclxuLm1lbnUgPiB1bCA+IGxpID4gdWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuLm1lbnUgPiB1bCA+IGxpID4gdWw6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsID4gbGkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4ubWVudSA+IHVsID4gbGkgPiB1bCA+IGxpIHNwYW4ge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIHBhZGRpbmc6MTVweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsID4gbGkgYTpob3Zlcntjb2xvcjojZmZmO31cclxuLm1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaSA+IHVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsID4gbGkgPiB1bDpiZWZvcmUsXHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsID4gbGkgPiB1bDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4ubWVudSA+IHVsID4gbGkgPiB1bCA+IGxpID4gdWw6YWZ0ZXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsID4gbGkgPiB1bCA+IGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IC44ZW07XHJcbn1cclxuLm1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaSA+IHVsID4gbGkgYSB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5tZW51ID4gdWwgPiBsaSA+IHVsLm5vcm1hbC1zdWIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLm1lbnUgPiB1bCA+IGxpID4gdWwubm9ybWFsLXN1YiA+IGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWVudSA+IHVsID4gbGkgPiB1bC5ub3JtYWwtc3ViID4gbGkgYSB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6MTJweDtcclxufVxyXG4ubWVudSA+IHVsID4gbGkgPiB1bC5ub3JtYWwtc3ViID4gbGkgYTpob3ZlcntiYWNrZ3JvdW5kOiMwMEJDRDQ7IGNvbG9yOiNmZmY7fVxyXG5cclxuXHJcbi8qIOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xyXG5Nb2JpbGUgc3R5bGUnc1xyXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5oLWJhcnM6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXEU1RDInO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvcml6b250YWwgc2VjdGlvbi5jb250ZW50IHtcclxuICAgIG1hcmdpbjogNjBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzowIDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudS1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWVudS1kcm9wZG93bi1pY29uOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCA+IGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5tZW51ID4gdWwgPiBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWVudSA+IHVsID4gbGkgPiB1bCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAubWVudSA+IHVsID4gbGkgPiB1bC5ub3JtYWwtc3ViIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAubWVudSA+IHVsID4gbGkgPiB1bCA+IGxpID4gdWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCA+IGxpID4gdWwgPiBsaSA+IHVsID4gbGkge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWVudSAuc2hvdy1vbi1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgPiB1bCA+IGxpID4gdWwuaC1zbWFsbC1tZW51ID4gbGkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/horizontal/horizontal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/horizontal/horizontal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-6 col-sm-12\">\n        <h2>Horizontal Menu Dashboad\n          <small>Welcome to Oreo</small>\n        </h2>\n      </div>\n      <div class=\"col-lg-5 col-md-6 col-sm-12\">\n        <button class=\"btn btn-white btn-icon btn-round hidden-sm-down float-right m-l-10\" type=\"button\">\n          <i class=\"zmdi zmdi-plus\"></i>\n        </button>\n        <ul class=\"breadcrumb float-md-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> Oreo</a></li>\n          <li class=\"breadcrumb-item active\">Dashboard</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-3 col-md-6 col-sm-12 text-center\">\n        <div class=\"card tasks_report\">\n          <div class=\"body\">\n            <input type=\"text\" class=\"knob dial1\" value=\"66\" data-width=\"90\" data-height=\"90\" data-thickness=\"0.1\" data-fgColor=\"#26dad2\" readonly>\n            <h6 class=\"m-t-20\">Satisfaction Rate</h6>\n            <p class=\"displayblock m-b-0\">47% Average <i class=\"zmdi zmdi-trending-up\"></i></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12 text-center\">\n        <div class=\"card tasks_report\">\n          <div class=\"body\">\n            <input type=\"text\" class=\"knob dial2\" value=\"26\" data-width=\"90\" data-height=\"90\" data-thickness=\"0.1\" data-fgColor=\"#7b69ec\" readonly>\n            <h6 class=\"m-t-20\">Project Panding</h6>\n            <p class=\"displayblock m-b-0\">13% Average <i class=\"zmdi zmdi-trending-down\"></i></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12 text-center\">\n        <div class=\"card tasks_report\">\n          <div class=\"body\">\n            <input type=\"text\" class=\"knob dial3\" value=\"76\" data-width=\"90\" data-height=\"90\" data-thickness=\"0.1\" data-fgColor=\"#f9bd53\" readonly>\n            <h6 class=\"m-t-20\">Productivity Goal</h6>\n            <p class=\"displayblock m-b-0\">75% Average <i class=\"zmdi zmdi-trending-up\"></i></p>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12 text-center\">\n        <div class=\"card tasks_report\">\n          <div class=\"body\">\n            <input type=\"text\" class=\"knob dial4\" value=\"88\" data-width=\"90\" data-height=\"90\" data-thickness=\"0.1\" data-fgColor=\"#00adef\" readonly>\n            <h6 class=\"m-t-20\">Total Revenue</h6>\n            <p class=\"displayblock m-b-0\">54% Average <i class=\"zmdi zmdi-trending-up\"></i></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-8 col-md-12 col-sm-12\">\n        <div class=\"card product-report\">\n          <div class=\"header\">\n            <h2><strong>Product</strong> Report</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 text-center m-b-10\">\n                <h3 class=\"counter m-b-0\">$4,516</h3>\n                <small class=\"text-muted\">Sales Report</small>\n                <div class=\"sparkline m-t-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"21px\" data-bar-Width=\"2\" data-bar-Spacing=\"6\" data-bar-Color=\"rgb(134, 139, 239)\">7,5,3,1,5,9,8,5,2,6,5,4,2,5,8,4,5,6,3,5,7,8</div>\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-sm-4 text-center m-b-10\">\n                <h3 class=\"counter m-b-0\">$6,481</h3>\n                <small class=\"text-muted\">Annual Revenue </small>\n                <div class=\"sparkline m-t-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"21px\" data-bar-Width=\"2\" data-bar-Spacing=\"6\" data-bar-Color=\"rgb(25, 161, 183)\">2,5,8,4,5,6,3,5,7,8,4,6,7,5,3,1,5,9,8,5,5,4</div>\n              </div>\n              <div class=\"col-lg-4 col-md-4 col-sm-4 text-center m-b-10\">\n                <h3 class=\"counter m-b-0\">$3,915</h3>\n                <small class=\"text-muted\">Monthly Revenue</small>\n                <div class=\"sparkline m-t-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"21px\" data-bar-Width=\"2\" data-bar-Spacing=\"6\" data-bar-Color=\"rgb(254, 191, 15)\">6,5,4,3,2,1,9,8,7,8,5,2,2,5,8,4,5,6,7,8,4,6</div>\n              </div>\n            </div>\n            <div id=\"m_area_chart2\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Inbox</strong></h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <ul class=\"inbox-widget list-unstyled clearfix\">\n              <li class=\"inbox-inner\"> <a href=\"javascript:void(0)\">\n                <div class=\"inbox-item\">\n                  <div class=\"inbox-img\"> <img src=\"assets/images/xs/avatar1.jpg\" alt=\"\"> </div>\n                  <div class=\"inbox-item-info\">\n                    <p class=\"author\">Aaron\tEnlightened</p>\n                    <p class=\"inbox-message\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\n                    <p class=\"inbox-date\">13:34 PM</p>\n                  </div>\n                </div>\n              </a> </li>\n              <li class=\"inbox-inner\"> <a href=\"javascript:void(0)\">\n                <div class=\"inbox-item\">\n                  <div class=\"inbox-img\"> <img src=\"assets/images/xs/avatar2.jpg\" alt=\"\"> </div>\n                  <div class=\"inbox-item-info\">\n                    <p class=\"author\">Alvin Doe</p>\n                    <p class=\"inbox-message\">Lorem Ipsum is simply dummy text oftting industry. Lorem Ipsum has been the industry's</p>\n                    <p class=\"inbox-date\">13:34 PM</p>\n                  </div>\n                </div>\n              </a> </li>\n              <li class=\"inbox-inner\"> <a href=\"javascript:void(0)\">\n                <div class=\"inbox-item\">\n                  <div class=\"inbox-img\"> <img src=\"assets/images/xs/avatar3.jpg\" alt=\"\"> </div>\n                  <div class=\"inbox-item-info\">\n                    <p class=\"author\">Austin</p>\n                    <p class=\"inbox-message\">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\n                    <p class=\"inbox-date\">13:34 PM</p>\n                  </div>\n                </div>\n              </a> </li>\n              <li class=\"inbox-inner\"> <a href=\"javascript:void(0)\">\n                <div class=\"inbox-item\">\n                  <div class=\"inbox-img\"> <img src=\"assets/images/xs/avatar4.jpg\" alt=\"\"> </div>\n                  <div class=\"inbox-item-info\">\n                    <p class=\"author\">John Benjamin</p>\n                    <p class=\"inbox-message\">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\n                    <p class=\"inbox-date\">13:34 PM</p>\n                  </div>\n                </div>\n              </a> </li>\n              <li class=\"inbox-inner\"> <a href=\"javascript:void(0)\">\n                <div class=\"inbox-item\">\n                  <div class=\"inbox-img\"> <img src=\"assets/images/xs/avatar5.jpg\" alt=\"\"> </div>\n                  <div class=\"inbox-item-info\">\n                    <p class=\"author\">Broderick</p>\n                    <p class=\"inbox-message\">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\n                    <p class=\"inbox-date\">13:34 PM</p>\n                  </div>\n                </div>\n              </a> </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-sm-12 col-md-12 col-lg-4\">\n        <div class=\"card member-card\">\n          <div class=\"header l-blue\">\n            <h4 class=\"m-t-10\">Eliana Smith</h4>\n          </div>\n          <div class=\"member-img\">\n            <a routerLink=\"/sample-pages/profile\" class=\"\">\n              <img src=\"assets/images/lg/avatar2.jpg\" class=\"rounded-circle\" alt=\"profile-image\">\n            </a>\n          </div>\n          <div class=\"body\">\n            <div class=\"col-12\">\n              <ul class=\"social-links list-unstyled\">\n                <li>\n                  <a title=\"facebook\" href=\"#\">\n                    <i class=\"zmdi zmdi-facebook\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a title=\"twitter\" href=\"#\">\n                    <i class=\"zmdi zmdi-twitter\"></i>\n                  </a>\n                </li>\n                <li>\n                  <a title=\"instagram\" href=\"3\">\n                    <i class=\"zmdi zmdi-instagram\"></i>\n                  </a>\n                </li>\n              </ul>\n              <p class=\"text-muted\">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>\n            </div>\n            <hr>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>18</h5>\n                <small>Files</small>\n              </div>\n              <div class=\"col-4\">\n                <h5>2GB</h5>\n                <small>Used</small>\n              </div>\n              <div class=\"col-4\">\n                <h5>65,6$</h5>\n                <small>Spent</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"1\" data-highlight-Spot-Color=\"rgb(233, 30, 99)\" data-highlight-Line-Color=\"#222\"\n               data-min-Spot-Color=\"rgb(233, 30, 99)\" data-max-Spot-Color=\"rgb(0, 150, 136)\" data-spot-Color=\"rgb(0, 188, 212)\"\n               data-offset=\"90\" data-width=\"100%\" data-height=\"40px\" data-line-Width=\"2\" data-line-Color=\"rgba(255, 255, 255, 0.2)\"\n               data-fill-Color=\"rgba(0, 0, 0, 0.1)\"> 1,6,2,8,4,7,3,6,2</div>\n        </div>\n      </div>\n      <div class=\"col-sm-12 col-md-12 col-lg-8\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2><strong>Social</strong> Media</h2>\n          </div>\n          <div class=\"body\">\n            <div class=\"table-responsive social_media_table\">\n              <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                  <th>Media</th>\n                  <th>Name</th>\n                  <th>Like</th>\n                  <th>Comments</th>\n                  <th>Share</th>\n                  <th>Members</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><span class=\"social_icon linkedin\"><i class=\"zmdi zmdi-linkedin\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Linked In</span>\n                    <span class=\"text-muted\">Florida, United States</span>\n                  </td>\n                  <td>19K</td>\n                  <td>14K</td>\n                  <td>10K</td>\n                  <td>\n                    <span class=\"badge badge-success\">2341</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon twitter-table\"><i class=\"zmdi zmdi-twitter\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Twitter</span>\n                    <span class=\"text-muted\">Arkansas, United States</span>\n                  </td>\n                  <td>7K</td>\n                  <td>11K</td>\n                  <td>21K</td>\n                  <td>\n                    <span class=\"badge badge-success\">952</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon facebook\"><i class=\"zmdi zmdi-facebook\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Facebook</span>\n                    <span class=\"text-muted\">Illunois, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>8K</td>\n                  <td>\n                    <span class=\"badge badge-success\">6127</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon google\"><i class=\"zmdi zmdi-google-plus\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Google Plus</span>\n                    <span class=\"text-muted\">Arizona, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>154</td>\n                  <td>\n                    <span class=\"badge badge-success\">325</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon youtube\"><i class=\"zmdi zmdi-youtube-play\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">YouTube</span>\n                    <span class=\"text-muted\">Alaska, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>200</td>\n                  <td>\n                    <span class=\"badge badge-success\">160</span>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card agent\">\n          <div class=\"agent-avatar\"> <a href=\"javascript:void(0)\"> <img src=\"assets/images/lg/avatar1.jpg\" class=\"img-fluid \" alt=\"\"> </a> </div>\n          <div class=\"agent-content\">\n            <div class=\"agent-name\">\n              <h4><a href=\"javascript:void(0)\">Tim Hank</a></h4>\n              <span>Fairview, Texas</span>\n              <ul class=\"list-unstyled team-info m-b-0\">\n                <li class=\"m-r-15\"><small>Team</small></li>\n                <li><img src=\"assets/images/xs/avatar8.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar9.jpg\" alt=\"Avatar\"></li>\n              </ul>\n            </div>\n            <ul class=\"agent-contact-details\">\n              <li><i class=\"zmdi zmdi-phone\"></i><span>(123) 123-456</span></li>\n              <li><i class=\"zmdi zmdi-email\"></i>info@example.com</li>\n            </ul>\n            <ul class=\"social-icons\">\n              <li><a class=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a></li>\n              <li><a class=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a></li>\n              <li><a class=\"gplus\" href=\"#\"><i class=\"zmdi zmdi-google-plus\"></i></a></li>\n              <li><a class=\"linkedin\" href=\"#\"><i class=\"zmdi zmdi-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card agent\">\n          <div class=\"agent-avatar\"> <a href=\"javascript:void(0)\"> <img src=\"assets/images/lg/avatar2.jpg\" class=\"img-fluid \" alt=\"\"> </a> </div>\n          <div class=\"agent-content\">\n            <div class=\"agent-name\">\n              <h4><a href=\"javascript:void(0)\">Gary Camara</a></h4>\n              <span>Bristol, Pennsylvania</span>\n              <ul class=\"list-unstyled team-info m-b-0\">\n                <li class=\"m-r-15\"><small>Team</small></li>\n                <li><img src=\"assets/images/xs/avatar2.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar3.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar4.jpg\" alt=\"Avatar\"></li>\n              </ul>\n            </div>\n            <ul class=\"agent-contact-details\">\n              <li><i class=\"zmdi zmdi-phone\"></i><span>(123) 123-456</span></li>\n              <li><i class=\"zmdi zmdi-email\"></i>info@example.com</li>\n            </ul>\n            <ul class=\"social-icons\">\n              <li><a class=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a></li>\n              <li><a class=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a></li>\n              <li><a class=\"gplus\" href=\"#\"><i class=\"zmdi zmdi-google-plus\"></i></a></li>\n              <li><a class=\"linkedin\" href=\"#\"><i class=\"zmdi zmdi-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card agent\">\n          <div class=\"agent-avatar\"> <a href=\"javascript:void(0)\"> <img src=\"assets/images/lg/avatar3.jpg\" class=\"img-fluid \" alt=\"\"> </a> </div>\n          <div class=\"agent-content\">\n            <div class=\"agent-name\">\n              <h4><a href=\"javascript:void(0)\">Hossein Shams</a></h4>\n              <span>Springfield, Florida</span>\n              <ul class=\"list-unstyled team-info m-b-0\">\n                <li class=\"m-r-15\"><small>Team</small></li>\n                <li><img src=\"assets/images/xs/avatar5.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar6.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar7.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar2.jpg\" alt=\"Avatar\"></li>\n              </ul>\n            </div>\n            <ul class=\"agent-contact-details\">\n              <li><i class=\"zmdi zmdi-phone\"></i><span>(123) 123-456</span></li>\n              <li><i class=\"zmdi zmdi-email\"></i>info@example.com</li>\n            </ul>\n            <ul class=\"social-icons\">\n              <li><a class=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a></li>\n              <li><a class=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a></li>\n              <li><a class=\"gplus\" href=\"#\"><i class=\"zmdi zmdi-google-plus\"></i></a></li>\n              <li><a class=\"linkedin\" href=\"#\"><i class=\"zmdi zmdi-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card agent\">\n          <div class=\"agent-avatar\"> <a href=\"javascript:void(0)\"> <img src=\"assets/images/lg/avatar4.jpg\" class=\"img-fluid \" alt=\"\"> </a> </div>\n          <div class=\"agent-content\">\n            <div class=\"agent-name\">\n              <h4><a href=\"javascript:void(0)\">Tom Wilson</a></h4>\n              <span>Washington, Illinois</span>\n              <ul class=\"list-unstyled team-info m-b-0\">\n                <li class=\"m-r-15\"><small>Team</small></li>\n                <li><img src=\"assets/images/xs/avatar7.jpg\" alt=\"Avatar\"></li>\n                <li><img src=\"assets/images/xs/avatar2.jpg\" alt=\"Avatar\"></li>\n              </ul>\n            </div>\n            <ul class=\"agent-contact-details\">\n              <li><i class=\"zmdi zmdi-phone\"></i><span>(123) 123-456</span></li>\n              <li><i class=\"zmdi zmdi-email\"></i>info@example.com</li>\n            </ul>\n            <ul class=\"social-icons\">\n              <li><a class=\"facebook\" href=\"#\"><i class=\"zmdi zmdi-facebook\"></i></a></li>\n              <li><a class=\"twitter\" href=\"#\"><i class=\"zmdi zmdi-twitter\"></i></a></li>\n              <li><a class=\"gplus\" href=\"#\"><i class=\"zmdi zmdi-google-plus\"></i></a></li>\n              <li><a class=\"linkedin\" href=\"#\"><i class=\"zmdi zmdi-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12\">\n        <div class=\"card \">\n          <div class=\"header\">\n            <h2><strong>Sales</strong> Overview</h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body table-responsive\">\n            <table class=\"table table-hover table-borderless m-b-0\">\n              <thead>\n              <tr>\n                <th>#</th>\n                <th style=\"width:40%;\">Product</th>\n                <th class=\"number\">Price</th>\n                <th style=\"width:20%;\">Date</th>\n                <th style=\"width:20%;\">Status</th>\n                <th style=\"width:5%;\" class=\"actions\"></th>\n              </tr>\n              </thead>\n              <tbody class=\"no-border-x\">\n              <tr>\n                <td>1</td>\n                <td>Sony Xperia M4</td>\n                <td class=\"number\">$149</td>\n                <td>Aug 23, 2017</td>\n                <td><span class=\"badge badge-success\">Completed</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Apple iPhone 6</td>\n                <td class=\"number\">$535</td>\n                <td>Aug 20, 2017</td>\n                <td><span class=\"badge badge-success\">Completed</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Samsung Galaxy S7</td>\n                <td class=\"number\">$583</td>\n                <td>Aug 18, 2017</td>\n                <td><span class=\"badge badge-warning\">Pending</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>HTC One M9</td>\n                <td class=\"number\">$350</td>\n                <td>Aug 15, 2017</td>\n                <td><span class=\"badge badge-warning\">Pending</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td>Sony Xperia Z5</td>\n                <td class=\"number\">$495</td>\n                <td>Aug 13, 2017</td>\n                <td><span class=\"badge badge-danger\">Cancelled</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>6</td>\n                <td>Samsung Galaxy S9</td>\n                <td class=\"number\">$583</td>\n                <td>Aug 18, 2017</td>\n                <td><span class=\"badge badge-warning\">Pending</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>7</td>\n                <td>HTC One M13</td>\n                <td class=\"number\">$350</td>\n                <td>Aug 15, 2017</td>\n                <td><span class=\"badge badge-warning\">Pending</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              <tr>\n                <td>8</td>\n                <td>Sony Xperia M4</td>\n                <td class=\"number\">$149</td>\n                <td>Aug 23, 2017</td>\n                <td><span class=\"badge badge-success\">Completed</span></td>\n                <td class=\"actions\"><a href=\"#\" class=\"icon\"><i class=\"zmdi zmdi-plus-circle-o\"></i></a></td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <p class=\"m-b-0\">© 2017 Oreo Admin by <a href=\"http://thememakker.com/\" target=\"black\">ThemeMakker</a> </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/horizontal/horizontal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/horizontal/horizontal.component.ts ***!
  \**************************************************************/
/*! exports provided: HorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalComponent", function() { return HorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalComponent = /** @class */ (function () {
    function HorizontalComponent() {
    }
    HorizontalComponent.prototype.ngOnInit = function () {
        $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
        // Checks if li has sub (ul) and adds class for toggle icon - just an UI
        $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
        $('.menu > ul > li').hover(function (e) {
            if ($(window).width() > 943) {
                $(this).children('ul').stop(true, false).fadeToggle(150);
                e.preventDefault();
            }
        });
        // If width is more than 943px dropdowns are displayed on hover
        $('.menu > ul > li').click(function () {
            if ($(window).width() <= 943) {
                $(this).children('ul').fadeToggle(150);
            }
        });
        $('.h-bars').click(function (e) {
            $('.menu > ul').toggleClass('show-on-mobile');
            e.preventDefault();
        });
        $('.sparkline').each(function () {
            var $this = $(this);
            $this.sparkline('html', $this.data());
        });
        // ===============================================================================
        $(window).on('scroll', function () {
            $('.card .sparkline').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass('pullUp');
                }
            });
        });
        // ===============================================================================
        Morris.Area({
            element: 'm_area_chart2',
            data: [{
                    period: '2012',
                    SiteA: 10,
                    SiteB: 0,
                }, {
                    period: '2013',
                    SiteA: 105,
                    SiteB: 110,
                }, {
                    period: '2014',
                    SiteA: 78,
                    SiteB: 92,
                }, {
                    period: '2015',
                    SiteA: 89,
                    SiteB: 185,
                }, {
                    period: '2016',
                    SiteA: 175,
                    SiteB: 149,
                }, {
                    period: '2017',
                    SiteA: 126,
                    SiteB: 98,
                }
            ],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            fillOpacity: 0.4,
            pointStrokeColors: ['#b6b8bb', '#a890d3'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#b6b8bb', '#a890d3'],
            resize: true
        });
        // ===============================================================================
        $('.dial1').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 66 }, {
            duration: 4000,
            easing: 'swing',
            step: function () {
                $('.dial1').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial2').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 26 }, {
            duration: 4500,
            easing: 'swing',
            step: function () {
                $('.dial2').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial3').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 76 }, {
            duration: 3800,
            easing: 'swing',
            step: function () {
                $('.dial3').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
        $('.dial4').knob();
        $({ animatedVal: 0 }).animate({ animatedVal: 88 }, {
            duration: 5200,
            easing: 'swing',
            step: function () {
                $('.dial4').val(Math.ceil(this.animatedVal)).trigger('change');
            }
        });
    };
    HorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal',
            template: __webpack_require__(/*! ./horizontal.component.html */ "./src/app/dashboard/horizontal/horizontal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./horizontal.component.css */ "./src/app/dashboard/horizontal/horizontal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalComponent);
    return HorizontalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/main/main.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/main/main.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cbp_tmtimeline{margin:0;padding:0;list-style:none;position:relative}.cbp_tmtimeline:before{content:'';position:absolute;top:0;bottom:0;width:3px;background:#eee;left:20%;margin-left:-6px}.cbp_tmtimeline>li{position:relative}.cbp_tmtimeline>li:first-child .cbp_tmtime span.large{color:#444;font-size:17px !important;font-weight:700}.cbp_tmtimeline>li:first-child .cbp_tmicon{background:#fff;color:#666}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child{color:#444;font-size:13px}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel{background:#f0f1f3}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after{border-right-color:#f0f1f3}.cbp_tmtimeline>li .empty span{color:#777}.cbp_tmtimeline>li .cbp_tmtime{display:block;width:23%;padding-right:70px;position:absolute}.cbp_tmtimeline>li .cbp_tmtime span{display:block;text-align:right}.cbp_tmtimeline>li .cbp_tmtime span:first-child{font-size:15px;color:#3d4c5a;font-weight:700}.cbp_tmtimeline>li .cbp_tmtime span:last-child{font-size:14px;color:#444}.cbp_tmtimeline>li .cbp_tmlabel{margin:0 0 15px 25%;background:#f0f1f3;padding:1.2em;position:relative;border-radius:5px}.cbp_tmtimeline>li .cbp_tmlabel:after{right:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none;border-right-color:#f0f1f3;border-width:10px;top:10px}.cbp_tmtimeline>li .cbp_tmlabel blockquote{font-size:16px}.cbp_tmtimeline>li .cbp_tmlabel .map-checkin{border:5px solid rgba(235,235,235,0.2);box-shadow:0px 0px 0px 1px #ebebeb;background:#fff !important}.cbp_tmtimeline>li .cbp_tmlabel h2{margin:0px;padding:0 0 10px 0;line-height:26px;font-size:16px;font-weight:normal}.cbp_tmtimeline>li .cbp_tmlabel h2 a{font-size:15px}.cbp_tmtimeline>li .cbp_tmlabel h2 a:hover{text-decoration:none}.cbp_tmtimeline>li .cbp_tmlabel h2 span{font-size:15px}.cbp_tmtimeline>li .cbp_tmlabel p{color:#444}.cbp_tmtimeline>li .cbp_tmicon{width:40px;height:40px;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;font-size:1.4em;line-height:40px;-webkit-font-smoothing:antialiased;position:absolute;color:#fff;background:#46a4da;border-radius:50%;box-shadow:0 0 0 5px #f5f5f6;text-align:center;left:20%;top:0;margin:0 0 0 -25px}@media screen and (max-width: 992px) and (min-width: 768px){.cbp_tmtimeline>li .cbp_tmtime{padding-right:60px}}@media screen and (max-width: 65.375em){.cbp_tmtimeline>li .cbp_tmtime span:last-child{font-size:12px}}@media screen and (max-width: 47.2em){.cbp_tmtimeline:before{display:none}.cbp_tmtimeline>li .cbp_tmtime{width:100%;position:relative;padding:0 0 20px 0}.cbp_tmtimeline>li .cbp_tmtime span{text-align:left}.cbp_tmtimeline>li .cbp_tmlabel{margin:0 0 30px 0;padding:1em;font-weight:400;font-size:95%}.cbp_tmtimeline>li .cbp_tmlabel:after{right:auto;left:20px;border-right-color:transparent;border-bottom-color:#f5f5f6;top:-20px}.cbp_tmtimeline>li .cbp_tmicon{position:relative;float:right;left:auto;margin:-64px 5px 0 0px}.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after{border-right-color:transparent;border-bottom-color:#f5f5f6}}.cbp_tmlabel{\r\n    margin:0px 0px 5px 0px!important;\r\n     \r\n}.float-right{\r\n    float:right;\r\n}.font-10{\r\n    font-size: 10px;\r\n}.bold{\r\n    /* font-size:16px; */\r\n    font-weight: 700;\r\n}.panelhight{\r\n    min-height: 475px !important;\r\n    overflow: hidden;\r\n}#bar_chart {\r\n    width\t\t: 100%;\r\n    height\t\t: 400px;\r\n    font-size\t: 11px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3RpbWVsaW5lLmNzcyIsInNyYy9hcHAvZGFzaGJvYXJkL21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLGlCQUFpQixDQUFDLHNEQUFzRCxVQUFVLENBQUMseUJBQXlCLENBQUMsZUFBZSxDQUFDLDJDQUEyQyxlQUFlLENBQUMsVUFBVSxDQUFDLDhEQUE4RCxVQUFVLENBQUMsY0FBYyxDQUFDLCtDQUErQyxrQkFBa0IsQ0FBQyxxREFBcUQsMEJBQTBCLENBQUMsK0JBQStCLFVBQVUsQ0FBQywrQkFBK0IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGdEQUFnRCxjQUFjLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQywrQ0FBK0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLHNDQUFzQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxjQUFjLENBQUMsNkNBQTZDLHNDQUFzQyxDQUFvRixrQ0FBa0MsQ0FBQywwQkFBMEIsQ0FBQyxtQ0FBbUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxxQ0FBcUMsY0FBYyxDQUFDLDJDQUEyQyxvQkFBb0IsQ0FBQyx3Q0FBd0MsY0FBYyxDQUFDLGtDQUFrQyxVQUFVLENBQUMsK0JBQStCLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQ0FBa0MsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyw0REFBNEQsK0JBQStCLGtCQUFrQixDQUFDLENBQUMsd0NBQXdDLCtDQUErQyxjQUFjLENBQUMsQ0FBQyxzQ0FBc0MsdUJBQXVCLFlBQVksQ0FBQywrQkFBK0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLG9DQUFvQyxlQUFlLENBQUMsZ0NBQWdDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxVQUFVLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQywrQkFBK0IsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxxREFBcUQsOEJBQThCLENBQUMsMkJBQTJCLENBQUMsQ0NFcGtHO0lBQ0ksZ0NBQWdDOztBQUVwQyxDQUVBO0lBQ0ksV0FBVztBQUNmLENBQ0E7SUFDSSxlQUFlO0FBQ25CLENBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCLENBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCLENBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYnBfdG10aW1lbGluZXttYXJnaW46MDtwYWRkaW5nOjA7bGlzdC1zdHlsZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYnBfdG10aW1lbGluZTpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDt3aWR0aDozcHg7YmFja2dyb3VuZDojZWVlO2xlZnQ6MjAlO21hcmdpbi1sZWZ0Oi02cHh9LmNicF90bXRpbWVsaW5lPmxpe3Bvc2l0aW9uOnJlbGF0aXZlfS5jYnBfdG10aW1lbGluZT5saTpmaXJzdC1jaGlsZCAuY2JwX3RtdGltZSBzcGFuLmxhcmdle2NvbG9yOiM0NDQ7Zm9udC1zaXplOjE3cHggIWltcG9ydGFudDtmb250LXdlaWdodDo3MDB9LmNicF90bXRpbWVsaW5lPmxpOmZpcnN0LWNoaWxkIC5jYnBfdG1pY29ue2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojNjY2fS5jYnBfdG10aW1lbGluZT5saTpudGgtY2hpbGQob2RkKSAuY2JwX3RtdGltZSBzcGFuOmxhc3QtY2hpbGR7Y29sb3I6IzQ0NDtmb250LXNpemU6MTNweH0uY2JwX3RtdGltZWxpbmU+bGk6bnRoLWNoaWxkKG9kZCkgLmNicF90bWxhYmVse2JhY2tncm91bmQ6I2YwZjFmM30uY2JwX3RtdGltZWxpbmU+bGk6bnRoLWNoaWxkKG9kZCkgLmNicF90bWxhYmVsOmFmdGVye2JvcmRlci1yaWdodC1jb2xvcjojZjBmMWYzfS5jYnBfdG10aW1lbGluZT5saSAuZW1wdHkgc3Bhbntjb2xvcjojNzc3fS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtdGltZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjIzJTtwYWRkaW5nLXJpZ2h0OjcwcHg7cG9zaXRpb246YWJzb2x1dGV9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG10aW1lIHNwYW57ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOnJpZ2h0fS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtdGltZSBzcGFuOmZpcnN0LWNoaWxke2ZvbnQtc2l6ZToxNXB4O2NvbG9yOiMzZDRjNWE7Zm9udC13ZWlnaHQ6NzAwfS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtdGltZSBzcGFuOmxhc3QtY2hpbGR7Zm9udC1zaXplOjE0cHg7Y29sb3I6IzQ0NH0uY2JwX3RtdGltZWxpbmU+bGkgLmNicF90bWxhYmVse21hcmdpbjowIDAgMTVweCAyNSU7YmFja2dyb3VuZDojZjBmMWYzO3BhZGRpbmc6MS4yZW07cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czo1cHh9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1sYWJlbDphZnRlcntyaWdodDoxMDAlO2JvcmRlcjpzb2xpZCB0cmFuc3BhcmVudDtjb250ZW50OlwiIFwiO2hlaWdodDowO3dpZHRoOjA7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXItcmlnaHQtY29sb3I6I2YwZjFmMztib3JkZXItd2lkdGg6MTBweDt0b3A6MTBweH0uY2JwX3RtdGltZWxpbmU+bGkgLmNicF90bWxhYmVsIGJsb2NrcXVvdGV7Zm9udC1zaXplOjE2cHh9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1sYWJlbCAubWFwLWNoZWNraW57Ym9yZGVyOjVweCBzb2xpZCByZ2JhKDIzNSwyMzUsMjM1LDAuMik7LW1vei1ib3gtc2hhZG93OjBweCAwcHggMHB4IDFweCAjZWJlYmViOy13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDBweCAxcHggI2ViZWJlYjtib3gtc2hhZG93OjBweCAwcHggMHB4IDFweCAjZWJlYmViO2JhY2tncm91bmQ6I2ZmZiAhaW1wb3J0YW50fS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtbGFiZWwgaDJ7bWFyZ2luOjBweDtwYWRkaW5nOjAgMCAxMHB4IDA7bGluZS1oZWlnaHQ6MjZweDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpub3JtYWx9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1sYWJlbCBoMiBhe2ZvbnQtc2l6ZToxNXB4fS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtbGFiZWwgaDIgYTpob3Zlcnt0ZXh0LWRlY29yYXRpb246bm9uZX0uY2JwX3RtdGltZWxpbmU+bGkgLmNicF90bWxhYmVsIGgyIHNwYW57Zm9udC1zaXplOjE1cHh9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1sYWJlbCBwe2NvbG9yOiM0NDR9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1pY29ue3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2ZvbnQtc2l6ZToxLjRlbTtsaW5lLWhlaWdodDo0MHB4Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOiM0NmE0ZGE7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCA1cHggI2Y1ZjVmNjt0ZXh0LWFsaWduOmNlbnRlcjtsZWZ0OjIwJTt0b3A6MDttYXJnaW46MCAwIDAgLTI1cHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCl7LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG10aW1le3BhZGRpbmctcmlnaHQ6NjBweH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUuMzc1ZW0pey5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtdGltZSBzcGFuOmxhc3QtY2hpbGR7Zm9udC1zaXplOjEycHh9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3LjJlbSl7LmNicF90bXRpbWVsaW5lOmJlZm9yZXtkaXNwbGF5Om5vbmV9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG10aW1le3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowIDAgMjBweCAwfS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtdGltZSBzcGFue3RleHQtYWxpZ246bGVmdH0uY2JwX3RtdGltZWxpbmU+bGkgLmNicF90bWxhYmVse21hcmdpbjowIDAgMzBweCAwO3BhZGRpbmc6MWVtO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6OTUlfS5jYnBfdG10aW1lbGluZT5saSAuY2JwX3RtbGFiZWw6YWZ0ZXJ7cmlnaHQ6YXV0bztsZWZ0OjIwcHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6I2Y1ZjVmNjt0b3A6LTIwcHh9LmNicF90bXRpbWVsaW5lPmxpIC5jYnBfdG1pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OnJpZ2h0O2xlZnQ6YXV0bzttYXJnaW46LTY0cHggNXB4IDAgMHB4fS5jYnBfdG10aW1lbGluZT5saTpudGgtY2hpbGQob2RkKSAuY2JwX3RtbGFiZWw6YWZ0ZXJ7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6I2Y1ZjVmNn19XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL2Nzcy90aW1lbGluZS5jc3NcIjtcclxuICAgICAgXHJcbi5jYnBfdG1sYWJlbHtcclxuICAgIG1hcmdpbjowcHggMHB4IDVweCAwcHghaW1wb3J0YW50O1xyXG4gICAgIFxyXG59XHJcblxyXG4uZmxvYXQtcmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG4uZm9udC0xMHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uYm9sZHtcclxuICAgIC8qIGZvbnQtc2l6ZToxNnB4OyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnBhbmVsaGlnaHR7XHJcbiAgICBtaW4taGVpZ2h0OiA0NzVweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4jYmFyX2NoYXJ0IHtcclxuICAgIHdpZHRoXHRcdDogMTAwJTtcclxuICAgIGhlaWdodFx0XHQ6IDQwMHB4O1xyXG4gICAgZm9udC1zaXplXHQ6IDExcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/main/main.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\r\n<section class=\"content home\">\r\n  <div class=\"block-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-5 col-sm-12\">\r\n        <h2>Dashboard\r\n          <small>Welcome to Doctor Admin </small>\r\n        </h2>\r\n      </div>\r\n      <div class=\"col-lg-7 col-md-7 col-sm-12 text-right\">\r\n        <ul class=\"breadcrumb float-md-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/dashboard/main\"><i class=\"zmdi zmdi-home\"></i> Doctor</a></li>\r\n          <li class=\"breadcrumb-item active\">Dashboard</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"card\">\r\n          <div class=\"body\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12 text-center\">\r\n                <div class=\"body\" style=\"font-weight: bold; font-size:20px\">{{appoinment.Booked}}\r\n                  <p style=\"font-weight: bold; font-size:20px\" class=\"text-muted\"><i class=\"zmdi zmdi-book\"></i> Bookings</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12 text-center\">\r\n                <div class=\"body\" style=\"font-weight: bold; font-size:20px\">{{appoinment.Cancel}}\r\n                  <p style=\"font-weight: bold; font-size:20px\" class=\"text-muted\"><i class=\"zmdi zmdi-close-circle\"></i> Cancellations</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12 text-center\">\r\n                <div class=\"body\" style=\"font-weight: bold; font-size:20px\">{{appoinment.Checkout}}\r\n                  <p style=\"font-weight: bold; font-size:20px\" class=\"text-muted\"><i class=\"zmdi zmdi-check-circle\"></i> Checkouts</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Weekly</strong> Report</h2>\r\n            <ul class=\"header-dropdown\">\r\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\r\n                  <li><a href=\"javascript:void(0);\">Edit</a></li>\r\n                  <li><a href=\"javascript:void(0);\">Delete</a></li>\r\n                  <li><a href=\"javascript:void(0);\">Report</a></li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"body\">\r\n            <div class=\"row text-center\">\r\n            </div>\r\n            <div id=\"bar_chart\" class=\"graph\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <input type=\"date\"  \r\n       [ngModel]=\"today | date:'yyyy-MM-dd'\"     \r\n       name=\"dt\" \r\n       class=\"form-control form-control-rounded\" #searchDate \r\n> -->\r\n</section>"

/***/ }),

/***/ "./src/app/dashboard/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.service */ "./src/app/dashboard/main/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var amcharts3_angular2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amcharts3-angular2 */ "./node_modules/amcharts3-angular2/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(AmCharts, main, router, storage) {
        this.AmCharts = AmCharts;
        this.main = main;
        this.router = router;
        this.storage = storage;
        this.liveFeedData = [];
        this.appoinment = [];
        this.weekly = [];
        this.bookingsData = [];
        this.yearlyreport = [];
        this.today = new Date();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.countappoinment();
        this.barchart();
        this.countappointmentloop();
        this.now = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD');
        console.log("DATEeeee :", this.now);
        //   this.today = new Date().toISOString().split('T')[0];
        //   var date = new Date(this.date.transform(date,"yyyy-MM-dd"));
        //   console.log(this.date.transform(date,"yyyy-MM-dd")); //output : 2018-02-13
        $("body").removeClass("authentication sidebar-collapse");
        $(function () {
            //   initDonutChart();
            //   MorrisArea();
            Jknob();
            initCounters();
            initSparkline();
            menuToggle();
        });
        function initDonutChart() {
            Morris.Donut({
                element: 'donut_chart',
                data: [{
                        label: 'Chrome',
                        value: 37
                    }, {
                        label: 'Firefox',
                        value: 30
                    }, {
                        label: 'Safari',
                        value: 18
                    }, {
                        label: 'Opera',
                        value: 12
                    },
                    {
                        label: 'Other',
                        value: 3
                    }
                ],
                colors: ['#93e3ff', '#b0dd91', '#ffe699', '#f8cbad', '#a4a4a4'],
                formatter: function (y) {
                    return y + '%';
                }
            });
        }
        function Jknob() {
            $('.knob').knob({
                draw: function () {
                    // 'tron" case
                    if (this.$.data('skin') === 'tron') {
                        var a = this.angle(this.cv) // Angle
                        , r = true;
                        var sa = this.startAngle // Previous start angle
                        , sat = this.startAngle // Start angle
                        , ea = void 0 // Previous end angle
                        , eat = sat + a // End angle
                        ;
                        this.g.lineWidth = this.lineWidth;
                        this.o.cursor &&
                            (sat = eat - 0.3) &&
                            (eat = eat + 0.3);
                        if (this.o.displayPrevious) {
                            ea = this.startAngle + this.angle(this.value);
                            this.o.cursor &&
                                (sa = ea - 0.3) &&
                                (ea = ea + 0.3);
                            this.g.beginPath();
                            this.g.strokeStyle = this.previousColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                            this.g.stroke();
                        }
                        this.g.beginPath();
                        this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                        this.g.stroke();
                        this.g.lineWidth = 2;
                        this.g.beginPath();
                        this.g.strokeStyle = this.o.fgColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                        this.g.stroke();
                        return false;
                    }
                }
            });
        }
        // Counters JS
        function initCounters() {
            $('.count-to').countTo();
        }
        // Sparkline
        function initSparkline() {
            $('.sparkline').each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        $(window).on('scroll', function () {
            $('.card .sparkline').each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass('pullUp');
                }
            });
        });
        $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            backgroundColor: 'transparent',
            regionStyle: {
                initial: {
                    fill: 'rgba(210, 214, 222, 1)',
                    'fill-opacity': 1,
                    stroke: 'none',
                    'stroke-width': 0,
                    'stroke-opacity': 1
                },
                hover: {
                    fill: 'rgba(255, 193, 7, 2)',
                    cursor: 'pointer'
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: {}
            },
            markerStyle: {
                initial: {
                    fill: '#fff',
                    stroke: '#FFC107 '
                }
            },
            markers: [{
                    latLng: [37.09, -95.71],
                    name: 'America'
                },
                {
                    latLng: [51.16, 10.45],
                    name: 'Germany'
                },
                {
                    latLng: [-25.27, 133.77],
                    name: 'Australia'
                },
                {
                    latLng: [56.13, -106.34],
                    name: 'Canada'
                },
                {
                    latLng: [20.59, 78.96],
                    name: 'India'
                },
                {
                    latLng: [55.37, -3.43],
                    name: 'United Kingdom'
                },
            ]
        });
        $.each($('.menu .list li.active'), function (i, val) {
            var $activeAnchors = $(val).find('a:eq(0)');
            $activeAnchors.addClass('toggled');
            $activeAnchors.next().show();
        });
        $('.ml-menu li a').on('click', function () {
            $(this).addClass('toggled');
        });
        $('.sidebar .menu .list').slimscroll({
            height: 'calc(100vh - 65px)',
            color: 'rgba(0,0,0,0.2)',
            position: 'left',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '0'
        });
        $('.ls-toggle-btn').on('click', function () {
            $('body').toggleClass('ls-toggle-menu');
        });
        $('.boxs-close').on('click', function () {
            var element = $(this);
            var cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });
        function menuToggle() {
            // Collapse or Expand Menu
            $('.menu-toggle').on('click', function (e) {
                var $this = $(this);
                var $content = $this.next();
                if ($($this.parents('ul')[0]).hasClass('list')) {
                    var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
                    $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                        if ($(val).is(':visible')) {
                            $(val).prev().toggleClass('toggled');
                            $(val).slideUp();
                        }
                    });
                }
                $this.toggleClass('toggled');
                $content.slideToggle(320);
            });
        }
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MainComponent.prototype.countappointmentloop = function () {
        var _this = this;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(5000).subscribe(function (x) {
            _this.countappoinment();
        });
    };
    MainComponent.prototype.countappoinment = function () {
        var _this = this;
        var body = {
            "doctor_id": this.storage.retrieve('doctor_id'),
            "business_id": this.storage.retrieve('business_id'),
            "business_date": moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD'),
        };
        console.log(body);
        this.main.countappoinment(body).subscribe(function (Response) {
            if (Response.Message_Code == "TCS") {
                _this.appoinment = Response.output;
                console.log("appointment bookings cancel checked ", _this.appoinment);
            }
        });
    };
    // weeklyerport(){
    //     let body={
    //      "business_id": this.storage.retrieve('business_id'),
    // 	 "doctor_id": this.storage.retrieve('doctor_id')
    //     }
    //     this.main.weeklyreport1(body).subscribe((Response:any)=>{
    //         if(Response.Message_Code=="TNS"){
    //             this.weekly=Response.ReturnValue;
    //                 // Morris.Area({
    //                 //     element: 'area_chart',
    //                 //     data: this.weekly,
    //                 //     lineColors: ['#616161', '#00ced1', '#ff758e'],
    //                 //     xkey: 'period',
    //                 //     ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //     labels: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //     pointSize: 0,
    //                 //     lineWidth: 0,
    //                 //     resize: true,
    //                 //     fillOpacity: 0.8,
    //                 //     behaveLikeLine: true,
    //                 //     gridLineColor: '#e0e0e0',
    //                 //     hideHover: 'auto'
    //                 // });
    //                 // Morris.Bar ({
    //                 //   element: 'bar_chart1',
    //                 //   data: this.weekly,
    //                 //   xkey: 'period',
    //                 //   ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //   labels: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //   barRatio: 0.4,
    //                 //   xLabelAngle: 35,
    //                 //   hideHover: 'auto',
    //                 //   barColors: function (row, series, type) {
    //                 //     if(row.label == "s1") return "#AD1D28";
    //                 //     else if(row.label == "s2") return "#DEBB27";
    //                 //     else if(row.label == "s3") return "#fec04c";
    //                 //   }
    //                 // });
    //                 // Morris.Bar ({
    //                 //     element: 'bar-chart',
    //                 //     data: this.weekly,
    //                 //     xkey: 'period',
    //                 //     ykeys: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //     labels: ['Checked_out', 'booked_count', 'canceled_count'],
    //                 //     barRatio: 0.4,
    //                 //     xLabelAngle: 35,
    //                 //     hideHover: 'auto',
    //                 //     barColors: function (row, series, type) {
    //                 //       console.log("--> "+row.label, series, type);
    //                 //       if(row.label == "s1") return "#AD1D28";
    //                 //       else if(row.label == "s2") return "#DEBB27";
    //                 //       else if(row.label == "s3") return "#fec04c";
    //                 //     }
    //                 //   });
    //         }
    //     })
    // }
    MainComponent.prototype.barchart = function () {
        var _this = this;
        var body = {
            "business_id": this.storage.retrieve('business_id'),
            "doctor_id": this.storage.retrieve('doctor_id')
        };
        this.main.weeklyreport(body).subscribe(function (Response) {
            if (Response.Message_Code == "TNS") {
                _this.weekly = Response.ReturnValue;
                console.log("bar chart", _this.weekly);
                Morris.Bar({
                    element: 'bar_chart',
                    data: _this.weekly,
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
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/dashboard/main/main.component.html"),
            providers: [_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], amcharts3_angular2__WEBPACK_IMPORTED_MODULE_4__["AmChartsService"]],
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/dashboard/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [amcharts3_angular2__WEBPACK_IMPORTED_MODULE_4__["AmChartsService"], _main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/main/main.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/main/main.service.ts ***!
  \************************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
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


var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.countappoinment = function (count) {
        return this.http.post("https://doctorappnew.herokuapp.com/CountAppoinment", count);
    };
    MainService.prototype.weeklyreport = function (week) {
        return this.http.post("https://doctorappnew.herokuapp.com/Weeklyreport", week);
    };
    MainService.prototype.GetTime = function (DateTime) {
        var month = (DateTime.getMonth() < 10) ? "0" + (DateTime.getMonth() + 1) : (DateTime.getMonth() + 1);
        var day = (DateTime.getDate() < 10) ? "0" + DateTime.getMonth() : DateTime.getMonth();
        var hour = (DateTime.getHours() < 10) ? "0" + DateTime.getHours() : DateTime.getHours();
        var minute = (DateTime.getMinutes() < 10) ? "0" + DateTime.getMinutes() : DateTime.getMinutes();
        var second = (DateTime.getSeconds() < 10) ? "0" + DateTime.getSeconds() : DateTime.getSeconds();
        return DateTime.getDate() + "." + month + "." + DateTime.getFullYear() + " " + hour + ":" + minute + ":" + second;
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/dashboard/rtl/rtl.component.css":
/*!*************************************************!*\
  !*** ./src/app/dashboard/rtl/rtl.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Cairo:400,600,700\");\nbody.rtl{font-family:'Cairo', sans-serif}\n.rtl{direction:rtl}\n.rtl ul{padding:0}\n.rtl.ls-closed .sidebar{margin-right:-300px}\n.rtl.overlay-open .sidebar{margin-right:0}\n.rtl.ls-toggle-menu .sidebar{margin-right:-300px}\n.rtl.ls-toggle-menu section.content{margin-right:0px}\n.rtl section.content{margin:60px 250px 0px 0px}\n.rtl .right-sidebar{left:-300px}\n.rtl .right-sidebar.open{left:0;right:auto}\n.rtl .sidebar{right:0;left:auto}\n.rtl .dropdown-menu .header{text-align:center}\n.rtl .dropdown-menu ul.menu.tasks h4 small{float:left}\n.rtl .dropdown-menu ul.menu .menu-info{margin-right:10px;margin-left:0;text-align:right}\n.rtl .dropdown-menu ul.menu li a{text-align:right}\n.rtl .navbar-nav .float-right{float:left !important}\n.rtl .navbar-nav>li{float:right}\n.rtl .navbar-nav>li>a{margin-left:0}\n.rtl .navbar{left:0;right:auto}\n.rtl .navbar .navbar-header{float:right;padding-right:15px;padding-left:0}\n.rtl .navbar .navbar-header .navbar-brand{margin-right:0px;margin-top:14px}\n.rtl .navbar .navbar-header .navbar-brand span{margin-right:10px}\n.rtl .navbar .navbar-left .dropdown-menu{left:auto}\n.rtl .navbar .navbar-left .dropdown-menu .menu li a{text-align:center}\n.rtl .navbar .dropdown-menu:before{left:10px;right:auto}\n.rtl .sidebar .menu .list .header:before{left:auto;right:0}\n.rtl .sidebar .menu .list .menu-toggle:before,.rtl .sidebar .menu .list .menu-toggle:after{left:17px;right:auto}\n.rtl .sidebar .menu .list a span{margin:0  12px 0 0}\n.rtl .sidebar .menu .list .ml-menu li a{padding-right:40px;padding-left:10px}\n.rtl .sidebar .menu .list .ml-menu li a::before{content:'\\f30f';right:14px;left:auto;transform:scale(-1, 1);-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1)}\n.rtl .right_chat ul .media .media-object{margin-left:10px;margin-right:0px}\n.rtl .right_chat ul .media .status{right:0;left:auto}\n.rtl .right-sidebar #settings .setting-list li .switch{left:5px;right:auto}\n.rtl .card .header .header-dropdown{right:auto;left:12px}\n.rtl .card .header .header-dropdown ul.dropdown-menu{left:0;right:auto}\n.rtl .widget_2 li{border-left:1px solid #eee;border-right:none}\n.rtl .widget_2 li .text-right{text-align:left !important}\n.rtl .widget_2 li .text-small{font-size:14px}\n.rtl #line_chart{height:375px !important}\n.rtl .table thead tr th,.rtl .table thead tr td{text-align:right}\n.rtl .card .header h2::before{right:-20px;left:auto}\n.rtl .progress-container .progress .progress-value{right:auto;left:6px}\n.rtl .activity li a i{float:right}\n.rtl .activity li a .info{margin-right:50px;margin-left:0px}\n.rtl .checkbox label,.rtl .radio label{padding-right:35px;padding-left:0px}\n.rtl .checkbox label:before,.rtl .checkbox label:after{right:0;left:auto}\n.rtl .form-control{border-radius:0 30px 30px 0 !important;border-left:transparent !important}\n.rtl .input-group-addon{border-radius:30px 0 0 30px !important;border-right:transparent !important;padding:10px 0px 10px 18px !important}\n.rtl .team-info li+li{z-index:99;position:relative}\n@media screen and (max-width: 1169px){.rtl section.content{margin-right:15px}.rtl .navbar .navbar-header .navbar-brand{margin-right:30px;margin-left:10px}.rtl.ls-closed .bars:after,.rtl.ls-closed .bars:before{right:0px;left:auto}.rtl .navbar>.container .navbar-brand,.rtl .navbar>.container-fluid .navbar-brand{margin-right:20px;margin-left:0}}\n@media screen and (max-width: 767px){.rtl.ls-closed .bars:after,.rtl.ls-closed .bars:before{margin-right:0}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3J0bC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQUMsU0FBUywrQkFBK0I7QUFBQyxLQUFLLGFBQWE7QUFBQyxRQUFRLFNBQVM7QUFBQyx3QkFBd0IsbUJBQW1CO0FBQUMsMkJBQTJCLGNBQWM7QUFBQyw2QkFBNkIsbUJBQW1CO0FBQUMsb0NBQW9DLGdCQUFnQjtBQUFDLHFCQUFxQix5QkFBeUI7QUFBQyxvQkFBb0IsV0FBVztBQUFDLHlCQUF5QixNQUFNLENBQUMsVUFBVTtBQUFDLGNBQWMsT0FBTyxDQUFDLFNBQVM7QUFBQyw0QkFBNEIsaUJBQWlCO0FBQUMsMkNBQTJDLFVBQVU7QUFBQyx1Q0FBdUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtBQUFDLGlDQUFpQyxnQkFBZ0I7QUFBQyw4QkFBOEIscUJBQXFCO0FBQUMsb0JBQW9CLFdBQVc7QUFBQyxzQkFBc0IsYUFBYTtBQUFDLGFBQWEsTUFBTSxDQUFDLFVBQVU7QUFBQyw0QkFBNEIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGNBQWM7QUFBQywwQ0FBMEMsZ0JBQWdCLENBQUMsZUFBZTtBQUFDLCtDQUErQyxpQkFBaUI7QUFBQyx5Q0FBeUMsU0FBUztBQUFDLG9EQUFvRCxpQkFBaUI7QUFBQyxtQ0FBbUMsU0FBUyxDQUFDLFVBQVU7QUFBQyx5Q0FBeUMsU0FBUyxDQUFDLE9BQU87QUFBQywyRkFBMkYsU0FBUyxDQUFDLFVBQVU7QUFBQyxpQ0FBaUMsa0JBQWtCO0FBQUMsd0NBQXdDLGtCQUFrQixDQUFDLGlCQUFpQjtBQUFDLGdEQUFnRCxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsQ0FBQywwQkFBMEI7QUFBQyx5Q0FBeUMsZ0JBQWdCLENBQUMsZ0JBQWdCO0FBQUMsbUNBQW1DLE9BQU8sQ0FBQyxTQUFTO0FBQUMsdURBQXVELFFBQVEsQ0FBQyxVQUFVO0FBQUMsb0NBQW9DLFVBQVUsQ0FBQyxTQUFTO0FBQUMscURBQXFELE1BQU0sQ0FBQyxVQUFVO0FBQUMsa0JBQWtCLDBCQUEwQixDQUFDLGlCQUFpQjtBQUFDLDhCQUE4QiwwQkFBMEI7QUFBQyw4QkFBOEIsY0FBYztBQUFDLGlCQUFpQix1QkFBdUI7QUFBQyxnREFBZ0QsZ0JBQWdCO0FBQUMsOEJBQThCLFdBQVcsQ0FBQyxTQUFTO0FBQUMsbURBQW1ELFVBQVUsQ0FBQyxRQUFRO0FBQUMsc0JBQXNCLFdBQVc7QUFBQywwQkFBMEIsaUJBQWlCLENBQUMsZUFBZTtBQUFDLHVDQUF1QyxrQkFBa0IsQ0FBQyxnQkFBZ0I7QUFBQyx1REFBdUQsT0FBTyxDQUFDLFNBQVM7QUFBQyxtQkFBbUIsc0NBQXNDLENBQUMsa0NBQWtDO0FBQUMsd0JBQXdCLHNDQUFzQyxDQUFDLG1DQUFtQyxDQUFDLHFDQUFxQztBQUFDLHNCQUFzQixVQUFVLENBQUMsaUJBQWlCO0FBQUMsc0NBQXNDLHFCQUFxQixpQkFBaUIsQ0FBQywwQ0FBMEMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsdURBQXVELFNBQVMsQ0FBQyxTQUFTLENBQUMsa0ZBQWtGLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztBQUFDLHFDQUFxQyx1REFBdUQsY0FBYyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3J0bC9ydGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhaXJvOjQwMCw2MDAsNzAwXCIpO2JvZHkucnRse2ZvbnQtZmFtaWx5OidDYWlybycsIHNhbnMtc2VyaWZ9LnJ0bHtkaXJlY3Rpb246cnRsfS5ydGwgdWx7cGFkZGluZzowfS5ydGwubHMtY2xvc2VkIC5zaWRlYmFye21hcmdpbi1yaWdodDotMzAwcHh9LnJ0bC5vdmVybGF5LW9wZW4gLnNpZGViYXJ7bWFyZ2luLXJpZ2h0OjB9LnJ0bC5scy10b2dnbGUtbWVudSAuc2lkZWJhcnttYXJnaW4tcmlnaHQ6LTMwMHB4fS5ydGwubHMtdG9nZ2xlLW1lbnUgc2VjdGlvbi5jb250ZW50e21hcmdpbi1yaWdodDowcHh9LnJ0bCBzZWN0aW9uLmNvbnRlbnR7bWFyZ2luOjYwcHggMjUwcHggMHB4IDBweH0ucnRsIC5yaWdodC1zaWRlYmFye2xlZnQ6LTMwMHB4fS5ydGwgLnJpZ2h0LXNpZGViYXIub3BlbntsZWZ0OjA7cmlnaHQ6YXV0b30ucnRsIC5zaWRlYmFye3JpZ2h0OjA7bGVmdDphdXRvfS5ydGwgLmRyb3Bkb3duLW1lbnUgLmhlYWRlcnt0ZXh0LWFsaWduOmNlbnRlcn0ucnRsIC5kcm9wZG93bi1tZW51IHVsLm1lbnUudGFza3MgaDQgc21hbGx7ZmxvYXQ6bGVmdH0ucnRsIC5kcm9wZG93bi1tZW51IHVsLm1lbnUgLm1lbnUtaW5mb3ttYXJnaW4tcmlnaHQ6MTBweDttYXJnaW4tbGVmdDowO3RleHQtYWxpZ246cmlnaHR9LnJ0bCAuZHJvcGRvd24tbWVudSB1bC5tZW51IGxpIGF7dGV4dC1hbGlnbjpyaWdodH0ucnRsIC5uYXZiYXItbmF2IC5mbG9hdC1yaWdodHtmbG9hdDpsZWZ0ICFpbXBvcnRhbnR9LnJ0bCAubmF2YmFyLW5hdj5saXtmbG9hdDpyaWdodH0ucnRsIC5uYXZiYXItbmF2PmxpPmF7bWFyZ2luLWxlZnQ6MH0ucnRsIC5uYXZiYXJ7bGVmdDowO3JpZ2h0OmF1dG99LnJ0bCAubmF2YmFyIC5uYXZiYXItaGVhZGVye2Zsb2F0OnJpZ2h0O3BhZGRpbmctcmlnaHQ6MTVweDtwYWRkaW5nLWxlZnQ6MH0ucnRsIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZHttYXJnaW4tcmlnaHQ6MHB4O21hcmdpbi10b3A6MTRweH0ucnRsIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZCBzcGFue21hcmdpbi1yaWdodDoxMHB4fS5ydGwgLm5hdmJhciAubmF2YmFyLWxlZnQgLmRyb3Bkb3duLW1lbnV7bGVmdDphdXRvfS5ydGwgLm5hdmJhciAubmF2YmFyLWxlZnQgLmRyb3Bkb3duLW1lbnUgLm1lbnUgbGkgYXt0ZXh0LWFsaWduOmNlbnRlcn0ucnRsIC5uYXZiYXIgLmRyb3Bkb3duLW1lbnU6YmVmb3Jle2xlZnQ6MTBweDtyaWdodDphdXRvfS5ydGwgLnNpZGViYXIgLm1lbnUgLmxpc3QgLmhlYWRlcjpiZWZvcmV7bGVmdDphdXRvO3JpZ2h0OjB9LnJ0bCAuc2lkZWJhciAubWVudSAubGlzdCAubWVudS10b2dnbGU6YmVmb3JlLC5ydGwgLnNpZGViYXIgLm1lbnUgLmxpc3QgLm1lbnUtdG9nZ2xlOmFmdGVye2xlZnQ6MTdweDtyaWdodDphdXRvfS5ydGwgLnNpZGViYXIgLm1lbnUgLmxpc3QgYSBzcGFue21hcmdpbjowICAxMnB4IDAgMH0ucnRsIC5zaWRlYmFyIC5tZW51IC5saXN0IC5tbC1tZW51IGxpIGF7cGFkZGluZy1yaWdodDo0MHB4O3BhZGRpbmctbGVmdDoxMHB4fS5ydGwgLnNpZGViYXIgLm1lbnUgLmxpc3QgLm1sLW1lbnUgbGkgYTo6YmVmb3Jle2NvbnRlbnQ6J1xcZjMwZic7cmlnaHQ6MTRweDtsZWZ0OmF1dG87dHJhbnNmb3JtOnNjYWxlKC0xLCAxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgtMSwgMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgtMSwgMSl9LnJ0bCAucmlnaHRfY2hhdCB1bCAubWVkaWEgLm1lZGlhLW9iamVjdHttYXJnaW4tbGVmdDoxMHB4O21hcmdpbi1yaWdodDowcHh9LnJ0bCAucmlnaHRfY2hhdCB1bCAubWVkaWEgLnN0YXR1c3tyaWdodDowO2xlZnQ6YXV0b30ucnRsIC5yaWdodC1zaWRlYmFyICNzZXR0aW5ncyAuc2V0dGluZy1saXN0IGxpIC5zd2l0Y2h7bGVmdDo1cHg7cmlnaHQ6YXV0b30ucnRsIC5jYXJkIC5oZWFkZXIgLmhlYWRlci1kcm9wZG93bntyaWdodDphdXRvO2xlZnQ6MTJweH0ucnRsIC5jYXJkIC5oZWFkZXIgLmhlYWRlci1kcm9wZG93biB1bC5kcm9wZG93bi1tZW51e2xlZnQ6MDtyaWdodDphdXRvfS5ydGwgLndpZGdldF8yIGxpe2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZWVlO2JvcmRlci1yaWdodDpub25lfS5ydGwgLndpZGdldF8yIGxpIC50ZXh0LXJpZ2h0e3RleHQtYWxpZ246bGVmdCAhaW1wb3J0YW50fS5ydGwgLndpZGdldF8yIGxpIC50ZXh0LXNtYWxse2ZvbnQtc2l6ZToxNHB4fS5ydGwgI2xpbmVfY2hhcnR7aGVpZ2h0OjM3NXB4ICFpbXBvcnRhbnR9LnJ0bCAudGFibGUgdGhlYWQgdHIgdGgsLnJ0bCAudGFibGUgdGhlYWQgdHIgdGR7dGV4dC1hbGlnbjpyaWdodH0ucnRsIC5jYXJkIC5oZWFkZXIgaDI6OmJlZm9yZXtyaWdodDotMjBweDtsZWZ0OmF1dG99LnJ0bCAucHJvZ3Jlc3MtY29udGFpbmVyIC5wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWV7cmlnaHQ6YXV0bztsZWZ0OjZweH0ucnRsIC5hY3Rpdml0eSBsaSBhIGl7ZmxvYXQ6cmlnaHR9LnJ0bCAuYWN0aXZpdHkgbGkgYSAuaW5mb3ttYXJnaW4tcmlnaHQ6NTBweDttYXJnaW4tbGVmdDowcHh9LnJ0bCAuY2hlY2tib3ggbGFiZWwsLnJ0bCAucmFkaW8gbGFiZWx7cGFkZGluZy1yaWdodDozNXB4O3BhZGRpbmctbGVmdDowcHh9LnJ0bCAuY2hlY2tib3ggbGFiZWw6YmVmb3JlLC5ydGwgLmNoZWNrYm94IGxhYmVsOmFmdGVye3JpZ2h0OjA7bGVmdDphdXRvfS5ydGwgLmZvcm0tY29udHJvbHtib3JkZXItcmFkaXVzOjAgMzBweCAzMHB4IDAgIWltcG9ydGFudDtib3JkZXItbGVmdDp0cmFuc3BhcmVudCAhaW1wb3J0YW50fS5ydGwgLmlucHV0LWdyb3VwLWFkZG9ue2JvcmRlci1yYWRpdXM6MzBweCAwIDAgMzBweCAhaW1wb3J0YW50O2JvcmRlci1yaWdodDp0cmFuc3BhcmVudCAhaW1wb3J0YW50O3BhZGRpbmc6MTBweCAwcHggMTBweCAxOHB4ICFpbXBvcnRhbnR9LnJ0bCAudGVhbS1pbmZvIGxpK2xpe3otaW5kZXg6OTk7cG9zaXRpb246cmVsYXRpdmV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE2OXB4KXsucnRsIHNlY3Rpb24uY29udGVudHttYXJnaW4tcmlnaHQ6MTVweH0ucnRsIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIgLm5hdmJhci1icmFuZHttYXJnaW4tcmlnaHQ6MzBweDttYXJnaW4tbGVmdDoxMHB4fS5ydGwubHMtY2xvc2VkIC5iYXJzOmFmdGVyLC5ydGwubHMtY2xvc2VkIC5iYXJzOmJlZm9yZXtyaWdodDowcHg7bGVmdDphdXRvfS5ydGwgLm5hdmJhcj4uY29udGFpbmVyIC5uYXZiYXItYnJhbmQsLnJ0bCAubmF2YmFyPi5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZHttYXJnaW4tcmlnaHQ6MjBweDttYXJnaW4tbGVmdDowfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LnJ0bC5scy1jbG9zZWQgLmJhcnM6YWZ0ZXIsLnJ0bC5scy1jbG9zZWQgLmJhcnM6YmVmb3Jle21hcmdpbi1yaWdodDowfX1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/rtl/rtl.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/rtl/rtl.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<section class=\"content\">\n  <div class=\"block-header\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <h2>Dashboard\n          <small>Welcome to Oreo</small>\n        </h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>hello السلام عليكم</h2>\n          </div>\n          <div class=\"body\">\n            <p>أبجد هوز هو مجرد دمية النص من صناعة الطباعة والتنضيد. وكان أبجد هوز نص الدمية القياسية في هذه الصناعة من أي وقت مضى منذ 1500s، عندما استغرقت طابعة غير معروفة المطبخ من نوع وسارعت لجعل كتاب عينة نوع. وقد نجا ليس فقط خمسة قرون، ولكن أيضا قفزة في التنضيد الإلكترونية، وتبقى دون تغيير أساسا. وقد شاع في 1960s مع الافراج عن أوراق ليتراسيت تحتوي على مقاطع أبجد هوز، ومؤخرا مع برامج النشر المكتبي مثل ألدوس باجيماكر بما في ذلك إصدارات أبجد هوز.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body text-center\">\n            <div class=\"sparkline m-b-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"40px\" data-bar-Width=\"3\" data-bar-Spacing=\"5\" data-bar-Color=\"#00ced1\">1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1</div>\n            <h3 class=\"m-b-0\">457 512</h3>\n            <small class=\"displayblock\">47% Average <i class=\"zmdi zmdi-trending-up\"></i></small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body text-center\">\n            <div class=\"sparkline m-b-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"40px\" data-bar-Width=\"3\" data-bar-Spacing=\"5\" data-bar-Color=\"#e4d354\">1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1</div>\n            <h3 class=\"m-b-0\">236 512</h3>\n            <small class=\"displayblock\">13% Average <i class=\"zmdi zmdi-trending-down\"></i></small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body text-center\">\n            <div class=\"sparkline m-b-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"40px\" data-bar-Width=\"3\" data-bar-Spacing=\"5\" data-bar-Color=\"#7cb5ec\">1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,7,6,5,4</div>\n            <h3 class=\"m-b-0\">236 512</h3>\n            <small class=\"displayblock\">47% Average <i class=\"zmdi zmdi-trending-up\"></i></small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body text-center\">\n            <div class=\"sparkline m-b-20\" data-type=\"bar\" data-width=\"97%\" data-height=\"40px\" data-bar-Width=\"3\" data-bar-Spacing=\"5\" data-bar-Color=\"#f15c80\">8,7,6,5,4,3,2,2,3,4,5,6,7,8,7,6,5,4</div>\n            <h3 class=\"m-b-0\">236 512</h3>\n            <small class=\"displayblock\">47% Average <i class=\"zmdi zmdi-trending-up\"></i></small>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-8 col-md-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>Report <strong>Product</strong></h2>\n          </div>\n          <div class=\"body\">\n            <canvas id=\"line_chart\" height=\"150\"></canvas>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>Analysis <strong>Income</strong><small>18% High then last month</small></h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"3\" data-highlight-Spot-Color=\"rgb(233, 30, 99)\" data-highlight-Line-Color=\"#222\"\n                 data-min-Spot-Color=\"rgb(233, 30, 99)\" data-max-Spot-Color=\"rgb(96, 125, 139)\" data-spot-Color=\"rgb(96, 125, 139, 0.7)\"\n                 data-offset=\"90\" data-width=\"100%\" data-height=\"132px\" data-line-Width=\"1\" data-line-Color=\"rgb(96, 125, 139, 0.7)\"\n                 data-fill-Color=\"rgba(96, 125, 139, 0.3)\"> 6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6 </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>Analysis <strong>Income</strong></h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp\">\n                  <li><a href=\"javascript:void(0);\">Action</a></li>\n                  <li><a href=\"javascript:void(0);\">Another action</a></li>\n                  <li><a href=\"javascript:void(0);\">Something else</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <div class=\"sparkline\" data-type=\"bar\" data-width=\"97%\" data-height=\"65px\" data-bar-Width=\"5\" data-bar-Spacing=\"4\" data-bar-Color=\"rgb(0, 0, 0)\"> 6,7,8,6,7,5,8,5,6,8,5,6,7,6,8,7,6,7,5,8,5,6</div>\n            <p class=\"m-b-0 p-t-10 text-center\">Last Year 2016</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix social-widget\">\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect facebook-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-facebook\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Like</div>\n            <div class=\"number\">123</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect instagram-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-instagram\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Followers</div>\n            <div class=\"number\">231</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect twitter-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-twitter\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Followers</div>\n            <div class=\"number\">31</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect google-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-google\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Like</div>\n            <div class=\"number\">254</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect linkedin-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-linkedin\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Followers</div>\n            <div class=\"number\">2510</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-2 col-md-4 col-6\">\n        <div class=\"card info-box-2 hover-zoom-effect behance-widget\">\n          <div class=\"icon\"><i class=\"zmdi zmdi-behance\"></i></div>\n          <div class=\"content\">\n            <div class=\"text\">Project</div>\n            <div class=\"number\">121</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>Media <strong>Social</strong></h2>\n            <ul class=\"header-dropdown\">\n              <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i> </a>\n                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                  <li><a href=\"javascript:void(0);\">Edit</a></li>\n                  <li><a href=\"javascript:void(0);\">Delete</a></li>\n                  <li><a href=\"javascript:void(0);\">Report</a></li>\n                </ul>\n              </li>\n              <li class=\"remove\">\n                <a role=\"button\" class=\"boxs-close\"><i class=\"zmdi zmdi-close\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"body\">\n            <div class=\"table-responsive social_media_table\">\n              <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                  <th>Media</th>\n                  <th>Name</th>\n                  <th>Like</th>\n                  <th>Comments</th>\n                  <th>Share</th>\n                  <th>Members</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><span class=\"social_icon linkedin\"><i class=\"zmdi zmdi-linkedin\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Linked In</span>\n                    <span class=\"text-muted\">Florida, United States</span>\n                  </td>\n                  <td>19K</td>\n                  <td>14K</td>\n                  <td>10K</td>\n                  <td>\n                    <span class=\"badge badge-success\">2341</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon twitter-table\"><i class=\"zmdi zmdi-twitter\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Twitter</span>\n                    <span class=\"text-muted\">Arkansas, United States</span>\n                  </td>\n                  <td>7K</td>\n                  <td>11K</td>\n                  <td>21K</td>\n                  <td>\n                    <span class=\"badge badge-success\">952</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon facebook\"><i class=\"zmdi zmdi-facebook\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Facebook</span>\n                    <span class=\"text-muted\">Illunois, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>8K</td>\n                  <td>\n                    <span class=\"badge badge-success\">6127</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon google\"><i class=\"zmdi zmdi-google-plus\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">Google Plus</span>\n                    <span class=\"text-muted\">Arizona, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>154</td>\n                  <td>\n                    <span class=\"badge badge-success\">325</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td><span class=\"social_icon youtube\"><i class=\"zmdi zmdi-youtube-play\"></i></span>\n                  </td>\n                  <td><span class=\"list-name\">YouTube</span>\n                    <span class=\"text-muted\">Alaska, United States</span>\n                  </td>\n                  <td>15K</td>\n                  <td>18K</td>\n                  <td>200</td>\n                  <td>\n                    <span class=\"badge badge-success\">160</span>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/rtl/rtl.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/rtl/rtl.component.ts ***!
  \************************************************/
/*! exports provided: RtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlComponent", function() { return RtlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RtlComponent = /** @class */ (function () {
    function RtlComponent() {
    }
    RtlComponent.prototype.ngOnInit = function () {
        $(function () {
            new Chart(document.getElementById('line_chart'), getChartJs('line'));
            initSparkline();
            menuToggle();
        });
        // Sparkline
        function initSparkline() {
            $('.sparkline').each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        function getChartJs(type) {
            var config = null;
            if (type === 'line') {
                config = {
                    type: 'line',
                    data: {
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                        datasets: [{
                                label: 'My First dataset',
                                data: [28, 32, 39, 37, 42, 55, 50],
                                borderColor: 'rgba(102,165,226, 0.2)',
                                backgroundColor: 'rgba(102,165,226, 0.7)',
                                pointBorderColor: 'rgba(102,165,226, 0.5)',
                                pointBackgroundColor: 'rgba(102,165,226, 0.2)',
                                pointBorderWidth: 1
                            }, {
                                label: 'My Second dataset',
                                data: [40, 48, 50, 48, 63, 62, 71],
                                borderColor: 'rgba(140,147,154, 0.2)',
                                backgroundColor: 'rgba(140,147,154, 0.2)',
                                pointBorderColor: 'rgba(140,147,154, 0)',
                                pointBackgroundColor: 'rgba(140,147,154, 0.9)',
                                pointBorderWidth: 1
                            }]
                    },
                    options: {
                        responsive: true,
                        legend: false,
                    }
                };
            }
            return config;
        }
        $('.sidebar .menu .list').slimscroll({
            height: 'calc(100vh - 65px)',
            color: 'rgba(0,0,0,0.2)',
            position: 'left',
            size: '2px',
            alwaysVisible: false,
            borderRadius: '3px',
            railBorderRadius: '0'
        });
        function menuToggle() {
            console.log(typeof menuToggle);
            // Collapse or Expand Menu
            $('.menu-toggle').on('click', function (e) {
                var $this = $(this);
                var $content = $this.next();
                if ($($this.parents('ul')[0]).hasClass('list')) {
                    var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');
                    $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                        if ($(val).is(':visible')) {
                            $(val).prev().toggleClass('toggled');
                            $(val).slideUp();
                        }
                    });
                }
                $this.toggleClass('toggled');
                $content.slideToggle(320);
            });
        }
    };
    RtlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rtl',
            template: __webpack_require__(/*! ./rtl.component.html */ "./src/app/dashboard/rtl/rtl.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./rtl.component.css */ "./src/app/dashboard/rtl/rtl.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RtlComponent);
    return RtlComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map