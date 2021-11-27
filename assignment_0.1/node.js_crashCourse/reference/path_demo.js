const path = require("path");

//base file name
console.log(path.basename(__filename));
/*path_demo.js */
// directory name
console.log(path.dirname(__filename));
/*D:\coding\assignment_0.1\node.js_crashCourse\reference */
// file extension
console.log(path.extname(__filename));
/*.js */

//create path object
console.log(path.parse(__filename));
/*{
  root: 'D:\\',
  dir: 'D:\\coding\\assignment_0.1\\node.js_crashCourse\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
} */

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
/* D:\coding\assignment_0.1\node.js_crashCourse\reference\test\hello.html */
