import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from 'angular2-jwt'

@Injectable()
export class AuthService {

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(public http: HttpClient, public storage: StorageService) { // INJEÇÕES DE DEPENDÊNCIA

    }

    authenticate(creds : CredenciaisDTO) { // ENVIANDO O LOGIN E SENHA PARA O BACK END
        return this.http.post(`${API_CONFIG.baseUrl}/login`,
         creds,
         {
            observe: `response`,  // PEGANDO O HEADER DA RESPOSTA - observe(tipo: objeto)
            responseType: `text` // NECESSÁRIO PORQUE A RESPOSTA VEM EM JSON EM UM CORPO VAZIO  
         }) 
    }
    succesfulLogin(authorizationValue : String) { // APOS OCORRER O LOGIN
        let tok = authorizationValue.substring(7); // RECORTANDO O STRING (TIRANDO O "BEARER" DO TOKEN)
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub // EXTRAINDO O EMAIL DO TOKEN 
        };
        this.storage.setLocalUser(user); // SETANDO O USER NO LOCAL STORAGE
    }
    logout() {
        this.storage.setLocalUser(null); // REMOVENDO O USUARIO DO STORAGE
    }

}