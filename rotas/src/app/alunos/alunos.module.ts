
import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoDetalheResolver } from './guards/alunos-detalhe.resolve';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  providers:[
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolver
  ]
})
export class AlunosModule { }
