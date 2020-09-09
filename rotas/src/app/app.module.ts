

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';

import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth-guard';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HeaderModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
