import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {EntitiesContainerComponent} from "./containers";
import {SearchComponent} from "./particles";
import {FormsModule} from "@angular/forms";
import { EntityCardComponent } from './particles/entity-card/entity-card.component';
import {ApolloModule} from "apollo-angular";


@NgModule({
  declarations: [
    EntitiesContainerComponent,
    SearchComponent,
    EntityCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApolloModule,
  ],
  providers: [],
  exports: [
  ]
})
export class EntitiesModule {
}
