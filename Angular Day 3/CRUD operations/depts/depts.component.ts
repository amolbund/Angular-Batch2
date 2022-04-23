import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

 deptno: number  = 0;
 dname  :string  = "";
 loc  :string  = "";
 isDisabled :boolean = false;

  public deptsArray:Dept[] = [];


  constructor() { }

  ngOnInit(): void {
  }


  getDepts_click()
  {
    this.deptsArray  =[
      {deptno : 10, dname : "Accounts", loc : "Hyderabad"},
      {deptno : 20, dname : "Sales", loc : "Pune"},
      {deptno : 30, dname : "Operations", loc : "Mumbai"},
      {deptno : 40, dname : "Marketing", loc : "Chennai"},
    ];
  }


  addDept_click()
  {
    let deptObj:Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.deptsArray.push(deptObj);
    this.clearFields();
  }

  removeDept_click(dno:number)
  {
    let index  =  this.deptsArray.findIndex(   item =>  item.deptno == dno    );
    this.deptsArray.splice(index,  1);
  }


  selectDept_click(dno:number)
  {
		let deptObj:any =  this.deptsArray.find(   item =>  item.deptno == dno    );
		this.deptno =   deptObj.deptno;
		this.dname =   deptObj.dname;
		this.loc 		=  deptObj.loc;
    this.isDisabled = true;
  }

  updateDept_click()
  {
    let index  =  this.deptsArray.findIndex(   item =>  item.deptno == this.deptno    );
    this.deptsArray[index].dname = this.dname;
    this.deptsArray[index].loc = this.loc;
    this.clearFields();

  }

  clearFields()
  {
      this.isDisabled = false;
      this.deptno = 0;
      this.dname  = "";
      this.loc  = "";
  }



}


class Dept
{
  deptno  : number = 0;
  dname  : string  = "";
  loc  : string  = "";
}
