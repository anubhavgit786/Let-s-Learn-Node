# HTTP Module
Node.js has a built-in module called HTTP  which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).

---

## ```res.writeHead()```

It takes two arguments. 
1. Status code.
2. An object that specifies the MIME type.

---

## ```res.end()```

This method ends the current response process. This method is used to quickly end the response without any data. 

---

Ater npm init we need to update package.json file as: 

~~~js
{
  "name": "8.-first-http-server-and-serving-response-to-browser",
  "version": "1.0.0",
  "description": "Demo of HTTP Module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
~~~
Now, we can run npm start command to start our application.

~~~js
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
~~~
----
