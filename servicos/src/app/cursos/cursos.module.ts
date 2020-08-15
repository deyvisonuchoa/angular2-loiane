import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  providers: [
   // CursosService
  ],
  exports: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
