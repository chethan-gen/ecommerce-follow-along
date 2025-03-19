const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://rekhansikagoluguri07:radh%40krishna_123@cluster0.zk6ur.mongodb.net/")

    }catch(error){
        console.log("Mongo bd error",error);
    }
    
}

module.exports = connect;