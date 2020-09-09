import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: Boolean = false;

  exibeMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'deyvison@gmail.com'
    && usuario.senha === '123456'){
      this.usuarioAutenticado = true;

      this.exibeMenu.emit(true);

      this.router.navigate(['/'])
    }else{
      this.usuarioAutenticado = false;

      this.exibeMenu.emit(false);
    }    
  }

  verificaAutenticacao(){
    return this.usuarioAutenticado;
  }
}
