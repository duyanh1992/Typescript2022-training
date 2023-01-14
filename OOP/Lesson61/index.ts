class Department {
  name: string = 'DEFAULT'

  constructor(n: string) {
    this.name = n;
  }

  showName(this: Department) {
    console.log('name:', this.name);
  }
}

const depart1 = new Department('Sleppy');
depart1.showName();

const depart2 = { name: "Dummy", showName: depart1.showName }
depart2.showName();
