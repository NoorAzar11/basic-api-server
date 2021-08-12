'use strict';

const express = require('express');
const notFoundHandler = require('./error-handler/404');
const errorHandler = require('./error-handler/500');
const logger = require('./middleware/logger');
const pplRoutes = require('./routes/food');

const app = express();
app.use(express.json()); 
app.use(logger);
app.use(pplRoutes);

function start(port) {
    app.listen(port, ()=> console.log(`Hello from the OtherSide : ${port}`))
}

app.get('/',(req,res)=>{
    res.send('Welcome To Home Page');
});


app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    app: app,
    start: start
}