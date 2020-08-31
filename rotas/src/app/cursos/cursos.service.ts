import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id:1 , nome: 'java'},
      {id:2 , nome: 'angular'},
      {id:3 , nome: 'javascript'}
    ];
  }

  getCurso(id){
    let cursos: {id: number,nome:String}[] = this.getCursos();
   // for(let i=0; i<cursos.length; i++){
   //   let curso: {id: number,nome:String} = cursos[i];
   //   if(curso.id == id){
   //     console.log('entrou antes retorno ' + curso);
   //     return curso;
   //   }
   //   return null;
   // }
   let cursoEscolhido: {id: number,nome:String};
    cursos.forEach(
      (curso: {id: number,nome:String}) =>{
        console.log('curso foreach: ' + curso);
        console.log('id curso: ' + curso.id + 'id param: ' + id);
        if(curso.id == id){
          console.log('entrou antes retorno ' + curso.nome);
          cursoEscolhido = curso;
        };
      }
    );
    return cursoEscolhido;
  }

  constructor() { }
}
