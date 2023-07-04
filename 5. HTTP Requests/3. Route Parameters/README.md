# **Query Parameters**

The query parameter is the variable whose value is passed in the URL in the form of key-value pair at the end of the URL after a question mark (?). For example, 

~~~js
http://localhost:8000/?page=2&limit=3
~~~

where 'page' and 'limit' are the keys of query parameter whose values are 2 and 3 respectively .

~~~js
app.get('/', (req, res)=>
{
  const page = req.query.page;
  const limit = req.query.limit;
  console.log(page, limit);
})
~~~

# **String Parameters or Route Parameters**

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

For example, 

~~~js
http://localhost:8000/api/courses/:id
~~~

~~~js
app.get('/api/courses/:id', (req, res)=>
{
  const id = req.params.id;
  console.log(id);
})
~~~

