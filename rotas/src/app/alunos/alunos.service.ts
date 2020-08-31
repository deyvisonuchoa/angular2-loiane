import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'noelia', email: 'noeliafernandes@gmail.com'},
    {id: 2, nome: 'carlos', email: 'catioro@gmail.com'},
    {id: 3, nome: 'fernando', email: 'olocodes@gmail.com'}
  ];

  getAlunos(){
    return this.alunos;
  };

  getAluno(id: number){
    let alunoEscolhido: {id: number,nome:String, email: String};

    this.alunos.forEach(
      (aluno: {id: number,nome:String, email: String}) => {
        if(aluno.id == id){
          alunoEscolhido = aluno;
        }
      }
    )
    return alunoEscolhido;
  };

  constructor() { }
}
