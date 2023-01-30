class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
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
}
const it1 = new ItDepartment('0002', []);
it1.addAdmins('Ton Ngo Khong');
it1.setRecentAdmin = 'Ton Ngo Khong';
console.log(it1.getRecentAdmin);
