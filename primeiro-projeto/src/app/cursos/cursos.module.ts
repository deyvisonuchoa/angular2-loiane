import { CursosService } from './cursos.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheModule } from './curso-detalhe/curso-detalhe.module';

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CursoDetalheModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
