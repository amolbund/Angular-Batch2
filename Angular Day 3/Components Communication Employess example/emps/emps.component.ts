import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent implements OnInit {

  @Input()
    empData:any[] = [];
    
  constructor() { }

  ngOnInit(): void {
  }

}
