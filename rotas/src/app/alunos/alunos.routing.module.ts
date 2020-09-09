import { AlunoDetalheResolver } from './guards/alunos-detalhe.resolve';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';

const alunosRoutes: Routes = [
    {path: '', component: AlunosComponent ,
    canActivateChild: [AlunosGuard],
     children: [
        {path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent,
            resolve: {aluno: AlunoDetalheResolver} },
        {path: ':id/edit', component: AlunoFormComponent,
            canDeactivate: [AlunosDeactivateGuard]}
    ]}
    
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
