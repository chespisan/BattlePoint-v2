import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menu-inicio',
  templateUrl: 'menu-inicio.html',
})
export class MenuInicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuInicioPage');
  }

  openMenuJuegos(){
    console.log('open menu ded juegos');
    this.navCtrl.push('MenuJuegosPage');
  }
}
