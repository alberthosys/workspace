import {NgModule} from '@angular/core';
import {NoPreloading, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppContabilidadModule} from "../../projects/contabilidad/src/app/app.module";
import {AppRecursosModule} from "../../projects/recursos/src/app/app.module";
import {NetworkAwarePreloadStrategy} from "./preloading-strategy/network-aware-preloading-strategy";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../projects/contabilidad/src/app/app.module').then(m => m.AppContabilidadModule)
  },
  {
    path: 'contabilidad',
    loadChildren: () => import('../../projects/contabilidad/src/app/app.module').then(m => m.AppContabilidadModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      // preloadingStrategy: NoPreloading,
      preloadingStrategy: NetworkAwarePreloadStrategy
      // preloadingStrategy: NetworkAwarePreloadStrategy
    }),
    // DOCS: Se importan las rutas de otros proyectos
    AppContabilidadModule.forRoot(),
    AppRecursosModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
