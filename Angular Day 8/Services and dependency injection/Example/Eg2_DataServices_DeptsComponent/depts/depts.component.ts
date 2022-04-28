import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  getDepts_click()
  {
    this.deptsArray  = this.dataService.getData();
  }

  addDept_click()
  {
    let deptObj:Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.dataService.addData(deptObj);  // Insert into database
    this.deptsArray  = this.dataService.getData();  // Get the latest results

    this.clearFields();
  }

  removeDept_click(dno:number)
  {
    this.dataService.removeData(dno);
    this.deptsArray  = this.dataService.getData();  // Get the latest results
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
