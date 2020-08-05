import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/alth.service';

@IonicPage() // REFERÊNCIA DE PÁGINA (a classe"HomePage" vira String)
@Component({ // CLASSE CONTROLLER DA VIEW 
  selector: 'page-home', 
  templateUrl: 'home.html' 
})
export class HomePage {

  creds : CredenciaisDTO = { // (creds) BIND DOS CAMPOS QUE SERÃO PREENCHIDOS NO HTML
    email: "",
    senha: ""
  }

  constructor(public navCtrl: NavController,   // INJEÇÃO DE DEPENDÊNCIA 
     public menu: MenuController,
     public auth: AuthService) { 
    
  }

  ionViewWillEnter() { // PÁGINA DE ENTRADA (LOGIN)
  this.menu.swipeEnable(false);// DESABILITA A ROLAGEM DE MENU
  }
  ionViewDidLeave() { // SAIU DA ENTRADA (LOGIN)
  this.menu.swipeEnable(true); // HABILITA O LOGIN 
  }

  public login() { // ENVIANDO O FORMULÁRIO
    this.auth.authenticate(this.creds) // CHAMADA DO authenticate 
    .subscribe(response => { // INSCREVENDO PARA RECEBER A RESPOSTA
      console.log(response.headers.get(`Authorization`));
      this.navCtrl.setRoot('CategoriasPage'); // CHAMANDO A PAG DE CATEGORIAS
    },
    error=> {}) 
  }
}
