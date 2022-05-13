import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";''

import { Clientes } from "./clientes.model";

@Injectable ({
    providedIn: 'root'
})

export class ClientesService {
    constructor(private http: HttpClient) {}

    findAll(): Observable<Clientes[]>{
        return this.http.get<Clientes[]>("http://localhost:3000/clientes")
    }
}
