const {Router} = require("express");

const courseRouter = Router();
const {courseModel} = require("../db");

courseRouter.post("/purchase" , async function(req,res){
    const userid = req. userId;
    const courseld = req. body.courseId;
    await purchaseModel. create({
    userId,
    courseld})
    res. json ({
    message: "You have successfully bought the course"
    })
});

courseRouter.get("/preview" , async function(req,res){
    const courses = await courseModel.find({});

    res.json({
        courses
    })
});

module.exports = {
    courseRouter :courseRouter
}