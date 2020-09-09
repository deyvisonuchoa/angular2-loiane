import { IformCanDeactivate } from './iform-deactivate';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDeactivate> {
    
        canDeactivate(
            component: IformCanDeactivate,
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|Promise<boolean>|boolean {

            console.log('guarda de rota deactivate');

            //return component.podeMudarRota()? component.podeMudarRota(): true;
            return component.podeDesativar() ? component.podeDesativar(): true;
    }
}
