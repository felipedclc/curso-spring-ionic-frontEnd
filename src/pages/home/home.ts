import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() // REFERÊNCIA DE PÁGINA (a classe"HomePage" vira String)
@Component({ // CLASSE CONTROLLER DA VIEW 
  selector: 'page-home', 
  templateUrl: 'home.html' 
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
