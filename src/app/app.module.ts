import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubmenuModule} from "./submenu/submenu.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
