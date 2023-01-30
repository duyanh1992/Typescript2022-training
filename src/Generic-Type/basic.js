function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var result = merge({ name: 'Duy Anh' }, { age: 31 });
function showLength(arg) {
    var des = "Got no value";
    if (arg.length > 0)
        des = "Got ".concat(arg.length, " value");
    return [arg, des];
}
console.log(showLength('Hello guys'));
