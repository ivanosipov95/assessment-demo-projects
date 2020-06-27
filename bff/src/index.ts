import {envConfig} from "./config/env-config";
import {typeDefs, resolvers} from "./graphql";

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

app.use(server.getMiddleware());

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
