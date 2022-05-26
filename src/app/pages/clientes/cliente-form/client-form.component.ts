import { FormControl, Validators } from '@angular/forms';
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

    name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    age = new FormControl(20, Validators.required);  
    city = new FormControl();
    country = new FormControl({value: 'India', disabled: true});
    married = new FormControl(true);
    
    setNameValue() {
        this.name.setValue('Donald Trump'); 
        console.log('Name: ' + this.name.value);
        console.log('Validation Status: ' + this.name.status);
    }
    setResetName() {
        this.name.reset(); 
    }
    changeValue() {
        console.log(this.married.value);
        this.married = new FormControl(!this.married.value);
    }

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