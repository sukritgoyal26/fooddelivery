const express = require('express')
const router = express.Router()
const user = require("../models/users")
const {body , validationResult} = require('express-validator');

router.post("/Createuser" ,[body('email','enter a valid email').isEmail(),body('name').isLength({min:4}),body('password','Incorrect password length').isLength({min:5})], async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    try {
        await user.create({
            name : req.body.name,
            password :req.body.password,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
})

module.exports = router;