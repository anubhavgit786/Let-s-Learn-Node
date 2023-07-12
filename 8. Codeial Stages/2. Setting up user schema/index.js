const debug = require('debug')('app:startup');

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const config = require('config');
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const helmet = require('helmet');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const db = require('./config/mongoose');

const hostname = 'localhost';
const port = process.env.PORT || 8000;

//signifies middleware : static files
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/index'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('assets'));
app.use(helmet());

//console.log(`Application Name: ${config.get('name')}`);
//console.log(`Mail Server: ${config.get('mail.host')}`);


if(app.get('env') === 'development')
{
    app.use(morgan("dev"));
    debug('Morgan enabled...');
}



//start the server
app.listen(port,hostname, function(err)
{
    if(err)
    {
        console.log(err);
        return; 
    }

    console.log(`Server is up and running at http://${hostname}:${port}`);
});