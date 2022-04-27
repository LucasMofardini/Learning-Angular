import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ListComponent } from './shared/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
