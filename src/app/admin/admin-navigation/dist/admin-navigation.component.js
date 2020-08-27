"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminNavigationComponent = void 0;
var core_1 = require("@angular/core");
var layout_1 = require("@angular/cdk/layout");
var operators_1 = require("rxjs/operators");
var AdminNavigationComponent = /** @class */ (function () {
    function AdminNavigationComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(layout_1.Breakpoints.Handset)
            .pipe(operators_1.map(function (result) { return result.matches; }), operators_1.shareReplay());
        this.headerAdmin = "Welcome to Admin Page";
        this.menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
    }
    AdminNavigationComponent.prototype.navigateToMenu = function (name) {
        if (!name)
            return;
        else
            this.headerAdmin = name;
    };
    AdminNavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-navigation',
            templateUrl: './admin-navigation.component.html',
            styleUrls: ['./admin-navigation.component.scss']
        })
    ], AdminNavigationComponent);
    return AdminNavigationComponent;
}());
exports.AdminNavigationComponent = AdminNavigationComponent;
