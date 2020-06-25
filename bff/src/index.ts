const { ApolloServer, gql } = require('apollo-server');

import {envConfig} from "./config/env-config";

// The GraphQL schema
const typeDefs = gql`
    type Query {
        "A simple type for getting started!"
        hello: String
    }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(envConfig.port).then(() => {
    console.log(`${envConfig.serviceName} server is started`);
});
