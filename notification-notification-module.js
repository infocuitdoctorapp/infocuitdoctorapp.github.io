(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/@angular/common/fesm5/testing.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/testing.js ***!
  \*******************************************************/
/*! exports provided: SpyLocation, MockLocationStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpyLocation", function() { return SpyLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockLocationStrategy", function() { return MockLocationStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v7.0.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A spy for {@link Location} that allows tests to fire simulated location events.
 *
 * @publicApi
 */
var SpyLocation = /** @class */ (function () {
    function SpyLocation() {
        this.urlChanges = [];
        this._history = [new LocationState('', '', null)];
        this._historyIndex = 0;
        /** @internal */
        this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */
        this._baseHref = '';
        /** @internal */
        this._platformStrategy = null;
    }
    SpyLocation.prototype.setInitialPath = function (url) { this._history[this._historyIndex].path = url; };
    SpyLocation.prototype.setBaseHref = function (url) { this._baseHref = url; };
    SpyLocation.prototype.path = function () { return this._history[this._historyIndex].path; };
    SpyLocation.prototype.state = function () { return this._history[this._historyIndex].state; };
    SpyLocation.prototype.isCurrentPathEqualTo = function (path, query) {
        if (query === void 0) { query = ''; }
        var givenPath = path.endsWith('/') ? path.substring(0, path.length - 1) : path;
        var currPath = this.path().endsWith('/') ? this.path().substring(0, this.path().length - 1) : this.path();
        return currPath == givenPath + (query.length > 0 ? ('?' + query) : '');
    };
    SpyLocation.prototype.simulateUrlPop = function (pathname) {
        this._subject.emit({ 'url': pathname, 'pop': true, 'type': 'popstate' });
    };
    SpyLocation.prototype.simulateHashChange = function (pathname) {
        // Because we don't prevent the native event, the browser will independently update the path
        this.setInitialPath(pathname);
        this.urlChanges.push('hash: ' + pathname);
        this._subject.emit({ 'url': pathname, 'pop': true, 'type': 'hashchange' });
    };
    SpyLocation.prototype.prepareExternalUrl = function (url) {
        if (url.length > 0 && !url.startsWith('/')) {
            url = '/' + url;
        }
        return this._baseHref + url;
    };
    SpyLocation.prototype.go = function (path, query, state) {
        if (query === void 0) { query = ''; }
        if (state === void 0) { state = null; }
        path = this.prepareExternalUrl(path);
        if (this._historyIndex > 0) {
            this._history.splice(this._historyIndex + 1);
        }
        this._history.push(new LocationState(path, query, state));
        this._historyIndex = this._history.length - 1;
        var locationState = this._history[this._historyIndex - 1];
        if (locationState.path == path && locationState.query == query) {
            return;
        }
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.urlChanges.push(url);
        this._subject.emit({ 'url': url, 'pop': false });
    };
    SpyLocation.prototype.replaceState = function (path, query, state) {
        if (query === void 0) { query = ''; }
        if (state === void 0) { state = null; }
        path = this.prepareExternalUrl(path);
        var history = this._history[this._historyIndex];
        if (history.path == path && history.query == query) {
            return;
        }
        history.path = path;
        history.query = query;
        history.state = state;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.urlChanges.push('replace: ' + url);
    };
    SpyLocation.prototype.forward = function () {
        if (this._historyIndex < (this._history.length - 1)) {
            this._historyIndex++;
            this._subject.emit({ 'url': this.path(), 'state': this.state(), 'pop': true });
        }
    };
    SpyLocation.prototype.back = function () {
        if (this._historyIndex > 0) {
            this._historyIndex--;
            this._subject.emit({ 'url': this.path(), 'state': this.state(), 'pop': true });
        }
    };
    SpyLocation.prototype.subscribe = function (onNext, onThrow, onReturn) {
        return this._subject.subscribe({ next: onNext, error: onThrow, complete: onReturn });
    };
    SpyLocation.prototype.normalize = function (url) { return null; };
    SpyLocation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SpyLocation);
    return SpyLocation;
}());
var LocationState = /** @class */ (function () {
    function LocationState(path, query, state) {
        this.path = path;
        this.query = query;
        this.state = state;
    }
    return LocationState;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A mock implementation of {@link LocationStrategy} that allows tests to fire simulated
 * location events.
 *
 * @publicApi
 */
var MockLocationStrategy = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MockLocationStrategy, _super);
    function MockLocationStrategy() {
        var _this = _super.call(this) || this;
        _this.internalBaseHref = '/';
        _this.internalPath = '/';
        _this.internalTitle = '';
        _this.urlChanges = [];
        /** @internal */
        _this._subject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    MockLocationStrategy.prototype.simulatePopState = function (url) {
        this.internalPath = url;
        this._subject.emit(new _MockPopStateEvent(this.path()));
    };
    MockLocationStrategy.prototype.path = function (includeHash) {
        if (includeHash === void 0) { includeHash = false; }
        return this.internalPath;
    };
    MockLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        if (internal.startsWith('/') && this.internalBaseHref.endsWith('/')) {
            return this.internalBaseHref + internal.substring(1);
        }
        return this.internalBaseHref + internal;
    };
    MockLocationStrategy.prototype.pushState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push(externalUrl);
    };
    MockLocationStrategy.prototype.replaceState = function (ctx, title, path, query) {
        this.internalTitle = title;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.internalPath = url;
        var externalUrl = this.prepareExternalUrl(url);
        this.urlChanges.push('replace: ' + externalUrl);
    };
    MockLocationStrategy.prototype.onPopState = function (fn) { this._subject.subscribe({ next: fn }); };
    MockLocationStrategy.prototype.getBaseHref = function () { return this.internalBaseHref; };
    MockLocationStrategy.prototype.back = function () {
        if (this.urlChanges.length > 0) {
            this.urlChanges.pop();
            var nextUrl = this.urlChanges.length > 0 ? this.urlChanges[this.urlChanges.length - 1] : '';
            this.simulatePopState(nextUrl);
        }
    };
    MockLocationStrategy.prototype.forward = function () { throw 'not implemented'; };
    MockLocationStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MockLocationStrategy);
    return MockLocationStrategy;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]));
