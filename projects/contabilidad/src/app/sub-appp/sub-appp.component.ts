import {Component} from '@angular/core';
import {Submenu} from "../../../../../src/app/models/submenu";

@Component({
  selector: 'app-sub-appp',
  templateUrl: './sub-appp.component.html',
  styleUrls: ['./sub-appp.component.scss']
})
export class SubApppComponent {
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
