const mongoose = require('mongoose');

//connect to MongoDB cloud URI
mongoose.connect(process.env.MONGO_URI);

//acquire the connection
const db = mongoose.connection;

//if error
db.on("error", function(err){console.log(`Enter in connecting to DB: ${err}`)});

//sucessfully connected
db.once('open', ()=>{
    console.log('Sucessfully connected to db');
});


module.exports = db;