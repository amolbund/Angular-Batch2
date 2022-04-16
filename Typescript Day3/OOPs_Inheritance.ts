//Example to demonstrate usage of Inheritance
class Person
{
   public name: string = "";
   public age: number  = 0; 

   constructor(name:string, age:number)
   {
       this.name  =name;
       this.age = age;
   }
}


class Student extends  Person
{
    // Props
    public sid:number  =  0;    
    public email:string  = ""; 

    constructor(sid:number, name:string, age:number, email:string )
   { 
        super(name, age); //  invokes parent class constructor
        this.sid = sid; 
        this.email = email;      
   }


    // Methods
    public showDetails():void
    {
        console.log("Student Id : "  +  this.sid);
        console.log("Student Name : "  +  this.name);
        console.log("Student Age : "  +  this.age);
        console.log("Email Id : "  +  this.email);
    }
}

var student1   = new Student(5566, "Scott", 25, "scott@gmail.com"); 
var student2   = new Student(2244, "Mohan", 22, "mohan@gmail.com")
student1.showDetails();
student2.showDetails();
