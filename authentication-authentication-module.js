(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sing-in/sing-in.component */ "./src/app/authentication/sing-in/sing-in.component.ts");
/* harmony import */ var _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sing-up/sing-up.component */ "./src/app/authentication/sing-up/sing-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/authentication/forget-password/forget-password.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-offline/page-offline.component */ "./src/app/authentication/page-offline/page-offline.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'sign-in',
        component: _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_2__["SingInComponent"]
    },
    {
        path: 'sign-up',
        component: _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_3__["SingUpComponent"]
    },
    {
        path: 'forget-password',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgetPasswordComponent"]
    },
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"]
    },
    {
        path: '500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_6__["Page500Component"]
    },
    {
        path: 'page-offline',
        component: _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_7__["PageOfflineComponent"]
    },
    {
        path: 'locked',
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_8__["LockedComponent"]
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var _sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sing-in/sing-in.component */ "./src/app/authentication/sing-in/sing-in.component.ts");
/* harmony import */ var _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sing-up/sing-up.component */ "./src/app/authentication/sing-up/sing-up.component.ts");
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-password/forget-password.component */ "./src/app/authentication/forget-password/forget-password.component.ts");
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page404/page404.component */ "./src/app/authentication/page404/page404.component.ts");
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page500/page500.component */ "./src/app/authentication/page500/page500.component.ts");
/* harmony import */ var _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-offline/page-offline.component */ "./src/app/authentication/page-offline/page-offline.component.ts");
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locked/locked.component */ "./src/app/authentication/locked/locked.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authentication_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationRoutingModule"]
            ],
            declarations: [_sing_in_sing_in_component__WEBPACK_IMPORTED_MODULE_3__["SingInComponent"], _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_4__["SingUpComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordComponent"], _page404_page404_component__WEBPACK_IMPORTED_MODULE_6__["Page404Component"], _page500_page500_component__WEBPACK_IMPORTED_MODULE_7__["Page500Component"], _page_offline_page_offline_component__WEBPACK_IMPORTED_MODULE_8__["PageOfflineComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_9__["LockedComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JnZXQtcGFzc3dvcmQvZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRpb24gLm5fbG9nb3tkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhcnt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhciBhOm5vdCguYnRuKXtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgYSBpe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgLmJ0bntsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnR9LmF1dGhlbnRpY2F0aW9uIC5jaGVja2JveCBsYWJlbHtmb250LXNpemU6MTNweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2V7ZmxvYXQ6cmlnaHR9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXZ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpey5hdXRoZW50aWNhdGlvbiAuZm9vdGVyIG5hdntkaXNwbGF5OmJsb2NrO2Zsb2F0Om5vbmV9fVxuIl19 */"

/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Forgot Password?</h5>\n                        <span>Enter your e-mail address below to reset your password.</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-email\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SUBMIT</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/forget-password/forget-password.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forget-password/forget-password.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
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

var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
        this.year = (new Date()).getFullYear();
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/authentication/forget-password/forget-password.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/authentication/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/authentication/locked/locked.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2NrZWQvbG9ja2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRpb24gLm5fbG9nb3tkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhcnt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhciBhOm5vdCguYnRuKXtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgYSBpe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgLmJ0bntsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnR9LmF1dGhlbnRpY2F0aW9uIC5jaGVja2JveCBsYWJlbHtmb250LXNpemU6MTNweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2V7ZmxvYXQ6cmlnaHR9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXZ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpey5hdXRoZW50aWNhdGlvbiAuZm9vdGVyIG5hdntkaXNwbGF5OmJsb2NrO2Zsb2F0Om5vbmV9fVxuIl19 */"

/***/ }),

