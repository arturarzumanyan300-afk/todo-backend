const express=require('express')
const app=express()
app.use(express.json())

const testRoutes=require('./routes/testRouter')
app.use('/',testRoutes)

const authRoutes=require('./routes/authRoutes')
app.use('/auth',authRoutes)

const userRoutes=require('./routes/userRoutes')
app.use('/users',userRoutes)

const todoRoutes=require('./routes/todoRoutes')
app.use('/todos',todoRoutes)

module.exports=app