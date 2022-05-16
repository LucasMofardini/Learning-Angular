import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoListComponent } from "./photo-list/photo-list.component";
import { PhotoComponent } from "./photo/photo.component";
import { PhotoFormComponent } from "./photo-form/photo-form.component";
import { PhotosComponent } from "./photo-list/photos/photos.component";
import { filterByDescription } from "./photo-list/filter-by-description.pipe";
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    // Está privado dentro do modulo
    // Mas são visiveis para os components declarados aqui
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        filterByDescription,
        LoadButtonComponent
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