import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink, HttpLinkHandler} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {resolvers, typeDefs} from "./resolvers";
import {DocumentNode} from "graphql";

const uri = `${window.origin}/graphql`;
export function createApollo(httpLink: HttpLink): { typeDefs: DocumentNode; cache: InMemoryCache; resolvers: {}; link: HttpLinkHandler } {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache({addTypename: false}),
    typeDefs,
    resolvers
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
