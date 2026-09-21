//this is simple node js api which is created using core modules of node js
// here we are using the http module to create a server in Nodejs.
//  The http module is a core module in Nodejs
//  that allows us to create an HTTP server and handle HTTP requests and responses. 


const http = require("http");
const data = require("./employeData")
http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(data));
    response.end();
}).listen(3000);