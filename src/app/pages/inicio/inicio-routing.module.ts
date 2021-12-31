import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'',component: Login2Component},
  {path:'usuario', loadChildren: () => import('../inicio/usuario/usuario.module').then(m=>m.UsuarioModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
