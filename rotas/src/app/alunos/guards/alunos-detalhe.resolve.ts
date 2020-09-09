import { AlunosService } from './../alunos.service';
import { Aluno } from './../aluno';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
    constructor(private alunosService: AlunosService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {

            let id = route.params['id'];

            return this.alunosService.getAluno(id);;
    }
}