/***/ "./src/app/authentication/locked/locked.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n  <div class=\"container\">        \n      <div class=\"navbar-translate n_logo\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n          <button class=\"navbar-toggler\" type=\"button\">\n              <span class=\"navbar-toggler-bar bar1\"></span>\n              <span class=\"navbar-toggler-bar bar2\"></span>\n              <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n      </div>\n      <div class=\"navbar-collapse\">\n          <ul class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                      <i class=\"zmdi zmdi-twitter\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                      <i class=\"zmdi zmdi-facebook\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                  </a>\n              </li>\n              <li class=\"nav-item\">\n                  <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                      <i class=\"zmdi zmdi-instagram\"></i>\n                      <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                  </a>\n              </li>                \n              <li class=\"nav-item\">\n                  <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n  <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n  <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n          <div class=\"card-plain\">\n              <form class=\"form\" method=\"\" action=\"\">\n                  <div class=\"header\">\n                      <div class=\"logo-container\">\n                          <img class=\"rounded-circle img-raised\" src=\"assets/images/profile_av.jpg\" alt=\"\">\n                      </div>\n                      <h5>Michael</h5>\n                      <span>Locked</span>\n                  </div>\n                  <div class=\"content\">\n                      <div class=\"input-group input-lg\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Enter your Password\">\n                          <span class=\"input-group-addon\">\n                              <i class=\"zmdi zmdi-lock\"></i>\n                          </span>\n                      </div>\n                  </div>\n                  <div class=\"footer text-center\">\n                      <a routerLink=\"/authentication/sign-in\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">LOG IN</a>\n                      <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                  <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                  <li><a href=\"javascript:void(0);\">FAQ</a></li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy; {{year}},\n              <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n          </div>\n      </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/locked/locked.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.ts ***!
  \***********************************************************/
/*! exports provided: LockedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockedComponent", function() { return LockedComponent; });
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

var LockedComponent = /** @class */ (function () {
    function LockedComponent() {
        this.year = (new Date()).getFullYear();
    }
    LockedComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    LockedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locked',
            template: __webpack_require__(/*! ./locked.component.html */ "./src/app/authentication/locked/locked.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./locked.component.css */ "./src/app/authentication/locked/locked.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockedComponent);
    return LockedComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.css":
/*!************************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9wYWdlLW9mZmxpbmUvcGFnZS1vZmZsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aGVudGljYXRpb24gLm5fbG9nb3tkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhcnt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhciBhOm5vdCguYnRuKXtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O3RleHQtdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgYSBpe3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uYXV0aGVudGljYXRpb24gLm5hdmJhci1uYXYgbGkgLmJ0bntsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnR9LmF1dGhlbnRpY2F0aW9uIC5jaGVja2JveCBsYWJlbHtmb250LXNpemU6MTNweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2V7ZmxvYXQ6cmlnaHR9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXZ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmF1dGhlbnRpY2F0aW9uIC5uYXZiYXItY29sbGFwc2UgLm5hdmJhci1uYXYgbGl7ZGlzcGxheTppbmxpbmUtYmxvY2t9fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpey5hdXRoZW50aWNhdGlvbiAuZm9vdGVyIG5hdntkaXNwbGF5OmJsb2NrO2Zsb2F0Om5vbmV9fVxuIl19 */"

/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>The General Shutdown</h5>\n                        <span>Maintanance or not?</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page-offline/page-offline.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/page-offline/page-offline.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageOfflineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOfflineComponent", function() { return PageOfflineComponent; });
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

var PageOfflineComponent = /** @class */ (function () {
    function PageOfflineComponent() {
        this.year = (new Date()).getFullYear();
    }
    PageOfflineComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    PageOfflineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-offline',
            template: __webpack_require__(/*! ./page-offline.component.html */ "./src/app/authentication/page-offline/page-offline.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page-offline.component.css */ "./src/app/authentication/page-offline/page-offline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageOfflineComponent);
    return PageOfflineComponent;
}());



/***/ }),

/***/ "./src/app/authentication/page404/page404.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoZW50aWNhdGlvbiAubl9sb2dve2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5hdXRoZW50aWNhdGlvbiAubmF2YmFye3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyIGE6bm90KC5idG4pe2ZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSBhIGl7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSAuYnRue2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLmNoZWNrYm94IGxhYmVse2ZvbnQtc2l6ZToxM3B4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXsuYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZXtmbG9hdDpyaWdodH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdntkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiBsaXtkaXNwbGF5OmlubGluZS1ibG9ja319QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LmF1dGhlbnRpY2F0aW9uIC5mb290ZXIgbmF2e2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZX19XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/page404/page404.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Error 404</h5>\n                        <span>Page not found</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page404/page404.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
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

