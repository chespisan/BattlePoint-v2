import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuJuegosPage } from './menu-juegos';

@NgModule({
  declarations: [
    MenuJuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuJuegosPage),
  ],
})
export class MenuJuegosPageModule {}
