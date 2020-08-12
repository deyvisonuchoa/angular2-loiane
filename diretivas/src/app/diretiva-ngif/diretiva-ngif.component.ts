import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: String[] = [`angular`,`java`,`ionic/cordova`];

  mostratCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarcursos(){
    this.mostratCursos = !this.mostratCursos
  }

}
