import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GraphQLModule} from './graphql/graphql.module';
import {EntitiesModule} from "./entities/entities.module";
import {AppRoutingModule} from "./app.routing.module";
import {EntityDetailModule} from "./entity-detail/entity-detail.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    EntitiesModule,
    EntityDetailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
