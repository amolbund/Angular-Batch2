//  Create a TypeScript program to implement interface 
interface  IPerson
{	
	fname:string;
	lname:string; 
	age:number;
	
	printData();
}

class  Employee implements IPerson
{
    public empid:number  = 456455;
	public fname:string = "Ravi";
	public lname:string = "Kumar";
    public age:number = 25;
    
    public  printData():void
	{
	var str  = `Employee Details : Empd ID: ${this.empid}, Emp Fname: ${this.fname}, Emp Lname:  ${this.lname}, EmpAge: ${this.age}`;
	console.log(str);
	}
}



var  e1  =  new  Employee(); 
e1.printData();
 

 




	
























