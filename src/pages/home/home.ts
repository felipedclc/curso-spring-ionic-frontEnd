import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage() // REFERÊNCIA DE PÁGINA (a classe"HomePage" vira String)
@Component({ // CLASSE CONTROLLER DA VIEW 
  selector: 'page-home', 
  templateUrl: 'home.html' 
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) { 
    // INJEÇÃO DE DEPENDÊNCIA (IMPORT NavController, MenuController)
  }

  ionViewWillEnter() { // PÁGINA DE ENTRADA (LOGIN)
  this.menu.swipeEnable(false);// DESABILITA A ROLAGEM DE MENU
  }
  ionViewDidLeave() { // SAIU DA ENTRADA (LOGIN)
  this.menu.swipeEnable(true); // HABILITA O LOGIN 
  }

  public login() {
    this.navCtrl.setRoot('CategoriasPage'); 

  }
}
