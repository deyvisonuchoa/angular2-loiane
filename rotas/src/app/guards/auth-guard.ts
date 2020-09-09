
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService: AuthService, private router: Router) {    
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

      return this.verificarAcesso();
    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      return this.verificarAcesso();
    }

    verificarAcesso(){
      if(this.authService.verificaAutenticacao()){
        return true;
      }

      this.router.navigate(['/login']);

      return false;
  }

}
