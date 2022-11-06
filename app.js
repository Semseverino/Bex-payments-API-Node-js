const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/default')
const morgan = require('morgan');
const helmet = require('helmet');
const axios = require('axios');
const http = require('http')
const request = require('request')
const database = require('./database');

const usersRoutes = require('./routes/routes');
const cors = require('cors')

const app = express();
const PORT = config.app.port;
const ENV = process.env.NODE_ENV;
const CORS_ENV = process.env.CORS;

app.set('env', ENV)
app.use(helmet());
app.use(cors({ origin: CORS_ENV || '*' }));
app.use(bodyParser.json());

app.use(config.bex.host, usersRoutes);

app.database = database;
app.logger


app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));