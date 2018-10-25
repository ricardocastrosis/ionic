import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';

import { Storage } from '@ionic/storage';


/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  url = 'http://192.168.20.24:3000/';

  constructor(public http: HttpClient, 
                private storage: Storage) {

    console.log('Hello UsuariosProvider Provider');

    //this.storage.set('nome', "José");
  }

  setStorage(chave, valor){
    this.storage.set(chave, valor);
  }
  getStorage(chave){
    return this.storage.get(chave);
  }

  adiciona(dados:IUsuario){
    return this.http.post<IUsuario>(this.url + "usuarios", dados);
  }
  altera(dados:IUsuario){
    return this.http.put<IUsuario>(this.url + "usuarios/"+dados.id, dados);
  }
  busca(dados:IUsuario){
    return this.http.get<IUsuario>(this.url + 
      "usuarios?email="+dados.email + 
      "&senha=" + dados.senha);
  }


}
