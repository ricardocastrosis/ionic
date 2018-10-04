import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../../interfaces/IProduto';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

  listaTodosJSON(){
      return this.http.get<IProduto[]>("http://192.168.20.96:3000/produtos");
  }

  adicionaProduto(dados:IProduto){
    return this.http.post<IProduto>("http://192.168.20.96:3000/produtos", dados);
  }
  alteraProduto(dados:IProduto){
    return this.http.put<IProduto>("http://192.168.20.96:3000/produtos/"+dados.id, dados);
  }
  excluir(dados:IProduto){
    return this.http.delete<IProduto>("http://192.168.20.96:3000/produtos/"+dados.id);
  }





  listarTodos(){
    //declaração de variáveis: let/const
    const lista:IProduto[] = [
      {id:1,
        titulo:"Motoca Ducati 999",
        descricao: "A Ducate é a motoca da hora mais fera do momento...",
        valor: 32000,
        foto: "assets/imgs/moto1.png",
        video: "https://www.youtube.com/embed/9Wxagt6hpDQ"},
      
      {id:2,
          titulo:"Mustang TOP",
          descricao: "O carro dos cavalos da hora, top top top...",
          valor: 150000,
          foto: "assets/imgs/carro.jpeg",
          video: "https://www.youtube.com/embed/nWlRnDhth-U"}];
      return lista;
  }

}
