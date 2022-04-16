// Example of Union
let speed: string | number;

speed = "Fast";
console.log(speed);


speed = 4000;
console.log(speed);
console.log("----------------------------------------");

// enum in TypeScript
enum Color {RED, BLUE, WHITE, YELLOW, BLACK}  

let myColor:Color = Color.YELLOW;
//let myColor:Color = 3;

console.log(Color[myColor]);  
console.log(myColor);  