import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";
import {books} from "./data";

const express = require('express');
const app = new express();


app.get('/api/books/:id', (req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    resp.json(books.find(b => b.id === req.params.id))
})

app.get('/api/books', (req: Request, resp: Response<any>, next: NextFunction) => {
    console.log(`${req.url} is handled`);
    resp.json(books)
})

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
