import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ClienteFormComponent } from './cliente-form/client-form.component';
import { ClientesListComponent } from './cliente-list/cliente-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesListComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    RouterModule
  ]
})
export class ClientesModule { }
