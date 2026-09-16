
// here we use the http module to create a server in Nodejs.
//  The http module is a core module in Nodejs 
//  that allows us to create an HTTP server and handle HTTP requests and responses.
const Server = require("http");
Server.createServer((request,response)=>{

    response.write("Hello, World! i am learning Nodejs");
    // after respone it is mandotory to end the response otherwise it will keep on 
    // loading and will not send the response to the client.
    response.end(); 

}).listen(5000); 