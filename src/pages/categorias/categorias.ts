import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl // IMPORTANDO O BUCKET(http: S3) DO "api.config"

  items: CategoriaDTO[]; // LISTA(items) NO CONTROLADOR PARA QUE O HTML LEIA OS DADOS
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService ) {
  }

  ionViewDidLoad() { // EXECUTA QUANDO A PÁG TERMINAR DE SER CARREGADA
    this.categoriaService.findAll()
    .subscribe(response => { // FUNÇÃO QUE SERÁ EXECUTADA QUANDO A CHAMADA CHEGAR (callback)
      this.items = response;  
    }, 
    error => {
      console.log(error)    
    }); 
    console.log(Response); // console.log - RETORNA A REQUISIÇÃO NO CONSOLE
  }
}
