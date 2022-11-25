// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { response } = require("express");
const path =require('path');
const { dirname } = require("path");
var app = express();
const port=8080;
//make empty object
details = {};

//body-parser on express
//these lines from expressjs.com
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//cors permission access

app.use(cors());
//make exress.js go to project folder
app.use(express.static(path.join(__dirname,'..','website')));


//make node server.js
app.listen(port, (req,res)=> {
    
    console.log(`Server listening on PORT: http://localhost:${port}`);
  });


// // Callback function to complete GET '/all'
// app.get('/getAll',(req,res)=>{
//     // console.log('getting data is fine');
//     res.send(details).status(200).end();
// });
// response.send

// //post data
// app.post('postData',(req,res)=>{
//     console.log('posting data is fine');

// details={
//     temp:request.body.temp,
//     data:request.body.date,
//     content:request.body.content

// };
// response.send(details).status(200).end();

// });