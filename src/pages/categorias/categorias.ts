import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService ) {
  }

  ionViewDidLoad() { // EXECUTA QUANDO A PÁG TERMINAR DE SER CARREGADA
    this.categoriaService.findAll()
    .subscribe(response => { // FUNÇÃO QUE SERÁ EXECUTADA QUANDO A CHAMADA CHEGAR (callback)
      console.log(response) // DECLARANDO A FUNÇÃO DENTRO DO ARGUMENTO (arrow function)  
    }, 
    error => {
      console.log(error)    
    }
    ); 
    console.log(Response); // console.log - RETORNA A REQUISIÇÃO NO CONSOLE
  }
}
