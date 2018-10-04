import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-usuario',
  templateUrl: 'cad-usuario.html',
})
export class CadUsuarioPage {

  usuario:IUsuario = {email: ''};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public provider: UsuariosProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadUsuarioPage');
  }

  salvar(){
    this.provider.adiciona(this.usuario).subscribe(res =>{
      console.log(this.usuario);
      this.navCtrl.setRoot(HomePage);
    }, erro =>{
      console.log("Erro: " + erro.message);
    });
  }

}
