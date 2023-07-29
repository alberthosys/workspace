import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentacionRoutingModule } from './documentacion-routing.module';
import { DocumentacionComponent } from './documentacion.component';


@NgModule({
  declarations: [
    DocumentacionComponent
  ],
  imports: [
    CommonModule,
    DocumentacionRoutingModule
  ]
})
export class DocumentacionModule { }
