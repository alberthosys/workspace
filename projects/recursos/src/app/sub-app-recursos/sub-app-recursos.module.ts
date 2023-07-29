import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubAppRecursosRoutingModule } from './sub-app-recursos-routing.module';
import { SubAppRecursosComponent } from './sub-app-recursos.component';
import {SubmenuModule} from "../../../../../src/app/submenu/submenu.module";


@NgModule({
  declarations: [
    SubAppRecursosComponent
  ],
  imports: [
    CommonModule,
    SubAppRecursosRoutingModule,
    SubmenuModule
  ]
})
export class SubAppRecursosModule { }
