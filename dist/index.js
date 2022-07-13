"use strict";
// 1.	Create class, which extends	from an	AbstractClass
// 2.	Apply interfaces to	class,	it's method, property
// 3.	Use	generics	there
// 4.	Analyze	transpiled	code in	ES5	and	explain	it
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return {
                fullName: "".concat(this.firstName, " ").concat(this.lastName)
            };
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.paySalary = function () {
        return "".concat(this.fullName.fullName, " received ").concat(this.getSalary(), " Eur.");
    };
    return Employee;
}());
exports.Employee = Employee;
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.applyTaxes([this.salary]);
    };
    FullTimeEmployee.prototype.applyTaxes = function (salary) {
        var taxes = Math.floor(Math.random() * salary.length);
        return salary[taxes];
    };
    return FullTimeEmployee;
}(Employee));
var john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.paySalary());
