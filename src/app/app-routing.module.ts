import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { ClienteFormComponent } from './pages/clientes/cliente-form/client-form.component';
import { ClientesListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesListComponent  },
  { path: 'produtos', component: ProdutosListComponent  },
  { path: 'sobre', component: SobreComponent  },
  { path: 'CadastroCliente', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
