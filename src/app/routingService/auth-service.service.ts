import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isloggedin : boolean = false;
  constructor() { }
  login(){
    this.isloggedin = true;
    console.log("login value:"+ this.isloggedin);
  }
  
  logout(){
    this.isloggedin = false;
  }
  isAuthenticate(){
   return this.isloggedin;
  }
}
