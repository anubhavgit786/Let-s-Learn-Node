~~~js

const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res)=>
{ 	
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    let filepath;
    switch(req.url)
    {
        case '/':
            filepath = './index.html';
            break;

        case '/profile':
            filepath = './profile.html';
            break;
        
        default:
            filepath = './404.html';
    } 
    fs.readFile(filepath, (err, data)=>
    {
        console.log(filepath);
        console.log(data);
        
        if(err)
        {
            return res.end('<h1>Error</h1>');
        }

        // Here, data is in the form of buffer.
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

~~~
