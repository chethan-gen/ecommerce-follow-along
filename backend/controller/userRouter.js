const express = require("express");

const userRouter = express.Router();
const bcrypt = require("bcrypt.js");

const uploaduserImage = require("../middlewares/multer");

const {userModel} = require("../models/userModel");

userRouter.post("/signup",uploaduserImage.single("image"),async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        if(name!="" || email!="" || password!=""){
            return res.status(400).send({msg:"All fields are required"});
        }

        const user = await userModel.findOne({email:email});
        if(user){
            return res.status(200).send({msg:"user already exists"});
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await userModel.insertOne({name,email,password:hash});

        return res.status(200).send({msg:"User registered successfully"});


    } catch (error) {
        return res.status(500).send({msg:"Something went wrong",error});
    }

})

userModel.post("/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(email!="" || password!=""){
            return res.status(400).send({msg:"All fields are required"});
        }
       
        const user = await userModel.findOne({email});
        const matchedPass = bcrypt.compareSync(password, hash);
        if(user && matchedPass){
            return res.status(200).send({msg:"User logged in successfully"});
        }
        return res.status(401).send({msg:"Entered details are wrong"});
        

        
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong",error});
    }
})


module.exports = userRouter;