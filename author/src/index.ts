import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";
import {authors} from "./data";

const express = require('express');
const app = new express();

app.use((req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    next();
});;

app.get('/api/authors/:id', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(authors.find(a => a.id === req.params.id))
});

app.get('/api/authors', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(authors)
});

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
