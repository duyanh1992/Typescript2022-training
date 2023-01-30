function test(obj: object, key: string) {
  console.log('111111111111');
  return obj[key]
}

const proname = 'myproperty';

console.log(test({}, proname))
