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
    { path: 'single_game/:id', component: _omok_omok_component__WEBPACK_IMPORTED_MODULE_3__["OmokComponent"] },
    { path: 'double_game/:id', component: _battle_battle_component__WEBPACK_IMPORTED_MODULE_5__["BattleComponent"] },
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

module.exports = "#main\r\n{\r\n\tmargin: 0 auto;\r\n\theight: 600px;\r\n        position: relative;\r\n        width: 600px;\r\n        background: gold;\r\n}\r\n\r\n#board\r\n{\r\n        margin: 30px;\r\n        background-image: repeating-linear-gradient(0deg,transparent,transparent 29px, black 29px, black 30px), repeating-linear-gradient(-90deg,transparent,transparent 29px, black 29px, black 30px);\r\n        background-size: 30px 30px;\r\n        height: 541;\r\n        position: absolute;\r\n        width: 541;\r\n}\r\n\r\n.smallcircle\r\n{\r\n        border-radius: 50%;\r\n        width: 4;\r\n        height: 4;\r\n        background: black;\r\n        border: solid black;\r\n        position: absolute;\r\n}\r\n\r\n#smallcircle1\r\n{\r\n\ttop: 117px;\r\n        left: 117px;\r\n}\r\n\r\n#smallcircle2\r\n{\r\n        top: 117px;\r\n        left: 297px;\r\n}\r\n\r\n#smallcircle3\r\n{\r\n        top: 117px;\r\n        left: 477px;\r\n}\r\n\r\n#smallcircle4\r\n{\r\n\ttop: 297px;\r\n        left: 117px;\r\n}\r\n\r\n#smallcircle5\r\n{\r\n\ttop: 297px;\r\n        left: 297px;\r\n}\r\n\r\n#smallcircle6\r\n{\r\n\ttop: 297px;\r\n        left: 477px;\r\n}\r\n\r\n#smallcircle7\r\n{\r\n\ttop: 477px;\r\n        left: 117px;\r\n}\r\n\r\n#smallcircle8\r\n{\r\n\ttop: 477px;\r\n        left: 297px;\r\n}\r\n\r\n#smallcircle9\r\n{\r\n\ttop: 477px;\r\n        left: 477px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGNBQWM7Q0FDZCxhQUFhO1FBQ04sa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixnQkFBZ0I7QUFDeEI7O0FBRUE7O1FBRVEsWUFBWTtRQUNaLDhMQUE4TDtRQUM5TCwwQkFBMEI7UUFDMUIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO0FBQ2xCOztBQUVBOztRQUVRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCO0FBQzFCOztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztRQUVRLFVBQVU7UUFDVixXQUFXO0FBQ25COztBQUVBOztRQUVRLFVBQVU7UUFDVixXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25COztBQUVBOztDQUVDLFVBQVU7UUFDSCxXQUFXO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5cclxue1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBnb2xkO1xyXG59XHJcblxyXG4jYm9hcmRcclxue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDBkZWcsdHJhbnNwYXJlbnQsdHJhbnNwYXJlbnQgMjlweCwgYmxhY2sgMjlweCwgYmxhY2sgMzBweCksIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTkwZGVnLHRyYW5zcGFyZW50LHRyYW5zcGFyZW50IDI5cHgsIGJsYWNrIDI5cHgsIGJsYWNrIDMwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTQxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTQxO1xyXG59XHJcblxyXG4uc21hbGxjaXJjbGVcclxue1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogNDtcclxuICAgICAgICBoZWlnaHQ6IDQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTFcclxue1xyXG5cdHRvcDogMTE3cHg7XHJcbiAgICAgICAgbGVmdDogMTE3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTJcclxue1xyXG4gICAgICAgIHRvcDogMTE3cHg7XHJcbiAgICAgICAgbGVmdDogMjk3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTNcclxue1xyXG4gICAgICAgIHRvcDogMTE3cHg7XHJcbiAgICAgICAgbGVmdDogNDc3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTRcclxue1xyXG5cdHRvcDogMjk3cHg7XHJcbiAgICAgICAgbGVmdDogMTE3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTVcclxue1xyXG5cdHRvcDogMjk3cHg7XHJcbiAgICAgICAgbGVmdDogMjk3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTZcclxue1xyXG5cdHRvcDogMjk3cHg7XHJcbiAgICAgICAgbGVmdDogNDc3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTdcclxue1xyXG5cdHRvcDogNDc3cHg7XHJcbiAgICAgICAgbGVmdDogMTE3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZThcclxue1xyXG5cdHRvcDogNDc3cHg7XHJcbiAgICAgICAgbGVmdDogMjk3cHg7XHJcbn1cclxuXHJcbiNzbWFsbGNpcmNsZTlcclxue1xyXG5cdHRvcDogNDc3cHg7XHJcbiAgICAgICAgbGVmdDogNDc3cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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

