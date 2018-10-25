import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUsuario } from '../../interfaces/IUsuario';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:IUsuario = {email: '', senha: ''};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public usuarioProvider: UsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.usuarioProvider.busca(this.usuario).subscribe(res => {
      console.log(res);
      this.usuarioProvider.setStorage("logado", res[0]);
      this.navCtrl.setRoot(HomePage);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }

}
