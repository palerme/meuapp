import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/clientes.model';
import { ClientesService } from '../shared/clientes.servicos';

@Component({
  selector: 'jg-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Clientes[] = [];

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(
      clientes => this.clientes = clientes, 
      error => alert('Erro ao carregar a lista') 
    )
  }

}
