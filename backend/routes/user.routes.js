const express = require("express")
const bcrypt = require('bcrypt');
const { UserModel } = require("../model/user.model");
var jwt = require('jsonwebtoken');
const userRouter = express.Router();


userRouter.use(express.json())

// user registration route 
userRouter.post("/register", async (req, res) => {
    const userData = req.body;
    // console.log("🚀 ~ file: user.routes.js:12 ~ userRouter.post ~ userData:", userData)
    try {
        const alreadyPresent = await UserModel.findOne({ email: userData.email }); {

        }
        if (!alreadyPresent) {
            bcrypt.hash(userData.password, 4).then(async function (hash) {
                userData.password = hash;
                const user = await UserModel(userData)
                user.save();
            });
            res.status(200).send({ msg: "User registered Successfully", alreadyRegistered: false })
        }
        else {
            res.status(200).send({ msg: "User already registered", alreadyRegistered: true })

        }
    } catch (error) {
        console.log(error.message)
    }
})





module.exports = {
    userRouter
}