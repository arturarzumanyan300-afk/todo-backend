const router=require('express').Router()
const auth=require('../middleware/auth')

router.get('/profile',auth,(req,res)=>{
    res.json({
        message:'Profile data',
        userId:req.user.id
    })
})
module.exports=router