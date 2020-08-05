import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient) {

    }

    authenticate(creds : CredenciaisDTO) { // ENVIANDO O LOGIN E SENHA PARA O BACK END
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
         creds,
         {
            observe: `response`,  // PEGANDO O HEADER DA RESPOSTA - observe(tipo: objeto)
            responseType: `text` // NECESSÁRIO PORQUE A RESPOSTA VEM EM JSON EM UM CORPO VAZIO  
         })  
    }
}