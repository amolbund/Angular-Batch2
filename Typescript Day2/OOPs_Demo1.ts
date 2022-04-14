class Student
 {
    public sid: number = 0;
    public sname: string  = "";
     
   public  showDetails():void
   {
          console.log("Student Id  : " + this.sid );
          console.log("Student Name : " +  this.sname );
   }
}


var  obj:Student  = new Student();
obj.sid  = 2341;
obj.sname  = "Vishal";
obj.showDetails();

