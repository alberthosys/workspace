import {Component, Input, OnInit} from '@angular/core';
import {Submenu} from "../models/submenu";

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() subMenu: Submenu[] = [];
  @Input() label: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}


