import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isValidUser(uid: string, pwd:string): boolean {

    let result:boolean = false;

    if(uid == "admin" && pwd == "admin123")
    {
      result  = true;
    }
    else
    {
      result  = false;
    }

    return result;
  }


}
