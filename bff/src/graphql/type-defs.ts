const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        books: [Book!]!
        authors: [Author!]!
        shops: [Shop!]!
        refsData: [ReferenceData!]!
        book(id: ID!): Book!
    }
    
    type Book implements Entity {
        id: ID!
        name: String!
        author: Author!
        cost: Int!
        currency: ReferenceData!
    }
    
    type Author implements Entity {
        id: ID!
        name: String!
    }
    
    type ReferenceData implements Entity {
        id: ID!
        code: String!
        name: String!
    }
    
    type Shop implements Entity {
        id: ID!
        name: String!
        books: [Book!]!
    }
    
    interface Entity {
        id: ID!
        name: String!
    }
`;
