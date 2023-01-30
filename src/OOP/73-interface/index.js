// type FuncType = (num1: number, num2: number) => number;
var plus = function (num1, num2) {
    return num1 + num2;
};
var ItDepartment = /** @class */ (function () {
    function ItDepartment(n) {
        this.totalEmployee = 60;
        this.name = n;
    }
    ItDepartment.prototype.add = function (name) {
        console.log('name');
    };
    return ItDepartment;
}());
var depart1 = new ItDepartment('IT room 2');
// depart1.name = '';
console.log('depart1:', depart1);
