const express = require('express');
const app = express();
const path = require('path');
const hostname = 'localhost';
const port = 8000;

app.use((req, res, next)=>
{ 	
   
    let fileurl;
    switch(req.url)
    {
        case '/':
            fileurl = '/index.html';
            break;

        case '/profile':
            fileurl = '/profile.html';
            break;
        
        default:
            fileurl = '/404.html';
    }
    
    let filepath = path.resolve('./public' + fileurl);
    res.sendFile(filepath);
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