// this works as a backend of a website
// use command to emulate api endpoints in localhost: firebase emulators:start

// first get the necessary functions like importing from packages
const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQ4R4LeWQ111Js3StGxFyD6KjmaVydkt6w3UbYm31Yufxlnzb6vo2YbUwS36jEELo686fVaIKb3RmEhkw2IO8c400K6tf0Vxx')


// API

// ~App config(configures goes here)
const app = express();

// ~Middlewares
app.use(cors({ origin: true })); //security staffs
app.use(express.json());

// ~API routes
// lets test some api routes
app.get('/', (request, response) => response.status(200).send(('hello world')));
// here get is the method,request is the incoming data, response is the data that we send with some codes
//just like laravel (request and response) works justl like a controller MVC 

// ~listen command
exports.api = functions.https.onRequest(app);


