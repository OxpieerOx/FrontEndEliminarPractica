import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba1Component } from './pages/prueba1/prueba1.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Prueba2Component } from './pages/prueba2/prueba2.component';
import { Hijo01Component } from './pages/prueba1/hijo01/hijo01.component';
import { Hijo02Component } from './pages/prueba1/hijo02/hijo02.component';
import { Prueba3Component } from './pages/prueba3/prueba3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    Prueba2Component,
    Hijo01Component,
    Hijo02Component,
    Prueba3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