var _MockPopStateEvent = /** @class */ (function () {
    function _MockPopStateEvent(newUrl) {
        this.newUrl = newUrl;
        this.pop = true;
        this.type = 'popstate';
    }
    return _MockPopStateEvent;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=testing.js.map


/***/ }),

/***/ "./node_modules/@angular/router/fesm5/testing.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/router/fesm5/testing.js ***!
  \*******************************************************/
/*! exports provided: SpyNgModuleFactoryLoader, setupTestingRouter, RouterTestingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpyNgModuleFactoryLoader", function() { return SpyNgModuleFactoryLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTestingRouter", function() { return setupTestingRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterTestingModule", function() { return RouterTestingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_testing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/testing */ "./node_modules/@angular/common/fesm5/testing.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @license Angular v7.0.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Allows to simulate the loading of ng modules in tests.
 *
 * ```
 * const loader = TestBed.get(NgModuleFactoryLoader);
 *
 * @Component({template: 'lazy-loaded'})
 * class LazyLoadedComponent {}
 * @NgModule({
 *   declarations: [LazyLoadedComponent],
 *   imports: [RouterModule.forChild([{path: 'loaded', component: LazyLoadedComponent}])]
 * })
 *
 * class LoadedModule {}
 *
 * // sets up stubbedModules
 * loader.stubbedModules = {lazyModule: LoadedModule};
 *
 * router.resetConfig([
 *   {path: 'lazy', loadChildren: 'lazyModule'},
 * ]);
 *
 * router.navigateByUrl('/lazy/loaded');
 * ```
 *
 * @publicApi
 */
