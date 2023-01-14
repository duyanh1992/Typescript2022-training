// type FuncType = (num1: number, num2: number) => number;

interface FuncType {
  (num1: number, num2: number): number
}

interface Named {
  readonly name: string;
}

interface Add {
  add(name: string) : void;
}

const plus: FuncType = (num1: number, num2: number)  => {
  return num1+num2;
}

class ItDepartment implements Add, Named {
  public name: string;
  public totalEmployee: number = 60;

  constructor(n: string) {
    this.name = n;
  }

   add(name: string) {
     console.log('name');
   }
}

const depart1: ItDepartment =  new ItDepartment('IT room 2');
// depart1.name = '';

console.log('depart1:', depart1);
