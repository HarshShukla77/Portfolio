const mongoose = require("mongoose");
const dotenv= require("dotenv");
require("colors");
dotenv.config();
const connectDB = async ()=>{
        await mongoose.connect(process.env.MONGO_URL,{

        }).then(()=>{console.log("MongoDB connected".cyan.underline)}
    ).catch((err)=>{
        console.log(err.red.bold);
    });

}
module.exports = connectDB;