module.exports = "#digitalClock{\r\n    font-size: 150px;\r\n    color:      rgb(0, 19, 26);\r\n    text-align: center;\r\n    font-family: 'Istok Web', sans-serif;\r\n}\r\n#clock{\r\n     border:1px solid rgb(200,200,200);\r\n     border-radius: 5px;\r\n}\r\n#board\r\n{\r\n        margin: 0 auto;\r\n        background-image: url(\"/static/images/board.jpg\");\r\n        background-repeat: no-repeat;\r\n        background-position: center-top;\r\n        background-size: contain;\r\n        height: 768px;\r\n        position: relative;\r\n        width: 768px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS9iYXR0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4QztBQUNBO0tBQ0ssaUNBQWlDO0tBQ2pDLGtCQUFrQjtBQUN2QjtBQUVBOztRQUVRLGNBQWM7UUFDZCxpREFBaUQ7UUFDakQsNEJBQTRCO1FBQzVCLCtCQUErQjtRQUMvQix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixZQUFZO0FBQ3BCIiwiZmlsZSI6ImJhdHRsZS9iYXR0bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkaWdpdGFsQ2xvY2t7XHJcbiAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgY29sb3I6ICAgICAgcmdiKDAsIDE5LCAyNik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XHJcbn1cclxuI2Nsb2Nre1xyXG4gICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDIwMCwyMDAsMjAwKTtcclxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNib2FyZFxyXG57XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYm9hcmQuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLXRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDc2OHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/battle/battle.component.html":
/*!**********************************************!*\
  !*** ./src/app/battle/battle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio autoplay loops>\r\n    <source src=\"/media/BornSinger.mp3\" type=\"audio/mp3\">\r\n</audio>\r\n<h1>\r\n  player1_status {{ c3.player1_status }}\r\n</h1>\r\n\r\n<h2>\r\n  player2_status {{ c3.player2_status }}\r\n</h2>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 \" id=\"clock\">\r\n                <div id=\"digitalClock\">{{currentTime}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    result {{ c1.result }}\r\n  </h1>\r\n  <h2>\r\n    now turn {{ turn_color }}\r\n  </h2>\r\n</div>\r\n\r\n<br/>\r\n<div style = \"text-align:center\">\r\n<body>\r\n    <canvas id=\"board\" width=768px height=768px></canvas>\r\n</body>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/*!********************************************!*\
  !*** ./src/app/battle/battle.component.ts ***!
  \********************************************/
