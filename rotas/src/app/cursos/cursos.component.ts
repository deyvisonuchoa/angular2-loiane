
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: {id: number,nome:String}[];

  constructor(private cursosService: CursosService,private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  escolheCurso(id){
    this.router.navigate(['/curso', id])
  }

}
