import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuInicioPage } from './menu-inicio';

@NgModule({
  declarations: [
    MenuInicioPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuInicioPage),
  ],
})
export class MenuInicioPageModule {}
