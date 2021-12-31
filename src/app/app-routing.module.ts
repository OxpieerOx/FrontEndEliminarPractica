import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path:'', loadChildren: () => import('./pages/inicio/inicio.module').then(m=>m.InicioModule)},
  {path:'main', loadChildren: () => import('./pages/main/main.module').then(m=>m.MainModule)},

  {path:'**',redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
