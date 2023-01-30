function add (a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a+b;
  return a.toString() + b.toString()
}

console.log(add(55, 99));
