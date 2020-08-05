import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({ // CONTROLLER 
  templateUrl: 'app.html' // VIEW
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: String = 'HomePage'; // rootPage(PÁG INICIAL)

  pages: Array<{title: string, component: String}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [ // LISTA DE PAGINAS
      { title: 'Profile', component: 'ProfilePage' }, // TÍTULO E NOME DA CLASSE (categorias.ts)
      { title: 'Categorias', component: 'CategoriasPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
