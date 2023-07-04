# Express

Express is a Fast, unopinionated, minimalist web framework for Node.js

## Web Applications
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## APIs 
Express is build on top of Node.js http module. So, with a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

## Performance
Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

## Frameworks
Many popular frameworks are based on Express.

---

## Framework 
Framework contains  lot of utilitiy functions and helper functions which makes our job easier in developing applications. 

---

## Express
We can summarize express in three parts. 

1. PART 1
    1. It helps in parse request, send response and render HTML easily. 
    2. It helps in extracting object from request.

2. Routing
    1. It helps in routing the request in efficient way. We can get away from inefficient if else structure.
    2. Filter and Validation: It helps in authentication and authorization of incoming requests. Also, it helps in filtering the incoming request. 

3. Managing Data
    1. HTTP is a stateless protocol. How can a server remember the consecutive request from the same user? So, express helps us to main tain the session for every user. 
    2. Express also helps us to work with the database. 

---

With the help of express, we can make sure that our code follows the best practice. 

---

~~~js

const express = require('express');

const app = express();

//start the server
app.listen(8000);

~~~