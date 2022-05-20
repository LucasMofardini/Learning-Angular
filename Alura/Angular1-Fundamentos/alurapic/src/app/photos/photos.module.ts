import { NgModule } from "@angular/core";
import { PhotoModule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { DarkOnHoverModule } from "../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    // Está privado dentro do modulo
    // Mas são visiveis para os components declarados aqui
    // declarations: [
        
    // ],
    // Está acessivel por quem acessar o módulo
    // exports: [
    // ],
    imports:[
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]

})
export class PhotosModule{}