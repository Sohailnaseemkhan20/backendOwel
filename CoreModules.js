// there are two types of modules in Nodejs 1) global modules 2) Non global modules.
//  Global modules are those which are available throughout the application 
// without the need to import them explicitly.
// Non-global modules, on the other hand, 
// need to be imported using the require() function before they can be used in the application.

const Myfile = require("fs")
console.log("Core modules js file is loaded successfully");
Myfile.writeFileSync("myfile.txt", "Hello, World!");