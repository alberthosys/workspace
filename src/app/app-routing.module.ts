import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'first-landing',
    loadChildren: () => import('./../../projects/first-landing/src/app/app.module').then(m => m.AppModule),
  },
  {
    path: 'second-landing',
    loadChildren: () => import('./../../projects/second-landing/src/app/app.module').then(m => m.AppModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
