"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppemployeeComponent = (function () {
    function AppemployeeComponent() {
        this.eName = "kathir";
        this.eId = 37;
        this.eSalary = 234567;
    }
    return AppemployeeComponent;
}());
AppemployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-component',
        templateUrl: './app.employeecomponent.html',
    })
], AppemployeeComponent);
exports.AppemployeeComponent = AppemployeeComponent;
//# sourceMappingURL=app.employeeComponent.js.map