const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://chaithuregala123:zJ0utnKEpdAFd8cX@cluster0.bbpdzkx.mongodb.net/")

    }catch(error){
        console.log("Mongo bd error",error);
    }
    
}

module.exports = connect;