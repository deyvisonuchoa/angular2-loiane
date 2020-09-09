import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunosGuard implements CanActivateChild {

    constructor() {}
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean>|boolean {
       // return this.permissions.canActivate(this.currentUser, route.params.id);

       console.log(route);
       console.log(state);

       if(state.url.includes('edit')){
           //alert('usuario sem acesso');
          //return Observable.of(false);
         // return of(false);
       }

       return true;
    }

}
