'use strict';
const express = require('express');
const app = express();

// error handlers
const internServerERR = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
// Controllers
const homePage = require('./controllers/home.controller');
const person = require('./controllers/person.controller');
// middleWares
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
app.use(express.json());
app.use(logger);

// EndPoints
app.get('/',homePage );
app.get('/person', validator,person );

//call middlewares
app.use('*', notFound);
app.use(internServerERR);

const start = (port) =>{
  app.listen(port, () => console.log(`server starts on ${port}`));
};

module.exports = {
  app,
  start,
};