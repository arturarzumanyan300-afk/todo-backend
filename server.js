const app=require('./app')
const connectDb=require('./db')

connectDb()
app.listen(400,()=>{
console.log('Server started on port 400')
})