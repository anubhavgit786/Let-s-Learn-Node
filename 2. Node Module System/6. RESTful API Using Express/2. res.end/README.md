~~~js
const http = require('http');
const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res)=>
{
    console.log('The method is : ', req.method);
    console.log('URL is : ', req.url);
    console.log('Header is : ', req.headers)
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Gotcha!</h1>');
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