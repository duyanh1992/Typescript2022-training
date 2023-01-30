class Department {
  name: string = 'DEFAULT'

  constructor(n: string) {
    this.name = n;
  }
}

const depart1 = new Department('Sleppy');
console.log('depart1:', depart1);
