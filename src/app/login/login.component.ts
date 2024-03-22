import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../routingService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router, private authService : AuthServiceService){}
  loginreq(email: string){
    if(email){
      this.login();
      this.router.navigateByUrl('/product');
    }
      else{
      alert("Enter email");
     
    }
  }
  login(){
    this.authService.login();
  }
}
