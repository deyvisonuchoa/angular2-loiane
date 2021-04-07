import { Curso } from './../models/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../api';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //private readonly API = ''

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Curso[]>(`${API}/cursos`)
      .pipe(
        tap(console.log)
      )
  }
}
