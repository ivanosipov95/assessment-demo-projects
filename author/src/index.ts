import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";
import {authors} from "./data";

const express = require('express');
const app = new express();

app.use((req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    next();
});

app.get('/api/authors/:id', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(authors.find(a => a.id === req.params.id))
});

app.get('/api/authors', (req: Request, resp: Response<any>, next: NextFunction) => {
    if (!req.query.text) {
        return resp.json(authors);
    }

    const authorsFilteredByName = authors.filter(b => b.name.includes(req.query.text as string));

    resp.json(authorsFilteredByName);
});

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
