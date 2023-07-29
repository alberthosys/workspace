import {Component} from '@angular/core';
import {Submenu} from "./models/submenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospital';
  subMenu: Submenu[] = SUB_MENU;
}

export const SUB_MENU: Submenu[] = [
  {
    nombre: 'Contabilidad',
    url: 'contabilidad',
  },
  {
    nombre: 'Recursos',
    url: 'recursos',
  }
];
