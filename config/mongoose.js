const mongoose  = require('mongoose');

//connect to MongoDB cloud URI
mongoose.connect(process.env.MONGO_URI);

//acquire the connection 
const db = mongoose.connection;

//if error
db.on("error", function(err){console.log(`Error in connecting to DB: ${err}`)});

//successfully conneted
db.once('open',()=>{
    console.log('Successfully connected to db');
});

//export
module.exports = db;



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/placement-cell');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// db.once('open', function(){
//     console.log('Connected to database :: MongoDB');
// });



// module.exports = db;