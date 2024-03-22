import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate  {

  constructor(private authService : AuthServiceService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
   if(this.authService.isAuthenticate()){
    return true;
   }else{
    this.router.navigate(['']) ;
    return false;
   }
   
}
}
