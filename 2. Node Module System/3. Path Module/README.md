# Path Module
Path module is a build in module in node js to work with files and directories. 

The ```path.resolve()``` method is used to resolve a sequence of path-segments to an absolute path. It works by processing the sequence of paths from right to left, prepending each of the paths until the absolute path is created. The resulting path is normalized and trailing slashes are removed as required. If no path segments are given as parameters, then the absolute path of the current working directory is used.

~~~js

// Import the path module
const path = require('path');
   
console.log("Current directory:", __dirname);
   
// Resolving 2 path-segments
// with the current directory
path1 = path.resolve("users/admin", "readme.md");
console.log(path1)
   
// Resolving 3 path-segments
// with the current directory
path2 = path.resolve("users", "admin", "readme.md");
console.log(path2)
   
// Treating of the first segment
// as root, ignoring the current directory
path3 = path.resolve("/users/admin", "readme.md");
console.log(path3)

// Normalization of the absolute paths
path4 = path.resolve("users", "..", "readme.md");
console.log(path4)
   
path5 = path.resolve("users", "admin", "..", "files", "readme.md");
console.log(path2)
   
path6 = path.resolve("users", "admin", "..", "files", "..", "readme.md");
console.log(path6)
~~~

Output will be: 

~~~
Current directory: G:\tutorials\nodejs-path-resolve
G:\tutorials\nodejs-path-resolve\users\admin\readme.md
G:\tutorials\nodejs-path-resolve\users\admin\readme.md
G:\users\admin\readme.md
G:\tutorials\nodejs-path-resolve\readme.md
G:\tutorials\nodejs-path-resolve\users\files\readme.md
G:\tutorials\nodejs-path-resolve\users\readme.md
~~~
