# **Partials**

In EJS (Embedded JavaScript), partials allow you to break down your views into smaller, reusable components. Partials are independent sections of a view that can be included in multiple views or used within a single view to enhance code organization and maintainability.

To use partials in EJS, follow these steps:

**Step 1: Create a partial file**
Create a separate EJS file for your partial component. For example, let's create a partial file named header.ejs in your views directory:

~~~html
<!-- header.ejs -->
<header>
    <h1>Website Header</h1>
    <!-- Other header content -->
</header>
~~~

**Step 2: Include the partial in a view**
To include the partial in a view, use the <%- include %> directive in your main view file. For example, let's include the header.ejs partial in a view file named index.ejs:

~~~HTML
<!-- index.ejs -->
<html>
<head>
    <title>My Website</title>
    <!-- Other head content -->
</head>
<body>
    <%- include('header') %>
    <h2>Welcome to my website!</h2>
    <!-- Other content -->
</body>
</html>
~~~

In this example, the ```<%- include('header') %>``` directive is used to include the header.ejs partial in the index.ejs view file. The content of the ```header.ejs``` partial will be rendered in place at the location of the include directive.

**Step 3: Render the view**
Render the view using your preferred method. For instance, if you are using Express framework, you can render the view using ```res.render()```:

~~~js
app.get('/', function(req, res) {
    res.render('index');
});
~~~

When the index.ejs view is rendered, the header.ejs partial will be included and rendered within the main view.

You can create multiple partials and include them in different views as needed. The use of partials allows you to create modular components for headers, footers, sidebars, or any other reusable sections of your views.

Note: Make sure that the path provided in the include() directive matches the actual location and name of your partial file. Adjust the file paths and names as per your project structure.

By using partials, you can easily maintain and update common sections of your views across your application without duplicating code.


