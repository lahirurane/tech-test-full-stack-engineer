const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const capsuleRoute = require('./routes/api/space');

const app = express();
//set cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set API routes
app.use('/api/', capsuleRoute);

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);
