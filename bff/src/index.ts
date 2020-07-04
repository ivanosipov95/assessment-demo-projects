import {envConfig} from "./config/env-config";
import {resolvers, typeDefs} from "./graphql";
import {NextFunction} from "express";

const responseCachePlugin = require('apollo-server-plugin-response-cache');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cacheControl: {
        defaultMaxAge: 5, // cache example
    },
    plugins: [responseCachePlugin()],
});

app.use((req: Request, resp: Response, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    next();
});
app.use(server.getMiddleware());

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
