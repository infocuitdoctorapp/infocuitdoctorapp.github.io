(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/amcharts3-angular2/index.js":
/*!**************************************************!*\
  !*** ./node_modules/amcharts3-angular2/index.js ***!
  \**************************************************/
/*! exports provided: AmChartsDirective, AmChartsService, AmChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartsDirective", function() { return AmChartsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartsService", function() { return AmChartsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmChartsModule", function() { return AmChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

function getType(x) {
    return {}.toString.call(x);
}
function hasOwnKey(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
}
function copyObject(x) {
    var output = {};
    for (var key in x) {
        if (hasOwnKey(x, key)) {
            output[key] = copy(x[key]);
        }
    }
    return output;
}
function copyArray(x) {
    var length = x.length;
    var output = new Array(length);
    for (var i = 0; i < length; ++i) {
        output[i] = copy(x[i]);
    }
    return output;
}
function copy(x) {
    switch (getType(x)) {
        case "[object Array]":
            return copyArray(x);
        case "[object Object]":
            return copyObject(x);
        case "[object Date]":
            return new Date(x.getTime());
        default:
            return x;
    }
}
function isNaN(x) {
    return x !== x;
}
function isNumberEqual(x, y) {
    return x === y || (isNaN(x) && isNaN(y));
}
function removeChartListeners(chart, x, y) {
    if (x !== y) {
        if (x == null) {
            x = [];
        }
        if (y == null) {
            y = [];
        }
        var xLength = x.length;
        var yLength = y.length;
        for (var i = 0; i < xLength; ++i) {
            var xValue = x[i];
            var has = false;
            for (var j = 0; j < yLength; ++j) {
                var yValue = y[j];
                if (xValue.event === yValue.event &&
                    xValue.method === yValue.method) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                chart.removeListener(chart, xValue.event, xValue.method);
            }
        }
    }
}
function updateArray(a, x, y) {
    var didUpdate = false;
    if (x !== y) {
        var xLength = x.length;
        var yLength = y.length;
        if (xLength !== yLength) {
            a.length = yLength;
            didUpdate = true;
        }
        for (var i = 0; i < yLength; ++i) {
            if (i < xLength) {
                if (update(a, i, x[i], y[i])) {
                    didUpdate = true;
                }
            }
            else {
                a[i] = copy(y[i]);
                didUpdate = true;
            }
        }
    }
    return didUpdate;
}
function update(obj, key, x, y) {
    var didUpdate = false;
    if (x !== y) {
        var xType = getType(x);
        var yType = getType(y);
        if (xType === yType) {
            switch (xType) {
                case "[object Array]":
                    if (updateArray(obj[key], x, y)) {
                        didUpdate = true;
                    }
                    break;
                case "[object Object]":
                    if (updateObject(obj[key], x, y)) {
                        didUpdate = true;
                    }
                    break;
                case "[object Date]":
                    if (x.getTime() !== y.getTime()) {
                        obj[key] = copy(y);
                        didUpdate = true;
                    }
                    break;
                case "[object Number]":
                    if (!isNumberEqual(x, y)) {
                        obj[key] = copy(y);
                        didUpdate = true;
                    }
                    break;
                default:
                    if (x !== y) {
                        obj[key] = copy(y);
                        didUpdate = true;
                    }
                    break;
            }
        }
        else {
            obj[key] = copy(y);
            didUpdate = true;
        }
    }
    return didUpdate;
}
function updateObject(chart, oldObj, newObj) {
    var didUpdate = false;
    if (oldObj !== newObj) {
        for (var key in newObj) {
            if (hasOwnKey(newObj, key)) {
                if (hasOwnKey(oldObj, key)) {
                    if (key === "listeners") {
                        removeChartListeners(chart, oldObj[key], newObj[key]);
                    }
                    if (update(chart, key, oldObj[key], newObj[key])) {
                        didUpdate = true;
                    }
                }
                else {
                    chart[key] = copy(newObj[key]);
                    didUpdate = true;
                }
            }
        }
        for (var key in oldObj) {
            if (hasOwnKey(oldObj, key) && !hasOwnKey(newObj, key)) {
                if (key === "listeners") {
                    removeChartListeners(chart, oldObj[key], []);
                }
                delete chart[key];
                didUpdate = true;
            }
        }
    }
    return didUpdate;
}
var AmChartsDirective = (function () {
    function AmChartsDirective(el, _zone) {
        this._zone = _zone;
        console.warn("Using the <amCharts> element is deprecated: use AmChartsService instead");
        this.el = el.nativeElement;
    }
    AmChartsDirective.prototype.ngOnChanges = function (x) {
        var _this = this;
        if (x.options) {
            if (this.chart) {
                this._zone.runOutsideAngular(function () {
                    var didUpdate = updateObject(_this.chart, x.options.previousValue, x.options.currentValue);
                    if (didUpdate) {
                        _this.chart.validateNow(true);
                    }
                });
            }
        }
    };
    AmChartsDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            var props = copy(_this.options);
            _this.el.id = _this.id;
            _this.el.style.display = "block";
            _this.chart = AmCharts.makeChart(_this.id, props);
        });
    };
    AmChartsDirective.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.chart) {
            this._zone.runOutsideAngular(function () {
                _this.chart.clear();
            });
        }
    };
    return AmChartsDirective;
}());

AmChartsDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: "amCharts"
            },] },
];
AmChartsDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
AmChartsDirective.propDecorators = {
    'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var AmChartsService = (function () {
    function AmChartsService(zone) {
        this.zone = zone;
    }
    AmChartsService.prototype.makeChart = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        return this.zone.runOutsideAngular(function () { return AmCharts.makeChart.apply(AmCharts, a); });
    };
    AmChartsService.prototype.updateChart = function (chart, fn) {
        this.zone.runOutsideAngular(function () {
            fn();
            chart.validateNow(true);
        });
    };
    AmChartsService.prototype.destroyChart = function (chart) {
        this.zone.runOutsideAngular(function () {
            chart.clear();
        });
    };
    return AmChartsService;
}());

AmChartsService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
AmChartsService.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
]; };
var AmChartsModule = (function () {
    function AmChartsModule() {
    }
    return AmChartsModule;
}());

AmChartsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    AmChartsDirective
                ],
                exports: [
                    AmChartsDirective
                ],
                providers: [
                    AmChartsService
                ]
            },] },
];
AmChartsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=common.js.map