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

module.exports = "html,body{\n        margin-left: 2%;\n        margin-right: 2%;\n        margin-top: 2%;\n        margin-bottom: 2%;\n}\n\n.c{\n    font-family: 'Sunflower', sans-serif; color: white;\n}\n\n.margin{\n    margin-left: 5%;\n    margin-right: 5%;\n}\n\n#shadow{\n    text-shadow: 4px 2px 2px gray;\n}\n\n#left-half{\n    float: left;\n    width: 49%;\n}\n\n#right-half{\n    float: right;\n    width: 49%;\n}\n\n#digitalClock{\n    font-size: 150px;\n    color:      rgb(0, 19, 26);\n    text-align: center;\n    font-family: 'Istok Web', sans-serif;\n}\n\n#clock{\n     border:1px solid rgb(200,200,200);\n     border-radius: 5px;\n}\n\n#board\n{\n        margin: 0 auto;\n        background-image: url(\"/static/images/board.jpg\");\n        background-repeat: no-repeat;\n        background-position: center-top;\n        background-size: contain;\n        height: 768px;\n        position: relative;\n        width: 768px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsaUJBQWlCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DLEVBQUUsWUFBWTtBQUN0RDs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFDQTtLQUNLLGlDQUFpQztLQUNqQyxrQkFBa0I7QUFDdkI7O0FBRUE7O1FBRVEsY0FBYztRQUNkLGlEQUFpRDtRQUNqRCw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7QUFDcEIiLCJmaWxlIjoiYmF0dGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHl7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uY3tcbiAgICBmb250LWZhbWlseTogJ1N1bmZsb3dlcicsIHNhbnMtc2VyaWY7IGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hcmdpbntcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbiNzaGFkb3d7XG4gICAgdGV4dC1zaGFkb3c6IDRweCAycHggMnB4IGdyYXk7XG59XG4jbGVmdC1oYWxme1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0OSU7XG59XG5cbiNyaWdodC1oYWxme1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogNDklO1xufVxuXG4jZGlnaXRhbENsb2Nre1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgY29sb3I6ICAgICAgcmdiKDAsIDE5LCAyNik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnSXN0b2sgV2ViJywgc2Fucy1zZXJpZjtcbn1cbiNjbG9ja3tcbiAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjAwLDIwMCwyMDApO1xuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNib2FyZFxue1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYm9hcmQuanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXItdG9wO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGhlaWdodDogNzY4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDc2OHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/battle/battle.component.html":
/*!**********************************************!*\
  !*** ./src/app/battle/battle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio autoplay loops>\n    <source src=\"https://t1.daumcdn.net/cfile/tistory/23663547585652B116?original.wav\" type=\"audio/wav\">\n</audio>\n\n<link href=\"https://fonts.googleapis.com/css?family=Sunflower:300&display=swap\" rel=\"stylesheet\">\n\n<div id=\"c\">\n  <h5 class=\"left-half\" id=\"margin\">\n    Black player <br/> \n    status: {{ c3.player1_status }} <br/>\n    time: {{ c4.black_timer }}\n  </h5>\n\n  <h5 class=\"right-half\" id=\"margin\">\n    White player <br/>\n    status: {{ c3.player2_status }} <br/>\n    time: {{ c4.white_timer }}\n  </h5>\n\n  <div style=\"text-align:center\">\n    <h3 style=\"color:red\">\n      {{ c1.result }}\n    </h3>\n    <h4>\n      now turn <div class=\"shadow\"> {{ turn_color }} </div>\n    </h4>\n  </div>\n</div>\n\n<br/>\n<div style = \"text-align:center\">\n<body>\n    <canvas id=\"board\" width=768px height=768px></canvas>\n</body>\n</div>\n"

/***/ }),

/***/ "./src/app/battle/battle.component.ts":
/*!********************************************!*\
  !*** ./src/app/battle/battle.component.ts ***!
  \********************************************/
