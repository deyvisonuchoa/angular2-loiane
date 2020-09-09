import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {  AuthGuard } from './guards/auth-guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { path: 'cursos',
     loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
     canActivate: [AuthGuard],
     canActivateChild: [CursosGuard],
     canLoad: [AuthGuard]
   },
    { path: 'alunos',
     loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
   },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
   },
   {path: '', redirectTo: '/home'},
   { path: '**', component: PaginaNaoEncontradaComponent
  //,canActivate: [AuthGuard]
   }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }