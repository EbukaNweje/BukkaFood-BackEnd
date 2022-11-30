const User = require("../models/User")
const bcrypt = require("bcrypt");
const createError = require("../utilities/error");
const jwt = require("jsonwebtoken")

exports.CreateAdmin = async (req, res, next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newAdmin = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })

        res.status(201).send("Admin Created Successfuylly")
    }catch (err) {
        next(err)
    }
}

exports.LoginAdmiin = async (req, res, next)=>{
    try{
        const newAdminLog = await User.findOne({email: req.body.email})
        if(!newAdminLog) return next(createError(404, "User not found!"))
        // console.log(Student.password)
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, newAdminLog.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong password or username"))
        
        const token = jwt.sign({id:newAdminLog._id, isAdmin:newAdminLog.isAdmin}, process.env.JWT)
        // console.log(token)

        const {password, isAdmin, ...otherDetails} = newAdminLog._doc

         res.cookie("access_token", token, {
            httpOnly: true, 
         }).status(200).json({...otherDetails, message: "Loing Successfully"})
    }catch(err){
        next(err)
    }
}