/*! exports provided: BattleComponent, Result, Session, Status, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
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
        this.c4 = new Timer();
        this.turn = 0;
        this.turn_color = '';
        this.c1.result = '';
        this.c3.player1_status = "waiting...";
        this.c3.player2_status = "waiting...";
        this.c4.black_timer = 7;
        this.c4.white_timer = 7;
        this.c2.session = route.snapshot.params['id'];
        this.sub = this.source.subscribe(function (t) { return _this.onTimeOut(); });
    }
    BattleComponent.prototype.ngOnInit = function () {
    };
    BattleComponent.prototype.onTimeOut = function () {
        var _this = this;
        this.statusData().subscribe(function (s) {
            _this.c3.player1_status = s.player1_status.toString();
            _this.c3.player2_status = s.player2_status.toString();
        });
        this.timerData().subscribe(function (s) {
            _this.c4.black_timer = s.black_timer;
            _this.c4.white_timer = s.white_timer;
        });
        if (this.c3.player1_status != "waiting..." && this.c3.player2_status != "waiting...") {
            if (this.chk == 0) {
                this.chk += 1;
            }
            this.getAllData().subscribe(function (data) {
                _this.products = data;
                _this.old_turn = _this.turn;
                _this.turn = _this.products.length;
                if (_this.old_turn < _this.turn) {
                    var audio = new Audio('http://pds81.cafe.daum.net/original/5/cafe/2008/08/18/10/38/48a8d292cf08f&token=20080818&.wav');
                    audio.play();
                }
                if (_this.c1.result != '') {
                    _this.sub.unsubscribe();
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
                    if (this.turn < count + 2) {
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
            this.resultData().subscribe(function (m) { return _this.c1.result = m.toString(); });
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
    BattleComponent.prototype.timerData = function () {
        return this.http.get("./double_timer/" + this.c2.session);
    };
    BattleComponent.prototype.resultData = function () {
        return this.http.get("./resultdata/" + this.c2.session);
    };
    BattleComponent.prototype.getAllData = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("playerid", "admin");
        return this.http
            .get("./api/sessions/" + this.c2.session + "/get/", { params: params });
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

var Timer = /** @class */ (function () {
    function Timer() {
    }
    return Timer;
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

module.exports = "#digitalClock{\n    font-size: 150px;\n    color: \trgb(0, 19, 26);\n    text-align: center;\n    font-family: 'Istok Web', sans-serif;\n}\n#clock{\n     border:1px solid rgb(200,200,200);\n     border-radius: 5px;\n}\n#board\n{\n        margin: 0 auto;\n        background-image: url(\"/static/images/board.jpg\");\n        background-repeat: no-repeat;\n        background-position: center-top;\n        background-size: contain;\n        height: 768px;\n        position: relative;\n        width: 768px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL29tb2svb21vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDO0FBQ0E7S0FDSyxpQ0FBaUM7S0FDakMsa0JBQWtCO0FBQ3ZCO0FBRUE7O1FBRVEsY0FBYztRQUNkLGlEQUFpRDtRQUNqRCw0QkFBNEI7UUFDNUIsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4QixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFlBQVk7QUFDcEIiLCJmaWxlIjoiLi4vb21vay9vbW9rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlnaXRhbENsb2Nre1xuICAgIGZvbnQtc2l6ZTogMTUwcHg7XG4gICAgY29sb3I6IFx0cmdiKDAsIDE5LCAyNik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnSXN0b2sgV2ViJywgc2Fucy1zZXJpZjtcbn1cbiNjbG9ja3tcbiAgICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjAwLDIwMCwyMDApO1xuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNib2FyZFxue1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYm9hcmQuanBnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXItdG9wO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGhlaWdodDogNzY4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDc2OHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/omok/omok.component.html":
/*!******************************************!*\
  !*** ./src/app/omok/omok.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio autoplay loops>\n    <source src=\"https://t1.daumcdn.net/cfile/tistory/23663547585652B116?original.wav\" type=\"audio/wav\">\n</audio>\n<h1>\n  status {{ c3.status }}\n</h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 \" id=\"clock\">\n\t\t<div id=\"digitalClock\">{{currentTime}}</div>\n        </div>\n    </div>\n</div>\n\n\n<div style=\"text-align:center\">\n  <h1>\n    result {{ c1.result }}\n  </h1>\n  <h2>\n    now turn {{ turn_color }}\n  </h2>\n</div>\n\n<br/>\n<div style = \"text-align:center\">\n<body>\n    <canvas id=\"board\" width=768px height=768px></canvas>\n</body>\n</div>\n\n\n"

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
        params = params.append("playerid", "admin");
        return this.http
            .get("./api/sessions/" + this.c2.session + "/get/", { params: params });
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

module.exports = __webpack_require__(/*! /home/jihye/test/WorldOfConnect6/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map