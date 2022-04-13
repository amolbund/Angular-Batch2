const MAX:number = 100;
// MAX = 101;  // error, const variables cannot modify

let deptObj:any = { deptno : 10,  dname  : "Accounts" };

// Object destructuring
// Variable names should be same as property names
let {deptno, dname} = deptObj;
console.log("Deptno  : " + deptno);
console.log("Dept Name  : " + dname);

// Array destructuring
let ar:number[] = [25,35];
let [x,y]  = ar;
console.log("X = " + x);
console.log("Y = " + y);





