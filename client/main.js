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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.module */ "./src/app/components/dashboard/dashboard.module.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable:max-line-length









/**
 * component and services and modules
 */






var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'sign-up', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_10__["SignUpComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_12__["CategoryService"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/add-category/add-category.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/add-category/add-category.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<ul class=\"breadcrumb\">\n  <li>Add Category</li>\n  <li><a href=\"/category\">Category List</a></li>\n  <li><a href=\"/\">Home</a></li>\n</ul>\n<div class=\"container\">\n  add-category\n</div>\n\n\n<!-- footer -->\n<ul class=\"breadcrumb bottom\">\n  <li>Add Category</li>\n  <li><a href=\"/category\">Category List</a></li>\n  <li><a href=\"/\">Home</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/components/dashboard/add-category/add-category.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/dashboard/add-category/add-category.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9hZGQtY2F0ZWdvcnkvYWRkLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbSB7IFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/add-category/add-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dashboard/add-category/add-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
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

var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent() {
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/components/dashboard/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/components/dashboard/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/category/category.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/category/category.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  category-list\n</div>\n\n\n <!-- add category fab icon -->\n<div>\n    <button mat-fab color=\"accent\" class=\"mat-elevation-z16 add-fab\" matTooltip=\"Add a new category\" [routerLink]=\"['/category/add']\">\n        <mat-icon>add</mat-icon>\n    </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/category/category.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/category/category.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-fab {\n  position: fixed;\n  bottom: 50px;\n  right: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/category/category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/category/category.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
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

var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/dashboard/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/dashboard/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/components/dashboard/add-category/add-category.component.ts");
/* harmony import */ var _detail_category_detail_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-category/detail-category.component */ "./src/app/components/dashboard/detail-category/detail-category.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/category.component */ "./src/app/components/dashboard/category/category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], children: [
            { path: '', component: _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"] },
            { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"] },
            { path: 'category/add', component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"] },
            { path: 'category/details', component: _detail_category_detail_category_component__WEBPACK_IMPORTED_MODULE_5__["DetailCategoryComponent"] },
            { path: 'category/edit/:category_id', component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_4__["AddCategoryComponent"] },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  justify-content: space-between;\n  font-size: 18px; }\n  .toolbar .logout {\n    display: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    justify-content: flex-start; }\n  .toolbar .logout .username {\n      padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGdCQUFlLEVBWWhCO0VBakJEO0lBUUksY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsNEJBQTJCLEVBSzVCO0VBaEJIO01BY00sb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE4cHg7XG5cbiAgJiAubG9nb3V0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJiAudXNlcm5hbWV7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!(localStorage.getItem('access_token') || sessionStorage.getItem('access_token'))) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['']);
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/components/dashboard/add-category/add-category.component.ts");
/* harmony import */ var _detail_category_detail_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-category/detail-category.component */ "./src/app/components/dashboard/detail-category/detail-category.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/category.component */ "./src/app/components/dashboard/category/category.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/dashboard/toolbar/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable: max-line-length













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"],
                _detail_category_detail_category_component__WEBPACK_IMPORTED_MODULE_3__["DetailCategoryComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["DashboardRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/detail-category/detail-category.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/detail-category/detail-category.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<ul class=\"breadcrumb\">\n    <li>Category Detail</li>\n    <li><a href=\"/category\">Category List</a></li>\n    <li><a href=\"/\">Home</a></li>\n  </ul>\n  <div class=\"container\">\n      category-detail\n  </div>\n  \n  \n  <!-- footer -->\n<ul class=\"breadcrumb bottom\">\n  <li>Category Detail</li>\n  <li><a href=\"/category\">Category List</a></li>\n  <li><a href=\"/\">Home</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/components/dashboard/detail-category/detail-category.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/dashboard/detail-category/detail-category.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGV0YWlsLWNhdGVnb3J5L2RldGFpbC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kZXRhaWwtY2F0ZWdvcnkvZGV0YWlsLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbSB7IFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/detail-category/detail-category.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/detail-category/detail-category.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCategoryComponent", function() { return DetailCategoryComponent; });
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

var DetailCategoryComponent = /** @class */ (function () {
    function DetailCategoryComponent() {
    }
    DetailCategoryComponent.prototype.ngOnInit = function () {
    };
    DetailCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-category',
            template: __webpack_require__(/*! ./detail-category.component.html */ "./src/app/components/dashboard/detail-category/detail-category.component.html"),
            styles: [__webpack_require__(/*! ./detail-category.component.scss */ "./src/app/components/dashboard/detail-category/detail-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailCategoryComponent);
    return DetailCategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\" class=\"mat-elevation-z4 toolbar\">\n    <div>Loopback-NG</div>\n    <div class=\"logout\">\n        <div class=\"username\">{{username}}</div>\n        <button mat-stroked-button class=\"mat-elevation-z4\" color=\"#ffffff\" type=\"submit\" (click)=\"logout()\">Logout</button>\n    </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  justify-content: space-between;\n  font-size: 18px; }\n  .toolbar .logout {\n    display: flex;\n    padding-left: 10px;\n    padding-right: 10px;\n    justify-content: flex-start; }\n  .toolbar .logout .username {\n      padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGdCQUFlLEVBWWhCO0VBakJEO0lBUUksY0FBYTtJQUNiLG1CQUFrQjtJQUNsQixvQkFBbUI7SUFDbkIsNEJBQTJCLEVBSzVCO0VBaEJIO01BY00sb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE4cHg7XG5cbiAgJiAubG9nb3V0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJiAudXNlcm5hbWV7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/toolbar/toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "./src/app/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(authService, categoryService, router) {
        this.authService = authService;
        this.categoryService = categoryService;
        this.router = router;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        // get user id
        if (localStorage.getItem('user_id')) {
            this.userid = localStorage.getItem('user_id');
        }
        else if (sessionStorage.getItem('user_id')) {
            this.userid = sessionStorage.getItem('user_id');
        }
        else {
            this.username = 'Username not found';
        }
        this.getProfile(this.userid);
    };
    ToolbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    // get user profile
    ToolbarComponent.prototype.getProfile = function (userid) {
        var _this = this;
        this.categoryService.getUserProfile(userid).subscribe(function (res) {
            debugger;
            if (res['id']) {
                _this.username = res['username'];
            }
            else {
            }
        });
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/dashboard/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/dashboard/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"login-form mat-elevation-z4\">\n    <div [formGroup]=\"authService.loginForm\">\n      <h2 class=\"mat-h2\">Login</h2>\n      <mat-form-field class=\"field-width\">\n        <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n        <mat-error *ngIf=\"authService.loginForm.controls['email'].errors?.required\">Email is mandatory.</mat-error>\n        <mat-error *ngIf=\"authService.loginForm.controls['email'].errors?.pattern\">invalid email.</mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"field-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required matInput>\n        <mat-error>Password is mandatory</mat-error>\n      </mat-form-field>\n      <button mat-raised-button class=\"field-width\" color=\"primary\" type=\"submit\"\n        (click)=\"loginUser(authService.loginForm.value)\" [disabled]=\"authService.loginForm.invalid\">Login</button>\n      </div>\n      <mat-checkbox class=\"remember-me\" [(ngModel)]=\"checked\">Remember me</mat-checkbox>\n      <div class=\"link\">\n        <a href=\"/sign-up\">Sign up</a>\n    </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 auto;\n  margin-top: 75px; }\n\n.login-form {\n  margin: 0 auto;\n  width: 20%;\n  padding: 20px; }\n\n.login-form h2, .login-form h5, .login-form .link {\n    text-align: center; }\n\n.login-form a:link {\n    font-size: 14px; }\n\n.login-form .field-width {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxlQUFjO0VBQ2QsV0FBVTtFQUNWLGNBQWEsRUFVZDs7QUFiRDtJQUtJLG1CQUFrQixFQUNuQjs7QUFOSDtJQVFJLGdCQUFlLEVBQ2hCOztBQVRIO0lBV0ksWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cbi5sb2dpbi1mb3JtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gICYgaDIsaDUsIC5saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgJiBhOmxpbmt7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICYgLmZpZWxkLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.checked = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.loginForm.reset();
    };
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        this.authService.userLogin(user).subscribe(function (res) {
            _this.authService.loginForm.reset();
            if (res['id']) {
                _this.authService.storeAdminData(res['id'], res['userId'], _this.checked);
                _this.router.navigate(['category']);
            }
            else {
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"sign-up-form mat-elevation-z4\" [formGroup]=\"authService.signupForm\">\n    <h2 class=\"mat-h2\">Sign up</h2>\n    <mat-form-field class=\"field-width\">\n      <input matInput type=\"text\" placeholder=\"Username\" formControlName=\"username\" required>\n      <mat-error>Username is mandatory</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"field-width\">\n      <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n      <mat-error *ngIf=\"authService.signupForm.controls['email'].errors?.required\">Email is mandatory.</mat-error>\n      <mat-error *ngIf=\"authService.signupForm.controls['email'].errors?.pattern\">invalid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"field-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required matInput>\n      <mat-error>Password is mandatory</mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"field-width\">\n      <input matInput type=\"password\" placeholder=\"Confirm password\" formControlName=\"confirm_password\" required matInput>\n      <mat-error>Confirm password required</mat-error>\n      <!-- <mat-error *ngIf=\"authService.signupForm.controls['confirm_password'].errors?.required\">Confirm password is required.</mat-error> -->\n      <!-- <mat-error *ngIf=\"authService.signupForm.controls['password'].value != authService.signupForm.controls['confirm_password'].value\">Password and confirm password is different.</mat-error> -->\n    </mat-form-field>\n    <button mat-raised-button class=\"field-width\" color=\"primary\" type=\"submit\" (click)=\"signupUser(authService.signupForm.value)\"\n      [disabled]=\"authService.signupForm.invalid\">Sign up</button>\n    <!-- <mat-checkbox class=\"remember-me\" [(ngModel)]=\"checked\">Remember me</mat-checkbox> -->\n   <div class=\"link\">\n      <a href=\"/login\">Login if Already sign up</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 auto;\n  margin-top: 75px; }\n\n.sign-up-form {\n  margin: 0 auto;\n  width: 20%;\n  padding: 20px; }\n\n.sign-up-form h2, .sign-up-form h5, .sign-up-form .link {\n    text-align: center; }\n\n.sign-up-form a:link {\n    font-size: 14px; }\n\n.sign-up-form .field-width {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RhZG55YTIvcHJvamVjdERldmVsb3BtZW50L1dlYi9XZWJTU1AvRnJvbnRlbmQtVGVzdC1Qcm9qZWN0L2FuZ3VsYXItc3JjL3NyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsZUFBYztFQUNkLFdBQVU7RUFDVixjQUFhLEVBVWQ7O0FBYkQ7SUFLSSxtQkFBa0IsRUFDbkI7O0FBTkg7SUFRSSxnQkFBZSxFQUNoQjs7QUFUSDtJQVdJLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuLnNpZ24tdXAtZm9ybSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICAmIGgyLGg1LCAubGluayB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICYgYTpsaW5re1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAmIC5maWVsZC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signupUser = function (user) {
        var _this = this;
        this.authService.userSignUp(user).subscribe(function (res) {
            if (res['id']) {
                _this.router.navigate(['login']);
            }
            else {
            }
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/components/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        else if (sessionStorage.getItem('access_token')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable: max-line-length





// import { HEADERS } from '../utils/Constant'
var AuthService = /** @class */ (function () {
    // category url
    function AuthService(http) {
        this.http = http;
        this.regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regex)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regex)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        /***
         * urls
         */
        this.LOGIN_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/Users/login';
        this.SIGNUP_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/Users';
        this.GET_USER_PROFILE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl + '/api/Users/';
    }
    // store admin data to local storage
    AuthService.prototype.storeAdminData = function (access_token, user_id, checked) {
        if (checked) {
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('user_id', user_id);
        }
        else {
            sessionStorage.setItem('access_token', access_token);
            sessionStorage.setItem('user_id', user_id);
        }
    };
    // load token
    AuthService.prototype.loadToken = function () {
        if (localStorage.getItem('access_token') !== null) {
            this.access_token = localStorage.getItem('access_token');
            this.user_id = localStorage.getItem('user_id');
        }
        else if (sessionStorage.getItem('access_token') !== null) {
            this.access_token = sessionStorage.getItem('access_token');
            this.user_id = sessionStorage.getItem('user_id');
        }
        else {
            this.access_token = '';
            this.user_id = '';
        }
    };
    // clear access_token on logout
    AuthService.prototype.logout = function () {
        this.access_token = null;
        localStorage.clear();
        sessionStorage.clear();
    };
    // get headers
    AuthService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    // get token
    AuthService.prototype.getToken = function () {
        this.loadToken();
        return this.access_token;
    };
    // authenticate
    AuthService.prototype.userLogin = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.LOGIN_URL, user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // sign up
    AuthService.prototype.userSignUp = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.SIGNUP_URL, user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable: max-line-length




var CategoryService = /** @class */ (function () {
    function CategoryService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    // Get user profile
    CategoryService.prototype.getUserProfile = function (userid) {
        var headers = this.authService.getHeaders();
        var ACCESS_TOKEN = this.authService.getToken();
        debugger;
        return this.http.get(this.authService.GET_USER_PROFILE_URL + userid + ("?access_token=" + ACCESS_TOKEN), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CategoryService);
    return CategoryService;
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
    production: false,
    serverUrl: 'http://localhost:7000'
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

module.exports = __webpack_require__(/*! /home/tadnya2/projectDevelopment/Web/WebSSP/Frontend-Test-Project/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map