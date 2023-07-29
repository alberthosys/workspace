import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        SubmenuComponent
    ],
    exports: [
        SubmenuComponent
    ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class SubmenuModule { }
