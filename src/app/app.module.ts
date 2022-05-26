import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { ClientesModule } from './pages/clientes/clientes.module';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutosModule } from './pages/produtos/produtos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    ClientesModule,
    ProdutosModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
