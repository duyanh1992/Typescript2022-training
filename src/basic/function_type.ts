function add (a: number, b:number, cb: (param) => void) {
  cb(a*5);
  return a+b
}

function showLog (a: number) {
  console.log('aaaaaaaaaa:', a);
}

let runVar: (a: number, b:number, cb: Function) => number;
runVar = add
// runVar = showLog
// runVar = 7

console.log(runVar(7,19, (pr) => {
  console.log(pr * 10);
}));
