const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const Joi = require('joi');

const app = express();

const hostname = 'localhost';
const port = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const courses = [
    { id: 1, name : "course 1" },
    { id: 2, name : "course 2" },
    { id: 3, name : "course 3" },
    { id: 4, name : "course 4" } 
]

// to get all the courses
app.get('/api/courses', (req, res)=>
{    
    res.send(courses);
})

// to get single course
app.get('/api/courses/:id', (req, res)=>
{    
    const course = courses.find((course)=> course.id === parseInt(req.params.id) );    
    if(!course)
    {
        return res.status(404).send('Course not found');
    }
    res.send(course);
})

// to add a course
app.post('/api/courses', (req, res)=>
{    
    const schema = Joi.object({ name: Joi.string().min(3).required() });
    const result = schema.validate(req.body);

    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {id: courses.length + 1, name: req.body.name };
    courses.push(course);
    res.send(course);

})

// to update a course
app.put('/api/courses/:id', (req, res)=>
{    
    const course = courses.find((course)=> course.id === parseInt(req.params.id) );    
    if(!course)
    {
        return res.status(404).send('Course not found');
    }

    const schema = Joi.object({ name: Joi.string().min(3).required() });
    const result = schema.validate(req.body);

    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);
})


// to delete a course
app.delete('/api/courses/:id', (req, res)=>
{
    const course = courses.find((course)=> course.id === parseInt(req.params.id) );    
    if(!course)
    {
        return res.status(404).send('Course not found');
    }

    const index = course.indexOf(course);
    courses.slice(index, 1);
    res.send(course);
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