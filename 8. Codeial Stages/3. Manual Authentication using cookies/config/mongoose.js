const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anubhav:anubhav@cluster0.wfdajhs.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));
db.once('open', function()
{
    console.log('successfully connected to database');
});