var SpyNgModuleFactoryLoader = /** @class */ (function () {
    function SpyNgModuleFactoryLoader(compiler) {
        this.compiler = compiler;
        /**
         * @docsNotRequired
         */
        this._stubbedModules = {};
    }
    Object.defineProperty(SpyNgModuleFactoryLoader.prototype, "stubbedModules", {
        /**
         * @docsNotRequired
         */
        get: function () { return this._stubbedModules; },
        /**
         * @docsNotRequired
         */
        set: function (modules) {
            var e_1, _a;
            var res = {};
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(modules)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var t = _c.value;
                    res[t] = this.compiler.compileModuleAsync(modules[t]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._stubbedModules = res;
        },
        enumerable: true,
        configurable: true
    });
    SpyNgModuleFactoryLoader.prototype.load = function (path) {
        if (this._stubbedModules[path]) {
            return this._stubbedModules[path];
        }
        else {
            return Promise.reject(new Error("Cannot find module " + path));
        }
    };
    SpyNgModuleFactoryLoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Compiler"]])
    ], SpyNgModuleFactoryLoader);
    return SpyNgModuleFactoryLoader;
}());
function isUrlHandlingStrategy(opts) {
    // This property check is needed because UrlHandlingStrategy is an interface and doesn't exist at
    // runtime.
    return 'shouldProcessUrl' in opts;
}
/**
 * Router setup factory function used for testing.
 *
 * @publicApi
 */
function setupTestingRouter(urlSerializer, contexts, location, loader, compiler, injector, routes, opts, urlHandlingStrategy) {
    var router = new _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"](null, urlSerializer, contexts, location, injector, loader, compiler, Object(_angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵflatten"])(routes));
    if (opts) {
        // Handle deprecated argument ordering.
        if (isUrlHandlingStrategy(opts)) {
            router.urlHandlingStrategy = opts;
        }
        else {
            // Handle ExtraOptions
            if (opts.malformedUriErrorHandler) {
                router.malformedUriErrorHandler = opts.malformedUriErrorHandler;
            }
            if (opts.paramsInheritanceStrategy) {
                router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy;
            }
        }
    }
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    return router;
}
/**
 * @description
 *
 * Sets up the router to be used for testing.
 *
 * The modules sets up the router to be used for testing.
 * It provides spy implementations of `Location`, `LocationStrategy`, and {@link
 * NgModuleFactoryLoader}.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * beforeEach(() => {
 *   TestBed.configureTestModule({
 *     imports: [
 *       RouterTestingModule.withRoutes(
 *         [{path: '', component: BlankCmp}, {path: 'simple', component: SimpleCmp}]
 *       )
 *     ]
 *   });
 * });
 * ```
 *
 * @publicApi
 */
var RouterTestingModule = /** @class */ (function () {
    function RouterTestingModule() {
    }
    RouterTestingModule_1 = RouterTestingModule;
    RouterTestingModule.withRoutes = function (routes, config) {
        return {
            ngModule: RouterTestingModule_1,
            providers: [
                Object(_angular_router__WEBPACK_IMPORTED_MODULE_4__["provideRoutes"])(routes),
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTER_CONFIGURATION"], useValue: config ? config : {} },
            ]
        };
    };
    var RouterTestingModule_1;
    RouterTestingModule = RouterTestingModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            providers: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["ɵROUTER_PROVIDERS"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_2__["SpyLocation"] },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common_testing__WEBPACK_IMPORTED_MODULE_2__["MockLocationStrategy"] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModuleFactoryLoader"], useClass: SpyNgModuleFactoryLoader }, {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
                    useFactory: setupTestingRouter,
                    deps: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ROUTER_CONFIGURATION"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlHandlingStrategy"], new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]()]
                    ]
                },
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadingStrategy"], useExisting: _angular_router__WEBPACK_IMPORTED_MODULE_4__["NoPreloading"] }, Object(_angular_router__WEBPACK_IMPORTED_MODULE_4__["provideRoutes"])([])
            ]
        })
    ], RouterTestingModule);
    return RouterTestingModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=testing.js.map


