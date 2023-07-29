import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubAppRecursosComponent} from "./sub-app-recursos.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recursos',
    pathMatch: 'full',
  },
  {
    path: 'recursos',
    component: SubAppRecursosComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../personal/personal.module').then(m => m.PersonalModule)
      },
      {
        path: 'personal',
        loadChildren: () => import('./../personal/personal.module').then(m => m.PersonalModule)
      },
      {
        path: 'documentacion',
        loadChildren: () => import('./../documentacion/documentacion.module').then(m => m.DocumentacionModule)
      },
      {
        path: 'pacientes',
        loadChildren: () => import('./../pacientes/pacientes.module').then(m => m.PacientesModule),
        data: {preload: true}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAppRecursosRoutingModule {
}
