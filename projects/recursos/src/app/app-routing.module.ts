import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NetworkAwarePreloadStrategy} from "../../../../src/app/preloading-strategy/network-aware-preloading-strategy";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sub-app-recursos/sub-app-recursos.module').then(m => m.SubAppRecursosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NetworkAwarePreloadStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
