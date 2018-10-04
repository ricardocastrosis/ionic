import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  url = 'http://192.168.20.96:3000/';

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  adiciona(dados:IUsuario){
    return this.http.post<IUsuario>(this.url + "usuarios", dados);
  }
  altera(dados:IUsuario){
    return this.http.put<IUsuario>(this.url + "usuarios/"+dados.id, dados);
  }

}
