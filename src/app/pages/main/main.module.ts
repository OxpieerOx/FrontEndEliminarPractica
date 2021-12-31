import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ListadoComponent } from './listado/listado.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './persona/persona.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopAddPersonaComponent } from './persona/pop-add-persona/pop-add-persona.component';


@NgModule({
  declarations: [
    MantenimientoComponent,
    ListadoComponent,
    HomeComponent,
    PersonaComponent,
    PopAddPersonaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class MainModule { }
