const User = require("../models/userModel")
const expressAsyncHandler = require("express-async-handler");

const userControl = expressAsyncHandler(async (req, res) => {
    const {fullName,email,message}= req.body;
    if(!fullName || !email){
        res.status(400).json({
            message:"please fill all the fields"
        })
    }
    const user = await User.create({
        fullName,
        email,
        message
    });

    if(user){
        res.status(200).json({
            message:"User created succesfully",
            user
        })
    }
    else{
            res.status(400);
            throw new Error("failed to create user");
        }

    
}
);

module.exports = {userControl}