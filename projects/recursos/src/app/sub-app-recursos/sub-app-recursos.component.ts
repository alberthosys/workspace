import {Component, OnInit} from '@angular/core';
import {Submenu} from "../../../../../src/app/models/submenu";

@Component({
  selector: 'app-sub-app-recursos',
  templateUrl: './sub-app-recursos.component.html',
  styleUrls: ['./sub-app-recursos.component.scss']
})
export class SubAppRecursosComponent {
  subMenu: Submenu[] = SUB_MENU;
}

export const SUB_MENU: Submenu[] = [
  {
    nombre: 'Personal',
    url: 'personal',
  },
  {
    nombre: 'Documentación',
    url: 'documentacion',
  },
  {
    nombre: 'Pacientes',
    url: 'pacientes',
  }
];
