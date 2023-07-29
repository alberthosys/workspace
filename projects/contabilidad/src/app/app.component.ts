import {Component} from '@angular/core';
import {Submenu} from "../../../../src/app/models/submenu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contabilidad';
  subMenu: Submenu[] = SUB_MENU;
}

export const SUB_MENU: Submenu[] = [
  {
    nombre: 'Finanzas',
    url: 'finanzas',
  },
  {
    nombre: 'Nomina',
    url: 'nomina',
  }
];
