import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {

  perfilRoot = 'PerfilPage'
  puntajeRoot = 'PuntajePage'
  ayudaRoot = 'AyudaPage'
  menuInicioRoot = 'MenuInicioPage'


  constructor(public navCtrl: NavController) {}

}
