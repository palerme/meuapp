import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';



@NgModule({
  declarations: [
    ProdutosListComponent,
    ProdutosFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
