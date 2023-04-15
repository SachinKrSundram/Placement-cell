const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport');
const mongoStore = require('connect-mongo');
//create session
const session = require('express-session');
const MongoStore = require('connect-mongo');





// parse the incoming URL encoded http req with body-parser
app.use(bodyParser.urlencoded({extended: false}));

// convert to json formet
app.use(bodyParser.json());

// parse the incoming req cookies for use
app.use(cookieParser());




// setup the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');



// store session in db using mongoStore
app.use(
    session({
        name: "placement-cell-web-app",
        // secret to be same as cookie-parser, althrough cookie parser not necessary
        secrert: process.env.EXPRESS_SESSION_SECRET,
        //don't create session until something stored
        saveUnintialized: false,
        // don't save session if unmodified
        resave: false,
        cookie:{
            maxAge: 1000*60*60 // time in milliseconds
        },
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            autoRemove: 'disabled'
        }),function(err){
            if(err) console.log('Error in creating mongo setup for session cookies');
            else console.log('connected to mongo for session cookie storage');

        }
    })
);


// middleware to use passport with express
app.use(passport.saveUnintialize());
//needed to use express session with passport
app.use(passport.session());


// set authenticated user in the resspose
app.use('/', require('./routes'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error in starting server: ${err}`);
        return;
    }
    else{
        console.log(`Server sucessfully listening at port ${PORT}`);
    }
})