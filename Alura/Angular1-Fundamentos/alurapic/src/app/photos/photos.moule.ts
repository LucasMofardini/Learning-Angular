import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    // Está privado dentro do modulo
    // Mas são visiveis para os components declarados aqui
    declarations: [
        PhotoComponent,
        PhotoListComponent
    ],
    // Está acessivel por quem acessar o módulo
    // exports: [
    // ],
    imports:[
        HttpClientModule,
        CommonModule
    ]

})
export class PhotosModule{}