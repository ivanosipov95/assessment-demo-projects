const express = require('express');
const app = new express();

import {envConfig} from "./config/env-config";

app.listen(envConfig.port, () =>console.log(`${envConfig.serviceName} server is started`));
