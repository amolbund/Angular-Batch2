import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {

  public deptsArray:any[] =  [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"}
    ];


  constructor() { }

  ngOnInit(): void {
  }

  deptRemove_parent(dno:number)
    {
      let index  = this.deptsArray.findIndex(item => item.deptno == dno);
      this.deptsArray.splice(index, 1);
    }

}
class Dept{
  deptno:number = 0;
  dname: string = '';
  loc:string = '';
}