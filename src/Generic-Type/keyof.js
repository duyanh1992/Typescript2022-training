function test(obj, key) {
    console.log('111111111111');
    return obj[key];
}
var proname = 'myproperty';
console.log(test({}, proname));
