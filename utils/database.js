//import mongoose
const mongoose = require('mongoose')

//add a listener to check if database is connected
mongoose.connection.on('open', () => {
    console.log("Database is connected")
})

//our function that connects to the database
async function database(){
    try{
        //change connection url to your own
        await mongoose.connect("mongodb://localhost:27017", {dbName : "passReset"})
    }catch(err){
        console.log(err)
    }
}

module.exports = database