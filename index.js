const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');





// parse the incoming URL encoded http req with body-parser
app.use(bodyParser.urlencoded({extended: false}));

// convert to json formet
app.use(bodyParser.json());

// parse the incoming req cookies for use
app.use(cookieParser());




// setup the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');