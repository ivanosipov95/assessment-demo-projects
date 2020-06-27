import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";
import {referenceData} from "./data";

const express = require('express');
const app = new express();

app.use((req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    next();
});

app.get('/api/reference-data/:code', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(referenceData.find(r => r.code === req.params.code))
})

app.get('/api/reference-data', (req: Request, resp: Response<any>, next: NextFunction) => {
    resp.json(referenceData)
})

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