var Page404Component = /** @class */ (function () {
    function Page404Component() {
        this.year = (new Date()).getFullYear();
    }
    Page404Component.prototype.ngOnInit = function () {
        $("body").addClass("authentication sidebar-collapse");
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/authentication/page404/page404.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/authentication/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/authentication/page500/page500.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9wYWdlNTAwL3BhZ2U1MDAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoZW50aWNhdGlvbiAubl9sb2dve2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5hdXRoZW50aWNhdGlvbiAubmF2YmFye3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyIGE6bm90KC5idG4pe2ZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSBhIGl7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSAuYnRue2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLmNoZWNrYm94IGxhYmVse2ZvbnQtc2l6ZToxM3B4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXsuYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZXtmbG9hdDpyaWdodH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdntkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiBsaXtkaXNwbGF5OmlubGluZS1ibG9ja319QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LmF1dGhlbnRpY2F0aW9uIC5mb290ZXIgbmF2e2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZX19XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/page500/page500.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">        \n        <div class=\"navbar-translate n_logo\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n            <button class=\"navbar-toggler\" type=\"button\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-twitter\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                        <i class=\"zmdi zmdi-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                        <i class=\"zmdi zmdi-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/images/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-12 content-center\">\n            <div class=\"card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/images/logo.svg\" alt=\"\">\n                        </div>\n                        <h5>Error 500</h5>\n                        <span>Something's broken :-(</span>\n                    </div>\n                    <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                            <span class=\"input-group-addon\">\n                                <i class=\"zmdi zmdi-search\"></i>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n                        <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                    <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                    <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy; {{year}},\n                <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n            </div>\n        </div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/page500/page500.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.ts ***!
  \*************************************************************/
/*! exports provided: Page500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page500Component", function() { return Page500Component; });
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

var Page500Component = /** @class */ (function () {
    function Page500Component() {
        this.year = (new Date()).getFullYear();
    }
    Page500Component.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    Page500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page500',
            template: __webpack_require__(/*! ./page500.component.html */ "./src/app/authentication/page500/page500.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page500.component.css */ "./src/app/authentication/page500/page500.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());



/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaW5nLWluL3NpbmctaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoZW50aWNhdGlvbiAubl9sb2dve2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5hdXRoZW50aWNhdGlvbiAubmF2YmFye3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyIGE6bm90KC5idG4pe2ZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSBhIGl7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSAuYnRue2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLmNoZWNrYm94IGxhYmVse2ZvbnQtc2l6ZToxM3B4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXsuYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZXtmbG9hdDpyaWdodH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdntkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiBsaXtkaXNwbGF5OmlubGluZS1ibG9ja319QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LmF1dGhlbnRpY2F0aW9uIC5mb290ZXIgbmF2e2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZX19XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n<div class=\"container\">        \n    <!-- <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n    </div> -->\n    <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-twitter\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-facebook\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                    <i class=\"zmdi zmdi-instagram\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                </a>\n            </li>                 -->\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-up\">SIGN UP</a>\n            </li> -->\n        </ul>\n    </div>\n</div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n<div class=\"page-header-image\" style=\"background-image:url(assets/images/login-lock.jpg)\"></div>\n<div class=\"container\">\n    <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n            <form class=\"form\" method=\"\" action=\"\">\n                <div class=\"header\">\n                    <div class=\"logo-container\">\n                        <img src=\"assets/images/logo.svg\" alt=\"\">\n                    </div>\n                    <h5>Log in</h5>\n                </div>\n                <div class=\"content\">\n                        <div class=\"input-group input-lg\">\n                                <input type=\"text\" placeholder=\"Business Id\" class=\"form-control\" name=\"mypassword\"  #mypassword value=\"\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-lock\"></i>\n                                </span>\n                            </div>                                                \n                    <div class=\"input-group input-lg\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Doctor_Id\" name=\"myname\"  #myname value=\"\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-account-circle\"></i>\n                        </span>\n                    </div>\n                    \n                </div>\n                <div class=\"footer text-center\">\n                    <a  class=\"btn btn-primary btn-round btn-lg btn-block \" name=\"check\" (click)=\"check(myname.value,mypassword.value)\">SIGN IN</a>\n                    <!-- <h5><a routerLink=\"/authentication/forget-password\" class=\"link\">Forgot Password?</a></h5> -->\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!-- <footer class=\"footer\">\n    <div class=\"container\">\n        <nav>\n            <ul>\n                <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                <li><a href=\"javascript:void(0);\">FAQ</a></li>\n            </ul>\n        </nav>\n        <div class=\"copyright\">\n            &copy;{{year}}},\n            <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n    </div>\n</footer> -->\n</div>"

/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.component.ts ***!
  \*************************************************************/
/*! exports provided: SingInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInComponent", function() { return SingInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sing_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sing-in.service */ "./src/app/authentication/sing-in/sing-in.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingInComponent = /** @class */ (function () {
    function SingInComponent(router, signin, storage) {
        this.router = router;
        this.signin = signin;
        this.storage = storage;
        this.insert = [];
        this.year = (new Date()).getFullYear();
    }
    SingInComponent.prototype.ngOnInit = function () {
        $("body").addClass("authentication sidebar-collapse");
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $('.form-control').on("focus", function () {
            $(this).parent('.input-group').addClass("input-group-focus");
        }).on("blur", function () {
            $(this).parent(".input-group").removeClass("input-group-focus");
        });
    };
    SingInComponent.prototype.check = function (myname, mypassword) {
        var _this = this;
        if (myname != "" && mypassword != "") {
            var body = {
                "doctor_id": myname,
                "business_id": mypassword,
                "login_status": "logout"
            };
            console.log("test", body);
            this.signin.insert_doctor(body).subscribe(function (Response) {
                console.log("rspns", Response);
                // if(myname == Response.doctor_id && mypassword == Response.business_id){     
                if (Response.Message_Code == "RUS") {
                    _this.storage.store("doctor_id", myname);
                    _this.storage.store("business_id", mypassword);
                    _this.router.navigate(['/', 'dashboard']);
                }
                // }
                else {
                    alert("Invalid User Data");
                }
            });
        }
    };
    SingInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sing-in',
            template: __webpack_require__(/*! ./sing-in.component.html */ "./src/app/authentication/sing-in/sing-in.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_sing_in_service__WEBPACK_IMPORTED_MODULE_1__["SingInService"]],
            styles: [__webpack_require__(/*! ./sing-in.component.css */ "./src/app/authentication/sing-in/sing-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _sing_in_service__WEBPACK_IMPORTED_MODULE_1__["SingInService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], SingInComponent);
    return SingInComponent;
}());



/***/ }),

/***/ "./src/app/authentication/sing-in/sing-in.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/sing-in/sing-in.service.ts ***!
  \***********************************************************/
/*! exports provided: SingInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingInService", function() { return SingInService; });
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


var SingInService = /** @class */ (function () {
    function SingInService(http) {
        this.http = http;
    }
    SingInService.prototype.insert_doctor = function (login) {
        return this.http.post("https://doctorappnew.herokuapp.com/insert_doctor_login", login);
    };
    SingInService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SingInService);
    return SingInService;
}());



/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.css":
/*!**************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".authentication .n_logo{display:inline-block}.authentication .navbar{width:100%;background:transparent !important}.authentication .navbar a:not(.btn){font-size:14px !important;text-transform:none !important}.authentication .navbar-nav li a i{vertical-align:middle}.authentication .navbar-nav li .btn{line-height:20px !important}.authentication .checkbox label{font-size:13px}@media screen and (min-width: 992px){.authentication .navbar-collapse{float:right}.authentication .navbar-collapse .navbar-nav{display:inline-block}.authentication .navbar-collapse .navbar-nav li{display:inline-block}}@media only screen and (max-width: 767px){.authentication .footer nav{display:block;float:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2F1dGhlbnRpY2F0aW9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0Isb0JBQW9CLENBQUMsd0JBQXdCLFVBQVUsQ0FBQyxpQ0FBaUMsQ0FBQyxvQ0FBb0MseUJBQXlCLENBQUMsOEJBQThCLENBQUMsbUNBQW1DLHFCQUFxQixDQUFDLG9DQUFvQywyQkFBMkIsQ0FBQyxnQ0FBZ0MsY0FBYyxDQUFDLHFDQUFxQyxpQ0FBaUMsV0FBVyxDQUFDLDZDQUE2QyxvQkFBb0IsQ0FBQyxnREFBZ0Qsb0JBQW9CLENBQUMsQ0FBQywwQ0FBMEMsNEJBQTRCLGFBQWEsQ0FBQyxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaW5nLXVwL3NpbmctdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoZW50aWNhdGlvbiAubl9sb2dve2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5hdXRoZW50aWNhdGlvbiAubmF2YmFye3dpZHRoOjEwMCU7YmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyIGE6bm90KC5idG4pe2ZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7dGV4dC10cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50fS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSBhIGl7dmVydGljYWwtYWxpZ246bWlkZGxlfS5hdXRoZW50aWNhdGlvbiAubmF2YmFyLW5hdiBsaSAuYnRue2xpbmUtaGVpZ2h0OjIwcHggIWltcG9ydGFudH0uYXV0aGVudGljYXRpb24gLmNoZWNrYm94IGxhYmVse2ZvbnQtc2l6ZToxM3B4fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXsuYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZXtmbG9hdDpyaWdodH0uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdntkaXNwbGF5OmlubGluZS1ibG9ja30uYXV0aGVudGljYXRpb24gLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiBsaXtkaXNwbGF5OmlubGluZS1ibG9ja319QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LmF1dGhlbnRpY2F0aW9uIC5mb290ZXIgbmF2e2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZX19XG4iXX0= */"

/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.html":
/*!***************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n<div class=\"container\">        \n    <!-- <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Oreo</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n    </div> -->\n    <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n            <!-- <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/dashboard/main\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-twitter\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n                    <i class=\"zmdi zmdi-facebook\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">                        \n                    <i class=\"zmdi zmdi-instagram\"></i>\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                </a>\n            </li>                 -->\n            <li class=\"nav-item\">\n                <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a>\n            </li>\n        </ul>\n    </div>\n</div>\n</nav>\n<!-- End Navbar -->\n<div class=\"page-header\">\n<div class=\"page-header-image\" style=\"background-image:url(assets/images/Login-Background.jpg)\"></div>\n<div class=\"container\">\n    <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n            <form class=\"form\" method=\"\" action=\"\">\n                <div class=\"header\">\n                    <div class=\"logo-container\">\n                        <img src=\"assets/images/logo.svg\" alt=\"\">\n                    </div>\n                    <h5>Sign Up</h5>\n                    <span>Register a new membership</span>\n                </div>\n                <div class=\"content\">                                                \n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-account-circle\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-email\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"password\" placeholder=\"Password\" class=\"form-control\" />\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                    </div>\n                    <div class=\"input-group\">\n                        <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" />\n                        <span class=\"input-group-addon\">\n                            <i class=\"zmdi zmdi-lock\"></i>\n                        </span>\n                    </div>                        \n                </div>\n                <div class=\"checkbox\">\n                        <input id=\"terms\" type=\"checkbox\">\n                        <label for=\"terms\">\n                                I read and agree to the <a href=\"javascript:void(0);\">terms of usage</a>\n                        </label>\n                    </div>\n                <div class=\"footer text-center\">\n                    <a routerLink=\"/dashboard/main\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SIGN UP</a>\n                    <h5><a class=\"link\" routerLink=\"/authentication/sign-in\">You already have a membership?</a></h5>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!-- <footer class=\"footer\">\n    <div class=\"container\">\n        <nav>\n            <ul>\n                <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                <li><a href=\"javascript:void(0);\">FAQ</a></li>\n            </ul>\n        </nav>\n        <div class=\"copyright\">\n            &copy; {{year}},\n            <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n    </div>\n</footer> -->\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/sing-up/sing-up.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/authentication/sing-up/sing-up.component.ts ***!
  \*************************************************************/
/*! exports provided: SingUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingUpComponent", function() { return SingUpComponent; });
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

var SingUpComponent = /** @class */ (function () {
    function SingUpComponent() {
        this.year = (new Date()).getFullYear();
    }
    SingUpComponent.prototype.ngOnInit = function () {
        $(".navbar-toggler").on('click', function () {
            $("html").toggleClass("nav-open");
        });
        $("body").addClass("authentication sidebar-collapse");
    };
    SingUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sing-up',
            template: __webpack_require__(/*! ./sing-up.component.html */ "./src/app/authentication/sing-up/sing-up.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./sing-up.component.css */ "./src/app/authentication/sing-up/sing-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingUpComponent);
    return SingUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map