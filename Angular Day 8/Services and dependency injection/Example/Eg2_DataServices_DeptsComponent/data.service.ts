import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataArray:any[] =  [
    {deptno : 10, dname : "Accounts", loc : "Hyderabad"},
    {deptno : 20, dname : "Sales", loc : "Pune"},
    {deptno : 30, dname : "Operations", loc : "Mumbai"},
    {deptno : 40, dname : "Marketing", loc : "Chennai"},
  ];

  constructor() { }

  getData():any[]
  {
   // alert("Message from DataService");
    return this.dataArray;
  }

  addData(dataObj:any) : void
  {
      this.dataArray.push(dataObj);
  }

  removeData(id:number) : void
  {
      let index  = this.dataArray.findIndex(dataObj => dataObj.deptno == id);
      this.dataArray.splice(index, 1);
  }


}
