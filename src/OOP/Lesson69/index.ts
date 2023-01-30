abstract class Department {
  private employees: string[] = []

  public employeeTotal = 50

  constructor(public name: string, private readonly id: string) {
  }

  showInfo() {
    console.log(this.name+ " department with id: "+this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  showEmployee() {
    console.log(this.employees);
  }

  abstract showEmployeeTotal(): void;
}

class ItDepartment extends Department {
  // private admins: string[];
  protected recentAdmin: string
  constructor(id: string, private admins: string[]) {
    super('IT', id);
    // this.admins = admins;
  }

  get getRecentAdmin() {
    if (!this.recentAdmin) throw new Error('Error')
    return this.recentAdmin;
  }

  set setRecentAdmin(item) {
    if (!item) throw new Error('Error')
    this.recentAdmin = item
  }

  addAdmins(item) {
    this.admins.push(item);
  }

  showAdmins() {
    console.log(this.admins);
  }

  showEmployeeTotal() {
    return 'employeeTotal222: '+this.employeeTotal
  }
}

const depart1 = new ItDepartment();
console.log(depart1.showEmployeeTotal())
