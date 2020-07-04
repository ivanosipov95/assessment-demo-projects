import {ApolloClient, Resolvers} from 'apollo-client';

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
      cache.writeData({data: {searchParams: {...args}}});

      return {searchParams: {...args}};
    },
  }
};


