import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from 'src/app/service/guard.service';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {path:'',component: HomeComponent, children:[
    {path:'persona',component: PersonaComponent},
  ]},
  {path:'mantenimiento',component: MantenimientoComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
