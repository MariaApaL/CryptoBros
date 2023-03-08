import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private auth:AuthService, private router:Router){
    
  }

  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {


    /* 
      Controla que entre al perfil solo cuando este logeado y al log
      cuando no lo este.
    */

    const url:string = route.routeConfig.path;
    
    if(url === 'login'){
      if(this.auth.loggedIn()){
        this.router.navigate(['/'])
        return false;
      }

      return true
    }

    if(this.auth.loggedIn()){
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
  
}
