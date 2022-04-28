import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  uid:string  = "";
  pwd:string  = "";
  result:string = "";

  constructor(private  userService: UserService)
	{

	}

  login_click()
  {
    let flag = this.userService.isValidUser(this.uid, this.pwd);

    if(flag == true)
        this.result = "Welcome to Admin User";
    else
        this.result = "Invalid user id or password";

  }
}
