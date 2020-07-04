import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EntitiesContainerComponent} from "./entities/containers";
import {EntityDetailComponent} from "./entity-detail/containers/entity-detail/entity-detail.component";

const routes: Route[] = [
  {
    path: 'entities/:id', component: EntityDetailComponent
  },
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
