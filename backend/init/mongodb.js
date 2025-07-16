const mongoose = require("mongoose")
const {connectionUrl} = require("../config/keys")


const connectMongoDb = async ()=> {
    try {
        await mongoose.connect(connectionUrl)
        console.log("Database Connection successful")
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectMongoDb