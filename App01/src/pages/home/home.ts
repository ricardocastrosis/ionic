import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';
import { IProduto } from '../../interfaces/IProduto';
import { ProdutosProvider } from '../../providers/produtos/produtos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  lista:IProduto[];

  constructor(public navCtrl: NavController, 
              public prodProvider: ProdutosProvider) {
    
    //this.lista = this.prodProvider.listarTodos();

    this.prodProvider.listaTodosJSON().subscribe(
      res => {
        this.lista = res;
      },
      erro => {
        console.log("Erro ao conectar no Servidor JSON");
      }
    );


    let prod:IProduto = {
      id: 6,
      titulo: "Carro Ricardo Alterado!!",
      descricao: "adicionada mais top das motocas",
      valor: 45000,
      foto: "http://www.livroandroid.com.br/livro/carros/esportivos/McLAREN.png",
      video: ""
    };
    /*
    this.prodProvider.adicionaProduto(prod).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
    this.prodProvider.alteraProduto(prod).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
    this.prodProvider.excluir(prod).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });*/

  }

  mudarTela(item){
    this.navCtrl.push(DetalhePage, {dados: item});
  }

}
