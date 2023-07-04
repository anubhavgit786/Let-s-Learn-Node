const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8000;



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