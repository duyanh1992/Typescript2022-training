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
    }
    Department.prototype.showInfo = function () {
        console.log(this.name + " department with id: " + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.showEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, 'IT', id) || this;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.addAdmins = function () {
        this.admins.push('Max');
    };
    ItDepartment.prototype.showAdmins = function () {
        console.log(this.admins);
    };
    return ItDepartment;
}(Department));
// const depart1 = new Department('Accounting', '0001');
// depart1.showInfo()
// depart1.addEmployee('Duy Anh');
// depart1.showEmployee();
var it1 = new ItDepartment('0002', []);
it1.addAdmins();
it1.showAdmins();
