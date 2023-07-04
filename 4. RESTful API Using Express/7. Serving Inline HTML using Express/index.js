const express = require('express');
const hostname = 'localhost';
const port = 8000;

const app = express();

app.all('*', (req, res)=>
{
    res.send('<h1>Home Page</h1>');
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