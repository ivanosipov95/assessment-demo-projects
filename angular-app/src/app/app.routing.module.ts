import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EntitiesContainerComponent} from "./entities/containers";

const routes: Route[] = [
  {
    path: 'entities',
    component: EntitiesContainerComponent
  },
  {
    path: '**',
    redirectTo: 'entities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
