const User=require('../models/user')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    try{
        const{email,password}=req.body
        const hashed=await bcrypt.hash(password,10)
        const user=await User.create(
            {email,
                password:hashed}
        )
        res.json(user)
    }catch(err){
        res.status(500).json(err.message)
    }
}

exports.login=async(req,res)=>{
    try{
        const{email,password}=req.body
        const user=await User.findOne({email})
        if(!user)return res.status(400).json("User not found")
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch)return res.status(400).json('Wrong password')
         const token=jwt.sign(
        {id:user._id},
        "secret",
        {expiresIn:'1h'}
        )
        res.json(token)
    }catch(err){res.status(500).json(err.message)}
}