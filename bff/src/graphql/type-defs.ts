const { gql } = require('apollo-server-express');

export const typeDefs = gql`
    type Query {
        books: [Book!]!
        book(id: ID!): Book!
        authors: [Author!]!
        author(id: ID!): Author!
        shops: [Shop!]!
        shop(id: ID!): Shop!
        refsData: [ReferenceData!]!
        refData(code: String!): ReferenceData!
        entities(text: String, type: EntityType): [Entity]
    }
    
    type Mutation {
        book(id: ID!, name: String): Book!
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
        sign: String!
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
    
    enum EntityType {
        BOOK
        AUTHOR
        SHOP
        ALL
    }
`;
