import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EntityDetailComponent} from "./containers/entity-detail/entity-detail.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EntityDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    EntityDetailComponent
  ]
})
export class EntityDetailModule {
}
