import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinanzasComponent} from "../finanzas/finanzas.component";
import {NominaComponent} from "../nomina/nomina.component";
import {SubApppComponent} from "./sub-appp.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contabilidad',
    pathMatch: 'full',
  },
  {
    path: 'contabilidad',
    component: SubApppComponent,
    children: [
      {
        path: '',
        component: FinanzasComponent,
      },
      {
        path: 'finanzas',
        component: FinanzasComponent,
      },
      {
        path: 'nomina',
        component: NominaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubApppRoutingModule {
}
