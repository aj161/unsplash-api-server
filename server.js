"use strict";
// DRY code

const express = require("express");
require("dotenv").config();
const cors = require('cors');//npm i cors

const app = express();
const PORT = process.env.PORT;
app.use(cors()); // everyone

// Handlers
const notfoundhandler = require('./modules/notFound');
const searchhandler = require('./modules/search');
const errorHandler = require('./handlers/500');
const notFoundHandler = require('./handlers/404')

// Middlewares
const loggerMiddleware = require('./middlewares/logger');
const validator = require('./middlewares/validate')

app.use(loggerMiddleware);

// Endpoints (routes)
app.get("/", homehandler);
app.get("/searchimage",validator,searchhandler.searchhandler);
app.get("/randomimage",searchhandler.randomhandler);
app.get("*", notFoundHandler);
app.use(errorHandler);


// endpoint handlers
function homehandler(req, res) {
  res.status(200).send("Im alive horraay");
}

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});