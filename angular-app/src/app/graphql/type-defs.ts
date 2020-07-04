import gql from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        searchParams: SearchParams
    }

    extend type Mutation {
        updateSearchParams(text: String, type: String): SearchParams
    }

    type SearchParams {
        text: String
        type: String
    }
`;
