type Combinable = string | number

function add(a: Combinable, b:Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a+b;
}

const result = add('Duy', ' Anh') as string;
result.split(' ');

console.log(result);
