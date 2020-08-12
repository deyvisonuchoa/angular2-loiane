import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {
    desc:`teste`,
    responsavel: {
      usuario: null
    }
    //responsavel: {nome: 'deyvison'}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
