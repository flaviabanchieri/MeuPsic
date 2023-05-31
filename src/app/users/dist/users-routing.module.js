"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var list_component_1 = require("./list.component");
var add_edit_component_1 = require("./add-edit.component");
var home_1 = require("./home");
var routes = [
    {
        path: '', component: home_1.HomeComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'add', component: add_edit_component_1.AddEditComponent },
            { path: 'edit/:id', component: add_edit_component_1.AddEditComponent }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
exports.UsersRoutingModule = UsersRoutingModule;
