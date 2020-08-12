import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string[] = [`angular 2`, `java`, `cordova/ionic`];

  obj: {} = {id:1,nome:`angular`};
  obj2: {} = {id:2,nome:`java`};
  obj3: {} = {id:3,nome:`ionic`};
  jsonObjt =[this.obj,this.obj2,this.obj3];

  clientes = [{nome:'deyvison'},{nome:'david'},{nome:'lorena'}];

  //pessoa = {};

  constructor() { }

  ngOnInit(): void {
     // for(let i = 0; i<this.cursos.length; i++){
     //   let curso = this.cursos[i];
    // }
  }

}
