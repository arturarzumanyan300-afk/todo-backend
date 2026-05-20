const mongoose=require('mongoose')
async function connectDb(){
    try{
        await mongoose.connect('mongodb+srv://test:artur@cluster0.ohfrjsn.mongodb.net/Todo')
        console.log('MongoDB connected')
    }catch(err){console.log('DB error',err)}
}
module.exports=connectDb