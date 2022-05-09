import { Component, OnInit } from '@angular/core';
import { Produtos } from '../shared/produto.model';
import { ProdutosService } from '../shared/produtos.servicos';

@Component({
  selector: 'jg-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produto: Produtos[] = [];
  
  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(
      produto => this.produto = produto,
      error => alert('Erro ao carregar a lista')
    )
  }

}
