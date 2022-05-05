import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  canExit() : boolean {

    if (confirm("Do you wish to leave this page?")) {
      return true
    }
    else
    {
      return false
    }
  }

}
