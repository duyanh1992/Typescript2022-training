var Department = /** @class */ (function () {
    function Department(n) {
        this.name = 'DEFAULT';
        this.name = n;
    }
    Department.prototype.showName = function () {
        console.log('name:', this.name);
    };
    return Department;
}());
var depart1 = new Department('Sleppy');
depart1.showName();
var depart2 = { name: "Dummy", showName: depart1.showName };
depart2.showName();
