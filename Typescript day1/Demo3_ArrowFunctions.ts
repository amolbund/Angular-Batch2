//Refer JS Library Methods.
// 1. Array     2. String       3. Math     4.Date

let ar1:number[] = [1,2,3,4,5];
console.log(ar1);


let ar2:number[] = [];

//1. Named Functions
ar2 = ar1.map(Math.sqrt);
console.log(ar2);


function  multiplesOfTwo(x:number):number
{
    return x * 2;
}

ar2 = ar1.map(multiplesOfTwo);
console.log(ar2);


// 2. Anonymous  functions
ar2 = ar1.map( function(x:number):number
    {
            return x * 5;
    });
console.log(ar2);


//3. Arrow Functions
ar2 = ar1.map( (x:number) =>
    {
            return x * 10;
    });
console.log(ar2);





ar2 = ar1.map( x => x * x);
console.log(ar2);