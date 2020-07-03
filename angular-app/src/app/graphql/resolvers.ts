import gql from 'graphql-tag';
import {ApolloClient, Resolvers} from 'apollo-client';

export const typeDefs = gql`
    extend type Query {
        searchParams: SearchParams
    }

    type Mutation {
        updateSearchParams(text: String, type: String): SearchParams
    }

    type SearchParams {
        text: String
        type: String
    }
`;

type ResolverFn = (
  parent: any,
  args: any,
  {cache}: { cache: ApolloClient<any> }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface AppResolvers extends Resolvers {
  Mutation: ResolverMap;
}


export const resolvers: AppResolvers = {
  Mutation: {
    updateSearchParams: (parent, args, {cache}) => {
      console.log('test');

      cache.writeData({data: {searchParams: {...args}}});

      return {searchParams: {...args}};
    },
  }
};


