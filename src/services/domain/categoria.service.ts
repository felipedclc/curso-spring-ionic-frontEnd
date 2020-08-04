import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../Config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx"; // "TROCAR OBSERVALBLE" POR "RX" (ANGULAR 3)

@Injectable() // CLASSE QUE PODE SER INJETA EM OUTRAS
export class CategoriaService {

    constructor(public http: HttpClient){
    }

    findAll() : Observable<CategoriaDTO[]> { // OBSERVABLE PERMITE FAZER A REQUISIÇÃO   
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`); // RETORNA A LISTA 
    }
}