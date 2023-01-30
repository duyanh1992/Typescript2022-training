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
var Department = /** @class */ (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.test = 1000;
    }
    Department.prototype.showInfo = function () {
        console.log(this.name + " department with id: " + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.showEmployee = function () {
        return this.employeeTotal;
    };
    Department.showEmployeeTotal = function () {
        return { total: this.test };
    };
    Department.employeeTotal = 50;
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, 'IT', id) || this;
        _this.admins = admins;
        return _this;
        // this.admins = admins;
    }
    // get getRecentAdmin() {
    //   if (!this.recentAdmin) throw new Error('Error')
    //   return this.recentAdmin;
    // }
    //
    // set setRecentAdmin(item) {
    //   if (!item) throw new Error('Error')
    //   this.recentAdmin = item
    // }
    ItDepartment.prototype.addAdmins = function (item) {
        this.admins.push(item);
    };
    ItDepartment.prototype.showAdmins = function () {
        console.log(this.admins);
    };
    return ItDepartment;
}(Department));
var depart1 = new Department('NIW', '0001');
var it1 = new ItDepartment('0002', []);
console.log('employeeTotal:', Department.employeeTotal);
console.log('showEmployeeTotal', Department.showEmployeeTotal());
console.log('showEmployee', depart1.showEmployee());
