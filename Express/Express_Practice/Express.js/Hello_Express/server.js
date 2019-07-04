// Hello_Express - server practice

// Load the express module and store it in the variable express
// invoke express and store the result in the variable app
// us app's get method and pass it the base route '/' and a callback
// for learning purposes, console.log the request and response objects to look at the what the objects contain
// use the response object's .send() method to respond with an h1
// tell the express app to listen on port 8000, always put this at the end of your server.js file

var express = require("express");
// console.log("Let's find out what express is:", express);

var app = express();
// console.log("Let's find out what the app is:", app);

app.get('/', function(request, response) {
    // console.log("The request object:", request);
    // console.log("The response object:", response);
    response.send("<h1>Hello Express</h1>");
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})