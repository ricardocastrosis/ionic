import { Component } from '@angular/core';

import { DomSanitizer} from '@angular/platform-browser';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IProduto } from '../../interfaces/IProduto';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  item:IProduto;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public sanitizer: DomSanitizer) {
     this.item = this.navParams.get("dados");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
