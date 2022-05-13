import { ProdutoService } from './../shared/produtos.servicos';
import { Produtos } from './../shared/produtos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jg-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos: Produtos[] = [];

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe(
      produtos => this.produtos = produtos,
      error => alert('Não foi possível carregar a lista')
    )
  }

}
