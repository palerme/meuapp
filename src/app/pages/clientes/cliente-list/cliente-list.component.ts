import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/clientes.model';
import { ClientesService } from '../shared/clientes.servicos';
import * as XLSX from 'xlsx'

@Component({
  selector: 'jg-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: Clientes[] = [];
  Company: any;

  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(
      clientes => this.clientes = clientes,
      error => alert('Erro ao carregar a lista')
    )
  }

  fileName = 'cadastroDeCliente.xls'

  exportexcel(): void {
    
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

}
