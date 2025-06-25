const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_admin_SECRET} = require("../config");
const bcrypt = require("bcrypt");
const { z } = require ("zod");
const { adminMiddleware }  = require("../middlewares/admin");
const admin = require("../middlewares/admin");


adminRouter.post("/signup" , async function(req,res){
    const { email , password , firstName , lastName } = req.body;

    await adminModel.create({
            email: email,
            password: password,
            firstName: firstName, 
            lastName: lastName,
    })

    res.json({
        message : "you are signed up"
    })
});

adminRouter.post("/signin" , async function(req,res){
   const { email , password } = req.body;

   const admin = await adminModel.findOne({
    email,password
   })

   if(admin){
    const token = jwt.sign({id : admin._id} , JWT_admin_SECRET);

    res.json({
        token : token
    })
   }else{
    res.status(403).json({
        message : "Invalid credentials"
    })
   }
});

adminRouter.post("/course" ,adminMiddleware ,async function(req,res){
    const adminId = req.userId;

    const {title , description , imageUrl , price } = req.body;

    const course = await courseModel.create({
        title , description , imageUrl , price , adminId
    })

    res.json({
        message : "Welcome to Courses , you can CRUD courses"
    })
}); 

adminRouter.put("/course" ,adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title, description, imageUrl, price, courseId} = req.body;

    await adminModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, 
    {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
});

adminRouter.get("/course/bulk" ,adminMiddleware, async function(req,res){
    const adminId= req.userId;
    const course = await adminModel.find({
        creatorId : adminId
    })
    res.json({
        message : "Course updated",
        courseId : course._id
    })
});

module.exports = {
    adminRouter : adminRouter
}