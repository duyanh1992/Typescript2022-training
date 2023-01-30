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
  private instance;
  private constructor(id: string, private admins: string[]) {
    super('IT', id);
    // this.admins = admins;
  }

  static getInstance() {
    if (this.instance) {
      return this.instance
    }

    this.instance = new ItDepartment('0001', ['Admin1']);

    return this.instance;
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

// const depart1 = new ItDepartment('0001', ['Admin1']);
const instanceTest = ItDepartment.getInstance();

console.log('instanceTest:', instanceTest);