/*! exports provided: BattleComponent, Result, Session, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BattleComponent = /** @class */ (function () {
    function BattleComponent(http, route) {
        var _this = this;
        this.http = http;
        this.currentTime = 7;
        this.chk = 0;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 1000);
        this.turn = 0;
        this.old_turn = 0;
        this.turn_color = '';
        this.products = [];
        this.c1 = new Result();
        this.c2 = new Session();
        this.c3 = new Status();
        this.turn = 0;
        this.turn_color = '';
        this.c1.result = '';
        this.c3.player1_status = "대기중입니다";
        this.c3.player2_status = "대기중입니다";
        this.c2.session = route.snapshot.params['id'];
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    }
    BattleComponent.prototype.ngOnInit = function () {
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
        this.statusData().subscribe(function (s) {
            _this.c3.player1_status = s.player1_status.toString();
            _this.c3.player2_status = s.player2_status.toString();
        });
        if (this.c3.player1_status != "대기중입니다" && this.c3.player2_status != "대기중입니다") {
            if (this.chk == 0) {
                this.showDigitalClock();
                this.chk += 1;
            }
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
                if (_this.c1.result != '') {
                    _this.sub.unsubscribe();
                    clearTimeout(_this.intervalId);
                }
            });
            var canvas = document.getElementById('board');
            if (canvas.getContext) {
                var count = 0;
                for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (entry.x == "")
                        continue;
                    count++;
                    var color = entry.color;
                    var coor_X1 = entry.x;
                    var coor_Y1 = entry.y;
                    var ctx = canvas.getContext('2d');
                    var x1 = this.convX(coor_X1);
                    var y1 = this.convY(coor_Y1);
                    var line_color = "black";
                    if (this.turn < count + 3) {
                        if (color != "red") {
                            line_color = "red";
                            this.turn_color = color;
                        }
                    }
                    ctx.beginPath();
                    ctx.arc(x1, y1, 19, 0, 2 * Math.PI, false);
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = line_color;
                    ctx.stroke();
                    if (color == "black")
                        ctx.fillStyle = "white";
                    else
                        ctx.fillStyle = "black";
                    ctx.font = "17px Comic Sans MS";
                    if (color != "red")
                        ctx.fillText(count - 7, x1 - 5.8, y1 + 6);
                }
            }
        }
    };
    BattleComponent.prototype.convY = function (oriY) {
        return (19 - oriY) * 40 + 24;
    };
    BattleComponent.prototype.convX = function (oriX) {
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
    BattleComponent.prototype.statusData = function () {
        return this.http.get("./double_status/" + this.c2.session);
    };
    BattleComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/" + this.c2.session);
    };
    BattleComponent.prototype.getAllData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("colorid", "admin");
        return this.http
            .get("./api/sessions/" + this.c2.session + "/stones/", { params: params });
    };
    BattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battle',
            template: __webpack_require__(/*! ./battle.component.html */ "./src/app/battle/battle.component.html"),
            styles: [__webpack_require__(/*! ./battle.component.css */ "./src/app/battle/battle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
}());



/***/ }),

/***/ "./src/app/manager/manager.component.css":
/*!***********************************************!*\
  !*** ./src/app/manager/manager.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = "#digitalClock{\r\n    font-size: 150px;\r\n    color: \trgb(0, 19, 26);\r\n    text-align: center;\r\n    font-family: 'Istok Web', sans-serif;\r\n}\r\n#clock{\r\n     border:1px solid rgb(200,200,200);\r\n     border-radius: 5px;\r\n}\r\n#board\r\n{\r\n        margin: 0 auto;\r\n        background-image: url(\"/static/images/board.jpg\");\r\n        background-repeat: no-repeat;\r\n        background-position: center-top;\r\n        background-size: contain;\r\n        height: 768px;\r\n        position: relative;\r\n        width: 768px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9tb2svb21vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDO0FBQ0E7S0FDSyxpQ0FBaUM7S0FDakMsa0JBQWtCO0FBQ3ZCO0FBRUE7O1FBRVEsY0FBYztRQUNkLGlEQUFpRDtRQUNqRCw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7QUFDcEIiLCJmaWxlIjoib21vay9vbW9rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlnaXRhbENsb2Nre1xyXG4gICAgZm9udC1zaXplOiAxNTBweDtcclxuICAgIGNvbG9yOiBcdHJnYigwLCAxOSwgMjYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJc3RvayBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbiNjbG9ja3tcclxuICAgICBib3JkZXI6MXB4IHNvbGlkIHJnYigyMDAsMjAwLDIwMCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jYm9hcmRcclxue1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1hZ2VzL2JvYXJkLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlci10b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogNzY4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA3NjhweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/omok/omok.component.html":
/*!******************************************!*\
  !*** ./src/app/omok/omok.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio autoplay loops>\r\n    <source src=\"https://t1.daumcdn.net/cfile/tistory/23663547585652B116?original.wav\" type=\"audio/wav\">\r\n</audio>\r\n<h1>\r\n  status {{ c3.status }}\r\n</h1>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 \" id=\"clock\">\r\n\t\t<div id=\"digitalClock\">{{currentTime}}</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    result {{ c1.result }}\r\n  </h1>\r\n  <h2>\r\n    now turn {{ turn_color }}\r\n  </h2>\r\n</div>\r\n\r\n<br/>\r\n<div style = \"text-align:center\">\r\n<body>\r\n    <canvas id=\"board\" width=768px height=768px></canvas>\r\n</body>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/omok/omok.component.ts":
/*!****************************************!*\
  !*** ./src/app/omok/omok.component.ts ***!
  \****************************************/
