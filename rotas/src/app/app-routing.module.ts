import { CursosComponent } from './cursos/cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
    { path: 'alunos', loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule) },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
