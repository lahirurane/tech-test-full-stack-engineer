const express = require('express');
const bodyParser = require('body-parser');

const capsuleRoute = require('./routes/api/space');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set API routes
app.use('/api/', capsuleRoute);

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);
