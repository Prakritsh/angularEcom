import { Component } from '@angular/core';
import { AuthServiceService } from '../routingService/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService : AuthServiceService){}
  logout(){
    this.authService.logout();
  }
}
