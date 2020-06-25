import {envConfig} from "./config/env-config";
import {NextFunction, Request, Response} from "express";

const express = require('express');
const app = new express();

app.use('/', (req: Request, res: Response, next: NextFunction) => res.json({data: 'success'}));

app.listen(envConfig.port, () => console.log(`${envConfig.serviceName} server is started`));
