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
var _a;
var SupportedCountries;
(function (SupportedCountries) {
    SupportedCountries[SupportedCountries["LT"] = 0] = "LT";
    SupportedCountries[SupportedCountries["DE"] = 1] = "DE";
    SupportedCountries[SupportedCountries["US"] = 2] = "US";
    SupportedCountries[SupportedCountries["UK"] = 3] = "UK";
})(SupportedCountries || (SupportedCountries = {}));
var CountryTaxes = (_a = {},
    _a[SupportedCountries.LT] = 15,
    _a[SupportedCountries.DE] = 20,
    _a[SupportedCountries.UK] = 25,
    _a[SupportedCountries.US] = 30,
    _a);
var DeveloperFocus;
(function (DeveloperFocus) {
    DeveloperFocus["BACKEND"] = "Backend";
    DeveloperFocus["FRONTEND"] = "Frontend";
    DeveloperFocus["FULLSTACK"] = "Fullstack";
})(DeveloperFocus || (DeveloperFocus = {}));
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "".concat(this.firstName, " ").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.paySalary = function () {
        return "Transaction to ".concat(this.fullName, " of ").concat(this.getSalary(), "\u20AC has been made");
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, country, zipCode, salary, focus) {
        var _this = _super.call(this, firstName, lastName, country) || this;
        _this.zipCode = zipCode;
        _this.salary = salary;
        _this.focus = focus;
        return _this;
    }
    Developer.prototype.getDescription = function () {
        return "Hi, I'm ".concat(this.fullName, " and I'm currently focusing on ").concat(this.focus, " development");
    };
    Developer.prototype.getSalary = function () {
        return this.deductTaxes(this.salary);
    };
    Developer.prototype.deductTaxes = function (salary) {
        var parsedSalary = typeof salary === "number" ? salary : parseInt(salary, 10);
        return (parsedSalary * (100 - CountryTaxes[this.country])) / 100;
    };
    return Developer;
}(Employee));
var john = new Developer("John", "Doe", SupportedCountries.UK, "N21 3DP", 12000, DeveloperFocus.FRONTEND);
console.log(typeof john.zipCode === "string");
console.log(john.getDescription());
console.log(john.paySalary());
var klaus = new Developer("Klaus", "Fischer", SupportedCountries.DE, 85652, "8000", DeveloperFocus.FULLSTACK);
console.log(typeof klaus.zipCode === "number");
console.log(klaus.getDescription());
console.log(klaus.paySalary());
