import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CursoDetalheComponent} from './curso-detalhe.component'

@NgModule({
  declarations: [CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CursoDetalheComponent
  ]  
})
export class CursoDetalheModule { }
