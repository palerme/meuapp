import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { ClientesModule } from './pages/clientes/clientes.module';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutosModule } from './pages/produtos/produtos.module';

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
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
