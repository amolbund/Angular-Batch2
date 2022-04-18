import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {


  // deptObj : any = { deptno: 10, dname  : "Accounts", loc : "Hyderabad" };

  // deptObj : Dept = new Dept();
  deptObj : Dept = { deptno: 10, dname  : "Accounts", loc : "Hyderabad" };

  public deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts", loc : "Hyderabad"},
    {deptno : 20, dname : "Sales", loc : "Pune"},
    {deptno : 30, dname : "Operations", loc : "Mumbai"},
    {deptno : 40, dname : "Marketing", loc : "Chennai"},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}


class Dept
{
  deptno  : number = 0;
  dname  : string  = "";
  loc  : string  = "";
}
