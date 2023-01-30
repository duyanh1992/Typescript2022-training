class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.employeeTotal = 50;
    }
    showInfo() {
        console.log(this.name + " department with id: " + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showEmployee() {
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    constructor(id, admins) {
        super('IT', id);
        this.admins = admins;
        // this.admins = admins;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ItDepartment('0001', ['Admin1']);
        return this.instance;
    }
    get getRecentAdmin() {
        if (!this.recentAdmin)
            throw new Error('Error');
        return this.recentAdmin;
    }
    set setRecentAdmin(item) {
        if (!item)
            throw new Error('Error');
        this.recentAdmin = item;
    }
    addAdmins(item) {
        this.admins.push(item);
    }
    showAdmins() {
        console.log(this.admins);
    }
    showEmployeeTotal() {
        return 'employeeTotal222: ' + this.employeeTotal;
    }
}
// const depart1 = new ItDepartment('0001', ['Admin1']);
const instanceTest = ItDepartment.getInstance();
console.log('instanceTest:', instanceTest);
