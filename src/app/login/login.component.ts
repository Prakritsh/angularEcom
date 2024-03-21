import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router){}
  loginreq(email: string){
    if(email){
      this.router.navigateByUrl('/product');
    }
      else{
      alert("Enter email");
     
    }
  }
}