/***/ }),

/***/ "./src/app/notification/notification-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationRoutingModule", function() { return NotificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification/notification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'notification',
        pathMatch: 'full'
    },
    {
        path: 'notification',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__["NotificationComponent"]
    },
];
var NotificationRoutingModule = /** @class */ (function () {
    function NotificationRoutingModule() {
    }
    NotificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotificationRoutingModule);
    return NotificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/notification/notification.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/notification/notification-routing.module.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification/notification.component.ts");
/* harmony import */ var _angular_router_testing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router/testing */ "./node_modules/@angular/router/fesm5/testing.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notification_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotificationRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router_testing__WEBPACK_IMPORTED_MODULE_5__["RouterTestingModule"]
            ],
            declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ }),

/***/ "./src/app/notification/notification/notification.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/notification/notification/notification.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notification/notification/notification.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/notification/notification/notification.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content home\">\r\n  <div class=\"block-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-5 col-sm-12\">\r\n        <h2>Notification\r\n          <small>Send Notification to Patient </small>\r\n        </h2>\r\n      </div>\r\n      <div class=\"col-lg-7 col-md-7 col-sm-12 text-right\">\r\n\r\n\r\n        <ul class=\"breadcrumb float-md-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"./notifi/notification\"><i class=\"zmdi zmdi-home\"></i> Doctor</a></li>\r\n          <li class=\"breadcrumb-item active\">Notification</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row clearfix\">\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h2><strong>Notification</strong> Detail</h2>\r\n          </div>\r\n          <div class=\"body product-report\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                <label for=\"titles\"><b>Title</b></label>\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" id=\"\" class=\"form-control\" placeholder=\"Type tittle here\" name=\"mytittle\"  [(ngModel)]=\"mytittle\" >\r\n                </div>\r\n                <label for=\"msg\"><b>Message</b></label>\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" id=\"\" class=\"form-control\" placeholder=\"Type message here\" name=\"mymessage\" [(ngModel)]=\"mymessage\">\r\n                  <!-- [formControl]=\"control\" [(ngModel)]=\"mytittle\" -->\r\n                  <!-- [formControl]=\"control\" [(ngModel)]=\"mymessage\" -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n              <label><b>Type:</b></label>\r\n              <div class=\"row clearfix\">\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input type=\"checkbox\" name=\"sms\" id=\"sms\" sms=\"true\" style=\"zoom: 1.1;\"  [(ngModel)]=\"sms\">SMS Notification\r\n                    <!-- [formControl]=\"control\" [(ngModel)]=\"sms\" -->\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              \r\n              <!-- <div><input type=\"checkbox\" value=\"1\" class=\"chk\"> Value 1</div> -->\r\n              \r\n              <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input type=\"checkbox\" id=\"yuEmail\" name=\"Email\" value=\"\" style=\"zoom: 1.1;\" [(ngModel)]=\"email\">Emailnotification\r\n                    <!-- <input type=\"button\" value=\"Email\" id=\"buttonClass\">  -->\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input type=\"checkbox\"  value=\"\" style=\"zoom: 1.1;\" [(ngModel)]=\"push\">Push Notification</label>\r\n                </div>\r\n              </div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n    \r\n<!-- ******************************************************************* -->\r\n<div class=\"row clearfix\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <label><b>Reason:</b></label>\r\n    <div class=\"row clearfix\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\" name=\"f\" value=\"book\" style=\"zoom: 1.1;\"  [(ngModel)]=\"Booking\">Booking\r\n          <!-- [formControl]=\"control\" [(ngModel)]=\"sms\" -->\r\n        </label>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div><input type=\"checkbox\" value=\"1\" class=\"chk\"> Value 1</div> -->\r\n    \r\n    <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n      <div class=\"form-check\">\r\n        <label class=\"form-check-label\">\r\n          <input type=\"checkbox\"  name=\"Cancel\" value=\"\" style=\"zoom: 1.1;\" [(ngModel)]=\"Cancel\" >Cancel\r\n          <!-- <input type=\"button\" value=\"Email\" id=\"buttonClass\">  -->\r\n        </label>\r\n      </div>\r\n    </div>\r\n   <div class=\"col-lg-4 col-md-4 col-sm-12\">\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input type=\"checkbox\"  value=\"\" style=\"zoom: 1.1;\" name=\"Checkout\"  [(ngModel)]=\"Checkout\">Checkout</label>\r\n                </div>\r\n              </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n<!-- *********************************************************************** -->\r\n            <div class=\"row clearfix\">\r\n                <div class=\"col-lg-10 col-md-12 col-sm-12\">\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-12 col-sm-12\">\r\n                    <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\" name=\"\" (click)=\"test(mymessage,mytittle,Booking,Cancel,Checkout)\">Send Notification</button>                    \r\n                </div>\r\n            </div>      \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/notification/notification/notification.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/notification/notification/notification.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ "./src/app/notification/notification/notification.service.ts");
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




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notification, router, storage) {
        this.notification = notification;
        this.router = router;
        this.storage = storage;
        this.sms = false;
        this.email = false;
        this.push = false;
        this.Cancel = false;
        this.Checkout = false;
        this.Booking = false;
        this.mymessage = [];
        this.mytittle = [];
        this.patientListData = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.patientlist = function () {
        var _this = this;
        var patient = {
            "doctor_id": this.storage.retrieve('doctor_id'),
            "business_id": this.storage.retrieve('business_id'),
            "business_date": "2019-03-01"
        };
        this.notification.patientlist(patient).subscribe(function (Response) {
            if (Response.Message_Code == "ASS") {
                _this.patientListData = Response.output;
                console.log("patientlist", Response.patientListData);
                for (var i = 0; i < _this.patientListData.length; i++) {
                    _this.patient = _this.patient + _this.patientListData[i].user_name + ",";
                    alert(_this.patient);
                }
            }
        });
    };
    /********************************************************************************************/
    NotificationComponent.prototype.test = function (mymessage, mytittle, booking, cancel, checkout) {
        console.log("aggg");
        if (this.mymessage != "" && this.mytittle != "") {
            console.log("empty", mymessage, mytittle);
            /**************************  SMS  *************************************/
            if (this.sms == true) {
                // alert("You are selecting SMS notification");
                if (this.Booking == true) {
                    // alert("You are selecting sms Booking notification");
                    var sms = {
                        "business_id": this.storage.retrieve('business_id'),
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_date": "2019-03-01",
                        "token_status": "Booked",
                        "message": mymessage
                    };
                    console.log("this sms");
                    this.notification.SMSALL(sms).subscribe(function (Response) {
                        console.log("sms");
                        if (Response.Message_Code == "SSS") {
                            // alert(Response.Message);
                        }
                    });
                }
                else if (this.Cancel == true) {
                    // alert("You are selecting SMS Cancel notification");
                    var sms = {
                        "business_id": this.storage.retrieve('business_id'),
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_date": "2019-03-01",
                        "token_status": "Cancel",
                        "message": mymessage
                    };
                    console.log("this sms");
                    this.notification.SMSALL(sms).subscribe(function (Response) {
                        console.log("sms");
                        if (Response.Message_Code == "SSS") {
                            // alert(Response.Message);
                        }
                    });
                }
                else if (this.Checkout == true) {
                    // alert("You are selecting SMS Checkout notification");
                    var sms = {
                        "business_id": this.storage.retrieve('business_id'),
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_date": "2019-03-01",
                        "token_status": "Checkout",
                        "message": mymessage
                    };
                    console.log("this sms");
                    this.notification.SMSALL(sms).subscribe(function (Response) {
                        console.log("sms");
                        if (Response.Message_Code == "SSS") {
                            // alert(Response.Message);
                            console.log("smsall", Response.Message);
                        }
                    });
                }
            }
            if (this.email == true) {
                // alert("You are selecting Email notification");
                if (this.Booking == true) {
                    // alert("You are selecting email Booking notification");
                    var mailall = {
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_id": this.storage.retrieve('business_id'),
                        "message": {
                            "name": " mohan",
                            "message": mymessage,
                            "token_no": "8",
                            "token_status": "Booked",
                            "wait_time": "30 min(s)",
                            "bus_hour": "9 AM to 6 PM ",
                            "break_time": "2 PM to 3 PM",
                            "address": "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
                            "hospital": "-by MIOT Hospital"
                        },
                        "subject": mytittle
                    };
                    this.notification.EMAILALL(mailall).subscribe(function (Response) {
                        if (Response.Message_code == "MSS") {
                            // alert(Response.Message);
                        }
                    });
                }
                else if (this.Cancel == true) {
                    // alert("You are selecting email Cancel notification");
                    var mailall = {
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_id": this.storage.retrieve('business_id'),
                        "message": {
                            "name": " mohan",
                            "message": mymessage,
                            "token_no": "8",
                            "token_status": "Cancel",
                            "wait_time": "30 min(s)",
                            "bus_hour": "9 AM to 6 PM ",
                            "break_time": "2 PM to 3 PM",
                            "address": "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
                            "hospital": "-by MIOT Hospital"
                        },
                        "subject": mytittle
                    };
                    this.notification.EMAILALL(mailall).subscribe(function (Response) {
                        if (Response.Message_code == "MSS") {
                            // alert(Response.Message);
                        }
                    });
                }
                else if (this.Checkout == true) {
                    // alert("You are selecting email Checkout notification");
                    var mailall = {
                        "doctor_id": this.storage.retrieve('doctor_id'),
                        "business_id": this.storage.retrieve('business_id'),
                        "message": {
                            "name": " mohan",
                            "message": mymessage,
                            "token_no": "8",
                            "token_status": "Checkout",
                            "wait_time": "30 min(s)",
                            "bus_hour": "9 AM to 6 PM ",
                            "break_time": "2 PM to 3 PM",
                            "address": "No,23 New Colony,1st Cross Street,Chrompet,Chennai-600045",
                            "hospital": "-by MIOT Hospital"
                        },
                        "subject": mytittle
                    };
                    this.notification.EMAILALL(mailall).subscribe(function (Response) {
                        if (Response.Message_code == "MSS") {
                            // alert(Response.Message);
                        }
                    });
                }
            }
            if (this.push == true) {
                // alert("You are selecting Push notification");
                if (this.Booking == true) {
                    // alert("You are selecting Push Booking notification");
                }
                if (this.Cancel == true) {
                    // alert("You are selecting Push Cancel notification");
                }
                if (this.Checkout == true) {
                    // alert("You are selecting Push Checkout notification");
                }
            }
        }
        else {
            console.log("elsr");
            // alert("Type a Message and Tittle and check your checkboxes");
        }
        alert("Notfication has been sent to patients");
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification/notification.component.html"),
            providers: [_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]],
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification/notification.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/notification/notification/notification.service.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
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


var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    // SMS(notify){
    //     return this.http.post("https://doctorappnew.herokuapp.com/seneSMSALL",notify)
    //   }
    NotificationService.prototype.EMAILALL = function (mail) {
        return this.http.post("https://doctorappnew.herokuapp.com/SendEmailAll", mail);
    };
    NotificationService.prototype.SMSALL = function (smsall) {
        return this.http.post("https://doctorappnew.herokuapp.com/SendSMS", smsall);
    };
    NotificationService.prototype.push = function (notify) {
        return this.http.get("https://doctorappnew.herokuapp.com/", notify);
    };
    NotificationService.prototype.patientlist = function (updates) {
        return this.http.post('https://doctorappnew.herokuapp.com/SelectAppoinment', updates);
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map