# Core Module: fs

We use this module to read from the file and write in the file. It has two versions:
1. Synchronous (Blocking)
2. Asynchronous (Non-Blocking)

In real world applications we should use asynchronous methods because these are non blocking methods. 

```js
const fs = require('fs');

fs.writeFileSync('names.txt', 'Mukund Gupta',  { encoding : 'utf-8' });

fs.writeFile('names1.txt', 'Anubhav Gupta',  { encoding : 'utf-8' }, (error)=>
{
    if(error)
    {
        console.log(`Error : ${error}`);
        return;
    }

    console.log('done');
})

// It returns the buffer
const names1 = fs.readFileSync('names.txt', { encoding : 'utf-8' });
console.log(names1);


fs.readFile('names1.txt', { encoding : 'utf-8' }, (error, data)=>
{
    if(error)
    {
        console.log(`Error : ${error}`);
        return;
    }
    console.log(data);
})

const files = fs.readdirSync('./');
console.log(files)


fs.readdirSync('./', { encoding : 'utf-8' }, (error, files)=>
{
    if(error)
    {
        console.log(`Error : ${error}`);
        return;
    }
    console.log(files);
})

```