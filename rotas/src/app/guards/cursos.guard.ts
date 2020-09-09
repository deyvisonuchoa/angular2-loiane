import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class CursosGuard implements CanActivateChild {

    constructor() {}
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
       // return this.permissions.canActivate(this.currentUser, route.params.id);
       console.log(route);
       console.log(state);
       return true;
    }

}
