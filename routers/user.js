const {Router} = require("express");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const {userModel, purchaseModel} = require("../db");
const { userMiddleware } = require("../middlewares/user");

const {JWT_user_SECRET} = require("../config");;

userRouter.post("/signup" , async function(req,res){
    const { email, password, firstName, lastName } = req.body;

    await userModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    res.json({
        "message" : "signup successfull" 
    })
} );

userRouter.post("/signin" , async function(req,res){
    const { email , password } = req.body;

    const user  = await userModel.findOne({
        email ,
        password
    });

    if(user){
        token = jwt.sign({id : user._id} , JWT_user_SECRET);
        res.status(403).json({
            token : token
        });
    }else{
        res.json({
            message : "Invalid Credentials"
        })
    }

    res.json({
        "message" : "signin endpoint" 
    })
} );


userRouter.get("/purchases" ,userMiddleware, async function(req,res){
    const userId = req.userId;
    
    const purchases = await purchaseModel.find({
        userId,
    });
});

module.exports= {
    userRouter : userRouter
}