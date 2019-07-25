(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _omok_omok_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./omok/omok.component */ "./src/app/omok/omok.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/battle/battle.component.ts");






var routes = [
    { path: 'index', component: _omok_omok_component__WEBPACK_IMPORTED_MODULE_3__["OmokComponent"] },
    { path: 'game/:id', component: _battle_battle_component__WEBPACK_IMPORTED_MODULE_5__["BattleComponent"] },
    { path: 'manager', component: _manager_manager_component__WEBPACK_IMPORTED_MODULE_4__["ManagerComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main\n{\n\tmargin: 0 auto;\n\theight: 600px;\n        position: relative;\n        width: 600px;\n        background: gold;\n}\n\n#board\n{\n        margin: 30px;\n        background-image: repeating-linear-gradient(0deg,transparent,transparent 29px, black 29px, black 30px), repeating-linear-gradient(-90deg,transparent,transparent 29px, black 29px, black 30px);\n        background-size: 30px 30px;\n        height: 541;\n        position: absolute;\n        width: 541;\n}\n\n.smallcircle\n{\n        border-radius: 50%;\n        width: 4;\n        height: 4;\n        background: black;\n        border: solid black;\n        position: absolute;\n}\n\n#smallcircle1\n{\n\ttop: 117px;\n        left: 117px;\n}\n\n#smallcircle2\n{\n        top: 117px;\n        left: 297px;\n}\n\n#smallcircle3\n{\n        top: 117px;\n        left: 477px;\n}\n\n#smallcircle4\n{\n\ttop: 297px;\n        left: 117px;\n}\n\n#smallcircle5\n{\n\ttop: 297px;\n        left: 297px;\n}\n\n#smallcircle6\n{\n\ttop: 297px;\n        left: 477px;\n}\n\n#smallcircle7\n{\n\ttop: 477px;\n        left: 117px;\n}\n\n#smallcircle8\n{\n\ttop: 477px;\n        left: 297px;\n}\n\n#smallcircle9\n{\n\ttop: 477px;\n        left: 477px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGNBQWM7Q0FDZCxhQUFhO1FBQ04sa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixnQkFBZ0I7QUFDeEI7O0FBRUE7O1FBRVEsWUFBWTtRQUNaLDhMQUE4TDtRQUM5TCwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO0FBQ2xCOztBQUVBOztRQUVRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCO0FBQzFCOztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztRQUVRLFVBQVU7UUFDVixXQUFXO0FBQ25COztBQUVBOztRQUVRLFVBQVU7UUFDVixXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25CIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5cbntcblx0bWFyZ2luOiAwIGF1dG87XG5cdGhlaWdodDogNjAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBnb2xkO1xufVxuXG4jYm9hcmRcbntcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDBkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgMjlweCwgYmxhY2sgMjlweCwgYmxhY2sgMzBweCksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTkwZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDI5cHgsIGJsYWNrIDI5cHgsIGJsYWNrIDMwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcbiAgICAgICAgaGVpZ2h0OiA1NDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDU0MTtcbn1cblxuLnNtYWxsY2lyY2xlXG57XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDQ7XG4gICAgICAgIGhlaWdodDogNDtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3NtYWxsY2lyY2xlMVxue1xuXHR0b3A6IDExN3B4O1xuICAgICAgICBsZWZ0OiAxMTdweDtcbn1cblxuI3NtYWxsY2lyY2xlMlxue1xuICAgICAgICB0b3A6IDExN3B4O1xuICAgICAgICBsZWZ0OiAyOTdweDtcbn1cblxuI3NtYWxsY2lyY2xlM1xue1xuICAgICAgICB0b3A6IDExN3B4O1xuICAgICAgICBsZWZ0OiA0NzdweDtcbn1cblxuI3NtYWxsY2lyY2xlNFxue1xuXHR0b3A6IDI5N3B4O1xuICAgICAgICBsZWZ0OiAxMTdweDtcbn1cblxuI3NtYWxsY2lyY2xlNVxue1xuXHR0b3A6IDI5N3B4O1xuICAgICAgICBsZWZ0OiAyOTdweDtcbn1cblxuI3NtYWxsY2lyY2xlNlxue1xuXHR0b3A6IDI5N3B4O1xuICAgICAgICBsZWZ0OiA0NzdweDtcbn1cblxuI3NtYWxsY2lyY2xlN1xue1xuXHR0b3A6IDQ3N3B4O1xuICAgICAgICBsZWZ0OiAxMTdweDtcbn1cblxuI3NtYWxsY2lyY2xlOFxue1xuXHR0b3A6IDQ3N3B4O1xuICAgICAgICBsZWZ0OiAyOTdweDtcbn1cblxuI3NtYWxsY2lyY2xlOVxue1xuXHR0b3A6IDQ3N3B4O1xuICAgICAgICBsZWZ0OiA0NzdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _omok_omok_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omok/omok.component */ "./src/app/omok/omok.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _battle_battle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./battle/battle.component */ "./src/app/battle/battle.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _omok_omok_component__WEBPACK_IMPORTED_MODULE_6__["OmokComponent"],
                _manager_manager_component__WEBPACK_IMPORTED_MODULE_7__["ManagerComponent"],
                _battle_battle_component__WEBPACK_IMPORTED_MODULE_8__["BattleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battle/battle.component.css":
/*!*********************************************!*\
  !*** ./src/app/battle/battle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#digitalClock{\n    font-size: 150px;\n    color:      rgb(0, 19, 26);\n    text-align: center;\n    font-family: 'Istok Web', sans-serif;\n}\n#clock{\n     border:1px solid rgb(200,200,200);\n     border-radius: 5px;\n}\n#board\n{\n        margin: 0 auto;\n        background-image: url(\"/static/images/board.jpg\");\n        background-repeat: no-repeat;\n        background-position: center-top;\n        background-size: contain;\n        height: 768px;\n        position: relative;\n        width: 768px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JhdHRsZS9iYXR0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QztBQUNBO0tBQ0ssaUNBQWlDO0tBQ2pDLGtCQUFrQjtBQUN2QjtBQUVBOztRQUVRLGNBQWM7UUFDZCxpREFBaUQ7UUFDakQsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixZQUFZO0FBQ3BCIiwiZmlsZSI6Ii4uL2JhdHRsZS9iYXR0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaWdpdGFsQ2xvY2t7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBjb2xvcjogICAgICByZ2IoMCwgMTksIDI2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdJc3RvayBXZWInLCBzYW5zLXNlcmlmO1xufVxuI2Nsb2Nre1xuICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMDAsMjAwLDIwMCk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2JvYXJkXG57XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9ib2FyZC5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlci10b3A7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNzY4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/battle/battle.component.html":
/*!**********************************************!*\
  !*** ./src/app/battle/battle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 \" id=\"clock\">\n                <div id=\"digitalClock\">{{currentTime}}</div>\n        </div>\n    </div>\n</div>\n\n\n<div style=\"text-align:center\">\n  <h1>\n    now turn {{ turn }}!\n  </h1>\n  <button (click)='game_start()'>Game Start</button>\n</div>\n\n<br/>\n<div style = \"text-align:center\">\n<body>\n    <canvas id=\"board\" width=768px height=768px></canvas>\n</body>\n</div>\n"

/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/*!********************************************!*\
  !*** ./src/app/battle/battle.component.ts ***!
  \********************************************/
/*! exports provided: BattleComponent, Result, Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var BattleComponent = /** @class */ (function () {
    function BattleComponent(http, route) {
        this.http = http;
        this.currentTime = 7;
        this.chk = 0;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000, 1000);
        this.turn = 0;
        this.old_turn = 0;
        this.products = [];
        this.c1 = new Result();
        this.c2 = new Session();
        this.turn = 0;
        this.c1.result = "playing...";
        this.c2.session = route.snapshot.params['id'];
    }
    BattleComponent.prototype.ngOnInit = function () {
    };
    BattleComponent.prototype.game_start = function () {
        var _this = this;
        if (this.chk == 0) {
            this.showDigitalClock();
            this.chk += 1;
        }
        else {
            alert("NO");
        }
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    };
    BattleComponent.prototype.showDigitalClock = function () {
        var _this = this;
        this.currentTime -= 1;
        this.intervalId = setTimeout(function () {
            _this.showDigitalClock();
        }, 1000);
    };
    BattleComponent.prototype.onTimeOut = function () {
        var _this = this;
        this.resultData().subscribe(function (m) { return _this.c1.result = m.toString(); });
        this.getAllData().subscribe(function (data) {
            _this.products = data;
            _this.old_turn = _this.turn;
            _this.turn = _this.products.length;
            if (_this.currentTime > 0 && _this.old_turn < _this.turn) {
                _this.currentTime = 7;
            }
            if (_this.currentTime < 0 && _this.old_turn == _this.turn) {
                alert("Game Over");
                _this.sub.unsubscribe();
                _this.currentTime = 0;
                clearTimeout(_this.intervalId);
            }
            if (_this.c1.result != "playing...") {
                alert(_this.c1.result);
                _this.sub.unsubscribe();
                clearTimeout(_this.intervalId);
            }
        });
        var canvas = document.getElementById('board');
        if (canvas.getContext) {
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var entry = _a[_i];
                var color = entry.color;
                var coor_X1 = entry.x1;
                var coor_Y1 = entry.y1;
                var coor_X2 = entry.x2;
                var coor_Y2 = entry.y2;
                var ctx = canvas.getContext('2d');
                var y1;
                var y2;
                switch (coor_X1) {
                    case 'A':
                        y1 = 0 * 40;
                        break;
                    case 'B':
                        y1 = 1 * 40;
                        break;
                    case 'C':
                        y1 = 2 * 40;
                        break;
                    case 'D':
                        y1 = 3 * 40;
                        break;
                    case 'E':
                        y1 = 4 * 40;
                        break;
                    case 'F':
                        y1 = 5 * 40;
                        break;
                    case 'G':
                        y1 = 6 * 40;
                        break;
                    case 'H':
                        y1 = 7 * 40;
                        break;
                    case 'I':
                        y1 = 8 * 40;
                        break;
                    case 'J':
                        y1 = 9 * 40;
                        break;
                    case 'K':
                        y1 = 10 * 40;
                        break;
                    case 'L':
                        y1 = 11 * 40;
                        break;
                    case 'M':
                        y1 = 12 * 40;
                        break;
                    case 'N':
                        y1 = 13 * 40;
                        break;
                    case 'O':
                        y1 = 14 * 40;
                        break;
                    case 'P':
                        y1 = 15 * 40;
                        break;
                    case 'Q':
                        y1 = 16 * 40;
                        break;
                    case 'R':
                        y1 = 17 * 40;
                        break;
                    case 'S':
                        y1 = 18 * 40;
                        break;
                }
                switch (coor_X2) {
                    case 'A':
                        y2 = 0 * 40;
                        break;
                    case 'B':
                        y2 = 1 * 40;
                        break;
                    case 'C':
                        y2 = 2 * 40;
                        break;
                    case 'D':
                        y2 = 3 * 40;
                        break;
                    case 'E':
                        y2 = 4 * 40;
                        break;
                    case 'F':
                        y2 = 5 * 40;
                        break;
                    case 'G':
                        y2 = 6 * 40;
                        break;
                    case 'H':
                        y2 = 7 * 40;
                        break;
                    case 'I':
                        y2 = 8 * 40;
                        break;
                    case 'J':
                        y2 = 9 * 40;
                        break;
                    case 'K':
                        y2 = 10 * 40;
                        break;
                    case 'L':
                        y2 = 11 * 40;
                        break;
                    case 'M':
                        y2 = 12 * 40;
                        break;
                    case 'N':
                        y2 = 13 * 40;
                        break;
                    case 'O':
                        y2 = 14 * 40;
                        break;
                    case 'P':
                        y2 = 15 * 40;
                        break;
                    case 'Q':
                        y2 = 16 * 40;
                        break;
                    case 'R':
                        y2 = 17 * 40;
                        break;
                    case 'S':
                        y2 = 18 * 40;
                        break;
                }
                var x1 = (coor_Y1 - 1) * 40;
                var x2 = (coor_Y2 - 1) * 40;
                ctx.beginPath();
                ctx.arc(x1 + 24, y1 + 24, 20, 0, 2 * Math.PI, false);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeSytle = "black";
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x2 + 24, y2 + 24, 20, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    };
    BattleComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/" + this.c2.session + "/");
    };
    BattleComponent.prototype.getAllData = function () {
        return this.http
            .get("./api/sessions/" + this.c2.session + "/stones");
    };
    BattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-battle',
            template: __webpack_require__(/*! ./battle.component.html */ "./src/app/battle/battle.component.html"),
            styles: [__webpack_require__(/*! ./battle.component.css */ "./src/app/battle/battle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BattleComponent);
    return BattleComponent;
}());

var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());



/***/ }),

/***/ "./src/app/manager/manager.component.css":
/*!***********************************************!*\
  !*** ./src/app/manager/manager.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manager/manager.component.html":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagerComponent = /** @class */ (function () {
    function ManagerComponent() {
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/manager/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/omok/omok.component.css":
/*!*****************************************!*\
  !*** ./src/app/omok/omok.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#digitalClock{\n    font-size: 150px;\n    color: \trgb(0, 19, 26);\n    text-align: center;\n    font-family: 'Istok Web', sans-serif;\n}\n#clock{\n     border:1px solid rgb(200,200,200);\n     border-radius: 5px;\n}\n#board\n{\n        margin: 0 auto;\n        background-image: url(\"/static/images/board.jpg\");\n        background-repeat: no-repeat;\n        background-position: center-top;\n        background-size: contain;\n        height: 768px;\n        position: relative;\n        width: 768px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9tb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QztBQUNBO0tBQ0ssaUNBQWlDO0tBQ2pDLGtCQUFrQjtBQUN2QjtBQUVBOztRQUVRLGNBQWM7UUFDZCxpREFBaUQ7UUFDakQsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixZQUFZO0FBQ3BCIiwiZmlsZSI6Im9tb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaWdpdGFsQ2xvY2t7XG4gICAgZm9udC1zaXplOiAxNTBweDtcbiAgICBjb2xvcjogXHRyZ2IoMCwgMTksIDI2KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdJc3RvayBXZWInLCBzYW5zLXNlcmlmO1xufVxuI2Nsb2Nre1xuICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMDAsMjAwLDIwMCk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2JvYXJkXG57XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9ib2FyZC5qcGdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlci10b3A7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNzY4cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/omok/omok.component.html":
/*!******************************************!*\
  !*** ./src/app/omok/omok.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 \" id=\"clock\">\n\t\t<div id=\"digitalClock\">{{currentTime}}</div>\n        </div>\n    </div>\n</div>\n\n\n<div style=\"text-align:center\">\n  <h1>\n    now turn {{ turn }}!\n  </h1>\n  <button (click)='game_start()'>Game Start</button>\n</div>\n\n<br/>\n<div style = \"text-align:center\">\n<body>\n    <canvas id=\"board\" width=768px height=768px></canvas>\n</body>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/omok/omok.component.ts":
/*!****************************************!*\
  !*** ./src/app/omok/omok.component.ts ***!
  \****************************************/
/*! exports provided: OmokComponent, Result, Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmokComponent", function() { return OmokComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var OmokComponent = /** @class */ (function () {
    function OmokComponent(http) {
        var _this = this;
        this.http = http;
        this.currentTime = 7;
        this.chk = 0;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 1000);
        this.turn = 0;
        this.old_turn = 0;
        this.products = [];
        this.c1 = new Result();
        this.c2 = new Session();
        this.turn = 0;
        this.c1.result = "playing...";
        this.http.get("./getsession/").subscribe(function (c) { return _this.c2.session = c.toString(); });
    }
    OmokComponent.prototype.ngOnInit = function () {
    };
    OmokComponent.prototype.game_start = function () {
        var _this = this;
        if (this.chk == 0) {
            this.showDigitalClock();
            this.chk += 1;
        }
        else {
            alert("NO");
        }
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    };
    OmokComponent.prototype.showDigitalClock = function () {
        var _this = this;
        this.currentTime -= 1;
        this.intervalId = setTimeout(function () {
            _this.showDigitalClock();
        }, 1000);
    };
    OmokComponent.prototype.onTimeOut = function () {
        var _this = this;
        this.resultData().subscribe(function (m) { return _this.c1.result = m.toString(); });
        this.getAllData().subscribe(function (data) {
            _this.products = data;
            _this.old_turn = _this.turn;
            _this.turn = _this.products.length;
            if (_this.currentTime > 0 && _this.old_turn < _this.turn) {
                _this.currentTime = 7;
            }
            if (_this.currentTime < 0 && _this.old_turn == _this.turn) {
                alert("Game Over");
                _this.sub.unsubscribe();
                _this.currentTime = 0;
                clearTimeout(_this.intervalId);
            }
            if (_this.c1.result != "playing...") {
                alert(_this.c1.result);
                _this.sub.unsubscribe();
                clearTimeout(_this.intervalId);
            }
        });
        var canvas = document.getElementById('board');
        if (canvas.getContext) {
            var count = 0;
            for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                var entry = _a[_i];
                count++;
                var color = entry.color;
                var coor_X1 = entry.x1;
                var coor_Y1 = entry.y1;
                var coor_X2 = entry.x2;
                var coor_Y2 = entry.y2;
                var ctx = canvas.getContext('2d');
                var x1 = this.convX(coor_X1);
                var x2 = this.convX(coor_X2);
                var y1 = this.convY(coor_Y1);
                var y2 = this.convY(coor_Y2);
                var line_color = "black";
                if (this.turn == count)
                    line_color = "red";
                ctx.beginPath();
                ctx.arc(x1, y1, 19, 0, 2 * Math.PI, false);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.strokeStyle = line_color;
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(x2, y2, 19, 0, 2 * Math.PI, false);
                ctx.fill();
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
    };
    OmokComponent.prototype.convY = function (oriY) {
        return (19 - oriY) * 40 + 24;
    };
    OmokComponent.prototype.convX = function (oriX) {
        var x;
        switch (oriX) {
            case 'A':
                x = 0 * 40;
                break;
            case 'B':
                x = 1 * 40;
                break;
            case 'C':
                x = 2 * 40;
                break;
            case 'D':
                x = 3 * 40;
                break;
            case 'E':
                x = 4 * 40;
                break;
            case 'F':
                x = 5 * 40;
                break;
            case 'G':
                x = 6 * 40;
                break;
            case 'H':
                x = 7 * 40;
                break;
            case 'I':
                x = 8 * 40;
                break;
            case 'J':
                x = 9 * 40;
                break;
            case 'K':
                x = 10 * 40;
                break;
            case 'L':
                x = 11 * 40;
                break;
            case 'M':
                x = 12 * 40;
                break;
            case 'N':
                x = 13 * 40;
                break;
            case 'O':
                x = 14 * 40;
                break;
            case 'P':
                x = 15 * 40;
                break;
            case 'Q':
                x = 16 * 40;
                break;
            case 'R':
                x = 17 * 40;
                break;
            case 'S':
                x = 18 * 40;
                break;
        }
        return x + 24;
    };
    OmokComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/" + this.c2.session);
    };
    OmokComponent.prototype.getAllData = function () {
        return this.http
            .get("./api/sessions/" + this.c2.session + "/stones");
    };
    OmokComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-omok',
            template: __webpack_require__(/*! ./omok.component.html */ "./src/app/omok/omok.component.html"),
            styles: [__webpack_require__(/*! ./omok.component.css */ "./src/app/omok/omok.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OmokComponent);
    return OmokComponent;
}());

var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cykim/hackathon/Connect6/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map