/*! exports provided: OmokComponent, Result, Session, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmokComponent", function() { return OmokComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OmokComponent = /** @class */ (function () {
    function OmokComponent(http, route) {
        var _this = this;
        this.http = http;
        this.currentTime = 7;
        this.chk = 0;
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 1000);
        this.turn = 0;
        this.old_turn = 0;
        this.turn_color = '';
        this.products = [];
        this.c1 = new Result();
        this.c2 = new Session();
        this.c3 = new Status();
        this.turn = 0;
        this.turn_color = '';
        this.c1.result = '';
        this.c3.status = "대기중입니다";
        this.c2.session = route.snapshot.params['id'];
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    }
    OmokComponent.prototype.ngOnInit = function () {
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
        this.statusData().subscribe(function (s) { return _this.c3.status = s.toString(); });
        if (this.c3.status != "대기중입니다") {
            if (this.chk == 0) {
                this.showDigitalClock();
                this.chk += 1;
            }
            this.resultData().subscribe(function (m) { return _this.c1.result = m.toString(); });
            this.getAllData().subscribe(function (data) {
                _this.products = data;
                _this.old_turn = _this.turn;
                _this.turn = _this.products.length;
                if (_this.currentTime > 0 && _this.old_turn < _this.turn) {
                    _this.currentTime = 7;
                    var audio = new Audio('http://pds81.cafe.daum.net/original/5/cafe/2008/08/18/10/38/48a8d292cf08f&token=20080818&.wav');
                    audio.play();
                }
                if (_this.currentTime < 0 && _this.old_turn == _this.turn) {
                    alert("Game Over");
                    _this.sub.unsubscribe();
                    _this.currentTime = 0;
                    clearTimeout(_this.intervalId);
                }
                if (_this.c1.result != '') {
                    _this.sub.unsubscribe();
                    clearTimeout(_this.intervalId);
                }
            });
            var canvas = document.getElementById('board');
            if (canvas.getContext) {
                var count = 0;
                for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    if (entry.x == "")
                        continue;
                    count++;
                    var color = entry.color;
                    var coor_X1 = entry.x;
                    var coor_Y1 = entry.y;
                    var ctx = canvas.getContext('2d');
                    var x1 = this.convX(coor_X1);
                    var y1 = this.convY(coor_Y1);
                    var line_color = "black";
                    if (this.turn < count + 3) {
                        if (color != "red") {
                            line_color = "red";
                            this.turn_color = color;
                        }
                    }
                    ctx.beginPath();
                    ctx.arc(x1, y1, 19, 0, 2 * Math.PI, false);
                    ctx.fillStyle = color;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = line_color;
                    ctx.stroke();
                    if (color == "black")
                        ctx.fillStyle = "white";
                    else
                        ctx.fillStyle = "black";
                    ctx.font = "17px Comic Sans MS";
                    if (color != "red")
                        ctx.fillText(count - 7, x1 - 5.8, y1 + 6);
                }
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
    OmokComponent.prototype.statusData = function () {
        return this.http.get("./single_status/" + this.c2.session);
    };
    OmokComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/" + this.c2.session);
    };
    OmokComponent.prototype.getAllData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("colorid", "admin");
        return this.http
            .get("./api/sessions/" + this.c2.session + "/stones/", { params: params });
    };
    OmokComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-omok',
            template: __webpack_require__(/*! ./omok.component.html */ "./src/app/omok/omok.component.html"),
            styles: [__webpack_require__(/*! ./omok.component.css */ "./src/app/omok/omok.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
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

var Status = /** @class */ (function () {
    function Status() {
    }
    return Status;
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

module.exports = __webpack_require__(/*! /home/bodago/new/WorldOfConnect6/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map