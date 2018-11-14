import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DetalhePage } from '../pages/detalhe/detalhe';
import { CadUsuarioPage } from '../pages/cad-usuario/cad-usuario';
import { LoginPage } from '../pages/login/login';
import { UsuariosProvider } from '../providers/usuarios/usuarios';

import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages1: Array<{title: string, component: any}>;
  pages2: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen,
      public usuarioProvider: UsuariosProvider,
      public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages1 = [
      { title: 'Home', component: HomePage },
      { title: 'Registre-se', component: CadUsuarioPage },
      { title: 'Login', component: LoginPage}
    ];

    this.pages2 = [
      { title: 'Home', component: HomePage }
    ];

    this.usuarioProvider.getStorage("logado")
        .then(user => {
          if(user){
            this.ativaMenu(false);
          }else{
            this.ativaMenu(true);
          }
        });

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

  sair(){
    this.usuarioProvider.setStorage("logado", null);
    this.ativaMenu(true);
  }

  ativaMenu(ativo){
    this.menuCtrl.enable(ativo, "menu1");
    this.menuCtrl.enable(!ativo, "menu2");
  }
}
