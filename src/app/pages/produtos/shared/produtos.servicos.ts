import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { Produtos } from './produtos.model';

@Injectable ({
    providedIn: 'root'  
})

export class ProdutoService {
    constructor (private http:HttpClient) {}

    findAll(): Observable<Produtos[]>{
        return this.http.get<Produtos[]>("http:/localhost:300/produtos")
    }
}