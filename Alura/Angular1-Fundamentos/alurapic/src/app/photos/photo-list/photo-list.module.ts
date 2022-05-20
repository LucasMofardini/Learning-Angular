import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
import { PhotoModule } from "../photo/photo.module";
import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],
    // Pra funcionar precisa do imports
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkOnHoverModule

    ]
})
export class PhotoListModule {

}