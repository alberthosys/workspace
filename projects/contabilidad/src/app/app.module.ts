import {ModuleWithProviders, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SubmenuModule} from "../../../../src/app/submenu/submenu.module";
import {FinanzasComponent} from './finanzas/finanzas.component';
import {NominaComponent} from './nomina/nomina.component';
import { SubApppComponent } from './sub-appp/sub-appp.component';
// Providers de manera compartida
const providers: any[] = [];

@NgModule({
  declarations: [
    AppComponent,
    FinanzasComponent,
    NominaComponent,
    SubApppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmenuModule
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule {
}

@NgModule({})
export class AppContabilidadModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers,
    }
  }
}
