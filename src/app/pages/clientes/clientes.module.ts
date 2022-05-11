import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './cliente-list/cliente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/client-form.component';



@NgModule({
  declarations: [
    ClientesListComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    RouterModule
  ]
})
export class ClientesModule { }
