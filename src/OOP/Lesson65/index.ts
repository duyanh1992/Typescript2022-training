class Department {
  private employees: string[] = []

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
}

class ItDepartment extends Department {
  private admins: string[];
  constructor(id: string, admins: string[]) {
    super('IT', id);
    this.admins = admins;
  }

  addAdmins() {
    this.admins.push('Max');
  }

  showAdmins() {
    console.log(this.admins);
  }
}

// const depart1 = new Department('Accounting', '0001');
// depart1.showInfo()
// depart1.addEmployee('Duy Anh');
// depart1.showEmployee();
const it1 = new ItDepartment('0002', []);
it1.addAdmins();
it1.showAdmins();
