# **Nodemon**

The nodemon Module is a module that develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any change in the original code and method of development.

## **Advantages of Using nodemon Module :**

1. It is easy to use and easy to get started.
2. It does not affect the original code and no instance require to call it.


## **Installation :** 

Install the module using the following command:

~~~js
npm install -g nodemon
~~~

~~~js
{
  "name": "5.-http-requests",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
~~~

In package.json file, we have to configure start like this.  

