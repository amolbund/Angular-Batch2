// Example to demonstrate usage of constructor
class Student1
{    
    public sid:number  =  0;
    public sname:string   = "";
    public email:string  = "";
    public address: string = "";
    constructor(sid:number, sname:string, email:string, address:string)
    {
           this.sid =  sid; 
           this.sname  = sname;
           this.email  = email;
           this.address = address;
    }

    // Methods
    public showDetails():void
    {
        console.log("Student Id : "  +  this.sid);
        console.log("Student Name : "  +  this.sname);
        console.log("Email Id : "  +  this.email);
        console.log("Address : "  +  this.address);
    }
}

 
var s1   = new Student1(4455, "James","james@gmail.com", "Pune"); 
var s2  = new Student1(5566, "Peter","peter@gmail.com", "Mumbai"); 


s1.sname ="Amol";
s1.sid= 2345;
s1.email = "amolb@gmail.com";
s1.address = "Nagpur"

s1.showDetails();
console.log("--------------------------");
s2.showDetails();

