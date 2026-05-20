const router=require('express').Router()
router.get('/',(req,res)=>{
    res.send('API WORKS')
})
module.exports=router