const app=require('./app')
const connectDb=require('./db')

connectDb()
const PORT=process.env.PORT || 400
app.listen(PORT,()=>{
console.log('Server started on port 400')
})