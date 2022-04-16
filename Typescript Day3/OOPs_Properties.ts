//  tsc Demo1.ts  -t es5

class Employee1
{
	private empno:number;
	private ename:string;
	
	// Constructor
	constructor(n:number)
	{
		this.empno = n;	
	}	
		
	// Read-only property
	get Empno()
	{		
	    return this.empno;		
	}

	
	// Read-Write Property
    get Name()
	{		
	    return this.ename;		
	}

    set Name(value:string)
    {    
        this.ename = value;
    }
}
 
let  object:Employee1 = new Employee1(1025);
//obj.Empno = 1026;   // Error:  because it is a read-only property.
object.Name = "Kiran";  // set

console.log("Employee Id: " + object.Empno);    // get
console.log("Employee Name: " + object.Name);	 // get	
	 
