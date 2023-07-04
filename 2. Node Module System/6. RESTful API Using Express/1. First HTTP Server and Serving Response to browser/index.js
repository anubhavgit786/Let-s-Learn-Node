const http = require('http');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res)=>
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Home Page</h1>');
    res.end();
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