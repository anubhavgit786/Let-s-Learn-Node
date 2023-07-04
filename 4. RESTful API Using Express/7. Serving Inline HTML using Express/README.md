~~~js

const express = require('express');
const hostname = 'localhost';
const port = 8000;

const app = express();

app.all('*', (req, res)=>
{
    // Express handles the basic headers ( status code and mime-type)
    res.send('<h1>Home Page</h1>');
    //If one needs to respond with data, 
    //they should use either the res.send() method or the res.json() method.

    //Sends the HTTP response. The body parameter can be a Buffer object, a String, an object, Boolean, or an Array.
    
    // express handles the end function
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

~~~