function add(a, b, cb) {
    cb(a * 5);
    return a + b;
}
function showLog(a) {
    console.log('aaaaaaaaaa:', a);
}
var runVar;
runVar = add;
// runVar = showLog
// runVar = 7
console.log(runVar(7, 19, function (pr) {
    console.log(pr * 10);
}));
