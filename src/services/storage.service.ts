import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys.config";

@Injectable()
export class StorageService {

    getLocalUser() : LocalUser { // RETORNA USUARIO LOGADO
        let user = localStorage.getItem(STORAGE_KEYS.localUser)
        if(user == null) {
            return null;
        }
        else JSON.parse(user) // PASSANDO PARA JSON (STORAGE_KEYS ESTÁ EM STRING) 
    }

    setLocalUser(obj : LocalUser) { // RECEBE A ARMAZENA NO STORAGE
        if(obj == null) { // SE FOR NULO REMOVER
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else{ // SETA O OBJETO E ARMAZENA COMO STRING
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj)) 
        }
    }
}