import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";
import {shops} from "./data";

const express = require('express');
const app = new express();

app.use((req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    next();
});

app.get('/api/shops/:id', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(shops.find(s => s.id === req.params.id))
})

app.get('/api/shops', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(shops)
})

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
