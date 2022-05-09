import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Produtos } from "./produto.model";

@Injectable ({
    providedIn: 'root'
})

export class ProdutosService {
    constructor(private http: HttpClient) {}

    findAll(): Observable<Produtos[]>{
        return this.http.get<Produtos[]>("http://localhost:3000/produtos")
    }
}
