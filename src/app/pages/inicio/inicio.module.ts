import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Login2Component } from './login2/login2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';


@NgModule({
  declarations: [
    LoginComponent,
    Login2Component
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FileUploadModule
  ]
})
export class InicioModule { }
