const express = require('express');
const helmet = require('helmet')

const hostname = 'localhost';
const port = 8000;

const app = express();

app.use(helmet());

app.all('*', (req, res)=>
{
    res.json({ greetings : 'Hello, Buddy' });
    //Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted 
    //to a JSON string using JSON.stringify(). The parameter can be any JSON type, including 
    //object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
})

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