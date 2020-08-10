import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
 // styleUrls: ['./data-binding.component.css']
 styles: [
  `
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
  `
]
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.training';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  hidden: string = 'show'; //<- isso funciona

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  getTexto(){
    return 'Texto Retornado';
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento);
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
