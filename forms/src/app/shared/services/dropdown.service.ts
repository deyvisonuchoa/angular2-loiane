import { Cidade } from './../models/cidade';
import { Tecnologia } from './../models/tecnologia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from './../models/estado';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstados(){
    /*
    let estados: Estado[] = [];
    this.http.get('assets/dados/estados.json')
      .subscribe( (data: Estado[]) => {
        data.map( estado => estados.push(estado));
      })
    return estados;
    */
   return this.http.get<Estado[]>('assets/dados/estados.json');
  }

  getCidades(idEstado: number){
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
      .pipe(
        map((cidades: Cidade[]) => cidades.filter( c => c.estado == idEstado))
      )
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ];
  }

  getTecnologias(): Tecnologia[] {
    let tecnologias: Tecnologia[] = [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ];
    return tecnologias;
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
