// Example to demonstrate usage of constructor
class Students
{
    // Props
    public sid:number  =  0;
    public sname:string   = "";
    public email:string  = "";

   
    constructor(sid:number = 0, sname:string = "", email:string = "")
    {
           this.sid =  sid; 
           this.sname  = sname;
           this.email  = email;
    }

    // Methods
    public showDetails():void
    {
        console.log("Student Id : "  +  this.sid);
        console.log("Student Name : "  +  this.sname);
        console.log("Email Id : "  +  this.email);
    }
}

 
var stud1   = new Students(4455, "James","james@gmail.com"); 
var stud2  = new Students(5566, "Peter"); 
var stud3  = new Students(85454); 
var stud4  = new Students(); 


stud1.showDetails();
console.log("--------------------------");
stud2.showDetails();
console.log("--------------------------");
stud3.showDetails();

