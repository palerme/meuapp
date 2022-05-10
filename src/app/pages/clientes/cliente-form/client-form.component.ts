import { Component, OnInit } from "@angular/core";
import { Clientes } from "../shared/clientes.model";
import { ClientesService } from "../shared/clientes.servicos";

@Component({
    selector: 'jg-cliente-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.css']
})
export class ClienteFormComponent implements OnInit {
    clientes: Clientes[] = [];

    constructor(private service: ClientesService) { }

    ngOnInit(): void {
        this.findAll();
    }

    findAll(): void{
        this.service.findAll().subscribe(
            NewCliente => this.clientes = NewCliente,
            error => alert('Erro ao carregar a lista')
        )
    }
}