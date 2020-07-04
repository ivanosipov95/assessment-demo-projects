import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkHandler, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {resolvers} from "./resolvers";
import {DocumentNode} from "graphql";
import {typeDefs} from "./type-defs";

const uri = `${window.origin}/graphql`;

export function createApollo(httpLink: HttpLink): { typeDefs: DocumentNode; cache: InMemoryCache; resolvers: {}; link: HttpLinkHandler } {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache({
      addTypename: false,
      cacheRedirects: { // cache example
        Query: {
          book: (_, args, {cache, getCacheKey}) => getCacheKey({__typename: 'Book', id: args.id}),
        }
      }
    }),
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
