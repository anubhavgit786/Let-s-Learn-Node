const debug = require('debug')('app:startup');

const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const config = require('config');
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

const hostname = 'localhost';
const port = process.env.PORT || 8000;

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


const contacts = [
    { id: Date.now(), name: 'Iron Man', phone: '+91-90418-56978' },
    { id: Date.now(), name: 'Super Man', phone: '+91-90418-54578' },
    { id: Date.now(), name: 'Hulk', phone: '+91-90418-58592' }
]

// to get all the contacts
app.get('/', (req, res)=>
{    
    console.log(contacts);
    return res.render('index', { title: 'Contact List App', contacts });
})

// to add a contact
app.post('/create-contact', (req, res)=>
{   
    contacts.push({id: Date.now(), ...req.body });
    return res.redirect('back');
})

app.get('/delete-contact', (req, res)=>
{
    const id = req.query.id;
    const index = contacts.findIndex((contact)=> contact.id === parseInt(id));
    if(index !== -1)
    {    
        contacts.splice(index, 1);
    }
    return res.redirect('back');
});


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