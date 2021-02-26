import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from './../models/estado';

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
}
