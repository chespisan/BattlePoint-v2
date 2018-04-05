
//importamos paquetes o componentes que se necesite
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

//decorador
@NgModule({
    // aqui colocamos los componentes o las page q estaran en este modulo
    declarations: [
        HomePage
    ],
    // tambien lo exportamos para q demas modulos puedan usarlo
    exports:[
        HomePage
    ],
    // y necesitamos un import, es lo que nos indica que se pieda cargar por lazi loading
    imports:[
        IonicPageModule.forChild(HomePage)
    ]
})
export class HomePageModule{}