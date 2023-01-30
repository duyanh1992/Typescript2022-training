function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const result = merge({name: 'Duy Anh'}, {age: 31});

interface Lengthy {
  length: number
}


function showLength<T extends Lengthy>(arg: T): [T, string] {
  let des = "Got no value"
  if(arg.length > 0) des = `Got ${arg.length} value`

  return [ arg, des ]
}

console.log(showLength('Hello guys'));
