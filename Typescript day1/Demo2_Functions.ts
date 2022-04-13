function greeting(uname:string) : void
{
 console.log("Welcome to " + uname);   
}

greeting("Amol")


// Default Parameters
function getTotal(price:number, qty:number=1):void
{
    let total:number = price * qty;
    
    console.log("Unit Price: " + price);
    console.log("Quantity: " + qty);
    console.log("Total Amount: " + total);
    

    // String Templates
    // console.log("Unit Price: " + price + ", Quantity : " + qty + ", Total Amount  : " + total);
    // console.log(`Unit Price: ${price}, Quantity : ${qty}, Total Amount  : ${total}`);

}
getTotal(10,5);

// Optional Parameter
function showDetails(name:string, course:string, age?:number)
{
    console.log("Student Name  : " + name);
    console.log("Course Name  : " + course);

    if(age != undefined)
    console.log("Student Age  : " + age);

}
    showDetails("Amol", "HTML",25);

    
// Spread Attribute or Rest Parameters
function  sum(...args:number[]) : void
{
    var s:number = 0;

    for(let item of args)
    {
        s = s + item;
    }

    console.log("Sum Result  : "  + s);
}


// greeting("Narasimha");
// console.log("-------------------");
// getTotal(2500,3);
// console.log("-------------------");
// getTotal(1500);
// console.log("-----------------------");
// showDetails("Scott", "Angular",  20); 
// console.log("-----------------------");
// showDetails("Smitha", "NodeJS"); 
// console.log("-----------------------");

sum(10);
sum(10, 20, 30);
sum(10, 20, 40, 50, 60, 70);
sum(10, 20);
sum(10, 20, 30, 40, 50, 60, 70, 80, 90);



