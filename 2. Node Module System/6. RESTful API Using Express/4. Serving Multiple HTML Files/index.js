const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res)=>
{ 	
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
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

    fs.readFile(filepath, (err, data)=>
    {
        console.log('Path is : ',filepath);
        //console.log(data);
        if(err)
        {
            return res.end('<h1>Error</h1>');
        }

        return res.end(data);
    });
});

//start the server
server.listen(port,hostname, function(err)
{
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(`Server is up and running at http://${hostname}:${port}`);
});