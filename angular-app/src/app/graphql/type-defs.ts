import gql from "graphql-tag";

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
