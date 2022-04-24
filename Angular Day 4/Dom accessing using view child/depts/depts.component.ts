import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DeptDetailsComponent } from '../dept-details/dept-details.component';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit, AfterViewInit {

@ViewChild(DeptDetailsComponent)  deptChild!: DeptDetailsComponent;
@ViewChildren(DeptDetailsComponent)  deptChildren!: QueryList<DeptDetailsComponent>;

@ViewChild("p1")  paraObj!:ElementRef;


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


    constructor()
    {
      // console.log("Constructor : " + this.deptChild);
    }

    ngOnInit()
    {
      // console.log("ngOnInit :  " +  this.deptChild);
    }

    ngAfterViewInit()
    {
      // console.log("ngAfterViewInit :  " +  this.deptChild);
      console.log(this.deptChild);
      console.log(this.deptChild.deptObj);
      console.log(this.deptChild.deptObj.dname);

      console.log(this.deptChildren);
      console.log(this.deptChildren.toArray());

      let deptDetailsArray:DeptDetailsComponent[] = this.deptChildren.toArray();

      console.log(deptDetailsArray[2]);
      console.log(deptDetailsArray[2].deptObj.dname);


      console.log(this.paraObj);
      console.log(this.paraObj.nativeElement);
      console.log(this.paraObj.nativeElement.innerHTML);
      this.paraObj.nativeElement.innerHTML = "Updated Message in ngAfterViewInit";
    }

    button1_click()
    {
      //console.log("Button click : " + this.deptChild);
      console.log(this.deptChild);
    }

    deptRemove_parent(dno:number)
    {
      let index  = this.deptsArray.findIndex(item => item.deptno == dno);
      this.deptsArray.splice(index, 1);
    }
}
