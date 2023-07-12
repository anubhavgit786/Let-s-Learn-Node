const debug = require('debug')('app:startup');

const dotenv = require('dotenv');
dotenv.config();

const config = require('config');
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const path = require('path');
const hostname = 'localhost';
const port = process.env.PORT || 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


//signifies middleware : parser
app.use(express.urlencoded());
app.use(cookieParser());

//signifies middleware : static files
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');






//start the server
app.listen(port,hostname, function(err){
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(`Server is up and running at http://${hostname}:${port}`);
});