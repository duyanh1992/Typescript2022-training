class Department {
  private employees: string[] = []
  private test = 1000
  static employeeTotal = 50

  constructor(public name: string, private readonly id: string) {
  }

  showInfo() {
    console.log(this.name+ " department with id: "+this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  showEmployee() {
    return this.employeeTotal;
  }

  static showEmployeeTotal() {
    return { total: this.test }
  }
}

class ItDepartment extends Department {
  // private admins: string[];
  protected recentAdmin: string
  constructor(id: string, private admins: string[]) {
    super('IT', id);
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

  addAdmins(item) {
    this.admins.push(item);
  }

  showAdmins() {
    console.log(this.admins);
  }
}
const depart1 = new Department('NIW', '0001');

const it1 = new ItDepartment('0002', []);


console.log('employeeTotal:', Department.employeeTotal);
console.log('showEmployeeTotal', Department.showEmployeeTotal());
console.log('showEmployee', depart1.showEmployee());
