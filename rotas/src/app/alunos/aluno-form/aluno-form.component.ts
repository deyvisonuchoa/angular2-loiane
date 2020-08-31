import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  private inscricao: Subscription;
  constructor(private route: ActivatedRoute, private alunoService:AlunosService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params) =>{
      let id = params['id'];

      console.log(id);

      this.aluno = this.alunoService.getAluno(id);

      console.log(this.aluno);

      if(this.aluno === null){
        this.aluno = {};
      }
    });
  }

}
