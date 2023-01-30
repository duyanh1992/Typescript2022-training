const person : {
  role: [number, string]
} = {
  role: [2, 'author']
}

person.role = [789, 'DEF'];

console.log(person.role);
